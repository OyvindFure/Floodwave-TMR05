"use strict";
/* Box generator steg for steg. Same geometri og rekkjefølgje som Python-koden i prosjektet.
   All tekst går gjennom SITE.t(), så sida fungerer på norsk og engelsk. */

SITE.add({
no:{
 "bx.title":"Box generator",
 "bx.h1":"Box_generator.py steg for steg",
 "bx.sub":"Trykk «Neste panel» og sjå kva linje i koden som køyrer, og kva panel som blir lagt til i 3D-modellen. Eit lite skrog er valt med vilje, så du ser alt som skjer. Vil du sjå ditt eige case (B = 4, 6, 8 eller 10 m, lengd og meshtettleik), opnar du <span class=\"setuphint\" id=\"gosetup\">Oppsett</span> nederst.",
 "bx.ess_h":"Essensen i fem punkt",
 "bx.e1":"<b>Eit panel er eit lite rektangel.</b> Det blir beskrive med fire hjørnepunkt, kvart med (x, y, z).",
 "bx.e2":"<b>Skroget er fem flater:</b> to langsider, to endar og botnen. Kvar flate er eit rutenett.",
 "bx.e3":"<b>Kvar for-løkke tek éi flate.</b> Ho går gjennom rutenettet rad for rad (<code>j</code>) og kolonne for kolonne (<code>p</code>), og kvar rute blir eitt panel.",
 "bx.e4":"<b>Hjørna blir rekna ut frå startpunkt og steg:</b> «start minus p·dx», «start minus j·dz» og så vidare. Ei koordinat er fast for heile flata (til dømes y = -B/2).",
 "bx.e5":"<b>Rekkjefølgja på hjørna avgjer kva som er ute.</b> Gjennom hjørna 1, 2, 3, 4 mot klokka sett utanfrå peikar panelet sin normal ut av skroget. Det er derfor rekkjefølgja er snudd mellom motståande flater. Resultatet er tre tabellar X, Y og Z (eit panel per rad, fire hjørne per kolonne) som <code>writetoGDF</code> skriv ut som tekst.",
 "bx.grid_h":"Rutenettet til denne flata (slik løkka går gjennom det)",
 "bx.flip_h":"Prøv sjølv: kvifor betyr hjørnerekkjefølgja noko?",
 "bx.flip_l":"Snu hjørnerekkjefølgja for dette panelet",
 "bx.step_h":"Steg gjennom koden",
 "bx.prev":"◀ Førre", "bx.next":"Neste panel ▶", "bx.play":"Spel av", "bx.stop":"Stopp", "bx.restart":"Frå start",
 "bx.panel_i":"Panel i",
 "bx.jump":"Hopp til flate (kvar flate har si eiga løkke):",
 "bx.legend":"<span style=\"background:var(--hard)\"></span>linjene som køyrer no &nbsp; <span style=\"background:var(--soft)\"></span>løkka vi er i &nbsp; <span style=\"background:var(--gdf)\"></span>der panelet seinare blir skrive til fila",
 "bx.calc_h":"Utrekninga for dette panelet",
 "bx.store_h":"Det som blir lagra og skrive til fila",
 "bx.store_row":"Rad <b id=\"rowi\">0</b> i tabellane X, Y og Z (fire kolonner, ein per hjørne):",
 "bx.store_gdf":"Det same panelet i <span style=\"font-family:ui-monospace,Consolas,monospace\">case.gdf</span>, fire linjer, ein per hjørne:",
 "bx.setup_sum":"Oppsett: vel person, lengd og meshtettleik (eller fri storleik)",
 "bx.setup_info":"Alle i gruppa har same oppsett: B/D = 4, så djupgangen blir D = B/4. Berre breidda B er ulik. Meshet følgjer same regel som prosjektkoden: Nx = round(k·L), Ny = round(k·B) og Nz = round(k·D).",
 "bx.setup_L":"Lengd på skroget, L = n · B:",
 "bx.setup_k":"Meshtettleik k (panel per meter):",
 "bx.setup_pre":"Snarvegar til dei to studiane:",
 "bx.pre_mesh":"Meshstudie: L = 1B", "bx.pre_len":"Lengdestudie: k = 6",
 "bx.f_L":"Lengd L", "bx.f_B":"Breidd B", "bx.f_D":"Djupgang D",
 "bx.ghost":"Vis panel som ikkje er lagde til enno som svake kantar",
 "bx.hints":"Dra i 3D-modellen for å rotere, rull for å zoome. Piltastane til venstre og høgre går eitt panel fram og tilbake. Store mesh blir viste forenkla i 3D (sjå meldinga nede til venstre i modellen), men tala i oppsettet er alltid dei verkelege.",
 "bx.g0":"Side y = -B/2","bx.g1":"Side y = +B/2","bx.g2":"Ende x = +L/2","bx.g3":"Ende x = -L/2","bx.g4":"Botn z = -D",
 "bx.free":"Fri storleik",
 "bx.badge":"Flate <b>{g}</b> av 5: {name} &nbsp; panel <b>{i}</b> av {N}",
 "bx.of":"{a} av {b}",
 "bx.loop":"løkke",
 "bx.simpl":" (forenkla visning)",
 "bx.info_p":"<b>{n}</b>: B = {B} m. Med B/D = 4 blir D = B/4 = {D} m. Lengd L = {nB}·B = {L} m.<br>",
 "bx.info_k":"Meshtettleik k = {k}: Nx = round(k·L) = <b>{Nx}</b>, Ny = round(k·B) = <b>{Ny}</b>, Nz = round(k·D) = <b>{Nz}</b>.<br>",
 "bx.info_free":"Fri storleik: B = {B} m, D = {D} m, L = {L} m, Nx = <b>{Nx}</b>, Ny = <b>{Ny}</b>, Nz = <b>{Nz}</b>.<br>",
 "bx.info_np":"Npanel = Nx·Ny + 2·Nx·Nz + 2·Ny·Nz = {a} + {b} + {c} = <b>{N}</b> panel.<br>",
 "bx.info_ps":"Panelstorleik: dx = {dx} m, dy = {dy} m, dz = {dz} m.",
 "bx.info_warn":"<br><span class=\"warn\">Merk: k·D = {kD} er ikkje eit heiltal, så Nz blir runda og dz er ikkje 1/k. Det gjeld særleg dei grovaste meshane.</span>",
 "bx.red":"Forenkla visning: dette caset har <b>{N}</b> panel. Her vises same skrog med Nx = {Nx}, Ny = {Ny}, Nz = {Nz} ({n} panel), så stegvisinga blir oversiktleg. Utrekningane til høgre gjeld denne forenkla utgåva.",
 "bx.loopTxt":"Løkke {g}: <code>for j in range({jr})</code> og <code>for p in range({pr})</code>. No er j = {j} og p = {p}, og dette er panel nummer i = {i}.",
 "bx.line":"Linje {n}: {note}",
 "bx.corner":"hjørne {n}",
 "bx.flip_bad":"Hjørna står no i omvend rekkjefølgje (1, 4, 3, 2). Normalen (raud pil) peikar <b>inn</b> i skroget. WAMIT ville tolka dette panelet som vendt feil veg og gitt gale resultat.",
 "bx.flip_ok":"Hjørna går 1, 2, 3, 4 mot klokka sett utanfrå, og normalen (grøn pil) peikar <b>ut</b> av skroget. Slik vil WAMIT ha det. Kryss av for å sjå kva som skjer om rekkjefølgja blir omvend.",
 "bx.gp":"p: kolonne 0 til {m} →",
 "bx.gj":"j: rad 0 til {m} ↓",
 "bx.dirP0":"x minkar frå +L/2","bx.dirP1":"y minkar frå +B/2",
 "bx.dirJ0":"z minkar frå 0 (vasslinja) mot -D","bx.dirJ1":"x minkar frå +L/2",
 "bx.gnote":"Fast koordinat for heile flata: <b>{fixed}</b>. Mot høgre (p aukar): {dirP}. Nedover (j aukar): {dirJ}. Dei gule rutene er panelet som blir laga no, og dei fargelagde rutene er ferdige. Nummera 1 til 4 viser hjørnerekkjefølgja i dette panelet.",
 "bx.gnote2":" Legg merke til at hjørna går motsett veg samanlikna med flata på motsett side.",
 "bx.n0y":"Y er fast for heile flata (langsida mot -y).",
 "bx.n0x":"X: start +L/2, så eitt steg dx per kolonne p.",
 "bx.n0z":"Z: start 0 (vasslinja), så eitt steg dz nedover per rad j.",
 "bx.n1y":"Y er fast for heile flata (langsida mot +y).",
 "bx.n1x":"Same rute som på motsett side, men hjørna står i omvend rekkjefølgje (p+1 først).",
 "bx.n1z":"Z: som før, nedover per rad j.",
 "bx.n2x":"X er fast for heile flata (enden mot +x).",
 "bx.n2y":"Y: start +B/2, så eitt steg dy per kolonne p.",
 "bx.n2z":"Z: nedover per rad j.",
 "bx.n3x":"X er fast for heile flata (enden mot -x).",
 "bx.n3y":"Same rute som på motsett ende, men hjørna står i omvend rekkjefølgje.",
 "bx.n3z":"Z: nedover per rad j.",
 "bx.n4z":"Z er fast for heile flata (botnen).",
 "bx.n4y":"Y: start +B/2, eitt steg dy per kolonne p.",
 "bx.n4x":"X: start +L/2, eitt steg dx per rad j."
},
en:{
 "bx.title":"Box generator",
 "bx.h1":"Box_generator.py step by step",
 "bx.sub":"Press \"Next panel\" to see which line of the code runs and which panel is added to the 3D model. A small hull is chosen on purpose so you can see everything that happens. To see your own case (B = 4, 6, 8 or 10 m, length and mesh density), open <span class=\"setuphint\" id=\"gosetup\">Setup</span> at the bottom.",
 "bx.ess_h":"The essence in five points",
 "bx.e1":"<b>A panel is a small rectangle.</b> It is described by four corner points, each with (x, y, z).",
 "bx.e2":"<b>The hull is five faces:</b> two sides, two ends and the bottom. Each face is a grid of cells.",
 "bx.e3":"<b>Each for loop handles one face.</b> It runs through the grid row by row (<code>j</code>) and column by column (<code>p</code>), and each cell becomes one panel.",
 "bx.e4":"<b>The corners are computed from a start point and a step:</b> \"start minus p·dx\", \"start minus j·dz\" and so on. One coordinate is fixed for the whole face (for example y = -B/2).",
 "bx.e5":"<b>The order of the corners decides which side is outside.</b> When the corners 1, 2, 3, 4 run counterclockwise seen from outside, the panel normal points out of the hull. That is why the order is reversed between opposite faces. The result is three tables X, Y and Z (one panel per row, four corners per column) which <code>writetoGDF</code> writes out as text.",
 "bx.grid_h":"The grid of this face (the way the loop runs through it)",
 "bx.flip_h":"Try it yourself: why does the corner order matter?",
 "bx.flip_l":"Reverse the corner order for this panel",
 "bx.step_h":"Step through the code",
 "bx.prev":"◀ Previous", "bx.next":"Next panel ▶", "bx.play":"Play", "bx.stop":"Stop", "bx.restart":"Restart",
 "bx.panel_i":"Panel i",
 "bx.jump":"Jump to face (each face has its own loop):",
 "bx.legend":"<span style=\"background:var(--hard)\"></span>the lines running now &nbsp; <span style=\"background:var(--soft)\"></span>the loop we are in &nbsp; <span style=\"background:var(--gdf)\"></span>where the panel is later written to the file",
 "bx.calc_h":"The calculation for this panel",
 "bx.store_h":"What is stored and written to the file",
 "bx.store_row":"Row <b id=\"rowi\">0</b> in the tables X, Y and Z (four columns, one per corner):",
 "bx.store_gdf":"The same panel in <span style=\"font-family:ui-monospace,Consolas,monospace\">case.gdf</span>, four lines, one per corner:",
 "bx.setup_sum":"Setup: choose person, length and mesh density (or free size)",
 "bx.setup_info":"Everyone in the group has the same setup: B/D = 4, so the draft is D = B/4. Only the beam B differs. The mesh follows the same rule as the project code: Nx = round(k·L), Ny = round(k·B) and Nz = round(k·D).",
 "bx.setup_L":"Hull length, L = n · B:",
 "bx.setup_k":"Mesh density k (panels per metre):",
 "bx.setup_pre":"Shortcuts to the two studies:",
 "bx.pre_mesh":"Mesh study: L = 1B", "bx.pre_len":"Length study: k = 6",
 "bx.f_L":"Length L", "bx.f_B":"Beam B", "bx.f_D":"Draft D",
 "bx.ghost":"Show panels not yet added as faint outlines",
 "bx.hints":"Drag the 3D model to rotate, scroll to zoom. The left and right arrow keys step one panel back and forth. Large meshes are shown simplified in 3D (see the note at the bottom left of the model), but the numbers in the setup are always the real ones.",
 "bx.g0":"Side y = -B/2","bx.g1":"Side y = +B/2","bx.g2":"End x = +L/2","bx.g3":"End x = -L/2","bx.g4":"Bottom z = -D",
 "bx.free":"Free size",
 "bx.badge":"Face <b>{g}</b> of 5: {name} &nbsp; panel <b>{i}</b> of {N}",
 "bx.of":"{a} of {b}",
 "bx.loop":"loop",
 "bx.simpl":" (simplified view)",
 "bx.info_p":"<b>{n}</b>: B = {B} m. With B/D = 4 the draft is D = B/4 = {D} m. Length L = {nB}·B = {L} m.<br>",
 "bx.info_k":"Mesh density k = {k}: Nx = round(k·L) = <b>{Nx}</b>, Ny = round(k·B) = <b>{Ny}</b>, Nz = round(k·D) = <b>{Nz}</b>.<br>",
 "bx.info_free":"Free size: B = {B} m, D = {D} m, L = {L} m, Nx = <b>{Nx}</b>, Ny = <b>{Ny}</b>, Nz = <b>{Nz}</b>.<br>",
 "bx.info_np":"Npanel = Nx·Ny + 2·Nx·Nz + 2·Ny·Nz = {a} + {b} + {c} = <b>{N}</b> panels.<br>",
 "bx.info_ps":"Panel size: dx = {dx} m, dy = {dy} m, dz = {dz} m.",
 "bx.info_warn":"<br><span class=\"warn\">Note: k·D = {kD} is not an integer, so Nz is rounded and dz is not 1/k. This applies especially to the coarsest meshes.</span>",
 "bx.red":"Simplified view: this case has <b>{N}</b> panels. Here the same hull is shown with Nx = {Nx}, Ny = {Ny}, Nz = {Nz} ({n} panels), so the step-through stays readable. The calculations on the right apply to this simplified version.",
 "bx.loopTxt":"Loop {g}: <code>for j in range({jr})</code> and <code>for p in range({pr})</code>. Now j = {j} and p = {p}, and this is panel number i = {i}.",
 "bx.line":"Line {n}: {note}",
 "bx.corner":"corner {n}",
 "bx.flip_bad":"The corners are now in reverse order (1, 4, 3, 2). The normal (red arrow) points <b>into</b> the hull. WAMIT would read this panel as facing the wrong way and give wrong results.",
 "bx.flip_ok":"The corners run 1, 2, 3, 4 counterclockwise seen from outside, and the normal (green arrow) points <b>out of</b> the hull. This is what WAMIT wants. Tick the box to see what happens if the order is reversed.",
 "bx.gp":"p: column 0 to {m} →",
 "bx.gj":"j: row 0 to {m} ↓",
 "bx.dirP0":"x decreases from +L/2","bx.dirP1":"y decreases from +B/2",
 "bx.dirJ0":"z decreases from 0 (the waterline) towards -D","bx.dirJ1":"x decreases from +L/2",
 "bx.gnote":"Fixed coordinate for the whole face: <b>{fixed}</b>. To the right (p increases): {dirP}. Downward (j increases): {dirJ}. The yellow cell is the panel being made now, and the coloured cells are done. The numbers 1 to 4 show the corner order in this panel.",
 "bx.gnote2":" Note that the corners run the opposite way compared with the face on the opposite side.",
 "bx.n0y":"Y is fixed for the whole face (the side facing -y).",
 "bx.n0x":"X: start at +L/2, then one step dx per column p.",
 "bx.n0z":"Z: start at 0 (the waterline), then one step dz downward per row j.",
 "bx.n1y":"Y is fixed for the whole face (the side facing +y).",
 "bx.n1x":"Same cell as on the opposite side, but the corners are in reverse order (p+1 first).",
 "bx.n1z":"Z: as before, downward per row j.",
 "bx.n2x":"X is fixed for the whole face (the end at +x).",
 "bx.n2y":"Y: start at +B/2, then one step dy per column p.",
 "bx.n2z":"Z: downward per row j.",
 "bx.n3x":"X is fixed for the whole face (the end at -x).",
 "bx.n3y":"Same cell as on the opposite end, but the corners are in reverse order.",
 "bx.n3z":"Z: downward per row j.",
 "bx.n4z":"Z is fixed for the whole face (the bottom).",
 "bx.n4y":"Y: start at +B/2, one step dy per column p.",
 "bx.n4x":"X: start at +L/2, one step dx per row j."
}});

const T = (k,v)=>SITE.t(k,v);
const $ = id => document.getElementById(id);
const CODE = [
"import numpy as np",
"",
"def box_generator(length, width, draft, Nx, Ny, Nz):",
"    dx = length / Nx",
"    dy = width / Ny",
"    dz = draft / Nz",
"    Npanel = Nx * Ny + Nx * Nz * 2 + Ny * Nz * 2",
"    X = np.zeros((Npanel, 4)); Y = np.zeros((Npanel, 4)); Z = np.zeros((Npanel, 4))",
"    i = 0",
"    for j in range(Nz):",
"        for p in range(Nx):",
"            Y[i, :] = -width / 2",
"            X[i, :] = [length/2 - p*dx, length/2 - (p+1)*dx, length/2 - (p+1)*dx, length/2 - p*dx]",
"            Z[i, :] = [-j*dz, -j*dz, -(j+1)*dz, -(j+1)*dz]",
"            i += 1",
"    for j in range(Nz):",
"        for p in range(Nx):",
"            Y[i, :] = width / 2",
"            X[i, :] = [length/2 - (p+1)*dx, length/2 - p*dx, length/2 - p*dx, length/2 - (p+1)*dx]",
"            Z[i, :] = [-j*dz, -j*dz, -(j+1)*dz, -(j+1)*dz]",
"            i += 1",
"    for j in range(Nz):",
"        for p in range(Ny):",
"            X[i, :] = length / 2",
"            Y[i, :] = [width/2 - p*dy, width/2 - (p+1)*dy, width/2 - (p+1)*dy, width/2 - p*dy]",
"            Z[i, :] = [-j*dz, -j*dz, -(j+1)*dz, -(j+1)*dz]",
"            i += 1",
"    for j in range(Nz):",
"        for p in range(Ny):",
"            X[i, :] = -length / 2",
"            Y[i, :] = [width/2 - (p+1)*dy, width/2 - p*dy, width/2 - p*dy, width/2 - (p+1)*dy]",
"            Z[i, :] = [-j*dz, -j*dz, -(j+1)*dz, -(j+1)*dz]",
"            i += 1",
"    for j in range(Nx):",
"        for p in range(Ny):",
"            Z[i, :] = -draft",
"            Y[i, :] = [width/2 - p*dy, width/2 - (p+1)*dy, width/2 - (p+1)*dy, width/2 - p*dy]",
"            X[i, :] = [length/2 - j*dx, length/2 - j*dx, length/2 - (j+1)*dx, length/2 - (j+1)*dx]",
"            i += 1",
"    return X, Y, Z, Npanel, 0, 0",
"",
"def writetoGDF(X, Y, Z, Npanel, path, isx=0, isy=0):",
"    with open(path, \"w\") as f:",
"        f.write(f\"{path}  --\\n\")",
"        f.write(\"1.000       9.806650    ULEN, GRAV\\n\")",
"        f.write(f\"{isx}           {isy}            ISX, ISY\\n\")",
"        f.write(f\"{Npanel}    NPAN\\n\")",
"        for i in range(Npanel):",
"            for j in range(4):",
"                f.write(f\"{X[i, j]:.6f} {Y[i, j]:.6f} {Z[i, j]:.6f} \\n\")"
];
// 1-based line numbers: loop block [start, end], statement lines, i += 1 line
const GROUPS = [
  {hue:205, s:10, e:15, st:[12,13,14], inc:15},
  {hue:160, s:16, e:21, st:[18,19,20], inc:21},
  {hue:32,  s:22, e:27, st:[24,25,26], inc:27},
  {hue:345, s:28, e:33, st:[30,31,32], inc:33},
  {hue:268, s:34, e:39, st:[36,37,38], inc:39}
];
const gname = g => T("bx.g"+g);
const POFF = [[0,1,1,0],[1,0,0,1],[0,1,1,0],[1,0,0,1],[0,1,1,0]];
const JOFF = [0,0,1,1];
const GDF_LINES = [48,49,50];

const S = { L:4,B:2,D:1,Nx:4,Ny:2,Nz:2, panels:[], i:0, yaw:-0.7, elev:0.55, zoom:1, playing:false, flip:false,
            person:-1, nB:1, k:4, reduced:false, real:null };
const PERSONS=[{n:"Anders",B:4},{n:"Øyvind",B:6},{n:"Zhijun",B:8},{n:"Øyonn",B:10}];
const CAP_REAL=6000, CAP_SHOW=1200;
function pyRound(x){ const f=Math.floor(x), d=x-f; if(Math.abs(d-0.5)<1e-9) return (f%2===0)?f:f+1; return Math.round(x); }
function npan(a,b,c){return a*b+2*a*c+2*b*c;}

// ---------- geometry, same ordering as the Python code ----------
function boxGenerator(length, width, draft, Nx, Ny, Nz){
  const dx=length/Nx, dy=width/Ny, dz=draft/Nz, P=[];
  const add=(g,X,Y,Z)=>P.push({g, v:[0,1,2,3].map(c=>[X[c],Y[c],Z[c]])});
  for(let j=0;j<Nz;j++)for(let p=0;p<Nx;p++) add(0,[length/2-p*dx,length/2-(p+1)*dx,length/2-(p+1)*dx,length/2-p*dx],[-width/2,-width/2,-width/2,-width/2],[-j*dz,-j*dz,-(j+1)*dz,-(j+1)*dz]);
  for(let j=0;j<Nz;j++)for(let p=0;p<Nx;p++) add(1,[length/2-(p+1)*dx,length/2-p*dx,length/2-p*dx,length/2-(p+1)*dx],[width/2,width/2,width/2,width/2],[-j*dz,-j*dz,-(j+1)*dz,-(j+1)*dz]);
  for(let j=0;j<Nz;j++)for(let p=0;p<Ny;p++) add(2,[length/2,length/2,length/2,length/2],[width/2-p*dy,width/2-(p+1)*dy,width/2-(p+1)*dy,width/2-p*dy],[-j*dz,-j*dz,-(j+1)*dz,-(j+1)*dz]);
  for(let j=0;j<Nz;j++)for(let p=0;p<Ny;p++) add(3,[-length/2,-length/2,-length/2,-length/2],[width/2-(p+1)*dy,width/2-p*dy,width/2-p*dy,width/2-(p+1)*dy],[-j*dz,-j*dz,-(j+1)*dz,-(j+1)*dz]);
  for(let j=0;j<Nx;j++)for(let p=0;p<Ny;p++) add(4,[length/2-j*dx,length/2-j*dx,length/2-(j+1)*dx,length/2-(j+1)*dx],[width/2-p*dy,width/2-(p+1)*dy,width/2-(p+1)*dy,width/2-p*dy],[-draft,-draft,-draft,-draft]);
  return P;
}
function cross(a,b){return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];}
function sub(a,b){return [a[0]-b[0],a[1]-b[1],a[2]-b[2]];}
const fmt = n => { const r=+(+n).toFixed(3); return String(Object.is(r,-0)?0:r); };
const f6 = x => (Math.abs(x)<5e-7?0:x).toFixed(6);
const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");

function sizes(){
  const a=[S.Nx*S.Nz,S.Nx*S.Nz,S.Ny*S.Nz,S.Ny*S.Nz,S.Nx*S.Ny];
  const M=[S.Nx,S.Nx,S.Ny,S.Ny,S.Ny], K=[S.Nz,S.Nz,S.Nz,S.Nz,S.Nx];
  const st=[0]; for(let g=0;g<5;g++) st.push(st[g]+a[g]);
  return {a,M,K,st};
}
function locate(i){
  const z=sizes(); let g=0; while(g<4 && i>=z.st[g+1]) g++;
  const local=i-z.st[g]; return {g, j:Math.floor(local/z.M[g]), p:local%z.M[g], z};
}
// statement descriptors in code order, with the numbers inserted
function describe(g,j,p){
  const L=S.L,B=S.B,D=S.D,dx=L/S.Nx,dy=B/S.Ny,dz=D/S.Nz;
  const lst=(base,idx,step)=>{
    const parts=idx.map(k=> base===null ? "-"+k+"*"+fmt(step) : fmt(base)+" - "+k+"*"+fmt(step));
    const vals=idx.map(k=> base===null ? -k*step : base-k*step);
    return {txt:"["+parts.join(", ")+"]", vals};
  };
  const cst=(v)=>({txt:fmt(v), vals:[v,v,v,v]});
  const P=[p,p+1,p+1,p], Q=[p+1,p,p,p+1], J=[j,j,j+1,j+1];
  switch(g){
    case 0: return [{line:12,v:"Y",...cst(-B/2),note:"bx.n0y"},
                    {line:13,v:"X",...lst(L/2,P,dx),note:"bx.n0x"},
                    {line:14,v:"Z",...lst(null,J,dz),note:"bx.n0z"}];
    case 1: return [{line:18,v:"Y",...cst(B/2),note:"bx.n1y"},
                    {line:19,v:"X",...lst(L/2,Q,dx),note:"bx.n1x"},
                    {line:20,v:"Z",...lst(null,J,dz),note:"bx.n1z"}];
    case 2: return [{line:24,v:"X",...cst(L/2),note:"bx.n2x"},
                    {line:25,v:"Y",...lst(B/2,P,dy),note:"bx.n2y"},
                    {line:26,v:"Z",...lst(null,J,dz),note:"bx.n2z"}];
    case 3: return [{line:30,v:"X",...cst(-L/2),note:"bx.n3x"},
                    {line:31,v:"Y",...lst(B/2,Q,dy),note:"bx.n3y"},
                    {line:32,v:"Z",...lst(null,J,dz),note:"bx.n3z"}];
    default:return [{line:36,v:"Z",...cst(-D),note:"bx.n4z"},
                    {line:37,v:"Y",...lst(B/2,P,dy),note:"bx.n4y"},
                    {line:38,v:"X",...lst(L/2,J,dx),note:"bx.n4x"}];
  }
}

// ---------- state updates ----------
function rebuild(){
  let L,B,D,Nx,Ny,Nz;
  if(S.person<0){ L=+$("L").value; B=+$("B").value; D=+$("D").value; Nx=+$("NX").value; Ny=+$("NY").value; Nz=+$("NZ").value;
    ["Lo","Bo","Do"].forEach((id,k)=>$(id).textContent=[L,B,D][k]+" m"); $("NXo").textContent=Nx; $("NYo").textContent=Ny; $("NZo").textContent=Nz; }
  else { B=PERSONS[S.person].B; D=B/4; L=S.nB*B; Nx=Math.max(1,pyRound(S.k*L)); Ny=Math.max(1,pyRound(S.k*B)); Nz=Math.max(1,pyRound(S.k*D)); }
  S.real={L,B,D,Nx,Ny,Nz,N:npan(Nx,Ny,Nz)};
  let dx=Nx,dy=Ny,dz=Nz; S.reduced=false;
  if(S.real.N>CAP_REAL){
    let f=1; const r=(n,f)=>Math.max(1,Math.round(n/f));
    while(npan(r(Nx,f),r(Ny,f),r(Nz,f))>CAP_SHOW) f++;
    dx=r(Nx,f); dy=r(Ny,f); dz=r(Nz,f); S.reduced=true; S.f=f;
  }
  S.L=L; S.B=B; S.D=D; S.Nx=dx; S.Ny=dy; S.Nz=dz;
  S.panels=boxGenerator(S.L,S.B,S.D,S.Nx,S.Ny,S.Nz);
  S.panels.forEach((p,i)=>{
    p.c=[0,1,2].map(a=>(p.v[0][a]+p.v[1][a]+p.v[2][a]+p.v[3][a])/4);
    const n=cross(sub(p.v[2],p.v[0]),sub(p.v[3],p.v[1])); const l=Math.hypot(...n)||1; p.n=n.map(x=>x/l);
  });
  S.R=Math.hypot(S.L,S.B,S.D)/2;
  const N=S.panels.length; $("I").max=N-1; if(S.i>N-1) S.i=N-1;
  $("I").value=S.i;
  updateInfo(); buildChips(); buildCode(); update();
}
function caseLine(){
  const r=S.real; return "B = "+fmt(r.B)+" m, D = "+fmt(r.D)+" m, L = "+fmt(r.L)+" m"+(S.person>=0?", k = "+S.k:"")+": "+r.N+" panel"+(SITE.lang==="en"?"s":"")+(S.reduced?T("bx.simpl"):"");
}
function updateInfo(){
  const r=S.real, dx=r.L/r.Nx, dy=r.B/r.Ny, dz=r.D/r.Nz; let h="";
  if(S.person>=0){
    h+=T("bx.info_p",{n:PERSONS[S.person].n,B:fmt(r.B),D:fmt(r.D),nB:S.nB,L:fmt(r.L)});
    h+=T("bx.info_k",{k:S.k,Nx:r.Nx,Ny:r.Ny,Nz:r.Nz});
  } else {
    h+=T("bx.info_free",{B:fmt(r.B),D:fmt(r.D),L:fmt(r.L),Nx:r.Nx,Ny:r.Ny,Nz:r.Nz});
  }
  h+=T("bx.info_np",{a:r.Nx*r.Ny,b:2*r.Nx*r.Nz,c:2*r.Ny*r.Nz,N:r.N});
  h+=T("bx.info_ps",{dx:fmt(dx),dy:fmt(dy),dz:fmt(dz)});
  if(S.person>=0 && Math.abs(dz*S.k-1)>1e-6) h+=T("bx.info_warn",{kD:fmt(S.k*r.D)});
  $("caseinfo").innerHTML=h;
  const rb=$("redbadge");
  if(S.reduced){ rb.style.display="block"; rb.innerHTML=T("bx.red",{N:r.N,Nx:S.Nx,Ny:S.Ny,Nz:S.Nz,n:S.panels.length}); }
  else rb.style.display="none";
}
function buildChips(){
  const z=sizes(); $("chips").innerHTML=GROUPS.map((g,k)=>
    '<span class="chip" data-g="'+k+'"><i style="background:hsl('+g.hue+',60%,52%)"></i>'+(k+1)+'. '+gname(k)+' ('+z.a[k]+')</span>').join("");
  document.querySelectorAll("#chips .chip").forEach(c=>c.addEventListener("click",()=>{ stop(); S.i=sizes().st[+c.dataset.g]; update(); }));
}
function buildCode(){
  $("code").innerHTML=CODE.map((t,n)=>'<div class="cl" data-n="'+(n+1)+'"><span class="ln">'+(n+1)+'</span><span>'+esc(t)+'</span></div>').join("");
}
function update(){
  if(!Number.isFinite(S.i)||S.i<0) S.i=0; if(S.i>=S.panels.length) S.i=S.panels.length-1;
  const N=S.panels.length, i=S.i, {g,j,p,z}=locate(i), pan=S.panels[i];
  $("I").value=i; $("Io").textContent=T("bx.of",{a:i+1,b:N}); if($("rowi")) $("rowi").textContent=i;
  $("prev").disabled=i===0; $("next").disabled=i===N-1;
  document.querySelectorAll("#chips .chip").forEach(c=>c.classList.toggle("on",+c.dataset.g===g));
  $("badge").innerHTML=T("bx.badge",{g:g+1,name:gname(g),i:i+1,N})+"<div class=\"small\" style=\"margin-top:2px\">"+caseLine()+"</div>";
  // variables
  $("vars").innerHTML="<span>"+T("bx.loop")+" <b>"+(g+1)+"</b></span><span>j = <b>"+j+"</b></span><span>p = <b>"+p+"</b></span><span>i = <b>"+i+"</b></span>"+
     "<span>dx = <b>"+fmt(S.L/S.Nx)+"</b></span><span>dy = <b>"+fmt(S.B/S.Ny)+"</b></span><span>dz = <b>"+fmt(S.D/S.Nz)+"</b></span>";
  // code highlight
  const G=GROUPS[g];
  document.querySelectorAll(".cl").forEach(el=>{
    const n=+el.dataset.n; el.className="cl";
    if(n>=G.s&&n<=G.e) el.classList.add("soft");
    if(G.st.includes(n)||n===G.inc) el.classList.add("hard");
    if(GDF_LINES.includes(n)) el.classList.add("gdf");
  });
  const hardEl=document.querySelector('.cl[data-n="'+G.st[0]+'"]');
  if(hardEl){ const box=$("code"); const top=hardEl.offsetTop-box.offsetTop-80; if(hardEl.offsetTop<box.scrollTop+10||hardEl.offsetTop>box.scrollTop+box.clientHeight-90) box.scrollTop=Math.max(0,top); }
  // calculation
  const D=describe(g,j,p);
  const loopTxt='<div class="stmt"><div class="note">'+T("bx.loopTxt",{g:g+1,jr:(g<4?"Nz":"Nx"),pr:(g<2?"Nx":"Ny"),j,p,i})+'</div></div>';
  $("calc").innerHTML=loopTxt+D.map(d=>{
    const line=esc(CODE[d.line-1].trim());
    return '<div class="stmt"><div class="note">'+T("bx.line",{n:d.line,note:T(d.note)})+'</div>'+
      '<pre class="mono">'+line+'\n'+d.v+'[i, :] = '+d.txt+'\n= ['+d.vals.map(fmt).join(", ")+']</pre></div>';
  }).join("");
  // X, Y, Z table for row i, and file lines
  const rows={X:[0,0,0,0],Y:[0,0,0,0],Z:[0,0,0,0]};
  D.forEach(d=>rows[d.v]=d.vals);
  $("xyz").innerHTML='<table class="t"><tr><th></th>'+[1,2,3,4].map(n=>"<th>"+T("bx.corner",{n})+"</th>").join("")+'</tr>'+
    ["X","Y","Z"].map(k=>"<tr><th>"+k+"[i]</th>"+rows[k].map(v=>"<td>"+fmt(v)+"</td>").join("")+"</tr>").join("")+"</table>";
  $("gdf").textContent=[0,1,2,3].map(c=>f6(rows.X[c])+" "+f6(rows.Y[c])+" "+f6(rows.Z[c])+" ").join("\n");
  drawGrid(g,j,p,z);
  $("flipmsg").innerHTML = S.flip
    ? '<div class="msg bad">'+T("bx.flip_bad")+'</div>'
    : '<div class="msg ok">'+T("bx.flip_ok")+'</div>';
  draw();
}

// ---------- 2D grid ----------
function drawGrid(g,j,p,z){
  const M=z.M[g], K=z.K[g], cell=Math.min(44,400/M,300/K), big=cell<5;
  const W=M*cell+60, H=K*cell+54, ox=30, oy=24;
  const hue=GROUPS[g].hue; let s='<svg viewBox="0 0 '+W+' '+H+'" width="'+W+'" style="max-width:100%">';
  for(let r=0;r<K;r++)for(let c=0;c<M;c++){
    const idx=z.st[g]+r*M+c, done=idx<S.i, now=idx===S.i;
    s+='<rect x="'+(ox+c*cell)+'" y="'+(oy+r*cell)+'" width="'+cell+'" height="'+cell+'" fill="'+(now?"rgba(255,204,0,.9)":done?"hsla("+hue+",60%,52%,.55)":(big?"rgba(127,127,127,.14)":"none"))+'"'+(big?'':' stroke="currentColor" stroke-opacity=".35"')+'/>';
  }
  if(big) s+='<rect x="'+ox+'" y="'+oy+'" width="'+(M*cell)+'" height="'+(K*cell)+'" fill="none" stroke="currentColor" stroke-opacity=".5"/>';
  // corner numbers of the current cell
  const po=POFF[g];
  for(let c=0;c<4;c++){
    const cx=ox+(p+po[c])*cell, cy=oy+(j+JOFF[c])*cell;
    const rr=Math.max(3,Math.min(8,cell*0.7));
    s+='<circle cx="'+cx+'" cy="'+cy+'" r="'+rr+'" fill="#111" stroke="#ffcc00" stroke-width="1.5"/>'+(rr>=6?'<text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" style="fill:#fff;font-weight:700;font-size:11px">'+(c+1)+'</text>':'');
  }
  s+='<text x="'+(ox+M*cell/2)+'" y="14" text-anchor="middle">'+T("bx.gp",{m:M-1})+'</text>';
  s+='<text x="10" y="'+(oy+K*cell/2)+'" text-anchor="middle" transform="rotate(-90 10 '+(oy+K*cell/2)+')">'+T("bx.gj",{m:K-1})+'</text>';
  s+='</svg>';
  $("gridsvg").innerHTML=s;
  const dirP=T(g<2?"bx.dirP0":"bx.dirP1"), dirJ=T(g<4?"bx.dirJ0":"bx.dirJ1");
  const fixed=["y = -B/2","y = +B/2","x = +L/2","x = -L/2","z = -D"][g];
  $("gridnote").innerHTML=T("bx.gnote",{fixed,dirP,dirJ})+(g%2===1&&g<4?T("bx.gnote2"):"");
}

// ---------- 3D rendering ----------
const cv=$("cv"), ctx=cv.getContext("2d"); let W=0,H=0,DPR=1;
function resize(){ DPR=window.devicePixelRatio||1; const r=cv.getBoundingClientRect(); W=r.width; H=r.height; cv.width=Math.round(W*DPR); cv.height=Math.round(H*DPR); draw(); }
function css(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim();}
function basis(){return {cy:Math.cos(S.yaw),sy:Math.sin(S.yaw),ce:Math.cos(S.elev),se:Math.sin(S.elev)};}
function toView(p,b){const x1=b.cy*p[0]-b.sy*p[1], y1=b.sy*p[0]+b.cy*p[1], z1=p[2]; return [x1,y1*b.se+z1*b.ce,y1*b.ce-z1*b.se];}
function proj(p,b,cam){const v=toView([p[0],p[1],p[2]+S.D/2],b); const s=cam.f/(cam.dist+v[2]); return {x:W/2+v[0]*s,y:H/2-v[1]*s,d:v[2]};}

function draw(){
  if(!W||!S.panels.length) return;
  ctx.setTransform(DPR,0,0,DPR,0,0); ctx.clearRect(0,0,W,H);
  const b=basis(), R=S.R, cam={dist:R*4.2,f:0}; cam.f=Math.min(W,H)*0.5/R*cam.dist*0.62*S.zoom;
  const ink=css("--ink"), N=S.panels.length, cur=S.i;
  // ghost panels
  if($("ghost").checked && N<=3000){
    ctx.strokeStyle=ink; ctx.globalAlpha=.16; ctx.lineWidth=.7;
    for(let k=cur+1;k<N;k++){ const q=S.panels[k].v.map(v=>proj(v,b,cam)); ctx.beginPath(); q.forEach((a,m)=>m?ctx.lineTo(a.x,a.y):ctx.moveTo(a.x,a.y)); ctx.closePath(); ctx.stroke(); }
    ctx.globalAlpha=1;
  }
  // built panels, painter's algorithm
  const list=[];
  for(let k=0;k<=cur;k++){ const pr=S.panels[k].v.map(v=>proj(v,b,cam)); list.push({k,pr,dep:(pr[0].d+pr[1].d+pr[2].d+pr[3].d)/4}); }
  list.sort((a,c)=>c.dep-a.dep);
  const light=[-0.35,0.55,0.75], ll=Math.hypot(...light), n0=toView([0,0,S.D/2],b);
  for(const it of list){
    const p=S.panels[it.k], nv=toView([p.n[0],p.n[1],p.n[2]+S.D/2],b);
    const lam=Math.max(0,((nv[0]-n0[0])*light[0]+(nv[1]-n0[1])*light[1]+(-(nv[2]-n0[2]))*light[2])/ll), sh=.55+.45*lam;
    ctx.beginPath(); it.pr.forEach((a,m)=>m?ctx.lineTo(a.x,a.y):ctx.moveTo(a.x,a.y)); ctx.closePath();
    ctx.fillStyle="hsl("+GROUPS[p.g].hue+",58%,"+(30+34*sh).toFixed(0)+"%)"; ctx.fill();
    ctx.strokeStyle=ink; ctx.globalAlpha=.5; ctx.lineWidth=.8; ctx.stroke(); ctx.globalAlpha=1;
  }
  // current panel
  const P=S.panels[cur]; let order=[0,1,2,3]; if(S.flip) order=[0,3,2,1];
  const pr=order.map(c=>proj(P.v[c],b,cam));
  ctx.beginPath(); pr.forEach((a,m)=>m?ctx.lineTo(a.x,a.y):ctx.moveTo(a.x,a.y)); ctx.closePath();
  ctx.fillStyle="rgba(255,204,0,.55)"; ctx.fill(); ctx.strokeStyle=css("--sel"); ctx.lineWidth=2.6; ctx.stroke();
  // normal from the order used
  const vv=order.map(c=>P.v[c]); const nn=cross(sub(vv[2],vv[0]),sub(vv[3],vv[1])); const nl=Math.hypot(...nn)||1;
  const len=Math.max(Math.min(S.L/S.Nx,S.B/S.Ny,S.D/S.Nz)*1.1,R*0.25);
  const e=[P.c[0]+nn[0]/nl*len,P.c[1]+nn[1]/nl*len,P.c[2]+nn[2]/nl*len];
  const a=proj(P.c,b,cam), t=proj(e,b,cam), col=S.flip?"#e5484d":"#2fb457";
  ctx.strokeStyle=col; ctx.fillStyle=col; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(t.x,t.y); ctx.stroke();
  const ang=Math.atan2(t.y-a.y,t.x-a.x); ctx.beginPath(); ctx.moveTo(t.x,t.y); ctx.lineTo(t.x-10*Math.cos(ang-.45),t.y-10*Math.sin(ang-.45)); ctx.lineTo(t.x-10*Math.cos(ang+.45),t.y-10*Math.sin(ang+.45)); ctx.closePath(); ctx.fill();
  // corner numbers and path
  for(let c=0;c<4;c++){ const q=pr[c], r=pr[(c+1)%4];
    const mx=(q.x+r.x)/2, my=(q.y+r.y)/2, an=Math.atan2(r.y-q.y,r.x-q.x);
    ctx.strokeStyle=css("--sel"); ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(mx-7*Math.cos(an-.5),my-7*Math.sin(an-.5)); ctx.lineTo(mx,my); ctx.lineTo(mx-7*Math.cos(an+.5),my-7*Math.sin(an+.5)); ctx.stroke(); }
  pr.forEach((q,c)=>{ ctx.beginPath(); ctx.arc(q.x,q.y,10,0,6.283); ctx.fillStyle="#111"; ctx.fill(); ctx.lineWidth=1.6; ctx.strokeStyle=css("--sel"); ctx.stroke();
    ctx.fillStyle="#fff"; ctx.font="bold 12px system-ui,sans-serif"; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText(String(c+1),q.x,q.y+.5); });
  // axes
  const ox=44, oy=H-44, al=28, o=toView([0,0,0],b);
  [["x",[1,0,0],"#e5534b"],["y",[0,1,0],"#3fb950"],["z",[0,0,1],"#4c8dff"]].forEach(([nm,v,cl])=>{
    const tt=toView(v,b), dx=(tt[0]-o[0])*al, dy=-(tt[1]-o[1])*al;
    ctx.strokeStyle=cl; ctx.lineWidth=2.2; ctx.beginPath(); ctx.moveTo(ox,oy); ctx.lineTo(ox+dx,oy+dy); ctx.stroke();
    ctx.fillStyle=cl; ctx.font="bold 12px system-ui,sans-serif"; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText(nm,ox+dx*1.3,oy+dy*1.3); });
}

// ---------- interaction ----------
let drag=null; const pts=new Map(); let pinch=0;
cv.addEventListener("pointerdown",e=>{cv.setPointerCapture(e.pointerId);pts.set(e.pointerId,[e.clientX,e.clientY]);drag=[e.clientX,e.clientY];cv.classList.add("drag");if(pts.size===2){const a=[...pts.values()];pinch=Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1]);}});
cv.addEventListener("pointermove",e=>{ if(!pts.has(e.pointerId))return; pts.set(e.pointerId,[e.clientX,e.clientY]);
  if(pts.size===2){const a=[...pts.values()],d=Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1]); if(pinch)S.zoom=Math.min(5,Math.max(.3,S.zoom*d/pinch)); pinch=d; draw(); return;}
  if(!drag)return; S.yaw-=(e.clientX-drag[0])*.008; S.elev=Math.max(-1.5707,Math.min(1.5707,S.elev+(e.clientY-drag[1])*.008)); drag=[e.clientX,e.clientY]; draw(); });
const up=e=>{pts.delete(e.pointerId);drag=pts.size?drag:null;pinch=0;cv.classList.remove("drag");};
cv.addEventListener("pointerup",up); cv.addEventListener("pointercancel",up);
cv.addEventListener("wheel",e=>{e.preventDefault();S.zoom=Math.min(5,Math.max(.3,S.zoom*Math.exp(-e.deltaY*.0012)));draw();},{passive:false});
cv.addEventListener("dblclick",()=>{S.zoom=1;S.yaw=-0.7;S.elev=0.55;draw();});

let timer=null;
function playLabel(){ $("play").textContent=timer?T("bx.stop"):T("bx.play"); $("play").classList.toggle("on",!!timer); }
function stop(){ if(timer){clearInterval(timer);timer=null;} playLabel(); }
function step(d){ const N=S.panels.length; S.i=Math.max(0,Math.min(N-1,S.i+d)); update(); }
$("next").addEventListener("click",()=>{stop();step(1);});
$("prev").addEventListener("click",()=>{stop();step(-1);});
$("restart").addEventListener("click",()=>{stop();S.i=0;update();});
$("play").addEventListener("click",()=>{ if(timer){stop();return;} const N=S.panels.length; if(S.i>=N-1)S.i=0;
  const big=N>60, st=big?Math.ceil(N/250):1;
  timer=setInterval(()=>{ if(S.i>=N-1){stop();return;} step(st); },big?90:550); playLabel(); update(); });
$("back10").addEventListener("click",()=>{stop();step(-10);});
$("fwd10").addEventListener("click",()=>{stop();step(10);});
$("fwd100").addEventListener("click",()=>{stop();step(100);});
$("I").addEventListener("input",()=>{stop();S.i=+$("I").value;update();});
$("flip").addEventListener("change",()=>{S.flip=$("flip").checked;update();});
$("ghost").addEventListener("change",draw);
["L","B","D","NX","NY","NZ"].forEach(id=>$(id).addEventListener("input",()=>{stop();rebuild();}));
function buildSetup(){
  $("persons").innerHTML=PERSONS.map((p,k)=>'<span class="chip'+(S.person===k?' on':'')+'" data-p="'+k+'">'+p.n+': B = '+p.B+' m</span>').join("")+
     '<span class="chip'+(S.person<0?' on':'')+'" data-p="-1">'+T("bx.free")+'</span>';
  $("nBs").innerHTML=[1,2,3,4,5,6].map(n=>'<span class="chip'+(S.nB===n?' on':'')+'" data-n="'+n+'">L = '+n+'B</span>').join("");
  $("ks").innerHTML=[1,2,4,6,8,10].map(k=>'<span class="chip'+(S.k===k?' on':'')+'" data-k="'+k+'">k = '+k+'</span>').join("");
  $("projectCtl").style.display=S.person>=0?"block":"none"; $("freeCtl").style.display=S.person<0?"block":"none";
  document.querySelectorAll("#persons .chip").forEach(c=>c.addEventListener("click",()=>{ stop(); S.person=+c.dataset.p; S.i=0; buildSetup(); rebuild(); }));
  document.querySelectorAll("#nBs .chip").forEach(c=>c.addEventListener("click",()=>{ stop(); S.nB=+c.dataset.n; S.i=0; buildSetup(); rebuild(); }));
  document.querySelectorAll("#ks .chip").forEach(c=>c.addEventListener("click",()=>{ stop(); S.k=+c.dataset.k; S.i=0; buildSetup(); rebuild(); }));
}
// snarvegar: element-ane kan bli bytte ut ved språkbyte, så eg bruker delegering
document.addEventListener("click",e=>{
  const t=e.target.closest("#presetMesh,#presetLen,#gosetup"); if(!t) return;
  if(t.id==="presetMesh"){ stop(); S.nB=1; S.i=0; buildSetup(); rebuild(); }
  else if(t.id==="presetLen"){ stop(); S.k=6; S.i=0; buildSetup(); rebuild(); }
  else { const d=$("setup"); d.open=true; d.scrollIntoView({behavior:"smooth",block:"start"}); }
});
document.addEventListener("keydown",e=>{ if(e.target.tagName==="INPUT"&&e.target.type==="range")return; if(e.key==="ArrowRight"){stop();step(1);} if(e.key==="ArrowLeft"){stop();step(-1);} });
window.addEventListener("resize",resize);
window.addEventListener("themechange",draw);
matchMedia("(prefers-color-scheme: dark)").addEventListener("change",draw);

SITE.onLang(()=>{ playLabel(); buildSetup(); rebuild(); });
SITE.start(()=>{ playLabel(); buildSetup(); rebuild(); resize(); });
