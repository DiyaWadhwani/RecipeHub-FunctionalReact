function jy(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              t,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Vd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Uy = { exports: {} },
  lu = {},
  by = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ta = Symbol.for("react.element"),
  j1 = Symbol.for("react.portal"),
  U1 = Symbol.for("react.fragment"),
  b1 = Symbol.for("react.strict_mode"),
  $1 = Symbol.for("react.profiler"),
  B1 = Symbol.for("react.provider"),
  z1 = Symbol.for("react.context"),
  H1 = Symbol.for("react.forward_ref"),
  W1 = Symbol.for("react.suspense"),
  q1 = Symbol.for("react.memo"),
  Q1 = Symbol.for("react.lazy"),
  em = Symbol.iterator;
function K1(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (em && t[em]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var $y = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  By = Object.assign,
  zy = {};
function ys(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = zy),
    (this.updater = n || $y);
}
ys.prototype.isReactComponent = {};
ys.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
ys.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Hy() {}
Hy.prototype = ys.prototype;
function Od(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = zy),
    (this.updater = n || $y);
}
var Md = (Od.prototype = new Hy());
Md.constructor = Od;
By(Md, ys.prototype);
Md.isPureReactComponent = !0;
var tm = Array.isArray,
  Wy = Object.prototype.hasOwnProperty,
  Fd = { current: null },
  qy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qy(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Wy.call(e, r) && !qy.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ta,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: Fd.current,
  };
}
function G1(t, e) {
  return {
    $$typeof: ta,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function jd(t) {
  return typeof t == "object" && t !== null && t.$$typeof === ta;
}
function X1(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var nm = /\/+/g;
function cc(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? X1("" + t.key)
    : e.toString(36);
}
function nl(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case ta:
          case j1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + cc(o, 0) : r),
      tm(i)
        ? ((n = ""),
          t != null && (n = t.replace(nm, "$&/") + "/"),
          nl(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (jd(i) &&
            (i = G1(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(nm, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), tm(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + cc(s, a);
      o += nl(s, e, n, l, i);
    }
  else if (((l = K1(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + cc(s, a++)), (o += nl(s, e, n, l, i));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ca(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    nl(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function Y1(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var St = { current: null },
  rl = { transition: null },
  J1 = {
    ReactCurrentDispatcher: St,
    ReactCurrentBatchConfig: rl,
    ReactCurrentOwner: Fd,
  };
ne.Children = {
  map: Ca,
  forEach: function (t, e, n) {
    Ca(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Ca(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Ca(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!jd(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
ne.Component = ys;
ne.Fragment = U1;
ne.Profiler = $1;
ne.PureComponent = Od;
ne.StrictMode = b1;
ne.Suspense = W1;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J1;
ne.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = By({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Fd.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      Wy.call(e, l) &&
        !qy.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ta, type: t.type, key: i, ref: s, props: r, _owner: o };
};
ne.createContext = function (t) {
  return (
    (t = {
      $$typeof: z1,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: B1, _context: t }),
    (t.Consumer = t)
  );
};
ne.createElement = Qy;
ne.createFactory = function (t) {
  var e = Qy.bind(null, t);
  return (e.type = t), e;
};
ne.createRef = function () {
  return { current: null };
};
ne.forwardRef = function (t) {
  return { $$typeof: H1, render: t };
};
ne.isValidElement = jd;
ne.lazy = function (t) {
  return { $$typeof: Q1, _payload: { _status: -1, _result: t }, _init: Y1 };
};
ne.memo = function (t, e) {
  return { $$typeof: q1, type: t, compare: e === void 0 ? null : e };
};
ne.startTransition = function (t) {
  var e = rl.transition;
  rl.transition = {};
  try {
    t();
  } finally {
    rl.transition = e;
  }
};
ne.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ne.useCallback = function (t, e) {
  return St.current.useCallback(t, e);
};
ne.useContext = function (t) {
  return St.current.useContext(t);
};
ne.useDebugValue = function () {};
ne.useDeferredValue = function (t) {
  return St.current.useDeferredValue(t);
};
ne.useEffect = function (t, e) {
  return St.current.useEffect(t, e);
};
ne.useId = function () {
  return St.current.useId();
};
ne.useImperativeHandle = function (t, e, n) {
  return St.current.useImperativeHandle(t, e, n);
};
ne.useInsertionEffect = function (t, e) {
  return St.current.useInsertionEffect(t, e);
};
ne.useLayoutEffect = function (t, e) {
  return St.current.useLayoutEffect(t, e);
};
ne.useMemo = function (t, e) {
  return St.current.useMemo(t, e);
};
ne.useReducer = function (t, e, n) {
  return St.current.useReducer(t, e, n);
};
ne.useRef = function (t) {
  return St.current.useRef(t);
};
ne.useState = function (t) {
  return St.current.useState(t);
};
ne.useSyncExternalStore = function (t, e, n) {
  return St.current.useSyncExternalStore(t, e, n);
};
ne.useTransition = function () {
  return St.current.useTransition();
};
ne.version = "18.2.0";
by.exports = ne;
var x = by.exports;
const Un = Vd(x),
  Z1 = jy({ __proto__: null, default: Un }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eT = x,
  tT = Symbol.for("react.element"),
  nT = Symbol.for("react.fragment"),
  rT = Object.prototype.hasOwnProperty,
  iT = eT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  sT = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ky(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) rT.call(e, r) && !sT.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: tT,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: iT.current,
  };
}
lu.Fragment = nT;
lu.jsx = Ky;
lu.jsxs = Ky;
Uy.exports = lu;
var v = Uy.exports,
  sh = {},
  Gy = { exports: {} },
  zt = {},
  Xy = { exports: {} },
  Yy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(M, W) {
    var K = M.length;
    M.push(W);
    e: for (; 0 < K; ) {
      var le = (K - 1) >>> 1,
        ge = M[le];
      if (0 < i(ge, W)) (M[le] = W), (M[K] = ge), (K = le);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var W = M[0],
      K = M.pop();
    if (K !== W) {
      M[0] = K;
      e: for (var le = 0, ge = M.length, fn = ge >>> 1; le < fn; ) {
        var Ze = 2 * (le + 1) - 1,
          nn = M[Ze],
          _t = Ze + 1,
          Jn = M[_t];
        if (0 > i(nn, K))
          _t < ge && 0 > i(Jn, nn)
            ? ((M[le] = Jn), (M[_t] = K), (le = _t))
            : ((M[le] = nn), (M[Ze] = K), (le = Ze));
        else if (_t < ge && 0 > i(Jn, K)) (M[le] = Jn), (M[_t] = K), (le = _t);
        else break e;
      }
    }
    return W;
  }
  function i(M, W) {
    var K = M.sortIndex - W.sortIndex;
    return K !== 0 ? K : M.id - W.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    g = !1,
    _ = !1,
    w = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var W = n(u); W !== null; ) {
      if (W.callback === null) r(u);
      else if (W.startTime <= M)
        r(u), (W.sortIndex = W.expirationTime), e(l, W);
      else break;
      W = n(u);
    }
  }
  function R(M) {
    if (((w = !1), m(M), !_))
      if (n(l) !== null) (_ = !0), Yn(I);
      else {
        var W = n(u);
        W !== null && we(R, W.startTime - M);
      }
  }
  function I(M, W) {
    (_ = !1), w && ((w = !1), p(N), (N = -1)), (g = !0);
    var K = d;
    try {
      for (
        m(W), h = n(l);
        h !== null && (!(h.expirationTime > W) || (M && !ae()));

      ) {
        var le = h.callback;
        if (typeof le == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var ge = le(h.expirationTime <= W);
          (W = t.unstable_now()),
            typeof ge == "function" ? (h.callback = ge) : h === n(l) && r(l),
            m(W);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var fn = !0;
      else {
        var Ze = n(u);
        Ze !== null && we(R, Ze.startTime - W), (fn = !1);
      }
      return fn;
    } finally {
      (h = null), (d = K), (g = !1);
    }
  }
  var y = !1,
    C = null,
    N = -1,
    j = 5,
    B = -1;
  function ae() {
    return !(t.unstable_now() - B < j);
  }
  function be() {
    if (C !== null) {
      var M = t.unstable_now();
      B = M;
      var W = !0;
      try {
        W = C(!0, M);
      } finally {
        W ? Me() : ((y = !1), (C = null));
      }
    } else y = !1;
  }
  var Me;
  if (typeof f == "function")
    Me = function () {
      f(be);
    };
  else if (typeof MessageChannel < "u") {
    var Wt = new MessageChannel(),
      wi = Wt.port2;
    (Wt.port1.onmessage = be),
      (Me = function () {
        wi.postMessage(null);
      });
  } else
    Me = function () {
      E(be, 0);
    };
  function Yn(M) {
    (C = M), y || ((y = !0), Me());
  }
  function we(M, W) {
    N = E(function () {
      M(t.unstable_now());
    }, W);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      _ || g || ((_ = !0), Yn(I));
    }),
    (t.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = d;
      }
      var K = d;
      d = W;
      try {
        return M();
      } finally {
        d = K;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (M, W) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var K = d;
      d = M;
      try {
        return W();
      } finally {
        d = K;
      }
    }),
    (t.unstable_scheduleCallback = function (M, W, K) {
      var le = t.unstable_now();
      switch (
        (typeof K == "object" && K !== null
          ? ((K = K.delay), (K = typeof K == "number" && 0 < K ? le + K : le))
          : (K = le),
        M)
      ) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return (
        (ge = K + ge),
        (M = {
          id: c++,
          callback: W,
          priorityLevel: M,
          startTime: K,
          expirationTime: ge,
          sortIndex: -1,
        }),
        K > le
          ? ((M.sortIndex = K),
            e(u, M),
            n(l) === null &&
              M === n(u) &&
              (w ? (p(N), (N = -1)) : (w = !0), we(R, K - le)))
          : ((M.sortIndex = ge), e(l, M), _ || g || ((_ = !0), Yn(I))),
        M
      );
    }),
    (t.unstable_shouldYield = ae),
    (t.unstable_wrapCallback = function (M) {
      var W = d;
      return function () {
        var K = d;
        d = W;
        try {
          return M.apply(this, arguments);
        } finally {
          d = K;
        }
      };
    });
})(Yy);
Xy.exports = Yy;
var oT = Xy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jy = x,
  $t = oT;
function D(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zy = new Set(),
  _o = {};
function di(t, e) {
  es(t, e), es(t + "Capture", e);
}
function es(t, e) {
  for (_o[t] = e, t = 0; t < e.length; t++) Zy.add(e[t]);
}
var Bn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  oh = Object.prototype.hasOwnProperty,
  aT =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  rm = {},
  im = {};
function lT(t) {
  return oh.call(im, t)
    ? !0
    : oh.call(rm, t)
      ? !1
      : aT.test(t)
        ? (im[t] = !0)
        : ((rm[t] = !0), !1);
}
function uT(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function cT(t, e, n, r) {
  if (e === null || typeof e > "u" || uT(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function It(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var lt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    lt[t] = new It(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  lt[e] = new It(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  lt[t] = new It(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  lt[t] = new It(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    lt[t] = new It(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  lt[t] = new It(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  lt[t] = new It(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  lt[t] = new It(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  lt[t] = new It(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Ud = /[\-:]([a-z])/g;
function bd(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Ud, bd);
    lt[e] = new It(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Ud, bd);
    lt[e] = new It(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Ud, bd);
  lt[e] = new It(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  lt[t] = new It(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
lt.xlinkHref = new It(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  lt[t] = new It(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function $d(t, e, n, r) {
  var i = lt.hasOwnProperty(e) ? lt[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (cT(e, n, i, r) && (n = null),
    r || i === null
      ? lT(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
        ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((e = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Gn = Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pa = Symbol.for("react.element"),
  ki = Symbol.for("react.portal"),
  Di = Symbol.for("react.fragment"),
  Bd = Symbol.for("react.strict_mode"),
  ah = Symbol.for("react.profiler"),
  ev = Symbol.for("react.provider"),
  tv = Symbol.for("react.context"),
  zd = Symbol.for("react.forward_ref"),
  lh = Symbol.for("react.suspense"),
  uh = Symbol.for("react.suspense_list"),
  Hd = Symbol.for("react.memo"),
  sr = Symbol.for("react.lazy"),
  nv = Symbol.for("react.offscreen"),
  sm = Symbol.iterator;
function xs(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (sm && t[sm]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Ae = Object.assign,
  hc;
function qs(t) {
  if (hc === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      hc = (e && e[1]) || "";
    }
  return (
    `
` +
    hc +
    t
  );
}
var dc = !1;
function fc(t, e) {
  if (!t || dc) return "";
  dc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (dc = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? qs(t) : "";
}
function hT(t) {
  switch (t.tag) {
    case 5:
      return qs(t.type);
    case 16:
      return qs("Lazy");
    case 13:
      return qs("Suspense");
    case 19:
      return qs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = fc(t.type, !1)), t;
    case 11:
      return (t = fc(t.type.render, !1)), t;
    case 1:
      return (t = fc(t.type, !0)), t;
    default:
      return "";
  }
}
function ch(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Di:
      return "Fragment";
    case ki:
      return "Portal";
    case ah:
      return "Profiler";
    case Bd:
      return "StrictMode";
    case lh:
      return "Suspense";
    case uh:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case tv:
        return (t.displayName || "Context") + ".Consumer";
      case ev:
        return (t._context.displayName || "Context") + ".Provider";
      case zd:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Hd:
        return (
          (e = t.displayName || null), e !== null ? e : ch(t.type) || "Memo"
        );
      case sr:
        (e = t._payload), (t = t._init);
        try {
          return ch(t(e));
        } catch {}
    }
  return null;
}
function dT(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ch(e);
    case 8:
      return e === Bd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Ir(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function rv(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function fT(t) {
  var e = rv(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function xa(t) {
  t._valueTracker || (t._valueTracker = fT(t));
}
function iv(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = rv(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function vl(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function hh(t, e) {
  var n = e.checked;
  return Ae({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function om(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Ir(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function sv(t, e) {
  (e = e.checked), e != null && $d(t, "checked", e, !1);
}
function dh(t, e) {
  sv(t, e);
  var n = Ir(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? fh(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && fh(t, e.type, Ir(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function am(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function fh(t, e, n) {
  (e !== "number" || vl(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Qs = Array.isArray;
function Wi(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Ir(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function ph(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Ae({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function lm(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(D(92));
      if (Qs(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Ir(n) };
}
function ov(t, e) {
  var n = Ir(e.value),
    r = Ir(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function um(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function av(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mh(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? av(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var ka,
  lv = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        ka = ka || document.createElement("div"),
          ka.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = ka.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function wo(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var to = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  pT = ["Webkit", "ms", "Moz", "O"];
Object.keys(to).forEach(function (t) {
  pT.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (to[e] = to[t]);
  });
});
function uv(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (to.hasOwnProperty(t) && to[t])
      ? ("" + e).trim()
      : e + "px";
}
function cv(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = uv(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var mT = Ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function gh(t, e) {
  if (e) {
    if (mT[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(D(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(D(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(D(62));
  }
}
function yh(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var vh = null;
function Wd(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var _h = null,
  qi = null,
  Qi = null;
function cm(t) {
  if ((t = ia(t))) {
    if (typeof _h != "function") throw Error(D(280));
    var e = t.stateNode;
    e && ((e = fu(e)), _h(t.stateNode, t.type, e));
  }
}
function hv(t) {
  qi ? (Qi ? Qi.push(t) : (Qi = [t])) : (qi = t);
}
function dv() {
  if (qi) {
    var t = qi,
      e = Qi;
    if (((Qi = qi = null), cm(t), e)) for (t = 0; t < e.length; t++) cm(e[t]);
  }
}
function fv(t, e) {
  return t(e);
}
function pv() {}
var pc = !1;
function mv(t, e, n) {
  if (pc) return t(e, n);
  pc = !0;
  try {
    return fv(t, e, n);
  } finally {
    (pc = !1), (qi !== null || Qi !== null) && (pv(), dv());
  }
}
function Eo(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = fu(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(D(231, e, typeof n));
  return n;
}
var wh = !1;
if (Bn)
  try {
    var ks = {};
    Object.defineProperty(ks, "passive", {
      get: function () {
        wh = !0;
      },
    }),
      window.addEventListener("test", ks, ks),
      window.removeEventListener("test", ks, ks);
  } catch {
    wh = !1;
  }
function gT(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var no = !1,
  _l = null,
  wl = !1,
  Eh = null,
  yT = {
    onError: function (t) {
      (no = !0), (_l = t);
    },
  };
function vT(t, e, n, r, i, s, o, a, l) {
  (no = !1), (_l = null), gT.apply(yT, arguments);
}
function _T(t, e, n, r, i, s, o, a, l) {
  if ((vT.apply(this, arguments), no)) {
    if (no) {
      var u = _l;
      (no = !1), (_l = null);
    } else throw Error(D(198));
    wl || ((wl = !0), (Eh = u));
  }
}
function fi(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function gv(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function hm(t) {
  if (fi(t) !== t) throw Error(D(188));
}
function wT(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = fi(t)), e === null)) throw Error(D(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return hm(i), t;
        if (s === r) return hm(i), e;
        s = s.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? t : e;
}
function yv(t) {
  return (t = wT(t)), t !== null ? vv(t) : null;
}
function vv(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = vv(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var _v = $t.unstable_scheduleCallback,
  dm = $t.unstable_cancelCallback,
  ET = $t.unstable_shouldYield,
  TT = $t.unstable_requestPaint,
  Oe = $t.unstable_now,
  RT = $t.unstable_getCurrentPriorityLevel,
  qd = $t.unstable_ImmediatePriority,
  wv = $t.unstable_UserBlockingPriority,
  El = $t.unstable_NormalPriority,
  ST = $t.unstable_LowPriority,
  Ev = $t.unstable_IdlePriority,
  uu = null,
  Sn = null;
function IT(t) {
  if (Sn && typeof Sn.onCommitFiberRoot == "function")
    try {
      Sn.onCommitFiberRoot(uu, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var un = Math.clz32 ? Math.clz32 : PT,
  AT = Math.log,
  CT = Math.LN2;
function PT(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((AT(t) / CT) | 0)) | 0;
}
var Da = 64,
  Na = 4194304;
function Ks(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Tl(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Ks(a)) : ((s &= o), s !== 0 && (r = Ks(s)));
  } else (o = n & ~i), o !== 0 ? (r = Ks(o)) : s !== 0 && (r = Ks(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - un(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function xT(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kT(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - un(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = xT(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function Th(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Tv() {
  var t = Da;
  return (Da <<= 1), !(Da & 4194240) && (Da = 64), t;
}
function mc(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function na(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - un(e)),
    (t[e] = n);
}
function DT(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - un(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function Qd(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - un(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var ce = 0;
function Rv(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sv,
  Kd,
  Iv,
  Av,
  Cv,
  Rh = !1,
  La = [],
  fr = null,
  pr = null,
  mr = null,
  To = new Map(),
  Ro = new Map(),
  ar = [],
  NT =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function fm(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      fr = null;
      break;
    case "dragenter":
    case "dragleave":
      pr = null;
      break;
    case "mouseover":
    case "mouseout":
      mr = null;
      break;
    case "pointerover":
    case "pointerout":
      To.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ro.delete(e.pointerId);
  }
}
function Ds(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = ia(e)), e !== null && Kd(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function LT(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (fr = Ds(fr, t, e, n, r, i)), !0;
    case "dragenter":
      return (pr = Ds(pr, t, e, n, r, i)), !0;
    case "mouseover":
      return (mr = Ds(mr, t, e, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return To.set(s, Ds(To.get(s) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Ro.set(s, Ds(Ro.get(s) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function Pv(t) {
  var e = Br(t.target);
  if (e !== null) {
    var n = fi(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = gv(n)), e !== null)) {
          (t.blockedOn = e),
            Cv(t.priority, function () {
              Iv(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function il(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Sh(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vh = r), n.target.dispatchEvent(r), (vh = null);
    } else return (e = ia(n)), e !== null && Kd(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function pm(t, e, n) {
  il(t) && n.delete(e);
}
function VT() {
  (Rh = !1),
    fr !== null && il(fr) && (fr = null),
    pr !== null && il(pr) && (pr = null),
    mr !== null && il(mr) && (mr = null),
    To.forEach(pm),
    Ro.forEach(pm);
}
function Ns(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Rh ||
      ((Rh = !0),
      $t.unstable_scheduleCallback($t.unstable_NormalPriority, VT)));
}
function So(t) {
  function e(i) {
    return Ns(i, t);
  }
  if (0 < La.length) {
    Ns(La[0], t);
    for (var n = 1; n < La.length; n++) {
      var r = La[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    fr !== null && Ns(fr, t),
      pr !== null && Ns(pr, t),
      mr !== null && Ns(mr, t),
      To.forEach(e),
      Ro.forEach(e),
      n = 0;
    n < ar.length;
    n++
  )
    (r = ar[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < ar.length && ((n = ar[0]), n.blockedOn === null); )
    Pv(n), n.blockedOn === null && ar.shift();
}
var Ki = Gn.ReactCurrentBatchConfig,
  Rl = !0;
function OT(t, e, n, r) {
  var i = ce,
    s = Ki.transition;
  Ki.transition = null;
  try {
    (ce = 1), Gd(t, e, n, r);
  } finally {
    (ce = i), (Ki.transition = s);
  }
}
function MT(t, e, n, r) {
  var i = ce,
    s = Ki.transition;
  Ki.transition = null;
  try {
    (ce = 4), Gd(t, e, n, r);
  } finally {
    (ce = i), (Ki.transition = s);
  }
}
function Gd(t, e, n, r) {
  if (Rl) {
    var i = Sh(t, e, n, r);
    if (i === null) Ic(t, e, r, Sl, n), fm(t, r);
    else if (LT(i, t, e, n, r)) r.stopPropagation();
    else if ((fm(t, r), e & 4 && -1 < NT.indexOf(t))) {
      for (; i !== null; ) {
        var s = ia(i);
        if (
          (s !== null && Sv(s),
          (s = Sh(t, e, n, r)),
          s === null && Ic(t, e, r, Sl, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Ic(t, e, r, null, n);
  }
}
var Sl = null;
function Sh(t, e, n, r) {
  if (((Sl = null), (t = Wd(r)), (t = Br(t)), t !== null))
    if (((e = fi(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = gv(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Sl = t), null;
}
function xv(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (RT()) {
        case qd:
          return 1;
        case wv:
          return 4;
        case El:
        case ST:
          return 16;
        case Ev:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cr = null,
  Xd = null,
  sl = null;
function kv() {
  if (sl) return sl;
  var t,
    e = Xd,
    n = e.length,
    r,
    i = "value" in cr ? cr.value : cr.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (sl = i.slice(t, 1 < r ? 1 - r : void 0));
}
function ol(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Va() {
  return !0;
}
function mm() {
  return !1;
}
function Ht(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Va
        : mm),
      (this.isPropagationStopped = mm),
      this
    );
  }
  return (
    Ae(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Va));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Va));
      },
      persist: function () {},
      isPersistent: Va,
    }),
    e
  );
}
var vs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yd = Ht(vs),
  ra = Ae({}, vs, { view: 0, detail: 0 }),
  FT = Ht(ra),
  gc,
  yc,
  Ls,
  cu = Ae({}, ra, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Jd,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Ls &&
            (Ls && t.type === "mousemove"
              ? ((gc = t.screenX - Ls.screenX), (yc = t.screenY - Ls.screenY))
              : (yc = gc = 0),
            (Ls = t)),
          gc);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : yc;
    },
  }),
  gm = Ht(cu),
  jT = Ae({}, cu, { dataTransfer: 0 }),
  UT = Ht(jT),
  bT = Ae({}, ra, { relatedTarget: 0 }),
  vc = Ht(bT),
  $T = Ae({}, vs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  BT = Ht($T),
  zT = Ae({}, vs, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  HT = Ht(zT),
  WT = Ae({}, vs, { data: 0 }),
  ym = Ht(WT),
  qT = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  QT = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  KT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function GT(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = KT[t]) ? !!e[t] : !1;
}
function Jd() {
  return GT;
}
var XT = Ae({}, ra, {
    key: function (t) {
      if (t.key) {
        var e = qT[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = ol(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? QT[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jd,
    charCode: function (t) {
      return t.type === "keypress" ? ol(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? ol(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  YT = Ht(XT),
  JT = Ae({}, cu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  vm = Ht(JT),
  ZT = Ae({}, ra, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jd,
  }),
  eR = Ht(ZT),
  tR = Ae({}, vs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nR = Ht(tR),
  rR = Ae({}, cu, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  iR = Ht(rR),
  sR = [9, 13, 27, 32],
  Zd = Bn && "CompositionEvent" in window,
  ro = null;
Bn && "documentMode" in document && (ro = document.documentMode);
var oR = Bn && "TextEvent" in window && !ro,
  Dv = Bn && (!Zd || (ro && 8 < ro && 11 >= ro)),
  _m = " ",
  wm = !1;
function Nv(t, e) {
  switch (t) {
    case "keyup":
      return sR.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Lv(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Ni = !1;
function aR(t, e) {
  switch (t) {
    case "compositionend":
      return Lv(e);
    case "keypress":
      return e.which !== 32 ? null : ((wm = !0), _m);
    case "textInput":
      return (t = e.data), t === _m && wm ? null : t;
    default:
      return null;
  }
}
function lR(t, e) {
  if (Ni)
    return t === "compositionend" || (!Zd && Nv(t, e))
      ? ((t = kv()), (sl = Xd = cr = null), (Ni = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Dv && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var uR = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Em(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!uR[t.type] : e === "textarea";
}
function Vv(t, e, n, r) {
  hv(r),
    (e = Il(e, "onChange")),
    0 < e.length &&
      ((n = new Yd("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var io = null,
  Io = null;
function cR(t) {
  Wv(t, 0);
}
function hu(t) {
  var e = Oi(t);
  if (iv(e)) return t;
}
function hR(t, e) {
  if (t === "change") return e;
}
var Ov = !1;
if (Bn) {
  var _c;
  if (Bn) {
    var wc = "oninput" in document;
    if (!wc) {
      var Tm = document.createElement("div");
      Tm.setAttribute("oninput", "return;"),
        (wc = typeof Tm.oninput == "function");
    }
    _c = wc;
  } else _c = !1;
  Ov = _c && (!document.documentMode || 9 < document.documentMode);
}
function Rm() {
  io && (io.detachEvent("onpropertychange", Mv), (Io = io = null));
}
function Mv(t) {
  if (t.propertyName === "value" && hu(Io)) {
    var e = [];
    Vv(e, Io, t, Wd(t)), mv(cR, e);
  }
}
function dR(t, e, n) {
  t === "focusin"
    ? (Rm(), (io = e), (Io = n), io.attachEvent("onpropertychange", Mv))
    : t === "focusout" && Rm();
}
function fR(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return hu(Io);
}
function pR(t, e) {
  if (t === "click") return hu(e);
}
function mR(t, e) {
  if (t === "input" || t === "change") return hu(e);
}
function gR(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var hn = typeof Object.is == "function" ? Object.is : gR;
function Ao(t, e) {
  if (hn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!oh.call(e, i) || !hn(t[i], e[i])) return !1;
  }
  return !0;
}
function Sm(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Im(t, e) {
  var n = Sm(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Sm(n);
  }
}
function Fv(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? Fv(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function jv() {
  for (var t = window, e = vl(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = vl(t.document);
  }
  return e;
}
function ef(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function yR(t) {
  var e = jv(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Fv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ef(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Im(n, s));
        var o = Im(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var vR = Bn && "documentMode" in document && 11 >= document.documentMode,
  Li = null,
  Ih = null,
  so = null,
  Ah = !1;
function Am(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ah ||
    Li == null ||
    Li !== vl(r) ||
    ((r = Li),
    "selectionStart" in r && ef(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (so && Ao(so, r)) ||
      ((so = r),
      (r = Il(Ih, "onSelect")),
      0 < r.length &&
        ((e = new Yd("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = Li))));
}
function Oa(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Vi = {
    animationend: Oa("Animation", "AnimationEnd"),
    animationiteration: Oa("Animation", "AnimationIteration"),
    animationstart: Oa("Animation", "AnimationStart"),
    transitionend: Oa("Transition", "TransitionEnd"),
  },
  Ec = {},
  Uv = {};
Bn &&
  ((Uv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vi.animationend.animation,
    delete Vi.animationiteration.animation,
    delete Vi.animationstart.animation),
  "TransitionEvent" in window || delete Vi.transitionend.transition);
function du(t) {
  if (Ec[t]) return Ec[t];
  if (!Vi[t]) return t;
  var e = Vi[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Uv) return (Ec[t] = e[n]);
  return t;
}
var bv = du("animationend"),
  $v = du("animationiteration"),
  Bv = du("animationstart"),
  zv = du("transitionend"),
  Hv = new Map(),
  Cm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kr(t, e) {
  Hv.set(t, e), di(e, [t]);
}
for (var Tc = 0; Tc < Cm.length; Tc++) {
  var Rc = Cm[Tc],
    _R = Rc.toLowerCase(),
    wR = Rc[0].toUpperCase() + Rc.slice(1);
  kr(_R, "on" + wR);
}
kr(bv, "onAnimationEnd");
kr($v, "onAnimationIteration");
kr(Bv, "onAnimationStart");
kr("dblclick", "onDoubleClick");
kr("focusin", "onFocus");
kr("focusout", "onBlur");
kr(zv, "onTransitionEnd");
es("onMouseEnter", ["mouseout", "mouseover"]);
es("onMouseLeave", ["mouseout", "mouseover"]);
es("onPointerEnter", ["pointerout", "pointerover"]);
es("onPointerLeave", ["pointerout", "pointerover"]);
di(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
di(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
di("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
di(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
di(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
di(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ER = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));
function Pm(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), _T(r, e, void 0, t), (t.currentTarget = null);
}
function Wv(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          Pm(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Pm(i, a, u), (s = l);
        }
    }
  }
  if (wl) throw ((t = Eh), (wl = !1), (Eh = null), t);
}
function ye(t, e) {
  var n = e[Dh];
  n === void 0 && (n = e[Dh] = new Set());
  var r = t + "__bubble";
  n.has(r) || (qv(e, t, 2, !1), n.add(r));
}
function Sc(t, e, n) {
  var r = 0;
  e && (r |= 4), qv(n, t, r, e);
}
var Ma = "_reactListening" + Math.random().toString(36).slice(2);
function Co(t) {
  if (!t[Ma]) {
    (t[Ma] = !0),
      Zy.forEach(function (n) {
        n !== "selectionchange" && (ER.has(n) || Sc(n, !1, t), Sc(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ma] || ((e[Ma] = !0), Sc("selectionchange", !1, e));
  }
}
function qv(t, e, n, r) {
  switch (xv(e)) {
    case 1:
      var i = OT;
      break;
    case 4:
      i = MT;
      break;
    default:
      i = Gd;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !wh ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
        ? t.addEventListener(e, n, { passive: i })
        : t.addEventListener(e, n, !1);
}
function Ic(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Br(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  mv(function () {
    var u = s,
      c = Wd(n),
      h = [];
    e: {
      var d = Hv.get(t);
      if (d !== void 0) {
        var g = Yd,
          _ = t;
        switch (t) {
          case "keypress":
            if (ol(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = YT;
            break;
          case "focusin":
            (_ = "focus"), (g = vc);
            break;
          case "focusout":
            (_ = "blur"), (g = vc);
            break;
          case "beforeblur":
          case "afterblur":
            g = vc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = gm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = UT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = eR;
            break;
          case bv:
          case $v:
          case Bv:
            g = BT;
            break;
          case zv:
            g = nR;
            break;
          case "scroll":
            g = FT;
            break;
          case "wheel":
            g = iR;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = HT;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = vm;
        }
        var w = (e & 4) !== 0,
          E = !w && t === "scroll",
          p = w ? (d !== null ? d + "Capture" : null) : d;
        w = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var R = m.stateNode;
          if (
            (m.tag === 5 &&
              R !== null &&
              ((m = R),
              p !== null && ((R = Eo(f, p)), R != null && w.push(Po(f, R, m)))),
            E)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((d = new g(d, _, null, n, c)), h.push({ event: d, listeners: w }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === "mouseover" || t === "pointerover"),
          (g = t === "mouseout" || t === "pointerout"),
          d &&
            n !== vh &&
            (_ = n.relatedTarget || n.fromElement) &&
            (Br(_) || _[zn]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((_ = n.relatedTarget || n.toElement),
              (g = u),
              (_ = _ ? Br(_) : null),
              _ !== null &&
                ((E = fi(_)), _ !== E || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((g = null), (_ = u)),
          g !== _)
        ) {
          if (
            ((w = gm),
            (R = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((w = vm),
              (R = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (E = g == null ? d : Oi(g)),
            (m = _ == null ? d : Oi(_)),
            (d = new w(R, f + "leave", g, n, c)),
            (d.target = E),
            (d.relatedTarget = m),
            (R = null),
            Br(c) === u &&
              ((w = new w(p, f + "enter", _, n, c)),
              (w.target = m),
              (w.relatedTarget = E),
              (R = w)),
            (E = R),
            g && _)
          )
            t: {
              for (w = g, p = _, f = 0, m = w; m; m = Si(m)) f++;
              for (m = 0, R = p; R; R = Si(R)) m++;
              for (; 0 < f - m; ) (w = Si(w)), f--;
              for (; 0 < m - f; ) (p = Si(p)), m--;
              for (; f--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                (w = Si(w)), (p = Si(p));
              }
              w = null;
            }
          else w = null;
          g !== null && xm(h, d, g, w, !1),
            _ !== null && E !== null && xm(h, E, _, w, !0);
        }
      }
      e: {
        if (
          ((d = u ? Oi(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var I = hR;
        else if (Em(d))
          if (Ov) I = mR;
          else {
            I = fR;
            var y = dR;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (I = pR);
        if (I && (I = I(t, u))) {
          Vv(h, I, n, c);
          break e;
        }
        y && y(t, d, u),
          t === "focusout" &&
            (y = d._wrapperState) &&
            y.controlled &&
            d.type === "number" &&
            fh(d, "number", d.value);
      }
      switch (((y = u ? Oi(u) : window), t)) {
        case "focusin":
          (Em(y) || y.contentEditable === "true") &&
            ((Li = y), (Ih = u), (so = null));
          break;
        case "focusout":
          so = Ih = Li = null;
          break;
        case "mousedown":
          Ah = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ah = !1), Am(h, n, c);
          break;
        case "selectionchange":
          if (vR) break;
        case "keydown":
        case "keyup":
          Am(h, n, c);
      }
      var C;
      if (Zd)
        e: {
          switch (t) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Ni
          ? Nv(t, n) && (N = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Dv &&
          n.locale !== "ko" &&
          (Ni || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Ni && (C = kv())
            : ((cr = c),
              (Xd = "value" in cr ? cr.value : cr.textContent),
              (Ni = !0))),
        (y = Il(u, N)),
        0 < y.length &&
          ((N = new ym(N, t, null, n, c)),
          h.push({ event: N, listeners: y }),
          C ? (N.data = C) : ((C = Lv(n)), C !== null && (N.data = C)))),
        (C = oR ? aR(t, n) : lR(t, n)) &&
          ((u = Il(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ym("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Wv(h, e);
  });
}
function Po(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Il(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Eo(t, n)),
      s != null && r.unshift(Po(t, s, i)),
      (s = Eo(t, e)),
      s != null && r.push(Po(t, s, i))),
      (t = t.return);
  }
  return r;
}
function Si(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function xm(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Eo(n, s)), l != null && o.unshift(Po(n, l, a)))
        : i || ((l = Eo(n, s)), l != null && o.push(Po(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var TR = /\r\n?/g,
  RR = /\u0000|\uFFFD/g;
function km(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      TR,
      `
`
    )
    .replace(RR, "");
}
function Fa(t, e, n) {
  if (((e = km(e)), km(t) !== e && n)) throw Error(D(425));
}
function Al() {}
var Ch = null,
  Ph = null;
function xh(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var kh = typeof setTimeout == "function" ? setTimeout : void 0,
  SR = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Dm = typeof Promise == "function" ? Promise : void 0,
  IR =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Dm < "u"
        ? function (t) {
            return Dm.resolve(null).then(t).catch(AR);
          }
        : kh;
function AR(t) {
  setTimeout(function () {
    throw t;
  });
}
function Ac(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), So(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  So(e);
}
function gr(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Nm(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var _s = Math.random().toString(36).slice(2),
  _n = "__reactFiber$" + _s,
  xo = "__reactProps$" + _s,
  zn = "__reactContainer$" + _s,
  Dh = "__reactEvents$" + _s,
  CR = "__reactListeners$" + _s,
  PR = "__reactHandles$" + _s;
function Br(t) {
  var e = t[_n];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[zn] || n[_n])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Nm(t); t !== null; ) {
          if ((n = t[_n])) return n;
          t = Nm(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function ia(t) {
  return (
    (t = t[_n] || t[zn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Oi(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(D(33));
}
function fu(t) {
  return t[xo] || null;
}
var Nh = [],
  Mi = -1;
function Dr(t) {
  return { current: t };
}
function _e(t) {
  0 > Mi || ((t.current = Nh[Mi]), (Nh[Mi] = null), Mi--);
}
function pe(t, e) {
  Mi++, (Nh[Mi] = t.current), (t.current = e);
}
var Ar = {},
  yt = Dr(Ar),
  xt = Dr(!1),
  ti = Ar;
function ts(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Ar;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function kt(t) {
  return (t = t.childContextTypes), t != null;
}
function Cl() {
  _e(xt), _e(yt);
}
function Lm(t, e, n) {
  if (yt.current !== Ar) throw Error(D(168));
  pe(yt, e), pe(xt, n);
}
function Qv(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(D(108, dT(t) || "Unknown", i));
  return Ae({}, n, r);
}
function Pl(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Ar),
    (ti = yt.current),
    pe(yt, t),
    pe(xt, xt.current),
    !0
  );
}
function Vm(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((t = Qv(t, e, ti)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      _e(xt),
      _e(yt),
      pe(yt, t))
    : _e(xt),
    pe(xt, n);
}
var Vn = null,
  pu = !1,
  Cc = !1;
function Kv(t) {
  Vn === null ? (Vn = [t]) : Vn.push(t);
}
function xR(t) {
  (pu = !0), Kv(t);
}
function Nr() {
  if (!Cc && Vn !== null) {
    Cc = !0;
    var t = 0,
      e = ce;
    try {
      var n = Vn;
      for (ce = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Vn = null), (pu = !1);
    } catch (i) {
      throw (Vn !== null && (Vn = Vn.slice(t + 1)), _v(qd, Nr), i);
    } finally {
      (ce = e), (Cc = !1);
    }
  }
  return null;
}
var Fi = [],
  ji = 0,
  xl = null,
  kl = 0,
  Kt = [],
  Gt = 0,
  ni = null,
  Mn = 1,
  Fn = "";
function jr(t, e) {
  (Fi[ji++] = kl), (Fi[ji++] = xl), (xl = t), (kl = e);
}
function Gv(t, e, n) {
  (Kt[Gt++] = Mn), (Kt[Gt++] = Fn), (Kt[Gt++] = ni), (ni = t);
  var r = Mn;
  t = Fn;
  var i = 32 - un(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - un(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Mn = (1 << (32 - un(e) + i)) | (n << i) | r),
      (Fn = s + t);
  } else (Mn = (1 << s) | (n << i) | r), (Fn = t);
}
function tf(t) {
  t.return !== null && (jr(t, 1), Gv(t, 1, 0));
}
function nf(t) {
  for (; t === xl; )
    (xl = Fi[--ji]), (Fi[ji] = null), (kl = Fi[--ji]), (Fi[ji] = null);
  for (; t === ni; )
    (ni = Kt[--Gt]),
      (Kt[Gt] = null),
      (Fn = Kt[--Gt]),
      (Kt[Gt] = null),
      (Mn = Kt[--Gt]),
      (Kt[Gt] = null);
}
var bt = null,
  Mt = null,
  Te = !1,
  ln = null;
function Xv(t, e) {
  var n = Yt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Om(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (bt = t), (Mt = gr(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (bt = t), (Mt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = ni !== null ? { id: Mn, overflow: Fn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Yt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (bt = t),
            (Mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Lh(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Vh(t) {
  if (Te) {
    var e = Mt;
    if (e) {
      var n = e;
      if (!Om(t, e)) {
        if (Lh(t)) throw Error(D(418));
        e = gr(n.nextSibling);
        var r = bt;
        e && Om(t, e)
          ? Xv(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (Te = !1), (bt = t));
      }
    } else {
      if (Lh(t)) throw Error(D(418));
      (t.flags = (t.flags & -4097) | 2), (Te = !1), (bt = t);
    }
  }
}
function Mm(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  bt = t;
}
function ja(t) {
  if (t !== bt) return !1;
  if (!Te) return Mm(t), (Te = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !xh(t.type, t.memoizedProps))),
    e && (e = Mt))
  ) {
    if (Lh(t)) throw (Yv(), Error(D(418)));
    for (; e; ) Xv(t, e), (e = gr(e.nextSibling));
  }
  if ((Mm(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(D(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Mt = gr(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      Mt = null;
    }
  } else Mt = bt ? gr(t.stateNode.nextSibling) : null;
  return !0;
}
function Yv() {
  for (var t = Mt; t; ) t = gr(t.nextSibling);
}
function ns() {
  (Mt = bt = null), (Te = !1);
}
function rf(t) {
  ln === null ? (ln = [t]) : ln.push(t);
}
var kR = Gn.ReactCurrentBatchConfig;
function sn(t, e) {
  if (t && t.defaultProps) {
    (e = Ae({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Dl = Dr(null),
  Nl = null,
  Ui = null,
  sf = null;
function of() {
  sf = Ui = Nl = null;
}
function af(t) {
  var e = Dl.current;
  _e(Dl), (t._currentValue = e);
}
function Oh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Gi(t, e) {
  (Nl = t),
    (sf = Ui = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (Pt = !0), (t.firstContext = null));
}
function Zt(t) {
  var e = t._currentValue;
  if (sf !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Ui === null)) {
      if (Nl === null) throw Error(D(308));
      (Ui = t), (Nl.dependencies = { lanes: 0, firstContext: t });
    } else Ui = Ui.next = t;
  return e;
}
var zr = null;
function lf(t) {
  zr === null ? (zr = [t]) : zr.push(t);
}
function Jv(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), lf(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    Hn(t, r)
  );
}
function Hn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var or = !1;
function uf(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zv(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function bn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yr(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), oe & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      Hn(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), lf(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Hn(t, n)
  );
}
function al(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Qd(t, n);
  }
}
function Fm(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Ll(t, e, n, r) {
  var i = t.updateQueue;
  or = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var h = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var _ = t,
            w = a;
          switch (((d = e), (g = n), w.tag)) {
            case 1:
              if (((_ = w.payload), typeof _ == "function")) {
                h = _.call(g, h, d);
                break e;
              }
              h = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = w.payload),
                (d = typeof _ == "function" ? _.call(g, h, d) : _),
                d == null)
              )
                break e;
              h = Ae({}, h, d);
              break e;
            case 2:
              or = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = h)) : (c = c.next = g),
          (o |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = h),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (ii |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function jm(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(D(191, i));
        i.call(r);
      }
    }
}
var e_ = new Jy.Component().refs;
function Mh(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : Ae({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var mu = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? fi(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Rt(),
      i = _r(t),
      s = bn(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = yr(t, s, i)),
      e !== null && (cn(e, t, i, r), al(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Rt(),
      i = _r(t),
      s = bn(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = yr(t, s, i)),
      e !== null && (cn(e, t, i, r), al(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Rt(),
      r = _r(t),
      i = bn(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = yr(t, i, r)),
      e !== null && (cn(e, t, r, n), al(e, t, r));
  },
};
function Um(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
        ? !Ao(n, r) || !Ao(i, s)
        : !0
  );
}
function t_(t, e, n) {
  var r = !1,
    i = Ar,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Zt(s))
      : ((i = kt(e) ? ti : yt.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? ts(t, i) : Ar)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = mu),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function bm(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && mu.enqueueReplaceState(e, e.state, null);
}
function Fh(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = e_), uf(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Zt(s))
    : ((s = kt(e) ? ti : yt.current), (i.context = ts(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (Mh(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && mu.enqueueReplaceState(i, i.state, null),
      Ll(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function Vs(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            a === e_ && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, t));
  }
  return t;
}
function Ua(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      D(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function $m(t) {
  var e = t._init;
  return e(t._payload);
}
function n_(t) {
  function e(p, f) {
    if (t) {
      var m = p.deletions;
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
    }
  }
  function n(p, f) {
    if (!t) return null;
    for (; f !== null; ) e(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = wr(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, f, m) {
    return (
      (p.index = m),
      t
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function o(p) {
    return t && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, m, R) {
    return f === null || f.tag !== 6
      ? ((f = Vc(m, p.mode, R)), (f.return = p), f)
      : ((f = i(f, m)), (f.return = p), f);
  }
  function l(p, f, m, R) {
    var I = m.type;
    return I === Di
      ? c(p, f, m.props.children, R, m.key)
      : f !== null &&
          (f.elementType === I ||
            (typeof I == "object" &&
              I !== null &&
              I.$$typeof === sr &&
              $m(I) === f.type))
        ? ((R = i(f, m.props)), (R.ref = Vs(p, f, m)), (R.return = p), R)
        : ((R = fl(m.type, m.key, m.props, null, p.mode, R)),
          (R.ref = Vs(p, f, m)),
          (R.return = p),
          R);
  }
  function u(p, f, m, R) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Oc(m, p.mode, R)), (f.return = p), f)
      : ((f = i(f, m.children || [])), (f.return = p), f);
  }
  function c(p, f, m, R, I) {
    return f === null || f.tag !== 7
      ? ((f = Jr(m, p.mode, R, I)), (f.return = p), f)
      : ((f = i(f, m)), (f.return = p), f);
  }
  function h(p, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Vc("" + f, p.mode, m)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Pa:
          return (
            (m = fl(f.type, f.key, f.props, null, p.mode, m)),
            (m.ref = Vs(p, null, f)),
            (m.return = p),
            m
          );
        case ki:
          return (f = Oc(f, p.mode, m)), (f.return = p), f;
        case sr:
          var R = f._init;
          return h(p, R(f._payload), m);
      }
      if (Qs(f) || xs(f))
        return (f = Jr(f, p.mode, m, null)), (f.return = p), f;
      Ua(p, f);
    }
    return null;
  }
  function d(p, f, m, R) {
    var I = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return I !== null ? null : a(p, f, "" + m, R);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Pa:
          return m.key === I ? l(p, f, m, R) : null;
        case ki:
          return m.key === I ? u(p, f, m, R) : null;
        case sr:
          return (I = m._init), d(p, f, I(m._payload), R);
      }
      if (Qs(m) || xs(m)) return I !== null ? null : c(p, f, m, R, null);
      Ua(p, m);
    }
    return null;
  }
  function g(p, f, m, R, I) {
    if ((typeof R == "string" && R !== "") || typeof R == "number")
      return (p = p.get(m) || null), a(f, p, "" + R, I);
    if (typeof R == "object" && R !== null) {
      switch (R.$$typeof) {
        case Pa:
          return (p = p.get(R.key === null ? m : R.key) || null), l(f, p, R, I);
        case ki:
          return (p = p.get(R.key === null ? m : R.key) || null), u(f, p, R, I);
        case sr:
          var y = R._init;
          return g(p, f, m, y(R._payload), I);
      }
      if (Qs(R) || xs(R)) return (p = p.get(m) || null), c(f, p, R, I, null);
      Ua(f, R);
    }
    return null;
  }
  function _(p, f, m, R) {
    for (
      var I = null, y = null, C = f, N = (f = 0), j = null;
      C !== null && N < m.length;
      N++
    ) {
      C.index > N ? ((j = C), (C = null)) : (j = C.sibling);
      var B = d(p, C, m[N], R);
      if (B === null) {
        C === null && (C = j);
        break;
      }
      t && C && B.alternate === null && e(p, C),
        (f = s(B, f, N)),
        y === null ? (I = B) : (y.sibling = B),
        (y = B),
        (C = j);
    }
    if (N === m.length) return n(p, C), Te && jr(p, N), I;
    if (C === null) {
      for (; N < m.length; N++)
        (C = h(p, m[N], R)),
          C !== null &&
            ((f = s(C, f, N)), y === null ? (I = C) : (y.sibling = C), (y = C));
      return Te && jr(p, N), I;
    }
    for (C = r(p, C); N < m.length; N++)
      (j = g(C, p, N, m[N], R)),
        j !== null &&
          (t && j.alternate !== null && C.delete(j.key === null ? N : j.key),
          (f = s(j, f, N)),
          y === null ? (I = j) : (y.sibling = j),
          (y = j));
    return (
      t &&
        C.forEach(function (ae) {
          return e(p, ae);
        }),
      Te && jr(p, N),
      I
    );
  }
  function w(p, f, m, R) {
    var I = xs(m);
    if (typeof I != "function") throw Error(D(150));
    if (((m = I.call(m)), m == null)) throw Error(D(151));
    for (
      var y = (I = null), C = f, N = (f = 0), j = null, B = m.next();
      C !== null && !B.done;
      N++, B = m.next()
    ) {
      C.index > N ? ((j = C), (C = null)) : (j = C.sibling);
      var ae = d(p, C, B.value, R);
      if (ae === null) {
        C === null && (C = j);
        break;
      }
      t && C && ae.alternate === null && e(p, C),
        (f = s(ae, f, N)),
        y === null ? (I = ae) : (y.sibling = ae),
        (y = ae),
        (C = j);
    }
    if (B.done) return n(p, C), Te && jr(p, N), I;
    if (C === null) {
      for (; !B.done; N++, B = m.next())
        (B = h(p, B.value, R)),
          B !== null &&
            ((f = s(B, f, N)), y === null ? (I = B) : (y.sibling = B), (y = B));
      return Te && jr(p, N), I;
    }
    for (C = r(p, C); !B.done; N++, B = m.next())
      (B = g(C, p, N, B.value, R)),
        B !== null &&
          (t && B.alternate !== null && C.delete(B.key === null ? N : B.key),
          (f = s(B, f, N)),
          y === null ? (I = B) : (y.sibling = B),
          (y = B));
    return (
      t &&
        C.forEach(function (be) {
          return e(p, be);
        }),
      Te && jr(p, N),
      I
    );
  }
  function E(p, f, m, R) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Di &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Pa:
          e: {
            for (var I = m.key, y = f; y !== null; ) {
              if (y.key === I) {
                if (((I = m.type), I === Di)) {
                  if (y.tag === 7) {
                    n(p, y.sibling),
                      (f = i(y, m.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  y.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === sr &&
                    $m(I) === y.type)
                ) {
                  n(p, y.sibling),
                    (f = i(y, m.props)),
                    (f.ref = Vs(p, y, m)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, y);
                break;
              } else e(p, y);
              y = y.sibling;
            }
            m.type === Di
              ? ((f = Jr(m.props.children, p.mode, R, m.key)),
                (f.return = p),
                (p = f))
              : ((R = fl(m.type, m.key, m.props, null, p.mode, R)),
                (R.ref = Vs(p, f, m)),
                (R.return = p),
                (p = R));
          }
          return o(p);
        case ki:
          e: {
            for (y = m.key; f !== null; ) {
              if (f.key === y)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(p, f.sibling),
                    (f = i(f, m.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else e(p, f);
              f = f.sibling;
            }
            (f = Oc(m, p.mode, R)), (f.return = p), (p = f);
          }
          return o(p);
        case sr:
          return (y = m._init), E(p, f, y(m._payload), R);
      }
      if (Qs(m)) return _(p, f, m, R);
      if (xs(m)) return w(p, f, m, R);
      Ua(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, m)), (f.return = p), (p = f))
          : (n(p, f), (f = Vc(m, p.mode, R)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return E;
}
var rs = n_(!0),
  r_ = n_(!1),
  sa = {},
  In = Dr(sa),
  ko = Dr(sa),
  Do = Dr(sa);
function Hr(t) {
  if (t === sa) throw Error(D(174));
  return t;
}
function cf(t, e) {
  switch ((pe(Do, e), pe(ko, t), pe(In, sa), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : mh(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = mh(e, t));
  }
  _e(In), pe(In, e);
}
function is() {
  _e(In), _e(ko), _e(Do);
}
function i_(t) {
  Hr(Do.current);
  var e = Hr(In.current),
    n = mh(e, t.type);
  e !== n && (pe(ko, t), pe(In, n));
}
function hf(t) {
  ko.current === t && (_e(In), _e(ko));
}
var Se = Dr(0);
function Vl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Pc = [];
function df() {
  for (var t = 0; t < Pc.length; t++)
    Pc[t]._workInProgressVersionPrimary = null;
  Pc.length = 0;
}
var ll = Gn.ReactCurrentDispatcher,
  xc = Gn.ReactCurrentBatchConfig,
  ri = 0,
  Ie = null,
  $e = null,
  Ke = null,
  Ol = !1,
  oo = !1,
  No = 0,
  DR = 0;
function ut() {
  throw Error(D(321));
}
function ff(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!hn(t[n], e[n])) return !1;
  return !0;
}
function pf(t, e, n, r, i, s) {
  if (
    ((ri = s),
    (Ie = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (ll.current = t === null || t.memoizedState === null ? OR : MR),
    (t = n(r, i)),
    oo)
  ) {
    s = 0;
    do {
      if (((oo = !1), (No = 0), 25 <= s)) throw Error(D(301));
      (s += 1),
        (Ke = $e = null),
        (e.updateQueue = null),
        (ll.current = FR),
        (t = n(r, i));
    } while (oo);
  }
  if (
    ((ll.current = Ml),
    (e = $e !== null && $e.next !== null),
    (ri = 0),
    (Ke = $e = Ie = null),
    (Ol = !1),
    e)
  )
    throw Error(D(300));
  return t;
}
function mf() {
  var t = No !== 0;
  return (No = 0), t;
}
function vn() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ke === null ? (Ie.memoizedState = Ke = t) : (Ke = Ke.next = t), Ke;
}
function en() {
  if ($e === null) {
    var t = Ie.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = $e.next;
  var e = Ke === null ? Ie.memoizedState : Ke.next;
  if (e !== null) (Ke = e), ($e = t);
  else {
    if (t === null) throw Error(D(310));
    ($e = t),
      (t = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null,
      }),
      Ke === null ? (Ie.memoizedState = Ke = t) : (Ke = Ke.next = t);
  }
  return Ke;
}
function Lo(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function kc(t) {
  var e = en(),
    n = e.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = t;
  var r = $e,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((ri & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = h), (o = r)) : (l = l.next = h),
          (Ie.lanes |= c),
          (ii |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      hn(r, e.memoizedState) || (Pt = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (Ie.lanes |= s), (ii |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Dc(t) {
  var e = en(),
    n = e.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    hn(s, e.memoizedState) || (Pt = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function s_() {}
function o_(t, e) {
  var n = Ie,
    r = en(),
    i = e(),
    s = !hn(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Pt = !0)),
    (r = r.queue),
    gf(u_.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (Ke !== null && Ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vo(9, l_.bind(null, n, r, i, e), void 0, null),
      Xe === null)
    )
      throw Error(D(349));
    ri & 30 || a_(n, e, i);
  }
  return i;
}
function a_(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Ie.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Ie.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function l_(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), c_(e) && h_(t);
}
function u_(t, e, n) {
  return n(function () {
    c_(e) && h_(t);
  });
}
function c_(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !hn(t, n);
  } catch {
    return !0;
  }
}
function h_(t) {
  var e = Hn(t, 1);
  e !== null && cn(e, t, 1, -1);
}
function Bm(t) {
  var e = vn();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lo,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = VR.bind(null, Ie, t)),
    [e.memoizedState, t]
  );
}
function Vo(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Ie.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Ie.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function d_() {
  return en().memoizedState;
}
function ul(t, e, n, r) {
  var i = vn();
  (Ie.flags |= t),
    (i.memoizedState = Vo(1 | e, n, void 0, r === void 0 ? null : r));
}
function gu(t, e, n, r) {
  var i = en();
  r = r === void 0 ? null : r;
  var s = void 0;
  if ($e !== null) {
    var o = $e.memoizedState;
    if (((s = o.destroy), r !== null && ff(r, o.deps))) {
      i.memoizedState = Vo(e, n, s, r);
      return;
    }
  }
  (Ie.flags |= t), (i.memoizedState = Vo(1 | e, n, s, r));
}
function zm(t, e) {
  return ul(8390656, 8, t, e);
}
function gf(t, e) {
  return gu(2048, 8, t, e);
}
function f_(t, e) {
  return gu(4, 2, t, e);
}
function p_(t, e) {
  return gu(4, 4, t, e);
}
function m_(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function g_(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), gu(4, 4, m_.bind(null, e, t), n)
  );
}
function yf() {}
function y_(t, e) {
  var n = en();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && ff(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function v_(t, e) {
  var n = en();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && ff(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function __(t, e, n) {
  return ri & 21
    ? (hn(n, e) || ((n = Tv()), (Ie.lanes |= n), (ii |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (Pt = !0)), (t.memoizedState = n));
}
function NR(t, e) {
  var n = ce;
  (ce = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = xc.transition;
  xc.transition = {};
  try {
    t(!1), e();
  } finally {
    (ce = n), (xc.transition = r);
  }
}
function w_() {
  return en().memoizedState;
}
function LR(t, e, n) {
  var r = _r(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    E_(t))
  )
    T_(e, n);
  else if (((n = Jv(t, e, n, r)), n !== null)) {
    var i = Rt();
    cn(n, t, r, i), R_(n, e, r);
  }
}
function VR(t, e, n) {
  var r = _r(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (E_(t)) T_(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), hn(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((i.next = i), lf(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Jv(t, e, i, r)),
      n !== null && ((i = Rt()), cn(n, t, r, i), R_(n, e, r));
  }
}
function E_(t) {
  var e = t.alternate;
  return t === Ie || (e !== null && e === Ie);
}
function T_(t, e) {
  oo = Ol = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function R_(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Qd(t, n);
  }
}
var Ml = {
    readContext: Zt,
    useCallback: ut,
    useContext: ut,
    useEffect: ut,
    useImperativeHandle: ut,
    useInsertionEffect: ut,
    useLayoutEffect: ut,
    useMemo: ut,
    useReducer: ut,
    useRef: ut,
    useState: ut,
    useDebugValue: ut,
    useDeferredValue: ut,
    useTransition: ut,
    useMutableSource: ut,
    useSyncExternalStore: ut,
    useId: ut,
    unstable_isNewReconciler: !1,
  },
  OR = {
    readContext: Zt,
    useCallback: function (t, e) {
      return (vn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Zt,
    useEffect: zm,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        ul(4194308, 4, m_.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return ul(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return ul(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = vn();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = vn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = LR.bind(null, Ie, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = vn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: Bm,
    useDebugValue: yf,
    useDeferredValue: function (t) {
      return (vn().memoizedState = t);
    },
    useTransition: function () {
      var t = Bm(!1),
        e = t[0];
      return (t = NR.bind(null, t[1])), (vn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = Ie,
        i = vn();
      if (Te) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = e()), Xe === null)) throw Error(D(349));
        ri & 30 || a_(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        zm(u_.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        Vo(9, l_.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = vn(),
        e = Xe.identifierPrefix;
      if (Te) {
        var n = Fn,
          r = Mn;
        (n = (r & ~(1 << (32 - un(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = No++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = DR++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  MR = {
    readContext: Zt,
    useCallback: y_,
    useContext: Zt,
    useEffect: gf,
    useImperativeHandle: g_,
    useInsertionEffect: f_,
    useLayoutEffect: p_,
    useMemo: v_,
    useReducer: kc,
    useRef: d_,
    useState: function () {
      return kc(Lo);
    },
    useDebugValue: yf,
    useDeferredValue: function (t) {
      var e = en();
      return __(e, $e.memoizedState, t);
    },
    useTransition: function () {
      var t = kc(Lo)[0],
        e = en().memoizedState;
      return [t, e];
    },
    useMutableSource: s_,
    useSyncExternalStore: o_,
    useId: w_,
    unstable_isNewReconciler: !1,
  },
  FR = {
    readContext: Zt,
    useCallback: y_,
    useContext: Zt,
    useEffect: gf,
    useImperativeHandle: g_,
    useInsertionEffect: f_,
    useLayoutEffect: p_,
    useMemo: v_,
    useReducer: Dc,
    useRef: d_,
    useState: function () {
      return Dc(Lo);
    },
    useDebugValue: yf,
    useDeferredValue: function (t) {
      var e = en();
      return $e === null ? (e.memoizedState = t) : __(e, $e.memoizedState, t);
    },
    useTransition: function () {
      var t = Dc(Lo)[0],
        e = en().memoizedState;
      return [t, e];
    },
    useMutableSource: s_,
    useSyncExternalStore: o_,
    useId: w_,
    unstable_isNewReconciler: !1,
  };
function ss(t, e) {
  try {
    var n = "",
      r = e;
    do (n += hT(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Nc(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function jh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jR = typeof WeakMap == "function" ? WeakMap : Map;
function S_(t, e, n) {
  (n = bn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      jl || ((jl = !0), (Kh = r)), jh(t, e);
    }),
    n
  );
}
function I_(t, e, n) {
  (n = bn(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        jh(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        jh(t, e),
          typeof r != "function" &&
            (vr === null ? (vr = new Set([this])) : vr.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Hm(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new jR();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = JR.bind(null, t, e, n)), e.then(t, t));
}
function Wm(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function qm(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = bn(-1, 1)), (e.tag = 2), yr(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var UR = Gn.ReactCurrentOwner,
  Pt = !1;
function Et(t, e, n, r) {
  e.child = t === null ? r_(e, null, n, r) : rs(e, t.child, n, r);
}
function Qm(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    Gi(e, i),
    (r = pf(t, e, n, r, s, i)),
    (n = mf()),
    t !== null && !Pt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Wn(t, e, i))
      : (Te && n && tf(e), (e.flags |= 1), Et(t, e, r, i), e.child)
  );
}
function Km(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !If(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), A_(t, e, s, r, i))
      : ((t = fl(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ao), n(o, r) && t.ref === e.ref)
    )
      return Wn(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = wr(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function A_(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Ao(s, r) && t.ref === e.ref)
      if (((Pt = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (Pt = !0);
      else return (e.lanes = t.lanes), Wn(t, e, i);
  }
  return Uh(t, e, n, r, i);
}
function C_(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe($i, Ot),
        (Ot |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          pe($i, Ot),
          (Ot |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        pe($i, Ot),
        (Ot |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      pe($i, Ot),
      (Ot |= r);
  return Et(t, e, i, n), e.child;
}
function P_(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Uh(t, e, n, r, i) {
  var s = kt(n) ? ti : yt.current;
  return (
    (s = ts(e, s)),
    Gi(e, i),
    (n = pf(t, e, n, r, s, i)),
    (r = mf()),
    t !== null && !Pt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Wn(t, e, i))
      : (Te && r && tf(e), (e.flags |= 1), Et(t, e, n, i), e.child)
  );
}
function Gm(t, e, n, r, i) {
  if (kt(n)) {
    var s = !0;
    Pl(e);
  } else s = !1;
  if ((Gi(e, i), e.stateNode === null))
    cl(t, e), t_(e, n, r), Fh(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Zt(u))
      : ((u = kt(n) ? ti : yt.current), (u = ts(e, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && bm(e, o, r, u)),
      (or = !1);
    var d = e.memoizedState;
    (o.state = d),
      Ll(e, r, o, i),
      (l = e.memoizedState),
      a !== r || d !== l || xt.current || or
        ? (typeof c == "function" && (Mh(e, n, c, r), (l = e.memoizedState)),
          (a = or || Um(e, n, a, r, d, l, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      Zv(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : sn(e.type, a)),
      (o.props = u),
      (h = e.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Zt(l))
        : ((l = kt(n) ? ti : yt.current), (l = ts(e, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== h || d !== l) && bm(e, o, r, l)),
      (or = !1),
      (d = e.memoizedState),
      (o.state = d),
      Ll(e, r, o, i);
    var _ = e.memoizedState;
    a !== h || d !== _ || xt.current || or
      ? (typeof g == "function" && (Mh(e, n, g, r), (_ = e.memoizedState)),
        (u = or || Um(e, n, u, r, d, _, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, _, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, _, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = _)),
        (o.props = r),
        (o.state = _),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return bh(t, e, n, r, s, i);
}
function bh(t, e, n, r, i, s) {
  P_(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && Vm(e, n, !1), Wn(t, e, s);
  (r = e.stateNode), (UR.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = rs(e, t.child, null, s)), (e.child = rs(e, null, a, s)))
      : Et(t, e, a, s),
    (e.memoizedState = r.state),
    i && Vm(e, n, !0),
    e.child
  );
}
function x_(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Lm(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Lm(t, e.context, !1),
    cf(t, e.containerInfo);
}
function Xm(t, e, n, r, i) {
  return ns(), rf(i), (e.flags |= 256), Et(t, e, n, r), e.child;
}
var $h = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bh(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function k_(t, e, n) {
  var r = e.pendingProps,
    i = Se.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    pe(Se, i & 1),
    t === null)
  )
    return (
      Vh(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = _u(o, r, 0, null)),
              (t = Jr(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Bh(n)),
              (e.memoizedState = $h),
              t)
            : vf(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return bR(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = wr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = wr(a, s)) : ((s = Jr(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Bh(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = $h),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = wr(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function vf(t, e) {
  return (
    (e = _u({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function ba(t, e, n, r) {
  return (
    r !== null && rf(r),
    rs(e, t.child, null, n),
    (t = vf(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function bR(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Nc(Error(D(422)))), ba(t, e, o, r))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((s = r.fallback),
          (i = e.mode),
          (r = _u({ mode: "visible", children: r.children }, i, 0, null)),
          (s = Jr(s, i, o, null)),
          (s.flags |= 2),
          (r.return = e),
          (s.return = e),
          (r.sibling = s),
          (e.child = r),
          e.mode & 1 && rs(e, t.child, null, o),
          (e.child.memoizedState = Bh(o)),
          (e.memoizedState = $h),
          s);
  if (!(e.mode & 1)) return ba(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(D(419))), (r = Nc(s, r, void 0)), ba(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), Pt || a)) {
    if (((r = Xe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Hn(t, i), cn(r, t, i, -1));
    }
    return Sf(), (r = Nc(Error(D(421)))), ba(t, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = ZR.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (Mt = gr(i.nextSibling)),
      (bt = e),
      (Te = !0),
      (ln = null),
      t !== null &&
        ((Kt[Gt++] = Mn),
        (Kt[Gt++] = Fn),
        (Kt[Gt++] = ni),
        (Mn = t.id),
        (Fn = t.overflow),
        (ni = e)),
      (e = vf(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Ym(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), Oh(t.return, e, n);
}
function Lc(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function D_(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Et(t, e, r.children, n), (r = Se.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Ym(t, n, e);
        else if (t.tag === 19) Ym(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((pe(Se, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && Vl(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Lc(e, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && Vl(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        Lc(e, !0, n, null, s);
        break;
      case "together":
        Lc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function cl(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Wn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (ii |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(D(153));
  if (e.child !== null) {
    for (
      t = e.child, n = wr(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = wr(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function $R(t, e, n) {
  switch (e.tag) {
    case 3:
      x_(e), ns();
      break;
    case 5:
      i_(e);
      break;
    case 1:
      kt(e.type) && Pl(e);
      break;
    case 4:
      cf(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      pe(Dl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(Se, Se.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? k_(t, e, n)
            : (pe(Se, Se.current & 1),
              (t = Wn(t, e, n)),
              t !== null ? t.sibling : null);
      pe(Se, Se.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return D_(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        pe(Se, Se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), C_(t, e, n);
  }
  return Wn(t, e, n);
}
var N_, zh, L_, V_;
N_ = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
zh = function () {};
L_ = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), Hr(In.current);
    var s = null;
    switch (n) {
      case "input":
        (i = hh(t, i)), (r = hh(t, r)), (s = []);
        break;
      case "select":
        (i = Ae({}, i, { value: void 0 })),
          (r = Ae({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = ph(t, i)), (r = ph(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = Al);
    }
    gh(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (_o.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (_o.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && ye("scroll", t),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
V_ = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Os(t, e) {
  if (!Te)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ct(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function BR(t, e, n) {
  var r = e.pendingProps;
  switch ((nf(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ct(e), null;
    case 1:
      return kt(e.type) && Cl(), ct(e), null;
    case 3:
      return (
        (r = e.stateNode),
        is(),
        _e(xt),
        _e(yt),
        df(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (ja(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), ln !== null && (Yh(ln), (ln = null)))),
        zh(t, e),
        ct(e),
        null
      );
    case 5:
      hf(e);
      var i = Hr(Do.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        L_(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(D(166));
          return ct(e), null;
        }
        if (((t = Hr(In.current)), ja(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[_n] = e), (r[xo] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Gs.length; i++) ye(Gs[i], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye("error", r), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              om(r, s), ye("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ye("invalid", r);
              break;
            case "textarea":
              lm(r, s), ye("invalid", r);
          }
          gh(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Fa(r.textContent, a, t),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Fa(r.textContent, a, t),
                    (i = ["children", "" + a]))
                : _o.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ye("scroll", r);
            }
          switch (n) {
            case "input":
              xa(r), am(r, s, !0);
              break;
            case "textarea":
              xa(r), um(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Al);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = av(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                  ? (t = o.createElement(n, { is: r.is }))
                  : ((t = o.createElement(n)),
                    n === "select" &&
                      ((o = t),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[_n] = e),
            (t[xo] = r),
            N_(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = yh(n, r)), n)) {
              case "dialog":
                ye("cancel", t), ye("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Gs.length; i++) ye(Gs[i], t);
                i = r;
                break;
              case "source":
                ye("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", t), ye("load", t), (i = r);
                break;
              case "details":
                ye("toggle", t), (i = r);
                break;
              case "input":
                om(t, r), (i = hh(t, r)), ye("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ae({}, r, { value: void 0 })),
                  ye("invalid", t);
                break;
              case "textarea":
                lm(t, r), (i = ph(t, r)), ye("invalid", t);
                break;
              default:
                i = r;
            }
            gh(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? cv(t, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && lv(t, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && wo(t, l)
                        : typeof l == "number" && wo(t, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (_o.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && ye("scroll", t)
                          : l != null && $d(t, s, l, o));
              }
            switch (n) {
              case "input":
                xa(t), am(t, r, !1);
                break;
              case "textarea":
                xa(t), um(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Ir(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Wi(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Wi(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = Al);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return ct(e), null;
    case 6:
      if (t && e.stateNode != null) V_(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(D(166));
        if (((n = Hr(Do.current)), Hr(In.current), ja(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[_n] = e),
            (s = r.nodeValue !== n) && ((t = bt), t !== null))
          )
            switch (t.tag) {
              case 3:
                Fa(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Fa(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_n] = e),
            (e.stateNode = r);
      }
      return ct(e), null;
    case 13:
      if (
        (_e(Se),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (Te && Mt !== null && e.mode & 1 && !(e.flags & 128))
          Yv(), ns(), (e.flags |= 98560), (s = !1);
        else if (((s = ja(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(D(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(D(317));
            s[_n] = e;
          } else
            ns(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          ct(e), (s = !1);
        } else ln !== null && (Yh(ln), (ln = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Se.current & 1 ? ze === 0 && (ze = 3) : Sf())),
          e.updateQueue !== null && (e.flags |= 4),
          ct(e),
          null);
    case 4:
      return (
        is(), zh(t, e), t === null && Co(e.stateNode.containerInfo), ct(e), null
      );
    case 10:
      return af(e.type._context), ct(e), null;
    case 17:
      return kt(e.type) && Cl(), ct(e), null;
    case 19:
      if ((_e(Se), (s = e.memoizedState), s === null)) return ct(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Os(s, !1);
        else {
          if (ze !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = Vl(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Os(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return pe(Se, (Se.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Oe() > os &&
            ((e.flags |= 128), (r = !0), Os(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = Vl(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Os(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !Te)
            )
              return ct(e), null;
          } else
            2 * Oe() - s.renderingStartTime > os &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Os(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Oe()),
          (e.sibling = null),
          (n = Se.current),
          pe(Se, r ? (n & 1) | 2 : n & 1),
          e)
        : (ct(e), null);
    case 22:
    case 23:
      return (
        Rf(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? Ot & 1073741824 && (ct(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : ct(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, e.tag));
}
function zR(t, e) {
  switch ((nf(e), e.tag)) {
    case 1:
      return (
        kt(e.type) && Cl(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        is(),
        _e(xt),
        _e(yt),
        df(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return hf(e), null;
    case 13:
      if (
        (_e(Se), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(D(340));
        ns();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return _e(Se), null;
    case 4:
      return is(), null;
    case 10:
      return af(e.type._context), null;
    case 22:
    case 23:
      return Rf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $a = !1,
  ft = !1,
  HR = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function bi(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ke(t, e, r);
      }
    else n.current = null;
}
function Hh(t, e, n) {
  try {
    n();
  } catch (r) {
    ke(t, e, r);
  }
}
var Jm = !1;
function WR(t, e) {
  if (((Ch = Rl), (t = jv()), ef(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            h = t,
            d = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (i !== 0 && h.nodeType !== 3) || (a = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (d = h), (h = g);
            for (;;) {
              if (h === t) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ph = { focusedElem: t, selectionRange: n }, Rl = !1, F = e; F !== null; )
    if (((e = F), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (F = t);
    else
      for (; F !== null; ) {
        e = F;
        try {
          var _ = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var w = _.memoizedProps,
                    E = _.memoizedState,
                    p = e.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? w : sn(e.type, w),
                      E
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = e.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (R) {
          ke(e, e.return, R);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (F = t);
          break;
        }
        F = e.return;
      }
  return (_ = Jm), (Jm = !1), _;
}
function ao(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Hh(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function yu(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Wh(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function O_(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), O_(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[_n], delete e[xo], delete e[Dh], delete e[CR], delete e[PR])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function M_(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Zm(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || M_(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function qh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Al));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (qh(t, e, n), t = t.sibling; t !== null; ) qh(t, e, n), (t = t.sibling);
}
function Qh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Qh(t, e, n), t = t.sibling; t !== null; ) Qh(t, e, n), (t = t.sibling);
}
var tt = null,
  on = !1;
function nr(t, e, n) {
  for (n = n.child; n !== null; ) F_(t, e, n), (n = n.sibling);
}
function F_(t, e, n) {
  if (Sn && typeof Sn.onCommitFiberUnmount == "function")
    try {
      Sn.onCommitFiberUnmount(uu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ft || bi(n, e);
    case 6:
      var r = tt,
        i = on;
      (tt = null),
        nr(t, e, n),
        (tt = r),
        (on = i),
        tt !== null &&
          (on
            ? ((t = tt),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : tt.removeChild(n.stateNode));
      break;
    case 18:
      tt !== null &&
        (on
          ? ((t = tt),
            (n = n.stateNode),
            t.nodeType === 8
              ? Ac(t.parentNode, n)
              : t.nodeType === 1 && Ac(t, n),
            So(t))
          : Ac(tt, n.stateNode));
      break;
    case 4:
      (r = tt),
        (i = on),
        (tt = n.stateNode.containerInfo),
        (on = !0),
        nr(t, e, n),
        (tt = r),
        (on = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ft &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Hh(n, e, o),
            (i = i.next);
        } while (i !== r);
      }
      nr(t, e, n);
      break;
    case 1:
      if (
        !ft &&
        (bi(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ke(n, e, a);
        }
      nr(t, e, n);
      break;
    case 21:
      nr(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((ft = (r = ft) || n.memoizedState !== null), nr(t, e, n), (ft = r))
        : nr(t, e, n);
      break;
    default:
      nr(t, e, n);
  }
}
function eg(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new HR()),
      e.forEach(function (r) {
        var i = eS.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function rn(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (tt = a.stateNode), (on = !1);
              break e;
            case 3:
              (tt = a.stateNode.containerInfo), (on = !0);
              break e;
            case 4:
              (tt = a.stateNode.containerInfo), (on = !0);
              break e;
          }
          a = a.return;
        }
        if (tt === null) throw Error(D(160));
        F_(s, o, i), (tt = null), (on = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ke(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) j_(e, t), (e = e.sibling);
}
function j_(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((rn(e, t), mn(t), r & 4)) {
        try {
          ao(3, t, t.return), yu(3, t);
        } catch (w) {
          ke(t, t.return, w);
        }
        try {
          ao(5, t, t.return);
        } catch (w) {
          ke(t, t.return, w);
        }
      }
      break;
    case 1:
      rn(e, t), mn(t), r & 512 && n !== null && bi(n, n.return);
      break;
    case 5:
      if (
        (rn(e, t),
        mn(t),
        r & 512 && n !== null && bi(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          wo(i, "");
        } catch (w) {
          ke(t, t.return, w);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && sv(i, s),
              yh(a, o);
            var u = yh(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1];
              c === "style"
                ? cv(i, h)
                : c === "dangerouslySetInnerHTML"
                  ? lv(i, h)
                  : c === "children"
                    ? wo(i, h)
                    : $d(i, c, h, u);
            }
            switch (a) {
              case "input":
                dh(i, s);
                break;
              case "textarea":
                ov(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Wi(i, !!s.multiple, g, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Wi(i, !!s.multiple, s.defaultValue, !0)
                      : Wi(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[xo] = s;
          } catch (w) {
            ke(t, t.return, w);
          }
      }
      break;
    case 6:
      if ((rn(e, t), mn(t), r & 4)) {
        if (t.stateNode === null) throw Error(D(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          ke(t, t.return, w);
        }
      }
      break;
    case 3:
      if (
        (rn(e, t), mn(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          So(e.containerInfo);
        } catch (w) {
          ke(t, t.return, w);
        }
      break;
    case 4:
      rn(e, t), mn(t);
      break;
    case 13:
      rn(e, t),
        mn(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ef = Oe())),
        r & 4 && eg(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((ft = (u = ft) || c), rn(e, t), (ft = u)) : rn(e, t),
        mn(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (F = t, c = t.child; c !== null; ) {
            for (h = F = c; F !== null; ) {
              switch (((d = F), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ao(4, d, d.return);
                  break;
                case 1:
                  bi(d, d.return);
                  var _ = d.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (e = r),
                        (_.props = e.memoizedProps),
                        (_.state = e.memoizedState),
                        _.componentWillUnmount();
                    } catch (w) {
                      ke(r, n, w);
                    }
                  }
                  break;
                case 5:
                  bi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ng(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (F = g)) : ng(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = uv("display", o)));
              } catch (w) {
                ke(t, t.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (w) {
                ke(t, t.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      rn(e, t), mn(t), r & 4 && eg(t);
      break;
    case 21:
      break;
    default:
      rn(e, t), mn(t);
  }
}
function mn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (M_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (wo(i, ""), (r.flags &= -33));
          var s = Zm(t);
          Qh(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Zm(t);
          qh(t, a, o);
          break;
        default:
          throw Error(D(161));
      }
    } catch (l) {
      ke(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function qR(t, e, n) {
  (F = t), U_(t);
}
function U_(t, e, n) {
  for (var r = (t.mode & 1) !== 0; F !== null; ) {
    var i = F,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || $a;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ft;
        a = $a;
        var u = ft;
        if ((($a = o), (ft = l) && !u))
          for (F = i; F !== null; )
            (o = F),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? rg(i)
                : l !== null
                  ? ((l.return = o), (F = l))
                  : rg(i);
        for (; s !== null; ) (F = s), U_(s), (s = s.sibling);
        (F = i), ($a = a), (ft = u);
      }
      tg(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (F = s)) : tg(t);
  }
}
function tg(t) {
  for (; F !== null; ) {
    var e = F;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              ft || yu(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !ft)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : sn(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = e.updateQueue;
              s !== null && jm(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                jm(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && So(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        ft || (e.flags & 512 && Wh(e));
      } catch (d) {
        ke(e, e.return, d);
      }
    }
    if (e === t) {
      F = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (F = n);
      break;
    }
    F = e.return;
  }
}
function ng(t) {
  for (; F !== null; ) {
    var e = F;
    if (e === t) {
      F = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (F = n);
      break;
    }
    F = e.return;
  }
}
function rg(t) {
  for (; F !== null; ) {
    var e = F;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            yu(4, e);
          } catch (l) {
            ke(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ke(e, i, l);
            }
          }
          var s = e.return;
          try {
            Wh(e);
          } catch (l) {
            ke(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Wh(e);
          } catch (l) {
            ke(e, o, l);
          }
      }
    } catch (l) {
      ke(e, e.return, l);
    }
    if (e === t) {
      F = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (F = a);
      break;
    }
    F = e.return;
  }
}
var QR = Math.ceil,
  Fl = Gn.ReactCurrentDispatcher,
  _f = Gn.ReactCurrentOwner,
  Jt = Gn.ReactCurrentBatchConfig,
  oe = 0,
  Xe = null,
  Ue = null,
  st = 0,
  Ot = 0,
  $i = Dr(0),
  ze = 0,
  Oo = null,
  ii = 0,
  vu = 0,
  wf = 0,
  lo = null,
  At = null,
  Ef = 0,
  os = 1 / 0,
  Ln = null,
  jl = !1,
  Kh = null,
  vr = null,
  Ba = !1,
  hr = null,
  Ul = 0,
  uo = 0,
  Gh = null,
  hl = -1,
  dl = 0;
function Rt() {
  return oe & 6 ? Oe() : hl !== -1 ? hl : (hl = Oe());
}
function _r(t) {
  return t.mode & 1
    ? oe & 2 && st !== 0
      ? st & -st
      : kR.transition !== null
        ? (dl === 0 && (dl = Tv()), dl)
        : ((t = ce),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : xv(t.type))),
          t)
    : 1;
}
function cn(t, e, n, r) {
  if (50 < uo) throw ((uo = 0), (Gh = null), Error(D(185)));
  na(t, n, r),
    (!(oe & 2) || t !== Xe) &&
      (t === Xe && (!(oe & 2) && (vu |= n), ze === 4 && lr(t, st)),
      Dt(t, r),
      n === 1 && oe === 0 && !(e.mode & 1) && ((os = Oe() + 500), pu && Nr()));
}
function Dt(t, e) {
  var n = t.callbackNode;
  kT(t, e);
  var r = Tl(t, t === Xe ? st : 0);
  if (r === 0)
    n !== null && dm(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && dm(n), e === 1))
      t.tag === 0 ? xR(ig.bind(null, t)) : Kv(ig.bind(null, t)),
        IR(function () {
          !(oe & 6) && Nr();
        }),
        (n = null);
    else {
      switch (Rv(r)) {
        case 1:
          n = qd;
          break;
        case 4:
          n = wv;
          break;
        case 16:
          n = El;
          break;
        case 536870912:
          n = Ev;
          break;
        default:
          n = El;
      }
      n = Q_(n, b_.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function b_(t, e) {
  if (((hl = -1), (dl = 0), oe & 6)) throw Error(D(327));
  var n = t.callbackNode;
  if (Xi() && t.callbackNode !== n) return null;
  var r = Tl(t, t === Xe ? st : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = bl(t, r);
  else {
    e = r;
    var i = oe;
    oe |= 2;
    var s = B_();
    (Xe !== t || st !== e) && ((Ln = null), (os = Oe() + 500), Yr(t, e));
    do
      try {
        XR();
        break;
      } catch (a) {
        $_(t, a);
      }
    while (!0);
    of(),
      (Fl.current = s),
      (oe = i),
      Ue !== null ? (e = 0) : ((Xe = null), (st = 0), (e = ze));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Th(t)), i !== 0 && ((r = i), (e = Xh(t, i)))), e === 1)
    )
      throw ((n = Oo), Yr(t, 0), lr(t, r), Dt(t, Oe()), n);
    if (e === 6) lr(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !KR(i) &&
          ((e = bl(t, r)),
          e === 2 && ((s = Th(t)), s !== 0 && ((r = s), (e = Xh(t, s)))),
          e === 1))
      )
        throw ((n = Oo), Yr(t, 0), lr(t, r), Dt(t, Oe()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          Ur(t, At, Ln);
          break;
        case 3:
          if (
            (lr(t, r), (r & 130023424) === r && ((e = Ef + 500 - Oe()), 10 < e))
          ) {
            if (Tl(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              Rt(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = kh(Ur.bind(null, t, At, Ln), e);
            break;
          }
          Ur(t, At, Ln);
          break;
        case 4:
          if ((lr(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - un(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * QR(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = kh(Ur.bind(null, t, At, Ln), r);
            break;
          }
          Ur(t, At, Ln);
          break;
        case 5:
          Ur(t, At, Ln);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return Dt(t, Oe()), t.callbackNode === n ? b_.bind(null, t) : null;
}
function Xh(t, e) {
  var n = lo;
  return (
    t.current.memoizedState.isDehydrated && (Yr(t, e).flags |= 256),
    (t = bl(t, e)),
    t !== 2 && ((e = At), (At = n), e !== null && Yh(e)),
    t
  );
}
function Yh(t) {
  At === null ? (At = t) : At.push.apply(At, t);
}
function KR(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!hn(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function lr(t, e) {
  for (
    e &= ~wf,
      e &= ~vu,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - un(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function ig(t) {
  if (oe & 6) throw Error(D(327));
  Xi();
  var e = Tl(t, 0);
  if (!(e & 1)) return Dt(t, Oe()), null;
  var n = bl(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Th(t);
    r !== 0 && ((e = r), (n = Xh(t, r)));
  }
  if (n === 1) throw ((n = Oo), Yr(t, 0), lr(t, e), Dt(t, Oe()), n);
  if (n === 6) throw Error(D(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Ur(t, At, Ln),
    Dt(t, Oe()),
    null
  );
}
function Tf(t, e) {
  var n = oe;
  oe |= 1;
  try {
    return t(e);
  } finally {
    (oe = n), oe === 0 && ((os = Oe() + 500), pu && Nr());
  }
}
function si(t) {
  hr !== null && hr.tag === 0 && !(oe & 6) && Xi();
  var e = oe;
  oe |= 1;
  var n = Jt.transition,
    r = ce;
  try {
    if (((Jt.transition = null), (ce = 1), t)) return t();
  } finally {
    (ce = r), (Jt.transition = n), (oe = e), !(oe & 6) && Nr();
  }
}
function Rf() {
  (Ot = $i.current), _e($i);
}
function Yr(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), SR(n)), Ue !== null))
    for (n = Ue.return; n !== null; ) {
      var r = n;
      switch ((nf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Cl();
          break;
        case 3:
          is(), _e(xt), _e(yt), df();
          break;
        case 5:
          hf(r);
          break;
        case 4:
          is();
          break;
        case 13:
          _e(Se);
          break;
        case 19:
          _e(Se);
          break;
        case 10:
          af(r.type._context);
          break;
        case 22:
        case 23:
          Rf();
      }
      n = n.return;
    }
  if (
    ((Xe = t),
    (Ue = t = wr(t.current, null)),
    (st = Ot = e),
    (ze = 0),
    (Oo = null),
    (wf = vu = ii = 0),
    (At = lo = null),
    zr !== null)
  ) {
    for (e = 0; e < zr.length; e++)
      if (((n = zr[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    zr = null;
  }
  return t;
}
function $_(t, e) {
  do {
    var n = Ue;
    try {
      if ((of(), (ll.current = Ml), Ol)) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ol = !1;
      }
      if (
        ((ri = 0),
        (Ke = $e = Ie = null),
        (oo = !1),
        (No = 0),
        (_f.current = null),
        n === null || n.return === null)
      ) {
        (ze = 1), (Oo = e), (Ue = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = st),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Wm(o);
          if (g !== null) {
            (g.flags &= -257),
              qm(g, o, a, s, e),
              g.mode & 1 && Hm(s, u, e),
              (e = g),
              (l = u);
            var _ = e.updateQueue;
            if (_ === null) {
              var w = new Set();
              w.add(l), (e.updateQueue = w);
            } else _.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Hm(s, u, e), Sf();
              break e;
            }
            l = Error(D(426));
          }
        } else if (Te && a.mode & 1) {
          var E = Wm(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              qm(E, o, a, s, e),
              rf(ss(l, a));
            break e;
          }
        }
        (s = l = ss(l, a)),
          ze !== 4 && (ze = 2),
          lo === null ? (lo = [s]) : lo.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var p = S_(s, l, e);
              Fm(s, p);
              break e;
            case 1:
              a = l;
              var f = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (vr === null || !vr.has(m))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var R = I_(s, a, e);
                Fm(s, R);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      H_(n);
    } catch (I) {
      (e = I), Ue === n && n !== null && (Ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function B_() {
  var t = Fl.current;
  return (Fl.current = Ml), t === null ? Ml : t;
}
function Sf() {
  (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
    Xe === null || (!(ii & 268435455) && !(vu & 268435455)) || lr(Xe, st);
}
function bl(t, e) {
  var n = oe;
  oe |= 2;
  var r = B_();
  (Xe !== t || st !== e) && ((Ln = null), Yr(t, e));
  do
    try {
      GR();
      break;
    } catch (i) {
      $_(t, i);
    }
  while (!0);
  if ((of(), (oe = n), (Fl.current = r), Ue !== null)) throw Error(D(261));
  return (Xe = null), (st = 0), ze;
}
function GR() {
  for (; Ue !== null; ) z_(Ue);
}
function XR() {
  for (; Ue !== null && !ET(); ) z_(Ue);
}
function z_(t) {
  var e = q_(t.alternate, t, Ot);
  (t.memoizedProps = t.pendingProps),
    e === null ? H_(t) : (Ue = e),
    (_f.current = null);
}
function H_(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = zR(n, e)), n !== null)) {
        (n.flags &= 32767), (Ue = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (ze = 6), (Ue = null);
        return;
      }
    } else if (((n = BR(n, e, Ot)), n !== null)) {
      Ue = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Ue = e;
      return;
    }
    Ue = e = t;
  } while (e !== null);
  ze === 0 && (ze = 5);
}
function Ur(t, e, n) {
  var r = ce,
    i = Jt.transition;
  try {
    (Jt.transition = null), (ce = 1), YR(t, e, n, r);
  } finally {
    (Jt.transition = i), (ce = r);
  }
  return null;
}
function YR(t, e, n, r) {
  do Xi();
  while (hr !== null);
  if (oe & 6) throw Error(D(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(D(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (DT(t, s),
    t === Xe && ((Ue = Xe = null), (st = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ba ||
      ((Ba = !0),
      Q_(El, function () {
        return Xi(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Jt.transition), (Jt.transition = null);
    var o = ce;
    ce = 1;
    var a = oe;
    (oe |= 4),
      (_f.current = null),
      WR(t, n),
      j_(n, t),
      yR(Ph),
      (Rl = !!Ch),
      (Ph = Ch = null),
      (t.current = n),
      qR(n),
      TT(),
      (oe = a),
      (ce = o),
      (Jt.transition = s);
  } else t.current = n;
  if (
    (Ba && ((Ba = !1), (hr = t), (Ul = i)),
    (s = t.pendingLanes),
    s === 0 && (vr = null),
    IT(n.stateNode),
    Dt(t, Oe()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (jl) throw ((jl = !1), (t = Kh), (Kh = null), t);
  return (
    Ul & 1 && t.tag !== 0 && Xi(),
    (s = t.pendingLanes),
    s & 1 ? (t === Gh ? uo++ : ((uo = 0), (Gh = t))) : (uo = 0),
    Nr(),
    null
  );
}
function Xi() {
  if (hr !== null) {
    var t = Rv(Ul),
      e = Jt.transition,
      n = ce;
    try {
      if (((Jt.transition = null), (ce = 16 > t ? 16 : t), hr === null))
        var r = !1;
      else {
        if (((t = hr), (hr = null), (Ul = 0), oe & 6)) throw Error(D(331));
        var i = oe;
        for (oe |= 4, F = t.current; F !== null; ) {
          var s = F,
            o = s.child;
          if (F.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ao(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (F = h);
                  else
                    for (; F !== null; ) {
                      c = F;
                      var d = c.sibling,
                        g = c.return;
                      if ((O_(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (F = d);
                        break;
                      }
                      F = g;
                    }
                }
              }
              var _ = s.alternate;
              if (_ !== null) {
                var w = _.child;
                if (w !== null) {
                  _.child = null;
                  do {
                    var E = w.sibling;
                    (w.sibling = null), (w = E);
                  } while (w !== null);
                }
              }
              F = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (F = o);
          else
            e: for (; F !== null; ) {
              if (((s = F), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ao(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (F = p);
                break e;
              }
              F = s.return;
            }
        }
        var f = t.current;
        for (F = f; F !== null; ) {
          o = F;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (F = m);
          else
            e: for (o = f; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yu(9, a);
                  }
                } catch (I) {
                  ke(a, a.return, I);
                }
              if (a === o) {
                F = null;
                break e;
              }
              var R = a.sibling;
              if (R !== null) {
                (R.return = a.return), (F = R);
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((oe = i), Nr(), Sn && typeof Sn.onPostCommitFiberRoot == "function")
        )
          try {
            Sn.onPostCommitFiberRoot(uu, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ce = n), (Jt.transition = e);
    }
  }
  return !1;
}
function sg(t, e, n) {
  (e = ss(n, e)),
    (e = S_(t, e, 1)),
    (t = yr(t, e, 1)),
    (e = Rt()),
    t !== null && (na(t, 1, e), Dt(t, e));
}
function ke(t, e, n) {
  if (t.tag === 3) sg(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        sg(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (vr === null || !vr.has(r)))
        ) {
          (t = ss(n, t)),
            (t = I_(e, t, 1)),
            (e = yr(e, t, 1)),
            (t = Rt()),
            e !== null && (na(e, 1, t), Dt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function JR(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = Rt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Xe === t &&
      (st & n) === n &&
      (ze === 4 || (ze === 3 && (st & 130023424) === st && 500 > Oe() - Ef)
        ? Yr(t, 0)
        : (wf |= n)),
    Dt(t, e);
}
function W_(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Na), (Na <<= 1), !(Na & 130023424) && (Na = 4194304))
      : (e = 1));
  var n = Rt();
  (t = Hn(t, e)), t !== null && (na(t, e, n), Dt(t, n));
}
function ZR(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), W_(t, n);
}
function eS(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  r !== null && r.delete(e), W_(t, n);
}
var q_;
q_ = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || xt.current) Pt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (Pt = !1), $R(t, e, n);
      Pt = !!(t.flags & 131072);
    }
  else (Pt = !1), Te && e.flags & 1048576 && Gv(e, kl, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      cl(t, e), (t = e.pendingProps);
      var i = ts(e, yt.current);
      Gi(e, n), (i = pf(null, e, r, t, i, n));
      var s = mf();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            kt(r) ? ((s = !0), Pl(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            uf(e),
            (i.updater = mu),
            (e.stateNode = i),
            (i._reactInternals = e),
            Fh(e, r, t, n),
            (e = bh(null, e, r, !0, s, n)))
          : ((e.tag = 0), Te && s && tf(e), Et(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (cl(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = nS(r)),
          (t = sn(r, t)),
          i)
        ) {
          case 0:
            e = Uh(null, e, r, t, n);
            break e;
          case 1:
            e = Gm(null, e, r, t, n);
            break e;
          case 11:
            e = Qm(null, e, r, t, n);
            break e;
          case 14:
            e = Km(null, e, r, sn(r.type, t), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : sn(r, i)),
        Uh(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : sn(r, i)),
        Gm(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((x_(e), t === null)) throw Error(D(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          Zv(t, e),
          Ll(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = ss(Error(D(423)), e)), (e = Xm(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ss(Error(D(424)), e)), (e = Xm(t, e, r, n, i));
            break e;
          } else
            for (
              Mt = gr(e.stateNode.containerInfo.firstChild),
                bt = e,
                Te = !0,
                ln = null,
                n = r_(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ns(), r === i)) {
            e = Wn(t, e, n);
            break e;
          }
          Et(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        i_(e),
        t === null && Vh(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        xh(r, i) ? (o = null) : s !== null && xh(r, s) && (e.flags |= 32),
        P_(t, e),
        Et(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && Vh(e), null;
    case 13:
      return k_(t, e, n);
    case 4:
      return (
        cf(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = rs(e, null, r, n)) : Et(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : sn(r, i)),
        Qm(t, e, r, i, n)
      );
    case 7:
      return Et(t, e, e.pendingProps, n), e.child;
    case 8:
      return Et(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Et(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          pe(Dl, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (hn(s.value, o)) {
            if (s.children === i.children && !xt.current) {
              e = Wn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = bn(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Oh(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(D(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Oh(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Et(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Gi(e, n),
        (i = Zt(i)),
        (r = r(i)),
        (e.flags |= 1),
        Et(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = sn(r, e.pendingProps)),
        (i = sn(r.type, i)),
        Km(t, e, r, i, n)
      );
    case 15:
      return A_(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : sn(r, i)),
        cl(t, e),
        (e.tag = 1),
        kt(r) ? ((t = !0), Pl(e)) : (t = !1),
        Gi(e, n),
        t_(e, r, i),
        Fh(e, r, i, n),
        bh(null, e, r, !0, t, n)
      );
    case 19:
      return D_(t, e, n);
    case 22:
      return C_(t, e, n);
  }
  throw Error(D(156, e.tag));
};
function Q_(t, e) {
  return _v(t, e);
}
function tS(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Yt(t, e, n, r) {
  return new tS(t, e, n, r);
}
function If(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function nS(t) {
  if (typeof t == "function") return If(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === zd)) return 11;
    if (t === Hd) return 14;
  }
  return 2;
}
function wr(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Yt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function fl(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) If(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case Di:
        return Jr(n.children, i, s, e);
      case Bd:
        (o = 8), (i |= 8);
        break;
      case ah:
        return (
          (t = Yt(12, n, e, i | 2)), (t.elementType = ah), (t.lanes = s), t
        );
      case lh:
        return (t = Yt(13, n, e, i)), (t.elementType = lh), (t.lanes = s), t;
      case uh:
        return (t = Yt(19, n, e, i)), (t.elementType = uh), (t.lanes = s), t;
      case nv:
        return _u(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case ev:
              o = 10;
              break e;
            case tv:
              o = 9;
              break e;
            case zd:
              o = 11;
              break e;
            case Hd:
              o = 14;
              break e;
            case sr:
              (o = 16), (r = null);
              break e;
          }
        throw Error(D(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Yt(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  );
}
function Jr(t, e, n, r) {
  return (t = Yt(7, t, r, e)), (t.lanes = n), t;
}
function _u(t, e, n, r) {
  return (
    (t = Yt(22, t, r, e)),
    (t.elementType = nv),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Vc(t, e, n) {
  return (t = Yt(6, t, null, e)), (t.lanes = n), t;
}
function Oc(t, e, n) {
  return (
    (e = Yt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function rS(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = mc(0)),
    (this.expirationTimes = mc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Af(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new rS(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Yt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uf(s),
    t
  );
}
function iS(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ki,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function K_(t) {
  if (!t) return Ar;
  t = t._reactInternals;
  e: {
    if (fi(t) !== t || t.tag !== 1) throw Error(D(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (kt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(D(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (kt(n)) return Qv(t, n, e);
  }
  return e;
}
function G_(t, e, n, r, i, s, o, a, l) {
  return (
    (t = Af(n, r, !0, t, i, s, o, a, l)),
    (t.context = K_(null)),
    (n = t.current),
    (r = Rt()),
    (i = _r(n)),
    (s = bn(r, i)),
    (s.callback = e ?? null),
    yr(n, s, i),
    (t.current.lanes = i),
    na(t, i, r),
    Dt(t, r),
    t
  );
}
function wu(t, e, n, r) {
  var i = e.current,
    s = Rt(),
    o = _r(i);
  return (
    (n = K_(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = bn(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = yr(i, e, o)),
    t !== null && (cn(t, i, o, s), al(t, i, o)),
    o
  );
}
function $l(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function og(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Cf(t, e) {
  og(t, e), (t = t.alternate) && og(t, e);
}
function sS() {
  return null;
}
var X_ =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Pf(t) {
  this._internalRoot = t;
}
Eu.prototype.render = Pf.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(D(409));
  wu(t, e, null, null);
};
Eu.prototype.unmount = Pf.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    si(function () {
      wu(null, t, null, null);
    }),
      (e[zn] = null);
  }
};
function Eu(t) {
  this._internalRoot = t;
}
Eu.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Av();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < ar.length && e !== 0 && e < ar[n].priority; n++);
    ar.splice(n, 0, t), n === 0 && Pv(t);
  }
};
function xf(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Tu(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function ag() {}
function oS(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = $l(o);
        s.call(u);
      };
    }
    var o = G_(e, r, t, 0, null, !1, !1, "", ag);
    return (
      (t._reactRootContainer = o),
      (t[zn] = o.current),
      Co(t.nodeType === 8 ? t.parentNode : t),
      si(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = $l(l);
      a.call(u);
    };
  }
  var l = Af(t, 0, !1, null, null, !1, !1, "", ag);
  return (
    (t._reactRootContainer = l),
    (t[zn] = l.current),
    Co(t.nodeType === 8 ? t.parentNode : t),
    si(function () {
      wu(e, l, n, r);
    }),
    l
  );
}
function Ru(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = $l(o);
        a.call(l);
      };
    }
    wu(e, o, t, i);
  } else o = oS(n, e, t, i, r);
  return $l(o);
}
Sv = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Ks(e.pendingLanes);
        n !== 0 &&
          (Qd(e, n | 1), Dt(e, Oe()), !(oe & 6) && ((os = Oe() + 500), Nr()));
      }
      break;
    case 13:
      si(function () {
        var r = Hn(t, 1);
        if (r !== null) {
          var i = Rt();
          cn(r, t, 1, i);
        }
      }),
        Cf(t, 1);
  }
};
Kd = function (t) {
  if (t.tag === 13) {
    var e = Hn(t, 134217728);
    if (e !== null) {
      var n = Rt();
      cn(e, t, 134217728, n);
    }
    Cf(t, 134217728);
  }
};
Iv = function (t) {
  if (t.tag === 13) {
    var e = _r(t),
      n = Hn(t, e);
    if (n !== null) {
      var r = Rt();
      cn(n, t, e, r);
    }
    Cf(t, e);
  }
};
Av = function () {
  return ce;
};
Cv = function (t, e) {
  var n = ce;
  try {
    return (ce = t), e();
  } finally {
    ce = n;
  }
};
_h = function (t, e, n) {
  switch (e) {
    case "input":
      if ((dh(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = fu(r);
            if (!i) throw Error(D(90));
            iv(r), dh(r, i);
          }
        }
      }
      break;
    case "textarea":
      ov(t, n);
      break;
    case "select":
      (e = n.value), e != null && Wi(t, !!n.multiple, e, !1);
  }
};
fv = Tf;
pv = si;
var aS = { usingClientEntryPoint: !1, Events: [ia, Oi, fu, hv, dv, Tf] },
  Ms = {
    findFiberByHostInstance: Br,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  lS = {
    bundleType: Ms.bundleType,
    version: Ms.version,
    rendererPackageName: Ms.rendererPackageName,
    rendererConfig: Ms.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = yv(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Ms.findFiberByHostInstance || sS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var za = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!za.isDisabled && za.supportsFiber)
    try {
      (uu = za.inject(lS)), (Sn = za);
    } catch {}
}
zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aS;
zt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xf(e)) throw Error(D(200));
  return iS(t, e, null, n);
};
zt.createRoot = function (t, e) {
  if (!xf(t)) throw Error(D(299));
  var n = !1,
    r = "",
    i = X_;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = Af(t, 1, !1, null, null, n, !1, r, i)),
    (t[zn] = e.current),
    Co(t.nodeType === 8 ? t.parentNode : t),
    new Pf(e)
  );
};
zt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(D(188))
      : ((t = Object.keys(t).join(",")), Error(D(268, t)));
  return (t = yv(e)), (t = t === null ? null : t.stateNode), t;
};
zt.flushSync = function (t) {
  return si(t);
};
zt.hydrate = function (t, e, n) {
  if (!Tu(e)) throw Error(D(200));
  return Ru(null, t, e, !0, n);
};
zt.hydrateRoot = function (t, e, n) {
  if (!xf(t)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = X_;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = G_(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[zn] = e.current),
    Co(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new Eu(e);
};
zt.render = function (t, e, n) {
  if (!Tu(e)) throw Error(D(200));
  return Ru(null, t, e, !1, n);
};
zt.unmountComponentAtNode = function (t) {
  if (!Tu(t)) throw Error(D(40));
  return t._reactRootContainer
    ? (si(function () {
        Ru(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[zn] = null);
        });
      }),
      !0)
    : !1;
};
zt.unstable_batchedUpdates = Tf;
zt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Tu(n)) throw Error(D(200));
  if (t == null || t._reactInternals === void 0) throw Error(D(38));
  return Ru(t, e, n, !1, r);
};
zt.version = "18.2.0-next-9e3b772b8-20220608";
function Y_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y_);
    } catch (t) {
      console.error(t);
    }
}
Y_(), (Gy.exports = zt);
var kf = Gy.exports;
const uS = Vd(kf),
  cS = jy({ __proto__: null, default: uS }, [kf]);
var lg = kf;
(sh.createRoot = lg.createRoot), (sh.hydrateRoot = lg.hydrateRoot);
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function De() {
  return (
    (De = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    De.apply(this, arguments)
  );
}
var Ve;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(Ve || (Ve = {}));
const ug = "popstate";
function hS(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Mo(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : oi(i);
  }
  return fS(e, n, null, t);
}
function ee(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function as(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function dS() {
  return Math.random().toString(36).substr(2, 8);
}
function cg(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function Mo(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    De(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? Xn(e) : e,
      { state: n, key: (e && e.key) || r || dS() }
    )
  );
}
function oi(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Xn(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function fS(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = Ve.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(De({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = Ve.Pop;
    let E = c(),
      p = E == null ? null : E - u;
    (u = E), l && l({ action: a, location: w.location, delta: p });
  }
  function d(E, p) {
    a = Ve.Push;
    let f = Mo(w.location, E, p);
    n && n(f, E), (u = c() + 1);
    let m = cg(f, u),
      R = w.createHref(f);
    try {
      o.pushState(m, "", R);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError") throw I;
      i.location.assign(R);
    }
    s && l && l({ action: a, location: w.location, delta: 1 });
  }
  function g(E, p) {
    a = Ve.Replace;
    let f = Mo(w.location, E, p);
    n && n(f, E), (u = c());
    let m = cg(f, u),
      R = w.createHref(f);
    o.replaceState(m, "", R),
      s && l && l({ action: a, location: w.location, delta: 0 });
  }
  function _(E) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof E == "string" ? E : oi(E);
    return (
      (f = f.replace(/ $/, "%20")),
      ee(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return t(i, o);
    },
    listen(E) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(ug, h),
        (l = E),
        () => {
          i.removeEventListener(ug, h), (l = null);
        }
      );
    },
    createHref(E) {
      return e(i, E);
    },
    createURL: _,
    encodeLocation(E) {
      let p = _(E);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: g,
    go(E) {
      return o.go(E);
    },
  };
  return w;
}
var xe;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(xe || (xe = {}));
const pS = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function mS(t) {
  return t.index === !0;
}
function Jh(t, e, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    t.map((i, s) => {
      let o = [...n, s],
        a = typeof i.id == "string" ? i.id : o.join("-");
      if (
        (ee(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        ee(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        mS(i))
      ) {
        let l = De({}, i, e(i), { id: a });
        return (r[a] = l), l;
      } else {
        let l = De({}, i, e(i), { id: a, children: void 0 });
        return (
          (r[a] = l), i.children && (l.children = Jh(i.children, e, o, r)), l
        );
      }
    })
  );
}
function Bi(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? Xn(e) : e,
    i = ws(r.pathname || "/", n);
  if (i == null) return null;
  let s = J_(t);
  yS(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) {
    let l = xS(i);
    o = AS(s[a], l);
  }
  return o;
}
function gS(t, e) {
  let { route: n, pathname: r, params: i } = t;
  return { id: n.id, pathname: r, params: i, data: e[n.id], handle: n.handle };
}
function J_(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (ee(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = $n([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (ee(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      J_(s.children, e, c, u)),
      !(s.path == null && !s.index) &&
        e.push({ path: u, score: SS(u, s.index), routesMeta: c });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Z_(s.path)) i(s, o, l);
    }),
    e
  );
}
function Z_(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Z_(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
  );
}
function yS(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : IS(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const vS = /^:[\w-]+$/,
  _S = 3,
  wS = 2,
  ES = 1,
  TS = 10,
  RS = -2,
  hg = (t) => t === "*";
function SS(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(hg) && (r += RS),
    e && (r += wS),
    n
      .filter((i) => !hg(i))
      .reduce((i, s) => i + (vS.test(s) ? _S : s === "" ? ES : TS), r)
  );
}
function IS(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function AS(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = i === "/" ? e : e.slice(i.length) || "/",
      c = CS(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = a.route;
    s.push({
      params: r,
      pathname: $n([i, c.pathname]),
      pathnameBase: NS($n([i, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== "/" && (i = $n([i, c.pathnameBase]));
  }
  return s;
}
function CS(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = PS(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, h) => {
      let { paramName: d, isOptional: g } = c;
      if (d === "*") {
        let w = a[h] || "";
        o = s.slice(0, s.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const _ = a[h];
      return (
        g && !_ ? (u[d] = void 0) : (u[d] = (_ || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function PS(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    as(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function xS(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      as(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function ws(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function kS(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof t == "string" ? Xn(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : DS(n, e)) : e,
    search: LS(r),
    hash: VS(i),
  };
}
function DS(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Mc(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function e0(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Df(t, e) {
  let n = e0(t);
  return e
    ? n.map((r, i) => (i === t.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Nf(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = Xn(t))
    : ((i = De({}, t)),
      ee(
        !i.pathname || !i.pathname.includes("?"),
        Mc("?", "pathname", "search", i)
      ),
      ee(
        !i.pathname || !i.pathname.includes("#"),
        Mc("#", "pathname", "hash", i)
      ),
      ee(!i.search || !i.search.includes("#"), Mc("#", "search", "hash", i)));
  let s = t === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let h = e.length - 1;
    if (!r && o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) d.shift(), (h -= 1);
      i.pathname = d.join("/");
    }
    a = h >= 0 ? e[h] : "/";
  }
  let l = kS(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const $n = (t) => t.join("/").replace(/\/\/+/g, "/"),
  NS = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  LS = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  VS = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
class Lf {
  constructor(e, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = e),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function t0(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const n0 = ["post", "put", "patch", "delete"],
  OS = new Set(n0),
  MS = ["get", ...n0],
  FS = new Set(MS),
  jS = new Set([301, 302, 303, 307, 308]),
  US = new Set([307, 308]),
  Fc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  bS = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Fs = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  r0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $S = (t) => ({ hasErrorBoundary: !!t.hasErrorBoundary }),
  i0 = "remix-router-transitions";
function BS(t) {
  const e = t.window ? t.window : typeof window < "u" ? window : void 0,
    n =
      typeof e < "u" &&
      typeof e.document < "u" &&
      typeof e.document.createElement < "u",
    r = !n;
  ee(
    t.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (t.mapRouteProperties) i = t.mapRouteProperties;
  else if (t.detectErrorBoundary) {
    let T = t.detectErrorBoundary;
    i = (S) => ({ hasErrorBoundary: T(S) });
  } else i = $S;
  let s = {},
    o = Jh(t.routes, i, void 0, s),
    a,
    l = t.basename || "/",
    u = De(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      t.future
    ),
    c = null,
    h = new Set(),
    d = null,
    g = null,
    _ = null,
    w = t.hydrationData != null,
    E = Bi(o, t.history.location, l),
    p = null;
  if (E == null) {
    let T = Qt(404, { pathname: t.history.location.pathname }),
      { matches: S, route: A } = _g(o);
    (E = S), (p = { [A.id]: T });
  }
  let f,
    m = E.some((T) => T.route.lazy),
    R = E.some((T) => T.route.loader);
  if (m) f = !1;
  else if (!R) f = !0;
  else if (u.v7_partialHydration) {
    let T = t.hydrationData ? t.hydrationData.loaderData : null,
      S = t.hydrationData ? t.hydrationData.errors : null;
    f = E.every(
      (A) =>
        A.route.loader &&
        A.route.loader.hydrate !== !0 &&
        ((T && T[A.route.id] !== void 0) || (S && S[A.route.id] !== void 0))
    );
  } else f = t.hydrationData != null;
  let I,
    y = {
      historyAction: t.history.action,
      location: t.history.location,
      matches: E,
      initialized: f,
      navigation: Fc,
      restoreScrollPosition: t.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
      actionData: (t.hydrationData && t.hydrationData.actionData) || null,
      errors: (t.hydrationData && t.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = Ve.Pop,
    N = !1,
    j,
    B = !1,
    ae = new Map(),
    be = null,
    Me = !1,
    Wt = !1,
    wi = [],
    Yn = [],
    we = new Map(),
    M = 0,
    W = -1,
    K = new Map(),
    le = new Set(),
    ge = new Map(),
    fn = new Map(),
    Ze = new Set(),
    nn = new Map(),
    _t = new Map(),
    Jn = !1;
  function R1() {
    if (
      ((c = t.history.listen((T) => {
        let { action: S, location: A, delta: L } = T;
        if (Jn) {
          Jn = !1;
          return;
        }
        as(
          _t.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let b = Yp({
          currentLocation: y.location,
          nextLocation: A,
          historyAction: S,
        });
        if (b && L != null) {
          (Jn = !0),
            t.history.go(L * -1),
            Sa(b, {
              state: "blocked",
              location: A,
              proceed() {
                Sa(b, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: A,
                }),
                  t.history.go(L);
              },
              reset() {
                let Z = new Map(y.blockers);
                Z.set(b, Fs), Lt({ blockers: Z });
              },
            });
          return;
        }
        return Mr(S, A);
      })),
      n)
    ) {
      ZS(e, ae);
      let T = () => eI(e, ae);
      e.addEventListener("pagehide", T),
        (be = () => e.removeEventListener("pagehide", T));
    }
    return y.initialized || Mr(Ve.Pop, y.location, { initialHydration: !0 }), I;
  }
  function S1() {
    c && c(),
      be && be(),
      h.clear(),
      j && j.abort(),
      y.fetchers.forEach((T, S) => Ra(S)),
      y.blockers.forEach((T, S) => Xp(S));
  }
  function I1(T) {
    return h.add(T), () => h.delete(T);
  }
  function Lt(T, S) {
    S === void 0 && (S = {}), (y = De({}, y, T));
    let A = [],
      L = [];
    u.v7_fetcherPersist &&
      y.fetchers.forEach((b, Z) => {
        b.state === "idle" && (Ze.has(Z) ? L.push(Z) : A.push(Z));
      }),
      [...h].forEach((b) =>
        b(y, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: S.viewTransitionOpts,
          unstable_flushSync: S.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (A.forEach((b) => y.fetchers.delete(b)), L.forEach((b) => Ra(b)));
  }
  function As(T, S, A) {
    var L, b;
    let { flushSync: Z } = A === void 0 ? {} : A,
      q =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        an(y.navigation.formMethod) &&
        y.navigation.state === "loading" &&
        ((L = T.state) == null ? void 0 : L._isRedirect) !== !0,
      H;
    S.actionData
      ? Object.keys(S.actionData).length > 0
        ? (H = S.actionData)
        : (H = null)
      : q
        ? (H = y.actionData)
        : (H = null);
    let $ = S.loaderData
        ? vg(y.loaderData, S.loaderData, S.matches || [], S.errors)
        : y.loaderData,
      re = y.blockers;
    re.size > 0 && ((re = new Map(re)), re.forEach((fe, et) => re.set(et, Fs)));
    let We =
      N === !0 ||
      (y.navigation.formMethod != null &&
        an(y.navigation.formMethod) &&
        ((b = T.state) == null ? void 0 : b._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      Me ||
        C === Ve.Pop ||
        (C === Ve.Push
          ? t.history.push(T, T.state)
          : C === Ve.Replace && t.history.replace(T, T.state));
    let J;
    if (C === Ve.Pop) {
      let fe = ae.get(y.location.pathname);
      fe && fe.has(T.pathname)
        ? (J = { currentLocation: y.location, nextLocation: T })
        : ae.has(T.pathname) &&
          (J = { currentLocation: T, nextLocation: y.location });
    } else if (B) {
      let fe = ae.get(y.location.pathname);
      fe
        ? fe.add(T.pathname)
        : ((fe = new Set([T.pathname])), ae.set(y.location.pathname, fe)),
        (J = { currentLocation: y.location, nextLocation: T });
    }
    Lt(
      De({}, S, {
        actionData: H,
        loaderData: $,
        historyAction: C,
        location: T,
        initialized: !0,
        navigation: Fc,
        revalidation: "idle",
        restoreScrollPosition: Zp(T, S.matches || y.matches),
        preventScrollReset: We,
        blockers: re,
      }),
      { viewTransitionOpts: J, flushSync: Z === !0 }
    ),
      (C = Ve.Pop),
      (N = !1),
      (B = !1),
      (Me = !1),
      (Wt = !1),
      (wi = []),
      (Yn = []);
  }
  async function Hp(T, S) {
    if (typeof T == "number") {
      t.history.go(T);
      return;
    }
    let A = Zh(
        y.location,
        y.matches,
        l,
        u.v7_prependBasename,
        T,
        u.v7_relativeSplatPath,
        S == null ? void 0 : S.fromRouteId,
        S == null ? void 0 : S.relative
      ),
      {
        path: L,
        submission: b,
        error: Z,
      } = dg(u.v7_normalizeFormMethod, !1, A, S),
      q = y.location,
      H = Mo(y.location, L, S && S.state);
    H = De({}, H, t.history.encodeLocation(H));
    let $ = S && S.replace != null ? S.replace : void 0,
      re = Ve.Push;
    $ === !0
      ? (re = Ve.Replace)
      : $ === !1 ||
        (b != null &&
          an(b.formMethod) &&
          b.formAction === y.location.pathname + y.location.search &&
          (re = Ve.Replace));
    let We =
        S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0,
      J = (S && S.unstable_flushSync) === !0,
      fe = Yp({ currentLocation: q, nextLocation: H, historyAction: re });
    if (fe) {
      Sa(fe, {
        state: "blocked",
        location: H,
        proceed() {
          Sa(fe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: H,
          }),
            Hp(T, S);
        },
        reset() {
          let et = new Map(y.blockers);
          et.set(fe, Fs), Lt({ blockers: et });
        },
      });
      return;
    }
    return await Mr(re, H, {
      submission: b,
      pendingError: Z,
      preventScrollReset: We,
      replace: S && S.replace,
      enableViewTransition: S && S.unstable_viewTransition,
      flushSync: J,
    });
  }
  function A1() {
    if (
      (ic(),
      Lt({ revalidation: "loading" }),
      y.navigation.state !== "submitting")
    ) {
      if (y.navigation.state === "idle") {
        Mr(y.historyAction, y.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Mr(C || y.historyAction, y.navigation.location, {
        overrideNavigation: y.navigation,
      });
    }
  }
  async function Mr(T, S, A) {
    j && j.abort(),
      (j = null),
      (C = T),
      (Me = (A && A.startUninterruptedRevalidation) === !0),
      O1(y.location, y.matches),
      (N = (A && A.preventScrollReset) === !0),
      (B = (A && A.enableViewTransition) === !0);
    let L = a || o,
      b = A && A.overrideNavigation,
      Z = Bi(L, S, l),
      q = (A && A.flushSync) === !0;
    if (!Z) {
      let et = Qt(404, { pathname: S.pathname }),
        { matches: qt, route: qe } = _g(L);
      sc(),
        As(
          S,
          { matches: qt, loaderData: {}, errors: { [qe.id]: et } },
          { flushSync: q }
        );
      return;
    }
    if (
      y.initialized &&
      !Wt &&
      QS(y.location, S) &&
      !(A && A.submission && an(A.submission.formMethod))
    ) {
      As(S, { matches: Z }, { flushSync: q });
      return;
    }
    j = new AbortController();
    let H = Us(t.history, S, j.signal, A && A.submission),
      $,
      re;
    if (A && A.pendingError) re = { [co(Z).route.id]: A.pendingError };
    else if (A && A.submission && an(A.submission.formMethod)) {
      let et = await C1(H, S, A.submission, Z, {
        replace: A.replace,
        flushSync: q,
      });
      if (et.shortCircuited) return;
      ($ = et.pendingActionData),
        (re = et.pendingActionError),
        (b = jc(S, A.submission)),
        (q = !1),
        (H = new Request(H.url, { signal: H.signal }));
    }
    let {
      shortCircuited: We,
      loaderData: J,
      errors: fe,
    } = await P1(
      H,
      S,
      Z,
      b,
      A && A.submission,
      A && A.fetcherSubmission,
      A && A.replace,
      A && A.initialHydration === !0,
      q,
      $,
      re
    );
    We ||
      ((j = null),
      As(
        S,
        De({ matches: Z }, $ ? { actionData: $ } : {}, {
          loaderData: J,
          errors: fe,
        })
      ));
  }
  async function C1(T, S, A, L, b) {
    b === void 0 && (b = {}), ic();
    let Z = YS(S, A);
    Lt({ navigation: Z }, { flushSync: b.flushSync === !0 });
    let q,
      H = td(L, S);
    if (!H.route.action && !H.route.lazy)
      q = {
        type: xe.error,
        error: Qt(405, {
          method: T.method,
          pathname: S.pathname,
          routeId: H.route.id,
        }),
      };
    else if (
      ((q = await js("action", T, H, L, s, i, l, u.v7_relativeSplatPath)),
      T.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (qr(q)) {
      let $;
      return (
        b && b.replace != null
          ? ($ = b.replace)
          : ($ = q.location === y.location.pathname + y.location.search),
        await Cs(y, q, { submission: A, replace: $ }),
        { shortCircuited: !0 }
      );
    }
    if (zi(q)) {
      let $ = co(L, H.route.id);
      return (
        (b && b.replace) !== !0 && (C = Ve.Push),
        { pendingActionData: {}, pendingActionError: { [$.route.id]: q.error } }
      );
    }
    if (Wr(q)) throw Qt(400, { type: "defer-action" });
    return { pendingActionData: { [H.route.id]: q.data } };
  }
  async function P1(T, S, A, L, b, Z, q, H, $, re, We) {
    let J = L || jc(S, b),
      fe = b || Z || Tg(J),
      et = a || o,
      [qt, qe] = fg(
        t.history,
        y,
        A,
        fe,
        S,
        u.v7_partialHydration && H === !0,
        Wt,
        wi,
        Yn,
        Ze,
        ge,
        le,
        et,
        l,
        re,
        We
      );
    if (
      (sc(
        (de) =>
          !(A && A.some((Ee) => Ee.route.id === de)) ||
          (qt && qt.some((Ee) => Ee.route.id === de))
      ),
      (W = ++M),
      qt.length === 0 && qe.length === 0)
    ) {
      let de = Kp();
      return (
        As(
          S,
          De(
            { matches: A, loaderData: {}, errors: We || null },
            re ? { actionData: re } : {},
            de ? { fetchers: new Map(y.fetchers) } : {}
          ),
          { flushSync: $ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!Me && (!u.v7_partialHydration || !H)) {
      qe.forEach((Ee) => {
        let pn = y.fetchers.get(Ee.key),
          Aa = bs(void 0, pn ? pn.data : void 0);
        y.fetchers.set(Ee.key, Aa);
      });
      let de = re || y.actionData;
      Lt(
        De(
          { navigation: J },
          de
            ? Object.keys(de).length === 0
              ? { actionData: null }
              : { actionData: de }
            : {},
          qe.length > 0 ? { fetchers: new Map(y.fetchers) } : {}
        ),
        { flushSync: $ }
      );
    }
    qe.forEach((de) => {
      we.has(de.key) && er(de.key),
        de.controller && we.set(de.key, de.controller);
    });
    let Ei = () => qe.forEach((de) => er(de.key));
    j && j.signal.addEventListener("abort", Ei);
    let {
      results: oc,
      loaderResults: Ti,
      fetcherResults: tr,
    } = await Wp(y.matches, A, qt, qe, T);
    if (T.signal.aborted) return { shortCircuited: !0 };
    j && j.signal.removeEventListener("abort", Ei),
      qe.forEach((de) => we.delete(de.key));
    let Fr = wg(oc);
    if (Fr) {
      if (Fr.idx >= qt.length) {
        let de = qe[Fr.idx - qt.length].key;
        le.add(de);
      }
      return await Cs(y, Fr.result, { replace: q }), { shortCircuited: !0 };
    }
    let { loaderData: ac, errors: lc } = yg(y, A, qt, Ti, We, qe, tr, nn);
    nn.forEach((de, Ee) => {
      de.subscribe((pn) => {
        (pn || de.done) && nn.delete(Ee);
      });
    });
    let uc = Kp(),
      Ri = Gp(W),
      Ia = uc || Ri || qe.length > 0;
    return De(
      { loaderData: ac, errors: lc },
      Ia ? { fetchers: new Map(y.fetchers) } : {}
    );
  }
  function x1(T, S, A, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    we.has(T) && er(T);
    let b = (L && L.unstable_flushSync) === !0,
      Z = a || o,
      q = Zh(
        y.location,
        y.matches,
        l,
        u.v7_prependBasename,
        A,
        u.v7_relativeSplatPath,
        S,
        L == null ? void 0 : L.relative
      ),
      H = Bi(Z, q, l);
    if (!H) {
      Ps(T, S, Qt(404, { pathname: q }), { flushSync: b });
      return;
    }
    let {
      path: $,
      submission: re,
      error: We,
    } = dg(u.v7_normalizeFormMethod, !0, q, L);
    if (We) {
      Ps(T, S, We, { flushSync: b });
      return;
    }
    let J = td(H, $);
    if (((N = (L && L.preventScrollReset) === !0), re && an(re.formMethod))) {
      k1(T, S, $, J, H, b, re);
      return;
    }
    ge.set(T, { routeId: S, path: $ }), D1(T, S, $, J, H, b, re);
  }
  async function k1(T, S, A, L, b, Z, q) {
    if ((ic(), ge.delete(T), !L.route.action && !L.route.lazy)) {
      let Ee = Qt(405, { method: q.formMethod, pathname: A, routeId: S });
      Ps(T, S, Ee, { flushSync: Z });
      return;
    }
    let H = y.fetchers.get(T);
    Zn(T, JS(q, H), { flushSync: Z });
    let $ = new AbortController(),
      re = Us(t.history, A, $.signal, q);
    we.set(T, $);
    let We = M,
      J = await js("action", re, L, b, s, i, l, u.v7_relativeSplatPath);
    if (re.signal.aborted) {
      we.get(T) === $ && we.delete(T);
      return;
    }
    if (u.v7_fetcherPersist && Ze.has(T)) {
      if (qr(J) || zi(J)) {
        Zn(T, ir(void 0));
        return;
      }
    } else {
      if (qr(J))
        if ((we.delete(T), W > We)) {
          Zn(T, ir(void 0));
          return;
        } else
          return le.add(T), Zn(T, bs(q)), Cs(y, J, { fetcherSubmission: q });
      if (zi(J)) {
        Ps(T, S, J.error);
        return;
      }
    }
    if (Wr(J)) throw Qt(400, { type: "defer-action" });
    let fe = y.navigation.location || y.location,
      et = Us(t.history, fe, $.signal),
      qt = a || o,
      qe =
        y.navigation.state !== "idle"
          ? Bi(qt, y.navigation.location, l)
          : y.matches;
    ee(qe, "Didn't find any matches after fetcher action");
    let Ei = ++M;
    K.set(T, Ei);
    let oc = bs(q, J.data);
    y.fetchers.set(T, oc);
    let [Ti, tr] = fg(
      t.history,
      y,
      qe,
      q,
      fe,
      !1,
      Wt,
      wi,
      Yn,
      Ze,
      ge,
      le,
      qt,
      l,
      { [L.route.id]: J.data },
      void 0
    );
    tr
      .filter((Ee) => Ee.key !== T)
      .forEach((Ee) => {
        let pn = Ee.key,
          Aa = y.fetchers.get(pn),
          F1 = bs(void 0, Aa ? Aa.data : void 0);
        y.fetchers.set(pn, F1),
          we.has(pn) && er(pn),
          Ee.controller && we.set(pn, Ee.controller);
      }),
      Lt({ fetchers: new Map(y.fetchers) });
    let Fr = () => tr.forEach((Ee) => er(Ee.key));
    $.signal.addEventListener("abort", Fr);
    let {
      results: ac,
      loaderResults: lc,
      fetcherResults: uc,
    } = await Wp(y.matches, qe, Ti, tr, et);
    if ($.signal.aborted) return;
    $.signal.removeEventListener("abort", Fr),
      K.delete(T),
      we.delete(T),
      tr.forEach((Ee) => we.delete(Ee.key));
    let Ri = wg(ac);
    if (Ri) {
      if (Ri.idx >= Ti.length) {
        let Ee = tr[Ri.idx - Ti.length].key;
        le.add(Ee);
      }
      return Cs(y, Ri.result);
    }
    let { loaderData: Ia, errors: de } = yg(
      y,
      y.matches,
      Ti,
      lc,
      void 0,
      tr,
      uc,
      nn
    );
    if (y.fetchers.has(T)) {
      let Ee = ir(J.data);
      y.fetchers.set(T, Ee);
    }
    Gp(Ei),
      y.navigation.state === "loading" && Ei > W
        ? (ee(C, "Expected pending action"),
          j && j.abort(),
          As(y.navigation.location, {
            matches: qe,
            loaderData: Ia,
            errors: de,
            fetchers: new Map(y.fetchers),
          }))
        : (Lt({
            errors: de,
            loaderData: vg(y.loaderData, Ia, qe, de),
            fetchers: new Map(y.fetchers),
          }),
          (Wt = !1));
  }
  async function D1(T, S, A, L, b, Z, q) {
    let H = y.fetchers.get(T);
    Zn(T, bs(q, H ? H.data : void 0), { flushSync: Z });
    let $ = new AbortController(),
      re = Us(t.history, A, $.signal);
    we.set(T, $);
    let We = M,
      J = await js("loader", re, L, b, s, i, l, u.v7_relativeSplatPath);
    if (
      (Wr(J) && (J = (await a0(J, re.signal, !0)) || J),
      we.get(T) === $ && we.delete(T),
      !re.signal.aborted)
    ) {
      if (Ze.has(T)) {
        Zn(T, ir(void 0));
        return;
      }
      if (qr(J))
        if (W > We) {
          Zn(T, ir(void 0));
          return;
        } else {
          le.add(T), await Cs(y, J);
          return;
        }
      if (zi(J)) {
        Ps(T, S, J.error);
        return;
      }
      ee(!Wr(J), "Unhandled fetcher deferred data"), Zn(T, ir(J.data));
    }
  }
  async function Cs(T, S, A) {
    let {
      submission: L,
      fetcherSubmission: b,
      replace: Z,
    } = A === void 0 ? {} : A;
    S.revalidate && (Wt = !0);
    let q = Mo(T.location, S.location, { _isRedirect: !0 });
    if ((ee(q, "Expected a location on the redirect navigation"), n)) {
      let fe = !1;
      if (S.reloadDocument) fe = !0;
      else if (r0.test(S.location)) {
        const et = t.history.createURL(S.location);
        fe = et.origin !== e.location.origin || ws(et.pathname, l) == null;
      }
      if (fe) {
        Z ? e.location.replace(S.location) : e.location.assign(S.location);
        return;
      }
    }
    j = null;
    let H = Z === !0 ? Ve.Replace : Ve.Push,
      { formMethod: $, formAction: re, formEncType: We } = T.navigation;
    !L && !b && $ && re && We && (L = Tg(T.navigation));
    let J = L || b;
    if (US.has(S.status) && J && an(J.formMethod))
      await Mr(H, q, {
        submission: De({}, J, { formAction: S.location }),
        preventScrollReset: N,
      });
    else {
      let fe = jc(q, L);
      await Mr(H, q, {
        overrideNavigation: fe,
        fetcherSubmission: b,
        preventScrollReset: N,
      });
    }
  }
  async function Wp(T, S, A, L, b) {
    let Z = await Promise.all([
        ...A.map(($) => js("loader", b, $, S, s, i, l, u.v7_relativeSplatPath)),
        ...L.map(($) =>
          $.matches && $.match && $.controller
            ? js(
                "loader",
                Us(t.history, $.path, $.controller.signal),
                $.match,
                $.matches,
                s,
                i,
                l,
                u.v7_relativeSplatPath
              )
            : { type: xe.error, error: Qt(404, { pathname: $.path }) }
        ),
      ]),
      q = Z.slice(0, A.length),
      H = Z.slice(A.length);
    return (
      await Promise.all([
        Eg(
          T,
          A,
          q,
          q.map(() => b.signal),
          !1,
          y.loaderData
        ),
        Eg(
          T,
          L.map(($) => $.match),
          H,
          L.map(($) => ($.controller ? $.controller.signal : null)),
          !0
        ),
      ]),
      { results: Z, loaderResults: q, fetcherResults: H }
    );
  }
  function ic() {
    (Wt = !0),
      wi.push(...sc()),
      ge.forEach((T, S) => {
        we.has(S) && (Yn.push(S), er(S));
      });
  }
  function Zn(T, S, A) {
    A === void 0 && (A = {}),
      y.fetchers.set(T, S),
      Lt(
        { fetchers: new Map(y.fetchers) },
        { flushSync: (A && A.flushSync) === !0 }
      );
  }
  function Ps(T, S, A, L) {
    L === void 0 && (L = {});
    let b = co(y.matches, S);
    Ra(T),
      Lt(
        { errors: { [b.route.id]: A }, fetchers: new Map(y.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      );
  }
  function qp(T) {
    return (
      u.v7_fetcherPersist &&
        (fn.set(T, (fn.get(T) || 0) + 1), Ze.has(T) && Ze.delete(T)),
      y.fetchers.get(T) || bS
    );
  }
  function Ra(T) {
    let S = y.fetchers.get(T);
    we.has(T) && !(S && S.state === "loading" && K.has(T)) && er(T),
      ge.delete(T),
      K.delete(T),
      le.delete(T),
      Ze.delete(T),
      y.fetchers.delete(T);
  }
  function N1(T) {
    if (u.v7_fetcherPersist) {
      let S = (fn.get(T) || 0) - 1;
      S <= 0 ? (fn.delete(T), Ze.add(T)) : fn.set(T, S);
    } else Ra(T);
    Lt({ fetchers: new Map(y.fetchers) });
  }
  function er(T) {
    let S = we.get(T);
    ee(S, "Expected fetch controller: " + T), S.abort(), we.delete(T);
  }
  function Qp(T) {
    for (let S of T) {
      let A = qp(S),
        L = ir(A.data);
      y.fetchers.set(S, L);
    }
  }
  function Kp() {
    let T = [],
      S = !1;
    for (let A of le) {
      let L = y.fetchers.get(A);
      ee(L, "Expected fetcher: " + A),
        L.state === "loading" && (le.delete(A), T.push(A), (S = !0));
    }
    return Qp(T), S;
  }
  function Gp(T) {
    let S = [];
    for (let [A, L] of K)
      if (L < T) {
        let b = y.fetchers.get(A);
        ee(b, "Expected fetcher: " + A),
          b.state === "loading" && (er(A), K.delete(A), S.push(A));
      }
    return Qp(S), S.length > 0;
  }
  function L1(T, S) {
    let A = y.blockers.get(T) || Fs;
    return _t.get(T) !== S && _t.set(T, S), A;
  }
  function Xp(T) {
    y.blockers.delete(T), _t.delete(T);
  }
  function Sa(T, S) {
    let A = y.blockers.get(T) || Fs;
    ee(
      (A.state === "unblocked" && S.state === "blocked") ||
        (A.state === "blocked" && S.state === "blocked") ||
        (A.state === "blocked" && S.state === "proceeding") ||
        (A.state === "blocked" && S.state === "unblocked") ||
        (A.state === "proceeding" && S.state === "unblocked"),
      "Invalid blocker state transition: " + A.state + " -> " + S.state
    );
    let L = new Map(y.blockers);
    L.set(T, S), Lt({ blockers: L });
  }
  function Yp(T) {
    let { currentLocation: S, nextLocation: A, historyAction: L } = T;
    if (_t.size === 0) return;
    _t.size > 1 && as(!1, "A router only supports one blocker at a time");
    let b = Array.from(_t.entries()),
      [Z, q] = b[b.length - 1],
      H = y.blockers.get(Z);
    if (
      !(H && H.state === "proceeding") &&
      q({ currentLocation: S, nextLocation: A, historyAction: L })
    )
      return Z;
  }
  function sc(T) {
    let S = [];
    return (
      nn.forEach((A, L) => {
        (!T || T(L)) && (A.cancel(), S.push(L), nn.delete(L));
      }),
      S
    );
  }
  function V1(T, S, A) {
    if (((d = T), (_ = S), (g = A || null), !w && y.navigation === Fc)) {
      w = !0;
      let L = Zp(y.location, y.matches);
      L != null && Lt({ restoreScrollPosition: L });
    }
    return () => {
      (d = null), (_ = null), (g = null);
    };
  }
  function Jp(T, S) {
    return (
      (g &&
        g(
          T,
          S.map((L) => gS(L, y.loaderData))
        )) ||
      T.key
    );
  }
  function O1(T, S) {
    if (d && _) {
      let A = Jp(T, S);
      d[A] = _();
    }
  }
  function Zp(T, S) {
    if (d) {
      let A = Jp(T, S),
        L = d[A];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function M1(T) {
    (s = {}), (a = Jh(T, i, void 0, s));
  }
  return (
    (I = {
      get basename() {
        return l;
      },
      get future() {
        return u;
      },
      get state() {
        return y;
      },
      get routes() {
        return o;
      },
      get window() {
        return e;
      },
      initialize: R1,
      subscribe: I1,
      enableScrollRestoration: V1,
      navigate: Hp,
      fetch: x1,
      revalidate: A1,
      createHref: (T) => t.history.createHref(T),
      encodeLocation: (T) => t.history.encodeLocation(T),
      getFetcher: qp,
      deleteFetcher: N1,
      dispose: S1,
      getBlocker: L1,
      deleteBlocker: Xp,
      _internalFetchControllers: we,
      _internalActiveDeferreds: nn,
      _internalSetRoutes: M1,
    }),
    I
  );
}
function zS(t) {
  return (
    t != null &&
    (("formData" in t && t.formData != null) ||
      ("body" in t && t.body !== void 0))
  );
}
function Zh(t, e, n, r, i, s, o, a) {
  let l, u;
  if (o) {
    l = [];
    for (let h of e)
      if ((l.push(h), h.route.id === o)) {
        u = h;
        break;
      }
  } else (l = e), (u = e[e.length - 1]);
  let c = Nf(i || ".", Df(l, s), ws(t.pathname, n) || t.pathname, a === "path");
  return (
    i == null && ((c.search = t.search), (c.hash = t.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !Vf(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : $n([n, c.pathname])),
    oi(c)
  );
}
function dg(t, e, n, r) {
  if (!r || !zS(r)) return { path: n };
  if (r.formMethod && !XS(r.formMethod))
    return { path: n, error: Qt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Qt(400, { type: "invalid-body" }) }),
    s = r.formMethod || "get",
    o = t ? s.toUpperCase() : s.toLowerCase(),
    a = o0(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!an(o)) return i();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((g, _) => {
                let [w, E] = _;
                return (
                  "" +
                  g +
                  w +
                  "=" +
                  E +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!an(o)) return i();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ee(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let l, u;
  if (r.formData) (l = ed(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = ed(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = gg(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = gg(l));
    } catch {
      return i();
    }
  let c = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (an(c.formMethod)) return { path: n, submission: c };
  let h = Xn(n);
  return (
    e && h.search && Vf(h.search) && l.append("index", ""),
    (h.search = "?" + l),
    { path: oi(h), submission: c }
  );
}
function HS(t, e) {
  let n = t;
  if (e) {
    let r = t.findIndex((i) => i.route.id === e);
    r >= 0 && (n = t.slice(0, r));
  }
  return n;
}
function fg(t, e, n, r, i, s, o, a, l, u, c, h, d, g, _, w) {
  let E = w ? Object.values(w)[0] : _ ? Object.values(_)[0] : void 0,
    p = t.createURL(e.location),
    f = t.createURL(i),
    m = w ? Object.keys(w)[0] : void 0,
    I = HS(n, m).filter((C, N) => {
      let { route: j } = C;
      if (j.lazy) return !0;
      if (j.loader == null) return !1;
      if (s)
        return j.loader.hydrate
          ? !0
          : e.loaderData[j.id] === void 0 &&
              (!e.errors || e.errors[j.id] === void 0);
      if (
        WS(e.loaderData, e.matches[N], C) ||
        a.some((be) => be === C.route.id)
      )
        return !0;
      let B = e.matches[N],
        ae = C;
      return pg(
        C,
        De(
          {
            currentUrl: p,
            currentParams: B.params,
            nextUrl: f,
            nextParams: ae.params,
          },
          r,
          {
            actionResult: E,
            defaultShouldRevalidate:
              o ||
              p.pathname + p.search === f.pathname + f.search ||
              p.search !== f.search ||
              s0(B, ae),
          }
        )
      );
    }),
    y = [];
  return (
    c.forEach((C, N) => {
      if (s || !n.some((Me) => Me.route.id === C.routeId) || u.has(N)) return;
      let j = Bi(d, C.path, g);
      if (!j) {
        y.push({
          key: N,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let B = e.fetchers.get(N),
        ae = td(j, C.path),
        be = !1;
      h.has(N)
        ? (be = !1)
        : l.includes(N)
          ? (be = !0)
          : B && B.state !== "idle" && B.data === void 0
            ? (be = o)
            : (be = pg(
                ae,
                De(
                  {
                    currentUrl: p,
                    currentParams: e.matches[e.matches.length - 1].params,
                    nextUrl: f,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: E, defaultShouldRevalidate: o }
                )
              )),
        be &&
          y.push({
            key: N,
            routeId: C.routeId,
            path: C.path,
            matches: j,
            match: ae,
            controller: new AbortController(),
          });
    }),
    [I, y]
  );
}
function WS(t, e, n) {
  let r = !e || n.route.id !== e.route.id,
    i = t[n.route.id] === void 0;
  return r || i;
}
function s0(t, e) {
  let n = t.route.path;
  return (
    t.pathname !== e.pathname ||
    (n != null && n.endsWith("*") && t.params["*"] !== e.params["*"])
  );
}
function pg(t, e) {
  if (t.route.shouldRevalidate) {
    let n = t.route.shouldRevalidate(e);
    if (typeof n == "boolean") return n;
  }
  return e.defaultShouldRevalidate;
}
async function mg(t, e, n) {
  if (!t.lazy) return;
  let r = await t.lazy();
  if (!t.lazy) return;
  let i = n[t.id];
  ee(i, "No route found in manifest");
  let s = {};
  for (let o in r) {
    let l = i[o] !== void 0 && o !== "hasErrorBoundary";
    as(
      !l,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !l && !pS.has(o) && (s[o] = r[o]);
  }
  Object.assign(i, s), Object.assign(i, De({}, e(i), { lazy: void 0 }));
}
async function js(t, e, n, r, i, s, o, a, l) {
  l === void 0 && (l = {});
  let u,
    c,
    h,
    d = (w) => {
      let E,
        p = new Promise((f, m) => (E = m));
      return (
        (h = () => E()),
        e.signal.addEventListener("abort", h),
        Promise.race([
          w({ request: e, params: n.params, context: l.requestContext }),
          p,
        ])
      );
    };
  try {
    let w = n.route[t];
    if (n.route.lazy)
      if (w) {
        let E,
          p = await Promise.all([
            d(w).catch((f) => {
              E = f;
            }),
            mg(n.route, s, i),
          ]);
        if (E) throw E;
        c = p[0];
      } else if ((await mg(n.route, s, i), (w = n.route[t]), w)) c = await d(w);
      else if (t === "action") {
        let E = new URL(e.url),
          p = E.pathname + E.search;
        throw Qt(405, { method: e.method, pathname: p, routeId: n.route.id });
      } else return { type: xe.data, data: void 0 };
    else if (w) c = await d(w);
    else {
      let E = new URL(e.url),
        p = E.pathname + E.search;
      throw Qt(404, { pathname: p });
    }
    ee(
      c !== void 0,
      "You defined " +
        (t === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          t +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (w) {
    (u = xe.error), (c = w);
  } finally {
    h && e.signal.removeEventListener("abort", h);
  }
  if (GS(c)) {
    let w = c.status;
    if (jS.has(w)) {
      let p = c.headers.get("Location");
      if (
        (ee(
          p,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !r0.test(p))
      )
        p = Zh(new URL(e.url), r.slice(0, r.indexOf(n) + 1), o, !0, p, a);
      else if (!l.isStaticRequest) {
        let f = new URL(e.url),
          m = p.startsWith("//") ? new URL(f.protocol + p) : new URL(p),
          R = ws(m.pathname, o) != null;
        m.origin === f.origin && R && (p = m.pathname + m.search + m.hash);
      }
      if (l.isStaticRequest) throw (c.headers.set("Location", p), c);
      return {
        type: xe.redirect,
        status: w,
        location: p,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (l.isRouteRequest)
      throw { type: u === xe.error ? xe.error : xe.data, response: c };
    let E;
    try {
      let p = c.headers.get("Content-Type");
      p && /\bapplication\/json\b/.test(p)
        ? c.body == null
          ? (E = null)
          : (E = await c.json())
        : (E = await c.text());
    } catch (p) {
      return { type: xe.error, error: p };
    }
    return u === xe.error
      ? { type: u, error: new Lf(w, c.statusText, E), headers: c.headers }
      : { type: xe.data, data: E, statusCode: c.status, headers: c.headers };
  }
  if (u === xe.error) return { type: u, error: c };
  if (KS(c)) {
    var g, _;
    return {
      type: xe.deferred,
      deferredData: c,
      statusCode: (g = c.init) == null ? void 0 : g.status,
      headers:
        ((_ = c.init) == null ? void 0 : _.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: xe.data, data: c };
}
function Us(t, e, n, r) {
  let i = t.createURL(o0(e)).toString(),
    s = { signal: n };
  if (r && an(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (s.method = o.toUpperCase()),
      a === "application/json"
        ? ((s.headers = new Headers({ "Content-Type": a })),
          (s.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (s.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (s.body = ed(r.formData))
            : (s.body = r.formData);
  }
  return new Request(i, s);
}
function ed(t) {
  let e = new URLSearchParams();
  for (let [n, r] of t.entries())
    e.append(n, typeof r == "string" ? r : r.name);
  return e;
}
function gg(t) {
  let e = new FormData();
  for (let [n, r] of t.entries()) e.append(n, r);
  return e;
}
function qS(t, e, n, r, i) {
  let s = {},
    o = null,
    a,
    l = !1,
    u = {};
  return (
    n.forEach((c, h) => {
      let d = e[h].route.id;
      if (
        (ee(!qr(c), "Cannot handle redirect results in processLoaderData"),
        zi(c))
      ) {
        let g = co(t, d),
          _ = c.error;
        r && ((_ = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[g.route.id] == null && (o[g.route.id] = _),
          (s[d] = void 0),
          l || ((l = !0), (a = t0(c.error) ? c.error.status : 500)),
          c.headers && (u[d] = c.headers);
      } else
        Wr(c)
          ? (i.set(d, c.deferredData), (s[d] = c.deferredData.data))
          : (s[d] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !l &&
            (a = c.statusCode),
          c.headers && (u[d] = c.headers);
    }),
    r && ((o = r), (s[Object.keys(r)[0]] = void 0)),
    { loaderData: s, errors: o, statusCode: a || 200, loaderHeaders: u }
  );
}
function yg(t, e, n, r, i, s, o, a) {
  let { loaderData: l, errors: u } = qS(e, n, r, i, a);
  for (let c = 0; c < s.length; c++) {
    let { key: h, match: d, controller: g } = s[c];
    ee(
      o !== void 0 && o[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let _ = o[c];
    if (!(g && g.signal.aborted))
      if (zi(_)) {
        let w = co(t.matches, d == null ? void 0 : d.route.id);
        (u && u[w.route.id]) || (u = De({}, u, { [w.route.id]: _.error })),
          t.fetchers.delete(h);
      } else if (qr(_)) ee(!1, "Unhandled fetcher revalidation redirect");
      else if (Wr(_)) ee(!1, "Unhandled fetcher deferred data");
      else {
        let w = ir(_.data);
        t.fetchers.set(h, w);
      }
  }
  return { loaderData: l, errors: u };
}
function vg(t, e, n, r) {
  let i = De({}, e);
  for (let s of n) {
    let o = s.route.id;
    if (
      (e.hasOwnProperty(o)
        ? e[o] !== void 0 && (i[o] = e[o])
        : t[o] !== void 0 && s.route.loader && (i[o] = t[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function co(t, e) {
  return (
    (e ? t.slice(0, t.findIndex((r) => r.route.id === e) + 1) : [...t])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || t[0]
  );
}
function _g(t) {
  let e =
    t.length === 1
      ? t[0]
      : t.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: e }],
    route: e,
  };
}
function Qt(t, e) {
  let { pathname: n, routeId: r, method: i, type: s } = e === void 0 ? {} : e,
    o = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    t === 400
      ? ((o = "Bad Request"),
        i && n && r
          ? (a =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
            ? (a = "defer() is not supported in actions")
            : s === "invalid-body" && (a = "Unable to encode submission body"))
      : t === 403
        ? ((o = "Forbidden"),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : t === 404
          ? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : t === 405 &&
            ((o = "Method Not Allowed"),
            i && n && r
              ? (a =
                  "You made a " +
                  i.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Lf(t || 500, o, new Error(a), !0)
  );
}
function wg(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (qr(n)) return { result: n, idx: e };
  }
}
function o0(t) {
  let e = typeof t == "string" ? Xn(t) : t;
  return oi(De({}, e, { hash: "" }));
}
function QS(t, e) {
  return t.pathname !== e.pathname || t.search !== e.search
    ? !1
    : t.hash === ""
      ? e.hash !== ""
      : t.hash === e.hash
        ? !0
        : e.hash !== "";
}
function Wr(t) {
  return t.type === xe.deferred;
}
function zi(t) {
  return t.type === xe.error;
}
function qr(t) {
  return (t && t.type) === xe.redirect;
}
function KS(t) {
  let e = t;
  return (
    e &&
    typeof e == "object" &&
    typeof e.data == "object" &&
    typeof e.subscribe == "function" &&
    typeof e.cancel == "function" &&
    typeof e.resolveData == "function"
  );
}
function GS(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.headers == "object" &&
    typeof t.body < "u"
  );
}
function XS(t) {
  return FS.has(t.toLowerCase());
}
function an(t) {
  return OS.has(t.toLowerCase());
}
async function Eg(t, e, n, r, i, s) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      l = e[o];
    if (!l) continue;
    let u = t.find((h) => h.route.id === l.route.id),
      c = u != null && !s0(u, l) && (s && s[l.route.id]) !== void 0;
    if (Wr(a) && (i || c)) {
      let h = r[o];
      ee(h, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await a0(a, h, i).then((d) => {
          d && (n[o] = d || n[o]);
        });
    }
  }
}
async function a0(t, e, n) {
  if ((n === void 0 && (n = !1), !(await t.deferredData.resolveData(e)))) {
    if (n)
      try {
        return { type: xe.data, data: t.deferredData.unwrappedData };
      } catch (i) {
        return { type: xe.error, error: i };
      }
    return { type: xe.data, data: t.deferredData.data };
  }
}
function Vf(t) {
  return new URLSearchParams(t).getAll("index").some((e) => e === "");
}
function td(t, e) {
  let n = typeof e == "string" ? Xn(e).search : e.search;
  if (t[t.length - 1].route.index && Vf(n || "")) return t[t.length - 1];
  let r = e0(t);
  return r[r.length - 1];
}
function Tg(t) {
  let {
    formMethod: e,
    formAction: n,
    formEncType: r,
    text: i,
    formData: s,
    json: o,
  } = t;
  if (!(!e || !n || !r)) {
    if (i != null)
      return {
        formMethod: e,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: e,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: e,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function jc(t, e) {
  return e
    ? {
        state: "loading",
        location: t,
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
      }
    : {
        state: "loading",
        location: t,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function YS(t, e) {
  return {
    state: "submitting",
    location: t,
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
  };
}
function bs(t, e) {
  return t
    ? {
        state: "loading",
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: e,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
      };
}
function JS(t, e) {
  return {
    state: "submitting",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: e ? e.data : void 0,
  };
}
function ir(t) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t,
  };
}
function ZS(t, e) {
  try {
    let n = t.sessionStorage.getItem(i0);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && e.set(i, new Set(s || []));
    }
  } catch {}
}
function eI(t, e) {
  if (e.size > 0) {
    let n = {};
    for (let [r, i] of e) n[r] = [...i];
    try {
      t.sessionStorage.setItem(i0, JSON.stringify(n));
    } catch (r) {
      as(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fo() {
  return (
    (Fo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Fo.apply(this, arguments)
  );
}
const Su = x.createContext(null),
  l0 = x.createContext(null),
  pi = x.createContext(null),
  Iu = x.createContext(null),
  mi = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  u0 = x.createContext(null);
function tI(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  oa() || ee(!1);
  let { basename: r, navigator: i } = x.useContext(pi),
    { hash: s, pathname: o, search: a } = h0(t, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : $n([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function oa() {
  return x.useContext(Iu) != null;
}
function Au() {
  return oa() || ee(!1), x.useContext(Iu).location;
}
function c0(t) {
  x.useContext(pi).static || x.useLayoutEffect(t);
}
function nI() {
  let { isDataRoute: t } = x.useContext(mi);
  return t ? pI() : rI();
}
function rI() {
  oa() || ee(!1);
  let t = x.useContext(Su),
    { basename: e, future: n, navigator: r } = x.useContext(pi),
    { matches: i } = x.useContext(mi),
    { pathname: s } = Au(),
    o = JSON.stringify(Df(i, n.v7_relativeSplatPath)),
    a = x.useRef(!1);
  return (
    c0(() => {
      a.current = !0;
    }),
    x.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let h = Nf(u, JSON.parse(o), s, c.relative === "path");
        t == null &&
          e !== "/" &&
          (h.pathname = h.pathname === "/" ? e : $n([e, h.pathname])),
          (c.replace ? r.replace : r.push)(h, c.state, c);
      },
      [e, r, o, s, t]
    )
  );
}
function h0(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { future: r } = x.useContext(pi),
    { matches: i } = x.useContext(mi),
    { pathname: s } = Au(),
    o = JSON.stringify(Df(i, r.v7_relativeSplatPath));
  return x.useMemo(() => Nf(t, JSON.parse(o), s, n === "path"), [t, o, s, n]);
}
function iI(t, e, n, r) {
  oa() || ee(!1);
  let { navigator: i } = x.useContext(pi),
    { matches: s } = x.useContext(mi),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Au(),
    c;
  if (e) {
    var h;
    let E = typeof e == "string" ? Xn(e) : e;
    l === "/" || ((h = E.pathname) != null && h.startsWith(l)) || ee(!1),
      (c = E);
  } else c = u;
  let d = c.pathname || "/",
    g = d;
  if (l !== "/") {
    let E = l.replace(/^\//, "").split("/");
    g = "/" + d.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let _ = Bi(t, { pathname: g }),
    w = uI(
      _ &&
        _.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, a, E.params),
            pathname: $n([
              l,
              i.encodeLocation
                ? i.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? l
                : $n([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return e && w
    ? x.createElement(
        Iu.Provider,
        {
          value: {
            location: Fo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Ve.Pop,
          },
        },
        w
      )
    : w;
}
function sI() {
  let t = fI(),
    e = t0(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? x.createElement("pre", { style: i }, n) : null,
    null
  );
}
const oI = x.createElement(sI, null);
class aI extends x.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          mi.Provider,
          { value: this.props.routeContext },
          x.createElement(u0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function lI(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = x.useContext(Su);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(mi.Provider, { value: e }, r)
  );
}
function uI(t, e, n, r) {
  var i;
  if (
    (e === void 0 && (e = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    t == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) t = n.matches;
    else return null;
  }
  let o = t,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = o.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id])
    );
    c >= 0 || ee(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let h = o[c];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = c),
        h.route.id)
      ) {
        let { loaderData: d, errors: g } = n,
          _ =
            h.route.loader &&
            d[h.route.id] === void 0 &&
            (!g || g[h.route.id] === void 0);
        if (h.route.lazy || _) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, h, d) => {
    let g,
      _ = !1,
      w = null,
      E = null;
    n &&
      ((g = a && h.route.id ? a[h.route.id] : void 0),
      (w = h.route.errorElement || oI),
      l &&
        (u < 0 && d === 0
          ? (mI("route-fallback", !1), (_ = !0), (E = null))
          : u === d &&
            ((_ = !0), (E = h.route.hydrateFallbackElement || null))));
    let p = e.concat(o.slice(0, d + 1)),
      f = () => {
        let m;
        return (
          g
            ? (m = w)
            : _
              ? (m = E)
              : h.route.Component
                ? (m = x.createElement(h.route.Component, null))
                : h.route.element
                  ? (m = h.route.element)
                  : (m = c),
          x.createElement(lI, {
            match: h,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || d === 0)
      ? x.createElement(aI, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: f(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var d0 = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(d0 || {}),
  Bl = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(Bl || {});
function cI(t) {
  let e = x.useContext(Su);
  return e || ee(!1), e;
}
function hI(t) {
  let e = x.useContext(l0);
  return e || ee(!1), e;
}
function dI(t) {
  let e = x.useContext(mi);
  return e || ee(!1), e;
}
function f0(t) {
  let e = dI(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || ee(!1), n.route.id;
}
function fI() {
  var t;
  let e = x.useContext(u0),
    n = hI(Bl.UseRouteError),
    r = f0(Bl.UseRouteError);
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
function pI() {
  let { router: t } = cI(d0.UseNavigateStable),
    e = f0(Bl.UseNavigateStable),
    n = x.useRef(!1);
  return (
    c0(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, Fo({ fromRouteId: e }, s)));
      },
      [t, e]
    )
  );
}
const Rg = {};
function mI(t, e, n) {
  !e && !Rg[t] && (Rg[t] = !0);
}
function gI(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = Ve.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = t;
  oa() && ee(!1);
  let l = e.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Fo({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof r == "string" && (r = Xn(r));
  let {
      pathname: c = "/",
      search: h = "",
      hash: d = "",
      state: g = null,
      key: _ = "default",
    } = r,
    w = x.useMemo(() => {
      let E = ws(c, l);
      return E == null
        ? null
        : {
            location: { pathname: E, search: h, hash: d, state: g, key: _ },
            navigationType: i,
          };
    }, [l, c, h, d, g, _, i]);
  return w == null
    ? null
    : x.createElement(
        pi.Provider,
        { value: u },
        x.createElement(Iu.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function yI(t) {
  let e = {
    hasErrorBoundary: t.ErrorBoundary != null || t.errorElement != null,
  };
  return (
    t.Component &&
      Object.assign(e, {
        element: x.createElement(t.Component),
        Component: void 0,
      }),
    t.HydrateFallback &&
      Object.assign(e, {
        hydrateFallbackElement: x.createElement(t.HydrateFallback),
        HydrateFallback: void 0,
      }),
    t.ErrorBoundary &&
      Object.assign(e, {
        errorElement: x.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    e
  );
}
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jo() {
  return (
    (jo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    jo.apply(this, arguments)
  );
}
function vI(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function _I(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function wI(t, e) {
  return t.button === 0 && (!e || e === "_self") && !_I(t);
}
const EI = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  TI = "6";
try {
  window.__reactRouterVersion = TI;
} catch {}
function RI(t, e) {
  return BS({
    basename: e == null ? void 0 : e.basename,
    future: jo({}, e == null ? void 0 : e.future, { v7_prependBasename: !0 }),
    history: hS({ window: e == null ? void 0 : e.window }),
    hydrationData: (e == null ? void 0 : e.hydrationData) || SI(),
    routes: t,
    mapRouteProperties: yI,
    window: e == null ? void 0 : e.window,
  }).initialize();
}
function SI() {
  var t;
  let e = (t = window) == null ? void 0 : t.__staticRouterHydrationData;
  return e && e.errors && (e = jo({}, e, { errors: II(e.errors) })), e;
}
function II(t) {
  if (!t) return null;
  let e = Object.entries(t),
    n = {};
  for (let [r, i] of e)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Lf(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == "function")
          try {
            let o = new s(i.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        (s.stack = ""), (n[r] = s);
      }
    } else n[r] = i;
  return n;
}
const AI = x.createContext({ isTransitioning: !1 }),
  CI = x.createContext(new Map()),
  PI = "startTransition",
  Sg = Z1[PI],
  xI = "flushSync",
  Ig = cS[xI];
function kI(t) {
  Sg ? Sg(t) : t();
}
function $s(t) {
  Ig ? Ig(t) : t();
}
let DI = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((e, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), e(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
};
function NI(t) {
  let { fallbackElement: e, router: n, future: r } = t,
    [i, s] = x.useState(n.state),
    [o, a] = x.useState(),
    [l, u] = x.useState({ isTransitioning: !1 }),
    [c, h] = x.useState(),
    [d, g] = x.useState(),
    [_, w] = x.useState(),
    E = x.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    f = x.useCallback(
      (C) => {
        p ? kI(C) : C();
      },
      [p]
    ),
    m = x.useCallback(
      (C, N) => {
        let {
          deletedFetchers: j,
          unstable_flushSync: B,
          unstable_viewTransitionOpts: ae,
        } = N;
        j.forEach((Me) => E.current.delete(Me)),
          C.fetchers.forEach((Me, Wt) => {
            Me.data !== void 0 && E.current.set(Wt, Me.data);
          });
        let be =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!ae || be) {
          B ? $s(() => s(C)) : f(() => s(C));
          return;
        }
        if (B) {
          $s(() => {
            d && (c && c.resolve(), d.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: ae.currentLocation,
                nextLocation: ae.nextLocation,
              });
          });
          let Me = n.window.document.startViewTransition(() => {
            $s(() => s(C));
          });
          Me.finished.finally(() => {
            $s(() => {
              h(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            $s(() => g(Me));
          return;
        }
        d
          ? (c && c.resolve(),
            d.skipTransition(),
            w({
              state: C,
              currentLocation: ae.currentLocation,
              nextLocation: ae.nextLocation,
            }))
          : (a(C),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: ae.currentLocation,
              nextLocation: ae.nextLocation,
            }));
      },
      [n.window, d, c, E, f]
    );
  x.useLayoutEffect(() => n.subscribe(m), [n, m]),
    x.useEffect(() => {
      l.isTransitioning && !l.flushSync && h(new DI());
    }, [l]),
    x.useEffect(() => {
      if (c && o && n.window) {
        let C = o,
          N = c.promise,
          j = n.window.document.startViewTransition(async () => {
            f(() => s(C)), await N;
          });
        j.finished.finally(() => {
          h(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          g(j);
      }
    }, [f, o, c, n.window]),
    x.useEffect(() => {
      c && o && i.location.key === o.location.key && c.resolve();
    }, [c, d, i.location, o]),
    x.useEffect(() => {
      !l.isTransitioning &&
        _ &&
        (a(_.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: _.currentLocation,
          nextLocation: _.nextLocation,
        }),
        w(void 0));
    }, [l.isTransitioning, _]),
    x.useEffect(() => {}, []);
  let R = x.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (C) => n.navigate(C),
        push: (C, N, j) =>
          n.navigate(C, {
            state: N,
            preventScrollReset: j == null ? void 0 : j.preventScrollReset,
          }),
        replace: (C, N, j) =>
          n.navigate(C, {
            replace: !0,
            state: N,
            preventScrollReset: j == null ? void 0 : j.preventScrollReset,
          }),
      }),
      [n]
    ),
    I = n.basename || "/",
    y = x.useMemo(
      () => ({ router: n, navigator: R, static: !1, basename: I }),
      [n, R, I]
    );
  return x.createElement(
    x.Fragment,
    null,
    x.createElement(
      Su.Provider,
      { value: y },
      x.createElement(
        l0.Provider,
        { value: i },
        x.createElement(
          CI.Provider,
          { value: E.current },
          x.createElement(
            AI.Provider,
            { value: l },
            x.createElement(
              gI,
              {
                basename: I,
                location: i.location,
                navigationType: i.historyAction,
                navigator: R,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? x.createElement(LI, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : e
            )
          )
        )
      )
    ),
    null
  );
}
function LI(t) {
  let { routes: e, future: n, state: r } = t;
  return iI(e, void 0, r, n);
}
const VI =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  OI = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ft = x.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: h,
      } = e,
      d = vI(e, EI),
      { basename: g } = x.useContext(pi),
      _,
      w = !1;
    if (typeof u == "string" && OI.test(u) && ((_ = u), VI))
      try {
        let m = new URL(window.location.href),
          R = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          I = ws(R.pathname, g);
        R.origin === m.origin && I != null
          ? (u = I + R.search + R.hash)
          : (w = !0);
      } catch {}
    let E = tI(u, { relative: i }),
      p = MI(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: h,
      });
    function f(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return x.createElement(
      "a",
      jo({}, d, { href: _ || E, onClick: w || s ? r : f, ref: n, target: l })
    );
  });
var Ag;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(Ag || (Ag = {}));
var Cg;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(Cg || (Cg = {}));
function MI(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = e === void 0 ? {} : e,
    l = nI(),
    u = Au(),
    c = h0(t, { relative: o });
  return x.useCallback(
    (h) => {
      if (wI(h, n)) {
        h.preventDefault();
        let d = r !== void 0 ? r : oi(u) === oi(c);
        l(t, {
          replace: d,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, t, s, o, a]
  );
}
var p0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Pg = Un.createContext && Un.createContext(p0),
  FI = ["attr", "size", "title"];
function jI(t, e) {
  if (t == null) return {};
  var n = UI(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function UI(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function zl() {
  return (
    (zl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    zl.apply(this, arguments)
  );
}
function xg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Hl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? xg(Object(n), !0).forEach(function (r) {
          bI(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : xg(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function bI(t, e, n) {
  return (
    (e = $I(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function $I(t) {
  var e = BI(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function BI(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function m0(t) {
  return (
    t &&
    t.map((e, n) =>
      Un.createElement(e.tag, Hl({ key: n }, e.attr), m0(e.child))
    )
  );
}
function Of(t) {
  return (e) =>
    Un.createElement(zI, zl({ attr: Hl({}, t.attr) }, e), m0(t.child));
}
function zI(t) {
  var e = (n) => {
    var { attr: r, size: i, title: s } = t,
      o = jI(t, FI),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      t.className && (l = (l ? l + " " : "") + t.className),
      Un.createElement(
        "svg",
        zl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: l,
            style: Hl(Hl({ color: t.color || n.color }, n.style), t.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && Un.createElement("title", null, s),
        t.children
      )
    );
  };
  return Pg !== void 0
    ? Un.createElement(Pg.Consumer, null, (n) => e(n))
    : e(p0);
}
function HI(t) {
  return Of({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "m14.47 13.77-1.41-1.42 5.66-5.65-1.42-1.42-5.65 5.66-1.42-1.41 5.66-5.66-1.42-1.42-6.36 6.37a3 3 0 0 0 0 4.24l.71.71-6.37 6.36 1.42 1.42 6.36-6.37.71.71a3 3 0 0 0 4.24 0l6.37-6.36-1.42-1.42z",
        },
        child: [],
      },
    ],
  })(t);
}
function Mf(t) {
  return Of({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "48",
          d: "M244 400 100 256l144-144M120 256h292",
        },
        child: [],
      },
    ],
  })(t);
}
const g0 = "/assets/recipehub-logo-k-WATxk6.png";
var y0 = { exports: {} },
  WI = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  qI = WI,
  QI = qI;
function v0() {}
function _0() {}
_0.resetWarningCache = v0;
var KI = function () {
  function t(r, i, s, o, a, l) {
    if (l !== QI) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: _0,
    resetWarningCache: v0,
  };
  return (n.PropTypes = n), n;
};
y0.exports = KI();
var GI = y0.exports;
const Ge = Vd(GI);
function XI(t) {
  return Of({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
        },
        child: [],
      },
    ],
  })(t);
}
function aa({ headerTag: t }) {
  return v.jsx(v.Fragment, {
    children: v.jsx("header", {
      children: v.jsxs("div", {
        className:
          "header container-fluid d-flex justify-content-between align-items-center",
        children: [
          v.jsxs("div", {
            className: "logo-and-text",
            children: [
              v.jsx("a", {
                className: "navbar-brand",
                href: "#",
                children: v.jsx("img", {
                  src: g0,
                  alt: "Logo",
                  width: "70",
                  height: "70",
                }),
              }),
              v.jsx("h1", { className: "app-name", children: t }),
            ],
          }),
          v.jsx("div", {
            className: "d-flex justify-content-between",
            children: v.jsx("div", {
              className: "ms-auto",
              children: v.jsx(Ft, {
                to: "/homepage",
                children: v.jsx(XI, { className: "home-icon" }),
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
aa.propTypes = { headerTag: Ge.string.isRequired };
function Ff() {
  return v.jsx("footer", {
    className: "bg-body-tertiary text-center p-3",
    children: v.jsx("div", {
      className: "container",
      children: v.jsxs("span", {
        className: "text-muted",
        children: ["© 2024 RecipeHub. All rights reserved 🪔", " "],
      }),
    }),
  });
}
var kg = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const w0 = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
          ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
          : (i & 64512) === 55296 &&
              r + 1 < t.length &&
              (t.charCodeAt(r + 1) & 64512) === 56320
            ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
              (e[n++] = (i >> 18) | 240),
              (e[n++] = ((i >> 12) & 63) | 128),
              (e[n++] = ((i >> 6) & 63) | 128),
              (e[n++] = (i & 63) | 128))
            : ((e[n++] = (i >> 12) | 224),
              (e[n++] = ((i >> 6) & 63) | 128),
              (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  YI = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          a = t[n++],
          l =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (l >> 10))),
          (e[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return e.join("");
  },
  E0 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          a = o ? t[i + 1] : 0,
          l = i + 2 < t.length,
          u = l ? t[i + 2] : 0,
          c = s >> 2,
          h = ((s & 3) << 4) | (a >> 4);
        let d = ((a & 15) << 2) | (u >> 6),
          g = u & 63;
        l || ((g = 64), o || (d = 64)), r.push(n[c], n[h], n[d], n[g]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(w0(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : YI(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          a = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const u = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const h = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || a == null || u == null || h == null))
          throw new JI();
        const d = (s << 2) | (a >> 4);
        if ((r.push(d), u !== 64)) {
          const g = ((a << 4) & 240) | (u >> 2);
          if ((r.push(g), h !== 64)) {
            const _ = ((u << 6) & 192) | h;
            r.push(_);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
class JI extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const ZI = function (t) {
    const e = w0(t);
    return E0.encodeByteArray(e, !0);
  },
  Wl = function (t) {
    return ZI(t).replace(/\./g, "");
  },
  eA = function (t) {
    try {
      return E0.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tA() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nA = () => tA().__FIREBASE_DEFAULTS__,
  rA = () => {
    if (typeof process > "u" || typeof kg > "u") return;
    const t = kg.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  iA = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && eA(t[1]);
    return e && JSON.parse(e);
  },
  jf = () => {
    try {
      return nA() || rA() || iA();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  sA = (t) => {
    var e, n;
    return (n =
      (e = jf()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t];
  },
  T0 = (t) => {
    const e = sA(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  R0 = () => {
    var t;
    return (t = jf()) === null || t === void 0 ? void 0 : t.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oA {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function S0(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = e || "demo-project",
    i = t.iat || 0,
    s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    t
  );
  return [Wl(JSON.stringify(n)), Wl(JSON.stringify(o)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ql() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function aA() {
  var t;
  const e = (t = jf()) === null || t === void 0 ? void 0 : t.forceEnvironment;
  if (e === "node") return !0;
  if (e === "browser") return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch {
    return !1;
  }
}
function lA() {
  return (
    !aA() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function I0() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function uA() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const cA = "FirebaseError";
class gi extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = cA),
      Object.setPrototypeOf(this, gi.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, A0.prototype.create);
  }
}
class A0 {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? hA(s, r) : "Error",
      a = `${this.serviceName}: ${o} (${i}).`;
    return new gi(i, a, r);
  }
}
function hA(t, e) {
  return t.replace(dA, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const dA = /\{\$([^}]+)}/g;
function nd(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (Dg(s) && Dg(o)) {
      if (!nd(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Dg(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tn(t) {
  return t && t._delegate ? t._delegate : t;
}
class ls {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const br = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fA {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new oA();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (mA(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: br });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = br) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = br) {
    return this.instances.has(e);
  }
  getOptions(e = br) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: pA(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = br) {
    return this.component ? (this.component.multipleInstances ? e : br) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function pA(t) {
  return t === br ? void 0 : t;
}
function mA(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gA {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new fA(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var se;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(se || (se = {}));
const yA = {
    debug: se.DEBUG,
    verbose: se.VERBOSE,
    info: se.INFO,
    warn: se.WARN,
    error: se.ERROR,
    silent: se.SILENT,
  },
  vA = se.INFO,
  _A = {
    [se.DEBUG]: "log",
    [se.VERBOSE]: "log",
    [se.INFO]: "info",
    [se.WARN]: "warn",
    [se.ERROR]: "error",
  },
  wA = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = _A[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class C0 {
  constructor(e) {
    (this.name = e),
      (this._logLevel = vA),
      (this._logHandler = wA),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in se))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? yA[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, se.DEBUG, ...e),
      this._logHandler(this, se.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, se.VERBOSE, ...e),
      this._logHandler(this, se.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, se.INFO, ...e),
      this._logHandler(this, se.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, se.WARN, ...e),
      this._logHandler(this, se.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, se.ERROR, ...e),
      this._logHandler(this, se.ERROR, ...e);
  }
}
const EA = (t, e) => e.some((n) => t instanceof n);
let Ng, Lg;
function TA() {
  return (
    Ng ||
    (Ng = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function RA() {
  return (
    Lg ||
    (Lg = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const P0 = new WeakMap(),
  rd = new WeakMap(),
  x0 = new WeakMap(),
  Uc = new WeakMap(),
  Uf = new WeakMap();
function SA(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(Er(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && P0.set(n, t);
      })
      .catch(() => {}),
    Uf.set(e, t),
    e
  );
}
function IA(t) {
  if (rd.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", s),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i();
      };
    t.addEventListener("complete", s),
      t.addEventListener("error", o),
      t.addEventListener("abort", o);
  });
  rd.set(t, e);
}
let id = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return rd.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || x0.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Er(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function AA(t) {
  id = t(id);
}
function CA(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(bc(this), e, ...n);
        return x0.set(r, e.sort ? e.sort() : [e]), Er(r);
      }
    : RA().includes(t)
      ? function (...e) {
          return t.apply(bc(this), e), Er(P0.get(this));
        }
      : function (...e) {
          return Er(t.apply(bc(this), e));
        };
}
function PA(t) {
  return typeof t == "function"
    ? CA(t)
    : (t instanceof IDBTransaction && IA(t),
      EA(t, TA()) ? new Proxy(t, id) : t);
}
function Er(t) {
  if (t instanceof IDBRequest) return SA(t);
  if (Uc.has(t)) return Uc.get(t);
  const e = PA(t);
  return e !== t && (Uc.set(t, e), Uf.set(e, t)), e;
}
const bc = (t) => Uf.get(t);
function xA(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = Er(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(Er(o.result), l.oldVersion, l.newVersion, Er(o.transaction), l);
      }),
    n && o.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        s && l.addEventListener("close", () => s()),
          i &&
            l.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    a
  );
}
const kA = ["get", "getKey", "getAll", "getAllKeys", "count"],
  DA = ["put", "add", "delete", "clear"],
  $c = new Map();
function Vg(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if ($c.get(e)) return $c.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = DA.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || kA.includes(n))
  )
    return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let u = l.store;
    return (
      r && (u = u.index(a.shift())),
      (await Promise.all([u[n](...a), i && l.done]))[0]
    );
  };
  return $c.set(e, s), s;
}
AA((t) => ({
  ...t,
  get: (e, n, r) => Vg(e, n) || t.get(e, n, r),
  has: (e, n) => !!Vg(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NA {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (LA(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function LA(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const sd = "@firebase/app",
  Og = "0.9.27";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ai = new C0("@firebase/app"),
  VA = "@firebase/app-compat",
  OA = "@firebase/analytics-compat",
  MA = "@firebase/analytics",
  FA = "@firebase/app-check-compat",
  jA = "@firebase/app-check",
  UA = "@firebase/auth",
  bA = "@firebase/auth-compat",
  $A = "@firebase/database",
  BA = "@firebase/database-compat",
  zA = "@firebase/functions",
  HA = "@firebase/functions-compat",
  WA = "@firebase/installations",
  qA = "@firebase/installations-compat",
  QA = "@firebase/messaging",
  KA = "@firebase/messaging-compat",
  GA = "@firebase/performance",
  XA = "@firebase/performance-compat",
  YA = "@firebase/remote-config",
  JA = "@firebase/remote-config-compat",
  ZA = "@firebase/storage",
  eC = "@firebase/storage-compat",
  tC = "@firebase/firestore",
  nC = "@firebase/firestore-compat",
  rC = "firebase",
  iC = "10.8.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const od = "[DEFAULT]",
  sC = {
    [sd]: "fire-core",
    [VA]: "fire-core-compat",
    [MA]: "fire-analytics",
    [OA]: "fire-analytics-compat",
    [jA]: "fire-app-check",
    [FA]: "fire-app-check-compat",
    [UA]: "fire-auth",
    [bA]: "fire-auth-compat",
    [$A]: "fire-rtdb",
    [BA]: "fire-rtdb-compat",
    [zA]: "fire-fn",
    [HA]: "fire-fn-compat",
    [WA]: "fire-iid",
    [qA]: "fire-iid-compat",
    [QA]: "fire-fcm",
    [KA]: "fire-fcm-compat",
    [GA]: "fire-perf",
    [XA]: "fire-perf-compat",
    [YA]: "fire-rc",
    [JA]: "fire-rc-compat",
    [ZA]: "fire-gcs",
    [eC]: "fire-gcs-compat",
    [tC]: "fire-fst",
    [nC]: "fire-fst-compat",
    "fire-js": "fire-js",
    [rC]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ql = new Map(),
  ad = new Map();
function oC(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    ai.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function Uo(t) {
  const e = t.name;
  if (ad.has(e))
    return (
      ai.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  ad.set(e, t);
  for (const n of Ql.values()) oC(n, t);
  return !0;
}
function k0(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const aC = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  Tr = new A0("app", "Firebase", aC);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lC {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new ls("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Tr.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const D0 = iC;
function N0(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: od, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != "string" || !i)
    throw Tr.create("bad-app-name", { appName: String(i) });
  if ((n || (n = R0()), !n)) throw Tr.create("no-options");
  const s = Ql.get(i);
  if (s) {
    if (nd(n, s.options) && nd(r, s.config)) return s;
    throw Tr.create("duplicate-app", { appName: i });
  }
  const o = new gA(i);
  for (const l of ad.values()) o.addComponent(l);
  const a = new lC(n, r, o);
  return Ql.set(i, a), a;
}
function L0(t = od) {
  const e = Ql.get(t);
  if (!e && t === od && R0()) return N0();
  if (!e) throw Tr.create("no-app", { appName: t });
  return e;
}
function Rr(t, e, n) {
  var r;
  let i = (r = sC[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push("and"),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      ai.warn(a.join(" "));
    return;
  }
  Uo(new ls(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uC = "firebase-heartbeat-database",
  cC = 1,
  bo = "firebase-heartbeat-store";
let Bc = null;
function V0() {
  return (
    Bc ||
      (Bc = xA(uC, cC, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              try {
                t.createObjectStore(bo);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((t) => {
        throw Tr.create("idb-open", { originalErrorMessage: t.message });
      })),
    Bc
  );
}
async function hC(t) {
  try {
    const n = (await V0()).transaction(bo),
      r = await n.objectStore(bo).get(O0(t));
    return await n.done, r;
  } catch (e) {
    if (e instanceof gi) ai.warn(e.message);
    else {
      const n = Tr.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      ai.warn(n.message);
    }
  }
}
async function Mg(t, e) {
  try {
    const r = (await V0()).transaction(bo, "readwrite");
    await r.objectStore(bo).put(e, O0(t)), await r.done;
  } catch (n) {
    if (n instanceof gi) ai.warn(n.message);
    else {
      const r = Tr.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      ai.warn(r.message);
    }
  }
}
function O0(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dC = 1024,
  fC = 30 * 24 * 60 * 60 * 1e3;
class pC {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new gC(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var e, n;
    const i = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      s = Fg();
    if (
      !(
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const a = new Date(o.date).valueOf();
            return Date.now() - a <= fC;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var e;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((e = this._heartbeatsCache) === null || e === void 0
        ? void 0
        : e.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = Fg(),
      { heartbeatsToSend: r, unsentEntries: i } = mC(
        this._heartbeatsCache.heartbeats
      ),
      s = Wl(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      s
    );
  }
}
function Fg() {
  return new Date().toISOString().substring(0, 10);
}
function mC(t, e = dC) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), jg(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), jg(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class gC {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return I0()
      ? uA()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await hC(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Mg(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Mg(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function jg(t) {
  return Wl(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yC(t) {
  Uo(new ls("platform-logger", (e) => new NA(e), "PRIVATE")),
    Uo(new ls("heartbeat", (e) => new pC(e), "PRIVATE")),
    Rr(sd, Og, t),
    Rr(sd, Og, "esm2017"),
    Rr("fire-js", "");
}
yC("");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const M0 = "firebasestorage.googleapis.com",
  F0 = "storageBucket",
  vC = 2 * 60 * 1e3,
  _C = 10 * 60 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pe extends gi {
  constructor(e, n, r = 0) {
    super(zc(e), `Firebase Storage: ${n} (${zc(e)})`),
      (this.status_ = r),
      (this.customData = { serverResponse: null }),
      (this._baseMessage = this.message),
      Object.setPrototypeOf(this, Pe.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(e) {
    this.status_ = e;
  }
  _codeEquals(e) {
    return zc(e) === this.code;
  }
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(e) {
    (this.customData.serverResponse = e),
      this.customData.serverResponse
        ? (this.message = `${this._baseMessage}
${this.customData.serverResponse}`)
        : (this.message = this._baseMessage);
  }
}
var Ne;
(function (t) {
  (t.UNKNOWN = "unknown"),
    (t.OBJECT_NOT_FOUND = "object-not-found"),
    (t.BUCKET_NOT_FOUND = "bucket-not-found"),
    (t.PROJECT_NOT_FOUND = "project-not-found"),
    (t.QUOTA_EXCEEDED = "quota-exceeded"),
    (t.UNAUTHENTICATED = "unauthenticated"),
    (t.UNAUTHORIZED = "unauthorized"),
    (t.UNAUTHORIZED_APP = "unauthorized-app"),
    (t.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded"),
    (t.INVALID_CHECKSUM = "invalid-checksum"),
    (t.CANCELED = "canceled"),
    (t.INVALID_EVENT_NAME = "invalid-event-name"),
    (t.INVALID_URL = "invalid-url"),
    (t.INVALID_DEFAULT_BUCKET = "invalid-default-bucket"),
    (t.NO_DEFAULT_BUCKET = "no-default-bucket"),
    (t.CANNOT_SLICE_BLOB = "cannot-slice-blob"),
    (t.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size"),
    (t.NO_DOWNLOAD_URL = "no-download-url"),
    (t.INVALID_ARGUMENT = "invalid-argument"),
    (t.INVALID_ARGUMENT_COUNT = "invalid-argument-count"),
    (t.APP_DELETED = "app-deleted"),
    (t.INVALID_ROOT_OPERATION = "invalid-root-operation"),
    (t.INVALID_FORMAT = "invalid-format"),
    (t.INTERNAL_ERROR = "internal-error"),
    (t.UNSUPPORTED_ENVIRONMENT = "unsupported-environment");
})(Ne || (Ne = {}));
function zc(t) {
  return "storage/" + t;
}
function bf() {
  const t =
    "An unknown error occurred, please check the error payload for server response.";
  return new Pe(Ne.UNKNOWN, t);
}
function wC(t) {
  return new Pe(Ne.OBJECT_NOT_FOUND, "Object '" + t + "' does not exist.");
}
function EC(t) {
  return new Pe(
    Ne.QUOTA_EXCEEDED,
    "Quota for bucket '" +
      t +
      "' exceeded, please view quota on https://firebase.google.com/pricing/."
  );
}
function TC() {
  const t =
    "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new Pe(Ne.UNAUTHENTICATED, t);
}
function RC() {
  return new Pe(
    Ne.UNAUTHORIZED_APP,
    "This app does not have permission to access Firebase Storage on this project."
  );
}
function SC(t) {
  return new Pe(
    Ne.UNAUTHORIZED,
    "User does not have permission to access '" + t + "'."
  );
}
function IC() {
  return new Pe(
    Ne.RETRY_LIMIT_EXCEEDED,
    "Max retry time for operation exceeded, please try again."
  );
}
function AC() {
  return new Pe(Ne.CANCELED, "User canceled the upload/download.");
}
function CC(t) {
  return new Pe(Ne.INVALID_URL, "Invalid URL '" + t + "'.");
}
function PC(t) {
  return new Pe(
    Ne.INVALID_DEFAULT_BUCKET,
    "Invalid default bucket '" + t + "'."
  );
}
function xC() {
  return new Pe(
    Ne.NO_DEFAULT_BUCKET,
    "No default bucket found. Did you set the '" +
      F0 +
      "' property when initializing the app?"
  );
}
function kC() {
  return new Pe(
    Ne.CANNOT_SLICE_BLOB,
    "Cannot slice blob for upload. Please retry the upload."
  );
}
function DC() {
  return new Pe(
    Ne.NO_DOWNLOAD_URL,
    "The given file does not have any download URLs."
  );
}
function NC(t) {
  return new Pe(
    Ne.UNSUPPORTED_ENVIRONMENT,
    `${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`
  );
}
function ld(t) {
  return new Pe(Ne.INVALID_ARGUMENT, t);
}
function j0() {
  return new Pe(Ne.APP_DELETED, "The Firebase app was deleted.");
}
function LC(t) {
  return new Pe(
    Ne.INVALID_ROOT_OPERATION,
    "The operation '" +
      t +
      "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
  );
}
function ho(t, e) {
  return new Pe(
    Ne.INVALID_FORMAT,
    "String does not match format '" + t + "': " + e
  );
}
function Bs(t) {
  throw new Pe(Ne.INTERNAL_ERROR, "Internal error: " + t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jt {
  constructor(e, n) {
    (this.bucket = e), (this.path_ = n);
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const e = encodeURIComponent;
    return "/b/" + e(this.bucket) + "/o/" + e(this.path);
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o";
  }
  static makeFromBucketSpec(e, n) {
    let r;
    try {
      r = jt.makeFromUrl(e, n);
    } catch {
      return new jt(e, "");
    }
    if (r.path === "") return r;
    throw PC(e);
  }
  static makeFromUrl(e, n) {
    let r = null;
    const i = "([A-Za-z0-9.\\-_]+)";
    function s(R) {
      R.path.charAt(R.path.length - 1) === "/" &&
        (R.path_ = R.path_.slice(0, -1));
    }
    const o = "(/(.*))?$",
      a = new RegExp("^gs://" + i + o, "i"),
      l = { bucket: 1, path: 3 };
    function u(R) {
      R.path_ = decodeURIComponent(R.path);
    }
    const c = "v[A-Za-z0-9_]+",
      h = n.replace(/[.]/g, "\\."),
      d = "(/([^?#]*).*)?$",
      g = new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`, "i"),
      _ = { bucket: 1, path: 3 },
      w = n === M0 ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n,
      E = "([^?#]*)",
      p = new RegExp(`^https?://${w}/${i}/${E}`, "i"),
      m = [
        { regex: a, indices: l, postModify: s },
        { regex: g, indices: _, postModify: u },
        { regex: p, indices: { bucket: 1, path: 2 }, postModify: u },
      ];
    for (let R = 0; R < m.length; R++) {
      const I = m[R],
        y = I.regex.exec(e);
      if (y) {
        const C = y[I.indices.bucket];
        let N = y[I.indices.path];
        N || (N = ""), (r = new jt(C, N)), I.postModify(r);
        break;
      }
    }
    if (r == null) throw CC(e);
    return r;
  }
}
class VC {
  constructor(e) {
    this.promise_ = Promise.reject(e);
  }
  getPromise() {
    return this.promise_;
  }
  cancel(e = !1) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function OC(t, e, n) {
  let r = 1,
    i = null,
    s = null,
    o = !1,
    a = 0;
  function l() {
    return a === 2;
  }
  let u = !1;
  function c(...E) {
    u || ((u = !0), e.apply(null, E));
  }
  function h(E) {
    i = setTimeout(() => {
      (i = null), t(g, l());
    }, E);
  }
  function d() {
    s && clearTimeout(s);
  }
  function g(E, ...p) {
    if (u) {
      d();
      return;
    }
    if (E) {
      d(), c.call(null, E, ...p);
      return;
    }
    if (l() || o) {
      d(), c.call(null, E, ...p);
      return;
    }
    r < 64 && (r *= 2);
    let m;
    a === 1 ? ((a = 2), (m = 0)) : (m = (r + Math.random()) * 1e3), h(m);
  }
  let _ = !1;
  function w(E) {
    _ ||
      ((_ = !0),
      d(),
      !u &&
        (i !== null ? (E || (a = 2), clearTimeout(i), h(0)) : E || (a = 1)));
  }
  return (
    h(0),
    (s = setTimeout(() => {
      (o = !0), w(!0);
    }, n)),
    w
  );
}
function MC(t) {
  t(!1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function FC(t) {
  return t !== void 0;
}
function jC(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function $f(t) {
  return typeof t == "string" || t instanceof String;
}
function Ug(t) {
  return Bf() && t instanceof Blob;
}
function Bf() {
  return typeof Blob < "u";
}
function bg(t, e, n, r) {
  if (r < e) throw ld(`Invalid value for '${t}'. Expected ${e} or greater.`);
  if (r > n) throw ld(`Invalid value for '${t}'. Expected ${n} or less.`);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zf(t, e, n) {
  let r = e;
  return n == null && (r = `https://${e}`), `${n}://${r}/v0${t}`;
}
function U0(t) {
  const e = encodeURIComponent;
  let n = "?";
  for (const r in t)
    if (t.hasOwnProperty(r)) {
      const i = e(r) + "=" + e(t[r]);
      n = n + i + "&";
    }
  return (n = n.slice(0, -1)), n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Zr;
(function (t) {
  (t[(t.NO_ERROR = 0)] = "NO_ERROR"),
    (t[(t.NETWORK_ERROR = 1)] = "NETWORK_ERROR"),
    (t[(t.ABORT = 2)] = "ABORT");
})(Zr || (Zr = {}));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function UC(t, e) {
  const n = t >= 500 && t < 600,
    i = [408, 429].indexOf(t) !== -1,
    s = e.indexOf(t) !== -1;
  return n || i || s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bC {
  constructor(e, n, r, i, s, o, a, l, u, c, h, d = !0) {
    (this.url_ = e),
      (this.method_ = n),
      (this.headers_ = r),
      (this.body_ = i),
      (this.successCodes_ = s),
      (this.additionalRetryCodes_ = o),
      (this.callback_ = a),
      (this.errorCallback_ = l),
      (this.timeout_ = u),
      (this.progressCallback_ = c),
      (this.connectionFactory_ = h),
      (this.retry = d),
      (this.pendingConnection_ = null),
      (this.backoffId_ = null),
      (this.canceled_ = !1),
      (this.appDelete_ = !1),
      (this.promise_ = new Promise((g, _) => {
        (this.resolve_ = g), (this.reject_ = _), this.start_();
      }));
  }
  start_() {
    const e = (r, i) => {
        if (i) {
          r(!1, new Ha(!1, null, !0));
          return;
        }
        const s = this.connectionFactory_();
        this.pendingConnection_ = s;
        const o = (a) => {
          const l = a.loaded,
            u = a.lengthComputable ? a.total : -1;
          this.progressCallback_ !== null && this.progressCallback_(l, u);
        };
        this.progressCallback_ !== null && s.addUploadProgressListener(o),
          s
            .send(this.url_, this.method_, this.body_, this.headers_)
            .then(() => {
              this.progressCallback_ !== null &&
                s.removeUploadProgressListener(o),
                (this.pendingConnection_ = null);
              const a = s.getErrorCode() === Zr.NO_ERROR,
                l = s.getStatus();
              if (!a || (UC(l, this.additionalRetryCodes_) && this.retry)) {
                const c = s.getErrorCode() === Zr.ABORT;
                r(!1, new Ha(!1, null, c));
                return;
              }
              const u = this.successCodes_.indexOf(l) !== -1;
              r(!0, new Ha(u, s));
            });
      },
      n = (r, i) => {
        const s = this.resolve_,
          o = this.reject_,
          a = i.connection;
        if (i.wasSuccessCode)
          try {
            const l = this.callback_(a, a.getResponse());
            FC(l) ? s(l) : s();
          } catch (l) {
            o(l);
          }
        else if (a !== null) {
          const l = bf();
          (l.serverResponse = a.getErrorText()),
            this.errorCallback_ ? o(this.errorCallback_(a, l)) : o(l);
        } else if (i.canceled) {
          const l = this.appDelete_ ? j0() : AC();
          o(l);
        } else {
          const l = IC();
          o(l);
        }
      };
    this.canceled_
      ? n(!1, new Ha(!1, null, !0))
      : (this.backoffId_ = OC(e, n, this.timeout_));
  }
  getPromise() {
    return this.promise_;
  }
  cancel(e) {
    (this.canceled_ = !0),
      (this.appDelete_ = e || !1),
      this.backoffId_ !== null && MC(this.backoffId_),
      this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class Ha {
  constructor(e, n, r) {
    (this.wasSuccessCode = e), (this.connection = n), (this.canceled = !!r);
  }
}
function $C(t, e) {
  e !== null && e.length > 0 && (t.Authorization = "Firebase " + e);
}
function BC(t, e) {
  t["X-Firebase-Storage-Version"] = "webjs/" + (e ?? "AppManager");
}
function zC(t, e) {
  e && (t["X-Firebase-GMPID"] = e);
}
function HC(t, e) {
  e !== null && (t["X-Firebase-AppCheck"] = e);
}
function WC(t, e, n, r, i, s, o = !0) {
  const a = U0(t.urlParams),
    l = t.url + a,
    u = Object.assign({}, t.headers);
  return (
    zC(u, e),
    $C(u, n),
    BC(u, s),
    HC(u, r),
    new bC(
      l,
      t.method,
      u,
      t.body,
      t.successCodes,
      t.additionalRetryCodes,
      t.handler,
      t.errorHandler,
      t.timeout,
      t.progressCallback,
      i,
      o
    )
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qC() {
  return typeof BlobBuilder < "u"
    ? BlobBuilder
    : typeof WebKitBlobBuilder < "u"
      ? WebKitBlobBuilder
      : void 0;
}
function QC(...t) {
  const e = qC();
  if (e !== void 0) {
    const n = new e();
    for (let r = 0; r < t.length; r++) n.append(t[r]);
    return n.getBlob();
  } else {
    if (Bf()) return new Blob(t);
    throw new Pe(
      Ne.UNSUPPORTED_ENVIRONMENT,
      "This browser doesn't seem to support creating Blobs"
    );
  }
}
function KC(t, e, n) {
  return t.webkitSlice
    ? t.webkitSlice(e, n)
    : t.mozSlice
      ? t.mozSlice(e, n)
      : t.slice
        ? t.slice(e, n)
        : null;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function GC(t) {
  if (typeof atob > "u") throw NC("base-64");
  return atob(t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const En = {
  RAW: "raw",
  BASE64: "base64",
  BASE64URL: "base64url",
  DATA_URL: "data_url",
};
class Hc {
  constructor(e, n) {
    (this.data = e), (this.contentType = n || null);
  }
}
function XC(t, e) {
  switch (t) {
    case En.RAW:
      return new Hc(b0(e));
    case En.BASE64:
    case En.BASE64URL:
      return new Hc($0(t, e));
    case En.DATA_URL:
      return new Hc(JC(e), ZC(e));
  }
  throw bf();
}
function b0(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) {
    let r = t.charCodeAt(n);
    if (r <= 127) e.push(r);
    else if (r <= 2047) e.push(192 | (r >> 6), 128 | (r & 63));
    else if ((r & 64512) === 55296)
      if (!(n < t.length - 1 && (t.charCodeAt(n + 1) & 64512) === 56320))
        e.push(239, 191, 189);
      else {
        const s = r,
          o = t.charCodeAt(++n);
        (r = 65536 | ((s & 1023) << 10) | (o & 1023)),
          e.push(
            240 | (r >> 18),
            128 | ((r >> 12) & 63),
            128 | ((r >> 6) & 63),
            128 | (r & 63)
          );
      }
    else
      (r & 64512) === 56320
        ? e.push(239, 191, 189)
        : e.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (r & 63));
  }
  return new Uint8Array(e);
}
function YC(t) {
  let e;
  try {
    e = decodeURIComponent(t);
  } catch {
    throw ho(En.DATA_URL, "Malformed data URL.");
  }
  return b0(e);
}
function $0(t, e) {
  switch (t) {
    case En.BASE64: {
      const i = e.indexOf("-") !== -1,
        s = e.indexOf("_") !== -1;
      if (i || s)
        throw ho(
          t,
          "Invalid character '" +
            (i ? "-" : "_") +
            "' found: is it base64url encoded?"
        );
      break;
    }
    case En.BASE64URL: {
      const i = e.indexOf("+") !== -1,
        s = e.indexOf("/") !== -1;
      if (i || s)
        throw ho(
          t,
          "Invalid character '" +
            (i ? "+" : "/") +
            "' found: is it base64 encoded?"
        );
      e = e.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  let n;
  try {
    n = GC(e);
  } catch (i) {
    throw i.message.includes("polyfill") ? i : ho(t, "Invalid character found");
  }
  const r = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
  return r;
}
class B0 {
  constructor(e) {
    (this.base64 = !1), (this.contentType = null);
    const n = e.match(/^data:([^,]+)?,/);
    if (n === null)
      throw ho(
        En.DATA_URL,
        "Must be formatted 'data:[<mediatype>][;base64],<data>"
      );
    const r = n[1] || null;
    r != null &&
      ((this.base64 = eP(r, ";base64")),
      (this.contentType = this.base64 ? r.substring(0, r.length - 7) : r)),
      (this.rest = e.substring(e.indexOf(",") + 1));
  }
}
function JC(t) {
  const e = new B0(t);
  return e.base64 ? $0(En.BASE64, e.rest) : YC(e.rest);
}
function ZC(t) {
  return new B0(t).contentType;
}
function eP(t, e) {
  return t.length >= e.length ? t.substring(t.length - e.length) === e : !1;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ur {
  constructor(e, n) {
    let r = 0,
      i = "";
    Ug(e)
      ? ((this.data_ = e), (r = e.size), (i = e.type))
      : e instanceof ArrayBuffer
        ? (n
            ? (this.data_ = new Uint8Array(e))
            : ((this.data_ = new Uint8Array(e.byteLength)),
              this.data_.set(new Uint8Array(e))),
          (r = this.data_.length))
        : e instanceof Uint8Array &&
          (n
            ? (this.data_ = e)
            : ((this.data_ = new Uint8Array(e.length)), this.data_.set(e)),
          (r = e.length)),
      (this.size_ = r),
      (this.type_ = i);
  }
  size() {
    return this.size_;
  }
  type() {
    return this.type_;
  }
  slice(e, n) {
    if (Ug(this.data_)) {
      const r = this.data_,
        i = KC(r, e, n);
      return i === null ? null : new ur(i);
    } else {
      const r = new Uint8Array(this.data_.buffer, e, n - e);
      return new ur(r, !0);
    }
  }
  static getBlob(...e) {
    if (Bf()) {
      const n = e.map((r) => (r instanceof ur ? r.data_ : r));
      return new ur(QC.apply(null, n));
    } else {
      const n = e.map((o) => ($f(o) ? XC(En.RAW, o).data : o.data_));
      let r = 0;
      n.forEach((o) => {
        r += o.byteLength;
      });
      const i = new Uint8Array(r);
      let s = 0;
      return (
        n.forEach((o) => {
          for (let a = 0; a < o.length; a++) i[s++] = o[a];
        }),
        new ur(i, !0)
      );
    }
  }
  uploadData() {
    return this.data_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function z0(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch {
    return null;
  }
  return jC(e) ? e : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tP(t) {
  if (t.length === 0) return null;
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.slice(0, e);
}
function nP(t, e) {
  const n = e
    .split("/")
    .filter((r) => r.length > 0)
    .join("/");
  return t.length === 0 ? n : t + "/" + n;
}
function H0(t) {
  const e = t.lastIndexOf("/", t.length - 2);
  return e === -1 ? t : t.slice(e + 1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rP(t, e) {
  return e;
}
class wt {
  constructor(e, n, r, i) {
    (this.server = e),
      (this.local = n || e),
      (this.writable = !!r),
      (this.xform = i || rP);
  }
}
let Wa = null;
function iP(t) {
  return !$f(t) || t.length < 2 ? t : H0(t);
}
function W0() {
  if (Wa) return Wa;
  const t = [];
  t.push(new wt("bucket")),
    t.push(new wt("generation")),
    t.push(new wt("metageneration")),
    t.push(new wt("name", "fullPath", !0));
  function e(s, o) {
    return iP(o);
  }
  const n = new wt("name");
  (n.xform = e), t.push(n);
  function r(s, o) {
    return o !== void 0 ? Number(o) : o;
  }
  const i = new wt("size");
  return (
    (i.xform = r),
    t.push(i),
    t.push(new wt("timeCreated")),
    t.push(new wt("updated")),
    t.push(new wt("md5Hash", null, !0)),
    t.push(new wt("cacheControl", null, !0)),
    t.push(new wt("contentDisposition", null, !0)),
    t.push(new wt("contentEncoding", null, !0)),
    t.push(new wt("contentLanguage", null, !0)),
    t.push(new wt("contentType", null, !0)),
    t.push(new wt("metadata", "customMetadata", !0)),
    (Wa = t),
    Wa
  );
}
function sP(t, e) {
  function n() {
    const r = t.bucket,
      i = t.fullPath,
      s = new jt(r, i);
    return e._makeStorageReference(s);
  }
  Object.defineProperty(t, "ref", { get: n });
}
function oP(t, e, n) {
  const r = {};
  r.type = "file";
  const i = n.length;
  for (let s = 0; s < i; s++) {
    const o = n[s];
    r[o.local] = o.xform(r, e[o.server]);
  }
  return sP(r, t), r;
}
function q0(t, e, n) {
  const r = z0(e);
  return r === null ? null : oP(t, r, n);
}
function aP(t, e, n, r) {
  const i = z0(e);
  if (i === null || !$f(i.downloadTokens)) return null;
  const s = i.downloadTokens;
  if (s.length === 0) return null;
  const o = encodeURIComponent;
  return s.split(",").map((u) => {
    const c = t.bucket,
      h = t.fullPath,
      d = "/b/" + o(c) + "/o/" + o(h),
      g = zf(d, n, r),
      _ = U0({ alt: "media", token: u });
    return g + _;
  })[0];
}
function lP(t, e) {
  const n = {},
    r = e.length;
  for (let i = 0; i < r; i++) {
    const s = e[i];
    s.writable && (n[s.server] = t[s.local]);
  }
  return JSON.stringify(n);
}
class Q0 {
  constructor(e, n, r, i) {
    (this.url = e),
      (this.method = n),
      (this.handler = r),
      (this.timeout = i),
      (this.urlParams = {}),
      (this.headers = {}),
      (this.body = null),
      (this.errorHandler = null),
      (this.progressCallback = null),
      (this.successCodes = [200]),
      (this.additionalRetryCodes = []);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function K0(t) {
  if (!t) throw bf();
}
function uP(t, e) {
  function n(r, i) {
    const s = q0(t, i, e);
    return K0(s !== null), s;
  }
  return n;
}
function cP(t, e) {
  function n(r, i) {
    const s = q0(t, i, e);
    return K0(s !== null), aP(s, i, t.host, t._protocol);
  }
  return n;
}
function G0(t) {
  function e(n, r) {
    let i;
    return (
      n.getStatus() === 401
        ? n.getErrorText().includes("Firebase App Check token is invalid")
          ? (i = RC())
          : (i = TC())
        : n.getStatus() === 402
          ? (i = EC(t.bucket))
          : n.getStatus() === 403
            ? (i = SC(t.path))
            : (i = r),
      (i.status = n.getStatus()),
      (i.serverResponse = r.serverResponse),
      i
    );
  }
  return e;
}
function hP(t) {
  const e = G0(t);
  function n(r, i) {
    let s = e(r, i);
    return (
      r.getStatus() === 404 && (s = wC(t.path)),
      (s.serverResponse = i.serverResponse),
      s
    );
  }
  return n;
}
function dP(t, e, n) {
  const r = e.fullServerUrl(),
    i = zf(r, t.host, t._protocol),
    s = "GET",
    o = t.maxOperationRetryTime,
    a = new Q0(i, s, cP(t, n), o);
  return (a.errorHandler = hP(e)), a;
}
function fP(t, e) {
  return (t && t.contentType) || (e && e.type()) || "application/octet-stream";
}
function pP(t, e, n) {
  const r = Object.assign({}, n);
  return (
    (r.fullPath = t.path),
    (r.size = e.size()),
    r.contentType || (r.contentType = fP(null, e)),
    r
  );
}
function mP(t, e, n, r, i) {
  const s = e.bucketOnlyServerUrl(),
    o = { "X-Goog-Upload-Protocol": "multipart" };
  function a() {
    let m = "";
    for (let R = 0; R < 2; R++) m = m + Math.random().toString().slice(2);
    return m;
  }
  const l = a();
  o["Content-Type"] = "multipart/related; boundary=" + l;
  const u = pP(e, r, i),
    c = lP(u, n),
    h =
      "--" +
      l +
      `\r
Content-Type: application/json; charset=utf-8\r
\r
` +
      c +
      `\r
--` +
      l +
      `\r
Content-Type: ` +
      u.contentType +
      `\r
\r
`,
    d =
      `\r
--` +
      l +
      "--",
    g = ur.getBlob(h, r, d);
  if (g === null) throw kC();
  const _ = { name: u.fullPath },
    w = zf(s, t.host, t._protocol),
    E = "POST",
    p = t.maxUploadRetryTime,
    f = new Q0(w, E, uP(t, n), p);
  return (
    (f.urlParams = _),
    (f.headers = o),
    (f.body = g.uploadData()),
    (f.errorHandler = G0(e)),
    f
  );
}
class gP {
  constructor() {
    (this.sent_ = !1),
      (this.xhr_ = new XMLHttpRequest()),
      this.initXhr(),
      (this.errorCode_ = Zr.NO_ERROR),
      (this.sendPromise_ = new Promise((e) => {
        this.xhr_.addEventListener("abort", () => {
          (this.errorCode_ = Zr.ABORT), e();
        }),
          this.xhr_.addEventListener("error", () => {
            (this.errorCode_ = Zr.NETWORK_ERROR), e();
          }),
          this.xhr_.addEventListener("load", () => {
            e();
          });
      }));
  }
  send(e, n, r, i) {
    if (this.sent_) throw Bs("cannot .send() more than once");
    if (((this.sent_ = !0), this.xhr_.open(n, e, !0), i !== void 0))
      for (const s in i)
        i.hasOwnProperty(s) && this.xhr_.setRequestHeader(s, i[s].toString());
    return (
      r !== void 0 ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_
    );
  }
  getErrorCode() {
    if (!this.sent_) throw Bs("cannot .getErrorCode() before sending");
    return this.errorCode_;
  }
  getStatus() {
    if (!this.sent_) throw Bs("cannot .getStatus() before sending");
    try {
      return this.xhr_.status;
    } catch {
      return -1;
    }
  }
  getResponse() {
    if (!this.sent_) throw Bs("cannot .getResponse() before sending");
    return this.xhr_.response;
  }
  getErrorText() {
    if (!this.sent_) throw Bs("cannot .getErrorText() before sending");
    return this.xhr_.statusText;
  }
  abort() {
    this.xhr_.abort();
  }
  getResponseHeader(e) {
    return this.xhr_.getResponseHeader(e);
  }
  addUploadProgressListener(e) {
    this.xhr_.upload != null &&
      this.xhr_.upload.addEventListener("progress", e);
  }
  removeUploadProgressListener(e) {
    this.xhr_.upload != null &&
      this.xhr_.upload.removeEventListener("progress", e);
  }
}
class yP extends gP {
  initXhr() {
    this.xhr_.responseType = "text";
  }
}
function X0() {
  return new yP();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class li {
  constructor(e, n) {
    (this._service = e),
      n instanceof jt
        ? (this._location = n)
        : (this._location = jt.makeFromUrl(n, e.host));
  }
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(e, n) {
    return new li(e, n);
  }
  get root() {
    const e = new jt(this._location.bucket, "");
    return this._newRef(this._service, e);
  }
  get bucket() {
    return this._location.bucket;
  }
  get fullPath() {
    return this._location.path;
  }
  get name() {
    return H0(this._location.path);
  }
  get storage() {
    return this._service;
  }
  get parent() {
    const e = tP(this._location.path);
    if (e === null) return null;
    const n = new jt(this._location.bucket, e);
    return new li(this._service, n);
  }
  _throwIfRoot(e) {
    if (this._location.path === "") throw LC(e);
  }
}
function vP(t, e, n) {
  t._throwIfRoot("uploadBytes");
  const r = mP(t.storage, t._location, W0(), new ur(e, !0), n);
  return t.storage
    .makeRequestWithTokens(r, X0)
    .then((i) => ({ metadata: i, ref: t }));
}
function _P(t) {
  t._throwIfRoot("getDownloadURL");
  const e = dP(t.storage, t._location, W0());
  return t.storage.makeRequestWithTokens(e, X0).then((n) => {
    if (n === null) throw DC();
    return n;
  });
}
function wP(t, e) {
  const n = nP(t._location.path, e),
    r = new jt(t._location.bucket, n);
  return new li(t.storage, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function EP(t) {
  return /^[A-Za-z]+:\/\//.test(t);
}
function TP(t, e) {
  return new li(t, e);
}
function Y0(t, e) {
  if (t instanceof Hf) {
    const n = t;
    if (n._bucket == null) throw xC();
    const r = new li(n, n._bucket);
    return e != null ? Y0(r, e) : r;
  } else return e !== void 0 ? wP(t, e) : t;
}
function RP(t, e) {
  if (e && EP(e)) {
    if (t instanceof Hf) return TP(t, e);
    throw ld(
      "To use ref(service, url), the first argument must be a Storage instance."
    );
  } else return Y0(t, e);
}
function $g(t, e) {
  const n = e == null ? void 0 : e[F0];
  return n == null ? null : jt.makeFromBucketSpec(n, t);
}
function SP(t, e, n, r = {}) {
  (t.host = `${e}:${n}`), (t._protocol = "http");
  const { mockUserToken: i } = r;
  i &&
    (t._overrideAuthToken =
      typeof i == "string" ? i : S0(i, t.app.options.projectId));
}
class Hf {
  constructor(e, n, r, i, s) {
    (this.app = e),
      (this._authProvider = n),
      (this._appCheckProvider = r),
      (this._url = i),
      (this._firebaseVersion = s),
      (this._bucket = null),
      (this._host = M0),
      (this._protocol = "https"),
      (this._appId = null),
      (this._deleted = !1),
      (this._maxOperationRetryTime = vC),
      (this._maxUploadRetryTime = _C),
      (this._requests = new Set()),
      i != null
        ? (this._bucket = jt.makeFromBucketSpec(i, this._host))
        : (this._bucket = $g(this._host, this.app.options));
  }
  get host() {
    return this._host;
  }
  set host(e) {
    (this._host = e),
      this._url != null
        ? (this._bucket = jt.makeFromBucketSpec(this._url, e))
        : (this._bucket = $g(e, this.app.options));
  }
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(e) {
    bg("time", 0, Number.POSITIVE_INFINITY, e), (this._maxUploadRetryTime = e);
  }
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(e) {
    bg("time", 0, Number.POSITIVE_INFINITY, e),
      (this._maxOperationRetryTime = e);
  }
  async _getAuthToken() {
    if (this._overrideAuthToken) return this._overrideAuthToken;
    const e = this._authProvider.getImmediate({ optional: !0 });
    if (e) {
      const n = await e.getToken();
      if (n !== null) return n.accessToken;
    }
    return null;
  }
  async _getAppCheckToken() {
    const e = this._appCheckProvider.getImmediate({ optional: !0 });
    return e ? (await e.getToken()).token : null;
  }
  _delete() {
    return (
      this._deleted ||
        ((this._deleted = !0),
        this._requests.forEach((e) => e.cancel()),
        this._requests.clear()),
      Promise.resolve()
    );
  }
  _makeStorageReference(e) {
    return new li(this, e);
  }
  _makeRequest(e, n, r, i, s = !0) {
    if (this._deleted) return new VC(j0());
    {
      const o = WC(e, this._appId, r, i, n, this._firebaseVersion, s);
      return (
        this._requests.add(o),
        o.getPromise().then(
          () => this._requests.delete(o),
          () => this._requests.delete(o)
        ),
        o
      );
    }
  }
  async makeRequestWithTokens(e, n) {
    const [r, i] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken(),
    ]);
    return this._makeRequest(e, n, r, i).getPromise();
  }
}
const Bg = "@firebase/storage",
  zg = "0.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const J0 = "storage";
function IP(t, e, n) {
  return (t = tn(t)), vP(t, e, n);
}
function Wc(t) {
  return (t = tn(t)), _P(t);
}
function qa(t, e) {
  return (t = tn(t)), RP(t, e);
}
function AP(t = L0(), e) {
  t = tn(t);
  const r = k0(t, J0).getImmediate({ identifier: e }),
    i = T0("storage");
  return i && CP(r, ...i), r;
}
function CP(t, e, n, r = {}) {
  SP(t, e, n, r);
}
function PP(t, { instanceIdentifier: e }) {
  const n = t.getProvider("app").getImmediate(),
    r = t.getProvider("auth-internal"),
    i = t.getProvider("app-check-internal");
  return new Hf(n, r, i, e, D0);
}
function xP() {
  Uo(new ls(J0, PP, "PUBLIC").setMultipleInstances(!0)),
    Rr(Bg, zg, ""),
    Rr(Bg, zg, "esm2017");
}
xP();
var kP = "firebase",
  DP = "10.8.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Rr(kP, DP, "app");
var NP =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  O,
  Wf = Wf || {},
  G = NP || self;
function Cu(t) {
  var e = typeof t;
  return (
    (e = e != "object" ? e : t ? (Array.isArray(t) ? "array" : e) : "null"),
    e == "array" || (e == "object" && typeof t.length == "number")
  );
}
function la(t) {
  var e = typeof t;
  return (e == "object" && t != null) || e == "function";
}
function LP(t) {
  return (
    (Object.prototype.hasOwnProperty.call(t, qc) && t[qc]) || (t[qc] = ++VP)
  );
}
var qc = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  VP = 0;
function OP(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function MP(t, e, n) {
  if (!t) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), t.apply(e, i);
    };
  }
  return function () {
    return t.apply(e, arguments);
  };
}
function mt(t, e, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf("native code") != -1
      ? (mt = OP)
      : (mt = MP),
    mt.apply(null, arguments)
  );
}
function Qa(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), t.apply(this, r);
  };
}
function Je(t, e) {
  function n() {}
  (n.prototype = e.prototype),
    (t.$ = e.prototype),
    (t.prototype = new n()),
    (t.prototype.constructor = t),
    (t.ac = function (r, i, s) {
      for (
        var o = Array(arguments.length - 2), a = 2;
        a < arguments.length;
        a++
      )
        o[a - 2] = arguments[a];
      return e.prototype[i].apply(r, o);
    });
}
function Lr() {
  (this.s = this.s), (this.o = this.o);
}
var FP = 0;
Lr.prototype.s = !1;
Lr.prototype.sa = function () {
  !this.s && ((this.s = !0), this.N(), FP != 0) && LP(this);
};
Lr.prototype.N = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const Z0 = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == "string")
        return typeof e != "string" || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function qf(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function Hg(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (Cu(r)) {
      const i = t.length || 0,
        s = r.length || 0;
      t.length = i + s;
      for (let o = 0; o < s; o++) t[i + o] = r[o];
    } else t.push(r);
  }
}
function gt(t, e) {
  (this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
}
gt.prototype.h = function () {
  this.defaultPrevented = !0;
};
var jP = (function () {
  if (!G.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, "passive", {
      get: function () {
        t = !0;
      },
    });
  try {
    const n = () => {};
    G.addEventListener("test", n, e), G.removeEventListener("test", n, e);
  } catch {}
  return t;
})();
function $o(t) {
  return /^[\s\xa0]*$/.test(t);
}
function Pu() {
  var t = G.navigator;
  return t && (t = t.userAgent) ? t : "";
}
function wn(t) {
  return Pu().indexOf(t) != -1;
}
function Qf(t) {
  return Qf[" "](t), t;
}
Qf[" "] = function () {};
function UP(t, e) {
  var n = Dx;
  return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t));
}
var bP = wn("Opera"),
  us = wn("Trident") || wn("MSIE"),
  ew = wn("Edge"),
  ud = ew || us,
  tw =
    wn("Gecko") &&
    !(Pu().toLowerCase().indexOf("webkit") != -1 && !wn("Edge")) &&
    !(wn("Trident") || wn("MSIE")) &&
    !wn("Edge"),
  $P = Pu().toLowerCase().indexOf("webkit") != -1 && !wn("Edge");
function nw() {
  var t = G.document;
  return t ? t.documentMode : void 0;
}
var cd;
e: {
  var Qc = "",
    Kc = (function () {
      var t = Pu();
      if (tw) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (ew) return /Edge\/([\d\.]+)/.exec(t);
      if (us) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if ($P) return /WebKit\/(\S+)/.exec(t);
      if (bP) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((Kc && (Qc = Kc ? Kc[1] : ""), us)) {
    var Gc = nw();
    if (Gc != null && Gc > parseFloat(Qc)) {
      cd = String(Gc);
      break e;
    }
  }
  cd = Qc;
}
var hd;
if (G.document && us) {
  var Wg = nw();
  hd = Wg || parseInt(cd, 10) || void 0;
} else hd = void 0;
var BP = hd;
function Bo(t, e) {
  if (
    (gt.call(this, t ? t.type : ""),
    (this.relatedTarget = this.g = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.i = null),
    t)
  ) {
    var n = (this.type = t.type),
      r =
        t.changedTouches && t.changedTouches.length
          ? t.changedTouches[0]
          : null;
    if (
      ((this.target = t.target || t.srcElement),
      (this.g = e),
      (e = t.relatedTarget))
    ) {
      if (tw) {
        e: {
          try {
            Qf(e.nodeName);
            var i = !0;
            break e;
          } catch {}
          i = !1;
        }
        i || (e = null);
      }
    } else
      n == "mouseover"
        ? (e = t.fromElement)
        : n == "mouseout" && (e = t.toElement);
    (this.relatedTarget = e),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX),
          (this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY),
          (this.screenX = t.screenX || 0),
          (this.screenY = t.screenY || 0)),
      (this.button = t.button),
      (this.key = t.key || ""),
      (this.ctrlKey = t.ctrlKey),
      (this.altKey = t.altKey),
      (this.shiftKey = t.shiftKey),
      (this.metaKey = t.metaKey),
      (this.pointerId = t.pointerId || 0),
      (this.pointerType =
        typeof t.pointerType == "string"
          ? t.pointerType
          : zP[t.pointerType] || ""),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && Bo.$.h.call(this);
  }
}
Je(Bo, gt);
var zP = { 2: "touch", 3: "pen", 4: "mouse" };
Bo.prototype.h = function () {
  Bo.$.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var ua = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  HP = 0;
function WP(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.la = i),
    (this.key = ++HP),
    (this.fa = this.ia = !1);
}
function xu(t) {
  (t.fa = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.la = null);
}
function Kf(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t);
}
function qP(t, e) {
  for (const n in t) e.call(void 0, t[n], n, t);
}
function rw(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const qg =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function iw(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) t[n] = r[n];
    for (let s = 0; s < qg.length; s++)
      (n = qg[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function ku(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
ku.prototype.add = function (t, e, n, r, i) {
  var s = t.toString();
  (t = this.g[s]), t || ((t = this.g[s] = []), this.h++);
  var o = fd(t, e, r, i);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ia = !1))
      : ((e = new WP(e, this.src, s, !!r, i)), (e.ia = n), t.push(e)),
    e
  );
};
function dd(t, e) {
  var n = e.type;
  if (n in t.g) {
    var r = t.g[n],
      i = Z0(r, e),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (xu(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function fd(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i];
    if (!s.fa && s.listener == e && s.capture == !!n && s.la == r) return i;
  }
  return -1;
}
var Gf = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Xc = {};
function sw(t, e, n, r, i) {
  if (r && r.once) return aw(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) sw(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Jf(n)),
    t && t[ua] ? t.O(e, n, la(r) ? !!r.capture : !!r, i) : ow(t, e, n, !1, r, i)
  );
}
function ow(t, e, n, r, i, s) {
  if (!e) throw Error("Invalid event type");
  var o = la(i) ? !!i.capture : !!i,
    a = Yf(t);
  if ((a || (t[Gf] = a = new ku(t)), (n = a.add(e, n, r, o, s)), n.proxy))
    return n;
  if (
    ((r = QP()),
    (n.proxy = r),
    (r.src = t),
    (r.listener = n),
    t.addEventListener)
  )
    jP || (i = o),
      i === void 0 && (i = !1),
      t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(uw(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function QP() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = KP;
  return t;
}
function aw(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) aw(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Jf(n)),
    t && t[ua] ? t.P(e, n, la(r) ? !!r.capture : !!r, i) : ow(t, e, n, !0, r, i)
  );
}
function lw(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) lw(t, e[s], n, r, i);
  else
    (r = la(r) ? !!r.capture : !!r),
      (n = Jf(n)),
      t && t[ua]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = fd(s, n, r, i)),
            -1 < n &&
              (xu(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = Yf(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = fd(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && Xf(n));
}
function Xf(t) {
  if (typeof t != "number" && t && !t.fa) {
    var e = t.src;
    if (e && e[ua]) dd(e.i, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
          ? e.detachEvent(uw(n), r)
          : e.addListener && e.removeListener && e.removeListener(r),
        (n = Yf(e))
          ? (dd(n, t), n.h == 0 && ((n.src = null), (e[Gf] = null)))
          : xu(t);
    }
  }
}
function uw(t) {
  return t in Xc ? Xc[t] : (Xc[t] = "on" + t);
}
function KP(t, e) {
  if (t.fa) t = !0;
  else {
    e = new Bo(e, this);
    var n = t.listener,
      r = t.la || t.src;
    t.ia && Xf(t), (t = n.call(r, e));
  }
  return t;
}
function Yf(t) {
  return (t = t[Gf]), t instanceof ku ? t : null;
}
var Yc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function Jf(t) {
  return typeof t == "function"
    ? t
    : (t[Yc] ||
        (t[Yc] = function (e) {
          return t.handleEvent(e);
        }),
      t[Yc]);
}
function Ye() {
  Lr.call(this), (this.i = new ku(this)), (this.S = this), (this.J = null);
}
Je(Ye, Lr);
Ye.prototype[ua] = !0;
Ye.prototype.removeEventListener = function (t, e, n, r) {
  lw(this, t, e, n, r);
};
function ot(t, e) {
  var n,
    r = t.J;
  if (r) for (n = []; r; r = r.J) n.push(r);
  if (((t = t.S), (r = e.type || e), typeof e == "string")) e = new gt(e, t);
  else if (e instanceof gt) e.target = e.target || t;
  else {
    var i = e;
    (e = new gt(r, t)), iw(e, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s]);
      i = Ka(o, r, !0, e) && i;
    }
  if (
    ((o = e.g = t), (i = Ka(o, r, !0, e) && i), (i = Ka(o, r, !1, e) && i), n)
  )
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = Ka(o, r, !1, e) && i);
}
Ye.prototype.N = function () {
  if ((Ye.$.N.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) xu(n[r]);
      delete t.g[e], t.h--;
    }
  }
  this.J = null;
};
Ye.prototype.O = function (t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r);
};
Ye.prototype.P = function (t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r);
};
function Ka(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o && !o.fa && o.capture == n) {
      var a = o.listener,
        l = o.la || o.src;
      o.ia && dd(t.i, o), (i = a.call(l, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Zf = G.JSON.stringify;
class GP {
  constructor(e, n) {
    (this.i = e), (this.j = n), (this.h = 0), (this.g = null);
  }
  get() {
    let e;
    return (
      0 < this.h
        ? (this.h--, (e = this.g), (this.g = e.next), (e.next = null))
        : (e = this.i()),
      e
    );
  }
}
function XP() {
  var t = ep;
  let e = null;
  return (
    t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
    e
  );
}
class YP {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const r = cw.get();
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var cw = new GP(
  () => new JP(),
  (t) => t.reset()
);
class JP {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(e, n) {
    (this.h = e), (this.g = n), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function ZP(t) {
  var e = 1;
  t = t.split(":");
  const n = [];
  for (; 0 < e && t.length; ) n.push(t.shift()), e--;
  return t.length && n.push(t.join(":")), n;
}
function ex(t) {
  G.setTimeout(() => {
    throw t;
  }, 0);
}
let zo,
  Ho = !1,
  ep = new YP(),
  hw = () => {
    const t = G.Promise.resolve(void 0);
    zo = () => {
      t.then(tx);
    };
  };
var tx = () => {
  for (var t; (t = XP()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      ex(n);
    }
    var e = cw;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  Ho = !1;
};
function Du(t, e) {
  Ye.call(this),
    (this.h = t || 1),
    (this.g = e || G),
    (this.j = mt(this.qb, this)),
    (this.l = Date.now());
}
Je(Du, Ye);
O = Du.prototype;
O.ga = !1;
O.T = null;
O.qb = function () {
  if (this.ga) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.T = this.g.setTimeout(this.j, this.h - t))
      : (this.T && (this.g.clearTimeout(this.T), (this.T = null)),
        ot(this, "tick"),
        this.ga && (tp(this), this.start()));
  }
};
O.start = function () {
  (this.ga = !0),
    this.T ||
      ((this.T = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function tp(t) {
  (t.ga = !1), t.T && (t.g.clearTimeout(t.T), (t.T = null));
}
O.N = function () {
  Du.$.N.call(this), tp(this), delete this.g;
};
function np(t, e, n) {
  if (typeof t == "function") n && (t = mt(t, n));
  else if (t && typeof t.handleEvent == "function") t = mt(t.handleEvent, t);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(e) ? -1 : G.setTimeout(t, e || 0);
}
function dw(t) {
  t.g = np(() => {
    (t.g = null), t.i && ((t.i = !1), dw(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class nx extends Lr {
  constructor(e, n) {
    super(),
      (this.m = e),
      (this.j = n),
      (this.h = null),
      (this.i = !1),
      (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : dw(this);
  }
  N() {
    super.N(),
      this.g &&
        (G.clearTimeout(this.g),
        (this.g = null),
        (this.i = !1),
        (this.h = null));
  }
}
function Wo(t) {
  Lr.call(this), (this.h = t), (this.g = {});
}
Je(Wo, Lr);
var Qg = [];
function fw(t, e, n, r) {
  Array.isArray(n) || (n && (Qg[0] = n.toString()), (n = Qg));
  for (var i = 0; i < n.length; i++) {
    var s = sw(e, n[i], r || t.handleEvent, !1, t.h || t);
    if (!s) break;
    t.g[s.key] = s;
  }
}
function pw(t) {
  Kf(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && Xf(e);
    },
    t
  ),
    (t.g = {});
}
Wo.prototype.N = function () {
  Wo.$.N.call(this), pw(this);
};
Wo.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function Nu() {
  this.g = !0;
}
Nu.prototype.Ea = function () {
  this.g = !1;
};
function rx(t, e, n, r, i, s) {
  t.info(function () {
    if (t.g)
      if (s)
        for (var o = "", a = s.split("&"), l = 0; l < a.length; l++) {
          var u = a[l].split("=");
          if (1 < u.length) {
            var c = u[0];
            u = u[1];
            var h = c.split("_");
            o =
              2 <= h.length && h[1] == "type"
                ? o + (c + "=" + u + "&")
                : o + (c + "=redacted&");
          }
        }
      else o = null;
    else o = s;
    return (
      "XMLHTTP REQ (" +
      r +
      ") [attempt " +
      i +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function ix(t, e, n, r, i, s, o) {
  t.info(function () {
    return (
      "XMLHTTP RESP (" +
      r +
      ") [ attempt " +
      i +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      s +
      " " +
      o
    );
  });
}
function Hi(t, e, n, r) {
  t.info(function () {
    return "XMLHTTP TEXT (" + e + "): " + ox(t, n) + (r ? " " + r : "");
  });
}
function sx(t, e) {
  t.info(function () {
    return "TIMEOUT: " + e;
  });
}
Nu.prototype.info = function () {};
function ox(t, e) {
  if (!t.g) return e;
  if (!e) return null;
  try {
    var n = JSON.parse(e);
    if (n) {
      for (t = 0; t < n.length; t++)
        if (Array.isArray(n[t])) {
          var r = n[t];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != "noop" && s != "stop" && s != "close")
                for (var o = 1; o < i.length; o++) i[o] = "";
            }
          }
        }
    }
    return Zf(n);
  } catch {
    return e;
  }
}
var yi = {},
  Kg = null;
function Lu() {
  return (Kg = Kg || new Ye());
}
yi.Ta = "serverreachability";
function mw(t) {
  gt.call(this, yi.Ta, t);
}
Je(mw, gt);
function qo(t) {
  const e = Lu();
  ot(e, new mw(e));
}
yi.STAT_EVENT = "statevent";
function gw(t, e) {
  gt.call(this, yi.STAT_EVENT, t), (this.stat = e);
}
Je(gw, gt);
function Tt(t) {
  const e = Lu();
  ot(e, new gw(e, t));
}
yi.Ua = "timingevent";
function yw(t, e) {
  gt.call(this, yi.Ua, t), (this.size = e);
}
Je(yw, gt);
function ca(t, e) {
  if (typeof t != "function")
    throw Error("Fn must not be null and must be a function");
  return G.setTimeout(function () {
    t();
  }, e);
}
var Vu = {
    NO_ERROR: 0,
    rb: 1,
    Eb: 2,
    Db: 3,
    yb: 4,
    Cb: 5,
    Fb: 6,
    Qa: 7,
    TIMEOUT: 8,
    Ib: 9,
  },
  vw = {
    wb: "complete",
    Sb: "success",
    Ra: "error",
    Qa: "abort",
    Kb: "ready",
    Lb: "readystatechange",
    TIMEOUT: "timeout",
    Gb: "incrementaldata",
    Jb: "progress",
    zb: "downloadprogress",
    $b: "uploadprogress",
  };
function rp() {}
rp.prototype.h = null;
function Gg(t) {
  return t.h || (t.h = t.i());
}
function _w() {}
var ha = { OPEN: "a", vb: "b", Ra: "c", Hb: "d" };
function ip() {
  gt.call(this, "d");
}
Je(ip, gt);
function sp() {
  gt.call(this, "c");
}
Je(sp, gt);
var pd;
function Ou() {}
Je(Ou, rp);
Ou.prototype.g = function () {
  return new XMLHttpRequest();
};
Ou.prototype.i = function () {
  return {};
};
pd = new Ou();
function da(t, e, n, r) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.W = r || 1),
    (this.U = new Wo(this)),
    (this.P = ax),
    (t = ud ? 125 : void 0),
    (this.V = new Du(t)),
    (this.I = null),
    (this.i = !1),
    (this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null),
    (this.F = []),
    (this.g = null),
    (this.o = 0),
    (this.s = this.v = null),
    (this.ca = -1),
    (this.J = !1),
    (this.O = 0),
    (this.M = null),
    (this.ba = this.K = this.aa = this.S = !1),
    (this.h = new ww());
}
function ww() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var ax = 45e3,
  Ew = {},
  md = {};
O = da.prototype;
O.setTimeout = function (t) {
  this.P = t;
};
function gd(t, e, n) {
  (t.L = 1), (t.A = Fu(qn(e))), (t.u = n), (t.S = !0), Tw(t, null);
}
function Tw(t, e) {
  (t.G = Date.now()), fa(t), (t.B = qn(t.A));
  var n = t.B,
    r = t.W;
  Array.isArray(r) || (r = [String(r)]),
    kw(n.i, "t", r),
    (t.o = 0),
    (n = t.l.J),
    (t.h = new ww()),
    (t.g = Yw(t.l, n ? e : null, !t.u)),
    0 < t.O && (t.M = new nx(mt(t.Pa, t, t.g), t.O)),
    fw(t.U, t.g, "readystatechange", t.nb),
    (e = t.I ? rw(t.I) : {}),
    t.u
      ? (t.v || (t.v = "POST"),
        (e["Content-Type"] = "application/x-www-form-urlencoded"),
        t.g.ha(t.B, t.v, t.u, e))
      : ((t.v = "GET"), t.g.ha(t.B, t.v, null, e)),
    qo(),
    rx(t.j, t.v, t.B, t.m, t.W, t.u);
}
O.nb = function (t) {
  t = t.target;
  const e = this.M;
  e && Tn(t) == 3 ? e.l() : this.Pa(t);
};
O.Pa = function (t) {
  try {
    if (t == this.g)
      e: {
        const c = Tn(this.g);
        var e = this.g.Ia();
        const h = this.g.da();
        if (
          !(3 > c) &&
          (c != 3 || ud || (this.g && (this.h.h || this.g.ja() || Zg(this.g))))
        ) {
          this.J || c != 4 || e == 7 || (e == 8 || 0 >= h ? qo(3) : qo(2)),
            Mu(this);
          var n = this.g.da();
          this.ca = n;
          t: if (Rw(this)) {
            var r = Zg(this.g);
            t = "";
            var i = r.length,
              s = Tn(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Qr(this), fo(this);
                var o = "";
                break t;
              }
              this.h.i = new G.TextDecoder();
            }
            for (e = 0; e < i; e++)
              (this.h.h = !0),
                (t += this.h.i.decode(r[e], { stream: s && e == i - 1 }));
            (r.length = 0), (this.h.g += t), (this.o = 0), (o = this.h.g);
          } else o = this.g.ja();
          if (
            ((this.i = n == 200),
            ix(this.j, this.v, this.B, this.m, this.W, c, n),
            this.i)
          ) {
            if (this.aa && !this.K) {
              t: {
                if (this.g) {
                  var a,
                    l = this.g;
                  if (
                    (a = l.g
                      ? l.g.getResponseHeader("X-HTTP-Initial-Response")
                      : null) &&
                    !$o(a)
                  ) {
                    var u = a;
                    break t;
                  }
                }
                u = null;
              }
              if ((n = u))
                Hi(
                  this.j,
                  this.m,
                  n,
                  "Initial handshake response via X-HTTP-Initial-Response"
                ),
                  (this.K = !0),
                  yd(this, n);
              else {
                (this.i = !1), (this.s = 3), Tt(12), Qr(this), fo(this);
                break e;
              }
            }
            this.S
              ? (Sw(this, c, o),
                ud &&
                  this.i &&
                  c == 3 &&
                  (fw(this.U, this.V, "tick", this.mb), this.V.start()))
              : (Hi(this.j, this.m, o, null), yd(this, o)),
              c == 4 && Qr(this),
              this.i &&
                !this.J &&
                (c == 4 ? Qw(this.l, this) : ((this.i = !1), fa(this)));
          } else
            Px(this.g),
              n == 400 && 0 < o.indexOf("Unknown SID")
                ? ((this.s = 3), Tt(12))
                : ((this.s = 0), Tt(13)),
              Qr(this),
              fo(this);
        }
      }
  } catch {
  } finally {
  }
};
function Rw(t) {
  return t.g ? t.v == "GET" && t.L != 2 && t.l.Ha : !1;
}
function Sw(t, e, n) {
  let r = !0,
    i;
  for (; !t.J && t.o < n.length; )
    if (((i = lx(t, n)), i == md)) {
      e == 4 && ((t.s = 4), Tt(14), (r = !1)),
        Hi(t.j, t.m, null, "[Incomplete Response]");
      break;
    } else if (i == Ew) {
      (t.s = 4), Tt(15), Hi(t.j, t.m, n, "[Invalid Chunk]"), (r = !1);
      break;
    } else Hi(t.j, t.m, i, null), yd(t, i);
  Rw(t) && t.o != 0 && ((t.h.g = t.h.g.slice(t.o)), (t.o = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.s = 1), Tt(16), (r = !1)),
    (t.i = t.i && r),
    r
      ? 0 < n.length &&
        !t.ba &&
        ((t.ba = !0),
        (e = t.l),
        e.g == t &&
          e.ca &&
          !e.M &&
          (e.l.info(
            "Great, no buffering proxy detected. Bytes received: " + n.length
          ),
          hp(e),
          (e.M = !0),
          Tt(11)))
      : (Hi(t.j, t.m, n, "[Invalid Chunked Response]"), Qr(t), fo(t));
}
O.mb = function () {
  if (this.g) {
    var t = Tn(this.g),
      e = this.g.ja();
    this.o < e.length &&
      (Mu(this), Sw(this, t, e), this.i && t != 4 && fa(this));
  }
};
function lx(t, e) {
  var n = t.o,
    r = e.indexOf(
      `
`,
      n
    );
  return r == -1
    ? md
    : ((n = Number(e.substring(n, r))),
      isNaN(n)
        ? Ew
        : ((r += 1),
          r + n > e.length ? md : ((e = e.slice(r, r + n)), (t.o = r + n), e)));
}
O.cancel = function () {
  (this.J = !0), Qr(this);
};
function fa(t) {
  (t.Y = Date.now() + t.P), Iw(t, t.P);
}
function Iw(t, e) {
  if (t.C != null) throw Error("WatchDog timer not null");
  t.C = ca(mt(t.lb, t), e);
}
function Mu(t) {
  t.C && (G.clearTimeout(t.C), (t.C = null));
}
O.lb = function () {
  this.C = null;
  const t = Date.now();
  0 <= t - this.Y
    ? (sx(this.j, this.B),
      this.L != 2 && (qo(), Tt(17)),
      Qr(this),
      (this.s = 2),
      fo(this))
    : Iw(this, this.Y - t);
};
function fo(t) {
  t.l.H == 0 || t.J || Qw(t.l, t);
}
function Qr(t) {
  Mu(t);
  var e = t.M;
  e && typeof e.sa == "function" && e.sa(),
    (t.M = null),
    tp(t.V),
    pw(t.U),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.sa());
}
function yd(t, e) {
  try {
    var n = t.l;
    if (n.H != 0 && (n.g == t || vd(n.i, t))) {
      if (!t.K && vd(n.i, t) && n.H == 3) {
        try {
          var r = n.Ja.g.parse(e);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.G + 3e3 < t.G) Xl(n), $u(n);
                else break e;
              cp(n), Tt(18);
            }
          } else
            (n.Fa = i[1]),
              0 < n.Fa - n.V &&
                37500 > i[2] &&
                n.G &&
                n.A == 0 &&
                !n.v &&
                (n.v = ca(mt(n.ib, n), 6e3));
          if (1 >= Lw(n.i) && n.oa) {
            try {
              n.oa();
            } catch {}
            n.oa = void 0;
          }
        } else Kr(n, 11);
      } else if (((t.K || n.g == t) && Xl(n), !$o(e)))
        for (i = n.Ja.g.parse(e), e = 0; e < i.length; e++) {
          let u = i[e];
          if (((n.V = u[0]), (u = u[1]), n.H == 2))
            if (u[0] == "c") {
              (n.K = u[1]), (n.pa = u[2]);
              const c = u[3];
              c != null && ((n.ra = c), n.l.info("VER=" + n.ra));
              const h = u[4];
              h != null && ((n.Ga = h), n.l.info("SVER=" + n.Ga));
              const d = u[5];
              d != null &&
                typeof d == "number" &&
                0 < d &&
                ((r = 1.5 * d),
                (n.L = r),
                n.l.info("backChannelRequestTimeoutMs_=" + r)),
                (r = n);
              const g = t.g;
              if (g) {
                const _ = g.g
                  ? g.g.getResponseHeader("X-Client-Wire-Protocol")
                  : null;
                if (_) {
                  var s = r.i;
                  s.g ||
                    (_.indexOf("spdy") == -1 &&
                      _.indexOf("quic") == -1 &&
                      _.indexOf("h2") == -1) ||
                    ((s.j = s.l),
                    (s.g = new Set()),
                    s.h && (op(s, s.h), (s.h = null)));
                }
                if (r.F) {
                  const w = g.g
                    ? g.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  w && ((r.Da = w), ve(r.I, r.F, w));
                }
              }
              (n.H = 3),
                n.h && n.h.Ba(),
                n.ca &&
                  ((n.S = Date.now() - t.G),
                  n.l.info("Handshake RTT: " + n.S + "ms")),
                (r = n);
              var o = t;
              if (((r.wa = Xw(r, r.J ? r.pa : null, r.Y)), o.K)) {
                Vw(r.i, o);
                var a = o,
                  l = r.L;
                l && a.setTimeout(l), a.C && (Mu(a), fa(a)), (r.g = o);
              } else Ww(r);
              0 < n.j.length && Bu(n);
            } else (u[0] != "stop" && u[0] != "close") || Kr(n, 7);
          else
            n.H == 3 &&
              (u[0] == "stop" || u[0] == "close"
                ? u[0] == "stop"
                  ? Kr(n, 7)
                  : up(n)
                : u[0] != "noop" && n.h && n.h.Aa(u),
              (n.A = 0));
        }
    }
    qo(4);
  } catch {}
}
function ux(t) {
  if (t.Z && typeof t.Z == "function") return t.Z();
  if (
    (typeof Map < "u" && t instanceof Map) ||
    (typeof Set < "u" && t instanceof Set)
  )
    return Array.from(t.values());
  if (typeof t == "string") return t.split("");
  if (Cu(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
    return e;
  }
  (e = []), (n = 0);
  for (r in t) e[n++] = t[r];
  return e;
}
function cx(t) {
  if (t.ta && typeof t.ta == "function") return t.ta();
  if (!t.Z || typeof t.Z != "function") {
    if (typeof Map < "u" && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < "u" && t instanceof Set)) {
      if (Cu(t) || typeof t == "string") {
        var e = [];
        t = t.length;
        for (var n = 0; n < t; n++) e.push(n);
        return e;
      }
      (e = []), (n = 0);
      for (const r in t) e[n++] = r;
      return e;
    }
  }
}
function Aw(t, e) {
  if (t.forEach && typeof t.forEach == "function") t.forEach(e, void 0);
  else if (Cu(t) || typeof t == "string")
    Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = cx(t), r = ux(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t);
}
var Cw = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function hx(t, e) {
  if (t) {
    t = t.split("&");
    for (var n = 0; n < t.length; n++) {
      var r = t[n].indexOf("="),
        i = null;
      if (0 <= r) {
        var s = t[n].substring(0, r);
        i = t[n].substring(r + 1);
      } else s = t[n];
      e(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
    }
  }
}
function ei(t) {
  if (
    ((this.g = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.h = !1),
    t instanceof ei)
  ) {
    (this.h = t.h),
      Kl(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      Gl(this, t.m),
      (this.l = t.l);
    var e = t.i,
      n = new Qo();
    (n.i = e.i),
      e.g && ((n.g = new Map(e.g)), (n.h = e.h)),
      Xg(this, n),
      (this.o = t.o);
  } else
    t && (e = String(t).match(Cw))
      ? ((this.h = !1),
        Kl(this, e[1] || "", !0),
        (this.s = Xs(e[2] || "")),
        (this.g = Xs(e[3] || "", !0)),
        Gl(this, e[4]),
        (this.l = Xs(e[5] || "", !0)),
        Xg(this, e[6] || "", !0),
        (this.o = Xs(e[7] || "")))
      : ((this.h = !1), (this.i = new Qo(null, this.h)));
}
ei.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(Ys(e, Yg, !0), ":");
  var n = this.g;
  return (
    (n || e == "file") &&
      (t.push("//"),
      (e = this.s) && t.push(Ys(e, Yg, !0), "@"),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      (n = this.m),
      n != null && t.push(":", String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != "/" && t.push("/"),
      t.push(Ys(n, n.charAt(0) == "/" ? px : fx, !0))),
    (n = this.i.toString()) && t.push("?", n),
    (n = this.o) && t.push("#", Ys(n, gx)),
    t.join("")
  );
};
function qn(t) {
  return new ei(t);
}
function Kl(t, e, n) {
  (t.j = n ? Xs(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ""));
}
function Gl(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error("Bad port number " + e);
    t.m = e;
  } else t.m = null;
}
function Xg(t, e, n) {
  e instanceof Qo
    ? ((t.i = e), yx(t.i, t.h))
    : (n || (e = Ys(e, mx)), (t.i = new Qo(e, t.h)));
}
function ve(t, e, n) {
  t.i.set(e, n);
}
function Fu(t) {
  return (
    ve(
      t,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36
        )
    ),
    t
  );
}
function Xs(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, "%2525"))
      : decodeURIComponent(t)
    : "";
}
function Ys(t, e, n) {
  return typeof t == "string"
    ? ((t = encodeURI(t).replace(e, dx)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      t)
    : null;
}
function dx(t) {
  return (
    (t = t.charCodeAt(0)),
    "%" + ((t >> 4) & 15).toString(16) + (t & 15).toString(16)
  );
}
var Yg = /[#\/\?@]/g,
  fx = /[#\?:]/g,
  px = /[#\?]/g,
  mx = /[#\?@]/g,
  gx = /#/g;
function Qo(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function Vr(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      hx(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
      }));
}
O = Qo.prototype;
O.add = function (t, e) {
  Vr(this), (this.i = null), (t = Es(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function Pw(t, e) {
  Vr(t),
    (e = Es(t, e)),
    t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function xw(t, e) {
  return Vr(t), (e = Es(t, e)), t.g.has(e);
}
O.forEach = function (t, e) {
  Vr(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this);
      }, this);
    }, this);
};
O.ta = function () {
  Vr(this);
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t[r];
    for (let s = 0; s < i.length; s++) n.push(e[r]);
  }
  return n;
};
O.Z = function (t) {
  Vr(this);
  let e = [];
  if (typeof t == "string")
    xw(this, t) && (e = e.concat(this.g.get(Es(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
O.set = function (t, e) {
  return (
    Vr(this),
    (this.i = null),
    (t = Es(this, t)),
    xw(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
O.get = function (t, e) {
  return t ? ((t = this.Z(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function kw(t, e, n) {
  Pw(t, e),
    0 < n.length && ((t.i = null), t.g.set(Es(t, e), qf(n)), (t.h += n.length));
}
O.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return "";
  const t = [],
    e = Array.from(this.g.keys());
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    const s = encodeURIComponent(String(r)),
      o = this.Z(r);
    for (r = 0; r < o.length; r++) {
      var i = s;
      o[r] !== "" && (i += "=" + encodeURIComponent(String(o[r]))), t.push(i);
    }
  }
  return (this.i = t.join("&"));
};
function Es(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function yx(t, e) {
  e &&
    !t.j &&
    (Vr(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Pw(this, r), kw(this, i, n));
    }, t)),
    (t.j = e);
}
var vx = class {
  constructor(t, e) {
    (this.g = t), (this.map = e);
  }
};
function Dw(t) {
  (this.l = t || _x),
    G.PerformanceNavigationTiming
      ? ((t = G.performance.getEntriesByType("navigation")),
        (t =
          0 < t.length &&
          (t[0].nextHopProtocol == "hq" || t[0].nextHopProtocol == "h2")))
      : (t = !!(G.g && G.g.Ka && G.g.Ka() && G.g.Ka().dc)),
    (this.j = t ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var _x = 10;
function Nw(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function Lw(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function vd(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function op(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function Vw(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
Dw.prototype.cancel = function () {
  if (((this.i = Ow(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function Ow(t) {
  if (t.h != null) return t.i.concat(t.h.F);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.F);
    return e;
  }
  return qf(t.i);
}
var wx = class {
  stringify(t) {
    return G.JSON.stringify(t, void 0);
  }
  parse(t) {
    return G.JSON.parse(t, void 0);
  }
};
function Ex() {
  this.g = new wx();
}
function Tx(t, e, n) {
  const r = n || "";
  try {
    Aw(t, function (i, s) {
      let o = i;
      la(i) && (o = Zf(i)), e.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw (e.push(r + "type=" + encodeURIComponent("_badmap")), i);
  }
}
function Rx(t, e) {
  const n = new Nu();
  if (G.Image) {
    const r = new Image();
    (r.onload = Qa(Ga, n, r, "TestLoadImage: loaded", !0, e)),
      (r.onerror = Qa(Ga, n, r, "TestLoadImage: error", !1, e)),
      (r.onabort = Qa(Ga, n, r, "TestLoadImage: abort", !1, e)),
      (r.ontimeout = Qa(Ga, n, r, "TestLoadImage: timeout", !1, e)),
      G.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = t);
  } else e(!1);
}
function Ga(t, e, n, r, i) {
  try {
    (e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      i(r);
  } catch {}
}
function ju(t) {
  (this.l = t.ec || null), (this.j = t.ob || !1);
}
Je(ju, rp);
ju.prototype.g = function () {
  return new Uu(this.l, this.j);
};
ju.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function Uu(t, e) {
  Ye.call(this),
    (this.F = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = ap),
    (this.status = 0),
    (this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        ""),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = "GET"),
    (this.B = ""),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
Je(Uu, Ye);
var ap = 0;
O = Uu.prototype;
O.open = function (t, e) {
  if (this.readyState != ap)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = t), (this.B = e), (this.readyState = 1), Ko(this);
};
O.send = function (t) {
  if (this.readyState != 1)
    throw (this.abort(), Error("need to call open() first. "));
  this.g = !0;
  const e = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0,
  };
  t && (e.body = t),
    (this.F || G)
      .fetch(new Request(this.B, e))
      .then(this.$a.bind(this), this.ka.bind(this));
};
O.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), pa(this)),
    (this.readyState = ap);
};
O.$a = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      Ko(this)),
    this.g && ((this.readyState = 3), Ko(this), this.g))
  )
    if (this.responseType === "arraybuffer")
      t.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
    else if (typeof G.ReadableStream < "u" && "body" in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          );
        this.response = [];
      } else
        (this.response = this.responseText = ""), (this.A = new TextDecoder());
      Mw(this);
    } else t.text().then(this.Za.bind(this), this.ka.bind(this));
};
function Mw(t) {
  t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t));
}
O.Xa = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) &&
        (this.response = this.responseText += e);
    }
    t.done ? pa(this) : Ko(this), this.readyState == 3 && Mw(this);
  }
};
O.Za = function (t) {
  this.g && ((this.response = this.responseText = t), pa(this));
};
O.Ya = function (t) {
  this.g && ((this.response = t), pa(this));
};
O.ka = function () {
  this.g && pa(this);
};
function pa(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Ko(t);
}
O.setRequestHeader = function (t, e) {
  this.v.append(t, e);
};
O.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || "";
};
O.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const t = [],
    e = this.h.entries();
  for (var n = e.next(); !n.done; )
    (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
  return t.join(`\r
`);
};
function Ko(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(Uu.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (t) {
    this.m = t ? "include" : "same-origin";
  },
});
var Sx = G.JSON.parse;
function Le(t) {
  Ye.call(this),
    (this.headers = new Map()),
    (this.u = t || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.I = ""),
    (this.m = 0),
    (this.j = ""),
    (this.l = this.G = this.v = this.F = !1),
    (this.B = 0),
    (this.A = null),
    (this.K = Fw),
    (this.L = this.M = !1);
}
Je(Le, Ye);
var Fw = "",
  Ix = /^https?$/i,
  Ax = ["POST", "PUT"];
O = Le.prototype;
O.Oa = function (t) {
  this.M = t;
};
O.ha = function (t, e, n, r) {
  if (this.g)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.I +
        "; newUri=" +
        t
    );
  (e = e ? e.toUpperCase() : "GET"),
    (this.I = t),
    (this.j = ""),
    (this.m = 0),
    (this.F = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : pd.g()),
    (this.C = this.u ? Gg(this.u) : Gg(pd)),
    (this.g.onreadystatechange = mt(this.La, this));
  try {
    (this.G = !0), this.g.open(e, String(t), !0), (this.G = !1);
  } catch (s) {
    Jg(this, s);
    return;
  }
  if (((t = n || ""), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype)
      for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == "function" && typeof r.get == "function")
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error("Unknown input type for opt_headers: " + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == "content-type")),
    (i = G.FormData && t instanceof G.FormData),
    !(0 <= Z0(Ax, e)) ||
      r ||
      i ||
      n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.K && (this.g.responseType = this.K),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.M &&
      (this.g.withCredentials = this.M);
  try {
    bw(this),
      0 < this.B &&
        ((this.L = Cx(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = mt(this.ua, this)))
          : (this.A = np(this.ua, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (s) {
    Jg(this, s);
  }
};
function Cx(t) {
  return us && typeof t.timeout == "number" && t.ontimeout !== void 0;
}
O.ua = function () {
  typeof Wf < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    ot(this, "timeout"),
    this.abort(8));
};
function Jg(t, e) {
  (t.h = !1),
    t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
    (t.j = e),
    (t.m = 5),
    jw(t),
    bu(t);
}
function jw(t) {
  t.F || ((t.F = !0), ot(t, "complete"), ot(t, "error"));
}
O.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    ot(this, "complete"),
    ot(this, "abort"),
    bu(this));
};
O.N = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    bu(this, !0)),
    Le.$.N.call(this);
};
O.La = function () {
  this.s || (this.G || this.v || this.l ? Uw(this) : this.kb());
};
O.kb = function () {
  Uw(this);
};
function Uw(t) {
  if (t.h && typeof Wf < "u" && (!t.C[1] || Tn(t) != 4 || t.da() != 2)) {
    if (t.v && Tn(t) == 4) np(t.La, 0, t);
    else if ((ot(t, "readystatechange"), Tn(t) == 4)) {
      t.h = !1;
      try {
        const o = t.da();
        e: switch (o) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var e = !0;
            break e;
          default:
            e = !1;
        }
        var n;
        if (!(n = e)) {
          var r;
          if ((r = o === 0)) {
            var i = String(t.I).match(Cw)[1] || null;
            !i &&
              G.self &&
              G.self.location &&
              (i = G.self.location.protocol.slice(0, -1)),
              (r = !Ix.test(i ? i.toLowerCase() : ""));
          }
          n = r;
        }
        if (n) ot(t, "complete"), ot(t, "success");
        else {
          t.m = 6;
          try {
            var s = 2 < Tn(t) ? t.g.statusText : "";
          } catch {
            s = "";
          }
          (t.j = s + " [" + t.da() + "]"), jw(t);
        }
      } finally {
        bu(t);
      }
    }
  }
}
function bu(t, e) {
  if (t.g) {
    bw(t);
    const n = t.g,
      r = t.C[0] ? () => {} : null;
    (t.g = null), (t.C = null), e || ot(t, "ready");
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function bw(t) {
  t.g && t.L && (t.g.ontimeout = null),
    t.A && (G.clearTimeout(t.A), (t.A = null));
}
O.isActive = function () {
  return !!this.g;
};
function Tn(t) {
  return t.g ? t.g.readyState : 0;
}
O.da = function () {
  try {
    return 2 < Tn(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
O.ja = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
O.Wa = function (t) {
  if (this.g) {
    var e = this.g.responseText;
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), Sx(e);
  }
};
function Zg(t) {
  try {
    if (!t.g) return null;
    if ("response" in t.g) return t.g.response;
    switch (t.K) {
      case Fw:
      case "text":
        return t.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in t.g) return t.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
function Px(t) {
  const e = {};
  t = ((t.g && 2 <= Tn(t) && t.g.getAllResponseHeaders()) || "").split(`\r
`);
  for (let r = 0; r < t.length; r++) {
    if ($o(t[r])) continue;
    var n = ZP(t[r]);
    const i = n[0];
    if (((n = n[1]), typeof n != "string")) continue;
    n = n.trim();
    const s = e[i] || [];
    (e[i] = s), s.push(n);
  }
  qP(e, function (r) {
    return r.join(", ");
  });
}
O.Ia = function () {
  return this.m;
};
O.Sa = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function $w(t) {
  let e = "";
  return (
    Kf(t, function (n, r) {
      (e += r),
        (e += ":"),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function lp(t, e, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = $w(n)),
    typeof t == "string"
      ? n != null && encodeURIComponent(String(n))
      : ve(t, e, n));
}
function zs(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function Bw(t) {
  (this.Ga = 0),
    (this.j = []),
    (this.l = new Nu()),
    (this.pa =
      this.wa =
      this.I =
      this.Y =
      this.g =
      this.Da =
      this.F =
      this.na =
      this.o =
      this.U =
      this.s =
        null),
    (this.fb = this.W = 0),
    (this.cb = zs("failFast", !1, t)),
    (this.G = this.v = this.u = this.m = this.h = null),
    (this.aa = !0),
    (this.Fa = this.V = -1),
    (this.ba = this.A = this.C = 0),
    (this.ab = zs("baseRetryDelayMs", 5e3, t)),
    (this.hb = zs("retryDelaySeedMs", 1e4, t)),
    (this.eb = zs("forwardChannelMaxRetries", 2, t)),
    (this.xa = zs("forwardChannelRequestTimeoutMs", 2e4, t)),
    (this.va = (t && t.xmlHttpFactory) || void 0),
    (this.Ha = (t && t.useFetchStreams) || !1),
    (this.L = void 0),
    (this.J = (t && t.supportsCrossDomainXhr) || !1),
    (this.K = ""),
    (this.i = new Dw(t && t.concurrentRequestLimit)),
    (this.Ja = new Ex()),
    (this.P = (t && t.fastHandshake) || !1),
    (this.O = (t && t.encodeInitMessageHeaders) || !1),
    this.P && this.O && (this.O = !1),
    (this.bb = (t && t.bc) || !1),
    t && t.Ea && this.l.Ea(),
    t && t.forceLongPolling && (this.aa = !1),
    (this.ca = (!this.P && this.aa && t && t.detectBufferingProxy) || !1),
    (this.qa = void 0),
    t &&
      t.longPollingTimeout &&
      0 < t.longPollingTimeout &&
      (this.qa = t.longPollingTimeout),
    (this.oa = void 0),
    (this.S = 0),
    (this.M = !1),
    (this.ma = this.B = null);
}
O = Bw.prototype;
O.ra = 8;
O.H = 1;
function up(t) {
  if ((zw(t), t.H == 3)) {
    var e = t.W++,
      n = qn(t.I);
    if (
      (ve(n, "SID", t.K),
      ve(n, "RID", e),
      ve(n, "TYPE", "terminate"),
      ma(t, n),
      (e = new da(t, t.l, e)),
      (e.L = 2),
      (e.A = Fu(qn(n))),
      (n = !1),
      G.navigator && G.navigator.sendBeacon)
    )
      try {
        n = G.navigator.sendBeacon(e.A.toString(), "");
      } catch {}
    !n && G.Image && ((new Image().src = e.A), (n = !0)),
      n || ((e.g = Yw(e.l, null)), e.g.ha(e.A)),
      (e.G = Date.now()),
      fa(e);
  }
  Gw(t);
}
function $u(t) {
  t.g && (hp(t), t.g.cancel(), (t.g = null));
}
function zw(t) {
  $u(t),
    t.u && (G.clearTimeout(t.u), (t.u = null)),
    Xl(t),
    t.i.cancel(),
    t.m && (typeof t.m == "number" && G.clearTimeout(t.m), (t.m = null));
}
function Bu(t) {
  if (!Nw(t.i) && !t.m) {
    t.m = !0;
    var e = t.Na;
    zo || hw(), Ho || (zo(), (Ho = !0)), ep.add(e, t), (t.C = 0);
  }
}
function xx(t, e) {
  return Lw(t.i) >= t.i.j - (t.m ? 1 : 0)
    ? !1
    : t.m
      ? ((t.j = e.F.concat(t.j)), !0)
      : t.H == 1 || t.H == 2 || t.C >= (t.cb ? 0 : t.eb)
        ? !1
        : ((t.m = ca(mt(t.Na, t, e), Kw(t, t.C))), t.C++, !0);
}
O.Na = function (t) {
  if (this.m)
    if (((this.m = null), this.H == 1)) {
      if (!t) {
        (this.W = Math.floor(1e5 * Math.random())), (t = this.W++);
        const i = new da(this, this.l, t);
        let s = this.s;
        if (
          (this.U && (s ? ((s = rw(s)), iw(s, this.U)) : (s = this.U)),
          this.o !== null || this.O || ((i.I = s), (s = null)),
          this.P)
        )
          e: {
            for (var e = 0, n = 0; n < this.j.length; n++) {
              t: {
                var r = this.j[n];
                if (
                  "__data__" in r.map &&
                  ((r = r.map.__data__), typeof r == "string")
                ) {
                  r = r.length;
                  break t;
                }
                r = void 0;
              }
              if (r === void 0) break;
              if (((e += r), 4096 < e)) {
                e = n;
                break e;
              }
              if (e === 4096 || n === this.j.length - 1) {
                e = n + 1;
                break e;
              }
            }
            e = 1e3;
          }
        else e = 1e3;
        (e = Hw(this, i, e)),
          (n = qn(this.I)),
          ve(n, "RID", t),
          ve(n, "CVER", 22),
          this.F && ve(n, "X-HTTP-Session-Id", this.F),
          ma(this, n),
          s &&
            (this.O
              ? (e = "headers=" + encodeURIComponent(String($w(s))) + "&" + e)
              : this.o && lp(n, this.o, s)),
          op(this.i, i),
          this.bb && ve(n, "TYPE", "init"),
          this.P
            ? (ve(n, "$req", e),
              ve(n, "SID", "null"),
              (i.aa = !0),
              gd(i, n, null))
            : gd(i, n, e),
          (this.H = 2);
      }
    } else
      this.H == 3 &&
        (t ? ey(this, t) : this.j.length == 0 || Nw(this.i) || ey(this));
};
function ey(t, e) {
  var n;
  e ? (n = e.m) : (n = t.W++);
  const r = qn(t.I);
  ve(r, "SID", t.K),
    ve(r, "RID", n),
    ve(r, "AID", t.V),
    ma(t, r),
    t.o && t.s && lp(r, t.o, t.s),
    (n = new da(t, t.l, n, t.C + 1)),
    t.o === null && (n.I = t.s),
    e && (t.j = e.F.concat(t.j)),
    (e = Hw(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.xa) + Math.round(0.5 * t.xa * Math.random())
    ),
    op(t.i, n),
    gd(n, r, e);
}
function ma(t, e) {
  t.na &&
    Kf(t.na, function (n, r) {
      ve(e, r, n);
    }),
    t.h &&
      Aw({}, function (n, r) {
        ve(e, r, n);
      });
}
function Hw(t, e, n) {
  n = Math.min(t.j.length, n);
  var r = t.h ? mt(t.h.Va, t.h, t) : null;
  e: {
    var i = t.j;
    let s = -1;
    for (;;) {
      const o = ["count=" + n];
      s == -1
        ? 0 < n
          ? ((s = i[0].g), o.push("ofs=" + s))
          : (s = 0)
        : o.push("ofs=" + s);
      let a = !0;
      for (let l = 0; l < n; l++) {
        let u = i[l].g;
        const c = i[l].map;
        if (((u -= s), 0 > u)) (s = Math.max(0, i[l].g - 100)), (a = !1);
        else
          try {
            Tx(c, o, "req" + u + "_");
          } catch {
            r && r(c);
          }
      }
      if (a) {
        r = o.join("&");
        break e;
      }
    }
  }
  return (t = t.j.splice(0, n)), (e.F = t), r;
}
function Ww(t) {
  if (!t.g && !t.u) {
    t.ba = 1;
    var e = t.Ma;
    zo || hw(), Ho || (zo(), (Ho = !0)), ep.add(e, t), (t.A = 0);
  }
}
function cp(t) {
  return t.g || t.u || 3 <= t.A
    ? !1
    : (t.ba++, (t.u = ca(mt(t.Ma, t), Kw(t, t.A))), t.A++, !0);
}
O.Ma = function () {
  if (
    ((this.u = null),
    qw(this),
    this.ca && !(this.M || this.g == null || 0 >= this.S))
  ) {
    var t = 2 * this.S;
    this.l.info("BP detection timer enabled: " + t),
      (this.B = ca(mt(this.jb, this), t));
  }
};
O.jb = function () {
  this.B &&
    ((this.B = null),
    this.l.info("BP detection timeout reached."),
    this.l.info("Buffering proxy detected and switch to long-polling!"),
    (this.G = !1),
    (this.M = !0),
    Tt(10),
    $u(this),
    qw(this));
};
function hp(t) {
  t.B != null && (G.clearTimeout(t.B), (t.B = null));
}
function qw(t) {
  (t.g = new da(t, t.l, "rpc", t.ba)),
    t.o === null && (t.g.I = t.s),
    (t.g.O = 0);
  var e = qn(t.wa);
  ve(e, "RID", "rpc"),
    ve(e, "SID", t.K),
    ve(e, "AID", t.V),
    ve(e, "CI", t.G ? "0" : "1"),
    !t.G && t.qa && ve(e, "TO", t.qa),
    ve(e, "TYPE", "xmlhttp"),
    ma(t, e),
    t.o && t.s && lp(e, t.o, t.s),
    t.L && t.g.setTimeout(t.L);
  var n = t.g;
  (t = t.pa), (n.L = 1), (n.A = Fu(qn(e))), (n.u = null), (n.S = !0), Tw(n, t);
}
O.ib = function () {
  this.v != null && ((this.v = null), $u(this), cp(this), Tt(19));
};
function Xl(t) {
  t.v != null && (G.clearTimeout(t.v), (t.v = null));
}
function Qw(t, e) {
  var n = null;
  if (t.g == e) {
    Xl(t), hp(t), (t.g = null);
    var r = 2;
  } else if (vd(t.i, e)) (n = e.F), Vw(t.i, e), (r = 1);
  else return;
  if (t.H != 0) {
    if (e.i)
      if (r == 1) {
        (n = e.u ? e.u.length : 0), (e = Date.now() - e.G);
        var i = t.C;
        (r = Lu()), ot(r, new yw(r, n)), Bu(t);
      } else Ww(t);
    else if (
      ((i = e.s),
      i == 3 ||
        (i == 0 && 0 < e.ca) ||
        !((r == 1 && xx(t, e)) || (r == 2 && cp(t))))
    )
      switch ((n && 0 < n.length && ((e = t.i), (e.i = e.i.concat(n))), i)) {
        case 1:
          Kr(t, 5);
          break;
        case 4:
          Kr(t, 10);
          break;
        case 3:
          Kr(t, 6);
          break;
        default:
          Kr(t, 2);
      }
  }
}
function Kw(t, e) {
  let n = t.ab + Math.floor(Math.random() * t.hb);
  return t.isActive() || (n *= 2), n * e;
}
function Kr(t, e) {
  if ((t.l.info("Error code " + e), e == 2)) {
    var n = null;
    t.h && (n = null);
    var r = mt(t.pb, t);
    n ||
      ((n = new ei("//www.google.com/images/cleardot.gif")),
      (G.location && G.location.protocol == "http") || Kl(n, "https"),
      Fu(n)),
      Rx(n.toString(), r);
  } else Tt(2);
  (t.H = 0), t.h && t.h.za(e), Gw(t), zw(t);
}
O.pb = function (t) {
  t
    ? (this.l.info("Successfully pinged google.com"), Tt(2))
    : (this.l.info("Failed to ping google.com"), Tt(1));
};
function Gw(t) {
  if (((t.H = 0), (t.ma = []), t.h)) {
    const e = Ow(t.i);
    (e.length != 0 || t.j.length != 0) &&
      (Hg(t.ma, e),
      Hg(t.ma, t.j),
      (t.i.i.length = 0),
      qf(t.j),
      (t.j.length = 0)),
      t.h.ya();
  }
}
function Xw(t, e, n) {
  var r = n instanceof ei ? qn(n) : new ei(n);
  if (r.g != "") e && (r.g = e + "." + r.g), Gl(r, r.m);
  else {
    var i = G.location;
    (r = i.protocol),
      (e = e ? e + "." + i.hostname : i.hostname),
      (i = +i.port);
    var s = new ei(null);
    r && Kl(s, r), e && (s.g = e), i && Gl(s, i), n && (s.l = n), (r = s);
  }
  return (
    (n = t.F),
    (e = t.Da),
    n && e && ve(r, n, e),
    ve(r, "VER", t.ra),
    ma(t, r),
    r
  );
}
function Yw(t, e, n) {
  if (e && !t.J)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (e = t.Ha && !t.va ? new Le(new ju({ ob: n })) : new Le(t.va)), e.Oa(t.J), e
  );
}
O.isActive = function () {
  return !!this.h && this.h.isActive(this);
};
function Jw() {}
O = Jw.prototype;
O.Ba = function () {};
O.Aa = function () {};
O.za = function () {};
O.ya = function () {};
O.isActive = function () {
  return !0;
};
O.Va = function () {};
function Yl() {
  if (us && !(10 <= Number(BP)))
    throw Error("Environmental error: no available transport.");
}
Yl.prototype.g = function (t, e) {
  return new Bt(t, e);
};
function Bt(t, e) {
  Ye.call(this),
    (this.g = new Bw(e)),
    (this.l = t),
    (this.h = (e && e.messageUrlParams) || null),
    (t = (e && e.messageHeaders) || null),
    e &&
      e.clientProtocolHeaderRequired &&
      (t
        ? (t["X-Client-Protocol"] = "webchannel")
        : (t = { "X-Client-Protocol": "webchannel" })),
    (this.g.s = t),
    (t = (e && e.initMessageHeaders) || null),
    e &&
      e.messageContentType &&
      (t
        ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
        : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
    e &&
      e.Ca &&
      (t
        ? (t["X-WebChannel-Client-Profile"] = e.Ca)
        : (t = { "X-WebChannel-Client-Profile": e.Ca })),
    (this.g.U = t),
    (t = e && e.cc) && !$o(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !$o(e) &&
      ((this.g.F = e),
      (t = this.h),
      t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new Ts(this));
}
Je(Bt, Ye);
Bt.prototype.m = function () {
  (this.g.h = this.j), this.A && (this.g.J = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  Tt(0),
    (t.Y = e),
    (t.na = n || {}),
    (t.G = t.aa),
    (t.I = Xw(t, null, t.Y)),
    Bu(t);
};
Bt.prototype.close = function () {
  up(this.g);
};
Bt.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == "string") {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Zf(t)), (t = n));
  e.j.push(new vx(e.fb++, t)), e.H == 3 && Bu(e);
};
Bt.prototype.N = function () {
  (this.g.h = null),
    delete this.j,
    up(this.g),
    delete this.g,
    Bt.$.N.call(this);
};
function Zw(t) {
  ip.call(this),
    t.__headers__ &&
      ((this.headers = t.__headers__),
      (this.statusCode = t.__status__),
      delete t.__headers__,
      delete t.__status__);
  var e = t.__sm__;
  if (e) {
    e: {
      for (const n in e) {
        t = n;
        break e;
      }
      t = void 0;
    }
    (this.i = t) && ((t = this.i), (e = e !== null && t in e ? e[t] : void 0)),
      (this.data = e);
  } else this.data = t;
}
Je(Zw, ip);
function eE() {
  sp.call(this), (this.status = 1);
}
Je(eE, sp);
function Ts(t) {
  this.g = t;
}
Je(Ts, Jw);
Ts.prototype.Ba = function () {
  ot(this.g, "a");
};
Ts.prototype.Aa = function (t) {
  ot(this.g, new Zw(t));
};
Ts.prototype.za = function (t) {
  ot(this.g, new eE());
};
Ts.prototype.ya = function () {
  ot(this.g, "b");
};
function kx() {
  this.blockSize = -1;
}
function dn() {
  (this.blockSize = -1),
    (this.blockSize = 64),
    (this.g = Array(4)),
    (this.m = Array(this.blockSize)),
    (this.i = this.h = 0),
    this.reset();
}
Je(dn, kx);
dn.prototype.reset = function () {
  (this.g[0] = 1732584193),
    (this.g[1] = 4023233417),
    (this.g[2] = 2562383102),
    (this.g[3] = 271733878),
    (this.i = this.h = 0);
};
function Jc(t, e, n) {
  n || (n = 0);
  var r = Array(16);
  if (typeof e == "string")
    for (var i = 0; 16 > i; ++i)
      r[i] =
        e.charCodeAt(n++) |
        (e.charCodeAt(n++) << 8) |
        (e.charCodeAt(n++) << 16) |
        (e.charCodeAt(n++) << 24);
  else
    for (i = 0; 16 > i; ++i)
      r[i] = e[n++] | (e[n++] << 8) | (e[n++] << 16) | (e[n++] << 24);
  (e = t.g[0]), (n = t.g[1]), (i = t.g[2]);
  var s = t.g[3],
    o = (e + (s ^ (n & (i ^ s))) + r[0] + 3614090360) & 4294967295;
  (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[1] + 3905402710) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[2] + 606105819) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[3] + 3250441966) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (s ^ (n & (i ^ s))) + r[4] + 4118548399) & 4294967295),
    (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[5] + 1200080426) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[6] + 2821735955) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[7] + 4249261313) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (s ^ (n & (i ^ s))) + r[8] + 1770035416) & 4294967295),
    (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[9] + 2336552879) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[10] + 4294925233) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[11] + 2304563134) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (s ^ (n & (i ^ s))) + r[12] + 1804603682) & 4294967295),
    (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[13] + 4254626195) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[14] + 2792965006) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[15] + 1236535329) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (i ^ (s & (n ^ i))) + r[1] + 4129170786) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[6] + 3225465664) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[11] + 643717713) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[0] + 3921069994) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (i ^ (s & (n ^ i))) + r[5] + 3593408605) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[10] + 38016083) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[15] + 3634488961) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[4] + 3889429448) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (i ^ (s & (n ^ i))) + r[9] + 568446438) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[14] + 3275163606) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[3] + 4107603335) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[8] + 1163531501) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (i ^ (s & (n ^ i))) + r[13] + 2850285829) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[2] + 4243563512) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[7] + 1735328473) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[12] + 2368359562) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (n ^ i ^ s) + r[5] + 4294588738) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[8] + 2272392833) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[11] + 1839030562) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[14] + 4259657740) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (n ^ i ^ s) + r[1] + 2763975236) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[4] + 1272893353) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[7] + 4139469664) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[10] + 3200236656) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (n ^ i ^ s) + r[13] + 681279174) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[0] + 3936430074) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[3] + 3572445317) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[6] + 76029189) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (n ^ i ^ s) + r[9] + 3654602809) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[12] + 3873151461) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[15] + 530742520) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[2] + 3299628645) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (i ^ (n | ~s)) + r[0] + 4096336452) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[7] + 1126891415) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[14] + 2878612391) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[5] + 4237533241) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (e + (i ^ (n | ~s)) + r[12] + 1700485571) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[3] + 2399980690) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[10] + 4293915773) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[1] + 2240044497) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (e + (i ^ (n | ~s)) + r[8] + 1873313359) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[15] + 4264355552) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[6] + 2734768916) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[13] + 1309151649) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (e + (i ^ (n | ~s)) + r[4] + 4149444226) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[11] + 3174756917) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[2] + 718787259) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[9] + 3951481745) & 4294967295),
    (t.g[0] = (t.g[0] + e) & 4294967295),
    (t.g[1] =
      (t.g[1] + (i + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
    (t.g[2] = (t.g[2] + i) & 4294967295),
    (t.g[3] = (t.g[3] + s) & 4294967295);
}
dn.prototype.j = function (t, e) {
  e === void 0 && (e = t.length);
  for (var n = e - this.blockSize, r = this.m, i = this.h, s = 0; s < e; ) {
    if (i == 0) for (; s <= n; ) Jc(this, t, s), (s += this.blockSize);
    if (typeof t == "string") {
      for (; s < e; )
        if (((r[i++] = t.charCodeAt(s++)), i == this.blockSize)) {
          Jc(this, r), (i = 0);
          break;
        }
    } else
      for (; s < e; )
        if (((r[i++] = t[s++]), i == this.blockSize)) {
          Jc(this, r), (i = 0);
          break;
        }
  }
  (this.h = i), (this.i += e);
};
dn.prototype.l = function () {
  var t = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
  t[0] = 128;
  for (var e = 1; e < t.length - 8; ++e) t[e] = 0;
  var n = 8 * this.i;
  for (e = t.length - 8; e < t.length; ++e) (t[e] = n & 255), (n /= 256);
  for (this.j(t), t = Array(16), e = n = 0; 4 > e; ++e)
    for (var r = 0; 32 > r; r += 8) t[n++] = (this.g[e] >>> r) & 255;
  return t;
};
function he(t, e) {
  this.h = e;
  for (var n = [], r = !0, i = t.length - 1; 0 <= i; i--) {
    var s = t[i] | 0;
    (r && s == e) || ((n[i] = s), (r = !1));
  }
  this.g = n;
}
var Dx = {};
function dp(t) {
  return -128 <= t && 128 > t
    ? UP(t, function (e) {
        return new he([e | 0], 0 > e ? -1 : 0);
      })
    : new he([t | 0], 0 > t ? -1 : 0);
}
function Rn(t) {
  if (isNaN(t) || !isFinite(t)) return Yi;
  if (0 > t) return rt(Rn(-t));
  for (var e = [], n = 1, r = 0; t >= n; r++) (e[r] = (t / n) | 0), (n *= _d);
  return new he(e, 0);
}
function tE(t, e) {
  if (t.length == 0) throw Error("number format error: empty string");
  if (((e = e || 10), 2 > e || 36 < e)) throw Error("radix out of range: " + e);
  if (t.charAt(0) == "-") return rt(tE(t.substring(1), e));
  if (0 <= t.indexOf("-"))
    throw Error('number format error: interior "-" character');
  for (var n = Rn(Math.pow(e, 8)), r = Yi, i = 0; i < t.length; i += 8) {
    var s = Math.min(8, t.length - i),
      o = parseInt(t.substring(i, i + s), e);
    8 > s
      ? ((s = Rn(Math.pow(e, s))), (r = r.R(s).add(Rn(o))))
      : ((r = r.R(n)), (r = r.add(Rn(o))));
  }
  return r;
}
var _d = 4294967296,
  Yi = dp(0),
  wd = dp(1),
  ty = dp(16777216);
O = he.prototype;
O.ea = function () {
  if (Xt(this)) return -rt(this).ea();
  for (var t = 0, e = 1, n = 0; n < this.g.length; n++) {
    var r = this.D(n);
    (t += (0 <= r ? r : _d + r) * e), (e *= _d);
  }
  return t;
};
O.toString = function (t) {
  if (((t = t || 10), 2 > t || 36 < t)) throw Error("radix out of range: " + t);
  if (jn(this)) return "0";
  if (Xt(this)) return "-" + rt(this).toString(t);
  for (var e = Rn(Math.pow(t, 6)), n = this, r = ""; ; ) {
    var i = Zl(n, e).g;
    n = Jl(n, i.R(e));
    var s = ((0 < n.g.length ? n.g[0] : n.h) >>> 0).toString(t);
    if (((n = i), jn(n))) return s + r;
    for (; 6 > s.length; ) s = "0" + s;
    r = s + r;
  }
};
O.D = function (t) {
  return 0 > t ? 0 : t < this.g.length ? this.g[t] : this.h;
};
function jn(t) {
  if (t.h != 0) return !1;
  for (var e = 0; e < t.g.length; e++) if (t.g[e] != 0) return !1;
  return !0;
}
function Xt(t) {
  return t.h == -1;
}
O.X = function (t) {
  return (t = Jl(this, t)), Xt(t) ? -1 : jn(t) ? 0 : 1;
};
function rt(t) {
  for (var e = t.g.length, n = [], r = 0; r < e; r++) n[r] = ~t.g[r];
  return new he(n, ~t.h).add(wd);
}
O.abs = function () {
  return Xt(this) ? rt(this) : this;
};
O.add = function (t) {
  for (
    var e = Math.max(this.g.length, t.g.length), n = [], r = 0, i = 0;
    i <= e;
    i++
  ) {
    var s = r + (this.D(i) & 65535) + (t.D(i) & 65535),
      o = (s >>> 16) + (this.D(i) >>> 16) + (t.D(i) >>> 16);
    (r = o >>> 16), (s &= 65535), (o &= 65535), (n[i] = (o << 16) | s);
  }
  return new he(n, n[n.length - 1] & -2147483648 ? -1 : 0);
};
function Jl(t, e) {
  return t.add(rt(e));
}
O.R = function (t) {
  if (jn(this) || jn(t)) return Yi;
  if (Xt(this)) return Xt(t) ? rt(this).R(rt(t)) : rt(rt(this).R(t));
  if (Xt(t)) return rt(this.R(rt(t)));
  if (0 > this.X(ty) && 0 > t.X(ty)) return Rn(this.ea() * t.ea());
  for (var e = this.g.length + t.g.length, n = [], r = 0; r < 2 * e; r++)
    n[r] = 0;
  for (r = 0; r < this.g.length; r++)
    for (var i = 0; i < t.g.length; i++) {
      var s = this.D(r) >>> 16,
        o = this.D(r) & 65535,
        a = t.D(i) >>> 16,
        l = t.D(i) & 65535;
      (n[2 * r + 2 * i] += o * l),
        Xa(n, 2 * r + 2 * i),
        (n[2 * r + 2 * i + 1] += s * l),
        Xa(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 1] += o * a),
        Xa(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 2] += s * a),
        Xa(n, 2 * r + 2 * i + 2);
    }
  for (r = 0; r < e; r++) n[r] = (n[2 * r + 1] << 16) | n[2 * r];
  for (r = e; r < 2 * e; r++) n[r] = 0;
  return new he(n, 0);
};
function Xa(t, e) {
  for (; (t[e] & 65535) != t[e]; )
    (t[e + 1] += t[e] >>> 16), (t[e] &= 65535), e++;
}
function Hs(t, e) {
  (this.g = t), (this.h = e);
}
function Zl(t, e) {
  if (jn(e)) throw Error("division by zero");
  if (jn(t)) return new Hs(Yi, Yi);
  if (Xt(t)) return (e = Zl(rt(t), e)), new Hs(rt(e.g), rt(e.h));
  if (Xt(e)) return (e = Zl(t, rt(e))), new Hs(rt(e.g), e.h);
  if (30 < t.g.length) {
    if (Xt(t) || Xt(e))
      throw Error("slowDivide_ only works with positive integers.");
    for (var n = wd, r = e; 0 >= r.X(t); ) (n = ny(n)), (r = ny(r));
    var i = Ii(n, 1),
      s = Ii(r, 1);
    for (r = Ii(r, 2), n = Ii(n, 2); !jn(r); ) {
      var o = s.add(r);
      0 >= o.X(t) && ((i = i.add(n)), (s = o)), (r = Ii(r, 1)), (n = Ii(n, 1));
    }
    return (e = Jl(t, i.R(e))), new Hs(i, e);
  }
  for (i = Yi; 0 <= t.X(e); ) {
    for (
      n = Math.max(1, Math.floor(t.ea() / e.ea())),
        r = Math.ceil(Math.log(n) / Math.LN2),
        r = 48 >= r ? 1 : Math.pow(2, r - 48),
        s = Rn(n),
        o = s.R(e);
      Xt(o) || 0 < o.X(t);

    )
      (n -= r), (s = Rn(n)), (o = s.R(e));
    jn(s) && (s = wd), (i = i.add(s)), (t = Jl(t, o));
  }
  return new Hs(i, t);
}
O.gb = function (t) {
  return Zl(this, t).h;
};
O.and = function (t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++)
    n[r] = this.D(r) & t.D(r);
  return new he(n, this.h & t.h);
};
O.or = function (t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++)
    n[r] = this.D(r) | t.D(r);
  return new he(n, this.h | t.h);
};
O.xor = function (t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++)
    n[r] = this.D(r) ^ t.D(r);
  return new he(n, this.h ^ t.h);
};
function ny(t) {
  for (var e = t.g.length + 1, n = [], r = 0; r < e; r++)
    n[r] = (t.D(r) << 1) | (t.D(r - 1) >>> 31);
  return new he(n, t.h);
}
function Ii(t, e) {
  var n = e >> 5;
  e %= 32;
  for (var r = t.g.length - n, i = [], s = 0; s < r; s++)
    i[s] =
      0 < e ? (t.D(s + n) >>> e) | (t.D(s + n + 1) << (32 - e)) : t.D(s + n);
  return new he(i, t.h);
}
Yl.prototype.createWebChannel = Yl.prototype.g;
Bt.prototype.send = Bt.prototype.u;
Bt.prototype.open = Bt.prototype.m;
Bt.prototype.close = Bt.prototype.close;
Vu.NO_ERROR = 0;
Vu.TIMEOUT = 8;
Vu.HTTP_ERROR = 6;
vw.COMPLETE = "complete";
_w.EventType = ha;
ha.OPEN = "a";
ha.CLOSE = "b";
ha.ERROR = "c";
ha.MESSAGE = "d";
Ye.prototype.listen = Ye.prototype.O;
Le.prototype.listenOnce = Le.prototype.P;
Le.prototype.getLastError = Le.prototype.Sa;
Le.prototype.getLastErrorCode = Le.prototype.Ia;
Le.prototype.getStatus = Le.prototype.da;
Le.prototype.getResponseJson = Le.prototype.Wa;
Le.prototype.getResponseText = Le.prototype.ja;
Le.prototype.send = Le.prototype.ha;
Le.prototype.setWithCredentials = Le.prototype.Oa;
dn.prototype.digest = dn.prototype.l;
dn.prototype.reset = dn.prototype.reset;
dn.prototype.update = dn.prototype.j;
he.prototype.add = he.prototype.add;
he.prototype.multiply = he.prototype.R;
he.prototype.modulo = he.prototype.gb;
he.prototype.compare = he.prototype.X;
he.prototype.toNumber = he.prototype.ea;
he.prototype.toString = he.prototype.toString;
he.prototype.getBits = he.prototype.D;
he.fromNumber = Rn;
he.fromString = tE;
var Nx = function () {
    return new Yl();
  },
  Lx = function () {
    return Lu();
  },
  Zc = Vu,
  Vx = vw,
  Ox = yi,
  ry = {
    xb: 0,
    Ab: 1,
    Bb: 2,
    Ub: 3,
    Zb: 4,
    Wb: 5,
    Xb: 6,
    Vb: 7,
    Tb: 8,
    Yb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Rb: 12,
    Nb: 13,
    Ob: 14,
    Mb: 15,
    Pb: 16,
    Qb: 17,
    tb: 18,
    sb: 19,
    ub: 20,
  },
  Ya = _w,
  Mx = Le,
  Fx = dn,
  Ji = he;
const iy = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dt {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
(dt.UNAUTHENTICATED = new dt(null)),
  (dt.GOOGLE_CREDENTIALS = new dt("google-credentials-uid")),
  (dt.FIRST_PARTY = new dt("first-party-uid")),
  (dt.MOCK_USER = new dt("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Rs = "10.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ui = new C0("@firebase/firestore");
function Ws() {
  return ui.logLevel;
}
function V(t, ...e) {
  if (ui.logLevel <= se.DEBUG) {
    const n = e.map(fp);
    ui.debug(`Firestore (${Rs}): ${t}`, ...n);
  }
}
function kn(t, ...e) {
  if (ui.logLevel <= se.ERROR) {
    const n = e.map(fp);
    ui.error(`Firestore (${Rs}): ${t}`, ...n);
  }
}
function cs(t, ...e) {
  if (ui.logLevel <= se.WARN) {
    const n = e.map(fp);
    ui.warn(`Firestore (${Rs}): ${t}`, ...n);
  }
}
function fp(t) {
  if (typeof t == "string") return t;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n);
    })(t);
  } catch {
    return t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Q(t = "Unexpected state") {
  const e = `FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: ` + t;
  throw (kn(e), new Error(e));
}
function me(t, e) {
  t || Q();
}
function Y(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const k = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class U extends gi {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class An {
  constructor() {
    this.promise = new Promise((e, n) => {
      (this.resolve = e), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nE {
  constructor(e, n) {
    (this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${e}`);
  }
}
class jx {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(dt.UNAUTHENTICATED));
  }
  shutdown() {}
}
class Ux {
  constructor(e) {
    (this.token = e), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, n) {
    (this.changeListener = n), e.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class bx {
  constructor(e) {
    (this.t = e),
      (this.currentUser = dt.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(e, n) {
    let r = this.i;
    const i = (l) => (this.i !== r ? ((r = this.i), n(l)) : Promise.resolve());
    let s = new An();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new An()),
        e.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const l = s;
        e.enqueueRetryable(async () => {
          await l.promise, await i(this.currentUser);
        });
      },
      a = (l) => {
        V("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = l),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((l) => a(l)),
      setTimeout(() => {
        if (!this.auth) {
          const l = this.t.getImmediate({ optional: !0 });
          l
            ? a(l)
            : (V("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              s.resolve(),
              (s = new An()));
        }
      }, 0),
      o();
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? (V(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change."
                  ),
                  this.getToken())
                : r
                  ? (me(typeof r.accessToken == "string"),
                    new nE(r.accessToken, this.currentUser))
                  : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return me(e === null || typeof e == "string"), new dt(e);
  }
}
class $x {
  constructor(e, n, r) {
    (this.l = e),
      (this.h = n),
      (this.P = r),
      (this.type = "FirstParty"),
      (this.user = dt.FIRST_PARTY),
      (this.I = new Map());
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const e = this.T();
    return (
      e && this.I.set("Authorization", e),
      this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h),
      this.I
    );
  }
}
class Bx {
  constructor(e, n, r) {
    (this.l = e), (this.h = n), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new $x(this.l, this.h, this.P));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(dt.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class zx {
  constructor(e) {
    (this.value = e),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class Hx {
  constructor(e) {
    (this.A = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null);
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        V(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.R;
      return (
        (this.R = s.token),
        V(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`
        ),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      V("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.A.getImmediate({ optional: !0 });
          s
            ? i(s)
            : V("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (me(typeof n.token == "string"),
                  (this.R = n.token),
                  new zx(n.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wx(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rE {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = Wx(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
}
function ue(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function hs(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class He {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new U(
        k.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (n >= 1e9)
      throw new U(
        k.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (e < -62135596800)
      throw new U(k.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new U(k.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  static now() {
    return He.fromMillis(Date.now());
  }
  static fromDate(e) {
    return He.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n));
    return new He(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? ue(this.nanoseconds, e.nanoseconds)
      : ue(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const e = this.seconds - -62135596800;
    return (
      String(e).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new X(e);
  }
  static min() {
    return new X(new He(0, 0));
  }
  static max() {
    return new X(new He(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Go {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && Q(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && Q(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return Go.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof Go
        ? e.forEach((r) => {
            n.push(r);
          })
        : n.push(e),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = e.get(i),
        o = n.get(i);
      if (s < o) return -1;
      if (s > o) return 1;
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0;
  }
}
class Re extends Go {
  construct(e, n, r) {
    return new Re(e, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0)
        throw new U(
          k.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new Re(n);
  }
  static emptyPath() {
    return new Re([]);
  }
}
const qx = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class it extends Go {
  construct(e, n, r) {
    return new it(e, n, r);
  }
  static isValidIdentifier(e) {
    return qx.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          it.isValidIdentifier(e) || (e = "`" + e + "`"),
          e
        )
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new it(["__name__"]);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new U(
          k.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(r), (r = "");
    };
    let o = !1;
    for (; i < e.length; ) {
      const a = e[i];
      if (a === "\\") {
        if (i + 1 === e.length)
          throw new U(
            k.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e
          );
        const l = e[i + 1];
        if (l !== "\\" && l !== "." && l !== "`")
          throw new U(
            k.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + e
          );
        (r += l), (i += 2);
      } else
        a === "`"
          ? ((o = !o), i++)
          : a !== "." || o
            ? ((r += a), i++)
            : (s(), i++);
    }
    if ((s(), o))
      throw new U(k.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new it(n);
  }
  static emptyPath() {
    return new it([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new z(Re.fromString(e));
  }
  static fromName(e) {
    return new z(Re.fromString(e).popFirst(5));
  }
  static empty() {
    return new z(Re.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && Re.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return Re.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new z(new Re(e.slice()));
  }
}
function Qx(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = X.fromTimestamp(r === 1e9 ? new He(n + 1, 0) : new He(n, r));
  return new Cr(i, z.empty(), e);
}
function Kx(t) {
  return new Cr(t.readTime, t.key, -1);
}
class Cr {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new Cr(X.min(), z.empty(), -1);
  }
  static max() {
    return new Cr(X.max(), z.empty(), -1);
  }
}
function Gx(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = z.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : ue(t.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xx =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class Yx {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ga(t) {
  if (t.code !== k.FAILED_PRECONDITION || t.message !== Xx) throw t;
  V("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P {
  constructor(e) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          (this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n);
        }
      );
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, n) {
    return (
      this.callbackAttached && Q(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new P((r, i) => {
            (this.nextCallback = (s) => {
              this.wrapSuccess(e, s).next(r, i);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i);
              });
          })
    );
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n);
    });
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof P ? n : P.resolve(n);
    } catch (n) {
      return P.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : P.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : P.reject(n);
  }
  static resolve(e) {
    return new P((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new P((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new P((n, r) => {
      let i = 0,
        s = 0,
        o = !1;
      e.forEach((a) => {
        ++i,
          a.next(
            () => {
              ++s, o && s === i && n();
            },
            (l) => r(l)
          );
      }),
        (o = !0),
        s === i && n();
    });
  }
  static or(e) {
    let n = P.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? P.resolve(i) : r()));
    return n;
  }
  static forEach(e, n) {
    const r = [];
    return (
      e.forEach((i, s) => {
        r.push(n.call(this, i, s));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(e, n) {
    return new P((r, i) => {
      const s = e.length,
        o = new Array(s);
      let a = 0;
      for (let l = 0; l < s; l++) {
        const u = l;
        n(e[u]).next(
          (c) => {
            (o[u] = c), ++a, a === s && r(o);
          },
          (c) => i(c)
        );
      }
    });
  }
  static doWhile(e, n) {
    return new P((r, i) => {
      const s = () => {
        e() === !0
          ? n().next(() => {
              s();
            }, i)
          : r();
      };
      s();
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pp {
  constructor(e, n) {
    (this.action = e),
      (this.transaction = n),
      (this.aborted = !1),
      (this.V = new An()),
      (this.transaction.oncomplete = () => {
        this.V.resolve();
      }),
      (this.transaction.onabort = () => {
        n.error ? this.V.reject(new po(e, n.error)) : this.V.resolve();
      }),
      (this.transaction.onerror = (r) => {
        const i = mp(r.target.error);
        this.V.reject(new po(e, i));
      });
  }
  static open(e, n, r, i) {
    try {
      return new pp(n, e.transaction(i, r));
    } catch (s) {
      throw new po(n, s);
    }
  }
  get m() {
    return this.V.promise;
  }
  abort(e) {
    e && this.V.reject(e),
      this.aborted ||
        (V(
          "SimpleDb",
          "Aborting transaction:",
          e ? e.message : "Client-initiated abort"
        ),
        (this.aborted = !0),
        this.transaction.abort());
  }
  g() {
    const e = this.transaction;
    this.aborted || typeof e.commit != "function" || e.commit();
  }
  store(e) {
    const n = this.transaction.objectStore(e);
    return new Zx(n);
  }
}
class Gr {
  constructor(e, n, r) {
    (this.name = e),
      (this.version = n),
      (this.p = r),
      Gr.S(ql()) === 12.2 &&
        kn(
          "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
        );
  }
  static delete(e) {
    return (
      V("SimpleDb", "Removing database:", e),
      $r(window.indexedDB.deleteDatabase(e)).toPromise()
    );
  }
  static D() {
    if (!I0()) return !1;
    if (Gr.C()) return !0;
    const e = ql(),
      n = Gr.S(e),
      r = 0 < n && n < 10,
      i = Gr.v(e),
      s = 0 < i && i < 4.5;
    return !(
      e.indexOf("MSIE ") > 0 ||
      e.indexOf("Trident/") > 0 ||
      e.indexOf("Edge/") > 0 ||
      r ||
      s
    );
  }
  static C() {
    var e;
    return (
      typeof process < "u" &&
      ((e = process.__PRIVATE_env) === null || e === void 0 ? void 0 : e.F) ===
        "YES"
    );
  }
  static M(e, n) {
    return e.store(n);
  }
  static S(e) {
    const n = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
      r = n ? n[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(r);
  }
  static v(e) {
    const n = e.match(/Android ([\d.]+)/i),
      r = n ? n[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(r);
  }
  async O(e) {
    return (
      this.db ||
        (V("SimpleDb", "Opening database:", this.name),
        (this.db = await new Promise((n, r) => {
          const i = indexedDB.open(this.name, this.version);
          (i.onsuccess = (s) => {
            const o = s.target.result;
            n(o);
          }),
            (i.onblocked = () => {
              r(
                new po(
                  e,
                  "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."
                )
              );
            }),
            (i.onerror = (s) => {
              const o = s.target.error;
              o.name === "VersionError"
                ? r(
                    new U(
                      k.FAILED_PRECONDITION,
                      "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."
                    )
                  )
                : o.name === "InvalidStateError"
                  ? r(
                      new U(
                        k.FAILED_PRECONDITION,
                        "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " +
                          o
                      )
                    )
                  : r(new po(e, o));
            }),
            (i.onupgradeneeded = (s) => {
              V(
                "SimpleDb",
                'Database "' + this.name + '" requires upgrade from version:',
                s.oldVersion
              );
              const o = s.target.result;
              this.p
                .N(o, i.transaction, s.oldVersion, this.version)
                .next(() => {
                  V(
                    "SimpleDb",
                    "Database upgrade to version " + this.version + " complete"
                  );
                });
            });
        }))),
      this.B && (this.db.onversionchange = (n) => this.B(n)),
      this.db
    );
  }
  L(e) {
    (this.B = e), this.db && (this.db.onversionchange = (n) => e(n));
  }
  async runTransaction(e, n, r, i) {
    const s = n === "readonly";
    let o = 0;
    for (;;) {
      ++o;
      try {
        this.db = await this.O(e);
        const a = pp.open(this.db, e, s ? "readonly" : "readwrite", r),
          l = i(a)
            .next((u) => (a.g(), u))
            .catch((u) => (a.abort(u), P.reject(u)))
            .toPromise();
        return l.catch(() => {}), await a.m, l;
      } catch (a) {
        const l = a,
          u = l.name !== "FirebaseError" && o < 3;
        if (
          (V(
            "SimpleDb",
            "Transaction failed with error:",
            l.message,
            "Retrying:",
            u
          ),
          this.close(),
          !u)
        )
          return Promise.reject(l);
      }
    }
  }
  close() {
    this.db && this.db.close(), (this.db = void 0);
  }
}
class Jx {
  constructor(e) {
    (this.k = e), (this.q = !1), (this.K = null);
  }
  get isDone() {
    return this.q;
  }
  get $() {
    return this.K;
  }
  set cursor(e) {
    this.k = e;
  }
  done() {
    this.q = !0;
  }
  U(e) {
    this.K = e;
  }
  delete() {
    return $r(this.k.delete());
  }
}
class po extends U {
  constructor(e, n) {
    super(k.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${n}`),
      (this.name = "IndexedDbTransactionError");
  }
}
function ya(t) {
  return t.name === "IndexedDbTransactionError";
}
class Zx {
  constructor(e) {
    this.store = e;
  }
  put(e, n) {
    let r;
    return (
      n !== void 0
        ? (V("SimpleDb", "PUT", this.store.name, e, n),
          (r = this.store.put(n, e)))
        : (V("SimpleDb", "PUT", this.store.name, "<auto-key>", e),
          (r = this.store.put(e))),
      $r(r)
    );
  }
  add(e) {
    return V("SimpleDb", "ADD", this.store.name, e, e), $r(this.store.add(e));
  }
  get(e) {
    return $r(this.store.get(e)).next(
      (n) => (
        n === void 0 && (n = null),
        V("SimpleDb", "GET", this.store.name, e, n),
        n
      )
    );
  }
  delete(e) {
    return (
      V("SimpleDb", "DELETE", this.store.name, e), $r(this.store.delete(e))
    );
  }
  count() {
    return V("SimpleDb", "COUNT", this.store.name), $r(this.store.count());
  }
  W(e, n) {
    const r = this.options(e, n),
      i = r.index ? this.store.index(r.index) : this.store;
    if (typeof i.getAll == "function") {
      const s = i.getAll(r.range);
      return new P((o, a) => {
        (s.onerror = (l) => {
          a(l.target.error);
        }),
          (s.onsuccess = (l) => {
            o(l.target.result);
          });
      });
    }
    {
      const s = this.cursor(r),
        o = [];
      return this.G(s, (a, l) => {
        o.push(l);
      }).next(() => o);
    }
  }
  j(e, n) {
    const r = this.store.getAll(e, n === null ? void 0 : n);
    return new P((i, s) => {
      (r.onerror = (o) => {
        s(o.target.error);
      }),
        (r.onsuccess = (o) => {
          i(o.target.result);
        });
    });
  }
  H(e, n) {
    V("SimpleDb", "DELETE ALL", this.store.name);
    const r = this.options(e, n);
    r.J = !1;
    const i = this.cursor(r);
    return this.G(i, (s, o, a) => a.delete());
  }
  Y(e, n) {
    let r;
    n ? (r = e) : ((r = {}), (n = e));
    const i = this.cursor(r);
    return this.G(i, n);
  }
  Z(e) {
    const n = this.cursor({});
    return new P((r, i) => {
      (n.onerror = (s) => {
        const o = mp(s.target.error);
        i(o);
      }),
        (n.onsuccess = (s) => {
          const o = s.target.result;
          o
            ? e(o.primaryKey, o.value).next((a) => {
                a ? o.continue() : r();
              })
            : r();
        });
    });
  }
  G(e, n) {
    const r = [];
    return new P((i, s) => {
      (e.onerror = (o) => {
        s(o.target.error);
      }),
        (e.onsuccess = (o) => {
          const a = o.target.result;
          if (!a) return void i();
          const l = new Jx(a),
            u = n(a.primaryKey, a.value, l);
          if (u instanceof P) {
            const c = u.catch((h) => (l.done(), P.reject(h)));
            r.push(c);
          }
          l.isDone ? i() : l.$ === null ? a.continue() : a.continue(l.$);
        });
    }).next(() => P.waitFor(r));
  }
  options(e, n) {
    let r;
    return (
      e !== void 0 && (typeof e == "string" ? (r = e) : (n = e)),
      { index: r, range: n }
    );
  }
  cursor(e) {
    let n = "next";
    if ((e.reverse && (n = "prev"), e.index)) {
      const r = this.store.index(e.index);
      return e.J ? r.openKeyCursor(e.range, n) : r.openCursor(e.range, n);
    }
    return this.store.openCursor(e.range, n);
  }
}
function $r(t) {
  return new P((e, n) => {
    (t.onsuccess = (r) => {
      const i = r.target.result;
      e(i);
    }),
      (t.onerror = (r) => {
        const i = mp(r.target.error);
        n(i);
      });
  });
}
let sy = !1;
function mp(t) {
  const e = Gr.S(ql());
  if (e >= 12.2 && e < 13) {
    const n =
      "An internal error was encountered in the Indexed Database server";
    if (t.message.indexOf(n) >= 0) {
      const r = new U(
        "internal",
        `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`
      );
      return (
        sy ||
          ((sy = !0),
          setTimeout(() => {
            throw r;
          }, 0)),
        r
      );
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gp {
  constructor(e, n) {
    (this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.se(r)),
        (this.oe = (r) => n.writeSequenceNumber(r)));
  }
  se(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)), this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return this.oe && this.oe(e), e;
  }
}
gp._e = -1;
function zu(t) {
  return t == null;
}
function eu(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function ek(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !eu(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oy(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function vi(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function iE(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ce {
  constructor(e, n) {
    (this.comparator = e), (this.root = n || nt.EMPTY);
  }
  insert(e, n) {
    return new Ce(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, nt.BLACK, null, null)
    );
  }
  remove(e) {
    return new Ce(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, nt.BLACK, null, null)
    );
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(e) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key);
      if (i === 0) return n + r.left.size;
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1));
  }
  toString() {
    const e = [];
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(", ")}}`
    );
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new Ja(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new Ja(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new Ja(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new Ja(this.root, e, this.comparator, !0);
  }
}
class Ja {
  constructor(e, n, r, i) {
    (this.isReverse = i), (this.nodeStack = []);
    let s = 1;
    for (; !e.isEmpty(); )
      if (((s = n ? r(e.key, n) : 1), n && i && (s *= -1), s < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (s === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = { key: e.key, value: e.value };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right);
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left);
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class nt {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? nt.RED),
      (this.left = i ?? nt.EMPTY),
      (this.right = s ?? nt.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, r, i, s) {
    return new nt(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : s === 0
            ? i.copy(null, n, null, null, null)
            : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return nt.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, n) {
    let r,
      i = this;
    if (n(e, i.key) < 0)
      i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null));
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return nt.EMPTY;
        (r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e
    );
  }
  rotateLeft() {
    const e = this.copy(null, null, nt.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, nt.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw Q();
    const e = this.left.check();
    if (e !== this.right.check()) throw Q();
    return e + (this.isRed() ? 0 : 1);
  }
}
(nt.EMPTY = null), (nt.RED = !0), (nt.BLACK = !1);
nt.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw Q();
  }
  get value() {
    throw Q();
  }
  get color() {
    throw Q();
  }
  get left() {
    throw Q();
  }
  get right() {
    throw Q();
  }
  copy(e, n, r, i, s) {
    return this;
  }
  insert(e, n, r) {
    return new nt(e, n);
  }
  remove(e, n) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class at {
  constructor(e) {
    (this.comparator = e), (this.data = new Ce(this.comparator));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1));
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0) return;
      n(i.key);
    }
  }
  forEachWhile(e, n) {
    let r;
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!e(r.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new ay(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new ay(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(e) {
    if (!(e instanceof at) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      r = e.data.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (this.comparator(i, s) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return this.forEach((n) => e.push(n)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const n = new at(this.comparator);
    return (n.data = e), n;
  }
}
class ay {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ut {
  constructor(e) {
    (this.fields = e), e.sort(it.comparator);
  }
  static empty() {
    return new Ut([]);
  }
  unionWith(e) {
    let n = new at(it.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new Ut(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return hs(this.fields, e.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sE extends Error {
  constructor() {
    super(...arguments), (this.name = "Base64DecodeError");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vt {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = (function (i) {
      try {
        return atob(i);
      } catch (s) {
        throw typeof DOMException < "u" && s instanceof DOMException
          ? new sE("Invalid base64 string: " + s)
          : s;
      }
    })(e);
    return new vt(n);
  }
  static fromUint8Array(e) {
    const n = (function (i) {
      let s = "";
      for (let o = 0; o < i.length; ++o) s += String.fromCharCode(i[o]);
      return s;
    })(e);
    return new vt(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (n) {
      return btoa(n);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (n) {
      const r = new Uint8Array(n.length);
      for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return ue(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
vt.EMPTY_BYTE_STRING = new vt("");
const tk = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Pr(t) {
  if ((me(!!t), typeof t == "string")) {
    let e = 0;
    const n = tk.exec(t);
    if ((me(!!n), n[1])) {
      let i = n[1];
      (i = (i + "000000000").substr(0, 9)), (e = Number(i));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: je(t.seconds), nanos: je(t.nanos) };
}
function je(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function ci(t) {
  return typeof t == "string" ? vt.fromBase64String(t) : vt.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yp(t) {
  var e, n;
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "server_timestamp"
  );
}
function vp(t) {
  const e = t.mapValue.fields.__previous_value__;
  return yp(e) ? vp(e) : e;
}
function Xo(t) {
  const e = Pr(t.mapValue.fields.__local_write_time__.timestampValue);
  return new He(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nk {
  constructor(e, n, r, i, s, o, a, l, u) {
    (this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = a),
      (this.longPollingOptions = l),
      (this.useFetchStreams = u);
  }
}
class Yo {
  constructor(e, n) {
    (this.projectId = e), (this.database = n || "(default)");
  }
  static empty() {
    return new Yo("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(e) {
    return (
      e instanceof Yo &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Za = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function hi(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
      ? 1
      : "integerValue" in t || "doubleValue" in t
        ? 2
        : "timestampValue" in t
          ? 3
          : "stringValue" in t
            ? 5
            : "bytesValue" in t
              ? 6
              : "referenceValue" in t
                ? 7
                : "geoPointValue" in t
                  ? 8
                  : "arrayValue" in t
                    ? 9
                    : "mapValue" in t
                      ? yp(t)
                        ? 4
                        : rk(t)
                          ? 9007199254740991
                          : 10
                      : Q();
}
function Dn(t, e) {
  if (t === e) return !0;
  const n = hi(t);
  if (n !== hi(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Xo(t).isEqual(Xo(e));
    case 3:
      return (function (i, s) {
        if (
          typeof i.timestampValue == "string" &&
          typeof s.timestampValue == "string" &&
          i.timestampValue.length === s.timestampValue.length
        )
          return i.timestampValue === s.timestampValue;
        const o = Pr(i.timestampValue),
          a = Pr(s.timestampValue);
        return o.seconds === a.seconds && o.nanos === a.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (i, s) {
        return ci(i.bytesValue).isEqual(ci(s.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (i, s) {
        return (
          je(i.geoPointValue.latitude) === je(s.geoPointValue.latitude) &&
          je(i.geoPointValue.longitude) === je(s.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (i, s) {
        if ("integerValue" in i && "integerValue" in s)
          return je(i.integerValue) === je(s.integerValue);
        if ("doubleValue" in i && "doubleValue" in s) {
          const o = je(i.doubleValue),
            a = je(s.doubleValue);
          return o === a ? eu(o) === eu(a) : isNaN(o) && isNaN(a);
        }
        return !1;
      })(t, e);
    case 9:
      return hs(t.arrayValue.values || [], e.arrayValue.values || [], Dn);
    case 10:
      return (function (i, s) {
        const o = i.mapValue.fields || {},
          a = s.mapValue.fields || {};
        if (oy(o) !== oy(a)) return !1;
        for (const l in o)
          if (o.hasOwnProperty(l) && (a[l] === void 0 || !Dn(o[l], a[l])))
            return !1;
        return !0;
      })(t, e);
    default:
      return Q();
  }
}
function Jo(t, e) {
  return (t.values || []).find((n) => Dn(n, e)) !== void 0;
}
function ds(t, e) {
  if (t === e) return 0;
  const n = hi(t),
    r = hi(e);
  if (n !== r) return ue(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return ue(t.booleanValue, e.booleanValue);
    case 2:
      return (function (s, o) {
        const a = je(s.integerValue || s.doubleValue),
          l = je(o.integerValue || o.doubleValue);
        return a < l
          ? -1
          : a > l
            ? 1
            : a === l
              ? 0
              : isNaN(a)
                ? isNaN(l)
                  ? 0
                  : -1
                : 1;
      })(t, e);
    case 3:
      return ly(t.timestampValue, e.timestampValue);
    case 4:
      return ly(Xo(t), Xo(e));
    case 5:
      return ue(t.stringValue, e.stringValue);
    case 6:
      return (function (s, o) {
        const a = ci(s),
          l = ci(o);
        return a.compareTo(l);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (s, o) {
        const a = s.split("/"),
          l = o.split("/");
        for (let u = 0; u < a.length && u < l.length; u++) {
          const c = ue(a[u], l[u]);
          if (c !== 0) return c;
        }
        return ue(a.length, l.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (s, o) {
        const a = ue(je(s.latitude), je(o.latitude));
        return a !== 0 ? a : ue(je(s.longitude), je(o.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (s, o) {
        const a = s.values || [],
          l = o.values || [];
        for (let u = 0; u < a.length && u < l.length; ++u) {
          const c = ds(a[u], l[u]);
          if (c) return c;
        }
        return ue(a.length, l.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (s, o) {
        if (s === Za.mapValue && o === Za.mapValue) return 0;
        if (s === Za.mapValue) return 1;
        if (o === Za.mapValue) return -1;
        const a = s.fields || {},
          l = Object.keys(a),
          u = o.fields || {},
          c = Object.keys(u);
        l.sort(), c.sort();
        for (let h = 0; h < l.length && h < c.length; ++h) {
          const d = ue(l[h], c[h]);
          if (d !== 0) return d;
          const g = ds(a[l[h]], u[c[h]]);
          if (g !== 0) return g;
        }
        return ue(l.length, c.length);
      })(t.mapValue, e.mapValue);
    default:
      throw Q();
  }
}
function ly(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return ue(t, e);
  const n = Pr(t),
    r = Pr(e),
    i = ue(n.seconds, r.seconds);
  return i !== 0 ? i : ue(n.nanos, r.nanos);
}
function fs(t) {
  return Ed(t);
}
function Ed(t) {
  return "nullValue" in t
    ? "null"
    : "booleanValue" in t
      ? "" + t.booleanValue
      : "integerValue" in t
        ? "" + t.integerValue
        : "doubleValue" in t
          ? "" + t.doubleValue
          : "timestampValue" in t
            ? (function (n) {
                const r = Pr(n);
                return `time(${r.seconds},${r.nanos})`;
              })(t.timestampValue)
            : "stringValue" in t
              ? t.stringValue
              : "bytesValue" in t
                ? (function (n) {
                    return ci(n).toBase64();
                  })(t.bytesValue)
                : "referenceValue" in t
                  ? (function (n) {
                      return z.fromName(n).toString();
                    })(t.referenceValue)
                  : "geoPointValue" in t
                    ? (function (n) {
                        return `geo(${n.latitude},${n.longitude})`;
                      })(t.geoPointValue)
                    : "arrayValue" in t
                      ? (function (n) {
                          let r = "[",
                            i = !0;
                          for (const s of n.values || [])
                            i ? (i = !1) : (r += ","), (r += Ed(s));
                          return r + "]";
                        })(t.arrayValue)
                      : "mapValue" in t
                        ? (function (n) {
                            const r = Object.keys(n.fields || {}).sort();
                            let i = "{",
                              s = !0;
                            for (const o of r)
                              s ? (s = !1) : (i += ","),
                                (i += `${o}:${Ed(n.fields[o])}`);
                            return i + "}";
                          })(t.mapValue)
                        : Q();
}
function Td(t) {
  return !!t && "integerValue" in t;
}
function _p(t) {
  return !!t && "arrayValue" in t;
}
function uy(t) {
  return !!t && "nullValue" in t;
}
function cy(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function pl(t) {
  return !!t && "mapValue" in t;
}
function mo(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return vi(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = mo(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = mo(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function rk(t) {
  return (
    (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ct {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new Ct({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !pl(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = mo(n);
  }
  setAll(e) {
    let n = it.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const l = this.getFieldsMap(n);
        this.applyChanges(l, r, i), (r = {}), (i = []), (n = a.popLast());
      }
      o ? (r[a.lastSegment()] = mo(o)) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    pl(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return Dn(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (pl(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    vi(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new Ct(mo(this.value));
  }
}
function oE(t) {
  const e = [];
  return (
    vi(t.fields, (n, r) => {
      const i = new it([n]);
      if (pl(r)) {
        const s = oE(r.mapValue).fields;
        if (s.length === 0) e.push(i);
        else for (const o of s) e.push(i.child(o));
      } else e.push(i);
    }),
    new Ut(e)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pt {
  constructor(e, n, r, i, s, o, a) {
    (this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = s),
      (this.data = o),
      (this.documentState = a);
  }
  static newInvalidDocument(e) {
    return new pt(e, 0, X.min(), X.min(), X.min(), Ct.empty(), 0);
  }
  static newFoundDocument(e, n, r, i) {
    return new pt(e, 1, n, X.min(), r, i, 0);
  }
  static newNoDocument(e, n) {
    return new pt(e, 2, n, X.min(), X.min(), Ct.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new pt(e, 3, n, X.min(), X.min(), Ct.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(X.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = Ct.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = Ct.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = X.min()), this;
  }
  setReadTime(e) {
    return (this.readTime = e), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof pt &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new pt(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tu {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
function hy(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = z.comparator(z.fromName(o.referenceValue), n.key))
        : (r = ds(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function dy(t, e) {
  if (t === null) return e === null;
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!Dn(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nu {
  constructor(e, n = "asc") {
    (this.field = e), (this.dir = n);
  }
}
function ik(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aE {}
class Be extends aE {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.createKeyFieldInFilter(e, n, r)
        : new ok(e, n, r)
      : n === "array-contains"
        ? new uk(e, r)
        : n === "in"
          ? new ck(e, r)
          : n === "not-in"
            ? new hk(e, r)
            : n === "array-contains-any"
              ? new dk(e, r)
              : new Be(e, n, r);
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === "in" ? new ak(e, r) : new lk(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.matchesComparison(ds(n, this.value))
      : n !== null &&
          hi(this.value) === hi(n) &&
          this.matchesComparison(ds(n, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return Q();
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Nn extends aE {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.ue = null);
  }
  static create(e, n) {
    return new Nn(e, n);
  }
  matches(e) {
    return lE(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.ue !== null ||
        (this.ue = this.filters.reduce(
          (e, n) => e.concat(n.getFlattenedFilters()),
          []
        )),
      this.ue
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function lE(t) {
  return t.op === "and";
}
function uE(t) {
  return sk(t) && lE(t);
}
function sk(t) {
  for (const e of t.filters) if (e instanceof Nn) return !1;
  return !0;
}
function Rd(t) {
  if (t instanceof Be)
    return t.field.canonicalString() + t.op.toString() + fs(t.value);
  if (uE(t)) return t.filters.map((e) => Rd(e)).join(",");
  {
    const e = t.filters.map((n) => Rd(n)).join(",");
    return `${t.op}(${e})`;
  }
}
function cE(t, e) {
  return t instanceof Be
    ? (function (r, i) {
        return (
          i instanceof Be &&
          r.op === i.op &&
          r.field.isEqual(i.field) &&
          Dn(r.value, i.value)
        );
      })(t, e)
    : t instanceof Nn
      ? (function (r, i) {
          return i instanceof Nn &&
            r.op === i.op &&
            r.filters.length === i.filters.length
            ? r.filters.reduce((s, o, a) => s && cE(o, i.filters[a]), !0)
            : !1;
        })(t, e)
      : void Q();
}
function hE(t) {
  return t instanceof Be
    ? (function (n) {
        return `${n.field.canonicalString()} ${n.op} ${fs(n.value)}`;
      })(t)
    : t instanceof Nn
      ? (function (n) {
          return (
            n.op.toString() + " {" + n.getFilters().map(hE).join(" ,") + "}"
          );
        })(t)
      : "Filter";
}
class ok extends Be {
  constructor(e, n, r) {
    super(e, n, r), (this.key = z.fromName(r.referenceValue));
  }
  matches(e) {
    const n = z.comparator(e.key, this.key);
    return this.matchesComparison(n);
  }
}
class ak extends Be {
  constructor(e, n) {
    super(e, "in", n), (this.keys = dE("in", n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class lk extends Be {
  constructor(e, n) {
    super(e, "not-in", n), (this.keys = dE("not-in", n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function dE(t, e) {
  var n;
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => z.fromName(r.referenceValue));
}
class uk extends Be {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return _p(n) && Jo(n.arrayValue, this.value);
  }
}
class ck extends Be {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && Jo(this.value.arrayValue, n);
  }
}
class hk extends Be {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (Jo(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !Jo(this.value.arrayValue, n);
  }
}
class dk extends Be {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!_p(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => Jo(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fk {
  constructor(e, n = null, r = [], i = [], s = null, o = null, a = null) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = a),
      (this.ce = null);
  }
}
function fy(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new fk(t, e, n, r, i, s, o);
}
function wp(t) {
  const e = Y(t);
  if (e.ce === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters.map((r) => Rd(r)).join(",")),
      (n += "|ob:"),
      (n += e.orderBy
        .map((r) =>
          (function (s) {
            return s.field.canonicalString() + s.dir;
          })(r)
        )
        .join(",")),
      zu(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => fs(r)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => fs(r)).join(","))),
      (e.ce = n);
  }
  return e.ce;
}
function Ep(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++)
    if (!ik(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++)
    if (!cE(t.filters[n], e.filters[n])) return !1;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!dy(t.startAt, e.startAt) &&
    dy(t.endAt, e.endAt)
  );
}
function Sd(t) {
  return (
    z.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hu {
  constructor(
    e,
    n = null,
    r = [],
    i = [],
    s = null,
    o = "F",
    a = null,
    l = null
  ) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = a),
      (this.endAt = l),
      (this.le = null),
      (this.he = null),
      (this.Pe = null),
      this.startAt,
      this.endAt;
  }
}
function pk(t, e, n, r, i, s, o, a) {
  return new Hu(t, e, n, r, i, s, o, a);
}
function Tp(t) {
  return new Hu(t);
}
function py(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  );
}
function mk(t) {
  return t.collectionGroup !== null;
}
function go(t) {
  const e = Y(t);
  if (e.le === null) {
    e.le = [];
    const n = new Set();
    for (const s of e.explicitOrderBy)
      e.le.push(s), n.add(s.field.canonicalString());
    const r =
      e.explicitOrderBy.length > 0
        ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
        : "asc";
    (function (o) {
      let a = new at(it.comparator);
      return (
        o.filters.forEach((l) => {
          l.getFlattenedFilters().forEach((u) => {
            u.isInequality() && (a = a.add(u.field));
          });
        }),
        a
      );
    })(e).forEach((s) => {
      n.has(s.canonicalString()) || s.isKeyField() || e.le.push(new nu(s, r));
    }),
      n.has(it.keyField().canonicalString()) ||
        e.le.push(new nu(it.keyField(), r));
  }
  return e.le;
}
function Cn(t) {
  const e = Y(t);
  return e.he || (e.he = gk(e, go(t))), e.he;
}
function gk(t, e) {
  if (t.limitType === "F")
    return fy(
      t.path,
      t.collectionGroup,
      e,
      t.filters,
      t.limit,
      t.startAt,
      t.endAt
    );
  {
    e = e.map((i) => {
      const s = i.dir === "desc" ? "asc" : "desc";
      return new nu(i.field, s);
    });
    const n = t.endAt ? new tu(t.endAt.position, t.endAt.inclusive) : null,
      r = t.startAt ? new tu(t.startAt.position, t.startAt.inclusive) : null;
    return fy(t.path, t.collectionGroup, e, t.filters, t.limit, n, r);
  }
}
function Id(t, e, n) {
  return new Hu(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  );
}
function Wu(t, e) {
  return Ep(Cn(t), Cn(e)) && t.limitType === e.limitType;
}
function fE(t) {
  return `${wp(Cn(t))}|lt:${t.limitType}`;
}
function Ci(t) {
  return `Query(target=${(function (n) {
    let r = n.path.canonicalString();
    return (
      n.collectionGroup !== null &&
        (r += " collectionGroup=" + n.collectionGroup),
      n.filters.length > 0 &&
        (r += `, filters: [${n.filters.map((i) => hE(i)).join(", ")}]`),
      zu(n.limit) || (r += ", limit: " + n.limit),
      n.orderBy.length > 0 &&
        (r += `, orderBy: [${n.orderBy
          .map((i) =>
            (function (o) {
              return `${o.field.canonicalString()} (${o.dir})`;
            })(i)
          )
          .join(", ")}]`),
      n.startAt &&
        ((r += ", startAt: "),
        (r += n.startAt.inclusive ? "b:" : "a:"),
        (r += n.startAt.position.map((i) => fs(i)).join(","))),
      n.endAt &&
        ((r += ", endAt: "),
        (r += n.endAt.inclusive ? "a:" : "b:"),
        (r += n.endAt.position.map((i) => fs(i)).join(","))),
      `Target(${r})`
    );
  })(Cn(t))}; limitType=${t.limitType})`;
}
function qu(t, e) {
  return (
    e.isFoundDocument() &&
    (function (r, i) {
      const s = i.key.path;
      return r.collectionGroup !== null
        ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s)
        : z.isDocumentKey(r.path)
          ? r.path.isEqual(s)
          : r.path.isImmediateParentOf(s);
    })(t, e) &&
    (function (r, i) {
      for (const s of go(r))
        if (!s.field.isKeyField() && i.data.field(s.field) === null) return !1;
      return !0;
    })(t, e) &&
    (function (r, i) {
      for (const s of r.filters) if (!s.matches(i)) return !1;
      return !0;
    })(t, e) &&
    (function (r, i) {
      return !(
        (r.startAt &&
          !(function (o, a, l) {
            const u = hy(o, a, l);
            return o.inclusive ? u <= 0 : u < 0;
          })(r.startAt, go(r), i)) ||
        (r.endAt &&
          !(function (o, a, l) {
            const u = hy(o, a, l);
            return o.inclusive ? u >= 0 : u > 0;
          })(r.endAt, go(r), i))
      );
    })(t, e)
  );
}
function yk(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function pE(t) {
  return (e, n) => {
    let r = !1;
    for (const i of go(t)) {
      const s = vk(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function vk(t, e, n) {
  const r = t.field.isKeyField()
    ? z.comparator(e.key, n.key)
    : (function (s, o, a) {
        const l = o.data.field(s),
          u = a.data.field(s);
        return l !== null && u !== null ? ds(l, u) : Q();
      })(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return Q();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ss {
  constructor(e, n) {
    (this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r];
    if (i === void 0) return (this.inner[r] = [[e, n]]), void this.innerSize++;
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, n]);
    i.push([e, n]), this.innerSize++;
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    vi(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return iE(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _k = new Ce(z.comparator);
function Qn() {
  return _k;
}
const mE = new Ce(z.comparator);
function Js(...t) {
  let e = mE;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function gE(t) {
  let e = mE;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function Xr() {
  return yo();
}
function yE() {
  return yo();
}
function yo() {
  return new Ss(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const wk = new Ce(z.comparator),
  Ek = new at(z.comparator);
function te(...t) {
  let e = Ek;
  for (const n of t) e = e.add(n);
  return e;
}
const Tk = new at(ue);
function Rk() {
  return Tk;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vE(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: eu(e) ? "-0" : e };
}
function _E(t) {
  return { integerValue: "" + t };
}
function Sk(t, e) {
  return ek(e) ? _E(e) : vE(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qu {
  constructor() {
    this._ = void 0;
  }
}
function Ik(t, e, n) {
  return t instanceof ru
    ? (function (i, s) {
        const o = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: i.seconds, nanos: i.nanoseconds },
            },
          },
        };
        return (
          s && yp(s) && (s = vp(s)),
          s && (o.fields.__previous_value__ = s),
          { mapValue: o }
        );
      })(n, e)
    : t instanceof Zo
      ? EE(t, e)
      : t instanceof ea
        ? TE(t, e)
        : (function (i, s) {
            const o = wE(i, s),
              a = my(o) + my(i.Ie);
            return Td(o) && Td(i.Ie) ? _E(a) : vE(i.serializer, a);
          })(t, e);
}
function Ak(t, e, n) {
  return t instanceof Zo ? EE(t, e) : t instanceof ea ? TE(t, e) : n;
}
function wE(t, e) {
  return t instanceof iu
    ? (function (r) {
        return (
          Td(r) ||
          (function (s) {
            return !!s && "doubleValue" in s;
          })(r)
        );
      })(e)
      ? e
      : { integerValue: 0 }
    : null;
}
class ru extends Qu {}
class Zo extends Qu {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function EE(t, e) {
  const n = RE(e);
  for (const r of t.elements) n.some((i) => Dn(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class ea extends Qu {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function TE(t, e) {
  let n = RE(e);
  for (const r of t.elements) n = n.filter((i) => !Dn(i, r));
  return { arrayValue: { values: n } };
}
class iu extends Qu {
  constructor(e, n) {
    super(), (this.serializer = e), (this.Ie = n);
  }
}
function my(t) {
  return je(t.integerValue || t.doubleValue);
}
function RE(t) {
  return _p(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
function Ck(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (r, i) {
      return (r instanceof Zo && i instanceof Zo) ||
        (r instanceof ea && i instanceof ea)
        ? hs(r.elements, i.elements, Dn)
        : r instanceof iu && i instanceof iu
          ? Dn(r.Ie, i.Ie)
          : r instanceof ru && i instanceof ru;
    })(t.transform, e.transform)
  );
}
class Pk {
  constructor(e, n) {
    (this.version = e), (this.transformResults = n);
  }
}
class Pn {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new Pn();
  }
  static exists(e) {
    return new Pn(void 0, e);
  }
  static updateTime(e) {
    return new Pn(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function ml(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class Ku {}
function SE(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new AE(t.key, Pn.none())
      : new va(t.key, t.data, Pn.none());
  {
    const n = t.data,
      r = Ct.empty();
    let i = new at(it.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new Or(t.key, r, new Ut(i.toArray()), Pn.none());
  }
}
function xk(t, e, n) {
  t instanceof va
    ? (function (i, s, o) {
        const a = i.value.clone(),
          l = yy(i.fieldTransforms, s, o.transformResults);
        a.setAll(l),
          s.convertToFoundDocument(o.version, a).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof Or
      ? (function (i, s, o) {
          if (!ml(i.precondition, s))
            return void s.convertToUnknownDocument(o.version);
          const a = yy(i.fieldTransforms, s, o.transformResults),
            l = s.data;
          l.setAll(IE(i)),
            l.setAll(a),
            s.convertToFoundDocument(o.version, l).setHasCommittedMutations();
        })(t, e, n)
      : (function (i, s, o) {
          s.convertToNoDocument(o.version).setHasCommittedMutations();
        })(0, e, n);
}
function vo(t, e, n, r) {
  return t instanceof va
    ? (function (s, o, a, l) {
        if (!ml(s.precondition, o)) return a;
        const u = s.value.clone(),
          c = vy(s.fieldTransforms, l, o);
        return (
          u.setAll(c),
          o.convertToFoundDocument(o.version, u).setHasLocalMutations(),
          null
        );
      })(t, e, n, r)
    : t instanceof Or
      ? (function (s, o, a, l) {
          if (!ml(s.precondition, o)) return a;
          const u = vy(s.fieldTransforms, l, o),
            c = o.data;
          return (
            c.setAll(IE(s)),
            c.setAll(u),
            o.convertToFoundDocument(o.version, c).setHasLocalMutations(),
            a === null
              ? null
              : a
                  .unionWith(s.fieldMask.fields)
                  .unionWith(s.fieldTransforms.map((h) => h.field))
          );
        })(t, e, n, r)
      : (function (s, o, a) {
          return ml(s.precondition, o)
            ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null)
            : a;
        })(t, e, n);
}
function kk(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      s = wE(r.transform, i || null);
    s != null && (n === null && (n = Ct.empty()), n.set(r.field, s));
  }
  return n || null;
}
function gy(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (r, i) {
      return (
        (r === void 0 && i === void 0) ||
        (!(!r || !i) && hs(r, i, (s, o) => Ck(s, o)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class va extends Ku {
  constructor(e, n, r, i = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class Or extends Ku {
  constructor(e, n, r, i, s = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function IE(t) {
  const e = new Map();
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n);
        e.set(n, r);
      }
    }),
    e
  );
}
function yy(t, e, n) {
  const r = new Map();
  me(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field);
    r.set(s.field, Ak(o, a, n[i]));
  }
  return r;
}
function vy(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, Ik(s, o, e));
  }
  return r;
}
class AE extends Ku {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
class Dk extends Ku {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nk {
  constructor(e, n, r, i) {
    (this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i);
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && xk(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = vo(r, e, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = vo(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = yE();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let a = this.applyToLocalView(o, s.mutatedFields);
        a = n.has(i.key) ? null : a;
        const l = SE(o, a);
        l !== null && r.set(i.key, l),
          o.isValidDocument() || o.convertToNoDocument(X.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), te());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      hs(this.mutations, e.mutations, (n, r) => gy(n, r)) &&
      hs(this.baseMutations, e.baseMutations, (n, r) => gy(n, r))
    );
  }
}
class Rp {
  constructor(e, n, r, i) {
    (this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i);
  }
  static from(e, n, r) {
    me(e.mutations.length === r.length);
    let i = (function () {
      return wk;
    })();
    const s = e.mutations;
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
    return new Rp(e, n, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lk {
  constructor(e, n) {
    (this.largestBatchId = e), (this.mutation = n);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vk {
  constructor(e, n) {
    (this.count = e), (this.unchangedNames = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Fe, ie;
function Ok(t) {
  switch (t) {
    default:
      return Q();
    case k.CANCELLED:
    case k.UNKNOWN:
    case k.DEADLINE_EXCEEDED:
    case k.RESOURCE_EXHAUSTED:
    case k.INTERNAL:
    case k.UNAVAILABLE:
    case k.UNAUTHENTICATED:
      return !1;
    case k.INVALID_ARGUMENT:
    case k.NOT_FOUND:
    case k.ALREADY_EXISTS:
    case k.PERMISSION_DENIED:
    case k.FAILED_PRECONDITION:
    case k.ABORTED:
    case k.OUT_OF_RANGE:
    case k.UNIMPLEMENTED:
    case k.DATA_LOSS:
      return !0;
  }
}
function CE(t) {
  if (t === void 0) return kn("GRPC error has no .code"), k.UNKNOWN;
  switch (t) {
    case Fe.OK:
      return k.OK;
    case Fe.CANCELLED:
      return k.CANCELLED;
    case Fe.UNKNOWN:
      return k.UNKNOWN;
    case Fe.DEADLINE_EXCEEDED:
      return k.DEADLINE_EXCEEDED;
    case Fe.RESOURCE_EXHAUSTED:
      return k.RESOURCE_EXHAUSTED;
    case Fe.INTERNAL:
      return k.INTERNAL;
    case Fe.UNAVAILABLE:
      return k.UNAVAILABLE;
    case Fe.UNAUTHENTICATED:
      return k.UNAUTHENTICATED;
    case Fe.INVALID_ARGUMENT:
      return k.INVALID_ARGUMENT;
    case Fe.NOT_FOUND:
      return k.NOT_FOUND;
    case Fe.ALREADY_EXISTS:
      return k.ALREADY_EXISTS;
    case Fe.PERMISSION_DENIED:
      return k.PERMISSION_DENIED;
    case Fe.FAILED_PRECONDITION:
      return k.FAILED_PRECONDITION;
    case Fe.ABORTED:
      return k.ABORTED;
    case Fe.OUT_OF_RANGE:
      return k.OUT_OF_RANGE;
    case Fe.UNIMPLEMENTED:
      return k.UNIMPLEMENTED;
    case Fe.DATA_LOSS:
      return k.DATA_LOSS;
    default:
      return Q();
  }
}
((ie = Fe || (Fe = {}))[(ie.OK = 0)] = "OK"),
  (ie[(ie.CANCELLED = 1)] = "CANCELLED"),
  (ie[(ie.UNKNOWN = 2)] = "UNKNOWN"),
  (ie[(ie.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (ie[(ie.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (ie[(ie.NOT_FOUND = 5)] = "NOT_FOUND"),
  (ie[(ie.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (ie[(ie.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (ie[(ie.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (ie[(ie.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (ie[(ie.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (ie[(ie.ABORTED = 10)] = "ABORTED"),
  (ie[(ie.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (ie[(ie.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (ie[(ie.INTERNAL = 13)] = "INTERNAL"),
  (ie[(ie.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (ie[(ie.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mk() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fk = new Ji([4294967295, 4294967295], 0);
function _y(t) {
  const e = Mk().encode(t),
    n = new Fx();
  return n.update(e), new Uint8Array(n.digest());
}
function wy(t) {
  const e = new DataView(t.buffer),
    n = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    i = e.getUint32(8, !0),
    s = e.getUint32(12, !0);
  return [new Ji([n, r], 0), new Ji([i, s], 0)];
}
class Sp {
  constructor(e, n, r) {
    if (
      ((this.bitmap = e),
      (this.padding = n),
      (this.hashCount = r),
      n < 0 || n >= 8)
    )
      throw new Zs(`Invalid padding: ${n}`);
    if (r < 0) throw new Zs(`Invalid hash count: ${r}`);
    if (e.length > 0 && this.hashCount === 0)
      throw new Zs(`Invalid hash count: ${r}`);
    if (e.length === 0 && n !== 0)
      throw new Zs(`Invalid padding when bitmap length is 0: ${n}`);
    (this.Te = 8 * e.length - n), (this.Ee = Ji.fromNumber(this.Te));
  }
  de(e, n, r) {
    let i = e.add(n.multiply(Ji.fromNumber(r)));
    return (
      i.compare(Fk) === 1 && (i = new Ji([i.getBits(0), i.getBits(1)], 0)),
      i.modulo(this.Ee).toNumber()
    );
  }
  Ae(e) {
    return (this.bitmap[Math.floor(e / 8)] & (1 << e % 8)) != 0;
  }
  mightContain(e) {
    if (this.Te === 0) return !1;
    const n = _y(e),
      [r, i] = wy(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.de(r, i, s);
      if (!this.Ae(o)) return !1;
    }
    return !0;
  }
  static create(e, n, r) {
    const i = e % 8 == 0 ? 0 : 8 - (e % 8),
      s = new Uint8Array(Math.ceil(e / 8)),
      o = new Sp(s, i, n);
    return r.forEach((a) => o.insert(a)), o;
  }
  insert(e) {
    if (this.Te === 0) return;
    const n = _y(e),
      [r, i] = wy(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.de(r, i, s);
      this.Re(o);
    }
  }
  Re(e) {
    const n = Math.floor(e / 8),
      r = e % 8;
    this.bitmap[n] |= 1 << r;
  }
}
class Zs extends Error {
  constructor() {
    super(...arguments), (this.name = "BloomFilterError");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gu {
  constructor(e, n, r, i, s) {
    (this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = s);
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map();
    return (
      i.set(e, _a.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new Gu(X.min(), i, new Ce(ue), Qn(), te())
    );
  }
}
class _a {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new _a(r, n, te(), te(), te());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gl {
  constructor(e, n, r, i) {
    (this.Ve = e), (this.removedTargetIds = n), (this.key = r), (this.me = i);
  }
}
class PE {
  constructor(e, n) {
    (this.targetId = e), (this.fe = n);
  }
}
class xE {
  constructor(e, n, r = vt.EMPTY_BYTE_STRING, i = null) {
    (this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i);
  }
}
class Ey {
  constructor() {
    (this.ge = 0),
      (this.pe = Ry()),
      (this.ye = vt.EMPTY_BYTE_STRING),
      (this.we = !1),
      (this.Se = !0);
  }
  get current() {
    return this.we;
  }
  get resumeToken() {
    return this.ye;
  }
  get be() {
    return this.ge !== 0;
  }
  get De() {
    return this.Se;
  }
  Ce(e) {
    e.approximateByteSize() > 0 && ((this.Se = !0), (this.ye = e));
  }
  ve() {
    let e = te(),
      n = te(),
      r = te();
    return (
      this.pe.forEach((i, s) => {
        switch (s) {
          case 0:
            e = e.add(i);
            break;
          case 2:
            n = n.add(i);
            break;
          case 1:
            r = r.add(i);
            break;
          default:
            Q();
        }
      }),
      new _a(this.ye, this.we, e, n, r)
    );
  }
  Fe() {
    (this.Se = !1), (this.pe = Ry());
  }
  Me(e, n) {
    (this.Se = !0), (this.pe = this.pe.insert(e, n));
  }
  xe(e) {
    (this.Se = !0), (this.pe = this.pe.remove(e));
  }
  Oe() {
    this.ge += 1;
  }
  Ne() {
    (this.ge -= 1), me(this.ge >= 0);
  }
  Be() {
    (this.Se = !0), (this.we = !0);
  }
}
class jk {
  constructor(e) {
    (this.Le = e),
      (this.ke = new Map()),
      (this.qe = Qn()),
      (this.Qe = Ty()),
      (this.Ke = new Ce(ue));
  }
  $e(e) {
    for (const n of e.Ve)
      e.me && e.me.isFoundDocument()
        ? this.Ue(n, e.me)
        : this.We(n, e.key, e.me);
    for (const n of e.removedTargetIds) this.We(n, e.key, e.me);
  }
  Ge(e) {
    this.forEachTarget(e, (n) => {
      const r = this.ze(n);
      switch (e.state) {
        case 0:
          this.je(n) && r.Ce(e.resumeToken);
          break;
        case 1:
          r.Ne(), r.be || r.Fe(), r.Ce(e.resumeToken);
          break;
        case 2:
          r.Ne(), r.be || this.removeTarget(n);
          break;
        case 3:
          this.je(n) && (r.Be(), r.Ce(e.resumeToken));
          break;
        case 4:
          this.je(n) && (this.He(n), r.Ce(e.resumeToken));
          break;
        default:
          Q();
      }
    });
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.ke.forEach((r, i) => {
          this.je(i) && n(i);
        });
  }
  Je(e) {
    const n = e.targetId,
      r = e.fe.count,
      i = this.Ye(n);
    if (i) {
      const s = i.target;
      if (Sd(s))
        if (r === 0) {
          const o = new z(s.path);
          this.We(n, o, pt.newNoDocument(o, X.min()));
        } else me(r === 1);
      else {
        const o = this.Ze(n);
        if (o !== r) {
          const a = this.Xe(e),
            l = a ? this.et(a, e, o) : 1;
          if (l !== 0) {
            this.He(n);
            const u =
              l === 2
                ? "TargetPurposeExistenceFilterMismatchBloom"
                : "TargetPurposeExistenceFilterMismatch";
            this.Ke = this.Ke.insert(n, u);
          }
        }
      }
    }
  }
  Xe(e) {
    const n = e.fe.unchangedNames;
    if (!n || !n.bits) return null;
    const {
      bits: { bitmap: r = "", padding: i = 0 },
      hashCount: s = 0,
    } = n;
    let o, a;
    try {
      o = ci(r).toUint8Array();
    } catch (l) {
      if (l instanceof sE)
        return (
          cs(
            "Decoding the base64 bloom filter in existence filter failed (" +
              l.message +
              "); ignoring the bloom filter and falling back to full re-query."
          ),
          null
        );
      throw l;
    }
    try {
      a = new Sp(o, i, s);
    } catch (l) {
      return (
        cs(
          l instanceof Zs
            ? "BloomFilter error: "
            : "Applying bloom filter failed: ",
          l
        ),
        null
      );
    }
    return a.Te === 0 ? null : a;
  }
  et(e, n, r) {
    return n.fe.count === r - this.rt(e, n.targetId) ? 0 : 2;
  }
  rt(e, n) {
    const r = this.Le.getRemoteKeysForTarget(n);
    let i = 0;
    return (
      r.forEach((s) => {
        const o = this.Le.nt(),
          a = `projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;
        e.mightContain(a) || (this.We(n, s, null), i++);
      }),
      i
    );
  }
  it(e) {
    const n = new Map();
    this.ke.forEach((s, o) => {
      const a = this.Ye(o);
      if (a) {
        if (s.current && Sd(a.target)) {
          const l = new z(a.target.path);
          this.qe.get(l) !== null ||
            this.st(o, l) ||
            this.We(o, l, pt.newNoDocument(l, e));
        }
        s.De && (n.set(o, s.ve()), s.Fe());
      }
    });
    let r = te();
    this.Qe.forEach((s, o) => {
      let a = !0;
      o.forEachWhile((l) => {
        const u = this.Ye(l);
        return (
          !u || u.purpose === "TargetPurposeLimboResolution" || ((a = !1), !1)
        );
      }),
        a && (r = r.add(s));
    }),
      this.qe.forEach((s, o) => o.setReadTime(e));
    const i = new Gu(e, n, this.Ke, this.qe, r);
    return (this.qe = Qn()), (this.Qe = Ty()), (this.Ke = new Ce(ue)), i;
  }
  Ue(e, n) {
    if (!this.je(e)) return;
    const r = this.st(e, n.key) ? 2 : 0;
    this.ze(e).Me(n.key, r),
      (this.qe = this.qe.insert(n.key, n)),
      (this.Qe = this.Qe.insert(n.key, this.ot(n.key).add(e)));
  }
  We(e, n, r) {
    if (!this.je(e)) return;
    const i = this.ze(e);
    this.st(e, n) ? i.Me(n, 1) : i.xe(n),
      (this.Qe = this.Qe.insert(n, this.ot(n).delete(e))),
      r && (this.qe = this.qe.insert(n, r));
  }
  removeTarget(e) {
    this.ke.delete(e);
  }
  Ze(e) {
    const n = this.ze(e).ve();
    return (
      this.Le.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    );
  }
  Oe(e) {
    this.ze(e).Oe();
  }
  ze(e) {
    let n = this.ke.get(e);
    return n || ((n = new Ey()), this.ke.set(e, n)), n;
  }
  ot(e) {
    let n = this.Qe.get(e);
    return n || ((n = new at(ue)), (this.Qe = this.Qe.insert(e, n))), n;
  }
  je(e) {
    const n = this.Ye(e) !== null;
    return n || V("WatchChangeAggregator", "Detected inactive target", e), n;
  }
  Ye(e) {
    const n = this.ke.get(e);
    return n && n.be ? null : this.Le._t(e);
  }
  He(e) {
    this.ke.set(e, new Ey()),
      this.Le.getRemoteKeysForTarget(e).forEach((n) => {
        this.We(e, n, null);
      });
  }
  st(e, n) {
    return this.Le.getRemoteKeysForTarget(e).has(n);
  }
}
function Ty() {
  return new Ce(z.comparator);
}
function Ry() {
  return new Ce(z.comparator);
}
const Uk = { asc: "ASCENDING", desc: "DESCENDING" },
  bk = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  },
  $k = { and: "AND", or: "OR" };
class Bk {
  constructor(e, n) {
    (this.databaseId = e), (this.useProto3Json = n);
  }
}
function Ad(t, e) {
  return t.useProto3Json || zu(e) ? e : { value: e };
}
function su(t, e) {
  return t.useProto3Json
    ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function kE(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function zk(t, e) {
  return su(t, e.toTimestamp());
}
function xn(t) {
  return (
    me(!!t),
    X.fromTimestamp(
      (function (n) {
        const r = Pr(n);
        return new He(r.seconds, r.nanos);
      })(t)
    )
  );
}
function Ip(t, e) {
  return Cd(t, e).canonicalString();
}
function Cd(t, e) {
  const n = (function (i) {
    return new Re(["projects", i.projectId, "databases", i.database]);
  })(t).child("documents");
  return e === void 0 ? n : n.child(e);
}
function DE(t) {
  const e = Re.fromString(t);
  return me(ME(e)), e;
}
function Pd(t, e) {
  return Ip(t.databaseId, e.path);
}
function eh(t, e) {
  const n = DE(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new U(
      k.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new U(
      k.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database
    );
  return new z(LE(n));
}
function NE(t, e) {
  return Ip(t.databaseId, e);
}
function Hk(t) {
  const e = DE(t);
  return e.length === 4 ? Re.emptyPath() : LE(e);
}
function xd(t) {
  return new Re([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function LE(t) {
  return me(t.length > 4 && t.get(4) === "documents"), t.popFirst(5);
}
function Sy(t, e, n) {
  return { name: Pd(t, e), fields: n.value.mapValue.fields };
}
function Wk(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const r = (function (u) {
        return u === "NO_CHANGE"
          ? 0
          : u === "ADD"
            ? 1
            : u === "REMOVE"
              ? 2
              : u === "CURRENT"
                ? 3
                : u === "RESET"
                  ? 4
                  : Q();
      })(e.targetChange.targetChangeType || "NO_CHANGE"),
      i = e.targetChange.targetIds || [],
      s = (function (u, c) {
        return u.useProto3Json
          ? (me(c === void 0 || typeof c == "string"),
            vt.fromBase64String(c || ""))
          : (me(c === void 0 || c instanceof Uint8Array),
            vt.fromUint8Array(c || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (u) {
          const c = u.code === void 0 ? k.UNKNOWN : CE(u.code);
          return new U(c, u.message || "");
        })(o);
    n = new xE(r, i, s, a || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = eh(t, r.document.name),
      s = xn(r.document.updateTime),
      o = r.document.createTime ? xn(r.document.createTime) : X.min(),
      a = new Ct({ mapValue: { fields: r.document.fields } }),
      l = pt.newFoundDocument(i, s, o, a),
      u = r.targetIds || [],
      c = r.removedTargetIds || [];
    n = new gl(u, c, l.key, l);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = eh(t, r.document),
      s = r.readTime ? xn(r.readTime) : X.min(),
      o = pt.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new gl([], a, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = eh(t, r.document),
      s = r.removedTargetIds || [];
    n = new gl([], s, i, null);
  } else {
    if (!("filter" in e)) return Q();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const { count: i = 0, unchangedNames: s } = r,
        o = new Vk(i, s),
        a = r.targetId;
      n = new PE(a, o);
    }
  }
  return n;
}
function qk(t, e) {
  let n;
  if (e instanceof va) n = { update: Sy(t, e.key, e.value) };
  else if (e instanceof AE) n = { delete: Pd(t, e.key) };
  else if (e instanceof Or)
    n = { update: Sy(t, e.key, e.data), updateMask: tD(e.fieldMask) };
  else {
    if (!(e instanceof Dk)) return Q();
    n = { verify: Pd(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (s, o) {
          const a = o.transform;
          if (a instanceof ru)
            return {
              fieldPath: o.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (a instanceof Zo)
            return {
              fieldPath: o.field.canonicalString(),
              appendMissingElements: { values: a.elements },
            };
          if (a instanceof ea)
            return {
              fieldPath: o.field.canonicalString(),
              removeAllFromArray: { values: a.elements },
            };
          if (a instanceof iu)
            return { fieldPath: o.field.canonicalString(), increment: a.Ie };
          throw Q();
        })(0, r)
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (i, s) {
        return s.updateTime !== void 0
          ? { updateTime: zk(i, s.updateTime) }
          : s.exists !== void 0
            ? { exists: s.exists }
            : Q();
      })(t, e.precondition)),
    n
  );
}
function Qk(t, e) {
  return t && t.length > 0
    ? (me(e !== void 0),
      t.map((n) =>
        (function (i, s) {
          let o = i.updateTime ? xn(i.updateTime) : xn(s);
          return (
            o.isEqual(X.min()) && (o = xn(s)),
            new Pk(o, i.transformResults || [])
          );
        })(n, e)
      ))
    : [];
}
function Kk(t, e) {
  return { documents: [NE(t, e.path)] };
}
function Gk(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  let i;
  e.collectionGroup !== null
    ? ((i = r),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((i = r.popLast()),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (n.parent = NE(t, i));
  const s = (function (u) {
    if (u.length !== 0) return OE(Nn.create(u, "and"));
  })(e.filters);
  s && (n.structuredQuery.where = s);
  const o = (function (u) {
    if (u.length !== 0)
      return u.map((c) =>
        (function (d) {
          return { field: Pi(d.field), direction: Jk(d.dir) };
        })(c)
      );
  })(e.orderBy);
  o && (n.structuredQuery.orderBy = o);
  const a = Ad(t, e.limit);
  return (
    a !== null && (n.structuredQuery.limit = a),
    e.startAt &&
      (n.structuredQuery.startAt = (function (u) {
        return { before: u.inclusive, values: u.position };
      })(e.startAt)),
    e.endAt &&
      (n.structuredQuery.endAt = (function (u) {
        return { before: !u.inclusive, values: u.position };
      })(e.endAt)),
    { ut: n, parent: i }
  );
}
function Xk(t) {
  let e = Hk(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    me(r === 1);
    const c = n.from[0];
    c.allDescendants ? (i = c.collectionId) : (e = e.child(c.collectionId));
  }
  let s = [];
  n.where &&
    (s = (function (h) {
      const d = VE(h);
      return d instanceof Nn && uE(d) ? d.getFilters() : [d];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = (function (h) {
      return h.map((d) =>
        (function (_) {
          return new nu(
            xi(_.field),
            (function (E) {
              switch (E) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(_.direction)
          );
        })(d)
      );
    })(n.orderBy));
  let a = null;
  n.limit &&
    (a = (function (h) {
      let d;
      return (d = typeof h == "object" ? h.value : h), zu(d) ? null : d;
    })(n.limit));
  let l = null;
  n.startAt &&
    (l = (function (h) {
      const d = !!h.before,
        g = h.values || [];
      return new tu(g, d);
    })(n.startAt));
  let u = null;
  return (
    n.endAt &&
      (u = (function (h) {
        const d = !h.before,
          g = h.values || [];
        return new tu(g, d);
      })(n.endAt)),
    pk(e, i, o, s, a, "F", l, u)
  );
}
function Yk(t, e) {
  const n = (function (i) {
    switch (i) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return Q();
    }
  })(e.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function VE(t) {
  return t.unaryFilter !== void 0
    ? (function (n) {
        switch (n.unaryFilter.op) {
          case "IS_NAN":
            const r = xi(n.unaryFilter.field);
            return Be.create(r, "==", { doubleValue: NaN });
          case "IS_NULL":
            const i = xi(n.unaryFilter.field);
            return Be.create(i, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const s = xi(n.unaryFilter.field);
            return Be.create(s, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const o = xi(n.unaryFilter.field);
            return Be.create(o, "!=", { nullValue: "NULL_VALUE" });
          default:
            return Q();
        }
      })(t)
    : t.fieldFilter !== void 0
      ? (function (n) {
          return Be.create(
            xi(n.fieldFilter.field),
            (function (i) {
              switch (i) {
                case "EQUAL":
                  return "==";
                case "NOT_EQUAL":
                  return "!=";
                case "GREATER_THAN":
                  return ">";
                case "GREATER_THAN_OR_EQUAL":
                  return ">=";
                case "LESS_THAN":
                  return "<";
                case "LESS_THAN_OR_EQUAL":
                  return "<=";
                case "ARRAY_CONTAINS":
                  return "array-contains";
                case "IN":
                  return "in";
                case "NOT_IN":
                  return "not-in";
                case "ARRAY_CONTAINS_ANY":
                  return "array-contains-any";
                default:
                  return Q();
              }
            })(n.fieldFilter.op),
            n.fieldFilter.value
          );
        })(t)
      : t.compositeFilter !== void 0
        ? (function (n) {
            return Nn.create(
              n.compositeFilter.filters.map((r) => VE(r)),
              (function (i) {
                switch (i) {
                  case "AND":
                    return "and";
                  case "OR":
                    return "or";
                  default:
                    return Q();
                }
              })(n.compositeFilter.op)
            );
          })(t)
        : Q();
}
function Jk(t) {
  return Uk[t];
}
function Zk(t) {
  return bk[t];
}
function eD(t) {
  return $k[t];
}
function Pi(t) {
  return { fieldPath: t.canonicalString() };
}
function xi(t) {
  return it.fromServerFormat(t.fieldPath);
}
function OE(t) {
  return t instanceof Be
    ? (function (n) {
        if (n.op === "==") {
          if (cy(n.value))
            return { unaryFilter: { field: Pi(n.field), op: "IS_NAN" } };
          if (uy(n.value))
            return { unaryFilter: { field: Pi(n.field), op: "IS_NULL" } };
        } else if (n.op === "!=") {
          if (cy(n.value))
            return { unaryFilter: { field: Pi(n.field), op: "IS_NOT_NAN" } };
          if (uy(n.value))
            return { unaryFilter: { field: Pi(n.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: Pi(n.field), op: Zk(n.op), value: n.value },
        };
      })(t)
    : t instanceof Nn
      ? (function (n) {
          const r = n.getFilters().map((i) => OE(i));
          return r.length === 1
            ? r[0]
            : { compositeFilter: { op: eD(n.op), filters: r } };
        })(t)
      : Q();
}
function tD(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())), { fieldPaths: e }
  );
}
function ME(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dr {
  constructor(
    e,
    n,
    r,
    i,
    s = X.min(),
    o = X.min(),
    a = vt.EMPTY_BYTE_STRING,
    l = null
  ) {
    (this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a),
      (this.expectedCount = l);
  }
  withSequenceNumber(e) {
    return new dr(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    );
  }
  withResumeToken(e, n) {
    return new dr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e,
      null
    );
  }
  withExpectedCount(e) {
    return new dr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new dr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nD {
  constructor(e) {
    this.ct = e;
  }
}
function rD(t) {
  const e = Xk({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? Id(e, e.limit, "L") : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iD {
  constructor() {
    this._n = new sD();
  }
  addToCollectionParentIndex(e, n) {
    return this._n.add(n), P.resolve();
  }
  getCollectionParents(e, n) {
    return P.resolve(this._n.getEntries(n));
  }
  addFieldIndex(e, n) {
    return P.resolve();
  }
  deleteFieldIndex(e, n) {
    return P.resolve();
  }
  deleteAllFieldIndexes(e) {
    return P.resolve();
  }
  createTargetIndexes(e, n) {
    return P.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return P.resolve(null);
  }
  getIndexType(e, n) {
    return P.resolve(0);
  }
  getFieldIndexes(e, n) {
    return P.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return P.resolve(null);
  }
  getMinOffset(e, n) {
    return P.resolve(Cr.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return P.resolve(Cr.min());
  }
  updateCollectionGroup(e, n, r) {
    return P.resolve();
  }
  updateIndexEntries(e, n) {
    return P.resolve();
  }
}
class sD {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new at(Re.comparator),
      s = !i.has(r);
    return (this.index[n] = i.add(r)), s;
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n];
    return i && i.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new at(Re.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ps {
  constructor(e) {
    this.On = e;
  }
  next() {
    return (this.On += 2), this.On;
  }
  static Nn() {
    return new ps(0);
  }
  static Bn() {
    return new ps(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oD {
  constructor() {
    (this.changes = new Ss(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1);
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  removeEntry(e, n) {
    this.assertNotApplied(),
      this.changes.set(e, pt.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? P.resolve(r) : this.getFromCache(e, n);
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n);
  }
  apply(e) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aD {
  constructor(e, n) {
    (this.overlayedDocument = e), (this.mutatedFields = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lD {
  constructor(e, n, r, i) {
    (this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i);
  }
  getDocument(e, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(e, n)))
      .next((i) => (r !== null && vo(r.mutation, i, Ut.empty(), He.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, te()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = te()) {
    const i = Xr();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = Js();
        return (
          s.forEach((a, l) => {
            o = o.insert(a, l.overlayedDocument);
          }),
          o
        );
      })
    );
  }
  getOverlayedDocuments(e, n) {
    const r = Xr();
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, te())
    );
  }
  populateOverlays(e, n, r) {
    const i = [];
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s);
      }),
      this.documentOverlayCache.getOverlays(e, i).next((s) => {
        s.forEach((o, a) => {
          n.set(o, a);
        });
      })
    );
  }
  computeViews(e, n, r, i) {
    let s = Qn();
    const o = yo(),
      a = (function () {
        return yo();
      })();
    return (
      n.forEach((l, u) => {
        const c = r.get(u.key);
        i.has(u.key) && (c === void 0 || c.mutation instanceof Or)
          ? (s = s.insert(u.key, u))
          : c !== void 0
            ? (o.set(u.key, c.mutation.getFieldMask()),
              vo(c.mutation, u, c.mutation.getFieldMask(), He.now()))
            : o.set(u.key, Ut.empty());
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (l) => (
          l.forEach((u, c) => o.set(u, c)),
          n.forEach((u, c) => {
            var h;
            return a.set(
              u,
              new aD(c, (h = o.get(u)) !== null && h !== void 0 ? h : null)
            );
          }),
          a
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = yo();
    let i = new Ce((o, a) => o - a),
      s = te();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((l) => {
            const u = n.get(l);
            if (u === null) return;
            let c = r.get(l) || Ut.empty();
            (c = a.applyToLocalView(u, c)), r.set(l, c);
            const h = (i.get(a.batchId) || te()).add(l);
            i = i.insert(a.batchId, h);
          });
      })
      .next(() => {
        const o = [],
          a = i.getReverseIterator();
        for (; a.hasNext(); ) {
          const l = a.getNext(),
            u = l.key,
            c = l.value,
            h = yE();
          c.forEach((d) => {
            if (!s.has(d)) {
              const g = SE(n.get(d), r.get(d));
              g !== null && h.set(d, g), (s = s.add(d));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, u, h));
        }
        return P.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return (function (o) {
      return (
        z.isDocumentKey(o.path) &&
        o.collectionGroup === null &&
        o.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : mk(n)
        ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r, i)
        : this.getDocumentsMatchingCollectionQuery(e, n, r, i);
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, i)
      .next((s) => {
        const o =
          i - s.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                i - s.size
              )
            : P.resolve(Xr());
        let a = -1,
          l = s;
        return o.next((u) =>
          P.forEach(
            u,
            (c, h) => (
              a < h.largestBatchId && (a = h.largestBatchId),
              s.get(c)
                ? P.resolve()
                : this.remoteDocumentCache.getEntry(e, c).next((d) => {
                    l = l.insert(c, d);
                  })
            )
          )
            .next(() => this.populateOverlays(e, u, s))
            .next(() => this.computeViews(e, l, u, te()))
            .next((c) => ({ batchId: a, changes: gE(c) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new z(n)).next((r) => {
      let i = Js();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r, i) {
    const s = n.collectionGroup;
    let o = Js();
    return this.indexManager.getCollectionParents(e, s).next((a) =>
      P.forEach(a, (l) => {
        const u = (function (h, d) {
          return new Hu(
            d,
            null,
            h.explicitOrderBy.slice(),
            h.filters.slice(),
            h.limit,
            h.limitType,
            h.startAt,
            h.endAt
          );
        })(n, l.child(s));
        return this.getDocumentsMatchingCollectionQuery(e, u, r, i).next(
          (c) => {
            c.forEach((h, d) => {
              o = o.insert(h, d);
            });
          }
        );
      }).next(() => o)
    );
  }
  getDocumentsMatchingCollectionQuery(e, n, r, i) {
    let s;
    return this.documentOverlayCache
      .getOverlaysForCollection(e, n.path, r.largestBatchId)
      .next(
        (o) => (
          (s = o),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, s, i)
        )
      )
      .next((o) => {
        s.forEach((l, u) => {
          const c = u.getKey();
          o.get(c) === null && (o = o.insert(c, pt.newInvalidDocument(c)));
        });
        let a = Js();
        return (
          o.forEach((l, u) => {
            const c = s.get(l);
            c !== void 0 && vo(c.mutation, u, Ut.empty(), He.now()),
              qu(n, u) && (a = a.insert(l, u));
          }),
          a
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uD {
  constructor(e) {
    (this.serializer = e), (this.cr = new Map()), (this.lr = new Map());
  }
  getBundleMetadata(e, n) {
    return P.resolve(this.cr.get(n));
  }
  saveBundleMetadata(e, n) {
    return (
      this.cr.set(
        n.id,
        (function (i) {
          return { id: i.id, version: i.version, createTime: xn(i.createTime) };
        })(n)
      ),
      P.resolve()
    );
  }
  getNamedQuery(e, n) {
    return P.resolve(this.lr.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.lr.set(
        n.name,
        (function (i) {
          return {
            name: i.name,
            query: rD(i.bundledQuery),
            readTime: xn(i.readTime),
          };
        })(n)
      ),
      P.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cD {
  constructor() {
    (this.overlays = new Ce(z.comparator)), (this.hr = new Map());
  }
  getOverlay(e, n) {
    return P.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = Xr();
    return P.forEach(n, (i) =>
      this.getOverlay(e, i).next((s) => {
        s !== null && r.set(i, s);
      })
    ).next(() => r);
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, s) => {
        this.ht(e, n, s);
      }),
      P.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.hr.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.hr.delete(r)),
      P.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = Xr(),
      s = n.length + 1,
      o = new z(n.child("")),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const l = a.getNext().value,
        u = l.getKey();
      if (!n.isPrefixOf(u.path)) break;
      u.path.length === s && l.largestBatchId > r && i.set(l.getKey(), l);
    }
    return P.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new Ce((u, c) => u - c);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const u = o.getNext().value;
      if (u.getKey().getCollectionGroup() === n && u.largestBatchId > r) {
        let c = s.get(u.largestBatchId);
        c === null && ((c = Xr()), (s = s.insert(u.largestBatchId, c))),
          c.set(u.getKey(), u);
      }
    }
    const a = Xr(),
      l = s.getIterator();
    for (
      ;
      l.hasNext() &&
      (l.getNext().value.forEach((u, c) => a.set(u, c)), !(a.size() >= i));

    );
    return P.resolve(a);
  }
  ht(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.hr.get(i.largestBatchId).delete(r.key);
      this.hr.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new Lk(n, r));
    let s = this.hr.get(n);
    s === void 0 && ((s = te()), this.hr.set(n, s)),
      this.hr.set(n, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ap {
  constructor() {
    (this.Pr = new at(Qe.Ir)), (this.Tr = new at(Qe.Er));
  }
  isEmpty() {
    return this.Pr.isEmpty();
  }
  addReference(e, n) {
    const r = new Qe(e, n);
    (this.Pr = this.Pr.add(r)), (this.Tr = this.Tr.add(r));
  }
  dr(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.Ar(new Qe(e, n));
  }
  Rr(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  Vr(e) {
    const n = new z(new Re([])),
      r = new Qe(n, e),
      i = new Qe(n, e + 1),
      s = [];
    return (
      this.Tr.forEachInRange([r, i], (o) => {
        this.Ar(o), s.push(o.key);
      }),
      s
    );
  }
  mr() {
    this.Pr.forEach((e) => this.Ar(e));
  }
  Ar(e) {
    (this.Pr = this.Pr.delete(e)), (this.Tr = this.Tr.delete(e));
  }
  gr(e) {
    const n = new z(new Re([])),
      r = new Qe(n, e),
      i = new Qe(n, e + 1);
    let s = te();
    return (
      this.Tr.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(e) {
    const n = new Qe(e, 0),
      r = this.Pr.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class Qe {
  constructor(e, n) {
    (this.key = e), (this.pr = n);
  }
  static Ir(e, n) {
    return z.comparator(e.key, n.key) || ue(e.pr, n.pr);
  }
  static Er(e, n) {
    return ue(e.pr, n.pr) || z.comparator(e.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hD {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.yr = 1),
      (this.wr = new at(Qe.Ir));
  }
  checkEmpty(e) {
    return P.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.yr;
    this.yr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new Nk(s, n, r, i);
    this.mutationQueue.push(o);
    for (const a of i)
      (this.wr = this.wr.add(new Qe(a.key, s))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    return P.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return P.resolve(this.Sr(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.br(r),
      s = i < 0 ? 0 : i;
    return P.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return P.resolve(this.mutationQueue.length === 0 ? -1 : this.yr - 1);
  }
  getAllMutationBatches(e) {
    return P.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new Qe(n, 0),
      i = new Qe(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.wr.forEachInRange([r, i], (o) => {
        const a = this.Sr(o.pr);
        s.push(a);
      }),
      P.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new at(ue);
    return (
      n.forEach((i) => {
        const s = new Qe(i, 0),
          o = new Qe(i, Number.POSITIVE_INFINITY);
        this.wr.forEachInRange([s, o], (a) => {
          r = r.add(a.pr);
        });
      }),
      P.resolve(this.Dr(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    z.isDocumentKey(s) || (s = s.child(""));
    const o = new Qe(new z(s), 0);
    let a = new at(ue);
    return (
      this.wr.forEachWhile((l) => {
        const u = l.key.path;
        return !!r.isPrefixOf(u) && (u.length === i && (a = a.add(l.pr)), !0);
      }, o),
      P.resolve(this.Dr(a))
    );
  }
  Dr(e) {
    const n = [];
    return (
      e.forEach((r) => {
        const i = this.Sr(r);
        i !== null && n.push(i);
      }),
      n
    );
  }
  removeMutationBatch(e, n) {
    me(this.Cr(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.wr;
    return P.forEach(n.mutations, (i) => {
      const s = new Qe(i.key, n.batchId);
      return (
        (r = r.delete(s)),
        this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
      );
    }).next(() => {
      this.wr = r;
    });
  }
  Mn(e) {}
  containsKey(e, n) {
    const r = new Qe(n, 0),
      i = this.wr.firstAfterOrEqual(r);
    return P.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, P.resolve();
  }
  Cr(e, n) {
    return this.br(e);
  }
  br(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  Sr(e) {
    const n = this.br(e);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dD {
  constructor(e) {
    (this.vr = e),
      (this.docs = (function () {
        return new Ce(z.comparator);
      })()),
      (this.size = 0);
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.vr(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    );
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size));
  }
  getEntry(e, n) {
    const r = this.docs.get(n);
    return P.resolve(r ? r.document.mutableCopy() : pt.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = Qn();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(
          i,
          s ? s.document.mutableCopy() : pt.newInvalidDocument(i)
        );
      }),
      P.resolve(r)
    );
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let s = Qn();
    const o = n.path,
      a = new z(o.child("")),
      l = this.docs.getIteratorFrom(a);
    for (; l.hasNext(); ) {
      const {
        key: u,
        value: { document: c },
      } = l.getNext();
      if (!o.isPrefixOf(u.path)) break;
      u.path.length > o.length + 1 ||
        Gx(Kx(c), r) <= 0 ||
        ((i.has(c.key) || qu(n, c)) && (s = s.insert(c.key, c.mutableCopy())));
    }
    return P.resolve(s);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    Q();
  }
  Fr(e, n) {
    return P.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new fD(this);
  }
  getSize(e) {
    return P.resolve(this.size);
  }
}
class fD extends oD {
  constructor(e) {
    super(), (this.ar = e);
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.ar.addEntry(e, i))
          : this.ar.removeEntry(r);
      }),
      P.waitFor(n)
    );
  }
  getFromCache(e, n) {
    return this.ar.getEntry(e, n);
  }
  getAllFromCache(e, n) {
    return this.ar.getEntries(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pD {
  constructor(e) {
    (this.persistence = e),
      (this.Mr = new Ss((n) => wp(n), Ep)),
      (this.lastRemoteSnapshotVersion = X.min()),
      (this.highestTargetId = 0),
      (this.Or = 0),
      (this.Nr = new Ap()),
      (this.targetCount = 0),
      (this.Br = ps.Nn());
  }
  forEachTarget(e, n) {
    return this.Mr.forEach((r, i) => n(i)), P.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return P.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return P.resolve(this.Or);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.Br.next()), P.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.Or && (this.Or = n),
      P.resolve()
    );
  }
  qn(e) {
    this.Mr.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId &&
      ((this.Br = new ps(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.Or && (this.Or = e.sequenceNumber);
  }
  addTargetData(e, n) {
    return this.qn(n), (this.targetCount += 1), P.resolve();
  }
  updateTargetData(e, n) {
    return this.qn(n), P.resolve();
  }
  removeTargetData(e, n) {
    return (
      this.Mr.delete(n.target),
      this.Nr.Vr(n.targetId),
      (this.targetCount -= 1),
      P.resolve()
    );
  }
  removeTargets(e, n, r) {
    let i = 0;
    const s = [];
    return (
      this.Mr.forEach((o, a) => {
        a.sequenceNumber <= n &&
          r.get(a.targetId) === null &&
          (this.Mr.delete(o),
          s.push(this.removeMatchingKeysForTargetId(e, a.targetId)),
          i++);
      }),
      P.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return P.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.Mr.get(n) || null;
    return P.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return this.Nr.dr(n, r), P.resolve();
  }
  removeMatchingKeys(e, n, r) {
    this.Nr.Rr(n, r);
    const i = this.persistence.referenceDelegate,
      s = [];
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(e, o));
        }),
      P.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Nr.Vr(n), P.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Nr.gr(n);
    return P.resolve(r);
  }
  containsKey(e, n) {
    return P.resolve(this.Nr.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mD {
  constructor(e, n) {
    (this.Lr = {}),
      (this.overlays = {}),
      (this.kr = new gp(0)),
      (this.qr = !1),
      (this.qr = !0),
      (this.referenceDelegate = e(this)),
      (this.Qr = new pD(this)),
      (this.indexManager = new iD()),
      (this.remoteDocumentCache = (function (i) {
        return new dD(i);
      })((r) => this.referenceDelegate.Kr(r))),
      (this.serializer = new nD(n)),
      (this.$r = new uD(this.serializer));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.qr = !1), Promise.resolve();
  }
  get started() {
    return this.qr;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return n || ((n = new cD()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.Lr[e.toKey()];
    return (
      r || ((r = new hD(n, this.referenceDelegate)), (this.Lr[e.toKey()] = r)),
      r
    );
  }
  getTargetCache() {
    return this.Qr;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.$r;
  }
  runTransaction(e, n, r) {
    V("MemoryPersistence", "Starting transaction:", e);
    const i = new gD(this.kr.next());
    return (
      this.referenceDelegate.Ur(),
      r(i)
        .next((s) => this.referenceDelegate.Wr(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  Gr(e, n) {
    return P.or(Object.values(this.Lr).map((r) => () => r.containsKey(e, n)));
  }
}
class gD extends Yx {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class Cp {
  constructor(e) {
    (this.persistence = e), (this.zr = new Ap()), (this.jr = null);
  }
  static Hr(e) {
    return new Cp(e);
  }
  get Jr() {
    if (this.jr) return this.jr;
    throw Q();
  }
  addReference(e, n, r) {
    return (
      this.zr.addReference(r, n), this.Jr.delete(r.toString()), P.resolve()
    );
  }
  removeReference(e, n, r) {
    return (
      this.zr.removeReference(r, n), this.Jr.add(r.toString()), P.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return this.Jr.add(n.toString()), P.resolve();
  }
  removeTarget(e, n) {
    this.zr.Vr(n.targetId).forEach((i) => this.Jr.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((s) => this.Jr.add(s.toString()));
      })
      .next(() => r.removeTargetData(e, n));
  }
  Ur() {
    this.jr = new Set();
  }
  Wr(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return P.forEach(this.Jr, (r) => {
      const i = z.fromPath(r);
      return this.Yr(e, i).next((s) => {
        s || n.removeEntry(i, X.min());
      });
    }).next(() => ((this.jr = null), n.apply(e)));
  }
  updateLimboDocument(e, n) {
    return this.Yr(e, n).next((r) => {
      r ? this.Jr.delete(n.toString()) : this.Jr.add(n.toString());
    });
  }
  Kr(e) {
    return 0;
  }
  Yr(e, n) {
    return P.or([
      () => P.resolve(this.zr.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Gr(e, n),
    ]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pp {
  constructor(e, n, r, i) {
    (this.targetId = e), (this.fromCache = n), (this.qi = r), (this.Qi = i);
  }
  static Ki(e, n) {
    let r = te(),
      i = te();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new Pp(e, n.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yD {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vD {
  constructor() {
    (this.$i = !1),
      (this.Ui = !1),
      (this.Wi = 100),
      (this.Gi = (function () {
        return lA() ? 8 : Gr.v(ql()) > 0 ? 6 : 4;
      })());
  }
  initialize(e, n) {
    (this.zi = e), (this.indexManager = n), (this.$i = !0);
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    const s = { result: null };
    return this.ji(e, n)
      .next((o) => {
        s.result = o;
      })
      .next(() => {
        if (!s.result)
          return this.Hi(e, n, i, r).next((o) => {
            s.result = o;
          });
      })
      .next(() => {
        if (s.result) return;
        const o = new yD();
        return this.Ji(e, n, o).next((a) => {
          if (((s.result = a), this.Ui)) return this.Yi(e, n, o, a.size);
        });
      })
      .next(() => s.result);
  }
  Yi(e, n, r, i) {
    return r.documentReadCount < this.Wi
      ? (Ws() <= se.DEBUG &&
          V(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            Ci(n),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.Wi,
            "documents"
          ),
        P.resolve())
      : (Ws() <= se.DEBUG &&
          V(
            "QueryEngine",
            "Query:",
            Ci(n),
            "scans",
            r.documentReadCount,
            "local documents and returns",
            i,
            "documents as results."
          ),
        r.documentReadCount > this.Gi * i
          ? (Ws() <= se.DEBUG &&
              V(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                Ci(n),
                "as using cache indexes may help improve performance."
              ),
            this.indexManager.createTargetIndexes(e, Cn(n)))
          : P.resolve());
  }
  ji(e, n) {
    if (py(n)) return P.resolve(null);
    let r = Cn(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = Id(n, null, "F")), (r = Cn(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = te(...s);
            return this.zi.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((l) => {
                const u = this.Zi(n, a);
                return this.Xi(n, u, o, l.readTime)
                  ? this.ji(e, Id(n, null, "F"))
                  : this.es(e, u, n, l);
              })
            );
          }))
    );
  }
  Hi(e, n, r, i) {
    return py(n) || i.isEqual(X.min())
      ? P.resolve(null)
      : this.zi.getDocuments(e, r).next((s) => {
          const o = this.Zi(n, s);
          return this.Xi(n, o, r, i)
            ? P.resolve(null)
            : (Ws() <= se.DEBUG &&
                V(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  i.toString(),
                  Ci(n)
                ),
              this.es(e, o, n, Qx(i, -1)).next((a) => a));
        });
  }
  Zi(e, n) {
    let r = new at(pE(e));
    return (
      n.forEach((i, s) => {
        qu(e, s) && (r = r.add(s));
      }),
      r
    );
  }
  Xi(e, n, r, i) {
    if (e.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const s = e.limitType === "F" ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Ji(e, n, r) {
    return (
      Ws() <= se.DEBUG &&
        V("QueryEngine", "Using full collection scan to execute query:", Ci(n)),
      this.zi.getDocumentsMatchingQuery(e, n, Cr.min(), r)
    );
  }
  es(e, n, r, i) {
    return this.zi.getDocumentsMatchingQuery(e, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o);
        }),
        s
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _D {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.ts = n),
      (this.serializer = i),
      (this.ns = new Ce(ue)),
      (this.rs = new Ss((s) => wp(s), Ep)),
      (this.ss = new Map()),
      (this.os = e.getRemoteDocumentCache()),
      (this.Qr = e.getTargetCache()),
      (this.$r = e.getBundleCache()),
      this._s(r);
  }
  _s(e) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new lD(
        this.os,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.os.setIndexManager(this.indexManager),
      this.ts.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => e.collect(n, this.ns)
    );
  }
}
function wD(t, e, n, r) {
  return new _D(t, e, n, r);
}
async function FE(t, e) {
  const n = Y(t);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let i;
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (s) => ((i = s), n._s(e), n.mutationQueue.getAllMutationBatches(r))
        )
        .next((s) => {
          const o = [],
            a = [];
          let l = te();
          for (const u of i) {
            o.push(u.batchId);
            for (const c of u.mutations) l = l.add(c.key);
          }
          for (const u of s) {
            a.push(u.batchId);
            for (const c of u.mutations) l = l.add(c.key);
          }
          return n.localDocuments
            .getDocuments(r, l)
            .next((u) => ({ us: u, removedBatchIds: o, addedBatchIds: a }));
        });
    }
  );
}
function ED(t, e) {
  const n = Y(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const i = e.batch.keys(),
        s = n.os.newChangeBuffer({ trackRemovals: !0 });
      return (function (a, l, u, c) {
        const h = u.batch,
          d = h.keys();
        let g = P.resolve();
        return (
          d.forEach((_) => {
            g = g
              .next(() => c.getEntry(l, _))
              .next((w) => {
                const E = u.docVersions.get(_);
                me(E !== null),
                  w.version.compareTo(E) < 0 &&
                    (h.applyToRemoteDocument(w, u),
                    w.isValidDocument() &&
                      (w.setReadTime(u.commitVersion), c.addEntry(w)));
              });
          }),
          g.next(() => a.mutationQueue.removeMutationBatch(l, h))
        );
      })(n, r, e, s)
        .next(() => s.apply(r))
        .next(() => n.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId)
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (a) {
              let l = te();
              for (let u = 0; u < a.mutationResults.length; ++u)
                a.mutationResults[u].transformResults.length > 0 &&
                  (l = l.add(a.batch.mutations[u].key));
              return l;
            })(e)
          )
        )
        .next(() => n.localDocuments.getDocuments(r, i));
    }
  );
}
function jE(t) {
  const e = Y(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.Qr.getLastRemoteSnapshotVersion(n)
  );
}
function TD(t, e) {
  const n = Y(t),
    r = e.snapshotVersion;
  let i = n.ns;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (s) => {
      const o = n.os.newChangeBuffer({ trackRemovals: !0 });
      i = n.ns;
      const a = [];
      e.targetChanges.forEach((c, h) => {
        const d = i.get(h);
        if (!d) return;
        a.push(
          n.Qr.removeMatchingKeys(s, c.removedDocuments, h).next(() =>
            n.Qr.addMatchingKeys(s, c.addedDocuments, h)
          )
        );
        let g = d.withSequenceNumber(s.currentSequenceNumber);
        e.targetMismatches.get(h) !== null
          ? (g = g
              .withResumeToken(vt.EMPTY_BYTE_STRING, X.min())
              .withLastLimboFreeSnapshotVersion(X.min()))
          : c.resumeToken.approximateByteSize() > 0 &&
            (g = g.withResumeToken(c.resumeToken, r)),
          (i = i.insert(h, g)),
          (function (w, E, p) {
            return w.resumeToken.approximateByteSize() === 0 ||
              E.snapshotVersion.toMicroseconds() -
                w.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : p.addedDocuments.size +
                  p.modifiedDocuments.size +
                  p.removedDocuments.size >
                  0;
          })(d, g, c) && a.push(n.Qr.updateTargetData(s, g));
      });
      let l = Qn(),
        u = te();
      if (
        (e.documentUpdates.forEach((c) => {
          e.resolvedLimboDocuments.has(c) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, c));
        }),
        a.push(
          RD(s, o, e.documentUpdates).next((c) => {
            (l = c.cs), (u = c.ls);
          })
        ),
        !r.isEqual(X.min()))
      ) {
        const c = n.Qr.getLastRemoteSnapshotVersion(s).next((h) =>
          n.Qr.setTargetsMetadata(s, s.currentSequenceNumber, r)
        );
        a.push(c);
      }
      return P.waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, l, u))
        .next(() => l);
    })
    .then((s) => ((n.ns = i), s));
}
function RD(t, e, n) {
  let r = te(),
    i = te();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = Qn();
      return (
        n.forEach((a, l) => {
          const u = s.get(a);
          l.isFoundDocument() !== u.isFoundDocument() && (i = i.add(a)),
            l.isNoDocument() && l.version.isEqual(X.min())
              ? (e.removeEntry(a, l.readTime), (o = o.insert(a, l)))
              : !u.isValidDocument() ||
                  l.version.compareTo(u.version) > 0 ||
                  (l.version.compareTo(u.version) === 0 && u.hasPendingWrites)
                ? (e.addEntry(l), (o = o.insert(a, l)))
                : V(
                    "LocalStore",
                    "Ignoring outdated watch update for ",
                    a,
                    ". Current version:",
                    u.version,
                    " Watch version:",
                    l.version
                  );
        }),
        { cs: o, ls: i }
      );
    })
  );
}
function SD(t, e) {
  const n = Y(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      e === void 0 && (e = -1),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    )
  );
}
function ID(t, e) {
  const n = Y(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let i;
      return n.Qr.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), P.resolve(i))
          : n.Qr.allocateTargetId(r).next(
              (o) => (
                (i = new dr(
                  e,
                  o,
                  "TargetPurposeListen",
                  r.currentSequenceNumber
                )),
                n.Qr.addTargetData(r, i).next(() => i)
              )
            )
      );
    })
    .then((r) => {
      const i = n.ns.get(r.targetId);
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.ns = n.ns.insert(r.targetId, r)), n.rs.set(e, r.targetId)),
        r
      );
    });
}
async function kd(t, e, n) {
  const r = Y(t),
    i = r.ns.get(e),
    s = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!ya(o)) throw o;
    V("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.ns = r.ns.remove(e)), r.rs.delete(i.target);
}
function Iy(t, e, n) {
  const r = Y(t);
  let i = X.min(),
    s = te();
  return r.persistence.runTransaction("Execute query", "readwrite", (o) =>
    (function (l, u, c) {
      const h = Y(l),
        d = h.rs.get(c);
      return d !== void 0 ? P.resolve(h.ns.get(d)) : h.Qr.getTargetData(u, c);
    })(r, o, Cn(e))
      .next((a) => {
        if (a)
          return (
            (i = a.lastLimboFreeSnapshotVersion),
            r.Qr.getMatchingKeysForTargetId(o, a.targetId).next((l) => {
              s = l;
            })
          );
      })
      .next(() =>
        r.ts.getDocumentsMatchingQuery(o, e, n ? i : X.min(), n ? s : te())
      )
      .next((a) => (AD(r, yk(e), a), { documents: a, hs: s }))
  );
}
function AD(t, e, n) {
  let r = t.ss.get(e) || X.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.ss.set(e, r);
}
class Ay {
  constructor() {
    this.activeTargetIds = Rk();
  }
  As(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  Rs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  ds() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class CD {
  constructor() {
    (this.no = new Ay()),
      (this.ro = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e) {
    return this.no.As(e), this.ro[e] || "not-current";
  }
  updateQueryState(e, n, r) {
    this.ro[e] = n;
  }
  removeLocalQueryTarget(e) {
    this.no.Rs(e);
  }
  isLocalQueryTarget(e) {
    return this.no.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.ro[e];
  }
  getAllActiveQueryTargets() {
    return this.no.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.no.activeTargetIds.has(e);
  }
  start() {
    return (this.no = new Ay()), Promise.resolve();
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PD {
  io(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cy {
  constructor() {
    (this.so = () => this.oo()),
      (this._o = () => this.ao()),
      (this.uo = []),
      this.co();
  }
  io(e) {
    this.uo.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this.so),
      window.removeEventListener("offline", this._o);
  }
  co() {
    window.addEventListener("online", this.so),
      window.addEventListener("offline", this._o);
  }
  oo() {
    V("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.uo) e(0);
  }
  ao() {
    V("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.uo) e(1);
  }
  static D() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let el = null;
function th() {
  return (
    el === null
      ? (el = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : el++,
    "0x" + el.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xD = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kD {
  constructor(e) {
    (this.lo = e.lo), (this.ho = e.ho);
  }
  Po(e) {
    this.Io = e;
  }
  To(e) {
    this.Eo = e;
  }
  onMessage(e) {
    this.Ao = e;
  }
  close() {
    this.ho();
  }
  send(e) {
    this.lo(e);
  }
  Ro() {
    this.Io();
  }
  Vo(e) {
    this.Eo(e);
  }
  mo(e) {
    this.Ao(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ht = "WebChannelConnection";
class DD extends class {
  constructor(n) {
    (this.databaseInfo = n), (this.databaseId = n.databaseId);
    const r = n.ssl ? "https" : "http",
      i = encodeURIComponent(this.databaseId.projectId),
      s = encodeURIComponent(this.databaseId.database);
    (this.fo = r + "://" + n.host),
      (this.po = `projects/${i}/databases/${s}`),
      (this.yo =
        this.databaseId.database === "(default)"
          ? `project_id=${i}`
          : `project_id=${i}&database_id=${s}`);
  }
  get wo() {
    return !1;
  }
  So(n, r, i, s, o) {
    const a = th(),
      l = this.bo(n, r.toUriEncodedString());
    V("RestConnection", `Sending RPC '${n}' ${a}:`, l, i);
    const u = {
      "google-cloud-resource-prefix": this.po,
      "x-goog-request-params": this.yo,
    };
    return (
      this.Do(u, s, o),
      this.Co(n, l, u, i).then(
        (c) => (V("RestConnection", `Received RPC '${n}' ${a}: `, c), c),
        (c) => {
          throw (
            (cs(
              "RestConnection",
              `RPC '${n}' ${a} failed with error: `,
              c,
              "url: ",
              l,
              "request:",
              i
            ),
            c)
          );
        }
      )
    );
  }
  vo(n, r, i, s, o, a) {
    return this.So(n, r, i, s, o);
  }
  Do(n, r, i) {
    (n["X-Goog-Api-Client"] = (function () {
      return "gl-js/ fire/" + Rs;
    })()),
      (n["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (n["X-Firebase-GMPID"] = this.databaseInfo.appId),
      r && r.headers.forEach((s, o) => (n[o] = s)),
      i && i.headers.forEach((s, o) => (n[o] = s));
  }
  bo(n, r) {
    const i = xD[n];
    return `${this.fo}/v1/${r}:${i}`;
  }
  terminate() {}
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions);
  }
  Co(e, n, r, i) {
    const s = th();
    return new Promise((o, a) => {
      const l = new Mx();
      l.setWithCredentials(!0),
        l.listenOnce(Vx.COMPLETE, () => {
          try {
            switch (l.getLastErrorCode()) {
              case Zc.NO_ERROR:
                const c = l.getResponseJson();
                V(ht, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(c)),
                  o(c);
                break;
              case Zc.TIMEOUT:
                V(ht, `RPC '${e}' ${s} timed out`),
                  a(new U(k.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case Zc.HTTP_ERROR:
                const h = l.getStatus();
                if (
                  (V(
                    ht,
                    `RPC '${e}' ${s} failed with status:`,
                    h,
                    "response text:",
                    l.getResponseText()
                  ),
                  h > 0)
                ) {
                  let d = l.getResponseJson();
                  Array.isArray(d) && (d = d[0]);
                  const g = d == null ? void 0 : d.error;
                  if (g && g.status && g.message) {
                    const _ = (function (E) {
                      const p = E.toLowerCase().replace(/_/g, "-");
                      return Object.values(k).indexOf(p) >= 0 ? p : k.UNKNOWN;
                    })(g.status);
                    a(new U(_, g.message));
                  } else
                    a(
                      new U(
                        k.UNKNOWN,
                        "Server responded with status " + l.getStatus()
                      )
                    );
                } else a(new U(k.UNAVAILABLE, "Connection failed."));
                break;
              default:
                Q();
            }
          } finally {
            V(ht, `RPC '${e}' ${s} completed.`);
          }
        });
      const u = JSON.stringify(i);
      V(ht, `RPC '${e}' ${s} sending request:`, i), l.send(n, "POST", u, r, 15);
    });
  }
  Fo(e, n, r) {
    const i = th(),
      s = [this.fo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
      o = Nx(),
      a = Lx(),
      l = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      u = this.longPollingOptions.timeoutSeconds;
    u !== void 0 && (l.longPollingTimeout = Math.round(1e3 * u)),
      this.useFetchStreams && (l.useFetchStreams = !0),
      this.Do(l.initMessageHeaders, n, r),
      (l.encodeInitMessageHeaders = !0);
    const c = s.join("");
    V(ht, `Creating RPC '${e}' stream ${i}: ${c}`, l);
    const h = o.createWebChannel(c, l);
    let d = !1,
      g = !1;
    const _ = new kD({
        lo: (E) => {
          g
            ? V(ht, `Not sending because RPC '${e}' stream ${i} is closed:`, E)
            : (d ||
                (V(ht, `Opening RPC '${e}' stream ${i} transport.`),
                h.open(),
                (d = !0)),
              V(ht, `RPC '${e}' stream ${i} sending:`, E),
              h.send(E));
        },
        ho: () => h.close(),
      }),
      w = (E, p, f) => {
        E.listen(p, (m) => {
          try {
            f(m);
          } catch (R) {
            setTimeout(() => {
              throw R;
            }, 0);
          }
        });
      };
    return (
      w(h, Ya.EventType.OPEN, () => {
        g || V(ht, `RPC '${e}' stream ${i} transport opened.`);
      }),
      w(h, Ya.EventType.CLOSE, () => {
        g ||
          ((g = !0), V(ht, `RPC '${e}' stream ${i} transport closed`), _.Vo());
      }),
      w(h, Ya.EventType.ERROR, (E) => {
        g ||
          ((g = !0),
          cs(ht, `RPC '${e}' stream ${i} transport errored:`, E),
          _.Vo(new U(k.UNAVAILABLE, "The operation could not be completed")));
      }),
      w(h, Ya.EventType.MESSAGE, (E) => {
        var p;
        if (!g) {
          const f = E.data[0];
          me(!!f);
          const m = f,
            R =
              m.error ||
              ((p = m[0]) === null || p === void 0 ? void 0 : p.error);
          if (R) {
            V(ht, `RPC '${e}' stream ${i} received error:`, R);
            const I = R.status;
            let y = (function (j) {
                const B = Fe[j];
                if (B !== void 0) return CE(B);
              })(I),
              C = R.message;
            y === void 0 &&
              ((y = k.INTERNAL),
              (C =
                "Unknown error status: " + I + " with message " + R.message)),
              (g = !0),
              _.Vo(new U(y, C)),
              h.close();
          } else V(ht, `RPC '${e}' stream ${i} received:`, f), _.mo(f);
        }
      }),
      w(a, Ox.STAT_EVENT, (E) => {
        E.stat === ry.PROXY
          ? V(ht, `RPC '${e}' stream ${i} detected buffering proxy`)
          : E.stat === ry.NOPROXY &&
            V(ht, `RPC '${e}' stream ${i} detected no buffering proxy`);
      }),
      setTimeout(() => {
        _.Ro();
      }, 0),
      _
    );
  }
}
function nh() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xu(t) {
  return new Bk(t, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UE {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.oi = e),
      (this.timerId = n),
      (this.Mo = r),
      (this.xo = i),
      (this.Oo = s),
      (this.No = 0),
      (this.Bo = null),
      (this.Lo = Date.now()),
      this.reset();
  }
  reset() {
    this.No = 0;
  }
  ko() {
    this.No = this.Oo;
  }
  qo(e) {
    this.cancel();
    const n = Math.floor(this.No + this.Qo()),
      r = Math.max(0, Date.now() - this.Lo),
      i = Math.max(0, n - r);
    i > 0 &&
      V(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.Bo = this.oi.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.Lo = Date.now()), e())
      )),
      (this.No *= this.xo),
      this.No < this.Mo && (this.No = this.Mo),
      this.No > this.Oo && (this.No = this.Oo);
  }
  Ko() {
    this.Bo !== null && (this.Bo.skipDelay(), (this.Bo = null));
  }
  cancel() {
    this.Bo !== null && (this.Bo.cancel(), (this.Bo = null));
  }
  Qo() {
    return (Math.random() - 0.5) * this.No;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bE {
  constructor(e, n, r, i, s, o, a, l) {
    (this.oi = e),
      (this.$o = r),
      (this.Uo = i),
      (this.connection = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = a),
      (this.listener = l),
      (this.state = 0),
      (this.Wo = 0),
      (this.Go = null),
      (this.zo = null),
      (this.stream = null),
      (this.jo = new UE(e, n));
  }
  Ho() {
    return this.state === 1 || this.state === 5 || this.Jo();
  }
  Jo() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    this.state !== 4 ? this.auth() : this.Yo();
  }
  async stop() {
    this.Ho() && (await this.close(0));
  }
  Zo() {
    (this.state = 0), this.jo.reset();
  }
  Xo() {
    this.Jo() &&
      this.Go === null &&
      (this.Go = this.oi.enqueueAfterDelay(this.$o, 6e4, () => this.e_()));
  }
  t_(e) {
    this.n_(), this.stream.send(e);
  }
  async e_() {
    if (this.Jo()) return this.close(0);
  }
  n_() {
    this.Go && (this.Go.cancel(), (this.Go = null));
  }
  r_() {
    this.zo && (this.zo.cancel(), (this.zo = null));
  }
  async close(e, n) {
    this.n_(),
      this.r_(),
      this.jo.cancel(),
      this.Wo++,
      e !== 4
        ? this.jo.reset()
        : n && n.code === k.RESOURCE_EXHAUSTED
          ? (kn(n.toString()),
            kn(
              "Using maximum backoff delay to prevent overloading the backend."
            ),
            this.jo.ko())
          : n &&
            n.code === k.UNAUTHENTICATED &&
            this.state !== 3 &&
            (this.authCredentialsProvider.invalidateToken(),
            this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.i_(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.To(n);
  }
  i_() {}
  auth() {
    this.state = 1;
    const e = this.s_(this.Wo),
      n = this.Wo;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.Wo === n && this.o_(r, i);
      },
      (r) => {
        e(() => {
          const i = new U(
            k.UNKNOWN,
            "Fetching auth token failed: " + r.message
          );
          return this.__(i);
        });
      }
    );
  }
  o_(e, n) {
    const r = this.s_(this.Wo);
    (this.stream = this.a_(e, n)),
      this.stream.Po(() => {
        r(
          () => (
            (this.state = 2),
            (this.zo = this.oi.enqueueAfterDelay(
              this.Uo,
              1e4,
              () => (this.Jo() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Po()
          )
        );
      }),
      this.stream.To((i) => {
        r(() => this.__(i));
      }),
      this.stream.onMessage((i) => {
        r(() => this.onMessage(i));
      });
  }
  Yo() {
    (this.state = 5),
      this.jo.qo(async () => {
        (this.state = 0), this.start();
      });
  }
  __(e) {
    return (
      V("PersistentStream", `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  s_(e) {
    return (n) => {
      this.oi.enqueueAndForget(() =>
        this.Wo === e
          ? n()
          : (V(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher."
            ),
            Promise.resolve())
      );
    };
  }
}
class ND extends bE {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o
    ),
      (this.serializer = s);
  }
  a_(e, n) {
    return this.connection.Fo("Listen", e, n);
  }
  onMessage(e) {
    this.jo.reset();
    const n = Wk(this.serializer, e),
      r = (function (s) {
        if (!("targetChange" in s)) return X.min();
        const o = s.targetChange;
        return o.targetIds && o.targetIds.length
          ? X.min()
          : o.readTime
            ? xn(o.readTime)
            : X.min();
      })(e);
    return this.listener.u_(n, r);
  }
  c_(e) {
    const n = {};
    (n.database = xd(this.serializer)),
      (n.addTarget = (function (s, o) {
        let a;
        const l = o.target;
        if (
          ((a = Sd(l) ? { documents: Kk(s, l) } : { query: Gk(s, l).ut }),
          (a.targetId = o.targetId),
          o.resumeToken.approximateByteSize() > 0)
        ) {
          a.resumeToken = kE(s, o.resumeToken);
          const u = Ad(s, o.expectedCount);
          u !== null && (a.expectedCount = u);
        } else if (o.snapshotVersion.compareTo(X.min()) > 0) {
          a.readTime = su(s, o.snapshotVersion.toTimestamp());
          const u = Ad(s, o.expectedCount);
          u !== null && (a.expectedCount = u);
        }
        return a;
      })(this.serializer, e));
    const r = Yk(this.serializer, e);
    r && (n.labels = r), this.t_(n);
  }
  l_(e) {
    const n = {};
    (n.database = xd(this.serializer)), (n.removeTarget = e), this.t_(n);
  }
}
class LD extends bE {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "write_stream_connection_backoff",
      "write_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o
    ),
      (this.serializer = s),
      (this.h_ = !1);
  }
  get P_() {
    return this.h_;
  }
  start() {
    (this.h_ = !1), (this.lastStreamToken = void 0), super.start();
  }
  i_() {
    this.h_ && this.I_([]);
  }
  a_(e, n) {
    return this.connection.Fo("Write", e, n);
  }
  onMessage(e) {
    if (
      (me(!!e.streamToken), (this.lastStreamToken = e.streamToken), this.h_)
    ) {
      this.jo.reset();
      const n = Qk(e.writeResults, e.commitTime),
        r = xn(e.commitTime);
      return this.listener.T_(r, n);
    }
    return (
      me(!e.writeResults || e.writeResults.length === 0),
      (this.h_ = !0),
      this.listener.E_()
    );
  }
  d_() {
    const e = {};
    (e.database = xd(this.serializer)), this.t_(e);
  }
  I_(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => qk(this.serializer, r)),
    };
    this.t_(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VD extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = i),
      (this.A_ = !1);
  }
  R_() {
    if (this.A_)
      throw new U(
        k.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  So(e, n, r, i) {
    return (
      this.R_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.connection.So(e, Cd(n, r), i, s, o))
        .catch((s) => {
          throw s.name === "FirebaseError"
            ? (s.code === k.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new U(k.UNKNOWN, s.toString());
        })
    );
  }
  vo(e, n, r, i, s) {
    return (
      this.R_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, a]) => this.connection.vo(e, Cd(n, r), i, o, a, s))
        .catch((o) => {
          throw o.name === "FirebaseError"
            ? (o.code === k.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new U(k.UNKNOWN, o.toString());
        })
    );
  }
  terminate() {
    (this.A_ = !0), this.connection.terminate();
  }
}
class OD {
  constructor(e, n) {
    (this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.m_ = 0),
      (this.f_ = null),
      (this.g_ = !0);
  }
  p_() {
    this.m_ === 0 &&
      (this.y_("Unknown"),
      (this.f_ = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.f_ = null),
          this.w_("Backend didn't respond within 10 seconds."),
          this.y_("Offline"),
          Promise.resolve()
        )
      )));
  }
  S_(e) {
    this.state === "Online"
      ? this.y_("Unknown")
      : (this.m_++,
        this.m_ >= 1 &&
          (this.b_(),
          this.w_(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.y_("Offline")));
  }
  set(e) {
    this.b_(), (this.m_ = 0), e === "Online" && (this.g_ = !1), this.y_(e);
  }
  y_(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  w_(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.g_ ? (kn(n), (this.g_ = !1)) : V("OnlineStateTracker", n);
  }
  b_() {
    this.f_ !== null && (this.f_.cancel(), (this.f_ = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MD {
  constructor(e, n, r, i, s) {
    (this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.D_ = []),
      (this.C_ = new Map()),
      (this.v_ = new Set()),
      (this.F_ = []),
      (this.M_ = s),
      this.M_.io((o) => {
        r.enqueueAndForget(async () => {
          _i(this) &&
            (V(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function (l) {
              const u = Y(l);
              u.v_.add(4),
                await wa(u),
                u.x_.set("Unknown"),
                u.v_.delete(4),
                await Yu(u);
            })(this));
        });
      }),
      (this.x_ = new OD(r, i));
  }
}
async function Yu(t) {
  if (_i(t)) for (const e of t.F_) await e(!0);
}
async function wa(t) {
  for (const e of t.F_) await e(!1);
}
function $E(t, e) {
  const n = Y(t);
  n.C_.has(e.targetId) ||
    (n.C_.set(e.targetId, e), Dp(n) ? kp(n) : Is(n).Jo() && xp(n, e));
}
function BE(t, e) {
  const n = Y(t),
    r = Is(n);
  n.C_.delete(e),
    r.Jo() && zE(n, e),
    n.C_.size === 0 && (r.Jo() ? r.Xo() : _i(n) && n.x_.set("Unknown"));
}
function xp(t, e) {
  if (
    (t.O_.Oe(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(X.min()) > 0)
  ) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(n);
  }
  Is(t).c_(e);
}
function zE(t, e) {
  t.O_.Oe(e), Is(t).l_(e);
}
function kp(t) {
  (t.O_ = new jk({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    _t: (e) => t.C_.get(e) || null,
    nt: () => t.datastore.serializer.databaseId,
  })),
    Is(t).start(),
    t.x_.p_();
}
function Dp(t) {
  return _i(t) && !Is(t).Ho() && t.C_.size > 0;
}
function _i(t) {
  return Y(t).v_.size === 0;
}
function HE(t) {
  t.O_ = void 0;
}
async function FD(t) {
  t.C_.forEach((e, n) => {
    xp(t, e);
  });
}
async function jD(t, e) {
  HE(t), Dp(t) ? (t.x_.S_(e), kp(t)) : t.x_.set("Unknown");
}
async function UD(t, e, n) {
  if ((t.x_.set("Online"), e instanceof xE && e.state === 2 && e.cause))
    try {
      await (async function (i, s) {
        const o = s.cause;
        for (const a of s.targetIds)
          i.C_.has(a) &&
            (await i.remoteSyncer.rejectListen(a, o),
            i.C_.delete(a),
            i.O_.removeTarget(a));
      })(t, e);
    } catch (r) {
      V(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        e.targetIds.join(","),
        r
      ),
        await ou(t, r);
    }
  else if (
    (e instanceof gl ? t.O_.$e(e) : e instanceof PE ? t.O_.Je(e) : t.O_.Ge(e),
    !n.isEqual(X.min()))
  )
    try {
      const r = await jE(t.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (s, o) {
          const a = s.O_.it(o);
          return (
            a.targetChanges.forEach((l, u) => {
              if (l.resumeToken.approximateByteSize() > 0) {
                const c = s.C_.get(u);
                c && s.C_.set(u, c.withResumeToken(l.resumeToken, o));
              }
            }),
            a.targetMismatches.forEach((l, u) => {
              const c = s.C_.get(l);
              if (!c) return;
              s.C_.set(
                l,
                c.withResumeToken(vt.EMPTY_BYTE_STRING, c.snapshotVersion)
              ),
                zE(s, l);
              const h = new dr(c.target, l, u, c.sequenceNumber);
              xp(s, h);
            }),
            s.remoteSyncer.applyRemoteEvent(a)
          );
        })(t, n));
    } catch (r) {
      V("RemoteStore", "Failed to raise snapshot:", r), await ou(t, r);
    }
}
async function ou(t, e, n) {
  if (!ya(e)) throw e;
  t.v_.add(1),
    await wa(t),
    t.x_.set("Offline"),
    n || (n = () => jE(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      V("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        t.v_.delete(1),
        await Yu(t);
    });
}
function WE(t, e) {
  return e().catch((n) => ou(t, n, e));
}
async function Ju(t) {
  const e = Y(t),
    n = xr(e);
  let r = e.D_.length > 0 ? e.D_[e.D_.length - 1].batchId : -1;
  for (; bD(e); )
    try {
      const i = await SD(e.localStore, r);
      if (i === null) {
        e.D_.length === 0 && n.Xo();
        break;
      }
      (r = i.batchId), $D(e, i);
    } catch (i) {
      await ou(e, i);
    }
  qE(e) && QE(e);
}
function bD(t) {
  return _i(t) && t.D_.length < 10;
}
function $D(t, e) {
  t.D_.push(e);
  const n = xr(t);
  n.Jo() && n.P_ && n.I_(e.mutations);
}
function qE(t) {
  return _i(t) && !xr(t).Ho() && t.D_.length > 0;
}
function QE(t) {
  xr(t).start();
}
async function BD(t) {
  xr(t).d_();
}
async function zD(t) {
  const e = xr(t);
  for (const n of t.D_) e.I_(n.mutations);
}
async function HD(t, e, n) {
  const r = t.D_.shift(),
    i = Rp.from(r, e, n);
  await WE(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await Ju(t);
}
async function WD(t, e) {
  e &&
    xr(t).P_ &&
    (await (async function (r, i) {
      if (
        (function (o) {
          return Ok(o) && o !== k.ABORTED;
        })(i.code)
      ) {
        const s = r.D_.shift();
        xr(r).Zo(),
          await WE(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)),
          await Ju(r);
      }
    })(t, e)),
    qE(t) && QE(t);
}
async function Py(t, e) {
  const n = Y(t);
  n.asyncQueue.verifyOperationInProgress(),
    V("RemoteStore", "RemoteStore received new credentials");
  const r = _i(n);
  n.v_.add(3),
    await wa(n),
    r && n.x_.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n.v_.delete(3),
    await Yu(n);
}
async function qD(t, e) {
  const n = Y(t);
  e
    ? (n.v_.delete(2), await Yu(n))
    : e || (n.v_.add(2), await wa(n), n.x_.set("Unknown"));
}
function Is(t) {
  return (
    t.N_ ||
      ((t.N_ = (function (n, r, i) {
        const s = Y(n);
        return (
          s.R_(),
          new ND(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i
          )
        );
      })(t.datastore, t.asyncQueue, {
        Po: FD.bind(null, t),
        To: jD.bind(null, t),
        u_: UD.bind(null, t),
      })),
      t.F_.push(async (e) => {
        e
          ? (t.N_.Zo(), Dp(t) ? kp(t) : t.x_.set("Unknown"))
          : (await t.N_.stop(), HE(t));
      })),
    t.N_
  );
}
function xr(t) {
  return (
    t.B_ ||
      ((t.B_ = (function (n, r, i) {
        const s = Y(n);
        return (
          s.R_(),
          new LD(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i
          )
        );
      })(t.datastore, t.asyncQueue, {
        Po: BD.bind(null, t),
        To: WD.bind(null, t),
        E_: zD.bind(null, t),
        T_: HD.bind(null, t),
      })),
      t.F_.push(async (e) => {
        e
          ? (t.B_.Zo(), await Ju(t))
          : (await t.B_.stop(),
            t.D_.length > 0 &&
              (V(
                "RemoteStore",
                `Stopping write stream with ${t.D_.length} pending writes`
              ),
              (t.D_ = [])));
      })),
    t.B_
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Np {
  constructor(e, n, r, i, s) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new An()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      a = new Np(e, n, o, i, s);
    return a.start(r), a;
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new U(k.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function Lp(t, e) {
  if ((kn("AsyncQueue", `${e}: ${t}`), ya(t)))
    return new U(k.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zi {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || z.comparator(n.key, r.key)
      : (n, r) => z.comparator(n.key, r.key)),
      (this.keyedMap = Js()),
      (this.sortedSet = new Ce(this.comparator));
  }
  static emptySet(e) {
    return new Zi(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1));
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null));
  }
  delete(e) {
    const n = this.get(e);
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof Zi) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (!i.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n.toString());
      }),
      e.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, n) {
    const r = new Zi();
    return (
      (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = n), r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xy {
  constructor() {
    this.L_ = new Ce(z.comparator);
  }
  track(e) {
    const n = e.doc.key,
      r = this.L_.get(n);
    r
      ? e.type !== 0 && r.type === 3
        ? (this.L_ = this.L_.insert(n, e))
        : e.type === 3 && r.type !== 1
          ? (this.L_ = this.L_.insert(n, { type: r.type, doc: e.doc }))
          : e.type === 2 && r.type === 2
            ? (this.L_ = this.L_.insert(n, { type: 2, doc: e.doc }))
            : e.type === 2 && r.type === 0
              ? (this.L_ = this.L_.insert(n, { type: 0, doc: e.doc }))
              : e.type === 1 && r.type === 0
                ? (this.L_ = this.L_.remove(n))
                : e.type === 1 && r.type === 2
                  ? (this.L_ = this.L_.insert(n, { type: 1, doc: r.doc }))
                  : e.type === 0 && r.type === 1
                    ? (this.L_ = this.L_.insert(n, { type: 2, doc: e.doc }))
                    : Q()
      : (this.L_ = this.L_.insert(n, e));
  }
  k_() {
    const e = [];
    return (
      this.L_.inorderTraversal((n, r) => {
        e.push(r);
      }),
      e
    );
  }
}
class ms {
  constructor(e, n, r, i, s, o, a, l, u) {
    (this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = s),
      (this.fromCache = o),
      (this.syncStateChanged = a),
      (this.excludesMetadataChanges = l),
      (this.hasCachedResults = u);
  }
  static fromInitialDocuments(e, n, r, i, s) {
    const o = [];
    return (
      n.forEach((a) => {
        o.push({ type: 0, doc: a });
      }),
      new ms(e, n, Zi.emptySet(n), o, r, i, !0, !1, s)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Wu(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      r = e.docChanges;
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QD {
  constructor() {
    (this.q_ = void 0), (this.Q_ = []);
  }
}
class KD {
  constructor() {
    (this.queries = new Ss((e) => fE(e), Wu)),
      (this.onlineState = "Unknown"),
      (this.K_ = new Set());
  }
}
async function KE(t, e) {
  const n = Y(t),
    r = e.query;
  let i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new QD())), i))
    try {
      s.q_ = await n.onListen(r);
    } catch (o) {
      const a = Lp(o, `Initialization of query '${Ci(e.query)}' failed`);
      return void e.onError(a);
    }
  n.queries.set(r, s),
    s.Q_.push(e),
    e.U_(n.onlineState),
    s.q_ && e.W_(s.q_) && Vp(n);
}
async function GE(t, e) {
  const n = Y(t),
    r = e.query;
  let i = !1;
  const s = n.queries.get(r);
  if (s) {
    const o = s.Q_.indexOf(e);
    o >= 0 && (s.Q_.splice(o, 1), (i = s.Q_.length === 0));
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r);
}
function GD(t, e) {
  const n = Y(t);
  let r = !1;
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (const a of o.Q_) a.W_(i) && (r = !0);
      o.q_ = i;
    }
  }
  r && Vp(n);
}
function XD(t, e, n) {
  const r = Y(t),
    i = r.queries.get(e);
  if (i) for (const s of i.Q_) s.onError(n);
  r.queries.delete(e);
}
function Vp(t) {
  t.K_.forEach((e) => {
    e.next();
  });
}
class XE {
  constructor(e, n, r) {
    (this.query = e),
      (this.G_ = n),
      (this.z_ = !1),
      (this.j_ = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  W_(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges) i.type !== 3 && r.push(i);
      e = new ms(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      );
    }
    let n = !1;
    return (
      this.z_
        ? this.H_(e) && (this.G_.next(e), (n = !0))
        : this.J_(e, this.onlineState) && (this.Y_(e), (n = !0)),
      (this.j_ = e),
      n
    );
  }
  onError(e) {
    this.G_.error(e);
  }
  U_(e) {
    this.onlineState = e;
    let n = !1;
    return (
      this.j_ &&
        !this.z_ &&
        this.J_(this.j_, e) &&
        (this.Y_(this.j_), (n = !0)),
      n
    );
  }
  J_(e, n) {
    if (!e.fromCache) return !0;
    const r = n !== "Offline";
    return (
      (!this.options.Z_ || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === "Offline")
    );
  }
  H_(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.j_ && this.j_.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  Y_(e) {
    (e = ms.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults
    )),
      (this.z_ = !0),
      this.G_.next(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class YE {
  constructor(e) {
    this.key = e;
  }
}
class JE {
  constructor(e) {
    this.key = e;
  }
}
class YD {
  constructor(e, n) {
    (this.query = e),
      (this.oa = n),
      (this._a = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.aa = te()),
      (this.mutatedKeys = te()),
      (this.ua = pE(e)),
      (this.ca = new Zi(this.ua));
  }
  get la() {
    return this.oa;
  }
  ha(e, n) {
    const r = n ? n.Pa : new xy(),
      i = n ? n.ca : this.ca;
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      a = !1;
    const l =
        this.query.limitType === "F" && i.size === this.query.limit
          ? i.last()
          : null,
      u =
        this.query.limitType === "L" && i.size === this.query.limit
          ? i.first()
          : null;
    if (
      (e.inorderTraversal((c, h) => {
        const d = i.get(c),
          g = qu(this.query, h) ? h : null,
          _ = !!d && this.mutatedKeys.has(d.key),
          w =
            !!g &&
            (g.hasLocalMutations ||
              (this.mutatedKeys.has(g.key) && g.hasCommittedMutations));
        let E = !1;
        d && g
          ? d.data.isEqual(g.data)
            ? _ !== w && (r.track({ type: 3, doc: g }), (E = !0))
            : this.Ia(d, g) ||
              (r.track({ type: 2, doc: g }),
              (E = !0),
              ((l && this.ua(g, l) > 0) || (u && this.ua(g, u) < 0)) &&
                (a = !0))
          : !d && g
            ? (r.track({ type: 0, doc: g }), (E = !0))
            : d &&
              !g &&
              (r.track({ type: 1, doc: d }), (E = !0), (l || u) && (a = !0)),
          E &&
            (g
              ? ((o = o.add(g)), (s = w ? s.add(c) : s.delete(c)))
              : ((o = o.delete(c)), (s = s.delete(c))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const c = this.query.limitType === "F" ? o.last() : o.first();
        (o = o.delete(c.key)),
          (s = s.delete(c.key)),
          r.track({ type: 1, doc: c });
      }
    return { ca: o, Pa: r, Xi: a, mutatedKeys: s };
  }
  Ia(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    );
  }
  applyChanges(e, n, r, i) {
    const s = this.ca;
    (this.ca = e.ca), (this.mutatedKeys = e.mutatedKeys);
    const o = e.Pa.k_();
    o.sort(
      (c, h) =>
        (function (g, _) {
          const w = (E) => {
            switch (E) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return Q();
            }
          };
          return w(g) - w(_);
        })(c.type, h.type) || this.ua(c.doc, h.doc)
    ),
      this.Ta(r),
      (i = i != null && i);
    const a = n && !i ? this.Ea() : [],
      l = this.aa.size === 0 && this.current && !i ? 1 : 0,
      u = l !== this._a;
    return (
      (this._a = l),
      o.length !== 0 || u
        ? {
            snapshot: new ms(
              this.query,
              e.ca,
              s,
              o,
              e.mutatedKeys,
              l === 0,
              u,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            da: a,
          }
        : { da: a }
    );
  }
  U_(e) {
    return this.current && e === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { ca: this.ca, Pa: new xy(), mutatedKeys: this.mutatedKeys, Xi: !1 },
          !1
        ))
      : { da: [] };
  }
  Aa(e) {
    return (
      !this.oa.has(e) && !!this.ca.has(e) && !this.ca.get(e).hasLocalMutations
    );
  }
  Ta(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.oa = this.oa.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.oa = this.oa.delete(n))),
      (this.current = e.current));
  }
  Ea() {
    if (!this.current) return [];
    const e = this.aa;
    (this.aa = te()),
      this.ca.forEach((r) => {
        this.Aa(r.key) && (this.aa = this.aa.add(r.key));
      });
    const n = [];
    return (
      e.forEach((r) => {
        this.aa.has(r) || n.push(new JE(r));
      }),
      this.aa.forEach((r) => {
        e.has(r) || n.push(new YE(r));
      }),
      n
    );
  }
  Ra(e) {
    (this.oa = e.hs), (this.aa = te());
    const n = this.ha(e.documents);
    return this.applyChanges(n, !0);
  }
  Va() {
    return ms.fromInitialDocuments(
      this.query,
      this.ca,
      this.mutatedKeys,
      this._a === 0,
      this.hasCachedResults
    );
  }
}
class JD {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class ZD {
  constructor(e) {
    (this.key = e), (this.ma = !1);
  }
}
class eN {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.fa = {}),
      (this.ga = new Ss((a) => fE(a), Wu)),
      (this.pa = new Map()),
      (this.ya = new Set()),
      (this.wa = new Ce(z.comparator)),
      (this.Sa = new Map()),
      (this.ba = new Ap()),
      (this.Da = {}),
      (this.Ca = new Map()),
      (this.va = ps.Bn()),
      (this.onlineState = "Unknown"),
      (this.Fa = void 0);
  }
  get isPrimaryClient() {
    return this.Fa === !0;
  }
}
async function tN(t, e) {
  const n = hN(t);
  let r, i;
  const s = n.ga.get(e);
  if (s)
    (r = s.targetId),
      n.sharedClientState.addLocalQueryTarget(r),
      (i = s.view.Va());
  else {
    const o = await ID(n.localStore, Cn(e)),
      a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId),
      (i = await nN(n, e, r, a === "current", o.resumeToken)),
      n.isPrimaryClient && $E(n.remoteStore, o);
  }
  return i;
}
async function nN(t, e, n, r, i) {
  t.Ma = (h, d, g) =>
    (async function (w, E, p, f) {
      let m = E.view.ha(p);
      m.Xi &&
        (m = await Iy(w.localStore, E.query, !1).then(({ documents: C }) =>
          E.view.ha(C, m)
        ));
      const R = f && f.targetChanges.get(E.targetId),
        I = f && f.targetMismatches.get(E.targetId) != null,
        y = E.view.applyChanges(m, w.isPrimaryClient, R, I);
      return Dy(w, E.targetId, y.da), y.snapshot;
    })(t, h, d, g);
  const s = await Iy(t.localStore, e, !0),
    o = new YD(e, s.hs),
    a = o.ha(s.documents),
    l = _a.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== "Offline",
      i
    ),
    u = o.applyChanges(a, t.isPrimaryClient, l);
  Dy(t, n, u.da);
  const c = new JD(e, n, o);
  return (
    t.ga.set(e, c),
    t.pa.has(n) ? t.pa.get(n).push(e) : t.pa.set(n, [e]),
    u.snapshot
  );
}
async function rN(t, e) {
  const n = Y(t),
    r = n.ga.get(e),
    i = n.pa.get(r.targetId);
  if (i.length > 1)
    return (
      n.pa.set(
        r.targetId,
        i.filter((s) => !Wu(s, e))
      ),
      void n.ga.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await kd(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              BE(n.remoteStore, r.targetId),
              Dd(n, r.targetId);
          })
          .catch(ga)))
    : (Dd(n, r.targetId), await kd(n.localStore, r.targetId, !0));
}
async function iN(t, e, n) {
  const r = dN(t);
  try {
    const i = await (function (o, a) {
      const l = Y(o),
        u = He.now(),
        c = a.reduce((g, _) => g.add(_.key), te());
      let h, d;
      return l.persistence
        .runTransaction("Locally write mutations", "readwrite", (g) => {
          let _ = Qn(),
            w = te();
          return l.os
            .getEntries(g, c)
            .next((E) => {
              (_ = E),
                _.forEach((p, f) => {
                  f.isValidDocument() || (w = w.add(p));
                });
            })
            .next(() => l.localDocuments.getOverlayedDocuments(g, _))
            .next((E) => {
              h = E;
              const p = [];
              for (const f of a) {
                const m = kk(f, h.get(f.key).overlayedDocument);
                m != null &&
                  p.push(new Or(f.key, m, oE(m.value.mapValue), Pn.exists(!0)));
              }
              return l.mutationQueue.addMutationBatch(g, u, p, a);
            })
            .next((E) => {
              d = E;
              const p = E.applyToLocalDocumentSet(h, w);
              return l.documentOverlayCache.saveOverlays(g, E.batchId, p);
            });
        })
        .then(() => ({ batchId: d.batchId, changes: gE(h) }));
    })(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (o, a, l) {
        let u = o.Da[o.currentUser.toKey()];
        u || (u = new Ce(ue)),
          (u = u.insert(a, l)),
          (o.Da[o.currentUser.toKey()] = u);
      })(r, i.batchId, n),
      await Ea(r, i.changes),
      await Ju(r.remoteStore);
  } catch (i) {
    const s = Lp(i, "Failed to persist write");
    n.reject(s);
  }
}
async function ZE(t, e) {
  const n = Y(t);
  try {
    const r = await TD(n.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const o = n.Sa.get(s);
      o &&
        (me(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (o.ma = !0)
          : i.modifiedDocuments.size > 0
            ? me(o.ma)
            : i.removedDocuments.size > 0 && (me(o.ma), (o.ma = !1)));
    }),
      await Ea(n, r, e);
  } catch (r) {
    await ga(r);
  }
}
function ky(t, e, n) {
  const r = Y(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    r.ga.forEach((s, o) => {
      const a = o.view.U_(e);
      a.snapshot && i.push(a.snapshot);
    }),
      (function (o, a) {
        const l = Y(o);
        l.onlineState = a;
        let u = !1;
        l.queries.forEach((c, h) => {
          for (const d of h.Q_) d.U_(a) && (u = !0);
        }),
          u && Vp(l);
      })(r.eventManager, e),
      i.length && r.fa.u_(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function sN(t, e, n) {
  const r = Y(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.Sa.get(e),
    s = i && i.key;
  if (s) {
    let o = new Ce(z.comparator);
    o = o.insert(s, pt.newNoDocument(s, X.min()));
    const a = te().add(s),
      l = new Gu(X.min(), new Map(), new Ce(ue), o, a);
    await ZE(r, l), (r.wa = r.wa.remove(s)), r.Sa.delete(e), Op(r);
  } else
    await kd(r.localStore, e, !1)
      .then(() => Dd(r, e, n))
      .catch(ga);
}
async function oN(t, e) {
  const n = Y(t),
    r = e.batch.batchId;
  try {
    const i = await ED(n.localStore, e);
    t1(n, r, null),
      e1(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await Ea(n, i);
  } catch (i) {
    await ga(i);
  }
}
async function aN(t, e, n) {
  const r = Y(t);
  try {
    const i = await (function (o, a) {
      const l = Y(o);
      return l.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (u) => {
          let c;
          return l.mutationQueue
            .lookupMutationBatch(u, a)
            .next(
              (h) => (
                me(h !== null),
                (c = h.keys()),
                l.mutationQueue.removeMutationBatch(u, h)
              )
            )
            .next(() => l.mutationQueue.performConsistencyCheck(u))
            .next(() =>
              l.documentOverlayCache.removeOverlaysForBatchId(u, c, a)
            )
            .next(() =>
              l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u, c)
            )
            .next(() => l.localDocuments.getDocuments(u, c));
        }
      );
    })(r.localStore, e);
    t1(r, e, n),
      e1(r, e),
      r.sharedClientState.updateMutationState(e, "rejected", n),
      await Ea(r, i);
  } catch (i) {
    await ga(i);
  }
}
function e1(t, e) {
  (t.Ca.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.Ca.delete(e);
}
function t1(t, e, n) {
  const r = Y(t);
  let i = r.Da[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(e))),
      (r.Da[r.currentUser.toKey()] = i);
  }
}
function Dd(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.pa.get(e)) t.ga.delete(r), n && t.fa.xa(r, n);
  t.pa.delete(e),
    t.isPrimaryClient &&
      t.ba.Vr(e).forEach((r) => {
        t.ba.containsKey(r) || n1(t, r);
      });
}
function n1(t, e) {
  t.ya.delete(e.path.canonicalString());
  const n = t.wa.get(e);
  n !== null &&
    (BE(t.remoteStore, n), (t.wa = t.wa.remove(e)), t.Sa.delete(n), Op(t));
}
function Dy(t, e, n) {
  for (const r of n)
    r instanceof YE
      ? (t.ba.addReference(r.key, e), lN(t, r))
      : r instanceof JE
        ? (V("SyncEngine", "Document no longer in limbo: " + r.key),
          t.ba.removeReference(r.key, e),
          t.ba.containsKey(r.key) || n1(t, r.key))
        : Q();
}
function lN(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.wa.get(n) ||
    t.ya.has(r) ||
    (V("SyncEngine", "New document in limbo: " + n), t.ya.add(r), Op(t));
}
function Op(t) {
  for (; t.ya.size > 0 && t.wa.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.ya.values().next().value;
    t.ya.delete(e);
    const n = new z(Re.fromString(e)),
      r = t.va.next();
    t.Sa.set(r, new ZD(n)),
      (t.wa = t.wa.insert(n, r)),
      $E(
        t.remoteStore,
        new dr(Cn(Tp(n.path)), r, "TargetPurposeLimboResolution", gp._e)
      );
  }
}
async function Ea(t, e, n) {
  const r = Y(t),
    i = [],
    s = [],
    o = [];
  r.ga.isEmpty() ||
    (r.ga.forEach((a, l) => {
      o.push(
        r.Ma(l, e, n).then((u) => {
          if (
            ((u || n) &&
              r.isPrimaryClient &&
              r.sharedClientState.updateQueryState(
                l.targetId,
                u != null && u.fromCache ? "not-current" : "current"
              ),
            u)
          ) {
            i.push(u);
            const c = Pp.Ki(l.targetId, u);
            s.push(c);
          }
        })
      );
    }),
    await Promise.all(o),
    r.fa.u_(i),
    await (async function (l, u) {
      const c = Y(l);
      try {
        await c.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (h) =>
            P.forEach(u, (d) =>
              P.forEach(d.qi, (g) =>
                c.persistence.referenceDelegate.addReference(h, d.targetId, g)
              ).next(() =>
                P.forEach(d.Qi, (g) =>
                  c.persistence.referenceDelegate.removeReference(
                    h,
                    d.targetId,
                    g
                  )
                )
              )
            )
        );
      } catch (h) {
        if (!ya(h)) throw h;
        V("LocalStore", "Failed to update sequence numbers: " + h);
      }
      for (const h of u) {
        const d = h.targetId;
        if (!h.fromCache) {
          const g = c.ns.get(d),
            _ = g.snapshotVersion,
            w = g.withLastLimboFreeSnapshotVersion(_);
          c.ns = c.ns.insert(d, w);
        }
      }
    })(r.localStore, s));
}
async function uN(t, e) {
  const n = Y(t);
  if (!n.currentUser.isEqual(e)) {
    V("SyncEngine", "User change. New user:", e.toKey());
    const r = await FE(n.localStore, e);
    (n.currentUser = e),
      (function (s, o) {
        s.Ca.forEach((a) => {
          a.forEach((l) => {
            l.reject(new U(k.CANCELLED, o));
          });
        }),
          s.Ca.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await Ea(n, r.us);
  }
}
function cN(t, e) {
  const n = Y(t),
    r = n.Sa.get(e);
  if (r && r.ma) return te().add(r.key);
  {
    let i = te();
    const s = n.pa.get(e);
    if (!s) return i;
    for (const o of s) {
      const a = n.ga.get(o);
      i = i.unionWith(a.view.la);
    }
    return i;
  }
}
function hN(t) {
  const e = Y(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = ZE.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = cN.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = sN.bind(null, e)),
    (e.fa.u_ = GD.bind(null, e.eventManager)),
    (e.fa.xa = XD.bind(null, e.eventManager)),
    e
  );
}
function dN(t) {
  const e = Y(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = oN.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = aN.bind(null, e)),
    e
  );
}
class Ny {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.serializer = Xu(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.createSharedClientState(e)),
      (this.persistence = this.createPersistence(e)),
      await this.persistence.start(),
      (this.localStore = this.createLocalStore(e)),
      (this.gcScheduler = this.createGarbageCollectionScheduler(
        e,
        this.localStore
      )),
      (this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(
        e,
        this.localStore
      ));
  }
  createGarbageCollectionScheduler(e, n) {
    return null;
  }
  createIndexBackfillerScheduler(e, n) {
    return null;
  }
  createLocalStore(e) {
    return wD(this.persistence, new vD(), e.initialUser, this.serializer);
  }
  createPersistence(e) {
    return new mD(Cp.Hr, this.serializer);
  }
  createSharedClientState(e) {
    return new CD();
  }
  async terminate() {
    var e, n;
    (e = this.gcScheduler) === null || e === void 0 || e.stop(),
      (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class fN {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        ky(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = uN.bind(
        null,
        this.syncEngine
      )),
      await qD(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return (function () {
      return new KD();
    })();
  }
  createDatastore(e) {
    const n = Xu(e.databaseInfo.databaseId),
      r = (function (s) {
        return new DD(s);
      })(e.databaseInfo);
    return (function (s, o, a, l) {
      return new VD(s, o, a, l);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (function (r, i, s, o, a) {
      return new MD(r, i, s, o, a);
    })(
      this.localStore,
      this.datastore,
      e.asyncQueue,
      (n) => ky(this.syncEngine, n, 0),
      (function () {
        return Cy.D() ? new Cy() : new PD();
      })()
    );
  }
  createSyncEngine(e, n) {
    return (function (i, s, o, a, l, u, c) {
      const h = new eN(i, s, o, a, l, u);
      return c && (h.Fa = !0), h;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n
    );
  }
  async terminate() {
    var e;
    await (async function (r) {
      const i = Y(r);
      V("RemoteStore", "RemoteStore shutting down."),
        i.v_.add(5),
        await wa(i),
        i.M_.shutdown(),
        i.x_.set("Unknown");
    })(this.remoteStore),
      (e = this.datastore) === null || e === void 0 || e.terminate();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r1 {
  constructor(e) {
    (this.observer = e), (this.muted = !1);
  }
  next(e) {
    this.observer.next && this.Ba(this.observer.next, e);
  }
  error(e) {
    this.observer.error
      ? this.Ba(this.observer.error, e)
      : kn("Uncaught Error in snapshot listener:", e.toString());
  }
  La() {
    this.muted = !0;
  }
  Ba(e, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || e(n);
      }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pN {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = dt.UNAUTHENTICATED),
      (this.clientId = rE.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        V("FirestoreClient", "Received user=", s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          V("FirestoreClient", "Received new app check token=", s),
          this.appCheckCredentialListener(s, this.user)
        )
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new U(
        k.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new An();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const r = Lp(n, "Failed to shutdown persistence");
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function rh(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    V("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = t.configuration;
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await FE(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t._offlineComponents = e);
}
async function Ly(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await gN(t);
  V("FirestoreClient", "Initializing OnlineComponentProvider"),
    await e.initialize(n, t.configuration),
    t.setCredentialChangeListener((r) => Py(e.remoteStore, r)),
    t.setAppCheckTokenChangeListener((r, i) => Py(e.remoteStore, i)),
    (t._onlineComponents = e);
}
function mN(t) {
  return t.name === "FirebaseError"
    ? t.code === k.FAILED_PRECONDITION || t.code === k.UNIMPLEMENTED
    : !(typeof DOMException < "u" && t instanceof DOMException) ||
        t.code === 22 ||
        t.code === 20 ||
        t.code === 11;
}
async function gN(t) {
  if (!t._offlineComponents)
    if (t._uninitializedComponentsProvider) {
      V("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        await rh(t, t._uninitializedComponentsProvider._offline);
      } catch (e) {
        const n = e;
        if (!mN(n)) throw n;
        cs(
          "Error using user provided cache. Falling back to memory cache: " + n
        ),
          await rh(t, new Ny());
      }
    } else
      V("FirestoreClient", "Using default OfflineComponentProvider"),
        await rh(t, new Ny());
  return t._offlineComponents;
}
async function i1(t) {
  return (
    t._onlineComponents ||
      (t._uninitializedComponentsProvider
        ? (V("FirestoreClient", "Using user provided OnlineComponentProvider"),
          await Ly(t, t._uninitializedComponentsProvider._online))
        : (V("FirestoreClient", "Using default OnlineComponentProvider"),
          await Ly(t, new fN()))),
    t._onlineComponents
  );
}
function yN(t) {
  return i1(t).then((e) => e.syncEngine);
}
async function s1(t) {
  const e = await i1(t),
    n = e.eventManager;
  return (
    (n.onListen = tN.bind(null, e.syncEngine)),
    (n.onUnlisten = rN.bind(null, e.syncEngine)),
    n
  );
}
function vN(t, e, n = {}) {
  const r = new An();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (s, o, a, l, u) {
        const c = new r1({
            next: (d) => {
              o.enqueueAndForget(() => GE(s, h));
              const g = d.docs.has(a);
              !g && d.fromCache
                ? u.reject(
                    new U(
                      k.UNAVAILABLE,
                      "Failed to get document because the client is offline."
                    )
                  )
                : g && d.fromCache && l && l.source === "server"
                  ? u.reject(
                      new U(
                        k.UNAVAILABLE,
                        'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                      )
                    )
                  : u.resolve(d);
            },
            error: (d) => u.reject(d),
          }),
          h = new XE(Tp(a.path), c, { includeMetadataChanges: !0, Z_: !0 });
        return KE(s, h);
      })(await s1(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
function _N(t, e, n = {}) {
  const r = new An();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (s, o, a, l, u) {
        const c = new r1({
            next: (d) => {
              o.enqueueAndForget(() => GE(s, h)),
                d.fromCache && l.source === "server"
                  ? u.reject(
                      new U(
                        k.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : u.resolve(d);
            },
            error: (d) => u.reject(d),
          }),
          h = new XE(a, c, { includeMetadataChanges: !0, Z_: !0 });
        return KE(s, h);
      })(await s1(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function o1(t) {
  const e = {};
  return (
    t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds), e
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vy = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function a1(t, e, n) {
  if (!n)
    throw new U(
      k.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`
    );
}
function wN(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new U(k.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function Oy(t) {
  if (!z.isDocumentKey(t))
    throw new U(
      k.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
    );
}
function My(t) {
  if (z.isDocumentKey(t))
    throw new U(
      k.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function Mp(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string")
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array) return "an array";
    {
      const e = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof t == "function" ? "a function" : Q();
}
function Kn(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new U(
        k.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = Mp(t);
      throw new U(
        k.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`
      );
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fy {
  constructor(e) {
    var n, r;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new U(
          k.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new U(
          k.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    wN(
      "experimentalForceLongPolling",
      e.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      e.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = o1(
        (r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
      )),
      (function (s) {
        if (s.timeoutSeconds !== void 0) {
          if (isNaN(s.timeoutSeconds))
            throw new U(
              k.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`
            );
          if (s.timeoutSeconds < 5)
            throw new U(
              k.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (s.timeoutSeconds > 30)
            throw new U(
              k.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams);
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
class Zu {
  constructor(e, n, r, i) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new Fy({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new U(
        k.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new U(
        k.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new Fy(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new jx();
          switch (r.type) {
            case "firstParty":
              return new Bx(
                r.sessionIndex || "0",
                r.iamToken || null,
                r.authTokenFactory || null
              );
            case "provider":
              return r.client;
            default:
              throw new U(
                k.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type"
              );
          }
        })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (n) {
        const r = Vy.get(n);
        r &&
          (V("ComponentProvider", "Removing Datastore"),
          Vy.delete(n),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function EN(t, e, n, r = {}) {
  var i;
  const s = (t = Kn(t, Zu))._getSettings(),
    o = `${e}:${n}`;
  if (
    (s.host !== "firestore.googleapis.com" &&
      s.host !== o &&
      cs(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."
      ),
    t._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
    r.mockUserToken)
  ) {
    let a, l;
    if (typeof r.mockUserToken == "string")
      (a = r.mockUserToken), (l = dt.MOCK_USER);
    else {
      a = S0(
        r.mockUserToken,
        (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId
      );
      const u = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!u)
        throw new U(
          k.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      l = new dt(u);
    }
    t._authCredentials = new Ux(new nE(a, l));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ec {
  constructor(e, n, r) {
    (this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = e);
  }
  withConverter(e) {
    return new ec(this.firestore, e, this._query);
  }
}
class Nt {
  constructor(e, n, r) {
    (this.converter = n),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = e);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new Sr(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new Nt(this.firestore, e, this._key);
  }
}
class Sr extends ec {
  constructor(e, n, r) {
    super(e, n, Tp(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new Nt(this.firestore, null, new z(e));
  }
  withConverter(e) {
    return new Sr(this.firestore, e, this._path);
  }
}
function Vt(t, e, ...n) {
  if (((t = tn(t)), a1("collection", "path", e), t instanceof Zu)) {
    const r = Re.fromString(e, ...n);
    return My(r), new Sr(t, null, r);
  }
  {
    if (!(t instanceof Nt || t instanceof Sr))
      throw new U(
        k.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(Re.fromString(e, ...n));
    return My(r), new Sr(t.firestore, null, r);
  }
}
function gn(t, e, ...n) {
  if (
    ((t = tn(t)),
    arguments.length === 1 && (e = rE.newId()),
    a1("doc", "path", e),
    t instanceof Zu)
  ) {
    const r = Re.fromString(e, ...n);
    return Oy(r), new Nt(t, null, new z(r));
  }
  {
    if (!(t instanceof Nt || t instanceof Sr))
      throw new U(
        k.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(Re.fromString(e, ...n));
    return (
      Oy(r), new Nt(t.firestore, t instanceof Sr ? t.converter : null, new z(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TN {
  constructor() {
    (this.Xa = Promise.resolve()),
      (this.eu = []),
      (this.tu = !1),
      (this.nu = []),
      (this.ru = null),
      (this.iu = !1),
      (this.su = !1),
      (this.ou = []),
      (this.jo = new UE(this, "async_queue_retry")),
      (this._u = () => {
        const n = nh();
        n &&
          V("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.jo.Ko();
      });
    const e = nh();
    e &&
      typeof e.addEventListener == "function" &&
      e.addEventListener("visibilitychange", this._u);
  }
  get isShuttingDown() {
    return this.tu;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.au(), this.uu(e);
  }
  enterRestrictedMode(e) {
    if (!this.tu) {
      (this.tu = !0), (this.su = e || !1);
      const n = nh();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this._u);
    }
  }
  enqueue(e) {
    if ((this.au(), this.tu)) return new Promise(() => {});
    const n = new An();
    return this.uu(() =>
      this.tu && this.su
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.eu.push(e), this.cu()));
  }
  async cu() {
    if (this.eu.length !== 0) {
      try {
        await this.eu[0](), this.eu.shift(), this.jo.reset();
      } catch (e) {
        if (!ya(e)) throw e;
        V("AsyncQueue", "Operation failed with retryable error: " + e);
      }
      this.eu.length > 0 && this.jo.qo(() => this.cu());
    }
  }
  uu(e) {
    const n = this.Xa.then(
      () => (
        (this.iu = !0),
        e()
          .catch((r) => {
            (this.ru = r), (this.iu = !1);
            const i = (function (o) {
              let a = o.message || "";
              return (
                o.stack &&
                  (a = o.stack.includes(o.message)
                    ? o.stack
                    : o.message +
                      `
` +
                      o.stack),
                a
              );
            })(r);
            throw (kn("INTERNAL UNHANDLED ERROR: ", i), r);
          })
          .then((r) => ((this.iu = !1), r))
      )
    );
    return (this.Xa = n), n;
  }
  enqueueAfterDelay(e, n, r) {
    this.au(), this.ou.indexOf(e) > -1 && (n = 0);
    const i = Np.createAndSchedule(this, e, n, r, (s) => this.lu(s));
    return this.nu.push(i), i;
  }
  au() {
    this.ru && Q();
  }
  verifyOperationInProgress() {}
  async hu() {
    let e;
    do (e = this.Xa), await e;
    while (e !== this.Xa);
  }
  Pu(e) {
    for (const n of this.nu) if (n.timerId === e) return !0;
    return !1;
  }
  Iu(e) {
    return this.hu().then(() => {
      this.nu.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.nu)
        if ((n.skipDelay(), e !== "all" && n.timerId === e)) break;
      return this.hu();
    });
  }
  Tu(e) {
    this.ou.push(e);
  }
  lu(e) {
    const n = this.nu.indexOf(e);
    this.nu.splice(n, 1);
  }
}
class Ta extends Zu {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = "firestore"),
      (this._queue = (function () {
        return new TN();
      })()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || l1(this), this._firestoreClient.terminate();
  }
}
function RN(t, e) {
  const n = typeof t == "object" ? t : L0(),
    r = typeof t == "string" ? t : e || "(default)",
    i = k0(n, "firestore").getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = T0("firestore");
    s && EN(i, ...s);
  }
  return i;
}
function Fp(t) {
  return (
    t._firestoreClient || l1(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  );
}
function l1(t) {
  var e, n, r;
  const i = t._freezeSettings(),
    s = (function (a, l, u, c) {
      return new nk(
        a,
        l,
        u,
        c.host,
        c.ssl,
        c.experimentalForceLongPolling,
        c.experimentalAutoDetectLongPolling,
        o1(c.experimentalLongPollingOptions),
        c.useFetchStreams
      );
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || "",
      t._persistenceKey,
      i
    );
  (t._firestoreClient = new pN(
    t._authCredentials,
    t._appCheckCredentials,
    t._queue,
    s
  )),
    !((n = i.localCache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = i.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (t._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: i.localCache.kind,
        _offline: i.localCache._offlineComponentProvider,
        _online: i.localCache._onlineComponentProvider,
      });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gs {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new gs(vt.fromBase64String(e));
    } catch (n) {
      throw new U(
        k.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n
      );
    }
  }
  static fromUint8Array(e) {
    return new gs(vt.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tc {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new U(
          k.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new it(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jp {
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Up {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new U(
        k.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new U(
        k.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n
      );
    (this._lat = e), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(e) {
    return ue(this._lat, e._lat) || ue(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SN = /^__.*__$/;
class IN {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new Or(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new va(e, this.data, n, this.fieldTransforms);
  }
}
class u1 {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return new Or(e, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function c1(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw Q();
  }
}
class bp {
  constructor(e, n, r, i, s, o) {
    (this.settings = e),
      (this.databaseId = n),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = i),
      s === void 0 && this.Eu(),
      (this.fieldTransforms = s || []),
      (this.fieldMask = o || []);
  }
  get path() {
    return this.settings.path;
  }
  get du() {
    return this.settings.du;
  }
  Au(e) {
    return new bp(
      Object.assign(Object.assign({}, this.settings), e),
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  Ru(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.Au({ path: r, Vu: !1 });
    return i.mu(e), i;
  }
  fu(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.Au({ path: r, Vu: !1 });
    return i.Eu(), i;
  }
  gu(e) {
    return this.Au({ path: void 0, Vu: !0 });
  }
  pu(e) {
    return au(
      e,
      this.settings.methodName,
      this.settings.yu || !1,
      this.path,
      this.settings.wu
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0
    );
  }
  Eu() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.mu(this.path.get(e));
  }
  mu(e) {
    if (e.length === 0) throw this.pu("Document fields must not be empty");
    if (c1(this.du) && SN.test(e))
      throw this.pu('Document fields cannot begin and end with "__"');
  }
}
class AN {
  constructor(e, n, r) {
    (this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.serializer = r || Xu(e));
  }
  Su(e, n, r, i = !1) {
    return new bp(
      { du: e, methodName: n, wu: r, path: it.emptyPath(), Vu: !1, yu: i },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties
    );
  }
}
function h1(t) {
  const e = t._freezeSettings(),
    n = Xu(t._databaseId);
  return new AN(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function CN(t, e, n, r, i, s = {}) {
  const o = t.Su(s.merge || s.mergeFields ? 2 : 0, e, n, i);
  $p("Data must be an object, but it was:", o, r);
  const a = d1(r, o);
  let l, u;
  if (s.merge) (l = new Ut(o.fieldMask)), (u = o.fieldTransforms);
  else if (s.mergeFields) {
    const c = [];
    for (const h of s.mergeFields) {
      const d = Nd(e, h, n);
      if (!o.contains(d))
        throw new U(
          k.INVALID_ARGUMENT,
          `Field '${d}' is specified in your field mask but missing from your input data.`
        );
      p1(c, d) || c.push(d);
    }
    (l = new Ut(c)), (u = o.fieldTransforms.filter((h) => l.covers(h.field)));
  } else (l = null), (u = o.fieldTransforms);
  return new IN(new Ct(a), l, u);
}
class nc extends jp {
  _toFieldTransform(e) {
    if (e.du !== 2)
      throw e.du === 1
        ? e.pu(
            `${this._methodName}() can only appear at the top level of your update data`
          )
        : e.pu(
            `${this._methodName}() cannot be used with set() unless you pass {merge:true}`
          );
    return e.fieldMask.push(e.path), null;
  }
  isEqual(e) {
    return e instanceof nc;
  }
}
function PN(t, e, n, r) {
  const i = t.Su(1, e, n);
  $p("Data must be an object, but it was:", i, r);
  const s = [],
    o = Ct.empty();
  vi(r, (l, u) => {
    const c = Bp(e, l, n);
    u = tn(u);
    const h = i.fu(c);
    if (u instanceof nc) s.push(c);
    else {
      const d = rc(u, h);
      d != null && (s.push(c), o.set(c, d));
    }
  });
  const a = new Ut(s);
  return new u1(o, a, i.fieldTransforms);
}
function xN(t, e, n, r, i, s) {
  const o = t.Su(1, e, n),
    a = [Nd(e, r, n)],
    l = [i];
  if (s.length % 2 != 0)
    throw new U(
      k.INVALID_ARGUMENT,
      `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`
    );
  for (let d = 0; d < s.length; d += 2) a.push(Nd(e, s[d])), l.push(s[d + 1]);
  const u = [],
    c = Ct.empty();
  for (let d = a.length - 1; d >= 0; --d)
    if (!p1(u, a[d])) {
      const g = a[d];
      let _ = l[d];
      _ = tn(_);
      const w = o.fu(g);
      if (_ instanceof nc) u.push(g);
      else {
        const E = rc(_, w);
        E != null && (u.push(g), c.set(g, E));
      }
    }
  const h = new Ut(u);
  return new u1(c, h, o.fieldTransforms);
}
function rc(t, e) {
  if (f1((t = tn(t)))) return $p("Unsupported field value:", e, t), d1(t, e);
  if (t instanceof jp)
    return (
      (function (r, i) {
        if (!c1(i.du))
          throw i.pu(
            `${r._methodName}() can only be used with update() and set()`
          );
        if (!i.path)
          throw i.pu(
            `${r._methodName}() is not currently supported inside arrays`
          );
        const s = r._toFieldTransform(i);
        s && i.fieldTransforms.push(s);
      })(t, e),
      null
    );
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.Vu && e.du !== 4)
      throw e.pu("Nested arrays are not supported");
    return (function (r, i) {
      const s = [];
      let o = 0;
      for (const a of r) {
        let l = rc(a, i.gu(o));
        l == null && (l = { nullValue: "NULL_VALUE" }), s.push(l), o++;
      }
      return { arrayValue: { values: s } };
    })(t, e);
  }
  return (function (r, i) {
    if ((r = tn(r)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof r == "number") return Sk(i.serializer, r);
    if (typeof r == "boolean") return { booleanValue: r };
    if (typeof r == "string") return { stringValue: r };
    if (r instanceof Date) {
      const s = He.fromDate(r);
      return { timestampValue: su(i.serializer, s) };
    }
    if (r instanceof He) {
      const s = new He(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: su(i.serializer, s) };
    }
    if (r instanceof Up)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof gs) return { bytesValue: kE(i.serializer, r._byteString) };
    if (r instanceof Nt) {
      const s = i.databaseId,
        o = r.firestore._databaseId;
      if (!o.isEqual(s))
        throw i.pu(
          `Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`
        );
      return {
        referenceValue: Ip(
          r.firestore._databaseId || i.databaseId,
          r._key.path
        ),
      };
    }
    throw i.pu(`Unsupported field value: ${Mp(r)}`);
  })(t, e);
}
function d1(t, e) {
  const n = {};
  return (
    iE(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : vi(t, (r, i) => {
          const s = rc(i, e.Ru(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function f1(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof He ||
    t instanceof Up ||
    t instanceof gs ||
    t instanceof Nt ||
    t instanceof jp
  );
}
function $p(t, e, n) {
  if (
    !f1(n) ||
    !(function (i) {
      return (
        typeof i == "object" &&
        i !== null &&
        (Object.getPrototypeOf(i) === Object.prototype ||
          Object.getPrototypeOf(i) === null)
      );
    })(n)
  ) {
    const r = Mp(n);
    throw r === "an object" ? e.pu(t + " a custom object") : e.pu(t + " " + r);
  }
}
function Nd(t, e, n) {
  if ((e = tn(e)) instanceof tc) return e._internalPath;
  if (typeof e == "string") return Bp(t, e);
  throw au("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const kN = new RegExp("[~\\*/\\[\\]]");
function Bp(t, e, n) {
  if (e.search(kN) >= 0)
    throw au(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new tc(...e.split("."))._internalPath;
  } catch {
    throw au(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function au(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let a = `Function ${e}() called with invalid data`;
  n && (a += " (via `toFirestore()`)"), (a += ". ");
  let l = "";
  return (
    (s || o) &&
      ((l += " (found"),
      s && (l += ` in field ${r}`),
      o && (l += ` in document ${i}`),
      (l += ")")),
    new U(k.INVALID_ARGUMENT, a + t + l)
  );
}
function p1(t, e) {
  return t.some((n) => n.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class m1 {
  constructor(e, n, r, i, s) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = s);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new Nt(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new DN(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(g1("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class DN extends m1 {
  data() {
    return super.data();
  }
}
function g1(t, e) {
  return typeof e == "string"
    ? Bp(t, e)
    : e instanceof tc
      ? e._internalPath
      : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function NN(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new U(
      k.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
class LN {
  convertValue(e, n = "none") {
    switch (hi(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return je(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(ci(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw Q();
    }
  }
  convertObject(e, n) {
    return this.convertObjectMap(e.fields, n);
  }
  convertObjectMap(e, n = "none") {
    const r = {};
    return (
      vi(e, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(e) {
    return new Up(je(e.latitude), je(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = vp(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(Xo(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = Pr(e);
    return new He(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = Re.fromString(e);
    me(ME(r));
    const i = new Yo(r.get(1), r.get(3)),
      s = new z(r.popFirst(5));
    return (
      i.isEqual(n) ||
        kn(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      s
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function VN(t, e, n) {
  let r;
  return (
    (r = t
      ? n && (n.merge || n.mergeFields)
        ? t.toFirestore(e, n)
        : t.toFirestore(e)
      : e),
    r
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eo {
  constructor(e, n) {
    (this.hasPendingWrites = e), (this.fromCache = n);
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class y1 extends m1 {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = s);
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new yl(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(n, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      );
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(g1("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class yl extends y1 {
  data(e = {}) {
    return super.data(e);
  }
}
class ON {
  constructor(e, n, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new eo(i.hasPendingWrites, i.fromCache)),
      (this.query = r);
  }
  get docs() {
    const e = [];
    return this.forEach((n) => e.push(n)), e;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new yl(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new eo(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new U(
        k.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (i, s) {
          if (i._snapshot.oldDocs.isEmpty()) {
            let o = 0;
            return i._snapshot.docChanges.map((a) => {
              const l = new yl(
                i._firestore,
                i._userDataWriter,
                a.doc.key,
                a.doc,
                new eo(
                  i._snapshot.mutatedKeys.has(a.doc.key),
                  i._snapshot.fromCache
                ),
                i.query.converter
              );
              return (
                a.doc, { type: "added", doc: l, oldIndex: -1, newIndex: o++ }
              );
            });
          }
          {
            let o = i._snapshot.oldDocs;
            return i._snapshot.docChanges
              .filter((a) => s || a.type !== 3)
              .map((a) => {
                const l = new yl(
                  i._firestore,
                  i._userDataWriter,
                  a.doc.key,
                  a.doc,
                  new eo(
                    i._snapshot.mutatedKeys.has(a.doc.key),
                    i._snapshot.fromCache
                  ),
                  i.query.converter
                );
                let u = -1,
                  c = -1;
                return (
                  a.type !== 0 &&
                    ((u = o.indexOf(a.doc.key)), (o = o.delete(a.doc.key))),
                  a.type !== 1 &&
                    ((o = o.add(a.doc)), (c = o.indexOf(a.doc.key))),
                  { type: MN(a.type), doc: l, oldIndex: u, newIndex: c }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function MN(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return Q();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ai(t) {
  t = Kn(t, Nt);
  const e = Kn(t.firestore, Ta);
  return vN(Fp(e), t._key).then((n) => jN(e, t, n));
}
class v1 extends LN {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new gs(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new Nt(this.firestore, null, n);
  }
}
function yn(t) {
  t = Kn(t, ec);
  const e = Kn(t.firestore, Ta),
    n = Fp(e),
    r = new v1(e);
  return NN(t._query), _N(n, t._query).then((i) => new ON(e, r, t, i));
}
function tl(t, e, n) {
  t = Kn(t, Nt);
  const r = Kn(t.firestore, Ta),
    i = VN(t.converter, e, n);
  return _1(r, [
    CN(h1(r), "setDoc", t._key, i, t.converter !== null, n).toMutation(
      t._key,
      Pn.none()
    ),
  ]);
}
function FN(t, e, n, ...r) {
  t = Kn(t, Nt);
  const i = Kn(t.firestore, Ta),
    s = h1(i);
  let o;
  return (
    (o =
      typeof (e = tn(e)) == "string" || e instanceof tc
        ? xN(s, "updateDoc", t._key, e, n, r)
        : PN(s, "updateDoc", t._key, e)),
    _1(i, [o.toMutation(t._key, Pn.exists(!0))])
  );
}
function _1(t, e) {
  return (function (r, i) {
    const s = new An();
    return (
      r.asyncQueue.enqueueAndForget(async () => iN(await yN(r), i, s)),
      s.promise
    );
  })(Fp(t), e);
}
function jN(t, e, n) {
  const r = n.docs.get(e._key),
    i = new v1(t);
  return new y1(
    t,
    i,
    e._key,
    r,
    new eo(n.hasPendingWrites, n.fromCache),
    e.converter
  );
}
(function (e, n = !0) {
  (function (i) {
    Rs = i;
  })(D0),
    Uo(
      new ls(
        "firestore",
        (r, { instanceIdentifier: i, options: s }) => {
          const o = r.getProvider("app").getImmediate(),
            a = new Ta(
              new bx(r.getProvider("auth-internal")),
              new Hx(r.getProvider("app-check-internal")),
              (function (u, c) {
                if (
                  !Object.prototype.hasOwnProperty.apply(u.options, [
                    "projectId",
                  ])
                )
                  throw new U(
                    k.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Yo(u.options.projectId, c);
              })(o, i),
              o
            );
          return (
            (s = Object.assign({ useFetchStreams: n }, s)), a._setSettings(s), a
          );
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    Rr(iy, "4.4.2", e),
    Rr(iy, "4.4.2", "esm2017");
})();
const Ld =
  "data:image/png;base64,UklGRroNAABXRUJQVlA4TK0NAAAvr8THAI9AJm3jX+/udDbIpG38y92/FDJpG/+Cdzab/9gW3iW6QwRIwANFXQiEo7ZtG0naf+y8V+XKiJgAD0/6jF9u/SgNCnh6z7ZtSZIkSdJ9AIDQNw///3PdI0KFCRAA3kNcKyL6PwEK2rZhMIw/6T9H9H8Cgv/5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n/+bKY9WcoreX5dz1lpjjHWXDyGmlGvn7xDuJXln8AeN8zGX/uXBLcfL4O9bn+r43ug5WPw0uZDbVwbXdBEm6WLhr4uWLGZrfB5fFVyCwaRNKPw50ZPD5G1sHxIjWTwi+cJfEJwdntSl8e3A5cLz2jQ+G3ogPLRN/YuhODy6zfytwMng+a/CnwnNYxEptE+EYrGSNvHXQbFYTl+/DLLFktrEHwXZYF1D/yDIBmvrysdAMVhfk/g7oDmsMcXxDTA8Fjr09x9HLPbVXn6JsN6uvPiaxZrb8tLjgHW35Y2XCUtvy9uuOyy/LW86jthC115zzWAXr/6K44id9OP91iw2M/LLLWI/KfGLrVtsqSmvtYRtde2VNhx21o/3WSVsbuKXWcT+mvImGw5bfPXXWCHscuR3WMRGm/ICGxZ7fY23VzXYbUrvrowdt+3FFbDpkV9aw2LbTXllNcLOe35fZWy+KW+rgP33/KbiCyeQyntqWBzCi19S3eAYUnlFVcJJ9Px+yjiMpr6dIs5j4FeTx4k07b3EFw5leiuxw7F045XEFgeTygtpGJzNwG+jTjidpr2LGuGApjdRwRm9+DVUcEpNfQkVHNT0Cio4qhe/fzIOq2lvn4zzmt49GSf24hdPxpk1/bWTcWzzSyfj4IZXTsbRdeN9U3B4qb5tCs5vetcUnGDPL5qKM2zHa6bhFFN7yTQ6RkB+xXTCSQ4vmGFwlh2/XdjgNJv+bmGL80zl1eJwpNOLxeNQh9dKwLG++J0ScbDteKNkHG1q75OC053fJg3nO71LujlgCG8SNjjiF79G2OGQ2/EW8Tjmpr9DIg461TdIwlnP74+C054Uw6g5Xs4aAhnrrpDrOBGdjhuiTujZE/5LulI7DGxw4L0+qIHwL8nXk+Bw5B2rgp4M/r2J/RQEHHrLeqB5/NWrHoGMY2+6EmgX/rKr+1dx8KlpgOHx113fvEEnD1TlLxF+MPLOscXhL8LXLH7T1I27cPyz6GX8btq2CAHMcscev+x4zzJEMEldN/ht03asQQijzDXCr1Pdr0FSAC9xlTDBsltsIYde3grmmDfLQxIvFraKWZatSpBFx6LWaRqoG1UgjY4FbRjMk9o2dRIHWBYztpip4U1iC4G0LGUec702yUMkzZCxjNmmLcoQSjMkrNN00DaoQSxNFzCL+RreHjZyAerilTHjtD0XJJO6cDFNCWNzImTTdNkKmPO1NxXSSV2yOmZdd2aQeIC6YPlpuZ2xEFBqYjUw77YvASJKTarCxK5tyRBSajLFmHnflA4xpSZSeWpxT9jKCahJlJ2a2RMPSaUuTx1zrzuSIKvUxSlOLmxIg7RSlyYzOdoPNuIC02VpYPZtOy4IrOmilKeXdiNBZM2QpDC9azMahNYMQTLTo71gIzUwQ4wY8+9b4SG3lqWoPUDZiQzJtSxE+QHSRgwSHTiWofgAYSMshNexCPkHcPsQIb6XCLkHMNtQIcBeguw5YZIgeAEyD4BduCDDQc8lSHEUHzwhb0GDHCcdx0aQkIWHnuDeQQ9RLrJjzkiGMBfRsQ9AG9BJmtAkxz2A2QALcaYmOP4B3PpFCDR1uUkPEJavQqTNEJv8AGn12MgULEtNe4Cyeh5S7Vho+AH64hXI9SU0t5ke3Ws/SLAQhCZM71q8C6IdZaZML61dhnAnkRnTa0vXId5ZYm47ObqX3soXqsTEyYWlixBwagLTJ1dXrkHEqcvLbadm7oVnI2MwLC95anHlAqTcsrjw1PrCFcj5JS53nJi/152NoCGIy5hYW7gLop6k5Q7Tuu51zxD2LC19WnXdOkkbqrDcYVL+XncHcacmLExzGuuWIPA0ZOXOU0r3sneIvGVZud2E7L3uVubghGXQfNq6RUi9l5W7TCfdy94g91FW7jCZ6153K3jIssJ2KobXLUL0q6jcw0yE+r3sDbJPXVTuTvNo97KzET4YFpW7TaPc6x4h/pZF5a6TyPe6VyhALyt3oxmUe93ZaABEWbm7+Tlq98IH6MAsK/ewP2b6vfAVWrDKys3hpy6+F56NGqAuK/edfyjdSx+gBw0Ly93tj9h2L32BJnTSct+ZfiHda89GFSCIy83+z13jXnwPZZjE5b67/1NXu1e/QB0Webnv7v+Mb/fyM+kDNIG575HsHzCp3xvooRANS8x93y2af2JCvbewQCU6obnve2Rv/hPyud+byKQT4MXmf3LL0V/OGjLWOh9z43sjPbRikpy9LdCLRSexUQzUVZKHZjSskAp0o9NHbJQDgjryUI9ZGRUoyKqK2GgIGpooQEVa1kMVStKrITZaAkkLBejJooMqFCV1DcRGU8CwAgrQlZf+qdCWUfuwURcoyidAYXbVU6ExDSseNioDl+IJUJpR7TSozaJ02OoN6jonQnFa1jgNqtNrHKs7kPRNhPas2qZDfdJQNlZ/wLKqSdCgXtN06NC8ZqOVHIO/rDFEBIDIGOuuEFOunaXCKhG0tRo1x8vgnxvnU65DGhK0qOFV4pIuwh+3ITcWgw49eq3QyMHgZ23ITQScIkFcHC7B4vdtKHz4ElRpWRgunjBNl9rB69ClNBaFy4XZks/j0DllAssr0gJhzibUA5egTsNycDKYOYV62DoUal6LEQnTp1BPmtMo6AvRAx6SQj1lGSrV8CpwwJNS6CdsQKn6RUiEp7WZj5fTKkgrUAyemEI7Wxl6tT0eezy2zXyuBikWww9XCI8e2qly0KzXo7HH49typDJ0a3qwQlhBk/k4DVIuqI8VsYoUx2G6oF1pPNNwWMnQT1KGfnWPVA0W86rHaJCCQXyghAW15RBdULH1afjCmtpygjJ0LI1nGRbLauvxGaRk4B6lG6ysq4fHQc3GBymExXX15GQo2voYGQvs6rHp0LTEDxGxxlc/NE7VwD2DxzIHPjEJyjY9gcdCU+Lj0qFu6/T4wlqbfFqsvjE8OXZYbluPSoLCvebGFivu+jnpULlpZmyx6IFPidU5aPNii2U3+YxEKF3Ds2KLlXftgDSoXT8ptlj8wMfD6h3kKbHD8lM+HBGat0+IHXbQtpPRoHotz+fCJgY+Fmx0D8J0LmyjKaciQPuWyXjspB9HokL90phKxF5SPhBs9A/sTBK20/Xj4KGB4zwKdjQdhgIdXGdRsae2nYRBSsjwHBptChD5HFzQwtcUOmFfbTsFGXo4T4ANtjaegQ5N3H/PYXNtPwFWFVn+tYD9TfsXoYvDjyXssO2b16CNy08VbHLaOjbqiMYPNWyzGxvnoY/d7wyzT6CybQUaOf0KW2y15z0bpJLQfsRjs03bMgedbPgnEvY7bliCVg6/ULDjbuxWg14uf6/TloHyXrFRTMR/jS123fNOeWjm669d2HfT9ylDN+e/lbD1eZc6KSf0v1Sw+Z73yEI72z/Uafdg2g5F6OfwZ9jiAKb9qdDQ9a94HMGLN4dJRRn+GxmH0LS9uaCj/Z9oOId5ZxK0dP4DbA4CPG9LhZqm8e88jqLtm8JGT8H9s4TDSGVPLmjq9I8azmPckQRd3f8JmwMBN7ajQllb/hcXjiTVzWCjrRD/QcKpTHvhoK/rf9ZwLj1vRITCNvxfmYMBO7ahQGX7/wpHk+omDNJZKAcGSFvAFkqbxomB5w0IUNvXkYEdy5ehuPORAdXFa1Dd/cgAeenY6C53aBBWzkF5p0MDx8sWoL77oYHpi5ahv+2pAZUla9Dg8dQAacEGqTC0YwPPq8UWOtzwsYHjxfLQ4uHcwPSlStDj9dyAykIVKHLD5wZIy9Sgyv3JQVikQboM5eTA8QqxhTInPjkwfYEuqHN/dEB1eSIUejk6QF6cBI1OfHaQliZDp/vDA78wFVo9Hx44XpVOao348MD0NRkGev06PaC2Imyh2fPpAcp6sINqp3F8kFaDHZT7dX4QFuOCes/nBxevhId+p3F+YMc6BGj46wDB9FUI0PE5gUB1DSKUPGUQkFcg4lsxPV/E12J4uojvRcePFvDFaMeDBXwzmv5YAV+NVB/K48MxPxE7fDrG52GLj8fwNN3g89HxozTCB6QdD1IIn5CmPUbCVySVh/D4kMxPwA6fkmF+zeBj8uLJZXxP2jEzDviiNH1e3eKbksqsMr4r05TY48vS83yKwbelHZNhj89L06ZSCF+YeR7s8ZHpeQ6cCJ+Zts+gGHxq5p9rDl+bbvxU8/jgpPQ79cJHpym/USw+PE0cf20kg69PV/jvcL7wCUqh8F/gEggfoi61f1OTw/coXTE3/n/jmqPDl6lxPoSUck4xBu8I/9///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M//ExMA";
function UN() {
  const e = N0({
      apiKey: "AIzaSyBFM1NKZw0bL12YcOJjeUoN-zjWbVIsKxQ",
      authDomain: "recipehub-functional.firebaseapp.com",
      projectId: "recipehub-functional",
      storageBucket: "recipehub-functional.appspot.com",
      messagingSenderId: "631320300172",
      appId: "1:631320300172:web:2bcb5b2ab7ff65d4e189a9",
      measurementId: "G-EES3WZGXSZ",
    }),
    n = RN(e),
    r = AP(e),
    i = {};
  (i.fetchRecipeList = async () => {
    const o = [];
    return (
      (await yn(Vt(n, "recipes"))).forEach((l) => {
        const u = { name: l.id, ...l.data() };
        o.push(u);
      }),
      o
    );
  }),
    (i.fetchRecipeImages = async (o) => {
      const a = [];
      for (const l of o)
        try {
          console.log(`Fetching image for ${l.name}`);
          const u = qa(r, `/images/${l.name}.png`),
            c = await Wc(u);
          console.log(`Fetched image for ${l.name}:`, c),
            a.push({ recipeName: l.name, imageUrl: c });
        } catch (u) {
          console.error(`Error fetching image for ${l.name}:`, u),
            a.push({ recipeName: l.name, imageUrl: Ld });
        }
      return a;
    }),
    (i.fetchRecipeNames = async () => {
      try {
        if (!n) {
          console.error("Database not initialized!");
          return;
        }
        const o = await yn(Vt(n, "recipes")),
          a = [];
        for (let l of o.docs) a.push(l.id);
        return a;
      } catch (o) {
        return console.error("Error fetching recipes:", o), [];
      }
    }),
    (i.fetchUserSpecificRecipeNames = async (o) => {
      try {
        const a = Vt(n, "users"),
          l = await yn(a);
        if (!l.empty) {
          const u = l.docs[0],
            c = gn(n, "users", u.id),
            h = await Ai(c);
          if (h.exists()) {
            const d = h.data();
            console.log("userDocData -- ", d);
            const g = d[o] || [];
            return console.log("Fetched current recipes", g), g;
          } else console.log("User document does not exist.");
        }
      } catch (a) {
        console.error("Error updating createdRecipes array:", a);
      }
    }),
    (i.fetchRecipeDetails = async (o) => {
      try {
        const a = gn(n, "recipes", o),
          l = await Ai(a);
        if (l.exists()) {
          const u = l.data(),
            c = Vt(n, "recipes", o, "ingredients"),
            h = await yn(c),
            d = [];
          return (
            h.docs.forEach((_) => {
              const w = _.data(),
                E = { ingredientName: _.id, ingredientQuantity: w.qty };
              d.push(E);
            }),
            {
              recipeName: o,
              recipeAuthor: u.author,
              recipeInstructions: u.instructions,
              recipeIngredients: d,
            }
          );
        } else return console.log("Recipe not found -- js file"), null;
      } catch (a) {
        return console.error("Error fetching recipe details:", a), null;
      }
    }),
    (i.fetchForkedRecipe = async (o) => {
      try {
        const a = Vt(n, "users"),
          l = await yn(a);
        if (!l.empty) {
          const u = l.docs[0],
            c = gn(n, "users", u.id),
            h = await Ai(c);
          if (h.exists()) {
            console.log("userdocsnap exists", h);
            const d = Vt(c, "forkedRecipes"),
              g = gn(d, o),
              _ = await Ai(g);
            if (_.exists()) {
              const w = Vt(d, o, "ingredients"),
                E = await yn(w),
                p = [];
              return (
                E.docs.forEach((m) => {
                  const R = m.data();
                  p.push(m.id, R.qty);
                }),
                {
                  recipeName: o,
                  recipeAuthor: _.data().author,
                  recipeInstructions: _.data().instructions,
                  recipeIngredients: p,
                }
              );
            } else console.log("userdocSnap does not exist");
          }
        }
      } catch (a) {
        console.log("Error in fetchForkedRecipe: ", a);
      }
    }),
    (i.downloadImage = async (o) => {
      try {
        console.log("trying to download image", o);
        const a = qa(r, `/images/${o}.png`);
        return console.log("printing URL - ", a), await Wc(a);
      } catch (a) {
        console.error("Error downloading image:", a);
      }
    }),
    (i.addRecipeToFirestore = async (o) => {
      try {
        console.log("Adding recipe to firestore now !! -- ", o),
          console.log("step 1 - uploading");
        const a = o.recipeImageURL,
          l = qa(r, `/images/${o.recipeName}.png`);
        await IP(l, a),
          console.log("step 1 completed"),
          console.log("step 2 -- update doc with image url");
        const u = gn(n, "recipes", o.recipeName);
        await tl(u, {
          author: o.recipeAuthor,
          instructions: o.recipeInstructions,
        }),
          console.log("step 2 completed"),
          console.log("Step 3 - adding ingrds");
        for (const c of o.recipeIngredients) {
          const h = gn(
            n,
            "recipes",
            o.recipeName,
            "ingredients",
            c.ingredientName
          );
          await tl(h, { qty: c.ingredientQuantity });
        }
        console.log("step 3 completed"),
          console.log("Step 4 - update user contributions"),
          s(o.recipeName),
          console.log("Recipe added successfully!");
      } catch (a) {
        console.error("Error adding recipe to Firestore:", a);
      }
    });
  const s = async (o) => {
    try {
      const a = Vt(n, "users"),
        l = await yn(a);
      if (!l.empty) {
        const u = l.docs[0],
          c = gn(n, "users", u.id),
          h = await Ai(c);
        if (h.exists()) {
          const _ = [...(h.data().createdRecipes || []), o];
          await FN(c, { createdRecipes: _ }),
            console.log("Value added to createdRecipes array successfully.");
        } else console.log("User document does not exist.");
      }
    } catch (a) {
      console.error("Error updating createdRecipes array:", a);
    }
  };
  return (
    (i.addForkedRecipeToUser = async (o) => {
      try {
        console.log("Adding forked recipe name to user");
        const a = Vt(n, "users"),
          l = await yn(a);
        if (!l.empty) {
          const u = l.docs[0],
            c = gn(n, "users", u.id),
            h = await Ai(c);
          if (h.exists()) {
            console.log("userdocsnap exists", h);
            const d = Vt(c, "forkedRecipes"),
              {
                recipeName: g,
                recipeAuthor: _,
                recipeInstructions: w,
                recipeIngredients: E,
              } = o;
            console.log("extracted data and building object");
            const p = { author: _, instructions: w },
              f = gn(d, g);
            await tl(f, p),
              console.log(
                "New recipe added to forkedRecipes collection with ID:",
                f.id
              );
            const m = Vt(f, "ingredients");
            E.forEach(async (R) => {
              const I = { qty: R.ingredientQuantity };
              await tl(gn(m, R.ingredientName), I);
            }),
              console.log(
                "New forked recipe added to collection forkedRecipes"
              );
          } else console.log("User document does not exist.");
        }
      } catch (a) {
        console.error("Error updating createdRecipes array:", a);
      }
    }),
    (i.fetchUserForkedRecipeNames = async () => {
      try {
        if (!n) return console.error("Database not initialized!"), [];
        const o = Vt(n, "users"),
          a = await yn(o);
        if (a.empty) return console.log("Users collection is empty."), [];
        {
          const l = a.docs[0],
            u = Vt(o, l.id, "forkedRecipes"),
            c = await yn(u);
          if (c.empty)
            return console.log("Forked recipes collection is empty."), [];
          {
            const h = c.docs.map((d) => d.id);
            return console.log("Forked Recipe Names:", h), h;
          }
        }
      } catch (o) {
        return console.error("Error fetching forked recipes:", o), [];
      }
    }),
    (i.fetchImagesForRecipes = async (o) => {
      const a = [];
      for (const l of o)
        try {
          const u = qa(r, `/images/${l.name}.png`),
            c = await Wc(u);
          a.push({ ...l, imageUrl: c });
        } catch (u) {
          if (u instanceof Pe && u.code === "storage/object-not-found")
            console.error(`Image for ${l.name} not found. Using placeholder.`),
              a.push({ ...l, imageUrl: Ld });
          else
            throw (console.error(`Error fetching image for ${l.name}:`, u), u);
        }
      return a;
    }),
    i
  );
}
const On = new UN(),
  w1 = ({ recipeName: t }) => {
    const [e, n] = x.useState(null);
    return (
      x.useEffect(() => {
        (async () => {
          try {
            console.log("Downloading image for recipe:", t);
            const i = await On.downloadImage(t);
            n(i);
          } catch (i) {
            throw (console.error("Error downloading image:", i), i);
          }
        })();
      }, []),
      console.log("Image URL:", e),
      v.jsx("div", {
        children: e
          ? v.jsx("img", {
              className: "recipe-image-display",
              src: e,
              alt: "Downloaded",
            })
          : v.jsx("p", { children: "Loading image..." }),
      })
    );
  };
w1.propTypes = { recipeName: Ge.string };
const E1 = ({ recipeDetails: t }) => (
  console.log("Recipe ingredients:", t.recipeIngredients),
  v.jsx(v.Fragment, {
    children:
      t && t.recipeName
        ? v.jsxs(v.Fragment, {
            children: [
              v.jsxs("div", {
                className: "recipe-image-ing-display",
                children: [
                  v.jsx(w1, { recipeName: t.recipeName }),
                  v.jsx("div", {
                    className: "content-container",
                    children: v.jsxs("div", {
                      className: "ingredients-section",
                      children: [
                        v.jsx("h3", { children: "Ingredients:" }),
                        v.jsx("ul", {
                          children: t.recipeIngredients.map((e, n) =>
                            v.jsxs(
                              "li",
                              {
                                children: [
                                  e.ingredientName,
                                  ":",
                                  " ",
                                  e.ingredientQuantity,
                                ],
                              },
                              n
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "instructions-section",
                children: [
                  v.jsx("h3", { children: "Preparation:" }),
                  v.jsx("ol", {
                    children: t.recipeInstructions.map((e, n) =>
                      v.jsx("li", { children: e }, n)
                    ),
                  }),
                ],
              }),
            ],
          })
        : v.jsx("p", { children: "Loading recipe details..." }),
  })
);
E1.propTypes = {
  recipeDetails: Ge.shape({
    recipeName: Ge.string,
    recipeAuthor: Ge.string,
    recipeInstructions: Ge.arrayOf(Ge.string),
    recipeIngredients: Ge.arrayOf(Ge.objectOf(Ge.string)),
  }),
};
function zp() {
  const t = [];
  return (
    (t.fetchRecipeDetails = async (e, n) => {
      try {
        return (
          console.log("checking isForked to fetch recipe", n),
          n === "true"
            ? (console.log("fetching forkedRecipe from firebase"),
              await On.fetchForkedRecipe(e))
            : (console.log("fetching og recipe from firebase"),
              await On.fetchRecipeDetails(e))
        );
      } catch (r) {
        return console.error("Error fetching recipes in RecipeDetails:", r), [];
      }
    }),
    (t.fetchRecipeNames = async () => {
      try {
        return await On.fetchRecipeNames();
      } catch (e) {
        return console.error("Error fetching recipes in RecipeDetails:", e), [];
      }
    }),
    (t.fetchMyRecipeNames = async () => {
      try {
        return On.fetchUserSpecificRecipeNames("createdRecipes");
      } catch (e) {
        return console.error("Error fetching recipes in RecipeDetails:", e), [];
      }
    }),
    (t.fetchUserForkedRecipeNames = async () => {
      try {
        return On.fetchUserForkedRecipeNames();
      } catch (e) {
        console.log("Error fetching recipes in RecipeDetails: ", e);
      }
    }),
    t
  );
}
zp.propTypes = {
  recipeName: Ge.string,
  recipeAuthor: Ge.string,
  recipeInstructions: Ge.objectOf(Ge.string),
  recipeIngredients: Ge.arrayOf(Ge.objectOf(Ge.string)),
  recipeImageURL: Ge.string,
};
function bN() {
  const [t, e] = x.useState({}),
    [n, r] = x.useState(!1);
  x.useEffect(() => {
    const s = new URLSearchParams(window.location.search),
      o = s.get("recipe_name"),
      l = s.get("isForked") === "true";
    r(l), o && i(o, l);
  }, []);
  const i = async (s, o) => {
    try {
      const a = await zp().fetchRecipeDetails(s, o);
      a ? e(a) : console.log("Recipe not found");
    } catch (a) {
      console.error("Error fetching recipe details:", a);
    }
  };
  return v.jsxs(v.Fragment, {
    children: [
      v.jsxs("div", {
        className: "body",
        children: [
          v.jsx(aa, { headerTag: t.recipeName }),
          v.jsx("div", { className: "sep-line" }),
          v.jsxs("div", {
            className: "author-back-feature",
            children: [
              v.jsx(Ft, {
                to: "/recipeList",
                children: v.jsx(Mf, { className: "back-arrow" }),
              }),
              v.jsx("div", {
                className: "author-tag",
                children: v.jsx("p", {
                  className: "author-text",
                  children: t.recipeAuthor,
                }),
              }),
            ],
          }),
          v.jsx(Ft, {
            to: `/newUpdate?recipe_details=${encodeURIComponent(JSON.stringify(t))}&isForked=true`,
            children:
              !n &&
              v.jsxs("div", {
                className: "fork-tag",
                children: [
                  v.jsx(HI, { className: "fork-icon" }),
                  v.jsx("p", { className: "fork-text", children: "Fork" }),
                ],
              }),
          }),
          v.jsx(E1, { recipeDetails: t }),
        ],
      }),
      v.jsx(Ff, {}),
    ],
  });
}
function T1() {
  const t = () => {
    alert("This feature has been disabled!");
  };
  return v.jsx(v.Fragment, {
    children: v.jsx("header", {
      children: v.jsxs("div", {
        className:
          "header container-fluid d-flex justify-content-between align-items-center",
        children: [
          v.jsxs("div", {
            className: "logo-and-text",
            children: [
              v.jsx("a", {
                className: "navbar-brand",
                href: "#",
                children: v.jsx("img", {
                  src: g0,
                  alt: "Logo",
                  width: "70",
                  height: "70",
                }),
              }),
              v.jsx("h1", { className: "app-name", children: "RecipeHub" }),
            ],
          }),
          v.jsxs("form", {
            className: "search-form d-flex",
            children: [
              v.jsx("input", {
                className: "search-input form-control me-2",
                type: "search",
                placeholder: "Search",
                "aria-label": "Search",
                onClick: t,
                disabled: !0,
              }),
              v.jsx("button", {
                className: "search-button btn btn-outline-success",
                type: "submit",
                onMouseDown: t,
                children: "Search",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function $N() {
  return v.jsx(v.Fragment, {
    children: v.jsx("nav", {
      className: "navbar",
      children: v.jsx("div", {
        className: "d-flex justify-content-between",
        children: v.jsxs("ul", {
          className: "list-unstyled d-flex",
          children: [
            v.jsx("li", {
              className: "me-3",
              children: v.jsx(Ft, {
                to: "/underConstruction",
                children: "Overview",
              }),
            }),
            v.jsx("li", {
              className: "me-3",
              children: v.jsx(Ft, {
                to: "/recipeList",
                children: "All Recipes",
              }),
            }),
            v.jsx("li", {
              className: "me-3",
              children: v.jsx(Ft, { to: "/myList", children: "My Recipes" }),
            }),
            v.jsx("li", {
              className: "me-3",
              children: v.jsx(Ft, {
                to: "/myForkedList",
                children: "Forked Recipes",
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
const BN = "/assets/display-picture--xPETbSc.png";
function zN() {
  return v.jsx(v.Fragment, {
    children: v.jsxs("div", {
      className: "flex-box-user",
      children: [
        v.jsx("div", {
          className: "flex-box-user user-display",
          children: v.jsx("img", {
            src: BN,
            alt: "User Profile",
            className: "user-image",
          }),
        }),
        v.jsx("div", {
          className: "d-flex flex-box-user username-tag",
          children: "DiyaWadhwani",
        }),
        v.jsx("div", {
          className: "flex-box-user",
          children: v.jsx("div", {
            className: "d-grid gap-2",
            children: v.jsx(Ft, {
              to: "/",
              children: v.jsx("button", {
                className: "btn btn-primary edit-profile",
                type: "button",
                children: "Logout",
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
const HN = () => {
  const [t, e] = x.useState([]);
  return (
    x.useEffect(() => {
      const n = async () => [
        { name: "Cheeseburger", imageUrl: null },
        { name: "Margherita Pizza", imageUrl: null },
        { name: "Chicken Momos", imageUrl: null },
        { name: "Cannoli", imageUrl: null },
      ];
      (async () => {
        try {
          const i = await n();
          e(i);
          const s = await On.fetchImagesForRecipes(i);
          console.log("New recipe list:", s), e(s);
        } catch (i) {
          console.error("Error fetching recipe list:", i);
        }
      })();
    }, []),
    v.jsx(v.Fragment, {
      children: v.jsxs("div", {
        className: "flex-box-recipes",
        children: [
          v.jsx("div", {
            children: v.jsx("h2", { children: "Popular Recipes" }),
          }),
          v.jsx("div", {
            className: "popular-recipes-grid-container",
            children: t.map((n, r) =>
              v.jsx(
                "div",
                {
                  className: "popular-recipes-grid-item",
                  children: v.jsx(Ft, {
                    to: `/recipe?recipe_name=${n.name}`,
                    children: v.jsx("img", {
                      className: "food-imgs",
                      src: n.imageUrl || Ld,
                      alt: `Image ${r + 1}`,
                      width: "400",
                      height: "250",
                    }),
                  }),
                },
                r
              )
            ),
          }),
        ],
      }),
    })
  );
};
function WN() {
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx(T1, {}),
      v.jsx($N, {}),
      v.jsxs("div", {
        className: "body",
        children: [
          v.jsx("div", { className: "sep-line" }),
          v.jsxs("div", {
            className: "d-flex flex-col mb-2",
            children: [v.jsx(zN, {}), v.jsx(HN, {})],
          }),
        ],
      }),
      v.jsx(Ff, {}),
    ],
  });
}
function rr() {
  return v.jsxs("div", {
    className: "App",
    children: [
      v.jsx(T1, {}),
      v.jsx("h1", { children: "Error page not found" }),
      v.jsx("div", {
        children: `I'm so sorry but I lost the page you were looking for. Please try
          again. written by copilot`,
      }),
    ],
  });
}
function ih() {
  const t = zp(),
    [e, n] = x.useState([]),
    [r, i] = x.useState(!1);
  function s() {
    alert("This feature has been disabled!");
  }
  x.useEffect(() => {
    o();
  }, []);
  const o = async () => {
    try {
      const a = new URL(window.location.href);
      if (a.pathname === "/myList") {
        console.log("Maintaining my recipes");
        const l = await t.fetchMyRecipeNames();
        console.log("Recipes from fetchMyRecipeNames:", l), n(l), i(!1);
      } else if (a.pathname === "/myForkedList") {
        console.log("Maintaining forked recipes");
        const l = await t.fetchUserForkedRecipeNames();
        console.log("Recipes from fetchForkedRecipeNames:", l), n(l), i(!0);
      } else {
        const l = await t.fetchRecipeNames();
        console.log("Recipes from fetchRecipes:", l), n(l), i(!1);
      }
    } catch (a) {
      console.error("Error fetching recipes in RecipeList:", a);
    }
  };
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx(aa, { headerTag: "RecipeHub" }),
      v.jsxs("div", {
        className: "body",
        children: [
          v.jsx("div", { className: "sep-line" }),
          v.jsx(Ft, {
            to: "/homepage",
            children: v.jsx(Mf, { className: "back-arrow" }),
          }),
          v.jsxs("form", {
            className: "find-recipe search-form d-flex",
            children: [
              v.jsx("input", {
                className: "search-bar-input search-input form-control me-2",
                type: "search",
                placeholder: "Find a recipe",
                "aria-label": "Search",
                onClick: s,
                disabled: !0,
              }),
              v.jsx("div", { className: "random-padding" }),
              v.jsx(Ft, {
                to: "/newUpdate",
                children: v.jsx("button", {
                  className: "new-button search-button btn btn-success",
                  type: "submit",
                  children: "New",
                }),
              }),
            ],
          }),
          v.jsx("div", {
            className: "recipe-list",
            children:
              e && e.length > 0
                ? v.jsx("ul", {
                    className: "list-unstyled",
                    children: e.map((a, l) =>
                      v.jsx(
                        "li",
                        {
                          children: v.jsx(Ft, {
                            to: `/recipe?recipe_name=${a}&isForked=${r}`,
                            children: a,
                          }),
                        },
                        l
                      )
                    ),
                  })
                : v.jsx("p", { children: "No recipes found." }),
          }),
          v.jsx(Ff, {}),
        ],
      }),
    ],
  });
}
function qN() {
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx(aa, { headerTag: "RecipeHub" }),
      v.jsxs("div", {
        style: { textAlign: "center", marginTop: "50px" },
        children: [
          v.jsx("h1", { children: "This page is under construction" }),
          v.jsx("p", { children: "Please check back in a few days." }),
        ],
      }),
    ],
  });
}
function QN() {
  const [t, e] = x.useState(""),
    [n, r] = x.useState([{ ingredientName: "", ingredientQuantity: "" }]),
    [i, s] = x.useState([""]),
    [o, a] = x.useState(""),
    [l, u] = x.useState(null),
    [c, h] = x.useState(!1);
  x.useEffect(() => {
    const m = new URLSearchParams(window.location.search),
      R = m.get("recipe_details");
    if ((h(m.get("isForked") === "true"), R))
      try {
        const I = typeof R == "string" ? JSON.parse(decodeURIComponent(R)) : R;
        console.log("recipeDetails -- ", I.recipeAuthor, I.recipeIngredients),
          e(I.recipeName),
          r(I.recipeIngredients),
          a(I.recipeAuthor),
          s(I.recipeInstructions),
          u(I.recipeName + ".png");
      } catch (I) {
        console.error("Error parsing recipeDetailsParam:", I);
      }
  }, []);
  const d = (m) => {
      const { name: R, value: I } = m.target;
      switch (R) {
        case "recipeName":
          e(I);
          break;
        case "authorName":
          a(I);
          break;
      }
    },
    g = (m, R) => {
      const { name: I, value: y } = m.target,
        C = [...n];
      (C[R][I] = y), r(C);
    },
    _ = (m, R) => {
      const { value: I } = m.target,
        y = [...i];
      (y[R] = I), s(y);
    },
    w = () => {
      r([...n, { ingredientName: "", ingredientQuantity: "" }]);
    },
    E = () => {
      s([...i, ""]);
    },
    p = (m) => {
      const R = m.target.files[0];
      u(R);
    },
    f = (m) => {
      m.preventDefault();
      const R = {
        recipeName: t,
        recipeAuthor: o,
        recipeInstructions: i,
        recipeImageURL: l,
        recipeIngredients: n,
        isForked: c,
      };
      if ((console.log("RecipeDetails instance:", R), c))
        On.addForkedRecipeToUser(R);
      else {
        const I = On.addRecipeToFirestore(R);
        console.log("Response from adding to the db -- ", I);
      }
      e(""),
        r([{ ingredientName: "", ingredientQuantity: "" }]),
        s([""]),
        a(""),
        u(null),
        alert("Thank you for sharing your recipe to RecipeHub!");
    };
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx(aa, { headerTag: "RecipeHub" }),
      v.jsx(Ft, {
        to: "/recipeList",
        children: v.jsx(Mf, { className: "back-arrow" }),
      }),
      v.jsx("div", {
        className: "form-styling",
        children: v.jsxs("form", {
          onSubmit: f,
          className: "container mt-4",
          children: [
            v.jsxs("div", {
              className: "mb-3",
              children: [
                v.jsx("label", {
                  className: "form-label",
                  children: "Recipe Name(required) :",
                }),
                v.jsx("input", {
                  type: "text",
                  className: "form-control",
                  name: "recipeName",
                  value: t,
                  onChange: d,
                  required: !0,
                }),
              ],
            }),
            v.jsxs("div", {
              className: "mb-3",
              children: [
                v.jsx("label", {
                  className: "form-label",
                  children: "Ingredients(required) :",
                }),
                n.map((m, R) =>
                  v.jsxs(
                    "div",
                    {
                      className: "mb-2",
                      children: [
                        v.jsx("input", {
                          type: "text",
                          className: "form-control",
                          name: "ingredientName",
                          placeholder: "Ingredient Name",
                          value: m.ingredientName,
                          onChange: (I) => g(I, R),
                          required: !0,
                        }),
                        v.jsx("input", {
                          type: "text",
                          className: "form-control mt-2",
                          name: "ingredientQuantity",
                          placeholder: "Ingredient Quantity",
                          value: m.ingredientQuantity,
                          onChange: (I) => g(I, R),
                          required: !0,
                        }),
                      ],
                    },
                    R
                  )
                ),
                v.jsx("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: w,
                  children: "Add Ingredient",
                }),
              ],
            }),
            v.jsxs("div", {
              className: "mb-3",
              children: [
                v.jsx("label", {
                  className: "form-label",
                  children: "Instructions(required) :",
                }),
                i.map((m, R) =>
                  v.jsx(
                    "div",
                    {
                      className: "mb-2",
                      children: v.jsx("textarea", {
                        className: "form-control",
                        name: "instruction",
                        placeholder: `Step ${R + 1}`,
                        value: m,
                        onChange: (I) => _(I, R),
                        required: !0,
                      }),
                    },
                    R
                  )
                ),
                v.jsx("button", {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: E,
                  children: "Add Instruction",
                }),
              ],
            }),
            v.jsxs("div", {
              className: "mb-3",
              children: [
                v.jsx("label", {
                  className: "form-label",
                  children: "Author Name(required) :",
                }),
                v.jsx("input", {
                  type: "text",
                  className: "form-control",
                  name: "authorName",
                  value: o,
                  onChange: d,
                  required: !0,
                }),
              ],
            }),
            v.jsxs("div", {
              className: "mb-3",
              children: [
                v.jsx("label", {
                  className: "form-label",
                  children: "Upload Image(optional) :",
                }),
                v.jsx("input", {
                  type: "file",
                  accept: "image/*",
                  className: "form-control",
                  onChange: p,
                }),
              ],
            }),
            v.jsx("button", {
              type: "submit",
              className: "btn btn-primary custom-btn",
              children: "Save",
            }),
          ],
        }),
      }),
    ],
  });
}
const KN = () => {
    const [t, e] = x.useState(""),
      [n, r] = x.useState(""),
      [i, s] = x.useState(""),
      o = (u) => e(u.target.value),
      a = (u) => r(u.target.value),
      l = (u) => {
        u.preventDefault(),
          t === "diya@gmail.com" && n === "diya@2024"
            ? (window.location.href = "/homepage")
            : s("Invalid email or password");
      };
    return v.jsx("div", {
      className: "login-container",
      children: v.jsx("div", {
        className: "row justify-content-center align-items-center h-100",
        children: v.jsxs("div", {
          className: "col-md-6 login-form-container",
          children: [
            v.jsx("h2", { className: "login-title", children: "Login" }),
            v.jsxs("form", {
              className: "login-form",
              onSubmit: l,
              children: [
                v.jsx("div", {
                  className: "form-group",
                  children: v.jsx("input", {
                    type: "email",
                    className: "form-control input-field",
                    placeholder: "Email",
                    value: t,
                    onChange: o,
                    required: !0,
                  }),
                }),
                v.jsx("div", {
                  className: "form-group",
                  children: v.jsx("input", {
                    type: "password",
                    className: "form-control input-field",
                    placeholder: "Password",
                    value: n,
                    onChange: a,
                    required: !0,
                  }),
                }),
                i && v.jsx("div", { className: "error-message", children: i }),
                v.jsx("button", {
                  type: "submit",
                  className: "btn btn-primary submit-button",
                  children: "Login",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  GN = RI([
    { path: "/myList", element: v.jsx(ih, {}), errorElement: v.jsx(rr, {}) },
    {
      path: "/myForkedList",
      element: v.jsx(ih, {}),
      errorElement: v.jsx(rr, {}),
    },
    { path: "/newUpdate", element: v.jsx(QN, {}), errorElement: v.jsx(rr, {}) },
    {
      path: "/underConstruction",
      element: v.jsx(qN, {}),
      errorElement: v.jsx(rr, {}),
    },
    {
      path: "/recipeList",
      element: v.jsx(ih, {}),
      errorElement: v.jsx(rr, {}),
    },
    { path: "/recipe", element: v.jsx(bN, {}), errorElement: v.jsx(rr, {}) },
    { path: "/homepage", element: v.jsx(WN, {}), errorElement: v.jsx(rr, {}) },
    { path: "/", element: v.jsx(KN, {}), errorElement: v.jsx(rr, {}) },
  ]);
sh.createRoot(document.getElementById("root")).render(
  v.jsx(Un.StrictMode, { children: v.jsx(NI, { router: GN }) })
);
