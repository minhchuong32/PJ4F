(function () {
    var j = function () { }; j.prototype = {
        Loop: function (b, c, a, d) { return { next: function (e, i) { var f = function (b) { a.next(e, function (a, e) { if (a == "normal" || a == "continue") g(b); else if (a == "throw" || a == "return") i(a, e); else if (a == "break") i("normal"); else throw Error('Invalid type for "Loop": ' + a); }) }, g = function (a) { try { c && !a && c.call(e), !b || b.call(e) ? f(!1) : i("normal") } catch (d) { i("throw", d) } }; d ? f(!0) : g(!0) } } }, Delay: function (b) { return { next: function (c, a) { try { b.call(c).next(c, a) } catch (d) { a("throw", d) } } } }, Combine: function (b,
            c) { return { next: function (a, d) { b.next(a, function (b, i, f) { if (b == "normal") try { c.next(a, d) } catch (g) { d("throw", g) } else d(b, i, f) }) } } }, Return: function (b) { return { next: function (c, a) { a("return", b) } } }, Normal: function () { return { next: function (b, c) { c("normal") } } }, Break: function () { return { next: function (b, c) { c("break") } } }, Continue: function () { return { next: function (b, c) { c("continue") } } }, Throw: function (b) { return { next: function (c, a) { a("throw", b) } } }, Try: function (b, c, a) {
                return {
                    next: function (d, e) {
                        b.next(d, function (b, f, g) {
                            if (b !=
                                "throw" || !c) a ? a.next(d, function (a, c, d) { a == "normal" ? e(b, f, g) : e(a, c, d) }) : e(b, f, g); else if (c) { var h; try { h = c.call(d, f) } catch (j) { a ? a.next(d, function (a, b, c) { a == "normal" ? e("throw", j) : e(a, b, c) }) : e("throw", j) } h && h.next(d, function (b, c, f) { b == "throw" ? a ? a.next(d, function (a, d, g) { a == "normal" ? e(b, c, f) : e(a, d, g) }) : e(b, c, f) : a ? a.next(d, function (a, d, g) { a == "normal" ? e(b, c, f) : e(a, d, g) }) : e(b, c, f) }) } else a.next(d, function (a, c, d) { a == "normal" ? e(b, f, g) : e(a, c, d) })
                        })
                    }
                }
            }
    }; var h = function (b) {
        if (!b.modules) b.modules = {}; if (!b.modules.builderbase) b.modules.builderbase =
            !0, b.BuilderBase = j
    }, k = typeof define === "function" && !define.amd, l = typeof require === "function" && typeof define === "function" && define.amd; if (typeof require === "function" && typeof module !== "undefined" && module.exports) module.exports.init = h; else if (k) define("jscex-builderbase", function (b, c, a) { a.exports.init = h }); else if (l) define("jscex-builderbase", function () { return { init: h } }); else { if (typeof Jscex === "undefined") throw Error('Missing the root object, please load "jscex" module first.'); h(Jscex) }
})();