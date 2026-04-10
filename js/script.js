function elegirCPU(presupuesto){
  if(presupuesto < 4000) return productos.cpu[0];
  if(presupuesto < 7000) return productos.cpu[2];
  return productos.cpu[3];
}

function elegirPlaca(cpu){
  return productos.placas.find(p=>p.socket === cpu.socket);
}

function elegirRAM(cpu){
  if(cpu.socket === "AM5") return productos.ram.find(r=>r.tipo==="DDR5");
  return productos.ram.find(r=>r.tipo==="DDR4");
}

function elegirGPU(presupuesto, cpu){
  if(cpu.graficos && presupuesto < 6000) return null;
  if(presupuesto < 8000) return productos.gpu[0];
  return productos.gpu[1];
}

function elegirSSD(presupuesto){
  if(presupuesto < 6000) return productos.nvme[0];
  if(presupuesto < 9000) return productos.nvme[1];
  return productos.nvme[2];
}

function elegirFuente(gpu){
  if(!gpu) return productos.fuentes[0];
  if(gpu.nivel >= 3) return productos.fuentes[2];
  return productos.fuentes[1];
}

function elegirCooler(){
  return productos.aire[0];
}

function armarPC(presupuesto){
  let build = {};

  build.cpu = elegirCPU(presupuesto);
  build.placa = elegirPlaca(build.cpu);
  build.ram = elegirRAM(build.cpu);
  build.gpu = elegirGPU(presupuesto, build.cpu);
  build.ssd = elegirSSD(presupuesto);
  build.fuente = elegirFuente(build.gpu);
  build.cooler = elegirCooler();

  return build;
}

function calcularTotal(pc){
  return Object.values(pc)
    .filter(x=>x)
    .reduce((acc,x)=>acc + x.precio,0);
}

function mostrarPC(pc){
  let texto = `
🧠 ${pc.cpu.nombre}
🧩 ${pc.placa.nombre}
🧠 ${pc.ram.nombre}
⚡ ${pc.ssd.nombre}
🔌 ${pc.fuente.nombre}
❄️ ${pc.cooler.nombre}
`;

  if(pc.gpu){
    texto += `🎮 ${pc.gpu.nombre}\n`;
  } else {
    texto += `🎮 Gráficos integrados\n`;
  }

  texto += `\n💰 TOTAL: ${calcularTotal(pc)} Bs`;

  document.getElementById("resultado").innerText = texto;
}

// BOTÓN
function cotizar(){
  const presupuesto = parseInt(document.getElementById("presupuesto").value);
  const pc = armarPC(presupuesto);
  mostrarPC(pc);
}
