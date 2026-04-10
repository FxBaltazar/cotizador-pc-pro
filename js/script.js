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

  if(!productos){
    alert("❌ Productos no cargados");
    return;
  }

  let cpu = elegir(productos.cpu, presupuesto*0.25);

  let placa = productos.placas.find(p=>p.socket===cpu.socket) || productos.placas[0];

  let usarGPU = uso==="gaming";
  let gpu = usarGPU ? elegir(productos.gpu, presupuesto*0.3) : null;

  let ram = elegir(productos.ram, presupuesto*0.1);
  let nvme = elegir(productos.nvme, presupuesto*0.1);
  let fuente = elegir(productos.fuentes, presupuesto*0.1);

  let cooler = presupuesto>8000 
    ? elegir(productos.liquida, presupuesto*0.1) 
    : elegir(productos.aire, presupuesto*0.05);

  configActual = {cpu,placa,gpu,ram,nvme,fuente,cooler};

  recalcular();
  analizar();
  mostrar();
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
