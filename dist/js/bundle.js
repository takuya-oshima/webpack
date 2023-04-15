!(function () {
  var e = {
      755: function (e, t) {
        var n;
        /*!
         * jQuery JavaScript Library v3.6.4
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2023-03-08T15:28Z
         */ !(function (t, n) {
          'use strict';
          'object' == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document) throw new Error('jQuery requires a window with a document');
                    return n(e);
                  })
            : n(t);
        })('undefined' != typeof window ? window : this, function (r, i) {
          'use strict';
          var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            u = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            l = o.push,
            c = o.indexOf,
            f = {},
            p = f.toString,
            d = f.hasOwnProperty,
            h = d.toString,
            g = h.call(Object),
            v = {},
            m = function (e) {
              return 'function' == typeof e && 'number' != typeof e.nodeType && 'function' != typeof e.item;
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            x = r.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              i,
              o = (n = n || x).createElement('script');
            if (((o.text = e), t))
              for (r in b) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function T(e) {
            return null == e
              ? e + ''
              : 'object' == typeof e || 'function' == typeof e
              ? f[p.call(e)] || 'object'
              : typeof e;
          }
          var C = '3.6.4',
            S = function (e, t) {
              return new S.fn.init(e, t);
            };
          function k(e) {
            var t = !!e && 'length' in e && e.length,
              n = T(e);
            return !m(e) && !y(e) && ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e));
          }
          (S.fn = S.prototype =
            {
              jquery: C,
              constructor: S,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
              },
              pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return S.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  S.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: o.sort,
              splice: o.splice,
            }),
            (S.extend = S.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  'boolean' == typeof s && ((l = s), (s = arguments[a] || {}), a++),
                    'object' == typeof s || m(s) || (s = {}),
                    a === u && ((s = this), a--);
                  a < u;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (r = e[t]),
                        '__proto__' !== t &&
                          s !== r &&
                          (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = s[t]),
                              (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}),
                              (i = !1),
                              (s[t] = S.extend(l, o, r)))
                            : void 0 !== r && (s[t] = r));
                return s;
              }),
            S.extend({
              expando: 'jQuery' + (C + Math.random()).replace(/\D/g, ''),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || '[object Object]' !== p.call(e)) &&
                  (!(t = s(e)) ||
                    ('function' == typeof (n = d.call(t, 'constructor') && t.constructor) && h.call(n) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (k(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return null != e && (k(Object(e)) ? S.merge(n, 'string' == typeof e ? [e] : e) : l.call(n, e)), n;
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  s = [];
                if (k(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return u(s);
              },
              guid: 1,
              support: v,
            }),
            'function' == typeof Symbol && (S.fn[Symbol.iterator] = o[Symbol.iterator]),
            S.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
              f['[object ' + t + ']'] = t.toLowerCase();
            });
          var E =
            /*!
             * Sizzle CSS Selector Engine v2.3.10
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2023-02-14
             */
            (function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v,
                m,
                y,
                x,
                b = 'sizzle' + 1 * new Date(),
                w = e.document,
                T = 0,
                C = 0,
                S = ue(),
                k = ue(),
                E = ue(),
                A = ue(),
                N = function (e, t) {
                  return e === t && (f = !0), 0;
                },
                j = {}.hasOwnProperty,
                D = [],
                q = D.pop,
                L = D.push,
                H = D.push,
                O = D.slice,
                P = function (e, t) {
                  for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                  return -1;
                },
                R =
                  'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                M = '[\\x20\\t\\r\\n\\f]',
                I = '(?:\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
                $ =
                  '\\[' +
                  M +
                  '*(' +
                  I +
                  ')(?:' +
                  M +
                  '*([*^$|!~]?=)' +
                  M +
                  '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                  I +
                  '))|)' +
                  M +
                  '*\\]',
                _ =
                  ':(' +
                  I +
                  ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                  $ +
                  ')*)|.*)\\)|)',
                W = new RegExp(M + '+', 'g'),
                F = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
                B = new RegExp('^' + M + '*,' + M + '*'),
                z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
                U = new RegExp(M + '|>'),
                X = new RegExp(_),
                V = new RegExp('^' + I + '$'),
                G = {
                  ID: new RegExp('^#(' + I + ')'),
                  CLASS: new RegExp('^\\.(' + I + ')'),
                  TAG: new RegExp('^(' + I + '|[*])'),
                  ATTR: new RegExp('^' + $),
                  PSEUDO: new RegExp('^' + _),
                  CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                      M +
                      '*(even|odd|(([+-]|)(\\d*)n|)' +
                      M +
                      '*(?:([+-]|)' +
                      M +
                      '*(\\d+)|))' +
                      M +
                      '*\\)|)',
                    'i'
                  ),
                  bool: new RegExp('^(?:' + R + ')$', 'i'),
                  needsContext: new RegExp(
                    '^' +
                      M +
                      '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                      M +
                      '*((?:-\\d)?\\d*)' +
                      M +
                      '*\\)|)(?=[^-]|$)',
                    'i'
                  ),
                },
                Y = /HTML$/i,
                Q = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
                ne = function (e, t) {
                  var n = '0x' + e.slice(1) - 65536;
                  return (
                    t ||
                    (n < 0
                      ? String.fromCharCode(n + 65536)
                      : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
                  );
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function (e, t) {
                  return t
                    ? '\0' === e
                      ? '�'
                      : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
                    : '\\' + e;
                },
                oe = function () {
                  p();
                },
                se = be(
                  function (e) {
                    return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
                  },
                  { dir: 'parentNode', next: 'legend' }
                );
              try {
                H.apply((D = O.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
              } catch (e) {
                H = {
                  apply: D.length
                    ? function (e, t) {
                        L.apply(e, O.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                        e.length = n - 1;
                      },
                };
              }
              function ae(e, t, r, i) {
                var o,
                  a,
                  l,
                  c,
                  f,
                  h,
                  m,
                  y = t && t.ownerDocument,
                  w = t ? t.nodeType : 9;
                if (((r = r || []), 'string' != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return r;
                if (!i && (p(t), (t = t || d), g)) {
                  if (11 !== w && (f = Z.exec(e)))
                    if ((o = f[1])) {
                      if (9 === w) {
                        if (!(l = t.getElementById(o))) return r;
                        if (l.id === o) return r.push(l), r;
                      } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                    } else {
                      if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                      if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                        return H.apply(r, t.getElementsByClassName(o)), r;
                    }
                  if (
                    n.qsa &&
                    !A[e + ' '] &&
                    (!v || !v.test(e)) &&
                    (1 !== w || 'object' !== t.nodeName.toLowerCase())
                  ) {
                    if (((m = e), (y = t), 1 === w && (U.test(e) || z.test(e)))) {
                      for (
                        ((y = (ee.test(e) && me(t.parentNode)) || t) === t && n.scope) ||
                          ((c = t.getAttribute('id')) ? (c = c.replace(re, ie)) : t.setAttribute('id', (c = b))),
                          a = (h = s(e)).length;
                        a--;

                      )
                        h[a] = (c ? '#' + c : ':scope') + ' ' + xe(h[a]);
                      m = h.join(',');
                    }
                    try {
                      return H.apply(r, y.querySelectorAll(m)), r;
                    } catch (t) {
                      A(e, !0);
                    } finally {
                      c === b && t.removeAttribute('id');
                    }
                  }
                }
                return u(e.replace(F, '$1'), t, r, i);
              }
              function ue() {
                var e = [];
                return function t(n, i) {
                  return e.push(n + ' ') > r.cacheLength && delete t[e.shift()], (t[n + ' '] = i);
                };
              }
              function le(e) {
                return (e[b] = !0), e;
              }
              function ce(e) {
                var t = d.createElement('fieldset');
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function fe(e, t) {
                for (var n = e.split('|'), i = n.length; i--; ) r.attrHandle[n[i]] = t;
              }
              function pe(e, t) {
                var n = t && e,
                  r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function de(e) {
                return function (t) {
                  return 'input' === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function he(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ('input' === n || 'button' === n) && t.type === e;
                };
              }
              function ge(e) {
                return function (t) {
                  return 'form' in t
                    ? t.parentNode && !1 === t.disabled
                      ? 'label' in t
                        ? 'label' in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                      : t.disabled === e
                    : 'label' in t && t.disabled === e;
                };
              }
              function ve(e) {
                return le(function (t) {
                  return (
                    (t = +t),
                    le(function (n, r) {
                      for (var i, o = e([], n.length, t), s = o.length; s--; ) n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                    })
                  );
                });
              }
              function me(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (t in ((n = ae.support = {}),
              (o = ae.isXML =
                function (e) {
                  var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                  return !Y.test(t || (n && n.nodeName) || 'HTML');
                }),
              (p = ae.setDocument =
                function (e) {
                  var t,
                    i,
                    s = e ? e.ownerDocument || e : w;
                  return s != d && 9 === s.nodeType && s.documentElement
                    ? ((h = (d = s).documentElement),
                      (g = !o(d)),
                      w != d &&
                        (i = d.defaultView) &&
                        i.top !== i &&
                        (i.addEventListener
                          ? i.addEventListener('unload', oe, !1)
                          : i.attachEvent && i.attachEvent('onunload', oe)),
                      (n.scope = ce(function (e) {
                        return (
                          h.appendChild(e).appendChild(d.createElement('div')),
                          void 0 !== e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length
                        );
                      })),
                      (n.cssHas = ce(function () {
                        try {
                          return d.querySelector(':has(*,:jqfake)'), !1;
                        } catch (e) {
                          return !0;
                        }
                      })),
                      (n.attributes = ce(function (e) {
                        return (e.className = 'i'), !e.getAttribute('className');
                      })),
                      (n.getElementsByTagName = ce(function (e) {
                        return e.appendChild(d.createComment('')), !e.getElementsByTagName('*').length;
                      })),
                      (n.getElementsByClassName = K.test(d.getElementsByClassName)),
                      (n.getById = ce(function (e) {
                        return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                      })),
                      n.getById
                        ? ((r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              return e.getAttribute('id') === t;
                            };
                          }),
                          (r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                              var n = t.getElementById(e);
                              return n ? [n] : [];
                            }
                          }))
                        : ((r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                              return n && n.value === t;
                            };
                          }),
                          (r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                              var n,
                                r,
                                i,
                                o = t.getElementById(e);
                              if (o) {
                                if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                                  if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                              }
                              return [];
                            }
                          })),
                      (r.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName
                              ? t.getElementsByTagName(e)
                              : n.qsa
                              ? t.querySelectorAll(e)
                              : void 0;
                          }
                        : function (e, t) {
                            var n,
                              r = [],
                              i = 0,
                              o = t.getElementsByTagName(e);
                            if ('*' === e) {
                              for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                              return r;
                            }
                            return o;
                          }),
                      (r.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                        }),
                      (m = []),
                      (v = []),
                      (n.qsa = K.test(d.querySelectorAll)) &&
                        (ce(function (e) {
                          var t;
                          (h.appendChild(e).innerHTML =
                            "<a id='" +
                            b +
                            "'></a><select id='" +
                            b +
                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length && v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                            e.querySelectorAll('[selected]').length || v.push('\\[' + M + '*(?:value|' + R + ')'),
                            e.querySelectorAll('[id~=' + b + '-]').length || v.push('~='),
                            (t = d.createElement('input')).setAttribute('name', ''),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length ||
                              v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
                            e.querySelectorAll(':checked').length || v.push(':checked'),
                            e.querySelectorAll('a#' + b + '+*').length || v.push('.#.+[+~]'),
                            e.querySelectorAll('\\\f'),
                            v.push('[\\r\\n\\f]');
                        }),
                        ce(function (e) {
                          e.innerHTML =
                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = d.createElement('input');
                          t.setAttribute('type', 'hidden'),
                            e.appendChild(t).setAttribute('name', 'D'),
                            e.querySelectorAll('[name=d]').length && v.push('name' + M + '*[*^$|!~]?='),
                            2 !== e.querySelectorAll(':enabled').length && v.push(':enabled', ':disabled'),
                            (h.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(':disabled').length && v.push(':enabled', ':disabled'),
                            e.querySelectorAll('*,:x'),
                            v.push(',.*:');
                        })),
                      (n.matchesSelector = K.test(
                        (y =
                          h.matches ||
                          h.webkitMatchesSelector ||
                          h.mozMatchesSelector ||
                          h.oMatchesSelector ||
                          h.msMatchesSelector)
                      )) &&
                        ce(function (e) {
                          (n.disconnectedMatch = y.call(e, '*')), y.call(e, "[s!='']:x"), m.push('!=', _);
                        }),
                      n.cssHas || v.push(':has'),
                      (v = v.length && new RegExp(v.join('|'))),
                      (m = m.length && new RegExp(m.join('|'))),
                      (t = K.test(h.compareDocumentPosition)),
                      (x =
                        t || K.test(h.contains)
                          ? function (e, t) {
                              var n = (9 === e.nodeType && e.documentElement) || e,
                                r = t && t.parentNode;
                              return (
                                e === r ||
                                !(
                                  !r ||
                                  1 !== r.nodeType ||
                                  !(n.contains
                                    ? n.contains(r)
                                    : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                              return !1;
                            }),
                      (N = t
                        ? function (e, t) {
                            if (e === t) return (f = !0), 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                              r ||
                              (1 &
                                (r =
                                  (e.ownerDocument || e) == (t.ownerDocument || t)
                                    ? e.compareDocumentPosition(t)
                                    : 1) ||
                              (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                ? e == d || (e.ownerDocument == w && x(w, e))
                                  ? -1
                                  : t == d || (t.ownerDocument == w && x(w, t))
                                  ? 1
                                  : c
                                  ? P(c, e) - P(c, t)
                                  : 0
                                : 4 & r
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (f = !0), 0;
                            var n,
                              r = 0,
                              i = e.parentNode,
                              o = t.parentNode,
                              s = [e],
                              a = [t];
                            if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                            if (i === o) return pe(e, t);
                            for (n = e; (n = n.parentNode); ) s.unshift(n);
                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                            for (; s[r] === a[r]; ) r++;
                            return r ? pe(s[r], a[r]) : s[r] == w ? -1 : a[r] == w ? 1 : 0;
                          }),
                      d)
                    : d;
                }),
              (ae.matches = function (e, t) {
                return ae(e, null, null, t);
              }),
              (ae.matchesSelector = function (e, t) {
                if ((p(e), n.matchesSelector && g && !A[t + ' '] && (!m || !m.test(t)) && (!v || !v.test(t))))
                  try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                  } catch (e) {
                    A(t, !0);
                  }
                return ae(t, d, null, [e]).length > 0;
              }),
              (ae.contains = function (e, t) {
                return (e.ownerDocument || e) != d && p(e), x(e, t);
              }),
              (ae.attr = function (e, t) {
                (e.ownerDocument || e) != d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                  o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o
                  ? o
                  : n.attributes || !g
                  ? e.getAttribute(t)
                  : (o = e.getAttributeNode(t)) && o.specified
                  ? o.value
                  : null;
              }),
              (ae.escape = function (e) {
                return (e + '').replace(re, ie);
              }),
              (ae.error = function (e) {
                throw new Error('Syntax error, unrecognized expression: ' + e);
              }),
              (ae.uniqueSort = function (e) {
                var t,
                  r = [],
                  i = 0,
                  o = 0;
                if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(N), f)) {
                  for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                  for (; i--; ) e.splice(r[i], 1);
                }
                return (c = null), e;
              }),
              (i = ae.getText =
                function (e) {
                  var t,
                    n = '',
                    r = 0,
                    o = e.nodeType;
                  if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                      if ('string' == typeof e.textContent) return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                  } else for (; (t = e[r++]); ) n += i(t);
                  return n;
                }),
              (r = ae.selectors =
                {
                  cacheLength: 50,
                  createPseudo: le,
                  match: G,
                  attrHandle: {},
                  find: {},
                  relative: {
                    '>': { dir: 'parentNode', first: !0 },
                    ' ': { dir: 'parentNode' },
                    '+': { dir: 'previousSibling', first: !0 },
                    '~': { dir: 'previousSibling' },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(te, ne)),
                        (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                        '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        'nth' === e[1].slice(0, 3)
                          ? (e[3] || ae.error(e[0]),
                            (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                            (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                          : e[3] && ae.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return G.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || '')
                            : n &&
                              X.test(n) &&
                              (t = s(n, !0)) &&
                              (t = n.indexOf(')', n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(te, ne).toLowerCase();
                      return '*' === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = S[e + ' '];
                      return (
                        t ||
                        ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                          S(e, function (e) {
                            return t.test(
                              ('string' == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                                ''
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (r) {
                        var i = ae.attr(r, e);
                        return null == i
                          ? '!=' === t
                          : !t ||
                              ((i += ''),
                              '=' === t
                                ? i === n
                                : '!=' === t
                                ? i !== n
                                : '^=' === t
                                ? n && 0 === i.indexOf(n)
                                : '*=' === t
                                ? n && i.indexOf(n) > -1
                                : '$=' === t
                                ? n && i.slice(-n.length) === n
                                : '~=' === t
                                ? (' ' + i.replace(W, ' ') + ' ').indexOf(n) > -1
                                : '|=' === t && (i === n || i.slice(0, n.length + 1) === n + '-'));
                      };
                    },
                    CHILD: function (e, t, n, r, i) {
                      var o = 'nth' !== e.slice(0, 3),
                        s = 'last' !== e.slice(-4),
                        a = 'of-type' === t;
                      return 1 === r && 0 === i
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, u) {
                            var l,
                              c,
                              f,
                              p,
                              d,
                              h,
                              g = o !== s ? 'nextSibling' : 'previousSibling',
                              v = t.parentNode,
                              m = a && t.nodeName.toLowerCase(),
                              y = !u && !a,
                              x = !1;
                            if (v) {
                              if (o) {
                                for (; g; ) {
                                  for (p = t; (p = p[g]); )
                                    if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                  h = g = 'only' === e && !h && 'nextSibling';
                                }
                                return !0;
                              }
                              if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                                for (
                                  x =
                                    (d =
                                      (l =
                                        (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] ||
                                        [])[0] === T && l[1]) && l[2],
                                    p = d && v.childNodes[d];
                                  (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                                )
                                  if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [T, d, x];
                                    break;
                                  }
                              } else if (
                                (y &&
                                  (x = d =
                                    (l =
                                      (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && l[1]),
                                !1 === x)
                              )
                                for (
                                  ;
                                  (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                                  ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) ||
                                    !++x ||
                                    (y &&
                                      ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                    p !== t));

                                );
                              return (x -= i) === r || (x % r == 0 && x / r >= 0);
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var n,
                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error('unsupported pseudo: ' + e);
                      return i[b]
                        ? i(t)
                        : i.length > 1
                        ? ((n = [e, e, '', t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                            ? le(function (e, n) {
                                for (var r, o = i(e, t), s = o.length; s--; ) e[(r = P(e, o[s]))] = !(n[r] = o[s]);
                              })
                            : function (e) {
                                return i(e, 0, n);
                              })
                        : i;
                    },
                  },
                  pseudos: {
                    not: le(function (e) {
                      var t = [],
                        n = [],
                        r = a(e.replace(F, '$1'));
                      return r[b]
                        ? le(function (e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, i, o) {
                            return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                          };
                    }),
                    has: le(function (e) {
                      return function (t) {
                        return ae(e, t).length > 0;
                      };
                    }),
                    contains: le(function (e) {
                      return (
                        (e = e.replace(te, ne)),
                        function (t) {
                          return (t.textContent || i(t)).indexOf(e) > -1;
                        }
                      );
                    }),
                    lang: le(function (e) {
                      return (
                        V.test(e || '') || ae.error('unsupported lang: ' + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                              return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === h;
                    },
                    focus: function (e) {
                      return (
                        e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
                    },
                    selected: function (e) {
                      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                      return J.test(e.nodeName);
                    },
                    input: function (e) {
                      return Q.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ('input' === t && 'button' === e.type) || 'button' === t;
                    },
                    text: function (e) {
                      var t;
                      return (
                        'input' === e.nodeName.toLowerCase() &&
                        'text' === e.type &&
                        (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                      );
                    },
                    first: ve(function () {
                      return [0];
                    }),
                    last: ve(function (e, t) {
                      return [t - 1];
                    }),
                    eq: ve(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: ve(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: ve(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: ve(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                      return e;
                    }),
                    gt: ve(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                      return e;
                    }),
                  },
                }),
              (r.pseudos.nth = r.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                r.pseudos[t] = de(t);
              for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
              function ye() {}
              function xe(e) {
                for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
                return r;
              }
              function be(e, t, n) {
                var r = t.dir,
                  i = t.next,
                  o = i || r,
                  s = n && 'parentNode' === o,
                  a = C++;
                return t.first
                  ? function (t, n, i) {
                      for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
                      return !1;
                    }
                  : function (t, n, u) {
                      var l,
                        c,
                        f,
                        p = [T, a];
                      if (u) {
                        for (; (t = t[r]); ) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                      } else
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || s)
                            if (
                              ((c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
                              i && i === t.nodeName.toLowerCase())
                            )
                              t = t[r] || t;
                            else {
                              if ((l = c[o]) && l[0] === T && l[1] === a) return (p[2] = l[2]);
                              if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                            }
                      return !1;
                    };
              }
              function we(e) {
                return e.length > 1
                  ? function (t, n, r) {
                      for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function Te(e, t, n, r, i) {
                for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
                  (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
                return s;
              }
              function Ce(e, t, n, r, i, o) {
                return (
                  r && !r[b] && (r = Ce(r)),
                  i && !i[b] && (i = Ce(i, o)),
                  le(function (o, s, a, u) {
                    var l,
                      c,
                      f,
                      p = [],
                      d = [],
                      h = s.length,
                      g =
                        o ||
                        (function (e, t, n) {
                          for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                          return n;
                        })(t || '*', a.nodeType ? [a] : a, []),
                      v = !e || (!o && t) ? g : Te(g, p, e, a, u),
                      m = n ? (i || (o ? e : h || r) ? [] : s) : v;
                    if ((n && n(v, m, a, u), r))
                      for (l = Te(m, d), r(l, [], a, u), c = l.length; c--; ) (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                    if (o) {
                      if (i || e) {
                        if (i) {
                          for (l = [], c = m.length; c--; ) (f = m[c]) && l.push((v[c] = f));
                          i(null, (m = []), l, u);
                        }
                        for (c = m.length; c--; ) (f = m[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(s[l] = f));
                      }
                    } else (m = Te(m === s ? m.splice(h, m.length) : m)), i ? i(null, s, m, u) : H.apply(s, m);
                  })
                );
              }
              function Se(e) {
                for (
                  var t,
                    n,
                    i,
                    o = e.length,
                    s = r.relative[e[0].type],
                    a = s || r.relative[' '],
                    u = s ? 1 : 0,
                    c = be(
                      function (e) {
                        return e === t;
                      },
                      a,
                      !0
                    ),
                    f = be(
                      function (e) {
                        return P(t, e) > -1;
                      },
                      a,
                      !0
                    ),
                    p = [
                      function (e, n, r) {
                        var i = (!s && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return (t = null), i;
                      },
                    ];
                  u < o;
                  u++
                )
                  if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
                  else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                      for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                      return Ce(
                        u > 1 && we(p),
                        u > 1 &&
                          xe(e.slice(0, u - 1).concat({ value: ' ' === e[u - 2].type ? '*' : '' })).replace(F, '$1'),
                        n,
                        u < i && Se(e.slice(u, i)),
                        i < o && Se((e = e.slice(i))),
                        i < o && xe(e)
                      );
                    }
                    p.push(n);
                  }
                return we(p);
              }
              return (
                (ye.prototype = r.filters = r.pseudos),
                (r.setFilters = new ye()),
                (s = ae.tokenize =
                  function (e, t) {
                    var n,
                      i,
                      o,
                      s,
                      a,
                      u,
                      l,
                      c = k[e + ' '];
                    if (c) return t ? 0 : c.slice(0);
                    for (a = e, u = [], l = r.preFilter; a; ) {
                      for (s in ((n && !(i = B.exec(a))) || (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                      (n = !1),
                      (i = z.exec(a)) &&
                        ((n = i.shift()), o.push({ value: n, type: i[0].replace(F, ' ') }), (a = a.slice(n.length))),
                      r.filter))
                        !(i = G[s].exec(a)) ||
                          (l[s] && !(i = l[s](i))) ||
                          ((n = i.shift()), o.push({ value: n, type: s, matches: i }), (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? ae.error(e) : k(e, u).slice(0);
                  }),
                (a = ae.compile =
                  function (e, t) {
                    var n,
                      i = [],
                      o = [],
                      a = E[e + ' '];
                    if (!a) {
                      for (t || (t = s(e)), n = t.length; n--; ) (a = Se(t[n]))[b] ? i.push(a) : o.push(a);
                      (a = E(
                        e,
                        (function (e, t) {
                          var n = t.length > 0,
                            i = e.length > 0,
                            o = function (o, s, a, u, c) {
                              var f,
                                h,
                                v,
                                m = 0,
                                y = '0',
                                x = o && [],
                                b = [],
                                w = l,
                                C = o || (i && r.find.TAG('*', c)),
                                S = (T += null == w ? 1 : Math.random() || 0.1),
                                k = C.length;
                              for (c && (l = s == d || s || c); y !== k && null != (f = C[y]); y++) {
                                if (i && f) {
                                  for (h = 0, s || f.ownerDocument == d || (p(f), (a = !g)); (v = e[h++]); )
                                    if (v(f, s || d, a)) {
                                      u.push(f);
                                      break;
                                    }
                                  c && (T = S);
                                }
                                n && ((f = !v && f) && m--, o && x.push(f));
                              }
                              if (((m += y), n && y !== m)) {
                                for (h = 0; (v = t[h++]); ) v(x, b, s, a);
                                if (o) {
                                  if (m > 0) for (; y--; ) x[y] || b[y] || (b[y] = q.call(u));
                                  b = Te(b);
                                }
                                H.apply(u, b), c && !o && b.length > 0 && m + t.length > 1 && ae.uniqueSort(u);
                              }
                              return c && ((T = S), (l = w)), x;
                            };
                          return n ? le(o) : o;
                        })(o, i)
                      )),
                        (a.selector = e);
                    }
                    return a;
                  }),
                (u = ae.select =
                  function (e, t, n, i) {
                    var o,
                      u,
                      l,
                      c,
                      f,
                      p = 'function' == typeof e && e,
                      d = !i && s((e = p.selector || e));
                    if (((n = n || []), 1 === d.length)) {
                      if (
                        (u = d[0] = d[0].slice(0)).length > 2 &&
                        'ID' === (l = u[0]).type &&
                        9 === t.nodeType &&
                        g &&
                        r.relative[u[1].type]
                      ) {
                        if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                        p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                      }
                      for (o = G.needsContext.test(e) ? 0 : u.length; o-- && ((l = u[o]), !r.relative[(c = l.type)]); )
                        if (
                          (f = r.find[c]) &&
                          (i = f(l.matches[0].replace(te, ne), (ee.test(u[0].type) && me(t.parentNode)) || t))
                        ) {
                          if ((u.splice(o, 1), !(e = i.length && xe(u)))) return H.apply(n, i), n;
                          break;
                        }
                    }
                    return (p || a(e, d))(i, t, !g, n, !t || (ee.test(e) && me(t.parentNode)) || t), n;
                  }),
                (n.sortStable = b.split('').sort(N).join('') === b),
                (n.detectDuplicates = !!f),
                p(),
                (n.sortDetached = ce(function (e) {
                  return 1 & e.compareDocumentPosition(d.createElement('fieldset'));
                })),
                ce(function (e) {
                  return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
                }) ||
                  fe('type|href|height|width', function (e, t, n) {
                    if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
                  }),
                (n.attributes &&
                  ce(function (e) {
                    return (
                      (e.innerHTML = '<input/>'),
                      e.firstChild.setAttribute('value', ''),
                      '' === e.firstChild.getAttribute('value')
                    );
                  })) ||
                  fe('value', function (e, t, n) {
                    if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
                  }),
                ce(function (e) {
                  return null == e.getAttribute('disabled');
                }) ||
                  fe(R, function (e, t, n) {
                    var r;
                    if (!n)
                      return !0 === e[t]
                        ? t.toLowerCase()
                        : (r = e.getAttributeNode(t)) && r.specified
                        ? r.value
                        : null;
                  }),
                ae
              );
            })(r);
          (S.find = E),
            (S.expr = E.selectors),
            (S.expr[':'] = S.expr.pseudos),
            (S.uniqueSort = S.unique = E.uniqueSort),
            (S.text = E.getText),
            (S.isXMLDoc = E.isXML),
            (S.contains = E.contains),
            (S.escapeSelector = E.escape);
          var A = function (e, t, n) {
              for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                  if (i && S(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            N = function (e, t) {
              for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            j = S.expr.match.needsContext;
          function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function L(e, t, n) {
            return m(t)
              ? S.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? S.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : 'string' != typeof t
              ? S.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : S.filter(t, e, n);
          }
          (S.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ':not(' + e + ')'),
              1 === t.length && 1 === r.nodeType
                ? S.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : S.find.matches(
                    e,
                    S.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            S.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ('string' != typeof e)
                  return this.pushStack(
                    S(e).filter(function () {
                      for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
                return r > 1 ? S.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(L(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(L(this, e || [], !0));
              },
              is: function (e) {
                return !!L(this, 'string' == typeof e && j.test(e) ? S(e) : e || [], !1).length;
              },
            });
          var H,
            O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((S.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || H), 'string' == typeof e)) {
              if (
                !(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof S ? t[0] : t),
                  S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)),
                  q.test(r[1]) && S.isPlainObject(t))
                )
                  for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (i = x.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : m(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
              : S.makeArray(e, this);
          }).prototype = S.fn),
            (H = S(x));
          var P = /^(?:parents|prev(?:Until|All))/,
            R = { children: !0, contents: !0, next: !0, prev: !0 };
          function M(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          S.fn.extend({
            has: function (e) {
              var t = S(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                s = 'string' != typeof e && S(e);
              if (!j.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? 'string' == typeof e
                  ? c.call(S(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
            },
            addBack: function (e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
          }),
            S.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, 'parentNode');
                },
                parentsUntil: function (e, t, n) {
                  return A(e, 'parentNode', n);
                },
                next: function (e) {
                  return M(e, 'nextSibling');
                },
                prev: function (e) {
                  return M(e, 'previousSibling');
                },
                nextAll: function (e) {
                  return A(e, 'nextSibling');
                },
                prevAll: function (e) {
                  return A(e, 'previousSibling');
                },
                nextUntil: function (e, t, n) {
                  return A(e, 'nextSibling', n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, 'previousSibling', n);
                },
                siblings: function (e) {
                  return N((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return N(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && s(e.contentDocument)
                    ? e.contentDocument
                    : (D(e, 'template') && (e = e.content || e), S.merge([], e.childNodes));
                },
              },
              function (e, t) {
                S.fn[e] = function (n, r) {
                  var i = S.map(this, t, n);
                  return (
                    'Until' !== e.slice(-5) && (r = n),
                    r && 'string' == typeof r && (i = S.filter(r, i)),
                    this.length > 1 && (R[e] || S.uniqueSort(i), P.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var I = /[^\x20\t\r\n\f]+/g;
          function $(e) {
            return e;
          }
          function _(e) {
            throw e;
          }
          function W(e, t, n, r) {
            var i;
            try {
              e && m((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && m((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (S.Callbacks = function (e) {
            e =
              'string' == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      S.each(e.match(I) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : S.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              s = [],
              a = -1,
              u = function () {
                for (i = i || e.once, r = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
              },
              l = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        S.each(n, function (n, r) {
                          m(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && 'string' !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    S.each(arguments, function (e, t) {
                      for (var n; (n = S.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? S.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = s = []), (o = n = ''), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = s = []), n || t || (o = n = ''), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || u()), this;
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            S.extend({
              Deferred: function (e) {
                var t = [
                    ['notify', 'progress', S.Callbacks('memory'), S.Callbacks('memory'), 2],
                    ['resolve', 'done', S.Callbacks('once memory'), S.Callbacks('once memory'), 0, 'resolved'],
                    ['reject', 'fail', S.Callbacks('once memory'), S.Callbacks('once memory'), 1, 'rejected'],
                  ],
                  n = 'pending',
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return S.Deferred(function (n) {
                        S.each(t, function (t, r) {
                          var i = m(e[r[4]]) && e[r[4]];
                          o[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && m(e.promise)
                              ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                              : n[r[0] + 'With'](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var o = 0;
                      function s(e, t, n, i) {
                        return function () {
                          var a = this,
                            u = arguments,
                            l = function () {
                              var r, l;
                              if (!(e < o)) {
                                if ((r = n.apply(a, u)) === t.promise())
                                  throw new TypeError('Thenable self-resolution');
                                (l = r && ('object' == typeof r || 'function' == typeof r) && r.then),
                                  m(l)
                                    ? i
                                      ? l.call(r, s(o, t, $, i), s(o, t, _, i))
                                      : (o++, l.call(r, s(o, t, $, i), s(o, t, _, i), s(o, t, $, t.notifyWith)))
                                    : (n !== $ && ((a = void 0), (u = [r])), (i || t.resolveWith)(a, u));
                              }
                            },
                            c = i
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (r) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= o && (n !== _ && ((a = void 0), (u = [r])), t.rejectWith(a, u));
                                  }
                                };
                          e
                            ? c()
                            : (S.Deferred.getStackHook && (c.stackTrace = S.Deferred.getStackHook()), r.setTimeout(c));
                        };
                      }
                      return S.Deferred(function (r) {
                        t[0][3].add(s(0, r, m(i) ? i : $, r.notifyWith)),
                          t[1][3].add(s(0, r, m(e) ? e : $)),
                          t[2][3].add(s(0, r, m(n) ? n : _));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? S.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  S.each(t, function (e, r) {
                    var s = r[2],
                      a = r[5];
                    (i[r[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      s.add(r[3].fire),
                      (o[r[0]] = function () {
                        return o[r[0] + 'With'](this === o ? void 0 : this, arguments), this;
                      }),
                      (o[r[0] + 'With'] = s.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = a.call(arguments),
                  o = S.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (r[e] = this), (i[e] = arguments.length > 1 ? a.call(arguments) : n), --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (W(e, o.done(s(n)).resolve, o.reject, !t), 'pending' === o.state() || m(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) W(i[n], s(n), o.reject);
                return o.promise();
              },
            });
          var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (S.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              F.test(e.name) &&
              r.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
          }),
            (S.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var B = S.Deferred();
          function z() {
            x.removeEventListener('DOMContentLoaded', z), r.removeEventListener('load', z), S.ready();
          }
          (S.fn.ready = function (e) {
            return (
              B.then(e).catch(function (e) {
                S.readyException(e);
              }),
              this
            );
          }),
            S.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                  ((S.isReady = !0), (!0 !== e && --S.readyWait > 0) || B.resolveWith(x, [S]));
              },
            }),
            (S.ready.then = B.then),
            'complete' === x.readyState || ('loading' !== x.readyState && !x.documentElement.doScroll)
              ? r.setTimeout(S.ready)
              : (x.addEventListener('DOMContentLoaded', z), r.addEventListener('load', z));
          var U = function (e, t, n, r, i, o, s) {
              var a = 0,
                u = e.length,
                l = null == n;
              if ('object' === T(n)) for (a in ((i = !0), n)) U(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (s = !0),
                l &&
                  (s
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(S(e), n);
                      }))),
                t)
              )
                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
              return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            },
            X = /^-ms-/,
            V = /-([a-z])/g;
          function G(e, t) {
            return t.toUpperCase();
          }
          function Y(e) {
            return e.replace(X, 'ms-').replace(V, G);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function J() {
            this.expando = S.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ('string' == typeof t) i[Y(t)] = n;
                else for (r in t) i[Y(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, n) {
                return void 0 === t || (t && 'string' == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(I) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || S.isEmptyObject(r)) &&
                    (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
              },
            });
          var K = new J(),
            Z = new J(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (((r = 'data-' + t.replace(te, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(r)))) {
                try {
                  n = (function (e) {
                    return (
                      'true' === e ||
                      ('false' !== e && ('null' === e ? null : e === +e + '' ? +e : ee.test(e) ? JSON.parse(e) : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          S.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            S.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === e) {
                  if (this.length && ((i = Z.get(o)), 1 === o.nodeType && !K.get(o, 'hasDataAttrs'))) {
                    for (n = s.length; n--; )
                      s[n] && 0 === (r = s[n].name).indexOf('data-') && ((r = Y(r.slice(5))), ne(o, r, i[r]));
                    K.set(o, 'hasDataAttrs', !0);
                  }
                  return i;
                }
                return 'object' == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : U(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            S.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || 'fx') + 'queue'),
                    (r = K.get(e, t)),
                    n && (!r || Array.isArray(n) ? (r = K.access(e, t, S.makeArray(n))) : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || 'fx';
                var n = S.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = S._queueHooks(e, t);
                'inprogress' === i && ((i = n.shift()), r--),
                  i &&
                    ('fx' === t && n.unshift('inprogress'),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        S.dequeue(e, t);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + 'queueHooks';
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: S.Callbacks('once memory').add(function () {
                      K.remove(e, [t + 'queue', n]);
                    }),
                  })
                );
              },
            }),
            S.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  'string' != typeof e && ((t = e), (e = 'fx'), n--),
                  arguments.length < n
                    ? S.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && S.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  S.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || 'fx', []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = S.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; s--; )
                  (n = K.get(o[s], e + 'queueHooks')) && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'),
            oe = ['Top', 'Right', 'Bottom', 'Left'],
            se = x.documentElement,
            ae = function (e) {
              return S.contains(e.ownerDocument, e);
            },
            ue = { composed: !0 };
          se.getRootNode &&
            (ae = function (e) {
              return S.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument;
            });
          var le = function (e, t) {
            return (
              'none' === (e = t || e).style.display ||
              ('' === e.style.display && ae(e) && 'none' === S.css(e, 'display'))
            );
          };
          function ce(e, t, n, r) {
            var i,
              o,
              s = 20,
              a = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return S.css(e, t, '');
                  },
              u = a(),
              l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
              c = e.nodeType && (S.cssNumber[t] || ('px' !== l && +u)) && ie.exec(S.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; s--; )
                S.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0), (c /= o);
              (c *= 2), S.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          }
          var fe = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = fe[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = S.css(t, 'display')),
              t.parentNode.removeChild(t),
              'none' === i && (i = 'block'),
              (fe[r] = i),
              i)
            );
          }
          function de(e, t) {
            for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ('none' === n && ((i[o] = K.get(r, 'display') || null), i[o] || (r.style.display = '')),
                    '' === r.style.display && le(r) && (i[o] = pe(r)))
                  : 'none' !== n && ((i[o] = 'none'), K.set(r, 'display', n)));
            for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          S.fn.extend({
            show: function () {
              return de(this, !0);
            },
            hide: function () {
              return de(this);
            },
            toggle: function (e) {
              return 'boolean' == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    le(this) ? S(this).show() : S(this).hide();
                  });
            },
          });
          var he,
            ge,
            ve = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = x.createDocumentFragment().appendChild(x.createElement('div'))),
            (ge = x.createElement('input')).setAttribute('type', 'radio'),
            ge.setAttribute('checked', 'checked'),
            ge.setAttribute('name', 't'),
            he.appendChild(ge),
            (v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = '<textarea>x</textarea>'),
            (v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = '<option></option>'),
            (v.option = !!he.lastChild);
          var xe = {
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || '*')
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || '*')
                  : []),
              void 0 === t || (t && D(e, t)) ? S.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++) K.set(e[n], 'globalEval', !t || K.get(t[n], 'globalEval'));
          }
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
            (xe.th = xe.td),
            v.option || (xe.optgroup = xe.option = [1, "<select multiple='multiple'>", '</select>']);
          var Te = /<|&#?\w+;/;
          function Ce(e, t, n, r, i) {
            for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
              if ((o = e[d]) || 0 === o)
                if ('object' === T(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (Te.test(o)) {
                  for (
                    s = s || f.appendChild(t.createElement('div')),
                      a = (me.exec(o) || ['', ''])[1].toLowerCase(),
                      u = xe[a] || xe._default,
                      s.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                      c = u[0];
                    c--;

                  )
                    s = s.lastChild;
                  S.merge(p, s.childNodes), ((s = f.firstChild).textContent = '');
                } else p.push(t.createTextNode(o));
            for (f.textContent = '', d = 0; (o = p[d++]); )
              if (r && S.inArray(o, r) > -1) i && i.push(o);
              else if (((l = ae(o)), (s = be(f.appendChild(o), 'script')), l && we(s), n))
                for (c = 0; (o = s[c++]); ) ye.test(o.type || '') && n.push(o);
            return f;
          }
          var Se = /^([^.]*)(?:\.(.+)|)/;
          function ke() {
            return !0;
          }
          function Ee() {
            return !1;
          }
          function Ae(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return x.activeElement;
                  } catch (e) {}
                })()) ==
              ('focus' === t)
            );
          }
          function Ne(e, t, n, r, i, o) {
            var s, a;
            if ('object' == typeof t) {
              for (a in ('string' != typeof n && ((r = r || n), (n = void 0)), t)) Ne(e, a, n, r, t[a], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i && ('string' == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = Ee;
            else if (!i) return e;
            return (
              1 === o &&
                ((s = i),
                (i = function (e) {
                  return S().off(e), s.apply(this, arguments);
                }),
                (i.guid = s.guid || (s.guid = S.guid++))),
              e.each(function () {
                S.event.add(this, t, i, r, n);
              })
            );
          }
          function je(e, t, n) {
            n
              ? (K.set(e, t, !1),
                S.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      o = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length) (S.event.special[t] || {}).delegateType && e.stopPropagation();
                      else if (
                        ((o = a.call(arguments)),
                        K.set(this, t, o),
                        (r = n(this, t)),
                        this[t](),
                        o !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : (i = {}),
                        o !== i)
                      )
                        return e.stopImmediatePropagation(), e.preventDefault(), i && i.value;
                    } else
                      o.length &&
                        (K.set(this, t, {
                          value: S.event.trigger(S.extend(o[0], S.Event.prototype), o.slice(1), this),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && S.event.add(e, t, ke);
          }
          (S.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                s,
                a,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = K.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && S.find.matchesSelector(se, i),
                    n.guid || (n.guid = S.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (s = v.handle) ||
                      (s = v.handle =
                        function (t) {
                          return void 0 !== S && S.event.triggered !== t.type
                            ? S.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || '').match(I) || ['']).length;
                  l--;

                )
                  (d = g = (a = Se.exec(t[l]) || [])[1]),
                    (h = (a[2] || '').split('.').sort()),
                    d &&
                      ((f = S.event.special[d] || {}),
                      (d = (i ? f.delegateType : f.bindType) || d),
                      (f = S.event.special[d] || {}),
                      (c = S.extend(
                        {
                          type: d,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && S.expr.match.needsContext.test(i),
                          namespace: h.join('.'),
                        },
                        o
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                          (e.addEventListener && e.addEventListener(d, s))),
                      f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                      i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                      (S.event.global[d] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                s,
                a,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = K.hasData(e) && K.get(e);
              if (v && (u = v.events)) {
                for (l = (t = (t || '').match(I) || ['']).length; l--; )
                  if (((d = g = (a = Se.exec(t[l]) || [])[1]), (h = (a[2] || '').split('.').sort()), d)) {
                    for (
                      f = S.event.special[d] || {},
                        p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        a = a[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                        s = o = p.length;
                      o--;

                    )
                      (c = p[o]),
                        (!i && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (a && !a.test(c.namespace)) ||
                          (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                          (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    s &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || S.removeEvent(e, d, v.handle),
                      delete u[d]);
                  } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && K.remove(e, 'handle events');
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a = new Array(arguments.length),
                u = S.event.fix(e),
                l = (K.get(this, 'events') || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
              for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
              if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                for (s = S.event.handlers.call(this, u, l), t = 0; (i = s[t++]) && !u.isPropagationStopped(); )
                  for (u.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                    (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                      ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                s,
                a = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !('click' === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
                    for (o = [], s = {}, n = 0; n < u; n++)
                      void 0 === s[(i = (r = t[n]).selector + ' ')] &&
                        (s[i] = r.needsContext ? S(i, this).index(l) > -1 : S.find(i, this, null, [l]).length),
                        s[i] && o.push(r);
                    o.length && a.push({ elem: l, handlers: o });
                  }
              return (l = this), u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a;
            },
            addProp: function (e, t) {
              Object.defineProperty(S.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
              });
            },
            fix: function (e) {
              return e[S.expando] ? e : new S.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return ve.test(t.type) && t.click && D(t, 'input') && je(t, 'click', ke), !1;
                },
                trigger: function (e) {
                  var t = this || e;
                  return ve.test(t.type) && t.click && D(t, 'input') && je(t, 'click'), !0;
                },
                _default: function (e) {
                  var t = e.target;
                  return (ve.test(t.type) && t.click && D(t, 'input') && K.get(t, 'click')) || D(t, 'a');
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (S.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (S.Event = function (e, t) {
              if (!(this instanceof S.Event)) return new S.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? ke : Ee),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
            }),
            (S.Event.prototype = {
              constructor: S.Event,
              isDefaultPrevented: Ee,
              isPropagationStopped: Ee,
              isImmediatePropagationStopped: Ee,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = ke), e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = ke), e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = ke),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            S.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              S.event.addProp
            ),
            S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
              S.event.special[e] = {
                setup: function () {
                  return je(this, e, Ae), !1;
                },
                trigger: function () {
                  return je(this, e), !0;
                },
                _default: function (t) {
                  return K.get(t.target, e);
                },
                delegateType: t,
              };
            }),
            S.each(
              {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout',
              },
              function (e, t) {
                S.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (r && (r === this || S.contains(this, r))) ||
                        ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            S.fn.extend({
              on: function (e, t, n, r) {
                return Ne(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Ne(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    S(e.delegateTarget).off(
                      r.namespace ? r.origType + '.' + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ('object' == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
                  !1 === n && (n = Ee),
                  this.each(function () {
                    S.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var De = /<script|<style|<link/i,
            qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function He(e, t) {
            return (D(e, 'table') && D(11 !== t.nodeType ? t : t.firstChild, 'tr') && S(e).children('tbody')[0]) || e;
          }
          function Oe(e) {
            return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
          }
          function Pe(e) {
            return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
          }
          function Re(e, t) {
            var n, r, i, o, s, a;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (a = K.get(e).events))
                for (i in (K.remove(t, 'handle events'), a))
                  for (n = 0, r = a[i].length; n < r; n++) S.event.add(t, i, a[i][n]);
              Z.hasData(e) && ((o = Z.access(e)), (s = S.extend({}, o)), Z.set(t, s));
            }
          }
          function Me(e, t) {
            var n = t.nodeName.toLowerCase();
            'input' === n && ve.test(e.type)
              ? (t.checked = e.checked)
              : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue);
          }
          function Ie(e, t, n, r) {
            t = u(t);
            var i,
              o,
              s,
              a,
              l,
              c,
              f = 0,
              p = e.length,
              d = p - 1,
              h = t[0],
              g = m(h);
            if (g || (p > 1 && 'string' == typeof h && !v.checkClone && qe.test(h)))
              return e.each(function (i) {
                var o = e.eq(i);
                g && (t[0] = h.call(this, i, o.html())), Ie(o, t, n, r);
              });
            if (
              p &&
              ((o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)
            ) {
              for (a = (s = S.map(be(i, 'script'), Oe)).length; f < p; f++)
                (l = i), f !== d && ((l = S.clone(l, !0, !0)), a && S.merge(s, be(l, 'script'))), n.call(e[f], l, f);
              if (a)
                for (c = s[s.length - 1].ownerDocument, S.map(s, Pe), f = 0; f < a; f++)
                  (l = s[f]),
                    ye.test(l.type || '') &&
                      !K.access(l, 'globalEval') &&
                      S.contains(c, l) &&
                      (l.src && 'module' !== (l.type || '').toLowerCase()
                        ? S._evalUrl &&
                          !l.noModule &&
                          S._evalUrl(l.src, { nonce: l.nonce || l.getAttribute('nonce') }, c)
                        : w(l.textContent.replace(Le, ''), l, c));
            }
            return e;
          }
          function $e(e, t, n) {
            for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
              n || 1 !== r.nodeType || S.cleanData(be(r)),
                r.parentNode && (n && ae(r) && we(be(r, 'script')), r.parentNode.removeChild(r));
            return e;
          }
          S.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                s,
                a = e.cloneNode(!0),
                u = ae(e);
              if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
                for (s = be(a), r = 0, i = (o = be(e)).length; r < i; r++) Me(o[r], s[r]);
              if (t)
                if (n) for (o = o || be(e), s = s || be(a), r = 0, i = o.length; r < i; r++) Re(o[r], s[r]);
                else Re(e, a);
              return (s = be(a, 'script')).length > 0 && we(s, !u && be(e, 'script')), a;
            },
            cleanData: function (e) {
              for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Q(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            S.fn.extend({
              detach: function (e) {
                return $e(this, e, !0);
              },
              remove: function (e) {
                return $e(this, e);
              },
              text: function (e) {
                return U(
                  this,
                  function (e) {
                    return void 0 === e
                      ? S.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ie(this, arguments, function (e) {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || He(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ie(this, arguments, function (e) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = He(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ie(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ie(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType && (S.cleanData(be(e, !1)), (e.textContent = ''));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return S.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return U(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ('string' == typeof e && !De.test(e) && !xe[(me.exec(e) || ['', ''])[1].toLowerCase()]) {
                      e = S.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType && (S.cleanData(be(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Ie(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    S.inArray(this, e) < 0 && (S.cleanData(be(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            S.each(
              {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
              },
              function (e, t) {
                S.fn[e] = function (e) {
                  for (var n, r = [], i = S(e), o = i.length - 1, s = 0; s <= o; s++)
                    (n = s === o ? this : this.clone(!0)), S(i[s])[t](n), l.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var _e = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'),
            We = /^--/,
            Fe = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Be = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
              return r;
            },
            ze = new RegExp(oe.join('|'), 'i'),
            Ue = '[\\x20\\t\\r\\n\\f]',
            Xe = new RegExp('^' + Ue + '+|((?:^|[^\\\\])(?:\\\\.)*)' + Ue + '+$', 'g');
          function Ve(e, t, n) {
            var r,
              i,
              o,
              s,
              a = We.test(t),
              u = e.style;
            return (
              (n = n || Fe(e)) &&
                ((s = n.getPropertyValue(t) || n[t]),
                a && s && (s = s.replace(Xe, '$1') || void 0),
                '' !== s || ae(e) || (s = S.style(e, t)),
                !v.pixelBoxStyles() &&
                  _e.test(s) &&
                  ze.test(t) &&
                  ((r = u.width),
                  (i = u.minWidth),
                  (o = u.maxWidth),
                  (u.minWidth = u.maxWidth = u.width = s),
                  (s = n.width),
                  (u.width = r),
                  (u.minWidth = i),
                  (u.maxWidth = o))),
              void 0 !== s ? s + '' : s
            );
          }
          function Ge(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                  (c.style.cssText =
                    'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                  se.appendChild(l).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = '1%' !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = '60%'),
                  (s = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (c.style.position = 'absolute'),
                  (o = 12 === t(c.offsetWidth / 3)),
                  se.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              o,
              s,
              a,
              u,
              l = x.createElement('div'),
              c = x.createElement('div');
            c.style &&
              ((c.style.backgroundClip = 'content-box'),
              (c.cloneNode(!0).style.backgroundClip = ''),
              (v.clearCloneStyle = 'content-box' === c.style.backgroundClip),
              S.extend(v, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), s;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == a &&
                      ((e = x.createElement('table')),
                      (t = x.createElement('tr')),
                      (n = x.createElement('div')),
                      (e.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'),
                      (t.style.cssText = 'border:1px solid'),
                      (t.style.height = '1px'),
                      (n.style.height = '9px'),
                      (n.style.display = 'block'),
                      se.appendChild(e).appendChild(t).appendChild(n),
                      (i = r.getComputedStyle(t)),
                      (a =
                        parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      se.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ye = ['Webkit', 'Moz', 'ms'],
            Qe = x.createElement('div').style,
            Je = {};
          function Ke(e) {
            var t = S.cssProps[e] || Je[e];
            return (
              t ||
              (e in Qe
                ? e
                : (Je[e] =
                    (function (e) {
                      for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
                        if ((e = Ye[n] + t) in Qe) return e;
                    })(e) || e))
            );
          }
          var Ze = /^(none|table(?!-c[ea]).+)/,
            et = { position: 'absolute', visibility: 'hidden', display: 'block' },
            tt = { letterSpacing: '0', fontWeight: '400' };
          function nt(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
          }
          function rt(e, t, n, r, i, o) {
            var s = 'width' === t ? 1 : 0,
              a = 0,
              u = 0;
            if (n === (r ? 'border' : 'content')) return 0;
            for (; s < 4; s += 2)
              'margin' === n && (u += S.css(e, n + oe[s], !0, i)),
                r
                  ? ('content' === n && (u -= S.css(e, 'padding' + oe[s], !0, i)),
                    'margin' !== n && (u -= S.css(e, 'border' + oe[s] + 'Width', !0, i)))
                  : ((u += S.css(e, 'padding' + oe[s], !0, i)),
                    'padding' !== n
                      ? (u += S.css(e, 'border' + oe[s] + 'Width', !0, i))
                      : (a += S.css(e, 'border' + oe[s] + 'Width', !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5)) || 0),
              u
            );
          }
          function it(e, t, n) {
            var r = Fe(e),
              i = (!v.boxSizingReliable() || n) && 'border-box' === S.css(e, 'boxSizing', !1, r),
              o = i,
              s = Ve(e, t, r),
              a = 'offset' + t[0].toUpperCase() + t.slice(1);
            if (_e.test(s)) {
              if (!n) return s;
              s = 'auto';
            }
            return (
              ((!v.boxSizingReliable() && i) ||
                (!v.reliableTrDimensions() && D(e, 'tr')) ||
                'auto' === s ||
                (!parseFloat(s) && 'inline' === S.css(e, 'display', !1, r))) &&
                e.getClientRects().length &&
                ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)), (o = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) + rt(e, t, n || (i ? 'border' : 'content'), o, r, s) + 'px'
            );
          }
          function ot(e, t, n, r, i) {
            return new ot.prototype.init(e, t, n, r, i);
          }
          S.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ve(e, 'opacity');
                    return '' === n ? '1' : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  s,
                  a = Y(t),
                  u = We.test(t),
                  l = e.style;
                if ((u || (t = Ke(a)), (s = S.cssHooks[t] || S.cssHooks[a]), void 0 === n))
                  return s && 'get' in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                'string' === (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ce(e, t, i)), (o = 'number')),
                  null != n &&
                    n == n &&
                    ('number' !== o || u || (n += (i && i[3]) || (S.cssNumber[a] ? '' : 'px')),
                    v.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'),
                    (s && 'set' in s && void 0 === (n = s.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                s,
                a = Y(t);
              return (
                We.test(t) || (t = Ke(a)),
                (s = S.cssHooks[t] || S.cssHooks[a]) && 'get' in s && (i = s.get(e, !0, n)),
                void 0 === i && (i = Ve(e, t, r)),
                'normal' === i && t in tt && (i = tt[t]),
                '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
              );
            },
          }),
            S.each(['height', 'width'], function (e, t) {
              S.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Ze.test(S.css(e, 'display')) ||
                      (e.getClientRects().length && e.getBoundingClientRect().width)
                      ? it(e, t, r)
                      : Be(e, et, function () {
                          return it(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = Fe(e),
                    s = !v.scrollboxSize() && 'absolute' === o.position,
                    a = (s || r) && 'border-box' === S.css(e, 'boxSizing', !1, o),
                    u = r ? rt(e, t, r, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (u -= Math.ceil(
                        e['offset' + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          rt(e, t, 'border', !1, o) -
                          0.5
                      )),
                    u && (i = ie.exec(n)) && 'px' !== (i[3] || 'px') && ((e.style[t] = n), (n = S.css(e, t))),
                    nt(0, n, u)
                  );
                },
              };
            }),
            (S.cssHooks.marginLeft = Ge(v.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, 'marginLeft')) ||
                    e.getBoundingClientRect().left -
                      Be(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + 'px'
                );
            })),
            S.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
              (S.cssHooks[e + t] = {
                expand: function (n) {
                  for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                  return i;
                },
              }),
                'margin' !== e && (S.cssHooks[e + t].set = nt);
            }),
            S.fn.extend({
              css: function (e, t) {
                return U(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (r = Fe(e), i = t.length; s < i; s++) o[t[s]] = S.css(e, t[s], !1, r);
                      return o;
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (S.Tween = ot),
            (ot.prototype = {
              constructor: ot,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || S.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (S.cssNumber[n] ? '' : 'px'));
              },
              cur: function () {
                var e = ot.propHooks[this.prop];
                return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = ot.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : ot.propHooks._default.set(this),
                  this
                );
              },
            }),
            (ot.prototype.init.prototype = ot.prototype),
            (ot.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  S.fx.step[e.prop]
                    ? S.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : S.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (ot.propHooks.scrollTop = ot.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
              }),
            (S.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: 'swing',
            }),
            (S.fx = ot.prototype.init),
            (S.fx.step = {});
          var st,
            at,
            ut = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;
          function ct() {
            at &&
              (!1 === x.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ct)
                : r.setTimeout(ct, S.fx.interval),
              S.fx.tick());
          }
          function ft() {
            return (
              r.setTimeout(function () {
                st = void 0;
              }),
              (st = Date.now())
            );
          }
          function pt(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = oe[r])] = i['padding' + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function dt(e, t, n) {
            for (var r, i = (ht.tweeners[t] || []).concat(ht.tweeners['*']), o = 0, s = i.length; o < s; o++)
              if ((r = i[o].call(n, t, e))) return r;
          }
          function ht(e, t, n) {
            var r,
              i,
              o = 0,
              s = ht.prefilters.length,
              a = S.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var t = st || ft(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    o = 0,
                    s = l.tweens.length;
                  o < s;
                  o++
                )
                  l.tweens[o].run(r);
                return (
                  a.notifyWith(e, [l, r, n]),
                  r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
                );
              },
              l = a.promise({
                elem: e,
                props: S.extend({}, t),
                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: st || ft(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = S.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
                },
              }),
              c = l.props;
            for (
              !(function (e, t) {
                var n, r, i, o, s;
                for (n in e)
                  if (
                    ((i = t[(r = Y(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (s = S.cssHooks[r]) && ('expand' in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, l.opts.specialEasing);
              o < s;
              o++
            )
              if ((r = ht.prefilters[o].call(l, e, c, l.opts)))
                return m(r.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            return (
              S.map(c, dt, l),
              m(l.opts.start) && l.opts.start.call(e, l),
              l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
              S.fx.timer(S.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
              l
            );
          }
          (S.Animation = S.extend(ht, {
            tweeners: {
              '*': [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, ie.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              m(e) ? ((t = e), (e = ['*'])) : (e = e.match(I));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]), (ht.tweeners[n] = ht.tweeners[n] || []), ht.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  f = 'width' in t || 'height' in t,
                  p = this,
                  d = {},
                  h = e.style,
                  g = e.nodeType && le(e),
                  v = K.get(e, 'fxshow');
                for (r in (n.queue ||
                  (null == (s = S._queueHooks(e, 'fx')).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      s.unqueued--, S.queue(e, 'fx').length || s.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), ut.test(i))) {
                    if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
                      if ('show' !== i || !v || void 0 === v[r]) continue;
                      g = !0;
                    }
                    d[r] = (v && v[r]) || S.style(e, r);
                  }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = v && v.display) && (l = K.get(e, 'display')),
                    'none' === (c = S.css(e, 'display')) &&
                      (l ? (c = l) : (de([e], !0), (l = e.style.display || l), (c = S.css(e, 'display')), de([e]))),
                    ('inline' === c || ('inline-block' === c && null != l)) &&
                      'none' === S.css(e, 'float') &&
                      (u ||
                        (p.done(function () {
                          h.display = l;
                        }),
                        null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
                      (h.display = 'inline-block'))),
                  n.overflow &&
                    ((h.overflow = 'hidden'),
                    p.always(function () {
                      (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (v ? 'hidden' in v && (g = v.hidden) : (v = K.access(e, 'fxshow', { display: l })),
                      o && (v.hidden = !g),
                      g && de([e], !0),
                      p.done(function () {
                        for (r in (g || de([e]), K.remove(e, 'fxshow'), d)) S.style(e, r, d[r]);
                      })),
                      (u = dt(g ? v[r] : 0, r, p)),
                      r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
            },
          })),
            (S.speed = function (e, t, n) {
              var r =
                e && 'object' == typeof e
                  ? S.extend({}, e)
                  : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
              return (
                S.fx.off
                  ? (r.duration = 0)
                  : 'number' != typeof r.duration &&
                    (r.duration in S.fx.speeds
                      ? (r.duration = S.fx.speeds[r.duration])
                      : (r.duration = S.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
                (r.old = r.complete),
                (r.complete = function () {
                  m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
                }),
                r
              );
            }),
            S.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(le).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = S.isEmptyObject(e),
                  o = S.speed(t, n, r),
                  s = function () {
                    var t = ht(this, S.extend({}, e), o);
                    (i || K.get(this, 'finish')) && t.stop(!0);
                  };
                return (s.finish = s), i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  'string' != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || 'fx', []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + 'queueHooks',
                      o = S.timers,
                      s = K.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else for (i in s) s[i] && s[i].stop && lt.test(i) && r(s[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != e && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || S.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || 'fx'),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      r = n[e + 'queue'],
                      i = n[e + 'queueHooks'],
                      o = S.timers,
                      s = r ? r.length : 0;
                    for (n.finish = !0, S.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
                      o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            S.each(['toggle', 'show', 'hide'], function (e, t) {
              var n = S.fn[t];
              S.fn[t] = function (e, r, i) {
                return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, r, i);
              };
            }),
            S.each(
              {
                slideDown: pt('show'),
                slideUp: pt('hide'),
                slideToggle: pt('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' },
              },
              function (e, t) {
                S.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (S.timers = []),
            (S.fx.tick = function () {
              var e,
                t = 0,
                n = S.timers;
              for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || S.fx.stop(), (st = void 0);
            }),
            (S.fx.timer = function (e) {
              S.timers.push(e), S.fx.start();
            }),
            (S.fx.interval = 13),
            (S.fx.start = function () {
              at || ((at = !0), ct());
            }),
            (S.fx.stop = function () {
              at = null;
            }),
            (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (S.fn.delay = function (e, t) {
              return (
                (e = (S.fx && S.fx.speeds[e]) || e),
                (t = t || 'fx'),
                this.queue(t, function (t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = x.createElement('input'),
                t = x.createElement('select').appendChild(x.createElement('option'));
              (e.type = 'checkbox'),
                (v.checkOn = '' !== e.value),
                (v.optSelected = t.selected),
                ((e = x.createElement('input')).value = 't'),
                (e.type = 'radio'),
                (v.radioValue = 't' === e.value);
            })();
          var gt,
            vt = S.expr.attrHandle;
          S.fn.extend({
            attr: function (e, t) {
              return U(this, S.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                S.removeAttr(this, e);
              });
            },
          }),
            S.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? S.prop(e, t, n)
                    : ((1 === o && S.isXMLDoc(e)) ||
                        (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? gt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void S.removeAttr(e, t)
                          : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ''), n)
                        : i && 'get' in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = S.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!v.radioValue && 'radio' === t && D(e, 'input')) {
                      var n = e.value;
                      return e.setAttribute('type', t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(I);
                if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (gt = {
              set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = vt[t] || S.find.attr;
              vt[t] = function (e, t, r) {
                var i,
                  o,
                  s = t.toLowerCase();
                return r || ((o = vt[s]), (vt[s] = i), (i = null != n(e, t, r) ? s : null), (vt[s] = o)), i;
              };
            });
          var mt = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;
          function xt(e) {
            return (e.match(I) || []).join(' ');
          }
          function bt(e) {
            return (e.getAttribute && e.getAttribute('class')) || '';
          }
          function wt(e) {
            return Array.isArray(e) ? e : ('string' == typeof e && e.match(I)) || [];
          }
          S.fn.extend({
            prop: function (e, t) {
              return U(this, S.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[S.propFix[e] || e];
              });
            },
          }),
            S.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                    void 0 !== n
                      ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && 'get' in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = S.find.attr(e, 'tabindex');
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                  },
                },
              },
              propFix: { for: 'htmlFor', class: 'className' },
            }),
            v.optSelected ||
              (S.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            S.each(
              [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable',
              ],
              function () {
                S.propFix[this.toLowerCase()] = this;
              }
            ),
            S.fn.extend({
              addClass: function (e) {
                var t, n, r, i, o, s;
                return m(e)
                  ? this.each(function (t) {
                      S(this).addClass(e.call(this, t, bt(this)));
                    })
                  : (t = wt(e)).length
                  ? this.each(function () {
                      if (((r = bt(this)), (n = 1 === this.nodeType && ' ' + xt(r) + ' '))) {
                        for (o = 0; o < t.length; o++) (i = t[o]), n.indexOf(' ' + i + ' ') < 0 && (n += i + ' ');
                        (s = xt(n)), r !== s && this.setAttribute('class', s);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, r, i, o, s;
                return m(e)
                  ? this.each(function (t) {
                      S(this).removeClass(e.call(this, t, bt(this)));
                    })
                  : arguments.length
                  ? (t = wt(e)).length
                    ? this.each(function () {
                        if (((r = bt(this)), (n = 1 === this.nodeType && ' ' + xt(r) + ' '))) {
                          for (o = 0; o < t.length; o++)
                            for (i = t[o]; n.indexOf(' ' + i + ' ') > -1; ) n = n.replace(' ' + i + ' ', ' ');
                          (s = xt(n)), r !== s && this.setAttribute('class', s);
                        }
                      })
                    : this
                  : this.attr('class', '');
              },
              toggleClass: function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  s = typeof e,
                  a = 'string' === s || Array.isArray(e);
                return m(e)
                  ? this.each(function (n) {
                      S(this).toggleClass(e.call(this, n, bt(this), t), t);
                    })
                  : 'boolean' == typeof t && a
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = wt(e)),
                    this.each(function () {
                      if (a)
                        for (o = S(this), i = 0; i < n.length; i++)
                          (r = n[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                      else
                        (void 0 !== e && 'boolean' !== s) ||
                          ((r = bt(this)) && K.set(this, '__className__', r),
                          this.setAttribute &&
                            this.setAttribute('class', r || !1 === e ? '' : K.get(this, '__className__') || ''));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = ' ' + e + ' '; (n = this[r++]); )
                  if (1 === n.nodeType && (' ' + xt(bt(n)) + ' ').indexOf(t) > -1) return !0;
                return !1;
              },
            });
          var Tt = /\r/g;
          S.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = m(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, S(this).val()) : e)
                        ? (i = '')
                        : 'number' == typeof i
                        ? (i += '')
                        : Array.isArray(i) &&
                          (i = S.map(i, function (e) {
                            return null == e ? '' : e + '';
                          })),
                      ((t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) &&
                        'set' in t &&
                        void 0 !== t.set(this, i, 'value')) ||
                        (this.value = i));
                  }))
                : i
                ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) &&
                  'get' in t &&
                  void 0 !== (n = t.get(i, 'value'))
                  ? n
                  : 'string' == typeof (n = i.value)
                  ? n.replace(Tt, '')
                  : null == n
                  ? ''
                  : n
                : void 0;
            },
          }),
            S.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = S.find.attr(e, 'value');
                    return null != t ? t : xt(S.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      s = 'select-one' === e.type,
                      a = s ? null : [],
                      u = s ? o + 1 : i.length;
                    for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !D(n.parentNode, 'optgroup'))
                      ) {
                        if (((t = S(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (var n, r, i = e.options, o = S.makeArray(t), s = i.length; s--; )
                      ((r = i[s]).selected = S.inArray(S.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            S.each(['radio', 'checkbox'], function () {
              (S.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t)) return (e.checked = S.inArray(S(e).val(), t) > -1);
                },
              }),
                v.checkOn ||
                  (S.valHooks[this].get = function (e) {
                    return null === e.getAttribute('value') ? 'on' : e.value;
                  });
            }),
            (v.focusin = 'onfocusin' in r);
          var Ct = /^(?:focusinfocus|focusoutblur)$/,
            St = function (e) {
              e.stopPropagation();
            };
          S.extend(S.event, {
            trigger: function (e, t, n, i) {
              var o,
                s,
                a,
                u,
                l,
                c,
                f,
                p,
                h = [n || x],
                g = d.call(e, 'type') ? e.type : e,
                v = d.call(e, 'namespace') ? e.namespace.split('.') : [];
              if (
                ((s = p = a = n = n || x),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Ct.test(g + S.event.triggered) &&
                  (g.indexOf('.') > -1 && ((v = g.split('.')), (g = v.shift()), v.sort()),
                  (l = g.indexOf(':') < 0 && 'on' + g),
                  ((e = e[S.expando] ? e : new S.Event(g, 'object' == typeof e && e)).isTrigger = i ? 2 : 3),
                  (e.namespace = v.join('.')),
                  (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : S.makeArray(t, [e])),
                  (f = S.event.special[g] || {}),
                  i || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!i && !f.noBubble && !y(n)) {
                  for (u = f.delegateType || g, Ct.test(u + g) || (s = s.parentNode); s; s = s.parentNode)
                    h.push(s), (a = s);
                  a === (n.ownerDocument || x) && h.push(a.defaultView || a.parentWindow || r);
                }
                for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                  (p = s),
                    (e.type = o > 1 ? u : f.bindType || g),
                    (c = (K.get(s, 'events') || Object.create(null))[e.type] && K.get(s, 'handle')) && c.apply(s, t),
                    (c = l && s[l]) &&
                      c.apply &&
                      Q(s) &&
                      ((e.result = c.apply(s, t)), !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  i ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (l &&
                      m(n[g]) &&
                      !y(n) &&
                      ((a = n[l]) && (n[l] = null),
                      (S.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, St),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, St),
                      (S.event.triggered = void 0),
                      a && (n[l] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
              S.event.trigger(r, null, t);
            },
          }),
            S.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  S.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
              },
            }),
            v.focusin ||
              S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
                var n = function (e) {
                  S.event.simulate(t, e.target, S.event.fix(e));
                };
                S.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t);
                    i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t) - 1;
                    i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t));
                  },
                };
              });
          var kt = r.location,
            Et = { guid: Date.now() },
            At = /\?/;
          S.parseXML = function (e) {
            var t, n;
            if (!e || 'string' != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, 'text/xml');
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName('parsererror')[0]),
              (t && !n) ||
                S.error(
                  'Invalid XML: ' +
                    (n
                      ? S.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join('\n')
                      : e)
                ),
              t
            );
          };
          var Nt = /\[\]$/,
            jt = /\r?\n/g,
            Dt = /^(?:submit|button|image|reset|file)$/i,
            qt = /^(?:input|select|textarea|keygen)/i;
          function Lt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              S.each(t, function (t, i) {
                n || Nt.test(e) ? r(e, i) : Lt(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, r);
              });
            else if (n || 'object' !== T(t)) r(e, t);
            else for (i in t) Lt(e + '[' + i + ']', t[i], n, r);
          }
          (S.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
              };
            if (null == e) return '';
            if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
              S.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Lt(n, e[n], t, i);
            return r.join('&');
          }),
            S.fn.extend({
              serialize: function () {
                return S.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = S.prop(this, 'elements');
                  return e ? S.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !S(this).is(':disabled') &&
                      qt.test(this.nodeName) &&
                      !Dt.test(e) &&
                      (this.checked || !ve.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = S(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? S.map(n, function (e) {
                          return { name: t.name, value: e.replace(jt, '\r\n') };
                        })
                      : { name: t.name, value: n.replace(jt, '\r\n') };
                  })
                  .get();
              },
            });
          var Ht = /%20/g,
            Ot = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Mt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            $t = {},
            _t = {},
            Wt = '*/'.concat('*'),
            Ft = x.createElement('a');
          function Bt(e) {
            return function (t, n) {
              'string' != typeof t && ((n = t), (t = '*'));
              var r,
                i = 0,
                o = t.toLowerCase().match(I) || [];
              if (m(n))
                for (; (r = o[i++]); )
                  '+' === r[0]
                    ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function zt(e, t, n, r) {
            var i = {},
              o = e === _t;
            function s(a) {
              var u;
              return (
                (i[a] = !0),
                S.each(e[a] || [], function (e, a) {
                  var l = a(t, n, r);
                  return 'string' != typeof l || o || i[l]
                    ? o
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), s(l), !1);
                }),
                u
              );
            }
            return s(t.dataTypes[0]) || (!i['*'] && s('*'));
          }
          function Ut(e, t) {
            var n,
              r,
              i = S.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && S.extend(!0, e, r), e;
          }
          (Ft.href = kt.href),
            S.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: kt.href,
                type: 'GET',
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                  '*': Wt,
                  text: 'text/plain',
                  html: 'text/html',
                  xml: 'application/xml, text/xml',
                  json: 'application/json, text/javascript',
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
                converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': S.parseXML },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Ut(Ut(e, S.ajaxSettings), t) : Ut(S.ajaxSettings, e);
              },
              ajaxPrefilter: Bt($t),
              ajaxTransport: Bt(_t),
              ajax: function (e, t) {
                'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  f,
                  p,
                  d = S.ajaxSetup({}, t),
                  h = d.context || d,
                  g = d.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                  v = S.Deferred(),
                  m = S.Callbacks('once memory'),
                  y = d.statusCode || {},
                  b = {},
                  w = {},
                  T = 'canceled',
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!s)
                          for (s = {}; (t = Rt.exec(o)); )
                            s[t[1].toLowerCase() + ' '] = (s[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                        t = s[e.toLowerCase() + ' '];
                      }
                      return null == t ? null : t.join(', ');
                    },
                    getAllResponseHeaders: function () {
                      return l ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return null == l && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (b[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                      return null == l && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) C.always(e[C.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), k(0, t), this;
                    },
                  };
                if (
                  (v.promise(C),
                  (d.url = ((e || d.url || kt.href) + '').replace(It, kt.protocol + '//')),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || '*').toLowerCase().match(I) || ['']),
                  null == d.crossDomain)
                ) {
                  u = x.createElement('a');
                  try {
                    (u.href = d.url),
                      (u.href = u.href),
                      (d.crossDomain = Ft.protocol + '//' + Ft.host != u.protocol + '//' + u.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data && d.processData && 'string' != typeof d.data && (d.data = S.param(d.data, d.traditional)),
                  zt($t, d, t, C),
                  l)
                )
                  return C;
                for (f in ((c = S.event && d.global) && 0 == S.active++ && S.event.trigger('ajaxStart'),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Mt.test(d.type)),
                (i = d.url.replace(Ot, '')),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 === (d.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                    (d.data = d.data.replace(Ht, '+'))
                  : ((p = d.url.slice(i.length)),
                    d.data &&
                      (d.processData || 'string' == typeof d.data) &&
                      ((i += (At.test(i) ? '&' : '?') + d.data), delete d.data),
                    !1 === d.cache &&
                      ((i = i.replace(Pt, '$1')), (p = (At.test(i) ? '&' : '?') + '_=' + Et.guid++ + p)),
                    (d.url = i + p)),
                d.ifModified &&
                  (S.lastModified[i] && C.setRequestHeader('If-Modified-Since', S.lastModified[i]),
                  S.etag[i] && C.setRequestHeader('If-None-Match', S.etag[i])),
                ((d.data && d.hasContent && !1 !== d.contentType) || t.contentType) &&
                  C.setRequestHeader('Content-Type', d.contentType),
                C.setRequestHeader(
                  'Accept',
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] + ('*' !== d.dataTypes[0] ? ', ' + Wt + '; q=0.01' : '')
                    : d.accepts['*']
                ),
                d.headers))
                  C.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l)) return C.abort();
                if (((T = 'abort'), m.add(d.complete), C.done(d.success), C.fail(d.error), (n = zt(_t, d, t, C)))) {
                  if (((C.readyState = 1), c && g.trigger('ajaxSend', [C, d]), l)) return C;
                  d.async &&
                    d.timeout > 0 &&
                    (a = r.setTimeout(function () {
                      C.abort('timeout');
                    }, d.timeout));
                  try {
                    (l = !1), n.send(b, k);
                  } catch (e) {
                    if (l) throw e;
                    k(-1, e);
                  }
                } else k(-1, 'No Transport');
                function k(e, t, s, u) {
                  var f,
                    p,
                    x,
                    b,
                    w,
                    T = t;
                  l ||
                    ((l = !0),
                    a && r.clearTimeout(a),
                    (n = void 0),
                    (o = u || ''),
                    (C.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    s &&
                      (b = (function (e, t, n) {
                        for (var r, i, o, s, a = e.contents, u = e.dataTypes; '*' === u[0]; )
                          u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
                        if (r)
                          for (i in a)
                            if (a[i] && a[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[i + ' ' + u[0]]) {
                              o = i;
                              break;
                            }
                            s || (s = i);
                          }
                          o = o || s;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(d, C, s)),
                    !f &&
                      S.inArray('script', d.dataTypes) > -1 &&
                      S.inArray('json', d.dataTypes) < 0 &&
                      (d.converters['text script'] = function () {}),
                    (b = (function (e, t, n, r) {
                      var i,
                        o,
                        s,
                        a,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                          (u = o),
                          (o = c.shift()))
                        )
                          if ('*' === o) o = u;
                          else if ('*' !== u && u !== o) {
                            if (!(s = l[u + ' ' + o] || l['* ' + o]))
                              for (i in l)
                                if ((a = i.split(' '))[1] === o && (s = l[u + ' ' + a[0]] || l['* ' + a[0]])) {
                                  !0 === s ? (s = l[i]) : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: 'parsererror',
                                    error: s ? e : 'No conversion from ' + u + ' to ' + o,
                                  };
                                }
                          }
                      return { state: 'success', data: t };
                    })(d, b, C, f)),
                    f
                      ? (d.ifModified &&
                          ((w = C.getResponseHeader('Last-Modified')) && (S.lastModified[i] = w),
                          (w = C.getResponseHeader('etag')) && (S.etag[i] = w)),
                        204 === e || 'HEAD' === d.type
                          ? (T = 'nocontent')
                          : 304 === e
                          ? (T = 'notmodified')
                          : ((T = b.state), (p = b.data), (f = !(x = b.error))))
                      : ((x = T), (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ''),
                    f ? v.resolveWith(h, [p, T, C]) : v.rejectWith(h, [C, T, x]),
                    C.statusCode(y),
                    (y = void 0),
                    c && g.trigger(f ? 'ajaxSuccess' : 'ajaxError', [C, d, f ? p : x]),
                    m.fireWith(h, [C, T]),
                    c && (g.trigger('ajaxComplete', [C, d]), --S.active || S.event.trigger('ajaxStop')));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return S.get(e, t, n, 'json');
              },
              getScript: function (e, t) {
                return S.get(e, void 0, t, 'script');
              },
            }),
            S.each(['get', 'post'], function (e, t) {
              S[t] = function (e, n, r, i) {
                return (
                  m(n) && ((i = i || r), (r = n), (n = void 0)),
                  S.ajax(S.extend({ url: e, type: t, dataType: i, data: n, success: r }, S.isPlainObject(e) && e))
                );
              };
            }),
            S.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers) 'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
            }),
            (S._evalUrl = function (e, t, n) {
              return S.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: { 'text script': function () {} },
                dataFilter: function (e) {
                  S.globalEval(e, t, n);
                },
              });
            }),
            S.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (m(e) && (e = e.call(this[0])),
                    (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return m(e)
                  ? this.each(function (t) {
                      S(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = S(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = m(e);
                return this.each(function (n) {
                  S(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not('body')
                    .each(function () {
                      S(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (S.expr.pseudos.hidden = function (e) {
              return !S.expr.pseudos.visible(e);
            }),
            (S.expr.pseudos.visible = function (e) {
              return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }),
            (S.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Xt = { 0: 200, 1223: 204 },
            Vt = S.ajaxSettings.xhr();
          (v.cors = !!Vt && 'withCredentials' in Vt),
            (v.ajax = Vt = !!Vt),
            S.ajaxTransport(function (e) {
              var t, n;
              if (v.cors || (Vt && !e.crossDomain))
                return {
                  send: function (i, o) {
                    var s,
                      a = e.xhr();
                    if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest'),
                    i))
                      a.setRequestHeader(s, i[s]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                          'abort' === e
                            ? a.abort()
                            : 'error' === e
                            ? 'number' != typeof a.status
                              ? o(0, 'error')
                              : o(a.status, a.statusText)
                            : o(
                                Xt[a.status] || a.status,
                                a.statusText,
                                'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t('error')),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t('abort'));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            S.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            S.ajaxSetup({
              accepts: {
                script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                'text script': function (e) {
                  return S.globalEval(e), e;
                },
              },
            }),
            S.ajaxPrefilter('script', function (e) {
              void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
            }),
            S.ajaxTransport('script', function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = S('<script>')
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        'load error',
                        (n = function (e) {
                          t.remove(), (n = null), e && i('error' === e.type ? 404 : 200, e.type);
                        })
                      )),
                      x.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Gt,
            Yt = [],
            Qt = /(=)\?(?=&|$)|\?\?/;
          S.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function () {
              var e = Yt.pop() || S.expando + '_' + Et.guid++;
              return (this[e] = !0), e;
            },
          }),
            S.ajaxPrefilter('json jsonp', function (e, t, n) {
              var i,
                o,
                s,
                a =
                  !1 !== e.jsonp &&
                  (Qt.test(e.url)
                    ? 'url'
                    : 'string' == typeof e.data &&
                      0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                      Qt.test(e.data) &&
                      'data');
              if (a || 'jsonp' === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Qt, '$1' + i))
                    : !1 !== e.jsonp && (e.url += (At.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
                  (e.converters['script json'] = function () {
                    return s || S.error(i + ' was not called'), s[0];
                  }),
                  (e.dataTypes[0] = 'json'),
                  (o = r[i]),
                  (r[i] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? S(r).removeProp(i) : (r[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
                      s && m(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  'script'
                );
            }),
            (v.createHTMLDocument =
              (((Gt = x.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'),
              2 === Gt.childNodes.length)),
            (S.parseHTML = function (e, t, n) {
              return 'string' != typeof e
                ? []
                : ('boolean' == typeof t && ((n = t), (t = !1)),
                  t ||
                    (v.createHTMLDocument
                      ? (((r = (t = x.implementation.createHTMLDocument('')).createElement('base')).href =
                          x.location.href),
                        t.head.appendChild(r))
                      : (t = x)),
                  (o = !n && []),
                  (i = q.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = Ce([e], t, o)), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
              var r, i, o;
            }),
            (S.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                s = this,
                a = e.indexOf(' ');
              return (
                a > -1 && ((r = xt(e.slice(a))), (e = e.slice(0, a))),
                m(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (i = 'POST'),
                s.length > 0 &&
                  S.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
                    .done(function (e) {
                      (o = arguments), s.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e);
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (S.expr.pseudos.animated = function (e) {
              return S.grep(S.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (S.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l = S.css(e, 'position'),
                  c = S(e),
                  f = {};
                'static' === l && (e.style.position = 'relative'),
                  (a = c.offset()),
                  (o = S.css(e, 'top')),
                  (u = S.css(e, 'left')),
                  ('absolute' === l || 'fixed' === l) && (o + u).indexOf('auto') > -1
                    ? ((s = (r = c.position()).top), (i = r.left))
                    : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  m(t) && (t = t.call(e, n, S.extend({}, a))),
                  null != t.top && (f.top = t.top - a.top + s),
                  null != t.left && (f.left = t.left - a.left + i),
                  'using' in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            S.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        S.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                      e && (e === n.body || e === n.documentElement) && 'static' === S.css(e, 'position');

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)),
                      (i.left += S.css(e, 'borderLeftWidth', !0)));
                  }
                  return {
                    top: t.top - i.top - S.css(r, 'marginTop', !0),
                    left: t.left - i.left - S.css(r, 'marginLeft', !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (var e = this.offsetParent; e && 'static' === S.css(e, 'position'); ) e = e.offsetParent;
                  return e || se;
                });
              },
            }),
            S.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) {
              var n = 'pageYOffset' === t;
              S.fn[e] = function (r) {
                return U(
                  this,
                  function (e, r, i) {
                    var o;
                    if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i))
                      return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }),
            S.each(['top', 'left'], function (e, t) {
              S.cssHooks[t] = Ge(v.pixelPosition, function (e, n) {
                if (n) return (n = Ve(e, t)), _e.test(n) ? S(e).position()[t] + 'px' : n;
              });
            }),
            S.each({ Height: 'height', Width: 'width' }, function (e, t) {
              S.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (n, r) {
                S.fn[r] = function (i, o) {
                  var s = arguments.length && (n || 'boolean' != typeof i),
                    a = n || (!0 === i || !0 === o ? 'margin' : 'border');
                  return U(
                    this,
                    function (t, n, i) {
                      var o;
                      return y(t)
                        ? 0 === r.indexOf('outer')
                          ? t['inner' + e]
                          : t.document.documentElement['client' + e]
                        : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(
                            t.body['scroll' + e],
                            o['scroll' + e],
                            t.body['offset' + e],
                            o['offset' + e],
                            o['client' + e]
                          ))
                        : void 0 === i
                        ? S.css(t, n, a)
                        : S.style(t, n, i, a);
                    },
                    t,
                    s ? i : void 0,
                    s
                  );
                };
              });
            }),
            S.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
              S.fn[t] = function (e) {
                return this.on(t, e);
              };
            }),
            S.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            S.each(
              'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                ' '
              ),
              function (e, t) {
                S.fn[t] = function (e, n) {
                  return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
              }
            );
          var Jt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (S.proxy = function (e, t) {
            var n, r, i;
            if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (r = a.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, r.concat(a.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || S.guid++),
                i
              );
          }),
            (S.holdReady = function (e) {
              e ? S.readyWait++ : S.ready(!0);
            }),
            (S.isArray = Array.isArray),
            (S.parseJSON = JSON.parse),
            (S.nodeName = D),
            (S.isFunction = m),
            (S.isWindow = y),
            (S.camelCase = Y),
            (S.type = T),
            (S.now = Date.now),
            (S.isNumeric = function (e) {
              var t = S.type(e);
              return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
            }),
            (S.trim = function (e) {
              return null == e ? '' : (e + '').replace(Jt, '$1');
            }),
            void 0 ===
              (n = function () {
                return S;
              }.apply(t, [])) || (e.exports = n);
          var Kt = r.jQuery,
            Zt = r.$;
          return (
            (S.noConflict = function (e) {
              return r.$ === S && (r.$ = Zt), e && r.jQuery === S && (r.jQuery = Kt), S;
            }),
            void 0 === i && (r.jQuery = r.$ = S),
            S
          );
        });
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  !(function () {
    'use strict';
    n(755);
    !(function () {
      function e() {
        $(window).width() <= 768
          ? $('.voice-list-pc-unslick').not('.slick-initialized').slick({
              speed: 500,
              autoplay: !1,
              dots: !1,
              arrows: !0,
              prevArrow: '<img src="img/common/ico_slide_arrow_left.svg" class="slide-arrow prev-arrow">',
              nextArrow: '<img src="img/common/ico_slide_arrow_right.svg" class="slide-arrow next-arrow">',
              slidesToShow: 1,
              slidesToScroll: 1,
            })
          : $('.voice-list-pc-unslick.slick-initialized').slick('unslick');
      }
      $('#js-top-mainvisual').slick({
        speed: 500,
        autoplay: !0,
        autoplaySpeed: 5e3,
        dots: !0,
        dotsClass: 'slide-dots',
        arrows: !1,
      }),
        $('#js-voice-list').slick({
          speed: 500,
          autoplay: !1,
          dots: !1,
          arrows: !0,
          prevArrow: '<img src="img/common/ico_slide_arrow_left.svg" class="slide-arrow prev-arrow">',
          nextArrow: '<img src="img/common/ico_slide_arrow_right.svg" class="slide-arrow next-arrow">',
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 856, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
          ],
        }),
        $('#js-voice-list-one').slick({
          speed: 500,
          autoplay: !1,
          dots: !1,
          arrows: !0,
          prevArrow: '<img src="img/common/ico_slide_arrow_left.svg" class="slide-arrow prev-arrow">',
          nextArrow: '<img src="img/common/ico_slide_arrow_right.svg" class="slide-arrow next-arrow">',
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 856, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
          ],
        }),
        e(),
        $(window).resize(function () {
          e();
        });
    })(),
      console.log('animation'),
      console.log('form'),
      console.log('common');
  })();
})();