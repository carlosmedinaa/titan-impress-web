// js/data.js
// ===== AQUÍ EDITAS TODO LO TUYO: WhatsApp, figuras y medidas =====

// Tu número de WhatsApp (formato internacional, sin + ni espacios)
const WHATSAPP = "34678018473";

// Referencia humana para el comparador de altura (en cm)
const PERSONA = 175;

// Material y config de fotos
const MATERIAL = "PLA · impresión 3D";
const FOTOS_POR_FIGURA = 5;
const CARPETA = "imagenes/";

// Tus figuras. height = altura real en cm (la usa el comparador).
// slug = nombre de los archivos de foto: p.ej. "kid-buu" -> imagenes/kid-buu-1.jpg ... -5.jpg
const FIGURAS = [
  { slug:"kid-buu", name:"Kid Buu", height:147, scale:"147 cm de altura", badge:"Top ventas",
    desc:"El Majin más salvaje en su forma pura, con todo su dinamismo congelado en PLA. Gran formato pintado a mano que domina cualquier salón." },
  { slug:"goku-kid", name:"Goku Kid", height:125, scale:"125 cm de altura", badge:"",
    desc:"El pequeño Goku de los orígenes, nube Kintoun y mirada de aventura. Puro Dragon Ball clásico para los que crecieron con la saga." },
  { slug:"vegeta-kid", name:"Vegeta Kid", height:80, scale:"80 cm de altura", badge:"",
    desc:"El joven príncipe Saiyan con toda su chulería. Formato perfecto para presidir una vitrina o estantería destacada." },
  { slug:"goku-namek-ssj", name:"Goku Namek SSJ1", height:205, scale:"205 cm · Tamaño real", badge:"XXL",
    desc:"El primer Super Saiyan de la historia, el de Namek, a más de 2 metros. Aura, mirada y cada mechón de pelo trabajados. Impacto puro." },
  { slug:"trunks", name:"Trunks", height:175, scale:"175 cm · Tamaño real", badge:"",
    desc:"El guerrero del futuro a escala real, espada a la espalda, listo para mirarte de tú a tú desde tu propia colección." },
  { slug:"maestro-roshi", name:"Maestro Roshi con Tortuga", height:130, scale:"130 cm de altura", badge:"",
    desc:"El mítico Mutenroshi acompañado de su tortuga. Una pieza con carácter y un guiño directo a los inicios de la serie." },
  { slug:"goten-trunks", name:"Goten y Trunks con base", height:130, scale:"130 cm · con base", badge:"Dúo",
    desc:"Los dos pequeños guerreros juntos sobre base incluida. Un conjunto lleno de detalle, complicidad y ganas de fusión." },
  { slug:"goku-black-rose", name:"Goku Black Rosé con Guadaña", height:205, scale:"Figura 205 cm · Guadaña 205 cm", badge:"XXL",
    desc:"Goku Black en su forma Rosé empuñando su guadaña de energía, ambos a 205 cm. La pieza más espectacular del taller: máxima escala e impacto." },
  { slug:"busto-majin-vegeta", name:"Busto Majin Vegeta", height:135, scale:"135 cm · Busto", badge:"Busto",
    desc:"Imponente busto de Majin Vegeta con la marca M en la frente, cargado de intensidad. Una obra centrada en la rabia y el detalle facial del príncipe." },
  { slug:"eladio-carrion", name:"Eladio Carrión", height:180, scale:"180 cm · Tamaño real", badge:"Custom",
    desc:"Figura personalizada a tamaño real del artista Eladio Carrión. La prueba de que en Titan Impress también damos vida a tus encargos más locos." },
  { slug:"milhouse", name:"Milhouse", height:100, scale:"100 cm de altura", badge:"",
    desc:"El entrañable Milhouse de Los Simpson a 1 metro. Divertida, llamativa y perfecta para salir del universo Dragon Ball con estilo." }
];