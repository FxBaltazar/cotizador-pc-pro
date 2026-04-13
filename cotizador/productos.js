// ================= CPU =================
const cpu = [

{nombre:"Ryzen 3 5300G", marca:"AMD", precio:1250, gama:"baja", uso:"oficina"},
{nombre:"Ryzen 5 3400G OEM", marca:"AMD", precio:1000, gama:"baja", uso:"oficina"},
{nombre:"Ryzen 5 8400F", marca:"AMD", precio:1920, gama:"media", uso:"gaming"},
{nombre:"Ryzen 7 7500F", marca:"AMD", precio:2420, gama:"alta", uso:"gaming"},
{nombre:"Ryzen 7 8700F", marca:"AMD", precio:2700, gama:"alta", uso:"gaming"},
{nombre:"Ryzen 7 7700", marca:"AMD", precio:3500, gama:"alta", uso:"gaming"},

{nombre:"Ryzen 5 3400G BOX", marca:"AMD", precio:1000, gama:"baja", uso:"oficina"},
{nombre:"Ryzen 5 5600GT", marca:"AMD", precio:1700, gama:"media", uso:"gaming"},
{nombre:"Ryzen 5 8500G", marca:"AMD", precio:1700, gama:"media", uso:"gaming"},
{nombre:"Ryzen 5 8600G", marca:"AMD", precio:1800, gama:"media", uso:"gaming"},
{nombre:"Ryzen 7 8700G", marca:"AMD", precio:3350, gama:"alta", uso:"gaming"},
{nombre:"Ryzen 5 9600X", marca:"AMD", precio:3000, gama:"alta", uso:"gaming"},
{nombre:"Ryzen 9 9950X3D", marca:"AMD", precio:7500, gama:"alta", uso:"gaming"},

{nombre:"Intel i5 12400", marca:"Intel", precio:2300, gama:"media", uso:"oficina"},
{nombre:"Intel i7 12700", marca:"Intel", precio:3800, gama:"alta", uso:"gaming"},

{nombre:"Intel Ultra 5 245KF", marca:"Intel", precio:2350, gama:"media", uso:"gaming"},
{nombre:"Intel Ultra 5 245K", marca:"Intel", precio:2600, gama:"media", uso:"gaming"},
{nombre:"Intel Ultra 5 225", marca:"Intel", precio:2100, gama:"media", uso:"oficina"}

];


// ================= PLACAS =================
const placa = [

{nombre:"MSI PRO X870E-P WIFI", marca:"MSI", precio:2850, socket:"AM5", ram:"DDR5", gama:"alta"},
{nombre:"MSI PRO B840M-P WIFI6E", marca:"MSI", precio:1650, socket:"AM5", ram:"DDR5", gama:"media"},
{nombre:"MSI B550M PRO VDH WIFI", marca:"MSI", precio:1150, socket:"AM4", ram:"DDR4", gama:"media"},
{nombre:"MSI A520M-A PRO", marca:"MSI", precio:700, socket:"AM4", ram:"DDR4", gama:"baja"},

{nombre:"MSI B760M GAMING PLUS WIFI", marca:"MSI", precio:1800, socket:"LGA1700", ram:"DDR5", gama:"media"},
{nombre:"MSI H610M-G", marca:"MSI", precio:820, socket:"LGA1700", ram:"DDR4", gama:"baja"},
{nombre:"MSI B760M-P", marca:"MSI", precio:1050, socket:"LGA1700", ram:"DDR4", gama:"media"},
{nombre:"MSI B760M-E", marca:"MSI", precio:1200, socket:"LGA1700", ram:"DDR5", gama:"media"},

{nombre:"ASUS PRIME A520M-K", marca:"ASUS", precio:720, socket:"AM4", ram:"DDR4", gama:"baja"},
{nombre:"ASUS PRIME B650M-A II", marca:"ASUS", precio:1550, socket:"AM5", ram:"DDR5", gama:"media"},
{nombre:"ASUS TUF GAMING B550-PLUS WIFI II", marca:"ASUS", precio:1800, socket:"AM4", ram:"DDR4", gama:"alta"},

{nombre:"GIGABYTE B650M H 1.2", marca:"Gigabyte", precio:1100, socket:"AM5", ram:"DDR5", gama:"media"},
{nombre:"GIGABYTE H610M-K 2.0", marca:"Gigabyte", precio:820, socket:"LGA1700", ram:"DDR4", gama:"baja"},
{nombre:"GIGABYTE B760M H 1.0", marca:"Gigabyte", precio:1000, socket:"LGA1700", ram:"DDR4", gama:"media"},

{nombre:"ASUS PRIME A620M-K", marca:"ASUS", precio:1300, socket:"AM5", ram:"DDR5", gama:"baja"},

{nombre:"ASUS TUF GAMING Z790-PLUS WIFI", marca:"ASUS", precio:2500, socket:"LGA1700", ram:"DDR5", gama:"alta"},
{nombre:"ASUS TUF GAMING B550-PLUS WIFI II", marca:"ASUS", precio:1800, socket:"AM4", ram:"DDR4", gama:"alta"},

{nombre:"ASUS PRIME Z790-P WIFI", marca:"ASUS", precio:2300, socket:"LGA1700", ram:"DDR5", gama:"alta"},
{nombre:"ASUS TUF GAMING B760M-PLUS WIFI II", marca:"ASUS", precio:1700, socket:"LGA1700", ram:"DDR5", gama:"media"},
{nombre:"ASUS PRIME B760M-A", marca:"ASUS", precio:1500, socket:"LGA1700", ram:"DDR5", gama:"media"},

{nombre:"ASUS PRIME H810M-E", marca:"ASUS", precio:900, socket:"LGA1700", ram:"DDR4", gama:"baja"},
{nombre:"ASUS PRIME B860M-A", marca:"ASUS", precio:1600, socket:"LGA1700", ram:"DDR5", gama:"media"},

{nombre:"ASUS ROG STRIX B860-A GAMING WIFI", marca:"ASUS", precio:2200, socket:"LGA1700", ram:"DDR5", gama:"alta"},
{nombre:"ASUS ROG STRIX B860-F GAMING WIFI", marca:"ASUS", precio:2500, socket:"LGA1700", ram:"DDR5", gama:"alta"}

];

const almacenamiento = [

/* 🔥 M.2 NVME (rápidos) */
{nombre:"Crucial 500GB M.2", marca:"Crucial", precio:670, tipo:"m2", capacidad:500, velocidad:3500, gama:"baja"},
{nombre:"Crucial 500GB M.2 PRO", marca:"Crucial", precio:930, tipo:"m2", capacidad:500, velocidad:4700, gama:"media"},
{nombre:"Crucial 1TB M.2", marca:"Crucial", precio:1750, tipo:"m2", capacidad:1000, velocidad:7100, gama:"alta"},

{nombre:"Kingston 500GB M.2", marca:"Kingston", precio:930, tipo:"m2", capacidad:500, velocidad:5000, gama:"media"},
{nombre:"Western Digital 500GB M.2", marca:"WD", precio:820, tipo:"m2", capacidad:500, velocidad:4000, gama:"media"},
{nombre:"Kingston 1TB M.2", marca:"Kingston", precio:1550, tipo:"m2", capacidad:1000, velocidad:5000, gama:"alta"},

{nombre:"XPG 1TB M.2", marca:"XPG", precio:2000, tipo:"m2", capacidad:1000, velocidad:6000, gama:"alta"},
{nombre:"XPG 1TB M.2 PRO", marca:"XPG", precio:2250, tipo:"m2", capacidad:1000, velocidad:7000, gama:"alta"},

{nombre:"DATO 512GB M.2", marca:"DATO", precio:520, tipo:"m2", capacidad:512, velocidad:3300, gama:"baja"},
{nombre:"DATO 1TB M.2", marca:"DATO", precio:1040, tipo:"m2", capacidad:1000, velocidad:3300, gama:"media"},

{nombre:"Beraca 256GB M.2", marca:"Beraca", precio:520, tipo:"m2", capacidad:256, velocidad:3000, gama:"baja"},
{nombre:"Beraca 512GB M.2", marca:"Beraca", precio:845, tipo:"m2", capacidad:512, velocidad:3000, gama:"media"},
{nombre:"Beraca 1TB M.2", marca:"Beraca", precio:1440, tipo:"m2", capacidad:1000, velocidad:3000, gama:"media"},
{nombre:"Beraca 2TB M.2", marca:"Beraca", precio:2500, tipo:"m2", capacidad:2000, velocidad:3000, gama:"alta"},

/* ⚡ SSD SATA */
{nombre:"ADATA 512GB SSD", marca:"ADATA", precio:700, tipo:"ssd", capacidad:512, gama:"media"},
{nombre:"Lexar 960GB SSD", marca:"Lexar", precio:1220, tipo:"ssd", capacidad:960, gama:"media"},
{nombre:"MSI SPATIUM 960GB SSD", marca:"MSI", precio:1200, tipo:"ssd", capacidad:960, gama:"media"},

{nombre:"Crucial 240GB SSD", marca:"Crucial", precio:480, tipo:"ssd", capacidad:240, gama:"baja"},
{nombre:"Crucial 500GB SSD", marca:"Crucial", precio:800, tipo:"ssd", capacidad:500, gama:"media"},
{nombre:"Crucial 1TB SSD", marca:"Crucial", precio:1320, tipo:"ssd", capacidad:1000, gama:"media"},
{nombre:"Crucial 2TB SSD", marca:"Crucial", precio:1730, tipo:"ssd", capacidad:2000, gama:"alta"},

{nombre:"Kingston 240GB SSD", marca:"Kingston", precio:510, tipo:"ssd", capacidad:240, gama:"baja"},
{nombre:"Kingston 960GB SSD", marca:"Kingston", precio:1400, tipo:"ssd", capacidad:960, gama:"media"},

/* 🐢 HDD */
{nombre:"ADATA 2TB HDD Externo", marca:"ADATA", precio:980, tipo:"hdd", capacidad:2000, gama:"media"},
{nombre:"ADATA 4TB HDD Externo", marca:"ADATA", precio:1450, tipo:"hdd", capacidad:4000, gama:"alta"},

/* 🔥 M.2 NVME */
{nombre:"Crucial 500GB M.2", marca:"Crucial", precio:670, tipo:"m2", capacidad:500, velocidad:3500, gama:"baja"},
{nombre:"Crucial 500GB M.2 PRO", marca:"Crucial", precio:930, tipo:"m2", capacidad:500, velocidad:4700, gama:"media"},
{nombre:"Crucial 1TB M.2", marca:"Crucial", precio:1750, tipo:"m2", capacidad:1000, velocidad:7100, gama:"alta"},

{nombre:"Kingston 500GB M.2", marca:"Kingston", precio:930, tipo:"m2", capacidad:500, velocidad:5000, gama:"media"},
{nombre:"Western Digital 500GB M.2", marca:"WD", precio:820, tipo:"m2", capacidad:500, velocidad:4000, gama:"media"},
{nombre:"Kingston 1TB M.2", marca:"Kingston", precio:1550, tipo:"m2", capacidad:1000, velocidad:5000, gama:"alta"},

{nombre:"XPG 1TB M.2", marca:"XPG", precio:1400, tipo:"m2", capacidad:1000, velocidad:6000, gama:"alta"},
{nombre:"XPG 1TB M.2 PRO", marca:"XPG", precio:1575, tipo:"m2", capacidad:1000, velocidad:7000, gama:"alta"},

{nombre:"DATO 256GB M.2", marca:"DATO", precio:305, tipo:"m2", capacidad:256, velocidad:3300, gama:"baja"},
{nombre:"DATO 512GB M.2", marca:"DATO", precio:530, tipo:"m2", capacidad:512, velocidad:3300, gama:"baja"},
{nombre:"DATO 1TB M.2", marca:"DATO", precio:1050, tipo:"m2", capacidad:1000, velocidad:3300, gama:"media"},

{nombre:"Beraca 256GB M.2", marca:"Beraca", precio:520, tipo:"m2", capacidad:256, velocidad:3000, gama:"baja"},
{nombre:"Beraca 512GB M.2", marca:"Beraca", precio:845, tipo:"m2", capacidad:512, velocidad:3000, gama:"media"},
{nombre:"Beraca 1TB M.2", marca:"Beraca", precio:1440, tipo:"m2", capacidad:1000, velocidad:3000, gama:"media"},
{nombre:"Beraca 2TB M.2", marca:"Beraca", precio:2500, tipo:"m2", capacidad:2000, velocidad:3000, gama:"alta"},

/* ⚡ SSD SATA */
{nombre:"MSI Spatium 960GB SSD", marca:"MSI", precio:1200, tipo:"ssd", capacidad:960, gama:"media"},
{nombre:"ADATA 512GB SSD", marca:"ADATA", precio:700, tipo:"ssd", capacidad:512, gama:"media"},
{nombre:"Lexar 960GB SSD", marca:"Lexar", precio:1220, tipo:"ssd", capacidad:960, gama:"media"},
{nombre:"Patriot 256GB SSD", marca:"Patriot", precio:460, tipo:"ssd", capacidad:256, gama:"baja"},
{nombre:"Hiksemi 240GB SSD", marca:"Hiksemi", precio:450, tipo:"ssd", capacidad:240, gama:"baja"},

{nombre:"Crucial 240GB SSD", marca:"Crucial", precio:480, tipo:"ssd", capacidad:240, gama:"baja"},
{nombre:"Crucial 500GB SSD", marca:"Crucial", precio:800, tipo:"ssd", capacidad:500, gama:"media"},
{nombre:"Crucial 1TB SSD", marca:"Crucial", precio:1320, tipo:"ssd", capacidad:1000, gama:"media"},
{nombre:"Crucial 2TB SSD", marca:"Crucial", precio:1730, tipo:"ssd", capacidad:2000, gama:"alta"},

{nombre:"Kingston 240GB SSD", marca:"Kingston", precio:510, tipo:"ssd", capacidad:240, gama:"baja"},
{nombre:"Kingston 960GB SSD", marca:"Kingston", precio:1400, tipo:"ssd", capacidad:960, gama:"media"},

{nombre:"ADATA 256GB SSD", marca:"ADATA", precio:385, tipo:"ssd", capacidad:256, gama:"baja"},
{nombre:"ADATA 512GB SSD PRO", marca:"ADATA", precio:575, tipo:"ssd", capacidad:512, gama:"media"},
{nombre:"ADATA 1TB SSD", marca:"ADATA", precio:1015, tipo:"ssd", capacidad:1000, gama:"media"},

{nombre:"DATO 512GB SSD", marca:"DATO", precio:520, tipo:"ssd", capacidad:512, gama:"media"},
{nombre:"DATO 1TB SSD", marca:"DATO", precio:1040, tipo:"ssd", capacidad:1000, gama:"media"},

{nombre:"Beraca 128GB SATA", marca:"Beraca", precio:350, tipo:"ssd", capacidad:128, gama:"baja"},
{nombre:"Beraca 256GB SATA", marca:"Beraca", precio:490, tipo:"ssd", capacidad:256, gama:"baja"},
{nombre:"Beraca 512GB SATA", marca:"Beraca", precio:850, tipo:"ssd", capacidad:512, gama:"media"},
{nombre:"Beraca 1TB SATA", marca:"Beraca", precio:1300, tipo:"ssd", capacidad:1000, gama:"media"},

/* 🐢 HDD */
{nombre:"ADATA 2TB HDD Externo", marca:"ADATA", precio:990, tipo:"hdd", capacidad:2000, gama:"media"},
{nombre:"ADATA 4TB HDD Externo", marca:"ADATA", precio:1450, tipo:"hdd", capacidad:4000, gama:"alta"}

];

const ram = [

/* 🔥 DDR5 ALTA */
{nombre:"Manta XSky RGB 32GB (16x2)", tipo:"DDR5", capacidad:32, velocidad:6400, precio:3700, gama:"alta"},
{nombre:"Manta Xfinity RGB 32GB (16x2)", tipo:"DDR5", capacidad:32, velocidad:6000, precio:3700, gama:"alta"},
{nombre:"Manta Xfinity RGB 32GB (16x2) 6600MHz", tipo:"DDR5", capacidad:32, velocidad:6600, precio:3780, gama:"alta"},

{nombre:"ADATA 32GB DDR5", tipo:"DDR5", capacidad:32, velocidad:5600, precio:3900, gama:"alta"},

/* ⚡ DDR5 MEDIA */
{nombre:"Kingston Fury 16GB DDR5", tipo:"DDR5", capacidad:16, velocidad:5600, precio:2900, gama:"media"},
{nombre:"XPG Lancer RGB 16GB DDR5", tipo:"DDR5", capacidad:16, velocidad:6000, precio:3100, gama:"media"},
{nombre:"ADATA 16GB DDR5", tipo:"DDR5", capacidad:16, velocidad:5600, precio:2400, gama:"media"},
{nombre:"Beraca 16GB DDR5 4800MHz", tipo:"DDR5", capacidad:16, velocidad:4800, precio:2500, gama:"media"},
{nombre:"Beraca 16GB DDR5 5600MHz", tipo:"DDR5", capacidad:16, velocidad:5600, precio:2850, gama:"media"},

/* ⚙️ DDR4 ALTA */
{nombre:"Patriot Viper 32GB DDR4", tipo:"DDR4", capacidad:32, velocidad:3600, precio:2250, gama:"alta"},
{nombre:"Beraca 32GB DDR4 3200MHz", tipo:"DDR4", capacidad:32, velocidad:3200, precio:3000, gama:"alta"},
{nombre:"Beraca 32GB DDR4 3600MHz", tipo:"DDR4", capacidad:32, velocidad:3600, precio:3000, gama:"alta"},

/* ⚙️ DDR4 MEDIA */
{nombre:"Corsair Vengeance RGB 16GB DDR4", tipo:"DDR4", capacidad:16, velocidad:3600, precio:2300, gama:"media"},
{nombre:"Mushkin 16GB DDR4", tipo:"DDR4", capacidad:16, velocidad:3200, precio:1650, gama:"media"},
{nombre:"Beraca 16GB DDR4 3200MHz", tipo:"DDR4", capacidad:16, velocidad:3200, precio:1600, gama:"media"},
{nombre:"Beraca 16GB DDR4 3600MHz", tipo:"DDR4", capacidad:16, velocidad:3600, precio:1600, gama:"media"},

/* 🟢 DDR4 BAJA */
{nombre:"Beraca 8GB DDR4 3200MHz", tipo:"DDR4", capacidad:8, velocidad:3200, precio:950, gama:"baja"},
{nombre:"Beraca 8GB DDR4 3600MHz", tipo:"DDR4", capacidad:8, velocidad:3600, precio:1000, gama:"baja"},
{nombre:"Genérica 4GB DDR4", tipo:"DDR4", capacidad:4, velocidad:2666, precio:280, gama:"baja"},
{nombre:"Genérica 8GB DDR4", tipo:"DDR4", capacidad:8, velocidad:2666, precio:450, gama:"baja"},
{nombre:"Genérica 16GB DDR4", tipo:"DDR4", capacidad:16, velocidad:2666, precio:820, gama:"baja"}


];

const gpu = [

/* 🔵 GAMA MEDIA */
{nombre:"RTX 3050 6GB", precio:3450, nivel:2, vram:6, gama:"media"},
{nombre:"RTX 3050 8GB", precio:3500, nivel:2, vram:8, gama:"media"},
{nombre:"RTX 5050 8GB", precio:3850, nivel:2, vram:8, gama:"media"},

{nombre:"RX 7600 8GB", precio:4700, nivel:3, vram:8, gama:"media"},
{nombre:"RTX 4060 Ti 8GB", precio:4900, nivel:3, vram:8, gama:"media"},
{nombre:"RTX 4060 Ti Gaming X", precio:5100, nivel:3, vram:8, gama:"media"},

/* 🔴 GAMA ALTA */
{nombre:"RTX 5060 8GB", precio:4650, nivel:4, vram:8, gama:"alta"},
{nombre:"RTX 5060 OC", precio:3400, nivel:4, vram:8, gama:"alta"},
{nombre:"RTX 5060 Ti 8GB", precio:5600, nivel:4, vram:8, gama:"alta"},
{nombre:"RX 9060XT 16GB", precio:3900, nivel:4, vram:16, gama:"alta"},

/* 💀 GAMA ULTRA */
{nombre:"RTX 5070 12GB", precio:7500, nivel:5, vram:12, gama:"alta"},
{nombre:"RTX 5070 Trio 12GB", precio:8700, nivel:5, vram:12, gama:"alta"},
{nombre:"RX 9070XT 16GB", precio:6100, nivel:5, vram:16, gama:"alta"}

];

const fuentes = [

/* 🟢 GAMA BAJA */
{nombre:"Invader 900W Genérico", marca:"Invader", watts:900, certificacion:"genérico", precio:350, gama:"baja"},
{nombre:"Invader 1200W Genérico", marca:"Invader", watts:1200, certificacion:"genérico", precio:480, gama:"baja"},

{nombre:"Deepcool PF450 450W", marca:"Deepcool", watts:450, certificacion:"white", precio:700, gama:"baja"},
{nombre:"Deepcool PF500X 500W", marca:"Deepcool", watts:500, certificacion:"bronze", precio:750, gama:"baja"},
{nombre:"Deepcool PF600X 600W", marca:"Deepcool", watts:600, certificacion:"bronze", precio:800, gama:"baja"},
{nombre:"Deepcool PF650 650W", marca:"Deepcool", watts:650, certificacion:"white", precio:800, gama:"baja"},

/* 🔵 GAMA MEDIA */
{nombre:"AZZA 650W Bronze", marca:"AZZA", watts:650, certificacion:"bronze", precio:310, gama:"media"},
{nombre:"Deepcool 650W Bronze", marca:"Deepcool", watts:650, certificacion:"bronze", precio:420, gama:"media"},
{nombre:"IRIS 650W Bronze", marca:"IRIS", watts:650, certificacion:"bronze", precio:450, gama:"media"},

{nombre:"AZZA 750W Bronze", marca:"AZZA", watts:750, certificacion:"bronze", precio:430, gama:"media"},
{nombre:"Deepcool 750W Bronze", marca:"Deepcool", watts:750, certificacion:"bronze", precio:525, gama:"media"},

{nombre:"Deepcool PK500D 500W", marca:"Deepcool", watts:500, certificacion:"bronze", precio:850, gama:"media"},
{nombre:"Deepcool PK650D 650W", marca:"Deepcool", watts:650, certificacion:"bronze", precio:950, gama:"media"},
{nombre:"Deepcool DA500 500W", marca:"Deepcool", watts:500, certificacion:"bronze", precio:920, gama:"media"},

/* 🔴 GAMA ALTA */
{nombre:"AZZA 850W Gold", marca:"AZZA", watts:850, certificacion:"gold", precio:670, gama:"alta"},
{nombre:"Deepcool PN550M 550W Gold", marca:"Deepcool", watts:550, certificacion:"gold", precio:900, gama:"alta"},
{nombre:"Deepcool PN750M 750W Gold", marca:"Deepcool", watts:750, certificacion:"gold", precio:1600, gama:"alta"},
{nombre:"Deepcool PN850M 850W Gold", marca:"Deepcool", watts:850, certificacion:"gold", precio:1750, gama:"alta"},

{nombre:"Deepcool DQ650M 650W Gold", marca:"Deepcool", watts:650, certificacion:"gold", precio:1400, gama:"alta"},
{nombre:"Deepcool DQ750M 750W Gold", marca:"Deepcool", watts:750, certificacion:"gold", precio:1800, gama:"alta"},

{nombre:"ASUS 750W Gold", marca:"ASUS", watts:750, certificacion:"gold", precio:2000, gama:"alta"},

/* 💀 GAMA EXTREMA */
{nombre:"Deepcool PN1000M 1000W Gold", marca:"Deepcool", watts:1000, certificacion:"gold", precio:2300, gama:"alta"},
{nombre:"Deepcool PN1200M 1200W Gold", marca:"Deepcool", watts:1200, certificacion:"gold", precio:2600, gama:"alta"},
{nombre:"Deepcool PX850G 850W Gold", marca:"Deepcool", watts:850, certificacion:"gold", precio:2250, gama:"alta"},
{nombre:"Deepcool PX1000G 1000W Gold", marca:"Deepcool", watts:1000, certificacion:"gold", precio:2800, gama:"alta"},
{nombre:"Deepcool PX1200G 1200W Gold", marca:"Deepcool", watts:1200, certificacion:"gold", precio:3100, gama:"alta"},
{nombre:"Deepcool PX1300P 1300W Platinum", marca:"Deepcool", watts:1300, certificacion:"platinum", precio:4600, gama:"alta"}

];

const liquida = [

/* 🟢 BÁSICA (120mm) */
{nombre:"LS320", precio:830, tipo:"liquida", radiador:120, gama:"baja"},
{nombre:"LE300", precio:670, tipo:"liquida", radiador:120, gama:"baja"},

/* 🔵 MEDIA (240mm) */
{nombre:"Mystique 240", precio:1750, tipo:"liquida", radiador:240, gama:"media"},
{nombre:"LT240 A-RGB", precio:1500, tipo:"liquida", radiador:240, gama:"media"},
{nombre:"LE240 V2", precio:1000, tipo:"liquida", radiador:240, gama:"media"},
{nombre:"Gammaxx L240 V2", precio:950, tipo:"liquida", radiador:240, gama:"media"},

/* 🔴 ALTA (360mm) */
{nombre:"Mystique 360", precio:2200, tipo:"liquida", radiador:360, gama:"alta"},
{nombre:"LT360 A-RGB", precio:1800, tipo:"liquida", radiador:360, gama:"alta"},
{nombre:"LS720", precio:1200, tipo:"liquida", radiador:360, gama:"alta"},
{nombre:"Gammaxx L360", precio:1100, tipo:"liquida", radiador:360, gama:"alta"}

];

const aire = [

/* 🟢 BÁSICA */
{nombre:"CK-11509", precio:56, tipo:"aire", nivel:"basico", gama:"baja"},
{nombre:"ICE EDGE MINI FS V2", precio:133, tipo:"aire", nivel:"basico", gama:"baja"},
{nombre:"AG200", precio:196, tipo:"aire", nivel:"basico", gama:"baja"},

/* 🔵 MEDIA */
{nombre:"AG400", precio:308, tipo:"aire", nivel:"medio", gama:"media"},
{nombre:"AG400 A-RGB", precio:434, tipo:"aire", nivel:"medio", gama:"media"},
{nombre:"AK400", precio:406, tipo:"aire", nivel:"medio", gama:"media"},
{nombre:"Gammaxx GTE V2", precio:378, tipo:"aire", nivel:"medio", gama:"media"},

/* 🔴 ALTA */
{nombre:"AG620", precio:840, tipo:"aire", nivel:"alto", gama:"alta"},
{nombre:"AK620", precio:1050, tipo:"aire", nivel:"alto", gama:"alta"},
{nombre:"AK500", precio:938, tipo:"aire", nivel:"alto", gama:"alta"},
{nombre:"AS500", precio:1106, tipo:"aire", nivel:"alto", gama:"alta"},

/* 💀 EXTREMA */
{nombre:"ASSASSIN IV", precio:1680, tipo:"aire", nivel:"extremo", gama:"alta"},
{nombre:"ASSASSIN IV WH", precio:1750, tipo:"aire", nivel:"extremo", gama:"alta"},
{nombre:"ASSASSIN IV VC VISION", precio:2086, tipo:"aire", nivel:"extremo", gama:"alta"}

];
// ================= (TODO LO DEMÁS IGUAL, NO SE TOCÓ) =================

// 👉 No modifiqué tu almacenamiento, RAM, GPU, fuentes, líquida ni aire
// 👉 Solo estaban bien, así que los dejé intactos


// ================= EXPORT FINAL =================
const productos = {
  cpu,
  placa,
  ram,
  almacenamiento,
  gpu,
  fuentes,
  aire,
  liquida
};