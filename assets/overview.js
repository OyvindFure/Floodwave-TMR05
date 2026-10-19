"use strict";
/* Oversikt: korleis WAMIT-oppsettet køyrer, frå config.py til rapport.
   Tala følgjer same reglar som koden i prosjektet (config.py, common.py, wamit_io.py). */

SITE.add({
no:{
 "nav.ov":"Oversikt",
 "card.ov.t":"Slik køyrer oppsettet",
 "card.ov.d":"Frå config.py til ferdige figurar: kva skript som køyrer, kva du gjer sjølv, og kva som blir laga i kvar mappe.",
 "ov.title":"Oversikt",
 "ov.h1":"Slik køyrer oppsettet",
 "ov.sub":"Frå config.py til ferdige figurar i rapporten. Trykk på eit steg for å sjå kva skript som køyrer, kva som går inn og ut, og kva du gjer sjølv. Vel person for å sjå tala for ditt eige B.",
 "ov.person_h":"Vel person",
 "ov.person_info":"B = {B} m, D = B/4 = {D} m, ω̂ frå 0.1 til 2.0 i steg på 0.1 ({n} periodar)",
 "ov.flow_h":"Flyten, steg for steg",
 "ov.prev":"◀ Førre steg","ov.next":"Neste steg ▶",
 "who.you":"Du gjer det sjølv","who.py":"Python lagar filer","who.wamit":"WAMIT reknar","who.plot":"Plott og analyse",
 "g.setup":"Oppsett","g.mesh":"Studie 1: mesh","g.len":"Studie 2: lengd","g.main":"Hovudstudie",
 "d.who":"Kven","d.file":"Fil","d.what":"Kva skjer","d.in":"Inn","d.out":"Ut","d.ex":"Med dine tal",
 "n1.t":"Sett B i config.py","n2.t":"Lag mesh study-mapper","n3.t":"Køyr WAMIT i kvar mappe","n4.t":"Plott og vel k",
 "n5.t":"Lag length study-mapper","n6.t":"Køyr WAMIT, plott og vel lengd","n7.t":"Lag main_study (kopi)","n8.t":"Siste plott og rapport",
 "n1.w":"Du endrar B til ditt eige tal, og WAMIT-stiane til der WAMIT ligg på din PC. D = B/4 og frekvensområdet er likt for alle. Alle andre skript les verdiane herifrå.",
 "n2.w":"For kvar k i MESH_K_VALUES lagar skriptet éi case-mappe med lengd L = 1B. box_generator lagar meshet, og wamit_io skriv alle inputfilene (.gdf, .pot, .frc, .cfg, fnames.wam og run.bat). Nx, Ny og Nz er round(k·L), round(k·B) og round(k·D).",
 "n3.w":"Du dobbelklikkar run.bat i kvar case-mappe. Fila slettar gamle resultat og startar wamit.exe, som les fnames.wam og dei fire inputfilene. WAMIT reknar alle periodane og skriv resultatfilene.",
 "n4.w":"Skripta les case.1 og case.6 i alle mesh-mappene og lagar figurar. Du ser kvar resultata slutter å endre seg når meshet blir finare, og vel den grovaste k som er god nok. Den skriv du i LENGTH_STUDY_MESH_K i config.py.",
 "n5.w":"For kvar n i LENGTH_MULTIPLES lagar skriptet ei case-mappe med lengd L = n·B, med meshtettleiken du valde (k = LENGTH_STUDY_MESH_K). L = 1B blir hoppa over, fordi den same køyringa alt finst i mesh_study.",
 "n6.w":"Du køyrer run.bat i kvar lengdemappe og køyrer plottskripta på nytt. I figurane ser du kvar resultata slutter å endre seg når skroget blir lengre (3D-effekten forsvinn). Den lengda du vel, skriv du i FINAL_LENGTH_B i config.py.",
 "n7.w":"Hovudstudien er ikkje ei ny WAMIT-køyring. Skriptet kopierer den ferdige case-mappa du valde (FINAL_LENGTH_B ved k = LENGTH_STUDY_MESH_K) til main_study. Mappa må alt ha case.out, case.1 og case.6.",
 "n8.w":"Plottskripta køyrer ein siste gong og lagar hovudfigurane frå main_study: added mass, demping og bølgjehøgd (modul og fase). Figurane går inn i rapporten.",
 "n1.i":"Tildelt B (4, 6, 8 eller 10 m)","n1.o":"Verdiar som alle skripta hentar med import config",
 "n2.i":"config.py","n2.o":"mesh_study/k…_h…m/, ei mappe per k",
 "n3.i":"case.gdf, case.pot, case.frc, case.cfg og fnames.wam","n3.o":"case.1 (added mass og demping), case.6 (bølgjehøgd) og case.out (logg)",
 "n4.i":"case.1 og case.6 frå mesh_study/","n4.o":"report_plots/mesh_study_*.png og mesh_convergence.png, og eit val av k",
 "n5.i":"config.py med LENGTH_STUDY_MESH_K","n5.o":"length_study/L…B_…m/, ei mappe per lengd",
 "n6.i":"length_study/-mappene","n6.o":"report_plots/length_study_*.png, og eit val av lengd",
 "n7.i":"Ei ferdig køyrd mappe frå mesh_study eller length_study","n7.o":"main_study/",
 "n8.i":"main_study/case.1 og case.6","n8.o":"report_plots/main_study_added_mass_damping.png og main_study_wave_elevation.png",
 "ex.params":"Verdiar frå config.py",
 "ex.pr":"Feltpunkt for bølgjehøgd: y = 1.5B og 3B",
 "ex.meshtbl":"Mappene som blir laga (L = 1B):",
 "ex.lentbl":"Mappene som blir laga (k = {k}):",
 "ex.skip":"L = 1B blir ikkje laga på nytt: mappa {f} i mesh_study blir brukt.",
 "ex.periods":"Periodane i case.pot, T = 2π / (ω̂·√(2g/B)) i sekund:",
 "ex.pickk":"Vel k for lengdestudien (LENGTH_STUDY_MESH_K):",
 "ex.pickL":"Vel endeleg lengd (FINAL_LENGTH_B):",
 "ex.src":"Med LENGTH_STUDY_MESH_K = {k} og FINAL_LENGTH_B = {n} kopierer skriptet {src} til main_study.",
 "ex.nowamit":"Ingen ny WAMIT-køyring her.",
 "ex.needs":"Mappa må ha case.out, case.1 og case.6 før kopiering.",
 "th.folder":"mappe","th.panels":"panel",
 "ov.case_h":"Ei case-mappe, fil for fil",
 "ov.case_p":"Kvar case-mappe har same oppbygging. Vel ein studie, og trykk på ei fil for å sjå kva ho inneheld og kva ho gjer. Innhaldet er det skriptet faktisk skriv med dine tal.",
 "st.mesh":"Mesh: k = {k}","st.len":"Lengd: L = {n}B",
 "f.py":"Laga av Python (før WAMIT)","f.wamit":"Laga av WAMIT (etter run.bat)",
 "f.gdf":"Panelmeshet, altså geometrien til skroget. Laga av box_generator og writetoGDF. Fire hjørnepunkt per panel.",
 "f.pot":"Kva WAMIT skal rekne: periodane, kva rørsler (sway og heave, IMODE) og at det berre er radiasjon (IRAD = 0, IDIFF = -1).",
 "f.frc":"Kva som skal skrivast ut: added mass og demping (IOPTN 1) og bølgjehøgd (IOPTN 6) i to feltpunkt, 1.5B og 3B frå skroget.",
 "f.cfg":"Innstillingar for løysaren, og stien til WAMIT.",
 "f.fnames":"Peikar på dei fire filene WAMIT les, i denne rekkjefølgja.",
 "f.bat":"Slettar gamle resultat og startar wamit.exe i mappa.",
 "f.c1":"Added mass og demping for kvar periode. Les av parse_case1 i results.py.",
 "f.c6":"Bølgjehøgd (modul og fase) i feltpunkta. Les av parse_case6 i results.py.",
 "f.out":"Hovudloggen frå WAMIT. Her står advarslar, til dømes om konvergens.",
 "f.other":"Andre loggar og hjelpefiler frå WAMIT. Plottskripta bruker dei ikkje.",
 "f.info":"{N} panel (Nx = {Nx}, Ny = {Ny}, Nz = {Nz}), L = {L} m, k = {k}",
 "f.more":"… {rest} linjer til, fire per panel",
 "f.tag":"Panel 1 er det første i flata y = -B/2:"
},
en:{
 "nav.ov":"Overview",
 "card.ov.t":"How the setup runs",
 "card.ov.d":"From config.py to finished figures: which scripts run, what you do yourself, and what is created in each folder.",
 "ov.title":"Overview",
 "ov.h1":"How the setup runs",
 "ov.sub":"From config.py to finished figures in the report. Click a step to see which script runs, what goes in and out, and what you do yourself. Choose a person to see the numbers for your own B.",
 "ov.person_h":"Choose person",
 "ov.person_info":"B = {B} m, D = B/4 = {D} m, ω̂ from 0.1 to 2.0 in steps of 0.1 ({n} periods)",
 "ov.flow_h":"The flow, step by step",
 "ov.prev":"◀ Previous step","ov.next":"Next step ▶",
 "who.you":"You do it yourself","who.py":"Python creates files","who.wamit":"WAMIT computes","who.plot":"Plots and analysis",
 "g.setup":"Setup","g.mesh":"Study 1: mesh","g.len":"Study 2: length","g.main":"Main study",
 "d.who":"Who","d.file":"File","d.what":"What happens","d.in":"In","d.out":"Out","d.ex":"With your numbers",
 "n1.t":"Set B in config.py","n2.t":"Create the mesh study folders","n3.t":"Run WAMIT in each folder","n4.t":"Plot and choose k",
 "n5.t":"Create the length study folders","n6.t":"Run WAMIT, plot and choose length","n7.t":"Create main_study (a copy)","n8.t":"Final plots and report",
 "n1.w":"You change B to your own value, and the WAMIT paths to where WAMIT is on your PC. D = B/4 and the frequency range are the same for everyone. All other scripts read their values from here.",
 "n2.w":"For each k in MESH_K_VALUES the script creates one case folder with length L = 1B. box_generator makes the mesh, and wamit_io writes all the input files (.gdf, .pot, .frc, .cfg, fnames.wam and run.bat). Nx, Ny and Nz are round(k·L), round(k·B) and round(k·D).",
 "n3.w":"You double-click run.bat in each case folder. The file deletes old results and starts wamit.exe, which reads fnames.wam and the four input files. WAMIT computes all periods and writes the result files.",
 "n4.w":"The scripts read case.1 and case.6 in all the mesh folders and make figures. You look for where the results stop changing as the mesh gets finer, and choose the coarsest k that is good enough. You write it in LENGTH_STUDY_MESH_K in config.py.",
 "n5.w":"For each n in LENGTH_MULTIPLES the script creates one case folder with length L = n·B, using the mesh density you chose (k = LENGTH_STUDY_MESH_K). L = 1B is skipped, because the same run already exists in mesh_study.",
 "n6.w":"You run run.bat in each length folder and run the plot scripts again. In the figures you see where the results stop changing as the hull gets longer (the 3D effect disappears). You write the length you choose in FINAL_LENGTH_B in config.py.",
 "n7.w":"The main study is not a new WAMIT run. The script copies the finished case folder you chose (FINAL_LENGTH_B at k = LENGTH_STUDY_MESH_K) into main_study. The folder must already contain case.out, case.1 and case.6.",
 "n8.w":"The plot scripts run one last time and make the main figures from main_study: added mass, damping and wave elevation (modulus and phase). The figures go into the report.",
 "n1.i":"Your assigned B (4, 6, 8 or 10 m)","n1.o":"Values every script picks up with import config",
 "n2.i":"config.py","n2.o":"mesh_study/k…_h…m/, one folder per k",
 "n3.i":"case.gdf, case.pot, case.frc, case.cfg and fnames.wam","n3.o":"case.1 (added mass and damping), case.6 (wave elevation) and case.out (log)",
 "n4.i":"case.1 and case.6 from mesh_study/","n4.o":"report_plots/mesh_study_*.png and mesh_convergence.png, and a choice of k",
 "n5.i":"config.py with LENGTH_STUDY_MESH_K","n5.o":"length_study/L…B_…m/, one folder per length",
 "n6.i":"the length_study/ folders","n6.o":"report_plots/length_study_*.png, and a choice of length",
 "n7.i":"A finished folder from mesh_study or length_study","n7.o":"main_study/",
 "n8.i":"main_study/case.1 and case.6","n8.o":"report_plots/main_study_added_mass_damping.png and main_study_wave_elevation.png",
 "ex.params":"Values from config.py",
 "ex.pr":"Field points for wave elevation: y = 1.5B and 3B",
 "ex.meshtbl":"The folders that are created (L = 1B):",
 "ex.lentbl":"The folders that are created (k = {k}):",
 "ex.skip":"L = 1B is not created again: the folder {f} in mesh_study is used.",
 "ex.periods":"The periods in case.pot, T = 2π / (ω̂·√(2g/B)) in seconds:",
 "ex.pickk":"Choose k for the length study (LENGTH_STUDY_MESH_K):",
 "ex.pickL":"Choose the final length (FINAL_LENGTH_B):",
 "ex.src":"With LENGTH_STUDY_MESH_K = {k} and FINAL_LENGTH_B = {n} the script copies {src} to main_study.",
 "ex.nowamit":"No new WAMIT run here.",
 "ex.needs":"The folder must contain case.out, case.1 and case.6 before copying.",
 "th.folder":"folder","th.panels":"panels",
 "ov.case_h":"One case folder, file by file",
 "ov.case_p":"Every case folder has the same structure. Choose a study, then click a file to see what it contains and what it does. The content is what the script actually writes with your numbers.",
 "st.mesh":"Mesh: k = {k}","st.len":"Length: L = {n}B",
 "f.py":"Created by Python (before WAMIT)","f.wamit":"Created by WAMIT (after run.bat)",
 "f.gdf":"The panel mesh, that is the geometry of the hull. Made by box_generator and writetoGDF. Four corner points per panel.",
 "f.pot":"What WAMIT should compute: the periods, which motions (sway and heave, IMODE) and that it is radiation only (IRAD = 0, IDIFF = -1).",
 "f.frc":"What to write out: added mass and damping (IOPTN 1) and wave elevation (IOPTN 6) at two field points, 1.5B and 3B from the hull.",
 "f.cfg":"Solver settings, and the path to WAMIT.",
 "f.fnames":"Points to the four files WAMIT reads, in this order.",
 "f.bat":"Deletes old results and starts wamit.exe in the folder.",
 "f.c1":"Added mass and damping for each period. Read by parse_case1 in results.py.",
 "f.c6":"Wave elevation (modulus and phase) at the field points. Read by parse_case6 in results.py.",
 "f.out":"The main log from WAMIT. Warnings are listed here, for example about convergence.",
 "f.other":"Other logs and helper files from WAMIT. The plot scripts do not use them.",
 "f.info":"{N} panels (Nx = {Nx}, Ny = {Ny}, Nz = {Nz}), L = {L} m, k = {k}",
 "f.more":"… {rest} more lines, four per panel",
 "f.tag":"Panel 1 is the first one on the face y = -B/2:"
}});

const T=(k,v)=>SITE.t(k,v), $=id=>document.getElementById(id);
const G=9.80665;
const PERSONS=[{n:"Anders",B:4},{n:"Øyvind",B:6},{n:"Zhijun",B:8},{n:"Øyonn",B:10}];
const KS=[1,2,4,6,8,10], NS=[1,2,3,4,5,6];
const S={p:1, node:0, kLS:6, finalN:6, st:{type:"mesh",v:6}, file:"case.gdf"};

function pyRound(x){ const f=Math.floor(x), d=x-f; if(Math.abs(d-0.5)<1e-9) return (f%2===0)?f:f+1; return Math.round(x); }
const f6=x=>(Math.abs(x)<5e-7?0:x).toFixed(6);
const B=()=>PERSONS[S.p].B, D=()=>B()/4;
const fmt=n=>String(+(+n).toFixed(3));
function periods(){ const w=Math.sqrt(2*G/B()); const a=[]; for(let i=1;i<=20;i++){ const oh=Math.round(i*10)/100; a.push({oh, T:2*Math.PI/(oh*w)}); } return a; }
function meshName(k){ return "k"+k+"_h"+(1/k).toFixed(3)+"m"; }
function lenName(n){ return "L"+n+"B_"+(n*B()).toFixed(1)+"m"; }
function caseParams(type,v){
  const b=B(), d=D(); let k,nB;
  if(type==="mesh"){ k=v; nB=1; } else { k=S.kLS; nB=v; }
  const L=nB*b, Nx=Math.max(1,pyRound(k*L)), Ny=Math.max(1,pyRound(k*b)), Nz=Math.max(1,pyRound(k*d));
  return {type,k,nB,L,Nx,Ny,Nz,N:Nx*Ny+2*Nx*Nz+2*Ny*Nz,
    folder:(type==="mesh"?"mesh_study/"+meshName(k):"length_study/"+lenName(nB)),
    tag:(type==="mesh"?"Mesh sensitivity study (full box), k="+k:"3D-effect (length) sensitivity study, k="+k)};
}
const srcFolder=()=> S.finalN===1 ? "mesh_study/"+meshName(S.kLS) : "length_study/"+lenName(S.finalN);

const NODES=[
 {id:1,g:"setup",who:["you"],files:["config.py"]},
 {id:2,g:"mesh",who:["py"],files:["generate_mesh_study.py"]},
 {id:3,g:"mesh",who:["you","wamit"],files:["run.bat"]},
 {id:4,g:"mesh",who:["plot","you"],files:["generate_report_plots.py","generate_wave_elevation_plots.py"]},
 {id:5,g:"len",who:["py"],files:["generate_length_study.py"]},
 {id:6,g:"len",who:["you","wamit","plot"],files:["run.bat","generate_report_plots.py","generate_wave_elevation_plots.py"]},
 {id:7,g:"main",who:["py"],files:["generate_main_study.py"]},
 {id:8,g:"main",who:["plot"],files:["generate_report_plots.py","generate_wave_elevation_plots.py"]}
];
const COLOR={you:"var(--c-you)",py:"var(--c-py)",wamit:"var(--c-wamit)",plot:"var(--c-plot)"};

function renderPersons(){
  $("persons").innerHTML=PERSONS.map((p,i)=>'<span class="chip'+(S.p===i?' on':'')+'" data-p="'+i+'">'+p.n+': B = '+p.B+' m</span>').join("");
  $("persons").querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ S.p=+c.dataset.p; renderAll(); }));
  $("personinfo").textContent=T("ov.person_info",{B:B(),D:fmt(D()),n:20});
}
function renderFlow(){
  $("legend").innerHTML=["you","py","wamit","plot"].map(w=>'<span><i style="background:'+COLOR[w]+'"></i>'+T("who."+w)+'</span>').join("");
  $("flow").innerHTML=NODES.map((n,i)=>
    '<button class="node'+(i===S.node?' on':'')+(i<S.node?' done':'')+'" data-i="'+i+'" style="--nc:'+COLOR[n.who[0]]+'">'+
    '<span class="no">'+n.id+' · '+T("g."+n.g)+'</span><span class="tt">'+T("n"+n.id+".t")+'</span><code>'+n.files[0]+'</code></button>').join("");
  $("flow").querySelectorAll(".node").forEach(b=>b.addEventListener("click",()=>{ S.node=+b.dataset.i; renderFlow(); renderDetail(); }));
  $("prev").disabled=S.node===0; $("next").disabled=S.node===NODES.length-1;
}
function table(head,rows,hl){
  return '<table class="t"><tr>'+head.map(h=>'<th>'+h+'</th>').join("")+'</tr>'+rows.map((r,i)=>'<tr'+(hl===i?' class="hl"':'')+'>'+r.map(c=>'<td>'+c+'</td>').join("")+'</tr>').join("")+'</table>';
}
function example(id){
  const b=B(), d=D();
  if(id===1){
    return '<div class="small">'+T("ex.params")+'</div>'+table(["B","ASPECT_RATIO","D = B/4","OMEGA_HAT","MESH_K_VALUES","LENGTH_MULTIPLES"],
      [[b,"4.0",fmt(d),"0.1 … 2.0 (0.1)","[1, 2, 4, 6, 8, 10]","[1, 2, 3, 4, 5, 6]"]])+
      '<div class="small">'+T("ex.pr")+': '+fmt(1.5*b)+' m, '+fmt(3*b)+' m</div>';
  }
  if(id===2){
    const rows=KS.map(k=>{ const c=caseParams("mesh",k); return ["mesh_study/"+meshName(k),c.Nx,c.Ny,c.Nz,c.N]; });
    return '<div class="small">'+T("ex.meshtbl")+'</div>'+table([T("th.folder"),"Nx","Ny","Nz",T("th.panels")],rows,KS.indexOf(S.kLS));
  }
  if(id===3||id===6&&false){
    const p=periods();
    return '<div class="small">'+T("ex.periods")+'</div>'+table(["ω̂"].concat(p.map(x=>x.oh)),[["T"].concat(p.map(x=>x.T.toFixed(3)))]);
  }
  if(id===4){
    return '<div class="small">'+T("ex.pickk")+'</div><div class="chips" id="pickk">'+KS.map(k=>'<span class="chip'+(S.kLS===k?' on':'')+'" data-k="'+k+'">k = '+k+'</span>').join("")+'</div>';
  }
  if(id===5){
    const rows=[]; NS.filter(n=>n>1).forEach(n=>{ const c=caseParams("len",n); rows.push(["length_study/"+lenName(n),c.L,c.Nx,c.Ny,c.Nz,c.N]); });
    return '<div class="small">'+T("ex.lentbl",{k:S.kLS})+'</div>'+table([T("th.folder"),"L [m]","Nx","Ny","Nz",T("th.panels")],rows)+
      '<div class="small">'+T("ex.skip",{f:meshName(S.kLS)})+'</div>';
  }
  if(id===6){
    return '<div class="small">'+T("ex.pickL")+'</div><div class="chips" id="pickL">'+NS.map(n=>'<span class="chip'+(S.finalN===n?' on':'')+'" data-n="'+n+'">L = '+n+'B</span>').join("")+'</div>';
  }
  if(id===7){
    return '<div class="note">'+T("ex.src",{k:S.kLS,n:S.finalN,src:"<code>"+srcFolder()+"</code>"})+'<br>'+T("ex.nowamit")+' '+T("ex.needs")+'</div>';
  }
  return '<ul style="margin:6px 0;padding-left:18px"><li><code>report_plots/main_study_added_mass_damping.png</code></li><li><code>report_plots/main_study_wave_elevation.png</code></li></ul>';
}
function renderDetail(){
  const n=NODES[S.node], id=n.id;
  $("detail").innerHTML='<h3>'+id+'. '+T("n"+id+".t")+'</h3>'+
    '<dl><dt>'+T("d.who")+'</dt><dd>'+n.who.map(w=>'<span class="badge '+w+'">'+T("who."+w)+'</span>').join("")+'</dd>'+
    '<dt>'+T("d.file")+'</dt><dd>'+n.files.map(f=>'<code>'+f+'</code>').join(" ")+'</dd>'+
    '<dt>'+T("d.what")+'</dt><dd>'+T("n"+id+".w")+'</dd>'+
    '<dt>'+T("d.in")+'</dt><dd>'+T("n"+id+".i")+'</dd>'+
    '<dt>'+T("d.out")+'</dt><dd>'+T("n"+id+".o")+'</dd></dl>'+
    '<h2 style="margin-top:12px">'+T("d.ex")+'</h2>'+example(id);
  const pk=$("pickk"); if(pk) pk.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ S.kLS=+c.dataset.k; renderAll(); }));
  const pl=$("pickL"); if(pl) pl.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ S.finalN=+c.dataset.n; renderAll(); }));
}

// ----- innhaldet i dei filene Python skriv, same tekst som wamit_io.py -----
function fileContent(name,c){
  const b=B(), per=periods();
  const probes="["+[1.5*b,3.0*b].map(x=>x.toFixed(1)).join(", ")+"]";
  if(name==="case.pot") return [
    c.tag+" -- L="+c.L.toFixed(2)+"m B="+b.toFixed(1)+"m D="+fmt(D())+"m",
    " -1. 0. 0. 0. 0.                HBOT, XBODY(1-4)",
    " 0          -1                  IRAD, IDIFF (radiation only, no diffraction)",
    " 0  1  1  0  0  0               IMODE(1-6)  [sway, heave]",
    "  "+per.length,
    " "+per.map(p=>p.T.toFixed(6)).join(" ")+"  PER [s]",
    " 0                            NBETA (no diffraction heading needed)"].join("\n");
  if(name==="case.frc") return [
    c.tag+" -- probes y="+probes,
    " 1    0    0    0    0    1    0    0    0   IOPTN(1-9) [added mass/damping + free-surface elevation]",
    " 0.000000                                    VCG",
    " 1.000000      .0000000      .0000000",
    " .0000000      1.000000      .0000000",
    " .0000000      .0000000      1.000000        XPRDCT",
    " 0                                           NBETAH",
    " 2                                           NFIELD",
    " 0.0  "+(1.5*b).toFixed(4)+"  0.0",
    " 0.0  "+(3.0*b).toFixed(4)+"  0.0"].join("\n");
  if(name==="case.cfg") return [" ipltdat=5"," maxscr=1024"," ISOR=1"," ISOLVE=0"," ISCATT=0"," IQUAD=0"," ILOG=1"," IDIAG=0"," IRR=0"," MONITR=0"," NUMHDR=1",
    " INUMOPT6=1  (separate radiation-mode elevation components in .6 file)",
    " USERID_PATH=C:\\wamitv6  (directory for *.exe, *.dll, and userid.wam)"].join("\n");
  if(name==="fnames.wam") return "case.cfg\ncase.gdf\ncase.pot\ncase.frc";
  if(name==="run.bat") return "del case*.p2f\ndel case*.OUT\ndel case*.1\ndel case*.6\n\nC:\\wamitv6\\wamit.exe";
  if(name==="case.gdf"){
    const dx=c.L/c.Nx, dz=D()/c.Nz, X=[c.L/2,c.L/2-dx,c.L/2-dx,c.L/2], Z=[0,0,-dz,-dz];
    const lines=["...\\"+c.folder.replace("/","\\")+"\\case.gdf  --","1.000       9.806650    ULEN, GRAV","0           0            ISX, ISY",c.N+"    NPAN"];
    for(let i=0;i<4;i++) lines.push(f6(X[i])+" "+f6(-b/2)+" "+f6(Z[i])+" ");
    return lines.join("\n");
  }
  return "";
}
const FILES_PY=[["case.gdf","f.gdf"],["case.pot","f.pot"],["case.frc","f.frc"],["case.cfg","f.cfg"],["fnames.wam","f.fnames"],["run.bat","f.bat"]];
const FILES_W=[["case.1","f.c1"],["case.6","f.c6"],["case.out","f.out"],["case.p2f, case.hst, case.fpt, case_pan.dat, errorf.log, errorp.log, wamitlog.txt","f.other"]];

function renderCase(){
  const studies=KS.map(k=>({type:"mesh",v:k,label:T("st.mesh",{k})})).concat(NS.filter(n=>n>1).map(n=>({type:"len",v:n,label:T("st.len",{n})})));
  $("studies").innerHTML=studies.map(s=>'<span class="chip'+(S.st.type===s.type&&S.st.v===s.v?' on':'')+'" data-t="'+s.type+'" data-v="'+s.v+'">'+s.label+'</span>').join("");
  $("studies").querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ S.st={type:c.dataset.t,v:+c.dataset.v}; renderCase(); }));
  const c=caseParams(S.st.type,S.st.v);
  const all=FILES_PY.concat(FILES_W); const cur=all.find(f=>f[0]===S.file)||FILES_PY[0];
  const btn=(f,col)=>'<button class="f'+(f[0]===cur[0]?' on':'')+'" data-f="'+f[0]+'"><i style="background:'+col+'"></i>'+(f[0].length>20?f[0].slice(0,13)+"…":f[0])+'</button>';
  const content=fileContent(cur[0],c);
  let more="";
  if(cur[0]==="case.gdf") more='<div class="small">'+T("f.tag")+'</div>';
  $("folder").innerHTML='<div class="files"><h4>'+c.folder+'/</h4><h4>'+T("f.py")+'</h4>'+FILES_PY.map(f=>btn(f,COLOR.py)).join("")+
    '<h4>'+T("f.wamit")+'</h4>'+FILES_W.map(f=>btn(f,COLOR.wamit)).join("")+'</div>'+
    '<div class="view"><h3>'+cur[0]+'</h3><div class="small">'+T("f.info",{N:c.N,Nx:c.Nx,Ny:c.Ny,Nz:c.Nz,L:fmt(c.L),k:c.k})+'</div>'+
    '<p>'+T(cur[1])+'</p>'+more+(content?'<pre class="mono">'+content.replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</pre>':'')+
    (cur[0]==="case.gdf"?'<div class="small">'+T("f.more",{rest:c.N*4-4})+'</div>':'')+'</div>';
  $("folder").querySelectorAll(".f").forEach(x=>x.addEventListener("click",()=>{ S.file=x.dataset.f; renderCase(); }));
}
function renderAll(){ renderPersons(); renderFlow(); renderDetail(); renderCase(); }

$("prev").addEventListener("click",()=>{ if(S.node>0){ S.node--; renderFlow(); renderDetail(); } });
$("next").addEventListener("click",()=>{ if(S.node<NODES.length-1){ S.node++; renderFlow(); renderDetail(); } });
document.addEventListener("keydown",e=>{ if(e.target.tagName==="INPUT")return;
  if(e.key==="ArrowRight"&&S.node<NODES.length-1){ S.node++; renderFlow(); renderDetail(); }
  if(e.key==="ArrowLeft"&&S.node>0){ S.node--; renderFlow(); renderDetail(); } });
SITE.onLang(renderAll);
SITE.start(renderAll);
