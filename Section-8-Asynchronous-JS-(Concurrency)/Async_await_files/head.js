var head = function(t) {
function e(e) {
for (var n, i, o = e[0], s = e[1], a = 0, l = []; a < o.length; a++) i = o[a], r[i] && l.push(r[i][0]), 
r[i] = 0;
for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
for (u && u(e); l.length; ) l.shift()();
}
var n = {}, r = {
3: 0
};
function i(e) {
if (n[e]) return n[e].exports;
var r = n[e] = {
i: e,
l: !1,
exports: {}
};
return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
}
i.e = function(t) {
var e = [], n = r[t];
if (0 !== n) if (n) e.push(n[2]); else {
var o = new Promise(function(e, i) {
n = r[t] = [ e, i ];
});
e.push(n[2] = o);
var s, a = document.createElement("script");
a.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.src = function(t) {
return i.p + "" + ({
27: "authClient",
30: "vendors~authClient"
}[t] || t) + "-" + t + ".f40a0e2b4131121fe960.js";
}(t);
var u = new Error();
s = function(e) {
a.onerror = a.onload = null, clearTimeout(l);
var n = r[t];
if (0 !== n) {
if (n) {
var i = e && ("load" === e.type ? "missing" : e.type), o = e && e.target && e.target.src;
u.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", u.type = i, 
u.request = o, n[1](u);
}
r[t] = void 0;
}
};
var l = setTimeout(function() {
s({
type: "timeout",
target: a
});
}, 12e4);
a.onerror = a.onload = s, document.head.appendChild(a);
}
return Promise.all(e);
}, i.m = t, i.c = n, i.d = function(t, e, n) {
i.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: n
});
}, i.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, i.t = function(t, e) {
if (1 & e && (t = i(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var n = Object.create(null);
if (i.r(n), Object.defineProperty(n, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function(e) {
return t[e];
}.bind(null, r));
return n;
}, i.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return i.d(e, "a", e), e;
}, i.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, i.p = "/pack/", i.oe = function(t) {
throw t;
};
var o = window.webpackJsonp_name_ = window.webpackJsonp_name_ || [], s = o.push.bind(o);
o.push = e, o = o.slice();
for (var a = 0; a < o.length; a++) e(o[a]);
var u = s;
return i(i.s = 291);
}({
0: function(t, e) {
t.exports = {
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
10: function(t, e) {
function n(t) {
if (t = t || {}, this.elem = t.elem, this.size = t.size || "medium", this.class = t.class ? " " + t.class : "", 
this.elemClass = t.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
n.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, n.prototype.stop = function() {
let t = this.elem.querySelector(".spinner");
t && (t.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = n, t.exports = n;
},
113: function(t, e) {
var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
"number" == typeof __g && (__g = n);
},
130: function(t, e) {
function n() {
let t = document.querySelector(".page-wrapper");
document.querySelector(".page").classList.toggle("page_sidebar_on"), t && t.classList.toggle("page-wrapper_sidebar_on"), 
document.querySelector(".page").classList.contains("page_sidebar_on") ? delete localStorage.noSidebar : localStorage.noSidebar = 1;
}
document.addEventListener("click", function(t) {
if (!t.target.hasAttribute("data-sidebar-toggle")) return;
n();
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (t.keyCode != "S".charCodeAt(0)) return;
if (~navigator.userAgent.toLowerCase().indexOf("mac os x")) {
if (!t.metaKey || !t.altKey) return;
} else if (!t.altKey) return;
n(), t.preventDefault();
}), function() {
function t() {
let t = document.getElementsByClassName("sidebar__navigation-link_active");
t[0] && t[0].classList.remove("sidebar__navigation-link_active");
let e, n = document.getElementsByTagName("h2");
for (e = 0; e < n.length; e++) {
let t = n[e];
if (t.getBoundingClientRect().top > 1) break;
}
if (--e >= 0) {
let t = n[e].firstElementChild && n[e].firstElementChild.getAttribute("href"), r = document.querySelector('.sidebar__navigation-link a[href="' + t + '"]');
t && r && r.classList.add("sidebar__navigation-link_active");
}
}
document.addEventListener("DOMContentLoaded", function() {
t(), window.addEventListener("scroll", t);
});
}();
},
144: function(t, e) {
let n = new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts;
t.exports = function() {
if (n) return new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts(new Date()).find(t => "timeZoneName" == t.type).value;
let t = -new Date().getTimezoneOffset(), e = new Date().toLocaleTimeString([], {
timeZoneName: "short"
}).split(" ");
return e[0].match(/[+-]/) ? e = e[0] : e[e.length - 1].match(/[+-]/) ? e = e[e.length - 1] : e[e.length - 1].match(/[A-Z]{2,}/) ? e = e[e.length - 1] : (e = "GMT", 
t > 0 && (e += "+" + t / 60), t < 0 && (e += "-" + -t / 60)), e;
};
},
146: function(t, e, n) {
let r = n(213);
t.exports = class {
constructor(t) {
this.elem = t, this.renderPromise = new Promise((t, e) => {
this.renderPromiseResolve = t, this.renderPromiseReject = e;
}), this.render();
}
async render() {
if (!window.RECAPTCHA_ID) return;
if (void 0 !== this.widgetId) return;
await r();
let t = document.createElement("div");
this.elem.append(t), this.widgetId = grecaptcha.render(t, {
sitekey: window.RECAPTCHA_ID,
size: "invisible",
callback: this.renderPromiseResolve
});
}
async execute() {
if (!window.RECAPTCHA_ID) return "";
await this.render();
let t = grecaptcha.getResponse(this.widgetId);
return t || (grecaptcha.execute(this.widgetId), this.renderPromise);
}
async validateForm(t) {
if (!window.RECAPTCHA_ID) return;
let e = await this.execute(), n = t.elements["g-recaptcha-response"];
n || ((n = document.createElement("input")).name = "g-recaptcha-response", n.type = "hidden", 
t.append(n)), n.value = e;
}
};
},
17: function(t, e, n) {
var r = n(113), i = n(286), o = n(327), s = n(288), a = n(335), u = function(t, e, n) {
var l, c, d, h, f = t & u.F, m = t & u.G, _ = t & u.S, p = t & u.P, y = t & u.B, g = m ? r : _ ? r[e] || (r[e] = {}) : (r[e] || {}).prototype, w = m ? i : i[e] || (i[e] = {}), v = w.prototype || (w.prototype = {});
for (l in m && (n = e), n) d = ((c = !f && g && void 0 !== g[l]) ? g : n)[l], h = y && c ? a(d, r) : p && "function" == typeof d ? a(Function.call, d) : d, 
g && s(g, l, d, t & u.U), w[l] != d && o(w, l, h), p && v[l] != d && (v[l] = d);
};
r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, 
t.exports = u;
},
2: function(t, e, n) {
"use strict";
n.r(e), n.d(e, "init", function() {
return o;
}), n.d(e, "Info", function() {
return a;
}), n.d(e, "Warning", function() {
return u;
}), n.d(e, "Success", function() {
return l;
}), n.d(e, "Error", function() {
return c;
});
let r = n(3);
class i {
constructor(t = {}) {
this.notifications = [], this.verticalSpace = t.verticalSpace || 8;
}
register(t) {
this.notifications.unshift(t), setTimeout(() => this.recalculate(), 20);
}
unregister(t) {
let e = this.notifications.indexOf(t);
this.notifications.splice(e, 1), this.recalculate();
}
recalculate() {
let t = this.verticalSpace;
this.notifications.forEach(e => {
e.top = t, t += e.height + this.verticalSpace;
});
}
}
function o(t) {
window.notificationManager || (window.notificationManager = new i(t));
}
class s {
constructor(t, e, n) {
let r = '<div class="notification notification_popup notification_'.concat(e, '">\n    <div class="notification__content">').concat(t, '</div>\n    <button title="Закрыть" class="notification__close"></button></div>');
switch (document.body.insertAdjacentHTML("beforeEnd", r), this.elem = document.body.lastElementChild, 
n) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = n;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 3e3;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", () => this.close());
}
setupCloseTimeout() {
this.timeout && setTimeout(() => this.close(), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(t) {
this.elem.style.transform = "translateY(" + t + "px)";
}
}
r.delegateMixin(s.prototype);
class a extends s {
constructor(t, e) {
super(t, "info", e);
}
}
class u extends s {
constructor(t, e) {
super(t, "warning", e);
}
}
class l extends s {
constructor(t, e) {
super(t, "success", e);
}
}
class c extends s {
constructor(t, e) {
super(t, "error", e);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
},
20: function(t, e, n) {
n(21), t.exports = n(286).String.matchAll;
},
208: function(t, e, n) {
!function(t) {
"use strict";
t.defineLocale("en-SG", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY HH:mm",
LLLL: "dddd, D MMMM YYYY HH:mm"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10, n = 1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
return t + n;
},
week: {
dow: 1,
doy: 4
}
});
}(n(4));
},
21: function(t, e, n) {
"use strict";
var r = n(17), i = n(338), o = n(287), s = n(439), a = n(446), u = RegExp.prototype, l = function(t, e) {
this._r = t, this._s = e;
};
n(463)(l, "RegExp String", function() {
var t = this._r.exec(this._s);
return {
value: t,
done: null === t
};
}), r(r.P, "String", {
matchAll: function(t) {
if (i(this), !s(t)) throw TypeError(t + " is not a regexp!");
var e = String(this), n = "flags" in u ? String(t.flags) : a.call(t), r = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
return r.lastIndex = o(t.lastIndex), new l(r, e);
}
});
},
210: function(t, e, n) {
let r = n(53), i = n(144);
class o extends HTMLElement {
constructor() {
super(), this.render();
}
connectedCallback() {
this.render();
}
static get observedAttributes() {
return [ "except" ];
}
attributeChangedCallback(t, e, n) {
this.render();
}
format(t, e, n) {
let o = r(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (o += " " + i()), o;
}
render() {
let t = [ "except" ].map(t => this.getAttribute(t)).join(":");
if (this.lastParams === t) return;
if (this.lastParams = t, "{" === this.getAttribute("except")[0]) return;
if (!this.getAttribute("except")) return;
let e = this.getAttribute("except").split(",").map(t => new Date(t)), n = [];
for (let t = 0; t < e.length; t++) {
let i = e[t], o = e[t + 1], s = !o || o.getMonth() != i.getMonth(), a = r(i).utcOffset(-new Date().getTimezoneOffset()).format(s ? "D MMM" : "D");
n.push(a);
}
this.innerHTML = "(кроме ".concat(n.join(", "), ")");
}
}
window.DateExceptElement = o, window.customElements.define("date-except", o);
},
213: function(t, e) {
let n;
t.exports = async function() {
if (window.RECAPTCHA_ID) return n || (n = new Promise((t, e) => {
window.recaptchaCallback = t;
let n = document.createElement("script");
n.src = "https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit", 
n.onerror = e, document.head.appendChild(n);
}));
};
},
214: function(t, e, n) {
e.Recaptcha = n(146), e.initForms = n(215);
},
215: function(t, e, n) {
let r = n(213), i = n(146);
t.exports = async function() {
let t = document.querySelectorAll("[data-recaptcha-submit]");
if (t.length) {
for (let e of t) e.disabled = !0;
await r();
for (let e of t) {
let t = e.form, n = new i(t);
t.onsubmit = (async e => {
e.preventDefault(), await n.validateForm(t), t.checkValidity() ? t.submit() : t.reportValidity();
}), e.disabled = !1;
}
}
};
},
281: function(t, e) {
t.exports = function(t) {
return "object" == typeof t ? null !== t : "function" == typeof t;
};
},
282: function(t, e, n) {
var r = n(281);
t.exports = function(t) {
if (!r(t)) throw TypeError(t + " is not an object!");
return t;
};
},
283: function(t, e, n) {
var r = n(425)("wks"), i = n(344), o = n(113).Symbol, s = "function" == typeof o;
(t.exports = function(t) {
return r[t] || (r[t] = s && o[t] || (s ? o : i)("Symbol." + t));
}).store = r;
},
284: function(t, e, n) {
var r = n(282), i = n(449), o = n(341), s = Object.defineProperty;
e.f = n(285) ? Object.defineProperty : function(t, e, n) {
if (r(t), e = o(e, !0), r(n), i) try {
return s(t, e, n);
} catch (t) {}
if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
return "value" in n && (t[e] = n.value), t;
};
},
285: function(t, e, n) {
t.exports = !n(93)(function() {
return 7 != Object.defineProperty({}, "a", {
get: function() {
return 7;
}
}).a;
});
},
286: function(t, e) {
var n = t.exports = {
version: "2.6.9"
};
"number" == typeof __e && (__e = n);
},
287: function(t, e, n) {
var r = n(339), i = Math.min;
t.exports = function(t) {
return t > 0 ? i(r(t), 9007199254740991) : 0;
};
},
288: function(t, e, n) {
var r = n(113), i = n(327), o = n(290), s = n(344)("src"), a = n(35), u = ("" + a).split("toString");
n(286).inspectSource = function(t) {
return a.call(t);
}, (t.exports = function(t, e, n, a) {
var l = "function" == typeof n;
l && (o(n, "name") || i(n, "name", e)), t[e] !== n && (l && (o(n, s) || i(n, s, t[e] ? "" + t[e] : u.join(String(e)))), 
t === r ? t[e] = n : a ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
})(Function.prototype, "toString", function() {
return "function" == typeof this && this[s] || a.call(this);
});
},
290: function(t, e) {
var n = {}.hasOwnProperty;
t.exports = function(t, e) {
return n.call(t, e);
};
},
291: function(t, e, n) {
n(292), e.login = n(300), n(301), e.resizeOnload = n(58), n(302), n(303), n(130), 
n(305), n(307), n(308), n(309), n(2).init(), n(214).initForms(), n(310), n(210), 
n(311);
},
292: function(t, e, n) {
n(293), n(299);
},
293: function(t, e, n) {
function r(t) {
if (t.length) {
if (1 === t.length) return "string" == typeof t[0] ? document.createTextNode(t[0]) : t[0];
{
let e, n = document.createDocumentFragment(), r = t.length, i = -1;
for (;++i < r; ) e = t[i], n.appendChild("string" == typeof e ? document.createTextNode(e) : e);
return n;
}
}
throw new Error("DOM Exception 8");
}
let i = {
matches: Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
replace() {
this.parentNode && this.parentNode.replaceChild(r(arguments), this);
},
prepend() {
this.insertBefore(r(arguments), this.firstChild);
},
append() {
this.appendChild(r(arguments));
},
remove() {
let t = this.parentNode;
if (t) return t.removeChild(this);
},
before: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this);
},
after: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this.nextSibling);
},
closest: function(t) {
let e = this;
for (;e; ) {
if (e.matches && e.matches(t)) return e;
e = e.parentElement;
}
return null;
}
};
for (let t in i) Element.prototype[t] || (Element.prototype[t] = i[t]);
n(294), n(295), n(296), n(297), n(298);
},
294: function(t, e) {
try {
new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (t) {
window.CustomEvent = function(t, e) {
let n;
return e = e || {
bubbles: !1,
cancelable: !1,
detail: void 0
}, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), 
n;
}, CustomEvent.prototype = Object.create(window.Event.prototype);
}
},
295: function(t, e) {
if (!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
let t = {
enumerable: !0,
get: function() {
"use strict";
let t, e, n, r, i, o, s = this, a = this.attributes, u = a.length, l = function(t) {
return t.charAt(1).toUpperCase();
}, c = function() {
return this;
}, d = function(t, e) {
return void 0 !== e ? this.setAttribute(t, e) : this.removeAttribute(t);
};
try {
({}).__defineGetter__("test", function() {}), e = {};
} catch (t) {
e = document.createElement("div");
}
for (t = 0; t < u; t++) if ((o = a[t]) && o.name && /^data-\w[\w\-]*$/.test(o.name)) {
n = o.value, i = (r = o.name).substr(5).replace(/-./g, l);
try {
Object.defineProperty(e, i, {
enumerable: this.enumerable,
get: c.bind(n || ""),
set: d.bind(s, r)
});
} catch (t) {
e[i] = n;
}
}
return e;
}
};
try {
Object.defineProperty(Element.prototype, "dataset", t);
} catch (e) {
t.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", t);
}
}
},
296: function(t, e) {
void 0 === document.documentElement.hidden && (document.head.insertAdjacentHTML("beforeEnd", "<style> [hidden] { display: none } </style>"), 
Object.defineProperty(Element.prototype, "hidden", {
set: function(t) {
this.setAttribute("hidden", t);
},
get: function() {
return this.getAttribute("hidden");
}
}));
},
297: function(t, e) {
!function() {
let t = 0;
window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
let r = new Date().getTime(), i = Math.max(0, 16 - (r - t)), o = window.setTimeout(function() {
e(r + i);
}, i);
return t = r + i, o;
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
clearTimeout(t);
});
}();
},
298: function(t, e) {
(function() {
"use strict";
var t = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
function e(e) {
var n = t.has(e);
return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e), !n && e;
}
function n(t) {
var e = t.isConnected;
if (void 0 !== e) return e;
for (;t && !(t.__CE_isImportDocument || t instanceof Document); ) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
}
function r(t, e) {
for (;e && e !== t && !e.nextSibling; ) e = e.parentNode;
return e && e !== t ? e.nextSibling : null;
}
function i(t, e, n) {
n = void 0 === n ? new Set() : n;
for (var o = t; o; ) {
if (o.nodeType === Node.ELEMENT_NODE) {
var s = o;
e(s);
var a = s.localName;
if ("link" === a && "import" === s.getAttribute("rel")) {
if ((o = s.import) instanceof Node && !n.has(o)) for (n.add(o), o = o.firstChild; o; o = o.nextSibling) i(o, e, n);
o = r(t, s);
continue;
}
if ("template" === a) {
o = r(t, s);
continue;
}
if (s = s.__CE_shadowRoot) for (s = s.firstChild; s; s = s.nextSibling) i(s, e, n);
}
o = o.firstChild ? o.firstChild : r(t, o);
}
}
function o(t, e, n) {
t[e] = n;
}
function s() {
this.a = new Map(), this.g = new Map(), this.c = [], this.f = [], this.b = !1;
}
function a(t, e) {
t.b && i(e, function(e) {
return u(t, e);
});
}
function u(t, e) {
if (t.b && !e.__CE_patched) {
e.__CE_patched = !0;
for (var n = 0; n < t.c.length; n++) t.c[n](e);
for (n = 0; n < t.f.length; n++) t.f[n](e);
}
}
function l(t, e) {
var n = [];
for (i(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var r = n[e];
1 === r.__CE_state ? t.connectedCallback(r) : h(t, r);
}
}
function c(t, e) {
var n = [];
for (i(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var r = n[e];
1 === r.__CE_state && t.disconnectedCallback(r);
}
}
function d(t, e, n) {
var r = (n = void 0 === n ? {} : n).u || new Set(), o = n.i || function(e) {
return h(t, e);
}, s = [];
if (i(e, function(e) {
if ("link" === e.localName && "import" === e.getAttribute("rel")) {
var n = e.import;
n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", function() {
var n = e.import;
if (!n.__CE_documentLoadHandled) {
n.__CE_documentLoadHandled = !0;
var i = new Set(r);
i.delete(n), d(t, n, {
u: i,
i: o
});
}
});
} else s.push(e);
}, r), t.b) for (e = 0; e < s.length; e++) u(t, s[e]);
for (e = 0; e < s.length; e++) o(s[e]);
}
function h(t, e) {
if (void 0 === e.__CE_state) {
var r = e.ownerDocument;
if ((r.defaultView || r.__CE_isImportDocument && r.__CE_hasRegistry) && (r = t.a.get(e.localName))) {
r.constructionStack.push(e);
var i = r.constructorFunction;
try {
try {
if (new i() !== e) throw Error("The custom element constructor did not produce the element being upgraded.");
} finally {
r.constructionStack.pop();
}
} catch (t) {
throw e.__CE_state = 2, t;
}
if (e.__CE_state = 1, e.__CE_definition = r, r.attributeChangedCallback) for (r = r.observedAttributes, 
i = 0; i < r.length; i++) {
var o = r[i], s = e.getAttribute(o);
null !== s && t.attributeChangedCallback(e, o, null, s, null);
}
n(e) && t.connectedCallback(e);
}
}
}
function f(t) {
var e = document;
this.c = t, this.a = e, this.b = void 0, d(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), 
this.b.observe(this.a, {
childList: !0,
subtree: !0
}));
}
function m(t) {
t.b && t.b.disconnect();
}
function _(t) {
if (t.a) throw Error("Already resolved.");
t.a = void 0, t.b && t.b(void 0);
}
function p(t) {
this.c = !1, this.a = t, this.j = new Map(), this.f = function(t) {
return t();
}, this.b = !1, this.g = [], this.o = new f(t);
}
s.prototype.connectedCallback = function(t) {
var e = t.__CE_definition;
e.connectedCallback && e.connectedCallback.call(t);
}, s.prototype.disconnectedCallback = function(t) {
var e = t.__CE_definition;
e.disconnectedCallback && e.disconnectedCallback.call(t);
}, s.prototype.attributeChangedCallback = function(t, e, n, r, i) {
var o = t.__CE_definition;
o.attributeChangedCallback && -1 < o.observedAttributes.indexOf(e) && o.attributeChangedCallback.call(t, e, n, r, i);
}, f.prototype.f = function(t) {
var e = this.a.readyState;
for ("interactive" !== e && "complete" !== e || m(this), e = 0; e < t.length; e++) for (var n = t[e].addedNodes, r = 0; r < n.length; r++) d(this.c, n[r]);
}, p.prototype.l = function(t, n) {
var r = this;
if (!(n instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
if (!e(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
if (this.a.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
if (this.c) throw Error("A custom element is already being defined.");
this.c = !0;
try {
var i = function(t) {
var e = o[t];
if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
return e;
}, o = n.prototype;
if (!(o instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
var s = i("connectedCallback"), a = i("disconnectedCallback"), u = i("adoptedCallback"), l = i("attributeChangedCallback"), c = n.observedAttributes || [];
} catch (t) {
return;
} finally {
this.c = !1;
}
n = {
localName: t,
constructorFunction: n,
connectedCallback: s,
disconnectedCallback: a,
adoptedCallback: u,
attributeChangedCallback: l,
observedAttributes: c,
constructionStack: []
}, function(t, e, n) {
t.a.set(e, n), t.g.set(n.constructorFunction, n);
}(this.a, t, n), this.g.push(n), this.b || (this.b = !0, this.f(function() {
return function(t) {
if (!1 !== t.b) {
t.b = !1;
for (var e = t.g, n = [], r = new Map(), i = 0; i < e.length; i++) r.set(e[i].localName, []);
for (d(t.a, document, {
i: function(e) {
if (void 0 === e.__CE_state) {
var i = e.localName, o = r.get(i);
o ? o.push(e) : t.a.a.get(i) && n.push(e);
}
}
}), i = 0; i < n.length; i++) h(t.a, n[i]);
for (;0 < e.length; ) {
var o = e.shift();
i = o.localName, o = r.get(o.localName);
for (var s = 0; s < o.length; s++) h(t.a, o[s]);
(i = t.j.get(i)) && _(i);
}
}
}(r);
}));
}, p.prototype.i = function(t) {
d(this.a, t);
}, p.prototype.get = function(t) {
if (t = this.a.a.get(t)) return t.constructorFunction;
}, p.prototype.m = function(t) {
if (!e(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
var n = this.j.get(t);
return n ? n.c : (n = new function() {
var t = this;
this.b = this.a = void 0, this.c = new Promise(function(e) {
t.b = e, t.a && e(t.a);
});
}(), this.j.set(t, n), this.a.a.get(t) && !this.g.some(function(e) {
return e.localName === t;
}) && _(n), n.c);
}, p.prototype.s = function(t) {
m(this.o);
var e = this.f;
this.f = function(n) {
return t(function() {
return e(n);
});
};
}, window.CustomElementRegistry = p, p.prototype.define = p.prototype.l, p.prototype.upgrade = p.prototype.i, 
p.prototype.get = p.prototype.get, p.prototype.whenDefined = p.prototype.m, p.prototype.polyfillWrapFlushCallback = p.prototype.s;
var y = window.Document.prototype.createElement, g = window.Document.prototype.createElementNS, w = window.Document.prototype.importNode, v = window.Document.prototype.prepend, M = window.Document.prototype.append, b = window.DocumentFragment.prototype.prepend, S = window.DocumentFragment.prototype.append, D = window.Node.prototype.cloneNode, T = window.Node.prototype.appendChild, k = window.Node.prototype.insertBefore, Y = window.Node.prototype.removeChild, L = window.Node.prototype.replaceChild, E = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), x = window.Element.prototype.attachShadow, O = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), C = window.Element.prototype.getAttribute, A = window.Element.prototype.setAttribute, P = window.Element.prototype.removeAttribute, H = window.Element.prototype.getAttributeNS, N = window.Element.prototype.setAttributeNS, F = window.Element.prototype.removeAttributeNS, W = window.Element.prototype.insertAdjacentElement, j = window.Element.prototype.insertAdjacentHTML, R = window.Element.prototype.prepend, U = window.Element.prototype.append, I = window.Element.prototype.before, G = window.Element.prototype.after, V = window.Element.prototype.replaceWith, z = window.Element.prototype.remove, q = window.HTMLElement, J = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), Z = window.HTMLElement.prototype.insertAdjacentElement, B = window.HTMLElement.prototype.insertAdjacentHTML, $ = new function() {}();
function X(t, e, r) {
function i(e) {
return function(r) {
for (var i = [], o = 0; o < arguments.length; ++o) i[o] = arguments[o];
o = [];
for (var s = [], a = 0; a < i.length; a++) {
var u = i[a];
if (u instanceof Element && n(u) && s.push(u), u instanceof DocumentFragment) for (u = u.firstChild; u; u = u.nextSibling) o.push(u); else o.push(u);
}
for (e.apply(this, i), i = 0; i < s.length; i++) c(t, s[i]);
if (n(this)) for (i = 0; i < o.length; i++) (s = o[i]) instanceof Element && l(t, s);
};
}
void 0 !== r.h && (e.prepend = i(r.h)), void 0 !== r.append && (e.append = i(r.append));
}
var K, Q = window.customElements;
if (!Q || Q.forcePolyfill || "function" != typeof Q.define || "function" != typeof Q.get) {
var tt = new s();
K = tt, window.HTMLElement = function() {
function t() {
var t = this.constructor, e = K.g.get(t);
if (!e) throw Error("The custom element being constructed was not registered with `customElements`.");
var n = e.constructionStack;
if (0 === n.length) return n = y.call(document, e.localName), Object.setPrototypeOf(n, t.prototype), 
n.__CE_state = 1, n.__CE_definition = e, u(K, n), n;
var r = n[e = n.length - 1];
if (r === $) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
return n[e] = $, Object.setPrototypeOf(r, t.prototype), u(K, r), r;
}
return t.prototype = q.prototype, Object.defineProperty(t.prototype, "constructor", {
writable: !0,
configurable: !0,
enumerable: !1,
value: t
}), t;
}(), function() {
var t = tt;
o(Document.prototype, "createElement", function(e) {
if (this.__CE_hasRegistry) {
var n = t.a.get(e);
if (n) return new n.constructorFunction();
}
return e = y.call(this, e), u(t, e), e;
}), o(Document.prototype, "importNode", function(e, n) {
return e = w.call(this, e, !!n), this.__CE_hasRegistry ? d(t, e) : a(t, e), e;
}), o(Document.prototype, "createElementNS", function(e, n) {
if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
var r = t.a.get(n);
if (r) return new r.constructorFunction();
}
return e = g.call(this, e, n), u(t, e), e;
}), X(t, Document.prototype, {
h: v,
append: M
});
}(), X(tt, DocumentFragment.prototype, {
h: b,
append: S
}), function() {
function t(t, r) {
Object.defineProperty(t, "textContent", {
enumerable: r.enumerable,
configurable: !0,
get: r.get,
set: function(t) {
if (this.nodeType === Node.TEXT_NODE) r.set.call(this, t); else {
var i = void 0;
if (this.firstChild) {
var o = this.childNodes, s = o.length;
if (0 < s && n(this)) {
i = Array(s);
for (var a = 0; a < s; a++) i[a] = o[a];
}
}
if (r.set.call(this, t), i) for (t = 0; t < i.length; t++) c(e, i[t]);
}
}
});
}
var e = tt;
o(Node.prototype, "insertBefore", function(t, r) {
if (t instanceof DocumentFragment) {
var i = Array.prototype.slice.apply(t.childNodes);
if (t = k.call(this, t, r), n(this)) for (r = 0; r < i.length; r++) l(e, i[r]);
return t;
}
return i = n(t), r = k.call(this, t, r), i && c(e, t), n(this) && l(e, t), r;
}), o(Node.prototype, "appendChild", function(t) {
if (t instanceof DocumentFragment) {
var r = Array.prototype.slice.apply(t.childNodes);
if (t = T.call(this, t), n(this)) for (var i = 0; i < r.length; i++) l(e, r[i]);
return t;
}
return r = n(t), i = T.call(this, t), r && c(e, t), n(this) && l(e, t), i;
}), o(Node.prototype, "cloneNode", function(t) {
return t = D.call(this, !!t), this.ownerDocument.__CE_hasRegistry ? d(e, t) : a(e, t), 
t;
}), o(Node.prototype, "removeChild", function(t) {
var r = n(t), i = Y.call(this, t);
return r && c(e, t), i;
}), o(Node.prototype, "replaceChild", function(t, r) {
if (t instanceof DocumentFragment) {
var i = Array.prototype.slice.apply(t.childNodes);
if (t = L.call(this, t, r), n(this)) for (c(e, r), r = 0; r < i.length; r++) l(e, i[r]);
return t;
}
i = n(t);
var o = L.call(this, t, r), s = n(this);
return s && c(e, r), i && c(e, t), s && l(e, t), o;
}), E && E.get ? t(Node.prototype, E) : function(t, e) {
t.b = !0, t.c.push(e);
}(e, function(e) {
t(e, {
enumerable: !0,
configurable: !0,
get: function() {
for (var t = [], e = 0; e < this.childNodes.length; e++) {
var n = this.childNodes[e];
n.nodeType !== Node.COMMENT_NODE && t.push(n.textContent);
}
return t.join("");
},
set: function(t) {
for (;this.firstChild; ) Y.call(this, this.firstChild);
null != t && "" !== t && T.call(this, document.createTextNode(t));
}
});
});
}(), function() {
function t(t, e) {
Object.defineProperty(t, "innerHTML", {
enumerable: e.enumerable,
configurable: !0,
get: e.get,
set: function(t) {
var r = this, o = void 0;
if (n(this) && (o = [], i(this, function(t) {
t !== r && o.push(t);
})), e.set.call(this, t), o) for (var u = 0; u < o.length; u++) {
var l = o[u];
1 === l.__CE_state && s.disconnectedCallback(l);
}
return this.ownerDocument.__CE_hasRegistry ? d(s, this) : a(s, this), t;
}
});
}
function e(t, e) {
o(t, "insertAdjacentElement", function(t, r) {
var i = n(r);
return t = e.call(this, t, r), i && c(s, r), n(t) && l(s, r), t;
});
}
function r(t, e) {
function n(t, e) {
for (var n = []; t !== e; t = t.nextSibling) n.push(t);
for (e = 0; e < n.length; e++) d(s, n[e]);
}
o(t, "insertAdjacentHTML", function(t, r) {
if ("beforebegin" === (t = t.toLowerCase())) {
var i = this.previousSibling;
e.call(this, t, r), n(i || this.parentNode.firstChild, this);
} else if ("afterbegin" === t) i = this.firstChild, e.call(this, t, r), n(this.firstChild, i); else if ("beforeend" === t) i = this.lastChild, 
e.call(this, t, r), n(i || this.firstChild, null); else {
if ("afterend" !== t) throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
i = this.nextSibling, e.call(this, t, r), n(this.nextSibling, i);
}
});
}
var s = tt;
x && o(Element.prototype, "attachShadow", function(t) {
t = x.call(this, t);
var e = s;
if (e.b && !t.__CE_patched) {
t.__CE_patched = !0;
for (var n = 0; n < e.c.length; n++) e.c[n](t);
}
return this.__CE_shadowRoot = t;
}), O && O.get ? t(Element.prototype, O) : J && J.get ? t(HTMLElement.prototype, J) : function(t, e) {
t.b = !0, t.f.push(e);
}(s, function(e) {
t(e, {
enumerable: !0,
configurable: !0,
get: function() {
return D.call(this, !0).innerHTML;
},
set: function(t) {
var e = "template" === this.localName, n = e ? this.content : this, r = g.call(document, this.namespaceURI, this.localName);
for (r.innerHTML = t; 0 < n.childNodes.length; ) Y.call(n, n.childNodes[0]);
for (t = e ? r.content : r; 0 < t.childNodes.length; ) T.call(n, t.childNodes[0]);
}
});
}), o(Element.prototype, "setAttribute", function(t, e) {
if (1 !== this.__CE_state) return A.call(this, t, e);
var n = C.call(this, t);
A.call(this, t, e), e = C.call(this, t), s.attributeChangedCallback(this, t, n, e, null);
}), o(Element.prototype, "setAttributeNS", function(t, e, n) {
if (1 !== this.__CE_state) return N.call(this, t, e, n);
var r = H.call(this, t, e);
N.call(this, t, e, n), n = H.call(this, t, e), s.attributeChangedCallback(this, e, r, n, t);
}), o(Element.prototype, "removeAttribute", function(t) {
if (1 !== this.__CE_state) return P.call(this, t);
var e = C.call(this, t);
P.call(this, t), null !== e && s.attributeChangedCallback(this, t, e, null, null);
}), o(Element.prototype, "removeAttributeNS", function(t, e) {
if (1 !== this.__CE_state) return F.call(this, t, e);
var n = H.call(this, t, e);
F.call(this, t, e);
var r = H.call(this, t, e);
n !== r && s.attributeChangedCallback(this, e, n, r, t);
}), Z ? e(HTMLElement.prototype, Z) : W && e(Element.prototype, W), B ? r(HTMLElement.prototype, B) : j && r(Element.prototype, j), 
X(s, Element.prototype, {
h: R,
append: U
}), function(t) {
function e(e) {
return function(r) {
for (var i = [], o = 0; o < arguments.length; ++o) i[o] = arguments[o];
o = [];
for (var s = [], a = 0; a < i.length; a++) {
var u = i[a];
if (u instanceof Element && n(u) && s.push(u), u instanceof DocumentFragment) for (u = u.firstChild; u; u = u.nextSibling) o.push(u); else o.push(u);
}
for (e.apply(this, i), i = 0; i < s.length; i++) c(t, s[i]);
if (n(this)) for (i = 0; i < o.length; i++) (s = o[i]) instanceof Element && l(t, s);
};
}
var r = Element.prototype;
void 0 !== I && (r.before = e(I)), void 0 !== I && (r.after = e(G)), void 0 !== V && o(r, "replaceWith", function(e) {
for (var r = [], i = 0; i < arguments.length; ++i) r[i] = arguments[i];
i = [];
for (var o = [], s = 0; s < r.length; s++) {
var a = r[s];
if (a instanceof Element && n(a) && o.push(a), a instanceof DocumentFragment) for (a = a.firstChild; a; a = a.nextSibling) i.push(a); else i.push(a);
}
for (s = n(this), V.apply(this, r), r = 0; r < o.length; r++) c(t, o[r]);
if (s) for (c(t, this), r = 0; r < i.length; r++) (o = i[r]) instanceof Element && l(t, o);
}), void 0 !== z && o(r, "remove", function() {
var e = n(this);
z.call(this), e && c(t, this);
});
}(s);
}(), document.__CE_hasRegistry = !0;
var et = new p(tt);
Object.defineProperty(window, "customElements", {
configurable: !0,
enumerable: !0,
value: et
});
}
}).call(self);
},
299: function(t, e, n) {
n(20), String.prototype.startsWith || (String.prototype.startsWith = function(t) {
let e = arguments.length < 2 ? 0 : arguments[1];
return 0 === this.slice(e).indexOf(t);
}), String.prototype.endsWith || (String.prototype.endsWith = function(t) {
let e = arguments.length < 2 ? this.length : arguments[1], n = this.lastIndexOf(t);
return -1 !== n && n === e - t.length;
}), String.prototype.includes || (String.prototype.includes = function(t, e) {
if ("object" == typeof t && t instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
return -1 !== this.indexOf(t, e);
}), String.prototype.padStart || (String.prototype.padStart = function(t, e) {
return t >>= 0, e = String(void 0 !== e ? e : " "), this.length >= t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), 
e.slice(0, t) + String(this));
});
},
3: function(t, e) {
function n(t, e, n, r, i) {
t.addEventListener(n, function(t) {
let n = function(t, e) {
let n = t.target;
for (;n; ) {
if (n.matches(e)) return n;
if (n == t.currentTarget) break;
n = n.parentElement;
}
return null;
}(t, e);
t.delegateTarget = n, n && r.call(i || this, t);
});
}
n.delegateMixin = function(t) {
t.delegate = function(t, e, r) {
n(this.elem, t, e, r, this);
};
}, t.exports = n;
},
300: function(t, e, n) {
let r = n(10);
for (let t of document.querySelectorAll("[data-action-login]")) for (let e of t.classList) e.endsWith("_unready") && t.classList.remove(e);
function i(t) {
let e = new Modal({
hasClose: !1,
mixClass: "login-modal"
}), i = new r();
e.setContent(i.elem), i.start(), Promise.all([ n.e(30), n.e(27) ]).then(function() {
e.remove(), new (n(73))(t);
}.bind(null, n)).catch(n.oe);
}
document.addEventListener("click", function(t) {
if (!t.target.hasAttribute("data-action-login")) return;
let e = {
email: t.target.getAttribute("data-action-login")
};
t.preventDefault(), i(e);
}), t.exports = i;
},
301: function(t, e) {
function n() {
let t = document.createElement("form");
t.method = "POST", t.action = "/auth/logout?_csrf=" + document.cookie.match(/XSRF-TOKEN=([\w-]+)/)[1], 
document.body.appendChild(t), t.submit();
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-user-logout") && (t.preventDefault(), n());
}), t.exports = n;
},
302: function(t, e, n) {
const r = n(665).loadDisqus, i = n(665).loadDisqusComments, o = n(665).loadDisqusIfVisible;
let s;
let a = 840;
function u() {
s || (s = window.requestAnimationFrame(function() {
!function() {
let t = document.querySelector(".sitetoolbar");
if (!t) return;
let e = document.querySelector(".sidebar");
if (e) {
const n = document.querySelector(".page"), r = n.classList.contains("page_profile") && "flex" === getComputedStyle(n).display ? 0 : Math.max(t.getBoundingClientRect().bottom, 0) + "px";
e.style.top = r, function() {
let t = document.querySelector(".sidebar");
if (!t.observer) {
let e = t.observer = new MutationObserver(t => {
for (let e of t) {
if ("childList" !== e.type) return;
u();
}
});
e.observe(t, {
childList: !0,
subtree: !0
});
}
let e = t.querySelector(".sidebar__content"), n = t.querySelector(".sidebar__inner"), r = t.classList.contains("sidebar_sticky-footer");
if (t.classList.contains("sidebar_compact")) {
let n;
(n = r ? e.lastElementChild.getBoundingClientRect().top - e.lastElementChild.previousElementSibling.getBoundingClientRect().bottom : e.getBoundingClientRect().bottom - e.lastElementChild.getBoundingClientRect().bottom) > 150 && t.classList.remove("sidebar_compact");
} else n.scrollHeight, n.clientHeight, n.scrollHeight > n.clientHeight && t.classList.add("sidebar_compact");
}();
}
(function() {
let t = document.documentElement.clientWidth <= a, e = document.querySelector('meta[name="viewport"]').content;
e = e.replace(/user-scalable=\w+/, "user-scalable=" + (t ? "yes" : "no")), document.querySelector('meta[name="viewport"]').content = e;
})(), o();
}(), s = null;
}));
}
function l() {
window.location.hash.match(/#comment-/) && r(), i(), u();
}
window.addEventListener("resize-internal", u), window.addEventListener("scroll", u), 
window.addEventListener("resize", u), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", l) : l();
},
303: function(t, e) {
document.addEventListener("click", function(t) {
if (!t.target.closest) return;
t.target.closest(i + "__search-toggle") && (n || function() {
let t, e = document.querySelector(i), r = e.querySelector(i + "__search-input input");
e.querySelector(i + "__find").onmousedown = function(e) {
t = !0;
}, r.onkeydown = function(t) {
27 == t.keyCode && (this.value = "", o());
}, r.onblur = function(e) {
!t && o();
}, n = !0;
}(), o());
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
let e = t.target.closest("[data-dropdown-toggler]");
if (!e) return;
e.nextElementSibling.style.display = e.nextElementSibling.offsetWidth ? "none" : "block";
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
if (!t.target.closest(".sitetoolbar__nav-toggle")) return;
t.target.classList.toggle("sitetoolbar__nav-toggle_active"), document.querySelector(".sitetoolbar").classList.toggle("sitetoolbar_menu_open");
});
let n = !1, r = "sitetoolbar", i = "." + r;
function o() {
let t, e = document.querySelector(i);
e.classList.toggle(r + "_search_open");
let n = e.querySelector(i + "__search-input input");
e.classList.contains(r + "_search_open") ? (n.focus(), (t = document.createElement("div")).className = "search-paranja", 
t.style.top = e.offsetHeight + "px", document.body.appendChild(t), document.body.classList.add("paranja-open")) : ((t = document.querySelector(".search-paranja")).parentNode.removeChild(t), 
document.body.classList.remove("paranja-open"));
}
},
305: function(t, e, n) {
function r() {
let t, e = document.querySelector('link[rel="next"]');
e && ((t = document.querySelector('a[href="' + e.getAttribute("href") + '"] .page__nav-text-shortcut')).innerHTML = 'Ctrl + <span class="page__nav-text-arr">→</span>');
let n = document.querySelector('link[rel="prev"]');
n && ((t = document.querySelector('a[href="' + n.getAttribute("href") + '"] .page__nav-text-shortcut')).innerHTML = 'Ctrl + <span class="page__nav-text-arr">←</span>');
}
n(306)(document, {
onRight: function() {
let t = document.querySelector('link[rel="prev"]');
t && (document.location = t.href);
},
onLeft: function() {
let t = document.querySelector('link[rel="next"]');
t && (document.location = t.href);
}
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (!t.ctrlKey) return;
let e = null;
switch (t.keyCode) {
case 37:
e = "prev";
break;

case 39:
e = "next";
break;

default:
return;
}
let n = document.querySelector('link[rel="' + e + '"]');
n && (document.location = n.href, t.preventDefault());
}), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", r) : r();
},
306: function(t, e) {
t.exports = function(t, e) {
let n, r, i, o, s, a = (e = e || {}).onRight || function() {}, u = e.onLeft || function() {}, l = e.tolerance || 50, c = e.threshold || 150, d = e.allowedTime || 500;
t.addEventListener("touchstart", function(t) {
let e = t.changedTouches[0];
i = 0, n = e.pageX, r = e.pageY, s = Date.now();
}), t.addEventListener("touchend", function(t) {
let e = t.changedTouches[0];
if (i = e.pageX - n, o = Date.now() - s, Math.abs(e.pageY - r) > l) return;
if (o > d) return;
let h = !1, f = t.target;
for (;f != document.body; ) {
if (f.scrollWidth > f.clientWidth) {
h = !0;
break;
}
f = f.parentElement;
}
h || (i > c && a(t), i < -c && u(t));
});
};
},
307: function(t, e) {
let n;
document.addEventListener("mouseover", function(t) {
if (!t.target.closest) return;
let e = t.target.closest("[data-add-class-on-hover]") || t.target.closest(".button");
e && (n = e, e.classList.add("hover"));
}), document.addEventListener("touchend", function(t) {
setTimeout(function() {
n && (n.classList.remove("hover"), n = null);
}, 500);
}), document.addEventListener("mouseout", function(t) {
n && (n.contains(t.relatedTarget) || (n.classList.remove("hover"), n = null));
}), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) || document.documentElement.classList.add("working-hover");
},
308: function(t, e, n) {
let r = window.location.host, i = n(398);
document.addEventListener("click", function(t) {
if (1 != t.which) return;
if (t.defaultPrevented) return;
let e = t.target.closest && t.target.closest("a");
if (!e || r == e.host && !e.hasAttribute("data-track-outbound")) return;
if (!~[ "_self", "_top", "_parent" ].indexOf(e.target)) return;
if (t.shiftKey || t.ctrlKey || t.altKey) return;
t.preventDefault();
let n = e.href;
window.ga("send", "event", {
eventCategory: "outbound",
eventAction: "click",
eventLabel: n,
hitCallback: i(function() {
document.location = n;
})
});
});
},
309: function(t, e, n) {
let r = n(2);
document.addEventListener("click", function(t) {
let e = t.target.closest("[data-banner-close]");
e && (localStorage["hideBanner" + e.dataset.bannerClose] = 1, new r.Success(e.dataset.bannerCloseMessage), 
e.parentNode.remove());
});
},
310: function(t, e, n) {
let r = n(53), i = n(144);
class o extends HTMLElement {
constructor() {
super(), this.render();
}
connectedCallback() {
this.render();
}
static get observedAttributes() {
return [ "timestamp", "format", "with-zone", "to", "from" ];
}
attributeChangedCallback(t, e, n) {
this.render();
}
format(t, e, n) {
let o = r(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (o += " " + i()), o;
}
render() {
let t = [ "timestamp", "from", "to", "format" ].map(t => this.getAttribute(t)).join(":");
if (this.lastParams === t) return;
if (this.lastParams = t, this.getAttribute("timestamp")) {
if ("{" === this.getAttribute("timestamp")[0]) return;
return void (this.innerHTML = this.format(this.getAttribute("timestamp"), this.getAttribute("format"), this.hasAttribute("with-zone")));
}
let e = [];
if ("{" === this.getAttribute("from")[0] || "{" === this.getAttribute("to")[0]) return;
let n = new Date(this.getAttribute("from")), r = new Date(this.getAttribute("to")), i = this.getAttribute("format"), o = this.getAttribute("format");
n.getFullYear() === r.getFullYear() && (i = i.replace(/ YY(YY)?$/g, "")), n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate() || e.push(this.format(n, i)), 
e.push(this.format(r, o, this.hasAttribute("with-zone"))), this.innerHTML = e.join(" – ");
}
}
window.DateLocalElement = o, window.customElements.define("date-local", o);
},
311: function(t, e, n) {
let r = n(53), i = n(144), o = n(312);
const s = n(0).lang;
class a extends HTMLElement {
constructor() {
super(), this.render();
}
static get observedAttributes() {
return [ "weekdays", "format", "with-zone", "to", "from" ];
}
attributeChangedCallback(t, e, n) {
this.render();
}
connectedCallback() {
this.render();
}
format(t, e, n) {
let o = r(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (o += " " + i()), o;
}
render() {
if ("{" === this.getAttribute("weekdays")[0]) return;
let t = [ "weekdays", "with-zone", "from", "to" ].map(t => this.getAttribute(t)).join(":");
if (this.lastParams === t) return;
this.lastParams = t;
let e, n = this.getAttribute("weekdays").split(",").map(Number), r = this.getAttribute("from"), a = this.getAttribute("to");
if ([n, r, a] = o(n, r, a, -new Date().getTimezoneOffset()), e = "ru" === s ? [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ] : [ "", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ], 
n = n.map(t => e[t]), n = "ru" === s ? n.join("/") : n.join(", "), this.hasAttribute("with-zone")) {
let t = i();
this.setAttribute("data-tooltip", "Время указано в вашем часовом поясе,<br>по данным браузера это " + t);
}
this.innerHTML = n + " " + r + " – " + a;
}
}
window.WeekRangeElement = a, window.customElements.define("week-range", a);
},
312: function(t, e) {
t.exports = function(t, e, n, r) {
r = +r, e.split && (e = e.split(":").map(Number)), n.split && (n = n.split(":").map(Number)), 
e = 60 * e[0] + e[1] + r, n = 60 * n[0] + n[1] + r, e < 0 ? (e += 1440, n += 1440, 
t = t.map(t => 1 === t ? 7 : t - 1)) : e >= 1440 && (e -= 1440, n -= 1440, t = t.map(t => 7 === t ? 1 : t + 1)), 
n > 1440 && (n -= 1440), n < 0 && (n += 1440);
let i = t => 0 === t ? "00" : t < 10 ? "0" + t : t;
return [ t, e = [ Math.floor(e / 60), e % 60 ].map(i).join(":"), n = [ Math.floor(n / 60), n % 60 ].map(i).join(":") ];
};
},
327: function(t, e, n) {
var r = n(284), i = n(343);
t.exports = n(285) ? function(t, e, n) {
return r.f(t, e, i(1, n));
} : function(t, e, n) {
return t[e] = n, t;
};
},
328: function(t, e, n) {
var r = n(411), i = n(338);
t.exports = function(t) {
return r(i(t));
};
},
335: function(t, e, n) {
var r = n(336);
t.exports = function(t, e, n) {
if (r(t), void 0 === e) return t;
switch (n) {
case 1:
return function(n) {
return t.call(e, n);
};

case 2:
return function(n, r) {
return t.call(e, n, r);
};

case 3:
return function(n, r, i) {
return t.call(e, n, r, i);
};
}
return function() {
return t.apply(e, arguments);
};
};
},
336: function(t, e) {
t.exports = function(t) {
if ("function" != typeof t) throw TypeError(t + " is not a function!");
return t;
};
},
337: function(t, e) {
var n = {}.toString;
t.exports = function(t) {
return n.call(t).slice(8, -1);
};
},
338: function(t, e) {
t.exports = function(t) {
if (void 0 == t) throw TypeError("Can't call method on  " + t);
return t;
};
},
339: function(t, e) {
var n = Math.ceil, r = Math.floor;
t.exports = function(t) {
return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
};
},
341: function(t, e, n) {
var r = n(281);
t.exports = function(t, e) {
if (!r(t)) return t;
var n, i;
if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
throw TypeError("Can't convert object to primitive value");
};
},
343: function(t, e) {
t.exports = function(t, e) {
return {
enumerable: !(1 & t),
configurable: !(2 & t),
writable: !(4 & t),
value: e
};
};
},
344: function(t, e) {
var n = 0, r = Math.random();
t.exports = function(t) {
return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
};
},
345: function(t, e) {
t.exports = !1;
},
346: function(t, e, n) {
var r = n(451), i = n(428);
t.exports = Object.keys || function(t) {
return r(t, i);
};
},
347: function(t, e, n) {
var r = n(339), i = Math.max, o = Math.min;
t.exports = function(t, e) {
return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
};
},
348: function(t, e, n) {
var r = n(282), i = n(452), o = n(428), s = n(427)("IE_PROTO"), a = function() {}, u = function() {
var t, e = n(424)("iframe"), r = o.length;
for (e.style.display = "none", n(430).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), 
t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--; ) delete u.prototype[o[r]];
return u();
};
t.exports = Object.create || function(t, e) {
var n;
return null !== t ? (a.prototype = r(t), n = new a(), a.prototype = null, n[s] = t) : n = u(), 
void 0 === e ? n : i(n, e);
};
},
35: function(t, e, n) {
t.exports = n(425)("native-function-to-string", Function.toString);
},
351: function(t, e, n) {
var r = n(284).f, i = n(290), o = n(283)("toStringTag");
t.exports = function(t, e, n) {
t && !i(t = n ? t : t.prototype, o) && r(t, o, {
configurable: !0,
value: e
});
};
},
37: function(t, e, n) {
!function(t) {
"use strict";
t.defineLocale("en-au", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "h:mm A",
LTS: "h:mm:ss A",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY h:mm A",
LLLL: "dddd, D MMMM YYYY h:mm A"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10, n = 1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
return t + n;
},
week: {
dow: 1,
doy: 4
}
});
}(n(4));
},
38: function(t, e, n) {
!function(t) {
"use strict";
t.defineLocale("en-ca", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "h:mm A",
LTS: "h:mm:ss A",
L: "YYYY-MM-DD",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10, n = 1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
return t + n;
}
});
}(n(4));
},
39: function(t, e, n) {
!function(t) {
"use strict";
t.defineLocale("en-gb", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY HH:mm",
LLLL: "dddd, D MMMM YYYY HH:mm"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10, n = 1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
return t + n;
},
week: {
dow: 1,
doy: 4
}
});
}(n(4));
},
398: function(t, e) {
t.exports = function(t) {
function e() {
e.wasCalled || (e.wasCalled = !0, t());
}
return setTimeout(e, 500), e;
};
},
4: function(t, e, n) {
(function(t) {
t.exports = function() {
"use strict";
var e, r;
function i() {
return e.apply(null, arguments);
}
function o(t) {
return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
}
function s(t) {
return null != t && "[object Object]" === Object.prototype.toString.call(t);
}
function a(t) {
return void 0 === t;
}
function u(t) {
return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
}
function l(t) {
return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
}
function c(t, e) {
var n, r = [];
for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
return r;
}
function d(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}
function h(t, e) {
for (var n in e) d(e, n) && (t[n] = e[n]);
return d(e, "toString") && (t.toString = e.toString), d(e, "valueOf") && (t.valueOf = e.valueOf), 
t;
}
function f(t, e, n, r) {
return xe(t, e, n, r, !0).utc();
}
function m(t) {
return null == t._pf && (t._pf = {
empty: !1,
unusedTokens: [],
unusedInput: [],
overflow: -2,
charsLeftOver: 0,
nullInput: !1,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1,
parsedDateParts: [],
meridiem: null,
rfc2822: !1,
weekdayMismatch: !1
}), t._pf;
}
function _(t) {
if (null == t._isValid) {
var e = m(t), n = r.call(e.parsedDateParts, function(t) {
return null != t;
}), i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), 
null != Object.isFrozen && Object.isFrozen(t)) return i;
t._isValid = i;
}
return t._isValid;
}
function p(t) {
var e = f(NaN);
return null != t ? h(m(e), t) : m(e).userInvalidated = !0, e;
}
r = Array.prototype.some ? Array.prototype.some : function(t) {
for (var e = Object(this), n = e.length >>> 0, r = 0; r < n; r++) if (r in e && t.call(this, e[r], r, e)) return !0;
return !1;
};
var y = i.momentProperties = [];
function g(t, e) {
var n, r, i;
if (a(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), a(e._i) || (t._i = e._i), 
a(e._f) || (t._f = e._f), a(e._l) || (t._l = e._l), a(e._strict) || (t._strict = e._strict), 
a(e._tzm) || (t._tzm = e._tzm), a(e._isUTC) || (t._isUTC = e._isUTC), a(e._offset) || (t._offset = e._offset), 
a(e._pf) || (t._pf = m(e)), a(e._locale) || (t._locale = e._locale), y.length > 0) for (n = 0; n < y.length; n++) r = y[n], 
a(i = e[r]) || (t[r] = i);
return t;
}
var w = !1;
function v(t) {
g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
!1 === w && (w = !0, i.updateOffset(this), w = !1);
}
function M(t) {
return t instanceof v || null != t && null != t._isAMomentObject;
}
function b(t) {
return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}
function S(t) {
var e = +t, n = 0;
return 0 !== e && isFinite(e) && (n = b(e)), n;
}
function D(t, e, n) {
var r, i = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), s = 0;
for (r = 0; r < i; r++) (n && t[r] !== e[r] || !n && S(t[r]) !== S(e[r])) && s++;
return s + o;
}
function T(t) {
!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
}
function k(t, e) {
var n = !0;
return h(function() {
if (null != i.deprecationHandler && i.deprecationHandler(null, t), n) {
for (var r, o = [], s = 0; s < arguments.length; s++) {
if (r = "", "object" == typeof arguments[s]) {
for (var a in r += "\n[" + s + "] ", arguments[0]) r += a + ": " + arguments[0][a] + ", ";
r = r.slice(0, -2);
} else r = arguments[s];
o.push(r);
}
T((Array.prototype.slice.call(o).join(""), new Error().stack)), n = !1;
}
return e.apply(this, arguments);
}, e);
}
var Y, L = {};
function E(t, e) {
null != i.deprecationHandler && i.deprecationHandler(t, e), L[t] || (T(), L[t] = !0);
}
function x(t) {
return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
}
function O(t, e) {
var n, r = h({}, t);
for (n in e) d(e, n) && (s(t[n]) && s(e[n]) ? (r[n] = {}, h(r[n], t[n]), h(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
for (n in t) d(t, n) && !d(e, n) && s(t[n]) && (r[n] = h({}, r[n]));
return r;
}
function C(t) {
null != t && this.set(t);
}
i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, Y = Object.keys ? Object.keys : function(t) {
var e, n = [];
for (e in t) d(t, e) && n.push(e);
return n;
};
var A = {};
function P(t, e) {
var n = t.toLowerCase();
A[n] = A[n + "s"] = A[e] = t;
}
function H(t) {
return "string" == typeof t ? A[t] || A[t.toLowerCase()] : void 0;
}
function N(t) {
var e, n, r = {};
for (n in t) d(t, n) && (e = H(n)) && (r[e] = t[n]);
return r;
}
var F = {};
function W(t, e) {
F[t] = e;
}
function j(t, e, n) {
var r = "" + Math.abs(t), i = e - r.length, o = t >= 0;
return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
}
var R = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, U = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, I = {}, G = {};
function V(t, e, n, r) {
var i = r;
"string" == typeof r && (i = function() {
return this[r]();
}), t && (G[t] = i), e && (G[e[0]] = function() {
return j(i.apply(this, arguments), e[1], e[2]);
}), n && (G[n] = function() {
return this.localeData().ordinal(i.apply(this, arguments), t);
});
}
function z(t, e) {
return t.isValid() ? (e = q(e, t.localeData()), I[e] = I[e] || function(t) {
var e, n, r, i = t.match(R);
for (e = 0, n = i.length; e < n; e++) G[i[e]] ? i[e] = G[i[e]] : i[e] = (r = i[e]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
return function(e) {
var r, o = "";
for (r = 0; r < n; r++) o += x(i[r]) ? i[r].call(e, t) : i[r];
return o;
};
}(e), I[e](t)) : t.localeData().invalidDate();
}
function q(t, e) {
var n = 5;
function r(t) {
return e.longDateFormat(t) || t;
}
for (U.lastIndex = 0; n >= 0 && U.test(t); ) t = t.replace(U, r), U.lastIndex = 0, 
n -= 1;
return t;
}
var J = /\d/, Z = /\d\d/, B = /\d{3}/, $ = /\d{4}/, X = /[+-]?\d{6}/, K = /\d\d?/, Q = /\d\d\d\d?/, tt = /\d\d\d\d\d\d?/, et = /\d{1,3}/, nt = /\d{1,4}/, rt = /[+-]?\d{1,6}/, it = /\d+/, ot = /[+-]?\d+/, st = /Z|[+-]\d\d:?\d\d/gi, at = /Z|[+-]\d\d(?::?\d\d)?/gi, ut = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, lt = {};
function ct(t, e, n) {
lt[t] = x(e) ? e : function(t, r) {
return t && n ? n : e;
};
}
function dt(t, e) {
return d(lt, t) ? lt[t](e._strict, e._locale) : new RegExp(ht(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, i) {
return e || n || r || i;
})));
}
function ht(t) {
return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var ft = {};
function mt(t, e) {
var n, r = e;
for ("string" == typeof t && (t = [ t ]), u(e) && (r = function(t, n) {
n[e] = S(t);
}), n = 0; n < t.length; n++) ft[t[n]] = r;
}
function _t(t, e) {
mt(t, function(t, n, r, i) {
r._w = r._w || {}, e(t, r._w, r, i);
});
}
function pt(t, e, n) {
null != e && d(ft, t) && ft[t](e, n._a, n, t);
}
var yt = 0, gt = 1, wt = 2, vt = 3, Mt = 4, bt = 5, St = 6, Dt = 7, Tt = 8;
function kt(t) {
return Yt(t) ? 366 : 365;
}
function Yt(t) {
return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
}
V("Y", 0, 0, function() {
var t = this.year();
return t <= 9999 ? "" + t : "+" + t;
}), V(0, [ "YY", 2 ], 0, function() {
return this.year() % 100;
}), V(0, [ "YYYY", 4 ], 0, "year"), V(0, [ "YYYYY", 5 ], 0, "year"), V(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
P("year", "y"), W("year", 1), ct("Y", ot), ct("YY", K, Z), ct("YYYY", nt, $), ct("YYYYY", rt, X), 
ct("YYYYYY", rt, X), mt([ "YYYYY", "YYYYYY" ], yt), mt("YYYY", function(t, e) {
e[yt] = 2 === t.length ? i.parseTwoDigitYear(t) : S(t);
}), mt("YY", function(t, e) {
e[yt] = i.parseTwoDigitYear(t);
}), mt("Y", function(t, e) {
e[yt] = parseInt(t, 10);
}), i.parseTwoDigitYear = function(t) {
return S(t) + (S(t) > 68 ? 1900 : 2e3);
};
var Lt, Et = xt("FullYear", !0);
function xt(t, e) {
return function(n) {
return null != n ? (Ct(this, t, n), i.updateOffset(this, e), this) : Ot(this, t);
};
}
function Ot(t, e) {
return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
}
function Ct(t, e, n) {
t.isValid() && !isNaN(n) && ("FullYear" === e && Yt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), At(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
}
function At(t, e) {
if (isNaN(t) || isNaN(e)) return NaN;
var n, r = (e % (n = 12) + n) % n;
return t += (e - r) / 12, 1 === r ? Yt(t) ? 29 : 28 : 31 - r % 7 % 2;
}
Lt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
var e;
for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
return -1;
}, V("M", [ "MM", 2 ], "Mo", function() {
return this.month() + 1;
}), V("MMM", 0, 0, function(t) {
return this.localeData().monthsShort(this, t);
}), V("MMMM", 0, 0, function(t) {
return this.localeData().months(this, t);
}), P("month", "M"), W("month", 8), ct("M", K), ct("MM", K, Z), ct("MMM", function(t, e) {
return e.monthsShortRegex(t);
}), ct("MMMM", function(t, e) {
return e.monthsRegex(t);
}), mt([ "M", "MM" ], function(t, e) {
e[gt] = S(t) - 1;
}), mt([ "MMM", "MMMM" ], function(t, e, n, r) {
var i = n._locale.monthsParse(t, r, n._strict);
null != i ? e[gt] = i : m(n).invalidMonth = t;
});
var Pt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ht = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Nt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function Ft(t, e) {
var n;
if (!t.isValid()) return t;
if ("string" == typeof e) if (/^\d+$/.test(e)) e = S(e); else if (!u(e = t.localeData().monthsParse(e))) return t;
return n = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), 
t;
}
function Wt(t) {
return null != t ? (Ft(this, t), i.updateOffset(this, !0), this) : Ot(this, "Month");
}
var jt = ut, Rt = ut;
function Ut() {
function t(t, e) {
return e.length - t.length;
}
var e, n, r = [], i = [], o = [];
for (e = 0; e < 12; e++) n = f([ 2e3, e ]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), 
o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
for (r.sort(t), i.sort(t), o.sort(t), e = 0; e < 12; e++) r[e] = ht(r[e]), i[e] = ht(i[e]);
for (e = 0; e < 24; e++) o[e] = ht(o[e]);
this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
}
function It(t) {
var e;
if (t < 100 && t >= 0) {
var n = Array.prototype.slice.call(arguments);
n[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
} else e = new Date(Date.UTC.apply(null, arguments));
return e;
}
function Gt(t, e, n) {
var r = 7 + e - n, i = (7 + It(t, 0, r).getUTCDay() - e) % 7;
return -i + r - 1;
}
function Vt(t, e, n, r, i) {
var o, s, a = (7 + n - r) % 7, u = Gt(t, r, i), l = 1 + 7 * (e - 1) + a + u;
return l <= 0 ? s = kt(o = t - 1) + l : l > kt(t) ? (o = t + 1, s = l - kt(t)) : (o = t, 
s = l), {
year: o,
dayOfYear: s
};
}
function zt(t, e, n) {
var r, i, o = Gt(t.year(), e, n), s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
return s < 1 ? (i = t.year() - 1, r = s + qt(i, e, n)) : s > qt(t.year(), e, n) ? (r = s - qt(t.year(), e, n), 
i = t.year() + 1) : (i = t.year(), r = s), {
week: r,
year: i
};
}
function qt(t, e, n) {
var r = Gt(t, e, n), i = Gt(t + 1, e, n);
return (kt(t) - r + i) / 7;
}
function Jt(t, e) {
return t.slice(e, 7).concat(t.slice(0, e));
}
V("w", [ "ww", 2 ], "wo", "week"), V("W", [ "WW", 2 ], "Wo", "isoWeek"), P("week", "w"), 
P("isoWeek", "W"), W("week", 5), W("isoWeek", 5), ct("w", K), ct("ww", K, Z), ct("W", K), 
ct("WW", K, Z), _t([ "w", "ww", "W", "WW" ], function(t, e, n, r) {
e[r.substr(0, 1)] = S(t);
}), V("d", 0, "do", "day"), V("dd", 0, 0, function(t) {
return this.localeData().weekdaysMin(this, t);
}), V("ddd", 0, 0, function(t) {
return this.localeData().weekdaysShort(this, t);
}), V("dddd", 0, 0, function(t) {
return this.localeData().weekdays(this, t);
}), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), 
P("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), ct("d", K), 
ct("e", K), ct("E", K), ct("dd", function(t, e) {
return e.weekdaysMinRegex(t);
}), ct("ddd", function(t, e) {
return e.weekdaysShortRegex(t);
}), ct("dddd", function(t, e) {
return e.weekdaysRegex(t);
}), _t([ "dd", "ddd", "dddd" ], function(t, e, n, r) {
var i = n._locale.weekdaysParse(t, r, n._strict);
null != i ? e.d = i : m(n).invalidWeekday = t;
}), _t([ "d", "e", "E" ], function(t, e, n, r) {
e[r] = S(t);
});
var Zt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), $t = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Xt = ut, Kt = ut, Qt = ut;
function te() {
function t(t, e) {
return e.length - t.length;
}
var e, n, r, i, o, s = [], a = [], u = [], l = [];
for (e = 0; e < 7; e++) n = f([ 2e3, 1 ]).day(e), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), 
o = this.weekdays(n, ""), s.push(r), a.push(i), u.push(o), l.push(r), l.push(i), 
l.push(o);
for (s.sort(t), a.sort(t), u.sort(t), l.sort(t), e = 0; e < 7; e++) a[e] = ht(a[e]), 
u[e] = ht(u[e]), l[e] = ht(l[e]);
this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), 
this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
}
function ee() {
return this.hours() % 12 || 12;
}
function ne(t, e) {
V(t, 0, 0, function() {
return this.localeData().meridiem(this.hours(), this.minutes(), e);
});
}
function re(t, e) {
return e._meridiemParse;
}
V("H", [ "HH", 2 ], 0, "hour"), V("h", [ "hh", 2 ], 0, ee), V("k", [ "kk", 2 ], 0, function() {
return this.hours() || 24;
}), V("hmm", 0, 0, function() {
return "" + ee.apply(this) + j(this.minutes(), 2);
}), V("hmmss", 0, 0, function() {
return "" + ee.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2);
}), V("Hmm", 0, 0, function() {
return "" + this.hours() + j(this.minutes(), 2);
}), V("Hmmss", 0, 0, function() {
return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2);
}), ne("a", !0), ne("A", !1), P("hour", "h"), W("hour", 13), ct("a", re), ct("A", re), 
ct("H", K), ct("h", K), ct("k", K), ct("HH", K, Z), ct("hh", K, Z), ct("kk", K, Z), 
ct("hmm", Q), ct("hmmss", tt), ct("Hmm", Q), ct("Hmmss", tt), mt([ "H", "HH" ], vt), 
mt([ "k", "kk" ], function(t, e, n) {
var r = S(t);
e[vt] = 24 === r ? 0 : r;
}), mt([ "a", "A" ], function(t, e, n) {
n._isPm = n._locale.isPM(t), n._meridiem = t;
}), mt([ "h", "hh" ], function(t, e, n) {
e[vt] = S(t), m(n).bigHour = !0;
}), mt("hmm", function(t, e, n) {
var r = t.length - 2;
e[vt] = S(t.substr(0, r)), e[Mt] = S(t.substr(r)), m(n).bigHour = !0;
}), mt("hmmss", function(t, e, n) {
var r = t.length - 4, i = t.length - 2;
e[vt] = S(t.substr(0, r)), e[Mt] = S(t.substr(r, 2)), e[bt] = S(t.substr(i)), m(n).bigHour = !0;
}), mt("Hmm", function(t, e, n) {
var r = t.length - 2;
e[vt] = S(t.substr(0, r)), e[Mt] = S(t.substr(r));
}), mt("Hmmss", function(t, e, n) {
var r = t.length - 4, i = t.length - 2;
e[vt] = S(t.substr(0, r)), e[Mt] = S(t.substr(r, 2)), e[bt] = S(t.substr(i));
});
var ie, oe = xt("Hours", !0), se = {
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
longDateFormat: {
LTS: "h:mm:ss A",
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
},
invalidDate: "Invalid date",
ordinal: "%d",
dayOfMonthOrdinalParse: /\d{1,2}/,
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
months: Ht,
monthsShort: Nt,
week: {
dow: 0,
doy: 6
},
weekdays: Zt,
weekdaysMin: $t,
weekdaysShort: Bt,
meridiemParse: /[ap]\.?m?\.?/i
}, ae = {}, ue = {};
function le(t) {
return t ? t.toLowerCase().replace("_", "-") : t;
}
function ce(e) {
var r = null;
if (!ae[e] && void 0 !== t && t && t.exports) try {
r = ie._abbr, n(44)("./" + e), de(r);
} catch (t) {}
return ae[e];
}
function de(t, e) {
var n;
return t && ((n = a(e) ? fe(t) : he(t, e)) ? ie = n : "undefined" != typeof console && console.warn), 
ie._abbr;
}
function he(t, e) {
if (null !== e) {
var n, r = se;
if (e.abbr = t, null != ae[t]) E("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
r = ae[t]._config; else if (null != e.parentLocale) if (null != ae[e.parentLocale]) r = ae[e.parentLocale]._config; else {
if (null == (n = ce(e.parentLocale))) return ue[e.parentLocale] || (ue[e.parentLocale] = []), 
ue[e.parentLocale].push({
name: t,
config: e
}), null;
r = n._config;
}
return ae[t] = new C(O(r, e)), ue[t] && ue[t].forEach(function(t) {
he(t.name, t.config);
}), de(t), ae[t];
}
return delete ae[t], null;
}
function fe(t) {
var e;
if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ie;
if (!o(t)) {
if (e = ce(t)) return e;
t = [ t ];
}
return function(t) {
for (var e, n, r, i, o = 0; o < t.length; ) {
for (i = le(t[o]).split("-"), e = i.length, n = (n = le(t[o + 1])) ? n.split("-") : null; e > 0; ) {
if (r = ce(i.slice(0, e).join("-"))) return r;
if (n && n.length >= e && D(i, n, !0) >= e - 1) break;
e--;
}
o++;
}
return ie;
}(t);
}
function me(t) {
var e, n = t._a;
return n && -2 === m(t).overflow && (e = n[gt] < 0 || n[gt] > 11 ? gt : n[wt] < 1 || n[wt] > At(n[yt], n[gt]) ? wt : n[vt] < 0 || n[vt] > 24 || 24 === n[vt] && (0 !== n[Mt] || 0 !== n[bt] || 0 !== n[St]) ? vt : n[Mt] < 0 || n[Mt] > 59 ? Mt : n[bt] < 0 || n[bt] > 59 ? bt : n[St] < 0 || n[St] > 999 ? St : -1, 
m(t)._overflowDayOfYear && (e < yt || e > wt) && (e = wt), m(t)._overflowWeeks && -1 === e && (e = Dt), 
m(t)._overflowWeekday && -1 === e && (e = Tt), m(t).overflow = e), t;
}
function _e(t, e, n) {
return null != t ? t : null != e ? e : n;
}
function pe(t) {
var e, n, r, o, s, a = [];
if (!t._d) {
for (r = function(t) {
var e = new Date(i.now());
return t._useUTC ? [ e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() ] : [ e.getFullYear(), e.getMonth(), e.getDate() ];
}(t), t._w && null == t._a[wt] && null == t._a[gt] && function(t) {
var e, n, r, i, o, s, a, u;
if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, s = 4, n = _e(e.GG, t._a[yt], zt(Oe(), 1, 4).year), 
r = _e(e.W, 1), ((i = _e(e.E, 1)) < 1 || i > 7) && (u = !0); else {
o = t._locale._week.dow, s = t._locale._week.doy;
var l = zt(Oe(), o, s);
n = _e(e.gg, t._a[yt], l.year), r = _e(e.w, l.week), null != e.d ? ((i = e.d) < 0 || i > 6) && (u = !0) : null != e.e ? (i = e.e + o, 
(e.e < 0 || e.e > 6) && (u = !0)) : i = o;
}
r < 1 || r > qt(n, o, s) ? m(t)._overflowWeeks = !0 : null != u ? m(t)._overflowWeekday = !0 : (a = Vt(n, r, i, o, s), 
t._a[yt] = a.year, t._dayOfYear = a.dayOfYear);
}(t), null != t._dayOfYear && (s = _e(t._a[yt], r[yt]), (t._dayOfYear > kt(s) || 0 === t._dayOfYear) && (m(t)._overflowDayOfYear = !0), 
n = It(s, 0, t._dayOfYear), t._a[gt] = n.getUTCMonth(), t._a[wt] = n.getUTCDate()), 
e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = r[e];
for (;e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
24 === t._a[vt] && 0 === t._a[Mt] && 0 === t._a[bt] && 0 === t._a[St] && (t._nextDay = !0, 
t._a[vt] = 0), t._d = (t._useUTC ? It : function(t, e, n, r, i, o, s) {
var a;
return t < 100 && t >= 0 ? (a = new Date(t + 400, e, n, r, i, o, s), isFinite(a.getFullYear()) && a.setFullYear(t)) : a = new Date(t, e, n, r, i, o, s), 
a;
}).apply(null, a), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
t._nextDay && (t._a[vt] = 24), t._w && void 0 !== t._w.d && t._w.d !== o && (m(t).weekdayMismatch = !0);
}
}
var ye = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ge = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, we = /Z|[+-]\d\d(?::?\d\d)?/, ve = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], Me = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], be = /^\/?Date\((\-?\d+)/i;
function Se(t) {
var e, n, r, i, o, s, a = t._i, u = ye.exec(a) || ge.exec(a);
if (u) {
for (m(t).iso = !0, e = 0, n = ve.length; e < n; e++) if (ve[e][1].exec(u[1])) {
i = ve[e][0], r = !1 !== ve[e][2];
break;
}
if (null == i) return void (t._isValid = !1);
if (u[3]) {
for (e = 0, n = Me.length; e < n; e++) if (Me[e][1].exec(u[3])) {
o = (u[2] || " ") + Me[e][0];
break;
}
if (null == o) return void (t._isValid = !1);
}
if (!r && null != o) return void (t._isValid = !1);
if (u[4]) {
if (!we.exec(u[4])) return void (t._isValid = !1);
s = "Z";
}
t._f = i + (o || "") + (s || ""), Le(t);
} else t._isValid = !1;
}
var De = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function Te(t, e, n, r, i, o) {
var s = [ function(t) {
var e = parseInt(t, 10);
return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
}(t), Nt.indexOf(e), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10) ];
return o && s.push(parseInt(o, 10)), s;
}
var ke = {
UT: 0,
GMT: 0,
EDT: -240,
EST: -300,
CDT: -300,
CST: -360,
MDT: -360,
MST: -420,
PDT: -420,
PST: -480
};
function Ye(t) {
var e = De.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
if (e) {
var n = Te(e[4], e[3], e[2], e[5], e[6], e[7]);
if (!function(t, e, n) {
if (t) {
var r = Bt.indexOf(t), i = new Date(e[0], e[1], e[2]).getDay();
if (r !== i) return m(n).weekdayMismatch = !0, n._isValid = !1, !1;
}
return !0;
}(e[1], n, t)) return;
t._a = n, t._tzm = function(t, e, n) {
if (t) return ke[t];
if (e) return 0;
var r = parseInt(n, 10), i = r % 100, o = (r - i) / 100;
return 60 * o + i;
}(e[8], e[9], e[10]), t._d = It.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
m(t).rfc2822 = !0;
} else t._isValid = !1;
}
function Le(t) {
if (t._f !== i.ISO_8601) if (t._f !== i.RFC_2822) {
t._a = [], m(t).empty = !0;
var e, n, r, o, s, a = "" + t._i, u = a.length, l = 0;
for (r = q(t._f, t._locale).match(R) || [], e = 0; e < r.length; e++) o = r[e], 
(n = (a.match(dt(o, t)) || [])[0]) && ((s = a.substr(0, a.indexOf(n))).length > 0 && m(t).unusedInput.push(s), 
a = a.slice(a.indexOf(n) + n.length), l += n.length), G[o] ? (n ? m(t).empty = !1 : m(t).unusedTokens.push(o), 
pt(o, n, t)) : t._strict && !n && m(t).unusedTokens.push(o);
m(t).charsLeftOver = u - l, a.length > 0 && m(t).unusedInput.push(a), t._a[vt] <= 12 && !0 === m(t).bigHour && t._a[vt] > 0 && (m(t).bigHour = void 0), 
m(t).parsedDateParts = t._a.slice(0), m(t).meridiem = t._meridiem, t._a[vt] = (c = t._locale, 
d = t._a[vt], null == (h = t._meridiem) ? d : null != c.meridiemHour ? c.meridiemHour(d, h) : null != c.isPM ? ((f = c.isPM(h)) && d < 12 && (d += 12), 
f || 12 !== d || (d = 0), d) : d), pe(t), me(t);
} else Ye(t); else Se(t);
var c, d, h, f;
}
function Ee(t) {
var e = t._i, n = t._f;
return t._locale = t._locale || fe(t._l), null === e || void 0 === n && "" === e ? p({
nullInput: !0
}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), M(e) ? new v(me(e)) : (l(e) ? t._d = e : o(n) ? function(t) {
var e, n, r, i, o;
if (0 === t._f.length) return m(t).invalidFormat = !0, void (t._d = new Date(NaN));
for (i = 0; i < t._f.length; i++) o = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), 
e._f = t._f[i], Le(e), _(e) && (o += m(e).charsLeftOver, o += 10 * m(e).unusedTokens.length, 
m(e).score = o, (null == r || o < r) && (r = o, n = e));
h(t, n || e);
}(t) : n ? Le(t) : function(t) {
var e = t._i;
a(e) ? t._d = new Date(i.now()) : l(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) {
var e = be.exec(t._i);
null === e ? (Se(t), !1 === t._isValid && (delete t._isValid, Ye(t), !1 === t._isValid && (delete t._isValid, 
i.createFromInputFallback(t)))) : t._d = new Date(+e[1]);
}(t) : o(e) ? (t._a = c(e.slice(0), function(t) {
return parseInt(t, 10);
}), pe(t)) : s(e) ? function(t) {
if (!t._d) {
var e = N(t._i);
t._a = c([ e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond ], function(t) {
return t && parseInt(t, 10);
}), pe(t);
}
}(t) : u(e) ? t._d = new Date(e) : i.createFromInputFallback(t);
}(t), _(t) || (t._d = null), t));
}
function xe(t, e, n, r, i) {
var a, u = {};
return !0 !== n && !1 !== n || (r = n, n = void 0), (s(t) && function(t) {
if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
var e;
for (e in t) if (t.hasOwnProperty(e)) return !1;
return !0;
}(t) || o(t) && 0 === t.length) && (t = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = i, 
u._l = n, u._i = t, u._f = e, u._strict = r, (a = new v(me(Ee(u))))._nextDay && (a.add(1, "d"), 
a._nextDay = void 0), a;
}
function Oe(t, e, n, r) {
return xe(t, e, n, r, !1);
}
i.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
}), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
var Ce = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = Oe.apply(null, arguments);
return this.isValid() && t.isValid() ? t < this ? this : t : p();
}), Ae = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = Oe.apply(null, arguments);
return this.isValid() && t.isValid() ? t > this ? this : t : p();
});
function Pe(t, e) {
var n, r;
if (1 === e.length && o(e[0]) && (e = e[0]), !e.length) return Oe();
for (n = e[0], r = 1; r < e.length; ++r) e[r].isValid() && !e[r][t](n) || (n = e[r]);
return n;
}
var He = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
function Ne(t) {
var e = N(t), n = e.year || 0, r = e.quarter || 0, i = e.month || 0, o = e.week || e.isoWeek || 0, s = e.day || 0, a = e.hour || 0, u = e.minute || 0, l = e.second || 0, c = e.millisecond || 0;
this._isValid = function(t) {
for (var e in t) if (-1 === Lt.call(He, e) || null != t[e] && isNaN(t[e])) return !1;
for (var n = !1, r = 0; r < He.length; ++r) if (t[He[r]]) {
if (n) return !1;
parseFloat(t[He[r]]) !== S(t[He[r]]) && (n = !0);
}
return !0;
}(e), this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * a * 60 * 60, this._days = +s + 7 * o, 
this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = fe(), this._bubble();
}
function Fe(t) {
return t instanceof Ne;
}
function We(t) {
return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
}
function je(t, e) {
V(t, 0, 0, function() {
var t = this.utcOffset(), n = "+";
return t < 0 && (t = -t, n = "-"), n + j(~~(t / 60), 2) + e + j(~~t % 60, 2);
});
}
je("Z", ":"), je("ZZ", ""), ct("Z", at), ct("ZZ", at), mt([ "Z", "ZZ" ], function(t, e, n) {
n._useUTC = !0, n._tzm = Ue(at, t);
});
var Re = /([\+\-]|\d\d)/gi;
function Ue(t, e) {
var n = (e || "").match(t);
if (null === n) return null;
var r = n[n.length - 1] || [], i = (r + "").match(Re) || [ "-", 0, 0 ], o = 60 * i[1] + S(i[2]);
return 0 === o ? 0 : "+" === i[0] ? o : -o;
}
function Ie(t, e) {
var n, r;
return e._isUTC ? (n = e.clone(), r = (M(t) || l(t) ? t.valueOf() : Oe(t).valueOf()) - n.valueOf(), 
n._d.setTime(n._d.valueOf() + r), i.updateOffset(n, !1), n) : Oe(t).local();
}
function Ge(t) {
return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
}
function Ve() {
return !!this.isValid() && this._isUTC && 0 === this._offset;
}
i.updateOffset = function() {};
var ze = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, qe = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Je(t, e) {
var n, r, i, o, s, a, l = t, c = null;
return Fe(t) ? l = {
ms: t._milliseconds,
d: t._days,
M: t._months
} : u(t) ? (l = {}, e ? l[e] = t : l.milliseconds = t) : (c = ze.exec(t)) ? (n = "-" === c[1] ? -1 : 1, 
l = {
y: 0,
d: S(c[wt]) * n,
h: S(c[vt]) * n,
m: S(c[Mt]) * n,
s: S(c[bt]) * n,
ms: S(We(1e3 * c[St])) * n
}) : (c = qe.exec(t)) ? (n = "-" === c[1] ? -1 : 1, l = {
y: Ze(c[2], n),
M: Ze(c[3], n),
w: Ze(c[4], n),
d: Ze(c[5], n),
h: Ze(c[6], n),
m: Ze(c[7], n),
s: Ze(c[8], n)
}) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (o = Oe(l.from), 
s = Oe(l.to), i = o.isValid() && s.isValid() ? (s = Ie(s, o), o.isBefore(s) ? a = Be(o, s) : ((a = Be(s, o)).milliseconds = -a.milliseconds, 
a.months = -a.months), a) : {
milliseconds: 0,
months: 0
}, (l = {}).ms = i.milliseconds, l.M = i.months), r = new Ne(l), Fe(t) && d(t, "_locale") && (r._locale = t._locale), 
r;
}
function Ze(t, e) {
var n = t && parseFloat(t.replace(",", "."));
return (isNaN(n) ? 0 : n) * e;
}
function Be(t, e) {
var n = {};
return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, 
n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
}
function $e(t, e) {
return function(n, r) {
var i;
return null === r || isNaN(+r) || (E(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
i = n, n = r, r = i), Xe(this, Je(n = "string" == typeof n ? +n : n, r), t), this;
};
}
function Xe(t, e, n, r) {
var o = e._milliseconds, s = We(e._days), a = We(e._months);
t.isValid() && (r = null == r || r, a && Ft(t, Ot(t, "Month") + a * n), s && Ct(t, "Date", Ot(t, "Date") + s * n), 
o && t._d.setTime(t._d.valueOf() + o * n), r && i.updateOffset(t, s || a));
}
Je.fn = Ne.prototype, Je.invalid = function() {
return Je(NaN);
};
var Ke = $e(1, "add"), Qe = $e(-1, "subtract");
function tn(t, e) {
var n, r, i = 12 * (e.year() - t.year()) + (e.month() - t.month()), o = t.clone().add(i, "months");
return e - o < 0 ? (n = t.clone().add(i - 1, "months"), r = (e - o) / (o - n)) : (n = t.clone().add(i + 1, "months"), 
r = (e - o) / (n - o)), -(i + r) || 0;
}
function en(t) {
var e;
return void 0 === t ? this._locale._abbr : (null != (e = fe(t)) && (this._locale = e), 
this);
}
i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
var nn = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
return void 0 === t ? this.localeData() : this.locale(t);
});
function rn() {
return this._locale;
}
var on = 1e3, sn = 60 * on, an = 60 * sn, un = 3506328 * an;
function ln(t, e) {
return (t % e + e) % e;
}
function cn(t, e, n) {
return t < 100 && t >= 0 ? new Date(t + 400, e, n) - un : new Date(t, e, n).valueOf();
}
function dn(t, e, n) {
return t < 100 && t >= 0 ? Date.UTC(t + 400, e, n) - un : Date.UTC(t, e, n);
}
function hn(t, e) {
V(0, [ t, t.length ], 0, e);
}
function fn(t, e, n, r, i) {
var o;
return null == t ? zt(this, r, i).year : (o = qt(t, r, i), e > o && (e = o), function(t, e, n, r, i) {
var o = Vt(t, e, n, r, i), s = It(o.year, 0, o.dayOfYear);
return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), 
this;
}.call(this, t, e, n, r, i));
}
V(0, [ "gg", 2 ], 0, function() {
return this.weekYear() % 100;
}), V(0, [ "GG", 2 ], 0, function() {
return this.isoWeekYear() % 100;
}), hn("gggg", "weekYear"), hn("ggggg", "weekYear"), hn("GGGG", "isoWeekYear"), 
hn("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), W("weekYear", 1), 
W("isoWeekYear", 1), ct("G", ot), ct("g", ot), ct("GG", K, Z), ct("gg", K, Z), ct("GGGG", nt, $), 
ct("gggg", nt, $), ct("GGGGG", rt, X), ct("ggggg", rt, X), _t([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(t, e, n, r) {
e[r.substr(0, 2)] = S(t);
}), _t([ "gg", "GG" ], function(t, e, n, r) {
e[r] = i.parseTwoDigitYear(t);
}), V("Q", 0, "Qo", "quarter"), P("quarter", "Q"), W("quarter", 7), ct("Q", J), 
mt("Q", function(t, e) {
e[gt] = 3 * (S(t) - 1);
}), V("D", [ "DD", 2 ], "Do", "date"), P("date", "D"), W("date", 9), ct("D", K), 
ct("DD", K, Z), ct("Do", function(t, e) {
return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
}), mt([ "D", "DD" ], wt), mt("Do", function(t, e) {
e[wt] = S(t.match(K)[0]);
});
var mn = xt("Date", !0);
V("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), W("dayOfYear", 4), 
ct("DDD", et), ct("DDDD", B), mt([ "DDD", "DDDD" ], function(t, e, n) {
n._dayOfYear = S(t);
}), V("m", [ "mm", 2 ], 0, "minute"), P("minute", "m"), W("minute", 14), ct("m", K), 
ct("mm", K, Z), mt([ "m", "mm" ], Mt);
var _n = xt("Minutes", !1);
V("s", [ "ss", 2 ], 0, "second"), P("second", "s"), W("second", 15), ct("s", K), 
ct("ss", K, Z), mt([ "s", "ss" ], bt);
var pn, yn = xt("Seconds", !1);
for (V("S", 0, 0, function() {
return ~~(this.millisecond() / 100);
}), V(0, [ "SS", 2 ], 0, function() {
return ~~(this.millisecond() / 10);
}), V(0, [ "SSS", 3 ], 0, "millisecond"), V(0, [ "SSSS", 4 ], 0, function() {
return 10 * this.millisecond();
}), V(0, [ "SSSSS", 5 ], 0, function() {
return 100 * this.millisecond();
}), V(0, [ "SSSSSS", 6 ], 0, function() {
return 1e3 * this.millisecond();
}), V(0, [ "SSSSSSS", 7 ], 0, function() {
return 1e4 * this.millisecond();
}), V(0, [ "SSSSSSSS", 8 ], 0, function() {
return 1e5 * this.millisecond();
}), V(0, [ "SSSSSSSSS", 9 ], 0, function() {
return 1e6 * this.millisecond();
}), P("millisecond", "ms"), W("millisecond", 16), ct("S", et, J), ct("SS", et, Z), 
ct("SSS", et, B), pn = "SSSS"; pn.length <= 9; pn += "S") ct(pn, it);
function gn(t, e) {
e[St] = S(1e3 * ("0." + t));
}
for (pn = "S"; pn.length <= 9; pn += "S") mt(pn, gn);
var wn = xt("Milliseconds", !1);
V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
var vn = v.prototype;
function Mn(t) {
return t;
}
vn.add = Ke, vn.calendar = function(t, e) {
var n = t || Oe(), r = Ie(n, this).startOf("day"), o = i.calendarFormat(this, r) || "sameElse", s = e && (x(e[o]) ? e[o].call(this, n) : e[o]);
return this.format(s || this.localeData().calendar(o, this, Oe(n)));
}, vn.clone = function() {
return new v(this);
}, vn.diff = function(t, e, n) {
var r, i, o;
if (!this.isValid()) return NaN;
if (!(r = Ie(t, this)).isValid()) return NaN;
switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), e = H(e)) {
case "year":
o = tn(this, r) / 12;
break;

case "month":
o = tn(this, r);
break;

case "quarter":
o = tn(this, r) / 3;
break;

case "second":
o = (this - r) / 1e3;
break;

case "minute":
o = (this - r) / 6e4;
break;

case "hour":
o = (this - r) / 36e5;
break;

case "day":
o = (this - r - i) / 864e5;
break;

case "week":
o = (this - r - i) / 6048e5;
break;

default:
o = this - r;
}
return n ? o : b(o);
}, vn.endOf = function(t) {
var e;
if (void 0 === (t = H(t)) || "millisecond" === t || !this.isValid()) return this;
var n = this._isUTC ? dn : cn;
switch (t) {
case "year":
e = n(this.year() + 1, 0, 1) - 1;
break;

case "quarter":
e = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
break;

case "month":
e = n(this.year(), this.month() + 1, 1) - 1;
break;

case "week":
e = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
break;

case "isoWeek":
e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
break;

case "day":
case "date":
e = n(this.year(), this.month(), this.date() + 1) - 1;
break;

case "hour":
e = this._d.valueOf(), e += an - ln(e + (this._isUTC ? 0 : this.utcOffset() * sn), an) - 1;
break;

case "minute":
e = this._d.valueOf(), e += sn - ln(e, sn) - 1;
break;

case "second":
e = this._d.valueOf(), e += on - ln(e, on) - 1;
}
return this._d.setTime(e), i.updateOffset(this, !0), this;
}, vn.format = function(t) {
t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
var e = z(this, t);
return this.localeData().postformat(e);
}, vn.from = function(t, e) {
return this.isValid() && (M(t) && t.isValid() || Oe(t).isValid()) ? Je({
to: this,
from: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, vn.fromNow = function(t) {
return this.from(Oe(), t);
}, vn.to = function(t, e) {
return this.isValid() && (M(t) && t.isValid() || Oe(t).isValid()) ? Je({
from: this,
to: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, vn.toNow = function(t) {
return this.to(Oe(), t);
}, vn.get = function(t) {
return x(this[t = H(t)]) ? this[t]() : this;
}, vn.invalidAt = function() {
return m(this).overflow;
}, vn.isAfter = function(t, e) {
var n = M(t) ? t : Oe(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = H(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf());
}, vn.isBefore = function(t, e) {
var n = M(t) ? t : Oe(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = H(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf());
}, vn.isBetween = function(t, e, n, r) {
var i = M(t) ? t : Oe(t), o = M(e) ? e : Oe(e);
return !!(this.isValid() && i.isValid() && o.isValid()) && (("(" === (r = r || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === r[1] ? this.isBefore(o, n) : !this.isAfter(o, n)));
}, vn.isSame = function(t, e) {
var n, r = M(t) ? t : Oe(t);
return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = H(e) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), 
this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()));
}, vn.isSameOrAfter = function(t, e) {
return this.isSame(t, e) || this.isAfter(t, e);
}, vn.isSameOrBefore = function(t, e) {
return this.isSame(t, e) || this.isBefore(t, e);
}, vn.isValid = function() {
return _(this);
}, vn.lang = nn, vn.locale = en, vn.localeData = rn, vn.max = Ae, vn.min = Ce, vn.parsingFlags = function() {
return h({}, m(this));
}, vn.set = function(t, e) {
if ("object" == typeof t) for (var n = function(t) {
var e = [];
for (var n in t) e.push({
unit: n,
priority: F[n]
});
return e.sort(function(t, e) {
return t.priority - e.priority;
}), e;
}(t = N(t)), r = 0; r < n.length; r++) this[n[r].unit](t[n[r].unit]); else if (x(this[t = H(t)])) return this[t](e);
return this;
}, vn.startOf = function(t) {
var e;
if (void 0 === (t = H(t)) || "millisecond" === t || !this.isValid()) return this;
var n = this._isUTC ? dn : cn;
switch (t) {
case "year":
e = n(this.year(), 0, 1);
break;

case "quarter":
e = n(this.year(), this.month() - this.month() % 3, 1);
break;

case "month":
e = n(this.year(), this.month(), 1);
break;

case "week":
e = n(this.year(), this.month(), this.date() - this.weekday());
break;

case "isoWeek":
e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
break;

case "day":
case "date":
e = n(this.year(), this.month(), this.date());
break;

case "hour":
e = this._d.valueOf(), e -= ln(e + (this._isUTC ? 0 : this.utcOffset() * sn), an);
break;

case "minute":
e = this._d.valueOf(), e -= ln(e, sn);
break;

case "second":
e = this._d.valueOf(), e -= ln(e, on);
}
return this._d.setTime(e), i.updateOffset(this, !0), this;
}, vn.subtract = Qe, vn.toArray = function() {
var t = this;
return [ t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond() ];
}, vn.toObject = function() {
var t = this;
return {
years: t.year(),
months: t.month(),
date: t.date(),
hours: t.hours(),
minutes: t.minutes(),
seconds: t.seconds(),
milliseconds: t.milliseconds()
};
}, vn.toDate = function() {
return new Date(this.valueOf());
}, vn.toISOString = function(t) {
if (!this.isValid()) return null;
var e = !0 !== t, n = e ? this.clone().utc() : this;
return n.year() < 0 || n.year() > 9999 ? z(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", z(n, "Z")) : z(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}, vn.inspect = function() {
if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
var t = "moment", e = "";
this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
e = "Z");
var n = "[" + t + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = e + '[")]';
return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i);
}, vn.toJSON = function() {
return this.isValid() ? this.toISOString() : null;
}, vn.toString = function() {
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}, vn.unix = function() {
return Math.floor(this.valueOf() / 1e3);
}, vn.valueOf = function() {
return this._d.valueOf() - 6e4 * (this._offset || 0);
}, vn.creationData = function() {
return {
input: this._i,
format: this._f,
locale: this._locale,
isUTC: this._isUTC,
strict: this._strict
};
}, vn.year = Et, vn.isLeapYear = function() {
return Yt(this.year());
}, vn.weekYear = function(t) {
return fn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}, vn.isoWeekYear = function(t) {
return fn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
}, vn.quarter = vn.quarters = function(t) {
return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
}, vn.month = Wt, vn.daysInMonth = function() {
return At(this.year(), this.month());
}, vn.week = vn.weeks = function(t) {
var e = this.localeData().week(this);
return null == t ? e : this.add(7 * (t - e), "d");
}, vn.isoWeek = vn.isoWeeks = function(t) {
var e = zt(this, 1, 4).week;
return null == t ? e : this.add(7 * (t - e), "d");
}, vn.weeksInYear = function() {
var t = this.localeData()._week;
return qt(this.year(), t.dow, t.doy);
}, vn.isoWeeksInYear = function() {
return qt(this.year(), 1, 4);
}, vn.date = mn, vn.day = vn.days = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
return null != t ? (t = function(t, e) {
return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10);
}(t, this.localeData()), this.add(t - e, "d")) : e;
}, vn.weekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == t ? e : this.add(t - e, "d");
}, vn.isoWeekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
var e = function(t, e) {
return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
}(t, this.localeData());
return this.day(this.day() % 7 ? e : e - 7);
}
return this.day() || 7;
}, vn.dayOfYear = function(t) {
var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
return null == t ? e : this.add(t - e, "d");
}, vn.hour = vn.hours = oe, vn.minute = vn.minutes = _n, vn.second = vn.seconds = yn, 
vn.millisecond = vn.milliseconds = wn, vn.utcOffset = function(t, e, n) {
var r, o = this._offset || 0;
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
if ("string" == typeof t) {
if (null === (t = Ue(at, t))) return this;
} else Math.abs(t) < 16 && !n && (t *= 60);
return !this._isUTC && e && (r = Ge(this)), this._offset = t, this._isUTC = !0, 
null != r && this.add(r, "m"), o !== t && (!e || this._changeInProgress ? Xe(this, Je(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
i.updateOffset(this, !0), this._changeInProgress = null)), this;
}
return this._isUTC ? o : Ge(this);
}, vn.utc = function(t) {
return this.utcOffset(0, t);
}, vn.local = function(t) {
return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ge(this), "m")), 
this;
}, vn.parseZone = function() {
if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
var t = Ue(st, this._i);
null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
}
return this;
}, vn.hasAlignedHourOffset = function(t) {
return !!this.isValid() && (t = t ? Oe(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
}, vn.isDST = function() {
return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}, vn.isLocal = function() {
return !!this.isValid() && !this._isUTC;
}, vn.isUtcOffset = function() {
return !!this.isValid() && this._isUTC;
}, vn.isUtc = Ve, vn.isUTC = Ve, vn.zoneAbbr = function() {
return this._isUTC ? "UTC" : "";
}, vn.zoneName = function() {
return this._isUTC ? "Coordinated Universal Time" : "";
}, vn.dates = k("dates accessor is deprecated. Use date instead.", mn), vn.months = k("months accessor is deprecated. Use month instead", Wt), 
vn.years = k("years accessor is deprecated. Use year instead", Et), vn.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
}), vn.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
if (!a(this._isDSTShifted)) return this._isDSTShifted;
var t = {};
if (g(t, this), (t = Ee(t))._a) {
var e = t._isUTC ? f(t._a) : Oe(t._a);
this._isDSTShifted = this.isValid() && D(t._a, e.toArray()) > 0;
} else this._isDSTShifted = !1;
return this._isDSTShifted;
});
var bn = C.prototype;
function Sn(t, e, n, r) {
var i = fe(), o = f().set(r, e);
return i[n](o, t);
}
function Dn(t, e, n) {
if (u(t) && (e = t, t = void 0), t = t || "", null != e) return Sn(t, e, n, "month");
var r, i = [];
for (r = 0; r < 12; r++) i[r] = Sn(t, r, n, "month");
return i;
}
function Tn(t, e, n, r) {
"boolean" == typeof t ? (u(e) && (n = e, e = void 0), e = e || "") : (n = e = t, 
t = !1, u(e) && (n = e, e = void 0), e = e || "");
var i, o = fe(), s = t ? o._week.dow : 0;
if (null != n) return Sn(e, (n + s) % 7, r, "day");
var a = [];
for (i = 0; i < 7; i++) a[i] = Sn(e, (i + s) % 7, r, "day");
return a;
}
bn.calendar = function(t, e, n) {
var r = this._calendar[t] || this._calendar.sameElse;
return x(r) ? r.call(e, n) : r;
}, bn.longDateFormat = function(t) {
var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
return t.slice(1);
}), this._longDateFormat[t]);
}, bn.invalidDate = function() {
return this._invalidDate;
}, bn.ordinal = function(t) {
return this._ordinal.replace("%d", t);
}, bn.preparse = Mn, bn.postformat = Mn, bn.relativeTime = function(t, e, n, r) {
var i = this._relativeTime[n];
return x(i) ? i(t, e, n, r) : i.replace(/%d/i, t);
}, bn.pastFuture = function(t, e) {
var n = this._relativeTime[t > 0 ? "future" : "past"];
return x(n) ? n(e) : n.replace(/%s/i, e);
}, bn.set = function(t) {
var e, n;
for (n in t) x(e = t[n]) ? this[n] = e : this["_" + n] = e;
this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}, bn.months = function(t, e) {
return t ? o(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Pt).test(e) ? "format" : "standalone"][t.month()] : o(this._months) ? this._months : this._months.standalone;
}, bn.monthsShort = function(t, e) {
return t ? o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Pt.test(e) ? "format" : "standalone"][t.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}, bn.monthsParse = function(t, e, n) {
var r, i, o;
if (this._monthsParseExact) return function(t, e, n) {
var r, i, o, s = t.toLocaleLowerCase();
if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
this._shortMonthsParse = [], r = 0; r < 12; ++r) o = f([ 2e3, r ]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), 
this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
return n ? "MMM" === e ? -1 !== (i = Lt.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Lt.call(this._longMonthsParse, s)) ? i : null : "MMM" === e ? -1 !== (i = Lt.call(this._shortMonthsParse, s)) ? i : -1 !== (i = Lt.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Lt.call(this._longMonthsParse, s)) ? i : -1 !== (i = Lt.call(this._shortMonthsParse, s)) ? i : null;
}.call(this, t, e, n);
for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
r = 0; r < 12; r++) {
if (i = f([ 2e3, r ]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), 
this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), 
n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), 
this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r;
if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r;
if (!n && this._monthsParse[r].test(t)) return r;
}
}, bn.monthsRegex = function(t) {
return this._monthsParseExact ? (d(this, "_monthsRegex") || Ut.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = Rt), 
this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
}, bn.monthsShortRegex = function(t) {
return this._monthsParseExact ? (d(this, "_monthsRegex") || Ut.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = jt), 
this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
}, bn.week = function(t) {
return zt(t, this._week.dow, this._week.doy).week;
}, bn.firstDayOfYear = function() {
return this._week.doy;
}, bn.firstDayOfWeek = function() {
return this._week.dow;
}, bn.weekdays = function(t, e) {
var n = o(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
return !0 === t ? Jt(n, this._week.dow) : t ? n[t.day()] : n;
}, bn.weekdaysMin = function(t) {
return !0 === t ? Jt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
}, bn.weekdaysShort = function(t) {
return !0 === t ? Jt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
}, bn.weekdaysParse = function(t, e, n) {
var r, i, o;
if (this._weekdaysParseExact) return function(t, e, n) {
var r, i, o, s = t.toLocaleLowerCase();
if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = f([ 2e3, 1 ]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), 
this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
return n ? "dddd" === e ? -1 !== (i = Lt.call(this._weekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = Lt.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Lt.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === e ? -1 !== (i = Lt.call(this._weekdaysParse, s)) ? i : -1 !== (i = Lt.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Lt.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = Lt.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Lt.call(this._weekdaysParse, s)) ? i : -1 !== (i = Lt.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Lt.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = Lt.call(this._weekdaysParse, s)) ? i : -1 !== (i = Lt.call(this._shortWeekdaysParse, s)) ? i : null;
}.call(this, t, e, n);
for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
if (i = f([ 2e3, 1 ]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), 
this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), 
this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), 
this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), 
this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t)) return r;
if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t)) return r;
if (n && "dd" === e && this._minWeekdaysParse[r].test(t)) return r;
if (!n && this._weekdaysParse[r].test(t)) return r;
}
}, bn.weekdaysRegex = function(t) {
return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || te.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Xt), 
this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
}, bn.weekdaysShortRegex = function(t) {
return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || te.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), 
this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}, bn.weekdaysMinRegex = function(t) {
return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || te.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), 
this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}, bn.isPM = function(t) {
return "p" === (t + "").toLowerCase().charAt(0);
}, bn.meridiem = function(t, e, n) {
return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}, de("en", {
dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
ordinal: function(t) {
var e = t % 10, n = 1 === S(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
return t + n;
}
}), i.lang = k("moment.lang is deprecated. Use moment.locale instead.", de), i.langData = k("moment.langData is deprecated. Use moment.localeData instead.", fe);
var kn = Math.abs;
function Yn(t, e, n, r) {
var i = Je(e, n);
return t._milliseconds += r * i._milliseconds, t._days += r * i._days, t._months += r * i._months, 
t._bubble();
}
function Ln(t) {
return t < 0 ? Math.floor(t) : Math.ceil(t);
}
function En(t) {
return 4800 * t / 146097;
}
function xn(t) {
return 146097 * t / 4800;
}
function On(t) {
return function() {
return this.as(t);
};
}
var Cn = On("ms"), An = On("s"), Pn = On("m"), Hn = On("h"), Nn = On("d"), Fn = On("w"), Wn = On("M"), jn = On("Q"), Rn = On("y");
function Un(t) {
return function() {
return this.isValid() ? this._data[t] : NaN;
};
}
var In = Un("milliseconds"), Gn = Un("seconds"), Vn = Un("minutes"), zn = Un("hours"), qn = Un("days"), Jn = Un("months"), Zn = Un("years"), Bn = Math.round, $n = {
ss: 44,
s: 45,
m: 45,
h: 22,
d: 26,
M: 11
}, Xn = Math.abs;
function Kn(t) {
return (t > 0) - (t < 0) || +t;
}
function Qn() {
if (!this.isValid()) return this.localeData().invalidDate();
var t, e, n = Xn(this._milliseconds) / 1e3, r = Xn(this._days), i = Xn(this._months);
t = b(n / 60), e = b(t / 60), n %= 60, t %= 60;
var o = b(i / 12), s = i %= 12, a = r, u = e, l = t, c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "", d = this.asSeconds();
if (!d) return "P0D";
var h = d < 0 ? "-" : "", f = Kn(this._months) !== Kn(d) ? "-" : "", m = Kn(this._days) !== Kn(d) ? "-" : "", _ = Kn(this._milliseconds) !== Kn(d) ? "-" : "";
return h + "P" + (o ? f + o + "Y" : "") + (s ? f + s + "M" : "") + (a ? m + a + "D" : "") + (u || l || c ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (c ? _ + c + "S" : "");
}
var tr = Ne.prototype;
return tr.isValid = function() {
return this._isValid;
}, tr.abs = function() {
var t = this._data;
return this._milliseconds = kn(this._milliseconds), this._days = kn(this._days), 
this._months = kn(this._months), t.milliseconds = kn(t.milliseconds), t.seconds = kn(t.seconds), 
t.minutes = kn(t.minutes), t.hours = kn(t.hours), t.months = kn(t.months), t.years = kn(t.years), 
this;
}, tr.add = function(t, e) {
return Yn(this, t, e, 1);
}, tr.subtract = function(t, e) {
return Yn(this, t, e, -1);
}, tr.as = function(t) {
if (!this.isValid()) return NaN;
var e, n, r = this._milliseconds;
if ("month" === (t = H(t)) || "quarter" === t || "year" === t) switch (e = this._days + r / 864e5, 
n = this._months + En(e), t) {
case "month":
return n;

case "quarter":
return n / 3;

case "year":
return n / 12;
} else switch (e = this._days + Math.round(xn(this._months)), t) {
case "week":
return e / 7 + r / 6048e5;

case "day":
return e + r / 864e5;

case "hour":
return 24 * e + r / 36e5;

case "minute":
return 1440 * e + r / 6e4;

case "second":
return 86400 * e + r / 1e3;

case "millisecond":
return Math.floor(864e5 * e) + r;

default:
throw new Error("Unknown unit " + t);
}
}, tr.asMilliseconds = Cn, tr.asSeconds = An, tr.asMinutes = Pn, tr.asHours = Hn, 
tr.asDays = Nn, tr.asWeeks = Fn, tr.asMonths = Wn, tr.asQuarters = jn, tr.asYears = Rn, 
tr.valueOf = function() {
return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12) : NaN;
}, tr._bubble = function() {
var t, e, n, r, i, o = this._milliseconds, s = this._days, a = this._months, u = this._data;
return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Ln(xn(a) + s), 
s = 0, a = 0), u.milliseconds = o % 1e3, t = b(o / 1e3), u.seconds = t % 60, e = b(t / 60), 
u.minutes = e % 60, n = b(e / 60), u.hours = n % 24, s += b(n / 24), i = b(En(s)), 
a += i, s -= Ln(xn(i)), r = b(a / 12), a %= 12, u.days = s, u.months = a, u.years = r, 
this;
}, tr.clone = function() {
return Je(this);
}, tr.get = function(t) {
return t = H(t), this.isValid() ? this[t + "s"]() : NaN;
}, tr.milliseconds = In, tr.seconds = Gn, tr.minutes = Vn, tr.hours = zn, tr.days = qn, 
tr.weeks = function() {
return b(this.days() / 7);
}, tr.months = Jn, tr.years = Zn, tr.humanize = function(t) {
if (!this.isValid()) return this.localeData().invalidDate();
var e = this.localeData(), n = function(t, e, n) {
var r = Je(t).abs(), i = Bn(r.as("s")), o = Bn(r.as("m")), s = Bn(r.as("h")), a = Bn(r.as("d")), u = Bn(r.as("M")), l = Bn(r.as("y")), c = i <= $n.ss && [ "s", i ] || i < $n.s && [ "ss", i ] || o <= 1 && [ "m" ] || o < $n.m && [ "mm", o ] || s <= 1 && [ "h" ] || s < $n.h && [ "hh", s ] || a <= 1 && [ "d" ] || a < $n.d && [ "dd", a ] || u <= 1 && [ "M" ] || u < $n.M && [ "MM", u ] || l <= 1 && [ "y" ] || [ "yy", l ];
return c[2] = e, c[3] = +t > 0, c[4] = n, function(t, e, n, r, i) {
return i.relativeTime(e || 1, !!n, t, r);
}.apply(null, c);
}(this, !t, e);
return t && (n = e.pastFuture(+this, n)), e.postformat(n);
}, tr.toISOString = Qn, tr.toString = Qn, tr.toJSON = Qn, tr.locale = en, tr.localeData = rn, 
tr.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Qn), 
tr.lang = nn, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), ct("x", ot), ct("X", /[+-]?\d+(\.\d{1,3})?/), 
mt("X", function(t, e, n) {
n._d = new Date(1e3 * parseFloat(t, 10));
}), mt("x", function(t, e, n) {
n._d = new Date(S(t));
}), i.version = "2.24.0", e = Oe, i.fn = vn, i.min = function() {
return Pe("isBefore", [].slice.call(arguments, 0));
}, i.max = function() {
return Pe("isAfter", [].slice.call(arguments, 0));
}, i.now = function() {
return Date.now ? Date.now() : +new Date();
}, i.utc = f, i.unix = function(t) {
return Oe(1e3 * t);
}, i.months = function(t, e) {
return Dn(t, e, "months");
}, i.isDate = l, i.locale = de, i.invalid = p, i.duration = Je, i.isMoment = M, 
i.weekdays = function(t, e, n) {
return Tn(t, e, n, "weekdays");
}, i.parseZone = function() {
return Oe.apply(null, arguments).parseZone();
}, i.localeData = fe, i.isDuration = Fe, i.monthsShort = function(t, e) {
return Dn(t, e, "monthsShort");
}, i.weekdaysMin = function(t, e, n) {
return Tn(t, e, n, "weekdaysMin");
}, i.defineLocale = he, i.updateLocale = function(t, e) {
if (null != e) {
var n, r, i = se;
null != (r = ce(t)) && (i = r._config), e = O(i, e), (n = new C(e)).parentLocale = ae[t], 
ae[t] = n, de(t);
} else null != ae[t] && (null != ae[t].parentLocale ? ae[t] = ae[t].parentLocale : null != ae[t] && delete ae[t]);
return ae[t];
}, i.locales = function() {
return Y(ae);
}, i.weekdaysShort = function(t, e, n) {
return Tn(t, e, n, "weekdaysShort");
}, i.normalizeUnits = H, i.relativeTimeRounding = function(t) {
return void 0 === t ? Bn : "function" == typeof t && (Bn = t, !0);
}, i.relativeTimeThreshold = function(t, e) {
return void 0 !== $n[t] && (void 0 === e ? $n[t] : ($n[t] = e, "s" === t && ($n.ss = e - 1), 
!0));
}, i.calendarFormat = function(t, e) {
var n = t.diff(e, "days", !0);
return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}, i.prototype = vn, i.HTML5_FMT = {
DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
DATE: "YYYY-MM-DD",
TIME: "HH:mm",
TIME_SECONDS: "HH:mm:ss",
TIME_MS: "HH:mm:ss.SSS",
WEEK: "GGGG-[W]WW",
MONTH: "YYYY-MM"
}, i;
}();
}).call(this, n(50)(t));
},
40: function(t, e, n) {
!function(t) {
"use strict";
t.defineLocale("en-ie", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY HH:mm",
LLLL: "dddd D MMMM YYYY HH:mm"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10, n = 1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
return t + n;
},
week: {
dow: 1,
doy: 4
}
});
}(n(4));
},
41: function(t, e, n) {
!function(t) {
"use strict";
t.defineLocale("en-il", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY HH:mm",
LLLL: "dddd, D MMMM YYYY HH:mm"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10, n = 1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
return t + n;
}
});
}(n(4));
},
411: function(t, e, n) {
var r = n(337);
t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
return "String" == r(t) ? t.split("") : Object(t);
};
},
413: function(t, e, n) {
var r = n(328), i = n(287), o = n(347);
t.exports = function(t) {
return function(e, n, s) {
var a, u = r(e), l = i(u.length), c = o(s, l);
if (t && n != n) {
for (;l > c; ) if ((a = u[c++]) != a) return !0;
} else for (;l > c; c++) if ((t || c in u) && u[c] === n) return t || c || 0;
return !t && -1;
};
};
},
42: function(t, e, n) {
!function(t) {
"use strict";
t.defineLocale("en-nz", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "h:mm A",
LTS: "h:mm:ss A",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY h:mm A",
LLLL: "dddd, D MMMM YYYY h:mm A"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10, n = 1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
return t + n;
},
week: {
dow: 1,
doy: 4
}
});
}(n(4));
},
424: function(t, e, n) {
var r = n(281), i = n(113).document, o = r(i) && r(i.createElement);
t.exports = function(t) {
return o ? i.createElement(t) : {};
};
},
425: function(t, e, n) {
var r = n(286), i = n(113), o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
(t.exports = function(t, e) {
return o[t] || (o[t] = void 0 !== e ? e : {});
})("versions", []).push({
version: r.version,
mode: n(345) ? "pure" : "global",
copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
});
},
427: function(t, e, n) {
var r = n(425)("keys"), i = n(344);
t.exports = function(t) {
return r[t] || (r[t] = i(t));
};
},
428: function(t, e) {
t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},
430: function(t, e, n) {
var r = n(113).document;
t.exports = r && r.documentElement;
},
439: function(t, e, n) {
var r = n(281), i = n(337), o = n(283)("match");
t.exports = function(t) {
var e;
return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
};
},
44: function(t, e, n) {
var r = {
"./en-SG": 208,
"./en-SG.js": 208,
"./en-au": 37,
"./en-au.js": 37,
"./en-ca": 38,
"./en-ca.js": 38,
"./en-gb": 39,
"./en-gb.js": 39,
"./en-ie": 40,
"./en-ie.js": 40,
"./en-il": 41,
"./en-il.js": 41,
"./en-nz": 42,
"./en-nz.js": 42
};
function i(t) {
var e = o(t);
return n(e);
}
function o(t) {
if (!n.o(r, t)) {
var e = new Error("Cannot find module '" + t + "'");
throw e.code = "MODULE_NOT_FOUND", e;
}
return r[t];
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, t.exports = i, i.id = 44;
},
446: function(t, e, n) {
"use strict";
var r = n(282);
t.exports = function() {
var t = r(this), e = "";
return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), 
t.unicode && (e += "u"), t.sticky && (e += "y"), e;
};
},
449: function(t, e, n) {
t.exports = !n(285) && !n(93)(function() {
return 7 != Object.defineProperty(n(424)("div"), "a", {
get: function() {
return 7;
}
}).a;
});
},
451: function(t, e, n) {
var r = n(290), i = n(328), o = n(413)(!1), s = n(427)("IE_PROTO");
t.exports = function(t, e) {
var n, a = i(t), u = 0, l = [];
for (n in a) n != s && r(a, n) && l.push(n);
for (;e.length > u; ) r(a, n = e[u++]) && (~o(l, n) || l.push(n));
return l;
};
},
452: function(t, e, n) {
var r = n(284), i = n(282), o = n(346);
t.exports = n(285) ? Object.defineProperties : function(t, e) {
i(t);
for (var n, s = o(e), a = s.length, u = 0; a > u; ) r.f(t, n = s[u++], e[n]);
return t;
};
},
463: function(t, e, n) {
"use strict";
var r = n(348), i = n(343), o = n(351), s = {};
n(327)(s, n(283)("iterator"), function() {
return this;
}), t.exports = function(t, e, n) {
t.prototype = r(s, {
next: i(1, n)
}), o(t, e + " Iterator");
};
},
50: function(t, e) {
t.exports = function(t) {
return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), 
Object.defineProperty(t, "loaded", {
enumerable: !0,
get: function() {
return t.l;
}
}), Object.defineProperty(t, "id", {
enumerable: !0,
get: function() {
return t.i;
}
}), t.webpackPolyfill = 1), t;
};
},
53: function(t, e, n) {
const r = n(0).lang;
let i = n(4);
"ru" === r ? (n(74), i.updateLocale("ru", {
monthsShort: {
format: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_"),
standalone: "янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_")
}
})) : "zh" === r ? n(75) : "en" !== r && n(44)("./" + r), t.exports = i;
},
58: function(t, e, n) {
let r = n(59), i = n(62), o = [];
e.iframe = function(t) {
r.async(t, function(e, n) {
n && (t.style.height = n + "px");
});
}, e.codeTabs = function(t) {
function e() {
let e = t.closest(".code-tabs"), n = (t.closest("[data-code-tabs-content]"), e.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? e.classList.add("code-tabs_scroll") : e.classList.remove("code-tabs_scroll");
}
e(), o.push(e);
}, window.addEventListener("resize", i(function() {
o.forEach(function(t) {
t();
});
}, 200));
},
59: function(t, e, n) {
let r = n(60);
function i(t, e) {
let n = setTimeout(function() {
e(new Error("timeout"));
}, 500);
function i(t, r) {
clearTimeout(n), e(t, r);
}
try {
(t.contentDocument || t.contentWindow.document).body;
} catch (t) {
!function(t, e) {
throw new Error("Not implemented yet");
}();
}
if (!t.offsetWidth) {
let e = t.cloneNode(!0);
return e.name = "", e.style.height = "50px", e.style.position = "absolute", e.style.display = "block", 
e.style.top = "10000px", e.onload = function() {
let n = r(this.contentDocument);
t.style.display = "block", e.remove(), i(null, n);
}, void document.body.appendChild(e);
}
t.style.display = "block", t.style.height = "1px";
let o = r(t.contentDocument);
t.style.height = "", i(null, o);
}
i.async = function(t, e) {
setTimeout(function() {
i(t, e);
}, 0);
}, t.exports = i;
},
60: function(t, e, n) {
let r, i = n(61);
t.exports = function(t) {
t = t || document;
let e = Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight);
return t.documentElement.scrollWidth > t.documentElement.clientWidth && (r || (r = i()), 
e += r), e;
};
},
61: function(t, e) {
t.exports = function() {
let t = document.createElement("div");
if (t.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(t);
let e = t.offsetWidth;
t.style.overflow = "scroll";
let n = document.createElement("div");
n.style.width = "100%", t.appendChild(n);
let r = n.offsetWidth;
return t.parentNode.removeChild(t), e - r;
};
},
62: function(t, e) {
t.exports = function(t, e) {
let n, r, i = !1;
return function o() {
if (i) return n = arguments, void (r = this);
t.apply(this, arguments), i = !0, setTimeout(function() {
i = !1, n && (o.apply(r, n), n = r = null);
}, e);
};
};
},
665: function(t, e) {
const n = "//" + window.disqus_shortname + ".disqus.com/embed.js", r = "//" + window.disqus_shortname + ".disqus.com/count.js";
function i() {
const t = document.getElementById("disqus_thread");
if (t.classList.contains("disqus-loading")) return;
t.classList.add("disqus-loading");
const e = new Spinner({
size: "large"
});
t.append(e.elem), e.start();
const r = document.createElement("script");
r.src = n, r.setAttribute("data-timestamp", +new Date()), document.head.appendChild(r), 
r.onload = (() => {
e.stop(), e.elem.remove();
});
}
e.loadDisqus = i, e.loadDisqusComments = function() {
const t = document.getElementById("disqus_comments");
if (!t) return;
window.disqus_config(), t.dataset.disqusIdentifier = window.page.identifier;
let e = document.createElement("script");
e.id = "dsq-count-scr", e.src = r, e.setAttribute("data-timestamp", +new Date()), 
document.head.appendChild(e);
}, e.loadDisqusIfVisible = function() {
if (!window.disqus_enabled) return;
const t = document.getElementById("disqus_thread");
if (new MutationObserver(t => {
for (let e of t) {
if ("childList" !== e.type) return;
if (!e.addedNodes) return;
e.addedNodes.forEach(t => {
"IFRAME" !== t.tagName || t.src.includes("embed/comments") || t.remove();
});
}
}).observe(t, {
childList: !0
}), document.querySelector('script[src="'.concat(n, '"]'))) return;
if (t.hasChildNodes()) return;
const e = t.getBoundingClientRect();
e.top > document.documentElement.clientHeight + 150 || e.bottom < -150 || i();
};
},
74: function(t, e, n) {
!function(t) {
"use strict";
function e(t, e, n) {
var r, i, o = {
ss: e ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
mm: e ? "минута_минуты_минут" : "минуту_минуты_минут",
hh: "час_часа_часов",
dd: "день_дня_дней",
MM: "месяц_месяца_месяцев",
yy: "год_года_лет"
};
return "m" === n ? e ? "минута" : "минуту" : t + " " + (r = +t, i = o[n].split("_"), 
r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2]);
}
var n = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
t.defineLocale("ru", {
months: {
format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
},
monthsShort: {
format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
},
weekdays: {
standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
},
weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
monthsParse: n,
longMonthsParse: n,
shortMonthsParse: n,
monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
longDateFormat: {
LT: "H:mm",
LTS: "H:mm:ss",
L: "DD.MM.YYYY",
LL: "D MMMM YYYY г.",
LLL: "D MMMM YYYY г., H:mm",
LLLL: "dddd, D MMMM YYYY г., H:mm"
},
calendar: {
sameDay: "[Сегодня, в] LT",
nextDay: "[Завтра, в] LT",
lastDay: "[Вчера, в] LT",
nextWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В следующее] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В следующий] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В следующую] dddd, [в] LT";
}
},
lastWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В прошлое] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В прошлый] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В прошлую] dddd, [в] LT";
}
},
sameElse: "L"
},
relativeTime: {
future: "через %s",
past: "%s назад",
s: "несколько секунд",
ss: e,
m: e,
mm: e,
h: "час",
hh: e,
d: "день",
dd: e,
M: "месяц",
MM: e,
y: "год",
yy: e
},
meridiemParse: /ночи|утра|дня|вечера/i,
isPM: function(t) {
return /^(дня|вечера)$/.test(t);
},
meridiem: function(t, e, n) {
return t < 4 ? "ночи" : t < 12 ? "утра" : t < 17 ? "дня" : "вечера";
},
dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
ordinal: function(t, e) {
switch (e) {
case "M":
case "d":
case "DDD":
return t + "-й";

case "D":
return t + "-го";

case "w":
case "W":
return t + "-я";

default:
return t;
}
},
week: {
dow: 1,
doy: 4
}
});
}(n(4));
},
75: function(t, e, n) {
!function(t) {
"use strict";
t.defineLocale("zh-cn", {
months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
weekdaysMin: "日_一_二_三_四_五_六".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "YYYY/MM/DD",
LL: "YYYY年M月D日",
LLL: "YYYY年M月D日Ah点mm分",
LLLL: "YYYY年M月D日ddddAh点mm分",
l: "YYYY/M/D",
ll: "YYYY年M月D日",
lll: "YYYY年M月D日 HH:mm",
llll: "YYYY年M月D日dddd HH:mm"
},
meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
meridiemHour: function(t, e) {
return 12 === t && (t = 0), "凌晨" === e || "早上" === e || "上午" === e ? t : "下午" === e || "晚上" === e ? t + 12 : t >= 11 ? t : t + 12;
},
meridiem: function(t, e, n) {
var r = 100 * t + e;
return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上";
},
calendar: {
sameDay: "[今天]LT",
nextDay: "[明天]LT",
nextWeek: "[下]ddddLT",
lastDay: "[昨天]LT",
lastWeek: "[上]ddddLT",
sameElse: "L"
},
dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
ordinal: function(t, e) {
switch (e) {
case "d":
case "D":
case "DDD":
return t + "日";

case "M":
return t + "月";

case "w":
case "W":
return t + "周";

default:
return t;
}
},
relativeTime: {
future: "%s内",
past: "%s前",
s: "几秒",
ss: "%d 秒",
m: "1 分钟",
mm: "%d 分钟",
h: "1 小时",
hh: "%d 小时",
d: "1 天",
dd: "%d 天",
M: "1 个月",
MM: "%d 个月",
y: "1 年",
yy: "%d 年"
},
week: {
dow: 1,
doy: 4
}
});
}(n(4));
},
93: function(t, e) {
t.exports = function(t) {
try {
return !!t();
} catch (t) {
return !0;
}
};
}
});