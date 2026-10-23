"use strict";
/* Delt kode for box generator-sida og .gdf-sida.
   1) Same geometri som Box_generator.py (box_generator, boxq_generator, writetoGDF).
   2) Ein liten 3D-teiknar som ser ut som matplotlib (plot_3D_panel og plotPanelNormals). */
const PY = (function(){

// ---------- geometri: eksakt same rekkjefølgje som Python ----------
function zeros(n){ return Array.from({length:n},()=>[0,0,0,0]); }
const lin = (n,start,step)=>Array.from({length:n+1},(_,k)=>start-k*step);

function boxFull(length,width,draft,Nx,Ny,Nz){
  const dx=length/Nx, dy=width/Ny, dz=draft/Nz, N=Nx*Ny+Nx*Nz*2+Ny*Nz*2;
  const X=zeros(N), Y=zeros(N), Z=zeros(N), g=[]; let i=0;
  const set=(a,v)=>{ a.splice(0,4,...(Array.isArray(v)?v:[v,v,v,v])); };
  for(let j=0;j<Nz;j++)for(let p=0;p<Nx;p++){ set(Y[i],-width/2); set(X[i],[length/2-p*dx,length/2-(p+1)*dx,length/2-(p+1)*dx,length/2-p*dx]); set(Z[i],[-j*dz,-j*dz,-(j+1)*dz,-(j+1)*dz]); g[i++]=0; }
  for(let j=0;j<Nz;j++)for(let p=0;p<Nx;p++){ set(Y[i],width/2); set(X[i],[length/2-(p+1)*dx,length/2-p*dx,length/2-p*dx,length/2-(p+1)*dx]); set(Z[i],[-j*dz,-j*dz,-(j+1)*dz,-(j+1)*dz]); g[i++]=1; }
  for(let j=0;j<Nz;j++)for(let p=0;p<Ny;p++){ set(X[i],length/2); set(Y[i],[width/2-p*dy,width/2-(p+1)*dy,width/2-(p+1)*dy,width/2-p*dy]); set(Z[i],[-j*dz,-j*dz,-(j+1)*dz,-(j+1)*dz]); g[i++]=2; }
  for(let j=0;j<Nz;j++)for(let p=0;p<Ny;p++){ set(X[i],-length/2); set(Y[i],[width/2-(p+1)*dy,width/2-p*dy,width/2-p*dy,width/2-(p+1)*dy]); set(Z[i],[-j*dz,-j*dz,-(j+1)*dz,-(j+1)*dz]); g[i++]=3; }
  for(let j=0;j<Nx;j++)for(let p=0;p<Ny;p++){ set(Z[i],-draft); set(Y[i],[width/2-p*dy,width/2-(p+1)*dy,width/2-(p+1)*dy,width/2-p*dy]); set(X[i],[length/2-j*dx,length/2-j*dx,length/2-(j+1)*dx,length/2-(j+1)*dx]); g[i++]=4; }
  return {X,Y,Z,N,isx:0,isy:0,g,quarter:false,args:[length,width,draft,Nx,Ny,Nz]};
}
function boxQuarter(length,width,draft,Nx,Ny,Nz){
  const dx=0.5*length/Nx, dy=0.5*width/Ny, dz=draft/Nz, N=Nx*Ny+Nx*Nz+Ny*Nz;
  const X=zeros(N), Y=zeros(N), Z=zeros(N), g=[];
  const xv=lin(Nx,length/2,dx), yv=lin(Ny,width/2,dy), zv=Array.from({length:Nz+1},(_,k)=>-k*dz);
  const set=(a,v)=>{ a.splice(0,4,...(Array.isArray(v)?v:[v,v,v,v])); };
  let i=0;
  for(let j=0;j<Nz;j++)for(let p=0;p<Nx;p++){ set(X[i],[xv[p+1],xv[p],xv[p],xv[p+1]]); set(Y[i],width/2); set(Z[i],[zv[j],zv[j],zv[j+1],zv[j+1]]); g[i++]=0; }
  for(let j=0;j<Nz;j++)for(let p=0;p<Ny;p++){ set(X[i],length/2); set(Y[i],[yv[p],yv[p+1],yv[p+1],yv[p]]); set(Z[i],[zv[j],zv[j],zv[j+1],zv[j+1]]); g[i++]=1; }
  for(let j=0;j<Nx;j++)for(let p=0;p<Ny;p++){ set(X[i],[xv[j],xv[j],xv[j+1],xv[j+1]]); set(Y[i],[yv[p],yv[p+1],yv[p+1],yv[p]]); set(Z[i],-draft); g[i++]=2; }
  return {X,Y,Z,N,isx:1,isy:1,g,quarter:true,args:[length,width,draft,Nx,Ny,Nz]};
}
const f6 = x => (+x).toFixed(6);
function gdfLines(d,path){
  const L=[path+"  --","1.000       9.806650    ULEN, GRAV", d.isx+"           "+d.isy+"            ISX, ISY", d.N+"    NPAN"];
  for(let i=0;i<d.N;i++)for(let c=0;c<4;c++) L.push(f6(d.X[i][c])+" "+f6(d.Y[i][c])+" "+f6(d.Z[i][c])+" ");
  return L;
}
const centroid = (d,i)=>[0,1,2].map(a=>[d.X,d.Y,d.Z][a][i].reduce((s,v)=>s+v,0)/4);
function normal(d,i,order){
  const o=order||[0,1,2,3], P=c=>[d.X[i][o[c]],d.Y[i][o[c]],d.Z[i][o[c]]];
  const a=P(0),b=P(1),c=P(2),e=P(3);
  const v1=[c[0]-a[0],c[1]-a[1],c[2]-a[2]], v2=[e[0]-b[0],e[1]-b[1],e[2]-b[2]];
  const n=[v1[1]*v2[2]-v1[2]*v2[1],v1[2]*v2[0]-v1[0]*v2[2],v1[0]*v2[1]-v1[1]*v2[0]];
  const l=Math.hypot(...n)||1; return n.map(x=>x/l);
}
const ptp = a => { let lo=Infinity,hi=-Infinity; a.forEach(r=>r.forEach(v=>{ if(v<lo)lo=v; if(v>hi)hi=v; })); return hi-lo; };

// ---------- matplotlib-liknande teiknar ----------
const C10=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];
function niceTicks(lo,hi,n){
  const span=hi-lo||1, raw=span/n, mag=Math.pow(10,Math.floor(Math.log10(raw))), r=raw/mag;
  const st=(r<1.5?1:r<3.5?2:r<7.5?5:10)*mag, out=[];
  for(let v=Math.ceil(lo/st-1e-9)*st; v<=hi+1e-9; v+=st) out.push(Math.abs(v)<1e-12?0:+v.toFixed(10));
  return out;
}
const tickTxt = v => String(+v.toFixed(3));

function Plot(canvas,opt){
  const ctx=canvas.getContext("2d"); let W=0,H=0,DPR=1;
  const S={az:3,el:30,zoom:1,data:null,mode:"panels",labels:true,sel:-1,mirror:false,fill:false,axes:true,
           eq:true,flip:false,arrowHead:null,hue:null};
  Object.assign(S,opt||{});
  const home={az:S.az,el:S.el};
  function resize(){ DPR=window.devicePixelRatio||1; const r=canvas.getBoundingClientRect(); W=r.width; H=r.height; canvas.width=Math.round(W*DPR); canvas.height=Math.round(H*DPR); draw(); }
  function bounds(){
    const d=S.data, pts=[];
    const mir = S.mirror;
    for(let i=0;i<d.N;i++)for(let c=0;c<4;c++){
      pts.push([d.X[i][c],d.Y[i][c],d.Z[i][c]]);
      if(mir){ pts.push([-d.X[i][c],-d.Y[i][c],d.Z[i][c]]); }
    }
    let size=0.6*Math.max(ptp(d.X),ptp(d.Y),ptp(d.Z));
    if(mir) size=0.6*Math.max(2*Math.max(...d.X.flat()),2*Math.max(...d.Y.flat()),ptp(d.Z));
    if(S.axes){ pts.push([0,0,0],[size,0,0],[0,size,0],[0,0,size]); }
    const lo=[1,2,3].map(()=>Infinity), hi=[1,2,3].map(()=>-Infinity);
    pts.forEach(p=>p.forEach((v,k)=>{ if(v<lo[k])lo[k]=v; if(v>hi[k])hi[k]=v; }));
    if(S.eq){ const c=lo.map((v,k)=>(v+hi[k])/2), r=Math.max(...lo.map((v,k)=>hi[k]-v))/2*1.04||1; return {lo:c.map(v=>v-r),hi:c.map(v=>v+r),size}; }
    const pad=lo.map((v,k)=>(hi[k]-v)*0.04||0.5);
    return {lo:lo.map((v,k)=>v-pad[k]),hi:hi.map((v,k)=>v+pad[k]),size};
  }
  function draw(){
    if(!W||!S.data) return;
    ctx.setTransform(DPR,0,0,DPR,0,0); ctx.fillStyle="#fff"; ctx.fillRect(0,0,W,H);
    const d=S.data, B=bounds(), a=S.az*Math.PI/180, e=S.el*Math.PI/180;
    const ca=Math.cos(a), sa=Math.sin(a), ce=Math.cos(e), se=Math.sin(e);
    const mid=B.lo.map((v,k)=>(v+B.hi[k])/2), half=B.lo.map((v,k)=>(B.hi[k]-v)/2);
    const R=Math.hypot(...half)||1, sc=Math.min(W,H)*0.5/R*0.80*S.zoom;
    const cx=W/2, cy=H/2+4;
    // matplotlib bruker same boks-kantlengd uansett data, derfor normaliserer vi kvar akse til [-1,1]
    const nrm = S.eq ? (p=>[p[0]-mid[0],p[1]-mid[1],p[2]-mid[2]]) : (p=>[(p[0]-mid[0])/half[0]*Math.max(...half),(p[1]-mid[1])/half[1]*Math.max(...half)*0.9,(p[2]-mid[2])/half[2]*Math.max(...half)*0.9]);
    const pr = p=>{ const q=nrm(p); const h=-sa*q[0]+ca*q[1], u=-ca*se*q[0]-sa*se*q[1]+ce*q[2], dd=ca*ce*q[0]+sa*ce*q[1]+se*q[2]; return {x:cx+h*sc,y:cy-u*sc,d:dd}; };
    const V=[ca*ce,sa*ce,se];
    const corner=(ix,iy,iz)=>[ix?B.hi[0]:B.lo[0],iy?B.hi[1]:B.lo[1],iz?B.hi[2]:B.lo[2]];
    const ticks=[0,1,2].map(k=>niceTicks(B.lo[k],B.hi[k],5));
    // bakre veggar med rutenett
    for(let k=0;k<3;k++)for(let s=0;s<2;s++){
      const n=[0,0,0]; n[k]=s?1:-1;
      if(n[0]*V[0]+n[1]*V[1]+n[2]*V[2]>=0) continue;
      const i1=(k+1)%3, i2=(k+2)%3, fixed=s?B.hi[k]:B.lo[k];
      const P=(u,v)=>{ const p=[0,0,0]; p[k]=fixed; p[i1]=u; p[i2]=v; return pr(p); };
      const q=[P(B.lo[i1],B.lo[i2]),P(B.hi[i1],B.lo[i2]),P(B.hi[i1],B.hi[i2]),P(B.lo[i1],B.hi[i2])];
      ctx.beginPath(); q.forEach((m,t)=>t?ctx.lineTo(m.x,m.y):ctx.moveTo(m.x,m.y)); ctx.closePath();
      ctx.fillStyle="#f0f0f5"; ctx.fill(); ctx.strokeStyle="#d4d4da"; ctx.lineWidth=1; ctx.stroke();
      ctx.strokeStyle="#c4c4cc"; ctx.lineWidth=.7; ctx.beginPath();
      ticks[i1].forEach(t=>{ const m=P(t,B.lo[i2]), n2=P(t,B.hi[i2]); ctx.moveTo(m.x,m.y); ctx.lineTo(n2.x,n2.y); });
      ticks[i2].forEach(t=>{ const m=P(B.lo[i1],t), n2=P(B.hi[i1],t); ctx.moveTo(m.x,m.y); ctx.lineTo(n2.x,n2.y); });
      ctx.stroke();
    }
    // akselinjer og tall
    const yE = sa>0?B.hi[1]:B.lo[1], xE = ca>0?B.hi[0]:B.lo[0], zL = e>=0?B.lo[2]:B.hi[2];
    let best=null; for(const ix of [0,1])for(const iy of [0,1]){ const p=pr([ix?B.hi[0]:B.lo[0],iy?B.hi[1]:B.lo[1],zL]); if(!best||p.x<best.p.x) best={p,ix,iy}; }
    ctx.strokeStyle="#222"; ctx.lineWidth=1; ctx.fillStyle="#222"; ctx.font="11px system-ui,sans-serif"; ctx.textAlign="center"; ctx.textBaseline="middle";
    const line=(p,q)=>{ const m=pr(p),n=pr(q); ctx.beginPath(); ctx.moveTo(m.x,m.y); ctx.lineTo(n.x,n.y); ctx.stroke(); return [m,n]; };
    const out=(p,from)=>{ const dx=p.x-from.x, dy=p.y-from.y, l=Math.hypot(dx,dy)||1; return {x:p.x+dx/l*13,y:p.y+dy/l*13}; };
    const ctr=pr(mid);
    line([B.lo[0],yE,zL],[B.hi[0],yE,zL]); line([xE,B.lo[1],zL],[xE,B.hi[1],zL]);
    const zx=best.ix?B.hi[0]:B.lo[0], zy=best.iy?B.hi[1]:B.lo[1];
    line([zx,zy,B.lo[2]],[zx,zy,B.hi[2]]);
    ticks[0].forEach(t=>{ const p=pr([t,yE,zL]), o=out(p,ctr); ctx.fillText(tickTxt(t),o.x,o.y); });
    ticks[1].forEach(t=>{ const p=pr([xE,t,zL]), o=out(p,ctr); ctx.fillText(tickTxt(t),o.x,o.y); });
    ticks[2].forEach(t=>{ const p=pr([zx,zy,t]), o=out(p,ctr); ctx.fillText(tickTxt(t),o.x-4,o.y); });
    ctx.font="13px system-ui,sans-serif";
    [["x",[mid[0],yE,zL]],["y",[xE,mid[1],zL]],["z",[zx,zy,mid[2]]]].forEach(([nm,p])=>{ const q=pr(p), o=out(q,ctr), o2=out(o,ctr); ctx.fillText(nm,o2.x+(nm==="z"?-14:0),o2.y); });
    // ---------- data ----------
    const arrow=(p,q,col,lw,ratio)=>{
      const m=pr(p), n=pr(q); ctx.strokeStyle=col; ctx.fillStyle=col; ctx.lineWidth=lw;
      ctx.beginPath(); ctx.moveTo(m.x,m.y); ctx.lineTo(n.x,n.y); ctx.stroke();
      const an=Math.atan2(n.y-m.y,n.x-m.x), hl=Math.max(5,Math.hypot(n.x-m.x,n.y-m.y)*ratio);
      ctx.beginPath(); ctx.moveTo(n.x,n.y); ctx.lineTo(n.x-hl*Math.cos(an-.33),n.y-hl*Math.sin(an-.33)); ctx.lineTo(n.x-hl*Math.cos(an+.33),n.y-hl*Math.sin(an+.33)); ctx.closePath(); ctx.fill();
    };
    const poly=(i,mir)=>{ const m=mir?-1:1; return [0,1,2,3].map(c=>pr([m*d.X[i][c],m*d.Y[i][c],d.Z[i][c]])); };
    if(S.mirror){
      ctx.strokeStyle="#9aa0b4"; ctx.lineWidth=.8; ctx.setLineDash([3,3]);
      for(let i=0;i<d.N;i++){
        [[-1,1],[1,-1],[-1,-1]].forEach(([sx,sy])=>{ const q=[0,1,2,3].map(c=>pr([sx*d.X[i][c],sy*d.Y[i][c],d.Z[i][c]]));
          ctx.beginPath(); q.forEach((m,t)=>t?ctx.lineTo(m.x,m.y):ctx.moveTo(m.x,m.y)); ctx.closePath(); ctx.fillStyle="rgba(150,160,190,.10)"; ctx.fill(); ctx.stroke(); });
      }
      ctx.setLineDash([]);
    }
    if(S.mode==="panels"){
      for(let i=0;i<d.N;i++){
        const q=poly(i); ctx.strokeStyle=C10[i%10]; ctx.lineWidth=1.5; ctx.beginPath(); q.forEach((m,t)=>t?ctx.lineTo(m.x,m.y):ctx.moveTo(m.x,m.y)); ctx.stroke();
      }
      if(S.labels){ ctx.fillStyle="#000"; ctx.font="9px system-ui,sans-serif"; for(let i=0;i<d.N;i++){ const m=pr(centroid(d,i)); ctx.fillText(i+"th",m.x,m.y); } }
    } else if(S.mode==="normals"){
      for(let i=0;i<d.N;i++){ const c=centroid(d,i), n=normal(d,i); arrow(c,[c[0]+n[0],c[1]+n[1],c[2]+n[2]],"#1f77b4",1.1,.3); }
    } else if(S.mode==="file"){
      const list=[]; for(let i=0;i<d.N;i++){ const q=poly(i); list.push({i,q,dep:q.reduce((s,m)=>s+m.d,0)/4}); }
      list.sort((u,v)=>u.dep-v.dep);
      for(const it of list){
        const hue = d.g && S.hue ? S.hue[d.g[it.i]] : 210;
        ctx.beginPath(); it.q.forEach((m,t)=>t?ctx.lineTo(m.x,m.y):ctx.moveTo(m.x,m.y)); ctx.closePath();
        ctx.fillStyle="hsla("+hue+",55%,62%,"+(it.i===S.sel?.0:.55)+")"; ctx.fill(); ctx.strokeStyle="#444"; ctx.lineWidth=.9; ctx.stroke();
      }
      if(S.sel>=0 && S.sel<d.N){
        const i=S.sel, order=S.flip?[0,3,2,1]:[0,1,2,3];
        const q=order.map(c=>pr([d.X[i][c],d.Y[i][c],d.Z[i][c]]));
        ctx.beginPath(); q.forEach((m,t)=>t?ctx.lineTo(m.x,m.y):ctx.moveTo(m.x,m.y)); ctx.closePath();
        ctx.fillStyle="rgba(255,204,0,.65)"; ctx.fill(); ctx.strokeStyle="#c98a00"; ctx.lineWidth=2.4; ctx.stroke();
        for(let c=0;c<4;c++){ const m=q[c], n=q[(c+1)%4], an=Math.atan2(n.y-m.y,n.x-m.x), mx=(m.x+n.x)/2, my=(m.y+n.y)/2;
          ctx.strokeStyle="#7a5200"; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(mx-7*Math.cos(an-.5),my-7*Math.sin(an-.5)); ctx.lineTo(mx,my); ctx.lineTo(mx-7*Math.cos(an+.5),my-7*Math.sin(an+.5)); ctx.stroke(); }
        const c0=centroid(d,i), n=normal(d,i,order), len=Math.max(B.size*0.35,0.3);
        arrow(c0,[c0[0]+n[0]*len,c0[1]+n[1]*len,c0[2]+n[2]*len],S.flip?"#e5484d":"#1a8a3c",3,.3);
        q.forEach((m,c)=>{ ctx.beginPath(); ctx.arc(m.x,m.y,10,0,6.283); ctx.fillStyle="#111"; ctx.fill(); ctx.lineWidth=1.6; ctx.strokeStyle="#ffcc00"; ctx.stroke();
          ctx.fillStyle="#fff"; ctx.font="bold 12px system-ui,sans-serif"; ctx.fillText(String(c+1),m.x,m.y+.5); });
      }
    }
    if(S.axes){
      const sz=B.size;
      [["x",[1,0,0],"#d62728"],["y",[0,1,0],"#2ca02c"],["z",[0,0,1],"#1f4fd8"]].forEach(([nm,v,col])=>{
        arrow([0,0,0],[v[0]*sz,v[1]*sz,v[2]*sz],col,2,.12);
        const m=pr([v[0]*sz*1.08,v[1]*sz*1.08,v[2]*sz*1.08]); ctx.fillStyle=col; ctx.font="bold 14px system-ui,sans-serif"; ctx.fillText(nm,m.x,m.y);
      });
    }
  }
  // ---------- mus ----------
  let drag=null;
  canvas.addEventListener("pointerdown",e=>{ canvas.setPointerCapture(e.pointerId); drag=[e.clientX,e.clientY]; canvas.style.cursor="grabbing"; });
  canvas.addEventListener("pointermove",e=>{ if(!drag) return; S.az-=(e.clientX-drag[0])*.5; S.el=Math.max(-90,Math.min(90,S.el+(e.clientY-drag[1])*.5)); drag=[e.clientX,e.clientY]; draw(); if(S.onview) S.onview(S); });
  const end=()=>{ drag=null; canvas.style.cursor="grab"; };
  canvas.addEventListener("pointerup",end); canvas.addEventListener("pointercancel",end);
  canvas.addEventListener("wheel",e=>{ e.preventDefault(); S.zoom=Math.min(4,Math.max(.4,S.zoom*Math.exp(-e.deltaY*.0012))); draw(); },{passive:false});
  canvas.addEventListener("dblclick",()=>{ S.az=home.az; S.el=home.el; S.zoom=1; draw(); if(S.onview) S.onview(S); });
  window.addEventListener("resize",resize);
  canvas.style.cursor="grab"; canvas.style.touchAction="none";
  return { S, draw, resize, set(o){ Object.assign(S,o); draw(); }, setHome(az,el){ home.az=az; home.el=el; S.az=az; S.el=el; draw(); } };
}

return { boxFull, boxQuarter, gdfLines, centroid, normal, Plot, f6, C10 };
})();
