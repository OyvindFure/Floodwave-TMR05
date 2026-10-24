"use strict";
/* Hovudstudien og bølgjeanimasjonen på Results-sida.
   Tala kjem frå main_study/plots/<rørsle>/main_study_<rørsle>_table.csv (same tal som er plotta).
   Radene er [omega_hat, lambda, lambda/dx, a, b, zeta (5 sondar), fase i grader (5 sondar)].
   Sonde 1 til 3 står fast (y = 9, 15, 33 m). Sonde 4 og 5 følgjer bølgjelengda: y = B/2 + lambda og B/2 + 2 lambda (lambda frå kolonne 2).
   Konvensjon (WAMIT): rørsla er eta(t) = cos(wt), og bølgja i ein sonde er zeta_n(t) = |zeta_n| cos(wt + fase_n).
   Ei utgåande bølgje er cos(wt - k y + c), så fasen er fase_n = c - k y_n, med k = w^2/g på djupt vatn. */

const WS_DATA = {"heave":[[0.1,1884.9556,2330.01,5.710051,0.088859,0.020674,0.017614,0.012773,0.001477,0.001044,-12.638,-14.923,-20.859,-44.136,-44.758],[0.2,471.2389,582.5,4.978073,0.513812,0.093086,0.082906,0.065895,0.02147,0.01522,-38.673,-44.993,-61.268,-44.089,-44.059],[0.3,209.4395,258.89,3.165664,0.876989,0.206386,0.196623,0.177924,0.099528,0.071529,-70.947,-82.426,-112.185,-46.6,-43.906],[0.4,117.8097,145.63,2.398147,0.900608,0.279415,0.294818,0.321943,0.267577,0.202304,-103.538,-123.421,-173.475,-58.435,-50.125],[0.5,75.3982,93.2,1.967911,0.962424,0.261609,0.290066,0.399584,0.471947,0.417159,-114.31,-152.806,119.106,-78.824,-62.514],[0.6,52.3599,64.72,1.717436,0.940369,0.432275,0.40229,0.366762,0.468109,0.608395,-113.459,-156.643,65.209,-97.435,-82.65],[0.7,38.4685,47.55,1.560571,0.877522,0.549557,0.608593,0.573994,0.498197,0.526469,-143.956,161.68,6.928,-71.964,-96.913],[0.8,29.4524,36.41,1.480587,0.784929,0.617656,0.58693,0.698538,0.693838,0.616674,-152.902,131.685,-94.526,-88.098,-71.433],[0.9,23.2711,28.77,1.457393,0.67314,0.706056,0.759246,0.635812,0.705436,0.734664,-179.948,89.686,175.975,-77.011,-90.228],[1.0,18.8496,23.3,1.474302,0.555026,0.811596,0.739071,0.81922,0.698462,0.790545,162.17,51.442,62.179,-85.669,-78.543],[1.1,15.5781,19.26,1.516468,0.440674,0.796155,0.73386,0.719863,0.785764,0.713775,140.331,-3.53,-55.454,-87.875,-83.383],[1.2,13.09,16.18,1.572856,0.33801,0.766207,0.789104,0.804697,0.804141,0.747753,112.765,-57.651,166.76,-86.804,-88.702],[1.3,11.1536,13.79,1.634293,0.251219,0.727366,0.785748,0.757355,0.780872,0.758727,82.932,-113.286,29.334,-87.132,-89.765],[1.4,9.6171,11.89,1.69461,0.181548,0.660497,0.743345,0.670252,0.744225,0.724325,50.4,-173.604,-131.064,-89.182,-90.832],[1.5,8.3776,10.36,1.750205,0.127985,0.575075,0.674462,0.671832,0.688914,0.653558,13.913,121.445,59.763,-93.079,-92.276],[1.6,7.3631,9.1,1.799341,0.088315,0.502466,0.590075,0.644034,0.595935,0.568317,-25.657,49.819,-116.185,-96.857,-91.157],[1.7,6.5223,8.06,1.841582,0.059854,0.482229,0.529905,0.55836,0.5145,0.530462,-66.115,-30.471,57.915,-95.768,-88.588],[1.8,5.8178,7.19,1.877258,0.03999,0.506259,0.50327,0.47995,0.492597,0.490998,-108.587,-114.835,-142.602,-98.554,-93.653],[1.9,5.2215,6.45,1.90715,0.026426,0.483525,0.437867,0.399269,0.408747,0.3876,-150.415,163.208,6.675,-105.495,-94.315],[2.0,4.7124,5.83,1.932125,0.017257,0.433572,0.33166,0.35702,0.369809,0.363789,177.062,81.832,144.902,-105.261,-93.168]],"sway":[[0.1,1884.9556,2330.01,0.670428,3e-06,0.001933,0.001142,0.000513,1.3e-05,9e-06,179.981,179.949,179.755,-139.093,-137.327],[0.2,471.2389,582.5,0.695324,0.000399,0.009017,0.00591,0.003456,0.000814,0.000576,178.991,177.548,171.105,-142.117,-139.748],[0.3,209.4395,258.89,0.743635,0.005324,0.026558,0.020218,0.015825,0.009063,0.006558,172.29,164.019,137.405,-150.636,-145.829],[0.4,117.8097,145.63,0.810049,0.02579,0.062032,0.05268,0.050809,0.046599,0.03603,156.612,136.312,80.409,-168.316,-158.253],[0.5,75.3982,93.2,0.878714,0.082182,0.118954,0.103716,0.110097,0.135555,0.124809,138.531,104.848,9.984,163.971,-179.777],[0.6,52.3599,64.72,0.905913,0.193929,0.228062,0.206067,0.181414,0.209395,0.275089,117.109,74.323,-57.572,138.808,149.547],[0.7,38.4685,47.55,0.845382,0.353442,0.358342,0.366745,0.372308,0.336481,0.327131,84.039,24.73,-135.363,147.36,125.358],[0.8,29.4524,36.41,0.699129,0.512321,0.514312,0.48011,0.550803,0.546603,0.518564,59.224,-17.022,114.315,120.84,138.317],[0.9,23.2711,28.77,0.522434,0.622668,0.643058,0.710231,0.613226,0.702628,0.684256,23.244,-71.725,18.789,123.599,108.103],[1.0,18.8496,23.3,0.366639,0.6755,0.858837,0.82971,0.915064,0.740316,0.915288,-4.851,-114.952,-107.233,109.09,115.041],[1.1,15.5781,19.26,0.248476,0.684755,0.949261,0.882022,0.883086,0.957307,0.856028,-30.904,-175.486,137.135,98.419,109.0],[1.2,13.09,16.18,0.166216,0.668725,0.996975,1.12107,1.100125,1.155727,0.963387,-63.486,125.111,-12.444,96.368,95.731],[1.3,11.1536,13.79,0.111299,0.638754,1.087446,1.303624,1.298284,1.292272,1.130695,-98.382,69.51,-146.528,94.885,90.305],[1.4,9.6171,11.89,0.075623,0.601959,1.182304,1.388782,1.131069,1.389929,1.228091,-132.65,9.275,55.564,91.898,88.235],[1.5,8.3776,10.36,0.053525,0.562289,1.244528,1.457934,1.302833,1.414268,1.241016,-166.183,-57.15,-122.906,87.964,88.829],[1.6,7.3631,9.1,0.040825,0.522791,1.314572,1.566037,1.59015,1.32521,1.28953,161.864,-129.438,61.01,88.718,95.817],[1.7,6.5223,8.06,0.03416,0.483404,1.524456,1.689472,1.710693,1.453419,1.603566,126.913,151.686,-122.794,97.676,97.87],[1.8,5.8178,7.19,0.032274,0.445925,1.75405,1.740151,1.735558,1.753351,1.703783,80.992,66.042,39.519,91.352,87.198],[1.9,5.2215,6.45,0.033624,0.409916,1.628792,1.619919,1.755941,1.528312,1.50916,32.577,-21.476,-171.889,89.093,93.487],[2.0,4.7124,5.83,0.037128,0.376017,1.653273,1.576317,1.803016,1.854264,1.883493,-2.782,-103.416,-36.09,93.289,90.279]]};
const WS_Y = [9, 15, 33];                                     // dei faste sondane; sonde 4 og 5 følgjer lambda, sjå wsYs()
const WS_COL = ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4"];
const WS_NAME = ["1.5B", "2.5B", "5.5B", "B/2+λ", "B/2+2λ"];
const WS_B = 6, WS_D = 1.5, WS_G = 9.80665, WS_VIEW = 70;      // halvbreidde av visninga i meter
const WS_PERIOD = 6;                                           // sekund på skjermen per svingeperiode

SITE.add({
no:{
 "ms.h":"Main study",
 "ms.p":"L/B = 24 og mesh 5, ω̂ = 0.1 til 2.0 i steg på 0.1. Same dimensjonslause storleikar som i sensitivitetsstudiane. Bølgjehøgd og fase er målt i fem sondar (z = 0, x = 0): tre faste (y = 1.5B, 2.5B og 5.5B) og to som følgjer bølgjelengda (y = B/2 + λ og B/2 + 2λ, rekna på nytt for kvar frekvens).",
 "ms.coef":"Added mass og demping",
 "ms.waves":"Bølgjehøgd og fase",
 "ms.warn":"Meshet er valt ved ω̂ = 0.8 (λ/Δx = 36) og er det same for alle frekvensar, så λ/Δx blir mindre ved høge frekvensar (5.8 ved ω̂ = 2). Dei høgaste frekvensane er derfor mindre pålitelege. Fasen er innpakka til ±180°. For dei faste sondene går fasen gjennom fleire heile omdreiingar mellom to punkt, medan sondene som følgjer bølgjelengda har ein jamn fase.",
 "wv.h":"Animasjon: bølgjene frå boksen",
 "wv.p":"Boksen svingar og sender bølgjer ut til begge sider. Ei utgåande bølgje har fasen −k·y, med k = ω²/g. Tre sondar står fast (1.5B, 2.5B og 5.5B). Dei to siste følgjer bølgjelengda (B/2 + λ og B/2 + 2λ), så dei flyttar seg når du endrar frekvensen, og ved låg frekvens ligg dei utanfor biletet. Glidaren går i steg på 0.02. I målepunkta (0.1, 0.2, ...) er prikkane WAMIT-data, og mellom dei brukar eg teorien. Den blå linja er bølgjeteorien (djupt vatn).",
 "wv.omega":"Frekvens ω̂",
 "wv.play":"Spel", "wv.pause":"Stopp",
 "wv.field":"Vassflata sett frå sida. Vertikal skala er sterkt forstørra (rørsle 1 m).",
 "wv.lag":"Forsinking bakom boksen: antal heile periodar (k·y/2π) kvar sonde ligg etter. For dei faste sondene (blå, oransje og grøn) aukar forsinkinga med frekvensen, mest for den som står lengst unna. Dei to sondene som følgjer bølgjelengda ligg heile tida om lag 1 og 2 periodar bak (pluss ein liten del frå boksen sin kant som aukar med frekvensen).",
 "wv.lagax":"periodar bak boksen",
 "wv.ts":"Tidsserie: den svarte linja er svingninga til boksen (tid går mot høgre, nå er den loddrette streken). Kvar sonde ser same signal, men så langt bak i tid som forsinkinga k·y/2π. Auk frekvensen med glidaren: dei faste sondene vandrar bakover, mest den fjerne, medan dei to som følgjer bølgjelengda held seg nær 1 og 2 periodar bak. Forenkla: berre utbreiinga, utan fasen frå boksen sjølv.",
 "wv.info":"λ = {lam} m, k = {k} rad/m, λ/Δx = {ldx}",
 "wv.interp":"Mellom målepunkta: teori (amplitude interpolert).",
 "wv.meas":"Målepunkt frå WAMIT.",
 "wv.lowmesh":"Meshet er grovt her (λ/Δx under 10), så dataa er mindre pålitelege.",
 "wv.th":["Sonde","y [m]","|ζ|/η","fase [°]","forsinking k·y [periodar]","teori fase [°] (festa til 1.5B)"],
 "wv.note":"Forsinking er k·y/2π: kor mange heile bølgjelengder sonden står frå kjelda. Den forsinkinga er forklaringa på at fasen, innpakka til ±180°, ser ut som ein sagtann for dei faste sondene når ω̂ aukar. For sondene som følgjer bølgjelengda er k·y = k·B/2 + 2πn, så dei n heile periodane forsvinn i fasen, og fasen blir jamn.",
 "wv.y":"y [m]", "wv.t":"tid [periodar], nå = 0"
},
en:{
 "ms.h":"Main study",
 "ms.p":"L/B = 24 and mesh 5, ω̂ = 0.1 to 2.0 in steps of 0.1. The same non-dimensional quantities as in the sensitivity studies. Wave elevation and phase are measured in five probes (z = 0, x = 0): three fixed (y = 1.5B, 2.5B and 5.5B) and two that follow the wavelength (y = B/2 + λ and B/2 + 2λ, placed again for every frequency).",
 "ms.coef":"Added mass and damping",
 "ms.waves":"Wave elevation and phase",
 "ms.warn":"The mesh was chosen at ω̂ = 0.8 (λ/Δx = 36) and is the same for all frequencies, so λ/Δx gets smaller at high frequencies (5.8 at ω̂ = 2). The highest frequencies are therefore less reliable. The phase is wrapped to ±180°. For the fixed probes the phase passes through several full turns between two points, while the probes that follow the wavelength have a smooth phase.",
 "wv.h":"Animation: the waves from the box",
 "wv.p":"The box oscillates and sends waves out to both sides. An outgoing wave has the phase −k·y, with k = ω²/g. Three probes are fixed (1.5B, 2.5B and 5.5B). The last two follow the wavelength (B/2 + λ and B/2 + 2λ), so they move when you change the frequency, and at low frequency they are outside the picture. The slider moves in steps of 0.02. At the data points (0.1, 0.2, ...) the dots are WAMIT data, and in between I use theory. The blue line is wave theory (deep water).",
 "wv.omega":"Frequency ω̂",
 "wv.play":"Play", "wv.pause":"Pause",
 "wv.field":"The free surface seen from the side. The vertical scale is strongly exaggerated (motion 1 m).",
 "wv.lag":"Delay behind the box: the number of whole periods (k·y/2π) each probe lags. For the fixed probes (blue, orange and green) the delay grows with frequency, most for the one furthest away. The two probes that follow the wavelength stay at about 1 and 2 periods behind (plus a small part from the edge of the box that grows with frequency).",
 "wv.lagax":"periods behind the box",
 "wv.ts":"Time series: the black line is the oscillation of the box (time runs to the right, now is the vertical line). Every probe sees the same signal, but as far back in time as the delay k·y/2π. Increase the frequency with the slider: the fixed probes move backwards, most for the far one, while the two that follow the wavelength stay near 1 and 2 periods behind. Simplified: propagation only, without the phase from the box itself.",
 "wv.info":"λ = {lam} m, k = {k} rad/m, λ/Δx = {ldx}",
 "wv.interp":"Between data points: theory (amplitude interpolated).",
 "wv.meas":"WAMIT data point.",
 "wv.lowmesh":"The mesh is coarse here (λ/Δx below 10), so the data are less reliable.",
 "wv.th":["Probe","y [m]","|ζ|/η","phase [°]","delay k·y [periods]","theory phase [°] (fitted to 1.5B)"],
 "wv.note":"The delay is k·y/2π: how many whole wavelengths the probe is from the source. That delay is why the phase, wrapped to ±180°, looks like a saw tooth for the fixed probes as ω̂ increases. For the probes that follow the wavelength, k·y = k·B/2 + 2πn, so the n whole periods disappear from the phase and it stays smooth.",
 "wv.y":"y [m]", "wv.t":"time [periods], now = 0"
}
});

const WSIM = { dof: "heave", oh: 0.8, playing: true, theta: 0, last: 0, cv: null, ct: null };

// ---------- hjelp ----------
function wsYs(r){ return [WS_Y[0], WS_Y[1], WS_Y[2], WS_B / 2 + r[1], WS_B / 2 + 2 * r[1]]; }   // sondeposisjonar (m) ved denne frekvensen
// Rad for valfri omega_hat: nøyaktig målt rad i målepunkta (steg 0.1), elles teori mellom punkta
// (amplitude lineært, fasekonstanten c = fase_1 + k*y_1 interpolert på einingssirkelen, fase_n = c - k*y_n).
function wsRowAt(oh){
  const rows = WS_DATA[WSIM.dof], f = (oh - 0.1) / 0.1, i0 = Math.max(0, Math.min(rows.length - 2, Math.floor(f + 1e-9))), t = f - i0;
  if (Math.abs(t) < 1e-6) return rows[i0].concat([false]);
  if (Math.abs(t - 1) < 1e-6) return rows[i0 + 1].concat([false]);
  const A = rows[i0], B2 = rows[i0 + 1], om = oh / Math.sqrt(WS_B / (2 * WS_G)), k = om * om / WS_G;
  const cc = r => { const kk = wsK(r); return (r[10] * Math.PI / 180) + kk * WS_Y[0]; };
  const ca = cc(A), cb = cc(B2), cx = (1 - t) * Math.cos(ca) + t * Math.cos(cb), cy = (1 - t) * Math.sin(ca) + t * Math.sin(cb), c = Math.atan2(cy, cx);
  const lam = 2 * Math.PI * WS_G / (om * om), dx = A[1] / A[2];
  const amp = A.slice(5, 10).map((v, n) => (1 - t) * v + t * B2[5 + n]);
  const ph = [WS_Y[0], WS_Y[1], WS_Y[2], WS_B / 2 + lam, WS_B / 2 + 2 * lam].map(y => wsWrap((c - k * y) * 180 / Math.PI));
  return [oh, lam, lam / dx, 0, 0].concat(amp, ph, [true]);
}
function wsRow(){ return wsRowAt(WSIM.oh); }
function wsAmp(r){ return r.slice(5, 10); }
function wsPh(r){ return r.slice(10, 15); }
function wsWrap(d){ d = ((d + 180) % 360 + 360) % 360 - 180; return d; }
function wsK(r){ const om = r[0] / Math.sqrt(WS_B / (2 * WS_G)); return om * om / WS_G; }
function wsAmpAt(r, y){      // |zeta| mellom sondane, rett linje i y
  const pts = wsYs(r).map((v, i) => [v, wsAmp(r)[i]]).sort((a, b) => a[0] - b[0]);
  if (y <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) if (y <= pts[i][0]) { const [y0, a0] = pts[i - 1], [y1, a1] = pts[i]; return a0 + (a1 - a0) * (y - y0) / ((y1 - y0) || 1); }
  return pts[pts.length - 1][1];
}

function wsSetup(c, h){
  const dpr = window.devicePixelRatio || 1, w = c.getBoundingClientRect().width;
  c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); c.style.height = h + "px";
  const x = c.getContext("2d"); x.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { x, W: w, H: h };
}

function wsRange(r){ const a = Math.max(...wsAmp(r)); return Math.max(1.6, 1.3 * a); }

// ---------- teikning: vassflata ----------
function wsDrawField(){
  const { x, W, H } = wsSetup(WSIM.cv, 300), r = wsRow(), k = wsK(r), ph = wsPh(r), am = wsAmp(r), ys = wsYs(r);
  const sw = WSIM.dof === "sway", th = WSIM.theta;
  const zr = wsRange(r), zlo = -2.2, padT = 14, padB = 26, ppm = (H - padT - padB) / (zr - zlo);
  const X = y => W / 2 + y / WS_VIEW * (W / 2 - 14), Z = z => padT + (zr - z) * ppm;
  x.fillStyle = "#fff"; x.fillRect(0, 0, W, H);
  // rutenett og akse
  x.strokeStyle = "#e1e0d9"; x.lineWidth = 1; x.fillStyle = "#52514e"; x.font = "11px system-ui,sans-serif"; x.textAlign = "center";
  for (let y = -60; y <= 60; y += 20){ x.beginPath(); x.moveTo(X(y), padT); x.lineTo(X(y), H - padB); x.stroke(); x.fillText(String(y), X(y), H - 10); }
  x.textAlign = "right"; x.fillText(SITE.t("wv.y"), W - 4, H - 10);
  x.textAlign = "left"; x.fillText("z [m]", 4, 12);
  for (let z = Math.ceil(zlo); z <= Math.floor(zr); z++){ x.beginPath(); x.moveTo(X(-WS_VIEW), Z(z)); x.lineTo(X(WS_VIEW), Z(z)); x.strokeStyle = z === 0 ? "#c3c2b7" : "#eeeee8"; x.stroke(); if (z !== 0){ x.fillStyle = "#8a8980"; x.fillText(String(z), 4, Z(z) - 2); } }
  // bølgje (teori), fase festa til sonde 1: c = fase_1 + k*y_1
  const c0 = ph[0] * Math.PI / 180 + k * ys[0];
  const zeta = y => { const ay = Math.abs(y), s = (sw && y < 0) ? -1 : 1; return s * wsAmpAt(r, ay) * Math.cos(th - k * ay + c0); };
  x.beginPath(); let first = true;
  const pts = [];
  for (let y = -WS_VIEW; y <= WS_VIEW + 1e-9; y += 0.2){ if (Math.abs(y) < WS_B / 2) continue; pts.push([y, zeta(y)]); }
  const seg = (arr) => { arr.forEach((p, i) => i ? x.lineTo(X(p[0]), Z(p[1])) : x.moveTo(X(p[0]), Z(p[1]))); };
  const L = pts.filter(p => p[0] < 0), R = pts.filter(p => p[0] > 0);
  [L, R].forEach(arr => {
    x.beginPath(); seg(arr); x.lineTo(X(arr[arr.length - 1][0]), Z(zlo)); x.lineTo(X(arr[0][0]), Z(zlo)); x.closePath();
    x.fillStyle = "rgba(42,120,214,.13)"; x.fill();
    x.beginPath(); seg(arr); x.strokeStyle = "#2a78d6"; x.lineWidth = 2; x.stroke();
  });
  // boks (rørsle eta = cos(theta) i m)
  const eta = Math.cos(th), bx = sw ? eta : 0, bz = sw ? 0 : eta;
  x.fillStyle = "#6b7280"; x.strokeStyle = "#111"; x.lineWidth = 1.5;
  const x0 = X(bx - WS_B / 2), x1 = X(bx + WS_B / 2), zt = Z(bz), zb = Z(bz - WS_D);
  x.fillRect(x0, zt, x1 - x0, zb - zt); x.strokeRect(x0, zt, x1 - x0, zb - zt);
  // sondar med målt verdi
  for (let n = 0; n < 5; n++){
    if (ys[n] > WS_VIEW) continue;                         // utanfor biletet (λ-sondane ved låg frekvens)
    const val = am[n] * Math.cos(th + ph[n] * Math.PI / 180);
    x.setLineDash([2, 3]); x.strokeStyle = WS_COL[n]; x.lineWidth = 1; x.beginPath(); x.moveTo(X(ys[n]), padT); x.lineTo(X(ys[n]), H - padB); x.stroke(); x.setLineDash([]);
    x.beginPath(); x.arc(X(ys[n]), Z(val), 6, 0, 6.283); x.fillStyle = WS_COL[n]; x.fill(); x.lineWidth = 2; x.strokeStyle = "#fff"; x.stroke();
  }
  x.font = "bold 11px system-ui,sans-serif"; x.textAlign = "center";
  [0, 1, 2, 3, 4].forEach(n => { if (ys[n] > WS_VIEW) return; x.fillStyle = WS_COL[n]; x.fillText(WS_NAME[n], X(ys[n]), padT + 10 + (n === 3 ? 12 : 0)); });
}

// ---------- teikning: tidsserie ----------
// Den svarte kurva er svingninga til boksen, cos(theta + 2 pi t), med tid t i periodar og "no" ved t = 0.
// Kvar sonde ser same signal, men forsinka med k*y/2pi periodar (ikkje innpakka). Prikken til sonden
// ligg derfor på same kurve, så langt bak i tid (t = -forsinking). Låg frekvens: alle prikkane ved t = 0.
function wsDrawTs(){
  const { x, W, H } = wsSetup(WSIM.ct, 210), r = wsRow(), k = wsK(r), th = WSIM.theta, ys = wsYs(r);
  const MAXP = 14, padL = 40, padR = 12, padT = 12, padB = 26, T0 = -MAXP - 0.3, T1 = 0.3;
  const X = t => padL + (t - T0) / (T1 - T0) * (W - padL - padR), Z = z => padT + (1.15 - z) / 2.3 * (H - padT - padB);
  x.fillStyle = "#fff"; x.fillRect(0, 0, W, H);
  x.strokeStyle = "#e1e0d9"; x.lineWidth = 1; x.fillStyle = "#52514e"; x.font = "11px system-ui,sans-serif"; x.textAlign = "center";
  for (let t = -MAXP; t <= 0; t++){ x.beginPath(); x.moveTo(X(t), padT); x.lineTo(X(t), H - padB); x.stroke(); x.fillText(String(t), X(t), H - 10); }
  x.textAlign = "right"; x.fillText(SITE.t("wv.t"), W - 4, 10);
  x.beginPath(); x.moveTo(padL, Z(0)); x.lineTo(W - padR, Z(0)); x.strokeStyle = "#c3c2b7"; x.stroke();
  x.textAlign = "left"; x.fillText("\u03b6/\u03b7", 4, 14);
  // svingninga til boksen
  x.beginPath(); const N = 1600;
  for (let i = 0; i <= N; i++){ const t = T0 + (T1 - T0) * i / N, v = Math.cos(th + 2 * Math.PI * t); i ? x.lineTo(X(t), Z(v)) : x.moveTo(X(t), Z(v)); }
  x.setLineDash([5, 4]); x.strokeStyle = "#111"; x.lineWidth = 1.4; x.stroke(); x.setLineDash([]);
  // "no"
  x.strokeStyle = "#555"; x.lineWidth = 1.2; x.beginPath(); x.moveTo(X(0), padT); x.lineTo(X(0), H - padB); x.stroke();
  // toppen av boksen sin kurve nærast "no" (tb), og kvar sonde har same kurve forskyvd bakover med forsinkinga
  const tb = -(((th / (2 * Math.PI)) % 1) + 1) % 1;
  for (let n = 0; n < 5; n++){
    const lag = Math.min(k * ys[n] / (2 * Math.PI), MAXP), tp = tb - lag, te = Math.min(tp + 2.5, T1);
    x.beginPath(); const M = 200;
    for (let i = 0; i <= M; i++){ const t = tp + (te - tp) * i / M, v = Math.cos(2 * Math.PI * (t - tp)); i ? x.lineTo(X(t), Z(v)) : x.moveTo(X(t), Z(v)); }
    x.strokeStyle = WS_COL[n]; x.lineWidth = 1.6; x.globalAlpha = 0.85; x.stroke(); x.globalAlpha = 1;
    x.setLineDash([2, 3]); x.lineWidth = 1.2; x.beginPath(); x.moveTo(X(tp), Z(1)); x.lineTo(X(tp), H - padB); x.stroke(); x.setLineDash([]);
    x.beginPath(); x.arc(X(tp), Z(1), 6, 0, 6.283); x.fillStyle = WS_COL[n]; x.fill(); x.strokeStyle = "#fff"; x.lineWidth = 1.8; x.stroke();
  }
  x.beginPath(); x.arc(X(tb), Z(1), 6.5, 0, 6.283); x.fillStyle = "#111"; x.fill(); x.strokeStyle = "#fff"; x.lineWidth = 1.8; x.stroke();
}

// ---------- teikning: forsinking bakom boksen ----------
// Kvar sonde får ei eiga rad. Prikken står på forsinkinga k*y/2pi i heile periodar (ikkje innpakka),
// så han startar ved 0 (i fase med boksen) og vandrar mot høgre når frekvensen aukar.
function wsDrawLag(){
  const { x, W, H } = wsSetup(WSIM.cl, 170), r = wsRow(), k = wsK(r), ys = wsYs(r), MAXP = 14, padL = 78, padR = 14, padT = 12, padB = 24;
  const X = v => padL + v / MAXP * (W - padL - padR), rowH = (H - padT - padB) / 5;
  x.fillStyle = "#fff"; x.fillRect(0, 0, W, H);
  x.font = "11px system-ui,sans-serif"; x.textAlign = "center";
  for (let v = 0; v <= MAXP; v++){ x.strokeStyle = v === 0 ? "#111" : "#e1e0d9"; x.lineWidth = v === 0 ? 1.6 : 1; x.beginPath(); x.moveTo(X(v), padT); x.lineTo(X(v), H - padB); x.stroke(); x.fillStyle = "#52514e"; x.fillText(String(v), X(v), H - 9); }
  x.textAlign = "right"; x.fillStyle = "#52514e"; x.fillText(SITE.t("wv.lagax"), W - 4, 10);
  for (let n = 0; n < 5; n++){
    const yy = padT + rowH * (n + 0.5), lag = k * ys[n] / (2 * Math.PI);
    x.fillStyle = WS_COL[n]; x.textAlign = "right"; x.font = "bold 11px system-ui,sans-serif"; x.fillText(WS_NAME[n], padL - 8, yy + 4);
    x.strokeStyle = WS_COL[n]; x.globalAlpha = 0.35; x.lineWidth = 6; x.lineCap = "round"; x.beginPath(); x.moveTo(X(0), yy); x.lineTo(X(Math.min(lag, MAXP)), yy); x.stroke(); x.globalAlpha = 1; x.lineCap = "butt";
    x.beginPath(); x.arc(X(Math.min(lag, MAXP)), yy, 7, 0, 6.283); x.fillStyle = WS_COL[n]; x.fill(); x.strokeStyle = "#fff"; x.lineWidth = 2; x.stroke();
    x.font = "11px system-ui,sans-serif"; x.fillStyle = "#52514e"; x.textAlign = "left"; x.fillText(lag.toFixed(2), Math.min(X(Math.min(lag, MAXP)) + 12, W - 40), yy + 4);
  }
  x.beginPath(); x.arc(X(0), padT - 1, 0, 0, 1);
}

// ---------- tekst og tabell ----------
function wsInfo(){
  const r = wsRow(), k = wsK(r), ph = wsPh(r), am = wsAmp(r), ys = wsYs(r), T = SITE.t("wv.th");
  document.getElementById("wvinfo").innerHTML = SITE.t("wv.info", { lam: r[1].toFixed(1), k: k.toFixed(4), ldx: r[2].toFixed(1) }) +
    (r[15] ? ' <i>' + SITE.t("wv.interp") + '</i>' : ' <i>' + SITE.t("wv.meas") + '</i>') +
    (r[2] < 10 ? ' <b class="warn">' + SITE.t("wv.lowmesh") + '</b>' : "");
  const c0 = ph[0] + k * ys[0] * 180 / Math.PI;
  let h = '<table class="rt"><thead><tr>' + T.map(t => "<th>" + t + "</th>").join("") + "</tr></thead><tbody>";
  for (let n = 0; n < 5; n++){
    const ky = k * ys[n] / (2 * Math.PI), th = wsWrap(c0 - k * ys[n] * 180 / Math.PI);
    h += '<tr><td><span class="dot" style="background:' + WS_COL[n] + '"></span>' + WS_NAME[n] + "</td><td>" + ys[n].toFixed(1) + "</td><td>" + am[n].toFixed(3) + "</td><td>" + ph[n].toFixed(1) + "</td><td>" + ky.toFixed(2) + "</td><td>" + th.toFixed(1) + "</td></tr>";
  }
  document.getElementById("wvtab").innerHTML = h + "</tbody></table>";
}

function wsRedraw(){ wsDrawField(); wsDrawLag(); wsDrawTs(); }

function wsControls(){
  const dofs = document.getElementById("wvdof");
  dofs.innerHTML = ["heave", "sway"].map(d => '<span class="chip' + (WSIM.dof === d ? " on" : "") + '" data-d="' + d + '">' + SITE.t(d === "heave" ? "rs.heave" : "rs.sway") + "</span>").join("");
  dofs.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => { WSIM.dof = c.dataset.d; wsControls(); wsInfo(); wsRedraw(); wsImages(); }));
  document.getElementById("wvplay").textContent = SITE.t(WSIM.playing ? "wv.pause" : "wv.play");
}

function wsImages(){
  const d = WSIM.dof;
  document.getElementById("msimg1").src = "results/main_study/main_study_" + d + "_coefficients.png?v=12";
  document.getElementById("msimg2").src = "results/main_study/main_study_" + d + "_waves.png?v=12";
  document.getElementById("msdl").href = "results/main_study/main_study_" + d + "_table.csv";
}

function wsLoop(ts){
  if (WSIM.playing){
    const dt = WSIM.last ? (ts - WSIM.last) / 1000 : 0;
    WSIM.theta += 2 * Math.PI * dt / WS_PERIOD;
    wsRedraw();
  }
  WSIM.last = ts;
  requestAnimationFrame(wsLoop);
}

function wsInit(){
  if (!document.getElementById("wvfield")) return;
  WSIM.cv = document.getElementById("wvfield"); WSIM.cl = document.getElementById("wvlag"); WSIM.ct = document.getElementById("wvts");
  const sl = document.getElementById("wvom"), out = document.getElementById("wvomo");
  sl.min = 0.1; sl.max = 2.0; sl.step = 0.02; sl.value = WSIM.oh;
  const upd = () => { WSIM.oh = Math.round(+sl.value * 100) / 100; out.textContent = WSIM.oh.toFixed(2); wsInfo(); wsRedraw(); };
  sl.addEventListener("input", upd);
  document.getElementById("wvplay").addEventListener("click", () => { WSIM.playing = !WSIM.playing; wsControls(); });
  window.addEventListener("resize", wsRedraw);
  wsControls(); wsImages(); upd();
  requestAnimationFrame(wsLoop);
}

SITE.onLang(() => { wsControls(); wsInfo(); wsRedraw(); });
wsInit();
SITE.apply(document);
