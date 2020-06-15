var g, h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global ? global : this;
function aa() {
  h.Symbol || (h.Symbol = ba);
  aa = function() {
  };
}
var ca = 0;
function ba(a) {
  return "jscomp_symbol_" + a + ca++;
}
function da() {
  aa();
  h.Symbol.iterator || (h.Symbol.iterator = h.Symbol("iterator"));
  da = function() {
  };
}
function m(a) {
  da();
  if (a[h.Symbol.iterator]) {
    return a[h.Symbol.iterator]();
  }
  var c = 0;
  return {next:function() {
    return c == a.length ? {done:!0} : {done:!1, value:a[c++]};
  }};
}
function n(a, c) {
  this.x = a;
  this.y = c;
}
function p(a, c) {
  var b = a.originalEvent.touches[void 0 === c ? 0 : c];
  return new n(b.pageX, b.pageY);
}
function r(a, c) {
  return null != c && a.x == c.x && a.y == c.y;
}
function t(a, c) {
  return new n(a.x - c.x, a.y - c.y);
}
g = n.prototype;
g.add = function(a) {
  return new n(this.x + a.x, this.y + a.y);
};
g.clone = function() {
  return new n(this.x, this.y);
};
g.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
g.scale = function(a) {
  return new n(this.x * a, this.y * a);
};
function u(a) {
  return new n(a.x, a.y - 1);
}
function w(a) {
  return new n(a.x, a.y + 1);
}
function x(a) {
  return new n(a.x - 1, a.y);
}
g.right = function(a) {
  return new n(this.x + (void 0 === a ? 1 : a), this.y);
};
var y = ["+", "\u2012", "\u2013", "-", "|"], z = [">", "<", "^", "v"], ea = y.concat(z), A = "ontouchstart" in window || "onmsgesturechange" in window, B = new n(-1, 0), C = new n(1, 0), E = new n(0, -1), F = new n(0, 1), G = [B, C, E, F];
function H(a, c) {
  this.a = Math.min(a.x, c.x);
  this.b = Math.min(a.y, c.y);
  this.c = Math.max(a.x, c.x);
  this.f = Math.max(a.y, c.y);
}
function fa(a) {
  return new n(a.a, a.b);
}
H.prototype.contains = function(a) {
  return a.x >= this.a && a.x <= this.c && a.y >= this.b && a.y <= this.f;
};
function ga() {
  this.a = this.value = null;
}
function I(a) {
  return null != a.a ? a.a : a.value;
}
function J(a) {
  return ea.includes(I(a));
}
function L(a) {
  return null == a.value && null == a.a;
}
function ha(a, c, b, e) {
  this.a = a;
  this.right = c;
  this.c = b;
  this.b = e;
  this.h = this.f = this.j = this.g = !1;
}
function M(a) {
  return a.a + a.right + a.c + a.b;
}
function ia(a, c) {
  this.position = a;
  this.value = c;
}
function ja(a, c) {
  this.position = a;
  this.a = c;
}
;function ka(a) {
  for (var c = 0;c < a.a.length;c++) {
    for (var b = 0;b < a.a[c].length;b++) {
      null != I(a.a[c][b]) && N(a, new n(c, b), "\u2009");
    }
  }
  O(a);
}
function P(a, c) {
  return a.a[c.x][c.y];
}
function N(a, c, b) {
  var e = P(a, c);
  a.b.push(new ja(c, e));
  e.a = b;
  a.c = !0;
}
function Q(a, c, b) {
  I(P(a, c)) != b && N(a, c, b);
}
function R(a) {
  for (var c = m(a.b), b = c.next();!b.done;b = c.next()) {
    b.value.a.a = null;
  }
  a.b.length = 0;
}
function S(a, c) {
  var b = P(a, c), e = null != b.a ? b.a : b.value, d = y.includes(e), f = z.includes(e);
  if (!d && !f) {
    return e;
  }
  b = T(a, c);
  if (d && b.a && b.right && !b.c && !b.b) {
    return "-";
  }
  if (d && !b.a && !b.right && b.c && b.b) {
    return "|";
  }
  if (4 == M(b)) {
    return "-";
  }
  if (f && 3 == M(b)) {
    if (!b.a) {
      return "<";
    }
    if (!b.c) {
      return "^";
    }
    if (!b.b) {
      return "v";
    }
    if (!b.right) {
      return ">";
    }
  }
  if ((d || f) && 3 == M(b)) {
    b.g = J(P(a, u(x(c))));
    b.j = J(P(a, u(c.right())));
    b.f = J(P(a, w(x(c))));
    b.h = J(P(a, w(c.right())));
    if (!b.right && b.g && b.f || !b.a && b.j && b.h) {
      return "|";
    }
    if (!b.b && b.g && b.j || !b.c && b.h && b.f) {
      return "-";
    }
    e = L(P(a, u(x(c))));
    d = L(P(a, u(c.right())));
    if (b.c && b.a && b.right && (!e || !d)) {
      return "-";
    }
    e = L(P(a, w(x(c))));
    d = L(P(a, w(c.right())));
    return !(b.b && b.a && b.right) || e && d ? "+" : "-";
  }
  if (f && 1 == M(b)) {
    if (b.a) {
      return ">";
    }
    if (b.c) {
      return "v";
    }
    if (b.b) {
      return "^";
    }
    if (b.right) {
      return "<";
    }
  }
  return e;
}
function T(a, c) {
  var b = J(P(a, x(c))), e = J(P(a, c.right())), d = J(P(a, u(c))), f = J(P(a, w(c)));
  return new ha(b, e, d, f);
}
function O(a, c) {
  var b = [], e = a.b.map(function(a) {
    return a.position.x.toString() + a.position.y.toString();
  }), d = a.b.filter(function(a, b) {
    return e.indexOf(e[b]) == b;
  });
  a.b.length = 0;
  for (var d = m(d), f = d.next();!f.done;f = d.next()) {
    var k = f.value, f = k.position, k = k.a;
    b.push(new ia(f, null != k.value ? k.value : " "));
    var l = I(k);
    if ("\u2009" == l || " " == l) {
      l = null;
    }
    J(k) && (l = S(a, f));
    k.a = null;
    k.value = l;
  }
  d = c ? a.f : a.g;
  0 < b.length && (50 < d.length && d.shift(), d.push(b));
  a.c = !0;
}
function la(a) {
  if (0 != a.g.length) {
    for (var c = a.g.pop(), c = m(c), b = c.next();!b.done;b = c.next()) {
      b = b.value, N(a, b.position, b.value);
    }
    O(a, !0);
  }
}
function ma(a) {
  if (0 != a.f.length) {
    for (var c = a.f.pop(), c = m(c), b = c.next();!b.done;b = c.next()) {
      b = b.value, N(a, b.position, b.value);
    }
    O(a);
  }
}
function na(a) {
  for (var c = new n(Number.MAX_VALUE, Number.MAX_VALUE), b = new n(-1, -1), e = 0;e < a.a.length;e++) {
    for (var d = 0;d < a.a[e].length;d++) {
      null != I(a.a[e][d]) && (e < c.x && (c.x = e), d < c.y && (c.y = d), e > b.x && (b.x = e), d > b.y && (b.y = d));
    }
  }
  if (0 > b.x) {
    return "";
  }
  for (var f = "", d = c.y;d <= b.y;d++) {
    for (var k = "", e = c.x;e <= b.x;e++) {
      var l = S(a, new n(e, d)), k = k + (null == l || "\u2009" == l ? " " : l)
    }
    f += k.replace(/\s+$/, "") + "\n";
  }
  return f;
}
;function U(a, c, b, e, d) {
  d = void 0 === d ? "+" : d;
  var f = new H(c, b), k = f.a, l = f.b, v = f.c, f = f.f, D = e ? b.x : c.x;
  for (e = e ? c.y : b.y;k++ < v;) {
    var q = new n(k, e), K = T(a, new n(k, e));
    " " == d && 2 == K.c + K.b || Q(a, q, d);
  }
  for (;l++ < f;) {
    q = new n(D, l), K = T(a, new n(D, l)), " " == d && 2 == K.a + K.right || Q(a, q, d);
  }
  N(a, c, d);
  N(a, b, d);
  Q(a, new n(D, e), d);
}
;function V(a) {
  this.a = a;
  this.b = null;
}
g = V.prototype;
g.l = function(a) {
  this.b = a;
};
g.i = function(a) {
  R(this.a);
  U(this.a, this.b, a, !0);
  U(this.a, this.b, a, !1);
};
g.o = function() {
  O(this.a);
};
g.s = function() {
  return "crosshair";
};
g.m = function() {
};
function oa(a) {
  a.b.width = document.documentElement.clientWidth;
  a.b.height = document.documentElement.clientHeight;
  a.f = !0;
}
function pa(a) {
  if (a.f || a.g.c) {
    a.f = !1, a.g.c = !1, qa(a);
  }
  window.requestAnimationFrame(function() {
    pa(a);
  });
}
function qa(a) {
  var c = a.context;
  c.setTransform(1, 0, 0, 1, 0, 0);
  c.clearRect(0, 0, a.b.width, a.b.height);
  c.scale(a.c, a.c);
  c.translate(a.b.width / 2 / a.c, a.b.height / 2 / a.c);
  var b = t(W(a, new n(0, 0)), new n(3, 3)), e = W(a, new n(a.b.width, a.b.height)).add(new n(3, 3));
  b.x = Math.max(0, Math.min(b.x, 2E3));
  e.x = Math.max(0, Math.min(e.x, 2E3));
  b.y = Math.max(0, Math.min(b.y, 600));
  e.y = Math.max(0, Math.min(e.y, 600));
  c.lineWidth = "1";
  c.strokeStyle = "#EEEEEE";
  c.beginPath();
  for (var d = b.x;d < e.x;d++) {
    c.moveTo(9 * d - a.a.x, 0 - a.a.y), c.lineTo(9 * d - a.a.x, 17 * a.g.a.length - a.a.y);
  }
  for (d = b.y;d < e.y;d++) {
    c.moveTo(0 - a.a.x, 17 * d - a.a.y), c.lineTo(9 * a.g.a.length - a.a.x, 17 * d - a.a.y);
  }
  a.context.stroke();
  d = !a.h;
  c.font = "15px Courier New";
  for (var f = b.x;f < e.x;f++) {
    for (var k = b.y;k < e.y;k++) {
      var l = P(a.g, new n(f, k));
      if (J(l) || null != l.a && " " != I(l)) {
        a.context.fillStyle = null != l.a ? "#DEF" : "#F5F5F5", c.fillRect(9 * f - a.a.x, 17 * (k - 1) - a.a.y, 9, 17);
      }
      var v = S(a.g, new n(f, k));
      null == v || J(l) && !d || (a.context.fillStyle = "#000000", c.fillText(v, 9 * f - a.a.x, 17 * k - a.a.y - 3));
    }
  }
  if (a.h) {
    c.lineWidth = "1";
    c.strokeStyle = "#000000";
    c.beginPath();
    for (d = b.x;d < e.x;d++) {
      for (l = !1, f = b.y;f < e.y;f++) {
        k = P(a.g, new n(d, f)), J(k) && f != e.y - 1 || !l || (c.moveTo(9 * d - a.a.x + 4.5, 17 * l - a.a.y - 8.5), c.lineTo(9 * d - a.a.x + 4.5, 17 * (f - 1) - a.a.y - 8.5), l = !1), J(k) && !l && (l = f);
      }
    }
    for (f = b.y;f < e.y;f++) {
      for (l = !1, d = b.x;d < e.x;d++) {
        k = P(a.g, new n(d, f)), J(k) && d != e.x - 1 || !l || (c.moveTo(9 * l - a.a.x + 4.5, 17 * f - a.a.y - 8.5), c.lineTo(9 * (d - 1) - a.a.x + 4.5, 17 * f - a.a.y - 8.5), l = !1), J(k) && !l && (l = d);
      }
    }
    a.context.stroke();
  }
}
function W(a, c) {
  var b = new n((c.x - a.b.width / 2) / a.c + a.a.x, (c.y - a.b.height / 2) / a.c + a.a.y);
  return new n(Math.min(Math.max(1, Math.round((b.x - 4.5) / 9)), 1998), Math.min(Math.max(1, Math.round((b.y + 8.5) / 17)), 598));
}
;function X(a) {
  this.c = a;
  this.a = this.b = null;
}
g = X.prototype;
g.l = function(a) {
  this.b = a;
  this.i(a);
};
g.i = function(a) {
  R(this.c);
  this.a = a;
  a = Math.min(this.b.y, this.a.y);
  for (var c = Math.max(this.b.x, this.a.x), b = Math.max(this.b.y, this.a.y), e = Math.min(this.b.x, this.a.x);e <= c;e++) {
    for (var d = a;d <= b;d++) {
      N(this.c, new n(e, d), "\u2009");
    }
  }
};
g.o = function() {
  O(this.c);
};
g.s = function() {
  return "crosshair";
};
g.m = function() {
};
function ra(a) {
  this.c = a;
  this.g = this.f = this.b = this.a = null;
  this.h = !0;
  this.j = [];
}
g = ra.prototype;
g.l = function(a) {
  null != this.a && null != this.b && (new H(this.a, this.b)).contains(a) ? (this.f = a, sa(this), ta(this, a)) : (this.a = a, this.b = null, this.h = !1, this.i(a));
};
function sa(a) {
  var c = a.c.b.filter(function(a) {
    return null != I(a.a) && "\u2009" != I(a.a);
  }), b = fa(new H(a.a, a.b));
  a.j = c.map(function(a) {
    return new ia(t(a.position, b), I(a.a));
  });
}
g.i = function(a) {
  if (null != this.f) {
    ta(this, a);
  } else {
    if (1 != this.h) {
      this.b = a;
      R(this.c);
      a = new H(this.a, a);
      for (var c = a.a;c <= a.c;c++) {
        for (var b = a.b;b <= a.f;b++) {
          var e = new n(c, b), d = I(P(this.c, e));
          N(this.c, e, null == d ? "\u2009" : d);
        }
      }
    }
  }
};
function ta(a, c) {
  a.g = c;
  R(a.c);
  var b = new X(a.c);
  b.l(a.a);
  b.i(a.b);
  b = t(a.g, a.f).add(fa(new H(a.a, a.b)));
  ua(a, b);
}
function ua(a, c) {
  for (var b = m(a.j), e = b.next();!e.done;e = b.next()) {
    var e = e.value, d = e.value;
    N(a.c, e.position.add(c), d);
  }
}
g.o = function() {
  null != this.f && (O(this.c), this.b = this.a = null);
  this.g = this.f = null;
  this.h = !0;
};
g.s = function(a) {
  return null != this.a && null != this.b && (new H(this.a, this.b)).contains(a) ? "pointer" : "default";
};
g.m = function(a) {
  if (null != this.a && null != this.b && ("<copy>" != a && "<cut>" != a || sa(this), "<cut>" == a)) {
    var c = new X(this.c);
    c.l(this.a);
    c.i(this.b);
    O(this.c);
  }
  "<paste>" == a && (ua(this, this.a), O(this.c));
};
function va(a) {
  this.b = a;
  this.c = this.a = null;
}
g = va.prototype;
g.l = function(a) {
  O(this.b);
  $("#text-tool-input").val("");
  this.a = a;
  a = I(P(this.b, this.a));
  N(this.b, this.a, null == a ? "\u2009" : a);
};
g.i = function() {
};
g.o = function() {
  null != this.a && (this.c = this.a, this.a = null, $("#text-tool-widget").hide(0, function() {
    $("#text-tool-widget").show(0, function() {
      $("#text-tool-input").focus();
    });
  }));
};
g.s = function() {
  return "pointer";
};
g.m = function() {
  var a = $("#text-tool-input").val();
  R(this.b);
  for (var c = this.b, b = this.c, e = 0, d = 0, a = m(a), f = a.next();!f.done;f = a.next()) {
    f = f.value, "\n" == f ? (d++, e = 0) : (N(c, b.add(new n(e, d)), f), e++);
  }
};
function wa(a) {
  this.a = a;
  this.b = null;
  this.c = [];
}
g = wa.prototype;
g.l = function(a) {
  var c;
  if (A) {
    if (J(P(this.a, a))) {
      c = a;
    } else {
      var b = G.concat([B.add(E), B.add(F), C.add(E), C.add(F)]);
      c = null;
      for (var e = 0, b = m(b), d = b.next();!d.done;d = b.next()) {
        var d = d.value, f = a.add(d), k = M(T(this.a, f));
        J(P(this.a, f)) && k > e && (c = d, e = k);
      }
      c = null == c ? a : a.add(c);
    }
  } else {
    c = a;
  }
  this.b = c;
  this.c = [];
  if (J(P(this.a, this.b))) {
    T(this.a, this.b);
    c = [];
    e = m(G);
    for (b = e.next();!b.done;b = e.next()) {
      for (b = b.value, d = xa(this, this.b, b), d = m(d), f = d.next();!f.done;f = d.next()) {
        var f = f.value, k = 0 != b.x, l = -1 != z.indexOf(I(P(this.a, a))), v = -1 != z.indexOf(I(P(this.a, f)));
        if (1 == M(T(this.a, f))) {
          c.push({position:f, u:k, w:l, v:v});
        } else {
          for (var D = m(G), q = D.next();!q.done;q = D.next()) {
            q = q.value, 0 != b.add(q).length() && 2 != b.add(q).length() && (q = xa(this, f, q), 0 != q.length && (q = q[0], c.push({position:q, u:k, w:l, A:v, v:-1 != z.indexOf(I(P(this.a, q)))})));
          }
        }
      }
    }
    this.c = c;
    this.i(this.b);
  }
};
g.i = function(a) {
  R(this.a);
  for (var c = m(this.c), b = c.next();!b.done;b = c.next()) {
    b = b.value, U(this.a, this.b, b.position, b.u, " ");
  }
  c = m(this.c);
  for (b = c.next();!b.done;b = c.next()) {
    b = b.value, U(this.a, a, b.position, b.u);
  }
  c = m(this.c);
  for (b = c.next();!b.done;b = c.next()) {
    b = b.value, b.w && N(this.a, a, "^"), b.v && N(this.a, b.position, "^"), b.A && N(this.a, new n(b.u ? b.position.x : a.x, b.u ? a.y : b.position.y), "^");
  }
};
g.o = function() {
  O(this.a);
};
function xa(a, c, b) {
  for (var e = c.clone(), d = [];;) {
    var f = e.add(b);
    if (!J(P(a.a, f))) {
      return r(c, e) || d.push(e), d;
    }
    e = f;
    3 == M(T(a.a, e)) && d.push(e);
  }
}
g.s = function(a) {
  return J(P(this.a, a)) ? "pointer" : "default";
};
g.m = function() {
};
function ya(a, c) {
  this.a = a;
  this.value = c;
  A && ($("#freeform-tool-input").val(""), $("#freeform-tool-input").hide(0, function() {
    $("#freeform-tool-input").show(0, function() {
      $("#freeform-tool-input").focus();
    });
  }));
}
g = ya.prototype;
g.l = function(a) {
  N(this.a, a, this.value);
};
g.i = function(a) {
  N(this.a, a, this.value);
};
g.o = function() {
  O(this.a);
};
g.s = function() {
  return "crosshair";
};
g.m = function(a) {
  A && (this.value = $("#freeform-tool-input").val().substr(0, 1), $("#freeform-tool-input").blur(), $("#freeform-tool-input").hide(0));
  1 == a.length && (this.value = a);
};
function Y(a, c) {
  this.a = a;
  this.c = c;
  this.b = null;
}
g = Y.prototype;
g.l = function(a) {
  this.b = a;
};
g.i = function(a) {
  R(this.a);
  var c = T(this.a, this.b), b = T(this.a, a);
  U(this.a, this.b, a, c.c && c.b || b.a && b.right);
  this.c && N(this.a, a, b.c ? "^" : b.b ? "v" : b.a ? "<" : ">");
};
g.o = function() {
  O(this.a);
};
g.s = function() {
  return "crosshair";
};
g.m = function() {
};
function za(a, c) {
  var b = W(a.a, c);
  null == a.g && (a.g = b);
  r(b, a.g) || (a.a.b.style.cursor = a.c.s(b));
  2 != a.f || r(b, a.g) || a.c.i(b);
  if (1 == a.f) {
    var e = a.a, d = a.j.add(t(a.h, c).scale(1 / a.a.c));
    e.a = d;
    e.f = !0;
  }
  a.g = b;
}
function Z(a) {
  2 == a.f && a.c.o();
  a.f = 0;
  a.h = null;
  a.j = null;
  a.g = null;
}
function Aa(a) {
  $(window).resize(function() {
    oa(a.a);
  });
  $("#draw-tools > button.tool").click(function(c) {
    $("#text-tool-widget").hide(0);
    c = c.target.id;
    $("#draw-tools > button.tool").removeClass("active");
    $("#" + c).toggleClass("active");
    $(".dialog").removeClass("visible");
    "box-button" == c && (a.c = new V(a.b));
    "line-button" == c && (a.c = new Y(a.b, !1));
    "arrow-button" == c && (a.c = new Y(a.b, !0));
    "freeform-button" == c && (a.c = new ya(a.b, "X"));
    "erase-button" == c && (a.c = new X(a.b));
    "move-button" == c && (a.c = new wa(a.b));
    "text-button" == c && (a.c = new va(a.b));
    "select-button" == c && (a.c = new ra(a.b));
    O(a.b);
    a.a.b.focus();
  });
  $("#file-tools > button.tool").click(function(c) {
    c = c.target.id;
    $(".dialog").removeClass("visible");
    $("#" + c + "-dialog").toggleClass("visible");
    "import-button" == c && ($("#import-area").val(""), $("#import-area").focus());
    "export-button" == c && ($("#export-area").val(na(a.b)), $("#export-area").select());
    "clear-button" == c && ka(a.b);
    "undo-button" == c && la(a.b);
    "redo-button" == c && ma(a.b);
  });
  $("button.close-dialog-button").click(function() {
    $(".dialog").removeClass("visible");
  });
  $("#import-submit-button").click(function() {
    ka(a.b);
    for (var c = a.b, b = $("#import-area").val(), e = W(a.a, new n(a.a.b.width / 2, a.a.b.height / 2)), b = b.split("\n"), d = new n(0, Math.round(b.length / 2)), f = 0;f < b.length;f++) {
      d.x = Math.max(d.x, Math.round(b[f].length / 2));
    }
    for (f = 0;f < b.length;f++) {
      for (var k = b[f], l = 0;l < k.length;l++) {
        var v = k.charAt(l);
        y.includes(v) && (v = "+");
        N(c, t((new n(l, f)).add(e), d), v);
      }
    }
    O(a.b);
    $("#import-area").val("");
    $(".dialog").removeClass("visible");
  });
  $("#use-lines-button").click(function() {
    $(".dialog").removeClass("visible");
    var c = a.a;
    c.h = !0;
    c.f = !0;
  });
  $("#use-ascii-button").click(function() {
    $(".dialog").removeClass("visible");
    var c = a.a;
    c.h = !1;
    c.f = !0;
  });
  $(window).keypress(function(c) {
    c.ctrlKey || c.metaKey || 13 == c.keyCode || a.c.m(String.fromCharCode(c.keyCode));
  });
  $(window).keydown(function(c) {
    var b = null;
    if (c.ctrlKey || c.metaKey) {
      67 == c.keyCode && (b = "<copy>"), 86 == c.keyCode && (b = "<paste>"), 90 == c.keyCode && la(a.b), 89 == c.keyCode && ma(a.b), 88 == c.keyCode && (b = "<cut>");
    }
    8 == c.keyCode && (b = "<backspace>");
    13 == c.keyCode && (b = "<enter>");
    38 == c.keyCode && (b = "<up>");
    40 == c.keyCode && (b = "<down>");
    37 == c.keyCode && (b = "<left>");
    39 == c.keyCode && (b = "<right>");
    null != b && a.c.m(b);
  });
  $("#text-tool-input, #freeform-tool-input").keyup(function() {
    a.c.m("");
  });
  $("#text-tool-input, #freeform-tool-input").change(function() {
    a.c.m("");
  });
  $("#text-tool-close").click(function() {
    $("#text-tool-widget").hide();
    O(a.b);
  });
}
;function Ba(a) {
  var c = $(a.a.a.b);
  c.on("mousewheel", function(b) {
    b = a.a.a.c * (0 < b.originalEvent.wheelDelta ? 1.1 : .9);
    b = Math.max(Math.min(b, 5), .2);
    var c = a.a.a;
    c.c = b;
    c.f = !0;
  });
  c.mousedown(function(b) {
    if (b.ctrlKey || b.metaKey) {
      var c = a.a;
      b = new n(b.clientX, b.clientY);
      c.f = 1;
      c.h = b;
      c.j = c.a.a;
    } else {
      c = a.a, b = new n(b.clientX, b.clientY), c.f = 2, c.c.l(W(c.a, b));
    }
  });
  c.mouseup(function() {
    Z(a.a);
  });
  c.mouseleave(function() {
    Z(a.a);
  });
  c.mousemove(function(b) {
    za(a.a, new n(b.clientX, b.clientY));
  });
}
function Ca(a, c) {
  a.f = c;
  a.h = $.now();
  a.b = !1;
  window.setTimeout(function() {
    if (!a.b && !a.c && null != a.f) {
      var b = a.a;
      b.f = 2;
      b.c.l(W(b.a, c));
    }
  }, 150);
}
function Da(a) {
  var c = $(a.a.a.b);
  c.on("touchstart", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      Ca(a, p(b));
    } else {
      if (1 < b.originalEvent.touches.length) {
        var c = p(b, 0);
        b = p(b, 1);
        Z(a.a);
        a.c = !0;
        a.b = !1;
        a.j = t(c, b).length();
        a.g = a.a.a.c;
      }
    }
  });
  c.on("touchmove", function(b) {
    b.preventDefault();
    if (1 == b.originalEvent.touches.length) {
      b = p(b);
      if (!a.b && 150 > $.now() - a.h && 6 < t(b, a.f).length()) {
        a.b = !0;
        var c = a.a;
        c.f = 1;
        c.h = b;
        c.j = c.a.a;
      }
      za(a.a, b);
    } else {
      1 < b.originalEvent.touches.length && a.c && (b = a.g * t(p(b, 0), p(b, 1)).length() / a.j, b = Math.max(Math.min(b, 5), .5), c = a.a.a, c.c = b, c.f = !0);
    }
  });
  c.on("touchend", function(b) {
    b.preventDefault();
    a.b = !1;
    a.c = !1;
    a.f = null;
    Z(a.a);
  });
}
;var Ea = new function() {
  this.a = Array(2E3);
  this.b = [];
  this.c = !0;
  this.g = [];
  this.f = [];
  for (var a = 0;a < this.a.length;a++) {
    this.a[a] = Array(600);
    for (var c = 0;c < this.a[a].length;c++) {
      this.a[a][c] = new ga;
    }
  }
}, Fa = new function(a) {
  this.g = a;
  this.b = document.getElementById("ascii-canvas");
  this.context = this.b.getContext("2d");
  this.c = 1;
  this.a = new n(9E3, 5100);
  this.f = !0;
  this.h = !1;
  oa(this);
}(Ea), Ga = new function(a, c) {
  this.a = a;
  this.b = c;
  this.c = new V(c);
  this.f = 0;
  this.g = null;
  Aa(this);
}(Fa, Ea);
new function(a) {
  this.a = a;
  this.c = this.b = !1;
  Da(this);
}(Ga);
new function(a) {
  this.a = a;
  Ba(this);
}(Ga);
pa(Fa);

