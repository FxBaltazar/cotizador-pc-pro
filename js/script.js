// ================= UI =================

document.getElementById("modo").addEventListener("change", ()=>{
  document.getElementById("presupuestoBox").style.display =
    document.getElementById("modo").value === "presupuesto" ? "block":"none";
});

// ================= IA BASE =================

function elegirCPU(gama){
  if(gama==="baja") return productos.cpu[0];
  if(gama==="media") return productos.cpu[1];
  return productos.cpu[2];
}

function elegirGPU(uso, gama){
  if(uso!=="gaming") return null;
  if(gama==="baja") return null;
  if(gama==="media") return productos.gpu[0];
  return productos.gpu[1];
}

// ================= ARMADO =================

function armarPC(uso,gama){
  let pc = {};

  pc.cpu = elegirCPU(gama);
  pc.gpu = elegirGPU(uso,gama);

  pc.placa = productos.placas.find(p=>p.socket===pc.cpu.socket);

  pc.ram = productos.ram.find(r=>
    pc.cpu.socket==="AM5"? r.tipo==="DDR5":r.tipo==="DDR4"
  );

  pc.ssd = productos.nvme[1];
  pc.fuente = pc.gpu?productos.fuentes[1]:productos.fuentes[0];
  pc.cooler = productos.aire[0];

  return pc;
}

// ================= PRESUPUESTO =================

function armarPorPresupuesto(presupuesto, uso){
  let gama = "baja";

  if(presupuesto>7000) gama="media";
  if(presupuesto>12000) gama="alta";

  return armarPC(uso,gama);
}

// ================= TOTAL =================

function calcularTotal(pc){
  return Object.values(pc)
    .filter(x=>x)
    .reduce((a,b)=>a+b.precio,0);
}

// ================= UI CONFIG =================

function mostrarConfig(pc){

  let html="";

  for(let key in pc){

    if(!pc[key]) continue;

    let lista = productos[key] || [];

    html+=`
    <div>
      <label>${key}</label>
      <select onchange="cambiar('${key}', this.value)">
        ${lista.map(p=>`
          <option value="${p.nombre}" ${p.nombre===pc[key].nombre?"selected":""}>
            ${p.nombre} - ${p.precio}
          </option>
        `).join("")}
      </select>
    </div>
    `;
  }

  document.getElementById("config").innerHTML = html;
  actualizarTotal(pc);
  sugerencias(pc);
}

// ================= CAMBIO MANUAL =================

let PC_GLOBAL={};

function cambiar(tipo, nombre){
  let nuevo = productos[tipo].find(p=>p.nombre===nombre);
  PC_GLOBAL[tipo]=nuevo;

  actualizarTotal(PC_GLOBAL);
  sugerencias(PC_GLOBAL);
}

// ================= TOTAL UI =================

function actualizarTotal(pc){
  document.getElementById("total").innerText =
    "Bs "+calcularTotal(pc);
}

// ================= SUGERENCIAS =================

function sugerencias(pc){

  let msg="";

  if(pc.gpu && pc.cpu.nucleos<=4){
    msg+="⚠️ CPU débil para esa GPU\n";
  }

  if(pc.gpu && pc.fuente.watts<600){
    msg+="⚠️ Fuente insuficiente\n";
  }

  if(pc.cpu.socket==="AM5" && pc.ram.tipo!=="DDR5"){
    msg+="⚠️ RAM incompatible\n";
  }

  document.getElementById("sugerencias").innerText =
    msg || "✔️ Todo equilibrado";
}

// ================= BOTON =================

function cotizar(){

  let modo = document.getElementById("modo").value;
  let uso = document.getElementById("uso").value;
  let gama = document.getElementById("gama").value;
  let presupuesto = parseInt(document.getElementById("presupuesto").value);

  let pc;

  if(modo==="uso"){
    pc = armarPC(uso,gama);
  } else {
    pc = armarPorPresupuesto(presupuesto, uso);
  }

  PC_GLOBAL = pc;
  mostrarConfig(pc);
}
