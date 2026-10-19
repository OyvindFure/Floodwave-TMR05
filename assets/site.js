/* Felles kode: meny, språkval (NO/EN), lys/mørk modus og forsidekort.
   Ny side: legg ho til i PAGES under, og legg strengane i TR (nav.<key>, card.<key>.t, card.<key>.d). */
(function(){
"use strict";

const PAGES = [
  { key:"box", href:"box-generator.html" }
];

const TR = {
  no:{
    "brand.sub":"TMR05 potensialstrøyming",
    "nav.home":"Forside",
    "nav.box":"Box generator",
    "tool.lang":"Språk",
    "tool.theme":"Bytt mellom lys og mørk modus",
    "foot":"TMR05 · NTNU · Gruppe flood wave",
    "home.title":"Forside",
    "home.h1":"Visualiseringar til WAMIT-prosjektet",
    "home.p":"Interaktive forklaringar som høyrer til rapporten. Vel ei visualisering under. Språket kan byttast øvst til høgre.",
    "card.box.t":"Box generator steg for steg",
    "card.box.d":"Sjå kva Python-koden gjer, panel for panel, og korleis skroget blir laga som mesh til WAMIT.",
    "card.open":"Opne →",
    "card.soon.t":"Fleire visualiseringar kjem",
    "card.soon.d":"Nye sider blir lagde til her etter kvart som prosjektet går framover."
  },
  en:{
    "brand.sub":"TMR05 potential flow",
    "nav.home":"Home",
    "nav.box":"Box generator",
    "tool.lang":"Language",
    "tool.theme":"Switch between light and dark mode",
    "foot":"TMR05 · NTNU · Group flood wave",
    "home.title":"Home",
    "home.h1":"Visualisations for the WAMIT project",
    "home.p":"Interactive explanations that go with the report. Pick a visualisation below. The language can be switched at the top right.",
    "card.box.t":"Box generator step by step",
    "card.box.d":"See what the Python code does, panel by panel, and how the hull mesh for WAMIT is built.",
    "card.open":"Open →",
    "card.soon.t":"More visualisations coming",
    "card.soon.d":"New pages will be added here as the project moves forward."
  }
};

const store = {
  get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
};

let lang = store.get("lang");
if(lang!=="no" && lang!=="en") lang = "no";
const listeners = [];

// sett lys/mørk modus tidleg, så sida ikkje blinkar
(function(){ const t=store.get("theme"); if(t==="light"||t==="dark") document.documentElement.setAttribute("data-theme",t); })();

function t(key, vars){
  let s = (TR[lang] && TR[lang][key]);
  if(s===undefined) s = TR.no[key];
  if(s===undefined) s = key;
  if(vars) s = s.replace(/\{(\w+)\}/g,(m,k)=> (k in vars)? vars[k] : m);
  return s;
}

function add(dict){ for(const l of ["no","en"]) Object.assign(TR[l], dict[l]||{}); }

function apply(root){
  root = root || document;
  root.querySelectorAll("[data-i18n]").forEach(el=>{ el.innerHTML = t(el.getAttribute("data-i18n")); });
  root.querySelectorAll("[data-i18n-title]").forEach(el=>{ el.setAttribute("title", t(el.getAttribute("data-i18n-title"))); });
  document.documentElement.lang = lang==="no" ? "nn" : "en";
  const tk = document.documentElement.getAttribute("data-title");
  if(tk) document.title = t(tk) + " | Flood wave";
  document.querySelectorAll(".seg button").forEach(b=>b.classList.toggle("on", b.dataset.lang===lang));
}

function setLang(l){
  if(l!==lang && (l==="no"||l==="en")){
    lang = l; store.set("lang", l); buildHeader(); apply(document);
    listeners.forEach(fn=>fn(lang));
  }
}

function currentTheme(){
  const a = document.documentElement.getAttribute("data-theme");
  if(a) return a;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function toggleTheme(){
  const n = currentTheme()==="dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", n); store.set("theme", n);
  window.dispatchEvent(new Event("themechange"));
}

function here(href){
  const p = location.pathname.split("/").pop() || "index.html";
  return p===href;
}

function buildHeader(){
  const h = document.getElementById("site-header"); if(!h) return;
  const links = [{href:"index.html", label:t("nav.home")}].concat(PAGES.map(p=>({href:p.href, label:t("nav."+p.key)})));
  h.innerHTML =
    '<div class="bar">'+
      '<a class="brand" href="index.html"><b>Flood wave</b><span>'+t("brand.sub")+'</span></a>'+
      '<nav>'+links.map(l=>'<a href="'+l.href+'"'+(here(l.href)?' class="active"':'')+'>'+l.label+'</a>').join("")+'</nav>'+
      '<div class="tools">'+
        '<div class="seg" role="group" aria-label="'+t("tool.lang")+'"><button type="button" data-lang="no">NO</button><button type="button" data-lang="en">EN</button></div>'+
        '<button type="button" id="themeBtn" aria-label="'+t("tool.theme")+'" title="'+t("tool.theme")+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg></button>'+
      '</div>'+
    '</div>';
  h.querySelectorAll(".seg button").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
  h.querySelector("#themeBtn").addEventListener("click",toggleTheme);
}
function buildFooter(){
  const f = document.getElementById("site-footer"); if(f) f.textContent = t("foot");
}

function buildCards(){
  const box = document.getElementById("cards"); if(!box) return;
  box.innerHTML = PAGES.map(p=>
    '<a class="pcard" href="'+p.href+'"><h2>'+t("card."+p.key+".t")+'</h2><p>'+t("card."+p.key+".d")+'</p><span class="go">'+t("card.open")+'</span></a>'
  ).join("") + '<div class="pcard soon"><h2>'+t("card.soon.t")+'</h2><p>'+t("card.soon.d")+'</p></div>';
}

function start(cb){
  buildHeader(); buildFooter(); buildCards(); apply(document);
  listeners.push(()=>{ buildFooter(); buildCards(); });
  if(cb) cb();
}

window.SITE = { t, add, apply, start, onLang:fn=>listeners.push(fn), get lang(){ return lang; } };
})();
