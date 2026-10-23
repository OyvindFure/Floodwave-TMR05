"use strict";
/* Results: lengdestudien. Tala kjem frå length_study/plots/length_study_*_table.csv
   (same tal som er plotta). Biletfilene ligg i results/length_study/.
   Radene er [L/B, L/lambda, a, b, zeta for 5 sondar]. */

const RES_DATA = {"heave":[[0.5,0.10186,1.003572,0.224305,0.107134,0.084828,0.057958,0.058455,0.042388],[1,0.20372,1.396134,0.319094,0.182745,0.143413,0.097303,0.098135,0.071127],[2,0.40744,1.752708,0.483554,0.358449,0.27758,0.181232,0.182762,0.131379],[3,0.61115,1.811444,0.672127,0.615386,0.499228,0.324747,0.327472,0.234871],[4,0.81487,1.719863,0.667871,0.699263,0.610151,0.434395,0.437725,0.321234],[6,1.22231,1.693234,0.688083,0.848995,0.825035,0.649105,0.653085,0.494176],[8,1.62975,1.717971,0.702499,0.754702,0.836912,0.795782,0.798603,0.644254],[12,2.44462,1.697211,0.715125,0.503217,0.52902,0.789953,0.784434,0.845539],[16,3.25949,1.682297,0.724732,0.716299,0.660005,0.48016,0.476597,0.770147],[24,4.88924,1.688228,0.728211,0.606492,0.554416,0.698537,0.692173,0.605409],[32,6.51899,1.679953,0.732262,0.576757,0.610039,0.699911,0.702707,0.560292],[48,9.77848,1.678033,0.734679,0.660731,0.674606,0.568122,0.566104,0.654337],[64,13.03797,1.676982,0.735522,0.618146,0.605143,0.67263,0.671165,0.608871],[96,19.55696,1.676377,0.736376,0.643282,0.634123,0.634212,0.630811,0.589137]],"sway":[[0.5,0.10186,0.545305,0.083148,0.096307,0.068657,0.045599,0.045996,0.033089],[1,0.20372,0.781283,0.202595,0.215357,0.155389,0.103342,0.10424,0.075001],[2,0.40744,0.945191,0.448597,0.442416,0.337925,0.22726,0.228914,0.165232],[3,0.61115,0.918636,0.604902,0.60507,0.499344,0.343272,0.34614,0.250862],[4,0.81487,0.808977,0.590894,0.665802,0.587944,0.430776,0.433863,0.317916],[6,1.22231,0.80019,0.606827,0.71264,0.734132,0.618072,0.621879,0.472635],[8,1.62975,0.785058,0.61673,0.592773,0.693128,0.72669,0.728676,0.603175],[12,2.44462,0.773265,0.628219,0.48326,0.443199,0.659621,0.653956,0.754116],[16,3.25949,0.767361,0.636188,0.610137,0.594859,0.425859,0.426413,0.649898],[24,4.88924,0.753773,0.637049,0.557777,0.510767,0.588216,0.582603,0.568334],[32,6.51899,0.754513,0.641787,0.529918,0.519307,0.617687,0.618058,0.482035],[48,9.77848,0.749775,0.643471,0.554057,0.569819,0.518726,0.519739,0.593756],[64,13.03797,0.74744,0.644177,0.554945,0.540428,0.577126,0.575257,0.528201],[96,19.55696,0.745242,0.644934,0.554805,0.555031,0.549835,0.548636,0.531746]]};
const PROBES = ["1.5B (9 m)","2.5B (15 m)","5.5B (33 m)","B/2+λ (32.45 m)","B/2+2λ (61.90 m)"];
const CHOSEN = 24;

SITE.add({
no:{
 "nav.res":"Results",
 "card.res.t":"Results",
 "card.res.d":"Resultat frå studiane: lengdestudien med figurar, tabellar og valt lengd. Meshstudien kjem etter kvart.",
 "rs.title":"Results",
 "rs.h1":"Results",
 "rs.sub":"Resultat frå potensialstrøymingsstudiane. Alle tal er dimensjonslause og reknast ut som i plottskripta (ω̂ = 0.8, B = 6 m, D = B/4).",
 "rs.len_h":"Length study",
 "rs.len_p":"Boksen er modellert som ein lang 3D-sylinder, og vi aukar lengda L for å sjå når resultata blir uavhengige av endeeffektar. Målet er å nærme seg det todimensjonale tilfellet.",
 "rs.pick_h":"Valt lengd: L/B = 24",
 "rs.pick_p":"L = 144 m, som er L/λ = 4.89 bølgjelengder. Endring frå førre lengd (L/B = 16) til L/B = 24, og frå 24 til neste (32):",
 "rs.f1":"Added mass og demping har konvergert: begge ligg innanfor omtrent 1,2 % av verdien ved L/B = 96, og endrar seg lite for lengre boksar.",
 "rs.f2":"Bølgjehøgda ζ svingar framleis (omtrent ±10 %) òg for lange boksar. Det kjem av interferens med bølgjer frå endane av boksen, og svingingane døyr berre sakte ut.",
 "rs.f3":"I 2D-grensa skal alle sondane gi same ζ, så spreiinga mellom sondane er eit mål på konvergens. Dei to sondane ved 33 m og 32.45 m ligg berre 0.55 m frå kvarandre og følgjer kvarandre nesten heilt.",
 "rs.dof":"Frihetsgrad",
 "rs.heave":"Heave (3)",
 "rs.sway":"Sway (2)",
 "rs.fig":"Konvergensplott",
 "rs.tab":"Tabell",
 "rs.hl":"Rada for valt lengd er markert. Δ er endring frå førre rad (førre lengd) i prosent. Δζ maks er den største endringa blant dei fem sondane.",
 "rs.dl":"Last ned CSV",
 "rs.v3_h":"3D-modell",
 "rs.v3_len":"Vel lengd og sjå kvartboksen WAMIT får (dei stipla panela er spegelbileta).",
 "rs.v3_mesh":"Vel mesh og sjå panela WAMIT får (dei stipla panela er spegelbileta).",
 "rs.v3_stretch":"Strekk ut tynne retningar (lange skrog blir lettare å sjå)",
 "rs.v3_hint":"Venstre knapp: forskyv. Musehjulet inne og dra (eller høgre knapp): roter. Rull: zoom. Dobbeltklikk: nullstill.",
 "rs.v3_info_len":"L/B = {r}, L = {L} m. Panel i kvartboksen: Nx = {nx}, Ny = {ny}, Nz = {nz}, totalt {n}.",
 "rs.v3_info_mesh":"Mesh {k}, mål λ/Δ = ({a}, {b}, {c}). Panel: Nx = {nx}, Ny = {ny}, Nz = {nz}, totalt {n} i kvartboksen.",
 "rs.mesh_h":"Mesh study",
 "rs.mesh_p":"Same boks (L/B = 24, ω̂ = 0.8) med seks meshtettleikar. x, y og z er forfina saman, og x-aksen er λ/Δx. Mål for kvar mesh står i tabellen under.",
 "rs.mpick_h":"Valt mesh: nr. 4 (λ/Δx = 24)",
 "rs.mpick_p":"677 paneler i kvartboksen. Endring frå mesh 3 til 4, og frå 4 til 5:",
 "rs.mf1":"Endringa frå førre mesh blir mindre for kvart steg. Frå λ/Δx = 24 er ho under omtrent 1 % for a og b (heave og sway), og ζ endrar seg under 0,4 % mellom to mesh.",
 "rs.mf2":"Mesh 4 ligg innanfor omtrent 1 % av det finaste meshet (λ/Δx = 48) for heave (a +0,97 %, b −0,79 %), og litt over 1 % for sway-demping (a +0,85 %, b −1,46 %).",
 "rs.mf3":"Alle fem sondane flyttar seg likt og jamt, så ζ svingar ikkje slik som i lengdestudien. Alle retningar er forfina saman, så vi veit ikkje kva retning som styrer endringa. Dei grovaste meshane har berre 1 til 2 paneler over halve breidda og over djupgangen.",
 "rs.mhl":"Rada for valt mesh er markert. Δ er endring frå førre mesh i prosent. Paneler er talet i kvartboksen."
},
en:{
 "nav.res":"Results",
 "card.res.t":"Results",
 "card.res.d":"Results from the studies: the length study with figures, tables and the chosen length. The mesh study will follow.",
 "rs.title":"Results",
 "rs.h1":"Results",
 "rs.sub":"Results from the potential flow studies. All numbers are non-dimensional and computed as in the plotting scripts (ω̂ = 0.8, B = 6 m, D = B/4).",
 "rs.len_h":"Length study",
 "rs.len_p":"The box is modelled as a long 3D cylinder, and the length L is increased to see when the results become independent of end effects. The goal is to approach the two-dimensional case.",
 "rs.pick_h":"Chosen length: L/B = 24",
 "rs.pick_p":"L = 144 m, which is L/λ = 4.89 wavelengths. Change from the previous length (L/B = 16) to L/B = 24, and from 24 to the next (32):",
 "rs.f1":"Added mass and damping have converged: both are within about 1.2 % of the value at L/B = 96 and change little for longer boxes.",
 "rs.f2":"The wave elevation ζ still oscillates (about ±10 %) even for long boxes. This comes from interference with waves from the ends of the box, and the oscillations only decay slowly.",
 "rs.f3":"In the 2D limit all probes should give the same ζ, so the spread between probes is a measure of convergence. The two probes at 33 m and 32.45 m are only 0.55 m apart and follow each other almost exactly.",
 "rs.dof":"Degree of freedom",
 "rs.heave":"Heave (3)",
 "rs.sway":"Sway (2)",
 "rs.fig":"Convergence plot",
 "rs.tab":"Table",
 "rs.hl":"The row for the chosen length is highlighted. Δ is the change from the previous row (previous length) in percent. Δζ max is the largest change among the five probes.",
 "rs.dl":"Download CSV",
 "rs.v3_h":"3D model",
 "rs.v3_len":"Pick a length and see the quarter box WAMIT gets (the dashed panels are the mirror images).",
 "rs.v3_mesh":"Pick a mesh and see the panels WAMIT gets (the dashed panels are the mirror images).",
 "rs.v3_stretch":"Stretch thin directions (long hulls are easier to see)",
 "rs.v3_hint":"Left button: pan. Hold the mouse wheel and drag (or right button): rotate. Scroll: zoom. Double-click: reset.",
 "rs.v3_info_len":"L/B = {r}, L = {L} m. Panels in the quarter box: Nx = {nx}, Ny = {ny}, Nz = {nz}, total {n}.",
 "rs.v3_info_mesh":"Mesh {k}, target λ/Δ = ({a}, {b}, {c}). Panels: Nx = {nx}, Ny = {ny}, Nz = {nz}, total {n} in the quarter box.",
 "rs.mesh_h":"Mesh study",
 "rs.mesh_p":"The same box (L/B = 24, ω̂ = 0.8) with six mesh densities. x, y and z are refined together, and the x-axis is λ/Δx. The targets for each mesh are in the table below.",
 "rs.mpick_h":"Chosen mesh: no. 4 (λ/Δx = 24)",
 "rs.mpick_p":"677 panels in the quarter box. Change from mesh 3 to 4, and from 4 to 5:",
 "rs.mf1":"The change from the previous mesh gets smaller at every step. From λ/Δx = 24 it is below about 1 % for a and b (heave and sway), and ζ changes by less than 0.4 % between two meshes.",
 "rs.mf2":"Mesh 4 is within about 1 % of the finest mesh (λ/Δx = 48) for heave (a +0.97 %, b −0.79 %), and slightly above 1 % for sway damping (a +0.85 %, b −1.46 %).",
 "rs.mf3":"All five probes move together and smoothly, so ζ does not oscillate as in the length study. All directions are refined together, so we do not know which direction drives the change. The coarsest meshes have only 1 to 2 panels over the half beam and over the draught.",
 "rs.mhl":"The row for the chosen mesh is highlighted. Δ is the change from the previous mesh in percent. Panels is the number in the quarter box."
}
});


// ---------- Mesh study ----------
// Radene er [mesh, lambda/dx, paneler (kvartboks), a, b, zeta for 5 sondar].
const MESH_DATA = {"heave":[[1,3,17,1.688228,0.728211,0.606492,0.554416,0.698537,0.692173,0.605409],[2,6,47,1.587705,0.745953,0.608152,0.568301,0.684131,0.679076,0.601093],[3,12,188,1.517053,0.768562,0.614672,0.580062,0.692754,0.687934,0.610953],[4,24,677,1.488714,0.78119,0.616875,0.585468,0.69742,0.692692,0.61552],[5,36,1385,1.480587,0.784929,0.617656,0.58693,0.698538,0.693838,0.616674],[6,48,2576,1.474367,0.787439,0.618396,0.588008,0.699689,0.694994,0.617653]],"sway":[[1,3,17,0.753773,0.637049,0.557777,0.510767,0.588216,0.582603,0.568334],[2,6,47,0.740487,0.561352,0.534563,0.496454,0.570102,0.565464,0.541194],[3,12,188,0.715306,0.530774,0.522576,0.48712,0.558863,0.554513,0.527561],[4,24,677,0.702171,0.51647,0.516099,0.481529,0.552503,0.548269,0.520492],[5,36,1385,0.699129,0.512321,0.514312,0.48011,0.550803,0.546603,0.518564],[6,48,2576,0.696271,0.509021,0.5128,0.478825,0.549227,0.545048,0.516953]]};
const MCHOSEN = 4;
let mdof = "heave";

function renderMesh(){
  const rows = MESH_DATA[mdof], ci = rows.findIndex(r=>r[0]===MCHOSEN), ch = rows[ci];
  const n = mdof==="heave" ? 3 : 2;
  document.querySelectorAll("#mdofchips .chip").forEach(c=>c.classList.toggle("on", c.dataset.d===mdof));
  const img = document.getElementById("meshimg");
  img.src = "results/mesh_study/mesh_study_"+mdof+".png?v=8";
  img.alt = SITE.t("rs.fig")+", "+mdof;
  document.getElementById("mdl").href = "results/mesh_study/mesh_study_"+mdof+"_table.csv";
  document.getElementById("mpickdev").innerHTML =
    '<span class="kv"><b>a<sub>'+n+n+'</sub></b> '+dev(ch[3],rows[ci-1][3])+' % / '+dev(rows[ci+1][3],ch[3])+' %</span>'+
    '<span class="kv"><b>b<sub>'+n+n+'</sub></b> '+dev(ch[4],rows[ci-1][4])+' % / '+dev(rows[ci+1][4],ch[4])+' %</span>';
  let h = '<table class="rt"><thead><tr><th>Mesh</th><th>\u03bb/\u0394x</th><th>Paneler</th><th>a<sub>'+n+n+'</sub></th><th>b<sub>'+n+n+'</sub></th>'+
    PROBES.map(p=>'<th>\u03b6<sub class="pr">'+p+'</sub></th>').join("")+
    '<th>\u0394a %</th><th>\u0394b %</th><th>\u0394\u03b6 maks %</th></tr></thead><tbody>';
  rows.forEach((r,i)=>{
    h += '<tr'+(r[0]===MCHOSEN?' class="pick"':'')+'><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+fmt(r[3],4)+'</td><td>'+fmt(r[4],4)+'</td>'+
      [5,6,7,8,9].map(k=>'<td>'+fmt(r[k],4)+'</td>').join("")+
      (i===0 ? '<td>\u2013</td><td>\u2013</td><td>\u2013</td>' :
        '<td>'+dev(r[3],rows[i-1][3])+'</td><td>'+dev(r[4],rows[i-1][4])+'</td><td>'+
        [5,6,7,8,9].map(k=>100*(r[k]-rows[i-1][k])/rows[i-1][k]).reduce((m,v)=>Math.abs(v)>Math.abs(m)?v:m,0).toFixed(2)+'</td>')+'</tr>';
  });
  document.getElementById("meshtab").innerHTML = h + '</tbody></table>';
}
function buildMesh(){
  const box = document.getElementById("mdofchips");
  box.innerHTML = '<span class="chip" data-d="heave">'+SITE.t("rs.heave")+'</span><span class="chip" data-d="sway">'+SITE.t("rs.sway")+'</span>';
  box.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ mdof=c.dataset.d; renderMesh(); }));
  renderMesh();
}

// ---------- 3D-modell (same teiknar som GDF-sida) ----------
const LEN_LBS = [0.5,1,2,3,4,6,8,12,16,24,32,48,64,96];
const MESH_N = {1:[8,1,1,3,8,8],2:[15,2,1,6,16,16],3:[30,4,2,12,32,32],4:[59,7,4,24,64,64],5:[89,10,5,36,96,96],6:[118,14,7,48,128,128]};
const V3 = { len:{plot:null, sel:CHOSEN}, mesh:{plot:null, sel:MCHOSEN} };

function v3data(kind){
  const B=6, D=1.5;
  if(kind==="len"){
    const r=V3.len.sel, q=PY.projPreset(r).quarter, d=PY.boxQuarter(...q);
    return {d, info:SITE.t("rs.v3_info_len",{r:r, L:r*B, nx:q[3], ny:q[4], nz:q[5], n:d.N})};
  }
  const k=V3.mesh.sel, m=MESH_N[k], d=PY.boxQuarter(24*B,B,D,m[0],m[1],m[2]);
  return {d, info:SITE.t("rs.v3_info_mesh",{k:k, a:m[3], b:m[4], c:m[5], nx:m[0], ny:m[1], nz:m[2], n:d.N})};
}
function v3render(kind){
  const id = kind==="len" ? "l3" : "m3", st=V3[kind], box=document.getElementById(id+"chips");
  const keys = kind==="len" ? LEN_LBS : [1,2,3,4,5,6];
  box.innerHTML = keys.map(v=>'<span class="chip'+(v===st.sel?' on':'')+'" data-v="'+v+'">'+(kind==="len"?'L/B = '+v:'Mesh '+v)+'</span>').join("");
  box.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ st.sel=+c.dataset.v; v3render(kind); }));
  const {d,info}=v3data(kind);
  document.getElementById(id+"info").textContent = info;
  if(!st.plot){
    st.plot = PY.Plot(document.getElementById(id+"cv"),{az:-55,el:25,mode:"file",eq:true,axes:true,mirror:true,stretch:true,hue:[210,210,210],
      arrowSize:dd=>Math.max(1.5*Math.max(2*Math.max(...dd.Y.flat()),Math.max(...dd.Z.flat().map(Math.abs))),1)});
    st.plot.setHome(-55,25);
    document.getElementById(id+"stretch").addEventListener("change",e=>st.plot.set({stretch:e.target.checked}));
    st.plot.resize();
  }
  st.plot.set({data:d});
}

let dof = "heave";

function fmt(v,n){ return v.toFixed(n); }
function dev(v,r){ const d = 100*(v-r)/r; return (d>=0?"+":"")+d.toFixed(2); }

function render(){
  const rows = RES_DATA[dof], ci = rows.findIndex(r=>r[0]===CHOSEN), ch = rows[ci];
  const n = dof==="heave" ? 3 : 2;
  document.querySelectorAll("#dofchips .chip").forEach(c=>c.classList.toggle("on", c.dataset.d===dof));
  const img = document.getElementById("lenimg");
  img.src = "results/length_study/length_study_"+dof+".png?v=7";
  img.alt = SITE.t("rs.fig")+", "+dof;
  document.getElementById("dl").href = "results/length_study/length_study_"+dof+"_table.csv";

  document.getElementById("pickdev").innerHTML =
    '<span class="kv"><b>a<sub>'+n+n+'</sub></b> '+dev(ch[2],rows[ci-1][2])+' % / '+dev(rows[ci+1][2],ch[2])+' %</span>'+
    '<span class="kv"><b>b<sub>'+n+n+'</sub></b> '+dev(ch[3],rows[ci-1][3])+' % / '+dev(rows[ci+1][3],ch[3])+' %</span>';

  let h = '<table class="rt"><thead><tr><th>L/B</th><th>L/λ</th><th>a<sub>'+n+n+'</sub></th><th>b<sub>'+n+n+'</sub></th>'+
    PROBES.map(p=>'<th>ζ<sub class="pr">'+p+'</sub></th>').join("")+
    '<th>Δa %</th><th>Δb %</th><th>Δζ maks %</th></tr></thead><tbody>';
  rows.forEach((r,i)=>{
    h += '<tr'+(r[0]===CHOSEN?' class="pick"':'')+'><td>'+r[0]+'</td><td>'+fmt(r[1],2)+'</td><td>'+fmt(r[2],4)+'</td><td>'+fmt(r[3],4)+'</td>'+
      [4,5,6,7,8].map(i=>'<td>'+fmt(r[i],3)+'</td>').join("")+
      (i===0 ? '<td>–</td><td>–</td><td>–</td>' :
        '<td>'+dev(r[2],rows[i-1][2])+'</td><td>'+dev(r[3],rows[i-1][3])+'</td><td>'+
        [4,5,6,7,8].map(k=>100*(r[k]-rows[i-1][k])/rows[i-1][k]).reduce((m,v)=>Math.abs(v)>Math.abs(m)?v:m,0).toFixed(1)+'</td>')+'</tr>';
  });
  h += '</tbody></table>';
  document.getElementById("restab").innerHTML = h;
}

function build(){
  const box = document.getElementById("dofchips");
  box.innerHTML = '<span class="chip" data-d="heave">'+SITE.t("rs.heave")+'</span><span class="chip" data-d="sway">'+SITE.t("rs.sway")+'</span>';
  box.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ dof=c.dataset.d; render(); }));
  render();
  buildMesh();
  v3render("len");
  v3render("mesh");
}

SITE.start(build);
SITE.onLang(build);
