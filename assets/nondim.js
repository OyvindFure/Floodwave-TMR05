"use strict";
/* Ikkje-dimensjonal frekvens: fire bokser, lik ω̂ eller lik ω.
   All tekst går gjennom SITE.t(), så sida fungerer på norsk og engelsk. */

SITE.add({
no:{
 "nd.title":"Ikkje-dimensjonal frekvens",
 "nd.h1":"Kvifor bruker vi ω̂ i staden for ω?",
 "nd.sub":"Dra i glidaren og sjå fire bokser med ulik breidde. Bytt mellom lik ω̂ og lik ω, og sjå kva som skjer med bølgjene i forhold til boksen.",
 "nd.ess_h":"Hovudpoenget i fire punkt",
 "nd.e1":"<b>Same bølgje ser ulik ut for ulike bokser.</b> Vatnet bestemmer bølgjelengda λ ut frå frekvensen ω, ikkje boksen. Ei bølgje på 19 m er ca. 5 boksar lang for ein boks på 4 m, men berre ca. 2 boksar lang for ein boks på 10 m. Då blir tilleggsmasse og demping ulik, og vi kan ikkje samanlikne dei.",
 "nd.e2":"<b>Løysinga er å samanlikne ved same λ/B, ikkje same ω.</b> Då er bølgja like lang i forhold til boksen, og ein stor boks må få lågare ω (lengre bølgjer) enn ein liten.",
 "nd.e3":"<b>ω̂ er talet som styrer λ/B:</b> ω̂ = ω·√(B/2g) og λ/B = π/ω̂². Lik ω̂ gir altså lik λ/B, og då er strøyminga rundt boksane lik, berre i ulik målestokk.",
 "nd.e4":"<b>Med lik λ/B blir tilleggsmasse og demping (einingslause) like for alle boksane</b>, så lenge dei har same B/D. Då kan alle leggjast i same plott og samanliknast med viskøs strøyming.",
 "nd.ctl_h":"Vel frekvens",
 "nd.mode_nd":"Lik ω̂ (felles skala)",
 "nd.mode_dim":"Lik ω (rad/s)",
 "nd.play":"Spel av",
 "nd.pause":"Pause",
 "nd.mn_nd":"Alle fire boksane har same ω̂, så dei har same λ/B: bølgjene er like lange i forhold til boksen. Den vanlege frekvensen ω må likevel vere ulik (lågare for ein stor boks).",
 "nd.mn_dim":"Alle fire får same vanlege frekvens ω som boksen på 6 m ({n}). Då er bølgja lik i vatnet, men ho er ulik lang i forhold til kvar boks, og ω̂ blir ulik.",
 "nd.in_dim":"Same bølgje i vatnet for alle fire (λ = {l} m). Men ho er <b>{a}</b> boksar lang for {n1}, og berre <b>{b}</b> boksar lang for {n4}. Ulik λ/B for boksane, så resultata kan ikkje samanliknast direkte.",
 "nd.in_nd":"Bølgjene er ulike i meter (frå {l1} m til {l4} m), men for kvar boks er ho <b>{r}</b> boksar lang. Same λ/B for alle, så strøyminga er lik og resultata kan samanliknast.",
 "nd.name":"{n}, B = {B} m",
 "nd.rd":"T = <b>{T}</b> s &nbsp;·&nbsp; λ/B = <b>{r}</b>",
 "nd.out":"λ = {r}·B (utanfor biletet)",
 "nd.note_nd":"Same målestokk i alle fire bileta (meter til piksel), så boksane har rett storleik. Bølgjene er ulike lange i meter, men like lange i forhold til boksen. Animasjonen går {s} gongar raskare enn verkelegheita, og bølgjehøgda er teikna lik for alle (ikkje i målestokk).",
 "nd.note_dim":"Same målestokk i alle fire bileta (meter til piksel), så bølgja ser lik ut og boksane har ulik storleik. Animasjonen går {s} gongar raskare enn verkelegheita, og bølgjehøgda er teikna lik for alle (ikkje i målestokk).",
 "nd.tbl_h":"Tala bak biletet",
 "nd.c_who":"Boks", "nd.c_B":"B [m]", "nd.c_w":"ω [rad/s]", "nd.c_T":"T [s]", "nd.c_oh":"ω̂", "nd.c_lam":"λ [m]", "nd.c_ratio":"λ/B",
 "nd.tbl_note":"Grøn skrift: tal som er like for alle fire boksane. Perioden T er det du skriv i .pot-fila til WAMIT.",
 "nd.fm_h":"Formlane",
 "nd.fm1":"frå vanleg frekvens til ω̂",
 "nd.fm2":"frå ω̂ til vanleg frekvens (slik reknar du ut periodane til WAMIT)",
 "nd.fm3":"bølgjelengda i djupt vatn",
 "nd.fm4":"bølgjelengda i forhold til breidda",
 "nd.try_h":"Prøv sjølv",
 "nd.try":"Vel «lik ω̂» og ω̂ = 1: då er λ/B = π ≈ 3,14 for alle fire. Byt til «lik ω»: no får ulike bokser ulik λ/B, og ω̂ er ikkje lenger lik. Sjå også kor sakte den store boksen svingar når ω̂ er lik."
},
en:{
 "nd.title":"Non-dimensional frequency",
 "nd.h1":"Why do we use ω̂ instead of ω?",
 "nd.sub":"Drag the slider and watch four boxes of different beam. Switch between equal ω̂ and equal ω, and see what happens to the waves relative to the box.",
 "nd.ess_h":"The main point in four steps",
 "nd.e1":"<b>The same wave looks different to different boxes.</b> The water decides the wavelength λ from the frequency ω, not the box. A 19 m wave is about 5 boxes long for a 4 m box, but only about 2 boxes long for a 10 m box. Then added mass and damping differ, and we cannot compare them.",
 "nd.e2":"<b>The solution is to compare at the same λ/B, not the same ω.</b> Then the wave is equally long relative to the box, and a big box must get a lower ω (longer waves) than a small one.",
 "nd.e3":"<b>ω̂ is the number that sets λ/B:</b> ω̂ = ω·√(B/2g) and λ/B = π/ω̂². Equal ω̂ therefore means equal λ/B, and then the flow around the boxes is the same, only at a different scale.",
 "nd.e4":"<b>With equal λ/B, added mass and damping (dimensionless) are equal for all boxes</b>, as long as they have the same B/D. Then all can go in the same plot and be compared with viscous flow.",
 "nd.ctl_h":"Choose frequency",
 "nd.mode_nd":"Equal ω̂ (common scale)",
 "nd.mode_dim":"Equal ω (rad/s)",
 "nd.play":"Play",
 "nd.pause":"Pause",
 "nd.mn_nd":"All four boxes have the same ω̂, so they have the same λ/B: the waves are equally long relative to the box. The ordinary frequency ω must still differ (lower for a big box).",
 "nd.mn_dim":"All four get the same ordinary frequency ω as the 6 m box ({n}). The wave is then the same in the water, but a different length relative to each box, and ω̂ differs.",
 "nd.in_dim":"The same wave in the water for all four (λ = {l} m). But it is <b>{a}</b> boxes long for {n1}, and only <b>{b}</b> boxes long for {n4}. A different λ/B for the boxes, so the results cannot be compared directly.",
 "nd.in_nd":"The waves differ in meters (from {l1} m to {l4} m), but for every box the wave is <b>{r}</b> boxes long. The same λ/B for all, so the flow is the same and the results can be compared.",
 "nd.name":"{n}, B = {B} m",
 "nd.rd":"T = <b>{T}</b> s &nbsp;·&nbsp; λ/B = <b>{r}</b>",
 "nd.out":"λ = {r}·B (outside the picture)",
 "nd.note_nd":"Same scale in all four pictures (meters to pixels), so the boxes have their true size. The waves differ in meters, but are equally long relative to the box. The animation runs {s} times faster than real time, and the wave height is drawn equal for all (not to scale).",
 "nd.note_dim":"Same scale in all four pictures (meters to pixels), so the wave looks the same and the boxes have different sizes. The animation runs {s} times faster than real time, and the wave height is drawn equal for all (not to scale).",
 "nd.tbl_h":"The numbers behind the picture",
 "nd.c_who":"Box", "nd.c_B":"B [m]", "nd.c_w":"ω [rad/s]", "nd.c_T":"T [s]", "nd.c_oh":"ω̂", "nd.c_lam":"λ [m]", "nd.c_ratio":"λ/B",
 "nd.tbl_note":"Green text: numbers that are equal for all four boxes. The period T is what you write in the WAMIT .pot file.",
 "nd.fm_h":"The formulas",
 "nd.fm1":"from ordinary frequency to ω̂",
 "nd.fm2":"from ω̂ to ordinary frequency (how you compute the WAMIT periods)",
 "nd.fm3":"wavelength in deep water",
 "nd.fm4":"wavelength relative to the beam",
 "nd.try_h":"Try it yourself",
 "nd.try":"Choose \"equal ω̂\" and ω̂ = 1: then λ/B = π ≈ 3.14 for all four. Switch to \"equal ω\": now different boxes get different λ/B, and ω̂ is no longer equal. Also notice how slowly the big box oscillates when ω̂ is equal."
}
});

const G = 9.80665;
const PERSONS = [{n:"Anders",B:4},{n:"Øyvind",B:6},{n:"Zhijun",B:8},{n:"Øyonn",B:10}];
const REF = 1;      // boksen som gir ω i modus "lik ω"
const SPEED = 3;    // animasjonen går så mange gongar raskare enn verkelegheita
const $ = id => document.getElementById(id);
const T = (k,v) => SITE.t(k,v);

const S = { oh:1.0, mode:"nd", playing:true, t:0, dirty:true, calcs:[] };
try{ if(matchMedia("(prefers-reduced-motion: reduce)").matches) S.playing = false; }catch(e){}

function css(v){ return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }
function fmt(v,d){ return v.toLocaleString(SITE.lang==="no"?"nb-NO":"en-GB",{minimumFractionDigits:d,maximumFractionDigits:d}); }
function fr(v){ return fmt(v, v>=100?0:(v>=10?1:2)); }

function calc(p){
  const wref = S.oh*Math.sqrt(2*G/PERSONS[REF].B);
  const w = S.mode==="nd" ? S.oh*Math.sqrt(2*G/p.B) : wref;
  const oh = w*Math.sqrt(p.B/(2*G));
  const lam = 2*Math.PI*G/(w*w);
  return { w:w, T:2*Math.PI/w, oh:oh, lam:lam, ratio:lam/p.B };
}

function buildBoxes(){
  $("boxes").innerHTML = PERSONS.map((p,i)=>
    '<div class="bcard"><div class="bt" id="bt'+i+'"></div><canvas id="cv'+i+'"></canvas><div class="rd" id="rd'+i+'"></div></div>'
  ).join("");
}

function allEqual(a){ return a.every(v=>Math.abs(v-a[0])<1e-9*Math.max(1,Math.abs(a[0]))); }

function update(){
  S.calcs = PERSONS.map(calc);
  $("oho").textContent = fmt(S.oh,1);
  $("modeNd").classList.toggle("on", S.mode==="nd");
  $("modeDim").classList.toggle("on", S.mode==="dim");
  {
    const cs = S.calcs, last = cs.length-1;
    $("insight").innerHTML = S.mode==="dim"
      ? T("nd.in_dim",{l:fr(cs[0].lam), a:fr(cs[0].ratio), n1:PERSONS[0].n, b:fr(cs[last].ratio), n4:PERSONS[last].n})
      : T("nd.in_nd",{l1:fr(cs[0].lam), l4:fr(cs[last].lam), r:fr(cs[0].ratio)});
  }
  $("modenote").innerHTML = S.mode==="nd" ? T("nd.mn_nd") : T("nd.mn_dim",{n:PERSONS[REF].n});
  $("note").innerHTML = T(S.mode==="nd"?"nd.note_nd":"nd.note_dim",{s:SPEED});
  $("play").textContent = T(S.playing?"nd.pause":"nd.play");
  PERSONS.forEach((p,i)=>{
    $("bt"+i).innerHTML = T("nd.name",{n:p.n,B:p.B});
    $("rd"+i).innerHTML = T("nd.rd",{T:fmt(S.calcs[i].T,2), r:fr(S.calcs[i].ratio)});
  });
  const col = {
    w:  S.calcs.map(c=>c.w),  T: S.calcs.map(c=>c.T),  oh: S.calcs.map(c=>c.oh),
    lam:S.calcs.map(c=>c.lam), ratio:S.calcs.map(c=>c.ratio)
  };
  const eq = k => allEqual(col[k]) ? ' class="eq"' : '';
  let h = '<table class="nd"><tr><th>'+T("nd.c_who")+'</th><th>'+T("nd.c_B")+'</th><th>'+T("nd.c_w")+'</th><th>'+T("nd.c_T")+
          '</th><th>'+T("nd.c_oh")+'</th><th>'+T("nd.c_lam")+'</th><th>'+T("nd.c_ratio")+'</th></tr>';
  PERSONS.forEach((p,i)=>{
    const c = S.calcs[i];
    h += '<tr><td>'+p.n+'</td><td>'+p.B+'</td><td'+eq("w")+'>'+fmt(c.w,3)+'</td><td'+eq("T")+'>'+fmt(c.T,2)+
         '</td><td'+eq("oh")+'>'+fmt(c.oh,2)+'</td><td'+eq("lam")+'>'+fr(c.lam)+'</td><td'+eq("ratio")+'>'+fr(c.ratio)+'</td></tr>';
  });
  $("tbl").innerHTML = h + '</table>';
  S.dirty = true;
}

function drawBox(i){
  const cv = $("cv"+i); if(!cv) return;
  const c = S.calcs[i]; if(!c) return;
  const dpr = window.devicePixelRatio||1, r = cv.getBoundingClientRect();
  const W = Math.max(40,Math.round(r.width)), H = Math.max(40,Math.round(r.height));
  if(cv.width!==Math.round(W*dpr) || cv.height!==Math.round(H*dpr)){ cv.width=Math.round(W*dpr); cv.height=Math.round(H*dpr); }
  const x = cv.getContext("2d"); x.setTransform(dpr,0,0,dpr,0,0);
  x.fillStyle = css("--canvas"); x.fillRect(0,0,W,H);

  // same målestokk (meter til piksel) i alle fire bileta, i begge modusar:
  // boksane har rett storleik, og bølgjene blir teikna i same målestokk
  const lamMax = Math.max.apply(null, S.calcs.map(x=>x.lam));
  const sc = Math.max(0.012*W, Math.min(0.8*W/lamMax, 0.034*W));
  const bpx = PERSONS[i].B*sc, lpx = c.lam*sc;
  const dpx = bpx/4, xc = W/2, y0 = H*0.40;
  const A = Math.min(9,H*0.06);
  const ph = S.t*c.w*SPEED;
  const k = 2*Math.PI/lpx;
  const accent = css("--accent"), ink = css("--ink"), muted = css("--muted");

  // vassoverflata: bølgja går utover frå boksen, med fase ph - k*avstand
  const ys = new Array(W+1);
  for(let px=0; px<=W; px++){
    const d = Math.max(0, Math.abs(px-xc)-bpx/2);
    ys[px] = y0 - A*Math.sin(ph - k*d);
  }
  x.beginPath(); x.moveTo(0,ys[0]);
  for(let px=1; px<=W; px++) x.lineTo(px,ys[px]);
  x.lineTo(W,H); x.lineTo(0,H); x.closePath();
  x.globalAlpha = .22; x.fillStyle = accent; x.fill(); x.globalAlpha = 1;
  x.beginPath(); x.moveTo(0,ys[0]);
  for(let px=1; px<=W; px++) x.lineTo(px,ys[px]);
  x.strokeStyle = accent; x.lineWidth = 2; x.stroke();

  // boksen (heave)
  const z = A*Math.sin(ph);
  const top = y0 - z - dpx*0.8, bottom = y0 - z + dpx;
  x.fillStyle = css("--panel"); x.strokeStyle = ink; x.lineWidth = 2;
  x.beginPath(); x.rect(xc-bpx/2, top, bpx, bottom-top); x.fill(); x.stroke();

  // mål: B over boksen
  x.strokeStyle = muted; x.lineWidth = 1; x.fillStyle = muted; x.font = "12px system-ui,sans-serif"; x.textAlign = "center";
  const yb = top-12;
  x.beginPath(); x.moveTo(xc-bpx/2,yb); x.lineTo(xc+bpx/2,yb);
  x.moveTo(xc-bpx/2,yb-4); x.lineTo(xc-bpx/2,yb+4); x.moveTo(xc+bpx/2,yb-4); x.lineTo(xc+bpx/2,yb+4); x.stroke();
  x.fillText("B", xc, yb-6);

  // mål: λ nede til høgre (eller tekst om han ikkje får plass)
  const yl = H-18, x1 = (W-lpx)/2;
  if(lpx <= W-16){
    x.beginPath(); x.moveTo(x1,yl); x.lineTo(x1+lpx,yl);
    x.moveTo(x1,yl-4); x.lineTo(x1,yl+4); x.moveTo(x1+lpx,yl-4); x.lineTo(x1+lpx,yl+4); x.stroke();
    x.fillText("λ", x1+lpx/2, yl-6);
  } else {
    x.textAlign = "right"; x.fillText(T("nd.out",{r:fr(c.ratio)}), W-8, yl+4);
  }
}

let last = 0;
function frame(ts){
  if(S.playing && last) { S.t += Math.min(0.1,(ts-last)/1000); S.dirty = true; }
  last = ts;
  if(S.dirty){ S.dirty = false; for(let i=0;i<PERSONS.length;i++) drawBox(i); }
  requestAnimationFrame(frame);
}

function init(){
  buildBoxes(); update();
  $("oh").addEventListener("input",e=>{ S.oh = +e.target.value; update(); });
  $("modeNd").addEventListener("click",()=>{ S.mode="nd"; update(); });
  $("modeDim").addEventListener("click",()=>{ S.mode="dim"; update(); });
  $("play").addEventListener("click",()=>{ S.playing=!S.playing; update(); });
  window.addEventListener("resize",()=>{ S.dirty=true; });
  window.addEventListener("themechange",()=>{ S.dirty=true; });
  try{ matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{ S.dirty=true; }); }catch(e){}
  requestAnimationFrame(frame);
}

SITE.onLang(()=>{ update(); });
SITE.start(init);
