import { productos } from "../data/productos.js";

const { cpu, placas, ram, gpu, fuentes, nvme, liquida, aire } = productos;

// ================= CONFIG =================
const perfiles = {
  basico: { nivel:1, ramMin:8 },
  medio: { nivel:2, ramMin:16 },
  alto: { nivel:3, ramMin:16 }
};

// ================= HELPERS =================
function esAPU(cpu){
  return cpu.nombre.includes("G");
}

function tipoRAM(socket){
  return socket === "AM5" ? "DDR5" : "DDR4";
}

function total(build){
  return Object.values(build)
    .filter(x => x && x.precio)
    .reduce((a,b)=>a+b.precio,0);
}

// ================= SELECCIÓN =================
function elegirCPU(nivel, presupuesto){
  return cpu.find(c=>{
    if(nivel===1) return c.precio <= 2000;
    if(nivel===2) return c.precio >= 1800 && c.precio <= presupuesto*0.25;
    if(nivel===3) return c.precio >= 2500;
  });
}

function elegirPlaca(cpuSel){
  return placas.find(p=>p.socket===cpuSel.socket);
}

function elegirRAM(placa, perfil){
  let tipo = tipoRAM(placa.socket);

  return ram.find(r =>
    r.tipo === tipo &&
    r.capacidad >= perfil.ramMin
  );
}

function elegirGPU(cpuSel, nivel, presupuesto){
  let igpu = esAPU(cpuSel);

  // Si es APU y presupuesto bajo → no GPU
  if(igpu && presupuesto < 9000){
    return null;
  }

  return gpu.find(g =>
    g.nivel >= nivel &&
    g.precio <= presupuesto * 0.35
  ) || null;
}

function elegirSSD(presupuesto){
  if(presupuesto > 10000)
    return nvme.find(n=>n.capacidad>=1000);

  return nvme.find(n=>n.capacidad>=500);
}

function elegirFuente(gpuSel){
  if(!gpuSel) return fuentes.find(f=>f.watts>=500);

  if(gpuSel.nivel>=3)
    return fuentes.find(f=>f.watts>=650);

  return fuentes.find(f=>f.watts>=550);
}

function elegirCooling(cpuSel){
  if(cpuSel.precio < 3200){
    return aire.find(c=>c.nombre.includes("AG400"));
  }
  return liquida.find(l=>l.radiador>=240);
}

// ================= BUILD BASE =================
function buildBase(perfilNombre, presupuesto){

  const perfil = perfiles[perfilNombre];

  let build = {};

  build.cpu = elegirCPU(perfil.nivel, presupuesto);
  build.placa = elegirPlaca(build.cpu);
  build.ram = elegirRAM(build.placa, perfil);
  build.gpu = elegirGPU(build.cpu, perfil.nivel, presupuesto);
  build.ssd = elegirSSD(presupuesto);
  build.fuente = elegirFuente(build.gpu);
  build.cooling = elegirCooling(build.cpu);

  return build;
}

// ================= AJUSTE =================
function ajustar(build, presupuesto){

  let t = total(build);

  // Mejorar GPU si sobra presupuesto
  while(t < presupuesto * 0.9){
    let mejor = gpu.find(g =>
      (!build.gpu || g.precio > build.gpu.precio) &&
      g.precio <= presupuesto * 0.4
    );

    if(!mejor) break;

    build.gpu = mejor;
    t = total(build);
  }

  // Bajar GPU si se pasa
  while(t > presupuesto){
    if(build.gpu){
      let menor = [...gpu].reverse()
        .find(g => g.precio < build.gpu.precio);

      build.gpu = menor || null;
    } else break;

    t = total(build);
  }

  return build;
}

// ================= OPCIONES =================
function generarOpciones(presupuesto){

  let base = buildBase("medio", presupuesto);

  return {
    balanceado: ajustar({...base}, presupuesto),

    gaming: ajustar({
      ...base,
      gpu: gpu.find(g=>g.nivel>=3)
    }, presupuesto),

    productividad: ajustar({
      ...base,
      cpu: cpu.find(c=>c.precio>base.cpu.precio)
    }, presupuesto)
  };
}

// ================= MOSTRAR =================
function mostrar(build){

  return `
🧠 ${build.cpu?.nombre}<br>
🧩 ${build.placa?.nombre}<br>
🎮 ${build.gpu ? build.gpu.nombre : "Gráficos integrados"}<br>
🧠 ${build.ram?.nombre}<br>
⚡ ${build.ssd?.nombre}<br>
🔌 ${build.fuente?.nombre}<br>
❄️ ${build.cooling?.nombre}<br><br>

💰 TOTAL: ${total(build)} Bs
`;
}

// ================= BOTÓN =================
window.generarPC = function(){

  let presupuesto = parseInt(document.getElementById("presupuesto").value);

  if(!presupuesto){
    alert("Ingresa un presupuesto válido");
    return;
  }

  let pcs = generarOpciones(presupuesto);

  document.getElementById("resultado").innerHTML = `
  <h3>⚖️ Balanceado</h3>
  ${mostrar(pcs.balanceado)}

  <h3>🎮 Gaming</h3>
  ${mostrar(pcs.gaming)}

  <h3>🧠 Productividad</h3>
  ${mostrar(pcs.productividad)}
  `;
};
