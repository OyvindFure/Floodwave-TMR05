"use strict";
/* Seksjonen «Slik ser det ut når du køyrer Box_generator.py» på box generator-sida.
   Viser terminalutskrifta og dei to figurvindauga som python opnar: plotPanelNormals og plot_3D_panel. */
SITE.add({
no:{
 "pr.h":"Slik ser det ut når du køyrer Box_generator.py",
 "pr.intro":"Nederst i Box_generator.py ligg eit testprogram. Når du køyrer fila (til dømes Run i VS Code) skjer tre ting: koden skriv ut talet på panel, python opnar to figurvindauge, og fila <code>BOXgenerated.gdf</code> blir skriven. Her ser du det same. Venstre museknapp forskyv figuren, og hjulet inne (dra) roterer han.",
 "pr.kind":"Boks:", "pr.full":"Heil boks (box_generator)", "pr.quarter":"Kvartboks (boxq_generator)",
 "pr.preset":"Døme:", "pr.p_main":"Frå fila (10, 5, 2)", "pr.p_small":"Lite døme", "pr.p_proj":"Prosjektet, L/B = 0,5",
 "pr.labels":"Vis panelnummer i figur 2",
 "pr.term":"Terminal",
 "pr.win1":"Figur 1: plotPanelNormals", "pr.win2":"Figur 2: plot_3D_panel",
 "pr.cap1":"Éin blå pil per panel, frå midten av panelet og ut langs normalen. Alle pilene skal peike <b>ut</b> av skroget. Dei tre fargepilene er koordinatsystemet: <span style=\"color:#d62728\"><b>x</b> raud</span>, <span style=\"color:#2ca02c\"><b>y</b> grøn</span> og <span style=\"color:#1f4fd8\"><b>z</b> blå</span>, frå origo (midt på skroget, i vasslinja).",
 "pr.cap2":"Kvart panel er teikna som ei eiga linje gjennom hjørne 1, 2, 3, 4 (ikkje attende til 1), og har si eiga farge. Teksten er panelnummeret <code>i</code>, som startar på 0. Biletet startar med <code>view_init(azim=3)</code>, altså sett nesten rett frå x-aksen. Dobbeltklikk set visninga tilbake.",
 "pr.file":"Fila som blir skriven til disk:",
 "pr.file_note":"{n} panel gir {m} linjer: 4 toppliner og 4 hjørnelinjer per panel. Sjå <a href=\"gdf.html\">sida om .gdf-fila</a> for ei forklaring linje for linje.",
 "pr.q_note":"<b>Kvartboks:</b> berre den fjerdedelen der x &gt; 0 og y &gt; 0 er med, og det er ingen panel på symmetriplana. Dei stipla panela viser kva WAMIT speglar seg til når ISX = ISY = 1.",
 "pr.call":"Kallet i koden:",
 "pr.out1":"Number of panels: {n}",
 "pr.out2":"(to figurvindauge opnar seg)",
 "pr.out3":"BOXgenerated.gdf skriven ({m} linjer)",
 "pr.quarterhint":"Merk: i boxq_generator er Nx og Ny talet på panel langs <i>halve</i> lengda og halve breidda."
},
en:{
 "pr.h":"What it looks like when you run Box_generator.py",
 "pr.intro":"At the bottom of Box_generator.py there is a test program. When you run the file (for example Run in VS Code) three things happen: the code prints the number of panels, python opens two figure windows, and the file <code>BOXgenerated.gdf</code> is written. Here you see the same. Left mouse button pans the figure, and the wheel pressed in (drag) rotates it.",
 "pr.kind":"Box:", "pr.full":"Full box (box_generator)", "pr.quarter":"Quarter box (boxq_generator)",
 "pr.preset":"Example:", "pr.p_main":"From the file (10, 5, 2)", "pr.p_small":"Small example", "pr.p_proj":"The project, L/B = 0.5",
 "pr.labels":"Show panel numbers in figure 2",
 "pr.term":"Terminal",
 "pr.win1":"Figure 1: plotPanelNormals", "pr.win2":"Figure 2: plot_3D_panel",
 "pr.cap1":"One blue arrow per panel, from the centre of the panel and out along the normal. All arrows should point <b>out of</b> the hull. The three coloured arrows are the coordinate system: <span style=\"color:#d62728\"><b>x</b> red</span>, <span style=\"color:#2ca02c\"><b>y</b> green</span> and <span style=\"color:#1f4fd8\"><b>z</b> blue</span>, from the origin (middle of the hull, at the waterline).",
 "pr.cap2":"Each panel is drawn as its own line through corners 1, 2, 3, 4 (not back to 1) and has its own colour. The text is the panel number <code>i</code>, starting at 0. The picture starts with <code>view_init(azim=3)</code>, that is, seen almost straight along the x axis. Double click resets the view.",
 "pr.file":"The file that is written to disk:",
 "pr.file_note":"{n} panels give {m} lines: 4 header lines and 4 corner lines per panel. See the <a href=\"gdf.html\">page about the .gdf file</a> for a line by line explanation.",
 "pr.q_note":"<b>Quarter box:</b> only the quarter where x &gt; 0 and y &gt; 0 is included, and there are no panels on the symmetry planes. The dashed panels show what WAMIT mirrors to when ISX = ISY = 1.",
 "pr.call":"The call in the code:",
 "pr.out1":"Number of panels: {n}",
 "pr.out2":"(two figure windows open)",
 "pr.out3":"BOXgenerated.gdf written ({m} lines)",
 "pr.quarterhint":"Note: in boxq_generator, Nx and Ny are the number of panels along <i>half</i> the length and half the beam."
}});

(function(){
const $=id=>document.getElementById(id), T=(k,v)=>SITE.t(k,v);
const PRESETS={
  main:{full:[10,5,2,10,5,4], quarter:[10,5,2,5,3,4]},
  small:{full:[4,2,1,4,2,2], quarter:[4,2,1,2,1,2]},
  proj:{full:[3,6,1.5,2,2,1], quarter:[3,6,1.5,1,1,1]}
};
const ST={preset:"main", quarter:false};
let p1=null, p2=null;
const num=x=>String(+(+x).toFixed(3));
function build(){
  const a=PRESETS[ST.preset][ST.quarter?"quarter":"full"];
  const d=ST.quarter?PY.boxQuarter(...a):PY.boxFull(...a);
  const fn=ST.quarter?"boxq_generator":"box_generator";
  $("pr_call").textContent="X, Y, Z, npanel, symx, symy = "+fn+"("+a.map(num).join(", ")+")";
  const gl=PY.gdfLines(d,"BOXgenerated.gdf");
  $("pr_term").textContent=">>> python Box_generator.py\n"+T("pr.out1",{n:d.N})+"\n"+T("pr.out2")+"\n"+T("pr.out3",{m:gl.length});
  $("pr_gdf").textContent=gl.slice(0,12).join("\n")+(gl.length>12?"\n...":"");
  $("pr_filenote").innerHTML=T("pr.file_note",{n:d.N,m:gl.length});
  $("pr_qnote").style.display=ST.quarter?"block":"none";
  $("pr_qhint").style.display=ST.quarter?"block":"none";
  const lab=$("pr_labels").checked && d.N<=80;
  p1.set({data:d,mode:"normals",mirror:ST.quarter});
  p2.set({data:d,mode:"panels",labels:lab,mirror:ST.quarter});
  document.querySelectorAll("#pr_kind .chip").forEach(c=>c.classList.toggle("on",(c.dataset.q==="1")===ST.quarter));
  document.querySelectorAll("#pr_preset .chip").forEach(c=>c.classList.toggle("on",c.dataset.p===ST.preset));
}
function init(){
  if(!$("pr_cv1")) return;
  p1=PY.Plot($("pr_cv1"),{az:-60,el:30,eq:false}); p1.setHome(-60,30);
  p2=PY.Plot($("pr_cv2"),{az:3,el:30,eq:true}); p2.setHome(3,30);
  document.querySelectorAll("#pr_kind .chip").forEach(c=>c.addEventListener("click",()=>{ ST.quarter=c.dataset.q==="1"; build(); }));
  document.querySelectorAll("#pr_preset .chip").forEach(c=>c.addEventListener("click",()=>{ ST.preset=c.dataset.p; build(); }));
  $("pr_labels").addEventListener("change",build);
  p1.resize(); p2.resize(); build();
}
SITE.onLang(()=>{ if($("pr_cv1")) build(); });
SITE.start(init);
window.addEventListener("themechange",()=>{});
})();
