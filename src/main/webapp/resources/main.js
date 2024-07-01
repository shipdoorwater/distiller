function deepExtend(t) {
    var e = /#{\s*?_\s*?}/
      , n = Array.prototype.slice
      , i = Object.prototype.hasOwnProperty;
    return _.each(n.call(arguments, 1), function(n) {
        for (var r in n)
            if (i.call(n, r))
                if (_.isUndefined(t[r]) || _.isFunction(t[r]) || _.isNull(n[r]) || _.isDate(n[r]))
                    t[r] = n[r];
                else if (_.isString(n[r]) && e.test(n[r]))
                    _.isString(t[r]) && (t[r] = n[r].replace(e, t[r]));
                else if (_.isArray(t[r]) || _.isArray(n[r])) {
                    if (!_.isArray(t[r]) || !_.isArray(n[r]))
                        throw "Error: Trying to combine an array with a non-array (" + r + ")";
                    t[r] = _.reject(_.deepExtend(t[r], n[r]), function(t) {
                        return _.isNull(t)
                    })
                } else if (_.isObject(t[r]) || _.isObject(n[r])) {
                    if (!_.isObject(t[r]) || !_.isObject(n[r]))
                        throw "Error: Trying to combine an object with a non-object (" + r + ")";
                    t[r] = _.deepExtend(t[r], n[r])
                } else
                    t[r] = n[r]
    }),
    t
}
function FastClick(t, e) {
    "use strict";
    function n(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var i;
    e = e || {},
    this.trackingClick = !1,
    this.trackingClickStart = 0,
    this.targetElement = null,
    this.touchStartX = 0,
    this.touchStartY = 0,
    this.lastTouchIdentifier = 0,
    this.touchBoundary = e.touchBoundary || 10,
    this.layer = t,
    this.tapDelay = e.tapDelay || 200,
    FastClick.notNeeded(t) || (deviceIsAndroid && (t.addEventListener("mouseover", n(this.onMouse, this), !0),
    t.addEventListener("mousedown", n(this.onMouse, this), !0),
    t.addEventListener("mouseup", n(this.onMouse, this), !0)),
    t.addEventListener("click", n(this.onClick, this), !0),
    t.addEventListener("touchstart", n(this.onTouchStart, this), !1),
    t.addEventListener("touchmove", n(this.onTouchMove, this), !1),
    t.addEventListener("touchend", n(this.onTouchEnd, this), !1),
    t.addEventListener("touchcancel", n(this.onTouchCancel, this), !1),
    Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
        var r = Node.prototype.removeEventListener;
        "click" === e ? r.call(t, e, n.hijacked || n, i) : r.call(t, e, n, i)
    }
    ,
    t.addEventListener = function(e, n, i) {
        var r = Node.prototype.addEventListener;
        "click" === e ? r.call(t, e, n.hijacked || (n.hijacked = function(t) {
            t.propagationStopped || n(t)
        }
        ), i) : r.call(t, e, n, i)
    }
    ),
    "function" == typeof t.onclick && (i = t.onclick,
    t.addEventListener("click", function(t) {
        i(t)
    }, !1),
    t.onclick = null))
}
(function() {
    window.Distiller || (window.Distiller = {})
}
).call(this),
"object" != typeof JSON && (JSON = {}),
function() {
    "use strict";
    function f(t) {
        return t < 10 ? "0" + t : t
    }
    function this_value() {
        return this.valueOf()
    }
    function quote(t) {
        return rx_escapable.lastIndex = 0,
        rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function(t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + t + '"'
    }
    function str(t, e) {
        var n, i, r, o, s, a = gap, l = e[t];
        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)),
        "function" == typeof rep && (l = rep.call(e, t, l)),
        typeof l) {
        case "string":
            return quote(l);
        case "number":
            return isFinite(l) ? String(l) : "null";
        case "boolean":
        case "null":
            return String(l);
        case "object":
            if (!l)
                return "null";
            if (gap += indent,
            s = [],
            "[object Array]" === Object.prototype.toString.apply(l)) {
                for (o = l.length,
                n = 0; n < o; n += 1)
                    s[n] = str(n, l) || "null";
                return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]",
                gap = a,
                r
            }
            if (rep && "object" == typeof rep)
                for (o = rep.length,
                n = 0; n < o; n += 1)
                    "string" == typeof rep[n] && (r = str(i = rep[n], l)) && s.push(quote(i) + (gap ? ": " : ":") + r);
            else
                for (i in l)
                    Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l)) && s.push(quote(i) + (gap ? ": " : ":") + r);
            return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}",
            gap = a,
            r
        }
    }
    var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep;
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    Boolean.prototype.toJSON = this_value,
    Number.prototype.toJSON = this_value,
    String.prototype.toJSON = this_value),
    "function" != typeof JSON.stringify && (meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    JSON.stringify = function(t, e, n) {
        var i;
        if (gap = "",
        indent = "",
        "number" == typeof n)
            for (i = 0; i < n; i += 1)
                indent += " ";
        else
            "string" == typeof n && (indent = n);
        if (rep = e,
        e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
            throw new Error("JSON.stringify");
        return str("", {
            "": t
        })
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(t, e) {
            var n, i, r = t[e];
            if (r && "object" == typeof r)
                for (n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && ((i = walk(r, n)) !== undefined ? r[n] = i : delete r[n]);
            return reviver.call(t, e, r)
        }
        var j;
        if (text = String(text),
        rx_dangerous.lastIndex = 0,
        rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        })),
        rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}(),
/*!
* jQuery JavaScript Library v1.12.4
* http://jquery.com/
*
* Includes Sizzle.js
* http://sizzlejs.com/
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2016-05-20T17:17Z
*/
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length"in t && t.length
          , n = ft.type(t);
        return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function i(t, e, n) {
        if (ft.isFunction(e))
            return ft.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return ft.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (St.test(e))
                return ft.filter(e, t, n);
            e = ft.filter(e, t)
        }
        return ft.grep(t, function(t) {
            return ft.inArray(t, e) > -1 !== n
        })
    }
    function r(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = {};
        return ft.each(t.match(Dt) || [], function(t, n) {
            e[n] = !0
        }),
        e
    }
    function s() {
        rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", a),
        t.removeEventListener("load", a)) : (rt.detachEvent("onreadystatechange", a),
        t.detachEvent("onload", a))
    }
    function a() {
        (rt.addEventListener || "load" === t.event.type || "complete" === rt.readyState) && (s(),
        ft.ready())
    }
    function l(t, e, n) {
        if (n === undefined && 1 === t.nodeType) {
            var i = "data-" + e.replace($t, "-$1").toLowerCase();
            if ("string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ot.test(n) ? ft.parseJSON(n) : n)
                } catch (r) {}
                ft.data(t, e, n)
            } else
                n = undefined
        }
        return n
    }
    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, n, i) {
        if (Lt(t)) {
            var r, o, s = ft.expando, a = t.nodeType, l = a ? ft.cache : t, u = a ? t[s] : t[s] && s;
            if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof e)
                return u || (u = a ? t[s] = it.pop() || ft.guid++ : s),
                l[u] || (l[u] = a ? {} : {
                    toJSON: ft.noop
                }),
                "object" != typeof e && "function" != typeof e || (i ? l[u] = ft.extend(l[u], e) : l[u].data = ft.extend(l[u].data, e)),
                o = l[u],
                i || (o.data || (o.data = {}),
                o = o.data),
                n !== undefined && (o[ft.camelCase(e)] = n),
                "string" == typeof e ? null == (r = o[e]) && (r = o[ft.camelCase(e)]) : r = o,
                r
        }
    }
    function h(t, e, n) {
        if (Lt(t)) {
            var i, r, o = t.nodeType, s = o ? ft.cache : t, a = o ? t[ft.expando] : ft.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    r = (e = ft.isArray(e) ? e.concat(ft.map(e, ft.camelCase)) : e in i ? [e] : (e = ft.camelCase(e))in i ? [e] : e.split(" ")).length;
                    for (; r--; )
                        delete i[e[r]];
                    if (n ? !u(i) : !ft.isEmptyObject(i))
                        return
                }
                (n || (delete s[a].data,
                u(s[a]))) && (o ? ft.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : s[a] = undefined)
            }
        }
    }
    function d(t, e, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return ft.css(t, e, "")
        }
        , l = a(), u = n && n[3] || (ft.cssNumber[e] ? "" : "px"), c = (ft.cssNumber[e] || "px" !== u && +l) && Bt.exec(ft.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do {
                c /= o = o || ".5",
                ft.style(t, e, c + u)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    function p(t) {
        var e = Gt.split("|")
          , n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length; )
                n.createElement(e.pop());
        return n
    }
    function f(t, e) {
        var n, i, r = 0, o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
        if (!o)
            for (o = [],
            n = t.childNodes || t; null != (i = n[r]); r++)
                !e || ft.nodeName(i, e) ? o.push(i) : ft.merge(o, f(i, e));
        return e === undefined || e && ft.nodeName(t, e) ? ft.merge([t], o) : o
    }
    function m(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            ft._data(n, "globalEval", !e || ft._data(e[i], "globalEval"))
    }
    function g(t) {
        zt.test(t.type) && (t.defaultChecked = t.checked)
    }
    function v(t, e, n, i, r) {
        for (var o, s, a, l, u, c, h, d = t.length, v = p(e), y = [], b = 0; b < d; b++)
            if ((s = t[b]) || 0 === s)
                if ("object" === ft.type(s))
                    ft.merge(y, s.nodeType ? [s] : s);
                else if (Kt.test(s)) {
                    for (l = l || v.appendChild(e.createElement("div")),
                    u = (Ut.exec(s) || ["", ""])[1].toLowerCase(),
                    h = Yt[u] || Yt._default,
                    l.innerHTML = h[1] + ft.htmlPrefilter(s) + h[2],
                    o = h[0]; o--; )
                        l = l.lastChild;
                    if (!dt.leadingWhitespace && Xt.test(s) && y.push(e.createTextNode(Xt.exec(s)[0])),
                    !dt.tbody)
                        for (o = (s = "table" !== u || Qt.test(s) ? "<table>" !== h[1] || Qt.test(s) ? 0 : l : l.firstChild) && s.childNodes.length; o--; )
                            ft.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (ft.merge(y, l.childNodes),
                    l.textContent = ""; l.firstChild; )
                        l.removeChild(l.firstChild);
                    l = v.lastChild
                } else
                    y.push(e.createTextNode(s));
        for (l && v.removeChild(l),
        dt.appendChecked || ft.grep(f(y, "input"), g),
        b = 0; s = y[b++]; )
            if (i && ft.inArray(s, i) > -1)
                r && r.push(s);
            else if (a = ft.contains(s.ownerDocument, s),
            l = f(v.appendChild(s), "script"),
            a && m(l),
            n)
                for (o = 0; s = l[o++]; )
                    Vt.test(s.type || "") && n.push(s);
        return l = null,
        v
    }
    function y() {
        return !0
    }
    function b() {
        return !1
    }
    function w() {
        try {
            return rt.activeElement
        } catch (t) {}
    }
    function x(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n,
            n = undefined),
            e)
                x(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n,
        i = n = undefined) : null == r && ("string" == typeof n ? (r = i,
        i = undefined) : (r = i,
        i = n,
        n = undefined)),
        !1 === r)
            r = b;
        else if (!r)
            return t;
        return 1 === o && (s = r,
        (r = function(t) {
            return ft().off(t),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = ft.guid++)),
        t.each(function() {
            ft.event.add(this, e, r, i, n)
        })
    }
    function C(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function S(t) {
        return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function k(t) {
        var e = le.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function E(t, e) {
        if (1 === e.nodeType && ft.hasData(t)) {
            var n, i, r, o = ft._data(t), s = ft._data(e, o), a = o.events;
            if (a)
                for (n in delete s.handle,
                s.events = {},
                a)
                    for (i = 0,
                    r = a[n].length; i < r; i++)
                        ft.event.add(e, n, a[n][i]);
            s.data && (s.data = ft.extend({}, s.data))
        }
    }
    function T(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(),
            !dt.noCloneEvent && e[ft.expando]) {
                for (i in (r = ft._data(e)).events)
                    ft.removeEvent(e, i, r.handle);
                e.removeAttribute(ft.expando)
            }
            "script" === n && e.text !== t.text ? (S(e).text = t.text,
            k(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML),
            dt.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && zt.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
            e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }
    function P(t, e, n, i) {
        e = st.apply([], e);
        var r, o, s, a, l, u, c = 0, h = t.length, d = h - 1, p = e[0], m = ft.isFunction(p);
        if (m || h > 1 && "string" == typeof p && !dt.checkClone && ae.test(p))
            return t.each(function(r) {
                var o = t.eq(r);
                m && (e[0] = p.call(this, r, o.html())),
                P(o, e, n, i)
            });
        if (h && (r = (u = v(e, t[0].ownerDocument, !1, t, i)).firstChild,
        1 === u.childNodes.length && (u = r),
        r || i)) {
            for (s = (a = ft.map(f(u, "script"), S)).length; c < h; c++)
                o = u,
                c !== d && (o = ft.clone(o, !0, !0),
                s && ft.merge(a, f(o, "script"))),
                n.call(t[c], o, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                ft.map(a, k),
                c = 0; c < s; c++)
                    o = a[c],
                    Vt.test(o.type || "") && !ft._data(o, "globalEval") && ft.contains(l, o) && (o.src ? ft._evalUrl && ft._evalUrl(o.src) : ft.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ue, "")));
            u = r = null
        }
        return t
    }
    function A(t, e, n) {
        for (var i, r = e ? ft.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || ft.cleanData(f(i)),
            i.parentNode && (n && ft.contains(i.ownerDocument, i) && m(f(i, "script")),
            i.parentNode.removeChild(i));
        return t
    }
    function I(t, e) {
        var n = ft(e.createElement(t)).appendTo(e.body)
          , i = ft.css(n[0], "display");
        return n.detach(),
        i
    }
    function D(t) {
        var e = rt
          , n = de[t];
        return n || ("none" !== (n = I(t, e)) && n || ((e = ((he = (he || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || he[0].contentDocument).document).write(),
        e.close(),
        n = I(t, e),
        he.detach()),
        de[t] = n),
        n
    }
    function N(t, e) {
        return {
            get: function() {
                if (!t())
                    return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    function L(t) {
        if (t in Te)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ee.length; n--; )
            if ((t = Ee[n] + e)in Te)
                return t
    }
    function O(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; s < a; s++)
            (i = t[s]).style && (o[s] = ft._data(i, "olddisplay"),
            n = i.style.display,
            e ? (o[s] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && qt(i) && (o[s] = ft._data(i, "olddisplay", D(i.nodeName)))) : (r = qt(i),
            (n && "none" !== n || !r) && ft._data(i, "olddisplay", r ? n : ft.css(i, "display"))));
        for (s = 0; s < a; s++)
            (i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function $(t, e, n) {
        var i = Ce.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function j(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2)
            "margin" === n && (s += ft.css(t, n + Ht[o], !0, r)),
            i ? ("content" === n && (s -= ft.css(t, "padding" + Ht[o], !0, r)),
            "margin" !== n && (s -= ft.css(t, "border" + Ht[o] + "Width", !0, r))) : (s += ft.css(t, "padding" + Ht[o], !0, r),
            "padding" !== n && (s += ft.css(t, "border" + Ht[o] + "Width", !0, r)));
        return s
    }
    function R(t, e, n) {
        var i = !0
          , r = "width" === e ? t.offsetWidth : t.offsetHeight
          , o = ve(t)
          , s = dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = ye(t, e, o)) < 0 || null == r) && (r = t.style[e]),
            fe.test(r))
                return r;
            i = s && (dt.boxSizingReliable() || r === t.style[e]),
            r = parseFloat(r) || 0
        }
        return r + j(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }
    function F(t, e, n, i, r) {
        return new F.prototype.init(t,e,n,i,r)
    }
    function M() {
        return t.setTimeout(function() {
            Pe = undefined
        }),
        Pe = ft.now()
    }
    function B(t, e) {
        var n, i = {
            height: t
        }, r = 0;
        for (e = e ? 1 : 0; r < 4; r += 2 - e)
            i["margin" + (n = Ht[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function H(t, e, n) {
        for (var i, r = (z.tweeners[e] || []).concat(z.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t))
                return i
    }
    function q(t, e, n) {
        var i, r, o, s, a, l, u, c = this, h = {}, d = t.style, p = t.nodeType && qt(t), f = ft._data(t, "fxshow");
        for (i in n.queue || (null == (a = ft._queueHooks(t, "fx")).unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        c.always(function() {
            c.always(function() {
                a.unqueued--,
                ft.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        "inline" === ("none" === (u = ft.css(t, "display")) ? ft._data(t, "olddisplay") || D(t.nodeName) : u) && "none" === ft.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== D(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        dt.shrinkWrapBlocks() || c.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        })),
        e)
            if (r = e[i],
            Ie.exec(r)) {
                if (delete e[i],
                o = o || "toggle" === r,
                r === (p ? "hide" : "show")) {
                    if ("show" !== r || !f || f[i] === undefined)
                        continue;
                    p = !0
                }
                h[i] = f && f[i] || ft.style(t, i)
            } else
                u = undefined;
        if (ft.isEmptyObject(h))
            "inline" === ("none" === u ? D(t.nodeName) : u) && (d.display = u);
        else
            for (i in f ? "hidden"in f && (p = f.hidden) : f = ft._data(t, "fxshow", {}),
            o && (f.hidden = !p),
            p ? ft(t).show() : c.done(function() {
                ft(t).hide()
            }),
            c.done(function() {
                var e;
                for (e in ft._removeData(t, "fxshow"),
                h)
                    ft.style(t, e, h[e])
            }),
            h)
                s = H(p ? f[i] : 0, i, c),
                i in f || (f[i] = s.start,
                p && (s.end = s.start,
                s.start = "width" === i || "height" === i ? 1 : 0))
    }
    function W(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (r = e[i = ft.camelCase(n)],
            o = t[n],
            ft.isArray(o) && (r = o[1],
            o = t[n] = o[0]),
            n !== i && (t[i] = o,
            delete t[n]),
            (s = ft.cssHooks[i]) && "expand"in s)
                for (n in o = s.expand(o),
                delete t[i],
                o)
                    n in t || (t[n] = o[n],
                    e[n] = r);
            else
                e[i] = r
    }
    function z(t, e, n) {
        var i, r, o = 0, s = z.prefilters.length, a = ft.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var e = Pe || M(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++)
                u.tweens[o].run(i);
            return a.notifyWith(t, [u, i, n]),
            i < 1 && s ? n : (a.resolveWith(t, [u]),
            !1)
        }, u = a.promise({
            elem: t,
            props: ft.extend({}, e),
            opts: ft.extend(!0, {
                specialEasing: {},
                easing: ft.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Pe || M(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = ft.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0
                  , i = e ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    u.tweens[n].run(1);
                return e ? (a.notifyWith(t, [u, 1, 0]),
                a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]),
                this
            }
        }), c = u.props;
        for (W(c, u.opts.specialEasing); o < s; o++)
            if (i = z.prefilters[o].call(u, t, c, u.opts))
                return ft.isFunction(i.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = ft.proxy(i.stop, i)),
                i;
        return ft.map(c, H, u),
        ft.isFunction(u.opts.start) && u.opts.start.call(t, u),
        ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function U(t) {
        return ft.attr(t, "class") || ""
    }
    function V(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var i, r = 0, o = e.toLowerCase().match(Dt) || [];
            if (ft.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                    (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function X(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0,
            ft.each(t[a] || [], function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u),
                r(u),
                !1)
            }),
            l
        }
        var o = {}
          , s = t === en;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }
    function G(t, e) {
        var n, i, r = ft.ajaxSettings.flatOptions || {};
        for (i in e)
            e[i] !== undefined && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ft.extend(!0, t, n),
        t
    }
    function Y(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
            l.shift(),
            r === undefined && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        if (o)
            return o !== l[0] && l.unshift(o),
            n[o]
    }
    function K(t, e, n, i) {
        var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o; )
            if (t.responseFields[o] && (n[t.responseFields[o]] = e),
            !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (!(s = u[l + " " + o] || u["* " + o]))
                        for (r in u)
                            if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && t.throws)
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (h) {
                                return {
                                    state: "parsererror",
                                    error: s ? h : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function Q(t) {
        return t.style && t.style.display || ft.css(t, "display")
    }
    function J(t) {
        if (!ft.contains(t.ownerDocument || rt, t))
            return !0;
        for (; t && 1 === t.nodeType; ) {
            if ("none" === Q(t) || "hidden" === t.type)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function Z(t, e, n, i) {
        var r;
        if (ft.isArray(e))
            ft.each(e, function(e, r) {
                n || an.test(t) ? i(t, r) : Z(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== ft.type(e))
            i(t, e);
        else
            for (r in e)
                Z(t + "[" + r + "]", e[r], n, i)
    }
    function tt() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    function et() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function nt(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var it = []
      , rt = t.document
      , ot = it.slice
      , st = it.concat
      , at = it.push
      , lt = it.indexOf
      , ut = {}
      , ct = ut.toString
      , ht = ut.hasOwnProperty
      , dt = {}
      , pt = "1.12.4"
      , ft = function(t, e) {
        return new ft.fn.init(t,e)
    }
      , mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , gt = /^-ms-/
      , vt = /-([\da-z])/gi
      , yt = function(t, e) {
        return e.toUpperCase()
    };
    ft.fn = ft.prototype = {
        jquery: pt,
        constructor: ft,
        selector: "",
        length: 0,
        toArray: function() {
            return ot.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : ot.call(this)
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: it.sort,
        splice: it.splice
    },
    ft.extend = ft.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || ft.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (r = arguments[a]))
                for (i in r)
                    t = s[i],
                    s !== (n = r[i]) && (u && n && (ft.isPlainObject(n) || (e = ft.isArray(n))) ? (e ? (e = !1,
                    o = t && ft.isArray(t) ? t : []) : o = t && ft.isPlainObject(t) ? t : {},
                    s[i] = ft.extend(u, o, n)) : n !== undefined && (s[i] = n));
        return s
    }
    ,
    ft.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === ft.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ht.call(t, "constructor") && !ht.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (!dt.ownFirst)
                for (e in t)
                    return ht.call(t, e);
            for (e in t)
                ;
            return e === undefined || ht.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ut[ct.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && ft.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            }
            )(e)
        },
        camelCase: function(t) {
            return t.replace(gt, "ms-").replace(vt, yt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; r < i && !1 !== e.call(t[r], r, t[r]); r++)
                    ;
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(mt, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : at.call(i, t)),
            i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (lt)
                    return lt.call(e, t, n);
                for (i = e.length,
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; )
                t[r++] = e[i++];
            if (n != n)
                for (; e[i] !== undefined; )
                    t[r++] = e[i++];
            return t.length = r,
            t
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
                !e(t[r], r) !== s && i.push(t[r]);
            return i
        },
        map: function(t, e, i) {
            var r, o, s = 0, a = [];
            if (n(t))
                for (r = t.length; s < r; s++)
                    null != (o = e(t[s], s, i)) && a.push(o);
            else
                for (s in t)
                    null != (o = e(t[s], s, i)) && a.push(o);
            return st.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e],
            e = t,
            t = r),
            ft.isFunction(t) ? (n = ot.call(arguments, 2),
            (i = function() {
                return t.apply(e || this, n.concat(ot.call(arguments)))
            }
            ).guid = t.guid = t.guid || ft.guid++,
            i) : undefined
        },
        now: function() {
            return +new Date
        },
        support: dt
    }),
    "function" == typeof Symbol && (ft.fn[Symbol.iterator] = it[Symbol.iterator]),
    ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        ut["[object " + e + "]"] = e.toLowerCase()
    });
    var bt = /*!
* Sizzle CSS Selector Engine v2.2.1
* http://sizzlejs.com/
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2015-10-17
*/
    function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, u, h, p, f = e && e.ownerDocument, m = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!i && ((e ? e.ownerDocument || e : B) !== N && D(e),
            e = e || N,
            O)) {
                if (11 !== m && (u = vt.exec(t)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (f && (s = f.getElementById(r)) && F(e, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return J.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((r = u[3]) && x.getElementsByClassName && e.getElementsByClassName)
                            return J.apply(n, e.getElementsByClassName(r)),
                            n
                    }
                if (x.qsa && !U[t + " "] && (!$ || !$.test(t))) {
                    if (1 !== m)
                        f = e,
                        p = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = M),
                        o = (h = k(t)).length,
                        l = dt.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                            h[o] = l + " " + d(h[o]);
                        p = h.join(","),
                        f = yt.test(t) && c(e.parentNode) || e
                    }
                    if (p)
                        try {
                            return J.apply(n, f.querySelectorAll(p)),
                            n
                        } catch (g) {} finally {
                            a === M && e.removeAttribute("id")
                        }
                }
            }
            return T(t.replace(at, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > _.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[M] = !0,
            t
        }
        function r(t) {
            var e = N.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--; )
                _.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return i(function(e) {
                return e = +e,
                i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function h() {}
        function d(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++)
                i += t[e].value;
            return i
        }
        function p(t, e, n) {
            var i = e.dir
              , r = n && "parentNode" === i
              , o = q++;
            return e.first ? function(e, n, o) {
                for (; e = e[i]; )
                    if (1 === e.nodeType || r)
                        return t(e, n, o)
            }
            : function(e, n, s) {
                var a, l, u, c = [H, o];
                if (s) {
                    for (; e = e[i]; )
                        if ((1 === e.nodeType || r) && t(e, n, s))
                            return !0
                } else
                    for (; e = e[i]; )
                        if (1 === e.nodeType || r) {
                            if ((a = (l = (u = e[M] || (e[M] = {}))[e.uniqueID] || (u[e.uniqueID] = {}))[i]) && a[0] === H && a[1] === o)
                                return c[2] = a[2];
                            if (l[i] = c,
                            c[2] = t(e, n, s))
                                return !0
                        }
            }
        }
        function f(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--; )
                    if (!t[r](e, n, i))
                        return !1;
                return !0
            }
            : t[0]
        }
        function m(t, n, i) {
            for (var r = 0, o = n.length; r < o; r++)
                e(t, n[r], i);
            return i
        }
        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
                (o = t[a]) && (n && !n(o, i, r) || (s.push(o),
                u && e.push(a)));
            return s
        }
        function v(t, e, n, r, o, s) {
            return r && !r[M] && (r = v(r)),
            o && !o[M] && (o = v(o, s)),
            i(function(i, s, a, l) {
                var u, c, h, d = [], p = [], f = s.length, v = i || m(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : g(v, d, t, a, l), b = n ? o || (i ? t : f || r) ? [] : s : y;
                if (n && n(y, b, a, l),
                r)
                    for (u = g(b, p),
                    r(u, [], a, l),
                    c = u.length; c--; )
                        (h = u[c]) && (b[p[c]] = !(y[p[c]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [],
                            c = b.length; c--; )
                                (h = b[c]) && u.push(y[c] = h);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--; )
                            (h = b[c]) && (u = o ? tt(i, h) : d[c]) > -1 && (i[u] = !(s[u] = h))
                    }
                } else
                    b = g(b === s ? b.splice(f, b.length) : b),
                    o ? o(null, s, b, l) : J.apply(s, b)
            })
        }
        function y(t) {
            for (var e, n, i, r = t.length, o = _.relative[t[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                return t === e
            }, s, !0), u = p(function(t) {
                return tt(e, t) > -1
            }, s, !0), c = [function(t, n, i) {
                var r = !o && (i || n !== P) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                return e = null,
                r
            }
            ]; a < r; a++)
                if (n = _.relative[t[a].type])
                    c = [p(f(c), n)];
                else {
                    if ((n = _.filter[t[a].type].apply(null, t[a].matches))[M]) {
                        for (i = ++a; i < r && !_.relative[t[i].type]; i++)
                            ;
                        return v(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, a < i && y(t.slice(a, i)), i < r && y(t = t.slice(i)), i < r && d(t))
                    }
                    c.push(n)
                }
            return f(c)
        }
        function b(t, n) {
            var r = n.length > 0
              , o = t.length > 0
              , s = function(i, s, a, l, u) {
                var c, h, d, p = 0, f = "0", m = i && [], v = [], y = P, b = i || o && _.find.TAG("*", u), w = H += null == y ? 1 : Math.random() || .1, x = b.length;
                for (u && (P = s === N || s || u); f !== x && null != (c = b[f]); f++) {
                    if (o && c) {
                        for (h = 0,
                        s || c.ownerDocument === N || (D(c),
                        a = !O); d = t[h++]; )
                            if (d(c, s || N, a)) {
                                l.push(c);
                                break
                            }
                        u && (H = w)
                    }
                    r && ((c = !d && c) && p--,
                    i && m.push(c))
                }
                if (p += f,
                r && f !== p) {
                    for (h = 0; d = n[h++]; )
                        d(m, v, s, a);
                    if (i) {
                        if (p > 0)
                            for (; f--; )
                                m[f] || v[f] || (v[f] = K.call(l));
                        v = g(v)
                    }
                    J.apply(l, v),
                    u && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                }
                return u && (H = w,
                P = y),
                m
            };
            return r ? i(s) : s
        }
        var w, x, _, C, S, k, E, T, P, A, I, D, N, L, O, $, j, R, F, M = "sizzle" + 1 * new Date, B = t.document, H = 0, q = 0, W = n(), z = n(), U = n(), V = function(t, e) {
            return t === e && (I = !0),
            0
        }, X = 1 << 31, G = {}.hasOwnProperty, Y = [], K = Y.pop, Q = Y.push, J = Y.push, Z = Y.slice, tt = function(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", st = new RegExp(nt + "+","g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), ht = new RegExp(ot), dt = new RegExp("^" + it + "$"), pt = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it + "|[*])"),
            ATTR: new RegExp("^" + rt),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + et + ")$","i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
        }, ft = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), xt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, _t = function() {
            D()
        };
        try {
            J.apply(Y = Z.call(B.childNodes), B.childNodes),
            Y[B.childNodes.length].nodeType
        } catch (Ct) {
            J = {
                apply: Y.length ? function(t, e) {
                    Q.apply(t, Z.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        for (w in x = e.support = {},
        S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        D = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : B;
            return i !== N && 9 === i.nodeType && i.documentElement ? (L = (N = i).documentElement,
            O = !S(N),
            (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)),
            x.attributes = r(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            x.getElementsByTagName = r(function(t) {
                return t.appendChild(N.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = gt.test(N.getElementsByClassName),
            x.getById = r(function(t) {
                return L.appendChild(t).id = M,
                !N.getElementsByName || !N.getElementsByName(M).length
            }),
            x.getById ? (_.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && O) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ,
            _.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete _.find.ID,
            _.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ),
            _.find.TAG = x.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            _.find.CLASS = x.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && O)
                    return e.getElementsByClassName(t)
            }
            ,
            j = [],
            $ = [],
            (x.qsa = gt.test(N.querySelectorAll)) && (r(function(t) {
                L.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + nt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || $.push("\\[" + nt + "*(?:value|" + et + ")"),
                t.querySelectorAll("[id~=" + M + "-]").length || $.push("~="),
                t.querySelectorAll(":checked").length || $.push(":checked"),
                t.querySelectorAll("a#" + M + "+*").length || $.push(".#.+[+~]")
            }),
            r(function(t) {
                var e = N.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && $.push("name" + nt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                $.push(",.*:")
            })),
            (x.matchesSelector = gt.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(t) {
                x.disconnectedMatch = R.call(t, "div"),
                R.call(t, "[s!='']:x"),
                j.push("!=", ot)
            }),
            $ = $.length && new RegExp($.join("|")),
            j = j.length && new RegExp(j.join("|")),
            e = gt.test(L.compareDocumentPosition),
            F = e || gt.test(L.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            V = e ? function(t, e) {
                if (t === e)
                    return I = !0,
                    0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === N || t.ownerDocument === B && F(B, t) ? -1 : e === N || e.ownerDocument === B && F(B, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return I = !0,
                    0;
                var n, i = 0, r = t.parentNode, o = e.parentNode, a = [t], l = [e];
                if (!r || !o)
                    return t === N ? -1 : e === N ? 1 : r ? -1 : o ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                if (r === o)
                    return s(t, e);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (n = e; n = n.parentNode; )
                    l.unshift(n);
                for (; a[i] === l[i]; )
                    i++;
                return i ? s(a[i], l[i]) : a[i] === B ? -1 : l[i] === B ? 1 : 0
            }
            ,
            N) : N
        }
        ,
        e.matches = function(t, n) {
            return e(t, null, null, n)
        }
        ,
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== N && D(t),
            n = n.replace(ct, "='$1']"),
            x.matchesSelector && O && !U[n + " "] && (!j || !j.test(n)) && (!$ || !$.test(n)))
                try {
                    var i = R.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (Ct) {}
            return e(n, N, null, [t]).length > 0
        }
        ,
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== N && D(t),
            F(t, e)
        }
        ,
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== N && D(t);
            var n = _.attrHandle[e.toLowerCase()]
              , i = n && G.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !O) : undefined;
            return i !== undefined ? i : x.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }
        ,
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        e.uniqueSort = function(t) {
            var e, n = [], i = 0, r = 0;
            if (I = !x.detectDuplicates,
            A = !x.sortStable && t.slice(0),
            t.sort(V),
            I) {
                for (; e = t[r++]; )
                    e === t[r] && (i = n.push(r));
                for (; i--; )
                    t.splice(n[i], 1)
            }
            return A = null,
            t
        }
        ,
        C = e.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += C(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += C(e);
            return n
        }
        ,
        (_ = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, xt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, xt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3)
                      , s = "last" !== t.slice(-4)
                      , a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, l) {
                        var u, c, h, d, p, f, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = e; d = d[m]; )
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild : g.lastChild],
                            s && y) {
                                for (b = (p = (u = (c = (h = (d = g)[M] || (d[M] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === H && u[1]) && u[2],
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || f.pop(); )
                                    if (1 === d.nodeType && ++b && d === e) {
                                        c[t] = [H, p, b];
                                        break
                                    }
                            } else if (y && (b = p = (u = (c = (h = (d = e)[M] || (d[M] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === H && u[1]),
                            !1 === b)
                                for (; (d = ++p && d && d[m] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (h = d[M] || (d[M] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [H, b]),
                                d !== e)); )
                                    ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[M] ? o(n) : o.length > 1 ? (r = [t, t, "", n],
                    _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--; )
                            t[i = tt(t, r[s])] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = []
                      , n = []
                      , r = E(t.replace(at, "$1"));
                    return r[M] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--; )
                            (o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t,
                        r(e, null, o, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(wt, xt),
                    function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(wt, xt).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === L
                },
                focus: function(t) {
                    return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return ft.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0; )
                        t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        }).pseudos.nth = _.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            _.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            _.pseudos[w] = l(w);
        return h.prototype = _.filters = _.pseudos,
        _.setFilters = new h,
        k = e.tokenize = function(t, n) {
            var i, r, o, s, a, l, u, c = z[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t,
            l = [],
            u = _.preFilter; a; ) {
                for (s in i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                i = !1,
                (r = ut.exec(a)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }),
                a = a.slice(i.length)),
                _.filter)
                    !(r = pt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
        }
        ,
        E = e.compile = function(t, e) {
            var n, i = [], r = [], o = U[t + " "];
            if (!o) {
                for (e || (e = k(t)),
                n = e.length; n--; )
                    (o = y(e[n]))[M] ? i.push(o) : r.push(o);
                (o = U(t, b(r, i))).selector = t
            }
            return o
        }
        ,
        T = e.select = function(t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t, h = !i && k(t = u.selector || t);
            if (n = n || [],
            1 === h.length) {
                if ((o = h[0] = h[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && O && _.relative[o[1].type]) {
                    if (!(e = (_.find.ID(s.matches[0].replace(wt, xt), e) || [])[0]))
                        return n;
                    u && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r],
                !_.relative[a = s.type]); )
                    if ((l = _.find[a]) && (i = l(s.matches[0].replace(wt, xt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1),
                        !(t = i.length && d(o)))
                            return J.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || E(t, h))(i, e, !O, n, !e || yt.test(t) && c(e.parentNode) || e),
            n
        }
        ,
        x.sortStable = M.split("").sort(V).join("") === M,
        x.detectDuplicates = !!I,
        D(),
        x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(N.createElement("div"))
        }),
        r(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        x.attributes && r(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var i;
            if (!n)
                return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
        e
    }(t);
    ft.find = bt,
    ft.expr = bt.selectors,
    ft.expr[":"] = ft.expr.pseudos,
    ft.uniqueSort = ft.unique = bt.uniqueSort,
    ft.text = bt.getText,
    ft.isXMLDoc = bt.isXML,
    ft.contains = bt.contains;
    var wt = function(t, e, n) {
        for (var i = [], r = n !== undefined; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (r && ft(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
      , xt = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , _t = ft.expr.match.needsContext
      , Ct = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , St = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    ft.fn.extend({
        find: function(t) {
            var e, n = [], i = this, r = i.length;
            if ("string" != typeof t)
                return this.pushStack(ft(t).filter(function() {
                    for (e = 0; e < r; e++)
                        if (ft.contains(i[e], this))
                            return !0
                }));
            for (e = 0; e < r; e++)
                ft.find(t, i[e], n);
            return (n = this.pushStack(r > 1 ? ft.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t,
            n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && _t.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var kt, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ft.fn.init = function(t, e, n) {
        var i, r;
        if (!t)
            return this;
        if (n = n || kt,
        "string" == typeof t) {
            if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Et.exec(t)) || !i[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof ft ? e[0] : e,
                ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)),
                Ct.test(i[1]) && ft.isPlainObject(e))
                    for (i in e)
                        ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if ((r = rt.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2])
                    return kt.find(t);
                this.length = 1,
                this[0] = r
            }
            return this.context = rt,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (t.selector !== undefined && (this.selector = t.selector,
        this.context = t.context),
        ft.makeArray(t, this))
    }
    ).prototype = ft.fn,
    kt = ft(rt);
    var Tt = /^(?:parents|prev(?:Until|All))/
      , Pt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ft.fn.extend({
        has: function(t) {
            var e, n = ft(t, this), i = n.length;
            return this.filter(function() {
                for (e = 0; e < i; e++)
                    if (ft.contains(this, n[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = _t.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ft.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return wt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return wt(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return wt(t, "nextSibling")
        },
        prevAll: function(t) {
            return wt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return wt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return wt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
        }
    }, function(t, e) {
        ft.fn[t] = function(n, i) {
            var r = ft.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (r = ft.filter(i, r)),
            this.length > 1 && (Pt[t] || (r = ft.uniqueSort(r)),
            Tt.test(t) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var At, It, Dt = /\S+/g;
    for (It in ft.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ft.extend({}, t);
        var e, n, i, r, s = [], a = [], l = -1, u = function() {
            for (r = t.once,
            i = e = !0; a.length; l = -1)
                for (n = a.shift(); ++l < s.length; )
                    !1 === s[l].apply(n[0], n[1]) && t.stopOnFalse && (l = s.length,
                    n = !1);
            t.memory || (n = !1),
            e = !1,
            r && (s = n ? [] : "")
        }, c = {
            add: function() {
                return s && (n && !e && (l = s.length - 1,
                a.push(n)),
                function i(e) {
                    ft.each(e, function(e, n) {
                        ft.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ft.type(n) && i(n)
                    })
                }(arguments),
                n && !e && u()),
                this
            },
            remove: function() {
                return ft.each(arguments, function(t, e) {
                    for (var n; (n = ft.inArray(e, s, n)) > -1; )
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(t) {
                return t ? ft.inArray(t, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return r = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return r = !0,
                n || c.disable(),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(t, n) {
                return r || (n = [t, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                e || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    ft.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", ft.Callbacks("once memory"), "resolved"], ["reject", "fail", ft.Callbacks("once memory"), "rejected"], ["notify", "progress", ft.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return ft.Deferred(function(n) {
                        ft.each(e, function(e, o) {
                            var s = ft.isFunction(t[e]) && t[e];
                            r[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && ft.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? ft.extend(t, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            ft.each(e, function(t, o) {
                var s = o[2]
                  , a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = s.fireWith
            }),
            i.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(t) {
            var e, n, i, r = 0, o = ot.call(arguments), s = o.length, a = 1 !== s || t && ft.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ft.Deferred(), u = function(t, n, i) {
                return function(r) {
                    n[t] = this,
                    i[t] = arguments.length > 1 ? ot.call(arguments) : r,
                    i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1)
                for (e = new Array(s),
                n = new Array(s),
                i = new Array(s); r < s; r++)
                    o[r] && ft.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o),
            l.promise()
        }
    }),
    ft.fn.ready = function(t) {
        return ft.ready.promise().done(t),
        this
    }
    ,
    ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0,
            !0 !== t && --ft.readyWait > 0 || (At.resolveWith(rt, [ft]),
            ft.fn.triggerHandler && (ft(rt).triggerHandler("ready"),
            ft(rt).off("ready"))))
        }
    }),
    ft.ready.promise = function(e) {
        if (!At)
            if (At = ft.Deferred(),
            "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll)
                t.setTimeout(ft.ready);
            else if (rt.addEventListener)
                rt.addEventListener("DOMContentLoaded", a),
                t.addEventListener("load", a);
            else {
                rt.attachEvent("onreadystatechange", a),
                t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && rt.documentElement
                } catch (i) {}
                n && n.doScroll && function e() {
                    if (!ft.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (i) {
                            return t.setTimeout(e, 50)
                        }
                        s(),
                        ft.ready()
                    }
                }()
            }
        return At.promise(e)
    }
    ,
    ft.ready.promise(),
    ft(dt))
        break;
    dt.ownFirst = "0" === It,
    dt.inlineBlockNeedsLayout = !1,
    ft(function() {
        var t, e, n, i;
        (n = rt.getElementsByTagName("body")[0]) && n.style && (e = rt.createElement("div"),
        (i = rt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(e),
        "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
        t && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var t = rt.createElement("div");
        dt.deleteExpando = !0;
        try {
            delete t.test
        } catch (e) {
            dt.deleteExpando = !1
        }
        t = null
    }();
    var Nt, Lt = function(t) {
        var e = ft.noData[(t.nodeName + " ").toLowerCase()]
          , n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
    }, Ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, $t = /([A-Z])/g;
    ft.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando]) && !u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return h(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return h(t, e, !0)
        }
    }),
    ft.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (t === undefined) {
                if (this.length && (r = ft.data(o),
                1 === o.nodeType && !ft._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && l(o, i = ft.camelCase(i.slice(5)), r[i]);
                    ft._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                ft.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                ft.data(this, t, e)
            }) : o ? l(o, t, ft.data(o, t)) : undefined
        },
        removeData: function(t) {
            return this.each(function() {
                ft.removeData(this, t)
            })
        }
    }),
    ft.extend({
        queue: function(t, e, n) {
            var i;
            if (t)
                return e = (e || "fx") + "queue",
                i = ft._data(t, e),
                n && (!i || ft.isArray(n) ? i = ft._data(t, e, ft.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ft.queue(t, e)
              , i = n.length
              , r = n.shift()
              , o = ft._queueHooks(t, e)
              , s = function() {
                ft.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            r.call(t, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ft._data(t, n) || ft._data(t, n, {
                empty: ft.Callbacks("once memory").add(function() {
                    ft._removeData(t, e + "queue"),
                    ft._removeData(t, n)
                })
            })
        }
    }),
    ft.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? ft.queue(this[0], t) : e === undefined ? this : this.each(function() {
                var n = ft.queue(this, t, e);
                ft._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ft.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, r = ft.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t,
            t = undefined),
            t = t || "fx"; s--; )
                (n = ft._data(o[s], t + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(e)
        }
    }),
    dt.shrinkWrapBlocks = function() {
        return null != Nt ? Nt : (Nt = !1,
        (e = rt.getElementsByTagName("body")[0]) && e.style ? (t = rt.createElement("div"),
        (n = rt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        e.appendChild(n).appendChild(t),
        "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
        t.appendChild(rt.createElement("div")).style.width = "5px",
        Nt = 3 !== t.offsetWidth),
        e.removeChild(n),
        Nt) : void 0);
        var t, e, n
    }
    ;
    var jt, Rt, Ft, Mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Bt = new RegExp("^(?:([+-])=|)(" + Mt + ")([a-z%]*)$","i"), Ht = ["Top", "Right", "Bottom", "Left"], qt = function(t, e) {
        return t = e || t,
        "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
    }, Wt = function(t, e, n, i, r, o, s) {
        var a = 0
          , l = t.length
          , u = null == n;
        if ("object" === ft.type(n))
            for (a in r = !0,
            n)
                Wt(t, e, a, n[a], !0, o, s);
        else if (i !== undefined && (r = !0,
        ft.isFunction(i) || (s = !0),
        u && (s ? (e.call(t, i),
        e = null) : (u = e,
        e = function(t, e, n) {
            return u.call(ft(t), n)
        }
        )),
        e))
            for (; a < l; a++)
                e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
    }, zt = /^(?:checkbox|radio)$/i, Ut = /<([\w:-]+)/, Vt = /^$|\/(?:java|ecma)script/i, Xt = /^\s+/, Gt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    jt = rt.createElement("div"),
    Rt = rt.createDocumentFragment(),
    Ft = rt.createElement("input"),
    jt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    dt.leadingWhitespace = 3 === jt.firstChild.nodeType,
    dt.tbody = !jt.getElementsByTagName("tbody").length,
    dt.htmlSerialize = !!jt.getElementsByTagName("link").length,
    dt.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML,
    Ft.type = "checkbox",
    Ft.checked = !0,
    Rt.appendChild(Ft),
    dt.appendChecked = Ft.checked,
    jt.innerHTML = "<textarea>x</textarea>",
    dt.noCloneChecked = !!jt.cloneNode(!0).lastChild.defaultValue,
    Rt.appendChild(jt),
    (Ft = rt.createElement("input")).setAttribute("type", "radio"),
    Ft.setAttribute("checked", "checked"),
    Ft.setAttribute("name", "t"),
    jt.appendChild(Ft),
    dt.checkClone = jt.cloneNode(!0).cloneNode(!0).lastChild.checked,
    dt.noCloneEvent = !!jt.addEventListener,
    jt[ft.expando] = 1,
    dt.attributes = !jt.getAttribute(ft.expando);
    var Yt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Yt.optgroup = Yt.option,
    Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead,
    Yt.th = Yt.td;
    var Kt = /<|&#?\w+;/
      , Qt = /<tbody/i;
    !function() {
        var e, n, i = rt.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e,
            (dt[e] = n in t) || (i.setAttribute(n, "t"),
            dt[e] = !1 === i.attributes[n].expando);
        i = null
    }();
    var Jt = /^(?:input|select|textarea)$/i
      , Zt = /^key/
      , te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ee = /^(?:focusinfocus|focusoutblur)$/
      , ne = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, h, d, p, f, m, g = ft._data(t);
            if (g) {
                for (n.handler && (n = (l = n).handler,
                r = l.selector),
                n.guid || (n.guid = ft.guid++),
                (s = g.events) || (s = g.events = {}),
                (c = g.handle) || ((c = g.handle = function(t) {
                    return void 0 === ft || t && ft.event.triggered === t.type ? undefined : ft.event.dispatch.apply(c.elem, arguments)
                }
                ).elem = t),
                a = (e = (e || "").match(Dt) || [""]).length; a--; )
                    p = m = (o = ne.exec(e[a]) || [])[1],
                    f = (o[2] || "").split(".").sort(),
                    p && (u = ft.event.special[p] || {},
                    p = (r ? u.delegateType : u.bindType) || p,
                    u = ft.event.special[p] || {},
                    h = ft.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ft.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, l),
                    (d = s[p]) || ((d = s[p] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(t, i, f, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))),
                    u.add && (u.add.call(t, h),
                    h.handler.guid || (h.handler.guid = n.guid)),
                    r ? d.splice(d.delegateCount++, 0, h) : d.push(h),
                    ft.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, u, c, h, d, p, f, m, g = ft.hasData(t) && ft._data(t);
            if (g && (c = g.events)) {
                for (u = (e = (e || "").match(Dt) || [""]).length; u--; )
                    if (p = m = (a = ne.exec(e[u]) || [])[1],
                    f = (a[2] || "").split(".").sort(),
                    p) {
                        for (h = ft.event.special[p] || {},
                        d = c[p = (i ? h.delegateType : h.bindType) || p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = d.length; o--; )
                            s = d[o],
                            !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1),
                            s.selector && d.delegateCount--,
                            h.remove && h.remove.call(t, s));
                        l && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, g.handle) || ft.removeEvent(t, p, g.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            ft.event.remove(t, p + e[u], n, i, !0);
                ft.isEmptyObject(c) && (delete g.handle,
                ft._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, l, u, c, h, d = [i || rt], p = ht.call(e, "type") ? e.type : e, f = ht.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || rt,
            3 !== i.nodeType && 8 !== i.nodeType && !ee.test(p + ft.event.triggered) && (p.indexOf(".") > -1 && (p = (f = p.split(".")).shift(),
            f.sort()),
            s = p.indexOf(":") < 0 && "on" + p,
            (e = e[ft.expando] ? e : new ft.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = f.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = undefined,
            e.target || (e.target = i),
            n = null == n ? [e] : ft.makeArray(n, [e]),
            u = ft.event.special[p] || {},
            r || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!r && !u.noBubble && !ft.isWindow(i)) {
                    for (l = u.delegateType || p,
                    ee.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a),
                        c = a;
                    c === (i.ownerDocument || rt) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (h = 0; (a = d[h++]) && !e.isPropagationStopped(); )
                    e.type = h > 1 ? l : u.bindType || p,
                    (o = (ft._data(a, "events") || {})[e.type] && ft._data(a, "handle")) && o.apply(a, n),
                    (o = s && a[s]) && o.apply && Lt(a) && (e.result = o.apply(a, n),
                    !1 === e.result && e.preventDefault());
                if (e.type = p,
                !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(d.pop(), n)) && Lt(i) && s && i[p] && !ft.isWindow(i)) {
                    (c = i[s]) && (i[s] = null),
                    ft.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    ft.event.triggered = undefined,
                    c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = ft.event.fix(t);
            var e, n, i, r, o, s = [], a = ot.call(arguments), l = (ft._data(this, "events") || {})[t.type] || [], u = ft.event.special[t.type] || {};
            if (a[0] = t,
            t.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (s = ft.event.handlers.call(this, t, l),
                e = 0; (r = s[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o,
                        t.data = o.data,
                        (i = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) !== undefined && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (i = [],
                        n = 0; n < a; n++)
                            i[r = (o = e[n]).selector + " "] === undefined && (i[r] = o.needsContext ? ft(r, this).index(l) > -1 : ft.find(r, this, null, [l]).length),
                            i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
            s
        },
        fix: function(t) {
            if (t[ft.expando])
                return t;
            var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = te.test(r) ? this.mouseHooks : Zt.test(r) ? this.keyHooks : {}),
            i = s.props ? this.props.concat(s.props) : this.props,
            t = new ft.Event(o),
            e = i.length; e--; )
                t[n = i[e]] = o[n];
            return t.target || (t.target = o.srcElement || rt),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button, s = e.fromElement;
                return null == t.pageX && null != e.clientX && (r = (i = t.target.ownerDocument || rt).documentElement,
                n = i.body,
                t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s),
                t.which || o === undefined || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var i = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(i, null, e),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    ft.removeEvent = rt.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null),
        t.detachEvent(i, n))
    }
    ,
    ft.Event = function(t, e) {
        if (!(this instanceof ft.Event))
            return new ft.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? y : b) : this.type = t,
        e && ft.extend(this, e),
        this.timeStamp = t && t.timeStamp || ft.now(),
        this[ft.expando] = !0
    }
    ,
    ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y,
            t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(),
            t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, r = t.relatedTarget, o = t.handleObj;
                return r && (r === i || ft.contains(i, r)) || (t.type = o.origType,
                n = o.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    dt.submit || (ft.event.special.submit = {
        setup: function() {
            if (ft.nodeName(this, "form"))
                return !1;
            ft.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target
                  , n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : undefined;
                n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }),
                ft._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble,
            this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            if (ft.nodeName(this, "form"))
                return !1;
            ft.event.remove(this, "._submit")
        }
    }),
    dt.change || (ft.event.special.change = {
        setup: function() {
            if (Jt.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                }),
                ft.event.add(this, "click._change", function(t) {
                    this._justChanged && !t.isTrigger && (this._justChanged = !1),
                    ft.event.simulate("change", this, t)
                })),
                !1;
            ft.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Jt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                }),
                ft._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)
                return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return ft.event.remove(this, "._change"),
            !Jt.test(this.nodeName)
        }
    }),
    dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = ft._data(i, e);
                r || i.addEventListener(t, n, !0),
                ft._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = ft._data(i, e) - 1;
                r ? ft._data(i, e, r) : (i.removeEventListener(t, n, !0),
                ft._removeData(i, e))
            }
        }
    }),
    ft.fn.extend({
        on: function(t, e, n, i) {
            return x(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return x(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e,
            e = undefined),
            !1 === n && (n = b),
            this.each(function() {
                ft.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return ft.event.trigger(t, e, n, !0)
        }
    });
    var ie = / jQuery\d+="(?:null|\d+)"/g
      , re = new RegExp("<(?:" + Gt + ")[\\s/>]","i")
      , oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , se = /<script|<style|<link/i
      , ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , le = /^true\/(.*)/
      , ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ce = p(rt).appendChild(rt.createElement("div"));
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(oe, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, o, s, a, l = ft.contains(t.ownerDocument, t);
            if (dt.html5Clone || ft.isXMLDoc(t) || !re.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ce.innerHTML = t.outerHTML,
            ce.removeChild(o = ce.firstChild)),
            !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (i = f(o),
                a = f(t),
                s = 0; null != (r = a[s]); ++s)
                    i[s] && T(r, i[s]);
            if (e)
                if (n)
                    for (a = a || f(t),
                    i = i || f(o),
                    s = 0; null != (r = a[s]); s++)
                        E(r, i[s]);
                else
                    E(t, o);
            return (i = f(o, "script")).length > 0 && m(i, !l && f(t, "script")),
            i = a = r = null,
            o
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, s = 0, a = ft.expando, l = ft.cache, u = dt.attributes, c = ft.event.special; null != (n = t[s]); s++)
                if ((e || Lt(n)) && (o = (r = n[a]) && l[r])) {
                    if (o.events)
                        for (i in o.events)
                            c[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r],
                    u || "undefined" == typeof n.removeAttribute ? n[a] = undefined : n.removeAttribute(a),
                    it.push(r))
                }
        }
    }),
    ft.fn.extend({
        domManip: P,
        detach: function(t) {
            return A(this, t, !0)
        },
        remove: function(t) {
            return A(this, t)
        },
        text: function(t) {
            return Wt(this, function(t) {
                return t === undefined ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return P(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || C(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return P(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = C(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return P(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return P(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ft.cleanData(f(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && ft.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return Wt(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (t === undefined)
                    return 1 === e.nodeType ? e.innerHTML.replace(ie, "") : undefined;
                if ("string" == typeof t && !se.test(t) && (dt.htmlSerialize || !re.test(t)) && (dt.leadingWhitespace || !Xt.test(t)) && !Yt[(Ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n < i; n++)
                            1 === (e = this[n] || {}).nodeType && (ft.cleanData(f(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return P(this, arguments, function(e) {
                var n = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(f(this)),
                n && n.replaceChild(e, this))
            }, t)
        }
    }),
    ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var n, i = 0, r = [], o = ft(t), s = o.length - 1; i <= s; i++)
                n = i === s ? this : this.clone(!0),
                ft(o[i])[e](n),
                at.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var he, de = {
        HTML: "block",
        BODY: "block"
    }, pe = /^margin/, fe = new RegExp("^(" + Mt + ")(?!px)[a-z%]+$","i"), me = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e)
            s[o] = t.style[o],
            t.style[o] = e[o];
        for (o in r = n.apply(t, i || []),
        e)
            t.style[o] = s[o];
        return r
    }, ge = rt.documentElement;
    !function() {
        function e() {
            var e, c, h = rt.documentElement;
            h.appendChild(l),
            u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = r = a = !1,
            i = s = !0,
            t.getComputedStyle && (c = t.getComputedStyle(u),
            n = "1%" !== (c || {}).top,
            a = "2px" === (c || {}).marginLeft,
            r = "4px" === (c || {
                width: "4px"
            }).width,
            u.style.marginRight = "50%",
            i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight,
            (e = u.appendChild(rt.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            e.style.marginRight = e.style.width = "0",
            u.style.width = "1px",
            s = !parseFloat((t.getComputedStyle(e) || {}).marginRight),
            u.removeChild(e)),
            u.style.display = "none",
            (o = 0 === u.getClientRects().length) && (u.style.display = "",
            u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            u.childNodes[0].style.borderCollapse = "separate",
            (e = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            (o = 0 === e[0].offsetHeight) && (e[0].style.display = "",
            e[1].style.display = "none",
            o = 0 === e[0].offsetHeight)),
            h.removeChild(l)
        }
        var n, i, r, o, s, a, l = rt.createElement("div"), u = rt.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5",
        dt.opacity = "0.5" === u.style.opacity,
        dt.cssFloat = !!u.style.cssFloat,
        u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        dt.clearCloneStyle = "content-box" === u.style.backgroundClip,
        (l = rt.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        u.innerHTML = "",
        l.appendChild(u),
        dt.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
        ft.extend(dt, {
            reliableHiddenOffsets: function() {
                return null == n && e(),
                o
            },
            boxSizingReliable: function() {
                return null == n && e(),
                r
            },
            pixelMarginRight: function() {
                return null == n && e(),
                i
            },
            pixelPosition: function() {
                return null == n && e(),
                n
            },
            reliableMarginRight: function() {
                return null == n && e(),
                s
            },
            reliableMarginLeft: function() {
                return null == n && e(),
                a
            }
        }))
    }();
    var ve, ye, be = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ve = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    }
    ,
    ye = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return "" !== (s = (n = n || ve(t)) ? n.getPropertyValue(e) || n[e] : undefined) && s !== undefined || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)),
        n && !dt.pixelMarginRight() && fe.test(s) && pe.test(e) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o),
        s === undefined ? s : s + ""
    }
    ) : ge.currentStyle && (ve = function(t) {
        return t.currentStyle
    }
    ,
    ye = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return null == (s = (n = n || ve(t)) ? n[e] : undefined) && a && a[e] && (s = a[e]),
        fe.test(s) && !be.test(e) && (i = a.left,
        (o = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left),
        a.left = "fontSize" === e ? "1em" : s,
        s = a.pixelLeft + "px",
        a.left = i,
        o && (r.left = o)),
        s === undefined ? s : s + "" || "auto"
    }
    );
    var we = /alpha\([^)]*\)/i
      , xe = /opacity\s*=\s*([^)]*)/i
      , _e = /^(none|table(?!-c[ea]).+)/
      , Ce = new RegExp("^(" + Mt + ")(.*)$","i")
      , Se = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ke = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ee = ["Webkit", "O", "Moz", "ms"]
      , Te = rt.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ye(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = ft.camelCase(e), l = t.style;
                if (e = ft.cssProps[a] || (ft.cssProps[a] = L(a) || a),
                s = ft.cssHooks[e] || ft.cssHooks[a],
                n === undefined)
                    return s && "get"in s && (r = s.get(t, !1, i)) !== undefined ? r : l[e];
                if ("string" === (o = typeof n) && (r = Bt.exec(n)) && r[1] && (n = d(t, e, r),
                o = "number"),
                null != n && n == n && ("number" === o && (n += r && r[3] || (ft.cssNumber[a] ? "" : "px")),
                dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                !(s && "set"in s && (n = s.set(t, n, i)) === undefined)))
                    try {
                        l[e] = n
                    } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = L(a) || a),
            (s = ft.cssHooks[e] || ft.cssHooks[a]) && "get"in s && (o = s.get(t, !0, n)),
            o === undefined && (o = ye(t, e, i)),
            "normal" === o && e in ke && (o = ke[e]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    ft.each(["height", "width"], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, n, i) {
                if (n)
                    return _e.test(ft.css(t, "display")) && 0 === t.offsetWidth ? me(t, Se, function() {
                        return R(t, e, i)
                    }) : R(t, e, i)
            },
            set: function(t, n, i) {
                var r = i && ve(t);
                return $(t, n, i ? j(t, e, i, dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    dt.opacity || (ft.cssHooks.opacity = {
        get: function(t, e) {
            return xe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style
              , i = t.currentStyle
              , r = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
              , o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (e >= 1 || "" === e) && "" === ft.trim(o.replace(we, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === e || i && !i.filter) || (n.filter = we.test(o) ? o.replace(we, r) : o + " " + r)
        }
    }),
    ft.cssHooks.marginRight = N(dt.reliableMarginRight, function(t, e) {
        if (e)
            return me(t, {
                display: "inline-block"
            }, ye, [t, "marginRight"])
    }),
    ft.cssHooks.marginLeft = N(dt.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(ye(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - me(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            }) : 0)) + "px"
    }),
    ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[t + Ht[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        pe.test(t) || (ft.cssHooks[t + e].set = $)
    }),
    ft.fn.extend({
        css: function(t, e) {
            return Wt(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (ft.isArray(e)) {
                    for (i = ve(t),
                    r = e.length; s < r; s++)
                        o[e[s]] = ft.css(t, e[s], !1, i);
                    return o
                }
                return n !== undefined ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                qt(this) ? ft(this).show() : ft(this).hide()
            })
        }
    }),
    ft.Tween = F,
    F.prototype = {
        constructor: F,
        init: function(t, e, n, i, r, o) {
            this.elem = t,
            this.prop = n,
            this.easing = r || ft.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : F.propHooks._default.set(this),
            this
        }
    },
    F.prototype.init.prototype = F.prototype,
    F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    ft.fx = F.prototype.init,
    ft.fx.step = {};
    var Pe, Ae, Ie = /^(?:toggle|show|hide)$/, De = /queueHooks$/;
    ft.Animation = ft.extend(z, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return d(n.elem, t, Bt.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            ft.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.match(Dt);
            for (var n, i = 0, r = t.length; i < r; i++)
                n = t[i],
                z.tweeners[n] = z.tweeners[n] || [],
                z.tweeners[n].unshift(e)
        },
        prefilters: [q],
        prefilter: function(t, e) {
            e ? z.prefilters.unshift(t) : z.prefilters.push(t)
        }
    }),
    ft.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? ft.extend({}, t) : {
            complete: n || !n && e || ft.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ft.isFunction(e) && e
        };
        return i.duration = ft.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            ft.isFunction(i.old) && i.old.call(this),
            i.queue && ft.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    ft.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(qt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = ft.isEmptyObject(t)
              , o = ft.speed(e, n, i)
              , s = function() {
                var e = z(this, ft.extend({}, t), o);
                (r || ft._data(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = undefined),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , r = null != t && t + "queueHooks"
                  , o = ft.timers
                  , s = ft._data(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && De.test(r) && i(s[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n),
                    e = !1,
                    o.splice(r, 1));
                !e && n || ft.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, n = ft._data(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = ft.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                ft.queue(this, t, []),
                r && r.stop && r.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; e < s; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    ft.each(["toggle", "show", "hide"], function(t, e) {
        var n = ft.fn[e];
        ft.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, i, r)
        }
    }),
    ft.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ft.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    ft.timers = [],
    ft.fx.tick = function() {
        var t, e = ft.timers, n = 0;
        for (Pe = ft.now(); n < e.length; n++)
            (t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || ft.fx.stop(),
        Pe = undefined
    }
    ,
    ft.fx.timer = function(t) {
        ft.timers.push(t),
        t() ? ft.fx.start() : ft.timers.pop()
    }
    ,
    ft.fx.interval = 13,
    ft.fx.start = function() {
        Ae || (Ae = t.setInterval(ft.fx.tick, ft.fx.interval))
    }
    ,
    ft.fx.stop = function() {
        t.clearInterval(Ae),
        Ae = null
    }
    ,
    ft.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ft.fn.delay = function(e, n) {
        return e = ft.fx && ft.fx.speeds[e] || e,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var t, e = rt.createElement("input"), n = rt.createElement("div"), i = rt.createElement("select"), r = i.appendChild(rt.createElement("option"));
        (n = rt.createElement("div")).setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = n.getElementsByTagName("a")[0],
        e.setAttribute("type", "checkbox"),
        n.appendChild(e),
        (t = n.getElementsByTagName("a")[0]).style.cssText = "top:1px",
        dt.getSetAttribute = "t" !== n.className,
        dt.style = /top/.test(t.getAttribute("style")),
        dt.hrefNormalized = "/a" === t.getAttribute("href"),
        dt.checkOn = !!e.value,
        dt.optSelected = r.selected,
        dt.enctype = !!rt.createElement("form").enctype,
        i.disabled = !0,
        dt.optDisabled = !r.disabled,
        (e = rt.createElement("input")).setAttribute("value", ""),
        dt.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        dt.radioValue = "t" === e.value
    }();
    var Ne = /\r/g
      , Le = /[\x20\t\r\n\f]+/g;
    ft.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = ft.isFunction(t),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, ft(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : ft.isArray(r) && (r = ft.map(r, function(t) {
                    return null == t ? "" : t + ""
                })),
                (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set"in e && e.set(this, r, "value") !== undefined || (this.value = r))
            })) : r ? (e = ft.valHooks[r.type] || ft.valHooks[r.nodeName.toLowerCase()]) && "get"in e && (n = e.get(r, "value")) !== undefined ? n : "string" == typeof (n = r.value) ? n.replace(Ne, "") : null == n ? "" : n : void 0
        }
    }),
    ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : ft.trim(ft.text(t)).replace(Le, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (((n = i[l]).selected || l === r) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(),
                            o)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = ft.makeArray(e), s = r.length; s--; )
                        if (i = r[s],
                        ft.inArray(ft.valHooks.option.get(i), o) > -1)
                            try {
                                i.selected = n = !0
                            } catch (_) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                if (ft.isArray(e))
                    return t.checked = ft.inArray(ft(t).val(), e) > -1
            }
        },
        dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var Oe, $e, je = ft.expr.attrHandle, Re = /^(?:checked|selected)$/i, Fe = dt.getSetAttribute, Me = dt.input;
    ft.fn.extend({
        attr: function(t, e) {
            return Wt(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }),
    ft.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === o && ft.isXMLDoc(t) || (e = e.toLowerCase(),
                r = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? $e : Oe)),
                n !== undefined ? null === n ? void ft.removeAttr(t, e) : r && "set"in r && (i = r.set(t, n, e)) !== undefined ? i : (t.setAttribute(e, n + ""),
                n) : r && "get"in r && null !== (i = r.get(t, e)) ? i : null == (i = ft.find.attr(t, e)) ? undefined : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0, o = e && e.match(Dt);
            if (o && 1 === t.nodeType)
                for (; n = o[r++]; )
                    i = ft.propFix[n] || n,
                    ft.expr.match.bool.test(n) ? Me && Fe || !Re.test(n) ? t[i] = !1 : t[ft.camelCase("default-" + n)] = t[i] = !1 : ft.attr(t, n, ""),
                    t.removeAttribute(Fe ? n : i)
        }
    }),
    $e = {
        set: function(t, e, n) {
            return !1 === e ? ft.removeAttr(t, n) : Me && Fe || !Re.test(n) ? t.setAttribute(!Fe && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = je[e] || ft.find.attr;
        Me && Fe || !Re.test(e) ? je[e] = function(t, e, i) {
            var r, o;
            return i || (o = je[e],
            je[e] = r,
            r = null != n(t, e, i) ? e.toLowerCase() : null,
            je[e] = o),
            r
        }
        : je[e] = function(t, e, n) {
            if (!n)
                return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Me && Fe || (ft.attrHooks.value = {
        set: function(t, e, n) {
            if (!ft.nodeName(t, "input"))
                return Oe && Oe.set(t, e, n);
            t.defaultValue = e
        }
    }),
    Fe || (Oe = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)),
            i.value = e += "",
            "value" === n || e === t.getAttribute(n))
                return e
        }
    },
    je.id = je.name = je.coords = function(t, e, n) {
        var i;
        if (!n)
            return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }
    ,
    ft.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified)
                return n.value
        },
        set: Oe.set
    },
    ft.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Oe.set(t, "" !== e && e, n)
        }
    },
    ft.each(["width", "height"], function(t, e) {
        ft.attrHooks[e] = {
            set: function(t, n) {
                if ("" === n)
                    return t.setAttribute(e, "auto"),
                    n
            }
        }
    })),
    dt.style || (ft.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || undefined
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Be = /^(?:input|select|textarea|button|object)$/i
      , He = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return Wt(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ft.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = undefined,
                    delete this[t]
                } catch (e) {}
            })
        }
    }),
    ft.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ft.isXMLDoc(t) || (e = ft.propFix[e] || e,
                r = ft.propHooks[e]),
                n !== undefined ? r && "set"in r && (i = r.set(t, n, e)) !== undefined ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Be.test(t.nodeName) || He.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    dt.hrefNormalized || ft.each(["href", "src"], function(t, e) {
        ft.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }),
    dt.enctype || (ft.propFix.enctype = "encoding");
    var qe = /[\t\r\n\f]/g;
    ft.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ft.isFunction(t))
                return this.each(function(e) {
                    ft(this).addClass(t.call(this, e, U(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; n = this[l++]; )
                    if (r = U(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(qe, " ")) {
                        for (s = 0; o = e[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = ft.trim(i)) && ft.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ft.isFunction(t))
                return this.each(function(e) {
                    ft(this).removeClass(t.call(this, e, U(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; n = this[l++]; )
                    if (r = U(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(qe, " ")) {
                        for (s = 0; o = e[s++]; )
                            for (; i.indexOf(" " + o + " ") > -1; )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = ft.trim(i)) && ft.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                ft(this).toggleClass(t.call(this, n, U(this), e), e)
            }) : this.each(function() {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0,
                    r = ft(this),
                    o = t.match(Dt) || []; e = o[i++]; )
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    t !== undefined && "boolean" !== n || ((e = U(this)) && ft._data(this, "__className__", e),
                    ft.attr(this, "class", e || !1 === t ? "" : ft._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + U(n) + " ").replace(qe, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    }),
    ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var We = t.location
      , ze = ft.now()
      , Ue = /\?/
      , Ve = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ft.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n, i = null, r = ft.trim(e + "");
        return r && !ft.trim(r.replace(Ve, function(t, e, r, o) {
            return n && e && (i = 0),
            0 === i ? t : (n = r || e,
            i += !o - !r,
            "")
        })) ? Function("return " + r)() : ft.error("Invalid JSON: " + e)
    }
    ,
    ft.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? n = (new t.DOMParser).parseFromString(e, "text/xml") : ((n = new t.ActiveXObject("Microsoft.XMLDOM")).async = "false",
            n.loadXML(e))
        } catch (i) {
            n = undefined
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e),
        n
    }
    ;
    var Xe = /#.*$/
      , Ge = /([?&])_=[^&]*/
      , Ye = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Ke = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Qe = /^(?:GET|HEAD)$/
      , Je = /^\/\//
      , Ze = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , tn = {}
      , en = {}
      , nn = "*/".concat("*")
      , rn = We.href
      , on = Ze.exec(rn.toLowerCase()) || [];
    ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: rn,
            type: "GET",
            isLocal: Ke.test(on[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ft.parseJSON,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? G(G(t, ft.ajaxSettings), e) : G(ft.ajaxSettings, t)
        },
        ajaxPrefilter: V(tn),
        ajaxTransport: V(en),
        ajax: function(e, n) {
            function i(e, n, i, r) {
                var o, h, y, b, x, C = n;
                2 !== w && (w = 2,
                l && t.clearTimeout(l),
                c = undefined,
                a = r || "",
                _.readyState = e > 0 ? 4 : 0,
                o = e >= 200 && e < 300 || 304 === e,
                i && (b = Y(d, _, i)),
                b = K(d, b, _, o),
                o ? (d.ifModified && ((x = _.getResponseHeader("Last-Modified")) && (ft.lastModified[s] = x),
                (x = _.getResponseHeader("etag")) && (ft.etag[s] = x)),
                204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state,
                h = b.data,
                o = !(y = b.error))) : (y = C,
                !e && C || (C = "error",
                e < 0 && (e = 0))),
                _.status = e,
                _.statusText = (n || C) + "",
                o ? m.resolveWith(p, [h, C, _]) : m.rejectWith(p, [_, C, y]),
                _.statusCode(v),
                v = undefined,
                u && f.trigger(o ? "ajaxSuccess" : "ajaxError", [_, d, o ? h : y]),
                g.fireWith(p, [_, C]),
                u && (f.trigger("ajaxComplete", [_, d]),
                --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = undefined),
            n = n || {};
            var r, o, s, a, l, u, c, h, d = ft.ajaxSetup({}, n), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? ft(p) : ft.event, m = ft.Deferred(), g = ft.Callbacks("once memory"), v = d.statusCode || {}, y = {}, b = {}, w = 0, x = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === w) {
                        if (!h)
                            for (h = {}; e = Ye.exec(a); )
                                h[e[1].toLowerCase()] = e[2];
                        e = h[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? a : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return w || (t = b[n] = b[n] || t,
                    y[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return w || (d.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (w < 2)
                            for (e in t)
                                v[e] = [v[e], t[e]];
                        else
                            _.always(t[_.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || x;
                    return c && c.abort(e),
                    i(0, e),
                    this
                }
            };
            if (m.promise(_).complete = g.add,
            _.success = _.done,
            _.error = _.fail,
            d.url = ((e || d.url || rn) + "").replace(Xe, "").replace(Je, on[1] + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = ft.trim(d.dataType || "*").toLowerCase().match(Dt) || [""],
            null == d.crossDomain && (r = Ze.exec(d.url.toLowerCase()),
            d.crossDomain = !(!r || r[1] === on[1] && r[2] === on[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (on[3] || ("http:" === on[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = ft.param(d.data, d.traditional)),
            X(tn, d, n, _),
            2 === w)
                return _;
            for (o in (u = ft.event && d.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Qe.test(d.type),
            s = d.url,
            d.hasContent || (d.data && (s = d.url += (Ue.test(s) ? "&" : "?") + d.data,
            delete d.data),
            !1 === d.cache && (d.url = Ge.test(s) ? s.replace(Ge, "$1_=" + ze++) : s + (Ue.test(s) ? "&" : "?") + "_=" + ze++)),
            d.ifModified && (ft.lastModified[s] && _.setRequestHeader("If-Modified-Since", ft.lastModified[s]),
            ft.etag[s] && _.setRequestHeader("If-None-Match", ft.etag[s])),
            (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && _.setRequestHeader("Content-Type", d.contentType),
            _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + nn + "; q=0.01" : "") : d.accepts["*"]),
            d.headers)
                _.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, _, d) || 2 === w))
                return _.abort();
            for (o in x = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                _[o](d[o]);
            if (c = X(en, d, n, _)) {
                if (_.readyState = 1,
                u && f.trigger("ajaxSend", [_, d]),
                2 === w)
                    return _;
                d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    w = 1,
                    c.send(y, i)
                } catch (C) {
                    if (!(w < 2))
                        throw C;
                    i(-1, C)
                }
            } else
                i(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, undefined, e, "script")
        }
    }),
    ft.each(["get", "post"], function(t, e) {
        ft[e] = function(t, n, i, r) {
            return ft.isFunction(n) && (r = r || i,
            i = n,
            n = undefined),
            ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, ft.isPlainObject(t) && t))
        }
    }),
    ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    ft.fn.extend({
        wrapAll: function(t) {
            if (ft.isFunction(t))
                return this.each(function(e) {
                    ft(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ft(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(n) {
                ft(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ft.expr.filters.hidden = function(t) {
        return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : J(t)
    }
    ,
    ft.expr.filters.visible = function(t) {
        return !ft.expr.filters.hidden(t)
    }
    ;
    var sn = /%20/g
      , an = /\[\]$/
      , ln = /\r?\n/g
      , un = /^(?:submit|button|image|reset|file)$/i
      , cn = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var n, i = [], r = function(t, e) {
            e = ft.isFunction(e) ? e() : null == e ? "" : e,
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (e === undefined && (e = ft.ajaxSettings && ft.ajaxSettings.traditional),
        ft.isArray(t) || t.jquery && !ft.isPlainObject(t))
            ft.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (n in t)
                Z(n, t[n], e, r);
        return i.join("&").replace(sn, "+")
    }
    ,
    ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && cn.test(this.nodeName) && !un.test(t) && (this.checked || !zt.test(t))
            }).map(function(t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ln, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(ln, "\r\n")
                }
            }).get()
        }
    }),
    ft.ajaxSettings.xhr = t.ActiveXObject !== undefined ? function() {
        return this.isLocal ? et() : rt.documentMode > 8 ? tt() : /^(get|post|head|put|delete|options)$/i.test(this.type) && tt() || et()
    }
    : tt;
    var hn = 0
      , dn = {}
      , pn = ft.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in dn)
            dn[t](undefined, !0)
    }),
    dt.cors = !!pn && "withCredentials"in pn,
    (pn = dt.ajax = !!pn) && ft.ajaxTransport(function(e) {
        var n;
        if (!e.crossDomain || dt.cors)
            return {
                send: function(i, r) {
                    var o, s = e.xhr(), a = ++hn;
                    if (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (o in e.xhrFields)
                            s[o] = e.xhrFields[o];
                    for (o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                    e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                    i)
                        i[o] !== undefined && s.setRequestHeader(o, i[o] + "");
                    s.send(e.hasContent && e.data || null),
                    n = function(t, i) {
                        var o, l, u;
                        if (n && (i || 4 === s.readyState))
                            if (delete dn[a],
                            n = undefined,
                            s.onreadystatechange = ft.noop,
                            i)
                                4 !== s.readyState && s.abort();
                            else {
                                u = {},
                                o = s.status,
                                "string" == typeof s.responseText && (u.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (c) {
                                    l = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                        u && r(o, l, u, s.getAllResponseHeaders())
                    }
                    ,
                    e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = dn[a] = n : n()
                },
                abort: function() {
                    n && n(undefined, !0)
                }
            }
    }),
    ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t),
                t
            }
        }
    }),
    ft.ajaxPrefilter("script", function(t) {
        t.cache === undefined && (t.cache = !1),
        t.crossDomain && (t.type = "GET",
        t.global = !1)
    }),
    ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = rt.head || ft("head")[0] || rt.documentElement;
            return {
                send: function(i, r) {
                    (e = rt.createElement("script")).async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null,
                        e.parentNode && e.parentNode.removeChild(e),
                        e = null,
                        n || r(200, "success"))
                    }
                    ,
                    n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(undefined, !0)
                }
            }
        }
    });
    var fn = []
      , mn = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = fn.pop() || ft.expando + "_" + ze++;
            return this[t] = !0,
            t
        }
    }),
    ft.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = !1 !== e.jsonp && (mn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && mn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(mn, "$1" + r) : !1 !== e.jsonp && (e.url += (Ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return s || ft.error(r + " was not called"),
                s[0]
            }
            ,
            e.dataTypes[0] = "json",
            o = t[r],
            t[r] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                o === undefined ? ft(t).removeProp(r) : t[r] = o,
                e[r] && (e.jsonpCallback = n.jsonpCallback,
                fn.push(r)),
                s && ft.isFunction(o) && o(s[0]),
                s = o = undefined
            }),
            "script"
    }),
    ft.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e,
        e = !1),
        e = e || rt;
        var i = Ct.exec(t)
          , r = !n && [];
        return i ? [e.createElement(i[1])] : (i = v([t], e, r),
        r && r.length && ft(r).remove(),
        ft.merge([], i.childNodes))
    }
    ;
    var gn = ft.fn.load;
    ft.fn.load = function(t, e, n) {
        if ("string" != typeof t && gn)
            return gn.apply(this, arguments);
        var i, r, o, s = this, a = t.indexOf(" ");
        return a > -1 && (i = ft.trim(t.slice(a, t.length)),
        t = t.slice(0, a)),
        ft.isFunction(e) ? (n = e,
        e = undefined) : e && "object" == typeof e && (r = "POST"),
        s.length > 0 && ft.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            s.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    ft.expr.filters.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    ft.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, u = ft.css(t, "position"), c = ft(t), h = {};
            "static" === u && (t.style.position = "relative"),
            a = c.offset(),
            o = ft.css(t, "top"),
            l = ft.css(t, "left"),
            ("absolute" === u || "fixed" === u) && ft.inArray("auto", [o, l]) > -1 ? (s = (i = c.position()).top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))),
            null != e.top && (h.top = e.top - a.top + s),
            null != e.left && (h.left = e.left - a.left + r),
            "using"in e ? e.using.call(t, h) : c.css(h)
        }
    },
    ft.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return t === undefined ? this : this.each(function(e) {
                    ft.offset.setOffset(this, t, e)
                });
            var e, n, i = {
                top: 0,
                left: 0
            }, r = this[0], o = r && r.ownerDocument;
            return o ? (e = o.documentElement,
            ft.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()),
            n = nt(o),
            {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                ft.nodeName(t[0], "html") || (n = t.offset()),
                n.top += ft.css(t[0], "borderTopWidth", !0),
                n.left += ft.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - n.top - ft.css(i, "marginTop", !0),
                    left: e.left - n.left - ft.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position"); )
                    t = t.offsetParent;
                return t || ge
            })
        }
    }),
    ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        ft.fn[t] = function(i) {
            return Wt(this, function(t, i, r) {
                var o = nt(t);
                if (r === undefined)
                    return o ? e in o ? o[e] : o.document.documentElement[i] : t[i];
                o ? o.scrollTo(n ? ft(o).scrollLeft() : r, n ? r : ft(o).scrollTop()) : t[i] = r
            }, t, i, arguments.length, null)
        }
    }),
    ft.each(["top", "left"], function(t, e) {
        ft.cssHooks[e] = N(dt.pixelPosition, function(t, n) {
            if (n)
                return n = ye(t, e),
                fe.test(n) ? ft(t).position()[e] + "px" : n
        })
    }),
    ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            ft.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === r ? "margin" : "border");
                return Wt(this, function(e, n, i) {
                    var r;
                    return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : i === undefined ? ft.css(e, n, s) : ft.style(e, n, i, s)
                }, e, o ? i : undefined, o, null)
            }
        })
    }),
    ft.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    ft.fn.size = function() {
        return this.length
    }
    ,
    ft.fn.andSelf = ft.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft
    });
    var vn = t.jQuery
      , yn = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = yn),
        e && t.jQuery === ft && (t.jQuery = vn),
        ft
    }
    ,
    e || (t.jQuery = t.$ = ft),
    ft
}),
/*!
* jQuery Cookie Plugin v1.3.1
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2013 Klaus Hartl
* Released under the MIT license
*/
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    function e(t) {
        return r.raw ? t : decodeURIComponent(t.replace(i, " "))
    }
    function n(t) {
        0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")),
        t = e(t);
        try {
            return r.json ? JSON.parse(t) : t
        } catch (n) {}
    }
    var i = /\+/g
      , r = t.cookie = function(i, o, s) {
        if (o !== undefined) {
            if ("number" == typeof (s = t.extend({}, r.defaults, s)).expires) {
                var a = s.expires
                  , l = s.expires = new Date;
                l.setDate(l.getDate() + a)
            }
            return o = r.json ? JSON.stringify(o) : String(o),
            document.cookie = [r.raw ? i : encodeURIComponent(i), "=", r.raw ? o : encodeURIComponent(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
        }
        for (var u = document.cookie.split("; "), c = i ? undefined : {}, h = 0, d = u.length; h < d; h++) {
            var p = u[h].split("=")
              , f = e(p.shift())
              , m = p.join("=");
            if (i && i === f) {
                c = n(m);
                break
            }
            i || (c[f] = n(m))
        }
        return c
    }
    ;
    r.defaults = {},
    t.removeCookie = function(e, n) {
        return t.cookie(e) !== undefined && (t.cookie(e, "", t.extend({}, n, {
            expires: -1
        })),
        !0)
    }
}),
/*!
* jQuery Validation Plugin v1.19.0
*
* https://jqueryvalidation.org/
*
* Copyright (c) 2018 Jörn Zaefferer
* Released under the MIT license
*/
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    var e;
    t.extend(t.fn, {
        validate: function(e) {
            if (this.length) {
                var n = t.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"),
                n = new t.validator(e,this[0]),
                t.data(this[0], "validator", n),
                n.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    n.submitButton = e.currentTarget,
                    t(this).hasClass("cancel") && (n.cancelSubmit = !0),
                    t(this).attr("formnovalidate") !== undefined && (n.cancelSubmit = !0)
                }),
                this.on("submit.validate", function(e) {
                    function i() {
                        var i, r;
                        return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)),
                        !(n.settings.submitHandler && !n.settings.debug) || (r = n.settings.submitHandler.call(n, n.currentForm, e),
                        i && i.remove(),
                        r !== undefined && r)
                    }
                    return n.settings.debug && e.preventDefault(),
                    n.cancelSubmit ? (n.cancelSubmit = !1,
                    i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0,
                    !1) : i() : (n.focusInvalid(),
                    !1)
                })),
                n)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, n, i;
            return t(this[0]).is("form") ? e = this.validate().form() : (i = [],
            e = !0,
            n = t(this[0].form).validate(),
            this.each(function() {
                (e = n.element(this) && e) || (i = i.concat(n.errorList))
            }),
            n.errorList = i),
            e
        },
        rules: function(e, n) {
            var i, r, o, s, a, l, u = this[0], c = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != u && (!u.form && c && (u.form = this.closest("form")[0],
            u.name = this.attr("name")),
            null != u.form)) {
                if (e)
                    switch (r = (i = t.data(u.form, "validator").settings).rules,
                    o = t.validator.staticRules(u),
                    e) {
                    case "add":
                        t.extend(o, t.validator.normalizeRule(n)),
                        delete o.messages,
                        r[u.name] = o,
                        n.messages && (i.messages[u.name] = t.extend(i.messages[u.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {},
                        t.each(n.split(/\s/), function(t, e) {
                            l[e] = o[e],
                            delete o[e]
                        }),
                        l) : (delete r[u.name],
                        o)
                    }
                return (s = t.validator.normalizeRules(t.extend({}, t.validator.classRules(u), t.validator.attributeRules(u), t.validator.dataRules(u), t.validator.staticRules(u)), u)).required && (a = s.required,
                delete s.required,
                s = t.extend({
                    required: a
                }, s)),
                s.remote && (a = s.remote,
                delete s.remote,
                s = t.extend(s, {
                    remote: a
                })),
                s
            }
        }
    }),
    t.extend(t.expr.pseudos || t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            var n = t(e).val();
            return null !== n && !!t.trim("" + n)
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }),
    t.validator = function(e, n) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e),
        this.currentForm = n,
        this.init()
    }
    ,
    t.validator.format = function(e, n) {
        return 1 === arguments.length ? function() {
            var n = t.makeArray(arguments);
            return n.unshift(e),
            t.validator.format.apply(this, n)
        }
        : n === undefined ? e : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)),
        n.constructor !== Array && (n = [n]),
        t.each(n, function(t, n) {
            e = e.replace(new RegExp("\\{" + t + "\\}","g"), function() {
                return n
            })
        }),
        e)
    }
    ,
    t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(e, n) {
                var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === n.which && "" === this.elementValue(e) || -1 !== t.inArray(n.keyCode, i) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, n, i) {
                "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
            },
            unhighlight: function(e, n, i) {
                "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}."),
            step: t.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var n = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                    if (!this.form && n && (this.form = t(this).closest("form")[0],
                    this.name = t(this).attr("name")),
                    i === this.form) {
                        var r = t.data(this.form, "validator")
                          , o = "on" + e.type.replace(/^validate/, "")
                          , s = r.settings;
                        s[o] && !t(this).is(s.ignore) && s[o].call(r, this, e)
                    }
                }
                this.labelContainer = t(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm),
                this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var n, i = this.currentForm, r = this.groups = {};
                t.each(this.settings.groups, function(e, n) {
                    "string" == typeof n && (n = n.split(/\s/)),
                    t.each(n, function(t, n) {
                        r[n] = e
                    })
                }),
                n = this.settings.rules,
                t.each(n, function(e, i) {
                    n[e] = t.validator.normalizeRule(i)
                }),
                t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e),
                this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                t.extend(this.submitted, this.errorMap),
                this.invalid = t.extend({}, this.errorMap),
                this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                var n, i, r = this.clean(e), o = this.validationTargetFor(r), s = this, a = !0;
                return o === undefined ? delete this.invalid[r.name] : (this.prepareElement(o),
                this.currentElements = t(o),
                (i = this.groups[o.name]) && t.each(this.groups, function(t, e) {
                    e === i && t !== o.name && (r = s.validationTargetFor(s.clean(s.findByName(t)))) && r.name in s.invalid && (s.currentElements.push(r),
                    a = s.check(r) && a)
                }),
                n = !1 !== this.check(o),
                a = a && n,
                this.invalid[o.name] = !n,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                t(e).attr("aria-invalid", !n)),
                a
            },
            showErrors: function(e) {
                if (e) {
                    var n = this;
                    t.extend(this.errorMap, e),
                    this.errorList = t.map(this.errorMap, function(t, e) {
                        return {
                            message: t,
                            element: n.findByName(e)[0]
                        }
                    }),
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""),
                        this.findByName(t[e].name).removeClass(this.settings.validClass);
                else
                    t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, n = 0;
                for (e in t)
                    t[e] !== undefined && null !== t[e] && !1 !== t[e] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""),
                this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this
                  , n = {};
                return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var i = this.name || t(this).attr("name")
                      , r = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                    return !i && e.settings.debug && window.console && console.error("%o has no name assigned", this),
                    r && (this.form = t(this).closest("form")[0],
                    this.name = i),
                    this.form === e.currentForm && (!(i in n || !e.objectLength(t(this).rules())) && (n[i] = !0,
                    !0))
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = t([]),
                this.toHide = t([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var n, i, r = t(e), o = e.type, s = void 0 !== r.attr("contenteditable") && "false" !== r.attr("contenteditable");
                return "radio" === o || "checkbox" === o ? this.findByName(e.name).filter(":checked").val() : "number" === o && "undefined" != typeof e.validity ? e.validity.badInput ? "NaN" : r.val() : (n = s ? r.text() : r.val(),
                "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var n, i, r, o, s = t(e).rules(), a = t.map(s, function(t, e) {
                    return e
                }).length, l = !1, u = this.elementValue(e);
                for (i in "function" == typeof s.normalizer ? o = s.normalizer : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer),
                o && (u = o.call(e, u),
                delete s.normalizer),
                s) {
                    r = {
                        method: i,
                        parameters: s[i]
                    };
                    try {
                        if ("dependency-mismatch" === (n = t.validator.methods[i].call(this, u, e, r.parameters)) && 1 === a) {
                            l = !0;
                            continue
                        }
                        if (l = !1,
                        "pending" === n)
                            return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!n)
                            return this.formatAndAdd(e, r),
                            !1
                    } catch (c) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", c),
                        c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."),
                        c
                    }
                }
                if (!l)
                    return this.objectLength(s) && this.successList.push(e),
                    !0
            },
            customDataMessage: function(e, n) {
                return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function(t, e) {
                var n = this.settings.messages[t];
                return n && (n.constructor === String ? n : n[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (arguments[t] !== undefined)
                        return arguments[t];
                return undefined
            },
            defaultMessage: function(e, n) {
                "string" == typeof n && (n = {
                    method: n
                });
                var i = this.findDefined(this.customMessage(e.name, n.method), this.customDataMessage(e, n.method), !this.settings.ignoreTitle && e.title || undefined, t.validator.messages[n.method], "<strong>Warning: No message defined for " + e.name + "</strong>")
                  , r = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, n.parameters, e) : r.test(i) && (i = t.validator.format(i.replace(r, "{$1}"), n.parameters)),
                i
            },
            formatAndAdd: function(t, e) {
                var n = this.defaultMessage(t, e);
                this.errorList.push({
                    message: n,
                    element: t,
                    method: e.method
                }),
                this.errorMap[t.name] = n,
                this.submitted[t.name] = n
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                t
            },
            defaultShowErrors: function() {
                var t, e, n;
                for (t = 0; this.errorList[t]; t++)
                    n = this.errorList[t],
                    this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (t = 0; this.successList[t]; t++)
                        this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0,
                    e = this.validElements(); e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, n) {
                var i, r, o, s, a = this.errorsFor(e), l = this.idOrName(e), u = t(e).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                a.html(n)) : (i = a = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""),
                this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, t(e)) : i.insertAfter(e),
                a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = a.attr("id"),
                u ? u.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (u += " " + o) : u = o,
                t(e).attr("aria-describedby", u),
                (r = this.groups[e.name]) && (s = this,
                t.each(s.groups, function(e, n) {
                    n === r && t("[name='" + s.escapeCssMeta(e) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
                })))),
                !n && this.settings.success && (a.text(""),
                "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)),
                this.toShow = this.toShow.add(a)
            },
            errorsFor: function(e) {
                var n = this.escapeCssMeta(this.idOrName(e))
                  , i = t(e).attr("aria-describedby")
                  , r = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")),
                this.errors().filter(r)
            },
            escapeCssMeta: function(t) {
                return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)),
                t(e).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            },
            getLength: function(e, n) {
                switch (n.nodeName.toLowerCase()) {
                case "select":
                    return t("option:selected", n).length;
                case "input":
                    if (this.checkable(n))
                        return this.findByName(n.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(e, n) {
                    return !!t(e, n.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var n = this.elementValue(e);
                return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++,
                t(e).addClass(this.settings.pendingClass),
                this.pending[e.name] = !0)
            },
            stopRequest: function(e, n) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[e.name],
                t(e).removeClass(this.settings.pendingClass),
                n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(),
                this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
                this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(e, n) {
                return n = "string" == typeof n && n || "remote",
                t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {
                        method: n
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, n) {
            e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var n = {}
              , i = t(e).attr("class");
            return i && t.each(i.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
            }),
            n
        },
        normalizeAttributeRule: function(t, e, n, i) {
            /min|max|step/.test(n) && (null === e || /number|range|text/.test(e)) && (i = Number(i),
            isNaN(i) && (i = undefined)),
            i || 0 === i ? t[n] = i : e === n && "range" !== e && (t[n] = !0)
        },
        attributeRules: function(e) {
            var n, i, r = {}, o = t(e), s = e.getAttribute("type");
            for (n in t.validator.methods)
                "required" === n ? ("" === (i = e.getAttribute(n)) && (i = !0),
                i = !!i) : i = o.attr(n),
                this.normalizeAttributeRule(r, s, n, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength,
            r
        },
        dataRules: function(e) {
            var n, i, r = {}, o = t(e), s = e.getAttribute("type");
            for (n in t.validator.methods)
                "" === (i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase())) && (i = !0),
                this.normalizeAttributeRule(r, s, n, i);
            return r
        },
        staticRules: function(e) {
            var n = {}
              , i = t.data(e.form, "validator");
            return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}),
            n
        },
        normalizeRules: function(e, n) {
            return t.each(e, function(i, r) {
                if (!1 !== r) {
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                        case "string":
                            o = !!t(r.depends, n.form).length;
                            break;
                        case "function":
                            o = r.depends.call(n, n)
                        }
                        o ? e[i] = r.param === undefined || r.param : (t.data(n.form, "validator").resetElements(t(n)),
                        delete e[i])
                    }
                } else
                    delete e[i]
            }),
            t.each(e, function(i, r) {
                e[i] = t.isFunction(r) && "normalizer" !== i ? r(n) : r
            }),
            t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }),
            t.each(["rangelength", "range"], function() {
                var n;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                e[this] = [Number(n[0]), Number(n[1])]))
            }),
            t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max],
            delete e.min,
            delete e.max),
            null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength],
            delete e.minlength,
            delete e.maxlength)),
            e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var n = {};
                t.each(e.split(/\s/), function() {
                    n[this] = !0
                }),
                e = n
            }
            return e
        },
        addMethod: function(e, n, i) {
            t.validator.methods[e] = n,
            t.validator.messages[e] = i !== undefined ? i : t.validator.messages[e],
            n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, n, i) {
                if (!this.depend(i, n))
                    return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = t(n).val();
                    return r && r.length > 0
                }
                return this.checkable(n) ? this.getLength(e, n) > 0 : e !== undefined && null !== e && e.length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
            },
            date: (e = !1,
            function(t, n) {
                return e || (e = !0,
                this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),
                this.optional(n) || !/Invalid|NaN/.test(new Date(t).toString())
            }
            ),
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function(e, n, i) {
                var r = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || r >= i
            },
            maxlength: function(e, n, i) {
                var r = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || r <= i
            },
            rangelength: function(e, n, i) {
                var r = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || r >= i[0] && r <= i[1]
            },
            min: function(t, e, n) {
                return this.optional(e) || t >= n
            },
            max: function(t, e, n) {
                return this.optional(e) || t <= n
            },
            range: function(t, e, n) {
                return this.optional(e) || t >= n[0] && t <= n[1]
            },
            step: function(e, n, i) {
                var r, o = t(n).attr("type"), s = "Step attribute on input type " + o + " is not supported.", a = ["text", "number", "range"], l = new RegExp("\\b" + o + "\\b"), u = function(t) {
                    var e = ("" + t).match(/(?:\.(\d+))?$/);
                    return e && e[1] ? e[1].length : 0
                }, c = function(t) {
                    return Math.round(t * Math.pow(10, r))
                }, h = !0;
                if (o && !l.test(a.join()))
                    throw new Error(s);
                return r = u(i),
                (u(e) > r || c(e) % c(i) != 0) && (h = !1),
                this.optional(n) || h
            },
            equalTo: function(e, n, i) {
                var r = t(i);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    t(n).valid()
                }),
                e === r.val()
            },
            remote: function(e, n, i, r) {
                if (this.optional(n))
                    return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var o, s, a, l = this.previousValue(n, r);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}),
                l.originalMessage = l.originalMessage || this.settings.messages[n.name][r],
                this.settings.messages[n.name][r] = l.message,
                i = "string" == typeof i && {
                    url: i
                } || i,
                a = t.param(t.extend({
                    data: e
                }, i.data)),
                l.old === a ? l.valid : (l.old = a,
                o = this,
                this.startRequest(n),
                (s = {})[n.name] = e,
                t.ajax(t.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: s,
                    context: o.currentForm,
                    success: function(t) {
                        var i, s, a, u = !0 === t || "true" === t;
                        o.settings.messages[n.name][r] = l.originalMessage,
                        u ? (a = o.formSubmitted,
                        o.resetInternals(),
                        o.toHide = o.errorsFor(n),
                        o.formSubmitted = a,
                        o.successList.push(n),
                        o.invalid[n.name] = !1,
                        o.showErrors()) : (i = {},
                        s = t || o.defaultMessage(n, {
                            method: r,
                            parameters: e
                        }),
                        i[n.name] = l.message = s,
                        o.invalid[n.name] = !0,
                        o.showErrors(i)),
                        l.valid = u,
                        o.stopRequest(n, u)
                    }
                }, i)),
                "pending")
            }
        }
    });
    var n, i = {};
    return t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) {
        var r = t.port;
        "abort" === t.mode && (i[r] && i[r].abort(),
        i[r] = n)
    }) : (n = t.ajax,
    t.ajax = function(e) {
        var r = ("mode"in e ? e : t.ajaxSettings).mode
          , o = ("port"in e ? e : t.ajaxSettings).port;
        return "abort" === r ? (i[o] && i[o].abort(),
        i[o] = n.apply(this, arguments),
        i[o]) : n.apply(this, arguments)
    }
    ),
    t
}),
function() {
    var t, e, n, i, r, o, s, a, l, u, c, h, d = [].slice, p = [].indexOf || function(t) {
        for (var e = 0, n = this.length; e < n; e++)
            if (e in this && this[e] === t)
                return e;
        return -1
    }
    , f = {}.hasOwnProperty, m = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            f.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype,
        t.prototype = new n,
        t.__super__ = e.prototype,
        t
    }, g = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    (n = {
        bind: function(t, e) {
            var n, i, r, o, s;
            for (n = t.split(" "),
            this.hasOwnProperty("_callbacks") && this._callbacks || (this._callbacks = {}),
            o = 0,
            s = n.length; o < s; o++)
                i = n[o],
                (r = this._callbacks)[i] || (r[i] = []),
                this._callbacks[i].push(e);
            return this
        },
        one: function(t, e) {
            var n;
            return this.bind(t, n = function() {
                return this.unbind(t, n),
                e.apply(this, arguments)
            }
            )
        },
        trigger: function() {
            var t, e, n, i, r, o;
            if (e = (t = 1 <= arguments.length ? d.call(arguments, 0) : []).shift(),
            n = this.hasOwnProperty("_callbacks") && (null != (o = this._callbacks) ? o[e] : void 0)) {
                for (i = 0,
                r = n.length; i < r && !1 !== n[i].apply(this, t); i++)
                    ;
                return !0
            }
        },
        listenTo: function(t, e, n) {
            return t.bind(e, n),
            this.listeningTo || (this.listeningTo = []),
            this.listeningTo.push({
                obj: t,
                ev: e,
                callback: n
            }),
            this
        },
        listenToOnce: function(t, e, n) {
            var i, r;
            return r = this.listeningToOnce || (this.listeningToOnce = []),
            t.bind(e, i = function() {
                var o, s, a, l, u;
                for (s = -1,
                o = l = 0,
                u = r.length; l < u; o = ++l)
                    (a = r[o]).obj === t && a.ev === e && a.callback === n && (s = o);
                return t.unbind(e, i),
                -1 !== s && r.splice(s, 1),
                n.apply(this, arguments)
            }
            ),
            r.push({
                obj: t,
                ev: e,
                callback: n,
                handler: i
            }),
            this
        },
        stopListening: function(e, n, i) {
            var r, o, s, a, l, u, c, h, d, f, m, g, v, y, b;
            if (0 === arguments.length) {
                for (c = 0,
                f = (v = [this.listeningTo, this.listeningToOnce]).length; c < f; c++)
                    if (l = v[c])
                        for (h = 0,
                        m = l.length; h < m; h++)
                            (u = l[h]).obj.unbind(u.ev, u.handler || u.callback);
                return this.listeningTo = void 0,
                this.listeningToOnce = void 0
            }
            if (e) {
                for (b = [],
                d = 0,
                g = (y = [this.listeningTo, this.listeningToOnce]).length; d < g; d++)
                    (l = y[d]) && (n = n ? n.split(" ") : [void 0],
                    b.push(function() {
                        var e, c, h;
                        for (h = [],
                        e = 0,
                        c = n.length; e < c; e++)
                            o = n[e],
                            h.push(function() {
                                var e, n, c;
                                for (c = [],
                                a = e = n = l.length - 1; n <= 0 ? e <= 0 : e >= 0; a = n <= 0 ? ++e : --e)
                                    u = l[a],
                                    i && (u.handler || u.callback) !== i || (o && o !== u.ev ? o ? (s = u.ev.split(" "),
                                    p.call(s, o) >= 0 ? (s = function() {
                                        var t, e, n;
                                        for (n = [],
                                        e = 0,
                                        t = s.length; e < t; e++)
                                            (r = s[e]) !== o && n.push(r);
                                        return n
                                    }(),
                                    u.ev = t.trim(s.join(" ")),
                                    c.push(u.obj.unbind(o, u.handler || u.callback))) : c.push(void 0)) : c.push(void 0) : (u.obj.unbind(u.ev, u.handler || u.callback),
                                    -1 !== a ? c.push(l.splice(a, 1)) : c.push(void 0)));
                                return c
                            }());
                        return h
                    }()));
                return b
            }
        },
        unbind: function(t, e) {
            var n, i, r, o, s, a, l, u, c;
            if (0 === arguments.length)
                return this._callbacks = {},
                this;
            if (!t)
                return this;
            for (s = 0,
            l = (n = t.split(" ")).length; s < l; s++)
                if (o = n[s],
                r = null != (c = this._callbacks) ? c[o] : void 0)
                    if (e) {
                        for (i = a = 0,
                        u = r.length; a < u; i = ++a)
                            if (r[i] === e) {
                                (r = r.slice()).splice(i, 1),
                                this._callbacks[o] = r;
                                break
                            }
                    } else
                        delete this._callbacks[o];
            return this
        }
    }).on = n.bind,
    n.off = n.unbind,
    i = {
        trace: !0,
        logPrefix: "(App)",
        log: function() {
            var t;
            if (t = 1 <= arguments.length ? d.call(arguments, 0) : [],
            this.trace)
                return this.logPrefix && t.unshift(this.logPrefix),
                "undefined" != typeof console && null !== console && "function" == typeof console.log && console.log.apply(console, t),
                this
        }
    },
    h = ["included", "extended"],
    o = function() {
        function t() {
            "function" == typeof this.init && this.init.apply(this, arguments)
        }
        return t.include = function(t) {
            var e, n, i;
            if (!t)
                throw new Error("include(obj) requires obj");
            for (e in t)
                n = t[e],
                p.call(h, e) < 0 && (this.prototype[e] = n);
            return null != (i = t.included) && i.apply(this),
            this
        }
        ,
        t.extend = function(t) {
            var e, n, i;
            if (!t)
                throw new Error("extend(obj) requires obj");
            for (e in t)
                n = t[e],
                p.call(h, e) < 0 && (this[e] = n);
            return null != (i = t.extended) && i.apply(this),
            this
        }
        ,
        t.proxy = function(t) {
            return e = this,
            function() {
                return t.apply(e, arguments)
            }
            ;
            var e
        }
        ,
        t.prototype.proxy = function(t) {
            return e = this,
            function() {
                return t.apply(e, arguments)
            }
            ;
            var e
        }
        ,
        t
    }(),
    (r = function() {
        function e(t) {
            e.__super__.constructor.apply(this, arguments),
            null != this.constructor.uuid && "function" == typeof this.constructor.uuid ? (this.cid = this.constructor.uuid(),
            this.id || (this.id = this.cid)) : this.cid = (null != t ? t.cid : void 0) || this.constructor.uid("c-"),
            t && this.load(t)
        }
        return m(e, o),
        e.extend(n),
        e.records = [],
        e.irecords = {},
        e.attributes = [],
        e.configure = function() {
            var t, e;
            return e = arguments[0],
            t = 2 <= arguments.length ? d.call(arguments, 1) : [],
            this.className = e,
            this.deleteAll(),
            t.length && (this.attributes = t),
            this.attributes && (this.attributes = c(this.attributes)),
            this.attributes || (this.attributes = []),
            this.unbind(),
            this
        }
        ,
        e.toString = function() {
            return this.className + "(" + this.attributes.join(", ") + ")"
        }
        ,
        e.find = function(t, e) {
            var n;
            return null == e && (e = this.notFound),
            (null != (n = this.irecords[t]) ? n.clone() : void 0) || ("function" == typeof e ? e(t) : void 0)
        }
        ,
        e.notFound = function() {
            return null
        }
        ,
        e.exists = function(t) {
            return !!this.irecords[t]
        }
        ,
        e.addRecord = function(t) {
            return t.id && this.irecords[t.id] && this.irecords[t.id].remove(),
            t.id || (t.id = t.cid),
            this.records.push(t),
            this.irecords[t.id] = t,
            this.irecords[t.cid] = t
        }
        ,
        e.refresh = function(t, e) {
            var n, i, r, o, s;
            for (null == e && (e = {}),
            e.clear && this.deleteAll(),
            i = this.fromJSON(t),
            l(i) || (i = [i]),
            o = 0,
            s = i.length; o < s; o++)
                n = i[o],
                this.addRecord(n);
            return this.sort(),
            r = this.cloneArray(i),
            this.trigger("refresh", r, e),
            r
        }
        ,
        e.select = function(t) {
            var e, n, i, r, o;
            for (o = [],
            n = 0,
            i = (r = this.records).length; n < i; n++)
                t(e = r[n]) && o.push(e.clone());
            return o
        }
        ,
        e.findByAttribute = function(t, e) {
            var n, i, r, o;
            for (i = 0,
            r = (o = this.records).length; i < r; i++)
                if ((n = o[i])[t] === e)
                    return n.clone();
            return null
        }
        ,
        e.findAllByAttribute = function(t, e) {
            return this.select(function(n) {
                return n[t] === e
            })
        }
        ,
        e.each = function(t) {
            var e, n, i, r, o;
            for (o = [],
            n = 0,
            i = (r = this.records).length; n < i; n++)
                e = r[n],
                o.push(t(e.clone()));
            return o
        }
        ,
        e.all = function() {
            return this.cloneArray(this.records)
        }
        ,
        e.slice = function(t, e) {
            return null == t && (t = 0),
            this.cloneArray(this.records.slice(t, e))
        }
        ,
        e.first = function(t) {
            var e;
            return null == t && (t = 1),
            t > 1 ? this.cloneArray(this.records.slice(0, t)) : null != (e = this.records[0]) ? e.clone() : void 0
        }
        ,
        e.last = function(t) {
            var e;
            return "number" == typeof t ? this.cloneArray(this.records.slice(-t)) : null != (e = this.records[this.records.length - 1]) ? e.clone() : void 0
        }
        ,
        e.count = function() {
            return this.records.length
        }
        ,
        e.deleteAll = function() {
            return this.records = [],
            this.irecords = {}
        }
        ,
        e.destroyAll = function(t) {
            var e, n, i, r, o;
            for (o = [],
            n = 0,
            i = (r = this.records).length; n < i; n++)
                e = r[n],
                o.push(e.destroy(t));
            return o
        }
        ,
        e.update = function(t, e, n) {
            return this.find(t).updateAttributes(e, n)
        }
        ,
        e.create = function(t, e) {
            return new this(t).save(e)
        }
        ,
        e.destroy = function(t, e) {
            return this.find(t).destroy(e)
        }
        ,
        e.change = function(t) {
            return "function" == typeof t ? this.bind("change", t) : this.trigger.apply(this, ["change"].concat(d.call(arguments)))
        }
        ,
        e.fetch = function(t) {
            return "function" == typeof t ? this.bind("fetch", t) : this.trigger.apply(this, ["fetch"].concat(d.call(arguments)))
        }
        ,
        e.toJSON = function() {
            return this.records
        }
        ,
        e.fromJSON = function(t) {
            var e, n, i, r;
            if (t) {
                if ("string" == typeof t && (t = JSON.parse(t)),
                l(t)) {
                    for (r = [],
                    n = 0,
                    i = t.length; n < i; n++)
                        e = t[n],
                        r.push(new this(e));
                    return r
                }
                return new this(t)
            }
        }
        ,
        e.fromForm = function() {
            var t;
            return (t = new this).fromForm.apply(t, arguments)
        }
        ,
        e.sort = function() {
            return this.comparator && this.records.sort(this.comparator),
            this
        }
        ,
        e.cloneArray = function(t) {
            var e, n, i, r;
            for (r = [],
            n = 0,
            i = t.length; n < i; n++)
                e = t[n],
                r.push(e.clone());
            return r
        }
        ,
        e.idCounter = 0,
        e.uid = function(t) {
            var e;
            return null == t && (t = ""),
            e = t + this.idCounter++,
            this.exists(e) && (e = this.uid(t)),
            e
        }
        ,
        e.prototype.isNew = function() {
            return !this.exists()
        }
        ,
        e.prototype.isValid = function() {
            return !this.validate()
        }
        ,
        e.prototype.validate = function() {}
        ,
        e.prototype.load = function(t) {
            var e, n;
            for (e in t.id && (this.id = t.id),
            t)
                n = t[e],
                t.hasOwnProperty(e) && "function" == typeof this[e] ? this[e](n) : this[e] = n;
            return this
        }
        ,
        e.prototype.attributes = function() {
            var t, e, n, i, r;
            for (e = {},
            n = 0,
            i = (r = this.constructor.attributes).length; n < i; n++)
                (t = r[n])in this && ("function" == typeof this[t] ? e[t] = this[t]() : e[t] = this[t]);
            return this.id && (e.id = this.id),
            e
        }
        ,
        e.prototype.eql = function(t) {
            return !(!t || t.constructor !== this.constructor || !(t.cid === this.cid || t.id && t.id === this.id))
        }
        ,
        e.prototype.save = function(t) {
            var e, n;
            return null == t && (t = {}),
            !1 !== t.validate && (e = this.validate()) ? (this.trigger("error", e),
            !1) : (this.trigger("beforeSave", t),
            n = this.isNew() ? this.create(t) : this.update(t),
            this.stripCloneAttrs(),
            this.trigger("save", t),
            n)
        }
        ,
        e.prototype.stripCloneAttrs = function() {
            var t;
            if (!this.hasOwnProperty("cid")) {
                for (t in this)
                    f.call(this, t) && (this[t],
                    p.call(this.constructor.attributes, t) >= 0 && delete this[t]);
                return this
            }
        }
        ,
        e.prototype.updateAttribute = function(t, e, n) {
            var i;
            return (i = {})[t] = e,
            this.updateAttributes(i, n)
        }
        ,
        e.prototype.updateAttributes = function(t, e) {
            return this.load(t),
            this.save(e)
        }
        ,
        e.prototype.changeID = function(t) {
            var e;
            if (t !== this.id)
                return (e = this.constructor.irecords)[t] = e[this.id],
                this.cid !== this.id && delete e[this.id],
                this.id = t,
                this.save()
        }
        ,
        e.prototype.remove = function() {
            var t, e, n, i, r;
            for (t = i = 0,
            r = (n = this.constructor.records.slice(0)).length; i < r; t = ++i)
                if (e = n[t],
                this.eql(e)) {
                    n.splice(t, 1);
                    break
                }
            return this.constructor.records = n,
            delete this.constructor.irecords[this.id],
            delete this.constructor.irecords[this.cid]
        }
        ,
        e.prototype.destroy = function(t) {
            return null == t && (t = {}),
            this.trigger("beforeDestroy", t),
            this.remove(),
            this.destroyed = !0,
            this.trigger("destroy", t),
            this.trigger("change", "destroy", t),
            this.listeningTo && this.stopListening(),
            this.unbind(),
            this
        }
        ,
        e.prototype.dup = function(t) {
            var e;
            return null == t && (t = !0),
            e = this.attributes(),
            t ? delete e.id : e.cid = this.cid,
            new this.constructor(e)
        }
        ,
        e.prototype.clone = function() {
            return a(this)
        }
        ,
        e.prototype.reload = function() {
            var t;
            return this.isNew() ? this : (t = this.constructor.find(this.id),
            this.load(t.attributes()),
            t)
        }
        ,
        e.prototype.refresh = function(t) {
            return this.constructor.irecords[this.id].load(t),
            this.trigger("refresh"),
            this
        }
        ,
        e.prototype.toJSON = function() {
            return this.attributes()
        }
        ,
        e.prototype.toString = function() {
            return "<" + this.constructor.className + " (" + JSON.stringify(this) + ")>"
        }
        ,
        e.prototype.fromForm = function(e) {
            var n, i, r, o, s, a, l, u, c, h, d, p, f, m;
            for (o = {},
            s = 0,
            u = (p = t(e).find("[type=checkbox]:not([value])")).length; s < u; s++)
                o[(n = p[s]).name] = t(n).prop("checked");
            for (a = 0,
            c = (f = t(e).find('[type=checkbox][name$="[]"]')).length; a < c; a++)
                o[r = (n = f[a]).name.replace(/\[\]$/, "")] || (o[r] = []),
                t(n).prop("checked") && o[r].push(n.value);
            for (l = 0,
            h = (m = t(e).serializeArray()).length; l < h; l++)
                o[d = (i = m[l]).name] || (o[d] = i.value);
            return this.load(o)
        }
        ,
        e.prototype.exists = function() {
            return this.constructor.exists(this.id)
        }
        ,
        e.prototype.update = function(t) {
            var e, n;
            return this.trigger("beforeUpdate", t),
            (n = this.constructor.irecords)[this.id].load(this.attributes()),
            this.constructor.sort(),
            (e = n[this.id].clone()).trigger("update", t),
            e.trigger("change", "update", t),
            e
        }
        ,
        e.prototype.create = function(t) {
            var e, n;
            return this.trigger("beforeCreate", t),
            this.id || (this.id = this.cid),
            n = this.dup(!1),
            this.constructor.addRecord(n),
            this.constructor.sort(),
            (e = n.clone()).trigger("create", t),
            e.trigger("change", "create", t),
            e
        }
        ,
        e.prototype.bind = function(t, e) {
            var n, i, r, o, s, a;
            for (this.constructor.bind(t, (a = this,
            n = function(t) {
                if (t && a.eql(t))
                    return e.apply(a, arguments)
            }
            )),
            s = t.split(" "),
            i = function(t) {
                return function(i) {
                    var r;
                    return t.constructor.bind("unbind", r = function(o, s, a) {
                        if (o && t.eql(o)) {
                            if (s && s !== i)
                                return;
                            if (a && a !== e)
                                return;
                            return t.constructor.unbind(i, n),
                            t.constructor.unbind("unbind", r)
                        }
                    }
                    )
                }
            }(this),
            r = 0,
            o = s.length; r < o; r++)
                i(s[r]);
            return this
        }
        ,
        e.prototype.one = function(t, e) {
            var n, i;
            return this.bind(t, (i = this,
            n = function() {
                return i.unbind(t, n),
                e.apply(i, arguments)
            }
            ))
        }
        ,
        e.prototype.trigger = function() {
            var t, e;
            return (t = 1 <= arguments.length ? d.call(arguments, 0) : []).splice(1, 0, this),
            (e = this.constructor).trigger.apply(e, t)
        }
        ,
        e.prototype.listenTo = function() {
            return n.listenTo.apply(this, arguments)
        }
        ,
        e.prototype.listenToOnce = function() {
            return n.listenToOnce.apply(this, arguments)
        }
        ,
        e.prototype.stopListening = function() {
            return n.stopListening.apply(this, arguments)
        }
        ,
        e.prototype.unbind = function(t, e) {
            var n, i, r, o, s;
            if (0 === arguments.length)
                return this.trigger("unbind");
            if (t) {
                for (s = [],
                i = 0,
                r = (o = t.split(" ")).length; i < r; i++)
                    n = o[i],
                    s.push(this.trigger("unbind", n, e));
                return s
            }
        }
        ,
        e
    }()).prototype.on = r.prototype.bind,
    r.prototype.off = r.prototype.unbind,
    e = function() {
        function e(n) {
            var i, r, o, s, a;
            for (r in this.release = g(this.release, this),
            this.options = n,
            a = this.options)
                s = a[r],
                this[r] = s;
            for (this.el || (this.el = document.createElement(this.tag)),
            this.el = t(this.el),
            this.$el = this.el,
            this.className && this.el.addClass(this.className),
            this.attributes && this.el.attr(this.attributes),
            this.events || (this.events = this.constructor.events),
            this.elements || (this.elements = this.constructor.elements),
            i = this; o = i.constructor.__super__; )
                o.events && (this.events = t.extend({}, o.events, this.events)),
                o.elements && (this.elements = t.extend({}, o.elements, this.elements)),
                i = o;
            this.events && this.delegateEvents(this.events),
            this.elements && this.refreshElements(),
            e.__super__.constructor.apply(this, arguments)
        }
        return m(e, o),
        e.include(n),
        e.include(i),
        e.prototype.eventSplitter = /^(\S+)\s*(.*)$/,
        e.prototype.tag = "div",
        e.prototype.release = function() {
            return this.trigger("release", this),
            this.el.remove(),
            this.unbind(),
            this.stopListening()
        }
        ,
        e.prototype.$ = function(e) {
            return t(e, this.el)
        }
        ,
        e.prototype.delegateEvents = function(t) {
            var e, n, i, r, o, s;
            for (n in s = [],
            t) {
                if ("function" == typeof (r = t[n]))
                    r = function(t) {
                        return function(e) {
                            return function() {
                                return e.apply(t, arguments),
                                !0
                            }
                        }
                    }(this)(r);
                else {
                    if (!this[r])
                        throw new Error(r + " doesn't exist");
                    r = function(t) {
                        return function(e) {
                            return function() {
                                return t[e].apply(t, arguments),
                                !0
                            }
                        }
                    }(this)(r)
                }
                e = (i = n.match(this.eventSplitter))[1],
                "" === (o = i[2]) ? s.push(this.el.bind(e, r)) : s.push(this.el.on(e, o, r))
            }
            return s
        }
        ,
        e.prototype.refreshElements = function() {
            var t, e, n, i;
            for (t in i = [],
            n = this.elements)
                e = n[t],
                i.push(this[e] = this.$(t));
            return i
        }
        ,
        e.prototype.delay = function(t, e) {
            return setTimeout(this.proxy(t), e || 0)
        }
        ,
        e.prototype.html = function(t) {
            return this.el.html(t.el || t),
            this.refreshElements(),
            this.el
        }
        ,
        e.prototype.append = function() {
            var t, e, n;
            return e = 1 <= arguments.length ? d.call(arguments, 0) : [],
            e = function() {
                var n, i, r;
                for (r = [],
                n = 0,
                i = e.length; n < i; n++)
                    t = e[n],
                    r.push(t.el || t);
                return r
            }(),
            (n = this.el).append.apply(n, e),
            this.refreshElements(),
            this.el
        }
        ,
        e.prototype.appendTo = function(t) {
            return this.el.appendTo(t.el || t),
            this.refreshElements(),
            this.el
        }
        ,
        e.prototype.prepend = function() {
            var t, e, n;
            return e = 1 <= arguments.length ? d.call(arguments, 0) : [],
            e = function() {
                var n, i, r;
                for (r = [],
                n = 0,
                i = e.length; n < i; n++)
                    t = e[n],
                    r.push(t.el || t);
                return r
            }(),
            (n = this.el).prepend.apply(n, e),
            this.refreshElements(),
            this.el
        }
        ,
        e.prototype.replace = function(e) {
            var n, i, r;
            return "string" == typeof (e = e.el || e) && (e = t.trim(e)),
            n = (r = [this.el, t((null != (i = t.parseHTML(e)) ? i[0] : void 0) || e)])[0],
            this.el = r[1],
            n.replaceWith(this.el),
            this.delegateEvents(this.events),
            this.refreshElements(),
            this.el
        }
        ,
        e
    }(),
    t = ("undefined" != typeof window && null !== window ? window.jQuery : void 0) || ("undefined" != typeof window && null !== window ? window.Zepto : void 0) || function(t) {
        return t
    }
    ,
    a = Object.create || function(t) {
        var e;
        return (e = function() {}
        ).prototype = t,
        new e
    }
    ,
    l = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ,
    u = function(t) {
        var e;
        if (!t)
            return !0;
        for (e in t)
            return !1;
        return !0
    }
    ,
    c = function(t) {
        return Array.prototype.slice.call(t, 0)
    }
    ,
    s = this.Spine = {},
    "undefined" != typeof module && null !== module && (module.exports = s),
    s.version = "1.3.0",
    s.isArray = l,
    s.isBlank = u,
    s.$ = t,
    s.Events = n,
    s.Log = i,
    s.Module = o,
    s.Controller = e,
    s.Model = r,
    o.extend.call(s, n),
    o.create = o.sub = e.create = e.sub = r.sub = function(t, e) {
        var n;
        return n = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return m(e, t),
            e
        }(this),
        t && n.include(t),
        e && n.extend(e),
        "function" == typeof n.unbind && n.unbind(),
        n
    }
    ,
    r.setup = function(t, e) {
        var n;
        return null == e && (e = []),
        (n = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return m(e, t),
            e
        }(this)).configure.apply(n, [t].concat(d.call(e))),
        n
    }
    ,
    s.Class = o
}
.call(this),
function() {
    var t, e = {}.hasOwnProperty, n = function(t, n) {
        function i() {
            this.constructor = t
        }
        for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
        return i.prototype = n.prototype,
        t.prototype = new i,
        t.__super__ = n.prototype,
        t
    }, i = [].slice;
    (t = this.Spine || require("spine")).$,
    t.Manager = function(e) {
        function r() {
            this.controllers = [],
            this.bind("change", this.change),
            this.add.apply(this, arguments)
        }
        return n(r, e),
        r.include(t.Events),
        r.prototype.add = function() {
            var t, e, n, r, o;
            for (o = [],
            n = 0,
            r = (e = 1 <= arguments.length ? i.call(arguments, 0) : []).length; n < r; n++)
                t = e[n],
                o.push(this.addOne(t));
            return o
        }
        ,
        r.prototype.addOne = function(t) {
            var e;
            return t.bind("active", (e = this,
            function() {
                var n;
                return n = 1 <= arguments.length ? i.call(arguments, 0) : [],
                e.trigger.apply(e, ["change", t].concat(i.call(n)))
            }
            )),
            t.bind("release", function(e) {
                return function() {
                    var n;
                    return e.controllers = function() {
                        var e, i, r, o;
                        for (o = [],
                        e = 0,
                        i = (r = this.controllers).length; e < i; e++)
                            (n = r[e]) !== t && o.push(n);
                        return o
                    }
                    .call(e)
                }
            }(this)),
            this.controllers.push(t)
        }
        ,
        r.prototype.deactivate = function() {
            return this.trigger.apply(this, ["change", !1].concat(i.call(arguments)))
        }
        ,
        r.prototype.change = function() {
            var t, e, n, r, o, s;
            for (n = arguments[0],
            t = 2 <= arguments.length ? i.call(arguments, 1) : [],
            r = 0,
            o = (s = this.controllers).length; r < o; r++)
                (e = s[r]) !== n && e.deactivate.apply(e, t);
            if (n)
                return n.activate.apply(n, t)
        }
        ,
        r
    }(t.Module),
    t.Controller.include({
        active: function() {
            var t;
            return "function" == typeof (t = 1 <= arguments.length ? i.call(arguments, 0) : [])[0] ? this.bind("active", t[0]) : (t.unshift("active"),
            this.trigger.apply(this, t)),
            this
        },
        isActive: function() {
            return this.el.hasClass("active")
        },
        activate: function() {
            return this.el.addClass("active"),
            this
        },
        deactivate: function() {
            return this.el.removeClass("active"),
            this
        }
    }),
    t.Stack = function(e) {
        function i() {
            var e, n, r, o, s, a;
            for (e in i.__super__.constructor.apply(this, arguments),
            this.manager = new t.Manager,
            o = this.controllers) {
                if (n = o[e],
                null != this[e])
                    throw Error("'@" + e + "' already assigned - choose a different name");
                this[e] = new n({
                    stack: this
                }),
                this.add(this[e])
            }
            for (e in s = this.routes,
            a = this,
            r = function(t, e) {
                var n;
                return "function" == typeof e && (n = e),
                n || (n = function() {
                    var t;
                    return (t = a[e]).active.apply(t, arguments)
                }
                ),
                a.route(t, n)
            }
            ,
            s)
                r(e, n = s[e]);
            this["default"] && this[this["default"]].active()
        }
        return n(i, e),
        i.prototype.controllers = {},
        i.prototype.routes = {},
        i.prototype.className = "spine stack",
        i.prototype.add = function(t) {
            return this.manager.add(t),
            this.append(t)
        }
        ,
        i
    }(t.Controller),
    "undefined" != typeof module && null !== module && (module.exports = t.Manager),
    "undefined" != typeof module && null !== module && (module.exports.Stack = t.Stack)
}
.call(this),
function() {
    var t, e, n, i, r, o, s, a, l, u, c, h = [].slice, d = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }, p = {}.hasOwnProperty, f = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            p.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype,
        t.prototype = new n,
        t.__super__ = e.prototype,
        t
    };
    c = this.Spine || require("spine"),
    t = c.$,
    a = c.Model,
    l = t({}),
    e = {
        getURL: function(t) {
            return null != t.className ? this.generateURL(t) : this.generateURL(t, encodeURIComponent(t.id))
        },
        getCollectionURL: function(t) {
            return this.generateURL(t)
        },
        getScope: function(t) {
            return ("function" == typeof t.scope ? t.scope() : void 0) || t.scope
        },
        getCollection: function(t) {
            return t.url !== t.generateURL ? "function" == typeof t.url ? t.url() : t.url : null != t.className ? t.className.toLowerCase() + "s" : void 0
        },
        generateURL: function() {
            var t, n, i, r, o;
            return i = arguments[0],
            t = 2 <= arguments.length ? h.call(arguments, 1) : [],
            n = e.getCollection(i) || e.getCollection(i.constructor),
            o = e.getScope(i) || e.getScope(i.constructor),
            t.unshift(n),
            t.unshift(o),
            0 !== (r = (r = (r = t.join("/")).replace(/(\/\/)/g, "/")).replace(/^\/|\/$/g, "")).indexOf("../") ? a.host + "/" + r : r
        },
        enabled: !0,
        disable: function(t) {
            if (!this.enabled)
                return t();
            this.enabled = !1;
            try {
                return t()
            } catch (e) {
                throw e
            } finally {
                this.enabled = !0
            }
        },
        queue: function(t) {
            return t ? l.queue(t) : l.queue()
        },
        clearQueue: function() {
            return this.queue([])
        }
    },
    n = function() {
        function n() {}
        return n.prototype.defaults = {
            dataType: "json",
            processData: !1,
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        },
        n.prototype.queue = e.queue,
        n.prototype.ajax = function(e, n) {
            return t.ajax(this.ajaxSettings(e, n))
        }
        ,
        n.prototype.ajaxQueue = function(n, i, r) {
            var o, s, a, u, c, h;
            return s = null,
            o = t.Deferred(),
            u = o.promise(),
            e.enabled ? (h = this.ajaxSettings(n, i),
            a = void 0 !== h.parallel ? h.parallel : "GET" === h.type,
            c = function(n) {
                var i;
                if (null != (null != r ? r.id : void 0) && (null == h.url && (h.url = e.getURL(r)),
                null != (i = h.data) && (i.id = r.id)),
                "string" != typeof h.data && !0 !== h.processData && (h.data = JSON.stringify(h.data)),
                s = t.ajax(h).done(o.resolve).fail(o.reject).then(n, n),
                a)
                    return l.dequeue()
            }
            ,
            u.abort = function(e) {
                var n;
                return s ? s.abort(e) : ((n = t.inArray(c, this.queue())) > -1 && this.queue().splice(n, 1),
                o.rejectWith(h.context || h, [u, e, ""]),
                u)
            }
            ,
            this.queue(c),
            u) : u
        }
        ,
        n.prototype.ajaxSettings = function(e, n) {
            return t.extend({}, this.defaults, n, e)
        }
        ,
        n
    }(),
    i = function() {
        function t(t) {
            this.model = t,
            this.failResponse = d(this.failResponse, this),
            this.recordsResponse = d(this.recordsResponse, this)
        }
        return f(t, n),
        t.prototype.find = function(t, n, i) {
            var r;
            return null == i && (i = {}),
            r = new this.model({
                id: t
            }),
            this.ajaxQueue(n, {
                type: "GET",
                url: i.url || e.getURL(r),
                parallel: i.parallel
            }).done(this.recordsResponse).fail(this.failResponse)
        }
        ,
        t.prototype.all = function(t, n) {
            return null == n && (n = {}),
            this.ajaxQueue(t, {
                type: "GET",
                url: n.url || e.getURL(this.model),
                parallel: n.parallel
            }).done(this.recordsResponse).fail(this.failResponse)
        }
        ,
        t.prototype.fetch = function(t, e) {
            var n, i;
            return null == t && (t = {}),
            null == e && (e = {}),
            (n = t.id) ? (delete t.id,
            this.find(n, t, e).done((i = this,
            function(t) {
                return i.model.refresh(t, e)
            }
            ))) : this.all(t, e).done(function(t) {
                return function(n) {
                    return t.model.refresh(n, e)
                }
            }(this))
        }
        ,
        t.prototype.recordsResponse = function(t, e, n) {
            return this.model.trigger("ajaxSuccess", null, e, n)
        }
        ,
        t.prototype.failResponse = function(t, e, n) {
            return this.model.trigger("ajaxError", null, t, e, n)
        }
        ,
        t
    }(),
    u = function() {
        function t(t) {
            this.record = t,
            this.failResponse = d(this.failResponse, this),
            this.recordResponse = d(this.recordResponse, this),
            this.model = this.record.constructor
        }
        return f(t, n),
        t.prototype.reload = function(t, e) {
            return null == e && (e = {}),
            this.ajaxQueue(t, {
                type: "GET",
                url: e.url,
                parallel: e.parallel
            }, this.record).done(this.recordResponse(e)).fail(this.failResponse(e))
        }
        ,
        t.prototype.create = function(t, n) {
            return null == n && (n = {}),
            this.ajaxQueue(t, {
                type: "POST",
                contentType: "application/json",
                data: this.record.toJSON(),
                url: n.url || e.getCollectionURL(this.record),
                parallel: n.parallel
            }).done(this.recordResponse(n)).fail(this.failResponse(n))
        }
        ,
        t.prototype.update = function(t, e) {
            return null == e && (e = {}),
            this.ajaxQueue(t, {
                type: "PUT",
                contentType: "application/json",
                data: this.record.toJSON(),
                url: e.url,
                parallel: e.parallel
            }, this.record).done(this.recordResponse(e)).fail(this.failResponse(e))
        }
        ,
        t.prototype.destroy = function(t, e) {
            return null == e && (e = {}),
            this.ajaxQueue(t, {
                type: "DELETE",
                url: e.url,
                parallel: e.parallel
            }, this.record).done(this.recordResponse(e)).fail(this.failResponse(e))
        }
        ,
        t.prototype.recordResponse = function(t) {
            return null == t && (t = {}),
            n = this,
            function(i, r, o) {
                var s;
                return e.disable(function() {
                    if (!c.isBlank(i) && !n.record.destroyed)
                        return i.id && n.record.id !== i.id && n.record.changeID(i.id),
                        n.record.refresh(i)
                }),
                n.record.trigger("ajaxSuccess", i, r, o),
                null != (s = t.done) ? s.apply(n.record) : void 0
            }
            ;
            var n
        }
        ,
        t.prototype.failResponse = function(t) {
            return null == t && (t = {}),
            e = this,
            function(n, i, r) {
                var o;
                return e.record.trigger("ajaxError", n, i, r),
                null != (o = t.fail) ? o.apply(e.record) : void 0
            }
            ;
            var e
        }
        ,
        t
    }(),
    a.host = "",
    s = {
        ajax: function() {
            return new u(this)
        },
        generateURL: (o = {
            include: function() {
                var t;
                return (t = 1 <= arguments.length ? h.call(arguments, 0) : []).unshift(encodeURIComponent(this.id)),
                e.generateURL.apply(e, [this].concat(h.call(t)))
            },
            extend: function() {
                var t;
                return t = 1 <= arguments.length ? h.call(arguments, 0) : [],
                e.generateURL.apply(e, [this].concat(h.call(t)))
            }
        }).include,
        url: o.include
    },
    r = {
        ajax: function() {
            return new i(this)
        },
        generateURL: o.extend,
        url: o.extend
    },
    a.Ajax = {
        extended: function() {
            return this.fetch(this.ajaxFetch),
            this.change(this.ajaxChange),
            this.extend(r),
            this.include(s)
        },
        ajaxFetch: function() {
            var t;
            return (t = this.ajax()).fetch.apply(t, arguments)
        },
        ajaxChange: function(t, e, n) {
            if (null == n && (n = {}),
            !1 !== n.ajax)
                return t.ajax()[e](n.ajax, n)
        }
    },
    a.Ajax.Methods = {
        extended: function() {
            return this.extend(r),
            this.include(s)
        }
    },
    e.defaults = n.prototype.defaults,
    e.Base = n,
    e.Singleton = u,
    e.Collection = i,
    c.Ajax = e,
    "undefined" != typeof module && null !== module && (module.exports = e)
}
.call(this),
function() {
    var t;
    (t = this.Spine || require("spine")).Model.Local = {
        extended: function() {
            return this.change(this.saveLocal),
            this.fetch(this.loadLocal)
        },
        saveLocal: function() {
            var t;
            return t = JSON.stringify(this),
            localStorage[this.className] = t
        },
        loadLocal: function(t) {
            var e;
            return null == t && (t = {}),
            t.hasOwnProperty("clear") || (t.clear = !0),
            e = localStorage[this.className],
            this.refresh(e || [], t)
        }
    },
    "undefined" != typeof module && null !== module && (module.exports = t.Model.Local)
}
.call(this),
function() {
    var t, e, n, i, r, o, s = {}.hasOwnProperty, a = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            s.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype,
        t.prototype = new n,
        t.__super__ = e.prototype,
        t
    }, l = [].slice;
    e = this.Spine || require("spine"),
    t = e.$,
    i = /^#*/,
    r = /:([\w\d]+)/g,
    o = /\*([\w\d]+)/g,
    n = /[-[\]{}()+?.,\\^$|#\s]/g,
    e.Route = function(s) {
        function u(t, e) {
            var i;
            if (this.path = t,
            this.callback = e,
            this.names = [],
            "string" == typeof t) {
                for (r.lastIndex = 0; null !== (i = r.exec(t)); )
                    this.names.push(i[1]);
                for (o.lastIndex = 0; null !== (i = o.exec(t)); )
                    this.names.push(i[1]);
                t = t.replace(n, "\\$&").replace(r, "([^/]*)").replace(o, "(.*?)"),
                this.route = new RegExp("^" + t + "$")
            } else
                this.route = t
        }
        var c;
        return a(u, s),
        u.extend(e.Events),
        u.historySupport = null != (null != (c = window.history) ? c.pushState : void 0),
        u.routes = [],
        u.options = {
            trigger: !0,
            history: !1,
            shim: !1,
            replace: !1,
            redirect: !1
        },
        u.add = function(t, e) {
            var n, i, r;
            if ("object" != typeof t || t instanceof RegExp)
                return this.routes.push(new this(t,e));
            for (n in r = [],
            t)
                i = t[n],
                r.push(this.add(n, i));
            return r
        }
        ,
        u.setup = function(e) {
            if (null == e && (e = {}),
            this.options = t.extend({}, this.options, e),
            this.options.history && (this.history = this.historySupport && this.options.history),
            !this.options.shim)
                return this.history ? t(window).bind("popstate", this.change) : t(window).bind("hashchange", this.change),
                this.change()
        }
        ,
        u.unbind = function() {
            if (!this.options.shim)
                return this.history ? t(window).unbind("popstate", this.change) : t(window).unbind("hashchange", this.change)
        }
        ,
        u.navigate = function() {
            var e, n, i, r, o;
            if (i = {},
            "object" == typeof (n = (e = 1 <= arguments.length ? l.call(arguments, 0) : [])[e.length - 1]) ? i = e.pop() : "boolean" == typeof n && (i.trigger = e.pop()),
            i = t.extend({}, this.options, i),
            r = e.join("/"),
            this.path !== r && (this.path = r,
            this.trigger("navigate", this.path),
            i.trigger && (o = this.matchRoute(this.path, i)),
            !i.shim)) {
                if (!o) {
                    if ("function" == typeof i.redirect)
                        return i.redirect.apply(this, [this.path, i]);
                    !0 === i.redirect && this.redirect(this.path)
                }
                return this.history && i.replace ? history.replaceState({}, document.title, this.path) : this.history ? history.pushState({}, document.title, this.path) : window.location.hash = this.path
            }
        }
        ,
        u.getPath = function() {
            var t;
            return this.history ? "/" !== (t = window.location.pathname).substr(0, 1) && (t = "/" + t) : t = (t = window.location.hash).replace(i, ""),
            t
        }
        ,
        u.getHost = function() {
            return window.location.protocol + "//" + window.location.host
        }
        ,
        u.change = function() {
            var t;
            if ((t = this.getPath()) !== this.path)
                return this.path = t,
                this.matchRoute(this.path)
        }
        ,
        u.matchRoute = function(t, e) {
            var n, i, r, o;
            for (i = 0,
            r = (o = this.routes).length; i < r; i++)
                if ((n = o[i]).match(t, e))
                    return this.trigger("change", n, t),
                    n
        }
        ,
        u.redirect = function(t) {
            return window.location = t
        }
        ,
        u.prototype.match = function(t, e) {
            var n, i, r, o, s, a;
            if (null == e && (e = {}),
            !(i = this.route.exec(t)))
                return !1;
            if (e.match = i,
            o = i.slice(1),
            this.names.length)
                for (n = s = 0,
                a = o.length; s < a; n = ++s)
                    r = o[n],
                    e[this.names[n]] = r;
            return this.constructor.trigger("before", this),
            !1 !== this.callback.call(null, e)
        }
        ,
        u
    }(e.Module),
    e.Route.change = e.Route.proxy(e.Route.change),
    e.Controller.include({
        route: function(t, n) {
            return e.Route.add(t, this.proxy(n))
        },
        routes: function(t) {
            var e, n, i;
            for (e in i = [],
            t)
                n = t[e],
                i.push(this.route(e, n));
            return i
        },
        navigate: function() {
            return e.Route.navigate.apply(e.Route, arguments)
        }
    }),
    "undefined" != typeof module && null !== module && (module.exports = e.Route)
}
.call(this),
function() {
    function t(t) {
        function e(e, n, i, r, o, s) {
            for (; o >= 0 && o < s; o += t) {
                var a = r ? r[o] : o;
                i = n(i, e[a], a, e)
            }
            return i
        }
        return function(n, i, r, o) {
            i = b(i, o, 4);
            var s = !E(n) && y.keys(n)
              , a = (s || n).length
              , l = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (r = n[s ? s[l] : l],
            l += t),
            e(n, i, r, s, l, a)
        }
    }
    function e(t) {
        return function(e, n, i) {
            n = w(n, i);
            for (var r = k(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t)
                if (n(e[o], o, e))
                    return o;
            return -1
        }
    }
    function n(t, e, n) {
        return function(i, r, o) {
            var s = 0
              , a = k(i);
            if ("number" == typeof o)
                t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
            else if (n && o && a)
                return i[o = n(i, r)] === r ? o : -1;
            if (r != r)
                return (o = e(c.call(i, s, a), y.isNaN)) >= 0 ? o + s : -1;
            for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)
                if (i[o] === r)
                    return o;
            return -1
        }
    }
    function i(t, e) {
        var n = D.length
          , i = t.constructor
          , r = y.isFunction(i) && i.prototype || a
          , o = "constructor";
        for (y.has(t, o) && !y.contains(e, o) && e.push(o); n--; )
            (o = D[n])in t && t[o] !== r[o] && !y.contains(e, o) && e.push(o)
    }
    var r = this
      , o = r._
      , s = Array.prototype
      , a = Object.prototype
      , l = Function.prototype
      , u = s.push
      , c = s.slice
      , h = a.toString
      , d = a.hasOwnProperty
      , p = Array.isArray
      , f = Object.keys
      , m = l.bind
      , g = Object.create
      , v = function() {}
      , y = function(t) {
        return t instanceof y ? t : this instanceof y ? void (this._wrapped = t) : new y(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y),
    exports._ = y) : r._ = y,
    y.VERSION = "1.8.3";
    var b = function(t, e, n) {
        if (void 0 === e)
            return t;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            }
            ;
        case 2:
            return function(n, i) {
                return t.call(e, n, i)
            }
            ;
        case 3:
            return function(n, i, r) {
                return t.call(e, n, i, r)
            }
            ;
        case 4:
            return function(n, i, r, o) {
                return t.call(e, n, i, r, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
      , w = function(t, e, n) {
        return null == t ? y.identity : y.isFunction(t) ? b(t, e, n) : y.isObject(t) ? y.matcher(t) : y.property(t)
    };
    y.iteratee = function(t, e) {
        return w(t, e, Infinity)
    }
    ;
    var x = function(t, e) {
        return function(n) {
            var i = arguments.length;
            if (i < 2 || null == n)
                return n;
            for (var r = 1; r < i; r++)
                for (var o = arguments[r], s = t(o), a = s.length, l = 0; l < a; l++) {
                    var u = s[l];
                    e && void 0 !== n[u] || (n[u] = o[u])
                }
            return n
        }
    }
      , _ = function(t) {
        if (!y.isObject(t))
            return {};
        if (g)
            return g(t);
        v.prototype = t;
        var e = new v;
        return v.prototype = null,
        e
    }
      , C = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
      , S = Math.pow(2, 53) - 1
      , k = C("length")
      , E = function(t) {
        var e = k(t);
        return "number" == typeof e && e >= 0 && e <= S
    };
    y.each = y.forEach = function(t, e, n) {
        var i, r;
        if (e = b(e, n),
        E(t))
            for (i = 0,
            r = t.length; i < r; i++)
                e(t[i], i, t);
        else {
            var o = y.keys(t);
            for (i = 0,
            r = o.length; i < r; i++)
                e(t[o[i]], o[i], t)
        }
        return t
    }
    ,
    y.map = y.collect = function(t, e, n) {
        e = w(e, n);
        for (var i = !E(t) && y.keys(t), r = (i || t).length, o = Array(r), s = 0; s < r; s++) {
            var a = i ? i[s] : s;
            o[s] = e(t[a], a, t)
        }
        return o
    }
    ,
    y.reduce = y.foldl = y.inject = t(1),
    y.reduceRight = y.foldr = t(-1),
    y.find = y.detect = function(t, e, n) {
        var i;
        if (void 0 !== (i = E(t) ? y.findIndex(t, e, n) : y.findKey(t, e, n)) && -1 !== i)
            return t[i]
    }
    ,
    y.filter = y.select = function(t, e, n) {
        var i = [];
        return e = w(e, n),
        y.each(t, function(t, n, r) {
            e(t, n, r) && i.push(t)
        }),
        i
    }
    ,
    y.reject = function(t, e, n) {
        return y.filter(t, y.negate(w(e)), n)
    }
    ,
    y.every = y.all = function(t, e, n) {
        e = w(e, n);
        for (var i = !E(t) && y.keys(t), r = (i || t).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (!e(t[s], s, t))
                return !1
        }
        return !0
    }
    ,
    y.some = y.any = function(t, e, n) {
        e = w(e, n);
        for (var i = !E(t) && y.keys(t), r = (i || t).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (e(t[s], s, t))
                return !0
        }
        return !1
    }
    ,
    y.contains = y.includes = y.include = function(t, e, n, i) {
        return E(t) || (t = y.values(t)),
        ("number" != typeof n || i) && (n = 0),
        y.indexOf(t, e, n) >= 0
    }
    ,
    y.invoke = function(t, e) {
        var n = c.call(arguments, 2)
          , i = y.isFunction(e);
        return y.map(t, function(t) {
            var r = i ? e : t[e];
            return null == r ? r : r.apply(t, n)
        })
    }
    ,
    y.pluck = function(t, e) {
        return y.map(t, y.property(e))
    }
    ,
    y.where = function(t, e) {
        return y.filter(t, y.matcher(e))
    }
    ,
    y.findWhere = function(t, e) {
        return y.find(t, y.matcher(e))
    }
    ,
    y.max = function(t, e, n) {
        var i, r, o = -Infinity, s = -Infinity;
        if (null == e && null != t)
            for (var a = 0, l = (t = E(t) ? t : y.values(t)).length; a < l; a++)
                (i = t[a]) > o && (o = i);
        else
            e = w(e, n),
            y.each(t, function(t, n, i) {
                ((r = e(t, n, i)) > s || r === -Infinity && o === -Infinity) && (o = t,
                s = r)
            });
        return o
    }
    ,
    y.min = function(t, e, n) {
        var i, r, o = Infinity, s = Infinity;
        if (null == e && null != t)
            for (var a = 0, l = (t = E(t) ? t : y.values(t)).length; a < l; a++)
                (i = t[a]) < o && (o = i);
        else
            e = w(e, n),
            y.each(t, function(t, n, i) {
                ((r = e(t, n, i)) < s || r === Infinity && o === Infinity) && (o = t,
                s = r)
            });
        return o
    }
    ,
    y.shuffle = function(t) {
        for (var e, n = E(t) ? t : y.values(t), i = n.length, r = Array(i), o = 0; o < i; o++)
            (e = y.random(0, o)) !== o && (r[o] = r[e]),
            r[e] = n[o];
        return r
    }
    ,
    y.sample = function(t, e, n) {
        return null == e || n ? (E(t) || (t = y.values(t)),
        t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e))
    }
    ,
    y.sortBy = function(t, e, n) {
        return e = w(e, n),
        y.pluck(y.map(t, function(t, n, i) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, i)
            }
        }).sort(function(t, e) {
            var n = t.criteria
              , i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n)
                    return 1;
                if (n < i || void 0 === i)
                    return -1
            }
            return t.index - e.index
        }), "value")
    }
    ;
    var T = function(t) {
        return function(e, n, i) {
            var r = {};
            return n = w(n, i),
            y.each(e, function(i, o) {
                var s = n(i, o, e);
                t(r, i, s)
            }),
            r
        }
    };
    y.groupBy = T(function(t, e, n) {
        y.has(t, n) ? t[n].push(e) : t[n] = [e]
    }),
    y.indexBy = T(function(t, e, n) {
        t[n] = e
    }),
    y.countBy = T(function(t, e, n) {
        y.has(t, n) ? t[n]++ : t[n] = 1
    }),
    y.toArray = function(t) {
        return t ? y.isArray(t) ? c.call(t) : E(t) ? y.map(t, y.identity) : y.values(t) : []
    }
    ,
    y.size = function(t) {
        return null == t ? 0 : E(t) ? t.length : y.keys(t).length
    }
    ,
    y.partition = function(t, e, n) {
        e = w(e, n);
        var i = []
          , r = [];
        return y.each(t, function(t, n, o) {
            (e(t, n, o) ? i : r).push(t)
        }),
        [i, r]
    }
    ,
    y.first = y.head = y.take = function(t, e, n) {
        if (null != t)
            return null == e || n ? t[0] : y.initial(t, t.length - e)
    }
    ,
    y.initial = function(t, e, n) {
        return c.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    }
    ,
    y.last = function(t, e, n) {
        if (null != t)
            return null == e || n ? t[t.length - 1] : y.rest(t, Math.max(0, t.length - e))
    }
    ,
    y.rest = y.tail = y.drop = function(t, e, n) {
        return c.call(t, null == e || n ? 1 : e)
    }
    ,
    y.compact = function(t) {
        return y.filter(t, y.identity)
    }
    ;
    var P = function(t, e, n, i) {
        for (var r = [], o = 0, s = i || 0, a = k(t); s < a; s++) {
            var l = t[s];
            if (E(l) && (y.isArray(l) || y.isArguments(l))) {
                e || (l = P(l, e, n));
                var u = 0
                  , c = l.length;
                for (r.length += c; u < c; )
                    r[o++] = l[u++]
            } else
                n || (r[o++] = l)
        }
        return r
    };
    y.flatten = function(t, e) {
        return P(t, e, !1)
    }
    ,
    y.without = function(t) {
        return y.difference(t, c.call(arguments, 1))
    }
    ,
    y.uniq = y.unique = function(t, e, n, i) {
        y.isBoolean(e) || (i = n,
        n = e,
        e = !1),
        null != n && (n = w(n, i));
        for (var r = [], o = [], s = 0, a = k(t); s < a; s++) {
            var l = t[s]
              , u = n ? n(l, s, t) : l;
            e ? (s && o === u || r.push(l),
            o = u) : n ? y.contains(o, u) || (o.push(u),
            r.push(l)) : y.contains(r, l) || r.push(l)
        }
        return r
    }
    ,
    y.union = function() {
        return y.uniq(P(arguments, !0, !0))
    }
    ,
    y.intersection = function(t) {
        for (var e = [], n = arguments.length, i = 0, r = k(t); i < r; i++) {
            var o = t[i];
            if (!y.contains(e, o)) {
                for (var s = 1; s < n && y.contains(arguments[s], o); s++)
                    ;
                s === n && e.push(o)
            }
        }
        return e
    }
    ,
    y.difference = function(t) {
        var e = P(arguments, !0, !0, 1);
        return y.filter(t, function(t) {
            return !y.contains(e, t)
        })
    }
    ,
    y.zip = function() {
        return y.unzip(arguments)
    }
    ,
    y.unzip = function(t) {
        for (var e = t && y.max(t, k).length || 0, n = Array(e), i = 0; i < e; i++)
            n[i] = y.pluck(t, i);
        return n
    }
    ,
    y.object = function(t, e) {
        for (var n = {}, i = 0, r = k(t); i < r; i++)
            e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    }
    ,
    y.findIndex = e(1),
    y.findLastIndex = e(-1),
    y.sortedIndex = function(t, e, n, i) {
        for (var r = (n = w(n, i, 1))(e), o = 0, s = k(t); o < s; ) {
            var a = Math.floor((o + s) / 2);
            n(t[a]) < r ? o = a + 1 : s = a
        }
        return o
    }
    ,
    y.indexOf = n(1, y.findIndex, y.sortedIndex),
    y.lastIndexOf = n(-1, y.findLastIndex),
    y.range = function(t, e, n) {
        null == e && (e = t || 0,
        t = 0),
        n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; o < i; o++,
        t += n)
            r[o] = t;
        return r
    }
    ;
    var A = function(t, e, n, i, r) {
        if (!(i instanceof e))
            return t.apply(n, r);
        var o = _(t.prototype)
          , s = t.apply(o, r);
        return y.isObject(s) ? s : o
    };
    y.bind = function(t, e) {
        if (m && t.bind === m)
            return m.apply(t, c.call(arguments, 1));
        if (!y.isFunction(t))
            throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2)
          , i = function() {
            return A(t, i, e, this, n.concat(c.call(arguments)))
        };
        return i
    }
    ,
    y.partial = function(t) {
        var e = c.call(arguments, 1)
          , n = function() {
            for (var i = 0, r = e.length, o = Array(r), s = 0; s < r; s++)
                o[s] = e[s] === y ? arguments[i++] : e[s];
            for (; i < arguments.length; )
                o.push(arguments[i++]);
            return A(t, n, this, this, o)
        };
        return n
    }
    ,
    y.bindAll = function(t) {
        var e, n, i = arguments.length;
        if (i <= 1)
            throw new Error("bindAll must be passed function names");
        for (e = 1; e < i; e++)
            t[n = arguments[e]] = y.bind(t[n], t);
        return t
    }
    ,
    y.memoize = function(t, e) {
        var n = function(i) {
            var r = n.cache
              , o = "" + (e ? e.apply(this, arguments) : i);
            return y.has(r, o) || (r[o] = t.apply(this, arguments)),
            r[o]
        };
        return n.cache = {},
        n
    }
    ,
    y.delay = function(t, e) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    }
    ,
    y.defer = y.partial(y.delay, y, 1),
    y.throttle = function(t, e, n) {
        var i, r, o, s = null, a = 0;
        n || (n = {});
        var l = function() {
            a = !1 === n.leading ? 0 : y.now(),
            s = null,
            o = t.apply(i, r),
            s || (i = r = null)
        };
        return function() {
            var u = y.now();
            a || !1 !== n.leading || (a = u);
            var c = e - (u - a);
            return i = this,
            r = arguments,
            c <= 0 || c > e ? (s && (clearTimeout(s),
            s = null),
            a = u,
            o = t.apply(i, r),
            s || (i = r = null)) : s || !1 === n.trailing || (s = setTimeout(l, c)),
            o
        }
    }
    ,
    y.debounce = function(t, e, n) {
        var i, r, o, s, a, l = function() {
            var u = y.now() - s;
            u < e && u >= 0 ? i = setTimeout(l, e - u) : (i = null,
            n || (a = t.apply(o, r),
            i || (o = r = null)))
        };
        return function() {
            o = this,
            r = arguments,
            s = y.now();
            var u = n && !i;
            return i || (i = setTimeout(l, e)),
            u && (a = t.apply(o, r),
            o = r = null),
            a
        }
    }
    ,
    y.wrap = function(t, e) {
        return y.partial(e, t)
    }
    ,
    y.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }
    ,
    y.compose = function() {
        var t = arguments
          , e = t.length - 1;
        return function() {
            for (var n = e, i = t[e].apply(this, arguments); n--; )
                i = t[n].call(this, i);
            return i
        }
    }
    ,
    y.after = function(t, e) {
        return function() {
            if (--t < 1)
                return e.apply(this, arguments)
        }
    }
    ,
    y.before = function(t, e) {
        var n;
        return function() {
            return --t > 0 && (n = e.apply(this, arguments)),
            t <= 1 && (e = null),
            n
        }
    }
    ,
    y.once = y.partial(y.before, 2);
    var I = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , D = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(t) {
        if (!y.isObject(t))
            return [];
        if (f)
            return f(t);
        var e = [];
        for (var n in t)
            y.has(t, n) && e.push(n);
        return I && i(t, e),
        e
    }
    ,
    y.allKeys = function(t) {
        if (!y.isObject(t))
            return [];
        var e = [];
        for (var n in t)
            e.push(n);
        return I && i(t, e),
        e
    }
    ,
    y.values = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++)
            i[r] = t[e[r]];
        return i
    }
    ,
    y.mapObject = function(t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), o = r.length, s = {}, a = 0; a < o; a++)
            s[i = r[a]] = e(t[i], i, t);
        return s
    }
    ,
    y.pairs = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++)
            i[r] = [e[r], t[e[r]]];
        return i
    }
    ,
    y.invert = function(t) {
        for (var e = {}, n = y.keys(t), i = 0, r = n.length; i < r; i++)
            e[t[n[i]]] = n[i];
        return e
    }
    ,
    y.functions = y.methods = function(t) {
        var e = [];
        for (var n in t)
            y.isFunction(t[n]) && e.push(n);
        return e.sort()
    }
    ,
    y.extend = x(y.allKeys),
    y.extendOwn = y.assign = x(y.keys),
    y.findKey = function(t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), o = 0, s = r.length; o < s; o++)
            if (e(t[i = r[o]], i, t))
                return i
    }
    ,
    y.pick = function(t, e, n) {
        var i, r, o = {}, s = t;
        if (null == s)
            return o;
        y.isFunction(e) ? (r = y.allKeys(s),
        i = b(e, n)) : (r = P(arguments, !1, !1, 1),
        i = function(t, e, n) {
            return e in n
        }
        ,
        s = Object(s));
        for (var a = 0, l = r.length; a < l; a++) {
            var u = r[a]
              , c = s[u];
            i(c, u, s) && (o[u] = c)
        }
        return o
    }
    ,
    y.omit = function(t, e, n) {
        if (y.isFunction(e))
            e = y.negate(e);
        else {
            var i = y.map(P(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !y.contains(i, e)
            }
        }
        return y.pick(t, e, n)
    }
    ,
    y.defaults = x(y.allKeys, !0),
    y.create = function(t, e) {
        var n = _(t);
        return e && y.extendOwn(n, e),
        n
    }
    ,
    y.clone = function(t) {
        return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({}, t) : t
    }
    ,
    y.tap = function(t, e) {
        return e(t),
        t
    }
    ,
    y.isMatch = function(t, e) {
        var n = y.keys(e)
          , i = n.length;
        if (null == t)
            return !i;
        for (var r = Object(t), o = 0; o < i; o++) {
            var s = n[o];
            if (e[s] !== r[s] || !(s in r))
                return !1
        }
        return !0
    }
    ;
    var N = function(t, e, n, i) {
        if (t === e)
            return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e)
            return t === e;
        t instanceof y && (t = t._wrapped),
        e instanceof y && (e = e._wrapped);
        var r = h.call(t);
        if (r !== h.call(e))
            return !1;
        switch (r) {
        case "[object RegExp]":
        case "[object String]":
            return "" + t == "" + e;
        case "[object Number]":
            return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +e
        }
        var o = "[object Array]" === r;
        if (!o) {
            if ("object" != typeof t || "object" != typeof e)
                return !1;
            var s = t.constructor
              , a = e.constructor;
            if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor"in t && "constructor"in e)
                return !1
        }
        i = i || [];
        for (var l = (n = n || []).length; l--; )
            if (n[l] === t)
                return i[l] === e;
        if (n.push(t),
        i.push(e),
        o) {
            if ((l = t.length) !== e.length)
                return !1;
            for (; l--; )
                if (!N(t[l], e[l], n, i))
                    return !1
        } else {
            var u, c = y.keys(t);
            if (l = c.length,
            y.keys(e).length !== l)
                return !1;
            for (; l--; )
                if (u = c[l],
                !y.has(e, u) || !N(t[u], e[u], n, i))
                    return !1
        }
        return n.pop(),
        i.pop(),
        !0
    };
    y.isEqual = function(t, e) {
        return N(t, e)
    }
    ,
    y.isEmpty = function(t) {
        return null == t || (E(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t)) ? 0 === t.length : 0 === y.keys(t).length)
    }
    ,
    y.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }
    ,
    y.isArray = p || function(t) {
        return "[object Array]" === h.call(t)
    }
    ,
    y.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }
    ,
    y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        y["is" + t] = function(e) {
            return h.call(e) === "[object " + t + "]"
        }
    }),
    y.isArguments(arguments) || (y.isArguments = function(t) {
        return y.has(t, "callee")
    }
    ),
    "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(t) {
        return "function" == typeof t || !1
    }
    ),
    y.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }
    ,
    y.isNaN = function(t) {
        return y.isNumber(t) && t !== +t
    }
    ,
    y.isBoolean = function(t) {
        return !0 === t || !1 === t || "[object Boolean]" === h.call(t)
    }
    ,
    y.isNull = function(t) {
        return null === t
    }
    ,
    y.isUndefined = function(t) {
        return void 0 === t
    }
    ,
    y.has = function(t, e) {
        return null != t && d.call(t, e)
    }
    ,
    y.noConflict = function() {
        return r._ = o,
        this
    }
    ,
    y.identity = function(t) {
        return t
    }
    ,
    y.constant = function(t) {
        return function() {
            return t
        }
    }
    ,
    y.noop = function() {}
    ,
    y.property = C,
    y.propertyOf = function(t) {
        return null == t ? function() {}
        : function(e) {
            return t[e]
        }
    }
    ,
    y.matcher = y.matches = function(t) {
        return t = y.extendOwn({}, t),
        function(e) {
            return y.isMatch(e, t)
        }
    }
    ,
    y.times = function(t, e, n) {
        var i = Array(Math.max(0, t));
        e = b(e, n, 1);
        for (var r = 0; r < t; r++)
            i[r] = e(r);
        return i
    }
    ,
    y.random = function(t, e) {
        return null == e && (e = t,
        t = 0),
        t + Math.floor(Math.random() * (e - t + 1))
    }
    ,
    y.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , O = y.invert(L)
      , $ = function(t) {
        var e = function(e) {
            return t[e]
        }
          , n = "(?:" + y.keys(t).join("|") + ")"
          , i = RegExp(n)
          , r = RegExp(n, "g");
        return function(t) {
            return t = null == t ? "" : "" + t,
            i.test(t) ? t.replace(r, e) : t
        }
    };
    y.escape = $(L),
    y.unescape = $(O),
    y.result = function(t, e, n) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = n),
        y.isFunction(i) ? i.call(t) : i
    }
    ;
    var j = 0;
    y.uniqueId = function(t) {
        var e = ++j + "";
        return t ? t + e : e
    }
    ,
    y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var R = /(.)^/
      , F = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , M = /\\|'|\r|\n|\u2028|\u2029/g
      , B = function(t) {
        return "\\" + F[t]
    };
    y.template = function(t, e, n) {
        !e && n && (e = n),
        e = y.defaults({}, e, y.templateSettings);
        var i = RegExp([(e.escape || R).source, (e.interpolate || R).source, (e.evaluate || R).source].join("|") + "|$", "g")
          , r = 0
          , o = "__p+='";
        t.replace(i, function(e, n, i, s, a) {
            return o += t.slice(r, a).replace(M, B),
            r = a + e.length,
            n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"),
            e
        }),
        o += "';\n",
        e.variable || (o = "with(obj||{}){\n" + o + "}\n"),
        o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj","_",o)
        } catch (u) {
            throw u.source = o,
            u
        }
        var a = function(t) {
            return s.call(this, t, y)
        }
          , l = e.variable || "obj";
        return a.source = "function(" + l + "){\n" + o + "}",
        a
    }
    ,
    y.chain = function(t) {
        var e = y(t);
        return e._chain = !0,
        e
    }
    ;
    var H = function(t, e) {
        return t._chain ? y(e).chain() : e
    };
    y.mixin = function(t) {
        y.each(y.functions(t), function(e) {
            var n = y[e] = t[e];
            y.prototype[e] = function() {
                var t = [this._wrapped];
                return u.apply(t, arguments),
                H(this, n.apply(y, t))
            }
        })
    }
    ,
    y.mixin(y),
    y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments),
            "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
            H(this, n)
        }
    }),
    y.each(["concat", "join", "slice"], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            return H(this, e.apply(this._wrapped, arguments))
        }
    }),
    y.prototype.value = function() {
        return this._wrapped
    }
    ,
    y.prototype.valueOf = y.prototype.toJSON = y.prototype.value,
    y.prototype.toString = function() {
        return "" + this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}
.call(this),
_.mixin({
    deepExtend: deepExtend
}),
function() {
    "use strict";
    var t = function(t, e) {
        var n;
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var i = t(document);
        t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form:not([data-turbo=true])",
            formInputClickSelector: "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return t("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return t("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(t) {
                var e = n.csrfToken();
                e && t.setRequestHeader("X-CSRF-Token", e)
            },
            refreshCSRFTokens: function() {
                t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(e, n, i) {
                var r = t.Event(n);
                return e.trigger(r, i),
                !1 !== r.result
            },
            confirm: function(t) {
                return confirm(t)
            },
            ajax: function(e) {
                return t.ajax(e)
            },
            href: function(t) {
                return t[0].href
            },
            isRemote: function(t) {
                return t.data("remote") !== e && !1 !== t.data("remote")
            },
            handleRemote: function(i) {
                var r, o, s, a, l, u;
                if (n.fire(i, "ajax:before")) {
                    if (a = i.data("with-credentials") || null,
                    l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType,
                    i.is("form")) {
                        r = i.data("ujs:submit-button-formmethod") || i.attr("method"),
                        o = i.data("ujs:submit-button-formaction") || i.attr("action"),
                        s = t(i[0]).serializeArray();
                        var c = i.data("ujs:submit-button");
                        c && (s.push(c),
                        i.data("ujs:submit-button", null)),
                        i.data("ujs:submit-button-formmethod", null),
                        i.data("ujs:submit-button-formaction", null)
                    } else
                        i.is(n.inputChangeSelector) ? (r = i.data("method"),
                        o = i.data("url"),
                        s = i.serialize(),
                        i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get",
                        o = i.data("url"),
                        s = i.serialize(),
                        i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"),
                        o = n.href(i),
                        s = i.data("params") || null);
                    return u = {
                        type: r || "GET",
                        data: s,
                        dataType: l,
                        beforeSend: function(t, r) {
                            if (r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script),
                            !n.fire(i, "ajax:beforeSend", [t, r]))
                                return !1;
                            i.trigger("ajax:send", t)
                        },
                        success: function(t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        },
                        complete: function(t, e) {
                            i.trigger("ajax:complete", [t, e])
                        },
                        error: function(t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        },
                        crossDomain: n.isCrossDomain(o)
                    },
                    a && (u.xhrFields = {
                        withCredentials: a
                    }),
                    o && (u.url = o),
                    n.ajax(u)
                }
                return !1
            },
            isCrossDomain: function(t) {
                var e = document.createElement("a");
                e.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = t,
                    n.href = n.href,
                    !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var r = n.href(i)
                  , o = i.data("method")
                  , s = i.attr("target")
                  , a = n.csrfToken()
                  , l = n.csrfParam()
                  , u = t('<form method="post" action="' + r + '"></form>')
                  , c = '<input name="_method" value="' + o + '" type="hidden" />';
                l === e || a === e || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
                s && u.attr("target", s),
                u.hide().append(c).appendTo("body"),
                u.submit()
            },
            formElements: function(e, n) {
                return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
            },
            disableFormElements: function(e) {
                n.formElements(e, n.disableSelector).each(function() {
                    n.disableFormElement(t(this))
                })
            },
            disableFormElement: function(t) {
                var n, i;
                n = t.is("button") ? "html" : "val",
                (i = t.data("disable-with")) !== e && (t.data("ujs:enable-with", t[n]()),
                t[n](i)),
                t.prop("disabled", !0),
                t.data("ujs:disabled", !0)
            },
            enableFormElements: function(e) {
                n.formElements(e, n.enableSelector).each(function() {
                    n.enableFormElement(t(this))
                })
            },
            enableFormElement: function(t) {
                var n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")),
                t.removeData("ujs:enable-with")),
                t.prop("disabled", !1),
                t.removeData("ujs:disabled")
            },
            allowAction: function(t) {
                var e, i = t.data("confirm"), r = !1;
                if (!i)
                    return !0;
                if (n.fire(t, "confirm")) {
                    try {
                        r = n.confirm(i)
                    } catch (o) {
                        (console.error || console.log).call(console, o.stack || o)
                    }
                    e = n.fire(t, "confirm:complete", [r])
                }
                return r && e
            },
            blankInputs: function(e, n, i) {
                var r, o, s, a = t(), l = n || "input,textarea", u = e.find(l), c = {};
                return u.each(function() {
                    (r = t(this)).is("input[type=radio]") ? (s = r.attr("name"),
                    c[s] || (0 === e.find('input[type=radio]:checked[name="' + s + '"]').length && (o = e.find('input[type=radio][name="' + s + '"]'),
                    a = a.add(o)),
                    c[s] = s)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (a = a.add(r))
                }),
                !!a.length && a
            },
            nonBlankInputs: function(t, e) {
                return n.blankInputs(t, e, !0)
            },
            stopEverything: function(e) {
                return t(e.target).trigger("ujs:everythingStopped"),
                e.stopImmediatePropagation(),
                !1
            },
            disableElement: function(t) {
                var i = t.data("disable-with");
                i !== e && (t.data("ujs:enable-with", t.html()),
                t.html(i)),
                t.on("click.railsDisable", function(t) {
                    return n.stopEverything(t)
                }),
                t.data("ujs:disabled", !0)
            },
            enableElement: function(t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")),
                t.removeData("ujs:enable-with")),
                t.off("click.railsDisable"),
                t.removeData("ujs:disabled")
            }
        },
        n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
            t.crossDomain || n.CSRFProtection(i)
        }),
        t(window).on("pageshow.rails", function() {
            t(t.rails.enableSelector).each(function() {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableFormElement(e)
            }),
            t(t.rails.linkDisableSelector).each(function() {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableElement(e)
            })
        }),
        i.on("ajax:complete", n.linkDisableSelector, function() {
            n.enableElement(t(this))
        }),
        i.on("ajax:complete", n.buttonDisableSelector, function() {
            n.enableFormElement(t(this))
        }),
        i.on("click.rails", n.linkClickSelector, function(e) {
            var i = t(this)
              , r = i.data("method")
              , o = i.data("params")
              , s = e.metaKey || e.ctrlKey;
            if (!n.allowAction(i))
                return n.stopEverything(e);
            if (!s && i.is(n.linkDisableSelector) && n.disableElement(i),
            n.isRemote(i)) {
                if (s && (!r || "GET" === r) && !o)
                    return !0;
                var a = n.handleRemote(i);
                return !1 === a ? n.enableElement(i) : a.fail(function() {
                    n.enableElement(i)
                }),
                !1
            }
            return r ? (n.handleMethod(i),
            !1) : void 0
        }),
        i.on("click.rails", n.buttonClickSelector, function(e) {
            var i = t(this);
            if (!n.allowAction(i) || !n.isRemote(i))
                return n.stopEverything(e);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return !1 === r ? n.enableFormElement(i) : r.fail(function() {
                n.enableFormElement(i)
            }),
            !1
        }),
        i.on("change.rails", n.inputChangeSelector, function(e) {
            var i = t(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i),
            !1) : n.stopEverything(e)
        }),
        i.on("submit.rails", n.formSubmitSelector, function(i) {
            var r, o, s = t(this), a = n.isRemote(s);
            if (!n.allowAction(s))
                return n.stopEverything(i);
            if (s.attr("novalidate") === e)
                if (s.data("ujs:formnovalidate-button") === e) {
                    if ((r = n.blankInputs(s, n.requiredInputSelector, !1)) && n.fire(s, "ajax:aborted:required", [r]))
                        return n.stopEverything(i)
                } else
                    s.data("ujs:formnovalidate-button", e);
            if (a) {
                if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(s)
                    }, 13);
                    var l = n.fire(s, "ajax:aborted:file", [o]);
                    return l || setTimeout(function() {
                        n.enableFormElements(s)
                    }, 13),
                    l
                }
                return n.handleRemote(s),
                !1
            }
            setTimeout(function() {
                n.disableFormElements(s)
            }, 13)
        }),
        i.on("click.rails", n.formInputClickSelector, function(e) {
            var i = t(this);
            if (!n.allowAction(i))
                return n.stopEverything(e);
            var r = i.attr("name")
              , o = r ? {
                name: r,
                value: i.val()
            } : null
              , s = i.closest("form");
            0 === s.length && (s = t("#" + i.attr("form"))),
            s.data("ujs:submit-button", o),
            s.data("ujs:formnovalidate-button", i.attr("formnovalidate")),
            s.data("ujs:submit-button-formaction", i.attr("formaction")),
            s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }),
        i.on("ajax:send.rails", n.formSubmitSelector, function(e) {
            this === e.target && n.disableFormElements(t(this))
        }),
        i.on("ajax:complete.rails", n.formSubmitSelector, function(e) {
            this === e.target && n.enableFormElements(t(this))
        }),
        t(function() {
            n.refreshCSRFTokens()
        }))
    };
    window.jQuery ? t(jQuery) : "object" == typeof exports && "object" == typeof module && (module.exports = t)
}(),
function(t, e, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(i) {
        return n(i, t, e),
        i.mobile
    }) : n(t.jQuery, t, e)
}(this, document, function(t, e, n) {
    var i, r;
    !function(t, e, n, i) {
        function r(t) {
            for (; t && "undefined" != typeof t.originalEvent; )
                t = t.originalEvent;
            return t
        }
        function o(e, n) {
            var o, s, a, l, u, c, h, d, p, f = e.type;
            if ((e = t.Event(e)).type = n,
            o = e.originalEvent,
            s = t.event.props,
            f.search(/^(mouse|click)/) > -1 && (s = A),
            o)
                for (h = s.length; h; )
                    e[l = s[--h]] = o[l];
            if (f.search(/mouse(down|up)|click/) > -1 && !e.which && (e.which = 1),
            -1 !== f.search(/^touch/) && (f = (a = r(o)).touches,
            u = a.changedTouches,
            c = f && f.length ? f[0] : u && u.length ? u[0] : i))
                for (d = 0,
                p = T.length; d < p; d++)
                    e[l = T[d]] = c[l];
            return e
        }
        function s(e) {
            for (var n, i, r = {}; e; ) {
                for (i in n = t.data(e, S))
                    n[i] && (r[i] = r.hasVirtualBinding = !0);
                e = e.parentNode
            }
            return r
        }
        function a(e, n) {
            for (var i; e; ) {
                if ((i = t.data(e, S)) && (!n || i[n]))
                    return e;
                e = e.parentNode
            }
            return null
        }
        function l() {
            R = !1
        }
        function u() {
            R = !0
        }
        function c() {
            H = 0,
            $.length = 0,
            j = !1,
            u()
        }
        function h() {
            l()
        }
        function d() {
            p(),
            D = setTimeout(function() {
                D = 0,
                c()
            }, t.vmouse.resetTimerDuration)
        }
        function p() {
            D && (clearTimeout(D),
            D = 0)
        }
        function f(e, n, i) {
            var r;
            return (i && i[e] || !i && a(n.target, e)) && (r = o(n, e),
            t(n.target).trigger(r)),
            r
        }
        function m(e) {
            var n = t.data(e.target, k);
            if (!(j || H && H === n)) {
                var i = f("v" + e.type, e);
                i && (i.isDefaultPrevented() && e.preventDefault(),
                i.isPropagationStopped() && e.stopPropagation(),
                i.isImmediatePropagationStopped() && e.stopImmediatePropagation())
            }
        }
        function g(e) {
            var n, i, o = r(e).touches;
            if (o && 1 === o.length && (i = s(n = e.target)).hasVirtualBinding) {
                H = B++,
                t.data(n, k, H),
                p(),
                h(),
                O = !1;
                var a = r(e).touches[0];
                N = a.pageX,
                L = a.pageY,
                f("vmouseover", e, i),
                f("vmousedown", e, i)
            }
        }
        function v(t) {
            R || (O || f("vmousecancel", t, s(t.target)),
            O = !0,
            d())
        }
        function y(e) {
            if (!R) {
                var n = r(e).touches[0]
                  , i = O
                  , o = t.vmouse.moveDistanceThreshold
                  , a = s(e.target);
                (O = O || Math.abs(n.pageX - N) > o || Math.abs(n.pageY - L) > o) && !i && f("vmousecancel", e, a),
                f("vmousemove", e, a),
                d()
            }
        }
        function b(t) {
            if (!R) {
                u();
                var e, n = s(t.target);
                if (f("vmouseup", t, n),
                !O) {
                    var i = f("vclick", t, n);
                    i && i.isDefaultPrevented() && (e = r(t).changedTouches[0],
                    $.push({
                        touchID: H,
                        x: e.clientX,
                        y: e.clientY
                    }),
                    j = !0)
                }
                f("vmouseout", t, n),
                O = !1,
                d()
            }
        }
        function w(e) {
            var n, i = t.data(e, S);
            if (i)
                for (n in i)
                    if (i[n])
                        return !0;
            return !1
        }
        function x() {}
        function _(e) {
            var n = e.substr(1);
            return {
                setup: function() {
                    w(this) || t.data(this, S, {}),
                    t.data(this, S)[e] = !0,
                    I[e] = (I[e] || 0) + 1,
                    1 === I[e] && M.bind(n, m),
                    t(this).bind(n, x),
                    F && (I.touchstart = (I.touchstart || 0) + 1,
                    1 === I.touchstart && M.bind("touchstart", g).bind("touchend", b).bind("touchmove", y).bind("scroll", v))
                },
                teardown: function() {
                    --I[e],
                    I[e] || M.unbind(n, m),
                    F && (--I.touchstart,
                    I.touchstart || M.unbind("touchstart", g).unbind("touchmove", y).unbind("touchend", b).unbind("scroll", v));
                    var i = t(this)
                      , r = t.data(this, S);
                    r && (r[e] = !1),
                    i.unbind(n, x),
                    w(this) || i.removeData(S)
                }
            }
        }
        var C, S = "virtualMouseBindings", k = "virtualTouchID", E = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), T = "clientX clientY pageX pageY screenX screenY".split(" "), P = t.event.mouseHooks ? t.event.mouseHooks.props : [], A = t.event.props.concat(P), I = {}, D = 0, N = 0, L = 0, O = !1, $ = [], j = !1, R = !1, F = "addEventListener"in n, M = t(n), B = 1, H = 0;
        t.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };
        for (var q = 0; q < E.length; q++)
            t.event.special[E[q]] = _(E[q]);
        F && n.addEventListener("click", function(e) {
            var n, i, r, o, s, a = $.length, l = e.target;
            if (a)
                for (n = e.clientX,
                i = e.clientY,
                C = t.vmouse.clickDistanceThreshold,
                r = l; r; ) {
                    for (o = 0; o < a; o++)
                        if (s = $[o],
                        0,
                        r === l && Math.abs(s.x - n) < C && Math.abs(s.y - i) < C || t.data(r, k) === s.touchID)
                            return e.preventDefault(),
                            void e.stopPropagation();
                    r = r.parentNode
                }
        }, !0)
    }(t, 0, n),
    t.mobile = {},
    r = {
        touch: "ontouchend"in n
    },
    (i = t).mobile.support = i.mobile.support || {},
    i.extend(i.support, r),
    i.extend(i.mobile.support, r),
    function(t, e, i) {
        function r(e, n, i) {
            var r = i.type;
            i.type = n,
            t.event.dispatch.call(e, i),
            i.type = r
        }
        var o = t(n);
        t.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(e, n) {
            t.fn[n] = function(t) {
                return t ? this.bind(n, t) : this.trigger(n)
            }
            ,
            t.attrFn && (t.attrFn[n] = !0)
        });
        var s = t.mobile.support.touch
          , a = "touchmove scroll"
          , l = s ? "touchstart" : "mousedown"
          , u = s ? "touchend" : "mouseup"
          , c = s ? "touchmove" : "mousemove";
        t.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function e(t, e) {
                    r(o, (n = e) ? "scrollstart" : "scrollstop", t)
                }
                var n, i, o = this;
                t(o).bind(a, function(r) {
                    t.event.special.scrollstart.enabled && (n || e(r, !0),
                    clearTimeout(i),
                    i = setTimeout(function() {
                        e(r, !1)
                    }, 50))
                })
            }
        },
        t.event.special.tap = {
            tapholdThreshold: 750,
            setup: function() {
                var e = this
                  , n = t(e);
                n.bind("vmousedown", function(i) {
                    function s() {
                        clearTimeout(u)
                    }
                    function a() {
                        s(),
                        n.unbind("vclick", l).unbind("vmouseup", s),
                        o.unbind("vmousecancel", a)
                    }
                    function l(t) {
                        a(),
                        c === t.target && r(e, "tap", t)
                    }
                    if (i.which && 1 !== i.which)
                        return !1;
                    var u, c = i.target;
                    i.originalEvent;
                    n.bind("vmouseup", s).bind("vclick", l),
                    o.bind("vmousecancel", a),
                    u = setTimeout(function() {
                        r(e, "taphold", t.Event("taphold", {
                            target: c
                        }))
                    }, t.event.special.tap.tapholdThreshold)
                })
            }
        },
        t.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 75,
            start: function(e) {
                var n = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                return {
                    time: (new Date).getTime(),
                    coords: [n.pageX, n.pageY],
                    origin: t(e.target)
                }
            },
            stop: function(t) {
                var e = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
                return {
                    time: (new Date).getTime(),
                    coords: [e.pageX, e.pageY]
                }
            },
            handleSwipe: function(e, n) {
                n.time - e.time < t.event.special.swipe.durationThreshold && Math.abs(e.coords[0] - n.coords[0]) > t.event.special.swipe.horizontalDistanceThreshold && Math.abs(e.coords[1] - n.coords[1]) < t.event.special.swipe.verticalDistanceThreshold && e.origin.trigger("swipe").trigger(e.coords[0] > n.coords[0] ? "swipeleft" : "swiperight")
            },
            setup: function() {
                var e = t(this);
                e.bind(l, function(n) {
                    function r(e) {
                        s && (o = t.event.special.swipe.stop(e),
                        Math.abs(s.coords[0] - o.coords[0]) > t.event.special.swipe.scrollSupressionThreshold && e.preventDefault())
                    }
                    var o, s = t.event.special.swipe.start(n);
                    e.bind(c, r).one(u, function() {
                        e.unbind(c, r),
                        s && o && t.event.special.swipe.handleSwipe(s, o),
                        s = o = i
                    })
                })
            }
        },
        t.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe",
            swiperight: "swipe"
        }, function(e, n) {
            t.event.special[e] = {
                setup: function() {
                    t(this).bind(n, t.noop)
                }
            }
        })
    }(t)
}),
/*! jQuery UI - v1.10.4 - 2018-10-06
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.sortable.js, jquery.ui.slider.js, jquery.ui.tabs.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function(t, e) {
    function n(e, n) {
        var r, o, s, a = e.nodeName.toLowerCase();
        return "area" === a ? (o = (r = e.parentNode).name,
        !(!e.href || !o || "map" !== r.nodeName.toLowerCase()) && (!!(s = t("img[usemap=#" + o + "]")[0]) && i(s))) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a && e.href || n) && i(e)
    }
    function i(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    var r, o, s = 0, a = /^ui-id-\d+$/;
    t.ui = t.ui || {},
    t.extend(t.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    t.fn.extend({
        focus: (r = t.fn.focus,
        function(e, n) {
            return "number" == typeof e ? this.each(function() {
                var i = this;
                setTimeout(function() {
                    t(i).focus(),
                    n && n.call(i)
                }, e)
            }) : r.apply(this, arguments)
        }
        ),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(n) {
            if (n !== e)
                return this.css("zIndex", n);
            if (this.length)
                for (var i, r, o = t(this[0]); o.length && o[0] !== document; ) {
                    if (("absolute" === (i = o.css("position")) || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 1000010),
                    !isNaN(r) && 0 !== r))
                        return r;
                    o = o.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                a.test(this.id) && t(this).removeAttr("id")
            })
        }
    }),
    t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(n) {
                return !!t.data(n, e)
            }
        }) : function(e, n, i) {
            return !!t.data(e, i[3])
        }
        ,
        focusable: function(e) {
            return n(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var i = t.attr(e, "tabindex")
              , r = isNaN(i);
            return (r || i >= 0) && n(e, !r)
        }
    }),
    t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(n, i) {
        function r(e, n, i, r) {
            return t.each(o, function() {
                n -= parseFloat(t.css(e, "padding" + this)) || 0,
                i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                r && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
            }),
            n
        }
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
          , s = i.toLowerCase()
          , a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function(n) {
            return n === e ? a["inner" + i].call(this) : this.each(function() {
                t(this).css(s, r(this, n) + "px")
            })
        }
        ,
        t.fn["outer" + i] = function(e, n) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                t(this).css(s, r(this, e, !0, n) + "px")
            })
        }
    }),
    t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = (o = t.fn.removeData,
    function(e) {
        return arguments.length ? o.call(this, t.camelCase(e)) : o.call(this)
    }
    )),
    t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    t.support.selectstart = "onselectstart"in document.createElement("div"),
    t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    t.extend(t.ui, {
        plugin: {
            add: function(e, n, i) {
                var r, o = t.ui[e].prototype;
                for (r in i)
                    o.plugins[r] = o.plugins[r] || [],
                    o.plugins[r].push([n, i[r]])
            },
            call: function(t, e, n) {
                var i, r = t.plugins[e];
                if (r && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (i = 0; i < r.length; i++)
                        t.options[r[i][0]] && r[i][1].apply(t.element, n)
            }
        },
        hasScroll: function(e, n) {
            if ("hidden" === t(e).css("overflow"))
                return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop"
              , r = !1;
            return e[i] > 0 || (e[i] = 1,
            r = e[i] > 0,
            e[i] = 0,
            r)
        }
    })
}(jQuery),
function(t, e) {
    var n = 0
      , i = Array.prototype.slice
      , r = t.cleanData;
    t.cleanData = function(e) {
        for (var n, i = 0; null != (n = e[i]); i++)
            try {
                t(n).triggerHandler("remove")
            } catch (o) {}
        r(e)
    }
    ,
    t.widget = function(e, n, i) {
        var r, o, s, a, l = {}, u = e.split(".")[0];
        e = e.split(".")[1],
        r = u + "-" + e,
        i || (i = n,
        n = t.Widget),
        t.expr[":"][r.toLowerCase()] = function(e) {
            return !!t.data(e, r)
        }
        ,
        t[u] = t[u] || {},
        o = t[u][e],
        s = t[u][e] = function(t, e) {
            if (!this._createWidget)
                return new s(t,e);
            arguments.length && this._createWidget(t, e)
        }
        ,
        t.extend(s, o, {
            version: i.version,
            _proto: t.extend({}, i),
            _childConstructors: []
        }),
        (a = new n).options = t.widget.extend({}, a.options),
        t.each(i, function(e, i) {
            var r, o;
            t.isFunction(i) ? l[e] = (r = function() {
                return n.prototype[e].apply(this, arguments)
            }
            ,
            o = function(t) {
                return n.prototype[e].apply(this, t)
            }
            ,
            function() {
                var t, e = this._super, n = this._superApply;
                return this._super = r,
                this._superApply = o,
                t = i.apply(this, arguments),
                this._super = e,
                this._superApply = n,
                t
            }
            ) : l[e] = i
        }),
        s.prototype = t.widget.extend(a, {
            widgetEventPrefix: o && a.widgetEventPrefix || e
        }, l, {
            constructor: s,
            namespace: u,
            widgetName: e,
            widgetFullName: r
        }),
        o ? (t.each(o._childConstructors, function(e, n) {
            var i = n.prototype;
            t.widget(i.namespace + "." + i.widgetName, s, n._proto)
        }),
        delete o._childConstructors) : n._childConstructors.push(s),
        t.widget.bridge(e, s)
    }
    ,
    t.widget.extend = function(n) {
        for (var r, o, s = i.call(arguments, 1), a = 0, l = s.length; a < l; a++)
            for (r in s[a])
                o = s[a][r],
                s[a].hasOwnProperty(r) && o !== e && (t.isPlainObject(o) ? n[r] = t.isPlainObject(n[r]) ? t.widget.extend({}, n[r], o) : t.widget.extend({}, o) : n[r] = o);
        return n
    }
    ,
    t.widget.bridge = function(n, r) {
        var o = r.prototype.widgetFullName || n;
        t.fn[n] = function(s) {
            var a = "string" == typeof s
              , l = i.call(arguments, 1)
              , u = this;
            return s = !a && l.length ? t.widget.extend.apply(null, [s].concat(l)) : s,
            a ? this.each(function() {
                var i, r = t.data(this, o);
                return r ? t.isFunction(r[s]) && "_" !== s.charAt(0) ? (i = r[s].apply(r, l)) !== r && i !== e ? (u = i && i.jquery ? u.pushStack(i.get()) : i,
                !1) : void 0 : t.error("no such method '" + s + "' for " + n + " widget instance") : t.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + s + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(s || {})._init() : t.data(this, o, new r(s,this))
            }),
            u
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0],
            this.element = t(i),
            this.uuid = n++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            i !== this && (t.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy()
                }
            }),
            this.document = t(i.style ? i.ownerDocument : i.document || i),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(n, i) {
            var r, o, s, a = n;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof n)
                if (a = {},
                n = (r = n.split(".")).shift(),
                r.length) {
                    for (o = a[n] = t.widget.extend({}, this.options[n]),
                    s = 0; s < r.length - 1; s++)
                        o[r[s]] = o[r[s]] || {},
                        o = o[r[s]];
                    if (n = r.pop(),
                    1 === arguments.length)
                        return o[n] === e ? null : o[n];
                    o[n] = i
                } else {
                    if (1 === arguments.length)
                        return this.options[n] === e ? null : this.options[n];
                    a[n] = i
                }
            return this._setOptions(a),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e,
            "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(e, n, i) {
            var r, o = this;
            "boolean" != typeof e && (i = n,
            n = e,
            e = !1),
            i ? (n = r = t(n),
            this.bindings = this.bindings.add(n)) : (i = n,
            n = this.element,
            r = this.widget()),
            t.each(i, function(i, s) {
                function a() {
                    if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof s ? o[s] : s).apply(o, arguments)
                }
                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                var l = i.match(/^(\w+)\s*(.*)$/)
                  , u = l[1] + o.eventNamespace
                  , c = l[2];
                c ? r.delegate(c, u, a) : n.bind(u, a)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function n() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, n, i) {
            var r, o, s = this.options[e];
            if (i = i || {},
            (n = t.Event(n)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            n.target = this.element[0],
            o = n.originalEvent)
                for (r in o)
                    r in n || (n[r] = o[r]);
            return this.element.trigger(n, i),
            !(t.isFunction(s) && !1 === s.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, n) {
        t.Widget.prototype["_" + e] = function(i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var s, a = r ? !0 === r || "number" == typeof r ? n : r.effect || n : e;
            "number" == typeof (r = r || {}) && (r = {
                duration: r
            }),
            s = !t.isEmptyObject(r),
            r.complete = o,
            r.delay && i.delay(r.delay),
            s && t.effects && t.effects.effect[a] ? i[e](r) : a !== e && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
                t(this)[e](),
                o && o.call(i[0]),
                n()
            })
        }
    })
}(jQuery),
function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }),
    t.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === t.data(n.target, e.widgetName + ".preventClickEvent"))
                    return t.removeData(n.target, e.widgetName + ".preventClickEvent"),
                    n.stopImmediatePropagation(),
                    !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!e) {
                this._mouseStarted && this._mouseUp(n),
                this._mouseDownEvent = n;
                var i = this
                  , r = 1 === n.which
                  , o = !("string" != typeof this.options.cancel || !n.target.nodeName) && t(n.target).closest(this.options.cancel).length;
                return !(r && !o && this._mouseCapture(n)) || (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = !1 !== this._mouseStart(n),
                !this._mouseStarted) ? (n.preventDefault(),
                !0) : (!0 === t.data(n.target, this.widgetName + ".preventClickEvent") && t.removeData(n.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }
                ,
                t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                n.preventDefault(),
                e = !0,
                !0))
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e),
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e),
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
            !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(t) {
    function e(t, e, n) {
        return t > e && t < e + n
    }
    function n(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = !!this.items.length && ("x" === t.axis || n(this.items[0].item)),
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, n) {
            "disabled" === e ? (this.options[e] = n,
            this.widget().toggleClass("ui-sortable-disabled", !!n)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, n) {
            var i = null
              , r = !1
              , o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e),
            t(e.target).parents().each(function() {
                if (t.data(this, o.widgetName + "-item") === o)
                    return i = t(this),
                    !1
            }),
            t.data(e.target, o.widgetName + "-item") === o && (i = t(e.target)),
            !!i && (!(this.options.handle && !n && (t(this.options.handle, i).find("*").addBack().each(function() {
                this === e.target && (r = !0)
            }),
            !r)) && (this.currentItem = i,
            this._removeCurrentsFromItems(),
            !0))))
        },
        _mouseStart: function(e, n, i) {
            var r, o, s = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(e),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(e),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            s.containment && this._setContainment(),
            s.cursor && "auto" !== s.cursor && (o = this.document.find("body"),
            this.storedCursor = o.css("cursor"),
            o.css("cursor", s.cursor),
            this.storedStylesheet = t("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(o)),
            s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", s.opacity)),
            s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", s.zIndex)),
            this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !i)
                for (r = this.containers.length - 1; r >= 0; r--)
                    this.containers[r]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function(e) {
            var n, i, r, o, s = this.options, a = !1;
            for (this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed)),
            e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed))),
            !1 !== a && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            n = this.items.length - 1; n >= 0; n--)
                if (r = (i = this.items[n]).item[0],
                (o = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && !(r === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === r || t.contains(this.placeholder[0], r) || "semi-dynamic" === this.options.type && t.contains(this.element[0], r))) {
                    if (this.direction = 1 === o ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(i))
                        break;
                    this._rearrange(e, i),
                    this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(e, n) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e),
                this.options.revert) {
                    var i = this
                      , r = this.placeholder.offset()
                      , o = this.options.axis
                      , s = {};
                    o && "x" !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
                    o && "y" !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    t(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                        i._clear(e)
                    })
                } else
                    this._clear(e, n);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)),
                    this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(e) {
            var n = this._getItemsAsjQuery(e && e.connected)
              , i = [];
            return e = e || {},
            t(n).each(function() {
                var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]))
            }),
            !i.length && e.key && i.push(e.key + "="),
            i.join("&")
        },
        toArray: function(e) {
            var n = this._getItemsAsjQuery(e && e.connected)
              , i = [];
            return e = e || {},
            n.each(function() {
                i.push(t(e.item || this).attr(e.attribute || "id") || "")
            }),
            i
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left
              , n = e + this.helperProportions.width
              , i = this.positionAbs.top
              , r = i + this.helperProportions.height
              , o = t.left
              , s = o + t.width
              , a = t.top
              , l = a + t.height
              , u = this.offset.click.top
              , c = this.offset.click.left
              , h = "x" === this.options.axis || i + u > a && i + u < l
              , d = "y" === this.options.axis || e + c > o && e + c < s
              , p = h && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < s && a < i + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(t) {
            var n = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height)
              , i = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width)
              , r = n && i
              , o = this._getDragVerticalDirection()
              , s = this._getDragHorizontalDirection();
            return !!r && (this.floating ? s && "right" === s || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var n = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
              , i = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
              , r = this._getDragVerticalDirection()
              , o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && i || "left" === o && !i : r && ("down" === r && n || "up" === r && !n)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function n() {
                a.push(this)
            }
            var i, r, o, s, a = [], l = [], u = this._connectWith();
            if (u && e)
                for (i = u.length - 1; i >= 0; i--)
                    for (r = (o = t(u[i])).length - 1; r >= 0; r--)
                        (s = t.data(o[r], this.widgetFullName)) && s !== this && !s.options.disabled && l.push([t.isFunction(s.options.items) ? s.options.items.call(s.element) : t(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            i = l.length - 1; i >= 0; i--)
                l[i][0].each(n);
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [],
            this.containers = [this];
            var n, i, r, o, s, a, l, u, c = this.items, h = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)
                for (n = d.length - 1; n >= 0; n--)
                    for (i = (r = t(d[n])).length - 1; i >= 0; i--)
                        (o = t.data(r[i], this.widgetFullName)) && o !== this && !o.options.disabled && (h.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]),
                        this.containers.push(o));
            for (n = h.length - 1; n >= 0; n--)
                for (s = h[n][1],
                i = 0,
                u = (a = h[n][0]).length; i < u; i++)
                    (l = t(a[i])).data(this.widgetName + "-item", s),
                    c.push({
                        item: l,
                        instance: s,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(e) {
            var n, i, r, o;
            for (this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
            n = this.items.length - 1; n >= 0; n--)
                (i = this.items[n]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item,
                e || (i.width = r.outerWidth(),
                i.height = r.outerHeight()),
                o = r.offset(),
                i.left = o.left,
                i.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (n = this.containers.length - 1; n >= 0; n--)
                    o = this.containers[n].element.offset(),
                    this.containers[n].containerCache.left = o.left,
                    this.containers[n].containerCache.top = o.top,
                    this.containers[n].containerCache.width = this.containers[n].element.outerWidth(),
                    this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            var n, i = (e = e || this).options;
            i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder,
            i.placeholder = {
                element: function() {
                    var i = e.currentItem[0].nodeName.toLowerCase()
                      , r = t("<" + i + ">", e.document[0]).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === i ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(r)
                    }) : "img" === i && r.attr("src", e.currentItem.attr("src")),
                    n || r.css("visibility", "hidden"),
                    r
                },
                update: function(t, r) {
                    n && !i.forcePlaceholderSize || (r.height() || r.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
                    r.width() || r.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)),
            e.currentItem.after(e.placeholder),
            i.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(i) {
            var r, o, s, a, l, u, c, h, d, p, f = null, m = null;
            for (r = this.containers.length - 1; r >= 0; r--)
                if (!t.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) {
                        if (f && t.contains(this.containers[r].element[0], f.element[0]))
                            continue;
                        f = this.containers[r],
                        m = r
                    } else
                        this.containers[r].containerCache.over && (this.containers[r]._trigger("out", i, this._uiHash(this)),
                        this.containers[r].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length)
                    this.containers[m].containerCache.over || (this.containers[m]._trigger("over", i, this._uiHash(this)),
                    this.containers[m].containerCache.over = 1);
                else {
                    for (s = 1e4,
                    a = null,
                    l = (p = f.floating || n(this.currentItem)) ? "left" : "top",
                    u = p ? "width" : "height",
                    c = this.positionAbs[l] + this.offset.click[l],
                    o = this.items.length - 1; o >= 0; o--)
                        t.contains(this.containers[m].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (p && !e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height) || (h = this.items[o].item.offset()[l],
                        d = !1,
                        Math.abs(h - c) > Math.abs(h + this.items[o][u] - c) && (d = !0,
                        h += this.items[o][u]),
                        Math.abs(h - c) < s && (s = Math.abs(h - c),
                        a = this.items[o],
                        this.direction = d ? "up" : "down")));
                    if (!a && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[m])
                        return;
                    a ? this._rearrange(i, a, null, !0) : this._rearrange(i, null, this.containers[m].element, !0),
                    this._trigger("change", i, this._uiHash()),
                    this.containers[m]._trigger("change", i, this._uiHash(this)),
                    this.currentContainer = this.containers[m],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[m]._trigger("over", i, this._uiHash(this)),
                    this.containers[m].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var n = this.options
              , i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || t("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]),
            i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            i[0].style.width && !n.forceHelperSize || i.width(this.currentItem.width()),
            i[0].style.height && !n.forceHelperSize || i.height(this.currentItem.height()),
            i
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, n, i, r = this.options;
            "parent" === r.containment && (r.containment = this.helper[0].parentNode),
            "document" !== r.containment && "window" !== r.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === r.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === r.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(r.containment) || (e = t(r.containment)[0],
            n = t(r.containment).offset(),
            i = "hidden" !== t(e).css("overflow"),
            this.containment = [n.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, n) {
            n || (n = this.position);
            var i = "absolute" === e ? 1 : -1
              , r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
            }
        },
        _generatePosition: function(e) {
            var n, i, r = this.options, o = e.pageX, s = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
            e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top),
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
            e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)),
            r.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1],
            s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n,
            i = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0],
            o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)),
            {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function(t, e, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var r = this.counter;
            this._delay(function() {
                r === this.counter && this.refreshPositions(!i)
            })
        },
        _clear: function(t, e) {
            function n(t, e, n) {
                return function(i) {
                    n._trigger(t, i, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)
                    "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !e && r.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || r.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }),
            this !== this.currentContainer && (e || (r.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }),
            r.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            r.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            i = this.containers.length - 1; i >= 0; i--)
                e || r.push(n("deactivate", this, this.containers[i])),
                this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])),
                this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()),
                    i = 0; i < r.length; i++)
                        r[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null,
            !e) {
                for (i = 0; i < r.length; i++)
                    r[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(e) {
            var n = e || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || t([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery),
function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var e, n, i = this.options, r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", s = [];
            for (n = i.values && i.values.length || 1,
            r.length > n && (r.slice(n).remove(),
            r = r.slice(0, n)),
            e = r.length; e < n; e++)
                s.push(o);
            this.handles = r.add(t(s.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options
              , n = "";
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element),
            n = "ui-slider-range ui-widget-header ui-corner-all"),
            this.range.addClass(n + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t),
            this._on(t, this._handleEvents),
            this._hoverable(t),
            this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var n, i, r, o, s, a, l, u = this, c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            n = {
                x: e.pageX,
                y: e.pageY
            },
            i = this._normValueFromMouse(n),
            r = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(e) {
                var n = Math.abs(i - u.values(e));
                (r > n || r === n && (e === u._lastChangedValue || u.values(e) === c.min)) && (r = n,
                o = t(this),
                s = e)
            }),
            !1 !== this._start(e, s) && (this._mouseSliding = !0,
            this._handleIndex = s,
            o.addClass("ui-state-active").focus(),
            a = o.offset(),
            l = !t(e.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - a.left - o.width() / 2,
                top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(e, s, i),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }
              , n = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, n),
            !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, n, i, r, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width,
            n = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
            n = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            (i = n / e) > 1 && (i = 1),
            i < 0 && (i = 0),
            "vertical" === this.orientation && (i = 1 - i),
            r = this._valueMax() - this._valueMin(),
            o = this._valueMin() + i * r,
            this._trimAlignValue(o)
        },
        _start: function(t, e) {
            var n = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(e),
            n.values = this.values()),
            this._trigger("start", t, n)
        },
        _slide: function(t, e, n) {
            var i, r, o;
            this.options.values && this.options.values.length ? (i = this.values(e ? 0 : 1),
            2 === this.options.values.length && !0 === this.options.range && (0 === e && n > i || 1 === e && n < i) && (n = i),
            n !== this.values(e) && ((r = this.values())[e] = n,
            o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: n,
                values: r
            }),
            i = this.values(e ? 0 : 1),
            !1 !== o && this.values(e, n))) : n !== this.value() && !1 !== (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: n
            })) && this.value(n)
        },
        _stop: function(t, e) {
            var n = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(e),
            n.values = this.values()),
            this._trigger("stop", t, n)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(e),
                n.values = this.values()),
                this._lastChangedValue = e,
                this._trigger("change", t, n)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t),
            this._refreshValue(),
            void this._change(null, 0)) : this._value()
        },
        values: function(e, n) {
            var i, r, o;
            if (arguments.length > 1)
                return this.options.values[e] = this._trimAlignValue(n),
                this._refreshValue(),
                void this._change(null, e);
            if (!arguments.length)
                return this._values();
            if (!t.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (i = this.options.values,
            r = arguments[0],
            o = 0; o < i.length; o += 1)
                i[o] = this._trimAlignValue(r[o]),
                this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, n) {
            var i, r = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === n ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            t.isArray(this.options.values) && (r = this.options.values.length),
            t.Widget.prototype._setOption.apply(this, arguments),
            e) {
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                i = 0; i < r; i += 1)
                    this._change(null, i);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0,
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, n, i;
            if (arguments.length)
                return e = this.options.values[t],
                e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (n = this.options.values.slice(),
                i = 0; i < n.length; i += 1)
                    n[i] = this._trimAlignValue(n[i]);
                return n
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin())
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1
              , n = (t - this._valueMin()) % e
              , i = t - n;
            return 2 * Math.abs(n) >= e && (i += n > 0 ? e : -e),
            parseFloat(i.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, n, i, r, o, s = this.options.range, a = this.options, l = this, u = !this._animateOff && a.animate, c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(i) {
                n = (l.values(i) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
                c["horizontal" === l.orientation ? "left" : "bottom"] = n + "%",
                t(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate),
                !0 === l.options.range && ("horizontal" === l.orientation ? (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: n + "%"
                }, a.animate),
                1 === i && l.range[u ? "animate" : "css"]({
                    width: n - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: n + "%"
                }, a.animate),
                1 === i && l.range[u ? "animate" : "css"]({
                    height: n - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))),
                e = n
            }) : (i = this.value(),
            r = this._valueMin(),
            o = this._valueMax(),
            n = o !== r ? (i - r) / (o - r) * 100 : 0,
            c["horizontal" === this.orientation ? "left" : "bottom"] = n + "%",
            this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate),
            "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: n + "%"
            }, a.animate),
            "max" === s && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: a.animate
            }),
            "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: n + "%"
            }, a.animate),
            "max" === s && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: a.animate
            }))
        },
        _handleEvents: {
            keydown: function(n) {
                var i, r, o, s = t(n.target).data("ui-slider-handle-index");
                switch (n.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (n.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    t(n.target).addClass("ui-state-active"),
                    !1 === this._start(n, s)))
                        return
                }
                switch (o = this.options.step,
                i = r = this.options.values && this.options.values.length ? this.values(s) : this.value(),
                n.keyCode) {
                case t.ui.keyCode.HOME:
                    r = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    r = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    r = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    r = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (i === this._valueMax())
                        return;
                    r = this._trimAlignValue(i + o);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i === this._valueMin())
                        return;
                    r = this._trimAlignValue(i - o)
                }
                this._slide(n, s, r)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var n = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(e, n),
                this._change(e, n),
                t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery),
function(t, e) {
    function n() {
        return ++r
    }
    function i(t) {
        return (t = t.cloneNode(!1)).hash.length > 1 && decodeURIComponent(t.href.replace(o, "")) === decodeURIComponent(location.href.replace(o, ""))
    }
    var r = 0
      , o = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var e = this
              , n = this.options;
            this.running = !1,
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this._processTabs(),
            n.active = this._initialActive(),
            t.isArray(n.disabled) && (n.disabled = t.unique(n.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()),
            !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(n.active) : this.active = t(),
            this._refresh(),
            this.active.length && this.load(n.active)
        },
        _initialActive: function() {
            var e = this.options.active
              , n = this.options.collapsible
              , i = location.hash.substring(1);
            return null === e && (i && this.tabs.each(function(n, r) {
                if (t(r).attr("aria-controls") === i)
                    return e = n,
                    !1
            }),
            null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            null !== e && -1 !== e || (e = !!this.tabs.length && 0)),
            !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !n && 0),
            !n && !1 === e && this.anchors.length && (e = 0),
            e
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(e) {
            var n = t(this.document[0].activeElement).closest("li")
              , i = this.tabs.index(n)
              , r = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                    i++;
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.LEFT:
                    r = !1,
                    i--;
                    break;
                case t.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case t.ui.keyCode.HOME:
                    i = 0;
                    break;
                case t.ui.keyCode.SPACE:
                    return e.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i);
                case t.ui.keyCode.ENTER:
                    return e.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i !== this.options.active && i);
                default:
                    return
                }
                e.preventDefault(),
                clearTimeout(this.activating),
                i = this._focusNextTab(i, r),
                e.ctrlKey || (n.attr("aria-selected", "false"),
                this.tabs.eq(i).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(),
            this.active.focus())
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(e, n) {
            function i() {
                return e > r && (e = 0),
                e < 0 && (e = r),
                e
            }
            for (var r = this.tabs.length - 1; -1 !== t.inArray(i(), this.options.disabled); )
                e = n ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e),
            this.tabs.eq(t).focus(),
            t
        },
        _setOption: function(t, e) {
            "active" !== t ? "disabled" !== t ? (this._super(t, e),
            "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e),
            e || !1 !== this.options.active || this._activate(0)),
            "event" === t && this._setupEvents(e),
            "heightStyle" === t && this._setupHeightStyle(e)) : this._setupDisabled(e) : this._activate(e)
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + n()
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options
              , n = this.tablist.children(":has(a[href])");
            e.disabled = t.map(n.filter(".ui-state-disabled"), function(t) {
                return n.index(t)
            }),
            this._processTabs(),
            !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1,
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1,
            this.active = t()),
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }),
            this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }),
            this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }),
            this.panels = t(),
            this.anchors.each(function(n, r) {
                var o, s, a, l = t(r).uniqueId().attr("id"), u = t(r).closest("li"), c = u.attr("aria-controls");
                i(r) ? (o = r.hash,
                s = e.element.find(e._sanitizeSelector(o))) : (o = "#" + (a = e._tabId(u)),
                (s = e.element.find(o)).length || (s = e._createPanel(a)).insertAfter(e.panels[n - 1] || e.tablist),
                s.attr("aria-live", "polite")),
                s.length && (e.panels = e.panels.add(s)),
                c && u.data("ui-tabs-aria-controls", c),
                u.attr({
                    "aria-controls": o.substring(1),
                    "aria-labelledby": l
                }),
                s.attr("aria-labelledby", l)
            }),
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var n, i = 0; n = this.tabs[i]; i++)
                !0 === e || -1 !== t.inArray(i, e) ? t(n).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(n).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function(e) {
            var n = {
                click: function(t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function(t, e) {
                n[e] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(this.anchors, n),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var n, i = this.element.parent();
            "fill" === e ? (n = i.height(),
            n -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var e = t(this)
                  , i = e.css("position");
                "absolute" !== i && "fixed" !== i && (n -= e.outerHeight(!0))
            }),
            this.element.children().not(this.panels).each(function() {
                n -= t(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                t(this).height(Math.max(0, n - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (n = 0,
            this.panels.each(function() {
                n = Math.max(n, t(this).height("").height())
            }).height(n))
        },
        _eventHandler: function(e) {
            var n = this.options
              , i = this.active
              , r = t(e.currentTarget).closest("li")
              , o = r[0] === i[0]
              , s = o && n.collapsible
              , a = s ? t() : this._getPanelForTab(r)
              , l = i.length ? this._getPanelForTab(i) : t()
              , u = {
                oldTab: i,
                oldPanel: l,
                newTab: s ? t() : r,
                newPanel: a
            };
            e.preventDefault(),
            r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || !1 === this._trigger("beforeActivate", e, u) || (n.active = !s && this.tabs.index(r),
            this.active = o ? t() : r,
            this.xhr && this.xhr.abort(),
            l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
            a.length && this.load(this.tabs.index(r), e),
            this._toggle(e, u))
        },
        _toggle: function(e, n) {
            function i() {
                o.running = !1,
                o._trigger("activate", e, n)
            }
            function r() {
                n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                s.length && o.options.show ? o._show(s, o.options.show, i) : (s.show(),
                i())
            }
            var o = this
              , s = n.newPanel
              , a = n.oldPanel;
            this.running = !0,
            a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                r()
            }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
            a.hide(),
            r()),
            a.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            n.oldTab.attr("aria-selected", "false"),
            s.length && a.length ? n.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            s.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }),
            n.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var n, i = this._findActive(e);
            i[0] !== this.active[0] && (i.length || (i = this.active),
            n = i.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return !1 === e ? t() : this.tabs.eq(e)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))),
            t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }),
            this.tabs.each(function() {
                var e = t(this)
                  , n = e.data("ui-tabs-aria-controls");
                n ? e.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(n) {
            var i = this.options.disabled;
            !1 !== i && (n === e ? i = !1 : (n = this._getIndex(n),
            i = t.isArray(i) ? t.map(i, function(t) {
                return t !== n ? t : null
            }) : t.map(this.tabs, function(t, e) {
                return e !== n ? e : null
            })),
            this._setupDisabled(i))
        },
        disable: function(n) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (n === e)
                    i = !0;
                else {
                    if (n = this._getIndex(n),
                    -1 !== t.inArray(n, i))
                        return;
                    i = t.isArray(i) ? t.merge([n], i).sort() : [n]
                }
                this._setupDisabled(i)
            }
        },
        load: function(e, n) {
            e = this._getIndex(e);
            var r = this
              , o = this.tabs.eq(e)
              , s = o.find(".ui-tabs-anchor")
              , a = this._getPanelForTab(o)
              , l = {
                tab: o,
                panel: a
            };
            i(s[0]) || (this.xhr = t.ajax(this._ajaxSettings(s, n, l)),
            this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"),
            a.attr("aria-busy", "true"),
            this.xhr.success(function(t) {
                setTimeout(function() {
                    a.html(t),
                    r._trigger("load", n, l)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && r.panels.stop(!1, !0),
                    o.removeClass("ui-tabs-loading"),
                    a.removeAttr("aria-busy"),
                    t === r.xhr && delete r.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(e, n, i) {
            var r = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, o) {
                    return r._trigger("beforeLoad", n, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, i))
                }
            }
        },
        _getPanelForTab: function(e) {
            var n = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n))
        }
    })
}(jQuery),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define(["exports", "jquery"], function(t, n) {
            return e(t, n)
        });
    else if ("undefined" != typeof exports) {
        var n = require("jquery");
        e(exports, n)
    } else
        e(t, t.jQuery || t.Zepto || t.ender || t.$)
}(this, function(t, e) {
    function n(t, n) {
        function r(t, e, n) {
            return t[e] = n,
            t
        }
        function o(t, e) {
            for (var n, o = t.match(i.key); (n = o.pop()) !== undefined; ) {
                if (i.push.test(n))
                    e = r([], s(t.replace(/\[\]$/, "")), e);
                else
                    i.fixed.test(n) ? e = r([], n, e) : i.named.test(n) && (e = r({}, n, e))
            }
            return e
        }
        function s(t) {
            return p[t] === undefined && (p[t] = 0),
            p[t]++
        }
        function a(t) {
            switch (e('[name="' + t.name + '"]', n).attr("type")) {
            case "checkbox":
                return "on" === t.value || t.value;
            default:
                return t.value
            }
        }
        function l(e) {
            if (!i.validate.test(e.name))
                return this;
            var n = o(e.name, a(e));
            return d = t.extend(!0, d, n),
            this
        }
        function u(e) {
            if (!t.isArray(e))
                throw new Error("formSerializer.addPairs expects an Array");
            for (var n = 0, i = e.length; n < i; n++)
                this.addPair(e[n]);
            return this
        }
        function c() {
            return d
        }
        function h() {
            return JSON.stringify(c())
        }
        var d = {}
          , p = {};
        this.addPair = l,
        this.addPairs = u,
        this.serialize = c,
        this.serializeJSON = h
    }
    var i = {
        validate: /^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,
        key: /[a-z0-9_]+|(?=\[\])/gi,
        push: /^$/,
        fixed: /^\d+$/,
        named: /^[a-z0-9_]+$/i
    };
    return n.patterns = i,
    n.serializeObject = function() {
        return this.length > 1 ? new Error("jquery-serialize-object can only serialize one form at a time") : new n(e,this).addPairs(this.serializeArray()).serialize()
    }
    ,
    n.serializeJSON = function() {
        return this.length > 1 ? new Error("jquery-serialize-object can only serialize one form at a time") : new n(e,this).addPairs(this.serializeArray()).serializeJSON()
    }
    ,
    "undefined" != typeof e.fn && (e.fn.serializeObject = n.serializeObject,
    e.fn.serializeJSON = n.serializeJSON),
    t.FormSerializer = n,
    n
}),
window.Modernizr = function(t, e, n) {
    function i(t) {
        y.cssText = t
    }
    function r(t, e) {
        return i(w.join(t + ";") + (e || ""))
    }
    function o(t, e) {
        return typeof t === e
    }
    function s(t, e) {
        return !!~("" + t).indexOf(e)
    }
    function a(t, e) {
        for (var i in t) {
            var r = t[i];
            if (!s(r, "-") && y[r] !== n)
                return "pfx" != e || r
        }
        return !1
    }
    function l(t, e, i) {
        for (var r in t) {
            var s = e[t[r]];
            if (s !== n)
                return !1 === i ? t[r] : o(s, "function") ? s.bind(i || e) : s
        }
        return !1
    }
    function u(t, e, n) {
        var i = t.charAt(0).toUpperCase() + t.slice(1)
          , r = (t + " " + _.join(i + " ") + i).split(" ");
        return o(e, "string") || o(e, "undefined") ? a(r, e) : l(r = (t + " " + C.join(i + " ") + i).split(" "), e, n)
    }
    var c, h, d = "2.6.2", p = {}, f = !0, m = e.documentElement, g = "modernizr", v = e.createElement(g), y = v.style, b = ":)", w = ({}.toString,
    " -webkit- -moz- -o- -ms- ".split(" ")), x = "Webkit Moz O ms", _ = x.split(" "), C = x.toLowerCase().split(" "), S = {}, k = [], E = k.slice, T = function(t, n, i, r) {
        var o, s, a, l, u = e.createElement("div"), c = e.body, h = c || e.createElement("body");
        if (parseInt(i, 10))
            for (; i--; )
                (a = e.createElement("div")).id = r ? r[i] : g + (i + 1),
                u.appendChild(a);
        return o = ["&#173;", '<style id="s', g, '">', t, "</style>"].join(""),
        u.id = g,
        (c ? u : h).innerHTML += o,
        h.appendChild(u),
        c || (h.style.background = "",
        h.style.overflow = "hidden",
        l = m.style.overflow,
        m.style.overflow = "hidden",
        m.appendChild(h)),
        s = n(u, t),
        c ? u.parentNode.removeChild(u) : (h.parentNode.removeChild(h),
        m.style.overflow = l),
        !!s
    }, P = function() {
        function t(t, r) {
            r = r || e.createElement(i[t] || "div");
            var s = (t = "on" + t)in r;
            return s || (r.setAttribute || (r = e.createElement("div")),
            r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""),
            s = o(r[t], "function"),
            o(r[t], "undefined") || (r[t] = n),
            r.removeAttribute(t))),
            r = null,
            s
        }
        var i = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return t
    }(), A = {}.hasOwnProperty;
    for (var I in h = o(A, "undefined") || o(A.call, "undefined") ? function(t, e) {
        return e in t && o(t.constructor.prototype[e], "undefined")
    }
    : function(t, e) {
        return A.call(t, e)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this;
        if ("function" != typeof e)
            throw new TypeError;
        var n = E.call(arguments, 1)
          , i = function() {
            if (this instanceof i) {
                var r = function() {};
                r.prototype = e.prototype;
                var o = new r
                  , s = e.apply(o, n.concat(E.call(arguments)));
                return Object(s) === s ? s : o
            }
            return e.apply(t, n.concat(E.call(arguments)))
        };
        return i
    }
    ),
    S.flexbox = function() {
        return u("flexWrap")
    }
    ,
    S.flexboxlegacy = function() {
        return u("boxDirection")
    }
    ,
    S.canvas = function() {
        var t = e.createElement("canvas");
        return !!t.getContext && !!t.getContext("2d")
    }
    ,
    S.canvastext = function() {
        return !!p.canvas && !!o(e.createElement("canvas").getContext("2d").fillText, "function")
    }
    ,
    S.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"),
        s(y.backgroundColor, "rgba")
    }
    ,
    S.hsla = function() {
        return i("background-color:hsla(120,40%,100%,.5)"),
        s(y.backgroundColor, "rgba") || s(y.backgroundColor, "hsla")
    }
    ,
    S.multiplebgs = function() {
        return i("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(y.background)
    }
    ,
    S.backgroundsize = function() {
        return u("backgroundSize")
    }
    ,
    S.borderimage = function() {
        return u("borderImage")
    }
    ,
    S.borderradius = function() {
        return u("borderRadius")
    }
    ,
    S.boxshadow = function() {
        return u("boxShadow")
    }
    ,
    S.textshadow = function() {
        return "" === e.createElement("div").style.textShadow
    }
    ,
    S.opacity = function() {
        return r("opacity:.55"),
        /^0.55$/.test(y.opacity)
    }
    ,
    S.cssanimations = function() {
        return u("animationName")
    }
    ,
    S.csscolumns = function() {
        return u("columnCount")
    }
    ,
    S.cssgradients = function() {
        var t = "background-image:"
          , e = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , n = "linear-gradient(left top,#9f9, white);";
        return i((t + "-webkit- ".split(" ").join(e + t) + w.join(n + t)).slice(0, -t.length)),
        s(y.backgroundImage, "gradient")
    }
    ,
    S.cssreflections = function() {
        return u("boxReflect")
    }
    ,
    S.csstransforms = function() {
        return !!u("transform")
    }
    ,
    S.csstransforms3d = function() {
        var t = !!u("perspective");
        return t && "webkitPerspective"in m.style && T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight
        }),
        t
    }
    ,
    S.csstransitions = function() {
        return u("transition")
    }
    ,
    S.fontface = function() {
        var t;
        return T('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
            var r = e.getElementById("smodernizr")
              , o = r.sheet || r.styleSheet
              , s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
        }),
        t
    }
    ,
    S.generatedcontent = function() {
        var t;
        return T(["#", g, "{font:0/0 a}#", g, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
            t = e.offsetHeight >= 3
        }),
        t
    }
    ,
    S)
        h(S, I) && (c = I.toLowerCase(),
        p[c] = S[I](),
        k.push((p[c] ? "" : "no-") + c));
    return p.addTest = function(t, e) {
        if ("object" == typeof t)
            for (var i in t)
                h(t, i) && p.addTest(i, t[i]);
        else {
            if (t = t.toLowerCase(),
            p[t] !== n)
                return p;
            e = "function" == typeof e ? e() : e,
            void 0 !== f && f && (m.className += " " + (e ? "" : "no-") + t),
            p[t] = e
        }
        return p
    }
    ,
    i(""),
    v = null,
    p._version = d,
    p._prefixes = w,
    p._domPrefixes = C,
    p._cssomPrefixes = _,
    p.hasEvent = P,
    p.testProp = function(t) {
        return a([t])
    }
    ,
    p.testAllProps = u,
    p.testStyles = T,
    m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + k.join(" ") : ""),
    p
}(0, this.document);
var q = null;
window.PR_SHOULD_USE_CONTINUATION = !0,
function() {
    function t(t) {
        function e(t) {
            var e = t.charCodeAt(0);
            if (92 !== e)
                return e;
            var n = t.charAt(1);
            return (e = h[n]) ? e : "0" <= n && n <= "7" ? parseInt(t.substring(1), 8) : "u" === n || "x" === n ? parseInt(t.substring(2), 16) : t.charCodeAt(1)
        }
        function n(t) {
            return t < 32 ? (t < 16 ? "\\x0" : "\\x") + t.toString(16) : ("\\" !== (t = String.fromCharCode(t)) && "-" !== t && "[" !== t && "]" !== t || (t = "\\" + t),
            t)
        }
        function i(t) {
            for (var i = t.substring(1, t.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), r = (t = [],
            []), o = "^" === i[0], s = o ? 1 : 0, a = i.length; s < a; ++s) {
                var l = i[s];
                if (/\\[bdsw]/i.test(l))
                    t.push(l);
                else {
                    var u;
                    l = e(l);
                    s + 2 < a && "-" === i[s + 1] ? (u = e(i[s + 2]),
                    s += 2) : u = l,
                    r.push([l, u]),
                    u < 65 || l > 122 || (u < 65 || l > 90 || r.push([32 | Math.max(65, l), 32 | Math.min(u, 90)]),
                    u < 97 || l > 122 || r.push([-33 & Math.max(97, l), -33 & Math.min(u, 122)]))
                }
            }
            for (r.sort(function(t, e) {
                return t[0] - e[0] || e[1] - t[1]
            }),
            i = [],
            l = [NaN, NaN],
            s = 0; s < r.length; ++s)
                (a = r[s])[0] <= l[1] + 1 ? l[1] = Math.max(l[1], a[1]) : i.push(l = a);
            for (r = ["["],
            o && r.push("^"),
            r.push.apply(r, t),
            s = 0; s < i.length; ++s)
                a = i[s],
                r.push(n(a[0])),
                a[1] > a[0] && (a[1] + 1 > a[0] && r.push("-"),
                r.push(n(a[1])));
            return r.push("]"),
            r.join("")
        }
        function r(t) {
            for (var e = t.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), n = e.length, r = [], a = 0, l = 0; a < n; ++a) {
                var u = e[a];
                "(" === u ? ++l : "\\" === u.charAt(0) && (u = +u.substring(1)) && u <= l && (r[u] = -1)
            }
            for (a = 1; a < r.length; ++a)
                -1 === r[a] && (r[a] = ++o);
            for (l = a = 0; a < n; ++a)
                "(" === (u = e[a]) ? void 0 === r[++l] && (e[a] = "(?:") : "\\" === u.charAt(0) && (u = +u.substring(1)) && u <= l && (e[a] = "\\" + r[l]);
            for (l = a = 0; a < n; ++a)
                "^" === e[a] && "^" !== e[a + 1] && (e[a] = "");
            if (t.ignoreCase && s)
                for (a = 0; a < n; ++a)
                    t = (u = e[a]).charAt(0),
                    u.length >= 2 && "[" === t ? e[a] = i(u) : "\\" !== t && (e[a] = u.replace(/[A-Za-z]/g, function(t) {
                        return t = t.charCodeAt(0),
                        "[" + String.fromCharCode(-33 & t, 32 | t) + "]"
                    }));
            return e.join("")
        }
        for (var o = 0, s = !1, a = !1, l = 0, u = t.length; l < u; ++l) {
            var c = t[l];
            if (c.ignoreCase)
                a = !0;
            else if (/[a-z]/i.test(c.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                s = !0,
                a = !1;
                break
            }
        }
        var h = {
            b: 8,
            t: 9,
            n: 10,
            v: 11,
            f: 12,
            r: 13
        }
          , d = [];
        for (l = 0,
        u = t.length; l < u; ++l) {
            if ((c = t[l]).global || c.multiline)
                throw Error("" + c);
            d.push("(?:" + r(c) + ")")
        }
        return RegExp(d.join("|"), a ? "gi" : "g")
    }
    function e(t) {
        function e(t) {
            switch (t.nodeType) {
            case 1:
                if (i.test(t.className))
                    break;
                for (var n = t.firstChild; n; n = n.nextSibling)
                    e(n);
                "BR" !== (n = t.nodeName) && "LI" !== n || (r[a] = "\n",
                s[a << 1] = o++,
                s[a++ << 1 | 1] = t);
                break;
            case 3:
            case 4:
                (n = t.nodeValue).length && (n = l ? n.replace(/\r\n?/g, "\n") : n.replace(/[\t\n\r ]+/g, " "),
                r[a] = n,
                s[a << 1] = o,
                o += n.length,
                s[a++ << 1 | 1] = t)
            }
        }
        var n, i = /(?:^|\s)nocode(?:\s|$)/, r = [], o = 0, s = [], a = 0;
        t.currentStyle ? n = t.currentStyle.whiteSpace : window.getComputedStyle && (n = document.defaultView.getComputedStyle(t, q).getPropertyValue("white-space"));
        var l = n && "pre" === n.substring(0, 3);
        return e(t),
        {
            a: r.join("").replace(/\n$/, ""),
            c: s
        }
    }
    function n(t, e, n, i) {
        e && (n(t = {
            a: e,
            d: t
        }),
        i.push.apply(i, t.e))
    }
    function i(e, i) {
        function r(t) {
            for (var e = t.d, u = [e, "pln"], c = 0, h = t.a.match(o) || [], d = {}, p = 0, f = h.length; p < f; ++p) {
                var m, g = h[p], v = d[g], y = void 0;
                if ("string" == typeof v)
                    m = !1;
                else {
                    var b = s[g.charAt(0)];
                    if (b)
                        y = g.match(b[1]),
                        v = b[0];
                    else {
                        for (m = 0; m < l; ++m)
                            if (b = i[m],
                            y = g.match(b[1])) {
                                v = b[0];
                                break
                            }
                        y || (v = "pln")
                    }
                    !(m = v.length >= 5 && "lang-" === v.substring(0, 5)) || y && "string" == typeof y[1] || (m = !1,
                    v = "src"),
                    m || (d[g] = v)
                }
                if (b = c,
                c += g.length,
                m) {
                    m = y[1];
                    var w = g.indexOf(m)
                      , x = w + m.length;
                    y[2] && (w = (x = g.length - y[2].length) - m.length),
                    v = v.substring(5),
                    n(e + b, g.substring(0, w), r, u),
                    n(e + b + w, m, a(v, m), u),
                    n(e + b + x, g.substring(x), r, u)
                } else
                    u.push(e + b, v)
            }
            t.e = u
        }
        var o, s = {};
        !function() {
            for (var n = e.concat(i), r = [], a = {}, l = 0, u = n.length; l < u; ++l) {
                var c = n[l]
                  , h = c[3];
                if (h)
                    for (var d = h.length; --d >= 0; )
                        s[h.charAt(d)] = c;
                h = "" + (c = c[1]),
                a.hasOwnProperty(h) || (r.push(c),
                a[h] = q)
            }
            r.push(/[\S\s]/),
            o = t(r)
        }();
        var l = i.length;
        return r
    }
    function r(t) {
        var e = []
          , n = [];
        t.tripleQuotedStrings ? e.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : t.multiLineStrings ? e.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : e.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]),
        t.verbatimStrings && n.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
        var r = t.hashComments;
        return r && (t.cStyleComments ? (r > 1 ? e.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : e.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]),
        n.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : e.push(["com", /^#[^\n\r]*/, q, "#"])),
        t.cStyleComments && (n.push(["com", /^\/\/[^\n\r]*/, q]),
        n.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q])),
        t.regexLiterals && n.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]),
        (r = t.types) && n.push(["typ", r]),
        (t = ("" + t.keywords).replace(/^ | $/g, "")).length && n.push(["kwd", RegExp("^(?:" + t.replace(/[\s,]+/g, "|") + ")\\b"), q]),
        e.push(["pln", /^\s+/, q, " \r\n\t\xa0"]),
        n.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'./@\\`]*/, q]),
        i(e, n)
    }
    function o(t, e) {
        function n(t) {
            switch (t.nodeType) {
            case 1:
                if (o.test(t.className))
                    break;
                if ("BR" === t.nodeName)
                    i(t),
                    t.parentNode && t.parentNode.removeChild(t);
                else
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n(t);
                break;
            case 3:
            case 4:
                if (l) {
                    var e = t.nodeValue
                      , r = e.match(s);
                    if (r) {
                        var u = e.substring(0, r.index);
                        t.nodeValue = u,
                        (e = e.substring(r.index + r[0].length)) && t.parentNode.insertBefore(a.createTextNode(e), t.nextSibling),
                        i(t),
                        u || t.parentNode.removeChild(t)
                    }
                }
            }
        }
        function i(t) {
            function e(t, n) {
                var i = n ? t.cloneNode(!1) : t;
                if (r = t.parentNode) {
                    var r = e(r, 1)
                      , o = t.nextSibling;
                    r.appendChild(i);
                    for (var s = o; s; s = o)
                        o = s.nextSibling,
                        r.appendChild(s)
                }
                return i
            }
            for (; !t.nextSibling; )
                if (!(t = t.parentNode))
                    return;
            var n;
            for (t = e(t.nextSibling, 0); (n = t.parentNode) && 1 === n.nodeType; )
                t = n;
            u.push(t)
        }
        var r, o = /(?:^|\s)nocode(?:\s|$)/, s = /\r\n?|\n/, a = t.ownerDocument;
        t.currentStyle ? r = t.currentStyle.whiteSpace : window.getComputedStyle && (r = a.defaultView.getComputedStyle(t, q).getPropertyValue("white-space"));
        var l = r && "pre" === r.substring(0, 3);
        for (r = a.createElement("LI"); t.firstChild; )
            r.appendChild(t.firstChild);
        for (var u = [r], c = 0; c < u.length; ++c)
            n(u[c]);
        e === (0 | e) && u[0].setAttribute("value", e);
        var h = a.createElement("OL");
        h.className = "linenums";
        for (var d = Math.max(0, e - 1 | 0) || 0, p = (c = 0,
        u.length); c < p; ++c)
            (r = u[c]).className = "L" + (c + d) % 10,
            r.firstChild || r.appendChild(a.createTextNode("\xa0")),
            h.appendChild(r);
        t.appendChild(h)
    }
    function s(t, e) {
        for (var n = e.length; --n >= 0; ) {
            var i = e[n];
            b.hasOwnProperty(i) ? window.console && console.warn("cannot override language handler %s", i) : b[i] = t
        }
    }
    function a(t, e) {
        return t && b.hasOwnProperty(t) || (t = /^\s*</.test(e) ? "default-markup" : "default-code"),
        b[t]
    }
    function l(t) {
        var n = t.g;
        try {
            var i = (h = e(t.h)).a;
            t.a = i,
            t.c = h.c,
            t.d = 0,
            a(n, i)(t);
            var r, o, s = /\bMSIE\b/.test(navigator.userAgent), l = (n = /\n/g,
            t.a), c = l.length, h = 0, d = t.c, p = d.length, f = (i = 0,
            t.e), m = f.length;
            t = 0;
            for (f[m] = c,
            o = r = 0; o < m; )
                f[o] !== f[o + 2] ? (f[r++] = f[o++],
                f[r++] = f[o++]) : o += 2;
            for (m = r,
            o = r = 0; o < m; ) {
                for (var g = f[o], v = f[o + 1], y = o + 2; y + 2 <= m && f[y + 1] === v; )
                    y += 2;
                f[r++] = g,
                f[r++] = v,
                o = y
            }
            for (f.length = r; i < p; ) {
                var b, w = d[i + 2] || c, x = f[t + 2] || c, _ = (y = Math.min(w, x),
                d[i + 1]);
                if (1 !== _.nodeType && (b = l.substring(h, y))) {
                    s && (b = b.replace(n, "\r")),
                    _.nodeValue = b;
                    var C = _.ownerDocument
                      , S = C.createElement("SPAN");
                    S.className = f[t + 1];
                    var k = _.parentNode;
                    k.replaceChild(S, _),
                    S.appendChild(_),
                    h < w && (d[i + 1] = _ = C.createTextNode(l.substring(y, w)),
                    k.insertBefore(_, S.nextSibling))
                }
                (h = y) >= w && (i += 2),
                h >= x && (t += 2)
            }
        } catch (u) {
            "console"in window && console.log(u && u.stack ? u.stack : u)
        }
    }
    var u, c, h = [u = [[c = ["break,continue,do,else,for,if,return,while"], "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"], "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"], d = [u, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"], p = [d, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"], f = [c, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"], m = [c, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"], g = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/, v = /\S/, y = r({
        keywords: [h, p, u = [u, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"], "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" + f, m, c = [c, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"]],
        hashComments: !0,
        cStyleComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), b = {};
    s(y, ["default-code"]),
    s(i([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]),
    s(i([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]),
    s(i([], [["atv", /^[\S\s]+/]]), ["uq.val"]),
    s(r({
        keywords: h,
        hashComments: !0,
        cStyleComments: !0,
        types: g
    }), ["c", "cc", "cpp", "cxx", "cyc", "m"]),
    s(r({
        keywords: "null,true,false"
    }), ["json"]),
    s(r({
        keywords: p,
        hashComments: !0,
        cStyleComments: !0,
        verbatimStrings: !0,
        types: g
    }), ["cs"]),
    s(r({
        keywords: d,
        cStyleComments: !0
    }), ["java"]),
    s(r({
        keywords: c,
        hashComments: !0,
        multiLineStrings: !0
    }), ["bsh", "csh", "sh"]),
    s(r({
        keywords: f,
        hashComments: !0,
        multiLineStrings: !0,
        tripleQuotedStrings: !0
    }), ["cv", "py"]),
    s(r({
        keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["perl", "pl", "pm"]),
    s(r({
        keywords: m,
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["rb"]),
    s(r({
        keywords: u,
        cStyleComments: !0,
        regexLiterals: !0
    }), ["js"]),
    s(r({
        keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
        hashComments: 3,
        cStyleComments: !0,
        multilineStrings: !0,
        tripleQuotedStrings: !0,
        regexLiterals: !0
    }), ["coffee"]),
    s(i([], [["str", /^[\S\s]+/]]), ["regex"]),
    window.prettyPrintOne = function(t, e, n) {
        var i = document.createElement("PRE");
        return i.innerHTML = t,
        n && o(i, n),
        l({
            g: e,
            i: n,
            h: i
        }),
        i.innerHTML
    }
    ,
    window.prettyPrint = function(t) {
        function e() {
            for (var n = window.PR_SHOULD_USE_CONTINUATION ? u.now() + 250 : Infinity; c < i.length && u.now() < n; c++) {
                var r = i[c];
                if ((s = r.className).indexOf("prettyprint") >= 0) {
                    var s, a, d;
                    if (d = !(s = s.match(h))) {
                        for (var p = void 0, f = (d = r).firstChild; f; f = f.nextSibling) {
                            var m = f.nodeType;
                            p = 1 === m ? p ? d : f : 3 === m && v.test(f.nodeValue) ? d : p
                        }
                        d = (a = p === d ? void 0 : p) && "CODE" === a.tagName
                    }
                    for (d && (s = a.className.match(h)),
                    s && (s = s[1]),
                    d = !1,
                    p = r.parentNode; p; p = p.parentNode)
                        if (("pre" === p.tagName || "code" === p.tagName || "xmp" === p.tagName) && p.className && p.className.indexOf("prettyprint") >= 0) {
                            d = !0;
                            break
                        }
                    d || ((d = !!(d = r.className.match(/\blinenums\b(?::(\d+))?/)) && (!d[1] || !d[1].length || +d[1])) && o(r, d),
                    l({
                        g: s,
                        h: r,
                        i: d
                    }))
                }
            }
            c < i.length ? setTimeout(e, 250) : t && t()
        }
        for (var n = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], i = [], r = 0; r < n.length; ++r)
            for (var s = 0, a = n[r].length; s < a; ++s)
                i.push(n[r][s]);
        n = q;
        var u = Date;
        u.now || (u = {
            now: function() {
                return +new Date
            }
        });
        var c = 0
          , h = /\blang(?:uage)?-([\w.]+)(?!\S)/;
        e()
    }
    ,
    window.PR = {
        createSimpleLexer: i,
        registerLangHandler: s,
        sourceDecorator: r,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_NOCODE: "nocode",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ"
    }
}(),
function(t, e, n) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? n(e, !0) : function(t, e) {
        return n(t, e)
    }
    : n(t, e)
}("undefined" != typeof window ? window.$ : {}, "undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        for (var e in t)
            t.hasOwnProperty(e) && (this[e] = t[e]);
        return this
    }
    function i() {
        ot(this, i.baseDefaults)
    }
    function r(t) {
        return "string" === at(t)
    }
    function o(t) {
        return t && t.getContext ? t.getContext("2d") : it
    }
    function s(t) {
        var e, n;
        for (e in t)
            t.hasOwnProperty(e) && (n = t[e],
            "string" !== at(n) || isNaN(Z(n)) || isNaN(tt(n)) || "text" === e || (t[e] = tt(n)));
        void 0 !== t.text && (t.text = String(t.text))
    }
    function a(t) {
        return (t = ot({}, t)).masks = t.masks.slice(0),
        t
    }
    function l(t, e) {
        var n;
        t.save(),
        n = a(e.transforms),
        e.savedTransforms.push(n)
    }
    function u(t, e, n, i) {
        n[i] && (lt(n[i]) ? e[i] = n[i].call(t, n) : e[i] = n[i])
    }
    function c(t, e, n) {
        u(t, e, n, "fillStyle"),
        u(t, e, n, "strokeStyle"),
        e.lineWidth = n.strokeWidth,
        n.rounded ? e.lineCap = e.lineJoin = "round" : (e.lineCap = n.strokeCap,
        e.lineJoin = n.strokeJoin,
        e.miterLimit = n.miterLimit),
        n.strokeDash || (n.strokeDash = []),
        e.setLineDash && e.setLineDash(n.strokeDash),
        e.webkitLineDash = e.mozDash = n.strokeDash,
        e.lineDashOffset = e.webkitLineDashOffset = e.mozDashOffset = n.strokeDashOffset,
        e.shadowOffsetX = n.shadowX,
        e.shadowOffsetY = n.shadowY,
        e.shadowBlur = n.shadowBlur,
        e.shadowColor = n.shadowColor,
        e.globalAlpha = n.opacity,
        e.globalCompositeOperation = n.compositing,
        n.imageSmoothing && (e.imageSmoothingEnabled = e.mozImageSmoothingEnabled = n.imageSmoothingEnabled)
    }
    function h(t, e, n) {
        n.mask && (n.autosave && l(t, e),
        t.clip(),
        e.transforms.masks.push(n._args))
    }
    function d(t, e, n) {
        n.closed && e.closePath(),
        n.shadowStroke && 0 !== n.strokeWidth ? (e.stroke(),
        e.fill(),
        e.shadowColor = "transparent",
        e.shadowBlur = 0,
        e.stroke()) : (e.fill(),
        "transparent" !== n.fillStyle && (e.shadowColor = "transparent"),
        0 !== n.strokeWidth && e.stroke()),
        n.closed || e.closePath(),
        n._transformed && e.restore(),
        n.mask && h(e, t = f(t), n)
    }
    function p(t, e, n, i, r) {
        n._toRad = n.inDegrees ? ct / 180 : 1,
        n._transformed = et,
        e.save(),
        n.fromCenter || n._centered || i === rt || (r === rt && (r = i),
        n.x += i / 2,
        n.y += r / 2,
        n._centered = et),
        n.rotate && I(e, n, it),
        1 === n.scale && 1 === n.scaleX && 1 === n.scaleY || D(e, n, it),
        (n.translate || n.translateX || n.translateY) && N(e, n, it)
    }
    function f(e) {
        var n, i = bt.dataCache;
        return i._canvas === e && i._data ? n = i._data : ((n = t.data(e, "jCanvas")) || (n = {
            canvas: e,
            layers: [],
            layer: {
                names: {},
                groups: {}
            },
            eventHooks: {},
            intersecting: [],
            lastIntersected: it,
            cursor: t(e).css("cursor"),
            drag: {
                layer: it,
                dragging: nt
            },
            event: {
                type: it,
                x: it,
                y: it
            },
            events: {},
            transforms: a(wt),
            savedTransforms: [],
            animating: nt,
            animated: it,
            pixelRatio: 1,
            scaled: nt
        },
        t.data(e, "jCanvas", n)),
        i._canvas = e,
        i._data = n),
        n
    }
    function m(t, e, n) {
        for (var i in Ct.events)
            Ct.events.hasOwnProperty(i) && (n[i] || n.cursors && n.cursors[i]) && g(t, e, n, i);
        e.events.mouseout || (t.bind("mouseout.jCanvas", function() {
            var n, i = e.drag.layer;
            for (i && (e.drag = {},
            x(t, e, i, "dragcancel")),
            n = 0; n < e.layers.length; n += 1)
                (i = e.layers[n])._hovered && t.triggerLayerEvent(e.layers[n], "mouseout");
            t.drawLayers()
        }),
        e.events.mouseout = et)
    }
    function g(t, e, n, i) {
        Ct.events[i](t, e),
        n._event = et
    }
    function v(t, e, n) {
        var i, r;
        if (n.draggable || n.cursors) {
            for (i = ["mousedown", "mousemove", "mouseup"],
            r = 0; r < i.length; r += 1)
                g(t, e, n, i[r]);
            n._event = et
        }
    }
    function y(t, e, n, i) {
        t = e.layer.names,
        i ? i.name !== rt && r(n.name) && n.name !== i.name && delete t[n.name] : i = n,
        r(i.name) && (t[i.name] = n)
    }
    function b(t, e, n, i) {
        var r, o, s, a;
        if (t = e.layer.groups,
        i) {
            if (i.groups !== rt && n.groups !== it)
                for (o = 0; o < n.groups.length; o += 1)
                    if (e = t[r = n.groups[o]]) {
                        for (a = 0; a < e.length; a += 1)
                            if (e[a] === n) {
                                s = a,
                                e.splice(a, 1);
                                break
                            }
                        0 === e.length && delete t[r]
                    }
        } else
            i = n;
        if (i.groups !== rt && i.groups !== it)
            for (o = 0; o < i.groups.length; o += 1)
                (e = t[r = i.groups[o]]) || ((e = t[r] = []).name = r),
                s === rt && (s = e.length),
                e.splice(s, 0, n)
    }
    function w(t, e, n, i, r) {
        i[n] && e._running && !e._running[n] && (e._running[n] = et,
        i[n].call(t[0], e, r),
        e._running[n] = nt)
    }
    function x(e, n, i, r, o) {
        if (!(i.disableEvents || i.intangible && -1 !== t.inArray(r, _t))) {
            var s;
            if ("mouseout" !== r)
                i.cursors && (s = i.cursors[r]),
                -1 !== t.inArray(s, xt.cursors) && (s = xt.prefix + s),
                s && e.css({
                    cursor: s
                });
            w(e, i, r, i, o),
            w(e, i, r, n.eventHooks, o),
            w(e, i, r, Ct.eventHooks, o)
        }
    }
    function _(e, i, o, a) {
        var l, u = i._layer ? o : i;
        return i._args = o,
        (i.draggable || i.dragGroups) && (i.layer = et,
        i.draggable = et),
        i._method || (i._method = a || (i.method ? t.fn[i.method] : i.type ? t.fn[yt.drawings[i.type]] : function() {}
        )),
        i.layer && !i._layer ? (o = t(e),
        l = (a = f(e)).layers,
        (u.name === it || r(u.name) && a.layer.names[u.name] === rt) && (s(i),
        (u = new n(i)).canvas = e,
        u.layer = et,
        u._layer = et,
        u._running = {},
        u.data = u.data !== it ? ot({}, u.data) : {},
        u.groups = u.groups !== it ? u.groups.slice(0) : [],
        y(o, a, u),
        b(o, a, u),
        m(o, a, u),
        v(o, a, u),
        i._event = u._event,
        u._method === t.fn.drawText && o.measureText(u),
        u.index === it && (u.index = l.length),
        l.splice(u.index, 0, u),
        i._args = u,
        x(o, a, u, "add"))) : i.layer || s(i),
        u
    }
    function C(t, e) {
        var n, i;
        for (i = 0; i < xt.props.length; i += 1)
            t[n = xt.props[i]] !== rt && (t["_" + n] = t[n],
            xt.propsObj[n] = et,
            e && delete t[n])
    }
    function S(t, e, n) {
        var i, r, o, s;
        for (i in n)
            if (n.hasOwnProperty(i) && (r = n[i],
            lt(r) && (n[i] = r.call(t, e, i)),
            "object" === at(r) && ut(r))) {
                for (o in r)
                    r.hasOwnProperty(o) && (s = r[o],
                    e[i] !== rt && (e[i + "." + o] = e[i][o],
                    n[i + "." + o] = s));
                delete n[i]
            }
        return n
    }
    function k(e) {
        var n, i, r = [], o = 1;
        return e.match(/^([a-z]+|#[0-9a-f]+)$/gi) && ("transparent" === e && (e = "rgba(0, 0, 0, 0)"),
        n = (i = Y.head).style.color,
        i.style.color = e,
        e = t.css(i, "color"),
        i.style.color = n),
        e.match(/^rgb/gi) && (r = e.match(/(\d+(\.\d+)?)/gi),
        e.match(/%/gi) && (o = 2.55),
        r[0] *= o,
        r[1] *= o,
        r[2] *= o,
        r[3] = r[3] !== rt ? tt(r[3]) : 1),
        r
    }
    function E(t) {
        var e, n = 3;
        for ("array" !== at(t.start) && (t.start = k(t.start),
        t.end = k(t.end)),
        t.now = [],
        1 === t.start[3] && 1 === t.end[3] || (n = 4),
        e = 0; e < n; e += 1)
            t.now[e] = t.start[e] + (t.end[e] - t.start[e]) * t.pos,
            3 > e && (t.now[e] = ht(t.now[e]));
        1 !== t.start[3] || 1 !== t.end[3] ? t.now = "rgba( " + t.now.join(",") + " )" : (t.now.slice(0, 3),
        t.now = "rgb( " + t.now.join(",") + " )"),
        t.elem.nodeName ? t.elem.style[t.prop] = t.now : t.elem[t.prop] = t.now
    }
    function T(t) {
        return yt.touchEvents[t] && (t = yt.touchEvents[t]),
        t
    }
    function P(t) {
        Ct.events[t] = function(e, n) {
            function i(t) {
                s.x = t.offsetX,
                s.y = t.offsetY,
                s.type = r,
                s.event = t,
                e.drawLayers({
                    resetFire: et
                }),
                t.preventDefault()
            }
            var r, o, s;
            s = n.event,
            o = T(r = "mouseover" === t || "mouseout" === t ? "mousemove" : t),
            n.events[r] || (o !== r ? e.bind(r + ".jCanvas " + o + ".jCanvas", i) : e.bind(r + ".jCanvas", i),
            n.events[r] = et)
        }
    }
    function A(t, e, n) {
        var i, r, o, s;
        (n = n._args) && ((i = (t = f(t)).event).x !== it && i.y !== it && (o = i.x * t.pixelRatio,
        s = i.y * t.pixelRatio,
        r = e.isPointInPath(o, s) || e.isPointInStroke && e.isPointInStroke(o, s)),
        e = t.transforms,
        n.eventX = i.x,
        n.eventY = i.y,
        n.event = i.event,
        i = t.transforms.rotate,
        o = n.eventX,
        s = n.eventY,
        0 !== i ? (n._eventX = o * ft(-i) - s * pt(-i),
        n._eventY = s * ft(-i) + o * pt(-i)) : (n._eventX = o,
        n._eventY = s),
        n._eventX /= e.scaleX,
        n._eventY /= e.scaleY,
        r && t.intersecting.push(n),
        n.intersects = !!r)
    }
    function I(t, e, n) {
        e._toRad = e.inDegrees ? ct / 180 : 1,
        t.translate(e.x, e.y),
        t.rotate(e.rotate * e._toRad),
        t.translate(-e.x, -e.y),
        n && (n.rotate += e.rotate * e._toRad)
    }
    function D(t, e, n) {
        1 !== e.scale && (e.scaleX = e.scaleY = e.scale),
        t.translate(e.x, e.y),
        t.scale(e.scaleX, e.scaleY),
        t.translate(-e.x, -e.y),
        n && (n.scaleX *= e.scaleX,
        n.scaleY *= e.scaleY)
    }
    function N(t, e, n) {
        e.translate && (e.translateX = e.translateY = e.translate),
        t.translate(e.translateX, e.translateY),
        n && (n.translateX += e.translateX,
        n.translateY += e.translateY)
    }
    function L(t) {
        for (; 0 > t; )
            t += 2 * ct;
        return t
    }
    function O(t, e, n, i) {
        var r, o, s, a;
        n === i ? a = s = 0 : (s = n.x,
        a = n.y),
        i.inDegrees || 360 !== i.end || (i.end = 2 * ct),
        i.start *= n._toRad,
        i.end *= n._toRad,
        i.start -= ct / 2,
        i.end -= ct / 2,
        o = ct / 180,
        i.ccw && (o *= -1),
        j(t, e, n, i, r = i.x + i.radius * ft(i.start + o), i.y + i.radius * pt(i.start + o), i.x + i.radius * ft(i.start), i.y + i.radius * pt(i.start)),
        e.arc(i.x + s, i.y + a, i.radius, i.start, i.end, i.ccw),
        r = i.x + i.radius * ft(i.end + o),
        o = i.y + i.radius * pt(i.end + o),
        R(t, e, n, i, i.x + i.radius * ft(i.end), i.y + i.radius * pt(i.end), r, o)
    }
    function $(t, e, n, i, r, o, s, a) {
        var l, u;
        i.arrowRadius && !n.closed && (u = mt(a - o, s - r),
        u -= ct,
        t = n.strokeWidth * ft(u),
        l = n.strokeWidth * pt(u),
        n = s + i.arrowRadius * ft(u + i.arrowAngle / 2),
        r = a + i.arrowRadius * pt(u + i.arrowAngle / 2),
        o = s + i.arrowRadius * ft(u - i.arrowAngle / 2),
        i = a + i.arrowRadius * pt(u - i.arrowAngle / 2),
        e.moveTo(n - t, r - l),
        e.lineTo(s - t, a - l),
        e.lineTo(o - t, i - l),
        e.moveTo(s - t, a - l),
        e.lineTo(s + t, a + l),
        e.moveTo(s, a))
    }
    function j(t, e, n, i, r, o, s, a) {
        i._arrowAngleConverted || (i.arrowAngle *= n._toRad,
        i._arrowAngleConverted = et),
        i.startArrow && $(t, e, n, i, r, o, s, a)
    }
    function R(t, e, n, i, r, o, s, a) {
        i._arrowAngleConverted || (i.arrowAngle *= n._toRad,
        i._arrowAngleConverted = et),
        i.endArrow && $(t, e, n, i, r, o, s, a)
    }
    function F(t, e, n, i) {
        var r, o, s;
        for (r = 2,
        j(t, e, n, i, i.x2 + n.x, i.y2 + n.y, i.x1 + n.x, i.y1 + n.y),
        i.x1 !== rt && i.y1 !== rt && e.moveTo(i.x1 + n.x, i.y1 + n.y); et && (o = i["x" + r],
        s = i["y" + r],
        o !== rt && s !== rt); )
            e.lineTo(o + n.x, s + n.y),
            r += 1;
        R(t, e, n, i, i["x" + ((r -= 1) - 1)] + n.x, i["y" + (r - 1)] + n.y, i["x" + r] + n.x, i["y" + r] + n.y)
    }
    function M(t, e, n, i) {
        var r, o, s, a, l;
        for (r = 2,
        j(t, e, n, i, i.cx1 + n.x, i.cy1 + n.y, i.x1 + n.x, i.y1 + n.y),
        i.x1 !== rt && i.y1 !== rt && e.moveTo(i.x1 + n.x, i.y1 + n.y); et && (o = i["x" + r],
        s = i["y" + r],
        a = i["cx" + (r - 1)],
        l = i["cy" + (r - 1)],
        o !== rt && s !== rt && a !== rt && l !== rt); )
            e.quadraticCurveTo(a + n.x, l + n.y, o + n.x, s + n.y),
            r += 1;
        R(t, e, n, i, i["cx" + ((r -= 1) - 1)] + n.x, i["cy" + (r - 1)] + n.y, i["x" + r] + n.x, i["y" + r] + n.y)
    }
    function B(t, e, n, i) {
        var r, o, s, a, l, u, c, h;
        for (r = 2,
        o = 1,
        j(t, e, n, i, i.cx1 + n.x, i.cy1 + n.y, i.x1 + n.x, i.y1 + n.y),
        i.x1 !== rt && i.y1 !== rt && e.moveTo(i.x1 + n.x, i.y1 + n.y); et && (s = i["x" + r],
        a = i["y" + r],
        l = i["cx" + o],
        u = i["cy" + o],
        c = i["cx" + (o + 1)],
        h = i["cy" + (o + 1)],
        s !== rt && a !== rt && l !== rt && u !== rt && c !== rt && h !== rt); )
            e.bezierCurveTo(l + n.x, u + n.y, c + n.x, h + n.y, s + n.x, a + n.y),
            r += 1,
            o += 2;
        r -= 1,
        R(t, e, n, i, i["cx" + ((o -= 2) + 1)] + n.x, i["cy" + (o + 1)] + n.y, i["x" + r] + n.x, i["y" + r] + n.y)
    }
    function H(t, e, n) {
        return e *= t._toRad,
        n * ft(e -= ct / 2)
    }
    function q(t, e, n) {
        return e *= t._toRad,
        n * pt(e -= ct / 2)
    }
    function W(t, e, n, i) {
        var r, o, s, a, l, u, c;
        for (n === i ? l = a = 0 : (a = n.x,
        l = n.y),
        r = 1,
        o = a = u = i.x + a,
        s = l = c = i.y + l,
        j(t, e, n, i, o + H(n, i.a1, i.l1), s + q(n, i.a1, i.l1), o, s),
        i.x !== rt && i.y !== rt && e.moveTo(o, s); et && (o = i["a" + r],
        s = i["l" + r],
        o !== rt && s !== rt); )
            a = u,
            l = c,
            u += H(n, o, s),
            c += q(n, o, s),
            e.lineTo(u, c),
            r += 1;
        R(t, e, n, i, a, l, u, c)
    }
    function z(t, e, n) {
        isNaN(Z(n.fontSize)) || (n.fontSize += "px"),
        e.font = n.fontStyle + " " + n.fontSize + " " + n.fontFamily
    }
    function U(e, n, i, r) {
        var o, s;
        if ((o = bt.propCache).text === i.text && o.fontStyle === i.fontStyle && o.fontSize === i.fontSize && o.fontFamily === i.fontFamily && o.maxWidth === i.maxWidth && o.lineHeight === i.lineHeight)
            i.width = o.width,
            i.height = o.height;
        else {
            for (i.width = n.measureText(r[0]).width,
            s = 1; s < r.length; s += 1)
                (o = n.measureText(r[s]).width) > i.width && (i.width = o);
            n = e.style.fontSize,
            e.style.fontSize = i.fontSize,
            i.height = tt(t.css(e, "fontSize")) * r.length * i.lineHeight,
            e.style.fontSize = n
        }
    }
    function V(t, e) {
        var n, i, r, o, s, a = e.maxWidth, l = e.text.split("\n"), u = [];
        for (r = 0; r < l.length; r += 1) {
            if (n = [],
            i = "",
            1 === (s = (o = l[r]).split(" ")).length || t.measureText(o).width < a)
                n = [o];
            else {
                for (o = 0; o < s.length; o += 1)
                    t.measureText(i + s[o]).width > a && ("" !== i && n.push(i),
                    i = ""),
                    i += s[o],
                    o !== s.length - 1 && (i += " ");
                n.push(i)
            }
            u = u.concat(n.join("\n").replace(/( (\n))|( $)/gi, "$2").split("\n"))
        }
        return u
    }
    var X, G, Y = e.document, K = e.Image, Q = e.getComputedStyle, J = e.Math, Z = e.Number, tt = e.parseFloat, et = !0, nt = !1, it = null, rt = void 0, ot = t.extend, st = t.inArray, at = function(t) {
        return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
    }, lt = t.isFunction, ut = t.isPlainObject, ct = J.PI, ht = J.round, dt = J.abs, pt = J.sin, ft = J.cos, mt = J.atan2, gt = e.Array.prototype.slice, vt = t.event.fix, yt = {}, bt = {
        dataCache: {},
        propCache: {},
        imageCache: {}
    }, wt = {
        rotate: 0,
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        masks: []
    }, xt = {}, _t = "mousedown mousemove mouseup mouseover mouseout touchstart touchmove touchend".split(" "), Ct = {
        events: {},
        eventHooks: {},
        future: {}
    };
    i.baseDefaults = {
        align: "center",
        arrowAngle: 90,
        arrowRadius: 0,
        autosave: et,
        baseline: "middle",
        bringToFront: nt,
        ccw: nt,
        closed: nt,
        compositing: "source-over",
        concavity: 0,
        cornerRadius: 0,
        count: 1,
        cropFromCenter: et,
        crossOrigin: it,
        cursors: it,
        disableEvents: nt,
        draggable: nt,
        dragGroups: it,
        groups: it,
        data: it,
        dx: it,
        dy: it,
        end: 360,
        eventX: it,
        eventY: it,
        fillStyle: "transparent",
        fontStyle: "normal",
        fontSize: "12pt",
        fontFamily: "sans-serif",
        fromCenter: et,
        height: it,
        imageSmoothing: et,
        inDegrees: et,
        intangible: nt,
        index: it,
        letterSpacing: it,
        lineHeight: 1,
        layer: nt,
        mask: nt,
        maxWidth: it,
        miterLimit: 10,
        name: it,
        opacity: 1,
        r1: it,
        r2: it,
        radius: 0,
        repeat: "repeat",
        respectAlign: nt,
        rotate: 0,
        rounded: nt,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        shadowBlur: 0,
        shadowColor: "transparent",
        shadowStroke: nt,
        shadowX: 0,
        shadowY: 0,
        sHeight: it,
        sides: 0,
        source: "",
        spread: 0,
        start: 0,
        strokeCap: "butt",
        strokeDash: it,
        strokeDashOffset: 0,
        strokeJoin: "miter",
        strokeStyle: "transparent",
        strokeWidth: 1,
        sWidth: it,
        sx: it,
        sy: it,
        text: "",
        translate: 0,
        translateX: 0,
        translateY: 0,
        type: it,
        visible: et,
        width: it,
        x: 0,
        y: 0
    },
    X = new i,
    n.prototype = X,
    Ct.extend = function(e) {
        return e.name && (e.props && ot(X, e.props),
        t.fn[e.name] = function i(t) {
            var r, s, a, l;
            for (s = 0; s < this.length; s += 1)
                (a = o(r = this[s])) && (_(r, l = new n(t), t, i),
                c(r, a, l),
                e.fn.call(r, a, l));
            return this
        }
        ,
        e.type && (yt.drawings[e.type] = e.name)),
        t.fn[e.name]
    }
    ,
    t.fn.getEventHooks = function() {
        var t;
        return t = {},
        0 !== this.length && (t = (t = f(t = this[0])).eventHooks),
        t
    }
    ,
    t.fn.setEventHooks = function(e) {
        var n, i;
        for (n = 0; n < this.length; n += 1)
            t(this[n]),
            i = f(this[n]),
            ot(i.eventHooks, e);
        return this
    }
    ,
    t.fn.getLayers = function(t) {
        var e, n, i, r, o = [];
        if (0 !== this.length)
            if (n = (n = f(e = this[0])).layers,
            lt(t))
                for (r = 0; r < n.length; r += 1)
                    i = n[r],
                    t.call(e, i) && o.push(i);
            else
                o = n;
        return o
    }
    ,
    t.fn.getLayer = function(t) {
        var e, n, i, o;
        if (0 !== this.length)
            if (e = (n = f(e = this[0])).layers,
            o = at(t),
            t && t.layer)
                i = t;
            else if ("number" === o)
                0 > t && (t = e.length + t),
                i = e[t];
            else if ("regexp" === o) {
                for (n = 0; n < e.length; n += 1)
                    if (r(e[n].name) && e[n].name.match(t)) {
                        i = e[n];
                        break
                    }
            } else
                i = n.layer.names[t];
        return i
    }
    ,
    t.fn.getLayerGroup = function(t) {
        var e, n, i, r = at(t);
        if (0 !== this.length)
            if (e = this[0],
            "array" === r)
                i = t;
            else if ("regexp" === r) {
                for (n in e = (e = f(e)).layer.groups)
                    if (n.match(t)) {
                        i = e[n];
                        break
                    }
            } else
                i = (e = f(e)).layer.groups[t];
        return i
    }
    ,
    t.fn.getLayerIndex = function(t) {
        var e = this.getLayers();
        return t = this.getLayer(t),
        st(t, e)
    }
    ,
    t.fn.setLayer = function(e, n) {
        var i, r, o, a, l, u, c;
        for (r = 0; r < this.length; r += 1)
            if (i = t(this[r]),
            o = f(this[r]),
            a = t(this[r]).getLayer(e)) {
                for (l in y(i, o, a, n),
                b(i, o, a, n),
                s(n),
                n)
                    n.hasOwnProperty(l) && (u = n[l],
                    "object" === (c = at(u)) && ut(u) ? (a[l] = ot({}, u),
                    s(a[l])) : "array" === c ? a[l] = u.slice(0) : "string" === c ? 0 === u.indexOf("+=") ? a[l] += tt(u.substr(2)) : 0 === u.indexOf("-=") ? a[l] -= tt(u.substr(2)) : isNaN(u) || isNaN(Z(u)) || isNaN(tt(u)) ? a[l] = u : a[l] = tt(u) : a[l] = u);
                m(i, o, a),
                v(i, o, a),
                t.isEmptyObject(n) === nt && x(i, o, a, "change", n)
            }
        return this
    }
    ,
    t.fn.setLayers = function(e, n) {
        var i, r, o, s;
        for (r = 0; r < this.length; r += 1)
            for (o = (i = t(this[r])).getLayers(n),
            s = 0; s < o.length; s += 1)
                i.setLayer(o[s], e);
        return this
    }
    ,
    t.fn.setLayerGroup = function(e, n) {
        var i, r, o, s;
        for (r = 0; r < this.length; r += 1)
            if (o = (i = t(this[r])).getLayerGroup(e))
                for (s = 0; s < o.length; s += 1)
                    i.setLayer(o[s], n);
        return this
    }
    ,
    t.fn.moveLayer = function(e, n) {
        var i, r, o, s, a;
        for (r = 0; r < this.length; r += 1)
            i = t(this[r]),
            s = (o = f(this[r])).layers,
            (a = i.getLayer(e)) && (a.index = st(a, s),
            s.splice(a.index, 1),
            s.splice(n, 0, a),
            0 > n && (n = s.length + n),
            a.index = n,
            x(i, o, a, "move"));
        return this
    }
    ,
    t.fn.removeLayer = function(e) {
        var n, i, r, o, s;
        for (i = 0; i < this.length; i += 1)
            n = t(this[i]),
            r = f(this[i]),
            o = n.getLayers(),
            (s = n.getLayer(e)) && (s.index = st(s, o),
            o.splice(s.index, 1),
            delete s._layer,
            y(n, r, s, {
                name: it
            }),
            b(n, r, s, {
                groups: it
            }),
            x(n, r, s, "remove"));
        return this
    }
    ,
    t.fn.removeLayers = function(e) {
        var n, i, r, o, s, a;
        for (i = 0; i < this.length; i += 1) {
            for (n = t(this[i]),
            r = f(this[i]),
            o = n.getLayers(e),
            a = 0; a < o.length; a += 1)
                s = o[a],
                n.removeLayer(s),
                a -= 1;
            r.layer.names = {},
            r.layer.groups = {}
        }
        return this
    }
    ,
    t.fn.removeLayerGroup = function(e) {
        var n, i, r, o;
        if (e !== rt)
            for (i = 0; i < this.length; i += 1)
                if (n = t(this[i]),
                f(this[i]),
                n.getLayers(),
                r = n.getLayerGroup(e))
                    for (r = r.slice(0),
                    o = 0; o < r.length; o += 1)
                        n.removeLayer(r[o]);
        return this
    }
    ,
    t.fn.addLayerToGroup = function(e, n) {
        var i, r, o, s = [n];
        for (r = 0; r < this.length; r += 1)
            (o = (i = t(this[r])).getLayer(e)).groups && (s = o.groups.slice(0),
            -1 === st(n, o.groups) && s.push(n)),
            i.setLayer(o, {
                groups: s
            });
        return this
    }
    ,
    t.fn.removeLayerFromGroup = function(e, n) {
        var i, r, o, s, a = [];
        for (r = 0; r < this.length; r += 1)
            (o = (i = t(this[r])).getLayer(e)).groups && (-1 !== (s = st(n, o.groups)) && ((a = o.groups.slice(0)).splice(s, 1),
            i.setLayer(o, {
                groups: a
            })));
        return this
    }
    ,
    xt.cursors = ["grab", "grabbing", "zoom-in", "zoom-out"],
    xt.prefix = (G = Q(Y.documentElement, ""),
    "-" + (gt.call(G).join("").match(/-(moz|webkit|ms)-/) || "" === G.OLink && ["", "o"])[1] + "-"),
    t.fn.triggerLayerEvent = function(e, n) {
        var i, r, o;
        for (r = 0; r < this.length; r += 1)
            i = t(this[r]),
            o = f(this[r]),
            (e = i.getLayer(e)) && x(i, o, e, n);
        return this
    }
    ,
    t.fn.drawLayer = function(e) {
        var n, i, r;
        for (n = 0; n < this.length; n += 1)
            r = t(this[n]),
            (i = o(this[n])) && (i = r.getLayer(e)) && i.visible && i._method && (i._next = it,
            i._method.call(r, i));
        return this
    }
    ,
    t.fn.drawLayers = function(e) {
        var n, i, r, s, l, u, c, h, d, p, m = e || {};
        for ((u = m.index) || (u = 0),
        n = 0; n < this.length; n += 1)
            if (e = t(this[n]),
            i = o(this[n])) {
                for (c = f(this[n]),
                m.clear !== nt && e.clearCanvas(),
                i = c.layers,
                l = u; l < i.length; l += 1)
                    if ((r = i[l]).index = l,
                    m.resetFire && (r._fired = nt),
                    h = e,
                    s = l + 1,
                    (d = r) && d.visible && d._method && (d._next = s || it,
                    d._method.call(h, d)),
                    r._masks = c.transforms.masks.slice(0),
                    r._method === t.fn.drawImage && r.visible) {
                        p = !0;
                        break
                    }
                if (p)
                    break;
                var g = s = d = h = void 0;
                for (h = it,
                d = (r = c).intersecting.length - 1; 0 <= d; d -= 1)
                    if ((h = r.intersecting[d])._masks) {
                        for (g = h._masks.length - 1; 0 <= g; g -= 1)
                            if (!(s = h._masks[g]).intersects) {
                                h.intersects = nt;
                                break
                            }
                        if (h.intersects && !h.intangible)
                            break
                    }
                if (h && h.intangible && (h = it),
                r = h,
                d = (h = c.event).type,
                c.drag.layer) {
                    s = e;
                    var v = d
                      , y = void 0
                      , b = void 0
                      , w = void 0
                      , _ = w = void 0
                      , C = void 0;
                    w = y = y = w = void 0,
                    _ = (b = (w = (g = c).drag).layer) && b.dragGroups || [],
                    y = g.layers;
                    if ("mousemove" === v || "touchmove" === v) {
                        if (w.dragging || (w.dragging = et,
                        b.dragging = et,
                        b.bringToFront && (y.splice(b.index, 1),
                        b.index = y.push(b)),
                        b._startX = b.x,
                        b._startY = b.y,
                        b._endX = b._eventX,
                        b._endY = b._eventY,
                        x(s, g, b, "dragstart")),
                        w.dragging)
                            for (y = b._eventX - (b._endX - b._startX),
                            w = b._eventY - (b._endY - b._startY),
                            b.dx = y - b.x,
                            b.dy = w - b.y,
                            b.x = y,
                            b.y = w,
                            x(s, g, b, "drag"),
                            y = 0; y < _.length; y += 1)
                                if (w = _[y],
                                C = g.layer.groups[w],
                                b.groups && C)
                                    for (w = 0; w < C.length; w += 1)
                                        C[w] !== b && (C[w].x += b.dx,
                                        C[w].y += b.dy)
                    } else
                        "mouseup" !== v && "touchend" !== v || (w.dragging && (b.dragging = nt,
                        w.dragging = nt,
                        x(s, g, b, "dragstop")),
                        g.drag = {})
                }
                (s = c.lastIntersected) === it || r === s || !s._hovered || s._fired || c.drag.dragging || (c.lastIntersected = it,
                s._fired = et,
                s._hovered = nt,
                x(e, c, s, "mouseout"),
                e.css({
                    cursor: c.cursor
                })),
                r && (r[d] || yt.mouseEvents[d] && (d = yt.mouseEvents[d]),
                r._event && r.intersects && (c.lastIntersected = r,
                !(r.mouseover || r.mouseout || r.cursors) || c.drag.dragging || r._hovered || r._fired || (r._fired = et,
                r._hovered = et,
                x(e, c, r, "mouseover")),
                r._fired || (r._fired = et,
                h.type = it,
                x(e, c, r, d)),
                !r.draggable || r.disableEvents || "mousedown" !== d && "touchstart" !== d || (c.drag.layer = r))),
                r !== it || c.drag.dragging || e.css({
                    cursor: c.cursor
                }),
                l === i.length && (c.intersecting.length = 0,
                c.transforms = a(wt),
                c.savedTransforms.length = 0)
            }
        return this
    }
    ,
    t.fn.addLayer = function(t) {
        var e, i;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && ((i = new n(t)).layer = et,
            _(this[e], i, t));
        return this
    }
    ,
    xt.props = ["width", "height", "opacity", "lineHeight"],
    xt.propsObj = {},
    t.fn.animateLayer = function() {
        function e(t, e, n) {
            return function() {
                var i, r;
                for (r = 0; r < xt.props.length; r += 1)
                    i = xt.props[r],
                    n[i] = n["_" + i];
                for (var o in n)
                    n.hasOwnProperty(o) && -1 !== o.indexOf(".") && delete n[o];
                e.animating && e.animated !== n || t.drawLayers(),
                n._animating = nt,
                e.animating = nt,
                e.animated = it,
                u[4] && u[4].call(t[0], n),
                x(t, e, n, "animateend")
            }
        }
        function n(t, e, n) {
            return function(i, r) {
                var o, s, a = !1;
                "_" === r.prop[0] && (a = !0,
                r.prop = r.prop.replace("_", ""),
                n[r.prop] = n["_" + r.prop]),
                -1 !== r.prop.indexOf(".") && (s = (o = r.prop.split("."))[0],
                o = o[1],
                n[s] && (n[s][o] = r.now)),
                n._pos !== r.pos && (n._pos = r.pos,
                n._animating || e.animating || (n._animating = et,
                e.animating = et,
                e.animated = n),
                e.animating && e.animated !== n || t.drawLayers()),
                u[5] && u[5].call(t[0], i, r, n),
                x(t, e, n, "animate", r),
                a && (r.prop = "_" + r.prop)
            }
        }
        var i, r, s, a, l, u = gt.call(arguments, 0);
        for ("object" === at(u[2]) ? (u.splice(2, 0, u[2].duration || it),
        u.splice(3, 0, u[3].easing || it),
        u.splice(4, 0, u[4].complete || it),
        u.splice(5, 0, u[5].step || it)) : (u[2] === rt ? (u.splice(2, 0, it),
        u.splice(3, 0, it),
        u.splice(4, 0, it)) : lt(u[2]) && (u.splice(2, 0, it),
        u.splice(3, 0, it)),
        u[3] === rt ? (u[3] = it,
        u.splice(4, 0, it)) : lt(u[3]) && u.splice(3, 0, it)),
        r = 0; r < this.length; r += 1)
            i = t(this[r]),
            (s = o(this[r])) && (s = f(this[r]),
            (a = i.getLayer(u[0])) && a._method !== t.fn.draw && (l = ot({}, u[1]),
            C(l = S(this[r], a, l), et),
            C(a),
            a.style = xt.propsObj,
            t(a).animate(l, {
                duration: u[2],
                easing: t.easing[u[3]] ? u[3] : it,
                complete: e(i, s, a),
                step: n(i, s, a)
            }),
            x(i, s, a, "animatestart")));
        return this
    }
    ,
    t.fn.animateLayerGroup = function(e) {
        var n, i, r, o, s = gt.call(arguments, 0);
        for (i = 0; i < this.length; i += 1)
            if (r = (n = t(this[i])).getLayerGroup(e))
                for (o = 0; o < r.length; o += 1)
                    s[0] = r[o],
                    n.animateLayer.apply(n, s);
        return this
    }
    ,
    t.fn.delayLayer = function(e, n) {
        var i, r, o, s;
        for (n = n || 0,
        r = 0; r < this.length; r += 1)
            i = t(this[r]),
            o = f(this[r]),
            (s = i.getLayer(e)) && (t(s).delay(n),
            x(i, o, s, "delay"));
        return this
    }
    ,
    t.fn.delayLayerGroup = function(e, n) {
        var i, r, o, s, a;
        for (n = n || 0,
        r = 0; r < this.length; r += 1)
            if (o = (i = t(this[r])).getLayerGroup(e))
                for (a = 0; a < o.length; a += 1)
                    s = o[a],
                    i.delayLayer(s, n);
        return this
    }
    ,
    t.fn.stopLayer = function(e, n) {
        var i, r, o, s;
        for (r = 0; r < this.length; r += 1)
            i = t(this[r]),
            o = f(this[r]),
            (s = i.getLayer(e)) && (t(s).stop(n),
            x(i, o, s, "stop"));
        return this
    }
    ,
    t.fn.stopLayerGroup = function(e, n) {
        var i, r, o, s, a;
        for (r = 0; r < this.length; r += 1)
            if (o = (i = t(this[r])).getLayerGroup(e))
                for (a = 0; a < o.length; a += 1)
                    s = o[a],
                    i.stopLayer(s, n);
        return this
    }
    ,
    function(e) {
        var n;
        for (n = 0; n < e.length; n += 1)
            t.fx.step[e[n]] = E
    }("color backgroundColor borderColor borderTopColor borderRightColor borderBottomColor borderLeftColor fillStyle outlineColor strokeStyle shadowColor".split(" ")),
    yt.touchEvents = {
        mousedown: "touchstart",
        mouseup: "touchend",
        mousemove: "touchmove"
    },
    yt.mouseEvents = {
        touchstart: "mousedown",
        touchend: "mouseup",
        touchmove: "mousemove"
    },
    function(t) {
        var e;
        for (e = 0; e < t.length; e += 1)
            P(t[e])
    }("click dblclick mousedown mouseup mousemove mouseover mouseout touchstart touchmove touchend contextmenu".split(" ")),
    t.event.fix = function(e) {
        var n, i;
        return (n = (e = vt.call(t.event, e)).originalEvent) && (i = n.changedTouches,
        e.pageX !== rt && e.offsetX === rt ? (n = t(e.currentTarget).offset()) && (e.offsetX = e.pageX - n.left,
        e.offsetY = e.pageY - n.top) : i && (n = t(e.currentTarget).offset()) && (e.offsetX = i[0].pageX - n.left,
        e.offsetY = i[0].pageY - n.top)),
        e
    }
    ,
    yt.drawings = {
        arc: "drawArc",
        bezier: "drawBezier",
        ellipse: "drawEllipse",
        "function": "draw",
        image: "drawImage",
        line: "drawLine",
        path: "drawPath",
        polygon: "drawPolygon",
        slice: "drawSlice",
        quadratic: "drawQuadratic",
        rectangle: "drawRect",
        text: "drawText",
        vector: "drawVector",
        save: "saveCanvas",
        restore: "restoreCanvas",
        rotate: "rotateCanvas",
        scale: "scaleCanvas",
        translate: "translateCanvas"
    },
    t.fn.draw = function St(e) {
        var i, r, s = new n(e);
        if (yt.drawings[s.type] && "function" !== s.type)
            this[yt.drawings[s.type]](e);
        else
            for (i = 0; i < this.length; i += 1)
                t(this[i]),
                (r = o(this[i])) && (s = new n(e),
                _(this[i], s, e, St),
                s.visible && s.fn && s.fn.call(this[i], r, s));
        return this
    }
    ,
    t.fn.clearCanvas = function kt(t) {
        var e, i, r = new n(t);
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (r.width === it || r.height === it ? (i.save(),
            i.setTransform(1, 0, 0, 1, 0, 0),
            i.clearRect(0, 0, this[e].width, this[e].height),
            i.restore()) : (_(this[e], r, t, kt),
            p(this[e], i, r, r.width, r.height),
            i.clearRect(r.x - r.width / 2, r.y - r.height / 2, r.width, r.height),
            r._transformed && i.restore()));
        return this
    }
    ,
    t.fn.saveCanvas = function Et(t) {
        var e, i, r, s, a;
        for (e = 0; e < this.length; e += 1)
            if (i = o(this[e]))
                for (s = f(this[e]),
                r = new n(t),
                _(this[e], r, t, Et),
                a = 0; a < r.count; a += 1)
                    l(i, s);
        return this
    }
    ,
    t.fn.restoreCanvas = function Tt(t) {
        var e, i, r, s, l;
        for (e = 0; e < this.length; e += 1)
            if (i = o(this[e]))
                for (s = f(this[e]),
                r = new n(t),
                _(this[e], r, t, Tt),
                l = 0; l < r.count; l += 1) {
                    var u = i
                      , c = s;
                    0 === c.savedTransforms.length ? c.transforms = a(wt) : (u.restore(),
                    c.transforms = c.savedTransforms.pop())
                }
        return this
    }
    ,
    t.fn.rotateCanvas = function Pt(t) {
        var e, i, r, s;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (s = f(this[e]),
            r = new n(t),
            _(this[e], r, t, Pt),
            r.autosave && l(i, s),
            I(i, r, s.transforms));
        return this
    }
    ,
    t.fn.scaleCanvas = function At(t) {
        var e, i, r, s;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (s = f(this[e]),
            r = new n(t),
            _(this[e], r, t, At),
            r.autosave && l(i, s),
            D(i, r, s.transforms));
        return this
    }
    ,
    t.fn.translateCanvas = function It(t) {
        var e, i, r, s;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (s = f(this[e]),
            r = new n(t),
            _(this[e], r, t, It),
            r.autosave && l(i, s),
            N(i, r, s.transforms));
        return this
    }
    ,
    t.fn.drawRect = function Dt(t) {
        var e, i, r, s, a, l, u, h, f;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (r = new n(t),
            _(this[e], r, t, Dt),
            r.visible && (c(this[e], i, r),
            p(this[e], i, r, r.width, r.height),
            i.beginPath(),
            r.width && r.height && (s = r.x - r.width / 2,
            a = r.y - r.height / 2,
            (h = dt(r.cornerRadius)) ? (l = r.x + r.width / 2,
            u = r.y + r.height / 2,
            0 > r.width && (f = s,
            s = l,
            l = f),
            0 > r.height && (f = a,
            a = u,
            u = f),
            0 > l - s - 2 * h && (h = (l - s) / 2),
            0 > u - a - 2 * h && (h = (u - a) / 2),
            i.moveTo(s + h, a),
            i.lineTo(l - h, a),
            i.arc(l - h, a + h, h, 3 * ct / 2, 2 * ct, nt),
            i.lineTo(l, u - h),
            i.arc(l - h, u - h, h, 0, ct / 2, nt),
            i.lineTo(s + h, u),
            i.arc(s + h, u - h, h, ct / 2, ct, nt),
            i.lineTo(s, a + h),
            i.arc(s + h, a + h, h, ct, 3 * ct / 2, nt),
            r.closed = et) : i.rect(s, a, r.width, r.height)),
            A(this[e], i, r),
            d(this[e], i, r)));
        return this
    }
    ,
    t.fn.drawArc = function Nt(t) {
        var e, i, r;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (r = new n(t),
            _(this[e], r, t, Nt),
            r.visible && (c(this[e], i, r),
            p(this[e], i, r, 2 * r.radius),
            i.beginPath(),
            O(this[e], i, r, r),
            A(this[e], i, r),
            d(this[e], i, r)));
        return this
    }
    ,
    t.fn.drawEllipse = function Lt(t) {
        var e, i, r, s, a;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (r = new n(t),
            _(this[e], r, t, Lt),
            r.visible && (c(this[e], i, r),
            p(this[e], i, r, r.width, r.height),
            s = 4 / 3 * r.width,
            a = r.height,
            i.beginPath(),
            i.moveTo(r.x, r.y - a / 2),
            i.bezierCurveTo(r.x - s / 2, r.y - a / 2, r.x - s / 2, r.y + a / 2, r.x, r.y + a / 2),
            i.bezierCurveTo(r.x + s / 2, r.y + a / 2, r.x + s / 2, r.y - a / 2, r.x, r.y - a / 2),
            A(this[e], i, r),
            r.closed = et,
            d(this[e], i, r)));
        return this
    }
    ,
    t.fn.drawPolygon = function Ot(t) {
        var e, i, r, s, a, l, u, h, f, m;
        for (e = 0; e < this.length; e += 1)
            if ((i = o(this[e])) && (r = new n(t),
            _(this[e], r, t, Ot),
            r.visible)) {
                for (c(this[e], i, r),
                p(this[e], i, r, 2 * r.radius),
                s = (l = (a = 2 * ct / r.sides) / 2) + ct / 2,
                u = r.radius * ft(l),
                i.beginPath(),
                m = 0; m < r.sides; m += 1)
                    h = r.x + r.radius * ft(s),
                    f = r.y + r.radius * pt(s),
                    i.lineTo(h, f),
                    r.concavity && (h = r.x + (u + -u * r.concavity) * ft(s + l),
                    f = r.y + (u + -u * r.concavity) * pt(s + l),
                    i.lineTo(h, f)),
                    s += a;
                A(this[e], i, r),
                r.closed = et,
                d(this[e], i, r)
            }
        return this
    }
    ,
    t.fn.drawSlice = function $t(e) {
        var i, r, s, a, l;
        for (i = 0; i < this.length; i += 1)
            t(this[i]),
            (r = o(this[i])) && (s = new n(e),
            _(this[i], s, e, $t),
            s.visible && (c(this[i], r, s),
            p(this[i], r, s, 2 * s.radius),
            s.start *= s._toRad,
            s.end *= s._toRad,
            s.start -= ct / 2,
            s.end -= ct / 2,
            s.start = L(s.start),
            s.end = L(s.end),
            s.end < s.start && (s.end += 2 * ct),
            a = (s.start + s.end) / 2,
            l = s.radius * s.spread * ft(a),
            a = s.radius * s.spread * pt(a),
            s.x += l,
            s.y += a,
            r.beginPath(),
            r.arc(s.x, s.y, s.radius, s.start, s.end, s.ccw),
            r.lineTo(s.x, s.y),
            A(this[i], r, s),
            s.closed = et,
            d(this[i], r, s)));
        return this
    }
    ,
    t.fn.drawLine = function jt(t) {
        var e, i, r;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (r = new n(t),
            _(this[e], r, t, jt),
            r.visible && (c(this[e], i, r),
            p(this[e], i, r),
            i.beginPath(),
            F(this[e], i, r, r),
            A(this[e], i, r),
            d(this[e], i, r)));
        return this
    }
    ,
    t.fn.drawQuadratic = function Rt(t) {
        var e, i, r;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (r = new n(t),
            _(this[e], r, t, Rt),
            r.visible && (c(this[e], i, r),
            p(this[e], i, r),
            i.beginPath(),
            M(this[e], i, r, r),
            A(this[e], i, r),
            d(this[e], i, r)));
        return this
    }
    ,
    t.fn.drawBezier = function Ft(t) {
        var e, i, r;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (r = new n(t),
            _(this[e], r, t, Ft),
            r.visible && (c(this[e], i, r),
            p(this[e], i, r),
            i.beginPath(),
            B(this[e], i, r, r),
            A(this[e], i, r),
            d(this[e], i, r)));
        return this
    }
    ,
    t.fn.drawVector = function Mt(t) {
        var e, i, r;
        for (e = 0; e < this.length; e += 1)
            (i = o(this[e])) && (r = new n(t),
            _(this[e], r, t, Mt),
            r.visible && (c(this[e], i, r),
            p(this[e], i, r),
            i.beginPath(),
            W(this[e], i, r, r),
            A(this[e], i, r),
            d(this[e], i, r)));
        return this
    }
    ,
    t.fn.drawPath = function Bt(t) {
        var e, i, r, s, a;
        for (e = 0; e < this.length; e += 1)
            if ((i = o(this[e])) && (r = new n(t),
            _(this[e], r, t, Bt),
            r.visible)) {
                for (c(this[e], i, r),
                p(this[e], i, r),
                i.beginPath(),
                s = 1; et && (a = r["p" + s]) !== rt; )
                    "line" === (a = new n(a)).type ? F(this[e], i, r, a) : "quadratic" === a.type ? M(this[e], i, r, a) : "bezier" === a.type ? B(this[e], i, r, a) : "vector" === a.type ? W(this[e], i, r, a) : "arc" === a.type && O(this[e], i, r, a),
                    s += 1;
                A(this[e], i, r),
                d(this[e], i, r)
            }
        return this
    }
    ,
    t.fn.drawText = function Ht(e) {
        var i, r, s, a, l, u, h, d, f, m;
        for (i = 0; i < this.length; i += 1)
            if (t(this[i]),
            (r = o(this[i])) && (s = new n(e),
            a = _(this[i], s, e, Ht),
            s.visible)) {
                if (c(this[i], r, s),
                r.textBaseline = s.baseline,
                r.textAlign = s.align,
                z(this[i], r, s),
                l = s.maxWidth !== it ? V(r, s) : s.text.toString().split("\n"),
                U(this[i], r, s, l),
                a && (a.width = s.width,
                a.height = s.height),
                p(this[i], r, s, s.width, s.height),
                h = s.x,
                "left" === s.align ? s.respectAlign ? s.x += s.width / 2 : h -= s.width / 2 : "right" === s.align && (s.respectAlign ? s.x -= s.width / 2 : h += s.width / 2),
                s.radius)
                    for (h = tt(s.fontSize),
                    s.letterSpacing === it && (s.letterSpacing = h / 500),
                    u = 0; u < l.length; u += 1) {
                        for (r.save(),
                        r.translate(s.x, s.y),
                        d = (a = l[u]).length,
                        r.rotate(-ct * s.letterSpacing * (d - 1) / 2),
                        m = 0; m < d; m += 1)
                            f = a[m],
                            0 !== m && r.rotate(ct * s.letterSpacing),
                            r.save(),
                            r.translate(0, -s.radius),
                            r.fillText(f, 0, 0),
                            r.restore();
                        s.radius -= h,
                        s.letterSpacing += h / (1e3 * ct),
                        r.restore()
                    }
                else
                    for (u = 0; u < l.length; u += 1)
                        a = l[u],
                        d = s.y + u * s.height / l.length - (l.length - 1) * s.height / l.length / 2,
                        r.shadowColor = s.shadowColor,
                        r.fillText(a, h, d),
                        "transparent" !== s.fillStyle && (r.shadowColor = "transparent"),
                        0 !== s.strokeWidth && r.strokeText(a, h, d);
                d = 0,
                "top" === s.baseline ? d += s.height / 2 : "bottom" === s.baseline && (d -= s.height / 2),
                s._event && (r.beginPath(),
                r.rect(s.x - s.width / 2, s.y - s.height / 2 + d, s.width, s.height),
                A(this[i], r, s),
                r.closePath()),
                s._transformed && r.restore()
            }
        return bt.propCache = s,
        this
    }
    ,
    t.fn.measureText = function(t) {
        var e, i;
        return (!(e = this.getLayer(t)) || e && !e._layer) && (e = new n(t)),
        (t = o(this[0])) && (z(this[0], t, e),
        i = V(t, e),
        U(this[0], t, e, i)),
        e
    }
    ,
    t.fn.drawImage = function qt(e) {
        function i(e, n, i, r, o) {
            return function() {
                var s = t(e);
                c(e, n, r),
                r.width === it && r.sWidth === it && (r.width = r.sWidth = m.width),
                r.height === it && r.sHeight === it && (r.height = r.sHeight = m.height),
                o && (o.width = r.width,
                o.height = r.height),
                r.sWidth !== it && r.sHeight !== it && r.sx !== it && r.sy !== it ? (r.width === it && (r.width = r.sWidth),
                r.height === it && (r.height = r.sHeight),
                r.cropFromCenter && (r.sx += r.sWidth / 2,
                r.sy += r.sHeight / 2),
                0 > r.sy - r.sHeight / 2 && (r.sy = r.sHeight / 2),
                r.sy + r.sHeight / 2 > m.height && (r.sy = m.height - r.sHeight / 2),
                0 > r.sx - r.sWidth / 2 && (r.sx = r.sWidth / 2),
                r.sx + r.sWidth / 2 > m.width && (r.sx = m.width - r.sWidth / 2),
                p(e, n, r, r.width, r.height),
                n.drawImage(m, r.sx - r.sWidth / 2, r.sy - r.sHeight / 2, r.sWidth, r.sHeight, r.x - r.width / 2, r.y - r.height / 2, r.width, r.height)) : (p(e, n, r, r.width, r.height),
                n.drawImage(m, r.x - r.width / 2, r.y - r.height / 2, r.width, r.height)),
                n.beginPath(),
                n.rect(r.x - r.width / 2, r.y - r.height / 2, r.width, r.height),
                A(e, n, r),
                n.closePath(),
                r._transformed && n.restore(),
                h(n, i, r),
                r.layer ? x(s, i, o, "load") : r.load && r.load.call(s[0], o),
                r.layer && (o._masks = i.transforms.masks.slice(0),
                r._next && s.drawLayers({
                    clear: nt,
                    resetFire: et,
                    index: r._next
                }))
            }
        }
        var r, s, a, l, u, d, m, g, v, y = bt.imageCache;
        for (s = 0; s < this.length; s += 1)
            r = this[s],
            (a = o(this[s])) && (l = f(this[s]),
            u = new n(e),
            d = _(this[s], u, e, qt),
            u.visible && (g = (v = u.source).getContext,
            v.src || g ? m = v : v && (y[v] && y[v].complete ? m = y[v] : (m = new K,
            v.match(/^data:/i) || (m.crossOrigin = u.crossOrigin),
            m.src = v,
            y[v] = m)),
            m && (m.complete || g ? i(r, a, l, u, d)() : (m.onload = i(r, a, l, u, d),
            m.src = m.src))));
        return this
    }
    ,
    t.fn.createPattern = function(e) {
        function i() {
            l = r.createPattern(a, s.repeat),
            s.load && s.load.call(c[0], l)
        }
        var r, s, a, l, u, c = this;
        return (r = o(c[0])) ? (u = (s = new n(e)).source,
        lt(u) ? ((a = t("<canvas />")[0]).width = s.width,
        a.height = s.height,
        e = o(a),
        u.call(a, e),
        i()) : (e = u.getContext,
        u.src || e ? a = u : (a = new K,
        u.match(/^data:/i) || (a.crossOrigin = s.crossOrigin),
        a.src = u),
        a.complete || e ? i() : (a.onload = i(),
        a.src = a.src))) : l = it,
        l
    }
    ,
    t.fn.createGradient = function(t) {
        var e, i, r, s, a, l, u, c, h = [];
        if (t = new n(t),
        e = o(this[0])) {
            for (t.x1 = t.x1 || 0,
            t.y1 = t.y1 || 0,
            t.x2 = t.x2 || 0,
            t.y2 = t.y2 || 0,
            e = t.r1 !== it && t.r2 !== it ? e.createRadialGradient(t.x1, t.y1, t.r1, t.x2, t.y2, t.r2) : e.createLinearGradient(t.x1, t.y1, t.x2, t.y2),
            a = 1; t["c" + a] !== rt; a += 1)
                t["s" + a] !== rt ? h.push(t["s" + a]) : h.push(it);
            for (i = h.length,
            h[0] === it && (h[0] = 0),
            h[i - 1] === it && (h[i - 1] = 1),
            a = 0; a < i; a += 1) {
                if (h[a] !== it) {
                    for (u = 1,
                    c = 0,
                    r = h[a],
                    l = a + 1; l < i; l += 1) {
                        if (h[l] !== it) {
                            s = h[l];
                            break
                        }
                        u += 1
                    }
                    r > s && (h[l] = h[a])
                } else
                    h[a] === it && (c += 1,
                    h[a] = r + (s - r) / u * c);
                e.addColorStop(h[a], t["c" + (a + 1)])
            }
        } else
            e = it;
        return e
    }
    ,
    t.fn.setPixels = function Wt(t) {
        var e, i, r, s, a, l, u, c, h;
        for (i = 0; i < this.length; i += 1)
            if ((r = o(e = this[i])) && (_(e, s = new n(t), t, Wt),
            p(this[i], r, s, s.width, s.height),
            s.width !== it && s.height !== it || (s.width = e.width,
            s.height = e.height,
            s.x = s.width / 2,
            s.y = s.height / 2),
            0 !== s.width && 0 !== s.height)) {
                if (h = (u = (l = r.getImageData(s.x - s.width / 2, s.y - s.height / 2, s.width, s.height)).data).length,
                s.each)
                    for (c = 0; c < h; c += 4)
                        a = {
                            r: u[c],
                            g: u[c + 1],
                            b: u[c + 2],
                            a: u[c + 3]
                        },
                        s.each.call(e, a, s),
                        u[c] = a.r,
                        u[c + 1] = a.g,
                        u[c + 2] = a.b,
                        u[c + 3] = a.a;
                r.putImageData(l, s.x - s.width / 2, s.y - s.height / 2),
                r.restore()
            }
        return this
    }
    ,
    t.fn.getCanvasImage = function(t, e) {
        var n, i = it;
        return 0 !== this.length && ((n = this[0]).toDataURL && (e === rt && (e = 1),
        i = n.toDataURL("image/" + t, e))),
        i
    }
    ,
    t.fn.detectPixelRatio = function(n) {
        var i, r, s, a, l, u, c;
        for (r = 0; r < this.length; r += 1)
            i = this[r],
            t(this[r]),
            s = o(i),
            (c = f(this[r])).scaled || (a = e.devicePixelRatio || 1,
            1 !== (a /= l = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1) && (l = i.width,
            u = i.height,
            i.width = l * a,
            i.height = u * a,
            i.style.width = l + "px",
            i.style.height = u + "px",
            s.scale(a, a)),
            c.pixelRatio = a,
            c.scaled = et,
            n && n.call(i, a));
        return this
    }
    ,
    Ct.clearCache = function() {
        for (var t in bt)
            bt.hasOwnProperty(t) && (bt[t] = {})
    }
    ,
    t.support.canvas = t("<canvas />")[0].getContext !== rt,
    ot(Ct, {
        defaults: X,
        setGlobalProps: c,
        transformShape: p,
        detectEvents: A,
        closePath: d,
        setCanvasFont: z,
        measureText: U
    }),
    t.jCanvas = Ct,
    t.jCanvasObject = n
});
var BinaryFile = function(t, e, n) {
    var i = t
      , r = e || 0
      , o = 0;
    this.getRawData = function() {
        return i
    }
    ,
    "string" == typeof t ? (o = n || i.length,
    this.getByteAt = function(t) {
        return 255 & i.charCodeAt(t + r)
    }
    ,
    this.getBytesAt = function(t, e) {
        for (var n = [], o = 0; o < e; o++)
            n[o] = 255 & i.charCodeAt(t + o + r);
        return n
    }
    ) : "unknown" == typeof t && (o = n || IEBinary_getLength(i),
    this.getByteAt = function(t) {
        return IEBinary_getByteAt(i, t + r)
    }
    ,
    this.getBytesAt = function(t, e) {
        return new VBArray(IEBinary_getBytesAt(i, t + r, e)).toArray()
    }
    ),
    this.getLength = function() {
        return o
    }
    ,
    this.getSByteAt = function(t) {
        var e = this.getByteAt(t);
        return e > 127 ? e - 256 : e
    }
    ,
    this.getShortAt = function(t, e) {
        var n = e ? (this.getByteAt(t) << 8) + this.getByteAt(t + 1) : (this.getByteAt(t + 1) << 8) + this.getByteAt(t);
        return n < 0 && (n += 65536),
        n
    }
    ,
    this.getSShortAt = function(t, e) {
        var n = this.getShortAt(t, e);
        return n > 32767 ? n - 65536 : n
    }
    ,
    this.getLongAt = function(t, e) {
        var n = this.getByteAt(t)
          , i = this.getByteAt(t + 1)
          , r = this.getByteAt(t + 2)
          , o = this.getByteAt(t + 3)
          , s = e ? (((n << 8) + i << 8) + r << 8) + o : (((o << 8) + r << 8) + i << 8) + n;
        return s < 0 && (s += 4294967296),
        s
    }
    ,
    this.getSLongAt = function(t, e) {
        var n = this.getLongAt(t, e);
        return n > 2147483647 ? n - 4294967296 : n
    }
    ,
    this.getStringAt = function(t, e) {
        for (var n = [], i = this.getBytesAt(t, e), r = 0; r < e; r++)
            n[r] = String.fromCharCode(i[r]);
        return n.join("")
    }
    ,
    this.getCharAt = function(t) {
        return String.fromCharCode(this.getByteAt(t))
    }
    ,
    this.toBase64 = function() {
        return window.btoa(i)
    }
    ,
    this.fromBase64 = function(t) {
        i = window.atob(t)
    }
}
  , BinaryAjax = function() {
    function t() {
        var t = null;
        return window.ActiveXObject ? t = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (t = new XMLHttpRequest),
        t
    }
    function e(e, n, i) {
        var r = t();
        r ? (n && ("undefined" != typeof r.onload ? r.onload = function() {
            "200" == r.status ? n(this) : i && i(),
            r = null
        }
        : r.onreadystatechange = function() {
            4 == r.readyState && ("200" == r.status ? n(this) : i && i(),
            r = null)
        }
        ),
        r.open("HEAD", e, !0),
        r.send(null)) : i && i()
    }
    function n(e, n, i, r, o, s) {
        var a = t();
        if (a) {
            var l = 0;
            r && !o && (l = r[0]);
            var u = 0;
            r && (u = r[1] - r[0] + 1),
            n && ("undefined" != typeof a.onload ? a.onload = function() {
                "200" == a.status || "206" == a.status || "0" == a.status ? (a.binaryResponse = new BinaryFile(a.responseText,l,u),
                a.fileSize = s || a.getResponseHeader("Content-Length"),
                n(a)) : i && i(),
                a = null
            }
            : a.onreadystatechange = function() {
                if (4 == a.readyState) {
                    if ("200" == a.status || "206" == a.status || "0" == a.status) {
                        var t = {
                            status: a.status,
                            binaryResponse: new BinaryFile("unknown" == typeof a.responseBody ? a.responseBody : a.responseText,l,u),
                            fileSize: s || a.getResponseHeader("Content-Length")
                        };
                        n(t)
                    } else
                        i && i();
                    a = null
                }
            }
            ),
            a.open("GET", e, !0),
            a.overrideMimeType && a.overrideMimeType("text/plain; charset=x-user-defined"),
            r && o && a.setRequestHeader("Range", "bytes=" + r[0] + "-" + r[1]),
            a.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT"),
            a.send(null)
        } else
            i && i()
    }
    return function(t, i, r, o) {
        o ? e(t, function(e) {
            var s, a, l = parseInt(e.getResponseHeader("Content-Length"), 10), u = e.getResponseHeader("Accept-Ranges");
            s = o[0],
            o[0] < 0 && (s += l),
            a = s + o[1] - 1,
            n(t, i, r, [s, a], "bytes" == u, l)
        }) : n(t, i, r)
    }
}();
document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n\tIEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\nEnd Function\r\nFunction IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n  Dim aBytes()\r\n  ReDim aBytes(iLength - 1)\r\n  For i = 0 To iLength - 1\r\n   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n  Next\r\n  IEBinary_getBytesAt = aBytes\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n\tIEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n</script>\r\n");
var EXIF = function() {
    function t(t) {
        return !!t.exifdata
    }
    function e(t, e) {
        function i(i) {
            var r = n(i);
            t.exifdata = r || {},
            e && e.call(t)
        }
        if (t instanceof Image)
            BinaryAjax(t.src, function(t) {
                i(t.binaryResponse)
            });
        else if (window.FileReader && t instanceof window.File) {
            var r = new FileReader;
            r.onload = function(t) {
                i(new BinaryFile(t.target.result))
            }
            ,
            r.readAsBinaryString(t)
        }
    }
    function n(t) {
        if (255 != t.getByteAt(0) || 216 != t.getByteAt(1))
            return !1;
        for (var e, n = 2, i = t.getLength(); n < i; ) {
            if (255 != t.getByteAt(n))
                return h && console.log("Not a valid marker at offset " + n + ", found: " + t.getByteAt(n)),
                !1;
            if (22400 == (e = t.getByteAt(n + 1)))
                return h && console.log("Found 0xFFE1 marker"),
                o(t, n + 4, t.getShortAt(n + 2, !0) - 2);
            if (225 == e)
                return h && console.log("Found 0xFFE1 marker"),
                o(t, n + 4, t.getShortAt(n + 2, !0) - 2);
            n += 2 + t.getShortAt(n + 2, !0)
        }
    }
    function i(t, e, n, i, o) {
        var s, a, l, u = t.getShortAt(n, o), c = {};
        for (l = 0; l < u; l++)
            s = n + 12 * l + 2,
            !(a = i[t.getShortAt(s, o)]) && h && console.log("Unknown tag: " + t.getShortAt(s, o)),
            c[a] = r(t, s, e, n, o);
        return c
    }
    function r(t, e, n, i, r) {
        var o, s, a, l, u, c = t.getShortAt(e + 2, r), h = t.getLongAt(e + 4, r), d = t.getLongAt(e + 8, r) + n;
        switch (c) {
        case 1:
        case 7:
            if (1 == h)
                return t.getByteAt(e + 8, r);
            for (o = h > 4 ? d : e + 8,
            s = [],
            p = 0; p < h; p++)
                s[p] = t.getByteAt(o + p);
            return s;
        case 2:
            return o = h > 4 ? d : e + 8,
            t.getStringAt(o, h - 1);
        case 3:
            if (1 == h)
                return t.getShortAt(e + 8, r);
            for (o = h > 2 ? d : e + 8,
            s = [],
            p = 0; p < h; p++)
                s[p] = t.getShortAt(o + 2 * p, r);
            return s;
        case 4:
            if (1 == h)
                return t.getLongAt(e + 8, r);
            s = [];
            for (var p = 0; p < h; p++)
                s[p] = t.getLongAt(d + 4 * p, r);
            return s;
        case 5:
            if (1 == h)
                return l = t.getLongAt(d, r),
                u = t.getLongAt(d + 4, r),
                (a = new Number(l / u)).numerator = l,
                a.denominator = u,
                a;
            for (s = [],
            p = 0; p < h; p++)
                l = t.getLongAt(d + 8 * p, r),
                u = t.getLongAt(d + 4 + 8 * p, r),
                s[p] = new Number(l / u),
                s[p].numerator = l,
                s[p].denominator = u;
            return s;
        case 9:
            if (1 == h)
                return t.getSLongAt(e + 8, r);
            for (s = [],
            p = 0; p < h; p++)
                s[p] = t.getSLongAt(d + 4 * p, r);
            return s;
        case 10:
            if (1 == h)
                return t.getSLongAt(d, r) / t.getSLongAt(d + 4, r);
            for (s = [],
            p = 0; p < h; p++)
                s[p] = t.getSLongAt(d + 8 * p, r) / t.getSLongAt(d + 4 + 8 * p, r);
            return s
        }
    }
    function o(t, e) {
        if ("Exif" != t.getStringAt(e, 4))
            return h && console.log("Not valid EXIF data! " + t.getStringAt(e, 4)),
            !1;
        var n, r, o, s, a, l = e + 6;
        if (18761 == t.getShortAt(l))
            n = !1;
        else {
            if (19789 != t.getShortAt(l))
                return h && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),
                !1;
            n = !0
        }
        if (42 != t.getShortAt(l + 2, n))
            return h && console.log("Not valid TIFF data! (no 0x002A)"),
            !1;
        if (8 != t.getLongAt(l + 4, n))
            return h && console.log("Not valid TIFF data! (First offset not 8)", t.getShortAt(l + 4, n)),
            !1;
        if ((r = i(t, l, l + 8, p, n)).ExifIFDPointer)
            for (o in s = i(t, l, l + r.ExifIFDPointer, d, n)) {
                switch (o) {
                case "LightSource":
                case "Flash":
                case "MeteringMode":
                case "ExposureProgram":
                case "SensingMethod":
                case "SceneCaptureType":
                case "SceneType":
                case "CustomRendered":
                case "WhiteBalance":
                case "GainControl":
                case "Contrast":
                case "Saturation":
                case "Sharpness":
                case "SubjectDistanceRange":
                case "FileSource":
                    s[o] = m[o][s[o]];
                    break;
                case "ExifVersion":
                case "FlashpixVersion":
                    s[o] = String.fromCharCode(s[o][0], s[o][1], s[o][2], s[o][3]);
                    break;
                case "ComponentsConfiguration":
                    s[o] = m.Components[s[o][0]] + m.Components[s[o][1]] + m.Components[s[o][2]] + m.Components[s[o][3]]
                }
                r[o] = s[o]
            }
        if (r.GPSInfoIFDPointer)
            for (o in a = i(t, l, l + r.GPSInfoIFDPointer, f, n)) {
                switch (o) {
                case "GPSVersionID":
                    a[o] = a[o][0] + "." + a[o][1] + "." + a[o][2] + "." + a[o][3]
                }
                r[o] = a[o]
            }
        return r
    }
    function s(n, i) {
        return !(n instanceof Image && !n.complete) && (t(n) ? i && i.call(n) : e(n, i),
        !0)
    }
    function a(e, n) {
        if (t(e))
            return e.exifdata[n]
    }
    function l(e) {
        if (!t(e))
            return {};
        var n, i = e.exifdata, r = {};
        for (n in i)
            i.hasOwnProperty(n) && (r[n] = i[n]);
        return r
    }
    function u(e) {
        if (!t(e))
            return "";
        var n, i = e.exifdata, r = "";
        for (n in i)
            i.hasOwnProperty(n) && ("object" == typeof i[n] ? i[n]instanceof Number ? r += n + " : " + i[n] + " [" + i[n].numerator + "/" + i[n].denominator + "]\r\n" : r += n + " : [" + i[n].length + " values]\r\n" : r += n + " : " + i[n] + "\r\n");
        return r
    }
    function c(t) {
        return n(t)
    }
    var h = !1
      , d = {
        36864: "ExifVersion",
        40960: "FlashpixVersion",
        40961: "ColorSpace",
        40962: "PixelXDimension",
        40963: "PixelYDimension",
        37121: "ComponentsConfiguration",
        37122: "CompressedBitsPerPixel",
        37500: "MakerNote",
        37510: "UserComment",
        40964: "RelatedSoundFile",
        36867: "DateTimeOriginal",
        36868: "DateTimeDigitized",
        37520: "SubsecTime",
        37521: "SubsecTimeOriginal",
        37522: "SubsecTimeDigitized",
        33434: "ExposureTime",
        33437: "FNumber",
        34850: "ExposureProgram",
        34852: "SpectralSensitivity",
        34855: "ISOSpeedRatings",
        34856: "OECF",
        37377: "ShutterSpeedValue",
        37378: "ApertureValue",
        37379: "BrightnessValue",
        37380: "ExposureBias",
        37381: "MaxApertureValue",
        37382: "SubjectDistance",
        37383: "MeteringMode",
        37384: "LightSource",
        37385: "Flash",
        37396: "SubjectArea",
        37386: "FocalLength",
        41483: "FlashEnergy",
        41484: "SpatialFrequencyResponse",
        41486: "FocalPlaneXResolution",
        41487: "FocalPlaneYResolution",
        41488: "FocalPlaneResolutionUnit",
        41492: "SubjectLocation",
        41493: "ExposureIndex",
        41495: "SensingMethod",
        41728: "FileSource",
        41729: "SceneType",
        41730: "CFAPattern",
        41985: "CustomRendered",
        41986: "ExposureMode",
        41987: "WhiteBalance",
        41988: "DigitalZoomRation",
        41989: "FocalLengthIn35mmFilm",
        41990: "SceneCaptureType",
        41991: "GainControl",
        41992: "Contrast",
        41993: "Saturation",
        41994: "Sharpness",
        41995: "DeviceSettingDescription",
        41996: "SubjectDistanceRange",
        40965: "InteroperabilityIFDPointer",
        42016: "ImageUniqueID"
    }
      , p = {
        256: "ImageWidth",
        257: "ImageHeight",
        34665: "ExifIFDPointer",
        34853: "GPSInfoIFDPointer",
        40965: "InteroperabilityIFDPointer",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        274: "Orientation",
        277: "SamplesPerPixel",
        284: "PlanarConfiguration",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        282: "XResolution",
        283: "YResolution",
        296: "ResolutionUnit",
        273: "StripOffsets",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        513: "JPEGInterchangeFormat",
        514: "JPEGInterchangeFormatLength",
        301: "TransferFunction",
        318: "WhitePoint",
        319: "PrimaryChromaticities",
        529: "YCbCrCoefficients",
        532: "ReferenceBlackWhite",
        306: "DateTime",
        270: "ImageDescription",
        271: "Make",
        272: "Model",
        305: "Software",
        315: "Artist",
        33432: "Copyright"
    }
      , f = {
        0: "GPSVersionID",
        1: "GPSLatitudeRef",
        2: "GPSLatitude",
        3: "GPSLongitudeRef",
        4: "GPSLongitude",
        5: "GPSAltitudeRef",
        6: "GPSAltitude",
        7: "GPSTimeStamp",
        8: "GPSSatellites",
        9: "GPSStatus",
        10: "GPSMeasureMode",
        11: "GPSDOP",
        12: "GPSSpeedRef",
        13: "GPSSpeed",
        14: "GPSTrackRef",
        15: "GPSTrack",
        16: "GPSImgDirectionRef",
        17: "GPSImgDirection",
        18: "GPSMapDatum",
        19: "GPSDestLatitudeRef",
        20: "GPSDestLatitude",
        21: "GPSDestLongitudeRef",
        22: "GPSDestLongitude",
        23: "GPSDestBearingRef",
        24: "GPSDestBearing",
        25: "GPSDestDistanceRef",
        26: "GPSDestDistance",
        27: "GPSProcessingMethod",
        28: "GPSAreaInformation",
        29: "GPSDateStamp",
        30: "GPSDifferential"
    }
      , m = {
        ExposureProgram: {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0: "Flash did not fire",
            1: "Flash fired",
            5: "Strobe return light not detected",
            7: "Strobe return light detected",
            9: "Flash fired, compulsory flash mode",
            13: "Flash fired, compulsory flash mode, return light not detected",
            15: "Flash fired, compulsory flash mode, return light detected",
            16: "Flash did not fire, compulsory flash mode",
            24: "Flash did not fire, auto mode",
            25: "Flash fired, auto mode",
            29: "Flash fired, auto mode, return light not detected",
            31: "Flash fired, auto mode, return light detected",
            32: "No flash function",
            65: "Flash fired, red-eye reduction mode",
            69: "Flash fired, red-eye reduction mode, return light not detected",
            71: "Flash fired, red-eye reduction mode, return light detected",
            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            89: "Flash fired, auto mode, red-eye reduction mode",
            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night scene"
        },
        SceneType: {
            1: "Directly photographed"
        },
        CustomRendered: {
            0: "Normal process",
            1: "Custom process"
        },
        WhiteBalance: {
            0: "Auto white balance",
            1: "Manual white balance"
        },
        GainControl: {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        },
        Contrast: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        Saturation: {
            0: "Normal",
            1: "Low saturation",
            2: "High saturation"
        },
        Sharpness: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        SubjectDistanceRange: {
            0: "Unknown",
            1: "Macro",
            2: "Close view",
            3: "Distant view"
        },
        FileSource: {
            3: "DSC"
        },
        Components: {
            0: "",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    };
    return {
        readFromBinaryFile: c,
        pretty: u,
        getTag: a,
        getAllTags: l,
        getData: s,
        Tags: d,
        TiffTags: p,
        GPSTags: f,
        StringValues: m
    }
}();
!function(t) {
    function e() {
        var e, n, i = {
            height: u.innerHeight,
            width: u.innerWidth
        };
        return i.height || !(e = l.compatMode) && t.support.boxModel || (i = {
            height: (n = "CSS1Compat" === e ? c : l.body).clientHeight,
            width: n.clientWidth
        }),
        i
    }
    function n() {
        return {
            top: u.pageYOffset || c.scrollTop || l.body.scrollTop,
            left: u.pageXOffset || c.scrollLeft || l.body.scrollLeft
        }
    }
    function i() {
        var i, s = t(), l = 0;
        if (t.each(a, function(t, e) {
            var n = e.data.selector
              , i = e.$element;
            s = s.add(n ? i.find(n) : i)
        }),
        i = s.length)
            for (r = r || e(),
            o = o || n(); l < i; l++)
                if (t.contains(c, s[l])) {
                    var u, h, d, p = t(s[l]), f = {
                        height: p.height(),
                        width: p.width()
                    }, m = p.offset(), g = p.data("inview");
                    if (!o || !r)
                        return;
                    m.top + f.height > o.top && m.top < o.top + r.height && m.left + f.width > o.left && m.left < o.left + r.width ? (d = (u = o.left > m.left ? "right" : o.left + r.width < m.left + f.width ? "left" : "both") + "-" + (h = o.top > m.top ? "bottom" : o.top + r.height < m.top + f.height ? "top" : "both"),
                    g && g === d || p.data("inview", d).trigger("inview", [!0, u, h])) : g && p.data("inview", !1).trigger("inview", [!1])
                }
    }
    var r, o, s, a = {}, l = document, u = window, c = l.documentElement, h = t.expando;
    t.event.special.inview = {
        add: function(e) {
            a[e.guid + "-" + this[h]] = {
                data: e,
                $element: t(this)
            },
            s || t.isEmptyObject(a) || (s = setInterval(i, 250))
        },
        remove: function(e) {
            try {
                delete a[e.guid + "-" + this[h]]
            } catch (n) {}
            t.isEmptyObject(a) && (clearInterval(s),
            s = null)
        }
    },
    t(u).bind("scroll resize", function() {
        r = o = null
    }),
    !c.addEventListener && c.attachEvent && c.attachEvent("onfocusin", function() {
        o = null
    })
}(jQuery);
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0
  , deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent)
  , deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent)
  , deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function(t) {
    "use strict";
    switch (t.nodeName.toLowerCase()) {
    case "button":
    case "select":
    case "textarea":
        if (t.disabled)
            return !0;
        break;
    case "input":
        if ("text" === t.type || "password" === t.type)
            return !0;
        if (deviceIsIOS && "file" === t.type || t.disabled)
            return !0;
        break;
    case "label":
    case "video":
        return !0
    }
    return /\bneedsclick\b/.test(t.className)
}
,
FastClick.prototype.needsFocus = function(t) {
    "use strict";
    switch (t.nodeName.toLowerCase()) {
    case "textarea":
        return !0;
    case "select":
        return !deviceIsAndroid;
    case "input":
        switch (t.type) {
        case "button":
        case "checkbox":
        case "file":
        case "image":
        case "radio":
        case "submit":
        case "text":
        case "password":
            return !1
        }
        return !t.disabled && !t.readOnly;
    default:
        return /\bneedsfocus\b/.test(t.className)
    }
}
,
FastClick.prototype.sendClick = function(t, e) {
    "use strict";
    var n, i;
    document.activeElement && document.activeElement !== t && document.activeElement.blur(),
    i = e.changedTouches[0],
    (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
    n.forwardedTouchEvent = !0,
    t.dispatchEvent(n)
}
,
FastClick.prototype.determineEventType = function(t) {
    "use strict";
    return deviceIsAndroid && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
}
,
FastClick.prototype.focus = function(t) {
    "use strict";
    var e;
    deviceIsIOS && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length,
    t.setSelectionRange(e, e)) : t.focus()
}
,
FastClick.prototype.updateScrollParent = function(t) {
    "use strict";
    var e, n;
    if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
        n = t;
        do {
            if (n.scrollHeight > n.offsetHeight) {
                e = n,
                t.fastClickScrollParent = n;
                break
            }
            n = n.parentElement
        } while (n)
    }
    e && (e.fastClickLastScrollTop = e.scrollTop)
}
,
FastClick.prototype.getTargetElementFromEventTarget = function(t) {
    "use strict";
    return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
}
,
FastClick.prototype.onTouchStart = function(t) {
    "use strict";
    var e, n, i;
    if (t.targetTouches.length > 1)
        return !0;
    if (e = this.getTargetElementFromEventTarget(t.target),
    n = t.targetTouches[0],
    deviceIsIOS) {
        if ((i = window.getSelection()).rangeCount && !i.isCollapsed)
            return !0;
        if (!deviceIsIOS4) {
            if (n.identifier === this.lastTouchIdentifier)
                return t.preventDefault(),
                !1;
            this.lastTouchIdentifier = n.identifier,
            this.updateScrollParent(e)
        }
    }
    return this.trackingClick = !0,
    this.trackingClickStart = t.timeStamp,
    this.targetElement = e,
    this.touchStartX = n.pageX,
    this.touchStartY = n.pageY,
    t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(),
    !0
}
,
FastClick.prototype.touchHasMoved = function(t) {
    "use strict";
    var e = t.changedTouches[0]
      , n = this.touchBoundary;
    return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
}
,
FastClick.prototype.onTouchMove = function(t) {
    "use strict";
    return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1,
    this.targetElement = null),
    !0)
}
,
FastClick.prototype.findControl = function(t) {
    "use strict";
    return t.control !== undefined ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}
,
FastClick.prototype.onTouchEnd = function(t) {
    "use strict";
    var e, n, i, r, o, s = this.targetElement;
    if (!this.trackingClick)
        return !0;
    if (t.timeStamp - this.lastClickTime < this.tapDelay)
        return this.cancelNextClick = !0,
        !0;
    if (this.cancelNextClick = !1,
    this.lastClickTime = t.timeStamp,
    n = this.trackingClickStart,
    this.trackingClick = !1,
    this.trackingClickStart = 0,
    deviceIsIOSWithBadTarget && (o = t.changedTouches[0],
    (s = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || s).fastClickScrollParent = this.targetElement.fastClickScrollParent),
    "label" === (i = s.tagName.toLowerCase())) {
        if (e = this.findControl(s)) {
            if (this.focus(s),
            deviceIsAndroid)
                return !1;
            s = e
        }
    } else if (this.needsFocus(s))
        return t.timeStamp - n > 100 || deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null,
        !1) : (this.focus(s),
        this.sendClick(s, t),
        deviceIsIOS4 && "select" === i || (this.targetElement = null,
        t.preventDefault()),
        !1);
    return !(!deviceIsIOS || deviceIsIOS4 || !(r = s.fastClickScrollParent) || r.fastClickLastScrollTop === r.scrollTop) || (this.needsClick(s) || (t.preventDefault(),
    this.sendClick(s, t)),
    !1)
}
,
FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1,
    this.targetElement = null
}
,
FastClick.prototype.onMouse = function(t) {
    "use strict";
    return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0,
    t.stopPropagation(),
    t.preventDefault(),
    !1))))
}
,
FastClick.prototype.onClick = function(t) {
    "use strict";
    var e;
    return this.trackingClick ? (this.targetElement = null,
    this.trackingClick = !1,
    !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null),
    e)
}
,
FastClick.prototype.destroy = function() {
    "use strict";
    var t = this.layer;
    deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0),
    t.removeEventListener("mousedown", this.onMouse, !0),
    t.removeEventListener("mouseup", this.onMouse, !0)),
    t.removeEventListener("click", this.onClick, !0),
    t.removeEventListener("touchstart", this.onTouchStart, !1),
    t.removeEventListener("touchmove", this.onTouchMove, !1),
    t.removeEventListener("touchend", this.onTouchEnd, !1),
    t.removeEventListener("touchcancel", this.onTouchCancel, !1)
}
,
FastClick.notNeeded = function(t) {
    "use strict";
    var e, n;
    if ("undefined" == typeof window.ontouchstart)
        return !0;
    if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!deviceIsAndroid)
            return !0;
        if (e = document.querySelector("meta[name=viewport]")) {
            if (-1 !== e.content.indexOf("user-scalable=no"))
                return !0;
            if (n > 31 && window.innerWidth <= window.screen.width)
                return !0
        }
    }
    return "none" === t.style.msTouchAction
}
,
FastClick.attach = function(t, e) {
    "use strict";
    return new FastClick(t,e)
}
,
"undefined" != typeof define && define.amd ? define(function() {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach,
module.exports.FastClick = FastClick) : window.FastClick = FastClick,
function(t) {
    t.belowthefold = function(e, n) {
        return t(window).height() + t(window).scrollTop() <= t(e).offset().top - n.threshold
    }
    ,
    t.abovethetop = function(e, n) {
        return t(window).scrollTop() >= t(e).offset().top + t(e).height() - n.threshold
    }
    ,
    t.rightofscreen = function(e, n) {
        return t(window).width() + t(window).scrollLeft() <= t(e).offset().left - n.threshold
    }
    ,
    t.leftofscreen = function(e, n) {
        return t(window).scrollLeft() >= t(e).offset().left + t(e).width() - n.threshold
    }
    ,
    t.inviewport = function(e, n) {
        return !(t.rightofscreen(e, n) || t.leftofscreen(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
    }
    ,
    t.extend(t.expr[":"], {
        "below-the-fold": function(e) {
            return t.belowthefold(e, {
                threshold: 0
            })
        },
        "above-the-top": function(e) {
            return t.abovethetop(e, {
                threshold: 0
            })
        },
        "left-of-screen": function(e) {
            return t.leftofscreen(e, {
                threshold: 0
            })
        },
        "right-of-screen": function(e) {
            return t.rightofscreen(e, {
                threshold: 0
            })
        },
        "in-viewport": function(e) {
            return t.inviewport(e, {
                threshold: 0
            })
        }
    })
}(jQuery),
/*!
* jQuery UI Touch Punch 0.2.3
*
* Copyright 2011–2014, Dave Furfero
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* Depends:
* jquery.ui.widget.js
* jquery.ui.mouse.js
*/
function(t) {
    function e(t, e) {
        if (!(t.originalEvent.touches.length > 1)) {
            t.preventDefault();
            var n = t.originalEvent.changedTouches[0]
              , i = document.createEvent("MouseEvents");
            i.initMouseEvent(e, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
            t.target.dispatchEvent(i)
        }
    }
    if (t.support.touch = "ontouchend"in document,
    t.support.touch) {
        var n, i = t.ui.mouse.prototype, r = i._mouseInit, o = i._mouseDestroy;
        i._touchStart = function(t) {
            var i = this;
            !n && i._mouseCapture(t.originalEvent.changedTouches[0]) && (n = !0,
            i._touchMoved = !1,
            e(t, "mouseover"),
            e(t, "mousemove"),
            e(t, "mousedown"))
        }
        ,
        i._touchMove = function(t) {
            n && (this._touchMoved = !0,
            e(t, "mousemove"))
        }
        ,
        i._touchEnd = function(t) {
            n && (e(t, "mouseup"),
            e(t, "mouseout"),
            this._touchMoved || e(t, "click"),
            n = !1)
        }
        ,
        i._mouseInit = function() {
            var e = this;
            e.element.bind({
                touchstart: t.proxy(e, "_touchStart"),
                touchmove: t.proxy(e, "_touchMove"),
                touchend: t.proxy(e, "_touchEnd")
            }),
            r.call(e)
        }
        ,
        i._mouseDestroy = function() {
            var e = this;
            e.element.unbind({
                touchstart: t.proxy(e, "_touchStart"),
                touchmove: t.proxy(e, "_touchMove"),
                touchend: t.proxy(e, "_touchEnd")
            }),
            o.call(e)
        }
    }
}(jQuery),
"function" != typeof Object.create && (Object.create = function(t) {
    function e() {}
    return e.prototype = t,
    new e
}
),
function(t, e, n) {
    var i = {
        init: function(e, n) {
            var i = this;
            i.$elem = t(n),
            i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e),
            i.userOptions = e,
            i.loadContent()
        },
        loadContent: function() {
            function e(t) {
                var e, n = "";
                if ("function" == typeof i.options.jsonSuccess)
                    i.options.jsonSuccess.apply(this, [t]);
                else {
                    for (e in t.owl)
                        t.owl.hasOwnProperty(e) && (n += t.owl[e].item);
                    i.$elem.html(n)
                }
                i.logIn()
            }
            var n, i = this;
            "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]),
            "string" == typeof i.options.jsonPath ? (n = i.options.jsonPath,
            t.getJSON(n, e)) : i.logIn()
        },
        logIn: function() {
            var t = this;
            t.$elem.data("owl-originalStyles", t.$elem.attr("style")),
            t.$elem.data("owl-originalClasses", t.$elem.attr("class")),
            t.$elem.css({
                opacity: 0
            }),
            t.orignalItems = t.options.items,
            t.checkBrowser(),
            t.wrapperWidth = 0,
            t.checkVisible = null,
            t.setVars()
        },
        setVars: function() {
            var t = this;
            if (0 === t.$elem.children().length)
                return !1;
            t.baseClass(),
            t.eventTypes(),
            t.$userItems = t.$elem.children(),
            t.itemsAmount = t.$userItems.length,
            t.wrapItems(),
            t.$owlItems = t.$elem.find(".owl-item"),
            t.$owlWrapper = t.$elem.find(".owl-wrapper"),
            t.playDirection = "next",
            t.prevItem = 0,
            t.prevArr = [0],
            t.currentItem = 0,
            t.customEvents(),
            t.onStartup()
        },
        onStartup: function() {
            var t = this;
            t.updateItems(),
            t.calculateAll(),
            t.buildControls(),
            t.updateControls(),
            t.response(),
            t.moveEvents(),
            t.stopOnHover(),
            t.owlStatus(),
            !1 !== t.options.transitionStyle && t.transitionTypes(t.options.transitionStyle),
            !0 === t.options.autoPlay && (t.options.autoPlay = 5e3),
            t.play(),
            t.$elem.find(".owl-wrapper").css("display", "block"),
            t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(),
            t.onstartup = !1,
            t.eachMoveUpdate(),
            "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
        },
        eachMoveUpdate: function() {
            var t = this;
            !0 === t.options.lazyLoad && t.lazyLoad(),
            !0 === t.options.autoHeight && t.autoHeight(),
            t.onVisibleItems(),
            "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
        },
        updateVars: function() {
            var t = this;
            "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]),
            t.watchVisibility(),
            t.updateItems(),
            t.calculateAll(),
            t.updatePosition(),
            t.updateControls(),
            t.eachMoveUpdate(),
            "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
        },
        reload: function() {
            var t = this;
            e.setTimeout(function() {
                t.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var t = this;
            if (!1 !== t.$elem.is(":visible"))
                return !1;
            t.$elem.css({
                opacity: 0
            }),
            e.clearInterval(t.autoPlayInterval),
            e.clearInterval(t.checkVisible),
            t.checkVisible = e.setInterval(function() {
                t.$elem.is(":visible") && (t.reload(),
                t.$elem.animate({
                    opacity: 1
                }, 200),
                e.clearInterval(t.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            var t = this;
            t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),
            t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),
            t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"),
            t.$elem.css("display", "block")
        },
        baseClass: function() {
            var t = this
              , e = t.$elem.hasClass(t.options.baseClass)
              , n = t.$elem.hasClass(t.options.theme);
            e || t.$elem.addClass(t.options.baseClass),
            n || t.$elem.addClass(t.options.theme)
        },
        updateItems: function() {
            var e, n, i = this;
            if (!1 === i.options.responsive)
                return !1;
            if (!0 === i.options.singleItem)
                return i.options.items = i.orignalItems = 1,
                i.options.itemsCustom = !1,
                i.options.itemsDesktop = !1,
                i.options.itemsDesktopSmall = !1,
                i.options.itemsTablet = !1,
                i.options.itemsTabletSmall = !1,
                i.options.itemsMobile = !1,
                !1;
            if ((e = t(i.options.responsiveBaseWidth).width()) > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems),
            !1 !== i.options.itemsCustom)
                for (i.options.itemsCustom.sort(function(t, e) {
                    return t[0] - e[0]
                }),
                n = 0; n < i.options.itemsCustom.length; n += 1)
                    i.options.itemsCustom[n][0] <= e && (i.options.items = i.options.itemsCustom[n][1]);
            else
                e <= i.options.itemsDesktop[0] && !1 !== i.options.itemsDesktop && (i.options.items = i.options.itemsDesktop[1]),
                e <= i.options.itemsDesktopSmall[0] && !1 !== i.options.itemsDesktopSmall && (i.options.items = i.options.itemsDesktopSmall[1]),
                e <= i.options.itemsTablet[0] && !1 !== i.options.itemsTablet && (i.options.items = i.options.itemsTablet[1]),
                e <= i.options.itemsTabletSmall[0] && !1 !== i.options.itemsTabletSmall && (i.options.items = i.options.itemsTabletSmall[1]),
                e <= i.options.itemsMobile[0] && !1 !== i.options.itemsMobile && (i.options.items = i.options.itemsMobile[1]);
            i.options.items > i.itemsAmount && !0 === i.options.itemsScaleUp && (i.options.items = i.itemsAmount)
        },
        response: function() {
            var n, i, r = this;
            if (!0 !== r.options.responsive)
                return !1;
            i = t(e).width(),
            r.resizer = function() {
                t(e).width() !== i && (!1 !== r.options.autoPlay && e.clearInterval(r.autoPlayInterval),
                e.clearTimeout(n),
                n = e.setTimeout(function() {
                    i = t(e).width(),
                    r.updateVars()
                }, r.options.responsiveRefreshRate))
            }
            ,
            t(e).resize(r.resizer)
        },
        updatePosition: function() {
            var t = this;
            t.jumpTo(t.currentItem),
            !1 !== t.options.autoPlay && t.checkAp()
        },
        appendItemsSizes: function() {
            var e = this
              , n = 0
              , i = e.itemsAmount - e.options.items;
            e.$owlItems.each(function(r) {
                var o = t(this);
                o.css({
                    width: e.itemWidth
                }).data("owl-item", Number(r)),
                r % e.options.items != 0 && r !== i || r > i || (n += 1),
                o.data("owl-roundPages", n)
            })
        },
        appendWrapperSizes: function() {
            var t = this
              , e = t.$owlItems.length * t.itemWidth;
            t.$owlWrapper.css({
                width: 2 * e,
                left: 0
            }),
            t.appendItemsSizes()
        },
        calculateAll: function() {
            var t = this;
            t.calculateWidth(),
            t.appendWrapperSizes(),
            t.loops(),
            t.max()
        },
        calculateWidth: function() {
            var t = this;
            t.itemWidth = Math.round(t.$elem.width() / t.options.items)
        },
        max: function() {
            var t = this
              , e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
            return t.options.items > t.itemsAmount ? (t.maximumItem = 0,
            e = 0,
            t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items,
            t.maximumPixels = e),
            e
        },
        min: function() {
            return 0
        },
        loops: function() {
            var e, n, i = this, r = 0, o = 0;
            for (i.positionsInArray = [0],
            i.pagesInArray = [],
            e = 0; e < i.itemsAmount; e += 1)
                o += i.itemWidth,
                i.positionsInArray.push(-o),
                !0 === i.options.scrollPerPage && (n = t(i.$owlItems[e]).data("owl-roundPages")) !== r && (i.pagesInArray[r] = i.positionsInArray[e],
                r = n)
        },
        buildControls: function() {
            var e = this;
            !0 !== e.options.navigation && !0 !== e.options.pagination || (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)),
            !0 === e.options.pagination && e.buildPagination(),
            !0 === e.options.navigation && e.buildButtons()
        },
        buildButtons: function() {
            var e = this
              , n = t('<div class="owl-buttons"/>');
            e.owlControls.append(n),
            e.buttonPrev = t("<div/>", {
                "class": "owl-prev",
                html: e.options.navigationText[0] || ""
            }),
            e.buttonNext = t("<div/>", {
                "class": "owl-next",
                html: e.options.navigationText[1] || ""
            }),
            n.append(e.buttonPrev).append(e.buttonNext),
            n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                t.preventDefault()
            }),
            n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(n) {
                n.preventDefault(),
                t(this).hasClass("owl-next") ? e.next() : e.prev()
            })
        },
        buildPagination: function() {
            var e = this;
            e.paginationWrapper = t('<div class="owl-pagination"/>'),
            e.owlControls.append(e.paginationWrapper),
            e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(n) {
                n.preventDefault(),
                Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var e, n, i, r, o, s, a = this;
            if (!1 === a.options.pagination)
                return !1;
            for (a.paginationWrapper.html(""),
            e = 0,
            n = a.itemsAmount - a.itemsAmount % a.options.items,
            r = 0; r < a.itemsAmount; r += 1)
                r % a.options.items == 0 && (e += 1,
                n === r && (i = a.itemsAmount - a.options.items),
                o = t("<div/>", {
                    "class": "owl-page"
                }),
                s = t("<span></span>", {
                    text: !0 === a.options.paginationNumbers ? e : "",
                    "class": !0 === a.options.paginationNumbers ? "owl-numbers" : ""
                }),
                o.append(s),
                o.data("owl-page", n === r ? i : r),
                o.data("owl-roundPages", e),
                a.paginationWrapper.append(o));
            a.checkPagination()
        },
        checkPagination: function() {
            var e = this;
            if (!1 === e.options.pagination)
                return !1;
            e.paginationWrapper.find(".owl-page").each(function() {
                t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"),
                t(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            var t = this;
            if (!1 === t.options.navigation)
                return !1;
            !1 === t.options.rewindNav && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"),
            t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"),
            t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"),
            t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"),
            t.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            var t = this;
            t.updatePagination(),
            t.checkNavigation(),
            t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
        },
        destroyControls: function() {
            var t = this;
            t.owlControls && t.owlControls.remove()
        },
        next: function(t) {
            var e = this;
            if (e.isTransition)
                return !1;
            if (e.currentItem += !0 === e.options.scrollPerPage ? e.options.items : 1,
            e.currentItem > e.maximumItem + (!0 === e.options.scrollPerPage ? e.options.items - 1 : 0)) {
                if (!0 !== e.options.rewindNav)
                    return e.currentItem = e.maximumItem,
                    !1;
                e.currentItem = 0,
                t = "rewind"
            }
            e.goTo(e.currentItem, t)
        },
        prev: function(t) {
            var e = this;
            if (e.isTransition)
                return !1;
            if (!0 === e.options.scrollPerPage && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= !0 === e.options.scrollPerPage ? e.options.items : 1,
            e.currentItem < 0) {
                if (!0 !== e.options.rewindNav)
                    return e.currentItem = 0,
                    !1;
                e.currentItem = e.maximumItem,
                t = "rewind"
            }
            e.goTo(e.currentItem, t)
        },
        goTo: function(t, n, i) {
            var r, o = this;
            return !o.isTransition && ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]),
            t >= o.maximumItem ? t = o.maximumItem : t <= 0 && (t = 0),
            o.currentItem = o.owl.currentItem = t,
            !1 !== o.options.transitionStyle && "drag" !== i && 1 === o.options.items && !0 === o.browser.support3d ? (o.swapSpeed(0),
            !0 === o.browser.support3d ? o.transition3d(o.positionsInArray[t]) : o.css2slide(o.positionsInArray[t], 1),
            o.afterGo(),
            o.singleItemTransition(),
            !1) : (r = o.positionsInArray[t],
            !0 === o.browser.support3d ? (o.isCss3Finish = !1,
            !0 === n ? (o.swapSpeed("paginationSpeed"),
            e.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.paginationSpeed)) : "rewind" === n ? (o.swapSpeed(o.options.rewindSpeed),
            e.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"),
            e.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.slideSpeed)),
            o.transition3d(r)) : !0 === n ? o.css2slide(r, o.options.paginationSpeed) : "rewind" === n ? o.css2slide(r, o.options.rewindSpeed) : o.css2slide(r, o.options.slideSpeed),
            void o.afterGo()))
        },
        jumpTo: function(t) {
            var e = this;
            "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]),
            t >= e.maximumItem || -1 === t ? t = e.maximumItem : t <= 0 && (t = 0),
            e.swapSpeed(0),
            !0 === e.browser.support3d ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1),
            e.currentItem = e.owl.currentItem = t,
            e.afterGo()
        },
        afterGo: function() {
            var t = this;
            t.prevArr.push(t.currentItem),
            t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2],
            t.prevArr.shift(0),
            t.prevItem !== t.currentItem && (t.checkPagination(),
            t.checkNavigation(),
            t.eachMoveUpdate(),
            !1 !== t.options.autoPlay && t.checkAp()),
            "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
        },
        stop: function() {
            var t = this;
            t.apStatus = "stop",
            e.clearInterval(t.autoPlayInterval)
        },
        checkAp: function() {
            var t = this;
            "stop" !== t.apStatus && t.play()
        },
        play: function() {
            var t = this;
            if (t.apStatus = "play",
            !1 === t.options.autoPlay)
                return !1;
            e.clearInterval(t.autoPlayInterval),
            t.autoPlayInterval = e.setInterval(function() {
                t.next(!0)
            }, t.options.autoPlay)
        },
        swapSpeed: function(t) {
            var e = this;
            "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
        },
        addCssSpeed: function(t) {
            return {
                "-webkit-transition": "all " + t + "ms ease",
                "-moz-transition": "all " + t + "ms ease",
                "-o-transition": "all " + t + "ms ease",
                transition: "all " + t + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(t) {
            return {
                "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                transform: "translate3d(" + t + "px, 0px,0px)"
            }
        },
        transition3d: function(t) {
            var e = this;
            e.$owlWrapper.css(e.doTranslate(t))
        },
        css2move: function(t) {
            this.$owlWrapper.css({
                left: t
            })
        },
        css2slide: function(t, e) {
            var n = this;
            n.isCssFinish = !1,
            n.$owlWrapper.stop(!0, !0).animate({
                left: t
            }, {
                duration: e || n.options.slideSpeed,
                complete: function() {
                    n.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var t, i, r, o, s = this, a = "translate3d(0px, 0px, 0px)", l = n.createElement("div");
            l.style.cssText = "  -moz-transform:" + a + "; -ms-transform:" + a + "; -o-transform:" + a + "; -webkit-transform:" + a + "; transform:" + a,
            t = /translate3d\(0px, 0px, 0px\)/g,
            r = null !== (i = l.style.cssText.match(t)) && 1 === i.length,
            o = "ontouchstart"in e || e.navigator.msMaxTouchPoints,
            s.browser = {
                support3d: r,
                isTouch: o
            }
        },
        moveEvents: function() {
            var t = this;
            !1 === t.options.mouseDrag && !1 === t.options.touchDrag || (t.gestures(),
            t.disabledEvents())
        },
        eventTypes: function() {
            var t = this
              , e = ["s", "e", "x"];
            t.ev_types = {},
            !0 === t.options.mouseDrag && !0 === t.options.touchDrag ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === t.options.mouseDrag && !0 === t.options.touchDrag ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === t.options.mouseDrag && !1 === t.options.touchDrag && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]),
            t.ev_types.start = e[0],
            t.ev_types.move = e[1],
            t.ev_types.end = e[2]
        },
        disabledEvents: function() {
            var e = this;
            e.$elem.on("dragstart.owl", function(t) {
                t.preventDefault()
            }),
            e.$elem.on("mousedown.disableTextSelect", function(e) {
                return t(e.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function i(t) {
                if (t.touches !== undefined)
                    return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                if (t.touches === undefined) {
                    if (t.pageX !== undefined)
                        return {
                            x: t.pageX,
                            y: t.pageY
                        };
                    if (t.pageX === undefined)
                        return {
                            x: t.clientX,
                            y: t.clientY
                        }
                }
            }
            function r(e) {
                "on" === e ? (t(n).on(l.ev_types.move, s),
                t(n).on(l.ev_types.end, a)) : "off" === e && (t(n).off(l.ev_types.move),
                t(n).off(l.ev_types.end))
            }
            function o(n) {
                var o, s = n.originalEvent || n || e.event;
                if (3 === s.which)
                    return !1;
                if (!(l.itemsAmount <= l.options.items)) {
                    if (!1 === l.isCssFinish && !l.options.dragBeforeAnimFinish)
                        return !1;
                    if (!1 === l.isCss3Finish && !l.options.dragBeforeAnimFinish)
                        return !1;
                    !1 !== l.options.autoPlay && e.clearInterval(l.autoPlayInterval),
                    !0 === l.browser.isTouch || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"),
                    l.newPosX = 0,
                    l.newRelativeX = 0,
                    t(this).css(l.removeTransition()),
                    o = t(this).position(),
                    u.relativePos = o.left,
                    u.offsetX = i(s).x - o.left,
                    u.offsetY = i(s).y - o.top,
                    r("on"),
                    u.sliding = !1,
                    u.targetElement = s.target || s.srcElement
                }
            }
            function s(r) {
                var o, s, a = r.originalEvent || r || e.event;
                l.newPosX = i(a).x - u.offsetX,
                l.newPosY = i(a).y - u.offsetY,
                l.newRelativeX = l.newPosX - u.relativePos,
                "function" == typeof l.options.startDragging && !0 !== u.dragging && 0 !== l.newRelativeX && (u.dragging = !0,
                l.options.startDragging.apply(l, [l.$elem])),
                (l.newRelativeX > 8 || l.newRelativeX < -8) && !0 === l.browser.isTouch && (a.preventDefault !== undefined ? a.preventDefault() : a.returnValue = !1,
                u.sliding = !0),
                (l.newPosY > 10 || l.newPosY < -10) && !1 === u.sliding && t(n).off("touchmove.owl"),
                o = function() {
                    return l.newRelativeX / 5
                }
                ,
                s = function() {
                    return l.maximumPixels + l.newRelativeX / 5
                }
                ,
                l.newPosX = Math.max(Math.min(l.newPosX, o()), s()),
                !0 === l.browser.support3d ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
            }
            function a(n) {
                var i, o, s, a = n.originalEvent || n || e.event;
                a.target = a.target || a.srcElement,
                u.dragging = !1,
                !0 !== l.browser.isTouch && l.$owlWrapper.removeClass("grabbing"),
                l.newRelativeX < 0 ? l.dragDirection = l.owl.dragDirection = "left" : l.dragDirection = l.owl.dragDirection = "right",
                0 !== l.newRelativeX && (i = l.getNewPosition(),
                l.goTo(i, !1, "drag"),
                u.targetElement === a.target && !0 !== l.browser.isTouch && (t(a.target).on("click.disable", function(e) {
                    e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    e.preventDefault(),
                    t(e.target).off("click.disable")
                }),
                s = (o = t._data(a.target, "events").click).pop(),
                o.splice(0, 0, s))),
                r("off")
            }
            var l = this
              , u = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            l.isCssFinish = !0,
            l.$elem.on(l.ev_types.start, ".owl-wrapper", o)
        },
        getNewPosition: function() {
            var t = this
              , e = t.closestItem();
            return e > t.maximumItem ? (t.currentItem = t.maximumItem,
            e = t.maximumItem) : t.newPosX >= 0 && (e = 0,
            t.currentItem = 0),
            e
        },
        closestItem: function() {
            var e = this
              , n = !0 === e.options.scrollPerPage ? e.pagesInArray : e.positionsInArray
              , i = e.newPosX
              , r = null;
            return t.each(n, function(o, s) {
                i - e.itemWidth / 20 > n[o + 1] && i - e.itemWidth / 20 < s && "left" === e.moveDirection() ? (r = s,
                !0 === e.options.scrollPerPage ? e.currentItem = t.inArray(r, e.positionsInArray) : e.currentItem = o) : i + e.itemWidth / 20 < s && i + e.itemWidth / 20 > (n[o + 1] || n[o] - e.itemWidth) && "right" === e.moveDirection() && (!0 === e.options.scrollPerPage ? (r = n[o + 1] || n[n.length - 1],
                e.currentItem = t.inArray(r, e.positionsInArray)) : (r = n[o + 1],
                e.currentItem = o + 1))
            }),
            e.currentItem
        },
        moveDirection: function() {
            var t, e = this;
            return e.newRelativeX < 0 ? (t = "right",
            e.playDirection = "next") : (t = "left",
            e.playDirection = "prev"),
            t
        },
        customEvents: function() {
            var t = this;
            t.$elem.on("owl.next", function() {
                t.next()
            }),
            t.$elem.on("owl.prev", function() {
                t.prev()
            }),
            t.$elem.on("owl.play", function(e, n) {
                t.options.autoPlay = n,
                t.play(),
                t.hoverStatus = "play"
            }),
            t.$elem.on("owl.stop", function() {
                t.stop(),
                t.hoverStatus = "stop"
            }),
            t.$elem.on("owl.goTo", function(e, n) {
                t.goTo(n)
            }),
            t.$elem.on("owl.jumpTo", function(e, n) {
                t.jumpTo(n)
            })
        },
        stopOnHover: function() {
            var t = this;
            !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function() {
                t.stop()
            }),
            t.$elem.on("mouseout", function() {
                "stop" !== t.hoverStatus && t.play()
            }))
        },
        lazyLoad: function() {
            var e, n, i, r, o = this;
            if (!1 === o.options.lazyLoad)
                return !1;
            for (e = 0; e < o.itemsAmount; e += 1)
                "loaded" !== (n = t(o.$owlItems[e])).data("owl-loaded") && (i = n.data("owl-item"),
                "string" == typeof (r = n.find(".lazyOwl")).data("src") ? (n.data("owl-loaded") === undefined && (r.hide(),
                n.addClass("loading").data("owl-loaded", "checked")),
                (!0 !== o.options.lazyFollow || i >= o.currentItem) && i < o.currentItem + o.options.items && r.length && o.lazyPreload(n, r)) : n.data("owl-loaded", "loaded"))
        },
        lazyPreload: function(t, n) {
            function i() {
                t.data("owl-loaded", "loaded").removeClass("loading"),
                n.removeAttr("data-src"),
                "fade" === s.options.lazyEffect ? n.fadeIn(400) : n.show(),
                "function" == typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
            }
            function r() {
                a += 1,
                s.completeImg(n.get(0)) || !0 === o ? i() : a <= 100 ? e.setTimeout(r, 100) : i()
            }
            var o, s = this, a = 0;
            "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"),
            o = !0) : n[0].src = n.data("src"),
            r()
        },
        autoHeight: function() {
            function n() {
                var n = t(o.$owlItems[o.currentItem]).height();
                o.wrapperOuter.css("height", n + "px"),
                o.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                    o.wrapperOuter.addClass("autoHeight")
                }, 0)
            }
            function i() {
                r += 1,
                o.completeImg(s.get(0)) ? n() : r <= 100 ? e.setTimeout(i, 100) : o.wrapperOuter.css("height", "")
            }
            var r, o = this, s = t(o.$owlItems[o.currentItem]).find("img");
            s.get(0) !== undefined ? (r = 0,
            i()) : n()
        },
        completeImg: function(t) {
            return !!t.complete && ("undefined" === typeof t.naturalWidth || 0 !== t.naturalWidth)
        },
        onVisibleItems: function() {
            var e, n = this;
            for (!0 === n.options.addClassActive && n.$owlItems.removeClass("active"),
            n.visibleItems = [],
            e = n.currentItem; e < n.currentItem + n.options.items; e += 1)
                n.visibleItems.push(e),
                !0 === n.options.addClassActive && t(n.$owlItems[e]).addClass("active");
            n.owl.visibleItems = n.visibleItems
        },
        transitionTypes: function(t) {
            var e = this;
            e.outClass = "owl-" + t + "-out",
            e.inClass = "owl-" + t + "-in"
        },
        singleItemTransition: function() {
            function t(t) {
                return {
                    position: "relative",
                    left: t + "px"
                }
            }
            var e = this
              , n = e.outClass
              , i = e.inClass
              , r = e.$owlItems.eq(e.currentItem)
              , o = e.$owlItems.eq(e.prevItem)
              , s = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem]
              , a = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2
              , l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
            e.isTransition = !0,
            e.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": a + "px",
                "-moz-perspective-origin": a + "px",
                "perspective-origin": a + "px"
            }),
            o.css(t(s, 10)).addClass(n).on(l, function() {
                e.endPrev = !0,
                o.off(l),
                e.clearTransStyle(o, n)
            }),
            r.addClass(i).on(l, function() {
                e.endCurrent = !0,
                r.off(l),
                e.clearTransStyle(r, i)
            })
        },
        clearTransStyle: function(t, e) {
            var n = this;
            t.css({
                position: "",
                left: ""
            }).removeClass(e),
            n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"),
            n.endPrev = !1,
            n.endCurrent = !1,
            n.isTransition = !1)
        },
        owlStatus: function() {
            var t = this;
            t.owl = {
                userOptions: t.userOptions,
                baseElement: t.$elem,
                userItems: t.$userItems,
                owlItems: t.$owlItems,
                currentItem: t.currentItem,
                prevItem: t.prevItem,
                visibleItems: t.visibleItems,
                isTouch: t.browser.isTouch,
                browser: t.browser,
                dragDirection: t.dragDirection
            }
        },
        clearEvents: function() {
            var i = this;
            i.$elem.off(".owl owl mousedown.disableTextSelect"),
            t(n).off(".owl owl"),
            t(e).off("resize", i.resizer)
        },
        unWrap: function() {
            var t = this;
            0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(),
            t.$userItems.unwrap().unwrap(),
            t.owlControls && t.owlControls.remove()),
            t.clearEvents(),
            t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            var t = this;
            t.stop(),
            e.clearInterval(t.checkVisible),
            t.unWrap(),
            t.$elem.removeData()
        },
        reinit: function(e) {
            var n = this
              , i = t.extend({}, n.userOptions, e);
            n.unWrap(),
            n.init(i, n.$elem)
        },
        addItem: function(t, e) {
            var n, i = this;
            return !!t && (0 === i.$elem.children().length ? (i.$elem.append(t),
            i.setVars(),
            !1) : (i.unWrap(),
            (n = e === undefined || -1 === e ? -1 : e) >= i.$userItems.length || -1 === n ? i.$userItems.eq(-1).after(t) : i.$userItems.eq(n).before(t),
            void i.setVars()))
        },
        removeItem: function(t) {
            var e, n = this;
            if (0 === n.$elem.children().length)
                return !1;
            e = t === undefined || -1 === t ? -1 : t,
            n.unWrap(),
            n.$userItems.eq(e).remove(),
            n.setVars()
        }
    };
    t.fn.owlCarousel = function(e) {
        return this.each(function() {
            if (!0 === t(this).data("owl-init"))
                return !1;
            t(this).data("owl-init", !0);
            var n = Object.create(i);
            n.init(e, this),
            t.data(this, "owlCarousel", n)
        })
    }
    ,
    t.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: e,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    function e() {
        var e = n(this)
          , s = o.settings;
        return isNaN(e.datetime) || (0 == s.cutoff || Math.abs(r(e.datetime)) < s.cutoff) && t(this).text(i(e.datetime)),
        this
    }
    function n(e) {
        if (!(e = t(e)).data("timeago")) {
            e.data("timeago", {
                datetime: o.datetime(e)
            });
            var n = t.trim(e.text());
            o.settings.localeTitle ? e.attr("title", e.data("timeago").datetime.toLocaleString()) : !(n.length > 0) || o.isTime(e) && e.attr("title") || e.attr("title", n)
        }
        return e.data("timeago")
    }
    function i(t) {
        return o.inWords(r(t))
    }
    function r(t) {
        return (new Date).getTime() - t.getTime()
    }
    t.timeago = function(e) {
        return e instanceof Date ? i(e) : i("string" == typeof e ? t.timeago.parse(e) : "number" == typeof e ? new Date(e) : t.timeago.datetime(e))
    }
    ;
    var o = t.timeago;
    t.extend(t.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowPast: !0,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                inPast: "any moment now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(e) {
            function n(n, r) {
                var o = t.isFunction(n) ? n(r, e) : n
                  , s = i.numbers && i.numbers[r] || r;
                return o.replace(/%d/i, s)
            }
            if (!this.settings.allowPast && !this.settings.allowFuture)
                throw "timeago allowPast and allowFuture settings can not both be set to false.";
            var i = this.settings.strings
              , r = i.prefixAgo
              , o = i.suffixAgo;
            if (this.settings.allowFuture && e < 0 && (r = i.prefixFromNow,
            o = i.suffixFromNow),
            !this.settings.allowPast && e >= 0)
                return this.settings.strings.inPast;
            var s = Math.abs(e) / 1e3
              , a = s / 60
              , l = a / 60
              , u = l / 24
              , c = u / 365
              , h = s < 45 && n(i.seconds, Math.round(s)) || s < 90 && n(i.minute, 1) || a < 45 && n(i.minutes, Math.round(a)) || a < 90 && n(i.hour, 1) || l < 24 && n(i.hours, Math.round(l)) || l < 42 && n(i.day, 1) || u < 30 && n(i.days, Math.round(u)) || u < 45 && n(i.month, 1) || u < 365 && n(i.months, Math.round(u / 30)) || c < 1.5 && n(i.year, 1) || n(i.years, Math.round(c))
              , d = i.wordSeparator || "";
            return i.wordSeparator === undefined && (d = " "),
            t.trim([r, h, o].join(d))
        },
        parse: function(e) {
            var n = t.trim(e);
            return n = (n = (n = (n = (n = n.replace(/\.\d+/, "")).replace(/-/, "/").replace(/-/, "/")).replace(/T/, " ").replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")).replace(/([\+\-]\d\d)$/, " $100"),
            new Date(n)
        },
        datetime: function(e) {
            var n = o.isTime(e) ? t(e).attr("datetime") : t(e).attr("title");
            return o.parse(n)
        },
        isTime: function(e) {
            return "time" === t(e).get(0).tagName.toLowerCase()
        }
    });
    var s = {
        init: function() {
            var n = t.proxy(e, this);
            n();
            var i = o.settings;
            i.refreshMillis > 0 && (this._timeagoInterval = setInterval(n, i.refreshMillis))
        },
        update: function(n) {
            var i = o.parse(n);
            t(this).data("timeago", {
                datetime: i
            }),
            o.settings.localeTitle && t(this).attr("title", i.toLocaleString()),
            e.apply(this)
        },
        updateFromDOM: function() {
            t(this).data("timeago", {
                datetime: o.parse(o.isTime(this) ? t(this).attr("datetime") : t(this).attr("title"))
            }),
            e.apply(this)
        },
        dispose: function() {
            this._timeagoInterval && (window.clearInterval(this._timeagoInterval),
            this._timeagoInterval = null)
        }
    };
    t.fn.timeago = function(t, e) {
        var n = t ? s[t] : s.init;
        if (!n)
            throw new Error("Unknown function name '" + t + "' for timeago");
        return this.each(function() {
            n.call(this, e)
        }),
        this
    }
    ,
    document.createElement("abbr"),
    document.createElement("time")
}),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self),
        e.page = t()
    }
}(function() {
    return function t(e, n, i) {
        function r(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(s, !0);
                    if (o)
                        return o(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                    u
                }
                var c = n[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function(t) {
                    var n = e[s][1][t];
                    return r(n || t)
                }, c, c.exports, t, e, n, i)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++)
            r(i[s]);
        return r
    }({
        1: [function(t, e) {
            (function(n) {
                "use strict";
                function i(t, e) {
                    if ("function" == typeof t)
                        return i("*", t);
                    if ("function" == typeof e)
                        for (var n = new a(t), r = 1; r < arguments.length; ++r)
                            i.callbacks.push(n.middleware(arguments[r]));
                    else
                        "string" == typeof t ? i["string" == typeof e ? "redirect" : "show"](t, e) : i.start(t)
                }
                function r(t) {
                    t.handled || (b ? y + m.hash.replace("#!", "") : m.pathname + m.search) !== t.canonicalPath && (i.stop(),
                    t.handled = !1,
                    m.href = t.canonicalPath)
                }
                function o(t) {
                    return "string" != typeof t ? t : v ? decodeURIComponent(t.replace(/\+/g, " ")) : t
                }
                function s(t, e) {
                    "/" === t[0] && 0 !== t.indexOf(y) && (t = y + (b ? "#!" : "") + t);
                    var n = t.indexOf("?");
                    if (this.canonicalPath = t,
                    this.path = t.replace(y, "") || "/",
                    b && (this.path = this.path.replace("#!", "") || "/"),
                    this.title = document.title,
                    this.state = e || {},
                    this.state.path = t,
                    this.querystring = ~n ? o(t.slice(n + 1)) : "",
                    this.pathname = o(~n ? t.slice(0, n) : t),
                    this.params = {},
                    this.hash = "",
                    !b) {
                        if (!~this.path.indexOf("#"))
                            return;
                        var i = this.path.split("#");
                        this.path = i[0],
                        this.hash = o(i[1]) || "",
                        this.querystring = this.querystring.split("#")[0]
                    }
                }
                function a(t, e) {
                    e = e || {},
                    this.path = "*" === t ? "(.*)" : t,
                    this.method = "GET",
                    this.regexp = h(this.path, this.keys = [], e.sensitive, e.strict)
                }
                function l(t) {
                    if (1 === u(t) && !(t.metaKey || t.ctrlKey || t.shiftKey || t.defaultPrevented)) {
                        for (var e = t.target; e && "A" !== e.nodeName; )
                            e = e.parentNode;
                        if (e && "A" === e.nodeName && !e.hasAttribute("download") && "external" !== e.getAttribute("rel")) {
                            var r = e.getAttribute("href");
                            if ((b || e.pathname !== m.pathname || !e.hash && "#" !== r) && !(r && r.indexOf("mailto:") > -1) && !e.target && c(e.href)) {
                                var o = e.pathname + e.search + (e.hash || "");
                                void 0 !== n && o.match(/^\/[a-zA-Z]:\//) && (o = o.replace(/^\/[a-zA-Z]:\//, "/"));
                                var s = o;
                                0 === o.indexOf(y) && (o = o.substr(y.length)),
                                b && (o = o.replace("#!", "")),
                                y && s === o || (t.preventDefault(),
                                i.show(s))
                            }
                        }
                    }
                }
                function u(t) {
                    return null === (t = t || window.event).which ? t.button : t.which
                }
                function c(t) {
                    var e = m.protocol + "//" + m.hostname;
                    return m.port && (e += ":" + m.port),
                    t && 0 === t.indexOf(e)
                }
                var h = t("path-to-regexp");
                e.exports = i;
                var d, p, f = "undefined" != typeof document && document.ontouchstart ? "touchstart" : "click", m = "undefined" != typeof window && (window.history.location || window.location), g = !0, v = !0, y = "", b = !1;
                i.callbacks = [],
                i.exits = [],
                i.current = "",
                i.len = 0,
                i.base = function(t) {
                    if (0 === arguments.length)
                        return y;
                    y = t
                }
                ,
                i.start = function(t) {
                    if (t = t || {},
                    !d && (d = !0,
                    !1 === t.dispatch && (g = !1),
                    !1 === t.decodeURLComponents && (v = !1),
                    !1 !== t.popstate && window.addEventListener("popstate", w, !1),
                    !1 !== t.click && document.addEventListener(f, l, !1),
                    !0 === t.hashbang && (b = !0),
                    g)) {
                        var e = b && ~m.hash.indexOf("#!") ? m.hash.substr(2) + m.search : m.pathname + m.search + m.hash;
                        i.replace(e, null, !0, g)
                    }
                }
                ,
                i.stop = function() {
                    d && (i.current = "",
                    i.len = 0,
                    d = !1,
                    document.removeEventListener(f, l, !1),
                    window.removeEventListener("popstate", w, !1))
                }
                ,
                i.show = function(t, e, n, r) {
                    var o = new s(t,e);
                    return i.current = o.path,
                    !1 !== n && i.dispatch(o),
                    !1 !== o.handled && !1 !== r && o.pushState(),
                    o
                }
                ,
                i.back = function(t, e) {
                    i.len > 0 ? (history.back(),
                    i.len--) : t ? setTimeout(function() {
                        i.show(t, e)
                    }) : setTimeout(function() {
                        i.show(y, e)
                    })
                }
                ,
                i.redirect = function(t, e) {
                    "string" == typeof t && "string" == typeof e && i(t, function() {
                        setTimeout(function() {
                            i.replace(e)
                        }, 0)
                    }),
                    "string" == typeof t && void 0 === e && setTimeout(function() {
                        i.replace(t)
                    }, 0)
                }
                ,
                i.replace = function(t, e, n, r) {
                    var o = new s(t,e);
                    return i.current = o.path,
                    o.init = n,
                    o.save(),
                    !1 !== r && i.dispatch(o),
                    o
                }
                ,
                i.dispatch = function(t) {
                    function e() {
                        var t = i.exits[a++];
                        if (!t)
                            return n();
                        t(o, e)
                    }
                    function n() {
                        var e = i.callbacks[s++];
                        if (t.path === i.current)
                            return e ? void e(t, n) : r(t);
                        t.handled = !1
                    }
                    var o = p
                      , s = 0
                      , a = 0;
                    p = t,
                    o ? e() : n()
                }
                ,
                i.exit = function(t) {
                    if ("function" == typeof t)
                        return i.exit("*", t);
                    for (var e = new a(t), n = 1; n < arguments.length; ++n)
                        i.exits.push(e.middleware(arguments[n]))
                }
                ,
                i.Context = s,
                s.prototype.pushState = function() {
                    i.len++,
                    history.pushState(this.state, this.title, b && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
                }
                ,
                s.prototype.save = function() {
                    history.replaceState(this.state, this.title, b && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
                }
                ,
                i.Route = a,
                a.prototype.middleware = function(t) {
                    var e = this;
                    return function(n, i) {
                        if (e.match(n.path, n.params))
                            return t(n, i);
                        i()
                    }
                }
                ,
                a.prototype.match = function(t, e) {
                    var n = this.keys
                      , i = t.indexOf("?")
                      , r = ~i ? t.slice(0, i) : t
                      , s = this.regexp.exec(decodeURIComponent(r));
                    if (!s)
                        return !1;
                    for (var a = 1, l = s.length; a < l; ++a) {
                        var u = n[a - 1]
                          , c = o(s[a]);
                        c === undefined && hasOwnProperty.call(e, u.name) || (e[u.name] = c)
                    }
                    return !0
                }
                ;
                var w = function() {
                    var t = !1;
                    if ("undefined" != typeof window)
                        return "complete" === document.readyState ? t = !0 : window.addEventListener("load", function() {
                            setTimeout(function() {
                                t = !0
                            }, 0)
                        }),
                        function(e) {
                            if (t)
                                if (e.state) {
                                    var n = e.state.path;
                                    i.replace(n, e.state)
                                } else
                                    i.show(m.pathname + m.hash, undefined, undefined, !1)
                        }
                }();
                i.sameOrigin = c
            }
            ).call(this, t("_process"))
        }
        , {
            _process: 2,
            "path-to-regexp": 3
        }],
        2: [function(t, e) {
            function n() {}
            var i = e.exports = {};
            i.nextTick = function() {
                var t = "undefined" != typeof window && window.setImmediate
                  , e = "undefined" != typeof window && window.MutationObserver
                  , n = "undefined" != typeof window && window.postMessage && window.addEventListener;
                if (t)
                    return function(t) {
                        return window.setImmediate(t)
                    }
                    ;
                var i = [];
                if (e) {
                    var r = document.createElement("div");
                    return new MutationObserver(function() {
                        var t = i.slice();
                        i.length = 0,
                        t.forEach(function(t) {
                            t()
                        })
                    }
                    ).observe(r, {
                        attributes: !0
                    }),
                    function(t) {
                        i.length || r.setAttribute("yes", "no"),
                        i.push(t)
                    }
                }
                return n ? (window.addEventListener("message", function(t) {
                    var e = t.source;
                    e !== window && null !== e || "process-tick" !== t.data || (t.stopPropagation(),
                    i.length > 0 && i.shift()())
                }, !0),
                function(t) {
                    i.push(t),
                    window.postMessage("process-tick", "*")
                }
                ) : function(t) {
                    setTimeout(t, 0)
                }
            }(),
            i.title = "browser",
            i.browser = !0,
            i.env = {},
            i.argv = [],
            i.on = n,
            i.addListener = n,
            i.once = n,
            i.off = n,
            i.removeListener = n,
            i.removeAllListeners = n,
            i.emit = n,
            i.binding = function() {
                throw new Error("process.binding is not supported")
            }
            ,
            i.cwd = function() {
                return "/"
            }
            ,
            i.chdir = function() {
                throw new Error("process.chdir is not supported")
            }
        }
        , {}],
        3: [function(t, e) {
            function n(t) {
                return t.replace(/([=!:$\/()])/g, "\\$1")
            }
            function i(t, e) {
                return t.keys = e,
                t
            }
            function r(t) {
                return t.sensitive ? "" : "i"
            }
            function o(t, e) {
                var n = t.source.match(/\((?!\?)/g);
                if (n)
                    for (var r = 0; r < n.length; r++)
                        e.push({
                            name: r,
                            delimiter: null,
                            optional: !1,
                            repeat: !1
                        });
                return i(t, e)
            }
            function s(t, e, n) {
                for (var o = [], s = 0; s < t.length; s++)
                    o.push(l(t[s], e, n).source);
                return i(new RegExp("(?:" + o.join("|") + ")",r(n)), e)
            }
            function a(t, e) {
                function i(t, i, o, s, a, l, u, c) {
                    if (i)
                        return i;
                    if (c)
                        return "\\" + c;
                    var h = "+" === u || "*" === u
                      , d = "?" === u || "*" === u;
                    return e.push({
                        name: s || r++,
                        delimiter: o || "/",
                        optional: d,
                        repeat: h
                    }),
                    o = o ? "\\" + o : "",
                    a = n(a || l || "[^" + (o || "\\/") + "]+?"),
                    h && (a = a + "(?:" + o + a + ")*"),
                    d ? "(?:" + o + "(" + a + "))?" : o + "(" + a + ")"
                }
                var r = 0;
                return t.replace(c, i)
            }
            function l(t, e, n) {
                if (u(e = e || []) ? n || (n = {}) : (n = e,
                e = []),
                t instanceof RegExp)
                    return o(t, e, n);
                if (u(t))
                    return s(t, e, n);
                var l = n.strict
                  , c = !1 !== n.end
                  , h = a(t, e)
                  , d = "/" === t.charAt(t.length - 1);
                return l || (h = (d ? h.slice(0, -2) : h) + "(?:\\/(?=$))?"),
                h += c ? "$" : l && d ? "" : "(?=\\/|$)",
                i(new RegExp("^" + h,r(n)), e)
            }
            var u = t("isarray");
            e.exports = l;
            var c = new RegExp(["(\\\\.)", "([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?", "([.+*?=^!:${}()[\\]|\\/])"].join("|"),"g")
        }
        , {
            isarray: 4
        }],
        4: [function(t, e) {
            e.exports = Array.isArray || function(t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            }
        }
        , {}]
    }, {}, [1])(1)
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function(n) {
        return t.returnExportsGlobal = e(n)
    }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(this, function(t) {
    "use strict";
    var e, n, i, r, o, s, a, l;
    e = function() {
        function e(t) {
            this.$inputor = t,
            this.domInputor = this.$inputor[0]
        }
        return e.prototype.setPos = function(t) {
            var e, n, i, r;
            return (r = a.getSelection()) && (i = 0,
            n = !1,
            (e = function(t, o) {
                var a, l, u, c, h, d;
                for (d = [],
                u = 0,
                c = (h = o.childNodes).length; u < c && (a = h[u],
                !n); u++)
                    if (3 === a.nodeType) {
                        if (i + a.length >= t) {
                            n = !0,
                            (l = s.createRange()).setStart(a, t - i),
                            r.removeAllRanges(),
                            r.addRange(l);
                            break
                        }
                        d.push(i += a.length)
                    } else
                        d.push(e(t, a));
                return d
            }
            )(t, this.domInputor)),
            this.domInputor
        }
        ,
        e.prototype.getIEPosition = function() {
            return this.getPosition()
        }
        ,
        e.prototype.getPosition = function() {
            var t, e;
            return e = this.getOffset(),
            t = this.$inputor.offset(),
            e.left -= t.left,
            e.top -= t.top,
            e
        }
        ,
        e.prototype.getOldIEPos = function() {
            var t, e;
            return e = s.selection.createRange(),
            (t = s.body.createTextRange()).moveToElementText(this.domInputor),
            t.setEndPoint("EndToEnd", e),
            t.text.length
        }
        ,
        e.prototype.getPos = function() {
            var t, e, n;
            return (n = this.range()) ? ((t = n.cloneRange()).selectNodeContents(this.domInputor),
            t.setEnd(n.endContainer, n.endOffset),
            e = t.toString().length,
            t.detach(),
            e) : s.selection ? this.getOldIEPos() : void 0
        }
        ,
        e.prototype.getOldIEOffset = function() {
            var t, e;
            return (t = s.selection.createRange().duplicate()).moveStart("character", -1),
            {
                height: (e = t.getBoundingClientRect()).bottom - e.top,
                left: e.left,
                top: e.top
            }
        }
        ,
        e.prototype.getOffset = function() {
            var e, n, i, r, o;
            return a.getSelection && (i = this.range()) ? (i.endOffset - 1 > 0 && i.endContainer !== this.domInputor && ((e = i.cloneRange()).setStart(i.endContainer, i.endOffset - 1),
            e.setEnd(i.endContainer, i.endOffset),
            n = {
                height: (r = e.getBoundingClientRect()).height,
                left: r.left + r.width,
                top: r.top
            },
            e.detach()),
            n && 0 !== (null != n ? n.height : void 0) || (e = i.cloneRange(),
            o = t(s.createTextNode("|")),
            e.insertNode(o[0]),
            e.selectNode(o[0]),
            n = {
                height: (r = e.getBoundingClientRect()).height,
                left: r.left,
                top: r.top
            },
            o.remove(),
            e.detach())) : s.selection && (n = this.getOldIEOffset()),
            n && (n.top += t(a).scrollTop(),
            n.left += t(a).scrollLeft()),
            n
        }
        ,
        e.prototype.range = function() {
            var t;
            if (a.getSelection)
                return (t = a.getSelection()).rangeCount > 0 ? t.getRangeAt(0) : null
        }
        ,
        e
    }(),
    n = function() {
        function e(t) {
            this.$inputor = t,
            this.domInputor = this.$inputor[0]
        }
        return e.prototype.getIEPos = function() {
            var t, e, n, i, r, o;
            return e = this.domInputor,
            i = 0,
            (r = s.selection.createRange()) && r.parentElement() === e && (n = e.value.replace(/\r\n/g, "\n").length,
            (o = e.createTextRange()).moveToBookmark(r.getBookmark()),
            (t = e.createTextRange()).collapse(!1),
            i = o.compareEndPoints("StartToEnd", t) > -1 ? n : -o.moveStart("character", -n)),
            i
        }
        ,
        e.prototype.getPos = function() {
            return s.selection ? this.getIEPos() : this.domInputor.selectionStart
        }
        ,
        e.prototype.setPos = function(t) {
            var e, n;
            return e = this.domInputor,
            s.selection ? ((n = e.createTextRange()).move("character", t),
            n.select()) : e.setSelectionRange && e.setSelectionRange(t, t),
            e
        }
        ,
        e.prototype.getIEOffset = function(t) {
            var e;
            return e = this.domInputor.createTextRange(),
            t || (t = this.getPos()),
            e.move("character", t),
            {
                left: e.boundingLeft,
                top: e.boundingTop,
                height: e.boundingHeight
            }
        }
        ,
        e.prototype.getOffset = function(e) {
            var n, i, r;
            return n = this.$inputor,
            s.selection ? ((i = this.getIEOffset(e)).top += t(a).scrollTop() + n.scrollTop(),
            i.left += t(a).scrollLeft() + n.scrollLeft(),
            i) : (i = n.offset(),
            r = this.getPosition(e),
            {
                left: i.left + r.left - n.scrollLeft(),
                top: i.top + r.top - n.scrollTop(),
                height: r.height
            })
        }
        ,
        e.prototype.getPosition = function(t) {
            var e, n, r, o, s;
            return e = this.$inputor,
            r = function(t) {
                return t = t.replace(/<|>|`|"|&/g, "?").replace(/\r\n|\r|\n/g, "<br/>"),
                /firefox/i.test(navigator.userAgent) && (t = t.replace(/\s/g, "&nbsp;")),
                t
            }
            ,
            void 0 === t && (t = this.getPos()),
            s = e.val().slice(0, t),
            n = e.val().slice(t),
            o = "<span style='position: relative; display: inline;'>" + r(s) + "</span>",
            o += "<span id='caret' style='position: relative; display: inline;'>|</span>",
            o += "<span style='position: relative; display: inline;'>" + r(n) + "</span>",
            new i(e).create(o).rect()
        }
        ,
        e.prototype.getIEPosition = function(t) {
            var e, n;
            return n = this.getIEOffset(t),
            e = this.$inputor.offset(),
            {
                left: n.left - e.left,
                top: n.top - e.top,
                height: n.height
            }
        }
        ,
        e
    }(),
    i = function() {
        function e(t) {
            this.$inputor = t
        }
        return e.prototype.css_attr = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap"],
        e.prototype.mirrorCss = function() {
            var e, n = this;
            return e = {
                position: "absolute",
                left: -9999,
                top: 0,
                zIndex: -2e4
            },
            "TEXTAREA" === this.$inputor.prop("tagName") && this.css_attr.push("width"),
            t.each(this.css_attr, function(t, i) {
                return e[i] = n.$inputor.css(i)
            }),
            e
        }
        ,
        e.prototype.create = function(e) {
            return this.$mirror = t("<div></div>"),
            this.$mirror.css(this.mirrorCss()),
            this.$mirror.html(e),
            this.$inputor.after(this.$mirror),
            this
        }
        ,
        e.prototype.rect = function() {
            var t, e, n;
            return n = {
                left: (e = (t = this.$mirror.find("#caret")).position()).left,
                top: e.top,
                height: t.height()
            },
            this.$mirror.remove(),
            n
        }
        ,
        e
    }(),
    r = {
        contentEditable: function(t) {
            return !(!t[0].contentEditable || "true" !== t[0].contentEditable)
        }
    },
    o = {
        pos: function(t) {
            return t || 0 === t ? this.setPos(t) : this.getPos()
        },
        position: function(t) {
            return s.selection ? this.getIEPosition(t) : this.getPosition(t)
        },
        offset: function(t) {
            return this.getOffset(t)
        }
    },
    s = null,
    a = null,
    l = function(t) {
        var e;
        return (e = null != t ? t.iframe : void 0) ? (e,
        a = e.contentWindow,
        s = e.contentDocument || a.document) : (void 0,
        a = window,
        s = document)
    }
    ,
    t.fn.caret = function(i, s, a) {
        var u;
        return o[i] ? (t.isPlainObject(s) ? (l(s),
        s = void 0) : l(a),
        u = r.contentEditable(this) ? new e(this) : new n(this),
        o[i].apply(u, [s])) : t.error("Method " + i + " does not exist on jQuery.caret")
    }
    ,
    t.fn.caret.EditableCaret = e,
    t.fn.caret.InputCaret = n,
    t.fn.caret.Utils = r,
    t.fn.caret.apis = o
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return e(t)
    }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(0, function(t) {
    var e, n, i;
    n = {
        ESC: 27,
        TAB: 9,
        ENTER: 13,
        CTRL: 17,
        A: 65,
        P: 80,
        N: 78,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        BACKSPACE: 8,
        SPACE: 32
    },
    e = {
        beforeSave: function(t) {
            return r.arrayToDefaultHash(t)
        },
        matcher: function(t, e, n, i) {
            var r, o, s;
            return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),
            n && (t = "(?:^|\\s)" + t),
            r = decodeURI("%C3%80"),
            o = decodeURI("%C3%BF"),
            (s = new RegExp(t + "([A-Za-z" + r + "-" + o + "0-9_" + (i ? " " : "") + "'.+-]*)$|" + t + "([^\\x00-\\xff]*)$","gi").exec(e)) ? s[2] || s[1] : null
        },
        filter: function(t, e, n) {
            var i, r, o, s;
            for (i = [],
            r = 0,
            s = e.length; s > r; r++)
                o = e[r],
                ~new String(o[n]).toLowerCase().indexOf(t.toLowerCase()) && i.push(o);
            return i
        },
        remoteFilter: null,
        sorter: function(t, e, n) {
            var i, r, o, s;
            if (!t)
                return e;
            for (i = [],
            r = 0,
            s = e.length; s > r; r++)
                (o = e[r]).atwho_order = new String(o[n]).toLowerCase().indexOf(t.toLowerCase()),
                o.atwho_order > -1 && i.push(o);
            return i.sort(function(t, e) {
                return t.atwho_order - e.atwho_order
            })
        },
        tplEval: function(t, e) {
            var n, i;
            i = t;
            try {
                return "string" != typeof t && (i = t(e)),
                i.replace(/\$\{([^\}]*)\}/g, function(t, n) {
                    return e[n]
                })
            } catch (n) {
                return n,
                ""
            }
        },
        highlighter: function(t, e) {
            var n;
            return e ? (n = new RegExp(">\\s*([^<]*?)(" + e.replace("+", "\\+") + ")([^<]*)\\s*<","ig"),
            t.replace(n, function(t, e, n, i) {
                return "> " + e + "<strong>" + n + "</strong>" + i + " <"
            })) : t
        },
        beforeInsert: function(t) {
            return t
        },
        beforeReposition: function(t) {
            return t
        },
        afterMatchFailed: function() {}
    },
    i = function() {
        function e(e) {
            this.currentFlag = null,
            this.controllers = {},
            this.aliasMaps = {},
            this.$inputor = t(e),
            this.setupRootElement(),
            this.listen()
        }
        return e.prototype.createContainer = function(e) {
            var n;
            return null != (n = this.$el) && n.remove(),
            t(e.body).append(this.$el = t("<div class='atwho-container'></div>"))
        }
        ,
        e.prototype.setupRootElement = function(e, n) {
            var i, r;
            if (null == n && (n = !1),
            e)
                this.window = e.contentWindow,
                this.document = e.contentDocument || this.window.document,
                this.iframe = e;
            else {
                this.document = this.$inputor[0].ownerDocument,
                this.window = this.document.defaultView || this.document.parentWindow;
                try {
                    this.iframe = this.window.frameElement
                } catch (r) {
                    if (i = r,
                    this.iframe = null,
                    t.fn.atwho.debug)
                        throw new Error("iframe auto-discovery is failed.\nPlease use `setIframe` to set the target iframe manually.\n" + i)
                }
            }
            return this.createContainer((this.iframeAsRoot = n) ? this.document : document)
        }
        ,
        e.prototype.controller = function(t) {
            var e, n, i, r;
            if (this.aliasMaps[t])
                n = this.controllers[this.aliasMaps[t]];
            else
                for (i in r = this.controllers)
                    if (e = r[i],
                    i === t) {
                        n = e;
                        break
                    }
            return n || this.controllers[this.currentFlag]
        }
        ,
        e.prototype.setContextFor = function(t) {
            return this.currentFlag = t,
            this
        }
        ,
        e.prototype.reg = function(t, e) {
            var n, i;
            return i = (n = this.controllers)[t] || (n[t] = this.$inputor.is("[contentEditable]") ? new u(this,t) : new s(this,t)),
            e.alias && (this.aliasMaps[e.alias] = t),
            i.init(e),
            this
        }
        ,
        e.prototype.listen = function() {
            return this.$inputor.on("compositionstart", (t = this,
            function() {
                var e;
                return null != (e = t.controller()) && e.view.hide(),
                t.isComposing = !0,
                null
            }
            )).on("compositionend", function(t) {
                return function() {
                    return t.isComposing = !1,
                    setTimeout(function(e) {
                        return t.dispatch(e)
                    }),
                    null
                }
            }(this)).on("keyup.atwhoInner", function(t) {
                return function(e) {
                    return t.onKeyup(e)
                }
            }(this)).on("keydown.atwhoInner", function(t) {
                return function(e) {
                    return t.onKeydown(e)
                }
            }(this)).on("blur.atwhoInner", function(t) {
                return function(e) {
                    var n;
                    return (n = t.controller()) ? (n.expectedQueryCBId = null,
                    n.view.hide(e, n.getOpt("displayTimeout"))) : void 0
                }
            }(this)).on("click.atwhoInner", function(t) {
                return function(e) {
                    return t.dispatch(e)
                }
            }(this)).on("scroll.atwhoInner", function(t) {
                return function() {
                    var e;
                    return e = t.$inputor.scrollTop(),
                    function(n) {
                        var i, r;
                        return i = n.target.scrollTop,
                        e !== i && null != (r = t.controller()) && r.view.hide(n),
                        e = i,
                        !0
                    }
                }
            }(this)());
            var t
        }
        ,
        e.prototype.shutdown = function() {
            var t, e;
            for (t in e = this.controllers)
                e[t].destroy(),
                delete this.controllers[t];
            return this.$inputor.off(".atwhoInner"),
            this.$el.remove()
        }
        ,
        e.prototype.dispatch = function(t) {
            var e, n, i, r;
            for (e in r = [],
            i = this.controllers)
                n = i[e],
                r.push(n.lookUp(t));
            return r
        }
        ,
        e.prototype.onKeyup = function(e) {
            var i;
            switch (e.keyCode) {
            case n.ESC:
                e.preventDefault(),
                null != (i = this.controller()) && i.view.hide();
                break;
            case n.DOWN:
            case n.UP:
            case n.CTRL:
            case n.ENTER:
                t.noop();
                break;
            case n.P:
            case n.N:
                e.ctrlKey || this.dispatch(e);
                break;
            default:
                this.dispatch(e)
            }
        }
        ,
        e.prototype.onKeydown = function(e) {
            var i, r;
            if ((r = null != (i = this.controller()) ? i.view : void 0) && r.visible())
                switch (e.keyCode) {
                case n.ESC:
                    e.preventDefault(),
                    r.hide(e);
                    break;
                case n.UP:
                    e.preventDefault(),
                    r.prev();
                    break;
                case n.DOWN:
                    e.preventDefault(),
                    r.next();
                    break;
                case n.P:
                    if (!e.ctrlKey)
                        return;
                    e.preventDefault(),
                    r.prev();
                    break;
                case n.N:
                    if (!e.ctrlKey)
                        return;
                    e.preventDefault(),
                    r.next();
                    break;
                case n.TAB:
                case n.ENTER:
                case n.SPACE:
                    if (!r.visible())
                        return;
                    if (!this.controller().getOpt("spaceSelectsMatch") && e.keyCode === n.SPACE)
                        return;
                    if (!this.controller().getOpt("tabSelectsMatch") && e.keyCode === n.TAB)
                        return;
                    r.highlighted() ? (e.preventDefault(),
                    r.choose(e)) : r.hide(e);
                    break;
                default:
                    t.noop()
                }
        }
        ,
        e
    }();
    var r, o = [].slice;
    r = function() {
        function n(e, n) {
            this.app = e,
            this.at = n,
            this.$inputor = this.app.$inputor,
            this.id = this.$inputor[0].id || this.uid(),
            this.expectedQueryCBId = null,
            this.setting = null,
            this.query = null,
            this.pos = 0,
            this.range = null,
            0 === (this.$el = t("#atwho-ground-" + this.id, this.app.$el)).length && this.app.$el.append(this.$el = t("<div id='atwho-ground-" + this.id + "'></div>")),
            this.model = new c(this),
            this.view = new h(this)
        }
        return n.prototype.uid = function() {
            return (Math.random().toString(16) + "000000000").substr(2, 8) + (new Date).getTime()
        }
        ,
        n.prototype.init = function(e) {
            return this.setting = t.extend({}, this.setting || t.fn.atwho["default"], e),
            this.view.init(),
            this.model.reload(this.setting.data)
        }
        ,
        n.prototype.destroy = function() {
            return this.trigger("beforeDestroy"),
            this.model.destroy(),
            this.view.destroy(),
            this.$el.remove()
        }
        ,
        n.prototype.callDefault = function() {
            var n, i, r, s;
            s = arguments[0],
            n = 2 <= arguments.length ? o.call(arguments, 1) : [];
            try {
                return e[s].apply(this, n)
            } catch (r) {
                return i = r,
                t.error(i + " Or maybe At.js doesn't have function " + s)
            }
        }
        ,
        n.prototype.trigger = function(t, e) {
            var n, i;
            return null == e && (e = []),
            e.push(this),
            i = (n = this.getOpt("alias")) ? t + "-" + n + ".atwho" : t + ".atwho",
            this.$inputor.trigger(i, e)
        }
        ,
        n.prototype.callbacks = function(t) {
            return this.getOpt("callbacks")[t] || e[t]
        }
        ,
        n.prototype.getOpt = function(t) {
            var e;
            try {
                return this.setting[t]
            } catch (e) {
                return e,
                null
            }
        }
        ,
        n.prototype.insertContentFor = function(e) {
            var n, i;
            return i = this.getOpt("insertTpl"),
            n = t.extend({}, e.data("item-data"), {
                "atwho-at": this.at
            }),
            this.callbacks("tplEval").call(this, i, n, "onInsert")
        }
        ,
        n.prototype.renderView = function(t) {
            var e;
            return e = this.getOpt("searchKey"),
            t = this.callbacks("sorter").call(this, this.query.text, t.slice(0, 1001), e),
            this.view.render(t.slice(0, this.getOpt("limit")))
        }
        ,
        n.arrayToDefaultHash = function(e) {
            var n, i, r, o;
            if (!t.isArray(e))
                return e;
            for (o = [],
            n = 0,
            r = e.length; r > n; n++)
                i = e[n],
                t.isPlainObject(i) ? o.push(i) : o.push({
                    name: i
                });
            return o
        }
        ,
        n.prototype.lookUp = function(t) {
            var e, n;
            if ((!t || "click" !== t.type || this.getOpt("lookUpOnClick")) && (!this.getOpt("suspendOnComposing") || !this.app.isComposing))
                return (e = this.catchQuery(t)) ? (this.app.setContextFor(this.at),
                (n = this.getOpt("delay")) ? this._delayLookUp(e, n) : this._lookUp(e),
                e) : (this.expectedQueryCBId = null,
                e)
        }
        ,
        n.prototype._delayLookUp = function(t, e) {
            var n, i;
            return n = Date.now ? Date.now() : (new Date).getTime(),
            this.previousCallTime || (this.previousCallTime = n),
            (i = e - (n - this.previousCallTime)) > 0 && e > i ? (this.previousCallTime = n,
            this._stopDelayedCall(),
            this.delayedCallTimeout = setTimeout(function(e) {
                return function() {
                    return e.previousCallTime = 0,
                    e.delayedCallTimeout = null,
                    e._lookUp(t)
                }
            }(this), e)) : (this._stopDelayedCall(),
            this.previousCallTime !== n && (this.previousCallTime = 0),
            this._lookUp(t))
        }
        ,
        n.prototype._stopDelayedCall = function() {
            return this.delayedCallTimeout ? (clearTimeout(this.delayedCallTimeout),
            this.delayedCallTimeout = null) : void 0
        }
        ,
        n.prototype._generateQueryCBId = function() {
            return {}
        }
        ,
        n.prototype._lookUp = function(e) {
            var n;
            return n = function(t, e) {
                return t === this.expectedQueryCBId ? e && e.length > 0 ? this.renderView(this.constructor.arrayToDefaultHash(e)) : this.view.hide() : void 0
            }
            ,
            this.expectedQueryCBId = this._generateQueryCBId(),
            this.model.query(e.text, t.proxy(n, this, this.expectedQueryCBId))
        }
        ,
        n
    }();
    var s, a = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            l.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype,
        t.prototype = new n,
        t.__super__ = e.prototype,
        t
    }, l = {}.hasOwnProperty;
    s = function() {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return a(e, r),
        e.prototype.catchQuery = function() {
            var t, e, n, i, r, o, s;
            return e = this.$inputor.val(),
            t = this.$inputor.caret("pos", {
                iframe: this.app.iframe
            }),
            s = e.slice(0, t),
            (i = "string" == typeof (r = this.callbacks("matcher").call(this, this.at, s, this.getOpt("startWithSpace"), this.getOpt("acceptSpaceBar")))) && r.length < this.getOpt("minLen", 0) ? void 0 : (i && r.length <= this.getOpt("maxLen", 20) ? (n = (o = t - r.length) + r.length,
            this.pos = o,
            r = {
                text: r,
                headPos: o,
                endPos: n
            },
            this.trigger("matched", [this.at, r.text])) : (r = null,
            this.view.hide()),
            this.query = r)
        }
        ,
        e.prototype.rect = function() {
            var e, n, i;
            if (e = this.$inputor.caret("offset", this.pos - 1, {
                iframe: this.app.iframe
            }))
                return this.app.iframe && !this.app.iframeAsRoot && (n = t(this.app.iframe).offset(),
                e.left += n.left,
                e.top += n.top),
                i = this.app.document.selection ? 0 : 2,
                {
                    left: e.left,
                    top: e.top,
                    bottom: e.top + e.height + i
                }
        }
        ,
        e.prototype.insert = function(t) {
            var e, n, i, r, o;
            return o = "" + (i = (n = (e = this.$inputor).val()).slice(0, Math.max(this.query.headPos - this.at.length, 0))) + (t += r = "" === (r = this.getOpt("suffix")) ? r : r || " ") + n.slice(this.query.endPos || 0),
            e.val(o),
            e.caret("pos", i.length + t.length, {
                iframe: this.app.iframe
            }),
            e.is(":focus") || e.focus(),
            e.change()
        }
        ,
        e
    }();
    var u, c, h, d;
    a = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e)
            l.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype,
        t.prototype = new n,
        t.__super__ = e.prototype,
        t
    }
    ,
    l = {}.hasOwnProperty;
    u = function() {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }
        return a(e, r),
        e.prototype._getRange = function() {
            var t;
            return (t = this.app.window.getSelection()).rangeCount > 0 ? t.getRangeAt(0) : void 0
        }
        ,
        e.prototype._setRange = function(e, n, i) {
            return null == i && (i = this._getRange()),
            i && n ? (n = t(n)[0],
            "after" === e ? (i.setEndAfter(n),
            i.setStartAfter(n)) : (i.setEndBefore(n),
            i.setStartBefore(n)),
            i.collapse(!1),
            this._clearRange(i)) : void 0
        }
        ,
        e.prototype._clearRange = function(t) {
            var e;
            return null == t && (t = this._getRange()),
            e = this.app.window.getSelection(),
            null == this.ctrl_a_pressed ? (e.removeAllRanges(),
            e.addRange(t)) : void 0
        }
        ,
        e.prototype._movingEvent = function(t) {
            var e;
            return "click" === t.type || (e = t.which) === n.RIGHT || e === n.LEFT || e === n.UP || e === n.DOWN
        }
        ,
        e.prototype._unwrap = function(e) {
            var n;
            return (n = (e = t(e).unwrap().get(0)).nextSibling) && n.nodeValue && (e.nodeValue += n.nodeValue,
            t(n).remove()),
            e
        }
        ,
        e.prototype.catchQuery = function(e) {
            var i, r, o, s, a, l, u, c, h, d, p, f;
            if ((f = this._getRange()) && f.collapsed) {
                if (e.which === n.ENTER)
                    return (r = t(f.startContainer).closest(".atwho-query")).contents().unwrap(),
                    r.is(":empty") && r.remove(),
                    (r = t(".atwho-query", this.app.document)).text(r.text()).contents().last().unwrap(),
                    void this._clearRange();
                if (/firefox/i.test(navigator.userAgent)) {
                    if (t(f.startContainer).is(this.$inputor))
                        return void this._clearRange();
                    e.which === n.BACKSPACE && f.startContainer.nodeType === document.ELEMENT_NODE && (h = f.startOffset - 1) >= 0 ? ((o = f.cloneRange()).setStart(f.startContainer, h),
                    t(o.cloneContents()).contents().last().is(".atwho-inserted") && (a = t(f.startContainer).contents().get(h),
                    this._setRange("after", t(a).contents().last()))) : e.which === n.LEFT && f.startContainer.nodeType === document.TEXT_NODE && ((i = t(f.startContainer.previousSibling)).is(".atwho-inserted") && 0 === f.startOffset && this._setRange("after", i.contents().last()))
                }
                if (t(f.startContainer).closest(".atwho-inserted").addClass("atwho-query").siblings().removeClass("atwho-query"),
                (r = t(".atwho-query", this.app.document)).length > 0 && r.is(":empty") && 0 === r.text().length && r.remove(),
                this._movingEvent(e) || r.removeClass("atwho-inserted"),
                r.length > 0)
                    switch (e.which) {
                    case n.LEFT:
                        return this._setRange("before", r.get(0), f),
                        void r.removeClass("atwho-query");
                    case n.RIGHT:
                        return this._setRange("after", r.get(0).nextSibling, f),
                        void r.removeClass("atwho-query")
                    }
                if (r.length > 0 && (p = r.attr("data-atwho-at-query")) && (r.empty().html(p).attr("data-atwho-at-query", null),
                this._setRange("after", r.get(0), f)),
                (o = f.cloneRange()).setStart(f.startContainer, 0),
                l = "string" == typeof (c = this.callbacks("matcher").call(this, this.at, o.toString(), this.getOpt("startWithSpace"), this.getOpt("acceptSpaceBar"))),
                0 === r.length && l && (s = f.startOffset - this.at.length - c.length) >= 0 && (f.setStart(f.startContainer, s),
                r = t("<span/>", this.app.document).attr(this.getOpt("editableAtwhoQueryAttrs")).addClass("atwho-query"),
                f.surroundContents(r.get(0)),
                (u = r.contents().last().get(0)) && (/firefox/i.test(navigator.userAgent) ? (f.setStart(u, u.length),
                f.setEnd(u, u.length),
                this._clearRange(f)) : this._setRange("after", u, f))),
                !(l && c.length < this.getOpt("minLen", 0)))
                    return l && c.length <= this.getOpt("maxLen", 20) ? (d = {
                        text: c,
                        el: r
                    },
                    this.trigger("matched", [this.at, d.text]),
                    this.query = d) : (this.view.hide(),
                    this.query = {
                        el: r
                    },
                    r.text().indexOf(this.at) >= 0 && (this._movingEvent(e) && r.hasClass("atwho-inserted") ? r.removeClass("atwho-query") : !1 !== this.callbacks("afterMatchFailed").call(this, this.at, r) && this._setRange("after", this._unwrap(r.text(r.text()).contents().first()))),
                    null)
            }
        }
        ,
        e.prototype.rect = function() {
            var e, n;
            return (n = this.query.el.offset()) && this.query.el[0].getClientRects().length ? (this.app.iframe && !this.app.iframeAsRoot && (e = t(this.app.iframe).offset(),
            n.left += e.left - this.$inputor.scrollLeft(),
            n.top += e.top - this.$inputor.scrollTop()),
            n.bottom = n.top + this.query.el.height(),
            n) : void 0
        }
        ,
        e.prototype.insert = function(t, e) {
            var n, i, r, o, s;
            return this.$inputor.is(":focus") || this.$inputor.focus(),
            (i = this.getOpt("functionOverrides")).insert ? i.insert.call(this, t, e) : (o = "" === (o = this.getOpt("suffix")) ? o : o || "\xa0",
            n = e.data("item-data"),
            this.query.el.removeClass("atwho-query").addClass("atwho-inserted").html(t).attr("data-atwho-at-query", "" + n["atwho-at"] + this.query.text).attr("contenteditable", "false"),
            (r = this._getRange()) && (this.query.el.length && r.setEndAfter(this.query.el[0]),
            r.collapse(!1),
            r.insertNode(s = this.app.document.createTextNode("" + o)),
            this._setRange("after", s, r)),
            this.$inputor.is(":focus") || this.$inputor.focus(),
            this.$inputor.change())
        }
        ,
        e
    }(),
    c = function() {
        function e(t) {
            this.context = t,
            this.at = this.context.at,
            this.storage = this.context.$inputor
        }
        return e.prototype.destroy = function() {
            return this.storage.data(this.at, null)
        }
        ,
        e.prototype.saved = function() {
            return this.fetch() > 0
        }
        ,
        e.prototype.query = function(t, e) {
            var n, i, r;
            return i = this.fetch(),
            r = this.context.getOpt("searchKey"),
            i = this.context.callbacks("filter").call(this.context, t, i, r) || [],
            n = this.context.callbacks("remoteFilter"),
            i.length > 0 || !n && 0 === i.length ? e(i) : n.call(this.context, t, e)
        }
        ,
        e.prototype.fetch = function() {
            return this.storage.data(this.at) || []
        }
        ,
        e.prototype.save = function(t) {
            return this.storage.data(this.at, this.context.callbacks("beforeSave").call(this.context, t || []))
        }
        ,
        e.prototype.load = function(t) {
            return !this.saved() && t ? this._load(t) : void 0
        }
        ,
        e.prototype.reload = function(t) {
            return this._load(t)
        }
        ,
        e.prototype._load = function(e) {
            return "string" == typeof e ? t.ajax(e, {
                dataType: "json"
            }).done(function(t) {
                return function(e) {
                    return t.save(e)
                }
            }(this)) : this.save(e)
        }
        ,
        e
    }(),
    h = function() {
        function e(e) {
            this.context = e,
            this.$el = t("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"),
            this.$elUl = this.$el.children(),
            this.timeoutID = null,
            this.context.$el.append(this.$el),
            this.bindEvent()
        }
        return e.prototype.init = function() {
            var t, e;
            return e = this.context.getOpt("alias") || this.context.at.charCodeAt(0),
            (t = this.context.getOpt("headerTpl")) && 1 === this.$el.children().length && this.$el.prepend(t),
            this.$el.attr({
                id: "at-view-" + e
            })
        }
        ,
        e.prototype.destroy = function() {
            return this.$el.remove()
        }
        ,
        e.prototype.bindEvent = function() {
            var e, n, i;
            return e = this.$el.find("ul"),
            n = 0,
            i = 0,
            e.on("mousemove.atwho-view", "li", function(r) {
                var o;
                if ((n !== r.clientX || i !== r.clientY) && (n = r.clientX,
                i = r.clientY,
                !(o = t(r.currentTarget)).hasClass("cur")))
                    return e.find(".cur").removeClass("cur"),
                    o.addClass("cur")
            }).on("click.atwho-view", "li", function(n) {
                return function(i) {
                    return e.find(".cur").removeClass("cur"),
                    t(i.currentTarget).addClass("cur"),
                    n.choose(i),
                    i.preventDefault()
                }
            }(this))
        }
        ,
        e.prototype.visible = function() {
            return t.expr.filters.visible(this.$el[0])
        }
        ,
        e.prototype.highlighted = function() {
            return this.$el.find(".cur").length > 0
        }
        ,
        e.prototype.choose = function(t) {
            var e, n;
            return (e = this.$el.find(".cur")).length && (n = this.context.insertContentFor(e),
            this.context._stopDelayedCall(),
            this.context.insert(this.context.callbacks("beforeInsert").call(this.context, n, e, t), e),
            this.context.trigger("inserted", [e, t]),
            this.hide(t)),
            this.context.getOpt("hideWithoutSuffix") ? this.stopShowing = !0 : void 0
        }
        ,
        e.prototype.reposition = function(e) {
            var n, i, r, o;
            return n = this.context.app.iframeAsRoot ? this.context.app.window : window,
            e.bottom + this.$el.height() - t(n).scrollTop() > t(n).height() && (e.bottom = e.top - this.$el.height()),
            e.left > (r = t(n).width() - this.$el.width() - 5) && (e.left = r),
            i = {
                left: e.left,
                top: e.bottom
            },
            null != (o = this.context.callbacks("beforeReposition")) && o.call(this.context, i),
            this.$el.offset(i),
            this.context.trigger("reposition", [i])
        }
        ,
        e.prototype.next = function() {
            var t, e, n;
            return (t = this.$el.find(".cur").removeClass("cur").next()).length || (t = this.$el.find("li:first")),
            t.addClass("cur"),
            n = (e = t[0]).offsetTop + e.offsetHeight + (e.nextSibling ? e.nextSibling.offsetHeight : 0),
            this.scrollTop(Math.max(0, n - this.$el.height()))
        }
        ,
        e.prototype.prev = function() {
            var t, e, n;
            return (e = this.$el.find(".cur").removeClass("cur").prev()).length || (e = this.$el.find("li:last")),
            e.addClass("cur"),
            t = (n = e[0]).offsetTop + n.offsetHeight + (n.nextSibling ? n.nextSibling.offsetHeight : 0),
            this.scrollTop(Math.max(0, t - this.$el.height()))
        }
        ,
        e.prototype.scrollTop = function(t) {
            var e;
            return (e = this.context.getOpt("scrollDuration")) ? this.$elUl.animate({
                scrollTop: t
            }, e) : this.$elUl.scrollTop(t)
        }
        ,
        e.prototype.show = function() {
            var t;
            return this.stopShowing ? void (this.stopShowing = !1) : (this.visible() || (this.$el.show(),
            this.$el.scrollTop(0),
            this.context.trigger("shown")),
            (t = this.context.rect()) ? this.reposition(t) : void 0)
        }
        ,
        e.prototype.hide = function(t, e) {
            var n;
            if (this.visible())
                return isNaN(e) ? (this.$el.hide(),
                this.context.trigger("hidden", [t])) : (n = function(t) {
                    return function() {
                        return t.hide()
                    }
                }(this),
                clearTimeout(this.timeoutID),
                this.timeoutID = setTimeout(n, e))
        }
        ,
        e.prototype.render = function(e) {
            var n, i, r, o, s, a, l;
            if (t.isArray(e) && e.length > 0) {
                for (this.$el.find("ul").empty(),
                i = this.$el.find("ul"),
                l = this.context.getOpt("displayTpl"),
                r = 0,
                s = e.length; s > r; r++)
                    o = e[r],
                    o = t.extend({}, o, {
                        "atwho-at": this.context.at
                    }),
                    a = this.context.callbacks("tplEval").call(this.context, l, o, "onDisplay"),
                    (n = t(this.context.callbacks("highlighter").call(this.context, a, this.context.query.text))).data("item-data", o),
                    i.append(n);
                return this.show(),
                this.context.getOpt("highlightFirst") ? i.find("li:first").addClass("cur") : void 0
            }
            this.hide()
        }
        ,
        e
    }(),
    d = {
        load: function(t, e) {
            var n;
            return (n = this.controller(t)) ? n.model.load(e) : void 0
        },
        isSelecting: function() {
            var t;
            return !!(null != (t = this.controller()) ? t.view.visible() : void 0)
        },
        hide: function() {
            var t;
            return null != (t = this.controller()) ? t.view.hide() : void 0
        },
        reposition: function() {
            var t;
            return (t = this.controller()) ? t.view.reposition(t.rect()) : void 0
        },
        setIframe: function(t, e) {
            return this.setupRootElement(t, e),
            null
        },
        run: function() {
            return this.dispatch()
        },
        destroy: function() {
            return this.shutdown(),
            this.$inputor.data("atwho", null)
        }
    },
    t.fn.atwho = function(e) {
        var n, r;
        return n = arguments,
        r = null,
        this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function() {
            var o, s;
            return (s = (o = t(this)).data("atwho")) || o.data("atwho", s = new i(this)),
            "object" != typeof e && e ? d[e] && s ? r = d[e].apply(s, Array.prototype.slice.call(n, 1)) : t.error("Method " + e + " does not exist on jQuery.atwho") : s.reg(e.at, e)
        }),
        null != r ? r : this
    }
    ,
    t.fn.atwho["default"] = {
        at: void 0,
        alias: void 0,
        data: null,
        displayTpl: "<li>${name}</li>",
        insertTpl: "${atwho-at}${name}",
        headerTpl: null,
        callbacks: e,
        functionOverrides: {},
        searchKey: "name",
        suffix: void 0,
        hideWithoutSuffix: !1,
        startWithSpace: !0,
        acceptSpaceBar: !1,
        highlightFirst: !0,
        limit: 5,
        maxLen: 20,
        minLen: 0,
        displayTimeout: 300,
        delay: null,
        spaceSelectsMatch: !1,
        tabSelectsMatch: !0,
        editableAtwhoQueryAttrs: {},
        scrollDuration: 150,
        suspendOnComposing: !0,
        lookUpOnClick: !0
    },
    t.fn.atwho.debug = !1
}),
function() {}
.call(this),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Handlebars = e() : t.Handlebars = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i])
                return n[i].exports;
            var r = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(r.exports, r, r.exports, e),
            r.loaded = !0,
            r.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.p = "",
        e(0)
    }([function(t, e, n) {
        "use strict";
        function i() {
            var t = d();
            return t.compile = function(e, n) {
                return l.compile(e, n, t)
            }
            ,
            t.precompile = function(e, n) {
                return l.precompile(e, n, t)
            }
            ,
            t.AST = s["default"],
            t.Compiler = l.Compiler,
            t.JavaScriptCompiler = u["default"],
            t.Parser = a.parser,
            t.parse = a.parse,
            t.parseWithoutProcessing = a.parseWithoutProcessing,
            t
        }
        var r = n(1)["default"];
        e.__esModule = !0;
        var o = r(n(2))
          , s = r(n(45))
          , a = n(46)
          , l = n(51)
          , u = r(n(52))
          , c = r(n(49))
          , h = r(n(44))
          , d = o["default"].create
          , p = i();
        p.create = i,
        h["default"](p),
        p.Visitor = c["default"],
        p["default"] = p,
        e["default"] = p,
        t.exports = e["default"]
    }
    , function(t, e) {
        "use strict";
        e["default"] = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        ,
        e.__esModule = !0
    }
    , function(t, e, n) {
        "use strict";
        function i() {
            var t = new s.HandlebarsEnvironment;
            return u.extend(t, s),
            t.SafeString = a["default"],
            t.Exception = l["default"],
            t.Utils = u,
            t.escapeExpression = u.escapeExpression,
            t.VM = c,
            t.template = function(e) {
                return c.template(e, t)
            }
            ,
            t
        }
        var r = n(3)["default"]
          , o = n(1)["default"];
        e.__esModule = !0;
        var s = r(n(4))
          , a = o(n(37))
          , l = o(n(6))
          , u = r(n(5))
          , c = r(n(38))
          , h = o(n(44))
          , d = i();
        d.create = i,
        h["default"](d),
        d["default"] = d,
        e["default"] = d,
        t.exports = e["default"]
    }
    , function(t, e) {
        "use strict";
        e["default"] = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e["default"] = t,
            e
        }
        ,
        e.__esModule = !0
    }
    , function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            this.helpers = t || {},
            this.partials = e || {},
            this.decorators = n || {},
            a.registerDefaultHelpers(this),
            l.registerDefaultDecorators(this)
        }
        var r = n(1)["default"];
        e.__esModule = !0,
        e.HandlebarsEnvironment = i;
        var o = n(5)
          , s = r(n(6))
          , a = n(10)
          , l = n(30)
          , u = r(n(32))
          , c = n(33)
          , h = "4.7.7";
        e.VERSION = h;
        var d = 8;
        e.COMPILER_REVISION = d;
        var p = 7;
        e.LAST_COMPATIBLE_COMPILER_REVISION = p;
        var f = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0 <4.3.0",
            8: ">= 4.3.0"
        };
        e.REVISION_CHANGES = f;
        var m = "[object Object]";
        i.prototype = {
            constructor: i,
            logger: u["default"],
            log: u["default"].log,
            registerHelper: function(t, e) {
                if (o.toString.call(t) === m) {
                    if (e)
                        throw new s["default"]("Arg not supported with multiple helpers");
                    o.extend(this.helpers, t)
                } else
                    this.helpers[t] = e
            },
            unregisterHelper: function(t) {
                delete this.helpers[t]
            },
            registerPartial: function(t, e) {
                if (o.toString.call(t) === m)
                    o.extend(this.partials, t);
                else {
                    if (void 0 === e)
                        throw new s["default"]('Attempting to register a partial called "' + t + '" as undefined');
                    this.partials[t] = e
                }
            },
            unregisterPartial: function(t) {
                delete this.partials[t]
            },
            registerDecorator: function(t, e) {
                if (o.toString.call(t) === m) {
                    if (e)
                        throw new s["default"]("Arg not supported with multiple decorators");
                    o.extend(this.decorators, t)
                } else
                    this.decorators[t] = e
            },
            unregisterDecorator: function(t) {
                delete this.decorators[t]
            },
            resetLoggedPropertyAccesses: function() {
                c.resetLoggedProperties()
            }
        };
        var g = u["default"].log;
        e.log = g,
        e.createFrame = o.createFrame,
        e.logger = u["default"]
    }
    , function(t, e) {
        "use strict";
        function n(t) {
            return c[t]
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++)
                for (var n in arguments[e])
                    Object.prototype.hasOwnProperty.call(arguments[e], n) && (t[n] = arguments[e][n]);
            return t
        }
        function r(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return n;
            return -1
        }
        function o(t) {
            if ("string" != typeof t) {
                if (t && t.toHTML)
                    return t.toHTML();
                if (null == t)
                    return "";
                if (!t)
                    return t + "";
                t = "" + t
            }
            return d.test(t) ? t.replace(h, n) : t
        }
        function s(t) {
            return !t && 0 !== t || !(!m(t) || 0 !== t.length)
        }
        function a(t) {
            var e = i({}, t);
            return e._parent = t,
            e
        }
        function l(t, e) {
            return t.path = e,
            t
        }
        function u(t, e) {
            return (t ? t + "." : "") + e
        }
        e.__esModule = !0,
        e.extend = i,
        e.indexOf = r,
        e.escapeExpression = o,
        e.isEmpty = s,
        e.createFrame = a,
        e.blockParams = l,
        e.appendContextPath = u;
        var c = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }
          , h = /[&<>"'`=]/g
          , d = /[&<>"'`=]/
          , p = Object.prototype.toString;
        e.toString = p;
        var f = function(t) {
            return "function" == typeof t
        };
        f(/x/) && (e.isFunction = f = function(t) {
            return "function" == typeof t && "[object Function]" === p.call(t)
        }
        ),
        e.isFunction = f;
        var m = Array.isArray || function(t) {
            return !(!t || "object" != typeof t) && "[object Array]" === p.call(t)
        }
        ;
        e.isArray = m
    }
    , function(t, e, n) {
        "use strict";
        function i(t, e) {
            var n = e && e.loc
              , s = undefined
              , a = undefined
              , l = undefined
              , u = undefined;
            n && (s = n.start.line,
            a = n.end.line,
            l = n.start.column,
            u = n.end.column,
            t += " - " + s + ":" + l);
            for (var c = Error.prototype.constructor.call(this, t), h = 0; h < o.length; h++)
                this[o[h]] = c[o[h]];
            Error.captureStackTrace && Error.captureStackTrace(this, i);
            try {
                n && (this.lineNumber = s,
                this.endLineNumber = a,
                r ? (Object.defineProperty(this, "column", {
                    value: l,
                    enumerable: !0
                }),
                Object.defineProperty(this, "endColumn", {
                    value: u,
                    enumerable: !0
                })) : (this.column = l,
                this.endColumn = u))
            } catch (d) {}
        }
        var r = n(7)["default"];
        e.__esModule = !0;
        var o = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
        i.prototype = new Error,
        e["default"] = i,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        t.exports = {
            "default": n(8),
            __esModule: !0
        }
    }
    , function(t, e, n) {
        var i = n(9);
        t.exports = function(t, e, n) {
            return i.setDesc(t, e, n)
        }
    }
    , function(t) {
        var e = Object;
        t.exports = {
            create: e.create,
            getProto: e.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: e.getOwnPropertyDescriptor,
            setDesc: e.defineProperty,
            setDescs: e.defineProperties,
            getKeys: e.keys,
            getNames: e.getOwnPropertyNames,
            getSymbols: e.getOwnPropertySymbols,
            each: [].forEach
        }
    }
    , function(t, e, n) {
        "use strict";
        function i(t) {
            s["default"](t),
            a["default"](t),
            l["default"](t),
            u["default"](t),
            c["default"](t),
            h["default"](t),
            d["default"](t)
        }
        function r(t, e, n) {
            t.helpers[e] && (t.hooks[e] = t.helpers[e],
            n || delete t.helpers[e])
        }
        var o = n(1)["default"];
        e.__esModule = !0,
        e.registerDefaultHelpers = i,
        e.moveHelperToHooks = r;
        var s = o(n(11))
          , a = o(n(12))
          , l = o(n(25))
          , u = o(n(26))
          , c = o(n(27))
          , h = o(n(28))
          , d = o(n(29))
    }
    , function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(5);
        e["default"] = function(t) {
            t.registerHelper("blockHelperMissing", function(e, n) {
                var r = n.inverse
                  , o = n.fn;
                if (!0 === e)
                    return o(this);
                if (!1 === e || null == e)
                    return r(this);
                if (i.isArray(e))
                    return e.length > 0 ? (n.ids && (n.ids = [n.name]),
                    t.helpers.each(e, n)) : r(this);
                if (n.data && n.ids) {
                    var s = i.createFrame(n.data);
                    s.contextPath = i.appendContextPath(n.data.contextPath, n.name),
                    n = {
                        data: s
                    }
                }
                return o(e, n)
            })
        }
        ,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        (function(i) {
            "use strict";
            var r = n(13)["default"]
              , o = n(1)["default"];
            e.__esModule = !0;
            var s = n(5)
              , a = o(n(6));
            e["default"] = function(t) {
                t.registerHelper("each", function(t, e) {
                    function n(e, n, i) {
                        d && (d.key = e,
                        d.index = n,
                        d.first = 0 === n,
                        d.last = !!i,
                        p && (d.contextPath = p + e)),
                        h += l(t[e], {
                            data: d,
                            blockParams: s.blockParams([t[e], e], [p + e, null])
                        })
                    }
                    if (!e)
                        throw new a["default"]("Must pass iterator to #each");
                    var o, l = e.fn, u = e.inverse, c = 0, h = "", d = undefined, p = undefined;
                    if (e.data && e.ids && (p = s.appendContextPath(e.data.contextPath, e.ids[0]) + "."),
                    s.isFunction(t) && (t = t.call(this)),
                    e.data && (d = s.createFrame(e.data)),
                    t && "object" == typeof t)
                        if (s.isArray(t))
                            for (var f = t.length; c < f; c++)
                                c in t && n(c, c, c === t.length - 1);
                        else if (i.Symbol && t[i.Symbol.iterator]) {
                            for (var m = [], g = t[i.Symbol.iterator](), v = g.next(); !v.done; v = g.next())
                                m.push(v.value);
                            for (f = (t = m).length; c < f; c++)
                                n(c, c, c === t.length - 1)
                        } else
                            o = undefined,
                            r(t).forEach(function(t) {
                                o !== undefined && n(o, c - 1),
                                o = t,
                                c++
                            }),
                            o !== undefined && n(o, c - 1, !0);
                    return 0 === c && (h = u(this)),
                    h
                })
            }
            ,
            t.exports = e["default"]
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        t.exports = {
            "default": n(14),
            __esModule: !0
        }
    }
    , function(t, e, n) {
        n(15),
        t.exports = n(21).Object.keys
    }
    , function(t, e, n) {
        var i = n(16);
        n(18)("keys", function(t) {
            return function(e) {
                return t(i(e))
            }
        })
    }
    , function(t, e, n) {
        var i = n(17);
        t.exports = function(t) {
            return Object(i(t))
        }
    }
    , function(t) {
        t.exports = function(t) {
            if (t == undefined)
                throw TypeError("Can't call method on  " + t);
            return t
        }
    }
    , function(t, e, n) {
        var i = n(19)
          , r = n(21)
          , o = n(24);
        t.exports = function(t, e) {
            var n = (r.Object || {})[t] || Object[t]
              , s = {};
            s[t] = e(n),
            i(i.S + i.F * o(function() {
                n(1)
            }), "Object", s)
        }
    }
    , function(t, e, n) {
        var i = n(20)
          , r = n(21)
          , o = n(22)
          , s = "prototype"
          , a = function(t, e, n) {
            var l, u, c, h = t & a.F, d = t & a.G, p = t & a.S, f = t & a.P, m = t & a.B, g = t & a.W, v = d ? r : r[e] || (r[e] = {}), y = d ? i : p ? i[e] : (i[e] || {})[s];
            for (l in d && (n = e),
            n)
                (u = !h && y && l in y) && l in v || (c = u ? y[l] : n[l],
                v[l] = d && "function" != typeof y[l] ? n[l] : m && u ? o(c, i) : g && y[l] == c ? function(t) {
                    var e = function(e) {
                        return this instanceof t ? new t(e) : t(e)
                    };
                    return e[s] = t[s],
                    e
                }(c) : f && "function" == typeof c ? o(Function.call, c) : c,
                f && ((v[s] || (v[s] = {}))[l] = c))
        };
        a.F = 1,
        a.G = 2,
        a.S = 4,
        a.P = 8,
        a.B = 16,
        a.W = 32,
        t.exports = a
    }
    , function(t) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }
    , function(t) {
        var e = t.exports = {
            version: "1.2.6"
        };
        "number" == typeof __e && (__e = e)
    }
    , function(t, e, n) {
        var i = n(23);
        t.exports = function(t, e, n) {
            if (i(t),
            e === undefined)
                return t;
            switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                }
                ;
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                }
                ;
            case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }
    , function(t) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t
        }
    }
    , function(t) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var i = n(1)["default"];
        e.__esModule = !0;
        var r = i(n(6));
        e["default"] = function(t) {
            t.registerHelper("helperMissing", function() {
                if (1 === arguments.length)
                    return undefined;
                throw new r["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }
        ,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        var i = n(1)["default"];
        e.__esModule = !0;
        var r = n(5)
          , o = i(n(6));
        e["default"] = function(t) {
            t.registerHelper("if", function(t, e) {
                if (2 != arguments.length)
                    throw new o["default"]("#if requires exactly one argument");
                return r.isFunction(t) && (t = t.call(this)),
                !e.hash.includeZero && !t || r.isEmpty(t) ? e.inverse(this) : e.fn(this)
            }),
            t.registerHelper("unless", function(e, n) {
                if (2 != arguments.length)
                    throw new o["default"]("#unless requires exactly one argument");
                return t.helpers["if"].call(this, e, {
                    fn: n.inverse,
                    inverse: n.fn,
                    hash: n.hash
                })
            })
        }
        ,
        t.exports = e["default"]
    }
    , function(t, e) {
        "use strict";
        e.__esModule = !0,
        e["default"] = function(t) {
            t.registerHelper("log", function() {
                for (var e = [undefined], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++)
                    e.push(arguments[i]);
                var r = 1;
                null != n.hash.level ? r = n.hash.level : n.data && null != n.data.level && (r = n.data.level),
                e[0] = r,
                t.log.apply(t, e)
            })
        }
        ,
        t.exports = e["default"]
    }
    , function(t, e) {
        "use strict";
        e.__esModule = !0,
        e["default"] = function(t) {
            t.registerHelper("lookup", function(t, e, n) {
                return t ? n.lookupProperty(t, e) : t
            })
        }
        ,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        var i = n(1)["default"];
        e.__esModule = !0;
        var r = n(5)
          , o = i(n(6));
        e["default"] = function(t) {
            t.registerHelper("with", function(t, e) {
                if (2 != arguments.length)
                    throw new o["default"]("#with requires exactly one argument");
                r.isFunction(t) && (t = t.call(this));
                var n = e.fn;
                if (r.isEmpty(t))
                    return e.inverse(this);
                var i = e.data;
                return e.data && e.ids && ((i = r.createFrame(e.data)).contextPath = r.appendContextPath(e.data.contextPath, e.ids[0])),
                n(t, {
                    data: i,
                    blockParams: r.blockParams([t], [i && i.contextPath])
                })
            })
        }
        ,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        function i(t) {
            o["default"](t)
        }
        var r = n(1)["default"];
        e.__esModule = !0,
        e.registerDefaultDecorators = i;
        var o = r(n(31))
    }
    , function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(5);
        e["default"] = function(t) {
            t.registerDecorator("inline", function(t, e, n, r) {
                var o = t;
                return e.partials || (e.partials = {},
                o = function(r, o) {
                    var s = n.partials;
                    n.partials = i.extend({}, s, e.partials);
                    var a = t(r, o);
                    return n.partials = s,
                    a
                }
                ),
                e.partials[r.args[0]] = r.fn,
                o
            })
        }
        ,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(5)
          , r = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function(t) {
                if ("string" == typeof t) {
                    var e = i.indexOf(r.methodMap, t.toLowerCase());
                    t = e >= 0 ? e : parseInt(t, 10)
                }
                return t
            },
            log: function(t) {
                if (t = r.lookupLevel(t),
                "undefined" != typeof console && r.lookupLevel(r.level) <= t) {
                    var e = r.methodMap[t];
                    console[e] || (e = "log");
                    for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                        i[o - 1] = arguments[o];
                    console[e].apply(console, i)
                }
            }
        };
        e["default"] = r,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        function i(t) {
            var e = l(null);
            e.constructor = !1,
            e.__defineGetter__ = !1,
            e.__defineSetter__ = !1,
            e.__lookupGetter__ = !1;
            var n = l(null);
            return n.__proto__ = !1,
            {
                properties: {
                    whitelist: h.createNewLookupObject(n, t.allowedProtoProperties),
                    defaultValue: t.allowProtoPropertiesByDefault
                },
                methods: {
                    whitelist: h.createNewLookupObject(e, t.allowedProtoMethods),
                    defaultValue: t.allowProtoMethodsByDefault
                }
            }
        }
        function r(t, e, n) {
            return o("function" == typeof t ? e.methods : e.properties, n)
        }
        function o(t, e) {
            return t.whitelist[e] !== undefined ? !0 === t.whitelist[e] : t.defaultValue !== undefined ? t.defaultValue : (s(e),
            !1)
        }
        function s(t) {
            !0 !== p[t] && (p[t] = !0,
            d.log("error", 'Handlebars: Access has been denied to resolve the property "' + t + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))
        }
        function a() {
            u(p).forEach(function(t) {
                delete p[t]
            })
        }
        var l = n(34)["default"]
          , u = n(13)["default"]
          , c = n(3)["default"];
        e.__esModule = !0,
        e.createProtoAccessControl = i,
        e.resultIsAllowed = r,
        e.resetLoggedProperties = a;
        var h = n(36)
          , d = c(n(32))
          , p = l(null)
    }
    , function(t, e, n) {
        t.exports = {
            "default": n(35),
            __esModule: !0
        }
    }
    , function(t, e, n) {
        var i = n(9);
        t.exports = function(t, e) {
            return i.create(t, e)
        }
    }
    , function(t, e, n) {
        "use strict";
        function i() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return o.extend.apply(undefined, [r(null)].concat(e))
        }
        var r = n(34)["default"];
        e.__esModule = !0,
        e.createNewLookupObject = i;
        var o = n(5)
    }
    , function(t, e) {
        "use strict";
        function n(t) {
            this.string = t
        }
        e.__esModule = !0,
        n.prototype.toString = n.prototype.toHTML = function() {
            return "" + this.string
        }
        ,
        e["default"] = n,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        function i(t) {
            var e = t && t[0] || 1
              , n = b.COMPILER_REVISION;
            if (!(e >= b.LAST_COMPATIBLE_COMPILER_REVISION && e <= b.COMPILER_REVISION)) {
                if (e < b.LAST_COMPATIBLE_COMPILER_REVISION) {
                    var i = b.REVISION_CHANGES[n]
                      , r = b.REVISION_CHANGES[e];
                    throw new y["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
                }
                throw new y["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
            }
        }
        function r(t, e) {
            function n(n, i, r) {
                r.hash && (i = v.extend({}, i, r.hash),
                r.ids && (r.ids[0] = !0)),
                n = e.VM.resolvePartial.call(this, n, i, r);
                var o = v.extend({}, r, {
                    hooks: this.hooks,
                    protoAccessControl: this.protoAccessControl
                })
                  , s = e.VM.invokePartial.call(this, n, i, o);
                if (null == s && e.compile && (r.partials[r.name] = e.compile(n, t.compilerOptions, e),
                s = r.partials[r.name](i, o)),
                null != s) {
                    if (r.indent) {
                        for (var a = s.split("\n"), l = 0, u = a.length; l < u && (a[l] || l + 1 !== u); l++)
                            a[l] = r.indent + a[l];
                        s = a.join("\n")
                    }
                    return s
                }
                throw new y["default"]("The partial " + r.name + " could not be compiled when running in runtime-only mode")
            }
            function i(e) {
                function n(e) {
                    return "" + t.main(s, e, s.helpers, s.partials, o, l, a)
                }
                var r = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]
                  , o = r.data;
                i._setup(r),
                !r.partial && t.useData && (o = u(e, o));
                var a = undefined
                  , l = t.useBlockParams ? [] : undefined;
                return t.useDepths && (a = r.depths ? e != r.depths[0] ? [e].concat(r.depths) : r.depths : [e]),
                (n = c(t.main, n, s, r.depths || [], o, l))(e, r)
            }
            if (!e)
                throw new y["default"]("No environment passed to template");
            if (!t || !t.main)
                throw new y["default"]("Unknown template object: " + typeof t);
            t.main.decorator = t.main_d,
            e.VM.checkRevision(t.compiler);
            var r = t.compiler && 7 === t.compiler[0]
              , s = {
                strict: function(t, e, n) {
                    if (!(t && e in t))
                        throw new y["default"]('"' + e + '" not defined in ' + t,{
                            loc: n
                        });
                    return s.lookupProperty(t, e)
                },
                lookupProperty: function(t, e) {
                    var n = t[e];
                    return null == n ? n : Object.prototype.hasOwnProperty.call(t, e) ? n : _.resultIsAllowed(n, s.protoAccessControl, e) ? n : undefined
                },
                lookup: function(t, e) {
                    for (var n = t.length, i = 0; i < n; i++) {
                        if (null != (t[i] && s.lookupProperty(t[i], e)))
                            return t[i][e]
                    }
                },
                lambda: function(t, e) {
                    return "function" == typeof t ? t.call(e) : t
                },
                escapeExpression: v.escapeExpression,
                invokePartial: n,
                fn: function(e) {
                    var n = t[e];
                    return n.decorator = t[e + "_d"],
                    n
                },
                programs: [],
                program: function(t, e, n, i, r) {
                    var s = this.programs[t]
                      , a = this.fn(t);
                    return e || r || i || n ? s = o(this, t, a, e, n, i, r) : s || (s = this.programs[t] = o(this, t, a)),
                    s
                },
                data: function(t, e) {
                    for (; t && e--; )
                        t = t._parent;
                    return t
                },
                mergeIfNeeded: function(t, e) {
                    var n = t || e;
                    return t && e && t !== e && (n = v.extend({}, e, t)),
                    n
                },
                nullContext: p({}),
                noop: e.VM.noop,
                compilerInfo: t.compiler
            };
            return i.isTop = !0,
            i._setup = function(n) {
                if (n.partial)
                    s.protoAccessControl = n.protoAccessControl,
                    s.helpers = n.helpers,
                    s.partials = n.partials,
                    s.decorators = n.decorators,
                    s.hooks = n.hooks;
                else {
                    var i = v.extend({}, e.helpers, n.helpers);
                    h(i, s),
                    s.helpers = i,
                    t.usePartial && (s.partials = s.mergeIfNeeded(n.partials, e.partials)),
                    (t.usePartial || t.useDecorators) && (s.decorators = v.extend({}, e.decorators, n.decorators)),
                    s.hooks = {},
                    s.protoAccessControl = _.createProtoAccessControl(n);
                    var o = n.allowCallsToHelperMissing || r;
                    w.moveHelperToHooks(s, "helperMissing", o),
                    w.moveHelperToHooks(s, "blockHelperMissing", o)
                }
            }
            ,
            i._child = function(e, n, i, r) {
                if (t.useBlockParams && !i)
                    throw new y["default"]("must pass block params");
                if (t.useDepths && !r)
                    throw new y["default"]("must pass parent depths");
                return o(s, e, t[e], n, 0, i, r)
            }
            ,
            i
        }
        function o(t, e, n, i, r, o, s) {
            function a(e) {
                var r = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]
                  , a = s;
                return !s || e == s[0] || e === t.nullContext && null === s[0] || (a = [e].concat(s)),
                n(t, e, t.helpers, t.partials, r.data || i, o && [r.blockParams].concat(o), a)
            }
            return (a = c(n, a, t, s, i, o)).program = e,
            a.depth = s ? s.length : 0,
            a.blockParams = r || 0,
            a
        }
        function s(t, e, n) {
            return t ? t.call || n.name || (n.name = t,
            t = n.partials[t]) : t = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name],
            t
        }
        function a(t, e, n) {
            var i = n.data && n.data["partial-block"];
            n.partial = !0,
            n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
            var r = undefined;
            if (n.fn && n.fn !== l && function() {
                n.data = b.createFrame(n.data);
                var t = n.fn;
                r = n.data["partial-block"] = function(e) {
                    var n = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    return n.data = b.createFrame(n.data),
                    n.data["partial-block"] = i,
                    t(e, n)
                }
                ,
                t.partials && (n.partials = v.extend({}, n.partials, t.partials))
            }(),
            t === undefined && r && (t = r),
            t === undefined)
                throw new y["default"]("The partial " + n.name + " could not be found");
            if (t instanceof Function)
                return t(e, n)
        }
        function l() {
            return ""
        }
        function u(t, e) {
            return e && "root"in e || ((e = e ? b.createFrame(e) : {}).root = t),
            e
        }
        function c(t, e, n, i, r, o) {
            if (t.decorator) {
                var s = {};
                e = t.decorator(e, s, n, i && i[0], r, o, i),
                v.extend(e, s)
            }
            return e
        }
        function h(t, e) {
            f(t).forEach(function(n) {
                var i = t[n];
                t[n] = d(i, e)
            })
        }
        function d(t, e) {
            var n = e.lookupProperty;
            return x.wrapHelper(t, function(t) {
                return v.extend({
                    lookupProperty: n
                }, t)
            })
        }
        var p = n(39)["default"]
          , f = n(13)["default"]
          , m = n(3)["default"]
          , g = n(1)["default"];
        e.__esModule = !0,
        e.checkRevision = i,
        e.template = r,
        e.wrapProgram = o,
        e.resolvePartial = s,
        e.invokePartial = a,
        e.noop = l;
        var v = m(n(5))
          , y = g(n(6))
          , b = n(4)
          , w = n(10)
          , x = n(43)
          , _ = n(33)
    }
    , function(t, e, n) {
        t.exports = {
            "default": n(40),
            __esModule: !0
        }
    }
    , function(t, e, n) {
        n(41),
        t.exports = n(21).Object.seal
    }
    , function(t, e, n) {
        var i = n(42);
        n(18)("seal", function(t) {
            return function(e) {
                return t && i(e) ? t(e) : e
            }
        })
    }
    , function(t) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }
    , function(t, e) {
        "use strict";
        function n(t, e) {
            return "function" != typeof t ? t : function() {
                var n = arguments[arguments.length - 1];
                return arguments[arguments.length - 1] = e(n),
                t.apply(this, arguments)
            }
        }
        e.__esModule = !0,
        e.wrapHelper = n
    }
    , function(t, e) {
        (function(n) {
            "use strict";
            e.__esModule = !0,
            e["default"] = function(t) {
                var e = void 0 !== n ? n : window
                  , i = e.Handlebars;
                t.noConflict = function() {
                    return e.Handlebars === t && (e.Handlebars = i),
                    t
                }
            }
            ,
            t.exports = e["default"]
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e) {
        "use strict";
        e.__esModule = !0;
        var n = {
            helpers: {
                helperExpression: function(t) {
                    return "SubExpression" === t.type || ("MustacheStatement" === t.type || "BlockStatement" === t.type) && !!(t.params && t.params.length || t.hash)
                },
                scopedId: function(t) {
                    return /^\.|this\b/.test(t.original)
                },
                simpleId: function(t) {
                    return 1 === t.parts.length && !n.helpers.scopedId(t) && !t.depth
                }
            }
        };
        e["default"] = n,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        function i(t, e) {
            return "Program" === t.type ? t : (a["default"].yy = h,
            h.locInfo = function(t) {
                return new h.SourceLocation(e && e.srcName,t)
            }
            ,
            a["default"].parse(t))
        }
        function r(t, e) {
            var n = i(t, e);
            return new l["default"](e).accept(n)
        }
        var o = n(1)["default"]
          , s = n(3)["default"];
        e.__esModule = !0,
        e.parseWithoutProcessing = i,
        e.parse = r;
        var a = o(n(47))
          , l = o(n(48))
          , u = s(n(50))
          , c = n(5);
        e.parser = a["default"];
        var h = {};
        c.extend(h, u)
    }
    , function(t, e) {
        "use strict";
        e.__esModule = !0;
        var n = function() {
            function t() {
                this.yy = {}
            }
            var e = {
                trace: function() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    program: 4,
                    EOF: 5,
                    program_repetition0: 6,
                    statement: 7,
                    mustache: 8,
                    block: 9,
                    rawBlock: 10,
                    partial: 11,
                    partialBlock: 12,
                    content: 13,
                    COMMENT: 14,
                    CONTENT: 15,
                    openRawBlock: 16,
                    rawBlock_repetition0: 17,
                    END_RAW_BLOCK: 18,
                    OPEN_RAW_BLOCK: 19,
                    helperName: 20,
                    openRawBlock_repetition0: 21,
                    openRawBlock_option0: 22,
                    CLOSE_RAW_BLOCK: 23,
                    openBlock: 24,
                    block_option0: 25,
                    closeBlock: 26,
                    openInverse: 27,
                    block_option1: 28,
                    OPEN_BLOCK: 29,
                    openBlock_repetition0: 30,
                    openBlock_option0: 31,
                    openBlock_option1: 32,
                    CLOSE: 33,
                    OPEN_INVERSE: 34,
                    openInverse_repetition0: 35,
                    openInverse_option0: 36,
                    openInverse_option1: 37,
                    openInverseChain: 38,
                    OPEN_INVERSE_CHAIN: 39,
                    openInverseChain_repetition0: 40,
                    openInverseChain_option0: 41,
                    openInverseChain_option1: 42,
                    inverseAndProgram: 43,
                    INVERSE: 44,
                    inverseChain: 45,
                    inverseChain_option0: 46,
                    OPEN_ENDBLOCK: 47,
                    OPEN: 48,
                    mustache_repetition0: 49,
                    mustache_option0: 50,
                    OPEN_UNESCAPED: 51,
                    mustache_repetition1: 52,
                    mustache_option1: 53,
                    CLOSE_UNESCAPED: 54,
                    OPEN_PARTIAL: 55,
                    partialName: 56,
                    partial_repetition0: 57,
                    partial_option0: 58,
                    openPartialBlock: 59,
                    OPEN_PARTIAL_BLOCK: 60,
                    openPartialBlock_repetition0: 61,
                    openPartialBlock_option0: 62,
                    param: 63,
                    sexpr: 64,
                    OPEN_SEXPR: 65,
                    sexpr_repetition0: 66,
                    sexpr_option0: 67,
                    CLOSE_SEXPR: 68,
                    hash: 69,
                    hash_repetition_plus0: 70,
                    hashSegment: 71,
                    ID: 72,
                    EQUALS: 73,
                    blockParams: 74,
                    OPEN_BLOCK_PARAMS: 75,
                    blockParams_repetition_plus0: 76,
                    CLOSE_BLOCK_PARAMS: 77,
                    path: 78,
                    dataName: 79,
                    STRING: 80,
                    NUMBER: 81,
                    BOOLEAN: 82,
                    UNDEFINED: 83,
                    NULL: 84,
                    DATA: 85,
                    pathSegments: 86,
                    SEP: 87,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    14: "COMMENT",
                    15: "CONTENT",
                    18: "END_RAW_BLOCK",
                    19: "OPEN_RAW_BLOCK",
                    23: "CLOSE_RAW_BLOCK",
                    29: "OPEN_BLOCK",
                    33: "CLOSE",
                    34: "OPEN_INVERSE",
                    39: "OPEN_INVERSE_CHAIN",
                    44: "INVERSE",
                    47: "OPEN_ENDBLOCK",
                    48: "OPEN",
                    51: "OPEN_UNESCAPED",
                    54: "CLOSE_UNESCAPED",
                    55: "OPEN_PARTIAL",
                    60: "OPEN_PARTIAL_BLOCK",
                    65: "OPEN_SEXPR",
                    68: "CLOSE_SEXPR",
                    72: "ID",
                    73: "EQUALS",
                    75: "OPEN_BLOCK_PARAMS",
                    77: "CLOSE_BLOCK_PARAMS",
                    80: "STRING",
                    81: "NUMBER",
                    82: "BOOLEAN",
                    83: "UNDEFINED",
                    84: "NULL",
                    85: "DATA",
                    87: "SEP"
                },
                productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
                performAction: function(t, e, n, i, r, o) {
                    var s = o.length - 1;
                    switch (r) {
                    case 1:
                        return o[s - 1];
                    case 2:
                        this.$ = i.prepareProgram(o[s]);
                        break;
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        this.$ = o[s];
                        break;
                    case 9:
                        this.$ = {
                            type: "CommentStatement",
                            value: i.stripComment(o[s]),
                            strip: i.stripFlags(o[s], o[s]),
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 10:
                        this.$ = {
                            type: "ContentStatement",
                            original: o[s],
                            value: o[s],
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 11:
                        this.$ = i.prepareRawBlock(o[s - 2], o[s - 1], o[s], this._$);
                        break;
                    case 12:
                        this.$ = {
                            path: o[s - 3],
                            params: o[s - 2],
                            hash: o[s - 1]
                        };
                        break;
                    case 13:
                        this.$ = i.prepareBlock(o[s - 3], o[s - 2], o[s - 1], o[s], !1, this._$);
                        break;
                    case 14:
                        this.$ = i.prepareBlock(o[s - 3], o[s - 2], o[s - 1], o[s], !0, this._$);
                        break;
                    case 15:
                        this.$ = {
                            open: o[s - 5],
                            path: o[s - 4],
                            params: o[s - 3],
                            hash: o[s - 2],
                            blockParams: o[s - 1],
                            strip: i.stripFlags(o[s - 5], o[s])
                        };
                        break;
                    case 16:
                    case 17:
                        this.$ = {
                            path: o[s - 4],
                            params: o[s - 3],
                            hash: o[s - 2],
                            blockParams: o[s - 1],
                            strip: i.stripFlags(o[s - 5], o[s])
                        };
                        break;
                    case 18:
                        this.$ = {
                            strip: i.stripFlags(o[s - 1], o[s - 1]),
                            program: o[s]
                        };
                        break;
                    case 19:
                        var a = i.prepareBlock(o[s - 2], o[s - 1], o[s], o[s], !1, this._$)
                          , l = i.prepareProgram([a], o[s - 1].loc);
                        l.chained = !0,
                        this.$ = {
                            strip: o[s - 2].strip,
                            program: l,
                            chain: !0
                        };
                        break;
                    case 20:
                        this.$ = o[s];
                        break;
                    case 21:
                        this.$ = {
                            path: o[s - 1],
                            strip: i.stripFlags(o[s - 2], o[s])
                        };
                        break;
                    case 22:
                    case 23:
                        this.$ = i.prepareMustache(o[s - 3], o[s - 2], o[s - 1], o[s - 4], i.stripFlags(o[s - 4], o[s]), this._$);
                        break;
                    case 24:
                        this.$ = {
                            type: "PartialStatement",
                            name: o[s - 3],
                            params: o[s - 2],
                            hash: o[s - 1],
                            indent: "",
                            strip: i.stripFlags(o[s - 4], o[s]),
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 25:
                        this.$ = i.preparePartialBlock(o[s - 2], o[s - 1], o[s], this._$);
                        break;
                    case 26:
                        this.$ = {
                            path: o[s - 3],
                            params: o[s - 2],
                            hash: o[s - 1],
                            strip: i.stripFlags(o[s - 4], o[s])
                        };
                        break;
                    case 27:
                    case 28:
                        this.$ = o[s];
                        break;
                    case 29:
                        this.$ = {
                            type: "SubExpression",
                            path: o[s - 3],
                            params: o[s - 2],
                            hash: o[s - 1],
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 30:
                        this.$ = {
                            type: "Hash",
                            pairs: o[s],
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 31:
                        this.$ = {
                            type: "HashPair",
                            key: i.id(o[s - 2]),
                            value: o[s],
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 32:
                        this.$ = i.id(o[s - 1]);
                        break;
                    case 33:
                    case 34:
                        this.$ = o[s];
                        break;
                    case 35:
                        this.$ = {
                            type: "StringLiteral",
                            value: o[s],
                            original: o[s],
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 36:
                        this.$ = {
                            type: "NumberLiteral",
                            value: Number(o[s]),
                            original: Number(o[s]),
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 37:
                        this.$ = {
                            type: "BooleanLiteral",
                            value: "true" === o[s],
                            original: "true" === o[s],
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 38:
                        this.$ = {
                            type: "UndefinedLiteral",
                            original: undefined,
                            value: undefined,
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 39:
                        this.$ = {
                            type: "NullLiteral",
                            original: null,
                            value: null,
                            loc: i.locInfo(this._$)
                        };
                        break;
                    case 40:
                    case 41:
                        this.$ = o[s];
                        break;
                    case 42:
                        this.$ = i.preparePath(!0, o[s], this._$);
                        break;
                    case 43:
                        this.$ = i.preparePath(!1, o[s], this._$);
                        break;
                    case 44:
                        o[s - 2].push({
                            part: i.id(o[s]),
                            original: o[s],
                            separator: o[s - 1]
                        }),
                        this.$ = o[s - 2];
                        break;
                    case 45:
                        this.$ = [{
                            part: i.id(o[s]),
                            original: o[s]
                        }];
                        break;
                    case 46:
                        this.$ = [];
                        break;
                    case 47:
                        o[s - 1].push(o[s]);
                        break;
                    case 48:
                        this.$ = [];
                        break;
                    case 49:
                        o[s - 1].push(o[s]);
                        break;
                    case 50:
                        this.$ = [];
                        break;
                    case 51:
                        o[s - 1].push(o[s]);
                        break;
                    case 58:
                        this.$ = [];
                        break;
                    case 59:
                        o[s - 1].push(o[s]);
                        break;
                    case 64:
                        this.$ = [];
                        break;
                    case 65:
                        o[s - 1].push(o[s]);
                        break;
                    case 70:
                        this.$ = [];
                        break;
                    case 71:
                        o[s - 1].push(o[s]);
                        break;
                    case 78:
                        this.$ = [];
                        break;
                    case 79:
                        o[s - 1].push(o[s]);
                        break;
                    case 82:
                        this.$ = [];
                        break;
                    case 83:
                        o[s - 1].push(o[s]);
                        break;
                    case 86:
                        this.$ = [];
                        break;
                    case 87:
                        o[s - 1].push(o[s]);
                        break;
                    case 90:
                        this.$ = [];
                        break;
                    case 91:
                        o[s - 1].push(o[s]);
                        break;
                    case 94:
                        this.$ = [];
                        break;
                    case 95:
                        o[s - 1].push(o[s]);
                        break;
                    case 98:
                        this.$ = [o[s]];
                        break;
                    case 99:
                        o[s - 1].push(o[s]);
                        break;
                    case 100:
                        this.$ = [o[s]];
                        break;
                    case 101:
                        o[s - 1].push(o[s])
                    }
                },
                table: [{
                    3: 1,
                    4: 2,
                    5: [2, 46],
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {
                    1: [3]
                }, {
                    5: [1, 4]
                }, {
                    5: [2, 2],
                    7: 5,
                    8: 6,
                    9: 7,
                    10: 8,
                    11: 9,
                    12: 10,
                    13: 11,
                    14: [1, 12],
                    15: [1, 20],
                    16: 17,
                    19: [1, 23],
                    24: 15,
                    27: 16,
                    29: [1, 21],
                    34: [1, 22],
                    39: [2, 2],
                    44: [2, 2],
                    47: [2, 2],
                    48: [1, 13],
                    51: [1, 14],
                    55: [1, 18],
                    59: 19,
                    60: [1, 24]
                }, {
                    1: [2, 1]
                }, {
                    5: [2, 47],
                    14: [2, 47],
                    15: [2, 47],
                    19: [2, 47],
                    29: [2, 47],
                    34: [2, 47],
                    39: [2, 47],
                    44: [2, 47],
                    47: [2, 47],
                    48: [2, 47],
                    51: [2, 47],
                    55: [2, 47],
                    60: [2, 47]
                }, {
                    5: [2, 3],
                    14: [2, 3],
                    15: [2, 3],
                    19: [2, 3],
                    29: [2, 3],
                    34: [2, 3],
                    39: [2, 3],
                    44: [2, 3],
                    47: [2, 3],
                    48: [2, 3],
                    51: [2, 3],
                    55: [2, 3],
                    60: [2, 3]
                }, {
                    5: [2, 4],
                    14: [2, 4],
                    15: [2, 4],
                    19: [2, 4],
                    29: [2, 4],
                    34: [2, 4],
                    39: [2, 4],
                    44: [2, 4],
                    47: [2, 4],
                    48: [2, 4],
                    51: [2, 4],
                    55: [2, 4],
                    60: [2, 4]
                }, {
                    5: [2, 5],
                    14: [2, 5],
                    15: [2, 5],
                    19: [2, 5],
                    29: [2, 5],
                    34: [2, 5],
                    39: [2, 5],
                    44: [2, 5],
                    47: [2, 5],
                    48: [2, 5],
                    51: [2, 5],
                    55: [2, 5],
                    60: [2, 5]
                }, {
                    5: [2, 6],
                    14: [2, 6],
                    15: [2, 6],
                    19: [2, 6],
                    29: [2, 6],
                    34: [2, 6],
                    39: [2, 6],
                    44: [2, 6],
                    47: [2, 6],
                    48: [2, 6],
                    51: [2, 6],
                    55: [2, 6],
                    60: [2, 6]
                }, {
                    5: [2, 7],
                    14: [2, 7],
                    15: [2, 7],
                    19: [2, 7],
                    29: [2, 7],
                    34: [2, 7],
                    39: [2, 7],
                    44: [2, 7],
                    47: [2, 7],
                    48: [2, 7],
                    51: [2, 7],
                    55: [2, 7],
                    60: [2, 7]
                }, {
                    5: [2, 8],
                    14: [2, 8],
                    15: [2, 8],
                    19: [2, 8],
                    29: [2, 8],
                    34: [2, 8],
                    39: [2, 8],
                    44: [2, 8],
                    47: [2, 8],
                    48: [2, 8],
                    51: [2, 8],
                    55: [2, 8],
                    60: [2, 8]
                }, {
                    5: [2, 9],
                    14: [2, 9],
                    15: [2, 9],
                    19: [2, 9],
                    29: [2, 9],
                    34: [2, 9],
                    39: [2, 9],
                    44: [2, 9],
                    47: [2, 9],
                    48: [2, 9],
                    51: [2, 9],
                    55: [2, 9],
                    60: [2, 9]
                }, {
                    20: 25,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 36,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    4: 37,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    39: [2, 46],
                    44: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {
                    4: 38,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    44: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {
                    15: [2, 48],
                    17: 39,
                    18: [2, 48]
                }, {
                    20: 41,
                    56: 40,
                    64: 42,
                    65: [1, 43],
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    4: 44,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {
                    5: [2, 10],
                    14: [2, 10],
                    15: [2, 10],
                    18: [2, 10],
                    19: [2, 10],
                    29: [2, 10],
                    34: [2, 10],
                    39: [2, 10],
                    44: [2, 10],
                    47: [2, 10],
                    48: [2, 10],
                    51: [2, 10],
                    55: [2, 10],
                    60: [2, 10]
                }, {
                    20: 45,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 46,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 47,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 41,
                    56: 48,
                    64: 42,
                    65: [1, 43],
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    33: [2, 78],
                    49: 49,
                    65: [2, 78],
                    72: [2, 78],
                    80: [2, 78],
                    81: [2, 78],
                    82: [2, 78],
                    83: [2, 78],
                    84: [2, 78],
                    85: [2, 78]
                }, {
                    23: [2, 33],
                    33: [2, 33],
                    54: [2, 33],
                    65: [2, 33],
                    68: [2, 33],
                    72: [2, 33],
                    75: [2, 33],
                    80: [2, 33],
                    81: [2, 33],
                    82: [2, 33],
                    83: [2, 33],
                    84: [2, 33],
                    85: [2, 33]
                }, {
                    23: [2, 34],
                    33: [2, 34],
                    54: [2, 34],
                    65: [2, 34],
                    68: [2, 34],
                    72: [2, 34],
                    75: [2, 34],
                    80: [2, 34],
                    81: [2, 34],
                    82: [2, 34],
                    83: [2, 34],
                    84: [2, 34],
                    85: [2, 34]
                }, {
                    23: [2, 35],
                    33: [2, 35],
                    54: [2, 35],
                    65: [2, 35],
                    68: [2, 35],
                    72: [2, 35],
                    75: [2, 35],
                    80: [2, 35],
                    81: [2, 35],
                    82: [2, 35],
                    83: [2, 35],
                    84: [2, 35],
                    85: [2, 35]
                }, {
                    23: [2, 36],
                    33: [2, 36],
                    54: [2, 36],
                    65: [2, 36],
                    68: [2, 36],
                    72: [2, 36],
                    75: [2, 36],
                    80: [2, 36],
                    81: [2, 36],
                    82: [2, 36],
                    83: [2, 36],
                    84: [2, 36],
                    85: [2, 36]
                }, {
                    23: [2, 37],
                    33: [2, 37],
                    54: [2, 37],
                    65: [2, 37],
                    68: [2, 37],
                    72: [2, 37],
                    75: [2, 37],
                    80: [2, 37],
                    81: [2, 37],
                    82: [2, 37],
                    83: [2, 37],
                    84: [2, 37],
                    85: [2, 37]
                }, {
                    23: [2, 38],
                    33: [2, 38],
                    54: [2, 38],
                    65: [2, 38],
                    68: [2, 38],
                    72: [2, 38],
                    75: [2, 38],
                    80: [2, 38],
                    81: [2, 38],
                    82: [2, 38],
                    83: [2, 38],
                    84: [2, 38],
                    85: [2, 38]
                }, {
                    23: [2, 39],
                    33: [2, 39],
                    54: [2, 39],
                    65: [2, 39],
                    68: [2, 39],
                    72: [2, 39],
                    75: [2, 39],
                    80: [2, 39],
                    81: [2, 39],
                    82: [2, 39],
                    83: [2, 39],
                    84: [2, 39],
                    85: [2, 39]
                }, {
                    23: [2, 43],
                    33: [2, 43],
                    54: [2, 43],
                    65: [2, 43],
                    68: [2, 43],
                    72: [2, 43],
                    75: [2, 43],
                    80: [2, 43],
                    81: [2, 43],
                    82: [2, 43],
                    83: [2, 43],
                    84: [2, 43],
                    85: [2, 43],
                    87: [1, 50]
                }, {
                    72: [1, 35],
                    86: 51
                }, {
                    23: [2, 45],
                    33: [2, 45],
                    54: [2, 45],
                    65: [2, 45],
                    68: [2, 45],
                    72: [2, 45],
                    75: [2, 45],
                    80: [2, 45],
                    81: [2, 45],
                    82: [2, 45],
                    83: [2, 45],
                    84: [2, 45],
                    85: [2, 45],
                    87: [2, 45]
                }, {
                    52: 52,
                    54: [2, 82],
                    65: [2, 82],
                    72: [2, 82],
                    80: [2, 82],
                    81: [2, 82],
                    82: [2, 82],
                    83: [2, 82],
                    84: [2, 82],
                    85: [2, 82]
                }, {
                    25: 53,
                    38: 55,
                    39: [1, 57],
                    43: 56,
                    44: [1, 58],
                    45: 54,
                    47: [2, 54]
                }, {
                    28: 59,
                    43: 60,
                    44: [1, 58],
                    47: [2, 56]
                }, {
                    13: 62,
                    15: [1, 20],
                    18: [1, 61]
                }, {
                    33: [2, 86],
                    57: 63,
                    65: [2, 86],
                    72: [2, 86],
                    80: [2, 86],
                    81: [2, 86],
                    82: [2, 86],
                    83: [2, 86],
                    84: [2, 86],
                    85: [2, 86]
                }, {
                    33: [2, 40],
                    65: [2, 40],
                    72: [2, 40],
                    80: [2, 40],
                    81: [2, 40],
                    82: [2, 40],
                    83: [2, 40],
                    84: [2, 40],
                    85: [2, 40]
                }, {
                    33: [2, 41],
                    65: [2, 41],
                    72: [2, 41],
                    80: [2, 41],
                    81: [2, 41],
                    82: [2, 41],
                    83: [2, 41],
                    84: [2, 41],
                    85: [2, 41]
                }, {
                    20: 64,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    26: 65,
                    47: [1, 66]
                }, {
                    30: 67,
                    33: [2, 58],
                    65: [2, 58],
                    72: [2, 58],
                    75: [2, 58],
                    80: [2, 58],
                    81: [2, 58],
                    82: [2, 58],
                    83: [2, 58],
                    84: [2, 58],
                    85: [2, 58]
                }, {
                    33: [2, 64],
                    35: 68,
                    65: [2, 64],
                    72: [2, 64],
                    75: [2, 64],
                    80: [2, 64],
                    81: [2, 64],
                    82: [2, 64],
                    83: [2, 64],
                    84: [2, 64],
                    85: [2, 64]
                }, {
                    21: 69,
                    23: [2, 50],
                    65: [2, 50],
                    72: [2, 50],
                    80: [2, 50],
                    81: [2, 50],
                    82: [2, 50],
                    83: [2, 50],
                    84: [2, 50],
                    85: [2, 50]
                }, {
                    33: [2, 90],
                    61: 70,
                    65: [2, 90],
                    72: [2, 90],
                    80: [2, 90],
                    81: [2, 90],
                    82: [2, 90],
                    83: [2, 90],
                    84: [2, 90],
                    85: [2, 90]
                }, {
                    20: 74,
                    33: [2, 80],
                    50: 71,
                    63: 72,
                    64: 75,
                    65: [1, 43],
                    69: 73,
                    70: 76,
                    71: 77,
                    72: [1, 78],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    72: [1, 79]
                }, {
                    23: [2, 42],
                    33: [2, 42],
                    54: [2, 42],
                    65: [2, 42],
                    68: [2, 42],
                    72: [2, 42],
                    75: [2, 42],
                    80: [2, 42],
                    81: [2, 42],
                    82: [2, 42],
                    83: [2, 42],
                    84: [2, 42],
                    85: [2, 42],
                    87: [1, 50]
                }, {
                    20: 74,
                    53: 80,
                    54: [2, 84],
                    63: 81,
                    64: 75,
                    65: [1, 43],
                    69: 82,
                    70: 76,
                    71: 77,
                    72: [1, 78],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    26: 83,
                    47: [1, 66]
                }, {
                    47: [2, 55]
                }, {
                    4: 84,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    39: [2, 46],
                    44: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {
                    47: [2, 20]
                }, {
                    20: 85,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    4: 86,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {
                    26: 87,
                    47: [1, 66]
                }, {
                    47: [2, 57]
                }, {
                    5: [2, 11],
                    14: [2, 11],
                    15: [2, 11],
                    19: [2, 11],
                    29: [2, 11],
                    34: [2, 11],
                    39: [2, 11],
                    44: [2, 11],
                    47: [2, 11],
                    48: [2, 11],
                    51: [2, 11],
                    55: [2, 11],
                    60: [2, 11]
                }, {
                    15: [2, 49],
                    18: [2, 49]
                }, {
                    20: 74,
                    33: [2, 88],
                    58: 88,
                    63: 89,
                    64: 75,
                    65: [1, 43],
                    69: 90,
                    70: 76,
                    71: 77,
                    72: [1, 78],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    65: [2, 94],
                    66: 91,
                    68: [2, 94],
                    72: [2, 94],
                    80: [2, 94],
                    81: [2, 94],
                    82: [2, 94],
                    83: [2, 94],
                    84: [2, 94],
                    85: [2, 94]
                }, {
                    5: [2, 25],
                    14: [2, 25],
                    15: [2, 25],
                    19: [2, 25],
                    29: [2, 25],
                    34: [2, 25],
                    39: [2, 25],
                    44: [2, 25],
                    47: [2, 25],
                    48: [2, 25],
                    51: [2, 25],
                    55: [2, 25],
                    60: [2, 25]
                }, {
                    20: 92,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 74,
                    31: 93,
                    33: [2, 60],
                    63: 94,
                    64: 75,
                    65: [1, 43],
                    69: 95,
                    70: 76,
                    71: 77,
                    72: [1, 78],
                    75: [2, 60],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 74,
                    33: [2, 66],
                    36: 96,
                    63: 97,
                    64: 75,
                    65: [1, 43],
                    69: 98,
                    70: 76,
                    71: 77,
                    72: [1, 78],
                    75: [2, 66],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 74,
                    22: 99,
                    23: [2, 52],
                    63: 100,
                    64: 75,
                    65: [1, 43],
                    69: 101,
                    70: 76,
                    71: 77,
                    72: [1, 78],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 74,
                    33: [2, 92],
                    62: 102,
                    63: 103,
                    64: 75,
                    65: [1, 43],
                    69: 104,
                    70: 76,
                    71: 77,
                    72: [1, 78],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    33: [1, 105]
                }, {
                    33: [2, 79],
                    65: [2, 79],
                    72: [2, 79],
                    80: [2, 79],
                    81: [2, 79],
                    82: [2, 79],
                    83: [2, 79],
                    84: [2, 79],
                    85: [2, 79]
                }, {
                    33: [2, 81]
                }, {
                    23: [2, 27],
                    33: [2, 27],
                    54: [2, 27],
                    65: [2, 27],
                    68: [2, 27],
                    72: [2, 27],
                    75: [2, 27],
                    80: [2, 27],
                    81: [2, 27],
                    82: [2, 27],
                    83: [2, 27],
                    84: [2, 27],
                    85: [2, 27]
                }, {
                    23: [2, 28],
                    33: [2, 28],
                    54: [2, 28],
                    65: [2, 28],
                    68: [2, 28],
                    72: [2, 28],
                    75: [2, 28],
                    80: [2, 28],
                    81: [2, 28],
                    82: [2, 28],
                    83: [2, 28],
                    84: [2, 28],
                    85: [2, 28]
                }, {
                    23: [2, 30],
                    33: [2, 30],
                    54: [2, 30],
                    68: [2, 30],
                    71: 106,
                    72: [1, 107],
                    75: [2, 30]
                }, {
                    23: [2, 98],
                    33: [2, 98],
                    54: [2, 98],
                    68: [2, 98],
                    72: [2, 98],
                    75: [2, 98]
                }, {
                    23: [2, 45],
                    33: [2, 45],
                    54: [2, 45],
                    65: [2, 45],
                    68: [2, 45],
                    72: [2, 45],
                    73: [1, 108],
                    75: [2, 45],
                    80: [2, 45],
                    81: [2, 45],
                    82: [2, 45],
                    83: [2, 45],
                    84: [2, 45],
                    85: [2, 45],
                    87: [2, 45]
                }, {
                    23: [2, 44],
                    33: [2, 44],
                    54: [2, 44],
                    65: [2, 44],
                    68: [2, 44],
                    72: [2, 44],
                    75: [2, 44],
                    80: [2, 44],
                    81: [2, 44],
                    82: [2, 44],
                    83: [2, 44],
                    84: [2, 44],
                    85: [2, 44],
                    87: [2, 44]
                }, {
                    54: [1, 109]
                }, {
                    54: [2, 83],
                    65: [2, 83],
                    72: [2, 83],
                    80: [2, 83],
                    81: [2, 83],
                    82: [2, 83],
                    83: [2, 83],
                    84: [2, 83],
                    85: [2, 83]
                }, {
                    54: [2, 85]
                }, {
                    5: [2, 13],
                    14: [2, 13],
                    15: [2, 13],
                    19: [2, 13],
                    29: [2, 13],
                    34: [2, 13],
                    39: [2, 13],
                    44: [2, 13],
                    47: [2, 13],
                    48: [2, 13],
                    51: [2, 13],
                    55: [2, 13],
                    60: [2, 13]
                }, {
                    38: 55,
                    39: [1, 57],
                    43: 56,
                    44: [1, 58],
                    45: 111,
                    46: 110,
                    47: [2, 76]
                }, {
                    33: [2, 70],
                    40: 112,
                    65: [2, 70],
                    72: [2, 70],
                    75: [2, 70],
                    80: [2, 70],
                    81: [2, 70],
                    82: [2, 70],
                    83: [2, 70],
                    84: [2, 70],
                    85: [2, 70]
                }, {
                    47: [2, 18]
                }, {
                    5: [2, 14],
                    14: [2, 14],
                    15: [2, 14],
                    19: [2, 14],
                    29: [2, 14],
                    34: [2, 14],
                    39: [2, 14],
                    44: [2, 14],
                    47: [2, 14],
                    48: [2, 14],
                    51: [2, 14],
                    55: [2, 14],
                    60: [2, 14]
                }, {
                    33: [1, 113]
                }, {
                    33: [2, 87],
                    65: [2, 87],
                    72: [2, 87],
                    80: [2, 87],
                    81: [2, 87],
                    82: [2, 87],
                    83: [2, 87],
                    84: [2, 87],
                    85: [2, 87]
                }, {
                    33: [2, 89]
                }, {
                    20: 74,
                    63: 115,
                    64: 75,
                    65: [1, 43],
                    67: 114,
                    68: [2, 96],
                    69: 116,
                    70: 76,
                    71: 77,
                    72: [1, 78],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    33: [1, 117]
                }, {
                    32: 118,
                    33: [2, 62],
                    74: 119,
                    75: [1, 120]
                }, {
                    33: [2, 59],
                    65: [2, 59],
                    72: [2, 59],
                    75: [2, 59],
                    80: [2, 59],
                    81: [2, 59],
                    82: [2, 59],
                    83: [2, 59],
                    84: [2, 59],
                    85: [2, 59]
                }, {
                    33: [2, 61],
                    75: [2, 61]
                }, {
                    33: [2, 68],
                    37: 121,
                    74: 122,
                    75: [1, 120]
                }, {
                    33: [2, 65],
                    65: [2, 65],
                    72: [2, 65],
                    75: [2, 65],
                    80: [2, 65],
                    81: [2, 65],
                    82: [2, 65],
                    83: [2, 65],
                    84: [2, 65],
                    85: [2, 65]
                }, {
                    33: [2, 67],
                    75: [2, 67]
                }, {
                    23: [1, 123]
                }, {
                    23: [2, 51],
                    65: [2, 51],
                    72: [2, 51],
                    80: [2, 51],
                    81: [2, 51],
                    82: [2, 51],
                    83: [2, 51],
                    84: [2, 51],
                    85: [2, 51]
                }, {
                    23: [2, 53]
                }, {
                    33: [1, 124]
                }, {
                    33: [2, 91],
                    65: [2, 91],
                    72: [2, 91],
                    80: [2, 91],
                    81: [2, 91],
                    82: [2, 91],
                    83: [2, 91],
                    84: [2, 91],
                    85: [2, 91]
                }, {
                    33: [2, 93]
                }, {
                    5: [2, 22],
                    14: [2, 22],
                    15: [2, 22],
                    19: [2, 22],
                    29: [2, 22],
                    34: [2, 22],
                    39: [2, 22],
                    44: [2, 22],
                    47: [2, 22],
                    48: [2, 22],
                    51: [2, 22],
                    55: [2, 22],
                    60: [2, 22]
                }, {
                    23: [2, 99],
                    33: [2, 99],
                    54: [2, 99],
                    68: [2, 99],
                    72: [2, 99],
                    75: [2, 99]
                }, {
                    73: [1, 108]
                }, {
                    20: 74,
                    63: 125,
                    64: 75,
                    65: [1, 43],
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    5: [2, 23],
                    14: [2, 23],
                    15: [2, 23],
                    19: [2, 23],
                    29: [2, 23],
                    34: [2, 23],
                    39: [2, 23],
                    44: [2, 23],
                    47: [2, 23],
                    48: [2, 23],
                    51: [2, 23],
                    55: [2, 23],
                    60: [2, 23]
                }, {
                    47: [2, 19]
                }, {
                    47: [2, 77]
                }, {
                    20: 74,
                    33: [2, 72],
                    41: 126,
                    63: 127,
                    64: 75,
                    65: [1, 43],
                    69: 128,
                    70: 76,
                    71: 77,
                    72: [1, 78],
                    75: [2, 72],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    5: [2, 24],
                    14: [2, 24],
                    15: [2, 24],
                    19: [2, 24],
                    29: [2, 24],
                    34: [2, 24],
                    39: [2, 24],
                    44: [2, 24],
                    47: [2, 24],
                    48: [2, 24],
                    51: [2, 24],
                    55: [2, 24],
                    60: [2, 24]
                }, {
                    68: [1, 129]
                }, {
                    65: [2, 95],
                    68: [2, 95],
                    72: [2, 95],
                    80: [2, 95],
                    81: [2, 95],
                    82: [2, 95],
                    83: [2, 95],
                    84: [2, 95],
                    85: [2, 95]
                }, {
                    68: [2, 97]
                }, {
                    5: [2, 21],
                    14: [2, 21],
                    15: [2, 21],
                    19: [2, 21],
                    29: [2, 21],
                    34: [2, 21],
                    39: [2, 21],
                    44: [2, 21],
                    47: [2, 21],
                    48: [2, 21],
                    51: [2, 21],
                    55: [2, 21],
                    60: [2, 21]
                }, {
                    33: [1, 130]
                }, {
                    33: [2, 63]
                }, {
                    72: [1, 132],
                    76: 131
                }, {
                    33: [1, 133]
                }, {
                    33: [2, 69]
                }, {
                    15: [2, 12],
                    18: [2, 12]
                }, {
                    14: [2, 26],
                    15: [2, 26],
                    19: [2, 26],
                    29: [2, 26],
                    34: [2, 26],
                    47: [2, 26],
                    48: [2, 26],
                    51: [2, 26],
                    55: [2, 26],
                    60: [2, 26]
                }, {
                    23: [2, 31],
                    33: [2, 31],
                    54: [2, 31],
                    68: [2, 31],
                    72: [2, 31],
                    75: [2, 31]
                }, {
                    33: [2, 74],
                    42: 134,
                    74: 135,
                    75: [1, 120]
                }, {
                    33: [2, 71],
                    65: [2, 71],
                    72: [2, 71],
                    75: [2, 71],
                    80: [2, 71],
                    81: [2, 71],
                    82: [2, 71],
                    83: [2, 71],
                    84: [2, 71],
                    85: [2, 71]
                }, {
                    33: [2, 73],
                    75: [2, 73]
                }, {
                    23: [2, 29],
                    33: [2, 29],
                    54: [2, 29],
                    65: [2, 29],
                    68: [2, 29],
                    72: [2, 29],
                    75: [2, 29],
                    80: [2, 29],
                    81: [2, 29],
                    82: [2, 29],
                    83: [2, 29],
                    84: [2, 29],
                    85: [2, 29]
                }, {
                    14: [2, 15],
                    15: [2, 15],
                    19: [2, 15],
                    29: [2, 15],
                    34: [2, 15],
                    39: [2, 15],
                    44: [2, 15],
                    47: [2, 15],
                    48: [2, 15],
                    51: [2, 15],
                    55: [2, 15],
                    60: [2, 15]
                }, {
                    72: [1, 137],
                    77: [1, 136]
                }, {
                    72: [2, 100],
                    77: [2, 100]
                }, {
                    14: [2, 16],
                    15: [2, 16],
                    19: [2, 16],
                    29: [2, 16],
                    34: [2, 16],
                    44: [2, 16],
                    47: [2, 16],
                    48: [2, 16],
                    51: [2, 16],
                    55: [2, 16],
                    60: [2, 16]
                }, {
                    33: [1, 138]
                }, {
                    33: [2, 75]
                }, {
                    33: [2, 32]
                }, {
                    72: [2, 101],
                    77: [2, 101]
                }, {
                    14: [2, 17],
                    15: [2, 17],
                    19: [2, 17],
                    29: [2, 17],
                    34: [2, 17],
                    39: [2, 17],
                    44: [2, 17],
                    47: [2, 17],
                    48: [2, 17],
                    51: [2, 17],
                    55: [2, 17],
                    60: [2, 17]
                }],
                defaultActions: {
                    4: [2, 1],
                    54: [2, 55],
                    56: [2, 20],
                    60: [2, 57],
                    73: [2, 81],
                    82: [2, 85],
                    86: [2, 18],
                    90: [2, 89],
                    101: [2, 53],
                    104: [2, 93],
                    110: [2, 19],
                    111: [2, 77],
                    116: [2, 97],
                    119: [2, 63],
                    122: [2, 69],
                    135: [2, 75],
                    136: [2, 32]
                },
                parseError: function(t) {
                    throw new Error(t)
                },
                parse: function(t) {
                    function e() {
                        var t;
                        return "number" != typeof (t = n.lexer.lex() || 1) && (t = n.symbols_[t] || t),
                        t
                    }
                    var n = this
                      , i = [0]
                      , r = [null]
                      , o = []
                      , s = this.table
                      , a = ""
                      , l = 0
                      , u = 0
                      , c = 0;
                    this.lexer.setInput(t),
                    this.lexer.yy = this.yy,
                    this.yy.lexer = this.lexer,
                    this.yy.parser = this,
                    "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                    var h = this.lexer.yylloc;
                    o.push(h);
                    var d = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var p, f, m, g, v, y, b, w, x, _ = {}; ; ) {
                        if (m = i[i.length - 1],
                        this.defaultActions[m] ? g = this.defaultActions[m] : (null == p && (p = e()),
                        g = s[m] && s[m][p]),
                        void 0 === g || !g.length || !g[0]) {
                            var C = "";
                            if (!c) {
                                for (y in x = [],
                                s[m])
                                    this.terminals_[y] && y > 2 && x.push("'" + this.terminals_[y] + "'");
                                C = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + x.join(", ") + ", got '" + (this.terminals_[p] || p) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == p ? "end of input" : "'" + (this.terminals_[p] || p) + "'"),
                                this.parseError(C, {
                                    text: this.lexer.match,
                                    token: this.terminals_[p] || p,
                                    line: this.lexer.yylineno,
                                    loc: h,
                                    expected: x
                                })
                            }
                        }
                        if (g[0]instanceof Array && g.length > 1)
                            throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + p);
                        switch (g[0]) {
                        case 1:
                            i.push(p),
                            r.push(this.lexer.yytext),
                            o.push(this.lexer.yylloc),
                            i.push(g[1]),
                            p = null,
                            f ? (p = f,
                            f = null) : (u = this.lexer.yyleng,
                            a = this.lexer.yytext,
                            l = this.lexer.yylineno,
                            h = this.lexer.yylloc,
                            c > 0 && c--);
                            break;
                        case 2:
                            if (b = this.productions_[g[1]][1],
                            _.$ = r[r.length - b],
                            _._$ = {
                                first_line: o[o.length - (b || 1)].first_line,
                                last_line: o[o.length - 1].last_line,
                                first_column: o[o.length - (b || 1)].first_column,
                                last_column: o[o.length - 1].last_column
                            },
                            d && (_._$.range = [o[o.length - (b || 1)].range[0], o[o.length - 1].range[1]]),
                            void 0 !== (v = this.performAction.call(_, a, u, l, this.yy, g[1], r, o)))
                                return v;
                            b && (i = i.slice(0, -1 * b * 2),
                            r = r.slice(0, -1 * b),
                            o = o.slice(0, -1 * b)),
                            i.push(this.productions_[g[1]][0]),
                            r.push(_.$),
                            o.push(_._$),
                            w = s[i[i.length - 2]][i[i.length - 1]],
                            i.push(w);
                            break;
                        case 3:
                            return !0
                        }
                    }
                    return !0
                }
            }
              , n = function() {
                var t = {
                    EOF: 1,
                    parseError: function(t, e) {
                        if (!this.yy.parser)
                            throw new Error(t);
                        this.yy.parser.parseError(t, e)
                    },
                    setInput: function(t) {
                        return this._input = t,
                        this._more = this._less = this.done = !1,
                        this.yylineno = this.yyleng = 0,
                        this.yytext = this.matched = this.match = "",
                        this.conditionStack = ["INITIAL"],
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        },
                        this.options.ranges && (this.yylloc.range = [0, 0]),
                        this.offset = 0,
                        this
                    },
                    input: function() {
                        var t = this._input[0];
                        return this.yytext += t,
                        this.yyleng++,
                        this.offset++,
                        this.match += t,
                        this.matched += t,
                        t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++,
                        this.yylloc.last_line++) : this.yylloc.last_column++,
                        this.options.ranges && this.yylloc.range[1]++,
                        this._input = this._input.slice(1),
                        t
                    },
                    unput: function(t) {
                        var e = t.length
                          , n = t.split(/(?:\r\n?|\n)/g);
                        this._input = t + this._input,
                        this.yytext = this.yytext.substr(0, this.yytext.length - e - 1),
                        this.offset -= e;
                        var i = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1),
                        this.matched = this.matched.substr(0, this.matched.length - 1),
                        n.length - 1 && (this.yylineno -= n.length - 1);
                        var r = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - e
                        },
                        this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - e]),
                        this
                    },
                    more: function() {
                        return this._more = !0,
                        this
                    },
                    less: function(t) {
                        this.unput(this.match.slice(t))
                    },
                    pastInput: function() {
                        var t = this.matched.substr(0, this.matched.length - this.match.length);
                        return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var t = this.match;
                        return t.length < 20 && (t += this._input.substr(0, 20 - t.length)),
                        (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var t = this.pastInput()
                          , e = new Array(t.length + 1).join("-");
                        return t + this.upcomingInput() + "\n" + e + "^"
                    },
                    next: function() {
                        if (this.done)
                            return this.EOF;
                        var t, e, n, i, r;
                        this._input || (this.done = !0),
                        this._more || (this.yytext = "",
                        this.match = "");
                        for (var o = this._currentRules(), s = 0; s < o.length && (!(n = this._input.match(this.rules[o[s]])) || e && !(n[0].length > e[0].length) || (e = n,
                        i = s,
                        this.options.flex)); s++)
                            ;
                        return e ? ((r = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += r.length),
                        this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                        },
                        this.yytext += e[0],
                        this.match += e[0],
                        this.matches = e,
                        this.yyleng = this.yytext.length,
                        this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]),
                        this._more = !1,
                        this._input = this._input.slice(e[0].length),
                        this.matched += e[0],
                        t = this.performAction.call(this, this.yy, this, o[i], this.conditionStack[this.conditionStack.length - 1]),
                        this.done && this._input && (this.done = !1),
                        t || void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    lex: function() {
                        var t = this.next();
                        return void 0 !== t ? t : this.lex()
                    },
                    begin: function(t) {
                        this.conditionStack.push(t)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(t) {
                        this.begin(t)
                    },
                    options: {},
                    performAction: function(t, e, n) {
                        function i(t, n) {
                            return e.yytext = e.yytext.substring(t, e.yyleng - n + t)
                        }
                        switch (n) {
                        case 0:
                            if ("\\\\" === e.yytext.slice(-2) ? (i(0, 1),
                            this.begin("mu")) : "\\" === e.yytext.slice(-1) ? (i(0, 1),
                            this.begin("emu")) : this.begin("mu"),
                            e.yytext)
                                return 15;
                            break;
                        case 1:
                            return 15;
                        case 2:
                            return this.popState(),
                            15;
                        case 3:
                            return this.begin("raw"),
                            15;
                        case 4:
                            return this.popState(),
                            "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (i(5, 9),
                            "END_RAW_BLOCK");
                        case 5:
                            return 15;
                        case 6:
                            return this.popState(),
                            14;
                        case 7:
                            return 65;
                        case 8:
                            return 68;
                        case 9:
                            return 19;
                        case 10:
                            return this.popState(),
                            this.begin("raw"),
                            23;
                        case 11:
                            return 55;
                        case 12:
                            return 60;
                        case 13:
                            return 29;
                        case 14:
                            return 47;
                        case 15:
                        case 16:
                            return this.popState(),
                            44;
                        case 17:
                            return 34;
                        case 18:
                            return 39;
                        case 19:
                            return 51;
                        case 20:
                            return 48;
                        case 21:
                            this.unput(e.yytext),
                            this.popState(),
                            this.begin("com");
                            break;
                        case 22:
                            return this.popState(),
                            14;
                        case 23:
                            return 48;
                        case 24:
                            return 73;
                        case 25:
                        case 26:
                            return 72;
                        case 27:
                            return 87;
                        case 28:
                            break;
                        case 29:
                            return this.popState(),
                            54;
                        case 30:
                            return this.popState(),
                            33;
                        case 31:
                            return e.yytext = i(1, 2).replace(/\\"/g, '"'),
                            80;
                        case 32:
                            return e.yytext = i(1, 2).replace(/\\'/g, "'"),
                            80;
                        case 33:
                            return 85;
                        case 34:
                        case 35:
                            return 82;
                        case 36:
                            return 83;
                        case 37:
                            return 84;
                        case 38:
                            return 81;
                        case 39:
                            return 75;
                        case 40:
                            return 77;
                        case 41:
                            return 72;
                        case 42:
                            return e.yytext = e.yytext.replace(/\\([\\\]])/g, "$1"),
                            72;
                        case 43:
                            return "INVALID";
                        case 44:
                            return 5
                        }
                    },
                    rules: [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/],
                    conditions: {
                        mu: {
                            rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                            inclusive: !1
                        },
                        emu: {
                            rules: [2],
                            inclusive: !1
                        },
                        com: {
                            rules: [6],
                            inclusive: !1
                        },
                        raw: {
                            rules: [3, 4, 5],
                            inclusive: !1
                        },
                        INITIAL: {
                            rules: [0, 1, 44],
                            inclusive: !0
                        }
                    }
                };
                return t
            }();
            return e.lexer = n,
            t.prototype = e,
            e.Parser = t,
            new t
        }();
        e["default"] = n,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        function i() {
            var t = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            this.options = t
        }
        function r(t, e, n) {
            e === undefined && (e = t.length);
            var i = t[e - 1]
              , r = t[e - 2];
            return i ? "ContentStatement" === i.type ? (r || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original) : void 0 : n
        }
        function o(t, e, n) {
            e === undefined && (e = -1);
            var i = t[e + 1]
              , r = t[e + 2];
            return i ? "ContentStatement" === i.type ? (r || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original) : void 0 : n
        }
        function s(t, e, n) {
            var i = t[null == e ? 0 : e + 1];
            if (i && "ContentStatement" === i.type && (n || !i.rightStripped)) {
                var r = i.value;
                i.value = i.value.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, ""),
                i.rightStripped = i.value !== r
            }
        }
        function a(t, e, n) {
            var i = t[null == e ? t.length - 1 : e - 1];
            if (i && "ContentStatement" === i.type && (n || !i.leftStripped)) {
                var r = i.value;
                return i.value = i.value.replace(n ? /\s+$/ : /[ \t]+$/, ""),
                i.leftStripped = i.value !== r,
                i.leftStripped
            }
        }
        var l = n(1)["default"];
        e.__esModule = !0;
        var u = l(n(49));
        i.prototype = new u["default"],
        i.prototype.Program = function(t) {
            var e = !this.options.ignoreStandalone
              , n = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var i = t.body, l = 0, u = i.length; l < u; l++) {
                var c = i[l]
                  , h = this.accept(c);
                if (h) {
                    var d = r(i, l, n)
                      , p = o(i, l, n)
                      , f = h.openStandalone && d
                      , m = h.closeStandalone && p
                      , g = h.inlineStandalone && d && p;
                    h.close && s(i, l, !0),
                    h.open && a(i, l, !0),
                    e && g && (s(i, l),
                    a(i, l) && "PartialStatement" === c.type && (c.indent = /([ \t]+$)/.exec(i[l - 1].original)[1])),
                    e && f && (s((c.program || c.inverse).body),
                    a(i, l)),
                    e && m && (s(i, l),
                    a((c.inverse || c.program).body))
                }
            }
            return t
        }
        ,
        i.prototype.BlockStatement = i.prototype.DecoratorBlock = i.prototype.PartialBlockStatement = function(t) {
            this.accept(t.program),
            this.accept(t.inverse);
            var e = t.program || t.inverse
              , n = t.program && t.inverse
              , i = n
              , l = n;
            if (n && n.chained)
                for (i = n.body[0].program; l.chained; )
                    l = l.body[l.body.length - 1].program;
            var u = {
                open: t.openStrip.open,
                close: t.closeStrip.close,
                openStandalone: o(e.body),
                closeStandalone: r((i || e).body)
            };
            if (t.openStrip.close && s(e.body, null, !0),
            n) {
                var c = t.inverseStrip;
                c.open && a(e.body, null, !0),
                c.close && s(i.body, null, !0),
                t.closeStrip.open && a(l.body, null, !0),
                !this.options.ignoreStandalone && r(e.body) && o(i.body) && (a(e.body),
                s(i.body))
            } else
                t.closeStrip.open && a(e.body, null, !0);
            return u
        }
        ,
        i.prototype.Decorator = i.prototype.MustacheStatement = function(t) {
            return t.strip
        }
        ,
        i.prototype.PartialStatement = i.prototype.CommentStatement = function(t) {
            var e = t.strip || {};
            return {
                inlineStandalone: !0,
                open: e.open,
                close: e.close
            }
        }
        ,
        e["default"] = i,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        function i() {
            this.parents = []
        }
        function r(t) {
            this.acceptRequired(t, "path"),
            this.acceptArray(t.params),
            this.acceptKey(t, "hash")
        }
        function o(t) {
            r.call(this, t),
            this.acceptKey(t, "program"),
            this.acceptKey(t, "inverse")
        }
        function s(t) {
            this.acceptRequired(t, "name"),
            this.acceptArray(t.params),
            this.acceptKey(t, "hash")
        }
        var a = n(1)["default"];
        e.__esModule = !0;
        var l = a(n(6));
        i.prototype = {
            constructor: i,
            mutating: !1,
            acceptKey: function(t, e) {
                var n = this.accept(t[e]);
                if (this.mutating) {
                    if (n && !i.prototype[n.type])
                        throw new l["default"]('Unexpected node type "' + n.type + '" found when accepting ' + e + " on " + t.type);
                    t[e] = n
                }
            },
            acceptRequired: function(t, e) {
                if (this.acceptKey(t, e),
                !t[e])
                    throw new l["default"](t.type + " requires " + e)
            },
            acceptArray: function(t) {
                for (var e = 0, n = t.length; e < n; e++)
                    this.acceptKey(t, e),
                    t[e] || (t.splice(e, 1),
                    e--,
                    n--)
            },
            accept: function(t) {
                if (t) {
                    if (!this[t.type])
                        throw new l["default"]("Unknown type: " + t.type,t);
                    this.current && this.parents.unshift(this.current),
                    this.current = t;
                    var e = this[t.type](t);
                    return this.current = this.parents.shift(),
                    !this.mutating || e ? e : !1 !== e ? t : void 0
                }
            },
            Program: function(t) {
                this.acceptArray(t.body)
            },
            MustacheStatement: r,
            Decorator: r,
            BlockStatement: o,
            DecoratorBlock: o,
            PartialStatement: s,
            PartialBlockStatement: function(t) {
                s.call(this, t),
                this.acceptKey(t, "program")
            },
            ContentStatement: function() {},
            CommentStatement: function() {},
            SubExpression: r,
            PathExpression: function() {},
            StringLiteral: function() {},
            NumberLiteral: function() {},
            BooleanLiteral: function() {},
            UndefinedLiteral: function() {},
            NullLiteral: function() {},
            Hash: function(t) {
                this.acceptArray(t.pairs)
            },
            HashPair: function(t) {
                this.acceptRequired(t, "value")
            }
        },
        e["default"] = i,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (e = e.path ? e.path.original : e,
            t.path.original !== e) {
                var n = {
                    loc: t.path.loc
                };
                throw new m["default"](t.path.original + " doesn't match " + e,n)
            }
        }
        function r(t, e) {
            this.source = t,
            this.start = {
                line: e.first_line,
                column: e.first_column
            },
            this.end = {
                line: e.last_line,
                column: e.last_column
            }
        }
        function o(t) {
            return /^\[.*\]$/.test(t) ? t.substring(1, t.length - 1) : t
        }
        function s(t, e) {
            return {
                open: "~" === t.charAt(2),
                close: "~" === e.charAt(e.length - 3)
            }
        }
        function a(t) {
            return t.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "")
        }
        function l(t, e, n) {
            n = this.locInfo(n);
            for (var i = t ? "@" : "", r = [], o = 0, s = 0, a = e.length; s < a; s++) {
                var l = e[s].part
                  , u = e[s].original !== l;
                if (i += (e[s].separator || "") + l,
                u || ".." !== l && "." !== l && "this" !== l)
                    r.push(l);
                else {
                    if (r.length > 0)
                        throw new m["default"]("Invalid path: " + i,{
                            loc: n
                        });
                    ".." === l && o++
                }
            }
            return {
                type: "PathExpression",
                data: t,
                depth: o,
                parts: r,
                original: i,
                loc: n
            }
        }
        function u(t, e, n, i, r, o) {
            var s = i.charAt(3) || i.charAt(2)
              , a = "{" !== s && "&" !== s;
            return {
                type: /\*/.test(i) ? "Decorator" : "MustacheStatement",
                path: t,
                params: e,
                hash: n,
                escaped: a,
                strip: r,
                loc: this.locInfo(o)
            }
        }
        function c(t, e, n, r) {
            i(t, n);
            var o = {
                type: "Program",
                body: e,
                strip: {},
                loc: r = this.locInfo(r)
            };
            return {
                type: "BlockStatement",
                path: t.path,
                params: t.params,
                hash: t.hash,
                program: o,
                openStrip: {},
                inverseStrip: {},
                closeStrip: {},
                loc: r
            }
        }
        function h(t, e, n, r, o, s) {
            r && r.path && i(t, r);
            var a = /\*/.test(t.open);
            e.blockParams = t.blockParams;
            var l = undefined
              , u = undefined;
            if (n) {
                if (a)
                    throw new m["default"]("Unexpected inverse block on decorator",n);
                n.chain && (n.program.body[0].closeStrip = r.strip),
                u = n.strip,
                l = n.program
            }
            return o && (o = l,
            l = e,
            e = o),
            {
                type: a ? "DecoratorBlock" : "BlockStatement",
                path: t.path,
                params: t.params,
                hash: t.hash,
                program: e,
                inverse: l,
                openStrip: t.strip,
                inverseStrip: u,
                closeStrip: r && r.strip,
                loc: this.locInfo(s)
            }
        }
        function d(t, e) {
            if (!e && t.length) {
                var n = t[0].loc
                  , i = t[t.length - 1].loc;
                n && i && (e = {
                    source: n.source,
                    start: {
                        line: n.start.line,
                        column: n.start.column
                    },
                    end: {
                        line: i.end.line,
                        column: i.end.column
                    }
                })
            }
            return {
                type: "Program",
                body: t,
                strip: {},
                loc: e
            }
        }
        function p(t, e, n, r) {
            return i(t, n),
            {
                type: "PartialBlockStatement",
                name: t.path,
                params: t.params,
                hash: t.hash,
                program: e,
                openStrip: t.strip,
                closeStrip: n && n.strip,
                loc: this.locInfo(r)
            }
        }
        var f = n(1)["default"];
        e.__esModule = !0,
        e.SourceLocation = r,
        e.id = o,
        e.stripFlags = s,
        e.stripComment = a,
        e.preparePath = l,
        e.prepareMustache = u,
        e.prepareRawBlock = c,
        e.prepareBlock = h,
        e.prepareProgram = d,
        e.preparePartialBlock = p;
        var m = f(n(6))
    }
    , function(t, e, n) {
        "use strict";
        function i() {}
        function r(t, e, n) {
            if (null == t || "string" != typeof t && "Program" !== t.type)
                throw new c["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
            "data"in (e = e || {}) || (e.data = !0),
            e.compat && (e.useDepths = !0);
            var i = n.parse(t, e)
              , r = (new n.Compiler).compile(i, e);
            return (new n.JavaScriptCompiler).compile(r, e)
        }
        function o(t, e, n) {
            function i() {
                var i = n.parse(t, e)
                  , r = (new n.Compiler).compile(i, e)
                  , o = (new n.JavaScriptCompiler).compile(r, e, undefined, !0);
                return n.template(o)
            }
            function r(t, e) {
                return o || (o = i()),
                o.call(this, t, e)
            }
            if (e === undefined && (e = {}),
            null == t || "string" != typeof t && "Program" !== t.type)
                throw new c["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
            "data"in (e = h.extend({}, e)) || (e.data = !0),
            e.compat && (e.useDepths = !0);
            var o = undefined;
            return r._setup = function(t) {
                return o || (o = i()),
                o._setup(t)
            }
            ,
            r._child = function(t, e, n, r) {
                return o || (o = i()),
                o._child(t, e, n, r)
            }
            ,
            r
        }
        function s(t, e) {
            if (t === e)
                return !0;
            if (h.isArray(t) && h.isArray(e) && t.length === e.length) {
                for (var n = 0; n < t.length; n++)
                    if (!s(t[n], e[n]))
                        return !1;
                return !0
            }
        }
        function a(t) {
            if (!t.path.parts) {
                var e = t.path;
                t.path = {
                    type: "PathExpression",
                    data: !1,
                    depth: 0,
                    parts: [e.original + ""],
                    original: e.original + "",
                    loc: e.loc
                }
            }
        }
        var l = n(34)["default"]
          , u = n(1)["default"];
        e.__esModule = !0,
        e.Compiler = i,
        e.precompile = r,
        e.compile = o;
        var c = u(n(6))
          , h = n(5)
          , d = u(n(45))
          , p = [].slice;
        i.prototype = {
            compiler: i,
            equals: function(t) {
                var e = this.opcodes.length;
                if (t.opcodes.length !== e)
                    return !1;
                for (var n = 0; n < e; n++) {
                    var i = this.opcodes[n]
                      , r = t.opcodes[n];
                    if (i.opcode !== r.opcode || !s(i.args, r.args))
                        return !1
                }
                e = this.children.length;
                for (n = 0; n < e; n++)
                    if (!this.children[n].equals(t.children[n]))
                        return !1;
                return !0
            },
            guid: 0,
            compile: function(t, e) {
                return this.sourceNode = [],
                this.opcodes = [],
                this.children = [],
                this.options = e,
                this.stringParams = e.stringParams,
                this.trackIds = e.trackIds,
                e.blockParams = e.blockParams || [],
                e.knownHelpers = h.extend(l(null), {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0,
                    lookup: !0
                }, e.knownHelpers),
                this.accept(t)
            },
            compileProgram: function(t) {
                var e = (new this.compiler).compile(t, this.options)
                  , n = this.guid++;
                return this.usePartial = this.usePartial || e.usePartial,
                this.children[n] = e,
                this.useDepths = this.useDepths || e.useDepths,
                n
            },
            accept: function(t) {
                if (!this[t.type])
                    throw new c["default"]("Unknown type: " + t.type,t);
                this.sourceNode.unshift(t);
                var e = this[t.type](t);
                return this.sourceNode.shift(),
                e
            },
            Program: function(t) {
                this.options.blockParams.unshift(t.blockParams);
                for (var e = t.body, n = e.length, i = 0; i < n; i++)
                    this.accept(e[i]);
                return this.options.blockParams.shift(),
                this.isSimple = 1 === n,
                this.blockParams = t.blockParams ? t.blockParams.length : 0,
                this
            },
            BlockStatement: function(t) {
                a(t);
                var e = t.program
                  , n = t.inverse;
                e = e && this.compileProgram(e),
                n = n && this.compileProgram(n);
                var i = this.classifySexpr(t);
                "helper" === i ? this.helperSexpr(t, e, n) : "simple" === i ? (this.simpleSexpr(t),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", n),
                this.opcode("emptyHash"),
                this.opcode("blockValue", t.path.original)) : (this.ambiguousSexpr(t, e, n),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", n),
                this.opcode("emptyHash"),
                this.opcode("ambiguousBlockValue")),
                this.opcode("append")
            },
            DecoratorBlock: function(t) {
                var e = t.program && this.compileProgram(t.program)
                  , n = this.setupFullMustacheParams(t, e, undefined)
                  , i = t.path;
                this.useDecorators = !0,
                this.opcode("registerDecorator", n.length, i.original)
            },
            PartialStatement: function(t) {
                this.usePartial = !0;
                var e = t.program;
                e && (e = this.compileProgram(t.program));
                var n = t.params;
                if (n.length > 1)
                    throw new c["default"]("Unsupported number of partial arguments: " + n.length,t);
                n.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : n.push({
                    type: "PathExpression",
                    parts: [],
                    depth: 0
                }));
                var i = t.name.original
                  , r = "SubExpression" === t.name.type;
                r && this.accept(t.name),
                this.setupFullMustacheParams(t, e, undefined, !0);
                var o = t.indent || "";
                this.options.preventIndent && o && (this.opcode("appendContent", o),
                o = ""),
                this.opcode("invokePartial", r, i, o),
                this.opcode("append")
            },
            PartialBlockStatement: function(t) {
                this.PartialStatement(t)
            },
            MustacheStatement: function(t) {
                this.SubExpression(t),
                t.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            Decorator: function(t) {
                this.DecoratorBlock(t)
            },
            ContentStatement: function(t) {
                t.value && this.opcode("appendContent", t.value)
            },
            CommentStatement: function() {},
            SubExpression: function(t) {
                a(t);
                var e = this.classifySexpr(t);
                "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
            },
            ambiguousSexpr: function(t, e, n) {
                var i = t.path
                  , r = i.parts[0]
                  , o = null != e || null != n;
                this.opcode("getContext", i.depth),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", n),
                i.strict = !0,
                this.accept(i),
                this.opcode("invokeAmbiguous", r, o)
            },
            simpleSexpr: function(t) {
                var e = t.path;
                e.strict = !0,
                this.accept(e),
                this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(t, e, n) {
                var i = this.setupFullMustacheParams(t, e, n)
                  , r = t.path
                  , o = r.parts[0];
                if (this.options.knownHelpers[o])
                    this.opcode("invokeKnownHelper", i.length, o);
                else {
                    if (this.options.knownHelpersOnly)
                        throw new c["default"]("You specified knownHelpersOnly, but used the unknown helper " + o,t);
                    r.strict = !0,
                    r.falsy = !0,
                    this.accept(r),
                    this.opcode("invokeHelper", i.length, r.original, d["default"].helpers.simpleId(r))
                }
            },
            PathExpression: function(t) {
                this.addDepth(t.depth),
                this.opcode("getContext", t.depth);
                var e = t.parts[0]
                  , n = d["default"].helpers.scopedId(t)
                  , i = !t.depth && !n && this.blockParamIndex(e);
                i ? this.opcode("lookupBlockParam", i, t.parts) : e ? t.data ? (this.options.data = !0,
                this.opcode("lookupData", t.depth, t.parts, t.strict)) : this.opcode("lookupOnContext", t.parts, t.falsy, t.strict, n) : this.opcode("pushContext")
            },
            StringLiteral: function(t) {
                this.opcode("pushString", t.value)
            },
            NumberLiteral: function(t) {
                this.opcode("pushLiteral", t.value)
            },
            BooleanLiteral: function(t) {
                this.opcode("pushLiteral", t.value)
            },
            UndefinedLiteral: function() {
                this.opcode("pushLiteral", "undefined")
            },
            NullLiteral: function() {
                this.opcode("pushLiteral", "null")
            },
            Hash: function(t) {
                var e = t.pairs
                  , n = 0
                  , i = e.length;
                for (this.opcode("pushHash"); n < i; n++)
                    this.pushParam(e[n].value);
                for (; n--; )
                    this.opcode("assignToHash", e[n].key);
                this.opcode("popHash")
            },
            opcode: function(t) {
                this.opcodes.push({
                    opcode: t,
                    args: p.call(arguments, 1),
                    loc: this.sourceNode[0].loc
                })
            },
            addDepth: function(t) {
                t && (this.useDepths = !0)
            },
            classifySexpr: function(t) {
                var e = d["default"].helpers.simpleId(t.path)
                  , n = e && !!this.blockParamIndex(t.path.parts[0])
                  , i = !n && d["default"].helpers.helperExpression(t)
                  , r = !n && (i || e);
                if (r && !i) {
                    var o = t.path.parts[0]
                      , s = this.options;
                    s.knownHelpers[o] ? i = !0 : s.knownHelpersOnly && (r = !1)
                }
                return i ? "helper" : r ? "ambiguous" : "simple"
            },
            pushParams: function(t) {
                for (var e = 0, n = t.length; e < n; e++)
                    this.pushParam(t[e])
            },
            pushParam: function(t) {
                var e = null != t.value ? t.value : t.original || "";
                if (this.stringParams)
                    e.replace && (e = e.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")),
                    t.depth && this.addDepth(t.depth),
                    this.opcode("getContext", t.depth || 0),
                    this.opcode("pushStringParam", e, t.type),
                    "SubExpression" === t.type && this.accept(t);
                else {
                    if (this.trackIds) {
                        var n = undefined;
                        if (!t.parts || d["default"].helpers.scopedId(t) || t.depth || (n = this.blockParamIndex(t.parts[0])),
                        n) {
                            var i = t.parts.slice(1).join(".");
                            this.opcode("pushId", "BlockParam", n, i)
                        } else
                            (e = t.original || e).replace && (e = e.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")),
                            this.opcode("pushId", t.type, e)
                    }
                    this.accept(t)
                }
            },
            setupFullMustacheParams: function(t, e, n, i) {
                var r = t.params;
                return this.pushParams(r),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", n),
                t.hash ? this.accept(t.hash) : this.opcode("emptyHash", i),
                r
            },
            blockParamIndex: function(t) {
                for (var e = 0, n = this.options.blockParams.length; e < n; e++) {
                    var i = this.options.blockParams[e]
                      , r = i && h.indexOf(i, t);
                    if (i && r >= 0)
                        return [e, r]
                }
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        function i(t) {
            this.value = t
        }
        function r() {}
        function o(t, e, n, i) {
            var r = e.popStack()
              , o = 0
              , s = n.length;
            for (t && s--; o < s; o++)
                r = e.nameLookup(r, n[o], i);
            return t ? [e.aliasable("container.strict"), "(", r, ", ", e.quotedString(n[o]), ", ", JSON.stringify(e.source.currentLocation), " )"] : r
        }
        var s = n(13)["default"]
          , a = n(1)["default"];
        e.__esModule = !0;
        var l = n(4)
          , u = a(n(6))
          , c = n(5)
          , h = a(n(53));
        r.prototype = {
            nameLookup: function(t, e) {
                return this.internalNameLookup(t, e)
            },
            depthedLookup: function(t) {
                return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(t), ")"]
            },
            compilerInfo: function() {
                var t = l.COMPILER_REVISION;
                return [t, l.REVISION_CHANGES[t]]
            },
            appendToBuffer: function(t, e, n) {
                return c.isArray(t) || (t = [t]),
                t = this.source.wrap(t, e),
                this.environment.isSimple ? ["return ", t, ";"] : n ? ["buffer += ", t, ";"] : (t.appendToBuffer = !0,
                t)
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            internalNameLookup: function(t, e) {
                return this.lookupPropertyFunctionIsUsed = !0,
                ["lookupProperty(", t, ",", JSON.stringify(e), ")"]
            },
            lookupPropertyFunctionIsUsed: !1,
            compile: function(t, e, n, i) {
                this.environment = t,
                this.options = e,
                this.stringParams = this.options.stringParams,
                this.trackIds = this.options.trackIds,
                this.precompile = !i,
                this.name = this.environment.name,
                this.isChild = !!n,
                this.context = n || {
                    decorators: [],
                    programs: [],
                    environments: []
                },
                this.preamble(),
                this.stackSlot = 0,
                this.stackVars = [],
                this.aliases = {},
                this.registers = {
                    list: []
                },
                this.hashes = [],
                this.compileStack = [],
                this.inlineStack = [],
                this.blockParams = [],
                this.compileChildren(t, e),
                this.useDepths = this.useDepths || t.useDepths || t.useDecorators || this.options.compat,
                this.useBlockParams = this.useBlockParams || t.useBlockParams;
                var r = t.opcodes
                  , o = undefined
                  , s = undefined
                  , a = undefined
                  , l = undefined;
                for (a = 0,
                l = r.length; a < l; a++)
                    o = r[a],
                    this.source.currentLocation = o.loc,
                    s = s || o.loc,
                    this[o.opcode].apply(this, o.args);
                if (this.source.currentLocation = s,
                this.pushSource(""),
                this.stackSlot || this.inlineStack.length || this.compileStack.length)
                    throw new u["default"]("Compile completed with content left on stack");
                this.decorators.isEmpty() ? this.decorators = undefined : (this.useDecorators = !0,
                this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), ";\n"]),
                this.decorators.push("return fn;"),
                i ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),
                this.decorators.push("}\n"),
                this.decorators = this.decorators.merge()));
                var c = this.createFunctionContext(i);
                if (this.isChild)
                    return c;
                var h = {
                    compiler: this.compilerInfo(),
                    main: c
                };
                this.decorators && (h.main_d = this.decorators,
                h.useDecorators = !0);
                var d = this.context
                  , p = d.programs
                  , f = d.decorators;
                for (a = 0,
                l = p.length; a < l; a++)
                    p[a] && (h[a] = p[a],
                    f[a] && (h[a + "_d"] = f[a],
                    h.useDecorators = !0));
                return this.environment.usePartial && (h.usePartial = !0),
                this.options.data && (h.useData = !0),
                this.useDepths && (h.useDepths = !0),
                this.useBlockParams && (h.useBlockParams = !0),
                this.options.compat && (h.compat = !0),
                i ? h.compilerOptions = this.options : (h.compiler = JSON.stringify(h.compiler),
                this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                },
                h = this.objectLiteral(h),
                e.srcName ? (h = h.toStringWithSourceMap({
                    file: e.destName
                })).map = h.map && h.map.toString() : h = h.toString()),
                h
            },
            preamble: function() {
                this.lastContext = 0,
                this.source = new h["default"](this.options.srcName),
                this.decorators = new h["default"](this.options.srcName)
            },
            createFunctionContext: function(t) {
                var e = this
                  , n = ""
                  , i = this.stackVars.concat(this.registers.list);
                i.length > 0 && (n += ", " + i.join(", "));
                var r = 0;
                s(this.aliases).forEach(function(t) {
                    var i = e.aliases[t];
                    i.children && i.referenceCount > 1 && (n += ", alias" + ++r + "=" + t,
                    i.children[0] = "alias" + r)
                }),
                this.lookupPropertyFunctionIsUsed && (n += ", " + this.lookupPropertyFunctionVarDeclaration());
                var o = ["container", "depth0", "helpers", "partials", "data"];
                (this.useBlockParams || this.useDepths) && o.push("blockParams"),
                this.useDepths && o.push("depths");
                var a = this.mergeSource(n);
                return t ? (o.push(a),
                Function.apply(this, o)) : this.source.wrap(["function(", o.join(","), ") {\n  ", a, "}"])
            },
            mergeSource: function(t) {
                var e = this.environment.isSimple
                  , n = !this.forceBuffer
                  , i = undefined
                  , r = undefined
                  , o = undefined
                  , s = undefined;
                return this.source.each(function(t) {
                    t.appendToBuffer ? (o ? t.prepend("  + ") : o = t,
                    s = t) : (o && (r ? o.prepend("buffer += ") : i = !0,
                    s.add(";"),
                    o = s = undefined),
                    r = !0,
                    e || (n = !1))
                }),
                n ? o ? (o.prepend("return "),
                s.add(";")) : r || this.source.push('return "";') : (t += ", buffer = " + (i ? "" : this.initializeBuffer()),
                o ? (o.prepend("return buffer + "),
                s.add(";")) : this.source.push("return buffer;")),
                t && this.source.prepend("var " + t.substring(2) + (i ? "" : ";\n")),
                this.source.merge()
            },
            lookupPropertyFunctionVarDeclaration: function() {
                return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()
            },
            blockValue: function(t) {
                var e = this.aliasable("container.hooks.blockHelperMissing")
                  , n = [this.contextName(0)];
                this.setupHelperArgs(t, 0, n);
                var i = this.popStack();
                n.splice(1, 0, i),
                this.push(this.source.functionCall(e, "call", n))
            },
            ambiguousBlockValue: function() {
                var t = this.aliasable("container.hooks.blockHelperMissing")
                  , e = [this.contextName(0)];
                this.setupHelperArgs("", 0, e, !0),
                this.flushInline();
                var n = this.topStack();
                e.splice(1, 0, n),
                this.pushSource(["if (!", this.lastHelper, ") { ", n, " = ", this.source.functionCall(t, "call", e), "}"])
            },
            appendContent: function(t) {
                this.pendingContent ? t = this.pendingContent + t : this.pendingLocation = this.source.currentLocation,
                this.pendingContent = t
            },
            append: function() {
                if (this.isInline())
                    this.replaceStack(function(t) {
                        return [" != null ? ", t, ' : ""']
                    }),
                    this.pushSource(this.appendToBuffer(this.popStack()));
                else {
                    var t = this.popStack();
                    this.pushSource(["if (", t, " != null) { ", this.appendToBuffer(t, undefined, !0), " }"]),
                    this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", undefined, !0), " }"])
                }
            },
            appendEscaped: function() {
                this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]))
            },
            getContext: function(t) {
                this.lastContext = t
            },
            pushContext: function() {
                this.pushStackLiteral(this.contextName(this.lastContext))
            },
            lookupOnContext: function(t, e, n, i) {
                var r = 0;
                i || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(t[r++])),
                this.resolvePath("context", t, r, e, n)
            },
            lookupBlockParam: function(t, e) {
                this.useBlockParams = !0,
                this.push(["blockParams[", t[0], "][", t[1], "]"]),
                this.resolvePath("context", e, 1)
            },
            lookupData: function(t, e, n) {
                t ? this.pushStackLiteral("container.data(data, " + t + ")") : this.pushStackLiteral("data"),
                this.resolvePath("data", e, 0, !0, n)
            },
            resolvePath: function(t, e, n, i, r) {
                var s = this;
                if (this.options.strict || this.options.assumeObjects)
                    this.push(o(this.options.strict && r, this, e, t));
                else
                    for (var a = e.length; n < a; n++)
                        this.replaceStack(function(r) {
                            var o = s.nameLookup(r, e[n], t);
                            return i ? [" && ", o] : [" != null ? ", o, " : ", r]
                        })
            },
            resolvePossibleLambda: function() {
                this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
            },
            pushStringParam: function(t, e) {
                this.pushContext(),
                this.pushString(e),
                "SubExpression" !== e && ("string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
            },
            emptyHash: function(t) {
                this.trackIds && this.push("{}"),
                this.stringParams && (this.push("{}"),
                this.push("{}")),
                this.pushStackLiteral(t ? "undefined" : "{}")
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash),
                this.hash = {
                    values: {},
                    types: [],
                    contexts: [],
                    ids: []
                }
            },
            popHash: function() {
                var t = this.hash;
                this.hash = this.hashes.pop(),
                this.trackIds && this.push(this.objectLiteral(t.ids)),
                this.stringParams && (this.push(this.objectLiteral(t.contexts)),
                this.push(this.objectLiteral(t.types))),
                this.push(this.objectLiteral(t.values))
            },
            pushString: function(t) {
                this.pushStackLiteral(this.quotedString(t))
            },
            pushLiteral: function(t) {
                this.pushStackLiteral(t)
            },
            pushProgram: function(t) {
                null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
            },
            registerDecorator: function(t, e) {
                var n = this.nameLookup("decorators", e, "decorator")
                  , i = this.setupHelperArgs(e, t);
                this.decorators.push(["fn = ", this.decorators.functionCall(n, "", ["fn", "props", "container", i]), " || fn;"])
            },
            invokeHelper: function(t, e, n) {
                var i = this.popStack()
                  , r = this.setupHelper(t, e)
                  , o = [];
                n && o.push(r.name),
                o.push(i),
                this.options.strict || o.push(this.aliasable("container.hooks.helperMissing"));
                var s = ["(", this.itemsSeparatedBy(o, "||"), ")"]
                  , a = this.source.functionCall(s, "call", r.callParams);
                this.push(a)
            },
            itemsSeparatedBy: function(t, e) {
                var n = [];
                n.push(t[0]);
                for (var i = 1; i < t.length; i++)
                    n.push(e, t[i]);
                return n
            },
            invokeKnownHelper: function(t, e) {
                var n = this.setupHelper(t, e);
                this.push(this.source.functionCall(n.name, "call", n.callParams))
            },
            invokeAmbiguous: function(t, e) {
                this.useRegister("helper");
                var n = this.popStack();
                this.emptyHash();
                var i = this.setupHelper(0, t, e)
                  , r = ["(", "(helper = ", this.lastHelper = this.nameLookup("helpers", t, "helper"), " || ", n, ")"];
                this.options.strict || (r[0] = "(helper = ",
                r.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))),
                this.push(["(", r, i.paramsInit ? ["),(", i.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", i.callParams), " : helper))"])
            },
            invokePartial: function(t, e, n) {
                var i = []
                  , r = this.setupParams(e, 1, i);
                t && (e = this.popStack(),
                delete r.name),
                n && (r.indent = JSON.stringify(n)),
                r.helpers = "helpers",
                r.partials = "partials",
                r.decorators = "container.decorators",
                t ? i.unshift(e) : i.unshift(this.nameLookup("partials", e, "partial")),
                this.options.compat && (r.depths = "depths"),
                r = this.objectLiteral(r),
                i.push(r),
                this.push(this.source.functionCall("container.invokePartial", "", i))
            },
            assignToHash: function(t) {
                var e = this.popStack()
                  , n = undefined
                  , i = undefined
                  , r = undefined;
                this.trackIds && (r = this.popStack()),
                this.stringParams && (i = this.popStack(),
                n = this.popStack());
                var o = this.hash;
                n && (o.contexts[t] = n),
                i && (o.types[t] = i),
                r && (o.ids[t] = r),
                o.values[t] = e
            },
            pushId: function(t, e, n) {
                "BlockParam" === t ? this.pushStackLiteral("blockParams[" + e[0] + "].path[" + e[1] + "]" + (n ? " + " + JSON.stringify("." + n) : "")) : "PathExpression" === t ? this.pushString(e) : "SubExpression" === t ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
            },
            compiler: r,
            compileChildren: function(t, e) {
                for (var n = t.children, i = undefined, r = undefined, o = 0, s = n.length; o < s; o++) {
                    i = n[o],
                    r = new this.compiler;
                    var a = this.matchExistingProgram(i);
                    if (null == a) {
                        this.context.programs.push("");
                        var l = this.context.programs.length;
                        i.index = l,
                        i.name = "program" + l,
                        this.context.programs[l] = r.compile(i, e, this.context, !this.precompile),
                        this.context.decorators[l] = r.decorators,
                        this.context.environments[l] = i,
                        this.useDepths = this.useDepths || r.useDepths,
                        this.useBlockParams = this.useBlockParams || r.useBlockParams,
                        i.useDepths = this.useDepths,
                        i.useBlockParams = this.useBlockParams
                    } else
                        i.index = a.index,
                        i.name = "program" + a.index,
                        this.useDepths = this.useDepths || a.useDepths,
                        this.useBlockParams = this.useBlockParams || a.useBlockParams
                }
            },
            matchExistingProgram: function(t) {
                for (var e = 0, n = this.context.environments.length; e < n; e++) {
                    var i = this.context.environments[e];
                    if (i && i.equals(t))
                        return i
                }
            },
            programExpression: function(t) {
                var e = this.environment.children[t]
                  , n = [e.index, "data", e.blockParams];
                return (this.useBlockParams || this.useDepths) && n.push("blockParams"),
                this.useDepths && n.push("depths"),
                "container.program(" + n.join(", ") + ")"
            },
            useRegister: function(t) {
                this.registers[t] || (this.registers[t] = !0,
                this.registers.list.push(t))
            },
            push: function(t) {
                return t instanceof i || (t = this.source.wrap(t)),
                this.inlineStack.push(t),
                t
            },
            pushStackLiteral: function(t) {
                this.push(new i(t))
            },
            pushSource: function(t) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)),
                this.pendingContent = undefined),
                t && this.source.push(t)
            },
            replaceStack: function(t) {
                var e = ["("]
                  , n = undefined
                  , r = undefined
                  , o = undefined;
                if (!this.isInline())
                    throw new u["default"]("replaceStack on non-inline");
                var s = this.popStack(!0);
                if (s instanceof i)
                    e = ["(", n = [s.value]],
                    o = !0;
                else {
                    r = !0;
                    var a = this.incrStack();
                    e = ["((", this.push(a), " = ", s, ")"],
                    n = this.topStack()
                }
                var l = t.call(this, n);
                o || this.popStack(),
                r && this.stackSlot--,
                this.push(e.concat(l, ")"))
            },
            incrStack: function() {
                return this.stackSlot++,
                this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
                this.topStackName()
            },
            topStackName: function() {
                return "stack" + this.stackSlot
            },
            flushInline: function() {
                var t = this.inlineStack;
                this.inlineStack = [];
                for (var e = 0, n = t.length; e < n; e++) {
                    var r = t[e];
                    if (r instanceof i)
                        this.compileStack.push(r);
                    else {
                        var o = this.incrStack();
                        this.pushSource([o, " = ", r, ";"]),
                        this.compileStack.push(o)
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length
            },
            popStack: function(t) {
                var e = this.isInline()
                  , n = (e ? this.inlineStack : this.compileStack).pop();
                if (!t && n instanceof i)
                    return n.value;
                if (!e) {
                    if (!this.stackSlot)
                        throw new u["default"]("Invalid stack pop");
                    this.stackSlot--
                }
                return n
            },
            topStack: function() {
                var t = this.isInline() ? this.inlineStack : this.compileStack
                  , e = t[t.length - 1];
                return e instanceof i ? e.value : e
            },
            contextName: function(t) {
                return this.useDepths && t ? "depths[" + t + "]" : "depth" + t
            },
            quotedString: function(t) {
                return this.source.quotedString(t)
            },
            objectLiteral: function(t) {
                return this.source.objectLiteral(t)
            },
            aliasable: function(t) {
                var e = this.aliases[t];
                return e ? (e.referenceCount++,
                e) : ((e = this.aliases[t] = this.source.wrap(t)).aliasable = !0,
                e.referenceCount = 1,
                e)
            },
            setupHelper: function(t, e, n) {
                var i = [];
                return {
                    params: i,
                    paramsInit: this.setupHelperArgs(e, t, i, n),
                    name: this.nameLookup("helpers", e, "helper"),
                    callParams: [this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})")].concat(i)
                }
            },
            setupParams: function(t, e, n) {
                var i = {}
                  , r = []
                  , o = []
                  , s = []
                  , a = !n
                  , l = undefined;
                a && (n = []),
                i.name = this.quotedString(t),
                i.hash = this.popStack(),
                this.trackIds && (i.hashIds = this.popStack()),
                this.stringParams && (i.hashTypes = this.popStack(),
                i.hashContexts = this.popStack());
                var u = this.popStack()
                  , c = this.popStack();
                (c || u) && (i.fn = c || "container.noop",
                i.inverse = u || "container.noop");
                for (var h = e; h--; )
                    l = this.popStack(),
                    n[h] = l,
                    this.trackIds && (s[h] = this.popStack()),
                    this.stringParams && (o[h] = this.popStack(),
                    r[h] = this.popStack());
                return a && (i.args = this.source.generateArray(n)),
                this.trackIds && (i.ids = this.source.generateArray(s)),
                this.stringParams && (i.types = this.source.generateArray(o),
                i.contexts = this.source.generateArray(r)),
                this.options.data && (i.data = "data"),
                this.useBlockParams && (i.blockParams = "blockParams"),
                i
            },
            setupHelperArgs: function(t, e, n, i) {
                var r = this.setupParams(t, e, n);
                return r.loc = JSON.stringify(this.source.currentLocation),
                r = this.objectLiteral(r),
                i ? (this.useRegister("options"),
                n.push("options"),
                ["options=", r]) : n ? (n.push(r),
                "") : r
            }
        },
        function() {
            for (var t = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), e = r.RESERVED_WORDS = {}, n = 0, i = t.length; n < i; n++)
                e[t[n]] = !0
        }(),
        r.isValidJavaScriptVariableName = function(t) {
            return !r.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)
        }
        ,
        e["default"] = r,
        t.exports = e["default"]
    }
    , function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            if (s.isArray(t)) {
                for (var i = [], r = 0, o = t.length; r < o; r++)
                    i.push(e.wrap(t[r], n));
                return i
            }
            return "boolean" == typeof t || "number" == typeof t ? t + "" : t
        }
        function r(t) {
            this.srcFile = t,
            this.source = []
        }
        var o = n(13)["default"];
        e.__esModule = !0;
        var s = n(5)
          , a = undefined;
        try {} catch (l) {}
        a || ((a = function(t, e, n, i) {
            this.src = "",
            i && this.add(i)
        }
        ).prototype = {
            add: function(t) {
                s.isArray(t) && (t = t.join("")),
                this.src += t
            },
            prepend: function(t) {
                s.isArray(t) && (t = t.join("")),
                this.src = t + this.src
            },
            toStringWithSourceMap: function() {
                return {
                    code: this.toString()
                }
            },
            toString: function() {
                return this.src
            }
        }),
        r.prototype = {
            isEmpty: function() {
                return !this.source.length
            },
            prepend: function(t, e) {
                this.source.unshift(this.wrap(t, e))
            },
            push: function(t, e) {
                this.source.push(this.wrap(t, e))
            },
            merge: function() {
                var t = this.empty();
                return this.each(function(e) {
                    t.add(["  ", e, "\n"])
                }),
                t
            },
            each: function(t) {
                for (var e = 0, n = this.source.length; e < n; e++)
                    t(this.source[e])
            },
            empty: function() {
                var t = this.currentLocation || {
                    start: {}
                };
                return new a(t.start.line,t.start.column,this.srcFile)
            },
            wrap: function(t) {
                var e = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
                    start: {}
                } : arguments[1];
                return t instanceof a ? t : (t = i(t, this, e),
                new a(e.start.line,e.start.column,this.srcFile,t))
            },
            functionCall: function(t, e, n) {
                return n = this.generateList(n),
                this.wrap([t, e ? "." + e + "(" : "(", n, ")"])
            },
            quotedString: function(t) {
                return '"' + (t + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            objectLiteral: function(t) {
                var e = this
                  , n = [];
                o(t).forEach(function(r) {
                    var o = i(t[r], e);
                    "undefined" !== o && n.push([e.quotedString(r), ":", o])
                });
                var r = this.generateList(n);
                return r.prepend("{"),
                r.add("}"),
                r
            },
            generateList: function(t) {
                for (var e = this.empty(), n = 0, r = t.length; n < r; n++)
                    n && e.add(","),
                    e.add(i(t[n], this));
                return e
            },
            generateArray: function(t) {
                var e = this.generateList(t);
                return e.prepend("["),
                e.add("]"),
                e
            }
        },
        e["default"] = r,
        t.exports = e["default"]
    }
    ])
}),
$.deparam = function(t, e) {
    var n = {}
      , i = {
        "true": !0,
        "false": !1,
        "null": null
    };
    return $.each(t.replace(/\+/g, " ").split("&"), function(t, r) {
        var o, s = r.split("="), a = decodeURIComponent(s[0]), l = n, u = 0, c = a.split("]["), h = c.length - 1;
        if (/\[/.test(c[0]) && /\]$/.test(c[h]) ? (c[h] = c[h].replace(/\]$/, ""),
        h = (c = c.shift().split("[").concat(c)).length - 1) : h = 0,
        2 === s.length)
            if (o = decodeURIComponent(s[1]),
            e && (o = o && !isNaN(o) ? +o : "undefined" === o ? undefined : i[o] !== undefined ? i[o] : o),
            h)
                for (; u <= h; u++)
                    l = l[a = "" === c[u] ? l.length : c[u]] = u < h ? l[a] || (c[u + 1] && isNaN(c[u + 1]) ? {} : []) : o;
            else
                $.isArray(n[a]) ? n[a].push(o) : n[a] !== undefined ? n[a] = [n[a], o] : n[a] = o;
        else
            a && (n[a] = e ? undefined : "")
    }),
    n
}
,
function() {
    $.fn.findInclusive = function(t) {
        return this.filter(t).add(this.find(t))
    }
}
.call(this),
function() {
    Distiller.UserAgent = function() {
        function t() {
            var t;
            this.constructor.isIOS() && (t = jQuery("body"),
            $(document).on("focusin", "input", function() {
                return t.addClass("fixfixed")
            }),
            $(document).on("blur", "input", function() {
                return t.removeClass("fixfixed")
            }))
        }
        return t.isIOS = function() {
            return !(!this.userAgent() || !this.userAgent().match(/(iPhone|iPod|iPad)/g))
        }
        ,
        t.isAndroid = function() {
            return !(!this.userAgent() || !this.userAgent().match(/(android|Android)/g))
        }
        ,
        t.userAgent = function() {
            if (Distiller.window().navigator)
                return Distiller.window().navigator.userAgent
        }
        ,
        t
    }()
}
.call(this),
function() {
    Distiller.window = function() {
        return window
    }
    ,
    Distiller.document = function() {
        return document
    }
    ,
    Distiller.screen = function() {
        return screen
    }
    ,
    Distiller.location = function() {
        return location
    }
    ,
    Distiller.getQueryString = function() {
        return $.deparam(location.search.substring(1))
    }
    ,
    Distiller.setQueryString = function(t) {
        return location.search = $.param(t)
    }
}
.call(this),
function() {}
.call(this),
document.addEventListener("readystatechange", t=>{
    if ("interactive" === t.target.readyState && console.log("Enabling Accessibility Please wait..!!"),
    "complete" === t.target.readyState) {
        function e() {
            if (null !== document.querySelector("#adthrive-collapse-title")) {
                const t = document.querySelector("#adthrive-collapse-title");
                setAttribute(t, "role", "heading"),
                setAttribute(t, "aria-level", "2")
            }
        }
        function n() {
            if (null !== document.querySelector(".grecaptcha-badge")) {
                const t = document.querySelector(".grecaptcha-badge");
                setAttribute(t, "role", "region"),
                setAttribute(t, "aria-label", "Recaptcha")
            }
        }
        if (document.getElementsByClassName("banner__close")[0].addEventListener("click", ()=>{
            document.querySelector(".download-banner").style.display = "none"
        }
        ),
        document.getElementsByClassName("banner__close")[0].addEventListener("keydown", t=>{
            13 !== t.keyCode && 32 !== t.keyCode || (document.querySelector(".download-banner").style.display = "none")
        }
        ),
        e(),
        n(),
        document.querySelectorAll(".spirit-family-select__button").forEach(t=>{
            t.addEventListener("click", ()=>{
                null === t.getAttribute("aria-expanded") || "false" === t.getAttribute("aria-expanded") ? t.setAttribute("aria-expanded", "true") : t.setAttribute("aria-expanded", "false")
            }
            )
        }
        ),
        $(".spirit-family-select__button").keydown(function(t) {
            let e = $(this).attr("aria-expanded");
            13 !== t.keyCode && 32 !== t.keyCode || (e === undefined || null === e || "false" === e ? $(this).parents(".spirit-family-select--open").find(".selected").attr("aria-expanded", "true") : $(this).parents(".spirit-family-select--open").find(".selected").attr("aria-expanded", "false"))
        }),
        null !== $(".table-body table") || $(".table-body table") !== undefined) {
            document.querySelectorAll(".table-body table").forEach(t=>{
                $(t).find("tr").eq("0").children().attr("role", "columnheader")
            }
            )
        }
        if ($(".content.mobile") !== undefined) {
            let t = $(".content.mobile input:not([type='hidden'], [type='submit'])")
              , e = $(".content.mobile form")
              , n = $(".content.mobile .submit input[type='hidden']")
              , i = $(".content.mobile .pretty-checkbox-field .description");
            $(e).attr("id", `${e.attr("id")}-mobile`),
            $(n).attr("id", `${n.attr("id")}-mobile`),
            $(i).attr("id", `${i.attr("id")}-mobile`),
            $(t).each(function(t, e) {
                let n = $(e).attr("id");
                "sign_up_password" === n || "sign_up_password-mobile" === n ? ($(e).attr("id", `${n}-mobile`),
                $(e).next().attr("toggle", `#${n}-mobile`)) : $(e).attr("id", `${n}-mobile`)
            })
        }
        function i() {
            if (null !== document.querySelector("nav.pagination")) {
                const t = document.querySelector("nav.pagination");
                setAttribute(t, "aria-label", "Pagination"),
                setAttribute(t.querySelector(".first a"), "aria-label", "First"),
                setAttribute(t.querySelector(".last a"), "aria-label", "last")
            }
        }
        i()
    }
}
);
let omitKeyboardFocus = (...t)=>{
    t.forEach(t=>{
        t.setAttribute("tabindex", "-1")
    }
    )
}
  , includeKeyboardFocus = (...t)=>{
    t.forEach(t=>{
        t.setAttribute("tabindex", "0")
    }
    )
}
  , setAttribute = (t,e,n)=>{
    t.setAttribute(e, n)
}
;
var aria = aria || {};
aria.Utils = aria.Utils || {},
aria.Utils.IgnoreUtilFocusChanges = !1,
aria.Utils.dialogOpenClass = "has-dialog",
aria.Utils.focusFirstDescendant = function(t) {
    for (var e = 0; e < t.childNodes.length; e++) {
        var n = t.childNodes[e];
        if (aria.Utils.attemptFocus(n) || aria.Utils.focusFirstDescendant(n))
            return !0
    }
    return !1
}
,
aria.Utils.focusLastDescendant = function(t) {
    for (var e = t.childNodes.length - 1; e >= 0; e--) {
        var n = t.childNodes[e];
        if (aria.Utils.attemptFocus(n) || aria.Utils.focusLastDescendant(n))
            return !0
    }
    return !1
}
,
aria.Utils.attemptFocus = function(t) {
    if (!aria.Utils.isFocusable(t))
        return !1;
    aria.Utils.IgnoreUtilFocusChanges = !0;
    try {
        t.focus()
    } catch (e) {}
    return aria.Utils.IgnoreUtilFocusChanges = !1,
    document.activeElement === t
}
,
aria.OpenDialogList = aria.OpenDialogList || new Array(0),
aria.getCurrentDialog = function() {
    if (aria.OpenDialogList && aria.OpenDialogList.length)
        return aria.OpenDialogList[aria.OpenDialogList.length - 1]
}
,
aria.closeCurrentDialog = function() {
    var t = aria.getCurrentDialog();
    return !!t && (t.close(),
    !0)
}
,
aria.handleEscape = function(t) {
    (t.which || t.keyCode) === aria.KeyCode.ESC && aria.closeCurrentDialog() && t.stopPropagation()
}
,
document.addEventListener("keyup", aria.handleEscape),
aria.Dialog = function(t, e, n) {
    if (this.dialogNode = document.getElementById(t),
    null === this.dialogNode)
        throw new Error('No element found with id="' + t + '".');
    var i = ["dialog", "alertdialog"];
    if (!(this.dialogNode.getAttribute("role") || "").trim().split(/\s+/g).some(function(t) {
        return i.some(function(e) {
            return t === e
        })
    }))
        throw new Error("Dialog() requires a DOM element with ARIA role of dialog or alertdialog.");
    var r = "dialog-backdrop";
    this.dialogNode.parentNode.classList.contains(r) ? this.backdropNode = this.dialogNode.parentNode : (this.backdropNode = document.createElement("div"),
    this.backdropNode.className = r,
    this.dialogNode.parentNode.insertBefore(this.backdropNode, this.dialogNode),
    this.backdropNode.appendChild(this.dialogNode)),
    this.backdropNode.classList.add("active"),
    document.body.classList.add(aria.Utils.dialogOpenClass),
    this.focusAfterClosed = "string" == typeof e ? document.getElementById(e) : "object" == typeof e ? e : $("body"),
    this.focusFirst = "string" == typeof n ? document.getElementById(n) : "object" == typeof n ? n : null;
    var o = document.createElement("div");
    this.preNode = this.dialogNode.parentNode.insertBefore(o, this.dialogNode),
    this.preNode.tabIndex = 0;
    var s = document.createElement("div");
    this.postNode = this.dialogNode.parentNode.insertBefore(s, this.dialogNode.nextSibling),
    this.postNode.tabIndex = 0,
    aria.OpenDialogList.length > 0 && aria.getCurrentDialog().removeListeners(),
    this.addListeners(),
    aria.OpenDialogList.push(this),
    this.clearDialog(),
    this.focusFirst ? this.focusFirst.focus() : aria.Utils.focusFirstDescendant(this.dialogNode),
    this.lastFocus = document.activeElement
}
,
aria.Dialog.prototype.clearDialog = function() {
    Array.prototype.map.call(this.dialogNode.querySelectorAll("input"), function(t) {
        t.value = ""
    })
}
,
aria.Dialog.prototype.close = function() {
    aria.OpenDialogList.pop(),
    this.removeListeners(),
    aria.Utils.remove(this.preNode),
    aria.Utils.remove(this.postNode),
    this.dialogNode.className = "hidden",
    this.backdropNode.classList.remove("active"),
    this.focusAfterClosed && this.focusAfterClosed.focus(),
    aria.OpenDialogList.length > 0 ? aria.getCurrentDialog().addListeners() : document.body.classList.remove(aria.Utils.dialogOpenClass)
}
,
aria.Dialog.prototype.replace = function(t, e, n) {
    aria.OpenDialogList.pop(),
    this.removeListeners(),
    aria.Utils.remove(this.preNode),
    aria.Utils.remove(this.postNode),
    this.dialogNode.className = "hidden",
    this.backdropNode.classList.remove("active");
    var i = e || this.focusAfterClosed;
    new aria.Dialog(t,i,n)
}
,
aria.Dialog.prototype.addListeners = function() {
    document.addEventListener("focus", this.trapFocus, !0)
}
,
aria.Dialog.prototype.removeListeners = function() {
    document.removeEventListener("focus", this.trapFocus, !0)
}
,
aria.Dialog.prototype.trapFocus = function(t) {
    if (!aria.Utils.IgnoreUtilFocusChanges) {
        var e = aria.getCurrentDialog();
        e.dialogNode.contains(t.target) ? e.lastFocus = t.target : (aria.Utils.focusFirstDescendant(e.dialogNode),
        e.lastFocus == document.activeElement && aria.Utils.focusLastDescendant(e.dialogNode),
        e.lastFocus = document.activeElement)
    }
}
,
window.openDialog = function(t, e, n) {
    new aria.Dialog(t,e,n)
}
,
window.closeDialog = function(t) {
    var e = aria.getCurrentDialog();
    e.dialogNode.contains(t) && e.close()
}
,
window.replaceDialog = function(t, e, n) {
    var i = aria.getCurrentDialog();
    i.dialogNode.contains(document.activeElement) && i.replace(t, e, n)
}
,
$(document).on("click", ".banner__close", function() {
    aria.getCurrentDialog() && aria.getCurrentDialog().close()
});
var aria = aria || {};
aria.KeyCode = {
    BACKSPACE: 8,
    TAB: 9,
    RETURN: 13,
    SHIFT: 16,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
},
aria.Utils = aria.Utils || {},
aria.Utils.matches = function(t, e) {
    return Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
        for (var n = t.parentNode.querySelectorAll(e), i = n.length; --i >= 0 && n.item(i) !== this; )
            ;
        return i > -1
    }
    ),
    t.matches(e)
}
,
aria.Utils.remove = function(t) {
    return t.remove && "function" == typeof t.remove ? t.remove() : !(!t.parentNode || !t.parentNode.removeChild || "function" != typeof t.parentNode.removeChild) && t.parentNode.removeChild(t)
}
,
aria.Utils.isFocusable = function(t) {
    if (t.tabIndex < 0)
        return !1;
    if (t.disabled)
        return !1;
    switch (t.nodeName) {
    case "A":
        return !!t.href && "ignore" != t.rel;
    case "INPUT":
        return "hidden" != t.type;
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
        return !0;
    default:
        return !1
    }
}
,
aria.Utils.getAncestorBySelector = function(t, e) {
    if (!aria.Utils.matches(t, e + " " + t.tagName))
        return null;
    for (var n = t, i = null; null === i; )
        aria.Utils.matches(n.parentNode, e) ? i = n.parentNode : n = n.parentNode;
    return i
}
,
aria.Utils.hasClass = function(t, e) {
    return new RegExp("(\\s|^)" + e + "(\\s|$)").test(t.className)
}
,
aria.Utils.addClass = function(t, e) {
    aria.Utils.hasClass(t, e) || (t.className += " " + e)
}
,
aria.Utils.removeClass = function(t, e) {
    var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
    t.className = t.className.replace(n, " ").trim()
}
,
aria.Utils.bindMethods = function(t) {
    Array.prototype.slice.call(arguments, 1).forEach(function(e) {
        t[e] = t[e].bind(t)
    })
}
;
const brandContactManager = function() {};
brandContactManager.prototype.init = function() {
    $(".js-brand-contact-form").on("ajax:success", function() {
        $(".js-brand-contact-form-modal .form").toggleClass("hidden"),
        $(".js-brand-contact-form-modal .result").toggleClass("hidden")
    }),
    $(".js-brand-contact-form").on("ajax:error", function(t, e) {
        $(".field .error").addClass("hidden"),
        e.responseJSON && (errors = e.responseJSON.errors,
        errors && (errors.includes("name") && $(".error.invalid-name").removeClass("hidden"),
        errors.includes("brand") && $(".error.invalid-brand").removeClass("hidden"),
        errors.includes("email") && $(".error.invalid-email").removeClass("hidden"),
        errors.includes("phone") && $(".error.invalid-phone").removeClass("hidden")))
    }),
    $(document).on("hide-modal", ".js-brand-contact-form-modal", function() {
        $(".field input").val(""),
        $('.field input[type="checkbox"]').attr("checked", !1),
        $(".field .error").addClass("hidden"),
        $(".js-brand-contact-form-modal .form").removeClass("hidden"),
        $(".js-brand-contact-form-modal .result").addClass("hidden")
    })
}
,
Distiller.brandContactManager = new brandContactManager,
$(document).ready(function() {
    $(".js-brand-contact-form-modal").length > 0 && Distiller.brandContactManager.init()
}),
$(document).ready(function() {
    $(".complete-social-form").length > 0 && ($.validator.addMethod("validEmail", function(t) {
        return t && /^([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i.test(t)
    }, "Please enter a valid email address."),
    $(".complete-social-form").validate({
        errorClass: "custom-error",
        rules: {
            "sign_up[email]": {
                required: !0,
                validEmail: !0
            },
            "sign_up[username]": {
                required: !0
            }
        }
    }))
}),
$(document).ready(function() {
    function t() {
        $.cookie("DISMISS_CTA_EMAIL_BANNER", !0, {
            expires: 365,
            path: "/"
        })
    }
    $(document).on("click", ".like-spirit", function() {
        $.ajax({
            type: "POST",
            url: "/cta_emails/like_spirit",
            data: {
                spirit_id: $(".cta-email-block").data("spirit-id")
            },
            success: function(t) {
                $(".cta-email-block").html(t)
            }
        })
    }),
    $(document).on("click", ".dislike-spirit", function() {
        $.ajax({
            type: "POST",
            url: "/cta_emails/dislike_spirit",
            data: {
                spirit_id: $(".cta-email-block").data("spirit-id")
            },
            success: function(e) {
                Distiller.googleTagTracker.track("Dislike Spirit", {
                    spirit_slug: $(".cta-email-block").data("spirit-slug")
                }),
                $(".cta-email-block").html(e),
                t()
            }
        })
    }),
    $(document).on("ajax:success", ".js-cta-email-form", function(e, n) {
        $(".cta-email-block").html(n),
        t()
    })
}),
function() {
    var t = [].slice;
    Distiller.override = function(t, e, n, i) {
        return null == i && (i = !0),
        $("body").on(t, e, function(t) {
            var r;
            return i && t.preventDefault(),
            r = $(t.target).closest(e),
            n(r, t)
        })
    }
    ,
    Distiller.bind = function() {
        var e, n;
        return e = 1 <= arguments.length ? t.call(arguments, 0) : [],
        (n = $("body")).bind.apply(n, e)
    }
    ,
    Distiller.unbind = function() {
        var e, n;
        return e = 1 <= arguments.length ? t.call(arguments, 0) : [],
        (n = $("body")).unbind.apply(n, e)
    }
    ,
    Distiller.trigger = function() {
        var e, n;
        return e = 1 <= arguments.length ? t.call(arguments, 0) : [],
        (n = $("body")).trigger.apply(n, e)
    }
}
.call(this),
function() {
    $(document).ready(function() {
        return FastClick.attach(document.body)
    })
}
.call(this),
function() {
    Distiller.focus = function(t) {
        return t.focus()
    }
    ,
    Distiller.focusWithoutScrolling = function(t) {
        var e, n;
        return e = window.scrollX,
        n = window.scrollY,
        Distiller.focus(t),
        window.scrollTo(e, n)
    }
    ,
    Distiller.equalNodes = function(t, e) {
        return t.isEqualNode(e)
    }
}
.call(this),
function() {
    Distiller.googleTagTracker = function() {
        function t() {}
        return t.prototype.init = function() {}
        ,
        t.prototype.trackPageLoad = function(t) {
            var e, n, i, r, o;
            for (n in i = {
                platform: "web",
                url: (e = Distiller.window().location).href,
                "url host": e.host,
                "url path": e.pathname,
                "url querystring": e.search,
                "page type": t
            },
            r = $.deparam(e.search.substring(1)))
                o = r[n],
                i["query param[" + n + "]"] = o;
            return gtag("event", "Load_Page", i)
        }
        ,
        t.prototype.analyze = function(t, e, n, i) {
            var r;
            return null == n && (n = {}),
            null == i && (i = {}),
            r = $(t).text().trim(),
            this._addPropertyNoClobber("text", r, n),
            this._addPropertyNoClobber("origination", this._currentUrl(), n),
            Distiller.googleTagTracker.track(e, n, i)
        }
        ,
        t.prototype._currentUrl = function() {
            return Distiller.window().location.hash || Distiller.window().location.pathname
        }
        ,
        t.prototype._addPropertyNoClobber = function(t, e, n) {
            if (t && e && !n[t])
                return n[t] = e
        }
        ,
        t.prototype.track = function(t, e, n) {
            if (null == e && (e = {}),
            null == n && (n = {}),
            (e = _.clone(e)).route_name || (e.route_name = Distiller.currentRouteName),
            e.platform = "web",
            "function" == typeof gtag)
                return gtag("event", t, e)
        }
        ,
        t.prototype.setUserTag = function(t) {
            if (t.slug)
                return gtag("set", "user_id", t.slug),
                gtag("set", "user_properties", {
                    id: t.id,
                    slug: t.slug,
                    current_sign_in_ip: t.current_sign_in_ip
                })
        }
        ,
        t
    }(),
    Distiller.googleTagTracker = new Distiller.googleTagTracker,
    $(document).ready(function() {
        return Distiller.googleTagTracker.init()
    })
}
.call(this),
function() {
    Distiller.handleAjaxOn = function(t, e, n) {
        var i;
        return i = function() {
            return $(".js-error-modal").show()
        }
        ,
        e && t.on("ajax:success", e),
        t.on("ajax:error", n || i)
    }
}
.call(this),
function() {
    Distiller.ImageData = function() {
        function t(t) {
            this.file = t
        }
        return t.prototype.readContents = function(t) {
            var e, n;
            return (e = new FileReader).onload = (n = this,
            function() {
                return new ImageRedrawer(e.result,1e3).getData(function(e) {
                    return n.content = e,
                    t()
                })
            }
            ),
            e.readAsDataURL(this.file)
        }
        ,
        t.prototype.setAsBackground = function(t) {
            return t.css("background-image", "url(" + this.content + ")")
        }
        ,
        t.readFromInput = function(t, e) {
            var n;
            return (n = new Distiller.ImageData(t.files[0])).readContents(function() {
                if (e)
                    return e(n)
            })
        }
        ,
        t
    }()
}
.call(this),
function() {
    var t;
    t = function() {
        function t(e, n) {
            this.dataString = e,
            this.maxDim = n || this.MAX_DIM,
            this.orientation = t.ExifData.fromString(this.dataString).Orientation
        }
        return t.prototype.MAX_DIM = 2200,
        t.prototype.getData = function(t) {
            var e;
            return this.img = new Image,
            this.img.onload = (e = this,
            function() {
                var n;
                return n = e._buildRedrawnData(),
                t(n)
            }
            ),
            this.img.src = this.dataString
        }
        ,
        t.prototype._buildRedrawnData = function() {
            var e, n, i, r, o;
            return o = t.VerticalSquashDetector.ratioForImage(this.img),
            i = this._buildScaledDimensions(o),
            n = (e = document.createElement("canvas")).getContext("2d"),
            this._isPortraitOrientation() ? (e.width = i.height,
            e.height = i.width) : (e.width = i.width,
            e.height = i.height),
            t.ContextReorientor.reorient(n, this.orientation, i.width, i.height),
            r = i.height / o,
            n.drawImage(this.img, 0, 0, i.width, r),
            e.toDataURL("image/jpeg")
        }
        ,
        t.prototype._buildScaledDimensions = function() {
            var t, e, n, i;
            return n = this.img.width,
            e = this.img.height,
            (t = Math.max.apply(Math, [n, e])) > this.maxDim && (n *= i = this.maxDim / t,
            e *= i),
            {
                width: n,
                height: e
            }
        }
        ,
        t.prototype._isPortraitOrientation = function() {
            return this.orientation >= 5 && this.orientation <= 8
        }
        ,
        t.dataURLToBlob = function(t) {
            var e, n, i, r, o, s, a, l, u, c;
            for (a = (l = t.split(","))[0].split(":")[1].split(";")[0],
            r = atob(l[1]),
            e = new ArrayBuffer(r.length),
            s = new Uint8Array(e),
            o = u = 0,
            c = r.length - 1; 0 <= c ? u <= c : u >= c; o = 0 <= c ? ++u : --u)
                s[o] = r.charCodeAt(o);
            return (i = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder) ? ((n = new i).append(e),
            n.getBlob(a)) : new Blob([e],{
                type: a
            })
        }
        ,
        t.resizedCanvas = function(t, e) {
            var n, i;
            return i = (n = document.createElement("canvas")).getContext("2d"),
            n.width = e.width,
            n.height = e.height,
            i.drawImage(t, 0, 0, e.width, e.height),
            n
        }
        ,
        t
    }(),
    window.ImageRedrawer = t
}
.call(this),
function() {
    var t;
    ImageRedrawer.ContextReorientor = function() {
        function e() {}
        return e.reorient = function(e, n, i, r) {
            switch (n) {
            case t.HORIZONTAL_FLIP:
                return e.translate(i, 0),
                e.scale(-1, 1);
            case t.ROTATED_180:
                return e.translate(i, r),
                e.rotate(Math.PI);
            case t.ROTATED_180_VERTICAL_FLIP:
                return e.translate(0, r),
                e.scale(1, -1);
            case t.ROTATED_90_HORIZONTAL_FLIP:
                return e.rotate(.5 * Math.PI),
                e.scale(1, -1);
            case t.ROTATED_270:
                return e.rotate(.5 * Math.PI),
                e.translate(0, -r);
            case t.ROTATED_90_VERTICAL_FLIP:
                return e.rotate(.5 * Math.PI),
                e.translate(i, -r),
                e.scale(-1, 1);
            case t.ROTATED_90:
                return e.rotate(-.5 * Math.PI),
                e.translate(-i, 0)
            }
        }
        ,
        e
    }(),
    t = function() {
        function t() {}
        return t.STANDARD = 1,
        t.HORIZONTAL_FLIP = 2,
        t.ROTATED_180 = 3,
        t.ROTATED_180_VERTICAL_FLIP = 4,
        t.ROTATED_90_HORIZONTAL_FLIP = 5,
        t.ROTATED_270 = 6,
        t.ROTATED_90_VERTICAL_FLIP = 7,
        t.ROTATED_90 = 8,
        t
    }()
}
.call(this),
function() {
    ImageRedrawer.ExifData = function() {
        function t() {}
        return t.fromString = function(t) {
            var e, n;
            return n = atob(t.split(",")[1]),
            e = new BinaryFile(n,0,n.length),
            EXIF.readFromBinaryFile(e)
        }
        ,
        t
    }()
}
.call(this),
function() {
    ImageRedrawer.VerticalSquashDetector = function() {
        function t() {}
        return t.ratioForImage = function(t) {
            var e, n, i, r, o, s, a, l;
            for (o = t.height,
            (e = document.createElement("canvas")).width = 1,
            e.height = o,
            (n = e.getContext("2d")).drawImage(t, 0, 0),
            i = n.getImageData(0, 0, 1, o).data,
            l = 0,
            r = o,
            s = o; s > l; )
                0 === i[4 * (s - 1) + 3] ? r = s : l = s,
                s = r + l >> 1;
            return 0 === (a = s / o) && (a = 1),
            a
        }
        ,
        t
    }()
}
.call(this),
$(document).ready(function() {
    $(".js-more-recent-spirits").click(function() {
        $(".recent-spirit-block").removeClass("hidden"),
        $(this).addClass("hidden"),
        $(".js-less-recent-spirits").removeClass("hidden")
    }),
    $(".js-less-recent-spirits").click(function() {
        $(".recent-spirit-block.hiddenable").addClass("hidden"),
        $(this).addClass("hidden"),
        $(".js-more-recent-spirits").removeClass("hidden")
    })
}),
$(document).ready(function() {
    $(".toggle-password-visibility").on("click keydown", function(t) {
        if (0 !== t.button && "Enter" !== t.key && " " !== t.key)
            return;
        let e = $(this).parent()
          , n = $(e).find("i");
        n.toggleClass("fa-eye fa-eye-slash");
        let i = $(e).parent().find(n.attr("toggle"));
        "password" == i.attr("type") ? (i.attr("type", "text"),
        $(e).attr("aria-label", "Hide Password")) : (i.attr("type", "password"),
        $(e).attr("aria-label", "Show Password"))
    })
});
const savedArticlesManager = function() {};
savedArticlesManager.prototype.init = function() {
    $(".js-save-article").on("ajax:success", function() {
        $(".articles-actions").addClass("saved")
    }),
    $(".js-unsave-article").on("ajax:success", function() {
        $(".articles-actions").removeClass("saved")
    })
}
,
Distiller.savedArticlesManager = new savedArticlesManager,
$(document).ready(function() {
    $(".article-details-container").length > 0 && Distiller.savedArticlesManager.init()
}),
function() {
    Distiller.ScrollToCls = function() {
        function t() {}
        return t.prototype.scrollTo = function(t, e, n) {
            var i, r;
            if (t.length > 0)
                return i = $(window).width() < 1025 ? t.offset().top - $(".header").height() - $(".header").offset().top + $(document).scrollTop() : t.offset().top,
                r = n || this.scrollables(),
                e ? r.animate({
                    scrollTop: i
                }, e) : r.scrollTop(i)
        }
        ,
        t.prototype.scrollToTop = function() {
            return this.scrollables().scrollTop(0)
        }
        ,
        t.prototype.scrollables = function() {
            return $(window).add("body,html")
        }
        ,
        t
    }(),
    jQuery(function(t) {
        return t("body").on("click", ".js-scroll-to", function(e) {
            var n, i;
            return n = t(e.target).closest(".js-scroll-to"),
            i = t(n.data("scroll-selector")),
            (new Distiller.ScrollToCls).scrollTo(i, 300)
        })
    })
}
.call(this),
function() {
    Distiller.SpiritFamilyColor = function() {
        function t() {}
        return t.primaryForContext = function(t) {
            return this._colorsForContext(t).color
        }
        ,
        t.secondaryForContext = function(t) {
            return this._colorsForContext(t).secondaryColor
        }
        ,
        t.tertiaryForContext = function(t) {
            return this._colorsForContext(t).tertiaryColor
        }
        ,
        t._colorsForContext = function(t) {
            var e;
            return e = "",
            window.Distiller && (e = Distiller.defaultSpiritFamily),
            $(t).closest(".whiskey-content").length > 0 && (e = "whiskey"),
            $(t).closest(".brandy-content").length > 0 && (e = "brandy"),
            $(t).closest(".agave-content").length > 0 && (e = "agave"),
            $(t).closest(".sugarcane-content").length > 0 && (e = "sugarcane"),
            $(t).closest(".gin-content").length > 0 && (e = "gin"),
            $(t).closest(".vodka-content").length > 0 && (e = "vodka"),
            $(t).closest(".liqueur-content").length > 0 && (e = "liqueur"),
            $(t).closest(".other-content").length > 0 && (e = "other"),
            function() {
                switch (e) {
                case "brandy":
                    return {
                        color: "#7d4a8d",
                        secondaryColor: "#5d336f",
                        tertiaryColor: "#3d224f"
                    };
                case "agave":
                    return {
                        color: "#89ad3f",
                        secondaryColor: "#698d2b",
                        tertiaryColor: "#496d1b"
                    };
                case "sugarcane":
                    return {
                        color: "#e8af22",
                        secondaryColor: "#b88f11",
                        tertiaryColor: "#986f06"
                    };
                case "gin":
                    return {
                        color: "#3572c8",
                        secondaryColor: "#19415E",
                        tertiaryColor: "#113651"
                    };
                case "vodka":
                    return {
                        color: "#BB2318",
                        secondaryColor: "#932820",
                        tertiaryColor: "#7A150E"
                    };
                case "liqueur":
                    return {
                        color: "#FE9C96",
                        secondaryColor: "#932820",
                        tertiaryColor: "#7A150E"
                    };
                case "other":
                    return {
                        color: "#25ced1",
                        secondaryColor: "#20a6a8",
                        tertiaryColor: "#188b8d"
                    };
                default:
                    return {
                        color: "#f05a41",
                        secondaryColor: "#c54833",
                        tertiaryColor: "#9b3322"
                    }
                }
            }()
        }
        ,
        t
    }()
}
.call(this),
$(document).ready(function() {
    var t;
    $(".search-form__term").data("run-search-helper") && $(".search-form__term").on("keyup", function() {
        term = $(this).val(),
        "" != term && (clearTimeout(t),
        t = setTimeout(function() {
            $.ajax({
                url: "/api/spirits/search-help",
                data: {
                    term: term
                },
                success: function() {}
            })
        }, 500))
    })
}),
$(document).ready(function() {
    $(".taste-images .thumbnail").on("click", function() {
        var t, e = window.innerWidth, n = window.innerHeight;
        t = e < n ? .6 * e : .6 * n,
        $(".taste-image-modal .taste-image").css("width", t),
        $(".taste-image-modal .taste-image").css("height", t),
        $(".taste-image-modal .taste-image").css("background-image", `url(${$(this).attr("data-image-url")})`)
    })
}),
function() {
    Distiller.TextTruncator = function() {
        function t() {
            var t;
            setTimeout((t = this,
            function() {
                return t.truncateAll()
            }
            ), 100)
        }
        return t.prototype.truncateAll = function() {
            var t, e, n, i, r;
            for (r = [],
            e = 0,
            n = (i = $("[data-behavior=truncatable]")).length; e < n; e++)
                t = i[e],
                r.push(this.truncateToFit($(t)));
            return r
        }
        ,
        t.prototype.truncateToFit = function(t) {
            var e;
            return 0 === (e = t.closest("[data-behavior=truncation-container]")).length && (e = t),
            new Distiller.TextTruncation(t,e)
        }
        ,
        t
    }(),
    Distiller.TextTruncation = function() {
        function t(t, e) {
            var n;
            for (this.truncatable = t,
            this.container = e,
            this.words = this.currentWords(); this.truncationPossible(); )
                n = Math.floor(this.words.length * this.TRUNCATION_RATE),
                this.words = this.words.slice(0, n),
                this.truncatable.text(this.words.join(" ") + "...")
        }
        return t.prototype.TRUNCATION_RATE = .8,
        t.prototype.truncationPossible = function() {
            return this.containerOverflow() && this.words.length > 1
        }
        ,
        t.prototype.containerOverflow = function() {
            var t;
            return t = this.container[0],
            this.containerOffsetHeight() + 1 < t.scrollHeight
        }
        ,
        t.prototype.containerOffsetHeight = function() {
            return Math.round(getComputedStyle(this.container[0]).getPropertyValue("height").split("px")[0])
        }
        ,
        t.prototype.currentWords = function() {
            return this.truncatable.text().split(" ")
        }
        ,
        t
    }(),
    jQuery(function() {
        return new Distiller.TextTruncator
    })
}
.call(this),
function() {
    Distiller.templates || (Distiller.templates = {})
}
.call(this),
function() {
    Distiller.templates.comment = function(t, e) {
        return $("<li class='comment user-list-item'> <a class='delete-comment js-delete-comment' data-method='delete' data-remote='' href='" + e + "/" + t.id + "' rel='no-follow' data-analytics-event='Delete_Comment'> <i class='icomoon-x'></i> </a> <div class='avatar-container'> <a class='avatar' style='background-image: url(" + t.user.avatar_urls.profile + ")' href='/profile/" + t.user.slug + "'></a> </div> <div class='details'> <a class='username' href='/profile/" + t.user.slug + "'> " + t.user.username + " </a> <time class='date'>just now</time> <p class='body'> <span class='comment__body'>" + t.body + "</span> </p> </div> </li>")
    }
}
.call(this),
function() {
    Distiller.AnalyticsObserver = function() {
        function t() {
            var t, e;
            Distiller.override("click", "[data-analytics-event]:not(form)", (e = this,
            function(t) {
                return e.analyze(t)
            }
            ), !1),
            Distiller.override("submit", "form[data-analytics-event]", function(t) {
                return function(e) {
                    return t.analyze(e)
                }
            }(this), !1),
            t = 'a[href]:not([href^="' + location.origin + '"]):not([href^="#"]):not([href^="/"]):not([href^="mailto"]):not([data-analytics-event])',
            Distiller.override("click", t, function(t) {
                var e;
                return e = {
                    href: t.attr("href"),
                    "new tab": "_blank" === t.attr("target")
                },
                Distiller.googleTagTracker.analyze(t, "Outbound_Link", e)
            }, !1)
        }
        return t.prototype.analyze = function(t) {
            var e, n, i;
            return e = t.data().analyticsEvent,
            i = t.data().analyticsProperties || {},
            t.attr("href") && (i.href = t.attr("href")),
            n = t.data().analyticsOpts || {},
            Distiller.googleTagTracker.analyze(t, e, i, n)
        }
        ,
        t
    }(),
    $(document).ready(function() {
        return Distiller.analyticsObserver || (Distiller.analyticsObserver = new Distiller.AnalyticsObserver)
    })
}
.call(this),
function() {
    Distiller.BackButton = function() {
        function t() {
            var t;
            Distiller.override("click", "[data-behavior=back]", (t = this,
            function() {
                return t.history = Distiller.window().history,
                t.history.length > 1 ? t.history.back() : page("/")
            }
            ))
        }
        return t
    }(),
    $(document).ready(function() {
        return Distiller.backButtonController || (Distiller.backButtonController = new Distiller.BackButton)
    })
}
.call(this),
function() {
    Distiller.BannerObserver = function() {
        function t() {
            $(document).ready(function() {
                return $("[data-behavior=close-banner]").click(function(t) {
                    var e;
                    return e = $(t.target).closest("[data-behavior=close-banner]").data("banner-name"),
                    $(".display-" + e.toLowerCase() + "-banner").removeClass("display-" + e.toLowerCase() + "-banner"),
                    $.cookie("DISMISS_" + e.toUpperCase() + "_BANNER", !0, {
                        expires: 365,
                        path: "/"
                    })
                })
            })
        }
        return t
    }(),
    new Distiller.BannerObserver
}
.call(this),
function() {
    Distiller.CarouselController = function() {
        function t(t) {
            var e;
            e = t.el,
            this.el = e,
            this.slides = this.el.find("[data-behavior=carousel-slides]"),
            this.slides.addClass("owl-carousel"),
            this.slides.attr("role", "none"),
            this._buildCarousel(),
            this._makeControlsAccessible(),
            this._setupControls(),
            this._handleUpdates()
        }
        return t.FULL_SCREEN_WIDTH = 1e3,
        t.prototype._setupControls = function() {
            return this.controlButtons = this.el.find("[data-behavior=carousel-slide-controls] button,[data-behavior=carousel-slide-controls] [role=button]"),
            this.nextButton = this.el.find("[data-behavior=carousel-next]"),
            this.prevButton = this.el.find("[data-behavior=carousel-prev]"),
            this._handleControlClicks()
        }
        ,
        t.prototype._makeControlsAccessible = function() {
            var t, e;
            return this.el.find(".owl-page").attr("data-behavior", "carousel-slide-controls"),
            (t = this.el.find(".owl-page>span:first-child")).attr("role", "button"),
            t.attr("tabindex", "0"),
            t.each((e = this,
            function(t, n) {
                var i;
                return $(n).attr("data-page-index", t),
                i = t + 1,
                $(n).attr("aria-label", "Page " + i + " of " + e._pageQuantity())
            }
            )),
            this._indicateCurrentByActive()
        }
        ,
        t.prototype._indicateCurrentByActive = function() {
            return $(".owl-page>span:first-child").each(function(t, e) {
                return $(e).parent().hasClass("active") ? $(e).attr("aria-current", "true") : $(e).attr("aria-current", "false")
            })
        }
        ,
        t.prototype._buildCarousel = function() {
            return this.slides.owlCarousel(this._buildCarouselOptions()),
            this.slides.find("li").attr("role", "none"),
            this.slides.find(".owl-wrapper").attr("role", "list"),
            this.slides.find(".owl-item").attr("role", "listitem")
        }
        ,
        t.prototype._buildCarouselOptions = function() {
            var t, e;
            return e = this,
            t = {
                addClassActive: !0,
                pagination: !1,
                autoPlay: !1,
                rewindSpeed: 1e3,
                scrollPerPage: !0,
                stopOnHover: !0,
                afterAction: function() {
                    return this.$owlItems.attr("aria-hidden", "true"),
                    this.$owlItems.filter(".active").attr("aria-hidden", "false"),
                    e._indicateCurrentByActive(),
                    this.$elem.trigger("activatedSlide", this.currentItem)
                }
            },
            this.el.data("single-item") && (t.singleItem = !0),
            this.el.data("autoplay") && (t.autoPlay = 5e3),
            this.el.data("max-items") && (t.itemsCustom = this._buildCustomItems()),
            this.el.data("pagination") && (t.pagination = !0),
            t
        }
        ,
        t.prototype._handleControlClicks = function() {
            var t;
            return this.controlButtons.on("keydown", function(t) {
                if ("Enter" === t.key || " " === t.key)
                    return $(t.target).parents(".owl-page").trigger("mouseup"),
                    !1
            }),
            this.prevButton.on("click", (t = this,
            function() {
                return t.slides.trigger("owl.prev"),
                t._focusOnCurrentSlide()
            }
            )),
            this.nextButton.on("click", function(t) {
                return function() {
                    return t.slides.trigger("owl.next"),
                    t._focusOnCurrentSlide()
                }
            }(this)),
            this.slides.addClass("owl-carousel")
        }
        ,
        t.prototype._handleUpdates = function() {
            return this.slides.on("activatedSlide", (t = this,
            function(e, n) {
                var i;
                return t.controlButtons.removeClass("active-slide"),
                $(t.controlButtons[n]).addClass("active-slide"),
                i = $(t.slides.find(".owl-item").get(n)),
                t._incrementViewCount(i.index()),
                t.prevButton.prop("disabled", 0 === n),
                t.nextButton.prop("disabled", n === t._slideQuantity() - 1)
            }
            ));
            var t
        }
        ,
        t.prototype._groupTitle = function() {
            return this.el.data("carousel-title")
        }
        ,
        t.prototype._incrementViewCount = function(t) {
            var e;
            return this.viewCounts || (this.viewCounts = {}),
            (e = this.viewCounts)[t] || (e[t] = 0),
            this.viewCounts[t] += 1
        }
        ,
        t.prototype._focusOnCurrentSlide = function() {
            return window.setTimeout((t = this,
            function() {
                return t.slides.find(".owl-item.active").children().focus()
            }
            ), 500);
            var t
        }
        ,
        t.prototype._pageQuantity = function() {
            return this.el.find(".owl-page").length
        }
        ,
        t.prototype._slideQuantity = function() {
            return this.slides.find(".owl-item").length
        }
        ,
        t.prototype._buildCustomItems = function() {
            var t, e, n, i, r, o;
            for (n = this.el.data("max-items"),
            e = this.constructor.FULL_SCREEN_WIDTH / n,
            o = [],
            t = i = 1,
            r = this.el.data("max-items"); 1 <= r ? i <= r : i >= r; t = 1 <= r ? ++i : --i)
                1 === t ? o.push([0, 1]) : o.push([e * t, t]);
            return o
        }
        ,
        t
    }(),
    jQuery(function(t) {
        var e, n, i, r, o;
        for (o = [],
        n = 0,
        i = (r = t(".js-carousel")).length; n < i; n++)
            e = r[n],
            o.push(new Distiller.CarouselController({
                el: t(e)
            }));
        return o
    })
}
.call(this),
function() {
    Distiller.ClassChanger = function() {
        function t(t) {
            var e;
            this.el = t,
            this.el.click((e = this,
            function() {
                var t;
                if ((t = e.el.data("target") ? e.el.data("target-parent") ? e.el.closest(e.el.data("target")) : $(e.el.data("target")) : e.el).addClass(e.el.data("add-class")),
                t.removeClass(e.el.data("remove-class")),
                e.el.data("toggle-class") && e.el.data("toggle-class").length > 0)
                    return t.toggleClass(e.el.data("toggle-class"))
            }
            ))
        }
        return t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-class-changer")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.ClassChanger($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.Comment = function() {
        function t(t) {
            var e;
            this.el = t,
            Distiller.handleAjaxOn(this.el.find(".js-delete-comment"), (e = this,
            function() {
                return e.el.fadeOut(300, function() {
                    return e.el.remove()
                })
            }
            ))
        }
        return t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-comment")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.Comment($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.EmailOptPrompt = function() {
        function t(t) {
            this.el = t,
            this.el.click(function(t) {
                var e, n;
                return $(t.target).closest(".modal").hide(),
                e = $(t.target).closest(".js-email-opt").data("selection"),
                n = $(t.target).closest(".js-email-opt").data("user-slug"),
                $.ajax({
                    url: "/users/" + n,
                    data: {
                        user: {
                            explicit_email_opt: !0,
                            subscribe_to_mailing_list: e
                        }
                    },
                    type: "PUT"
                })
            })
        }
        return t
    }()
}
.call(this),
function() {
    Distiller.EmailSignupController = function() {
        function t() {
            Distiller.override("submit", "form[data-behavior=email-signup]", function(t) {
                var e;
                return e = t.find("[data-behavior=message]"),
                $.ajax({
                    type: "post",
                    url: t.attr("action"),
                    data: t.serialize(),
                    success: function(t) {
                        return e.text(t),
                        e.attr("class", "success")
                    },
                    error: function(t) {
                        return e.text(t.responseText),
                        e.attr("class", "error")
                    },
                    global: !1
                })
            })
        }
        return t
    }(),
    Distiller.emailSignupController || (Distiller.emailSignupController = new Distiller.EmailSignupController)
}
.call(this),
function() {
    Distiller.ExpandableHeader = function() {
        function t() {
            var t;
            this.el = $(".canvas-wrapper"),
            this.toggleButton = $(".menu-toggle > button"),
            this.klass = "expand-header",
            $(".main-container, .global-menu a, .header .logo, .header .back", ".menu-toggle").on("click", (t = this,
            function() {
                return t.close()
            }
            )),
            Distiller.override("click", ".menu-toggle", function(t) {
                return function() {
                    var e, n;
                    return (e = $(".scroller")).css({
                        overflow: "hidden"
                    }),
                    setTimeout(function() {
                        return e.css({
                            overflow: ""
                        })
                    }, 10),
                    t.el.toggleClass(t.klass),
                    t.toggleButton.attr("aria-expanded", null != (n = "false" === t.toggleButton.attr("aria-expanded")) ? n : {
                        "true": !1
                    }),
                    t.a11yChanges()
                }
            }(this))
        }
        return t.prototype.close = function() {
            return this.el.removeClass(this.klass),
            this.toggleButton.attr("aria-expanded", "false"),
            $(".global-menu").attr("aria-hidden", "false"),
            $("main.main-container").attr("aria-hidden", "false"),
            $(".header").scrollTop(0)
        }
        ,
        t.prototype.a11yChanges = function() {
            return "false" === this.toggleButton.attr("aria-expanded") ? ($(".global-menu").attr("aria-hidden", "true"),
            $(".global-menu a, .global-menu button").attr("tabindex", "-1"),
            $("main.main-container").attr("aria-hidden", "false")) : ($(".global-menu").attr("aria-hidden", "false"),
            $(".global-menu a, .global-menu button").removeAttr("tabindex"),
            $("main.main-container").attr("aria-hidden", "true"))
        }
        ,
        t
    }(),
    $(document).ready(function() {
        return Distiller.expandableHeader || (Distiller.expandableHeader = new Distiller.ExpandableHeader)
    })
}
.call(this),
function() {
    Distiller.FlashMessageController = function() {
        function t() {
            var t;
            this.container = $(".flash-message-alert"),
            void 0 !== this.container.data("initial-message") && this.flashMessage(this.container.data("initial-message")),
            Distiller.bind("flashMessage", (t = this,
            function(e, n) {
                return t.flashMessage(n.message)
            }
            ))
        }
        return t.prototype.FLASH_MESSAGE_DURATION = 1e4,
        t.prototype.appendMessage = function(t) {
            return this.container.append("<h4 class='message tertiary-headline'>" + t + "</h4>")
        }
        ,
        t.prototype.hideMessage = function() {
            return this.container.hasClass("visible") && this.container.removeClass("visible"),
            this.container.empty()
        }
        ,
        t.prototype.flashMessage = function(t) {
            var e;
            return this.container.addClass("visible"),
            this.appendMessage(t),
            this.container.mouseover((e = this,
            function() {
                return e.hideMessage()
            }
            )),
            this.container.click(function(t) {
                return function() {
                    return t.hideMessage()
                }
            }(this)),
            window.setTimeout(function(t) {
                return function() {
                    return t.hideMessage()
                }
            }(this), this.FLASH_MESSAGE_DURATION)
        }
        ,
        t
    }(),
    $(document).ready(function() {
        return Distiller.flashMessageController || (Distiller.flashMessageController = new Distiller.FlashMessageController)
    })
}
.call(this),
function() {
    Distiller.FlavorProfileChart = function() {
        function t(t) {
            var e, n, i;
            for (e in this.el = t,
            this.names = [],
            this.flavor_profile = this.el.data("flavors"),
            n = this.flavor_profile)
                n[e],
                this.names = this.names.concat(e);
            this.strokeColor = Distiller.SpiritFamilyColor.primaryForContext(this.el),
            $(window).resize((i = this,
            function() {
                return i.draw(),
                i._refreshRendering()
            }
            )),
            this.draw()
        }
        return t.prototype.margin_y = 20,
        t.prototype.margin_x = 24,
        t.prototype.labelHeight = 50,
        t.prototype.strokeWidth = 5,
        t.prototype.draw = function() {
            return this.setCanvasSize(),
            this.calculateOffsets(),
            this.buildChart(),
            this.drawLabels()
        }
        ,
        t.prototype._refreshRendering = function() {
            return this.el.hide(),
            Distiller.window().setTimeout((t = this,
            function() {
                return t.el.show()
            }
            ), 0);
            var t
        }
        ,
        t.prototype.buildChart = function() {
            var t;
            return (t = this.calculatePoints()).strokeStyle = this.strokeColor,
            t.strokeWidth = this.strokeWidth,
            this.el.drawBezier(t)
        }
        ,
        t.prototype.setCanvasSize = function() {
            return this.el.attr("width", this.el.parent().width())
        }
        ,
        t.prototype.calculateOffsets = function() {
            return this.height = this.el.height(),
            this.chartHeight = this.height - this.labelHeight - this.margin_y,
            this.width = this.el.width() - 2 * this.margin_x,
            this.xspace = Math.floor(this.width / (this.names.length - 1))
        }
        ,
        t.prototype.calculatePoints = function() {
            var t, e, n, i, r, o, s, a, l, u;
            for (e = this.xspace / 3,
            r = {},
            t = 1,
            n = a = 0,
            l = (u = this.names).length; a < l; n = ++a)
                i = u[n],
                o = this.getXPos(n),
                s = this.getYPos(this.flavor_profile[i]),
                r["x" + (n + 1)] = o,
                r["y" + (n + 1)] = s,
                n > 0 && (r["cx" + t] = o - e,
                r["cy" + t] = s,
                t++),
                n < this.names.length - 1 && (r["cx" + t] = o + e,
                r["cy" + t] = s,
                t++);
            return r
        }
        ,
        t.prototype.drawLabels = function() {
            var t, e, n, i, r, o, s, a, l, u, c;
            for (t = this.width < 400 ? "0.6em" : "1em",
            c = [],
            e = a = 0,
            l = (u = this.names).length; a < l; e = ++a)
                n = u[e],
                s = e % 2 == 0 ? 20 : 0,
                r = this.getXPos(e),
                o = this.height - this.labelHeight + s,
                i = this.displayText(n),
                this.drawGraphLine(r, o, this.getYPos(this.flavor_profile[n])),
                c.push(this.el.drawText({
                    fillStyle: this.el.data("label-color") || "#fff",
                    x: r,
                    y: o,
                    fromCenter: !0,
                    text: i,
                    fontFamily: "AzoSans",
                    fontSize: t
                }));
            return c
        }
        ,
        t.prototype.getXPos = function(t) {
            return t * this.xspace + this.margin_x
        }
        ,
        t.prototype.getYPos = function(t) {
            return (1 - .01 * t) * this.chartHeight + this.strokeWidth
        }
        ,
        t.prototype.drawGraphLine = function(t, e, n) {
            return this.el.drawLine({
                x1: t,
                y1: e - 10,
                x2: t,
                y2: n - this.strokeWidth / 2,
                strokeStyle: this.strokeColor,
                strokeWidth: 1
            })
        }
        ,
        t.prototype.displayText = function(t) {
            return "full_bodied" === t ? "FULL" : t.replace("_", " ").toUpperCase()
        }
        ,
        t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-flavor-profile-chart")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.FlavorProfileChart($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.HideableModal = function() {
        function t(t) {
            var e;
            this.el = t,
            this.el.find(".js-modal-close").click((e = this,
            function() {
                return e._hide()
            }
            )),
            this.el.click(function(t) {
                return function(e) {
                    if ($(e.target).is(t.el))
                        return t._hide()
                }
            }(this)),
            $(document).on("click", "body", function(t) {
                return function(e) {
                    if (t.el.is($(e.target)))
                        return $(".js-toggle-modal").removeClass("active"),
                        t._hide(),
                        t.el.trigger("hide-modal")
                }
            }(this)),
            $(document).on("click", ".js-modal-close", function(t) {
                return function() {
                    return $(".js-toggle-modal").removeClass("active"),
                    t._hide(),
                    t.el.trigger("hide-modal")
                }
            }(this)),
            $(".js-show-modal").click(function(t) {
                return function(e) {
                    if (e.stopPropagation(),
                    t.el.is($(e.target).closest(".js-show-modal").data("modal-selector")))
                        return t._show()
                }
            }(this)),
            $(".js-toggle-modal").click(function(t) {
                return function(e) {
                    var n;
                    if (e.stopPropagation(),
                    n = $(e.target).closest(".js-toggle-modal"),
                    t.el.is($(e.target).closest(".js-toggle-modal").data("modal-selector")))
                        return t.el.is(":visible") ? (n.removeClass("active"),
                        t._hide()) : (n.addClass("active"),
                        t._show())
                }
            }(this))
        }
        return t.prototype._hide = function() {
            return this.el.hide()
        }
        ,
        t.prototype._show = function() {
            return this.el.show()
        }
        ,
        t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-hideable-modal")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.HideableModal($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.ImageField = function() {
        function t(t) {
            var e;
            this.el = t,
            this.el.on("change", "input", (e = this,
            function(t, n) {
                return Distiller.ImageData.readFromInput(n || t.target, function(t) {
                    return e.newAvatar = t,
                    e.el.removeClass("empty"),
                    e.newAvatar.setAsBackground(e.el)
                })
            }
            ))
        }
        return t
    }(),
    jQuery(function(t) {
        var e, n, i, r, o;
        for (o = [],
        n = 0,
        i = (r = t(".js-image-field")).length; n < i; n++)
            e = r[n],
            o.push(new Distiller.ImageField(t(e)));
        return o
    })
}
.call(this),
function() {
    Distiller.Learn = function() {
        function t() {
            Distiller.override("click", ".header-container", function(t) {
                return t.parent(".content-area").toggleClass("open")
            })
        }
        return t.prototype.metaContent = function() {
            return {
                title: "A Story Of Spirits",
                description: "History written on the bottle rarely matches the history in the bottle. Distiller dives beyond the label."
            }
        }
        ,
        t
    }(),
    $(document).ready(function() {
        return Distiller.learn || (Distiller.learn = new Distiller.Learn)
    })
}
.call(this),
function() {
    Distiller.LikeButtons = function() {
        function t(t) {
            var e;
            this.el = t,
            Distiller.handleAjaxOn(this.el.find(".js-create-like"), (e = this,
            function(t, n) {
                return e._setAsLiked(n.like),
                e._increaseCountOnPage()
            }
            )),
            Distiller.handleAjaxOn(this.el.find(".js-delete-like"), function(t) {
                return function() {
                    return t._setAsUnliked(),
                    t._decreaseCountOnPage()
                }
            }(this))
        }
        return t.prototype._setAsLiked = function(t) {
            var e;
            return this.el.addClass("current-likes"),
            e = this.el.data("taste-id"),
            this.el.find(".js-delete-like").attr("href", "/api/tastes/" + e + "/likes/" + t.id)
        }
        ,
        t.prototype._setAsUnliked = function() {
            return this.el.removeClass("current-likes")
        }
        ,
        t.prototype._increaseCountOnPage = function() {
            var t;
            return t = this._getLikesCount(),
            this._updatePageAfterLikeEvent(t + 1)
        }
        ,
        t.prototype._decreaseCountOnPage = function() {
            var t;
            return t = this._getLikesCount(),
            this._updatePageAfterLikeEvent(t - 1)
        }
        ,
        t.prototype._updatePageAfterLikeEvent = function(t) {
            var e;
            return e = t + " Like" + (1 === t ? "" : "s"),
            this.el.find("button.like-count.js-show-modal")[0].innerHTML = e
        }
        ,
        t.prototype._getLikesCount = function() {
            var t, e;
            return e = this.el.find("button.like-count.js-show-modal")[0].innerHTML.split(" "),
            t = parseInt(e[0]),
            isNaN(t) ? t = 0 : t
        }
        ,
        t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-like-button-container")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.LikeButtons($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.MentionCompatibleInput = function() {
        function t(t, e) {
            null == e && (e = []),
            t.atwho({
                at: "@",
                data: e,
                callbacks: {
                    remoteFilter: function(t, e) {
                        return $.ajax({
                            type: "get",
                            url: "/api/users/mentionable_names",
                            dataType: "json",
                            data: {
                                term: t,
                                limit: 20
                            },
                            success: function(t) {
                                return e(t)
                            }
                        })
                    },
                    beforeReposition: function(t) {
                        var e;
                        if ((Distiller.UserAgent.isIOS() || Distiller.UserAgent.isAndroid()) && (e = this.$el.children(),
                        this.$inputor.offset().top - $(window).scrollTop() > 2 * e.height()))
                            return t.left = this.rect().left,
                            t.top = this.rect().top - this.$el.children().height()
                    }
                }
            })
        }
        return t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $("[data-mentionable=true], .js-mentionable-input")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.MentionCompatibleInput($(t)));
        return r
    })
}
.call(this),
function() {
    jQuery(function(t) {
        return t(".timeago").timeago()
    })
}
.call(this),
function() {
    Distiller.PageFamily = function() {
        function t() {}
        return t.set = function(t) {
            return this.clear(),
            $("body").addClass(t + "-selected")
        }
        ,
        t.setByGlobalDefault = function() {
            return this.set(Distiller.defaultSpiritFamily)
        }
        ,
        t.clear = function() {
            var t, e, n, i, r;
            for (r = [],
            n = 0,
            i = (t = ["whiskey-selected", "brandy-selected", "agave-selected", "sugarcane-selected", "gin-selected", "vodka-selected", "liqueur-selected", "other-selected"]).length; n < i; n++)
                e = t[n],
                r.push($("body").removeClass(e));
            return r
        }
        ,
        t
    }()
}
.call(this),
function() {
    Distiller.PreValidatedForm = function() {
        function t(t) {
            var e;
            this.el = t,
            this.validate(),
            this.el.change((e = this,
            function() {
                return e.validate()
            }
            )),
            this.el.keyup(function(t) {
                return function() {
                    return t.validate()
                }
            }(this))
        }
        return t.prototype.validate = function() {
            return this.valid() ? this.el.find("input[type=submit]").attr("disabled", !1) : this.el.find("input[type=submit]").attr("disabled", "disabled")
        }
        ,
        t.prototype.valid = function() {
            return !!this._validateFields("presence", function(t) {
                return !!t.val() && t.val().length > 0
            }) && !!this._validateFields("email", (t = this,
            function(e) {
                return !e.val() || t._validateEmail(e.val())
            }
            ));
            var t
        }
        ,
        t.prototype._validateFields = function(t, e) {
            var n, i, r, o;
            for (i = 0,
            r = (o = this.el.find("input, select, textarea")).length; i < r; i++)
                if (n = o[i],
                $(n).is("[data-validate~=" + t + "]") && !e($(n)))
                    return !1;
            return !0
        }
        ,
        t.prototype._validateEmail = function(t) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())
        }
        ,
        t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-pre-validated-form")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.PreValidatedForm($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.QueryForm = function() {
        function t(t) {
            var e;
            this.el = t,
            this.el.data("autosubmit") && this.el.find("input, select").change((e = this,
            function() {
                return e.el.submit()
            }
            )),
            this.el.find("input, select").keypress(function(t) {
                return function(e) {
                    if (13 === e.keyCode)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.el.submit()
                }
            }(this)),
            this.el.submit(function(t) {
                return function(e) {
                    var n;
                    return e.preventDefault(),
                    n = $.deparam(t.el.serialize()),
                    t._submitState(n)
                }
            }(this)),
            this.el.find(".js-clear-query-form").click(function(t) {
                return function(e) {
                    var n, i;
                    for (i in e.preventDefault(),
                    n = $.deparam(t.el.serialize()))
                        n[i],
                        n[i] = void 0;
                    return t._submitState(n)
                }
            }(this)),
            this.el.find(".js-submit-query-form").click(function(t) {
                return function(e) {
                    return e.preventDefault(),
                    t.el.submit()
                }
            }(this))
        }
        return t.prototype._submitState = function(t) {
            var e, n, i, r, o, s;
            if (n = Distiller.getQueryString(),
            i = _.extend({}, n, t),
            e = this.el.data("clearable"))
                for (r = 0,
                o = (s = e.split(",")).length; r < o; r++)
                    i[s[r]] = void 0;
            return i = _.pick(i, _.identity),
            Distiller.setQueryString(i)
        }
        ,
        t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-query-form")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.QueryForm($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.RedirectSelect = function() {
        function t(t) {
            var e;
            this.el = t,
            this.el.change((e = this,
            function(t) {
                return t.preventDefault(),
                $(location).attr("href", e.el.val())
            }
            ))
        }
        return t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-redirect-select")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.RedirectSelect($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.SkipLinksManager = function() {
        function t() {
            $("#skip-links").on("focusin", "a", function(t) {
                return $(t.target).addClass("visible")
            }).on("focusout", "a", function(t) {
                return $(t.target).removeClass("visible")
            }).on("click", "a", function(t) {
                var e;
                return t.preventDefault(),
                e = $($(t.target).attr("href")),
                Distiller.focus(e[0])
            })
        }
        return t
    }(),
    Distiller.skipLinksManager || (Distiller.skipLinksManager = new Distiller.SkipLinksManager)
}
.call(this),
function() {
    Distiller.SocialLinkController = function() {
        function t() {
            var t, n;
            for (n in e)
                t = e[n],
                this._bind(n, t)
        }
        var e;
        return e = {
            "[data-behavior=facebook-share]": {
                name: "fbshare"
            },
            "[data-behavior=tweet]": {
                name: "twitter"
            },
            "[data-behavior=twitter-follow]": {
                name: "twitter"
            }
        },
        t.prototype._bind = function(t, e) {
            return Distiller.override("click", t, (n = this,
            function(t) {
                return n._openShareWindow(t.attr("href"), e.name)
            }
            ));
            var n
        }
        ,
        t.prototype._openShareWindow = function(t, e) {
            return Distiller.window().open(t, e, "width=640,height=320")
        }
        ,
        t
    }(),
    Distiller.socialLinkController = new Distiller.SocialLinkController
}
.call(this),
function() {
    Distiller.SpiritFamilySelectObserver = function() {
        function t() {
            this.setInitialValueFromCookie(),
            this.setupBindings()
        }
        return t.prototype.COOKIE_NAME = "distiller_default_spirit_family",
        t.prototype.setInitialValueFromCookie = function() {
            if ($.cookie(this.COOKIE_NAME))
                return Distiller.defaultSpiritFamily = $.cookie(this.COOKIE_NAME)
        }
        ,
        t.prototype.setupBindings = function() {
            return $("body").on("click", ".js-spirit-family-select", function(t) {
                return $(t.target).closest(".js-spirit-family-select").toggleClass("spirit-family-select--open")
            }),
            $("body").on("click", ".js-select-spirit-family", (t = this,
            function(e) {
                var n, i, r;
                return i = $(e.target).closest(".js-select-spirit-family"),
                $(".js-select-spirit-family").removeClass("selected"),
                i.addClass("selected"),
                r = i.data("value"),
                n = !!i.data("async"),
                t.syncValue(r, n)
            }
            ));
            var t
        }
        ,
        t.prototype.syncValue = function(t, e) {
            if (Distiller.defaultSpiritFamily !== t)
                return t ? $.cookie(this.COOKIE_NAME, t, {
                    expires: 365
                }) : ($.cookie(this.COOKIE_NAME, null),
                $.removeCookie(this.COOKIE_NAME)),
                e ? (Distiller.defaultSpiritFamily = t,
                Distiller.PageFamily.setByGlobalDefault(),
                window.App ? App.trigger("defaultSpiritFamilyChanged") : void 0) : Distiller.window().location = window.location.pathname
        }
        ,
        t
    }(),
    $(document).ready(function() {
        return new Distiller.SpiritFamilySelectObserver
    })
}
.call(this),
function() {
    Distiller.StarSlider = function() {
        function t(t) {
            var e;
            this.form = $(".taste-form").first(),
            this.el = t,
            this.select = t.find("select"),
            this.slider = $('<div class="js-star-slider">\n  <div class="star-selector__handle ui-slider-handle">\n    <i class="icomoon-review-star"></i>\n  </div>\n</div>'),
            this.slider.insertBefore(this.select).slider({
                min: 1,
                max: this.select.find("option").length,
                range: "min",
                value: this.select[0].selectedIndex + 1,
                slide: (e = this,
                function(t, n) {
                    return e.select[0].selectedIndex = n.value - 1,
                    e._setSelectedStatus(),
                    n.value - 1 > 0 ? e._enableSubmission() : e._disableSubmission()
                }
                )
            }),
            this.select.on("change", function(t) {
                return function() {
                    return t.slider.slider("value", t.select[0].selectedIndex + 1),
                    t._setSelectedStatus(),
                    t.select[0].selectedIndex > 0 ? t._enableSubmission() : t._disableSubmission()
                }
            }(this)),
            _(6).times(function(t) {
                return function() {
                    return t.slider.append('<div class="star-selector__tick"></div>')
                }
            }(this)),
            this._setSelectedStatus()
        }
        return t.prototype._setSelectedStatus = function() {
            return 0 === this.select[0].selectedIndex ? this.el.addClass("unselected") : this.el.removeClass("unselected")
        }
        ,
        t.prototype._disableSubmission = function() {
            return this.form.find("input[type=submit]").attr("disabled", !0)
        }
        ,
        t.prototype._enableSubmission = function() {
            return this.form.find("input[type=submit]").attr("disabled", !1)
        }
        ,
        t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-star-selector")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.StarSlider($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.TasteCommentForm = function() {
        function t(t) {
            var e, n;
            this.el = t,
            this._disableSubmission(),
            (e = this.el.find("input#comment_body")).on("keyup", (n = this,
            function() {
                return e.val().length > 0 ? n._enableSubmission() : n._disableSubmission()
            }
            )),
            Distiller.handleAjaxOn(this.el, function(t) {
                return function(n, i) {
                    return t._buildNewComment(i.comment),
                    e.val(""),
                    setTimeout(function() {
                        return t._disableSubmission()
                    }, 0)
                }
            }(this))
        }
        return t.prototype._disableSubmission = function() {
            return this.el.find("input[type=submit]").attr("disabled", !0)
        }
        ,
        t.prototype._enableSubmission = function() {
            return this.el.find("input[type=submit]").attr("disabled", !1)
        }
        ,
        t.prototype._buildNewComment = function(t) {
            var e;
            return e = Distiller.templates.comment(t, this.el.attr("action")),
            this.el.closest(".js-comment-container").find(".js-comment-list").prepend(e),
            this.el.data("is-pro-user") && e.find(".avatar-container").append("<div class='pro-badge'><div class='crown white'></div></div>"),
            new Distiller.Comment(e)
        }
        ,
        t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-taste-comment-form")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.TasteCommentForm($(t)));
        return r
    })
}
.call(this),
function() {
    Distiller.UserListAddLink = function() {
        function t(t) {
            var e;
            this.el = t,
            Distiller.handleAjaxOn(this.el, (e = this,
            function() {
                return e.el.parent().find(".js-user-list-view-link").css("display", "inline-block"),
                e.el.hide()
            }
            ))
        }
        return t
    }(),
    $(document).ready(function() {
        var t, e, n, i, r;
        for (r = [],
        e = 0,
        n = (i = $(".js-user-list-add-link")).length; e < n; e++)
            t = i[e],
            r.push(new Distiller.UserListAddLink($(t)));
        return r
    })
}
.call(this),
function() {}
.call(this);
