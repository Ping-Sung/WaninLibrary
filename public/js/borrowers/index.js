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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
  props: ['borrowers', 'rowsPerPage', 'pageNum', 'totalPage'],
  data: function data() {
    return {};
  },
  methods: {
    getBorrowerList: function getBorrowerList(pageNum) {
      this.$emit('update-borrowers', pageNum);
    },
    changeStatus: function changeStatus(e) {
      var status = e.target.value;
      this.$emit('change-status', status);
    },
    changeOrder: function changeOrder(e) {
      var orderby = e.target.value;
      this.$emit('change-order', orderby);
    },
    changeKeywordsType: function changeKeywordsType(e) {
      var data = $(e.target).serializeObject();
      var keywords = data.keywords;
      var type = data.type;
      var activated = data.activated;
      var status = data.status;
      var orderby = data.orderby;
      this.$emit('change-keywords-type', keywords, type, status, activated, orderby);
    },
    changeActivated: function changeActivated(e) {
      var activated = e.target.value;
      this.$emit('change-activated', activated);
    }
  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Partials/PaginateCustom.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Partials/PaginateCustom.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    pageNum: {
      type: Number,
      "default": 1
    },
    totalPage: {
      type: Number
    }
  },
  data: function data() {
    return {
      currentPageNum: this.pageNum
    };
  },
  methods: {
    chagePage: function chagePage(num) {
      // this.pageNum = num;
      this.$emit('updatePage', num);
    }
  },
  created: function created() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=template&id=190f6386&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=template&id=190f6386& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card mb-3" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c(
            "div",
            {
              staticClass: "col-md-12 justify-content-center",
              attrs: { id: "" }
            },
            [
              _c(
                "form",
                {
                  attrs: { method: "GET", id: "search-by-keywords-form" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.changeKeywordsType($event)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "row mb-3 justify-content-center" },
                    [
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "select",
                          {
                            staticClass: "form-control",
                            attrs: { name: "status", id: "status" },
                            on: { change: _vm.changeStatus }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("全部")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("一般民眾")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("符合社福資格")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "select",
                          {
                            staticClass: "form-control",
                            attrs: { name: "activated", id: "activated" },
                            on: { change: _vm.changeActivated }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("全部")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("停權")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("未停權")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _c(
                          "select",
                          {
                            staticClass: "form-control",
                            attrs: { name: "orderby", id: "orderby" },
                            on: { change: _vm.changeOrder }
                          },
                          [
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("排序方式")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("建立日期(新->舊)")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("建立日期(舊->新)")
                            ])
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(2)
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-footer" },
        [
          _c("paginate-custom", {
            attrs: { pageNum: _vm.pageNum, totalPage: _vm.totalPage },
            on: { updatePage: _vm.getBorrowerList }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", { staticClass: "fas fa-table" }),
      _vm._v("借閱人列表\n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "select",
          { staticClass: "form-control", attrs: { name: "type", id: "type" } },
          [
            _c("option", { attrs: { value: "0" } }, [_vm._v("依欄位進行搜尋")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "0" } }, [_vm._v("不分類")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "1" } }, [_vm._v("隸屬單位名稱")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("姓名")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "3" } }, [_vm._v("信箱")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "4" } }, [_vm._v("電話")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            staticClass: "form-control mb-2",
            attrs: {
              id: "keywords",
              name: "keywords",
              type: "text",
              value: "",
              autocomplete: "off",
              placeholder: "關鍵字搜尋..."
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-block btn-primary",
            attrs: { type: "submit" }
          },
          [
            _vm._v(
              "\n                                    確認\n                                "
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c(
        "table",
        {
          staticClass: "table table-bordered",
          attrs: { id: "BorrowersDataTable", width: "100%", cellspacing: "0" }
        },
        [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("序號")]),
              _vm._v(" "),
              _c("th", [_vm._v("姓名")]),
              _vm._v(" "),
              _c("th", [_vm._v("電話")]),
              _vm._v(" "),
              _c("th", [_vm._v("隸屬單位")]),
              _vm._v(" "),
              _c("th", [_vm._v("總借閱數量")]),
              _vm._v(" "),
              _c("th", [_vm._v("逾期數量")]),
              _vm._v(" "),
              _c("th", [_vm._v("建立日期")]),
              _vm._v(" "),
              _c("th", [_vm._v("操作")])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Partials/PaginateCustom.vue?vue&type=template&id=d182b72c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Partials/PaginateCustom.vue?vue&type=template&id=d182b72c& ***!
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
  return _c("paginate", {
    attrs: {
      value: _vm.pageNum,
      "page-count": _vm.totalPage,
      "click-handler": _vm.chagePage,
      "page-range": 5,
      "margin-pages": 2,
      "prev-text": "上一頁",
      "next-text": "下一頁",
      "container-class": "pagination justify-content-center",
      "page-class": "page-item",
      "page-link-class": "page-link",
      "prev-class": "page-item",
      "next-class": "page-item",
      "prev-link-class": "page-link",
      "next-link-class": "page-link",
      "active-class": "active"
    }
  })
}
var staticRenderFns = []
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

/***/ "./resources/js/borrowers/index.js":
/*!*****************************************!*\
  !*** ./resources/js/borrowers/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('borrowers-table', __webpack_require__(/*! ./../components/Borrowers/BorrowersTable.vue */ "./resources/js/components/Borrowers/BorrowersTable.vue")["default"]);
Vue.component('paginate-custom', __webpack_require__(/*! ./../components/Partials/PaginateCustom.vue */ "./resources/js/components/Partials/PaginateCustom.vue")["default"]);
var app = new Vue({
  el: '#borrower',
  data: function data() {
    return {
      rowsPerPage: 10,
      pageNum: 1,
      totalPage: 0,
      borrowers: [],
      DataTotalCount: 0,
      status: 2,
      orderby: 2,
      activated: 2,
      type: 0,
      keywords: '',
      order_type: 'desc'
    };
  },
  methods: {
    changeStatus: function changeStatus(status) {
      this.status = status;
      this.updateBorrowers(this.pageNum, true);
    },
    changeOrder: function changeOrder(orderby) {
      this.orderby = orderby;
      this.updateBorrowers(this.pageNum, true);
    },
    changeKeywordsType: function changeKeywordsType(keywords, type, status, activated, orderby) {
      this.activated = activated;
      this.keywords = keywords;
      this.type = type;
      this.status = status;
      this.orderby = orderby;
      this.updateBorrowers(this.pageNum, true);
    },
    changeActivated: function changeActivated(activated) {
      this.activated = activated;
      this.updateBorrowers(this.pageNum, true);
    },
    updateBorrowers: function updateBorrowers(pageNum, first_page) {
      var _this = this;

      if (first_page) {
        this.pageNum = 1;
      } else {
        this.pageNum = pageNum;
      }

      var status = this.status;
      var keywords = this.keywords;
      var type = this.type;
      var activated = this.activated;
      var orderby = this.orderby;
      var skip = (pageNum - 1) * this.rowsPerPage;
      var take = this.rowsPerPage;
      var BorrowersGetList = $('#BorrowersGetList').html();
      $('.dataTables_processing', $('#BorrowersDataTable').closest('.dataTables_wrapper')).fadeIn();
      axios.get(BorrowersGetList, {
        params: {
          skip: skip,
          take: take,
          status: status,
          keywords: keywords,
          type: type,
          activated: activated,
          first_page: first_page,
          orderby: orderby
        }
      }).then(function (response) {
        _this.borrowers = response.data.borrowers;
        _this.DataTotalCount = response.data.DataTotalCount;
        _this.totalPage = Math.ceil(_this.DataTotalCount / _this.rowsPerPage);
        $('.dataTables_processing', $('#BorrowersDataTable').closest('.dataTables_wrapper')).fadeOut();
        $('#BorrowersDataTable').dataTable().fnClearTable();

        if (_this.borrowers.length != 0) {
          $('#BorrowersDataTable').dataTable().fnAddData(_this.borrowers);
        }

        _this.refreshDeleteBtn();

        _this.refreshActivateBtn();

        _this.refreshUnactivateBtn();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    refreshDeleteBtn: function refreshDeleteBtn() {
      var $vm = this;
      $('.delete-btn').click(function (e) {
        var _this2 = this;

        e.preventDefault();
        Swal.fire({
          title: '注意！',
          text: "你確定要刪除此借閱人嗎？",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '確認',
          cancelButtonText: '取消'
        }).then(function (result) {
          if (result.value) {
            $.showLoadingModal();
            var $url = $(_this2).next().html();
            axios.post($url, {
              _method: 'DELETE'
            }).then(function (response) {
              $.showSuccessModal('刪除成功！');
              $vm.updateBorrowers($vm.pageNum, true);
            })["catch"](function (error) {
              $.showErrorModal(error);
            });
          }
        });
      });
    },
    refreshActivateBtn: function refreshActivateBtn() {
      var $vm = this;
      $('.activate-btn').click(function (e) {
        var _this3 = this;

        e.preventDefault();
        Swal.fire({
          title: '注意！',
          text: "你確定要停權此借閱人嗎？",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '確認',
          cancelButtonText: '取消'
        }).then(function (result) {
          if (result.value) {
            $.showLoadingModal();
            var $url = $(_this3).next().html();
            axios.post($url).then(function (response) {
              $.showSuccessModal(response.data.message);
              $vm.updateBorrowers($vm.pageNum, true);
            })["catch"](function (error) {
              $.showErrorModal(error);
            });
          }
        });
      });
    },
    refreshUnactivateBtn: function refreshUnactivateBtn() {
      var $vm = this;
      $('.unactivate-btn').click(function (e) {
        var _this4 = this;

        e.preventDefault();
        Swal.fire({
          title: '注意！',
          text: "你確定要解鎖此借閱人嗎？",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '確認',
          cancelButtonText: '取消'
        }).then(function (result) {
          if (result.value) {
            $.showLoadingModal();
            var $url = $(_this4).next().html();
            axios.post($url).then(function (response) {
              $.showSuccessModal(response.data.message);
              $vm.updateBorrowers($vm.pageNum, true);
            })["catch"](function (error) {
              $.showErrorModal(error);
            });
          }
        });
      });
    }
  },
  created: function created() {
    var _this5 = this;

    var BorrowersGetList = $('#BorrowersGetList').html();
    axios.get(BorrowersGetList).then(function (response) {
      _this5.DataTotalCount = response.data.DataTotalCount;
      _this5.totalPage = Math.ceil(_this5.DataTotalCount / _this5.rowsPerPage);
      _this5.borrowers = response.data.borrowers;

      if (_this5.orderby == 2) {
        _this5.order_type = 'desc';
      } else {
        _this5.order_type = 'asc';
      }

      $('#BorrowersDataTable').on('draw.dt', function () {
        console.log('drawing a table');
      }).on('init.dt', function () {
        console.log('intial a table');
      }).dataTable({
        data: _this5.borrowers,
        columns: [{
          data: 'index'
        }, {
          data: 'name'
        }, {
          data: 'tel'
        }, {
          data: 'showAgencyName'
        }, {
          data: 'borrowCounts'
        }, {
          data: 'expiredCounts'
        }, {
          data: 'created_at'
        }, {
          data: 'action'
        }],
        lengthChange: false,
        searching: false,
        pageLength: _this5.rowsPerPage,
        info: false,
        paging: false,
        processing: true,
        "ordering": false
      });

      _this5.refreshDeleteBtn();

      _this5.refreshActivateBtn();

      _this5.refreshUnactivateBtn();
    });
  },
  mounted: function mounted() {// this.totalPage = Math.ceil($('#DataTotalCount').html() / this.rowsPerPage);
  }
});

/***/ }),

/***/ "./resources/js/components/Borrowers/BorrowersTable.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Borrowers/BorrowersTable.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BorrowersTable_vue_vue_type_template_id_190f6386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BorrowersTable.vue?vue&type=template&id=190f6386& */ "./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=template&id=190f6386&");
/* harmony import */ var _BorrowersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BorrowersTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BorrowersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BorrowersTable_vue_vue_type_template_id_190f6386___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BorrowersTable_vue_vue_type_template_id_190f6386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Borrowers/BorrowersTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BorrowersTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=template&id=190f6386&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=template&id=190f6386& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersTable_vue_vue_type_template_id_190f6386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BorrowersTable.vue?vue&type=template&id=190f6386& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Borrowers/BorrowersTable.vue?vue&type=template&id=190f6386&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersTable_vue_vue_type_template_id_190f6386___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowersTable_vue_vue_type_template_id_190f6386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Partials/PaginateCustom.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Partials/PaginateCustom.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginateCustom_vue_vue_type_template_id_d182b72c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginateCustom.vue?vue&type=template&id=d182b72c& */ "./resources/js/components/Partials/PaginateCustom.vue?vue&type=template&id=d182b72c&");
/* harmony import */ var _PaginateCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginateCustom.vue?vue&type=script&lang=js& */ "./resources/js/components/Partials/PaginateCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginateCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginateCustom_vue_vue_type_template_id_d182b72c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginateCustom_vue_vue_type_template_id_d182b72c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Partials/PaginateCustom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Partials/PaginateCustom.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Partials/PaginateCustom.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginateCustom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Partials/PaginateCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Partials/PaginateCustom.vue?vue&type=template&id=d182b72c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Partials/PaginateCustom.vue?vue&type=template&id=d182b72c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateCustom_vue_vue_type_template_id_d182b72c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginateCustom.vue?vue&type=template&id=d182b72c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Partials/PaginateCustom.vue?vue&type=template&id=d182b72c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateCustom_vue_vue_type_template_id_d182b72c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateCustom_vue_vue_type_template_id_d182b72c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 18:
/*!***********************************************!*\
  !*** multi ./resources/js/borrowers/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AppServ\www\waninlibary\resources\js\borrowers\index.js */"./resources/js/borrowers/index.js");


/***/ })

/******/ });