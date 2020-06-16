var footer = function(e) {
var t = {};
function n(o) {
if (t[o]) return t[o].exports;
var i = t[o] = {
i: o,
l: !1,
exports: {}
};
return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
}
return n.m = e, n.c = t, n.d = function(e, t, o) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: o
});
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, n.t = function(e, t) {
if (1 & t && (e = n(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var o = Object.create(null);
if (n.r(o), Object.defineProperty(o, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function(t) {
return e[t];
}.bind(null, i));
return o;
}, n.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "/pack/", n(n.s = 313);
}({
0: function(e, t) {
e.exports = {
lang: "en",
currency: {
code: "USD",
sign: "$"
},
env: "production",
ordersMail: "orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google+",
id: "google"
}, {
name: "Github",
id: "github"
} ],
stripeKey: "pk_live_ukCHHaAAUHELtXYFa9EwbROW"
};
},
108: function(e, t) {
function n(e) {
let t = document.createElement("div"), n = getComputedStyle(e);
return t.style.width = e.offsetWidth + "px", t.style.marginLeft = n.marginLeft, 
t.style.marginRight = n.marginRight, t.style.position = n.position, t.style.height = e.offsetHeight + "px", 
t.style.marginBottom = n.marginBottom, t.style.marginTop = n.marginTop, t;
}
e.exports = function() {
let e = document.querySelectorAll("[data-sticky]");
for (let t = 0; t < e.length; t++) {
let o = e[t], i = o.dataset.sticky ? JSON.parse(o.dataset.sticky) : {}, l = i.bottomLimit ? document.querySelector(i.bottomLimit) : null, r = i.container ? document.querySelector(i.container) : document.body, a = !i.minWidth || document.documentElement.clientWidth > i.minWidth;
if (o.placeholder) (o.placeholder.getBoundingClientRect().top > 0 || !a) && (o.style.cssText = "", 
o.classList.remove("sticky"), o.placeholder.parentNode.insertBefore(o, o.placeholder), 
o.placeholder.remove(), o.placeholder = null); else if (o.placeholder && l) l.getBoundingClientRect().top <= o.offsetHeight ? ("fixed" == o.style.position && (o.style.top = window.pageYOffset + "px"), 
o.style.position = "absolute") : (o.style.position = "fixed", o.style.top = 0); else if (o.getBoundingClientRect().top < 0 && a) {
if (o.style.cssText) return;
let e, t;
i.saveRight ? t = document.documentElement.clientWidth - o.getBoundingClientRect().right : e = o.getBoundingClientRect().left;
let l = i.noPlaceholder ? document.createElement("div") : n(o), a = o.offsetWidth;
o.after(l), r.appendChild(o), o.classList.add("sticky"), o.style.position = "fixed", 
o.style.top = 0, i.saveRight ? o.style.right = t + "px" : o.style.left = e + "px", 
o.style.zIndex = 101, o.style.background = "white", o.style.margin = 0, o.style.width = a + "px", 
o.placeholder = l;
}
}
};
},
313: function(e, t, n) {
let o = n(314), i = n(316), l = n(108), r = n(0).lang, a = n(0).currency;
!function() {
o(), window.devicePixelRatio > 1 && i(), window.addEventListener("scroll", l, {
passive: !0
}), window.addEventListener("resize", l, {
passive: !0
}), l();
let e = document.querySelectorAll(".auto-currency");
for (let t = 0; t < e.length; t++) {
let n = e[t];
if ("ru" === r) {
let e = Math.round(parseInt(n.innerHTML) / window.rateUsdToNative);
n.insertAdjacentHTML("beforeEnd", '<span class="auto-currency__usd">(≈$'.concat(e, ")</span>"));
} else if ("USD" !== a.code) {
let e = Math.round(window.rateUsdToNative / parseInt(n.innerHTML));
n.insertAdjacentHTML("beforeEnd", '<span class="auto-currency__usd">(≈'.concat(e).concat(a.sign, ")</span>"));
}
}
}();
},
314: function(e, t, n) {
let o = n(315);
e.exports = function() {
let e = null, t = 8, n = 10;
function i(o) {
let i = o.clientX + t;
i + e.offsetWidth > document.documentElement.clientWidth && (i = Math.max(0, o.clientX - t - e.offsetWidth)), 
e.style.left = i + "px";
let l = o.clientY + n;
l + e.offsetHeight > document.documentElement.clientHeight && (l = Math.max(0, o.clientY - n - e.offsetHeight)), 
e.style.top = l + "px";
}
o("a,[data-tooltip]", function(t) {
t.closest && ("A" == t.tagName && t.closest(".toolbar") || t.classList.contains("button") || ((e = document.createElement("span")).className = "link__type", 
t.getAttribute("data-tooltip") ? (e.innerHTML = t.getAttribute("data-tooltip"), 
e.setAttribute("data-tooltip", "1")) : e.setAttribute("data-url", t.getAttribute("href")), 
document.body.append(e), i(event), document.addEventListener("mousemove", i)));
}, function() {
e && (document.removeEventListener("mousemove", i), e.remove(), e = null);
});
};
},
315: function(e, t) {
let n, o, i = 1 / 0, l = 1 / 0, r = Date.now(), a = .2, c = {};
document.addEventListener("mousemove", function(e) {
if (o) return;
if (Math.sqrt(Math.pow(e.pageX - i, 2) + Math.pow(e.pageY - l, 2)) / (Date.now() - r) < a) {
let t = document.elementFromPoint(e.clientX, e.clientY);
if (!t) return;
if (t !== n) {
for (let e in c) {
let n = t.closest(e);
n && (o = {
elem: n,
out: c[e].out
}, c[e].over(n));
}
n = t;
}
}
i = e.pageX, l = e.pageY, r = Date.now();
}), document.addEventListener("mouseout", function(e) {
if (!o) return;
let t = e.relatedTarget;
for (;t && (!t.hasAttribute("data-tooltip") || t === o.elem); ) {
if (t === o.elem) return;
t = t.parentElement;
}
let {elem: n, out: i} = o;
o = null, i(n);
}), e.exports = function(e, t, n) {
c[e] = {
over: t,
out: n
};
};
},
316: function(e, t) {
e.exports = function() {
let e = document.querySelectorAll('figure img[src$=".png"]');
for (let t = 0; t < e.length; t++) {
let n = e[t];
n.onload = function() {
if (this.onload = null, this.src.match(/@2x.png$/)) return;
let e = new Image();
e.onload = function() {
this.width && this.height && (n.src = this.src);
}, e.src = this.src.replace(".png", "@2x.png");
}, n.complete && n.onload();
}
};
}
});