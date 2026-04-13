// ================= DEBUG =================
console.log("Script cargado correctamente");

// ================= VARIABLES =================
let cotizaciones = [];
let sugerencias = [];
let alertas = [];
let buildsEditables = [];

// ================= UTIL =================
function elegir(arr){
  return arr && arr.length ? arr[0] : null;
}

// ================= BLOQUEO CPUs =================
const cpuBloqueados = ["Ultra 5 245KF","Ultra 5 245K","Ultra 5 245","9950X3D"];

// ================= PLATAFORMA REAL =================
function obtenerPlataforma(cpu){

  if(!cpu) return null;

  let nombre = cpu.nombre;

  if(cpuBloqueados.some(b => nombre.includes(b))) return "INVALIDO";

  if(nombre.includes("Intel")) return "LGA";

  if(/7\d{3}|8\d{3}|9\d{3}/.test(nombre)) return "AM5";
  if(/3\d{3}|4\d{3}|5\d{3}/.test(nombre)) return "AM4";

  return "AM4";
}

// ================= CPU =================
function elegirCPU(gama, uso){
  let lista = cpu.filter(c => c.gama === gama);
  return lista.filter(c => !cpuBloqueados.some(b => c.nombre.includes(b)));
}

// ================= PLACA =================
function elegirPlacas(cpuSel){

  let socket = obtenerPlataforma(cpuSel);
  if(socket === "INVALIDO") return [];

  return placa.filter(p => {
    if(socket === "AM4") return p.socket === "AM4";
    if(socket === "AM5") return p.socket === "AM5";
    if(socket === "LGA") return p.socket.includes("LGA");
  });
}

// ================= RAM =================
function elegirRAMs(placaSel){
  if(!placaSel) return ram;
  return ram.filter(r => r.tipo === placaSel.ram);
}

// ================= GPU =================
function necesitaGPU(cpu, uso){
  if(uso === "oficina") return false;
  if(cpu.nombre.includes("G")) return false;
  return true;
}

function elegirGPUs(gama){
  return gpu.filter(g => g.gama === gama);
}

// ================= FUENTE (CORREGIDA) =================
function elegirFuente(gpuSel, uso, gama){

  // oficina baja puede usar genérica
  if(uso === "oficina" && gama === "baja"){
    return fuentes.find(f => f.nombre.includes("Invader"));
  }

  let consumo = gpuSel ? gpuSel.nivel * 180 + 250 : 250;

  let lista = fuentes.filter(f =>
    f.watts >= consumo && !f.certificacion.includes("genérico")
  );

  return lista[0] || fuentes.find(f => !f.certificacion.includes("genérico"));
}

// ================= COOLER =================
function elegirCooler(gama){
  if(gama === "alta") return liquida;
  if(gama === "media") return aire;
  return aire;
}

// ================= VALIDAR =================
function validar(build){

  let errores = [];

  let socketCPU = obtenerPlataforma(build.cpu);

  if(build.cpu && build.placa){
    if(socketCPU !== build.placa.socket){
      errores.push("❌ CPU y placa incompatibles");
    }
  }

  if(build.placa && build.ram){
    if(build.ram.tipo !== build.placa.ram){
      errores.push("❌ RAM incompatible con placa");
    }
  }

  return errores;
}

// ================= ARMAR =================
function armar(cpuSel, placaSel, ramSel, almSel, gpuSel, gama, uso){

  let build = {
    cpu: cpuSel,
    placa: placaSel,
    ram: ramSel,
    almacenamiento: almSel,
    gpu: gpuSel,
    fuente: elegirFuente(gpuSel, uso, gama),
    refrigeracion: elegirCooler(gama)[0]
  };

  let errores = validar(build);
  if(errores.length) alertas.push(...errores);

  return build;
}

// ================= TOTAL =================
function calcularTotal(build){
  let total = 0;
  for(let k in build){
    if(build[k]) total += build[k].precio || 0;
  }
  return total;
}

// ================= MOSTRAR =================
function mostrar(){

  let div = document.getElementById("resultado");
  if(!div) return;

  let html = "<h2>🧾 COTIZADOR IA PRO EDITABLE</h2>";

  cotizaciones.forEach((c,i)=>{

    html += `<h3>🔥 OPCIÓN ${i+1}</h3>`;

    for(let k in c){

      if(c[k]){
        html += `
        <p>
          ${k.toUpperCase()}: ${c[k].nombre} - ${c[k].precio} Bs
          <button onclick="abrirEditor(${i},'${k}')">✏ Editar</button>
        </p>`;
      }
    }

    html += `<b>TOTAL: ${calcularTotal(c)} Bs</b><hr>`;
  });

  if(alertas.length){
    html += "<h3>⚠ ALERTAS</h3>";
    alertas.forEach(a => html += `<p>${a}</p>`);
  }

  div.innerHTML = html;
}

// ================= GENERADOR =================
function generarOpciones(cpuList, placaList, ramList, alm, gpuList, gama, uso){

  cotizaciones = [];

  for(let i=0;i<3;i++){

    let cpuSel = cpuList[i % cpuList.length];

    let placas = elegirPlacas(cpuSel);
    let placaSel = placas[0];

    let rams = elegirRAMs(placaSel);
    let ramSel = rams[0];

    let gpuSel = gpuList.length ? gpuList[i % gpuList.length] : null;

    cotizaciones.push(
      armar(cpuSel, placaSel, ramSel, alm, gpuSel, gama, uso)
    );
  }
}

// ================= COTIZAR =================
function cotizarAuto(){

  alertas = [];

  let uso = document.getElementById("uso1").value;
  let gama = document.getElementById("gama").value;

  let cpuList = elegirCPU(gama, uso);
  let alm = almacenamiento[0];

  let gpuList = necesitaGPU(cpuList[0], uso) ? elegirGPUs(gama) : [];

  generarOpciones(cpuList, [], [], alm, gpuList, gama, uso);

  mostrar();
}

// ================= PRESUPUESTO (FIX REAL) =================
function cotizarPresupuesto(){

  alertas = [];

  let uso = document.getElementById("uso2").value;
  let presupuesto = parseInt(document.getElementById("presupuesto").value);

  let gama =
    presupuesto < 6000 ? "baja" :
    presupuesto < 12000 ? "media" : "alta";

  let cpuList = elegirCPU(gama, uso);

  if(!cpuList.length){
    alertas.push("❌ No hay CPUs disponibles para este presupuesto");
    mostrar();
    return;
  }

  let alm = almacenamiento[0];

  let gpuList = necesitaGPU(cpuList[0], uso)
    ? elegirGPUs(gama)
    : [];

  // 🔥 IMPORTANTE: ahora usamos mismo flujo estable
  generarOpciones(cpuList, [], [], alm, gpuList, gama, uso);

  mostrar();
}

// ================= EDITOR =================
function abrirEditor(index, tipo){

  let build = cotizaciones[index];
  if(!build) return;

  buildsEditables[index] = build;

  let lista = [];

  switch(tipo){
    case "cpu": lista = cpu; break;
    case "placa": lista = elegirPlacas(build.cpu); break;
    case "ram": lista = elegirRAMs(build.placa); break;
    case "gpu": lista = gpu; break;
    case "almacenamiento": lista = almacenamiento; break;
    case "fuente": lista = fuentes; break;
    case "refrigeracion": lista = [...aire, ...liquida]; break;
  }

  mostrarSelector(index, tipo, lista);
}

// ================= SELECTOR =================
function mostrarSelector(index, tipo, lista){

  let div = document.getElementById("editor");
  if(!div) return;

  let html = `<h3>🧠 EDITANDO ${tipo.toUpperCase()}</h3><select id="selectEdit">`;

  lista.forEach((item,i)=>{
    html += `<option value="${i}">${item.nombre} - ${item.precio} Bs</option>`;
  });

  html += `</select>
  <button onclick="confirmarCambio(${index},'${tipo}')">✔ Confirmar</button>`;

  div.innerHTML = html;
}

// ================= CONFIRMAR =================
function confirmarCambio(index, tipo){

  let build = cotizaciones[index];

  let lista = [];

  switch(tipo){
    case "cpu": lista = cpu; break;
    case "placa": lista = elegirPlacas(build.cpu); break;
    case "ram": lista = elegirRAMs(build.placa); break;
    case "gpu": lista = gpu; break;
    case "almacenamiento": lista = almacenamiento; break;
    case "fuente": lista = fuentes; break;
    case "refrigeracion": lista = [...aire, ...liquida]; break;
  }

  let sel = document.getElementById("selectEdit").value;

  build[tipo] = lista[sel];

  autoRecalcular(index);
  mostrar();
}

// ================= AUTO RECALCULO =================
function autoRecalcular(index){

  let build = cotizaciones[index];

  let placas = elegirPlacas(build.cpu);
  if(!placas.includes(build.placa)) build.placa = placas[0];

  let rams = elegirRAMs(build.placa);
  if(!rams.includes(build.ram)) build.ram = rams[0];

  build.fuente = elegirFuente(build.gpu, "gaming", build.cpu?.gama);
  build.refrigeracion = elegirCooler(build.cpu?.gama)[0];

  let errores = validar(build);
  if(errores.length) alertas.push(...errores);
}