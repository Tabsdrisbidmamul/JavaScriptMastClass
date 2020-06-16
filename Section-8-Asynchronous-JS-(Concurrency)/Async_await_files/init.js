var init = function(e) {
var t = {};
function o(n) {
if (t[n]) return t[n].exports;
var s = t[n] = {
i: n,
l: !1,
exports: {}
};
return e[n].call(s.exports, s, s.exports, o), s.l = !0, s.exports;
}
return o.m = e, o.c = t, o.d = function(e, t, n) {
o.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: n
});
}, o.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, o.t = function(e, t) {
if (1 & t && (e = o(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var n = Object.create(null);
if (o.r(n), Object.defineProperty(n, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var s in e) o.d(n, s, function(t) {
return e[t];
}.bind(null, s));
return n;
}, o.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return o.d(t, "a", t), t;
}, o.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, o.p = "/pack/", o(o.s = 274);
}({
143: function(e, t) {
e.exports = class {
constructor(e = {}) {
this.options = e, this.render(), this.setHasClose(void 0 === e.hasClose || e.hasClose), 
this.onClick = this.onClick.bind(this), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), 
this.elem.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onDocumentKeyDown);
}
setHasClose(e) {
this._hasClose = e, this._hasClose ? this.elem.classList.add("modal__has-close") : this.elem.classList.remove("modal__has-close");
}
render() {
document.body.insertAdjacentHTML("beforeEnd", '<div class="modal"><div class="modal__dialog"><button class="close-button modal__close"></button><div class="modal__content"></div></div></div>'), 
document.body.classList.add("paranja-open"), this.elem = document.body.lastChild, 
this.contentElem = this.elem.querySelector(".modal__content");
}
onClick(e) {
e.target.classList.contains("modal__close") && (this.remove(), e.preventDefault());
}
onDocumentKeyDown(e) {
27 === e.keyCode && (e.preventDefault(), this.remove());
}
showOverlay() {
this.contentElem.classList.add("modal-overlay_light");
}
hideOverlay() {
this.contentElem.classList.remove("modal-overlay_light");
}
setContent(e) {
"string" == typeof e ? this.contentElem.innerHTML = e : (this.contentElem.innerHTML = "", 
this.contentElem.appendChild(e));
let t = this.contentElem.querySelector("[data-modal-autofocus],[autofocus]");
t && t.focus();
}
remove() {
document.body.classList.remove("paranja-open"), document.body.removeChild(this.elem), 
document.removeEventListener("keydown", this.onDocumentKeyDown), this.elem.dispatchEvent(new CustomEvent("modal-remove"));
}
};
},
209: function(e, t) {
window.initSponsorBar = function() {
let e = document.getElementById("sponsorBar"), t = document.createElement("div");
t.id = "codefund", e.append(t);
let o = document.createElement("script");
o.src = "https://codefund.io/properties/339/funder.js", e.append(o);
};
},
274: function(e, t, o) {
o(275), window.acceptGdpr = o(276), window.Modal = o(143), o(277), window.fontTest = o(278), 
window.showTopNotification = o(279), o(209);
},
275: function(e, t) {
try {
window.localStorage._test = 1, delete window.localStorage._test;
} catch (e) {
try {
window.localStorage = {};
} catch (e) {}
}
},
276: function(e, t, o) {
let n = o(143);
e.exports = function(e) {
function t(o) {
t.triggered || (t.triggered = !0, e(o));
}
if (localStorage.gdprAccepted) return t(!0);
let o = new n();
o.setContent('<div class="gdpr">\n    <h1 class="gdpr__title">'.concat("This website uses cookies", '</h1>\n    <form class="gdpr__form">\n      <p class="gdpr__text">').concat('We use browser technologies such as cookies and local storage to store your preferences. You need to accept our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Use</a> for us to do so.', '</p>\n      \n      <input class="button button_action" autofocus name="accept" type="submit" value="').concat("Accept", '">\n      <input class="button button_cancel" name="cancel" type="button" value="').concat("Cancel", '">\n      \n    </form>\n    </div>\n  ')), 
o.elem.querySelector("form").addEventListener("submit", e => {
e.preventDefault(), localStorage.gdprAccepted = 1, o.remove(), t(!0);
}), o.elem.querySelector("form").elements.cancel.addEventListener("click", e => {
e.preventDefault(), o.remove(), t(!1);
}), o.elem.addEventListener("modal-remove", function() {
setTimeout(() => t(!1), 10);
});
};
},
277: function(e, t) {
document.addEventListener("click", function(e) {
let t = e.target;
for (;t; ) {
if (!t.className.match) return;
if (t.className.match(/_unready\b/)) return void e.preventDefault();
t = t.parentElement;
}
}), document.addEventListener("submit", function(e) {
e.target.className.match && e.target.className.match(/_unready\b/) && e.preventDefault();
});
},
278: function(e, t) {
e.exports = function() {
let e = document.createElement("span");
document.body.appendChild(e), e.className = "font-test", e.style.fontFamily = "serif";
let t = e.offsetWidth;
e.style.fontFamily = "", function o() {
t != e.offsetWidth ? document.body.classList.remove("no-icons") : setTimeout(o, 100);
}();
};
},
279: function(e, t) {
e.exports = function() {
let e, t = document.querySelector(".notification_top"), o = t.id;
if (!o) throw new Error("Top notification must have an id");
try {
e = JSON.parse(localStorage.topNotificationsHidden);
} catch (t) {
e = [];
}
e.includes(o) || (t.querySelector("button").onclick = (() => {
e.push(o), localStorage.topNotificationsHidden = JSON.stringify(e), t.style.display = "none", 
window.dispatchEvent(new CustomEvent("resize-internal"));
}), t.style.display = "");
};
}
});