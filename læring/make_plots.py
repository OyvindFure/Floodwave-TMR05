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

if __name__ == "__main__":
    main()
