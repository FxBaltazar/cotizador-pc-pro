let configActual = {};

// ================= ORDENAR =================
function ordenarPrecio(lista){
  return [...lista].sort((a,b)=>a.precio-b.precio);
}

// ================= ELEGIR MEJOR OPCIÓN =================
function elegir(lista, presupuesto){
  let filtrados = lista.filter(item => item.precio <= presupuesto);
  return filtrados.length ? filtrados[filtrados.length - 1] : lista[0];
}

// ================= AJUSTE POR USO =================
function ajustarPorUso(uso, presupuesto){
  if(uso==="gaming") return presupuesto;
  if(uso==="universidad") return presupuesto*0.8;
  if(uso==="oficina") return presupuesto*0.6;
  return presupuesto;
}

// ================= COTIZAR =================
function cotizar(){

  let uso = document.getElementById("uso").value;
  let gama = document.getElementById("gama").value;

  let base = {baja:4000,media:8000,alta:14000}[gama];
  let presupuesto = ajustarPorUso(uso, base);

  generarConfig(presupuesto, uso);
}

function cotizarPresupuesto(){

  let uso = document.getElementById("uso").value;
  let dinero = parseInt(document.getElementById("presupuesto").value);

  if(!dinero || dinero <= 0){
    alert("⚠️ Ingresa un presupuesto válido");
    return;
  }

  let presupuesto = ajustarPorUso(uso, dinero);

  generarConfig(presupuesto, uso);
}

// ================= GENERAR CONFIG =================
function generarConfig(presupuesto, uso){

  let p = presupuesto;

  // 🎯 DISTRIBUCIÓN INTELIGENTE
  let dist = {
    gaming:     {cpu:0.25, gpu:0.40, ram:0.12, nvme:0.08, fuente:0.10, cooler:0.05},
    universidad:{cpu:0.35, gpu:0.15, ram:0.20, nvme:0.10, fuente:0.10, cooler:0.10},
    oficina:    {cpu:0.40, gpu:0.00, ram:0.20, nvme:0.15, fuente:0.15, cooler:0.10}
  };

  let d = dist[uso];

  // 🧠 CPU
  let cpu = elegir(productos.cpu, p*d.cpu);

  // 🧩 PLACA compatible SIEMPRE
  let placa = productos.placas.find(p=>p.socket===cpu.socket) || productos.placas[0];

  // 🎮 GPU (FILTRADA)
  let gpu = null;
  if(uso==="gaming"){
    let opcionesGPU = productos.gpu.filter(g => g.nivel >= 2); // mata GT 730 💀
    gpu = elegir(opcionesGPU, p*d.gpu);
  }

  // 🧠 RAM mínima inteligente
  let ramMin = uso==="gaming" ? 16 : 8;
  let opcionesRAM = productos.ram.filter(r => r.capacidad >= ramMin);
  let ram = elegir(opcionesRAM, p*d.ram);

  // ⚡ SSD mínimo
  let opcionesNVME = productos.nvme.filter(n => n.capacidad >= 500);
  let nvme = elegir(opcionesNVME, p*d.nvme);

  // 🔌 FUENTE segura
  let wattsMin = gpu ? 650 : 500;
  let opcionesFuente = productos.fuentes.filter(f => f.watts >= wattsMin);
  let fuente = elegir(opcionesFuente, p*d.fuente);

  // ❄️ COOLER lógico
  let cooler;
  if(cpu.precio > 2500){
    cooler = elegir(productos.liquida, p*d.cooler);
  } else {
    cooler = elegir(productos.aire, p*d.cooler);
  }

  configActual = {cpu,placa,gpu,ram,nvme,fuente,cooler};

  recalcular();
  optimizarRestante(presupuesto); // 🔥 NUEVO
  analizar();
  mostrar();
}
function optimizarRestante(presupuesto){

  let c = configActual;

  let restante = presupuesto - c.total;

  // 💡 si sobra dinero → mejora GPU primero
  if(c.gpu){
    let mejorGPU = productos.gpu
      .filter(g => g.precio > c.gpu.precio && g.precio <= c.gpu.precio + restante)
      .sort((a,b)=>b.nivel-a.nivel)[0];

    if(mejorGPU){
      c.gpu = mejorGPU;
      recalcular();
      return;
    }
  }

  // 💡 luego RAM
  let mejorRAM = productos.ram
    .filter(r => r.capacidad > c.ram.capacidad && r.precio <= c.ram.precio + restante)
    .sort((a,b)=>b.capacidad-a.capacidad)[0];

  if(mejorRAM){
    c.ram = mejorRAM;
    recalcular();
  }
}

// ================= MOSTRAR =================
function mostrar(){

  if(!configActual.cpu){
    document.getElementById("resultado").innerHTML = "⚠️ No hay configuración aún";
    return;
  }

  let c = configActual;

  document.getElementById("resultado").innerHTML = `
  🧠 ${c.cpu.nombre}<br>
  🧩 ${c.placa.nombre}<br>
  ${c.gpu ? "🎮 "+c.gpu.nombre : "🖥️ Integrada"}<br>
  🧠 ${c.ram.nombre}<br>
  ⚡ ${c.nvme.nombre}<br>
  🔌 ${c.fuente.nombre}<br>
  ❄️ ${c.cooler.nombre}<br><br>

  💰 TOTAL: ${c.total} Bs
  `;
}

// ================= SELECTORES =================
function cargarSelect(id, lista){
  let select = document.getElementById(id);
  select.innerHTML = `<option value="">Auto</option>`;

  lista.forEach((item,i)=>{
    let op = document.createElement("option");
    op.value = i;
    op.textContent = `${item.nombre} - ${item.precio} Bs`;
    select.appendChild(op);
  });
}

// ================= ONLOAD =================
window.onload = ()=>{

  if(!productos){
    alert("❌ Error: productos.js no cargó");
    return;
  }

  productos.cpu = ordenarPrecio(productos.cpu);
  productos.gpu = ordenarPrecio(productos.gpu);
  productos.ram = ordenarPrecio(productos.ram);
  productos.nvme = ordenarPrecio(productos.nvme);
  productos.fuentes = ordenarPrecio(productos.fuentes);

  cargarSelect("cpuManual", productos.cpu);
  cargarSelect("gpuManual", productos.gpu);
  cargarSelect("ramManual", productos.ram);
  cargarSelect("nvmeManual", productos.nvme);
  cargarSelect("fuenteManual", productos.fuentes);
};

// ================= CAMBIOS MANUALES =================
function aplicarCambios(){

  let cpu = document.getElementById("cpuManual").value;
  let gpu = document.getElementById("gpuManual").value;
  let ram = document.getElementById("ramManual").value;
  let nvme = document.getElementById("nvmeManual").value;
  let fuente = document.getElementById("fuenteManual").value;

  if(cpu!==""){
    configActual.cpu = productos.cpu[cpu];
    configActual.placa = productos.placas.find(p=>p.socket===configActual.cpu.socket);
  }

  if(gpu!=="") configActual.gpu = productos.gpu[gpu];
  if(ram!=="") configActual.ram = productos.ram[ram];
  if(nvme!=="") configActual.nvme = productos.nvme[nvme];
  if(fuente!=="") configActual.fuente = productos.fuentes[fuente];

  recalcular();
  analizar();
  mostrar();
}

// ================= RECALCULAR =================
function recalcular(){
  let c = configActual;

  c.total = c.cpu.precio + c.placa.precio + c.ram.precio + c.nvme.precio + c.fuente.precio + c.cooler.precio;

  if(c.gpu) c.total += c.gpu.precio;
}

// ================= ANALIZAR =================
function analizar(){

  let c = configActual;
  let msg = "";
  let acciones = "";

  if(c.gpu && c.gpu.nivel>=4 && c.cpu.precio<2500){
    msg += "⚠️ CPU limita GPU<br>";
  }

  if(c.cpu.precio>3000){
    msg += "❄️ CPU potente requiere líquida<br>";
  }

  if(c.gpu && c.gpu.nivel>=4 && c.fuente.watts<700){
    msg += "⚡ Fuente insuficiente<br>";
  }

  if(c.gpu && c.gpu.nivel>=4 && c.ram.capacidad<16){
    msg += "🧠 RAM insuficiente<br>";
  }

  document.getElementById("recomendaciones").innerHTML = msg || "✅ Configuración equilibrada";
  document.getElementById("acciones").innerHTML = acciones;
}
