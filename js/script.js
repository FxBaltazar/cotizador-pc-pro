// Mostrar u ocultar presupuesto
const modo = document.getElementById("modo");
const presupuestoBox = document.getElementById("presupuestoBox");

modo.addEventListener("change", ()=>{
  if(modo.value === "presupuesto"){
    presupuestoBox.style.display = "block";
  } else {
    presupuestoBox.style.display = "none";
  }
});

// ================= IA =================

function buildPorUso(uso){
  let pc = {};

  if(uso === "gaming"){
    pc.cpu = productos.cpu[1];
    pc.gpu = productos.gpu[0];
  }

  if(uso === "oficina"){
    pc.cpu = productos.cpu[0];
    pc.gpu = null;
  }

  if(uso === "universidad"){
    pc.cpu = productos.cpu[0];
    pc.gpu = null;
  }

  completar(pc);
  return pc;
}

function buildPorPresupuesto(presupuesto, uso){
  let pc = {};

  if(presupuesto < 6000){
    pc.cpu = productos.cpu[0];
    pc.gpu = null;
  } else {
    pc.cpu = productos.cpu[2];
    pc.gpu = uso === "gaming" ? productos.gpu[0] : null;
  }

  completar(pc);
  return pc;
}

function completar(pc){
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

function total(pc){
  return Object.values(pc)
    .filter(x=>x)
    .reduce((a,b)=>a+b.precio,0);
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

  txt += `\n\n💰 ${total(pc)} Bs`;

  document.getElementById("resultado").innerText = txt;
}

// ================= BOTÓN =================

document.getElementById("btn").addEventListener("click", ()=>{

  const modoValor = modo.value;
  const uso = document.getElementById("uso").value;
  const presupuesto = parseInt(document.getElementById("presupuesto").value);

  let pc;

  if(modoValor === "uso"){
    pc = buildPorUso(uso);
  } else {
    if(!presupuesto){
      alert("Ingresa presupuesto");
      return;
    }
    pc = buildPorPresupuesto(presupuesto, uso);
  }

  mostrar(pc);
});
