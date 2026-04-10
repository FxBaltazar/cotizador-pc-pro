// ================= INIT =================
const cpuSelect = document.getElementById("cpuSelect");
const gpuSelect = document.getElementById("gpuSelect");
const ramSelect = document.getElementById("ramSelect");
const placaSelect = document.getElementById("placaSelect");

let buildActual = {};

// ================= CARGAR SELECTS =================
function cargarOpciones(){
  productos.cpu.forEach((c,i)=>{
    cpuSelect.innerHTML += `<option value="${i}">${c.nombre}</option>`;
  });

  productos.gpu.forEach((g,i)=>{
    gpuSelect.innerHTML += `<option value="${i}">${g.nombre}</option>`;
  });

  productos.ram.forEach((r,i)=>{
    ramSelect.innerHTML += `<option value="${i}">${r.nombre}</option>`;
  });

  productos.placas.forEach((p,i)=>{
    placaSelect.innerHTML += `<option value="${i}">${p.nombre}</option>`;
  });
}

// ================= IA =================

function armarPorUso(uso, gama){
  let pc = {};

  if(uso === "gaming"){
    if(gama === "baja"){
      pc.cpu = productos.cpu[0];
      pc.gpu = null;
    }
    if(gama === "media"){
      pc.cpu = productos.cpu[1];
      pc.gpu = productos.gpu[0];
    }
    if(gama === "alta"){
      pc.cpu = productos.cpu[2];
      pc.gpu = productos.gpu[1];
    }
  }

  if(uso === "oficina"){
    pc.cpu = productos.cpu[0];
    pc.gpu = null;
  }

  completarBuild(pc);
  return pc;
}

function armarPorPresupuesto(presupuesto, uso){
  let pc = {};

  pc.cpu = presupuesto < 7000 ? productos.cpu[0] : productos.cpu[2];
  pc.gpu = (uso === "gaming" && presupuesto > 6000) ? productos.gpu[0] : null;

  completarBuild(pc);
  return pc;
}

function completarBuild(pc){
  pc.placa = productos.placas.find(p=>p.socket === pc.cpu.socket);

  if(pc.cpu.socket === "AM5"){
    pc.ram = productos.ram.find(r=>r.tipo==="DDR5");
  } else {
    pc.ram = productos.ram.find(r=>r.tipo==="DDR4");
  }

  pc.ssd = productos.nvme[1];
  pc.fuente = pc.gpu ? productos.fuentes[1] : productos.fuentes[0];
  pc.cooler = productos.aire[0];
}

// ================= MOSTRAR =================

function calcularTotal(pc){
  return Object.values(pc)
    .filter(x=>x)
    .reduce((acc,x)=>acc + x.precio,0);
}

function mostrar(pc){
  let txt = `
🧠 ${pc.cpu.nombre}
🧩 ${pc.placa.nombre}
🧠 ${pc.ram.nombre}
⚡ ${pc.ssd.nombre}
🔌 ${pc.fuente.nombre}
❄️ ${pc.cooler.nombre}
`;

  txt += pc.gpu ? `🎮 ${pc.gpu.nombre}` : `🎮 Integrados`;

  txt += `\n\n💰 ${calcularTotal(pc)} Bs`;

  document.getElementById("resultado").innerText = txt;

  verificarCompatibilidad(pc);
}

// ================= IA COMPATIBILIDAD =================

function verificarCompatibilidad(pc){
  let problemas = [];

  if(pc.placa.socket !== pc.cpu.socket){
    problemas.push("⚠️ CPU y placa no compatibles");
  }

  if(pc.cpu.socket === "AM5" && pc.ram.tipo !== "DDR5"){
    problemas.push("⚠️ Debes usar DDR5");
  }

  if(pc.cpu.graficos && pc.gpu){
    problemas.push("💡 CPU tiene gráficos integrados, GPU no necesaria");
  }

  document.getElementById("sugerencias").innerText =
    problemas.length ? problemas.join("\n") : "✅ Todo compatible";
}

// ================= EVENTOS =================

document.getElementById("btnCotizar").addEventListener("click", ()=>{
  const modo = document.getElementById("modo").value;
  const uso = document.getElementById("uso").value;
  const gama = document.getElementById("gama").value;
  const presupuesto = parseInt(document.getElementById("presupuesto").value);

  if(modo === "uso"){
    buildActual = armarPorUso(uso,gama);
  } else {
    buildActual = armarPorPresupuesto(presupuesto,uso);
  }

  actualizarSelects();
  mostrar(buildActual);
});

// ================= CAMBIO MANUAL =================

function actualizarSelects(){
  cpuSelect.value = productos.cpu.indexOf(buildActual.cpu);
  gpuSelect.value = buildActual.gpu ? productos.gpu.indexOf(buildActual.gpu) : "";
  ramSelect.value = productos.ram.indexOf(buildActual.ram);
  placaSelect.value = productos.placas.indexOf(buildActual.placa);
}

cpuSelect.addEventListener("change", ()=>{
  buildActual.cpu = productos.cpu[cpuSelect.value];
  completarBuild(buildActual);
  mostrar(buildActual);
});

gpuSelect.addEventListener("change", ()=>{
  buildActual.gpu = productos.gpu[gpuSelect.value];
  mostrar(buildActual);
});

ramSelect.addEventListener("change", ()=>{
  buildActual.ram = productos.ram[ramSelect.value];
  mostrar(buildActual);
});

placaSelect.addEventListener("change", ()=>{
  buildActual.placa = productos.placas[placaSelect.value];
  mostrar(buildActual);
});

// INIT
cargarOpciones();
