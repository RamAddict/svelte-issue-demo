function d() {
}
function st(t, e) {
  for (const r in e)
    t[r] = e[r];
  return t;
}
function F(t) {
  return t();
}
function J() {
  return /* @__PURE__ */ Object.create(null);
}
function $(t) {
  t.forEach(F);
}
function M(t) {
  return typeof t == "function";
}
function E(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function it(t) {
  return Object.keys(t).length === 0;
}
function at(t, ...e) {
  if (t == null)
    return d;
  const r = t.subscribe(...e);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function tt(t, e, r) {
  t.$$.on_destroy.push(at(e, r));
}
function m(t, e) {
  t.appendChild(e);
}
function h(t, e, r) {
  t.insertBefore(e, r || null);
}
function g(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function y(t) {
  return document.createElement(t);
}
function A(t) {
  return document.createTextNode(t);
}
function K() {
  return A(" ");
}
function et(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function S(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function Q(t, e) {
  const r = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
    e[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = e[n] : n === "__value" ? t.value = t[n] = e[n] : r[n] && r[n].set ? t[n] = e[n] : S(t, n, e[n]);
}
function W(t, e) {
  Object.keys(e).forEach((r) => {
    ct(t, r, e[r]);
  });
}
function ct(t, e, r) {
  e in t ? t[e] = typeof t[e] == "boolean" && r === "" ? !0 : r : S(t, e, r);
}
function lt(t) {
  return Array.from(t.childNodes);
}
function ut(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function P(t) {
  const e = {};
  for (const r of t)
    e[r.name] = r.value;
  return e;
}
let D;
function x(t) {
  D = t;
}
const k = [], N = [], z = [], O = [], ft = Promise.resolve();
let T = !1;
function dt() {
  T || (T = !0, ft.then(v));
}
function U(t) {
  z.push(t);
}
function bt(t) {
  O.push(t);
}
const H = /* @__PURE__ */ new Set();
let C = 0;
function v() {
  const t = D;
  do {
    for (; C < k.length; ) {
      const e = k[C];
      C++, x(e), pt(e.$$);
    }
    for (x(null), k.length = 0, C = 0; N.length; )
      N.pop()();
    for (let e = 0; e < z.length; e += 1) {
      const r = z[e];
      H.has(r) || (H.add(r), r());
    }
    z.length = 0;
  } while (k.length);
  for (; O.length; )
    O.pop()();
  T = !1, H.clear(), x(t);
}
function pt(t) {
  if (t.fragment !== null) {
    t.update(), $(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(U);
  }
}
const j = /* @__PURE__ */ new Set();
let ht;
function R(t, e) {
  t && t.i && (j.delete(t), t.i(e));
}
function X(t, e, r, n) {
  if (t && t.o) {
    if (j.has(t))
      return;
    j.add(t), ht.c.push(() => {
      j.delete(t), n && (r && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function wt(t, e) {
  const r = {}, n = {}, o = { $$scope: 1 };
  let s = t.length;
  for (; s--; ) {
    const l = t[s], i = e[s];
    if (i) {
      for (const c in l)
        c in i || (n[c] = 1);
      for (const c in i)
        o[c] || (r[c] = i[c], o[c] = 1);
      t[s] = i;
    } else
      for (const c in l)
        o[c] = 1;
  }
  for (const l in n)
    l in r || (r[l] = void 0);
  return r;
}
function mt(t, e, r) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = r, r(t.$$.ctx[n]));
}
function Z(t) {
  t && t.c();
}
function B(t, e, r, n) {
  const { fragment: o, after_update: s } = t.$$;
  o && o.m(e, r), n || U(() => {
    const l = t.$$.on_mount.map(F).filter(M);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : $(l), t.$$.on_mount = [];
  }), s.forEach(U);
}
function q(t, e) {
  const r = t.$$;
  r.fragment !== null && ($(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function gt(t, e) {
  t.$$.dirty[0] === -1 && (k.push(t), dt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function V(t, e, r, n, o, s, l, i = [-1]) {
  const c = D;
  x(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: d,
    not_equal: o,
    bound: J(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: J(),
    dirty: i,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  l && l(a.root);
  let f = !1;
  if (a.ctx = r ? r(t, e.props || {}, (b, _, ...u) => {
    const p = u.length ? u[0] : _;
    return a.ctx && o(a.ctx[b], a.ctx[b] = p) && (!a.skip_bound && a.bound[b] && a.bound[b](p), f && gt(t, b)), _;
  }) : [], a.update(), f = !0, $(a.before_update), a.fragment = n ? n(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = lt(e.target);
      a.fragment && a.fragment.l(b), b.forEach(g);
    } else
      a.fragment && a.fragment.c();
    e.intro && R(t.$$.fragment), B(t, e.target, e.anchor, e.customElement), v();
  }
  x(c);
}
let I;
typeof HTMLElement == "function" && (I = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(F).filter(M);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, r) {
    this[t] = r;
  }
  disconnectedCallback() {
    $(this.$$.on_disconnect);
  }
  $destroy() {
    q(this, 1), this.$destroy = d;
  }
  $on(t, e) {
    if (!M(e))
      return d;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(e), () => {
      const n = r.indexOf(e);
      n !== -1 && r.splice(n, 1);
    };
  }
  $set(t) {
    this.$$set && !it(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function yt(t) {
  let e, r, n, o, s, l;
  return {
    c() {
      e = y("div"), r = y("button"), n = A("count is "), o = A(t[0]), this.c = d, S(r, "class", "btn btn-primary");
    },
    m(i, c) {
      h(i, e, c), m(e, r), m(r, n), m(r, o), t[3](r), s || (l = et(r, "click", t[2]), s = !0);
    },
    p(i, [c]) {
      c & 1 && ut(o, i[0]);
    },
    i: d,
    o: d,
    d(i) {
      i && g(e), t[3](null), s = !1, l();
    }
  };
}
function _t(t, e, r) {
  let { count: n = 0 } = e, { btn: o } = e;
  const s = () => {
    r(0, n += 1);
  };
  function l(i) {
    N[i ? "unshift" : "push"](() => {
      o = i, r(1, o);
    });
  }
  return t.$$set = (i) => {
    "count" in i && r(0, n = i.count), "btn" in i && r(1, o = i.btn);
  }, [n, o, s, l];
}
class rt extends I {
  constructor(e) {
    super(), V(
      this,
      {
        target: this.shadowRoot,
        props: P(this.attributes),
        customElement: !0
      },
      _t,
      yt,
      E,
      { count: 0, btn: 1 },
      null
    ), e && (e.target && h(e.target, this, e.anchor), e.props && (this.$set(e.props), v()));
  }
  static get observedAttributes() {
    return ["count", "btn"];
  }
  get count() {
    return this.$$.ctx[0];
  }
  set count(e) {
    this.$$set({ count: e }), v();
  }
  get btn() {
    return this.$$.ctx[1];
  }
  set btn(e) {
    this.$$set({ btn: e }), v();
  }
}
customElements.define("counter-that-counts", rt);
const w = [];
function kt(t, e = d) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function o(i) {
    if (E(t, i) && (t = i, r)) {
      const c = !w.length;
      for (const a of n)
        a[1](), w.push(a, t);
      if (c) {
        for (let a = 0; a < w.length; a += 2)
          w[a][0](w[a + 1]);
        w.length = 0;
      }
    }
  }
  function s(i) {
    o(i(t));
  }
  function l(i, c = d) {
    const a = [i, c];
    return n.add(a), n.size === 1 && (r = e(o) || d), i(t), () => {
      n.delete(a), n.size === 0 && (r(), r = null);
    };
  }
  return { set: o, update: s, subscribe: l };
}
const Y = kt(new Array(1));
function xt(t) {
  let e, r, n, o;
  return {
    c() {
      e = y("div"), r = y("button"), r.textContent = "change color", this.c = d, S(r, "class", "btn btn-info");
    },
    m(s, l) {
      h(s, e, l), m(e, r), n || (o = et(r, "click", t[0]), n = !0);
    },
    p: d,
    i: d,
    o: d,
    d(s) {
      s && g(e), n = !1, o();
    }
  };
}
function vt(t, e, r) {
  let n;
  tt(t, Y, (s) => r(1, n = s));
  function o() {
    console.log("please"), n[0].classList.add("bg-error");
  }
  return [o];
}
class nt extends I {
  constructor(e) {
    super(), V(
      this,
      {
        target: this.shadowRoot,
        props: P(this.attributes),
        customElement: !0
      },
      vt,
      xt,
      E,
      {},
      null
    ), e && e.target && h(e.target, this, e.anchor);
  }
}
customElements.define("change-color", nt);
const $t = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal}button{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button{text-transform:none}button{-webkit-appearance:button;background-color:transparent;background-image:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}button{cursor:pointer}:root{background-color:hsla(var(--b1) / var(--tw-bg-opacity, 1));color:hsla(var(--bc) / var(--tw-text-opacity, 1))}html{-webkit-tap-highlight-color:transparent}:root{color-scheme:light;--pf: 259 94% 41%;--sf: 314 100% 38%;--af: 174 60% 41%;--nf: 219 14% 22%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 259 94% 51%;--pc: 0 0% 100%;--s: 314 100% 47%;--sc: 0 0% 100%;--a: 174 60% 51%;--ac: 175 44% 15%;--n: 219 14% 28%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 95%;--b3: 180 2% 90%;--bc: 215 28% 17%}@media (prefers-color-scheme: dark){:root{color-scheme:dark;--pf: 262 80% 40%;--sf: 316 70% 40%;--af: 175 70% 33%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--p: 262 80% 50%;--pc: 0 0% 100%;--s: 316 70% 50%;--sc: 0 0% 100%;--a: 175 70% 41%;--ac: 0 0% 100%;--n: 218 18% 12%;--nf: 223 17% 8%;--nc: 220 13% 69%;--b1: 220 18% 20%;--b2: 220 17% 17%;--b3: 219 18% 15%;--bc: 220 13% 69%}}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.btn{display:inline-flex;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-color:transparent;border-color:hsl(var(--n) / var(--tw-border-opacity));text-align:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);border-radius:var(--rounded-btn, .5rem);height:3rem;padding-left:1rem;padding-right:1rem;font-size:.875rem;line-height:1.25rem;line-height:1em;min-height:3rem;font-weight:600;text-transform:uppercase;text-transform:var(--btn-text-case, uppercase);text-decoration-line:none;border-width:var(--border-btn, 1px);animation:button-pop var(--animation-btn, .25s) ease-out;--tw-border-opacity: 1;--tw-bg-opacity: 1;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.btn:active:hover,.btn:active:focus{animation:none;transform:scale(var(--btn-focus-scale, .95))}.btn:hover{--tw-border-opacity: 1;border-color:hsl(var(--nf, var(--n)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--nf, var(--n)) / var(--tw-bg-opacity))}.btn:focus-visible{outline:2px solid hsl(var(--nf));outline-offset:2px}.btn-primary{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-primary:hover{--tw-border-opacity: 1;border-color:hsl(var(--pf, var(--p)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf, var(--p)) / var(--tw-bg-opacity))}.btn-primary:focus-visible{outline:2px solid hsl(var(--p))}.btn-info{--tw-border-opacity: 1;border-color:hsl(var(--in) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--in) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))}.btn-info:hover{--tw-border-opacity: 1;border-color:hsl(var(--in) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--in) / var(--tw-bg-opacity))}.btn-info:focus-visible{outline:2px solid hsl(var(--in))}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .95))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}@keyframes progress-loading{50%{left:107%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.bg-error{--tw-bg-opacity: 1;background-color:hsl(var(--er) / var(--tw-bg-opacity))}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}
`;
function L(t) {
  let e, r = [], n = {};
  for (let o = 0; o < r.length; o += 1)
    n = st(n, r[o]);
  return {
    c() {
      e = y("style"), /-/.test("style") ? W(e, n) : Q(e, n);
    },
    m(o, s) {
      h(o, e, s), e.innerHTML = $t;
    },
    p(o, s) {
      n = wt(r, []), /-/.test("style") ? W(e, n) : Q(e, n);
    },
    d(o) {
      o && g(e);
    }
  };
}
function Et(t) {
  let e = "style", r, n, o, s, l, i, c, a, f = L();
  function b(u) {
    t[1](u);
  }
  let _ = {};
  return t[0][0] !== void 0 && (_.btn = t[0][0]), s = new rt({ props: _ }), N.push(() => mt(s, "btn", b)), c = new nt({}), {
    c() {
      f && f.c(), r = K(), n = y("div"), o = A(`Hello!
  `), Z(s.$$.fragment), i = K(), Z(c.$$.fragment), this.c = d, S(n, "class", "font-sans");
    },
    m(u, p) {
      f && f.m(u, p), h(u, r, p), h(u, n, p), m(n, o), B(s, n, null), m(n, i), B(c, n, null), a = !0;
    },
    p(u, [p]) {
      e ? E(e, "style") ? (f.d(1), f = L(), f.c(), f.m(r.parentNode, r)) : f.p(u, p) : (f = L(), f.c(), f.m(r.parentNode, r)), e = "style";
      const G = {};
      !l && p & 1 && (l = !0, G.btn = u[0][0], bt(() => l = !1)), s.$set(G);
    },
    i(u) {
      a || (R(s.$$.fragment, u), R(c.$$.fragment, u), a = !0);
    },
    o(u) {
      X(s.$$.fragment, u), X(c.$$.fragment, u), a = !1;
    },
    d(u) {
      f && f.d(u), u && g(r), u && g(n), q(s), q(c);
    }
  };
}
function St(t, e, r) {
  let n;
  tt(t, Y, (s) => r(0, n = s));
  function o(s) {
    t.$$.not_equal(n[0], s) && (n[0] = s, Y.set(n));
  }
  return [n, o];
}
class ot extends I {
  constructor(e) {
    super(), V(
      this,
      {
        target: this.shadowRoot,
        props: P(this.attributes),
        customElement: !0
      },
      St,
      Et,
      E,
      {},
      null
    ), e && e.target && h(e.target, this, e.anchor);
  }
}
customElements.define("cool-page", ot);
const Ct = new ot({
  target: document.getElementById("app")
});
export {
  Ct as default
};
