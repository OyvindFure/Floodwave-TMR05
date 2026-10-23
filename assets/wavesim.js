"use strict";
/* Hovudstudien og bølgjeanimasjonen på Results-sida.
   Tala kjem frå main_study/plots/<rørsle>/main_study_<rørsle>_table.csv (same tal som er plotta).
   Radene er [omega_hat, lambda, lambda/dx, a, b, zeta (5 sondar), fase i grader (5 sondar)].
   Konvensjon (WAMIT): rørsla er eta(t) = cos(wt), og bølgja i ein sonde er zeta_n(t) = |zeta_n| cos(wt + fase_n).
   Ei utgåande bølgje er cos(wt - k y + c), så fasen er fase_n = c - k y_n, med k = w^2/g på djupt vatn. */

const WS_DATA = {"heave":[[0.1,1884.9556,1544.62,5.715353,0.088841,0.020668,0.017612,0.012773,0.012874,0.00916,-12.64,-14.924,-20.859,-20.687,-29.648],[0.2,471.2389,386.15,4.983019,0.513626,0.093058,0.082897,0.06589,0.066262,0.05205,-38.68,-44.995,-61.269,-60.797,-85.594],[0.3,209.4395,171.62,3.170812,0.876455,0.206325,0.196591,0.177892,0.178372,0.156388,-70.96,-82.431,-112.187,-111.314,-158.168],[0.4,117.8097,96.54,2.403484,0.89964,0.279332,0.294748,0.32185,0.321469,0.318313,-103.565,-123.434,-173.481,-172.02,108.874],[0.5,75.3982,61.78,1.97358,0.960845,0.261387,0.289856,0.399369,0.396708,0.469474,-114.355,-152.838,119.082,121.505,-6.167],[0.6,52.3599,42.91,1.723719,0.938068,0.432,0.401925,0.366199,0.365193,0.500859,-113.483,-156.64,65.178,69.435,-141.705],[0.7,38.4685,31.52,1.567684,0.874458,0.548952,0.608018,0.573342,0.578034,0.439492,-144.038,161.627,6.923,11.82,79.98],[0.8,29.4524,24.14,1.488714,0.78119,0.616875,0.585468,0.69742,0.692692,0.61552,-152.926,131.68,-94.618,-88.192,-71.43],[0.9,23.2711,19.07,1.466645,0.668966,0.704182,0.75759,0.633704,0.637499,0.815801,179.959,89.587,175.975,-175.062,85.462],[1.0,18.8496,15.45,1.484661,0.550758,0.810295,0.737081,0.817438,0.814644,0.696403,162.071,51.443,62.043,72.016,-134.98],[1.1,15.5781,12.77,1.527795,0.436666,0.794444,0.729666,0.716718,0.721323,0.761483,140.33,-3.63,-55.436,-42.265,0.412],[1.2,13.09,10.73,1.584975,0.334579,0.762658,0.785571,0.800853,0.793788,0.816967,112.788,-57.928,166.492,-178.792,91.177],[1.3,11.1536,9.14,1.647017,0.24856,0.722087,0.783814,0.756042,0.764921,0.692515,82.875,-113.607,29.147,46.62,174.699],[1.4,9.6171,7.88,1.707881,0.179742,0.653867,0.741564,0.665624,0.663885,0.763329,50.238,-173.92,-131.165,-109.875,-133.737],[1.5,8.3776,6.87,1.763954,0.127006,0.567472,0.671364,0.664381,0.655282,0.612697,13.64,121.103,59.323,82.825,-97.004],[1.6,7.3631,6.03,1.81374,0.088062,0.494697,0.585135,0.637122,0.631457,0.622722,-26.001,49.446,-116.781,-91.035,-92.688],[1.7,6.5223,5.34,1.856715,0.0602,0.475486,0.524188,0.552488,0.560318,0.536093,-66.417,-30.811,57.537,86.877,-96.554],[1.8,5.8178,4.77,1.893465,0.040767,0.502746,0.498964,0.476722,0.482774,0.435138,-108.73,-114.992,-142.514,-109.515,-135.942],[1.9,5.2215,4.28,1.924848,0.027543,0.484042,0.43697,0.402002,0.411939,0.424393,-150.424,163.341,7.211,45.002,168.867],[2.0,4.7124,3.86,1.951684,0.018698,0.442806,0.338362,0.368897,0.37711,0.370352,177.495,82.251,145.051,-174.266,96.154]],"sway":[[0.1,1884.9556,1544.62,0.674976,3e-06,0.001937,0.001146,0.000515,0.000524,0.000256,179.981,179.949,179.755,179.763,179.079],[0.2,471.2389,386.15,0.700065,0.000402,0.009036,0.005927,0.003466,0.003502,0.002375,178.99,177.547,171.104,171.335,156.694],[0.3,209.4395,171.62,0.74876,0.005366,0.026624,0.02028,0.015873,0.015933,0.013798,172.283,164.016,137.4,138.216,93.748],[0.4,117.8097,96.54,0.815727,0.026009,0.062211,0.052856,0.050979,0.050932,0.052135,156.588,136.299,80.393,81.991,-0.965],[0.5,75.3982,61.78,0.884948,0.082935,0.119338,0.104087,0.110493,0.109977,0.132103,138.483,104.816,9.944,12.625,-122.565],[0.6,52.3599,42.91,0.91213,0.195786,0.228907,0.20687,0.182067,0.182164,0.223194,117.027,74.266,-57.632,-53.502,93.564],[0.7,38.4685,31.52,0.850409,0.356709,0.359626,0.368135,0.373813,0.375627,0.285818,83.897,24.608,-135.461,-130.595,-56.081],[0.8,29.4524,24.14,0.702171,0.51647,0.516099,0.481529,0.552503,0.548269,0.520492,59.077,-17.136,114.142,120.666,138.199],[0.9,23.2711,19.07,0.5238,0.626739,0.644541,0.712044,0.614725,0.621137,0.800114,23.061,-71.915,18.693,27.576,-76.6],[1.0,18.8496,15.45,0.36714,0.678925,0.86118,0.831711,0.916907,0.909319,0.717641,-5.037,-115.068,-107.444,-97.552,57.66],[1.1,15.5781,12.77,0.248735,0.687405,0.951475,0.88194,0.884343,0.899358,1.000173,-31.007,-175.614,137.077,150.188,-168.408],[1.2,13.09,10.73,0.166548,0.670743,0.997385,1.121256,1.099726,1.077513,1.140441,-63.534,124.89,-12.676,2.248,-88.305],[1.3,11.1536,9.14,0.111816,0.640321,1.085443,1.304802,1.300556,1.316503,1.092064,-98.44,69.31,-146.662,-130.059,3.381],[1.4,9.6171,7.88,0.076325,0.603227,1.177337,1.389697,1.127635,1.150603,1.399528,-132.713,9.146,55.637,77.601,43.512],[1.5,8.3776,6.87,0.054368,0.563372,1.235978,1.457674,1.293372,1.252382,1.289662,-166.176,-57.203,-123.12,-98.657,90.111],[1.6,7.3631,6.03,0.041729,0.523771,1.305172,1.564378,1.581817,1.539959,1.452717,162.055,-129.473,60.717,86.15,84.366],[1.7,6.5223,5.34,0.035074,0.484226,1.517868,1.683935,1.704787,1.701727,1.650462,127.07,151.642,-122.906,-94.764,86.413],[1.8,5.8178,4.77,0.03315,0.446579,1.74466,1.727596,1.731309,1.761246,1.391501,80.99,66.051,39.646,71.564,47.361],[1.9,5.2215,4.28,0.034449,0.410359,1.614969,1.602933,1.754013,1.802654,1.744103,32.824,-21.174,-171.561,-135.488,-14.843],[2.0,4.7124,3.86,0.037874,0.376192,1.655135,1.569483,1.804328,1.857747,1.8506,-2.234,-102.758,-35.719,4.441,-84.896]]};
const WS_Y = [9, 15, 33, 32.4524, 61.9049];
const WS_COL = ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4"];
const WS_NAME = ["1.5B", "2.5B", "5.5B", "B/2+λ", "B/2+2λ"];
const WS_B = 6, WS_D = 1.5, WS_G = 9.80665, WS_VIEW = 70;      // halvbreidde av visninga i meter
const WS_PERIOD = 6;                                           // sekund på skjermen per svingeperiode

SITE.add({
no:{
 "ms.h":"Main study",
 "ms.p":"L/B = 24 og mesh 4, ω̂ = 0.1 til 2.0 i steg på 0.1. Same dimensjonslause storleikar som i sensitivitetsstudiane. Bølgjehøgd og fase er målt i dei fem sondane (z = 0, x = 0).",
 "ms.coef":"Added mass og demping",
 "ms.waves":"Bølgjehøgd og fase",
 "ms.warn":"Meshet er valt ved ω̂ = 0.8 (λ/Δx = 24) og er det same for alle frekvensar, så λ/Δx blir mindre ved høge frekvensar (3.9 ved ω̂ = 2). Dei høgaste frekvensane er derfor mindre pålitelege. Fasen er innpakka til ±180°, og dei fjerne sondane går gjennom fleire heile omdreiingar mellom to punkt.",
 "wv.h":"Animasjon: bølgjene frå boksen",
 "wv.p":"Boksen svingar og sender bølgjer ut til begge sider. Ei utgåande bølgje har fasen −k·y, med k = ω²/g. Dess lenger bort ein er, og dess høgare frekvens, dess raskare blir fasen skyvd bakover. Glidaren går i steg på 0.02. I målepunkta (0.1, 0.2, ...) er prikkane WAMIT-data, og mellom dei brukar eg teorien. Den blå linja er bølgjeteorien (djupt vatn).",
 "wv.omega":"Frekvens ω̂",
 "wv.play":"Spel", "wv.pause":"Stopp",
 "wv.field":"Vassflata sett frå sida. Vertikal skala er sterkt forstørra (rørsle 1 m).",
 "wv.lag":"Forsinking bakom boksen: antal heile periodar (k·y/2π) kvar sonde ligg etter. Ved låg frekvens ligg alle saman med boksen (0). Dess høgare frekvens, dess lenger bak havnar dei, og dess lenger bort sonden står, dess raskare går det.",
 "wv.lagax":"periodar bak boksen",
 "wv.ts":"Tidsserie: den svarte linja er svingninga til boksen (tid går mot høgre, nå er den loddrette streken). Kvar sonde ser same signal, men så langt bak i tid som forsinkinga k·y/2π. Ved låg frekvens ligg alle prikkane saman med boksen. Auk frekvensen med glidaren og sjå dei vandre bakover, mest for dei fjerne sondane. Forenkla: berre utbreiinga, utan fasen frå boksen sjølv.",
 "wv.info":"λ = {lam} m, k = {k} rad/m, λ/Δx = {ldx}",
 "wv.interp":"Mellom målepunkta: teori (amplitude interpolert).",
 "wv.meas":"Målepunkt frå WAMIT.",
 "wv.lowmesh":"Meshet er grovt her (λ/Δx under 10), så dataa er mindre pålitelege.",
 "wv.th":["Sonde","y [m]","|ζ|/η","fase [°]","forsinking k·y [periodar]","teori fase [°] (festa til 1.5B)"],
 "wv.note":"Forsinking er k·y/2π: kor mange heile bølgjelengder sonden står frå kjelda. Den forsinkinga er forklaringa på at fasen, innpakka til ±180°, ser ut som ein sagtann når ω̂ aukar.",
 "wv.y":"y [m]", "wv.t":"tid [periodar], nå = 0"
},
en:{
 "ms.h":"Main study",
 "ms.p":"L/B = 24 and mesh 4, ω̂ = 0.1 to 2.0 in steps of 0.1. The same non-dimensional quantities as in the sensitivity studies. Wave elevation and phase are measured in the five probes (z = 0, x = 0).",
 "ms.coef":"Added mass and damping",
 "ms.waves":"Wave elevation and phase",
 "ms.warn":"The mesh was chosen at ω̂ = 0.8 (λ/Δx = 24) and is the same for all frequencies, so λ/Δx gets smaller at high frequencies (3.9 at ω̂ = 2). The highest frequencies are therefore less reliable. The phase is wrapped to ±180°, and the far probes pass through several full turns between two points.",
 "wv.h":"Animation: the waves from the box",
 "wv.p":"The box oscillates and sends waves out to both sides. An outgoing wave has the phase −k·y, with k = ω²/g. The further away you are, and the higher the frequency, the faster the phase is pushed backwards. The slider moves in steps of 0.02. At the data points (0.1, 0.2, ...) the dots are WAMIT data, and in between I use theory. The blue line is wave theory (deep water).",
 "wv.omega":"Frequency ω̂",
 "wv.play":"Play", "wv.pause":"Pause",
 "wv.field":"The free surface seen from the side. The vertical scale is strongly exaggerated (motion 1 m).",
 "wv.lag":"Delay behind the box: the number of whole periods (k·y/2π) each probe lags. At low frequency they all sit with the box (0). The higher the frequency, the further back they end up, and the further away a probe is, the faster it goes.",
 "wv.lagax":"periods behind the box",
 "wv.ts":"Time series: the black line is the oscillation of the box (time runs to the right, now is the vertical line). Every probe sees the same signal, but as far back in time as the delay k·y/2π. At low frequency all dots sit with the box. Increase the frequency with the slider and watch them move backwards, most for the far probes. Simplified: propagation only, without the phase from the box itself.",
 "wv.info":"λ = {lam} m, k = {k} rad/m, λ/Δx = {ldx}",
 "wv.interp":"Between data points: theory (amplitude interpolated).",
 "wv.meas":"WAMIT data point.",
 "wv.lowmesh":"The mesh is coarse here (λ/Δx below 10), so the data are less reliable.",
 "wv.th":["Probe","y [m]","|ζ|/η","phase [°]","delay k·y [periods]","theory phase [°] (fitted to 1.5B)"],
 "wv.note":"The delay is k·y/2π: how many whole wavelengths the probe is from the source. That delay is why the phase, wrapped to ±180°, looks like a saw tooth as ω̂ increases.",
 "wv.y":"y [m]", "wv.t":"time [periods], now = 0"
}
});

const WSIM = { dof: "heave", oh: 0.8, playing: true, theta: 0, last: 0, cv: null, ct: null };

// ---------- hjelp ----------
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
  const ph = WS_Y.map(y => wsWrap((c - k * y) * 180 / Math.PI));
  return [oh, lam, lam / dx, 0, 0].concat(amp, ph, [true]);
}
function wsRow(){ return wsRowAt(WSIM.oh); }
function wsAmp(r){ return r.slice(5, 10); }
function wsPh(r){ return r.slice(10, 15); }
function wsWrap(d){ d = ((d + 180) % 360 + 360) % 360 - 180; return d; }
function wsK(r){ const om = r[0] / Math.sqrt(WS_B / (2 * WS_G)); return om * om / WS_G; }
function wsAmpAt(r, y){      // |zeta| mellom sondane, rett linje i y
  const pts = WS_Y.map((v, i) => [v, wsAmp(r)[i]]).sort((a, b) => a[0] - b[0]);
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
  const { x, W, H } = wsSetup(WSIM.cv, 300), r = wsRow(), k = wsK(r), ph = wsPh(r), am = wsAmp(r);
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
  const c0 = ph[0] * Math.PI / 180 + k * WS_Y[0];
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
    const val = am[n] * Math.cos(th + ph[n] * Math.PI / 180);
    x.setLineDash([2, 3]); x.strokeStyle = WS_COL[n]; x.lineWidth = 1; x.beginPath(); x.moveTo(X(WS_Y[n]), padT); x.lineTo(X(WS_Y[n]), H - padB); x.stroke(); x.setLineDash([]);
    x.beginPath(); x.arc(X(WS_Y[n]), Z(val), 6, 0, 6.283); x.fillStyle = WS_COL[n]; x.fill(); x.lineWidth = 2; x.strokeStyle = "#fff"; x.stroke();
  }
  x.font = "bold 11px system-ui,sans-serif"; x.textAlign = "center";
  [0, 1, 2, 4].forEach(n => { x.fillStyle = WS_COL[n]; x.fillText(WS_NAME[n], X(WS_Y[n]), padT + 10); });
}

// ---------- teikning: tidsserie ----------
// Den svarte kurva er svingninga til boksen, cos(theta + 2 pi t), med tid t i periodar og "no" ved t = 0.
// Kvar sonde ser same signal, men forsinka med k*y/2pi periodar (ikkje innpakka). Prikken til sonden
// ligg derfor på same kurve, så langt bak i tid (t = -forsinking). Låg frekvens: alle prikkane ved t = 0.
function wsDrawTs(){
  const { x, W, H } = wsSetup(WSIM.ct, 210), r = wsRow(), k = wsK(r), th = WSIM.theta;
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
    const lag = Math.min(k * WS_Y[n] / (2 * Math.PI), MAXP), tp = tb - lag, te = Math.min(tp + 2.5, T1);
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
  const { x, W, H } = wsSetup(WSIM.cl, 170), r = wsRow(), k = wsK(r), MAXP = 14, padL = 78, padR = 14, padT = 12, padB = 24;
  const X = v => padL + v / MAXP * (W - padL - padR), rowH = (H - padT - padB) / 5;
  x.fillStyle = "#fff"; x.fillRect(0, 0, W, H);
  x.font = "11px system-ui,sans-serif"; x.textAlign = "center";
  for (let v = 0; v <= MAXP; v++){ x.strokeStyle = v === 0 ? "#111" : "#e1e0d9"; x.lineWidth = v === 0 ? 1.6 : 1; x.beginPath(); x.moveTo(X(v), padT); x.lineTo(X(v), H - padB); x.stroke(); x.fillStyle = "#52514e"; x.fillText(String(v), X(v), H - 9); }
  x.textAlign = "right"; x.fillStyle = "#52514e"; x.fillText(SITE.t("wv.lagax"), W - 4, 10);
  for (let n = 0; n < 5; n++){
    const yy = padT + rowH * (n + 0.5), lag = k * WS_Y[n] / (2 * Math.PI);
    x.fillStyle = WS_COL[n]; x.textAlign = "right"; x.font = "bold 11px system-ui,sans-serif"; x.fillText(WS_NAME[n], padL - 8, yy + 4);
    x.strokeStyle = WS_COL[n]; x.globalAlpha = 0.35; x.lineWidth = 6; x.lineCap = "round"; x.beginPath(); x.moveTo(X(0), yy); x.lineTo(X(Math.min(lag, MAXP)), yy); x.stroke(); x.globalAlpha = 1; x.lineCap = "butt";
    x.beginPath(); x.arc(X(Math.min(lag, MAXP)), yy, 7, 0, 6.283); x.fillStyle = WS_COL[n]; x.fill(); x.strokeStyle = "#fff"; x.lineWidth = 2; x.stroke();
    x.font = "11px system-ui,sans-serif"; x.fillStyle = "#52514e"; x.textAlign = "left"; x.fillText(lag.toFixed(2), Math.min(X(Math.min(lag, MAXP)) + 12, W - 40), yy + 4);
  }
  x.beginPath(); x.arc(X(0), padT - 1, 0, 0, 1);
}

// ---------- tekst og tabell ----------
function wsInfo(){
  const r = wsRow(), k = wsK(r), ph = wsPh(r), am = wsAmp(r), T = SITE.t("wv.th");
  document.getElementById("wvinfo").innerHTML = SITE.t("wv.info", { lam: r[1].toFixed(1), k: k.toFixed(4), ldx: r[2].toFixed(1) }) +
    (r[15] ? ' <i>' + SITE.t("wv.interp") + '</i>' : ' <i>' + SITE.t("wv.meas") + '</i>') +
    (r[2] < 10 ? ' <b class="warn">' + SITE.t("wv.lowmesh") + '</b>' : "");
  const c0 = ph[0] + k * WS_Y[0] * 180 / Math.PI;
  let h = '<table class="rt"><thead><tr>' + T.map(t => "<th>" + t + "</th>").join("") + "</tr></thead><tbody>";
  for (let n = 0; n < 5; n++){
    const ky = k * WS_Y[n] / (2 * Math.PI), th = wsWrap(c0 - k * WS_Y[n] * 180 / Math.PI);
    h += '<tr><td><span class="dot" style="background:' + WS_COL[n] + '"></span>' + WS_NAME[n] + "</td><td>" + WS_Y[n].toFixed(1) + "</td><td>" + am[n].toFixed(3) + "</td><td>" + ph[n].toFixed(1) + "</td><td>" + ky.toFixed(2) + "</td><td>" + th.toFixed(1) + "</td></tr>";
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
  document.getElementById("msimg1").src = "results/main_study/main_study_" + d + "_coefficients.png?v=10";
  document.getElementById("msimg2").src = "results/main_study/main_study_" + d + "_waves.png?v=10";
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
