"""Lagar figuren til læringssida: lengdestudien i hiv med grøn sirkel ved første topp (forsterking)
og raud sirkel ved første dal (utsleting).

Les berre data frå ../../Comparison (compare_common.py og case.1 hos kvar person). Endrar ingen resultatfiler.
Skriv img/length_overshoot_sway.png (hiv: ndof=3 i main()) i denne mappa.
Køyr:  python -B make_plots.py
"""
import os, sys, re, glob, math
HERE = os.path.dirname(os.path.abspath(__file__))
COMP = os.path.abspath(os.path.join(HERE, "..", "..", "Comparison"))
sys.dont_write_bytecode = True
sys.path.insert(0, COMP)
import compare_common as cc
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

GREEN, RED = "#1a8a3c", "#c62828"

def series(p, dof=3):
    om = cc.omega_of(p); lam = 2 * math.pi * cc.G / om**2
    rows = []
    for f in glob.glob(f"{p['path']}/length_study/LB_*"):
        m = re.match(r"LB_([\d.]+)$", os.path.basename(f))
        if not m or not os.path.exists(f + "/case.1"): continue
        lb = float(m.group(1)); L = lb * p["B"]
        A, Bd = list(cc.parse_case1_multi(f + "/case.1").values())[0][(dof, dof)]
        a, b = cc.nondim(A, Bd, om, p["B"], L)
        rows.append((L / lam, b, a))
    rows.sort()
    r = np.array(rows)
    return r[:, 0], r[:, 1], r[:, 2]

def first_peak_dip(x, y, xmax=3.0):
    """første lokale topp (berre om han ligg minst 3 % over slutt-nivået) og første dal etter han
    (minst 3 % under toppen), innan L/lambda < xmax"""
    pk = None
    for i in range(1, len(x) - 1):
        if x[i] > xmax: break
        if pk is None and y[i] > y[i-1] and y[i] > y[i+1]:
            if (y[i] - y[-1]) / abs(y[-1]) < 0.03: return None, None
            pk = i
        elif pk is not None and y[i] < y[i-1] and y[i] < y[i+1]:
            if (y[pk] - y[i]) / y[pk] >= 0.03:
                return pk, i
    return pk, None

def main(dof=2):
    cc.style()
    fig, ax = plt.subplots(2, 1, figsize=(9, 7.5), sharex=True, constrained_layout=True)
    for name, p in cc.PEOPLE.items():
        x, b, a = series(p, dof)
        for a_, y in zip(ax, (b, a)):
            a_.plot(x, y, "-o", color=p["color"], lw=2, ms=4.5, markeredgecolor=cc.SURF, markeredgewidth=1.2,
                    label=rf"{name}: $B={p['B']:g}$ m, $\hat\omega={p['w']:g}$", zorder=3)
            ip, idp = first_peak_dip(x, y)
            print(name, "peak", None if ip is None else (round(x[ip], 3), round(y[ip], 3)),
                  "dip", None if idp is None else (round(x[idp], 3), round(y[idp], 3)))
            if ip is not None:
                a_.plot(x[ip], y[ip], "o", ms=16, mfc="none", mec=GREEN, mew=2.8, zorder=5)
            if idp is not None:
                a_.plot(x[idp], y[idp], "o", ms=16, mfc="none", mec=RED, mew=2.8, zorder=5)
    ax[0].set_ylabel(rf"$b_{{{dof}{dof}}}/(\rho\nabla)\,\sqrt{{B/2g}}$")
    ax[1].set_ylabel(rf"$a_{{{dof}{dof}}}/(\rho\nabla)$")
    ax[1].set_xlabel(r"$L/\lambda$")
    ax[0].legend(loc="lower right", frameon=False, fontsize=10)
    cc.finish_axes(ax)
    os.makedirs(os.path.join(HERE, "img"), exist_ok=True)
    out = os.path.join(HERE, "img", "length_overshoot_sway.png" if dof == 2 else "length_overshoot_heave.png")
    fig.savefig(out, dpi=170)
    print("saved", out)

def main_series(p, dof=3):
    L = p["LB"] * p["B"]
    d = cc.parse_case1_multi(f"{p['path']}/main_study/case.1")
    scale = math.sqrt(p["B"] / (2 * cc.G))
    ws, bs, as_ = [], [], []
    for T in sorted(d, reverse=True):
        om = 2 * math.pi / T
        A, Bd = d[T][(dof, dof)]
        a, b = cc.nondim(A, Bd, om, p["B"], L)
        ws.append(om * scale); as_.append(a); bs.append(b)
    return np.array(ws), np.array(bs), np.array(as_)

def lowfreq():
    """hovudstudien i hiv, alle fire, med raud ellipse rundt dei lange bølgjelengdene (låg frekvens)"""
    from matplotlib.patches import Ellipse
    cc.style()
    fig, ax = plt.subplots(2, 1, figsize=(9, 8), sharex=True, constrained_layout=True)
    for name, p in cc.PEOPLE.items():
        w, b, a = main_series(p)
        for a_, y in zip(ax, (b, a)):
            a_.plot(w, y, "-o", color=p["color"], lw=2, ms=4.5, markeredgecolor=cc.SURF, markeredgewidth=1.2,
                    label=rf"{name}: $B={p['B']:g}$ m, $L/B={p['LB']}$", zorder=3)
        lam = math.pi * p["B"] / w**2; ll = p["LB"] * p["B"] / lam
        for k in (0, 1, 2):
            print(name, "w=%.2f" % w[k], "L/lambda=%.3f" % ll[k], "b33=%.3f" % b[k], "a33=%.3f" % a[k])
    ax[0].add_patch(Ellipse((0.2, 0.47), 0.26, 1.0, fill=False, ec=RED, lw=2.4, zorder=6))
    ax[1].add_patch(Ellipse((0.2, 4.2), 0.26, 6.2, fill=False, ec=RED, lw=2.4, zorder=6))
    ax[0].set_ylabel(r"$b_{33}/(\rho\nabla)\,\sqrt{B/2g}$")
    ax[1].set_ylabel(r"$a_{33}/(\rho\nabla)$")
    ax[1].set_xlabel(r"$\hat\omega=\omega\sqrt{B/2g}$")
    ax[0].legend(loc="upper right", frameon=False, fontsize=10.5)
    cc.finish_axes(ax)
    out = os.path.join(HERE, "img", "main_lowfreq_heave.png")
    fig.savefig(out, dpi=170)
    print("saved", out)

def waves_sway(what="zeta"):
    """Øyvind sin hovudstudie i jag: berre bølgjehøgd (modul) ved dei fem sondane, grøn ring rundt det glatte stykket
    ved lange bølgjer. Les config/common/results frå Øyvind sin mappe, endrar ingenting der."""
    from matplotlib.patches import Ellipse
    ROOT = os.path.join(COMP, "..", "Semester project Wamit_oyvind", "Semester project Wamit")
    ROOT = os.path.abspath(ROOT)
    sys.path.insert(0, ROOT)
    cwd = os.getcwd(); os.chdir(ROOT)
    try:
        import config as c, common as cm, results as r
        L = c.MAIN_L_OVER_B * c.B
        oh = np.array(c.MAIN_OMEGA_HATS)
        ys_all, index = cm.main_probe_ys(list(oh))
        series = r.nondim_series(c.MAIN_OUT_DIR, L, oh, select=lambda j: index[j])
        ys, labels = cm.probe_y(), cm.probe_labels()
    finally:
        os.chdir(cwd)
    z = np.array([sr[2][what] for sr in series])      # (frekvensar, sondar), sway = 2
    plabel = [lab + (rf" ({y:.1f} m)" if i < len(c.PROBE_Y_OVER_B) else r" (moves with $\lambda$)")
              for i, (lab, y) in enumerate(zip(labels, ys))]
    cols = ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4"]
    mk = ["o", "s", "^", "D", "v"]; ls = ["-", "-", "-", "--", "-"]
    cc.style()
    fig, ax = plt.subplots(figsize=(8, 5.2), constrained_layout=True)
    for n in range(z.shape[1]):
        ax.plot(oh, z[:, n], marker=mk[n], ls=ls[n], color=cols[n], lw=1.8, ms=5, mec=cc.SURF, mew=0.8, label=plabel[n])
    if what == "zeta":
        ax.add_patch(Ellipse((0.58, 0.40), 1.3, 0.5, angle=40, fill=False, ec=GREEN, lw=2.8, zorder=6))
        ax.add_patch(Ellipse((1.57, 1.40), 1.35, 0.45, angle=48, fill=False, ec=RED, lw=2.8, zorder=6))
        ax.set_ylim(bottom=0)
    ax.set_xlim(0, oh.max() * 1.03)
    ax.set_xlabel(r"$\hat\omega=\omega\sqrt{B/2g}$")
    ax.set_ylabel(r"$\zeta_a/\eta_{2a}$  (modulus)" if what == "zeta" else "phase [deg]")
    if what == "zeta":
        ax.legend(loc="upper left", frameon=False, fontsize=9.5, title="Wave probe position (y from the centreline)", title_fontsize=9.5)
    else:
        ax.legend(loc="upper center", bbox_to_anchor=(0.5, -0.17), ncol=3, frameon=False, fontsize=9.5,
                  title="Wave probe position (y from the centreline)", title_fontsize=9.5)
    cc.finish_axes([ax])
    out = os.path.join(HERE, "img", "main_waves_sway_modulus.png" if what == "zeta" else "main_waves_sway_phase.png")
    fig.savefig(out, dpi=170)
    print("saved", out)

if __name__ == "__main__":
    main()
    lowfreq()
    waves_sway()
    waves_sway("phase")
