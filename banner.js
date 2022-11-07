"use strict";
function _typeof(t) {
  "@babel/helpers - typeof";
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
console.log("CTR_IMG_LAZY_LOADER"),
  (window.CTR_IMG_LAZY_LOADER = new Blazy({
    loadInvisible: !0,
    src: "data-ctr-lazy-src",
    selector: ".ctr-lazy-image",
    breakpoints: [
      { width: 768, src: "data-ctr-lazy-mobile-src" },
      { width: 1024, src: "data-ctr-lazy-tablet-src" },
    ],
    success: function (t) {},
    error: function (t) {
      console.log("load image error", t.getAttribute("data-ctr-lazy-src")),
        t.setAttribute("src", t.getAttribute("data-ctr-lazy-src"));
    },
  })),
  window.addEventListener("load", function () {
    window.CTR_IMG_LAZY_LOADER.revalidate();
  });
for (
  var props = {
      in07: {
        ctr__pageConfig: {
          declineUrl: "https://www.shopcontoursrx.com/en/decline.html",
          successUrl: "https://www.shopcontoursrx.com/en/success.html",
          checkoutUrl: "https://www.shopcontoursrx.com/en/order-neck-gs.html",
          confirmUrl: "https://www.shopcontoursrx.com/en/confirm.html",
          cid: "1778a7e2-0018-48d5-9a1e-0fce6bdb09c0",
          gtmID: "",
          crmEndpoint: "https://sales-prod.tryemanagecrm.com/api",
          websaleApiUrl: "https://sales-prod.tryemanagecrm.com/api",
          fpUserInfoGetCode:
            "hjQxSRcBk48Gii/2xmzwb2d08D1sazWO3qzOLwiRwndnSQ3w9zNITw==",
          fpUserInfoPostCode:
            "hjQxSRcBk48Gii/2xmzwb2d08D1sazWO3qzOLwiRwndnSQ3w9zNITw==",
          sourceConfig: { source: null },
        },
      },
    },
    ids = Object.keys(props)
      .map(function (t) {
        return "#" + t;
      })
      .join(","),
    els = document.querySelectorAll(ids),
    i = 0,
    len = els.length;
  i < len;
  i++
) {
  var el = els[i];
  (function (t) {
    try {
      var e = t.addToCartEventName,
        i = t.ctr__pageConfig,
        r = t.ctrwowPackageVersion;
      (window.__ctrPageConfiguration = i),
        r && r.length && (window.__ctrwowPackageVersion = r),
        (function (i) {
          if (i) {
            var r = window.ctrwowUtils;
            r.getDependencies([
              "https://cdnjs.cloudflare.com/ajax/libs/pubsub-js/1.7.0/pubsub.min.js",
            ]).then(function () {
              var e = document.querySelector(".ctr_wow_body");
              e.addEventListener("keyup", function t() {
                r.tracking.pushGtmTrackingEvent(i),
                  e.removeEventListener("keyup", t),
                  window.PubSub && window.PubSub.unsubscribe("show-exit-popup");
              });
            });
          }
        })(e);
    } catch (t) {
      console.log(t);
    }
  }.bind(el)(props[el.id]));
}
for (
  i = 0, len = (items = document.querySelectorAll("#i73d")).length;
  i < len;
  i++
)
  (function () {
    if ((console.log("run - onInitPage - onInitPage"), window.ctrwowUtils)) {
      var t = window.ctrwowUtils;
      if (t.isPreviewMode() || t.isBuilderMode())
        return (
          t.addCommonLinkHandler(),
          t.addCommonImageHandler(),
          void t.addCommonTextHandler()
        );
      $(document).ready(function () {
        t.addCommonLinkHandler(),
          t.addCommonImageHandler(),
          t.addCommonTextHandler();
      });
    }
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#idhqvq")).length;
  i < len;
  i++
)
  (function () {
    try {
      var t = {};
    } catch (t) {
      console.log(t);
    }
    if (window.ctrDebug && window.ctrDebug.run(this, "widget-disclaimer", t))
      return !0;
    (function (i) {
      var r = {};
      function n(t) {
        if (r[t]) return r[t].exports;
        var e = (r[t] = { i: t, l: !1, exports: {} });
        return i[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
      }
      return (
        (n.m = i),
        (n.c = r),
        (n.d = function (t, e, i) {
          n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (n.r = function (t) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e;
          if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
          var i = Object.create(null);
          if (
            (n.r(i),
            Object.defineProperty(i, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var r in e)
              n.d(
                i,
                r,
                function (t) {
                  return e[t];
                }.bind(null, r)
              );
          return i;
        }),
        (n.n = function (t) {
          var e =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 1))
      );
    })([
      function (t, e, i) {},
      function (t, e, i) {
        function r(i) {
          var r = i.getAttribute("active-widget-with-param") || "";
          window.ctrwowUtils.isBuilderMode() ||
            (function () {
              if ("" !== r) {
                var t = r.split("="),
                  e = window.ctrwowUtils.link.getParameterByName(t[0]);
                null != e &&
                  e.toLowerCase() === t[1].toLowerCase() &&
                  (i.style.display = "none");
              }
            })();
        }
        i.r(e),
          i.d(e, "default", function () {
            return r;
          }),
          i(0);
      },
    ]).default(this, t);
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#i0x2xo")).length;
  i < len;
  i++
)
  (function () {
    var t = this,
      e = parseInt(t.getAttribute("day-bias")) || 0,
      i = new Date(),
      r = new Date(i.setDate(i.getDate() + e));
    try {
      var n = t.getAttribute("date-time-locale") || "en-US",
        o = JSON.parse(t.getAttribute("date-formatter"));
      t.innerHTML = new Intl.DateTimeFormat(n, o || {}).format(r);
    } catch (e) {
      t.innerHTML = new Intl.DateTimeFormat("en-US").format(r);
    }
    console.log("[currentDateTime]controller");
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#it8e9b")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#izxrng")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#i24rtu")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#iknshl")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#iixy0z")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#ipag61")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#izomlh")).length;
  i < len;
  i++
)
  (function () {
    var o = this,
      l = o.getAttribute("param-control")
        ? o.getAttribute("param-control")
        : "";
    !(function () {
      var t = !1;
      if ("" !== l) {
        var e = l.split("=");
        o &&
          o.style &&
          1 < e.length &&
          window.ctrwowUtils.link.getParameterByName(e[0]) === e[1] &&
          (t = !0);
      }
      if (!0 !== t) {
        var i = !!o.hasAttribute("show-comment-with-action");
        i &&
          !ctrwowUtils.isBuilderMode() &&
          o.querySelector(".comment-content") &&
          o.querySelector(".comment-content").classList.add("hidden");
        var r = o.querySelector(".ctr-handle-toggle-click"),
          n = o.querySelector(".comment-content");
        r &&
          i &&
          r.addEventListener("click", function (t) {
            t.preventDefault(),
              n.classList.toggle("hidden"),
              n.scrollIntoView({ behavior: "smooth" });
          });
      } else o.style.display = "none";
    })();
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#i7yqki")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() || $(".ctrwow_tframe_title").hide();
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#iziyoy")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#ijjwjh")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#i4lyf8")).length;
  i < len;
  i++
)
  (function () {
    var t;
    (t = document.querySelector(".DMCA_Logo a")) &&
      (t.href += t.href.includes("refurl") ? "" : "&refurl=" + location.href);
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#ixn5tp")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#iemcff")).length;
  i < len;
  i++
)
  (function () {
    var t,
      e = this,
      i = [],
      r = e.getAttribute("url"),
      n = e.getAttribute("box-title");
    function o(t) {
      return new RegExp(/({\[(\s|\S)*?\]})/g).test(t);
    }
    if (n && n.length)
      document.querySelectorAll('[title="' + n + '"]').forEach(function (t) {
        i.push(t),
          (t.dataset.title = t.getAttribute("title")),
          t.removeAttribute("title");
      });
    else if (
      o(r) ||
      (r &&
        ((t = r),
        new RegExp(
          /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi
        ).test(t)))
    ) {
      var l = document.querySelectorAll("a");
      if (!l.length) return;
      var a = void 0;
      for (a = 0; a < l.length; a++) {
        var c = new RegExp(r, "gi"),
          s = decodeURI(l[a].href);
        o(r) &&
          (c = new RegExp(r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi")),
          s.match(c) &&
            !l[a].closest(".sticky-bar") &&
            l[a].hasAttribute("call-to-action") &&
            i.push(l[a]);
      }
    }
    function d() {
      i.some(function (t) {
        return (
          (i = (e = t.getBoundingClientRect()).top),
          (r = e.bottom),
          (n = e.width),
          (o = e.height),
          (l = window.innerHeight || document.documentElement.clientHeight),
          (0 < i || 0 < r) && i < l && 0 < n && 0 < o
        );
        var e, i, r, n, o, l;
      })
        ? !e.classList.contains("hidden") && e.classList.add("hidden")
        : e.classList.contains("hidden") && e.classList.remove("hidden");
    }
    setTimeout(function () {
      d();
      var t = (window["__ctrStickyBarScrollEvent__" + e.id] = d);
      window.addEventListener("scroll", t);
    }, 2e3);
  }.bind(items[i])());
for (
  i = 0, len = (items = document.querySelectorAll("#iuhssc")).length;
  i < len;
  i++
)
  (function () {
    try {
      var t = {};
    } catch (t) {
      console.log(t);
    }
    if (
      window.ctrDebug &&
      window.ctrDebug.run(this, "widget-hover-scale-button", t)
    )
      return !0;
    (function (i) {
      var r = {};
      function n(t) {
        if (r[t]) return r[t].exports;
        var e = (r[t] = { i: t, l: !1, exports: {} });
        return i[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
      }
      return (
        (n.m = i),
        (n.c = r),
        (n.d = function (t, e, i) {
          n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (n.r = function (t) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e;
          if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
          var i = Object.create(null);
          if (
            (n.r(i),
            Object.defineProperty(i, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var r in e)
              n.d(
                i,
                r,
                function (t) {
                  return e[t];
                }.bind(null, r)
              );
          return i;
        }),
        (n.n = function (t) {
          var e =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 1))
      );
    })([
      function (t, e, i) {},
      function (t, e, i) {
        function r(t) {}
        i.r(e),
          i.d(e, "default", function () {
            return r;
          }),
          i(0);
      },
    ]).default(this, t);
  }.bind(items[i])());
var items;
for (
  i = 0, len = (items = document.querySelectorAll("#i1k94x")).length;
  i < len;
  i++
)
  (function () {
    window.ctrwowUtils.isBuilderMode() ||
      $(this).click(function (t) {
        var e = $("#wrapper"),
          i = $(this).attr("href"),
          r = $(this).attr("target"),
          n = $(this).attr("anchor");
        if (
          (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(), !e.length)
        ) {
          window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
          try {
            new Function("")();
          } catch (t) {
            console.warn("handleOnClick error: " + t);
          }
          if ("popup" == r && !window.ctrwowUtils.isPreviewMode()) {
            t.preventDefault(), console.log("link popup click");
            var o = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal'),
              l =
                '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' +
                i +
                '"></iframe>';
            if (o) {
              var a = $(o[0]).find(".ctr_modal_iframe");
              a.length && $(a[0]).html(l), $(o[0]).addClass("show");
            }
            return;
          }
          if (n && "#" === n[0]) {
            var c = $(n);
            if (c.length) {
              var s = c.offset().top;
              $("body, html").animate({ scrollTop: s + "px" }, 800);
            } else window.location.replace("" + i + n);
            t.preventDefault();
          }
        }
      });
  }.bind(items[i])());
