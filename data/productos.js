
function ordenarPrecio(arr){
  return arr.sort((a,b)=>a.precio-b.precio);
}

// ================== NVME ==================
const nvme = ordenarPrecio([
{nombre:"SSD DATO 512GB DP700 PRO",precio:980,tipo:"nvme",capacidad:512,desc:"3300MB/s"},
{nombre:"SSD DATO 1TB DP700 PRO",precio:1900,tipo:"nvme",capacidad:1000,desc:"3300MB/s"},
{nombre:"SSD DATO 256GB DP70",precio:680,tipo:"nvme",capacidad:256,desc:"NVMe"},

{nombre:"Crucial P3 Plus 4TB",precio:4350,tipo:"nvme",capacidad:4000,desc:"NVMe"},
{nombre:"Crucial P3 Plus 1TB",precio:1900,tipo:"nvme",capacidad:1000,desc:"NVMe"},
{nombre:"Crucial P3 500GB",precio:980,tipo:"nvme",capacidad:500,desc:"3500MB/s"},
{nombre:"Crucial P3 Plus 500GB",precio:1100,tipo:"nvme",capacidad:500,desc:"4700MB/s"},
{nombre:"Crucial P310 1TB",precio:1950,tipo:"nvme",capacidad:1000,desc:"7100MB/s"},

{nombre:"KingSpec 256GB",precio:450,tipo:"nvme",capacidad:256,desc:"NVMe"},
{nombre:"KingSpec 512GB",precio:850,tipo:"nvme",capacidad:512,desc:"NVMe"},
{nombre:"KingSpec 256GB (extra)",precio:570,tipo:"nvme",capacidad:256,desc:"NVMe"},

{nombre:"Samsung 990 PRO 1TB",precio:3100,tipo:"nvme",capacidad:1000,desc:"NVMe"},
{nombre:"Samsung 990 PRO 2TB",precio:4600,tipo:"nvme",capacidad:2000,desc:"NVMe"},
{nombre:"Samsung 990 PRO 4TB",precio:6850,tipo:"nvme",capacidad:4000,desc:"NVMe"},

{nombre:"Kingston Renegade 1TB",precio:3250,tipo:"nvme",capacidad:1000,desc:"7300MB/s"},
{nombre:"Kingston Renegade 2TB",precio:4150,tipo:"nvme",capacidad:2000,desc:"7300MB/s"},
{nombre:"Kingston SNV3S 500GB",precio:1130,tipo:"nvme",capacidad:500,desc:"5000MB/s"},

{nombre:"SanDisk 2TB",precio:2600,tipo:"nvme",capacidad:2000,desc:"NVMe"},
{nombre:"Western Digital 500GB",precio:980,tipo:"nvme",capacidad:500,desc:"NVMe"}
]);

// ================== SATA ==================
const sata = ordenarPrecio([
{nombre:"Crucial BX500 240GB", precio:870, tipo:"sata", capacidad:240},
{nombre:"DATO 1TB SATA", precio:1800, tipo:"sata", capacidad:1000},
{nombre:"DATO 512GB DS700", precio:980, tipo:"sata", capacidad:512},

{nombre:"Crucial BX500 500GB", precio:1200, tipo:"sata", capacidad:500},
{nombre:"Crucial BX500 1TB", precio:1800, tipo:"sata", capacidad:1000},
{nombre:"Kingston 960GB", precio:1800, tipo:"sata", capacidad:960},

{nombre:"KingSpec 512GB", precio:920, tipo:"sata", capacidad:512},
{nombre:"KingSpec 256GB", precio:620, tipo:"sata", capacidad:256},

{nombre:"MSI Spatium S270 960GB", precio:1500, tipo:"sata", capacidad:960},
{nombre:"ADATA SU650 512GB", precio:880, tipo:"sata", capacidad:512},
{nombre:"Lexar NQ100 960GB", precio:1520, tipo:"sata", capacidad:960},

{nombre:"Patriot P210 256GB", precio:660, tipo:"sata", capacidad:256},
{nombre:"Hiksemi Wave 240GB", precio:650, tipo:"sata", capacidad:240},

{nombre:"Crucial BX500 240GB (alt)", precio:700, tipo:"sata", capacidad:240},
{nombre:"Crucial BX500 500GB (alt)", precio:980, tipo:"sata", capacidad:500},
{nombre:"Crucial BX500 1TB (alt)", precio:1650, tipo:"sata", capacidad:1000},
{nombre:"Crucial BX500 2TB", precio:1970, tipo:"sata", capacidad:2000},

{nombre:"Kingston A400 240GB", precio:710, tipo:"sata", capacidad:240},
{nombre:"Kingston A400 960GB", precio:1720, tipo:"sata", capacidad:960}
]);

// ================== RAM ==================
const ram = ordenarPrecio([
/******** DDR5 (ALTA GAMA) ********/
{nombre:"MANTA XSKY RGB 32GB 6400MHz", precio:6500, tipo:"DDR5", capacidad:32, velocidad:6400, nivel:3},
{nombre:"MANTA XFINITY RGB 32GB 6000MHz", precio:6500, tipo:"DDR5", capacidad:32, velocidad:6000, nivel:3},
{nombre:"MANTA XFINITY RGB 32GB 6600MHz", precio:6600, tipo:"DDR5", capacidad:32, velocidad:6600, nivel:3},

{nombre:"Kingston Fury 16GB 5600MHz", precio:3200, tipo:"DDR5", capacidad:16, velocidad:5600, nivel:2},
{nombre:"XPG Lancer RGB 16GB 6000MHz", precio:3100, tipo:"DDR5", capacidad:16, velocidad:6000, nivel:2},

{nombre:"ADATA 16GB 5600MHz", precio:2400, tipo:"DDR5", capacidad:16, velocidad:5600, nivel:2},
{nombre:"ADATA 32GB 5600MHz", precio:3900, tipo:"DDR5", capacidad:32, velocidad:5600, nivel:3},

{nombre:"BERACA 16GB 4800MHz", precio:2500, tipo:"DDR5", capacidad:16, velocidad:4800, nivel:2},
{nombre:"BERACA 16GB 5600MHz", precio:2850, tipo:"DDR5", capacidad:16, velocidad:5600, nivel:2},

/******** DDR4 (MEDIA GAMA) ********/
{nombre:"Corsair Vengeance RGB 16GB 3600MHz", precio:2300, tipo:"DDR4", capacidad:16, velocidad:3600, nivel:2},
{nombre:"Mushkin 16GB 3200MHz", precio:1650, tipo:"DDR4", capacidad:16, velocidad:3200, nivel:1},
{nombre:"Patriot Viper 32GB 3600MHz", precio:2250, tipo:"DDR4", capacidad:32, velocidad:3600, nivel:3},

{nombre:"BERACA 8GB 3200MHz", precio:950, tipo:"DDR4", capacidad:8, velocidad:3200, nivel:1},
{nombre:"BERACA 16GB 3200MHz", precio:1600, tipo:"DDR4", capacidad:16, velocidad:3200, nivel:1},
{nombre:"BERACA 32GB 3200MHz", precio:3000, tipo:"DDR4", capacidad:32, velocidad:3200, nivel:2},

{nombre:"BERACA 8GB 3600MHz", precio:1000, tipo:"DDR4", capacidad:8, velocidad:3600, nivel:1},
{nombre:"BERACA 16GB 3600MHz", precio:1600, tipo:"DDR4", capacidad:16, velocidad:3600, nivel:2},
{nombre:"BERACA 32GB 3600MHz", precio:3000, tipo:"DDR4", capacidad:32, velocidad:3600, nivel:3}

]);

// ================== GPU ==================
const gpu = ordenarPrecio([
/******** GAMA BAJA ********/
{nombre:"GT 710 2GB", precio:850, nivel:1, vram:2},
{nombre:"GT 730 2GB", precio:900, nivel:1, vram:2},

/******** GAMA MEDIA ********/
{nombre:"RTX 3050 8GB", precio:3500, nivel:2, vram:8},
{nombre:"RX 7600 8GB", precio:4700, nivel:3, vram:8},

/******** GAMA MEDIA-ALTA ********/
{nombre:"RTX 4060 Ti 8GB", precio:5100, nivel:3, vram:8},
{nombre:"RTX 4060 Ti Ventus 8GB", precio:4900, nivel:3, vram:8},

/******** GAMA ALTA ********/
{nombre:"RTX 5060 8GB", precio:5800, nivel:4, vram:8},
{nombre:"RTX 5060 Ti 8GB", precio:5600, nivel:4, vram:8},
{nombre:"RX 9060XT 16GB", precio:6900, nivel:4, vram:16},

/******** GAMA MUY ALTA ********/
{nombre:"RTX 5070 12GB", precio:7500, nivel:5, vram:12},
{nombre:"RTX 5070 Gaming Trio 12GB", precio:8700, nivel:5, vram:12},

{nombre:"RX 9070XT 16GB", precio:9500, nivel:5, vram:16}
]);

// ================== FUENTES ==================
const fuentes = ordenarPrecio([
/******** GAMA BAJA ********/
{nombre:"PF450 450W", precio:700, watts:450, cert:"white", nivel:1},
{nombre:"PF500X 500W", precio:750, watts:500, cert:"bronze", nivel:1},
{nombre:"PK500D 500W", precio:850, watts:500, cert:"bronze", nivel:1},

/******** GAMA MEDIA ********/
{nombre:"PF600X 600W", precio:800, watts:600, cert:"bronze", nivel:2},
{nombre:"PF650 650W", precio:800, watts:650, cert:"white", nivel:2},
{nombre:"PK650D 650W", precio:950, watts:650, cert:"bronze", nivel:2},

{nombre:"PN550M 550W", precio:900, watts:550, cert:"gold", nivel:2},
{nombre:"DA500 500W", precio:920, watts:500, cert:"bronze", nivel:2},

/******** GAMA MEDIA-ALTA ********/
{nombre:"PN750M 750W", precio:1600, watts:750, cert:"gold", nivel:3},
{nombre:"PN850M 850W", precio:1750, watts:850, cert:"gold", nivel:3},
{nombre:"DQ650M 650W", precio:1400, watts:650, cert:"gold", nivel:3},
{nombre:"DQ750M 750W", precio:1800, watts:750, cert:"gold", nivel:3},

{nombre:"ASUS 750W GOLD", precio:2000, watts:750, cert:"gold", nivel:3},

/******** GAMA ALTA ********/
{nombre:"PN1000M 1000W", precio:2300, watts:1000, cert:"gold", nivel:4},
{nombre:"PN1200M 1200W", precio:2600, watts:1200, cert:"gold", nivel:4},
{nombre:"PX850G 850W", precio:2250, watts:850, cert:"gold", nivel:4},

/******** GAMA EXTREMA ********/
{nombre:"PX1000G 1000W", precio:2800, watts:1000, cert:"gold", nivel:5},
{nombre:"PX1200G 1200W", precio:3100, watts:1200, cert:"gold", nivel:5},
{nombre:"PX1300P 1300W", precio:4600, watts:1300, cert:"platinum", nivel:5}

]);

// ================== CPU ==================
const cpu = ordenarPrecio([
{nombre:"Ryzen 5 3400G",socket:"AM4",precio:1300},
{nombre:"Ryzen 3 5300G",socket:"AM4",precio:1450},
{nombre:"Ryzen 5 5600GT",socket:"AM4",precio:1900},
{nombre:"Ryzen 7 5700G",socket:"AM4",precio:2250},

{nombre:"Ryzen 5 8500G",socket:"AM5",precio:1950},
{nombre:"Ryzen 5 8600G",socket:"AM5",precio:2070},
{nombre:"Ryzen 5 8400F",socket:"AM5",precio:2320},
{nombre:"Ryzen 7 7500F",socket:"AM5",precio:2720},
{nombre:"Ryzen 7 8700F",socket:"AM5",precio:3200},
{nombre:"Ryzen 7 8700G",socket:"AM5",precio:3750},
{nombre:"Ryzen 7 7700",socket:"AM5",precio:3850},
{nombre:"Ryzen 5 9600X",socket:"AM5",precio:3550},
{nombre:"Ryzen 9 9950X3D",socket:"AM5",precio:8350},

{nombre:"Intel i5 12400",socket:"LGA1700",precio:2650},
{nombre:"Intel i7 12700",socket:"LGA1700",precio:4200},

{nombre:"Intel Core Ultra 5 225",socket:"LGA1851",precio:2600},
{nombre:"Intel Core Ultra 5 245KF",socket:"LGA1851",precio:2750},
{nombre:"Intel Core Ultra 5 245K",socket:"LGA1851",precio:3100}
]);

// ================== PLACAS ==================
const placas = ordenarPrecio([

// AM4
{nombre:"MSI A520M-A PRO",socket:"AM4",precio:850},
{nombre:"ASUS PRIME A520M-K",socket:"AM4",precio:880},
{nombre:"MSI B550M PRO-VDH",socket:"AM4",precio:1250},
{nombre:"MSI B550M PRO VDH WIFI",socket:"AM4",precio:1450},
{nombre:"TUF B550-PLUS WIFI",socket:"AM4",precio:1900},
{nombre:"ASUS TUF B550-PLUS WIFI II",socket:"AM4",precio:2050},

// AM5
{nombre:"Gigabyte B650M H",socket:"AM5",precio:1350},
{nombre:"ASUS PRIME B650M-A II",socket:"AM5",precio:1850},
{nombre:"MSI B840M-P WIFI6E",socket:"AM5",precio:2200},
{nombre:"MSI X870E-P WIFI",socket:"AM5",precio:3400},

// LGA1700
{nombre:"MSI PRO H610M-G",socket:"LGA1700",precio:980},
{nombre:"Gigabyte H610M-K",socket:"LGA1700",precio:980},
{nombre:"MSI PRO B760M-E DDR4",socket:"LGA1700",precio:1100},
{nombre:"MSI PRO B760M-P DDR4",socket:"LGA1700",precio:1200},
{nombre:"Gigabyte B760M H",socket:"LGA1700",precio:1250},
{nombre:"ASUS PRIME B760M-A DDR5",socket:"LGA1700",precio:1600},
{nombre:"B760M GAMING PLUS WIFI DDR5",socket:"LGA1700",precio:1750},
{nombre:"MSI PRO B760-P WIFI DDR4",socket:"LGA1700",precio:1800},
{nombre:"MSI B760M GAMING PLUS WIFI",socket:"LGA1700",precio:2100},
{nombre:"TUF B760M-PLUS WIFI II DDR5",socket:"LGA1700",precio:2450},
{nombre:"PRIME Z790-P WIFI DDR5",socket:"LGA1700",precio:2600},
{nombre:"TUF Z790-PLUS WIFI DDR5",socket:"LGA1700",precio:2950},

// LGA1851
{nombre:"ASUS PRIME H810M-E",socket:"LGA1851",precio:1480},
{nombre:"ASUS PRIME B860M-A",socket:"LGA1851",precio:1950},
{nombre:"ROG STRIX B860-A GAMING WIFI",socket:"LGA1851",precio:3350},
{nombre:"ROG STRIX B860-F GAMING WIFI",socket:"LGA1851",precio:3550}

]);

const liquida = ordenarPrecio([

{nombre:"LE300",precio:670,radiador:120},
{nombre:"Gammaxx L120 V2",precio:750,radiador:120},
{nombre:"LE300 Marrs",precio:750,radiador:120},
{nombre:"LS320",precio:830,radiador:120},
{nombre:"Castle 240 EX",precio:830,radiador:240},
{nombre:"LS320 WH",precio:850,radiador:120},

{nombre:"Gammaxx L240 V2",precio:950,radiador:240},
{nombre:"LE240 V2",precio:1000,radiador:240},
{nombre:"LE500",precio:1000,radiador:240},

{nombre:"Gammaxx L240 ARGB WH",precio:1120,radiador:240},
{nombre:"LS520 ZERO DARK",precio:1100,radiador:240},
{nombre:"LS720 ZERO DARK",precio:1200,radiador:360},
{nombre:"LE720 A-RGB",precio:1200,radiador:360},
{nombre:"LE360 V2",precio:1200,radiador:360},

{nombre:"LS520 A-RGB",precio:1190,radiador:240},
{nombre:"LE720 WH A-RGB",precio:1250,radiador:360},
{nombre:"LE520 A-RGB",precio:1200,radiador:240},
{nombre:"LE520 WH A-RGB",precio:1250,radiador:240},

{nombre:"LT520",precio:1300,radiador:240},
{nombre:"LT520 WH",precio:1300,radiador:240},
{nombre:"Gammaxx L360 V2",precio:1100,radiador:360},
{nombre:"Gammaxx L360 ARGB WH",precio:1300,radiador:360},

{nombre:"LM240",precio:1700,radiador:240},
{nombre:"LM240 WH",precio:1750,radiador:240},
{nombre:"Mystique 240",precio:1750,radiador:240},

{nombre:"LT360 A-RGB",precio:1800,radiador:360},
{nombre:"LT360 A-RGB WH",precio:1850,radiador:360},

{nombre:"LP240",precio:1650,radiador:240},
{nombre:"LP360",precio:1950,radiador:360},

{nombre:"Mystique 240 A-RGB",precio:1950,radiador:240},
{nombre:"Mystique 240 A-RGB WH",precio:2000,radiador:240},
{nombre:"Mystique 360",precio:2200,radiador:360},
{nombre:"Mystique 360 A-RGB",precio:2300,radiador:360}

]);

const aire = ordenarPrecio([

{nombre:"CK-11509",precio:56},
{nombre:"CK-AM209",precio:56},
{nombre:"ALTA 9 PWM",precio:89.60},
{nombre:"ICE EDGE MINI FS V2",precio:133},

{nombre:"AG200",precio:196},
{nombre:"AG300",precio:210},
{nombre:"UL551",precio:210},

{nombre:"Gammaxx 300",precio:294},
{nombre:"Gammaxx 300R",precio:294},

{nombre:"AG400",precio:308},
{nombre:"AG400 PLUS",precio:364},
{nombre:"Gammaxx GTE V2",precio:378},
{nombre:"AG400 LED",precio:378},

{nombre:"AK400",precio:406},
{nombre:"AK400 WH",precio:406},
{nombre:"AG400 WH A-RGB",precio:406},

{nombre:"AG400 A-RGB",precio:434},
{nombre:"AG400 BK A-RGB V2",precio:462},
{nombre:"AG400 DIGITAL",precio:462},
{nombre:"AG400 WH A-RGB V2",precio:490},

{nombre:"AK400 DIGITAL SE",precio:504},
{nombre:"AK400 DIGITAL SE WH",precio:504},

{nombre:"AG400 DIGITAL BK A-RGB",precio:532},
{nombre:"Gammaxx GT A-RGB",precio:560},

{nombre:"AK400 DIGITAL",precio:588},
{nombre:"AK400 DIGITAL WH",precio:588},

{nombre:"AK400 ZERO DARK PLUS",precio:602},
{nombre:"AG400 PLUS DIGITAL",precio:700},

{nombre:"AN600",precio:700},
{nombre:"AK400 DIGITAL PRO",precio:728},

{nombre:"AG620",precio:840},
{nombre:"AK500 G2",precio:840},

{nombre:"AK500 WH",precio:826},
{nombre:"AG620 A-RGB",precio:896},

{nombre:"AG620 BK A-RGB",precio:910},
{nombre:"AG620 DIGITAL",precio:910},

{nombre:"AK500 ZERO DARK",precio:938},

{nombre:"AG620 WH A-RGB",precio:980},
{nombre:"AG620 BK A-RGB V2",precio:980},

{nombre:"AK620 DIGITAL SE",precio:980},
{nombre:"AK620 DIGITAL SE WH",precio:980},

{nombre:"AK700 DIGITAL WH",precio:1036},
{nombre:"AK700 DIGITAL NYX",precio:1036},

{nombre:"AK620",precio:1050},
{nombre:"AG620 DIGITAL BK",precio:1050},

{nombre:"AK620 G2",precio:1064},
{nombre:"AK620 G2 WH",precio:1064},

{nombre:"AS500",precio:1106},
{nombre:"AG620 DIGITAL BK A-RGB",precio:1106},

{nombre:"AK620 DIGITAL",precio:1148},
{nombre:"AK620 ZERO DARK",precio:1176},

{nombre:"AS500 PLUS",precio:1190},

{nombre:"AK620 G2 DIGITAL NYX",precio:1260},

{nombre:"AK620 DIGITAL PRO",precio:1352},

{nombre:"ASSASSIN III",precio:1330},
{nombre:"ASSASSIN IV",precio:1680},
{nombre:"ASSASSIN IV WH",precio:1750},
{nombre:"ASSASSIN IV S",precio:1498},
{nombre:"ASSASSIN IV S WH",precio:1498},
{nombre:"ASSASSIN IV VC VISION",precio:2086}

]);

// ================== EXPORT GLOBAL ==================
const productos = {
  nvme,
  sata,
  ram,
  gpu,
  fuentes,
  cpu,
  placas,
  liquida,
  aire
};
