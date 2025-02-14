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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
  props: ['borrower'],
  data: function data() {
    return {
      BorrowersIndexURL: $('#BorrowersIndexURL').html(),
      BorrowersUpdateURL: $('#BorrowersUpdateURL').html()
    };
  },
  methods: {
    borrowerUpdateForm: function borrowerUpdateForm(e) {
      var url = this.BorrowersUpdateURL;
      var data = $(e.target).serializeObject();
      $.showLoadingModal();
      axios.patch(url, data).then(function (response) {
        $.showSuccessModal('編輯成功', response.data.url);
      })["catch"](function (error) {
        console.error('編輯借閱人時發生錯誤，錯誤訊息：' + error);
        $.showErrorModal(error);
      });
    },
    refreshAgency: function refreshAgency(added_id) {
      this.generateAgenciesOption(added_id);
    },
    generateAgenciesOption: function generateAgenciesOption() {
      var _this = this;

      var added_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      // 生成 機構 下拉式選單
      var AgenciesListURL = $('#AgenciesListURL').html();
      axios.get(AgenciesListURL).then(function (response) {
        _this.agencies = response.data.agencies;

        for (var i = 0; i < _this.agencies.length; i++) {
          $("#agency_id").append($("<option></option>").attr("value", _this.agencies[i].id).text(_this.agencies[i].name));
        }

        $('#agency_id').selectpicker('refresh');

        if (added_id != null) {
          $('#agency_id').val(added_id);
          $('#agency_id').selectpicker('refresh');
        }
      });
    }
  },
  created: function created() {},
  mounted: function mounted() {
    // select agency
    $('#agency_id').selectpicker({
      liveSearch: true
    });
    $("#birthday").datepicker({
      dateFormat: 'yy-mm-dd',
      changeYear: true,
      changeMonth: true,
      yearRange: "-80:+0"
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  data: function data() {
    return {
      AgenciesStoreURL: $('#AgenciesStoreURL').text()
    };
  },
  methods: {
    storeAgency: function storeAgency(e) {
      var _this = this;

      var url = this.AgenciesStoreURL;
      var data = $(e.target).serializeObject();
      $.showLoadingModal();
      axios.post(url, data).then(function (response) {
        // $('#CreateAgencyModal').modal('hide');
        $.showSuccessModal('新增成功');
        $('#CreateAgencyModalForm').trigger('reset');

        _this.$emit('refresh-agency', response.data.added_id);
      })["catch"](function (error) {
        console.error('新增捐贈人時發生錯誤，錯誤訊息：' + error);
        $.showErrorModal(error);
      });
    }
  },
  created: function created() {},
  mounted: function mounted() {
    // 地址
    $('#agency_address_twzipcode').twzipcode({
      'readonly': false
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=template&id=7d128738&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=template&id=7d128738& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "row justify-content-center" },
    [
      _c("div", { staticClass: "col-md-8" }, [
        _c(
          "form",
          {
            attrs: { method: "POST", id: "borrower_update_form", action: "#" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.borrowerUpdateForm($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.borrower.name,
                        expression: "borrower.name"
                      }
                    ],
                    staticClass: "form-control mb-2",
                    attrs: {
                      id: "name",
                      name: "name",
                      type: "text",
                      required: "",
                      autofocus: ""
                    },
                    domProps: { value: _vm.borrower.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.borrower, "name", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.borrower.tel,
                        expression: "borrower.tel"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      id: "tel",
                      name: "tel",
                      type: "text",
                      required: ""
                    },
                    domProps: { value: _vm.borrower.tel },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.borrower, "tel", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "birthday" } }, [_vm._v("生日")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.borrower.birthday,
                        expression: "borrower.birthday"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "birthday", name: "birthday", type: "text" },
                    domProps: { value: _vm.borrower.birthday },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.borrower, "birthday", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      staticClass: "form-control",
                      attrs: { name: "status", id: "status" },
                      domProps: { value: _vm.borrower.status }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("請選擇...")
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
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "agency_id" } }, [
                    _vm._v("隸屬單位")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      staticClass: "form-control",
                      attrs: { id: "agency_id", name: "agency_id" },
                      domProps: { value: _vm.borrower.agency_id }
                    },
                    [
                      _c("option", { attrs: { value: "0" } }, [
                        _vm._v("請選擇...")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(3)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-8" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    attrs: { id: "address_twzipcode" }
                  },
                  [
                    _c("label", [_vm._v("地址")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-2" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", {
                          attrs: {
                            "data-role": "county",
                            "data-style": "form-control",
                            "data-name": "address_county",
                            "data-value": _vm.borrower.address_county
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", {
                          attrs: {
                            "data-role": "district",
                            "data-style": "form-control",
                            "data-name": "address_district",
                            "data-value": _vm.borrower.address_district
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", {
                          attrs: {
                            "data-role": "zipcode",
                            "data-style": "form-control",
                            "data-name": "address_zipcode",
                            "data-value": _vm.borrower.address_zipcode
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.borrower.address_others,
                              expression: "borrower.address_others"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "address_others",
                            type: "text",
                            name: "address_others"
                          },
                          domProps: { value: _vm.borrower.address_others },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.borrower,
                                "address_others",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "job_title" } }, [
                    _vm._v("職稱")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.borrower.job_title,
                        expression: "borrower.job_title"
                      }
                    ],
                    staticClass: "form-control mb-2",
                    attrs: {
                      id: "job_title",
                      name: "job_title",
                      type: "text",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.borrower.job_title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.borrower, "job_title", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "email" } }, [_vm._v("信箱")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.borrower.email,
                        expression: "borrower.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      id: "email",
                      name: "email",
                      type: "email",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.borrower.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.borrower, "email", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "content" } }, [
                    _vm._v("備註內容")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.borrower.content,
                        expression: "borrower.content"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "content",
                      id: "content",
                      cols: "30",
                      rows: "3"
                    },
                    domProps: { value: _vm.borrower.content },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.borrower, "content", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group row justify-content-center" },
              [
                _c("div", { staticClass: "col-md-8" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-block btn-success",
                      attrs: { type: "submit" }
                    },
                    [
                      _vm._v(
                        "\n                        確認修改\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-block btn-danger",
                      attrs: { href: _vm.BorrowersIndexURL }
                    },
                    [
                      _vm._v(
                        "\n                        返回列表\n                    "
                      )
                    ]
                  )
                ])
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("create-angcey-modal", { on: { "refresh-agency": _vm.refreshAgency } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _c("span", { staticClass: "text-danger mr-2" }, [_vm._v("*")]),
      _vm._v("姓名\n                        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "tel" } }, [
      _c("span", { staticClass: "text-danger mr-2" }, [_vm._v("*")]),
      _vm._v("電話")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "status" } }, [
      _c("span", { staticClass: "text-danger mr-2" }, [_vm._v("*")]),
      _vm._v("身分別\n                        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { staticStyle: { color: "white" } }, [_vm._v("_______")]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-block btn-primary",
            attrs: {
              type: "button",
              "data-toggle": "modal",
              "data-target": "#CreateAgencyModal"
            }
          },
          [
            _c("i", { staticClass: "fas fa-plus mr-2" }),
            _vm._v(
              "\n                            新增隸屬單位\n                        "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=template&id=6107e26e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=template&id=6107e26e& ***!
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
  return _c(
    "div",
    {
      staticClass: "modal fade bd-example-modal-lg",
      attrs: {
        id: "CreateAgencyModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "CreateAgencyModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "container-fluid" }, [
                _c(
                  "form",
                  {
                    attrs: {
                      id: "CreateAgencyModalForm",
                      action: "#",
                      method: "POST"
                    },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.storeAgency($event)
                      }
                    }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _vm._m(6)
                  ]
                )
              ])
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        {
          staticClass: "modal-title",
          attrs: { id: "CreateAgencyModalModalLabel" }
        },
        [_vm._v("新增隸屬單位")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "agency_name" }
        },
        [
          _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
          _vm._v(
            "\n                                單位名稱\n                            "
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            id: "agency_name",
            type: "text",
            name: "name",
            required: "",
            autocomplete: "off",
            autofocus: ""
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "agency_tel" }
        },
        [_vm._v("電話")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            id: "agency_tel",
            type: "text",
            name: "tel",
            placeholder: "例：0422115687 或 0912312312",
            autocomplete: "off"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "agency_principal" }
        },
        [_vm._v("負責人/單位聯絡窗口")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            id: "agency_principal",
            type: "text",
            name: "principal",
            autocomplete: "off"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "form-group", attrs: { id: "agency_address_twzipcode" } },
      [
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-md-4 col-form-label text-md-right",
              attrs: { for: "agency_address_others" }
            },
            [_vm._v("地址")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3" }, [
            _c("div", {
              attrs: {
                "data-role": "county",
                "data-style": "form-control",
                "data-name": "address_county",
                "data-value": ""
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3" }, [
            _c("div", {
              attrs: {
                "data-role": "district",
                "data-style": "form-control",
                "data-name": "address_district",
                "data-value": ""
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-2" }, [
            _c("div", {
              attrs: {
                "data-role": "zipcode",
                "data-style": "form-control",
                "data-name": "address_zipcode",
                "data-value": ""
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("div", { staticClass: "offset-md-4 col-md-8" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: {
                id: "agency_address_others",
                type: "text",
                name: "address_others",
                value: "",
                autocomplete: "off"
              }
            })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "agency_content" }
        },
        [_vm._v("備註")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("textarea", {
          staticClass: "form-control",
          attrs: {
            id: "agency_content",
            name: "content",
            cols: "30",
            rows: "3"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-block btn-primary",
            attrs: { type: "submit" }
          },
          [
            _vm._v(
              "\n                                    確認新增\n                                "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-block btn-danger",
            attrs: { type: "button", "data-dismiss": "modal" }
          },
          [
            _vm._v(
              "\n                                    取消\n                                "
            )
          ]
        )
      ])
    ])
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

/***/ "./resources/js/borrowers/edit.js":
/*!****************************************!*\
  !*** ./resources/js/borrowers/edit.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('borrower-update-form', __webpack_require__(/*! ./../components/Borrowers/BorrowerUpdateForm.vue */ "./resources/js/components/Borrowers/BorrowerUpdateForm.vue")["default"]);
Vue.component('create-angcey-modal', __webpack_require__(/*! ./../components/Modals/CreateAgencyModal.vue */ "./resources/js/components/Modals/CreateAgencyModal.vue")["default"]);
var app = new Vue({
  el: '#borrower',
  data: function data() {
    return {
      borrower: []
    };
  },
  methods: {},
  created: function created() {
    var _this = this;

    var BorrowersGetOneURL = $('#BorrowersGetOneURL').html();
    $.showLoadingModal();
    axios.get(BorrowersGetOneURL).then(function (response) {
      _this.borrower = response.data.borrower; // 地址

      $('#address_twzipcode').twzipcode({
        'readonly': false,
        'zipcodeSel': response.data.borrower.address_zipcode,
        'county': response.data.borrower.address_county,
        'district': response.data.borrower.address_district,
        'zipcode': response.data.borrower.address_zipcode
      });
      $.closeModal();
    }); // 生成 機構 下拉式選單

    var AgenciesListURL = $('#AgenciesListURL').html();
    axios.get(AgenciesListURL).then(function (response) {
      _this.agencies = response.data.agencies;

      for (var i = 0; i < _this.agencies.length; i++) {
        $("#agency_id").append($("<option></option>").attr("value", _this.agencies[i].id).text(_this.agencies[i].name));
      }

      $('#agency_id').selectpicker('refresh');
      console.log(_this.borrower.agency_id);
      $('#agency_id').val(_this.borrower.agency_id);
      $('#agency_id').selectpicker('refresh');
    });
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/Borrowers/BorrowerUpdateForm.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Borrowers/BorrowerUpdateForm.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BorrowerUpdateForm_vue_vue_type_template_id_7d128738___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BorrowerUpdateForm.vue?vue&type=template&id=7d128738& */ "./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=template&id=7d128738&");
/* harmony import */ var _BorrowerUpdateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BorrowerUpdateForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BorrowerUpdateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BorrowerUpdateForm_vue_vue_type_template_id_7d128738___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BorrowerUpdateForm_vue_vue_type_template_id_7d128738___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Borrowers/BorrowerUpdateForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowerUpdateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BorrowerUpdateForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowerUpdateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=template&id=7d128738&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=template&id=7d128738& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowerUpdateForm_vue_vue_type_template_id_7d128738___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BorrowerUpdateForm.vue?vue&type=template&id=7d128738& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Borrowers/BorrowerUpdateForm.vue?vue&type=template&id=7d128738&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowerUpdateForm_vue_vue_type_template_id_7d128738___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BorrowerUpdateForm_vue_vue_type_template_id_7d128738___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Modals/CreateAgencyModal.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Modals/CreateAgencyModal.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateAgencyModal_vue_vue_type_template_id_6107e26e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateAgencyModal.vue?vue&type=template&id=6107e26e& */ "./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=template&id=6107e26e&");
/* harmony import */ var _CreateAgencyModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateAgencyModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateAgencyModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateAgencyModal_vue_vue_type_template_id_6107e26e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateAgencyModal_vue_vue_type_template_id_6107e26e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Modals/CreateAgencyModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAgencyModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateAgencyModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAgencyModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=template&id=6107e26e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=template&id=6107e26e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAgencyModal_vue_vue_type_template_id_6107e26e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateAgencyModal.vue?vue&type=template&id=6107e26e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modals/CreateAgencyModal.vue?vue&type=template&id=6107e26e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAgencyModal_vue_vue_type_template_id_6107e26e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAgencyModal_vue_vue_type_template_id_6107e26e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 20:
/*!**********************************************!*\
  !*** multi ./resources/js/borrowers/edit.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AppServ\www\waninlibary\resources\js\borrowers\edit.js */"./resources/js/borrowers/edit.js");


/***/ })

/******/ });