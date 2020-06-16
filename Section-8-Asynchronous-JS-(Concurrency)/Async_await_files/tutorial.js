var tutorial = function(e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var i = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
}
return n.m = e, n.c = t, n.d = function(e, t, r) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: r
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
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function(t) {
return e[t];
}.bind(null, i));
return r;
}, n.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "/pack/", n(n.s = 136);
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
1: function(e, t, n) {
"use strict";
const r = new (n(6))("en");
let i = console.error;
function s(e) {
return r.hasPhrase(o, e) || i("No such phrase", e), r.t(o, ...arguments);
}
e.exports = s;
const o = n(0).lang;
"en" !== o && r.setFallback(o, "en"), r.add = ((...e) => r.addPhrase(o, ...e)), 
s.i18n = r;
},
10: function(e, t) {
function n(e) {
if (e = e || {}, this.elem = e.elem, this.size = e.size || "medium", this.class = e.class ? " " + e.class : "", 
this.elemClass = e.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
n.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, n.prototype.stop = function() {
let e = this.elem.querySelector(".spinner");
e && (e.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = n, e.exports = n;
},
102: function(e, t) {
e.exports = function(e) {
var t = typeof e;
return null != e && ("object" == t || "function" == t);
};
},
105: function(e, t) {
e.exports = function(e) {
let t = e.getBoundingClientRect(), n = 0;
if (t.top < 0) n = t.bottom; else {
if (!(t.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
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
let r = e[t], i = r.dataset.sticky ? JSON.parse(r.dataset.sticky) : {}, s = i.bottomLimit ? document.querySelector(i.bottomLimit) : null, o = i.container ? document.querySelector(i.container) : document.body, a = !i.minWidth || document.documentElement.clientWidth > i.minWidth;
if (r.placeholder) (r.placeholder.getBoundingClientRect().top > 0 || !a) && (r.style.cssText = "", 
r.classList.remove("sticky"), r.placeholder.parentNode.insertBefore(r, r.placeholder), 
r.placeholder.remove(), r.placeholder = null); else if (r.placeholder && s) s.getBoundingClientRect().top <= r.offsetHeight ? ("fixed" == r.style.position && (r.style.top = window.pageYOffset + "px"), 
r.style.position = "absolute") : (r.style.position = "fixed", r.style.top = 0); else if (r.getBoundingClientRect().top < 0 && a) {
if (r.style.cssText) return;
let e, t;
i.saveRight ? t = document.documentElement.clientWidth - r.getBoundingClientRect().right : e = r.getBoundingClientRect().left;
let s = i.noPlaceholder ? document.createElement("div") : n(r), a = r.offsetWidth;
r.after(s), o.appendChild(r), r.classList.add("sticky"), r.style.position = "fixed", 
r.style.top = 0, i.saveRight ? r.style.right = t + "px" : r.style.left = e + "px", 
r.style.zIndex = 101, r.style.background = "white", r.style.margin = 0, r.style.width = a + "px", 
r.placeholder = s;
}
}
};
},
12: function(e, t) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
125: function(e, t, n) {
(document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop()).setAttribute("data-manual", 1), 
n(55);
let r = n(126), i = n(128);
function s(e) {
!function(e) {
let t = e.querySelectorAll(".code-example:not([data-prism-highlighted])");
for (let e of t) new r(e), e.setAttribute("data-prism-highlighted", "1");
}(e), function(e) {
let t = e.querySelectorAll("div.code-tabs:not([data-prism-highlighted])");
for (let e of t) new i(e), e.setAttribute("data-prism-highlighted", "1");
}(e);
}
t.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
s(document);
});
}, t.highlight = s;
},
126: function(e, t, n) {
let r = n(58), i = n(105), s = n(80), o = n(127);
e.exports = function(e) {
let t = e.querySelector("pre"), n = Array.from(t.childNodes).find(e => "CODE" === e.tagName), a = n.textContent, l = a;
e.hasAttribute("data-async") && (l = "(async () => {\n".concat(a, "\n})()")), Prism.highlightElement(n);
let c = s(t.innerHTML);
t.insertAdjacentHTML("beforeEnd", c);
let u = o(JSON.parse(e.getAttribute("data-highlight")));
t.insertAdjacentHTML("afterBegin", u);
let d, p, h, f = t.classList.contains("language-javascript"), m = t.classList.contains("language-markup"), g = +e.getAttribute("data-trusted");
!+e.getAttribute("data-no-strict") && f && (l = "'use strict';\n\n" + l);
let b = !0;
if (!f && !m) return;
let v = e.querySelector('[data-action="run"]');
v && (v.onclick = function() {
return this.blur(), T(), !1;
});
let y = e.querySelector('[data-action="edit"]');
function E() {
let e = d.contentWindow;
"function" == typeof e.postMessage ? e.postMessage(l, "https://lookatcode.com/showjs") : alert("Sorry, your browser is too old");
}
function w() {
if (e.hasAttribute("data-global")) {
p || ((p = document.createElement("iframe")).className = "js-frame", p.style.width = 0, 
p.style.height = 0, p.style.border = "none", p.name = "js-global-frame", document.body.appendChild(p));
let e = document.createElement("form");
e.style.display = "none", e.method = "POST", e.enctype = "multipart/form-data", 
e.action = "https://lookatcode.com/showhtml", e.target = "js-global-frame";
let t = document.createElement("textarea");
t.name = "code", t.value = _("<script>\n".concat(l, "\n<\/script>")), e.appendChild(t), 
p.parentNode.insertBefore(e, p.nextSibling), e.submit(), e.remove();
} else if (g) {
if (e.hasAttribute("data-autorun")) return void function(e) {
let t = document.createElement("script");
t.type = "module", t.text = e, document.head.appendChild(t).parentNode.removeChild(t);
}(l);
try {
window.eval.call(window, l);
} catch (e) {
alert(e.constructor.name + ": " + e.message);
}
} else e.hasAttribute("data-refresh") && d && (d.remove(), d = null), d ? E() : ((d = document.createElement("iframe")).className = "js-frame", 
d.src = "https://lookatcode.com/showjs", d.style.width = 0, d.style.height = 0, 
d.style.border = "none", d.onload = function() {
E();
}, document.body.appendChild(d));
}
function _(e) {
if (e.match(/^\s*<!doctype/i)) return e;
let t = e;
return e.match(/<body/i) || (t = "<body>\n".concat(t, "\n</body>")), t = "<!doctype html>\n" + t;
}
function T() {
f ? w() : function() {
let t;
if (h && e.hasAttribute("data-refresh") && (h.remove(), h = null), h || (h = e.querySelector(".code-result")), 
h) t = h.querySelector("iframe"); else {
if ((h = document.createElement("div")).className = "code-result code-example__result", 
(t = document.createElement("iframe")).name = "frame-" + Math.random(), t.className = "code-result__iframe", 
"0" === e.getAttribute("data-demo-height")) h.style.display = "none"; else if (e.hasAttribute("data-demo-height")) {
let n = +e.getAttribute("data-demo-height");
t.style.height = n + "px";
}
h.appendChild(t), e.appendChild(h);
}
if (g) {
let n = t.contentDocument || t.contentWindow.document;
n.open(), n.write(_(a)), n.close(), e.hasAttribute("data-demo-height") || r.iframe(t), 
b && e.hasAttribute("data-autorun") || i(h) || h.scrollIntoView(!1);
} else {
let n = document.createElement("form");
n.style.display = "none", n.method = "POST", n.enctype = "multipart/form-data", 
n.action = "https://lookatcode.com/showhtml", n.target = t.name;
let s = document.createElement("textarea");
s.name = "code", s.value = _(a), n.appendChild(s), t.parentNode.insertBefore(n, t.nextSibling), 
n.submit(), n.remove(), b && e.hasAttribute("data-autorun") || (t.onload = function() {
e.hasAttribute("data-demo-height") || r.iframe(t), i(h) || h.scrollIntoView(!1);
});
}
}(), b = !1;
}
y && (y.onclick = function() {
return this.blur(), function() {
let e;
e = m ? _(a) : "<!DOCTYPE html>\n<script>\n".concat(l, "\n<\/script>");
let t = document.createElement("form");
t.action = "https://plnkr.co/edit/?p=preview", t.method = "POST", t.target = "_blank", 
document.body.appendChild(t);
let n = document.createElement("textarea");
n.name = "files[index.html]", n.value = e, t.appendChild(n);
let r = document.createElement("input");
r.name = "description", r.value = "Fork from " + window.location, t.appendChild(r), 
t.submit(), t.remove();
}(), !1;
}), e.hasAttribute("data-autorun") && ("epub" == window.ebookType && "no-epub" == e.getAttribute("data-autorun") ? e.querySelector("iframe").remove() : setTimeout(T, 100));
};
},
127: function(e, t) {
e.exports = function(e) {
if (!e || !e.length) return "";
let t = [];
for (let n of e) {
let e = '<code class="block-highlight'.concat(n.cols ? " block-highlight_inline" : "", '" data-start="').concat(n.start, '">');
if (e += "\n".repeat(n.start), n.end) e += '<code class="mask">'.concat("\n".repeat(n.end - n.start + 1), "</code>"); else if (n.cols) for (let t = 0; t < n.cols.length; t++) {
let r = n.cols[t], i = 0 === t ? null : n.cols[t - 1];
e += " ".repeat(i ? r.start - i.end : r.start), e += '<code class="mask-inline">'.concat(" ".repeat(r.end - r.start), "</code>");
}
e += "</code>", t.push(e);
}
return t.join("");
};
},
128: function(e, t, n) {
let r = n(3), i = n(80);
class s {
constructor(e) {
if (window.ebookType) return;
this.elem = e, this.translateX = 0, this.switchesElem = e.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = e.querySelector("[data-code-tabs-left]"), 
this.arrowRight = e.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = (e => {
e.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}), this.arrowRight.onclick = (e => {
e.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
});
let t = this.elem.querySelector(".code-tabs__section_current");
t !== t.parentElement.firstElementChild && this.highlightTab(t), this.delegate(".code-tabs__switch", "click", this.onSwitchClick);
}
onSwitchClick(e) {
e.preventDefault();
let t, n = e.delegateTarget.parentNode.children, r = this.elem.querySelector("[data-code-tabs-content]").children;
for (let i = 0; i < n.length; i++) {
let s = n[i], o = r[i];
s === e.delegateTarget ? (t = i, o.classList.add("code-tabs__section_current"), 
s.classList.add("code-tabs__switch_current")) : (o.classList.remove("code-tabs__section_current"), 
s.classList.remove("code-tabs__switch_current"));
}
0 === t ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(r[t]));
}
highlightTab(e) {
if (e.highlighted) return;
let t = e.querySelector("pre"), n = t.querySelector("code");
Prism.highlightElement(n), t.insertAdjacentHTML("beforeEnd", i(t.innerHTML)), e.highlighted = !0;
}
renderTranslate() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}
}
r.delegateMixin(s.prototype), e.exports = s;
},
13: function(e, t, n) {
var r = {
"./en.yml": 14
};
function i(e) {
var t = s(e);
return n(t);
}
function s(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = s, e.exports = i, i.id = 13;
},
134: function(e, t) {
!function(e) {
var t = {
variable: [ {
pattern: /\$?\(\([\s\S]+?\)\)/,
inside: {
variable: [ {
pattern: /(^\$\(\([\s\S]+)\)\)/,
lookbehind: !0
}, /^\$\(\(/ ],
number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
punctuation: /\(\(?|\)\)?|,|;/
}
}, {
pattern: /\$\([^)]+\)|`[^`]+`/,
greedy: !0,
inside: {
variable: /^\$\(|^`|\)$|`$/
}
}, /\$(?:[\w#?*!@]+|\{[^}]+\})/i ]
};
e.languages.bash = {
shebang: {
pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
alias: "important"
},
comment: {
pattern: /(^|[^"{\\])#.*/,
lookbehind: !0
},
string: [ {
pattern: /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
lookbehind: !0,
greedy: !0,
inside: t
}, {
pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
greedy: !0,
inside: t
} ],
variable: t.variable,
function: {
pattern: /(^|[\s;|&])(?:add|alias|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|hash|head|help|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logout|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tail|tar|tee|test|time|timeout|times|top|touch|tr|traceroute|trap|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zip|zypper)(?=$|[\s;|&])/,
lookbehind: !0
},
keyword: {
pattern: /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
lookbehind: !0
},
boolean: {
pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/,
lookbehind: !0
},
operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
};
var n = t.variable[1].inside;
n.string = e.languages.bash.string, n.function = e.languages.bash.function, n.keyword = e.languages.bash.keyword, 
n.boolean = e.languages.bash.boolean, n.operator = e.languages.bash.operator, n.punctuation = e.languages.bash.punctuation, 
e.languages.shell = e.languages.bash;
}(Prism);
},
136: function(e, t, n) {
n(137), e.exports = n(391);
},
137: function(module, exports, __webpack_require__) {
const delegate = __webpack_require__(3), prism = __webpack_require__(125), ItemSlider = __webpack_require__(56);
function init() {
initTaskButtons(), initFolderList(), initViewMoreButton(), initCoursesSlider(), 
prism.init();
}
function initTaskButtons() {
delegate(document, ".task__solution", "click", function(e) {
e.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__answer-close", "click", function(e) {
e.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__step-show", "click", function(e) {
e.target.closest(".task__step").classList.toggle("task_step_open");
});
}
function initViewMoreButton() {
delegate(document, "a.list-sub__more", "click", function(e) {
e.preventDefault();
const t = e.target;
for (let e of t.closest(".list-sub").querySelectorAll(".list-sub__item_phone_hidden")) e.classList.remove("list-sub__item_phone_hidden");
t.style.display = "none";
});
}
function initFolderList() {
delegate(document, ".lessons-list__lesson_level_1 > .lessons-list__link", "click", function(e) {
let t = e.delegateTarget, n = t.closest(".lessons-list").querySelector(".lessons-list__lesson_open");
n && n !== t.parentNode && n.classList.remove("lessons-list__lesson_open"), t.parentNode.classList.toggle("lessons-list__lesson_open"), 
e.preventDefault();
});
}
function initCoursesSlider() {
const e = document.querySelector("[data-courses-slider]");
e && new ItemSlider({
el: e,
class: "slider_frontpage"
});
}
window.runDemo = function(button) {
let demoElem, parent = button;
for (;(parent = parent.parentElement) && (demoElem = parent.querySelector("[data-demo]"), 
!demoElem); ) ;
demoElem ? eval(demoElem.textContent) : alert("Error, no demo element");
}, init();
},
14: function(e, t) {
e.exports = {
site: {
privacy_policy: "privacy policy",
terms: "terms of usage",
gdpr_dialog: {
title: "This website uses cookies",
text: 'We use browser technologies such as cookies and local storage to store your preferences. You need to accept our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Use</a> for us to do so.',
accept: "Accept",
cancel: "Cancel"
},
toolbar: {
lang_switcher: {
cta_text: '<p>We want to make this open-source project available for people all around the world.</p> <p><a href="https://javascript.info/translate">Help to translate</a> the content of this tutorial to your language!</p>\n',
footer_text: "how much content is translated to the corresponding language",
old_version: "Old version is published, needs backporting."
},
logo: {
normal: {
svg: "sitetoolbar__logo_en.svg",
width: 200
},
"normal-white": {
svg: "sitetoolbar__logo_en-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_en.svg",
width: 70
},
"small-white": {
svg: "sitetoolbar__logo_small_en-white.svg"
}
},
sections: null,
buy_ebook_extra: "Buy",
buy_ebook: "EPUB/PDF",
search_placeholder: "Search on Javascript.info",
search_button: "Search",
public_profile: "Public profile",
account: "Account",
notifications: "Notifications",
admin: "Admin",
logout: "Logout"
},
sorry_old_browser: "Sorry, Internet Explorer is not supported, please use a newer browser.",
contact_us: "contact us",
about_the_project: "about the project",
ilya_kantor: "Ilya Kantor",
comments: "Comments",
loading: "Loading...",
search: "Search",
share: "Share",
read_before_commenting: "read this before commenting…",
last_updated_at: "Last updated at #{date}",
meta: {
description: "Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming and more."
},
"tablet-menu": {
choose_section: "Choose section",
search_placeholder: "Search in the tutorial",
search_button: "Search"
},
comment: {
help: [ 'If you have suggestions what to improve - please <a href="https://github.com/javascript-tutorial/en.javascript.info/issues/new">submit a GitHub issue</a> or a pull request instead of commenting.', "If you can't understand something in the article – please elaborate.", "To insert a few words of code, use the <code>&lt;code&gt;</code> tag, for several lines – use <code>&lt;pre&gt;</code>, for more than 10 lines – use a sandbox (<a href='https://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='https://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>…)" ]
},
edit_on_github: "Edit on GitHub",
error: "error",
close: "close",
hide_forever: "hide permanently",
hidden_forever: "This information will not show up any more.",
subscribe: {
title: "Watch for javascript.info updates",
text: "We do not send advertisements, only relevant stuff. You choose what to receive:",
agreement: 'By signing up to newsletters you agree to the <a href="#{link}" target="_blank">terms of usage</a>.',
button: "Subscribe",
button_unsubscribe: "Unsubscribe from all",
common_updates: "Common updates",
common_updates_text: "new courses, master classes, article and screencast releases",
your_email: "your@email.here",
newsletters: "newsletter,newsletters,newsletters",
no_selected: "Nothing selected"
},
form: {
value_must_not_be_empty: "Value must not be empty.",
value_is_too_long: "Value is too long.",
value_is_too_short: "Value is too short.",
invalid_email: "Invalid email.",
invalid_value: "Invalid value.",
invalid_autocomplete: "Please, choose from the list",
invalid_date: "Invalid date, format: dd.mm.yyyyy.",
invalid_range: "This date is invalid here.",
save: "Save",
upload_file: "Upload file",
cancel: "Cancel",
server_error: "Request error, status code"
}
}
};
},
140: function(e, t, n) {
var r = n(266), i = "object" == typeof self && self && self.Object === Object && self, s = r || i || Function("return this")();
e.exports = s;
},
141: function(e, t, n) {
var r = n(140).Symbol;
e.exports = r;
},
145: function(e, t, n) {
let r = n(263), i = n(3);
class s {
constructor(e) {
this.elem = e, this.throttleFilter = r(this.filter, 200), this.showTasksCheckbox = e.querySelector("[data-tutorial-map-show-tasks]"), 
this.showTasksCheckbox.checked = +sessionStorage.showTasksCheckbox, this.updateShowTasks(), 
this.showTasksCheckbox.onchange = this.updateShowTasks.bind(this), this.filterInput = this.elem.querySelector("[data-tutorial-map-filter]"), 
this.textInputBlock = this.elem.querySelector(".tutorial-map__filter .text-input"), 
this.filterInput.oninput = this.onFilterInput.bind(this), this.filterInput.onkeydown = this.onFilterKeydown.bind(this), 
this.elem.querySelector(".text-input__clear").onclick = (() => {
this.filterInput.value = "", this.showClearButton(!1), this.filter("");
}), this.chaptersCollapsed = JSON.parse(sessionStorage.tutorialMapChapters || "{}"), 
this.showChaptersCollapsed(), this.delegate(".tutorial-map__item > .tutorial-map__link", "click", e => {
e.preventDefault();
let t = e.delegateTarget.getAttribute("href");
this.chaptersCollapsed[t] ? delete this.chaptersCollapsed[t] : this.chaptersCollapsed[t] = 1, 
sessionStorage.tutorialMapChapters = JSON.stringify(this.chaptersCollapsed), this.showChaptersCollapsed();
});
let t = this.elem.querySelector('.tutorial-map-list-three__link[href="' + location.pathname + '"]');
t && t.classList.add("tutorial-map-list-three__link_active"), this.filterInput.focus();
}
showChaptersCollapsed() {
let e = this.elem.querySelectorAll(".tutorial-map__item > .tutorial-map__link");
for (let t = 0; t < e.length; t++) {
let n = e[t];
this.chaptersCollapsed[n.getAttribute("href")] ? n.parentNode.classList.add("tutorial-map__item_collapsed") : n.parentNode.classList.remove("tutorial-map__item_collapsed");
}
}
updateShowTasks() {
this.showTasksCheckbox.checked ? this.elem.classList.add("tutorial-map_show-tasks") : this.elem.classList.remove("tutorial-map_show-tasks"), 
sessionStorage.showTasksCheckbox = this.showTasksCheckbox.checked ? "1" : "0";
}
onFilterInput(e) {
this.showClearButton(e.target.value), this.throttleFilter(e.target.value);
}
onFilterKeydown(e) {
27 === e.keyCode && (this.filterInput.value = "", this.showClearButton(!1), this.filter(""));
}
showClearButton(e) {
e ? this.textInputBlock.classList.add("text-input_clear-button") : this.textInputBlock.classList.remove("text-input_clear-button");
}
focus() {
this.elem.tabIndex = -1, this.elem.focus();
}
filter(e) {
e = e.toLowerCase();
let t = this.showTasksCheckbox.checked, n = (this.elem.querySelectorAll(".tutorial-map-list a"), 
this.elem.querySelectorAll(".tutorial-map-list-two__item"));
function r(t) {
return function(e, t) {
let n = 0, r = 0;
for (;n < e.length && r < t.length; ) e[n] === t[r] ? (n++, r++) : n++;
return r === t.length;
}(t.querySelector("a").innerHTML.toLowerCase(), e.replace(/\s/g, ""));
}
for (let e = 0; e < n.length; e++) {
let i = n[e], s = i.querySelectorAll(".tutorial-map-list-three__item"), o = Array.prototype.reduce.call(s, function(e, n) {
let i = !1;
if (t) {
let e = n.querySelectorAll(".tutorial-map-list-four__item");
i = Array.prototype.reduce.call(e, function(e, t) {
let n = r(t);
return t.hidden = !n, e || n;
}, !1);
}
let s = i || r(n);
return n.hidden = !s, e || s;
}, !1);
i.hidden = !(o || r(i));
}
}
}
e.exports = s, i.delegateMixin(s.prototype);
},
15: function(e, t, n) {
var r = {
"./en.yml": 16
};
function i(e) {
var t = s(e);
return n(t);
}
function s(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = s, e.exports = i, i.id = 15;
},
16: function(e, t) {
e.exports = {
server_connection_error: "Server connection error.",
server_request_timeout: "Server request timeout.",
request_aborted: "Request was aborted.",
no_response: "No response from server.",
server_error: "Server error (code #{status}), try again later.",
invalid_format: "Invalid response format."
};
},
2: function(e, t, n) {
"use strict";
n.r(t), n.d(t, "init", function() {
return s;
}), n.d(t, "Info", function() {
return a;
}), n.d(t, "Warning", function() {
return l;
}), n.d(t, "Success", function() {
return c;
}), n.d(t, "Error", function() {
return u;
});
let r = n(3);
class i {
constructor(e = {}) {
this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
register(e) {
this.notifications.unshift(e), setTimeout(() => this.recalculate(), 20);
}
unregister(e) {
let t = this.notifications.indexOf(e);
this.notifications.splice(t, 1), this.recalculate();
}
recalculate() {
let e = this.verticalSpace;
this.notifications.forEach(t => {
t.top = e, e += t.height + this.verticalSpace;
});
}
}
function s(e) {
window.notificationManager || (window.notificationManager = new i(e));
}
class o {
constructor(e, t, n) {
let r = '<div class="notification notification_popup notification_'.concat(t, '">\n    <div class="notification__content">').concat(e, '</div>\n    <button title="Закрыть" class="notification__close"></button></div>');
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
set top(e) {
this.elem.style.transform = "translateY(" + e + "px)";
}
}
r.delegateMixin(o.prototype);
class a extends o {
constructor(e, t) {
super(e, "info", t);
}
}
class l extends o {
constructor(e, t) {
super(e, "warning", t);
}
}
class c extends o {
constructor(e, t) {
super(e, "success", t);
}
}
class u extends o {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
},
263: function(e, t, n) {
var r = n(264), i = n(102), s = "Expected a function";
e.exports = function(e, t, n) {
var o = !0, a = !0;
if ("function" != typeof e) throw new TypeError(s);
return i(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), 
r(e, t, {
leading: o,
maxWait: t,
trailing: a
});
};
},
264: function(e, t, n) {
var r = n(102), i = n(265), s = n(267), o = "Expected a function", a = Math.max, l = Math.min;
e.exports = function(e, t, n) {
var c, u, d, p, h, f, m = 0, g = !1, b = !1, v = !0;
if ("function" != typeof e) throw new TypeError(o);
function y(t) {
var n = c, r = u;
return c = u = void 0, m = t, p = e.apply(r, n);
}
function E(e) {
var n = e - f;
return void 0 === f || n >= t || n < 0 || b && e - m >= d;
}
function w() {
var e = i();
if (E(e)) return _(e);
h = setTimeout(w, function(e) {
var n = t - (e - f);
return b ? l(n, d - (e - m)) : n;
}(e));
}
function _(e) {
return h = void 0, v && c ? y(e) : (c = u = void 0, p);
}
function T() {
var e = i(), n = E(e);
if (c = arguments, u = this, f = e, n) {
if (void 0 === h) return function(e) {
return m = e, h = setTimeout(w, t), g ? y(e) : p;
}(f);
if (b) return h = setTimeout(w, t), y(f);
}
return void 0 === h && (h = setTimeout(w, t)), p;
}
return t = s(t) || 0, r(n) && (g = !!n.leading, d = (b = "maxWait" in n) ? a(s(n.maxWait) || 0, t) : d, 
v = "trailing" in n ? !!n.trailing : v), T.cancel = function() {
void 0 !== h && clearTimeout(h), m = 0, c = f = u = h = void 0;
}, T.flush = function() {
return void 0 === h ? p : _(i());
}, T;
};
},
265: function(e, t, n) {
var r = n(140);
e.exports = function() {
return r.Date.now();
};
},
266: function(e, t, n) {
(function(t) {
var n = "object" == typeof t && t && t.Object === Object && t;
e.exports = n;
}).call(this, n(36));
},
267: function(e, t, n) {
var r = n(102), i = n(268), s = NaN, o = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt;
e.exports = function(e) {
if ("number" == typeof e) return e;
if (i(e)) return s;
if (r(e)) {
var t = "function" == typeof e.valueOf ? e.valueOf() : e;
e = r(t) ? t + "" : t;
}
if ("string" != typeof e) return 0 === e ? e : +e;
e = e.replace(o, "");
var n = l.test(e);
return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? s : +e;
};
},
268: function(e, t, n) {
var r = n(269), i = n(272), s = "[object Symbol]";
e.exports = function(e) {
return "symbol" == typeof e || i(e) && r(e) == s;
};
},
269: function(e, t, n) {
var r = n(141), i = n(270), s = n(271), o = "[object Null]", a = "[object Undefined]", l = r ? r.toStringTag : void 0;
e.exports = function(e) {
return null == e ? void 0 === e ? a : o : l && l in Object(e) ? i(e) : s(e);
};
},
270: function(e, t, n) {
var r = n(141), i = Object.prototype, s = i.hasOwnProperty, o = i.toString, a = r ? r.toStringTag : void 0;
e.exports = function(e) {
var t = s.call(e, a), n = e[a];
try {
e[a] = void 0;
var r = !0;
} catch (e) {}
var i = o.call(e);
return r && (t ? e[a] = n : delete e[a]), i;
};
},
271: function(e, t) {
var n = Object.prototype.toString;
e.exports = function(e) {
return n.call(e);
};
},
272: function(e, t) {
e.exports = function(e) {
return null != e && "object" == typeof e;
};
},
3: function(e, t) {
function n(e, t, n, r, i) {
e.addEventListener(n, function(e) {
let n = function(e, t) {
let n = e.target;
for (;n; ) {
if (n.matches(t)) return n;
if (n == e.currentTarget) break;
n = n.parentElement;
}
return null;
}(e, t);
e.delegateTarget = n, n && r.call(i || this, e);
});
}
n.delegateMixin = function(e) {
e.delegate = function(e, t, r) {
n(this.elem, e, t, r, this);
};
}, e.exports = n;
},
36: function(e, t) {
var n;
n = function() {
return this;
}();
try {
n = n || new Function("return this")();
} catch (e) {
"object" == typeof window && (n = window);
}
e.exports = n;
},
391: function(e, t, n) {
let r = n(392), i = n(145), s = n(3);
function o() {
/[&?]map\b/.test(location.href) || window.history.replaceState(null, null, ~location.href.indexOf("?") ? location.href + "&map" : location.href + "?map"), 
new r().elem.addEventListener("tutorial-map-remove", () => {
window.history.replaceState(null, null, location.href.replace(/[&?]map\b/, ""));
});
}
!function() {
s(document, '[data-action="tutorial-map"]', "click", e => {
1 === e.which && (e.preventDefault(), o());
});
let e = document.querySelector(".tutorial-map");
e ? new i(e) : /[&?]map\b/.test(location.href) && o();
}();
},
392: function(e, t, n) {
let r = n(5), i = n(3), s = n(10), o = n(145), a = n(108);
class l {
constructor() {
this.elem = document.createElement("div"), document.body.appendChild(this.elem);
let e = new Modal({
hasClose: !1
}), t = new s();
e.setContent(t.elem), t.start(), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
let n = r({
url: "/tutorial/map"
});
n.addEventListener("success", t => {
e.remove(), this.elem.innerHTML = '<div class="tutorial-map-overlay"></div>', this.mapElem = this.elem.firstChild, 
this.mapElem.innerHTML = t.result + '<button class="close-button tutorial-map-overlay__close"></button>', 
this.mapElem.addEventListener("click", e => {
e.target.classList.contains("tutorial-map-overlay__close") && this.remove();
}), document.addEventListener("keydown", this.onDocumentKeyDown), document.body.classList.add("tutorial-map_on"), 
this.mapElem.addEventListener("scroll", a, {
passive: !0
}), new o(this.mapElem.firstElementChild);
}), n.addEventListener("fail", () => e.remove());
}
remove() {
this.elem.dispatchEvent(new CustomEvent("tutorial-map-remove")), this.elem.remove(), 
document.body.classList.remove("tutorial-map_on"), document.removeEventListener("keydown", this.onDocumentKeyDown);
}
onDocumentKeyDown(e) {
27 == e.keyCode && (e.preventDefault(), this.remove());
}
}
i.delegateMixin(l.prototype), e.exports = l;
},
5: function(e, t, n) {
let r = n(2), i = n(12);
const s = n(0).lang, o = n(1);
o.i18n.add("", n(13)("./" + s + ".yml")), o.i18n.add("error.network", n(15)("./" + s + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest(), n = e.method || "GET", r = e.body, s = e.url;
t.open(n, s, !e.sync), t.method = n;
let a = i();
a && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", a), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
let n = c("xhrstart", e);
document.dispatchEvent(n);
}), t.addEventListener("loadend", e => {
let t = c("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
let t = c("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
let t = c("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let l = e.normalStatuses || [ 200 ];
function c(e, t) {
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function u(e, n) {
let r = c("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", e => {
u(o("error.network.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
u(o("error.network.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
u(o("error.network.request_aborted"), e);
}), t.addEventListener("load", n => {
if (!t.status) return void u(o("error.network.no_response"), n);
if (!l.includes(t.status)) return void u(o("error.network.server_error", {
status: t.status
}), n);
let r = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(o("error.network.invalid_format"), n);
}
!function(e, n) {
let r = c("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
t.send(r);
}, 0), t;
};
},
55: function(e, t, n) {
n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), n(71), n(72), n(134), Prism.hooks.add("wrap", function(e) {
"span" === e.tag && (e.tag = "code");
});
},
56: function(e, t, n) {
let r = n(263);
e.exports = class {
constructor(e) {
this.slider = e.el, this.list = this.slider.querySelector("ul"), e.class && (this.classList = e.class.split(" ")), 
this.disabled = !1, this.init(), this.bindHandlers();
}
init() {
this.classList && this.classList.length && this.slider.classList.add(...this.classList), 
this.slider.classList.add("slider_disable-left");
const e = document.createElement("div");
e.classList.add("slider__container"), e.appendChild(this.list), this.slider.innerHTML = '<button class="slider__arrow slider__arrow_left"></button><button class="slider__arrow slider__arrow_right"></button>', 
this.slider.appendChild(e), this.innerWidth = this.countInnerWidth(), this.arrowLeft = this.slider.querySelector(".slider__arrow_left"), 
this.arrowRight = this.slider.querySelector(".slider__arrow_right");
}
countInnerWidth() {
return [ ...this.list.querySelectorAll("li") ].reduce((e, t) => {
const n = window.getComputedStyle(t);
return e + (t.offsetWidth + parseFloat(n.marginLeft) + parseFloat(n.marginRight));
}, 0);
}
bindHandlers() {
this.transformX = 0, this.arrowLeft.addEventListener("click", () => {
this.transformX -= this.list.clientWidth, this.transformX < 0 && (this.transformX = 0), 
this.render();
}), this.arrowRight.addEventListener("click", () => {
this.transformX = Math.min(this.transformX + this.list.clientWidth, this.list.scrollWidth - this.list.clientWidth), 
this.render();
}), window.addEventListener("resize", r(() => {
this.onResize();
}, 200)), this.onResize();
}
onResize() {
!this.disabled && this.innerWidth <= this.list.offsetWidth ? (this.slider.classList.add("slider_disabled"), 
this.disabled = !0, this.transformX > 0 && (this.transformX = 0, this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.render())) : this.disabled && this.innerWidth > this.list.offsetWidth && (this.slider.classList.remove("slider_disabled"), 
this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.disabled = !1);
}
render() {
this.list.style.transform = this.transformX > 0 ? "translateX(".concat(-this.transformX, "px)") : "translateX(0)", 
0 === this.transformX ? this.slider.classList.add("slider_disable-left") : this.slider.classList.remove("slider_disable-left"), 
this.transformX == this.list.scrollWidth - this.list.clientWidth ? this.slider.classList.add("slider_disable-right") : this.slider.classList.remove("slider_disable-right");
}
};
},
58: function(e, t, n) {
let r = n(59), i = n(62), s = [];
t.iframe = function(e) {
r.async(e, function(t, n) {
n && (e.style.height = n + "px");
});
}, t.codeTabs = function(e) {
function t() {
let t = e.closest(".code-tabs"), n = (e.closest("[data-code-tabs-content]"), t.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? t.classList.add("code-tabs_scroll") : t.classList.remove("code-tabs_scroll");
}
t(), s.push(t);
}, window.addEventListener("resize", i(function() {
s.forEach(function(e) {
e();
});
}, 200));
},
59: function(e, t, n) {
let r = n(60);
function i(e, t) {
let n = setTimeout(function() {
t(new Error("timeout"));
}, 500);
function i(e, r) {
clearTimeout(n), t(e, r);
}
try {
(e.contentDocument || e.contentWindow.document).body;
} catch (e) {
!function(e, t) {
throw new Error("Not implemented yet");
}();
}
if (!e.offsetWidth) {
let t = e.cloneNode(!0);
return t.name = "", t.style.height = "50px", t.style.position = "absolute", t.style.display = "block", 
t.style.top = "10000px", t.onload = function() {
let n = r(this.contentDocument);
e.style.display = "block", t.remove(), i(null, n);
}, void document.body.appendChild(t);
}
e.style.display = "block", e.style.height = "1px";
let s = r(e.contentDocument);
e.style.height = "", i(null, s);
}
i.async = function(e, t) {
setTimeout(function() {
i(e, t);
}, 0);
}, e.exports = i;
},
6: function(e, t, n) {
e.exports = n(7);
},
60: function(e, t, n) {
let r, i = n(61);
e.exports = function(e) {
e = e || document;
let t = Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight);
return e.documentElement.scrollWidth > e.documentElement.clientWidth && (r || (r = i()), 
t += r), t;
};
},
61: function(e, t) {
e.exports = function() {
let e = document.createElement("div");
if (e.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(e);
let t = e.offsetWidth;
e.style.overflow = "scroll";
let n = document.createElement("div");
n.style.width = "100%", e.appendChild(n);
let r = n.offsetWidth;
return e.parentNode.removeChild(e), t - r;
};
},
62: function(e, t) {
e.exports = function(e, t) {
let n, r, i = !1;
return function s() {
if (i) return n = arguments, void (r = this);
e.apply(this, arguments), i = !0, setTimeout(function() {
i = !1, n && (s.apply(r, n), n = r = null);
}, t);
};
};
},
63: function(e, t) {
var n = function(e) {
var t = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, r = {
manual: e.Prism && e.Prism.manual,
disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
util: {
encode: function(e) {
return e instanceof i ? new i(e.type, r.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(r.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).slice(8, -1);
},
objId: function(e) {
return e.__id || Object.defineProperty(e, "__id", {
value: ++n
}), e.__id;
},
clone: function e(t, n) {
var i, s, o = r.util.type(t);
switch (n = n || {}, o) {
case "Object":
if (s = r.util.objId(t), n[s]) return n[s];
for (var a in i = {}, n[s] = i, t) t.hasOwnProperty(a) && (i[a] = e(t[a], n));
return i;

case "Array":
return s = r.util.objId(t), n[s] ? n[s] : (i = [], n[s] = i, t.forEach(function(t, r) {
i[r] = e(t, n);
}), i);

default:
return t;
}
}
},
languages: {
extend: function(e, t) {
var n = r.util.clone(r.languages[e]);
for (var i in t) n[i] = t[i];
return n;
},
insertBefore: function(e, t, n, i) {
var s = (i = i || r.languages)[e], o = {};
for (var a in s) if (s.hasOwnProperty(a)) {
if (a == t) for (var l in n) n.hasOwnProperty(l) && (o[l] = n[l]);
n.hasOwnProperty(a) || (o[a] = s[a]);
}
var c = i[e];
return i[e] = o, r.languages.DFS(r.languages, function(t, n) {
n === c && t != e && (this[t] = o);
}), o;
},
DFS: function e(t, n, i, s) {
s = s || {};
var o = r.util.objId;
for (var a in t) if (t.hasOwnProperty(a)) {
n.call(t, a, t[a], i || a);
var l = t[a], c = r.util.type(l);
"Object" !== c || s[o(l)] ? "Array" !== c || s[o(l)] || (s[o(l)] = !0, e(l, n, a, s)) : (s[o(l)] = !0, 
e(l, n, null, s));
}
}
},
plugins: {},
highlightAll: function(e, t) {
r.highlightAllUnder(document, e, t);
},
highlightAllUnder: function(e, t, n) {
var i = {
callback: n,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
r.hooks.run("before-highlightall", i);
for (var s, o = i.elements || e.querySelectorAll(i.selector), a = 0; s = o[a++]; ) r.highlightElement(s, !0 === t, i.callback);
},
highlightElement: function(n, i, s) {
for (var o, a, l = n; l && !t.test(l.className); ) l = l.parentNode;
l && (o = (l.className.match(t) || [ , "" ])[1].toLowerCase(), a = r.languages[o]), 
n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o, 
n.parentNode && (l = n.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o));
var c = {
element: n,
language: o,
grammar: a,
code: n.textContent
}, u = function(e) {
c.highlightedCode = e, r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, 
r.hooks.run("after-highlight", c), r.hooks.run("complete", c), s && s.call(c.element);
};
if (r.hooks.run("before-sanity-check", c), c.code) if (r.hooks.run("before-highlight", c), 
c.grammar) if (i && e.Worker) {
var d = new Worker(r.filename);
d.onmessage = function(e) {
u(e.data);
}, d.postMessage(JSON.stringify({
language: c.language,
code: c.code,
immediateClose: !0
}));
} else u(r.highlight(c.code, c.grammar, c.language)); else u(r.util.encode(c.code)); else r.hooks.run("complete", c);
},
highlight: function(e, t, n) {
var s = {
code: e,
grammar: t,
language: n
};
return r.hooks.run("before-tokenize", s), s.tokens = r.tokenize(s.code, s.grammar), 
r.hooks.run("after-tokenize", s), i.stringify(r.util.encode(s.tokens), s.language);
},
matchGrammar: function(e, t, n, s, o, a, l) {
for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
if (c == l) return;
var u = n[c];
u = "Array" === r.util.type(u) ? u : [ u ];
for (var d = 0; d < u.length; ++d) {
var p = u[d], h = p.inside, f = !!p.lookbehind, m = !!p.greedy, g = 0, b = p.alias;
if (m && !p.pattern.global) {
var v = p.pattern.toString().match(/[imuy]*$/)[0];
p.pattern = RegExp(p.pattern.source, v + "g");
}
p = p.pattern || p;
for (var y = s, E = o; y < t.length; E += t[y].length, ++y) {
var w = t[y];
if (t.length > e.length) return;
if (!(w instanceof i)) {
if (m && y != t.length - 1) {
if (p.lastIndex = E, !(F = p.exec(e))) break;
for (var _ = F.index + (f ? F[1].length : 0), T = F.index + F[0].length, k = y, A = E, S = t.length; k < S && (A < T || !t[k].type && !t[k - 1].greedy); ++k) _ >= (A += t[k].length) && (++y, 
E = A);
if (t[y] instanceof i) continue;
x = k - y, w = e.slice(E, A), F.index -= E;
} else {
p.lastIndex = 0;
var F = p.exec(w), x = 1;
}
if (F) {
f && (g = F[1] ? F[1].length : 0);
T = (_ = F.index + g) + (F = F[0].slice(g)).length;
var L = w.slice(0, _), O = w.slice(T), C = [ y, x ];
L && (++y, E += L.length, C.push(L));
var I = new i(c, h ? r.tokenize(F, h) : F, b, F, m);
if (C.push(I), O && C.push(O), Array.prototype.splice.apply(t, C), 1 != x && r.matchGrammar(e, t, n, y, E, !0, c), 
a) break;
} else if (a) break;
}
}
}
}
},
tokenize: function(e, t) {
var n = [ e ], i = t.rest;
if (i) {
for (var s in i) t[s] = i[s];
delete t.rest;
}
return r.matchGrammar(e, n, t, 0, 0, !1), n;
},
hooks: {
all: {},
add: function(e, t) {
var n = r.hooks.all;
n[e] = n[e] || [], n[e].push(t);
},
run: function(e, t) {
var n = r.hooks.all[e];
if (n && n.length) for (var i, s = 0; i = n[s++]; ) i(t);
}
},
Token: i
};
function i(e, t, n, r, i) {
this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, 
this.greedy = !!i;
}
if (e.Prism = r, i.stringify = function(e, t, n) {
if ("string" == typeof e) return e;
if (Array.isArray(e)) return e.map(function(n) {
return i.stringify(n, t, e);
}).join("");
var s = {
type: e.type,
content: i.stringify(e.content, t, n),
tag: "span",
classes: [ "token", e.type ],
attributes: {},
language: t,
parent: n
};
if (e.alias) {
var o = Array.isArray(e.alias) ? e.alias : [ e.alias ];
Array.prototype.push.apply(s.classes, o);
}
r.hooks.run("wrap", s);
var a = Object.keys(s.attributes).map(function(e) {
return e + '="' + (s.attributes[e] || "").replace(/"/g, "&quot;") + '"';
}).join(" ");
return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + s.content + "</" + s.tag + ">";
}, !e.document) return e.addEventListener ? (r.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
var n = JSON.parse(t.data), i = n.language, s = n.code, o = n.immediateClose;
e.postMessage(r.highlight(s, r.languages[i], i)), o && e.close();
}, !1), r) : r;
var s = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
return s && (r.filename = s.src, r.manual || s.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r.highlightAll))), 
r;
}("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
void 0 !== e && e.exports && (e.exports = n), "undefined" != typeof global && (global.Prism = n);
},
64: function(e, t) {
Prism.languages.markup = {
comment: /<!--[\s\S]*?-->/,
prolog: /<\?[\s\S]+?\?>/,
doctype: /<!DOCTYPE[\s\S]+?>/i,
cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/i,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"attr-value": {
pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
inside: {
punctuation: [ /^=/, {
pattern: /^(\s*)["']|["']$/,
lookbehind: !0
} ]
}
},
punctuation: /\/?>/,
"attr-name": {
pattern: /[^\s>\/]+/,
inside: {
namespace: /^[^\s>\/:]+:/
}
}
}
},
entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, 
Prism.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
value: function(e, t) {
var n = {};
n["language-" + t] = {
pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
lookbehind: !0,
inside: Prism.languages[t]
}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
var r = {
"included-cdata": {
pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
inside: n
}
};
r["language-" + t] = {
pattern: /[\s\S]+/,
inside: Prism.languages[t]
};
var i = {};
i[e] = {
pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e), "i"),
lookbehind: !0,
greedy: !0,
inside: r
}, Prism.languages.insertBefore("markup", "cdata", i);
}
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, 
Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
},
65: function(e, t) {
!function(e) {
var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
e.languages.css = {
comment: /\/\*[\s\S]*?\*\//,
atrule: {
pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
inside: {
rule: /@[\w-]+/
}
},
url: RegExp("url\\((?:" + t.source + "|.*?)\\)", "i"),
selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
string: {
pattern: t,
greedy: !0
},
property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
important: /!important\b/i,
function: /[-a-z0-9]+(?=\()/i,
punctuation: /[(){};:,]/
}, e.languages.css.atrule.inside.rest = e.languages.css;
var n = e.languages.markup;
n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
"style-attr": {
pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
inside: {
"attr-name": {
pattern: /^\s*style/i,
inside: n.tag.inside
},
punctuation: /^\s*=\s*['"]|['"]\s*$/,
"attr-value": {
pattern: /.+/i,
inside: e.languages.css
}
},
alias: "language-css"
}
}, n.tag));
}(Prism);
},
66: function(e, t) {
Prism.languages.css.selector = {
pattern: Prism.languages.css.selector,
inside: {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
"pseudo-class": /:[-\w]+/,
class: /\.[-:.\w]+/,
id: /#[-:.\w]+/,
attribute: {
pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
greedy: !0,
inside: {
punctuation: /^\[|\]$/,
"case-sensitivity": {
pattern: /(\s)[si]$/i,
lookbehind: !0,
alias: "keyword"
},
namespace: {
pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
lookbehind: !0,
inside: {
punctuation: /\|$/
}
},
attribute: {
pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
lookbehind: !0
},
value: [ /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, {
pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
lookbehind: !0
} ],
operator: /[|~*^$]?=/
}
},
"n-th": {
pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
lookbehind: !0,
inside: {
number: /[\dn]+/,
operator: /[+-]/
}
},
punctuation: /[()]/
}
}, Prism.languages.insertBefore("css", "property", {
variable: {
pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
lookbehind: !0
}
}), Prism.languages.insertBefore("css", "function", {
operator: {
pattern: /(\s)[+\-*\/](?=\s)/,
lookbehind: !0
},
hexcode: /#[\da-f]{3,8}/i,
entity: /\\[\da-f]{1,8}/i,
unit: {
pattern: /(\d)(?:%|[a-z]+)/,
lookbehind: !0
},
number: /-?[\d.]+/
});
},
67: function(e, t) {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
lookbehind: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
boolean: /\b(?:true|false)\b/,
function: /\w+(?=\()/,
number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
punctuation: /[{}[\];(),.:]/
};
},
68: function(e, t) {
Prism.languages.javascript = Prism.languages.extend("clike", {
"class-name": [ Prism.languages.clike["class-name"], {
pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
lookbehind: !0
} ],
keyword: [ {
pattern: /((?:^|})\s*)(?:catch|finally)\b/,
lookbehind: !0
}, {
pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
lookbehind: !0
} ],
number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, 
Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
lookbehind: !0,
greedy: !0
},
"function-variable": {
pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
alias: "function"
},
parameter: [ {
pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
inside: Prism.languages.javascript
}, {
pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
lookbehind: !0,
inside: Prism.languages.javascript
} ],
constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
"template-string": {
pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
greedy: !0,
inside: {
interpolation: {
pattern: /\${[^}]+}/,
inside: {
"interpolation-punctuation": {
pattern: /^\${|}$/,
alias: "punctuation"
},
rest: Prism.languages.javascript
}
},
string: /[\s\S]+/
}
}
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), 
Prism.languages.js = Prism.languages.javascript;
},
69: function(e, t) {
!function(e) {
e.languages.http = {
"request-line": {
pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
inside: {
property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
"attr-name": /:\w+/
}
},
"response-status": {
pattern: /^HTTP\/1.[01] \d+.*/m,
inside: {
property: {
pattern: /(^HTTP\/1.[01] )\d+.*/i,
lookbehind: !0
}
}
},
"header-name": {
pattern: /^[\w-]+:(?=.)/m,
alias: "keyword"
}
};
var t, n = e.languages, r = {
"application/javascript": n.javascript,
"application/json": n.json || n.javascript,
"application/xml": n.xml,
"text/xml": n.xml,
"text/html": n.html,
"text/css": n.css
}, i = {
"application/json": !0,
"application/xml": !0
};
function s(e) {
return "(?:" + e + "|" + ("\\w+/(?:[\\w.-]+\\+)+" + e.replace(/^[a-z]+\//, "") + "(?![+\\w.-])") + ")";
}
for (var o in r) if (r[o]) {
t = t || {};
var a = i[o] ? s(o) : o;
t[o] = {
pattern: RegExp("(content-type:\\s*" + a + "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"),
lookbehind: !0,
inside: {
rest: r[o]
}
};
}
t && e.languages.insertBefore("http", "header-name", t);
}(Prism);
},
7: function(e, t, n) {
"use strict";
var r = n(8), i = n(9);
function s(e) {
return Object.prototype.toString.call(e);
}
function o(e) {
return "[object String]" === s(e);
}
function a(e) {
return !isNaN(e) && isFinite(e);
}
function l(e) {
return !0 === e || !1 === e;
}
function c(e) {
return "[object Object]" === s(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === s(e);
}, d = Array.prototype.forEach;
function p(e, t, n) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r += 1) t.call(n, e[r], r, e); else for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(n, e[s], s, e);
}
var h = /%[sdj%]/g;
function f(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(h, function(e) {
if ("%%" === e) return "%";
if (t >= r) return e;
switch (e) {
case "%s":
return String(n[t++]);

case "%d":
return Number(n[t++]);

case "%j":
return JSON.stringify(n[t++]);

default:
return e;
}
});
}
var m = "en";
function g(e) {
var t = {};
return p(e || {}, function(e, n) {
e && "object" == typeof e ? p(g(e), function(e, r) {
t[n + "." + r] = e;
}) : t[n] = e;
}), t;
}
var b = "#@$";
function v(e, t) {
return e + b + t;
}
function y(e, t, n) {
var r = v(t, n), i = e._storage;
if (i.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var s = e._fallbacks_cache;
if (s.hasOwnProperty(r)) return s[r];
for (var o, a = e._fallbacks[t] || [ e._defaultLocale ], l = 0, c = a.length; l < c; l++) if (o = v(a[l], n), 
i.hasOwnProperty(o)) return s[r] = o, s[r];
return s[r] = null, null;
}
function E(e, t, n) {
var r = i.indexOf(e, t);
return -1 === r ? f('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? f('[plural form %d ("%s") not found in translation]', r, i.forms(e)[r]) : n[r];
}
function w(e) {
if (!(this instanceof w)) return new w(e);
this._defaultLocale = e ? String(e) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
w.prototype.addPhrase = function(e, t, n, r) {
var i, s = this;
if (l(r)) i = r ? 1 / 0 : 0; else if (a(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (c(n) && i > 0) return p(n, function(n, r) {
s.addPhrase(e, (t ? t + "." : "") + r, n, i - 1);
}), this;
if (o(n)) this._storage[v(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(u(n) || a(n) || l(n) || 0 === i && c(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[v(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return s._fallbacks_cache = {}, this;
}, w.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = u(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var _ = /#\{|\(\(|\\\\/;
w.prototype.translate = function(e, t, n) {
var i, l = y(this, e, t);
return l ? (i = this._storage[l]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(e, t, n) {
var i, s, o, a, l, c;
return _.test(t) ? 1 === (i = r.parse(t)).length && "literal" === i[0].type ? i[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new w(n)), 
c = e._plurals_cache[n], (s = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
s.push("params = flatten(params);"), p(i, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return o = e.anchor, void s.push(f('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', o, o, o));
if ("plural" !== e.type) throw new Error("Unknown node type");
o = e.anchor, a = {}, p(e.strict, function(t, i) {
var s = r.parse(t);
if (1 === s.length && "literal" === s[0].type) return a[i] = !1, void (e.strict[i] = s[0].text);
a[i] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), l = {}, p(e.forms, function(t, i) {
var s, o = r.parse(t);
if (1 === o.length && "literal" === o[0].type) return s = o[0].text, e.forms[i] = s, 
void (l[s] = !1);
l[t] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), s.push(f("loc = %j;", n)), s.push(f("loc_plzr = %j;", n.split(/[-_]/)[0])), 
s.push(f("anchor = params[%j];", o)), s.push(f("cache = this._plurals_cache[loc];")), 
s.push(f("strict = %j;", e.strict)), s.push(f("strict_exec = %j;", a)), s.push(f("forms = %j;", e.forms)), 
s.push(f("forms_exec = %j;", l)), s.push("if (+(anchor) != anchor) {"), s.push(f('  str += "[invalid plurals amount: %s(" + anchor + ")]";', o)), 
s.push("} else {"), s.push("  if (strict[anchor] !== undefined) {"), s.push("    plrl = strict[anchor];"), 
s.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), s.push("  } else {"), 
s.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), s.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
s.push("  }"), s.push("}");
} else s.push(f("str += %j;", e.text));
}), s.push("return str;"), new Function("params", "flatten", "pluralizer", s.join("\n"))) : t;
}(this, i.translation, i.locale)), "[object Function]" !== s(i.compiled) ? i.compiled : ((a(n) || o(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, g, E))) : e + ": No translation for [" + t + "]";
}, w.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(v(e, t)) : !!y(this, e, t);
}, w.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(v(e, t)) ? e : null;
var r = y(this, e, t);
return r ? r.split(b, 2)[0] : null;
}, w.prototype.t = w.prototype.translate, w.prototype.stringify = function(e) {
var t = this, n = {};
p(this._storage, function(e, t) {
n[t.split(b)[1]] = !0;
});
var r = {};
p(n, function(n, i) {
var s = y(t, e, i);
if (s) {
var o = t._storage[s].locale;
r[o] || (r[o] = {}), r[o][i] = t._storage[s].translation;
}
});
var i = {
fallback: {},
locales: r
}, s = (t._fallbacks[e] || []).slice(0, -1);
return s.length && (i.fallback[e] = s), JSON.stringify(i);
}, w.prototype.load = function(e) {
var t = this;
return o(e) && (e = JSON.parse(e)), p(e.locales, function(e, n) {
p(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), p(e.fallback, function(e, n) {
t.setFallback(n, e);
}), this;
}, e.exports = w;
},
70: function(e, t) {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
lookbehind: !0
},
atrule: {
pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
inside: {
rule: /@[\w-]+/
}
},
url: /(?:[-a-z]+-)*url(?=\()/i,
selector: {
pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
inside: {
parent: {
pattern: /&/,
alias: "important"
},
placeholder: /%[-\w]+/,
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
},
property: {
pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
inside: {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: [ /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
pattern: /( +)(?:from|through)(?= )/,
lookbehind: !0
} ]
}), Prism.languages.insertBefore("scss", "important", {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
placeholder: {
pattern: /%[-\w]+/,
alias: "selector"
},
statement: {
pattern: /\B!(?:default|optional)\b/i,
alias: "keyword"
},
boolean: /\b(?:true|false)\b/,
null: {
pattern: /\bnull\b/,
alias: "keyword"
},
operator: {
pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
lookbehind: !0
}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
},
71: function(e, t) {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
variable: [ {
pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
greedy: !0
}, /@[\w.$]+/ ],
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
greedy: !0,
lookbehind: !0
},
function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/
};
},
72: function(e, t) {
!function(e) {
var t = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/, n = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
e.languages.java = e.languages.extend("clike", {
"class-name": [ n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/ ],
keyword: t,
function: [ e.languages.clike.function, {
pattern: /(\:\:)[a-z_]\w*/,
lookbehind: !0
} ],
number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
operator: {
pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
lookbehind: !0
}
}), e.languages.insertBefore("java", "class-name", {
annotation: {
alias: "punctuation",
pattern: /(^|[^.])@\w+/,
lookbehind: !0
},
namespace: {
pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
lookbehind: !0,
inside: {
punctuation: /\./
}
},
generics: {
pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
inside: {
"class-name": n,
keyword: t,
punctuation: /[<>(),.:]/,
operator: /[?&|]/
}
}
});
}(Prism);
},
8: function(e, t) {
e.exports = function() {
function e(e, t, n, r, i, s) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, 
this.column = s, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n();
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, s = {
start: ue
}, o = ue, a = i, l = "((", c = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, h = function(e, t) {
return {
type: "plural",
forms: function(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}(e),
strict: function(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}(e),
anchor: t || "count"
};
}, f = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, g = function(e, t) {
return [ e ].concat(t);
}, b = function(e) {
return [ e ];
}, v = "=", y = {
type: "literal",
value: "=",
description: '"="'
}, E = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, _ = " ", T = {
type: "literal",
value: " ",
description: '" "'
}, k = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, A = function() {
return {
text: oe()
};
}, S = "\\", F = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, x = /^[\\|)(]/, L = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, O = function(e) {
return e;
}, C = void 0, I = {
type: "any",
description: "any character"
}, N = function() {
return oe();
}, R = ":", P = {
type: "literal",
value: ":",
description: '":"'
}, D = function(e) {
return e;
}, j = "#{", M = {
type: "literal",
value: "#{",
description: '"#{"'
}, U = "}", B = {
type: "literal",
value: "}",
description: '"}"'
}, q = function(e) {
return {
type: "variable",
anchor: e
};
}, H = ".", W = {
type: "literal",
value: ".",
description: '"."'
}, $ = function() {
return oe();
}, z = /^[a-zA-Z_$]/, G = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, X = /^[a-zA-Z0-9_$]/, Y = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, K = function(e) {
return e;
}, V = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Z = /^[\\#()|]/, J = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, ie = [], se = 0;
if ("startRule" in r) {
if (!(r.startRule in s)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
o = s[r.startRule];
}
function oe() {
return t.substring(ee, Q);
}
function ae(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var i, s;
for (i = n; i < r; i++) "\n" === (s = t.charAt(i)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === s || "\u2028" === s || "\u2029" === s ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function le(e) {
Q < re || (Q > re && (re = Q, ie = []), ie.push(e));
}
function ce(n, r, i) {
var s = ae(i), o = i < t.length ? t.charAt(i) : null;
return null !== r && function(e) {
var t = 1;
for (e.sort(function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
}); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(r), new e(null !== n ? n : function(e, t) {
var n, r = new Array(e.length);
for (n = 0; n < e.length; n++) r[n] = e[n].description;
return "Expected " + (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) + " but " + (t ? '"' + function(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
return "\\x0" + t(e);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
return "\\x" + t(e);
}).replace(/[\u0180-\u0FFF]/g, function(e) {
return "\\u0" + t(e);
}).replace(/[\u1080-\uFFFF]/g, function(e) {
return "\\u" + t(e);
});
}(t) + '"' : "end of input") + " found.";
}(r, o), r, o, i, s.line, s.column);
}
function ue() {
var e, t;
for (e = [], (t = be()) === i && (t = de()) === i && (t = fe()); t !== i; ) e.push(t), 
(t = be()) === i && (t = de()) === i && (t = fe());
return e;
}
function de() {
var e, n, r, s, o;
return e = Q, t.substr(Q, 2) === l ? (n = l, Q += 2) : (n = i, 0 === se && le(c)), 
n !== i && (r = function e() {
var n, r, s, o;
return n = Q, (r = pe()) !== i ? (124 === t.charCodeAt(Q) ? (s = f, Q++) : (s = i, 
0 === se && le(m)), s !== i && (o = e()) !== i ? (ee = n, r = g(r, o), n = r) : (Q = n, 
n = a)) : (Q = n, n = a), n === i && (n = Q, (r = pe()) !== i && (ee = n, r = b(r)), 
n = r), n;
}()) !== i ? (t.substr(Q, 2) === u ? (s = u, Q += 2) : (s = i, 0 === se && le(d)), 
s !== i ? ((o = function() {
var e, n, r;
return e = Q, 58 === t.charCodeAt(Q) ? (n = R, Q++) : (n = i, 0 === se && le(P)), 
n !== i && (r = me()) !== i ? (ee = e, n = D(r), e = n) : (Q = e, e = a), e;
}()) === i && (o = p), o !== i ? (ee = e, e = n = h(r, o)) : (Q = e, e = a)) : (Q = e, 
e = a)) : (Q = e, e = a), e;
}
function pe() {
var e, n, r, s, o, l;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = v, Q++) : (n = i, 0 === se && le(y)), n !== i) {
if (r = [], E.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = i, 0 === se && le(w)), 
s !== i) for (;s !== i; ) r.push(s), E.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = i, 
0 === se && le(w)); else r = a;
if (r !== i) if (32 === t.charCodeAt(Q) ? (s = _, Q++) : (s = i, 0 === se && le(T)), 
s === i && (s = p), s !== i) {
if (o = [], (l = he()) !== i) for (;l !== i; ) o.push(l), l = he(); else o = a;
o !== i ? (ee = e, e = n = k(r, o)) : (Q = e, e = a);
} else Q = e, e = a; else Q = e, e = a;
} else Q = e, e = a;
if (e === i) {
if (e = Q, n = [], (r = he()) !== i) for (;r !== i; ) n.push(r), r = he(); else n = a;
n !== i && (ee = e, n = A()), e = n;
}
return e;
}
function he() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = S, Q++) : (n = i, 0 === se && le(F)), 
n !== i ? (x.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === se && le(L)), 
r !== i ? (ee = e, e = n = O(r)) : (Q = e, e = a)) : (Q = e, e = a), e === i && (e = Q, 
n = Q, se++, 124 === t.charCodeAt(Q) ? (r = f, Q++) : (r = i, 0 === se && le(m)), 
r === i && (t.substr(Q, 2) === u ? (r = u, Q += 2) : (r = i, 0 === se && le(d))), 
se--, r === i ? n = C : (Q = n, n = a), n !== i ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = i, 0 === se && le(I)), r !== i ? (ee = e, e = n = N()) : (Q = e, e = a)) : (Q = e, 
e = a)), e;
}
function fe() {
var e, n, r, s;
return e = Q, t.substr(Q, 2) === j ? (n = j, Q += 2) : (n = i, 0 === se && le(M)), 
n !== i && (r = me()) !== i ? (125 === t.charCodeAt(Q) ? (s = U, Q++) : (s = i, 
0 === se && le(B)), s !== i ? (ee = e, e = n = q(r)) : (Q = e, e = a)) : (Q = e, 
e = a), e;
}
function me() {
var e, n, r, s;
if (e = Q, ge() !== i) if (46 === t.charCodeAt(Q) ? (n = H, Q++) : (n = i, 0 === se && le(W)), 
n !== i) {
if (r = [], (s = me()) !== i) for (;s !== i; ) r.push(s), s = me(); else r = a;
r !== i ? (ee = e, e = $()) : (Q = e, e = a);
} else Q = e, e = a; else Q = e, e = a;
return e === i && (e = ge()), e;
}
function ge() {
var e, n, r, s;
if (e = Q, z.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = i, 0 === se && le(G)), 
n !== i) {
for (r = [], X.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = i, 0 === se && le(Y)); s !== i; ) r.push(s), 
X.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = i, 0 === se && le(Y));
r !== i ? (ee = e, e = n = N()) : (Q = e, e = a);
} else Q = e, e = a;
return e;
}
function be() {
var e, t, n, r, s;
if (e = Q, t = [], n = Q, r = Q, se++, (s = de()) === i && (s = fe()), se--, s === i ? r = C : (Q = r, 
r = a), r !== i && (s = ve()) !== i ? (ee = n, n = r = K(s)) : (Q = n, n = a), n !== i) for (;n !== i; ) t.push(n), 
n = Q, r = Q, se++, (s = de()) === i && (s = fe()), se--, s === i ? r = C : (Q = r, 
r = a), r !== i && (s = ve()) !== i ? (ee = n, n = r = K(s)) : (Q = n, n = a); else t = a;
return t !== i && (ee = e, t = V(t)), e = t;
}
function ve() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = S, Q++) : (n = i, 0 === se && le(F)), 
n !== i ? (Z.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === se && le(J)), 
r !== i ? (ee = e, e = n = O(r)) : (Q = e, e = a)) : (Q = e, e = a), e === i && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = i, 0 === se && le(I))), e;
}
if ((n = o()) !== i && Q === t.length) return n;
throw n !== i && Q < t.length && le({
type: "end",
description: "end of input"
}), ce(null, ie, re);
}
};
}();
},
80: function(e, t) {
e.exports = function(e) {
let t, n = 1 + e.split("\n").length, r = new Array(n);
return r = r.join("<span></span>"), t = '<span class="line-numbers-rows">'.concat(r, "</span>");
};
},
9: function(e, t, n) {
"use strict";
var r = {};
function i(e) {
var t;
return r[e] ? e : (t = e.toLowerCase().replace("_", "-"), r[t] ? t : (t = t.split("-")[0], 
r[t] ? t : null));
}
function s(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].cFn) return 0;
var s = String(t), o = s.indexOf(".") < 0 ? "" : s.split(".")[1], a = o.length, l = +t, c = +s.split(".")[0], u = 0 === o.length ? 0 : +o.replace(/0+$/, "");
return r[n].cFn(l, c, a, +o, u);
}
function o(e, t) {
var n = i(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var s = String(t), o = s.indexOf(".") < 0 ? "" : s.split(".")[1], a = o.length, l = +t, c = +s.split(".")[0], u = 0 === o.length ? 0 : +o.replace(/0+$/, "");
return r[n].oFn(l, c, a, +o, u);
}
e.exports = function(e, t) {
var n = i(e);
return n ? r[n].c[s(n, t)] : null;
}, e.exports.indexOf = s, e.exports.forms = function(e) {
var t = i(e);
return r[t] ? r[t].c : null;
}, e.exports.ordinal = function(e, t) {
var n = i(e);
return r[n] ? r[n].o[o(n, t)] : null;
}, e.exports.ordinal.indexOf = o, e.exports.ordinal.forms = function(e) {
var t = i(e);
return r[t] ? r[t].o : null;
};
var a = [ "zero", "one", "two", "few", "many", "other" ];
function l(e) {
return a[e];
}
function c(e, t) {
var n;
for (t.c = t.c ? t.c.map(l) : [ "other" ], t.o = t.o ? t.o.map(l) : [ "other" ], 
n = 0; n < e.length; n++) r[e[n]] = t;
}
function u(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function d(e, t) {
return e.indexOf(t) >= 0;
}
c([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) ? 0 : 1;
}
}), c([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), c([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : u(3, 10, t) ? 3 : u(11, 99, t) ? 4 : 5;
}
}), c([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return d([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), c([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, i = t % 1e3;
return d([ 1, 2, 5, 7, 8 ], n) || d([ 20, 50, 70, 80 ], r) ? 0 : d([ 3, 4 ], n) || d([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === t || 6 === n || d([ 40, 60, 90 ], r) ? 2 : 3;
}
}), c([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : u(2, 4, t) && !u(12, 14, n) ? 1 : 0 === t || u(5, 9, t) || u(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return d([ 2, 3 ], e % 10) && !d([ 12, 13 ], t) ? 0 : 1;
}
}), c([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
c([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || d([ 11, 71, 91 ], n) ? 2 !== t || d([ 12, 72, 92 ], n) ? !u(3, 4, t) && 9 !== t || u(10, 19, n) || u(70, 79, n) || u(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, s = t % 100, o = r % 10, a = r % 100;
return 0 === n && 1 === i && 11 !== s || 1 === o && 11 !== a ? 0 : 0 === n && u(2, 4, i) && !u(12, 14, s) || u(2, 4, o) && !u(12, 14, a) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return d([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), c([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : u(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), c([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return d([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : d([ 3, 4 ], e) ? 3 : d([ 5, 6 ], e) ? 4 : 5;
}
}), c([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 1 === e || 0 !== i && d([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 100, s = r % 100;
return 0 === n && 1 === i || 1 === s ? 0 : 0 === n && 2 === i || 2 === s ? 1 : 0 === n && u(3, 4, i) || u(3, 4, s) ? 2 : 3;
}
}), c([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), c([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return d([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, s = r % 10;
return 0 === n && d([ 1, 2, 3 ], t) || 0 === n && !d([ 4, 6, 9 ], i) || 0 !== n && !d([ 4, 6, 9 ], s) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return d([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : u(3, 6, e) ? 2 : u(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return d([ 1, 11 ], e) ? 0 : d([ 2, 12 ], e) ? 1 : u(3, 10, e) || u(13, 19, e) ? 2 : 3;
}
}), c([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && d([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), c([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || u(0, 10, e) || 0 !== r ? 3 : 2;
}
}), c([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return d([ 1, 5 ], e) ? 0 : 1;
}
}), c([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 0 === i && 1 === t % 10 && 11 !== t % 100 || 0 !== i ? 0 : 1;
}
}), c([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return d([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), c([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), c([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), c([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), c([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), c([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : d([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), c([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, s = e % 100;
return 1 !== i || u(11, 19, s) ? u(2, 9, i) && !u(11, 19, s) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, s = e % 100, o = r % 100, a = r % 10;
return 0 === i || u(11, 19, s) || 2 === n && u(11, 19, o) ? 0 : 1 === i && 11 !== s || 2 === n && 1 === a && 11 !== o || 2 !== n && 1 === a ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : d([ 7, 8 ], n) && !d([ 17, 18 ], r) ? 2 : 3;
}
}), c([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || 1 !== e && u(1, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : d([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), c([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || u(2, 10, t) ? 1 : u(11, 19, t) ? 2 : 3;
}
}), c([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return u(1, 4, e) ? 0 : 1;
}
}), c([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 1 !== t && u(0, 1, r) || 0 === n && u(5, 9, r) || 0 === n && u(12, 14, i) ? 2 : 3;
}
}), c([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 2, e) && 2 !== e ? 0 : 1;
}
}), c([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), c([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
}
}), c([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : u(2, 10, e) ? 1 : 2;
}
}), c([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return d([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), c([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u(3, 4, r) || 0 !== n ? 2 : 3;
}
}), c([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), c([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return d([ 1, 2 ], e % 10) && !d([ 11, 12 ], t) ? 0 : 1;
}
}), c([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) || u(11, 99, e) ? 0 : 1;
}
}), c([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
}
});