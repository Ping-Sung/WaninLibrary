/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Partials/Charts/BarChat.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Partials/Charts/BarChat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    canvasId: {
      type: String
    },
    data: {
      type: Array
    },
    label: {
      type: Array
    }
  },
  data: function data() {
    return {
      BarChartByCategoryLabel: [],
      BarChartByCategoryData: [],
      maxValue: null,
      maxValueYear: null,
      maxValueMonth: null,
      BorrowLogsGetListByMonthURL: $('#BorrowLogsGetListByMonthURL').text(),
      BorrowLogsGetListByYearURL: $('#BorrowLogsGetListByYearURL').text(),
      label_month: [],
      data_month: [],
      label_year: [],
      data_year: []
    };
  },
  methods: {
    init: function init() {
      var _this = this;

      var $url = $('#getBookCountByCategoryURL').text();
      var ctx = document.getElementById(this.canvasId);
      axios.get($url).then(function (response) {
        _this.BarChartByCategoryData = response.data.res.count;
        _this.BarChartByCategoryLabel = response.data.res.label;
        _this.maxValue = response.data.res.maxValue;
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: _this.BarChartByCategoryLabel,
            datasets: [{
              label: "本數",
              backgroundColor: "rgba(2,117,216,1)",
              borderColor: "rgba(2,117,216,1)",
              data: _this.BarChartByCategoryData
            }]
          },
          options: {
            scales: {
              xAxes: [{
                time: {
                  unit: '總類'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 13
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: Math.ceil(_this.maxValue / 10) * 10,
                  maxTicksLimit: 5
                },
                gridLines: {
                  display: true
                }
              }]
            },
            legend: {
              display: false
            }
          }
        }); // console.log(response.data);
      })["catch"](function (error) {
        console.error('抓取書籍分類比例時發生錯誤，訊息：' + error);
        $.showErrorModal(error);
      });
      axios.get(this.BorrowLogsGetListByMonthURL).then(function (response) {
        _this.label_month = response.data.res.date;
        _this.data_month = response.data.res.count;
        _this.maxValueMonth = response.data.res.maxValue; // console.log(response.data.res);
        // Area Chart Example

        var BorrowLogsByMonthCtx = document.getElementById("BorrowLogsByMonth");
        var BorrowLogsByMonthChart = new Chart(BorrowLogsByMonthCtx, {
          type: 'line',
          data: {
            labels: _this.label_month,
            datasets: [{
              label: "Sessions",
              lineTension: 0.3,
              backgroundColor: "rgba(2,117,216,0.2)",
              borderColor: "rgba(2,117,216,1)",
              pointRadius: 5,
              pointBackgroundColor: "rgba(2,117,216,1)",
              pointBorderColor: "rgba(255,255,255,0.8)",
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(2,117,216,1)",
              pointHitRadius: 50,
              pointBorderWidth: 2,
              data: _this.data_month
            }]
          },
          options: {
            scales: {
              xAxes: [{
                time: {
                  unit: 'date'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 7
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: Math.ceil(_this.maxValueMonth / 10) * 10,
                  maxTicksLimit: 5
                },
                gridLines: {
                  color: "rgba(0, 0, 0, .125)"
                }
              }]
            },
            legend: {
              display: false
            }
          }
        });
      });
      axios.get(this.BorrowLogsGetListByYearURL).then(function (response) {
        _this.label_year = response.data.res.date;
        _this.data_year = response.data.res.count;
        _this.maxValueYear = response.data.res.maxValue; // console.log(response.data.res);
        // Area Chart Example

        var BorrowLogsByYearCtx = document.getElementById("BorrowLogsByYear");
        var BorrowLogsByYearChart = new Chart(BorrowLogsByYearCtx, {
          type: 'line',
          data: {
            labels: _this.label_year,
            datasets: [{
              label: "Sessions",
              lineTension: 0.3,
              backgroundColor: "rgba(2,117,216,0.2)",
              borderColor: "rgba(2,117,216,1)",
              pointRadius: 5,
              pointBackgroundColor: "rgba(2,117,216,1)",
              pointBorderColor: "rgba(255,255,255,0.8)",
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(2,117,216,1)",
              pointHitRadius: 50,
              pointBorderWidth: 2,
              data: _this.data_year
            }]
          },
          options: {
            scales: {
              xAxes: [{
                time: {
                  unit: 'date'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 7
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: Math.ceil(_this.maxValueYear / 10) * 10,
                  maxTicksLimit: 5
                },
                gridLines: {
                  color: "rgba(0, 0, 0, .125)"
                }
              }]
            },
            legend: {
              display: false
            }
          }
        });
      });
    }
  },
  created: function created() {},
  mounted: function mounted() {
    this.init();
    $('#nav_month').click(function (e) {
      $('#a_month').addClass('active');
      $('#a_year').removeClass('active');
      $('#a_book').removeClass('active');
      $('#div_Year').hide();
      $('#div_Book').hide();
      $('#div_Month').fadeIn();
      $('#i_year').hide();
      $('#i_book').hide();
      $('#i_month').fadeIn();
    });
    $('#nav_year').click(function (e) {
      $('#a_month').removeClass('active');
      $('#a_book').removeClass('active');
      $('#a_year').addClass('active');
      $('#div_Book').hide();
      $('#div_Month').hide();
      $('#div_Year').fadeIn();
      $('#i_year').fadeIn();
      $('#i_book').hide();
      $('#i_month').hide();
    });
    $('#nav_book').click(function (e) {
      $('#a_book').addClass('active');
      $('#a_month').removeClass('active');
      $('#a_year').removeClass('active');
      $('#div_Year').hide();
      $('#div_Month').hide();
      $('#div_Book').fadeIn();
      $('#i_book').fadeIn();
      $('#i_year').hide();
      $('#i_month').hide();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Partials/Charts/BarChat.vue?vue&type=template&id=29537f53&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Partials/Charts/BarChat.vue?vue&type=template&id=29537f53& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card mb-3" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("div", { attrs: { id: "div_Book" } }, [
        _c("canvas", {
          attrs: { id: _vm.canvasId, width: "85%", height: "18" }
        })
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("ul", { staticClass: "nav nav-tabs card-header-tabs" }, [
        _c("li", { staticClass: "nav-item", attrs: { id: "nav_book" } }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { id: "a_book", href: "#" }
            },
            [
              _c("i", {
                staticClass: "fas fa-chart-area mr-2",
                attrs: { id: "i_book" }
              }),
              _vm._v("書籍分類比例")
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item", attrs: { id: "nav_month" } }, [
          _c(
            "a",
            { staticClass: "nav-link", attrs: { id: "a_month", href: "#" } },
            [
              _c("i", {
                staticClass: "fas fa-chart-area mr-2",
                staticStyle: { display: "none" },
                attrs: { id: "i_month" }
              }),
              _vm._v("月別借閱紀錄")
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item", attrs: { id: "nav_year" } }, [
          _c(
            "a",
            { staticClass: "nav-link", attrs: { href: "#", id: "a_year" } },
            [
              _c("i", {
                staticClass: "fas fa-chart-area mr-2",
                staticStyle: { display: "none" },
                attrs: { id: "i_year" }
              }),
              _vm._v("年別借閱紀錄")
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { display: "none" }, attrs: { id: "div_Month" } },
      [
        _c("canvas", {
          attrs: { id: "BorrowLogsByMonth", width: "85%", height: "18" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { display: "none" }, attrs: { id: "div_Year" } },
      [
        _c("canvas", {
          attrs: { id: "BorrowLogsByYear", width: "85%", height: "18" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/backend/index.js":
/*!***************************************!*\
  !*** ./resources/js/backend/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('bar-chart', __webpack_require__(/*! ./../components/Partials/Charts/BarChat.vue */ "./resources/js/components/Partials/Charts/BarChat.vue")["default"]);
var backend = new Vue({
  el: '#backend',
  data: function data() {
    return {
      BarChartByCategoryData: [],
      BarChartByCategoryLabel: []
    };
  },
  methods: {
    getBarChartByCategoryData: function getBarChartByCategoryData() {
      var _this = this;

      var $url = $('#getBookCountByCategoryURL').text();
      axios.get($url).then(function (response) {
        _this.BarChartByCategoryData = response.data.res.count;
        _this.BarChartByCategoryLabel = response.data.res.label; // console.log(response.data);
      })["catch"](function (error) {
        console.error('抓取書籍分類比例時發生錯誤，訊息：' + error);
        $.showErrorModal(error);
      });
    }
  },
  created: function created() {
    this.getBarChartByCategoryData();
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/Partials/Charts/BarChat.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Partials/Charts/BarChat.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarChat_vue_vue_type_template_id_29537f53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarChat.vue?vue&type=template&id=29537f53& */ "./resources/js/components/Partials/Charts/BarChat.vue?vue&type=template&id=29537f53&");
/* harmony import */ var _BarChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarChat.vue?vue&type=script&lang=js& */ "./resources/js/components/Partials/Charts/BarChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BarChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BarChat_vue_vue_type_template_id_29537f53___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BarChat_vue_vue_type_template_id_29537f53___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Partials/Charts/BarChat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Partials/Charts/BarChat.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Partials/Charts/BarChat.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarChat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Partials/Charts/BarChat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Partials/Charts/BarChat.vue?vue&type=template&id=29537f53&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Partials/Charts/BarChat.vue?vue&type=template&id=29537f53& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChat_vue_vue_type_template_id_29537f53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarChat.vue?vue&type=template&id=29537f53& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Partials/Charts/BarChat.vue?vue&type=template&id=29537f53&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChat_vue_vue_type_template_id_29537f53___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChat_vue_vue_type_template_id_29537f53___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 14:
/*!*********************************************!*\
  !*** multi ./resources/js/backend/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AppServ\www\waninlibary\resources\js\backend\index.js */"./resources/js/backend/index.js");


/***/ })

/******/ });