"use strict";
/* Sida om .gdf-fila: kva kvar linje betyr, og korleis Box_generator.py lagar dei. */
SITE.add({
no:{
 "gd.title":"GDF-fila",
 "gd.h1":"case.gdf lest mot Box_generator.py",
 "gd.sub":"Klikk på ei linje i fila til venstre og sjå kva ho tyder i 3D-modellen, kva kodelinje som skreiv ho, og kva rad i tabellane X, Y og Z ho kom frå.",
 "gd.ess_h":"Essensen i fem punkt",
 "gd.e1":"<b>Fila er vanleg tekst.</b> Fire toppliner fortel WAMIT kva slags fil dette er, og så kjem berre tal.",
 "gd.e2":"<b>Eitt panel er fire linjer.</b> Kvar linje er eitt hjørne med tre tal, <code>x y z</code>. Panel nummer i startar på fil-linje 5 + 4·i.",
 "gd.e3":"<b>Rekkjefølgja på dei fire hjørna er viktig.</b> Går dei mot klokka sett utanfrå, peikar normalen ut av skroget. Det er det WAMIT forventar.",
 "gd.e4":"<b>Berre våt overflate.</b> Det er ingen panel over vassflata. Med symmetri (ISX = ISY = 1) skal det heller ikkje vere panel på symmetriplana x = 0 og y = 0.",
 "gd.e5":"<b>Fila blir laga i to steg.</b> <code>box_generator</code> eller <code>boxq_generator</code> fyller tabellane X, Y og Z, og <code>writetoGDF</code> skriv dei ut rad for rad.",
 "gd.kind":"Boks:", "gd.full":"Heil boks (ISX = ISY = 0)", "gd.quarter":"Kvartboks (ISX = ISY = 1)",
 "gd.preset":"Døme:", "gd.lb":"Lengd L/B i prosjektet (mesh frå λ/Δx = 3, λ/Δy = 8, λ/Δz = 8):", "gd.p_proj":"Prosjektet, B = 6 m", "gd.p_small":"Lite døme", "gd.p_main":"Frå Box_generator.py (10, 5, 2)",
 "gd.hint":"Merk: i boxq_generator er Nx og Ny talet på panel langs <i>halve</i> lengda og halve breidda.",
 "gd.file_h":"case.gdf",
 "gd.legend":"Blå = toppliner. Gul = fire hjørne i det valde panelet, og feit gul = det valde hjørnet. Klikk på ei linje.",
 "gd.why_h":"Kva tyder den valde linja?",
 "gd.win":"Det valde panelet i 3D",
 "gd.prev":"◀ Førre panel", "gd.next":"Neste panel ▶", "gd.panel_i":"Panel i",
 "gd.flip":"Snu hjørnerekkjefølgja for dette panelet",
 "gd.flip_ok":"Hjørna går 1, 2, 3, 4 mot klokka sett utanfrå, og normalen (grøn pil) peikar <b>ut</b> av skroget. Slik vil WAMIT ha det.",
 "gd.flip_bad":"Hjørna står i omvend rekkjefølgje (1, 4, 3, 2). Normalen (raud pil) peikar <b>inn</b> i skroget, og WAMIT ville tolka panelet som vendt feil veg.",
 "gd.corner_tag":"hjørne {c}","gd.corner":"hjørne {n}","gd.of":"{a} av {b}",
 "gd.hints":"Dra i modellen for å rotere, rull for å zoome, dobbeltklikk for å nullstille. I kvartboksen viser dei stipla panela kva WAMIT speglar seg til.",
 "gd.pi":"Panel {i} av {n}, frå flate {g}: {name}",
 "gd.code_h":"Python: writetoGDF",
 "gd.code_leg":"Gul = kodelinja som skriv den valde fil-linja.",
 "gd.map_h":"Frå tabell til fil",
 "gd.f_q0":"Side y = +B/2","gd.f_q1":"Ende x = +L/2","gd.f_q2":"Botn z = -D",
 "gd.f_0":"Side y = -B/2","gd.f_1":"Side y = +B/2","gd.f_2":"Ende x = +L/2","gd.f_3":"Ende x = -L/2","gd.f_4":"Botn z = -D",
 "gd.tag_h1":"tittel","gd.tag_h2":"ULEN, GRAV","gd.tag_h3":"ISX, ISY","gd.tag_h4":"NPAN",
 "gd.h1_t":"<b>Fil-linje 1: tittel.</b> Berre ein kommentar. Koden skriv filnamnet etterfølgd av to bindestrekar. WAMIT les ikkje innhaldet.",
 "gd.h2_t":"<b>Fil-linje 2: ULEN og GRAV.</b> ULEN = 1.000 er lengdeeininga som alle koordinatane i fila blir gonga med. Her er koordinatane i meter og ULEN er 1. GRAV = 9.806650 er tyngdeakselerasjonen i m/s². Derfor er A og B i case.1 normalisert med ULEN = 1.",
 "gd.h3_t":"<b>Fil-linje 3: ISX og ISY.</b> Symmetriflagg. 0 betyr at fila inneheld heile skroget. 1 betyr at fila berre inneheld ein del, og at WAMIT speglar han om planet x = 0 (ISX) eller y = 0 (ISY). Nå: ISX = {isx} og ISY = {isy}.",
 "gd.h4_t":"<b>Fil-linje 4: NPAN.</b> Talet på panel i fila. Det må stemme med talet på hjørne-linjer under: 4 · NPAN. Nå: NPAN = {n}, altså {m} hjørne-linjer.",
 "gd.v_t":"<b>Fil-linje {line}: hjørne {c} i panel {i}.</b> Dei tre tala er <code>X[{i}, {c0}]</code>, <code>Y[{i}, {c0}]</code> og <code>Z[{i}, {c0}]</code> med seks desimalar. Her er x = {x}, y = {y} og z = {z}. Linjenummeret er 4 + 4·{i} + {c} = {line}.",
 "gd.v_face":"Panelet blei laga av løkke {g} i {fn}: {name}.",
 "gd.v_corner":"Hjørne {c} av 4 blir også kalla punkt {c}. Rekkjefølgja 1, 2, 3, 4 er det som gir normalen.",
 "gd.v_surf":"Panelet ligg på flata {fixed}.",
 "gd.map_t":"Tabellane X, Y og Z har ei rad per panel (her rad {i}) og fire kolonner, ein per hjørne. <code>writetoGDF</code> går gjennom radene i rekkjefølgje og skriv ei linje per hjørne.",
 "gd.map_rows":"Rad {i} i tabellane:",
 "gd.map_out":"Blir dei fire fil-linjene {a} til {b}:",
 "gd.map_g":"Panelnummera i fila går gruppevis, ei flate om gongen, slik løkkene i koden køyrer:",
 "gd.map_gline":"{name}: panel {a} til {b} (fil-linje {la} til {lb})",
 "gd.cmp_h":"Heil boks mot kvartboks i same fil-format",
 "gd.cmp_th":["", "Heil boks (box_generator)", "Kvartboks (boxq_generator)"],
 "gd.cmp_rows":["Kallet","ISX, ISY","NPAN","Fil-linjer totalt","Panel finst på","Normal"],
 "gd.cmp_on_full":"alle fem flater: to sider, to endar og botn",
 "gd.cmp_on_q":"tre flater: side y = +B/2, ende x = +L/2 og botn. Ingen panel på x = 0, y = 0 eller vassflata",
 "gd.cmp_n":"ut av skroget",
 "gd.cmp_note":"Kvartboksen har {r} av panela til den heile boksen når han har same panelstorleik. Det er derfor symmetri sparer så mykje rekne­tid i WAMIT. Når fila seier ISX = ISY = 1, speglar WAMIT panela om x = 0 og y = 0 sjølv.",
 "gd.cmp_call_full":"box_generator(L, B, D, Nx, Ny, Nz)",
 "gd.cmp_call_q":"boxq_generator(L, B, D, Nx, Ny, Nz)"
},
en:{
 "gd.title":"The GDF file",
 "gd.h1":"case.gdf read against Box_generator.py",
 "gd.sub":"Click a line in the file on the left and see what it means in the 3D model, which line of code wrote it, and which row of the tables X, Y and Z it came from.",
 "gd.ess_h":"The essence in five points",
 "gd.e1":"<b>The file is plain text.</b> Four header lines tell WAMIT what kind of file this is, and then only numbers follow.",
 "gd.e2":"<b>One panel is four lines.</b> Each line is one corner with three numbers, <code>x y z</code>. Panel number i starts at file line 5 + 4·i.",
 "gd.e3":"<b>The order of the four corners matters.</b> When they run counterclockwise seen from outside, the normal points out of the hull. That is what WAMIT expects.",
 "gd.e4":"<b>Wetted surface only.</b> There are no panels above the water surface. With symmetry (ISX = ISY = 1) there should not be panels on the symmetry planes x = 0 and y = 0 either.",
 "gd.e5":"<b>The file is made in two steps.</b> <code>box_generator</code> or <code>boxq_generator</code> fills the tables X, Y and Z, and <code>writetoGDF</code> writes them out row by row.",
 "gd.kind":"Box:", "gd.full":"Full box (ISX = ISY = 0)", "gd.quarter":"Quarter box (ISX = ISY = 1)",
 "gd.preset":"Example:", "gd.lb":"Length L/B in the project (mesh from λ/Δx = 3, λ/Δy = 8, λ/Δz = 8):", "gd.p_proj":"The project, B = 6 m", "gd.p_small":"Small example", "gd.p_main":"From Box_generator.py (10, 5, 2)",
 "gd.hint":"Note: in boxq_generator, Nx and Ny are the number of panels along <i>half</i> the length and half the beam.",
 "gd.file_h":"case.gdf",
 "gd.legend":"Blue = header lines. Yellow = the four corners of the selected panel, and bold yellow = the selected corner. Click a line.",
 "gd.why_h":"What does the selected line mean?",
 "gd.win":"The selected panel in 3D",
 "gd.prev":"◀ Previous panel", "gd.next":"Next panel ▶", "gd.panel_i":"Panel i",
 "gd.flip":"Reverse the corner order for this panel",
 "gd.flip_ok":"The corners run 1, 2, 3, 4 counterclockwise seen from outside, and the normal (green arrow) points <b>out of</b> the hull. This is what WAMIT wants.",
 "gd.flip_bad":"The corners are in reverse order (1, 4, 3, 2). The normal (red arrow) points <b>into</b> the hull, and WAMIT would read the panel as facing the wrong way.",
 "gd.corner_tag":"corner {c}","gd.corner":"corner {n}","gd.of":"{a} of {b}",
 "gd.hints":"Drag the model to rotate, scroll to zoom, double click to reset. In the quarter box the dashed panels show what WAMIT mirrors to.",
 "gd.pi":"Panel {i} of {n}, from face {g}: {name}",
 "gd.code_h":"Python: writetoGDF",
 "gd.code_leg":"Yellow = the line of code that writes the selected file line.",
 "gd.map_h":"From table to file",
 "gd.f_q0":"Side y = +B/2","gd.f_q1":"End x = +L/2","gd.f_q2":"Bottom z = -D",
 "gd.f_0":"Side y = -B/2","gd.f_1":"Side y = +B/2","gd.f_2":"End x = +L/2","gd.f_3":"End x = -L/2","gd.f_4":"Bottom z = -D",
 "gd.tag_h1":"title","gd.tag_h2":"ULEN, GRAV","gd.tag_h3":"ISX, ISY","gd.tag_h4":"NPAN",
 "gd.h1_t":"<b>File line 1: title.</b> Just a comment. The code writes the file name followed by two dashes. WAMIT does not read the content.",
 "gd.h2_t":"<b>File line 2: ULEN and GRAV.</b> ULEN = 1.000 is the length unit that all coordinates in the file are multiplied by. Here the coordinates are in metres and ULEN is 1. GRAV = 9.806650 is the gravitational acceleration in m/s². That is why A and B in case.1 are normalised with ULEN = 1.",
 "gd.h3_t":"<b>File line 3: ISX and ISY.</b> Symmetry flags. 0 means the file contains the whole hull. 1 means the file contains only a part, and WAMIT mirrors it about the plane x = 0 (ISX) or y = 0 (ISY). Now: ISX = {isx} and ISY = {isy}.",
 "gd.h4_t":"<b>File line 4: NPAN.</b> The number of panels in the file. It must match the number of corner lines below: 4 · NPAN. Now: NPAN = {n}, that is {m} corner lines.",
 "gd.v_t":"<b>File line {line}: corner {c} of panel {i}.</b> The three numbers are <code>X[{i}, {c0}]</code>, <code>Y[{i}, {c0}]</code> and <code>Z[{i}, {c0}]</code> with six decimals. Here x = {x}, y = {y} and z = {z}. The line number is 4 + 4·{i} + {c} = {line}.",
 "gd.v_face":"The panel was made by loop {g} in {fn}: {name}.",
 "gd.v_corner":"Corner {c} of 4 is also called point {c}. The order 1, 2, 3, 4 is what gives the normal.",
 "gd.v_surf":"The panel lies on the face {fixed}.",
 "gd.map_t":"The tables X, Y and Z have one row per panel (here row {i}) and four columns, one per corner. <code>writetoGDF</code> goes through the rows in order and writes one line per corner.",
 "gd.map_rows":"Row {i} in the tables:",
 "gd.map_out":"Becomes the four file lines {a} to {b}:",
 "gd.map_g":"The panel numbers in the file go in groups, one face at a time, the way the loops in the code run:",
 "gd.map_gline":"{name}: panels {a} to {b} (file lines {la} to {lb})",
 "gd.cmp_h":"Full box against quarter box in the same file format",
 "gd.cmp_th":["", "Full box (box_generator)", "Quarter box (boxq_generator)"],
 "gd.cmp_rows":["The call","ISX, ISY","NPAN","File lines in total","Panels exist on","Normal"],
 "gd.cmp_on_full":"all five faces: two sides, two ends and the bottom",
 "gd.cmp_on_q":"three faces: side y = +B/2, end x = +L/2 and the bottom. No panels on x = 0, y = 0 or the water surface",
 "gd.cmp_n":"out of the hull",
 "gd.cmp_note":"The quarter box has {r} of the panels of the full box when the panel size is the same. That is why symmetry saves so much computing time in WAMIT. When the file says ISX = ISY = 1, WAMIT mirrors the panels about x = 0 and y = 0 itself.",
 "gd.cmp_call_full":"box_generator(L, B, D, Nx, Ny, Nz)",
 "gd.cmp_call_q":"boxq_generator(L, B, D, Nx, Ny, Nz)"
}});

(function(){
const $=id=>document.getElementById(id), T=(k,v)=>SITE.t(k,v);
const trArr = k => { const v = SITE.t(k); return Array.isArray(v)?v:[]; };
const PRESETS={
  proj:{full:[3,6,1.5,2,2,1], quarter:[3,6,1.5,1,1,1]},
  small:{full:[4,2,1,4,2,2], quarter:[4,2,1,2,1,2]},
  main:{full:[10,5,2,10,5,4], quarter:[10,5,2,5,3,4]}
};
function presetOf(k){ return k==="proj"?PY.projPreset(S.lb):PRESETS[k]; }
const HUE_F=[205,160,32,345,268], HUE_Q=[160,32,268];
const CODE=[
 'def writetoGDF(X, Y, Z, Npanel, path, isx=0, isy=0):',
 '    with open(path, "w") as f:',
 '        f.write(f"{path}  --\\n")',
 '        f.write("1.000       9.806650    ULEN, GRAV\\n")',
 '        f.write(f"{isx}           {isy}            ISX, ISY\\n")',
 '        f.write(f"{Npanel}    NPAN\\n")',
 '        for i in range(Npanel):',
 '            for j in range(4):',
 '                f.write(f"{X[i, j]:.6f} {Y[i, j]:.6f} {Z[i, j]:.6f} \\n")'
];
const ORD=[0,3,2,1];
const S={lb:0.5,preset:"proj",quarter:true,sel:0,corner:0,hdr:-1,flip:false};
let D=null, LINES=[], plot=null;
const num=x=>String(+(+x).toFixed(3));
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");

function fname(g){ return T(D.quarter?"gd.f_q"+g:"gd.f_"+g); }
function groupStarts(){
  const st=[], n=D.quarter?3:5; for(let g=0;g<n;g++){ const a=D.g.indexOf(g); const b=D.g.lastIndexOf(g); st.push([a,b]); } return st;
}
function build(){
  const a=presetOf(S.preset)[S.quarter?"quarter":"full"];
  D=S.quarter?PY.boxQuarter(...a):PY.boxFull(...a);
  if(S.sel>=D.N) S.sel=D.N-1;
  LINES=PY.gdfLines(D,"case.gdf");
  const fn=S.quarter?"boxq_generator":"box_generator";
  $("gd_call").textContent="X, Y, Z, npanel, symx, symy = "+fn+"("+a.map(num).join(", ")+")\nwritetoGDF(X, Y, Z, npanel, \"case.gdf\", symx, symy)";
  $("gd_I").max=D.N-1;
  document.querySelectorAll("#gd_kind .chip").forEach(c=>c.classList.toggle("on",(c.dataset.q==="1")===S.quarter));
  document.querySelectorAll("#gd_preset .chip").forEach(c=>c.classList.toggle("on",c.dataset.p===S.preset));
  $("gd_lbwrap").style.display=S.preset==="proj"?"block":"none";
  $("gd_lb").innerHTML=PY.LBS.map(r=>'<span class="chip'+(S.lb===r?' on':'')+'" data-r="'+r+'">L/B = '+r+'</span>').join("");
  $("gd_lb").querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ S.lb=+c.dataset.r; S.sel=0; S.corner=0; S.hdr=-1; build(); }));
  $("gd_hint").style.display=S.quarter?"block":"none";
  plot.set({data:D,mirror:S.quarter,hue:S.quarter?HUE_Q:HUE_F});
  update();
}
function lineOf(i,c){ return 4+4*i+c; }   // 0-basert indeks i LINES
function renderList(){
  const tags=["gd.tag_h1","gd.tag_h2","gd.tag_h3","gd.tag_h4"];
  const showAll=LINES.length<=44;
  const idxs=[]; for(let n=0;n<4;n++) idxs.push(n);
  const show=new Set(idxs);
  if(showAll){ for(let n=4;n<LINES.length;n++) show.add(n); }
  else { for(let p=Math.max(0,S.sel-1);p<=Math.min(D.N-1,S.sel+1);p++)for(let c=0;c<4;c++) show.add(lineOf(p,c)); show.add(4); show.add(LINES.length-1); }
  let h="", last=-1;
  [...show].sort((x,y)=>x-y).forEach(n=>{
    if(last>=0 && n>last+1) h+='<div class="gl dots"><span class="ln"></span><span>...</span></div>';
    last=n;
    const isH=n<4, p=isH?-1:Math.floor((n-4)/4), c=isH?-1:(n-4)%4;
    let cls="gl"+(isH?" hdr":(p===S.sel?" pan":""));
    if(isH && S.hdr===n) cls+=" cur";
    if(!isH && p===S.sel && c===S.corner && S.hdr<0) cls+=" cur";
    let txt=LINES[n];
    if(!isH && p===S.sel && S.flip){ txt=LINES[lineOf(p,ORD[c])]; }
    h+='<div class="'+cls+'" data-n="'+n+'"><span class="ln">'+(n+1)+'</span><span>'+esc(txt)+'</span>'+(isH?'<span class="tag">'+T(tags[n])+'</span>':(p===S.sel?'<span class="tag">'+T("gd.corner_tag",{c:c+1})+'</span>':''))+'</div>';
  });
  $("gd_list").innerHTML=h;
  $("gd_list").querySelectorAll(".gl[data-n]").forEach(el=>el.addEventListener("click",()=>{
    const n=+el.dataset.n;
    if(n<4){ S.hdr=n; } else { S.hdr=-1; S.sel=Math.floor((n-4)/4); S.corner=(n-4)%4; }
    update();
  }));
}
function renderWhy(){
  let h="";
  if(S.hdr>=0){
    const n=S.hdr+1;
    h='<p>'+T("gd.h"+n+"_t",{isx:D.isx,isy:D.isy,n:D.N,m:4*D.N})+'</p>';
  } else {
    const i=S.sel, c=S.corner, k=S.flip?ORD[c]:c, x=PY.f6(D.X[i][k]), y=PY.f6(D.Y[i][k]), z=PY.f6(D.Z[i][k]);
    const g=D.g[i], fixed = faceFixed(i);
    h='<p>'+T("gd.v_t",{line:lineOf(i,c)+1,c:c+1,c0:k,i,x,y,z})+'</p>'+
       '<p>'+T("gd.v_corner",{c:c+1})+'</p>'+
       '<p>'+T("gd.v_face",{g:g+1,fn:S.quarter?"boxq_generator":"box_generator",name:fname(g)})+' '+T("gd.v_surf",{fixed})+'</p>';
  }
  $("gd_why").innerHTML='<div class="why">'+h+'</div>';
}
function faceFixed(i){
  const ax=[D.X[i],D.Y[i],D.Z[i]], nm=["x","y","z"];
  for(let k=0;k<3;k++){ if(ax[k].every(v=>Math.abs(v-ax[k][0])<1e-9)) return nm[k]+" = "+num(ax[k][0]); }
  return "";
}
function renderCode(){
  const hl=new Set();
  if(S.hdr>=0) hl.add(S.hdr+3); else { hl.add(7); hl.add(8); hl.add(9); }
  $("gd_code").innerHTML=CODE.map((t,n)=>'<div class="cl'+(hl.has(n+1)?' hard':'')+'"><span class="ln">'+(n+1)+'</span><span>'+esc(t)+'</span></div>').join("");
}
function renderMap(){
  const i=S.sel;
  let h='<p style="margin:0 0 6px">'+T("gd.map_t",{i})+'</p>';
  h+='<div class="small">'+T("gd.map_rows",{i})+'</div>';
  h+='<table class="t"><tr><th></th>'+[1,2,3,4].map(n=>'<th'+(S.hdr<0&&n-1===(S.flip?ORD[S.corner]:S.corner)?' style="background:var(--hard)"':'')+'>'+T("gd.corner",{n})+'</th>').join("")+'</tr>'+
    [["X",D.X],["Y",D.Y],["Z",D.Z]].map(([k,A])=>'<tr><th>'+k+'['+i+']</th>'+A[i].map((v,c)=>'<td'+(S.hdr<0&&c===(S.flip?ORD[S.corner]:S.corner)?' style="background:var(--hard)"':'')+'>'+num(v)+'</td>').join("")+'</tr>').join("")+'</table>';
  h+='<div class="small" style="margin-top:8px">'+T("gd.map_out",{a:lineOf(i,0)+1,b:lineOf(i,3)+1})+'</div>';
  h+='<pre class="mono">'+[0,1,2,3].map(c=>esc(LINES[lineOf(i,c)])).join("\n")+'</pre>';
  h+='<div class="small" style="margin-top:8px">'+T("gd.map_g")+'</div><ul style="margin:4px 0 0;padding-left:18px;font-size:13.5px">';
  groupStarts().forEach(([a,b],g)=>{ h+='<li>'+T("gd.map_gline",{name:fname(g),a,b,la:lineOf(a,0)+1,lb:lineOf(b,3)+1})+'</li>'; });
  h+='</ul>';
  $("gd_map").innerHTML=h;
}
function renderCmp(){
  const af=presetOf(S.preset).full, aq=presetOf(S.preset).quarter;
  const F=PY.boxFull(...af), Q=PY.boxQuarter(...aq);
  const th=trArr("gd.cmp_th"), rows=trArr("gd.cmp_rows");
  const ratio=(Q.N/F.N);
  const rtxt = Math.abs(ratio-0.25)<1e-9 ? "1/4" : (Q.N+"/"+F.N);
  const data=[
    [T("gd.cmp_call_full"), T("gd.cmp_call_q")],
    ["0, 0","1, 1"],
    [String(F.N),String(Q.N)],
    [String(4+4*F.N),String(4+4*Q.N)],
    [T("gd.cmp_on_full"),T("gd.cmp_on_q")],
    [T("gd.cmp_n"),T("gd.cmp_n")]
  ];
  let h='<table class="cmp"><tr>'+th.map(x=>'<th>'+x+'</th>').join("")+'</tr>'+rows.map((r,k)=>'<tr><th>'+r+'</th><td>'+(k===0?'<code>'+data[k][0]+'</code>':data[k][0])+'</td><td>'+(k===0?'<code>'+data[k][1]+'</code>':data[k][1])+'</td></tr>').join("")+'</table>';
  h+='<p class="small" style="margin-top:8px">'+T("gd.cmp_note",{r:rtxt})+'</p>';
  $("gd_cmp").innerHTML=h;
}
function update(){
  const i=S.sel, N=D.N;
  $("gd_I").value=i; $("gd_Io").textContent=T("gd.of",{a:i+1,b:N});
  $("gd_prev").disabled=i===0; $("gd_next").disabled=i===N-1;
  $("gd_pi").textContent=T("gd.pi",{i,n:N,g:D.g[i]+1,name:fname(D.g[i])});
  $("gd_groups").innerHTML=groupStarts().map(([a,b],g)=>'<span class="chip'+(D.g[i]===g?' on':'')+'" data-a="'+a+'"><i style="background:hsl('+(S.quarter?HUE_Q:HUE_F)[g]+',60%,52%)"></i>'+(g+1)+'. '+fname(g)+' ('+(b-a+1)+')</span>').join("");
  $("gd_groups").querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{ S.sel=+c.dataset.a; S.hdr=-1; update(); }));
  $("gd_flipmsg").innerHTML='<div class="msg '+(S.flip?'bad':'ok')+'">'+T(S.flip?"gd.flip_bad":"gd.flip_ok")+'</div>';
  plot.set({sel:i,flip:S.flip});
  renderList(); renderWhy(); renderCode(); renderMap(); renderCmp();
}
function init(){
  plot=PY.Plot($("gd_cv"),{az:-55,el:25,mode:"file",eq:true,axes:true,mirror:true});
  plot.setHome(-55,25);
  document.querySelectorAll("#gd_kind .chip").forEach(c=>c.addEventListener("click",()=>{ S.quarter=c.dataset.q==="1"; S.sel=0; S.corner=0; S.hdr=-1; build(); }));
  document.querySelectorAll("#gd_preset .chip").forEach(c=>c.addEventListener("click",()=>{ S.preset=c.dataset.p; S.sel=0; S.corner=0; S.hdr=-1; build(); }));
  $("gd_prev").addEventListener("click",()=>{ S.sel=Math.max(0,S.sel-1); S.hdr=-1; update(); });
  $("gd_next").addEventListener("click",()=>{ S.sel=Math.min(D.N-1,S.sel+1); S.hdr=-1; update(); });
  $("gd_I").addEventListener("input",()=>{ S.sel=+$("gd_I").value; S.hdr=-1; update(); });
  $("gd_flip").addEventListener("change",()=>{ S.flip=$("gd_flip").checked; update(); });
  document.addEventListener("keydown",e=>{ if(e.target.tagName==="INPUT"&&e.target.type==="range") return; if(e.key==="ArrowRight"){ S.sel=Math.min(D.N-1,S.sel+1); S.hdr=-1; update(); } if(e.key==="ArrowLeft"){ S.sel=Math.max(0,S.sel-1); S.hdr=-1; update(); } });
  plot.resize(); build();
}
SITE.onLang(()=>{ if(D) { build(); } });
SITE.start(init);
})();
