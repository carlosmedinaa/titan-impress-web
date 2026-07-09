// js/data.js
// ===== AQUÍ EDITAS TODO LO TUYO: WhatsApp, figuras y medidas =====

// Tu número de WhatsApp (formato internacional, sin + ni espacios)
const WHATSAPP = "34678018473";

// Referencia humana para el comparador de altura (en cm)
const PERSONA = 175;

// Material y config de fotos
const MATERIAL = "PLA · impresión 3D";
const CARPETA = "imagenes/";

// Tus figuras. height = altura real en cm (la usa el comparador).
// slug = nombre de los archivos de foto: p.ej. "kid-buu" -> imagenes/kid-buu-1.jpg ... -5.jpg
const FIGURAS = [
  { slug:"kid-buu", name:"Kid Buu", height:147, scale:"147 cm de altura", badge:"Top ventas", fotos: 5,
    desc:"El Majin más salvaje en su forma pura, con todo su dinamismo capturado al milímetro en PLA. Un formato imponente pintado a mano que domina cualquier set." },
  { slug:"goku-kid", name:"Goku Kid", height:125, scale:"125 cm de altura", badge:"", fotos: 3,
    desc:"El pequeño Goku de los orígenes sobre su nube Kintoun. Pura nostalgia de Dragon Ball clásico con acabados premium para coleccionistas exigentes." },
  { slug:"vegeta-kid", name:"Vegeta Kid", height:80, scale:"80 cm de altura", badge:"", fotos: 3,
    desc:"El joven príncipe Saiyan recreado con toda su arrogancia. El tamaño perfecto para convertirse en la joya central de cualquier vitrina o estantería." },
  { slug:"goku-namek-ssj", name:"Goku Namek SSJ1", height:205, scale:"205 cm · Tamaño real", badge:"XXL", fotos: 5,
    desc:"El legendario despertar en Namek a más de 2 metros de altura. Aura, musculatura y cada mechón texturizado. Un impacto visual brutal en escala 1:1." },
  { slug:"trunks", name:"Trunks", height:175, scale:"175 cm · Tamaño real", badge:"", fotos: 4,
    desc:"El guerrero del futuro a escala real, empuñando su mítica espada. Presencia imponente para que te mire de tú a tú en tu propia habitación." },
  { slug:"maestro-roshi", name:"Maestro Roshi con Tortuga", height:130, scale:"130 cm de altura", badge:"", fotos: 5,
    desc:"El legendario Mutenroshi acompañado de su inseparable tortuga. Una pieza carismática, llena de texturas y con un guiño directo a los inicios de la saga." },
  { slug:"goten-trunks", name:"Goten y Trunks con base", height:130, scale:"130 cm · con base", badge:"Dúo", fotos: 4,
    desc:"Los herederos Saiyan listos para la acción sobre su base personalizada. Un conjunto dinámico que captura a la perfección la complicidad antes de la fusión." },
  { slug:"goku-black-rose", name:"Goku Black Rosé con Guadaña", height:205, scale:"Figura 205 cm · Guadaña 205 cm", badge:"XXL", fotos: 5,
    desc:"La deidad oscura empuñando su espectacular guadaña de energía. Máxima escala y ambición en una obra maestra de más de dos metros hecha para impresionar." },
  { slug:"busto-majin-vegeta", name:"Busto Majin Vegeta", height:135, scale:"135 cm · Busto", badge:"Busto", fotos: 5,
    desc:"Monumental busto de Majin Vegeta marcado por el sello de Babidi. Un trabajo exhaustivo centrado en capturar la rabia, el orgullo y el detalle facial del príncipe." },
  { slug:"vegeta-ssj3", name:"Vegeta SSJ3", height:205, scale:"205 cm · XXL", badge:"XXL", fotos: 4,
    desc:"La épica transformación en Fase 3 materializada a más de dos metros. Melena espectacular, pose desafiante y modelado exclusivo para una presencia inigualable." },
  { slug:"milhouse", name:"Milhouse", height:100, scale:"100 cm · Tamaño Real", badge:"Viral", fotos: 5,
    desc:"El mítico personaje de Los Simpson recreado a un metro de altura. Una pieza brutal para aportar un toque distintivo y exclusivo a un buen setup de creador de contenido." },
  { slug:"charmander", name:"Charmander", height:60, scale:"60 cm · Tamaño real", badge:"Nuevo", fotos: 5,
    desc:"El inicial de fuego más querido a escala 1:1. Una réplica exacta y llena de nostalgia, pintada a mano. Perfecta para darle un toque increíble y retro a cualquier rincón." },
  { slug:"kearney", name:"Kearney", height:100, scale:"100 cm de altura", badge:"Custom", fotos: 5,
    desc:"El mítico matón de Springfield a un metro de altura. Una pieza exclusiva, gamberra y personalizada que amplía la colección amarilla del taller. Ideal para salir de lo convencional." },
    { slug:"goku-namek", name:"Goku Namek", height:205, scale:"205 cm de altura · Tamaño Real", badge:"XXL", fotos: 5,
    desc:"El legendario Super Saiyan tras su encarnizada batalla contra Freezer. Versión 'Battle Damaged' a gran escala, con un nivel de pintura, texturas y ropa destrozada que te deja sin palabras." },
  ];