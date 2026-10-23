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
 "rs.pick_p":"L = 144 m, som er L/λ = 4.89 bølgjelengder. Avvik frå verdien ved L/B = 96:",
 "rs.f1":"Added mass og demping har konvergert: begge ligg innanfor omtrent 1,2 % av verdien ved L/B = 96, og endrar seg lite for lengre boksar.",
 "rs.f2":"Bølgjehøgda ζ svingar framleis (omtrent ±10 %) òg for lange boksar. Det kjem av interferens med bølgjer frå endane av boksen, og svingingane døyr berre sakte ut.",
 "rs.f3":"I 2D-grensa skal alle sondane gi same ζ, så spreiinga mellom sondane er eit mål på konvergens. Dei to sondane ved 33 m og 32.45 m ligg berre 0.55 m frå kvarandre og følgjer kvarandre nesten heilt.",
 "rs.dof":"Frihetsgrad",
 "rs.heave":"Heave (3)",
 "rs.sway":"Sway (2)",
 "rs.fig":"Konvergensplott",
 "rs.tab":"Tabell",
 "rs.hl":"Rada for valt lengd er markert.",
 "rs.dl":"Last ned CSV",
 "rs.mesh_h":"Mesh study",
 "rs.mesh_p":"Kjem. Fire meshtettleikar ved L/B = 24, med λ/Δx langs x-aksen."
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
 "rs.pick_p":"L = 144 m, which is L/λ = 4.89 wavelengths. Deviation from the value at L/B = 96:",
 "rs.f1":"Added mass and damping have converged: both are within about 1.2 % of the value at L/B = 96 and change little for longer boxes.",
 "rs.f2":"The wave elevation ζ still oscillates (about ±10 %) even for long boxes. This comes from interference with waves from the ends of the box, and the oscillations only decay slowly.",
 "rs.f3":"In the 2D limit all probes should give the same ζ, so the spread between probes is a measure of convergence. The two probes at 33 m and 32.45 m are only 0.55 m apart and follow each other almost exactly.",
 "rs.dof":"Degree of freedom",
 "rs.heave":"Heave (3)",
 "rs.sway":"Sway (2)",
 "rs.fig":"Convergence plot",
 "rs.tab":"Table",
 "rs.hl":"The row for the chosen length is highlighted.",
 "rs.dl":"Download CSV",
 "rs.mesh_h":"Mesh study",
 "rs.mesh_p":"Coming. Four mesh densities at L/B = 24, with λ/Δx on the x-axis."
}
});

let dof = "heave";

function fmt(v,n){ return v.toFixed(n); }
function dev(v,r){ const d = 100*(v-r)/r; return (d>=0?"+":"")+d.toFixed(2); }

function render(){
  const rows = RES_DATA[dof], last = rows[rows.length-1], ch = rows.find(r=>r[0]===CHOSEN);
  const n = dof==="heave" ? 3 : 2;
  document.querySelectorAll("#dofchips .chip").forEach(c=>c.classList.toggle("on", c.dataset.d===dof));
  const img = document.getElementById("lenimg");
  img.src = "results/length_study/length_study_"+dof+".png?v=7";
  img.alt = SITE.t("rs.fig")+", "+dof;
  document.getElementById("dl").href = "results/length_study/length_study_"+dof+"_table.csv";

  document.getElementById("pickdev").innerHTML =
    '<span class="kv"><b>a<sub>'+n+n+'</sub></b> '+dev(ch[2],last[2])+' %</span>'+
    '<span class="kv"><b>b<sub>'+n+n+'</sub></b> '+dev(ch[3],last[3])+' %</span>';

  let h = '<table class="rt"><thead><tr><th>L/B</th><th>L/λ</th><th>a<sub>'+n+n+'</sub></th><th>b<sub>'+n+n+'</sub></th>'+
    PROBES.map(p=>'<th>ζ<sub class="pr">'+p+'</sub></th>').join("")+
    '<th>Δa %</th><th>Δb %</th></tr></thead><tbody>';
  rows.forEach(r=>{
    h += '<tr'+(r[0]===CHOSEN?' class="pick"':'')+'><td>'+r[0]+'</td><td>'+fmt(r[1],2)+'</td><td>'+fmt(r[2],4)+'</td><td>'+fmt(r[3],4)+'</td>'+
      [4,5,6,7,8].map(i=>'<td>'+fmt(r[i],3)+'</td>').join("")+
      '<td>'+dev(r[2],last[2])+'</td><td>'+dev(r[3],last[3])+'</td></tr>';
  });
  h += '</tbody></table>';
  document.getElementById("restab").innerHTML = h;
}

function build(){
  const box = document.getElementById("dofchips");
  box.innerHTML = '<span class="chip" data-d="heave">'+SITE.t("rs.heave")+'</span><span class="chip" data-d="sway">'+SITE.t("rs.sway")+'</span>';
  box.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ dof=c.dataset.d; render(); }));
  render();
}

SITE.start(build);
SITE.onLang(build);
