let configActual = {};

// ================= ORDENAR =================
function ordenarPrecio(lista){
  return [...lista].sort((a,b)=>a.precio-b.precio);
}

// ================= UTIL =================
function elegir(lista, presupuesto){
  return lista.reduce((acc,item)=> item.precio<=presupuesto?item:acc, lista[0]);
}

// ================= USO =================
function ajustarPorUso(uso, presupuesto){
  if(uso==="gaming") return presupuesto;
  if(uso==="universidad") return presupuesto*0.8;
  if(uso==="oficina") return presupuesto*0.6;
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

  let presupuesto = ajustarPorUso(uso, dinero);

  generarConfig(presupuesto, uso);
}

// ================= GENERAR CONFIG =================
function generarConfig(presupuesto, uso){

  let cpu = elegir(productos.cpu, presupuesto*0.25);
  let placa = productos.placas.find(p=>p.socket===cpu.socket);

  let usarGPU = uso==="gaming";
  let gpu = usarGPU ? elegir(productos.gpu, presupuesto*0.3) : null;

  let ram = elegir(productos.ram, presupuesto*0.1);
  let nvme = elegir(productos.nvme, presupuesto*0.1);
  let fuente = elegir(productos.fuentes, presupuesto*0.1);

  let cooler = presupuesto>8000 
    ? elegir(productos.liquida, presupuesto*0.1) 
    : elegir(productos.aire, presupuesto*0.05);

  let total = cpu.precio + placa.precio + ram.precio + nvme.precio + fuente.precio + cooler.precio;
  if(gpu) total += gpu.precio;

  configActual = {cpu,placa,gpu,ram,nvme,fuente,cooler,total};

  mostrar();
}

// ================= MOSTRAR =================
function mostrar(){

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
    op.textContent = item.nombre + " - " + item.precio;
    select.appendChild(op);
  });
}

// ================= ONLOAD =================
window.onload = ()=>{

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

  if(cpu!=="") configActual.cpu = productos.cpu[cpu];
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

// ================= SUGERENCIAS =================
function analizar(){

  let c = configActual;
  let msg = "";
  let acciones = "";

  if(c.gpu && c.gpu.nivel>=4 && c.cpu.precio<2500){
    msg += "⚠️ CPU limita GPU<br>";

    let mejorCPU = productos.cpu.find(p=>p.precio>2500);

    if(mejorCPU){
      acciones += `
      🔧 Mejorar CPU → ${mejorCPU.nombre}
      <button onclick="aplicarSugerencia('cpu',${productos.cpu.indexOf(mejorCPU)})">Aplicar</button><br>
      `;
    }
  }

  if(c.cpu.precio>3000){
    msg += "❄️ CPU potente requiere líquida<br>";

    let mejorLiquida = productos.liquida[0];

    acciones += `
    🔧 Usar líquida → ${mejorLiquida.nombre}
    <button onclick="aplicarSugerencia('cooler',${productos.liquida.indexOf(mejorLiquida)})">Aplicar</button><br>
    `;
  }

  if(c.gpu && c.gpu.nivel>=4 && c.fuente.watts<700){
    msg += "⚡ Fuente insuficiente<br>";

    let mejorFuente = productos.fuentes.find(f=>f.watts>=750);

    acciones += `
    🔧 Subir fuente → ${mejorFuente.nombre}
    <button onclick="aplicarSugerencia('fuente',${productos.fuentes.indexOf(mejorFuente)})">Aplicar</button><br>
    `;
  }

  if(c.gpu && c.gpu.nivel>=4 && c.ram.capacidad<16){
    msg += "🧠 RAM insuficiente<br>";

    let mejorRAM = productos.ram.find(r=>r.capacidad>=16);

    acciones += `
    🔧 Subir RAM → ${mejorRAM.nombre}
    <button onclick="aplicarSugerencia('ram',${productos.ram.indexOf(mejorRAM)})">Aplicar</button><br>
    `;
  }

  let placaCorrecta = productos.placas.find(p=>p.socket===c.cpu.socket);

  if(placaCorrecta && placaCorrecta.nombre !== c.placa.nombre){
    msg += "🧩 Cambiar placa<br>";

    acciones += `
    🔧 Cambiar placa → ${placaCorrecta.nombre}
    <button onclick="aplicarSugerencia('placa',${productos.placas.indexOf(placaCorrecta)})">Aplicar</button><br>
    `;
  }

  document.getElementById("recomendaciones").innerHTML = msg;
  document.getElementById("acciones").innerHTML = acciones;
}

// ================= APLICAR SUGERENCIAS =================
function aplicarSugerencia(tipo, index){

  if(tipo==="cpu"){
    configActual.cpu = productos.cpu[index];
    configActual.placa = productos.placas.find(p=>p.socket===configActual.cpu.socket);
  }

  if(tipo==="gpu"){
    configActual.gpu = productos.gpu[index];
  }

  if(tipo==="ram"){
    configActual.ram = productos.ram[index];
  }

  if(tipo==="nvme"){
    configActual.nvme = productos.nvme[index];
  }

  if(tipo==="fuente"){
    configActual.fuente = productos.fuentes[index];
  }

  if(tipo==="cooler"){
    configActual.cooler = productos.liquida[index];
  }

  if(tipo==="placa"){
    configActual.placa = productos.placas[index];
  }

  recalcular();
  analizar();
  mostrar();
}