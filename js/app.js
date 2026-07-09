function siluetaHumana(px){
  const w = Math.round(px * 62 / 180);
  return `<svg class="person-sil" width="${w}" height="${px}" viewBox="0 0 62 180" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
    <circle cx="31" cy="17" r="17"/>
    <path d="M31 35c-11 0-19 7-20 18L7 96c-.6 5 6.6 6 7.6 1l4.4-33h2l-4.6 108a6 6 0 0012 0l2.6-70h1.8l2.6 70a6 6 0 0012 0L44 64h2l4.4 33c1 5 8.2 4 7.6-1l-4-43c-1-11-9-18-20-18z"/>
  </svg>`;
}

function waLink(m){ return "https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(m); }



function imgs(f){ 
  const a=[]; 
  const totalFotos = f.fotos || 5; 
  for(let i=1; i<=totalFotos; i++) { 
    a.push(CARPETA+f.slug+"-"+i+".webp"); 
  } 
  return a; 
}

function bindWa(){ document.querySelectorAll("[data-wa]").forEach(el=>{ el.setAttribute("href",waLink(el.dataset.wa)); el.setAttribute("target","_blank"); el.setAttribute("rel","noopener"); }); }

/* Catálogo */
const grid = document.getElementById("grid");
FIGURAS.forEach((f,i)=>{
  const card=document.createElement("article");
  card.className="card";
  card.innerHTML=`
    <div class="card-num">${String(i+1).padStart(2,"0")}</div>
    <div class="card-img">
      ${f.badge?`<span class="badge ${f.badge==="XXL"?"xxl":""}">${f.badge}</span>`:""}
      <img src="${imgs(f)[0]}" alt="Figura ${f.name} Dragon Ball ${f.scale}" loading="lazy">
    </div>
    <div class="card-body">
      <h3>${f.name}</h3>
      <div class="scale"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 3v18M8 6l4-3 4 3M8 18l4 3 4-3"/></svg>${f.scale}</div>
      <span class="card-link">Ver figura
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </span>
    </div>`;
  card.addEventListener("click",()=>{ location.hash="figura="+f.slug; });
  grid.appendChild(card);
});

const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll(".card").forEach(c=>io.observe(c));

/* Vistas  */
const viewHome=document.getElementById("viewHome");
const viewDetail=document.getElementById("viewDetail");

function showFigura(f){
  const g=imgs(f);
  document.getElementById("dCrumb").textContent=f.name;
  document.getElementById("dScale").textContent=f.scale;
  document.getElementById("dName").textContent=f.name;
  document.getElementById("dDesc").textContent=f.desc;

  /* comparador: alturas en PX exactas a partir de la proporción real */
  const maxH=Math.max(f.height,PERSONA);
  const MAXBAR=170;                                 /* px de la más alta */
  const figPx=Math.round(f.height/maxH*MAXBAR);
  const perPx=Math.round(PERSONA/maxH*MAXBAR);
  document.getElementById("dCompare").innerHTML=`
    <div class="col">
      ${siluetaHumana(perPx)}
      <div class="cap">Persona<b>${(PERSONA/100).toFixed(2).replace('.',',')} m</b></div>
    </div>
    <div class="col">
      <div class="figbar" style="height:${figPx}px"></div>
      <div class="cap fig">${f.name.split(" ")[0]}<b>${(f.height/100).toFixed(2).replace('.',',')} m</b></div>
    </div>`;

  document.getElementById("dSpecs").innerHTML=[
    ["Personaje",f.name],["Medida",f.scale],["Material",MATERIAL],
    ["Acabado","Pintado a mano"],["Disponibilidad","Por encargo"],["Envío","Desde Málaga · coordinado por WhatsApp"]
  ].map(s=>`<li><b>${s[0]}</b> ${s[1]}</li>`).join("");

  const main=document.getElementById("dMainImg");
  main.src=g[0]; main.alt=f.name+" Dragon Ball "+f.scale;
  const th=document.getElementById("dThumbs"); th.innerHTML="";
  g.forEach((src,idx)=>{
    const t=document.createElement("img");
    t.src=src; t.alt=f.name+" foto "+(idx+1); t.loading="lazy";
    if(idx===0)t.classList.add("active");
    t.addEventListener("click",()=>{ main.src=src; th.querySelectorAll("img").forEach(x=>x.classList.remove("active")); t.classList.add("active"); });
    th.appendChild(t);
  });

  const wa=document.getElementById("dWa");
  wa.setAttribute("href",waLink(`¡Hola Titan Impress! Me mola la figura de ${f.name} (${f.scale}, ${MATERIAL}). ¿Me pasas precio y disponibilidad?`));
  wa.setAttribute("target","_blank"); wa.setAttribute("rel","noopener");

  document.title=`${f.name} — ${f.scale} | Titan Impress Málaga`;
  viewHome.classList.add("hidden"); viewDetail.classList.remove("hidden"); window.scrollTo(0,0);
}

function showHome(scrollTo){
  viewDetail.classList.add("hidden"); viewHome.classList.remove("hidden");
  document.title="Titan Impress | Figuras Dragon Ball a tamaño real hechas en Málaga";
  if(scrollTo){ const el=document.getElementById(scrollTo); if(el)el.scrollIntoView({behavior:"smooth"}); }
  else window.scrollTo(0,0);
}

function router(){
  const h=location.hash.replace(/^#/,"");
  if(h.startsWith("figura=")){ const f=FIGURAS.find(x=>x.slug===h.split("=")[1]); if(f){showFigura(f);return;} }
  showHome();
}
window.addEventListener("hashchange",router);

document.querySelectorAll("[data-nav]").forEach(el=>{
  el.addEventListener("click",()=>{
    const d=el.dataset.nav;
    document.getElementById("navLinks").classList.remove("open");
    if(d==="home"){ location.hash=""; showHome(); return; }
    if(!viewDetail.classList.contains("hidden")){ location.hash=""; showHome(d); }
    else { const t=document.getElementById(d); if(t)t.scrollIntoView({behavior:"smooth"}); }
  });
});
document.getElementById("logoHome").addEventListener("click",()=>{ location.hash=""; showHome(); });
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));

document.getElementById("year").textContent=new Date().getFullYear();
bindWa(); router();

/* LIGHTBOX */

function abrirAmpliacion(rutaImagen) {
  const modal = document.getElementById('modalAmpliacion');
  const imagen = document.getElementById('imagenModal');
  
 
  imagen.src = rutaImagen;

  modal.style.display = 'flex';
  

  document.body.style.overflow = 'hidden';
}

function cerrarAmpliacion() {
  const modal = document.getElementById('modalAmpliacion');
  

  modal.style.display = 'none';
  

  document.body.style.overflow = 'auto';
}


/*  LÓGICA PARA NAVEGAR ENTRE IMÁGENES */

let imagenesGaleria = []; 
let indiceImagenActual = 0; 

function abrirAmpliacion(rutaImagen) {
    const modal = document.getElementById('modalAmpliacion');
    const imagen = document.getElementById('imagenModal');

    const miniaturas = document.querySelectorAll('.gallery-thumbs img');
    
    imagenesGaleria = Array.from(miniaturas).map(img => img.src);
    
    indiceImagenActual = imagenesGaleria.indexOf(rutaImagen);

    if (indiceImagenActual === -1) {
        imagenesGaleria = [rutaImagen];
        indiceImagenActual = 0;
    }

    imagen.src = rutaImagen;
    modal.style.display = 'flex';

    document.body.style.overflow = 'hidden';
}

function cerrarAmpliacion() {
    document.getElementById('modalAmpliacion').style.display = 'none';
    
    document.body.style.overflow = 'auto';
}

function cambiarImagen(direccion) {
    if (imagenesGaleria.length <= 1) return;

  
    indiceImagenActual = (indiceImagenActual + direccion + imagenesGaleria.length) % imagenesGaleria.length;
    document.getElementById('imagenModal').src = imagenesGaleria[indiceImagenActual];
}