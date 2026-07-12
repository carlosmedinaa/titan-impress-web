// js/data_en.js
// ===== EDIT EVERYTHING HERE FOR THE ENGLISH VERSION: WhatsApp, figures, and sizes =====

// Your WhatsApp number (international format, no + or spaces)
const WHATSAPP = "34678018473";

// Human reference for the height comparator (in cm)
const PERSONA = 175;

// Material and photo config
const MATERIAL = "PLA · 3D printed";
const CARPETA = "imagenes/";

// Your figures. height = real height in cm (used by the comparator).
// slug = photo file name: e.g., "kid-buu" -> imagenes/kid-buu-1.jpg ... -5.jpg
const FIGURAS = [
  { slug:"kid-buu", name:"Kid Buu", height:147, scale:"147 cm tall", badge:"Best Seller", fotos: 5,
    desc:"The wildest Majin in his pure form, with all his dynamism captured to the millimeter in PLA. An imposing hand-painted format that dominates any setup." },
  { slug:"goku-kid", name:"Goku Kid", height:125, scale:"125 cm tall", badge:"", fotos: 3,
    desc:"Young Goku from the origins on his Flying Nimbus (Kintoun). Pure classic Dragon Ball nostalgia with premium finishes for demanding collectors." },
  { slug:"vegeta-kid", name:"Vegeta Kid", height:80, scale:"80 cm tall", badge:"", fotos: 3,
    desc:"The young Saiyan prince recreated with all his arrogance. The perfect size to become the centerpiece of any showcase or shelf." },
  { slug:"goku-namek-ssj", name:"Goku Namek SSJ1", height:205, scale:"205 cm · Life-size", badge:"XXL", fotos: 5,
    desc:"The legendary awakening on Namek standing over 2 meters tall. Aura, musculature, and every single hair strand fully textured. A brutal visual impact on a 1:1 scale." },
  { slug:"trunks", name:"Trunks", height:175, scale:"175 cm · Life-size", badge:"", fotos: 4,
    desc:"The warrior from the future at life-size, wielding his mythical sword. An imposing presence that looks you right in the eye in your own room." },
  { slug:"maestro-roshi", name:"Master Roshi with Turtle", height:130, scale:"130 cm tall", badge:"", fotos: 5,
    desc:"The legendary Muten Roshi accompanied by his inseparable turtle. A charismatic piece, full of textures and a direct nod to the beginnings of the saga." },
  { slug:"goten-trunks", name:"Goten & Trunks with base", height:130, scale:"130 cm · with base", badge:"Duo", fotos: 4,
    desc:"The Saiyan heirs ready for action on their custom base. A dynamic set that perfectly captures their bond before performing the fusion." },
  { slug:"goku-black-rose", name:"Goku Black Rosé with Scythe", height:205, scale:"Figure 205 cm · Scythe 205 cm", badge:"XXL", fotos: 5,
    desc:"The dark deity wielding his spectacular energy scythe. Maximum scale and ambition in a masterpiece standing over two meters tall, made to impress." },
  { slug:"busto-majin-vegeta", name:"Majin Vegeta Bust", height:135, scale:"135 cm · Bust", badge:"Bust", fotos: 5,
    desc:"Monumental bust of Majin Vegeta marked by Babidi's curse. An exhaustive work focused on capturing the rage, pride, and facial details of the prince." },
  { slug:"vegeta-ssj3", name:"Vegeta SSJ3", height:205, scale:"205 cm · XXL", badge:"XXL", fotos: 4,
    desc:"The epic Phase 3 transformation materialized at over two meters tall. Spectacular hair, a defying pose, and exclusive modeling for an unmatched presence." },
  { slug:"milhouse", name:"Milhouse", height:100, scale:"100 cm · Life-size", badge:"Viral", fotos: 5,
    desc:"The iconic character from The Simpsons recreated at one meter tall. A brilliant piece to add a distinctive and exclusive touch to any content creator's setup." },
  { slug:"charmander", height:60, scale:"60 cm · Life-size", badge:"New", fotos: 5,
    desc:"The most beloved fire starter on a 1:1 scale. An exact replica full of nostalgia, completely hand-painted. Perfect for giving an incredible retro touch to any space." },
  { slug:"kearney", name:"Kearney", height:100, scale:"100 cm tall", badge:"Custom", fotos: 5,
    desc:"The legendary Springfield bully at one meter tall. An exclusive, rogue, and custom piece expanding the yellow collection of the workshop. Ideal for standing out from the conventional." },
  { slug:"Goku-namek", name:"Goku Namek", height:205, scale:"205 cm tall · Life-size", badge:"XXL", fotos: 5,
    desc:"The legendary Super Saiyan after his fierce battle against Frieza. Large-scale 'Battle Damaged' version, featuring a stunning level of paint, textures, and shredded clothing that will leave you speechless." },
];