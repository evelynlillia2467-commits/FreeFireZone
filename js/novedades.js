(async function(){
const CFG={email:"soporteoficialweb@gmail.com",url:"https://sqxohgghsszbbbuwrval.supabase.co",key:"sb_publishable_4WwGqIl_j8mul07m8kN9Xw_yGgNpcLM"};
const SD={};let SDok=false,SDst=0;
try{const r=await fetch(CFG.url+"/rest/v1/site_content?select=key,data",{headers:{apikey:CFG.key},cache:"no-store",signal:(AbortSignal.timeout?AbortSignal.timeout(8000):undefined)});SDok=r.ok||r.status===404;if(r.ok)(await r.json()).forEach(x=>{SD[x.key]=x.data})}catch(e){}
window.FFZ_TR=SD.tr||{};
const okimg=u=>typeof u==="string"&&u.startsWith(CFG.url+"/storage/v1/object/public/media/")?u:"";
const safe=u=>/^https?:\/\//i.test(u||"")?u:"";
/* ============ DATOS ============ */
// Los datos editables (banner, agenda, novedades) viven en datos.js y se actualizan desde el Panel.
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let AGENDA=SD.agenda||[],NEWS=SD.news||[];
const DAYS=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];
const DAYS_FULL=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
const CATS={diamantes:{n:"Diamantes",c:"#ffc83d"},ruleta:{n:"Eventos",c:"#ff5a1f"},pase:{n:"Pase de batalla",c:"#37e2d5"},otro:{n:"Otros",c:"#b48cff"}};
const CHARS=[
 {n:"Alok",r:"Soporte",c:"#ffc83d",p:"Crea un aura que cura y aumenta la velocidad de movimiento del equipo."},
 {n:"Chrono",r:"Defensa",c:"#37e2d5",p:"Despliega un escudo que bloquea daño enemigo y permite moverse más rápido dentro."},
 {n:"K",r:"Soporte",c:"#ff4d8d",p:"Alterna entre recuperar HP con EP o aumentar la regeneración de EP."},
 {n:"Kelly",r:"Movilidad",c:"#ff5a1f",p:"Gana velocidad al correr: útil para rotar y tomar posiciones antes que el rival."},
 {n:"Jota",r:"Ataque",c:"#b48cff",p:"Recupera HP al derribar enemigos con escopetas o subfusiles."},
 {n:"Skyler",r:"Utilidad",c:"#7dd87d",p:"Libera una onda que destruye muros de gloo enemigos y repone chaleco."},
 {n:"Hayato",r:"Ataque",c:"#ff7a45",p:"Su penetración de armadura crece a medida que baja su vida máxima."},
 {n:"Wukong",r:"Sigilo",c:"#9be15d",p:"Se transforma en un arbusto para esconderse y reposicionarse."},
 {n:"Moco",r:"Información",c:"#6ec6ff",p:"Marca a los enemigos que impacta para que el equipo los vea."},
 {n:"Maxim",r:"Soporte",c:"#ffb347",p:"Come y usa botiquines más rápido que el resto."},
 {n:"Dimitri",r:"Soporte",c:"#ff6b81",p:"Crea una zona que cura al equipo y ayuda a recuperar compañeros caídos."},
 {n:"Laura",r:"Francotirador",c:"#c39bd3",p:"Mejora la precisión al apuntar con mira."}
];
const COMBOS=[
 {a:"Jota",b:"Alok",t:"Rush con respaldo",p:"Jota se cura al derribar y Alok mantiene al equipo con vida y rápido entre peleas."},
 {a:"Chrono",b:"K",t:"Defender zona",p:"Chrono protege el punto mientras K mantiene la energía y la salud del grupo."},
 {a:"Kelly",b:"Skyler",t:"Rotación agresiva",p:"Kelly llega primero a la posición y Skyler rompe las defensas de gloo rivales."},
 {a:"Dimitri",b:"Hayato",t:"Presión con curación",p:"Hayato presiona de frente mientras la zona de Dimitri lo mantiene en pie."},
 {a:"Moco",b:"Laura",t:"Información y precisión",p:"Moco marca al rival y Laura aprovecha su precisión con mira para castigar."},
 {a:"Wukong",b:"Moco",t:"Emboscada",p:"Wukong se esconde cerca del camino y Moco marca a los que se acercan."}
];
const MAPS=[
 {n:"Trucos generales",l:["Juega con audífonos: los pasos y disparos te dicen dónde están los rivales.","Rota temprano hacia el siguiente círculo; llegar tarde te deja sin posiciones.","Usa el muro de gloo para curarte, recargar o cambiar de ángulo, no solo para cubrirte.","Avisa por el chat o la voz cuando veas enemigos: la información gana partidas.","Antes de saltar, decide con tu equipo la zona de aterrizaje y el punto de reunión.","Practica 10 minutos en el campo de entrenamiento antes de jugar clasificatoria."]},
 {n:"Bermuda",l:["Aterriza en zonas de borde para equiparte con menos presión.","Mantén siempre una ruta hacia el siguiente círculo antes de pelear.","Usa los desniveles del terreno para cubrirte al recargar."]},
 {n:"Purgatorio",l:["Reconoce los puntos de loot de las zonas cercanas antes de saltar.","Prioriza cubierta dura en las pelas de calle abierta.","No te quedes en el último edificio del círculo: se vuelve una trampa."]},
 {n:"Kalahari",l:["Evita los espacios abiertos del desierto; avanza por las formaciones rocosas.","Lleva siempre un vehículo cerca para escapar de la zona.","Escucha pasos y disparos: el sonido viaja lejos."]},
 {n:"Alpine",l:["Calcula tiempo de rotación: la nieve y las pendientes frenan.","Aprovecha los desniveles para subir con ventaja.","Cuida tu posición contra el fondo blanco, eres más visible."]},
 {n:"Nexterra",l:["Aprende los accesos y las salidas rápidas de cada sector.","Controla la altura: quien está arriba suele ver primero.","Cambia de zona antes de que el círculo te obligue a correr."]}
];

/* ============ UTILIDADES ============ */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function msg(t,ok){const b=$("#admBody");let m=$("#admMsg");if(!m){m=document.createElement("p");m.id="admMsg";m.setAttribute("role","status");b.parentNode.insertBefore(m,b)}m.className="amsg "+(ok===1?"ok":ok===0?"bad":"");m.textContent=t}
function toast(m){const d=$("#adm");if(d&&d.open){msg(m,/^(Imagen|Cambios)/.test(m)?1:0);return}const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("show"),2600)}
const todayIdx=(new Date().getDay()+6)%7;

/* NAV */
$("#burger").onclick=()=>{const o=$("#menu").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o)};
addEventListener("scroll",()=>$("#top").classList.toggle("show",scrollY>700),{passive:true});
$("#top").onclick=()=>scrollTo({top:0,behavior:reduce?"auto":"smooth"});
/* ============ NOVEDADES Y BANNER ============ */
let nf="Todas";
function renderNews(){
  const tags=["Todas",...new Set(NEWS.map(n=>n.tag))];
  $("#newsF").innerHTML=NEWS.length?tags.map(t=>`<button class="chip" aria-pressed="${t===nf}" data-t="${esc(t)}">${esc(t)}</button>`).join(""):"";
  $$("#newsF .chip").forEach(b=>b.onclick=()=>{nf=b.dataset.t;renderNews()});
  $("#news").innerHTML=NEWS.length?NEWS.filter(n=>nf==="Todas"||n.tag===nf).map(n=>`<article class="nw"><div class="thumb" style="--bg:${okimg(n.img)?`url(${okimg(n.img)}) center/cover`:"linear-gradient(135deg,#ff5a1f,#7b1fa2)"}">${okimg(n.img)?"":"FF"}</div><div class="b"><span class="tag" style="--c:var(--gold);align-self:flex-start">${esc(n.tag)}</span><h3>${esc(n.h)}</h3><small>${esc(n.d)}</small>${n.x?`<p class="nx">${esc(n.x)}</p>`:""}</div></article>`).join(""):`<div class="empty">Aún no hay novedades publicadas. Vuelve pronto.</div>`;
}
renderNews();

/* ============ COOKIES Y PUBLICIDAD ============ */
(function(){
  let c=null;try{c=localStorage.getItem("ffz_ck")}catch(e){}
  function ads(){const A=SD.ads||{},cl=A.client||SD.adsense||"";if(c!=="1"||!/^ca-pub-\d{8,20}$/.test(cl))return;
    if(!window._ad){window._ad=1;const e=document.createElement("script");e.async=true;e.crossOrigin="anonymous";e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+encodeURIComponent(cl);document.head.appendChild(e)}
    $$(".ad[data-pos]").forEach(box=>{const sl=A[box.dataset.pos]||"";if(!/^\d{5,20}$/.test(sl)||box.dataset.on)return;box.dataset.on=1;const i=document.createElement("ins");i.className="adsbygoogle";i.style.display="block";i.setAttribute("data-ad-client",cl);i.setAttribute("data-ad-slot",sl);i.setAttribute("data-ad-format","auto");i.setAttribute("data-full-width-responsive","true");box.appendChild(i);box.hidden=false;try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(_){}})}
  $("#ck").hidden=!!c;ads();
  $("#ckY").onclick=()=>{c="1";try{localStorage.setItem("ffz_ck","1")}catch(e){}$("#ck").hidden=true;ads()};
  $("#ckN").onclick=()=>{c="0";try{localStorage.setItem("ffz_ck","0")}catch(e){}$("#ck").hidden=true};
})();

/* ============ PANEL ============ */
(function(){
  const dlg=$("#adm"),body=$("#admBody"),tabs=$("#admTabs");let D=null,tab="b",tok="",pend="",fails=0,lock=0;
  const hdr=x=>Object.assign({apikey:CFG.key,Authorization:"Bearer "+tok},x);
  const base=()=>JSON.parse(JSON.stringify({banner:SD.banner||{on:false},agenda:SD.agenda||[],news:SD.news||[],games:SD.games||[],gb:SD.gb||"",hb:SD.hb||{},ads:SD.ads||{client:SD.adsense||""},tr:SD.tr||{}}));
  const T=[["d","Anuncios"],["b","Banner"],["p","Portada"],["a","Agenda"],["n","Novedades"],["g","Juegos"],["t","Traducciones"]];
  function sync(){AGENDA=D.agenda;NEWS=D.news;typeof GAMES!="undefined"&&(GAMES=D.games);typeof GB!="undefined"&&(GB=D.gb);typeof HB!="undefined"&&(HB=D.hb);
    typeof renderDays=="function"&&renderDays();typeof renderEvents=="function"&&renderEvents();typeof renderToday=="function"&&renderToday();typeof renderNews=="function"&&renderNews();typeof renderGames=="function"&&renderGames();typeof renderPromo=="function"&&renderPromo(D.banner);typeof renderPortada=="function"&&renderPortada()}
  async function up(f){
    const c=await new Promise(res=>{const r=new FileReader();r.onload=()=>{const i=new Image();i.onerror=()=>res(null);i.onload=()=>{const k=Math.min(1,1200/i.width),cv=document.createElement("canvas");cv.width=i.width*k;cv.height=i.height*k;const cx=cv.getContext("2d");cx.fillStyle="#fff";cx.fillRect(0,0,cv.width,cv.height);cx.drawImage(i,0,0,cv.width,cv.height);cv.toBlob(res,"image/jpeg",.82)};i.src=r.result};r.readAsDataURL(f)});
    if(!c)throw new Error("imagen");const n=Date.now()+"-"+Math.random().toString(36).slice(2,8)+".jpg";
    const r=await fetch(CFG.url+"/storage/v1/object/media/"+n,{method:"POST",headers:hdr({"Content-Type":"image/jpeg"}),body:c});
    if(!r.ok)throw new Error("subida");return CFG.url+"/storage/v1/object/public/media/"+n}
  async function login(e,p){
    if(Date.now()<lock)return toast("Demasiados intentos. Espera un minuto.");
    if(!p)return toast("Escribe la contraseña.");
    msg("Entrando…");
    let r;try{r=await fetch(CFG.url+"/auth/v1/token?grant_type=password",{method:"POST",headers:{apikey:CFG.key,"Content-Type":"application/json"},body:JSON.stringify({email:e,password:p})})}catch(x){return msg("No se pudo conectar con Supabase. Revisa tu internet o si el proyecto está pausado (supabase.com → tu proyecto → Restore project).",0)}
    if(!r.ok){let j={};try{j=await r.json()}catch(x){}const t=(j.error_description||j.msg||j.message||"").toLowerCase();
      if(r.status===400||r.status===422){if(++fails>=5){lock=Date.now()+60000;fails=0}}
      return msg(t.includes("not confirmed")?"El usuario existe pero no está confirmado. En Supabase → Authentication → Users, confírmalo (o créalo con Auto Confirm User).":t.includes("invalid login")?"Contraseña incorrecta, o el usuario "+e+" no existe en Supabase (créalo en Authentication → Users → Add user).":(r.status===401||t.includes("api key"))?"La clave pública de Supabase no es válida. Revisa CFG.key en los archivos js.":"No se pudo entrar ("+r.status+"). "+(j.error_description||j.msg||j.message||""),0)}
    tok=(await r.json()).access_token;await reload();D=base();view();
    try{const c=await fetch(CFG.url+"/rest/v1/site_content?select=key&limit=1",{headers:hdr({})});
      msg(c.ok?"✔ Conectado. Ya puedes editar y publicar.":c.status===404?"Entraste, pero falta crear la tabla: ejecuta supabase.sql en el SQL Editor de Supabase.":"Entraste, pero Supabase respondió "+c.status+" al leer los datos.",c.ok?1:0)}catch(x){msg("Entraste, pero no pude comprobar la conexión.",0)}}
  async function reload(){try{const r=await fetch(CFG.url+"/rest/v1/site_content?select=key,data",{headers:hdr({}),cache:"no-store"});SDst=r.status;SDok=r.ok||r.status===404;if(r.ok)(await r.json()).forEach(x=>{SD[x.key]=x.data})}catch(e){SDst=0}}
  async function publish(){
    if(!SDok){msg("Leyendo el contenido actual…");await reload();if(SDok)return msg("Ya pude leer el contenido. Pulsa «Salir», vuelve a entrar con la contraseña y repite tus cambios, para no borrar nada por error.",0)}
    if(!SDok)return msg("No pude leer el contenido actual de la web (código "+SDst+"); no publico para no borrarlo. "+(SDst===0?"Parece un problema de conexión: revisa tu internet o si el proyecto de Supabase está pausado.":"Ejecuta el supabase.sql nuevo en el SQL Editor."),0);
    const b=$("#admP");b.disabled=true;msg("Traduciendo textos…");
    let trFail=0;try{const R=await (window.ffzBuildTr?window.ffzBuildTr(D,(a,z)=>msg("Traduciendo textos "+a+"/"+z+"…")):{tr:D.tr||{},fail:0});D.tr=R.tr;trFail=R.fail;window.FFZ_TR=D.tr;window.ffzApply&&window.ffzApply()}catch(_){trFail=1}
    msg("Publicando…");
    try{
      const r=await fetch(CFG.url+"/rest/v1/site_content?on_conflict=key",{method:"POST",headers:hdr({"Content-Type":"application/json",Prefer:"resolution=merge-duplicates,return=minimal"}),body:JSON.stringify(Object.keys(D).map(k=>({key:k,data:D[k]})))});
      if(!r.ok){let t="";try{t=(await r.json()).message||""}catch(e){}
        let em="";try{em=JSON.parse(atob(tok.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"))).email||""}catch(x){}
        msg(r.status===401?"Tu sesión venció. Vuelve a entrar con la contraseña y publica otra vez.":r.status===403?"Supabase no dejó guardar"+(t?" ("+t+")":"")+". Tu sesión es de «"+(em||"?")+"». Vuelve a ejecutar el supabase.sql NUEVO en el SQL Editor (es seguro repetirlo) y entra otra vez.":r.status===404?"No existe la tabla site_content. Ejecuta supabase.sql en el SQL Editor de Supabase.":"Error "+r.status+(t?": "+t:""),0);
        if(r.status===401){tok="";D=null;view()}return}
      const v=await fetch(CFG.url+"/rest/v1/site_content?select=key",{headers:{apikey:CFG.key},cache:"no-store"});
      const n=v.ok?(await v.json()).length:0;
      msg(n?"✔ Publicado. Ya lo ve todo el mundo (recarga la página para comprobarlo)."+(trFail?" Algunos textos no se pudieron traducir y se verán en español; revisa la pestaña Traducciones o vuelve a publicar más tarde.":""):"Se envió, pero no pude comprobarlo. Recarga la página para ver si quedó.",n?1:undefined);
    }catch(e){msg("No hay conexión con Supabase. Revisa tu internet e inténtalo de nuevo.",0)}
    finally{b.disabled=false}}
  function TRV(){const k=Object.keys(D.tr||{});
    return '<p class="tip">Lo que publicas se traduce solo al inglés y al portugués cuando pulsas «Publicar cambios». Aquí puedes corregir cualquier traducción; también se guarda al publicar.</p><button class="btn g" id="trGo" type="button">Traducir textos nuevos ahora</button>'+
      (k.length?'<ul class="al">'+k.map(x=>`<li style="display:grid;gap:6px"><b>${esc(x.length>90?x.slice(0,90)+"…":x)}</b><input data-tk="${esc(x)}" data-tl="en" placeholder="English" value="${esc(D.tr[x].en)}"><input data-tk="${esc(x)}" data-tl="pt" placeholder="Português" value="${esc(D.tr[x].pt)}"></li>`).join("")+'</ul>':'<p class="tip">Aún no hay traducciones. Pulsa el botón o publica los cambios.</p>')}
  function view(){
    tabs.innerHTML=tok?T.map(t=>`<button class="chip" data-t="${t[0]}" aria-selected="${t[0]===tab}">${t[1]}</button>`).join("")+'<button class="chip" data-t="x">Salir</button>':"";
    $("#admP").hidden=!tok;
    if(!tok){body.innerHTML=`<p class="tip">Escribe la contraseña de administrador.</p><div class="field"><label>Contraseña</label><input id="lP" type="password" autocomplete="current-password" placeholder="Contraseña"></div><button class="btn p" id="li" type="button">Entrar</button>`;return}
    const B=D.banner;
    if(tab==="b")body.innerHTML=`<label class="ck"><input type="checkbox" id="bOn" ${B.on?"checked":""}> Mostrar banner</label>
      <div class="field"><label>Título</label><input id="bT" value="${esc(B.title)}"></div><div class="field"><label>Texto</label><textarea id="bX" rows="3">${esc(B.text)}</textarea></div><div class="two"><div class="field"><label>Texto del botón (opcional)</label><input id="bB" maxlength="30" value="${esc(B.btn)}"></div><div class="field"><label>Enlace (https://…)</label><input id="bL" value="${esc(B.link)}"></div></div><div class="field"><label>Imagen</label><input type="file" id="bI" accept="image/*"></div><button class="btn g" id="bD" type="button">Quitar imagen</button>`;
    else if(tab==="p")body.innerHTML='<p class="tip">Imagen de fondo de cada banner de la portada.</p>'+[["agenda","Agenda"],["guias","Guías"],["juegos","Más juegos"],["novedades","Novedades"]].map(k=>`<div class="field"><label>${k[1]}</label><input type="file" data-h="${k[0]}" accept="image/*"></div>`).join("");
    else if(tab==="a")body.innerHTML=`<p class="tip">Publica solo información confirmada.</p>
      <div class="two"><div class="field"><label>Día</label><select id="aD">${DAYS_FULL.map((d,i)=>`<option value="${i}">${d}</option>`).join("")}</select></div><div class="field"><label>Hora</label><input type="time" id="aH"></div></div>
      <div class="two"><div class="field"><label>Tipo</label><select id="aC">${Object.keys(CATS).map(k=>`<option value="${k}">${CATS[k].n}</option>`).join("")}</select></div><div class="field"><label>Nombre</label><input id="aN" maxlength="80"></div></div>
      <div class="field"><label>Descripción</label><input id="aP" maxlength="160"></div><div class="field"><label>Imagen (opcional)</label><input type="file" id="aI" accept="image/*"></div><button class="btn p" id="aAdd" type="button">Agregar evento</button>
      <ul class="al">${D.agenda.map((e,i)=>`<li><span>${DAYS[e.d]} ${esc(e.t)} · ${esc(e.n)}</span><button class="btn g" data-ad="${i}" type="button">🗑 Borrar</button></li>`).join("")||"<li>Aún no hay eventos.</li>"}</ul>`;
    else if(tab==="n")body.innerHTML=`<div class="field"><label>Título</label><input id="nH" maxlength="120"></div>
      <div class="two"><div class="field"><label>Categoría</label><input id="nG" maxlength="30"></div><div class="field"><label>Fecha o resumen corto</label><input id="nD" maxlength="80"></div></div>
      <div class="field"><label>Texto (opcional)</label><textarea id="nX" rows="3" maxlength="600"></textarea></div><div class="field"><label>Imagen (opcional)</label><input type="file" id="nI" accept="image/*"></div><button class="btn p" id="nAdd" type="button">Agregar novedad</button>
      <ul class="al">${D.news.map((n,i)=>`<li><span>${esc(n.h)}</span><button class="btn g" data-nd="${i}" type="button">🗑 Borrar</button></li>`).join("")||"<li>Aún no hay novedades.</li>"}</ul>`;
    else if(tab==="t")body.innerHTML=TRV();
    else if(tab==="d")body.innerHTML=`<p class="tip">Pega tu ID de editor de AdSense (ca-pub-…) y el ID de cada bloque de anuncios que te dé Google. Se muestran pequeños, sin ventanas emergentes, y solo a quien acepte las cookies.</p>
      <div class="field"><label>ID de editor</label><input id="adC" placeholder="ca-pub-1234567890123456" value="${esc(D.ads.client)}"></div>
      <div class="two"><div class="field"><label>Bloque de la portada</label><input id="adH" placeholder="1234567890" value="${esc(D.ads.home)}"></div><div class="field"><label>Bloque al final de cada página</label><input id="adE" placeholder="1234567890" value="${esc(D.ads.end)}"></div></div>
      <p class="tip">Después pulsa «Publicar cambios».</p>`;
    else body.innerHTML=`<div class="field"><label>Imagen del banner «Más juegos»</label><input type="file" id="gbI" accept="image/*"></div><button class="btn g" id="gbD" type="button">Quitar imagen del banner</button>
      <h3 style="margin:18px 0 8px">Agregar juego</h3><div class="field"><label>Nombre</label><input id="gN" maxlength="60"></div><div class="field"><label>Descripción</label><input id="gP" maxlength="140"></div>
      <div class="two"><div class="field"><label>Enlace (https://…)</label><input id="gL"></div><div class="field"><label>Imagen</label><input type="file" id="gI" accept="image/*"></div></div><button class="btn p" id="gAdd" type="button">Agregar juego</button>
      <ul class="al">${D.games.map((g,i)=>`<li><span>${esc(g.n)}</span><button class="btn g" data-gd="${i}" type="button">🗑 Borrar</button></li>`).join("")||"<li>Aún no hay juegos.</li>"}</ul>`;
  }
  body.oninput=body.onchange=e=>{const t=e.target;if(!D)return;
    if(t.dataset&&t.dataset.tk!==undefined){D.tr=D.tr||{};(D.tr[t.dataset.tk]=D.tr[t.dataset.tk]||{})[t.dataset.tl]=t.value;window.FFZ_TR=D.tr;window.ffzApply&&window.ffzApply();return}const B=D.banner;
    if(t.type==="file"){if(e.type!=="change"||!t.files[0])return;
      return up(t.files[0]).then(u=>{if(t.id==="bI")B.img=u;else if(t.id==="gbI")D.gb=u;else if(t.dataset.h)D.hb[t.dataset.h]=u;else{pend=u;toast("Imagen lista");return}sync();toast("Imagen subida. Pulsa Publicar cambios.")}).catch(()=>toast("No se pudo subir la imagen"))}
    if(t.id==="adC")return void(D.ads.client=t.value.trim());if(t.id==="adH")return void(D.ads.home=t.value.trim());if(t.id==="adE")return void(D.ads.end=t.value.trim());if(t.id==="bOn")B.on=t.checked;else if(t.id==="bT")B.title=t.value;else if(t.id==="bX")B.text=t.value;else if(t.id==="bB")B.btn=t.value;else if(t.id==="bL")B.link=safe(t.value);else return;sync()};
  body.onclick=e=>{const b=e.target.closest("button");if(!b)return;
    if(b.id==="li")login(CFG.email,$("#lP").value);
    else if(!D)return;
    else if(b.id==="trGo"){b.disabled=true;msg("Traduciendo…");(window.ffzBuildTr?window.ffzBuildTr(D,(a,z)=>msg("Traduciendo "+a+"/"+z+"…")):Promise.resolve({tr:D.tr||{},fail:0})).then(R=>{D.tr=R.tr;window.FFZ_TR=D.tr;window.ffzApply&&window.ffzApply();view();msg(R.fail?"Listo, pero "+R.fail+" texto(s) no se pudieron traducir. Inténtalo de nuevo en un rato.":"Traducciones listas. Revísalas y pulsa «Publicar cambios».",R.fail?0:1)}).catch(()=>{b.disabled=false;msg("No se pudo traducir. Revisa tu conexión.",0)})}
    else if(b.id==="bD"){D.banner.img="";sync()}
    else if(b.id==="gbD"){D.gb="";sync()}
    else if(b.id==="aAdd"){const n=$("#aN").value.trim();if(!n||!$("#aH").value)return toast("Completa la hora y el nombre");D.agenda.push({d:+$("#aD").value,t:$("#aH").value,c:$("#aC").value,n,p:$("#aP").value.trim(),img:pend});pend="";sync();view();msg("Agregado. Pulsa «Publicar cambios» para que lo vea todo el mundo.",1)}
    else if(b.dataset.ad!=null){if(!confirm("¿Borrar esta publicación?"))return;D.agenda.splice(+b.dataset.ad,1);sync();view();msg("Borrado. Pulsa «Publicar cambios» para que se quite de la web.",1)}
    else if(b.id==="nAdd"){const h=$("#nH").value.trim();if(!h)return toast("Escribe un título");D.news.unshift({h,tag:$("#nG").value.trim()||"General",d:$("#nD").value.trim(),x:$("#nX").value.trim(),img:pend});pend="";sync();view();msg("Agregado. Pulsa «Publicar cambios» para que lo vea todo el mundo.",1)}
    else if(b.dataset.nd!=null){if(!confirm("¿Borrar esta publicación?"))return;D.news.splice(+b.dataset.nd,1);sync();view();msg("Borrado. Pulsa «Publicar cambios» para que se quite de la web.",1)}
    else if(b.id==="gAdd"){const n=$("#gN").value.trim();if(!n)return toast("Escribe el nombre del juego");D.games.unshift({n,p:$("#gP").value.trim(),link:safe($("#gL").value.trim()),img:pend});pend="";sync();view();msg("Agregado. Pulsa «Publicar cambios» para que lo vea todo el mundo.",1)}
    else if(b.dataset.gd!=null){if(!confirm("¿Borrar esta publicación?"))return;D.games.splice(+b.dataset.gd,1);sync();view();msg("Borrado. Pulsa «Publicar cambios» para que se quite de la web.",1)}};
  body.onkeydown=e=>{if(e.key==="Enter"&&e.target.id==="lP"){e.preventDefault();login(CFG.email,e.target.value)}};
  tabs.onclick=e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.t==="x"){tok="";D=null;view();return}tab=b.dataset.t;pend="";view()};
  $("#admP").onclick=publish;$("#admX").onclick=()=>dlg.close();
  function open(){if(!dlg.open){view();dlg.showModal()}}
  const dn=new Set();addEventListener("keydown",e=>{dn.add(e.key.toLowerCase());if((e.ctrlKey||e.metaKey)&&dn.has("z")&&dn.has("x")){e.preventDefault();dn.clear();open()}});
  addEventListener("keyup",e=>dn.delete(e.key.toLowerCase()));addEventListener("blur",()=>dn.clear());
  if(location.hash==="#admin")open();
})();
})();
