webpackJsonp([0],Array(94).concat([
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Alert.md": 165,
	"./Button.md": 166,
	"./Checkbox.md": 167,
	"./Collapse.md": 168,
	"./DatePicker.md": 169,
	"./Dropdown.md": 170,
	"./FileSelect.md": 171,
	"./Form.md": 172,
	"./Grid.md": 173,
	"./Input.md": 174,
	"./InputMultiple.md": 175,
	"./Loading.md": 176,
	"./Message.md": 177,
	"./Modal.md": 178,
	"./Nav.md": 179,
	"./Pagination.md": 180,
	"./Radio.md": 181,
	"./Select.md": 182,
	"./Tab.md": 183,
	"./Table.md": 184,
	"./Topbar.md": 185
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 94;

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(42);


/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */]],
  created: function created() {
    this.updateNavigation(this.$route.name);
  }
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      alert1: true,
      alert2: true
    };
  }
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]]
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: ['a']
    };
  }
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      collapse1: [],
      collapse2: '',
      collapse3: [],
      collapse4: []
    };
  }
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      date1: '1970-01-01',
      date2: '',
      date3: '2017-01-01',
      date4: '1970-01-01',
      date5: '1970/01/01',
      date6: '1970-01',
      date7: '1970'
    };
  }
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      dropdown1: false,
      dropdown2: false
    };
  }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      files1: [],
      files2: [],
      files3: [],
      files4: []
    };
  }
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      form1: {
        input: '',
        select: '',
        inputMultiple: [],
        radio: true
      },
      form2: {
        labelPosition: 'left',
        input: '',
        select: '',
        radio: true
      },
      form3: {
        input: ''
      }
    };
  }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]]
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: 0
    };
  }
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      input1: ['A'],
      input2: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger'],
      input3: ['disabled'],
      input4: []
    };
  }
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      loading1: true,
      table1: [{
        label: 'A',
        value: 3
      }, {
        label: 'B',
        value: 1
      }, {
        label: 'C',
        value: 2
      }, {
        label: 'D',
        value: 4
      }]
    };
  },

  methods: {
    SwitchLoading1: function SwitchLoading1() {
      this.loading1 = !this.loading1;
    }
  }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      message1: false,
      message2: false,
      message3: false,
      message4: false,
      message5: false,
      message6: false,
      message7: false,
      message8: false,
      message9: false,
      message10: false
    };
  }
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false
    };
  }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      nav1: '',
      nav2: '',
      nav3: '',
      nav4: ''
    };
  }
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]]
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      radio1: true,
      radio2: true,
      radio3: true,
      radio4: 1
    };
  }
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      select1: 'A',
      select2: '',
      select3: ['A'],
      select4: 'A',
      select5: 'A',
      select6: ['A'],
      select7: 'A'
    };
  }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      tab1: '1',
      tab2: '1',
      tab3: '1'
    };
  }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      select1: false,
      change1: 0,
      table1: [{
        label: 'A',
        value: 3
      }, {
        label: 'B',
        value: 1
      }, {
        label: 'C',
        value: 2
      }, {
        label: 'D',
        value: 4
      }],
      table2: [{
        label: 'A',
        value: 3
      }, {
        label: 'B',
        value: 1
      }, {
        label: 'C',
        value: 2
      }, {
        label: 'D',
        value: 4
      }]
    };
  },

  methods: {
    SortChange: function SortChange(sort) {
      this.table2.sort(this.getCompare(sort));
    },
    Check: function Check(row) {
      console.log('check', row);
    },
    Delete: function Delete(row) {
      console.log('delete', row);
    },
    OnChange: function OnChange() {
      this.table1.map(function (item) {
        item.value += 1;
      });
    },
    getCompare: function getCompare(sort) {
      var prop = sort.prop,
          order = sort.order === 'ASC';
      return function (a, b) {
        return a[prop] < b[prop] ^ order;
      };
    }
  }
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_page__ = __webpack_require__(95);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_page__["a" /* default */]],
  data: function data() {
    return {
      nav1: '',
      nav2: '',
      nav3: '',
      nav3fixed: 'none'
    };
  }
});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)(undefined);
// imports


// module
exports.push([module.i, ".am-btn{margin-right:1rem}", ""]);

// exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)(undefined);
// imports


// module
exports.push([module.i, ".am-selected+.am-selected{margin-top:1rem}", ""]);

// exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)(undefined);
// imports


// module
exports.push([module.i, ".am-date-picker+.am-date-picker{margin-top:1rem}", ""]);

// exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)(undefined);
// imports


// module
exports.push([module.i, ".am-row{margin-bottom:1rem}.bg-purple{background:#d3dce6}.bg-purple-light{background:#e5e9f2}.grid-content{border-radius:4px;min-height:3rem}", ""]);

// exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)(undefined);
// imports


// module
exports.push([module.i, ".am-input+.am-input{margin-top:1rem}", ""]);

// exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)(undefined);
// imports


// module
exports.push([module.i, ".am-input-multiple+.am-input-multiple{margin-top:1em}", ""]);

// exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(163),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(186)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(97),
  /* template */
  __webpack_require__(150),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(156),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(160),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(188)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(155),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(147),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(162),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(145),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(189)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(157),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(190)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(159),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(191)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(164),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(148),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(161),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(146),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(149),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(158),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(154),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(187)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(151),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(152),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(144),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(153),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Table")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-table', {
    attrs: {
      "data": _vm.table1
    }
  }, [_c('am-table-column', {
    attrs: {
      "prop": "label",
      "label": "Label"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "value",
      "label": "Value"
    }
  })], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Border")]), _vm._v(" "), _c('div', [_c('am-table', {
    attrs: {
      "data": _vm.table1,
      "border": "border"
    }
  }, [_c('am-table-column', {
    attrs: {
      "prop": "label",
      "label": "Label"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "value",
      "label": "Value"
    }
  })], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Stripe Hover Compact")]), _vm._v(" "), _c('div', [_c('am-table', {
    attrs: {
      "data": _vm.table1,
      "border": "border",
      "stripe": "stripe",
      "hover": "hover",
      "compact": "compact"
    }
  }, [_c('am-table-column', {
    attrs: {
      "prop": "label",
      "label": "Label"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "value",
      "label": "Value"
    }
  })], 1), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Select")]), _vm._v(" "), _c('div', [_c('am-table', {
    attrs: {
      "data": _vm.table1,
      "hover": "hover",
      "compact": "compact"
    }
  }, [_c('am-table-column', {
    attrs: {
      "select": "",
      "width": "10px"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "label",
      "label": "Label"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "value",
      "label": "Value"
    }
  })], 1), _vm._v(" "), _vm._m(3)], 1), _vm._v(" "), _c('h2', [_vm._v("Sort")]), _vm._v(" "), _c('div', [_c('am-table', {
    attrs: {
      "data": _vm.table2,
      "hover": "hover",
      "compact": "compact"
    },
    on: {
      "sortChange": _vm.SortChange
    }
  }, [_c('am-table-column', {
    attrs: {
      "select": "select",
      "width": "10px"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "label",
      "label": "Label",
      "sortable": "sortable"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "value",
      "label": "Value",
      "sortable": "sortable"
    }
  })], 1), _vm._v(" "), _vm._m(4)], 1), _vm._v(" "), _c('h2', [_vm._v("Template")]), _vm._v(" "), _c('p', [_c('am-button', {
    on: {
      "click": _vm.OnChange
    }
  }, [_vm._v("Change")])], 1), _vm._v(" "), _c('div', [_c('am-table', {
    attrs: {
      "data": _vm.table1,
      "hover": "hover",
      "compact": "compact"
    }
  }, [_c('am-table-column', {
    attrs: {
      "prop": "label",
      "label": "Label"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "value",
      "label": "Value"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "label": "Scoped Value"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(row) {
        return [_vm._v(_vm._s(row.value))]
      }
    }])
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "label": "Operation",
      "width": "200px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(row) {
        return [_c('am-button', {
          attrs: {
            "size": "xs",
            "icon": "eye"
          },
          on: {
            "click": function($event) {
              _vm.Check(row)
            }
          }
        }, [_vm._v(" Check")]), _vm._v(" "), _c('am-button', {
          attrs: {
            "type": "danger",
            "size": "xs",
            "icon": "trash"
          },
          on: {
            "click": function($event) {
              _vm.Delete(row)
            }
          }
        }, [_vm._v(" Delete")])]
      }
    }])
  })], 1), _vm._v(" "), _vm._m(5)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":data")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("table1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":data")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("table1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("border")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("border"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":data")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("table1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("border")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("border"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("stripe")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("stripe"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("hover")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("hover"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("compact")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("compact"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":data")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("table1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("hover")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("hover"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("compact")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("compact"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("width")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("10px"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":data")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("table2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("hover")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("hover"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("compact")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("compact"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@sortChange")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("SortChange"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("select")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("width")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("10px"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("sortable")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sortable"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("sortable")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sortable"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":data")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("table1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("hover")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("hover"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("compact")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("compact"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Scoped Value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("scope")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("row"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("{{ row.value }}"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Operation"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("width")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("200px"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("scope")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("row"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("xs"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("eye"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Check(row)"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v(" Check"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("xs"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("trash"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Delete(row)"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v(" Delete"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Form")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-form', [_c('am-form-item', {
    attrs: {
      "label": "Label1"
    }
  }, [_c('am-input', {
    attrs: {
      "placeholder": "Input1"
    },
    model: {
      value: (_vm.form1.input),
      callback: function($$v) {
        _vm.form1.input = $$v
      },
      expression: "form1.input"
    }
  })], 1), _vm._v(" "), _c('am-form-item', {
    attrs: {
      "label": "Label2"
    }
  }, [_c('am-select', {
    attrs: {
      "placeholder": "Select2"
    },
    model: {
      value: (_vm.form1.select),
      callback: function($$v) {
        _vm.form1.select = $$v
      },
      expression: "form1.select"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "1",
      "label": "1"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "2",
      "label": "2"
    }
  })], 1)], 1), _vm._v(" "), _c('am-form-item', {
    attrs: {
      "label": "Label3"
    }
  }, [_c('am-input-multiple', {
    attrs: {
      "placeholder": "InputMultiple1"
    },
    model: {
      value: (_vm.form1.inputMultiple),
      callback: function($$v) {
        _vm.form1.inputMultiple = $$v
      },
      expression: "form1.inputMultiple"
    }
  })], 1), _vm._v(" "), _c('am-form-item', {
    attrs: {
      "label": "Label4"
    }
  }, [_c('am-radio-group', {
    model: {
      value: (_vm.form1.radio),
      callback: function($$v) {
        _vm.form1.radio = $$v
      },
      expression: "form1.radio"
    }
  }, [_c('am-radio', {
    attrs: {
      "label": true
    }
  }, [_vm._v("true")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": false
    }
  }, [_vm._v("false")])], 1)], 1), _vm._v(" "), _c('am-form-item', [_c('am-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("Submit")])], 1)], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Label Position")]), _vm._v(" "), _c('am-radio-group', {
    staticStyle: {
      "margin-bottom": "1em"
    },
    model: {
      value: (_vm.form2.labelPosition),
      callback: function($$v) {
        _vm.form2.labelPosition = $$v
      },
      expression: "form2.labelPosition"
    }
  }, [_c('am-radio', {
    attrs: {
      "label": "left"
    }
  }, [_vm._v("left")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": "right"
    }
  }, [_vm._v("right")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": "top"
    }
  }, [_vm._v("top")])], 1), _vm._v(" "), _c('div', [_c('am-form', {
    attrs: {
      "label-position": _vm.form2.labelPosition
    }
  }, [_c('am-form-item', {
    attrs: {
      "label": "Label1"
    }
  }, [_c('am-input', {
    attrs: {
      "placeholder": "Input1"
    },
    model: {
      value: (_vm.form2.input),
      callback: function($$v) {
        _vm.form2.input = $$v
      },
      expression: "form2.input"
    }
  })], 1), _vm._v(" "), _c('am-form-item', {
    attrs: {
      "label": "Label2"
    }
  }, [_c('am-select', {
    attrs: {
      "placeholder": "Select2"
    },
    model: {
      value: (_vm.form2.select),
      callback: function($$v) {
        _vm.form2.select = $$v
      },
      expression: "form2.select"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "1",
      "label": "1"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "2",
      "label": "2"
    }
  })], 1)], 1), _vm._v(" "), _c('am-form-item', {
    attrs: {
      "label": "Label3"
    }
  }, [_c('am-radio-group', {
    model: {
      value: (_vm.form2.radio),
      callback: function($$v) {
        _vm.form2.radio = $$v
      },
      expression: "form2.radio"
    }
  }, [_c('am-radio', {
    attrs: {
      "label": true
    }
  }, [_vm._v("true")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": false
    }
  }, [_vm._v("false")])], 1)], 1), _vm._v(" "), _c('am-form-item', [_c('am-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("Submit")])], 1)], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Label Span & Content Span")]), _vm._v(" "), _c('div', [_c('am-form', {
    attrs: {
      "label-position": "left",
      "label-span": {
        sm: 12,
        md: 1
      },
      "content-span": {
        sm: 12,
        md: 11
      }
    }
  }, [_c('am-form-item', {
    attrs: {
      "label": "Label1"
    }
  }, [_c('am-input', {
    attrs: {
      "placeholder": "Input1"
    },
    model: {
      value: (_vm.form3.input),
      callback: function($$v) {
        _vm.form3.input = $$v
      },
      expression: "form3.input"
    }
  })], 1)], 1), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Item Span")]), _vm._v(" "), _c('div', [_c('am-form', {
    attrs: {
      "label-position": "top",
      "gutter": "sm"
    }
  }, [_c('am-form-item', {
    attrs: {
      "label": "Label1",
      "span": 3
    }
  }, [_c('am-input', {
    attrs: {
      "placeholder": "Input1"
    },
    model: {
      value: (_vm.form2.input),
      callback: function($$v) {
        _vm.form2.input = $$v
      },
      expression: "form2.input"
    }
  })], 1), _vm._v(" "), _c('am-form-item', {
    attrs: {
      "label": "Label2",
      "span": 3
    }
  }, [_c('am-select', {
    attrs: {
      "placeholder": "Select2"
    },
    model: {
      value: (_vm.form2.select),
      callback: function($$v) {
        _vm.form2.select = $$v
      },
      expression: "form2.select"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "1",
      "label": "1"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "2",
      "label": "2"
    }
  })], 1)], 1), _vm._v(" "), _c('am-form-item', {
    attrs: {
      "label": "Label3",
      "span": 3
    }
  }, [_c('am-radio-group', {
    model: {
      value: (_vm.form2.radio),
      callback: function($$v) {
        _vm.form2.radio = $$v
      },
      expression: "form2.radio"
    }
  }, [_c('am-radio', {
    attrs: {
      "label": true
    }
  }, [_vm._v("true")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": false
    }
  }, [_vm._v("false")])], 1)], 1), _vm._v(" "), _c('am-form-item', {
    attrs: {
      "span": 3
    }
  }, [_c('am-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("Submit")])], 1)], 1), _vm._v(" "), _vm._m(3)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Input1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form1.input"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Select2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form1.select"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input-multiple")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("InputMultiple1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form1.inputMultiple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input-multiple")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio-group")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form1.radio"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio-group")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Submit"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label-position")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form2.labelPosition"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Input1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form2.input"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Select2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form2.select"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio-group")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form2.radio"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio-group")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Submit"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label-position")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("left"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label-span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("{ sm: 12, md: 1 }"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":content-span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("{ sm: 12, md: 11 }"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Input1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form3.input"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label-position")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("top"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("gutter")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Input1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form2.input"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Select2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form2.select"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio-group")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("form2.radio"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio-group")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Submit"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-form")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Modal")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('p', [_c('am-button', {
    on: {
      "click": function($event) {
        _vm.modal1 = !_vm.modal1
      }
    }
  }, [_vm._v("Show")])], 1), _vm._v(" "), _c('div', [_c('am-modal', {
    attrs: {
      "title": "Modal"
    },
    model: {
      value: (_vm.modal1),
      callback: function($$v) {
        _vm.modal1 = $$v
      },
      expression: "modal1"
    }
  }, [_c('p', [_vm._v("this is a modal")]), _vm._v(" "), _c('span', {
    staticClass: "am-modal-btn",
    on: {
      "click": function($event) {
        _vm.modal1 = false
      }
    },
    slot: "footer"
  }, [_vm._v("Confirm")]), _vm._v(" "), _c('span', {
    staticClass: "am-modal-btn",
    on: {
      "click": function($event) {
        _vm.modal1 = false
      }
    },
    slot: "footer"
  }, [_vm._v("Cancel")])]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Close Button")]), _vm._v(" "), _c('p', [_c('am-button', {
    on: {
      "click": function($event) {
        _vm.modal2 = !_vm.modal2
      }
    }
  }, [_vm._v("Show")])], 1), _vm._v(" "), _c('div', [_c('am-modal', {
    attrs: {
      "title": "Modal",
      "close-button": "close-button"
    },
    model: {
      value: (_vm.modal2),
      callback: function($$v) {
        _vm.modal2 = $$v
      },
      expression: "modal2"
    }
  }, [_c('p', [_vm._v("this is a modal with close button")]), _vm._v(" "), _c('span', {
    staticClass: "am-modal-btn",
    on: {
      "click": function($event) {
        _vm.modal2 = false
      }
    },
    slot: "footer"
  }, [_vm._v("Confirm")]), _vm._v(" "), _c('span', {
    staticClass: "am-modal-btn",
    on: {
      "click": function($event) {
        _vm.modal2 = false
      }
    },
    slot: "footer"
  }, [_vm._v("Cancel")])]), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Multiple Modal")]), _vm._v(" "), _c('p', [_c('am-button', {
    on: {
      "click": function($event) {
        _vm.modal3 = !_vm.modal3
      }
    }
  }, [_vm._v("Show")])], 1), _vm._v(" "), _c('div', [_c('am-modal', {
    attrs: {
      "title": "Modal",
      "z-index": 1,
      "close-button": "close-button"
    },
    model: {
      value: (_vm.modal4),
      callback: function($$v) {
        _vm.modal4 = $$v
      },
      expression: "modal4"
    }
  }, [_c('p', [_vm._v("Another Modal")])]), _vm._v(" "), _c('am-modal', {
    attrs: {
      "title": "Modal"
    },
    model: {
      value: (_vm.modal3),
      callback: function($$v) {
        _vm.modal3 = $$v
      },
      expression: "modal3"
    }
  }, [_c('span', {
    staticClass: "am-modal-btn",
    on: {
      "click": function($event) {
        _vm.modal4 = true
      }
    },
    slot: "footer"
  }, [_vm._v("Another")]), _vm._v(" "), _c('span', {
    staticClass: "am-modal-btn",
    on: {
      "click": function($event) {
        _vm.modal3 = false
      }
    },
    slot: "footer"
  }, [_vm._v("Cancel")])]), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Dimmer Close")]), _vm._v(" "), _c('p', [_c('am-button', {
    on: {
      "click": function($event) {
        _vm.modal5 = !_vm.modal5
      }
    }
  }, [_vm._v("Show")])], 1), _vm._v(" "), _c('div', [_c('am-modal', {
    attrs: {
      "title": "Modal",
      "dimmer-close": "dimmer-close"
    },
    model: {
      value: (_vm.modal5),
      callback: function($$v) {
        _vm.modal5 = $$v
      },
      expression: "modal5"
    }
  }, [_c('p', [_vm._v("you can close this modal by clicking outside the modal")])]), _vm._v(" "), _vm._m(3)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-modal")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Modal"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is a modal"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-modal-btn"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("footer"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal1 "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _vm._v(" false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Confirm"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-modal-btn"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("footer"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal1 "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _vm._v(" false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Cancel"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-modal")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-modal")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Modal"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("close-button")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("close-button"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is a modal with close button"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-modal-btn"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("footer"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal2 "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _vm._v(" false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Confirm"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-modal-btn"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("footer"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal2 "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _vm._v(" false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Cancel"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-modal")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-modal")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Modal"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":z-index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("close-button")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("close-button"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Another Modal"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-modal")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-modal")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Modal"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-modal-btn"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("footer"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal4 "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _vm._v(" true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Another"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-modal-btn"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("footer"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal3 "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _vm._v(" false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Cancel"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-modal")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-modal")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("modal5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Modal"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("dimmer-close")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("dimmer-close"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("you can close this modal by clicking outside the modal"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-modal")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Dropdown")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-button', {
    attrs: {
      "type": "primary",
      "icon": "caret-down",
      "active": _vm.dropdown1
    },
    on: {
      "click": function($event) {
        _vm.dropdown1 = !_vm.dropdown1
      }
    }
  }, [_vm._v("Toggle Dropdown")]), _vm._v(" "), _c('am-dropdown', {
    model: {
      value: (_vm.dropdown1),
      callback: function($$v) {
        _vm.dropdown1 = $$v
      },
      expression: "dropdown1"
    }
  }, [_c('am-nav', [_c('am-nav-item', {
    attrs: {
      "index": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-1"
    }
  }, [_vm._v("3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-2"
    }
  }, [_vm._v("3-2")])], 2)], 1)], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Drop Up")]), _vm._v(" "), _c('div', [_c('am-dropdown', {
    attrs: {
      "direction": "up"
    },
    model: {
      value: (_vm.dropdown2),
      callback: function($$v) {
        _vm.dropdown2 = $$v
      },
      expression: "dropdown2"
    }
  }, [_c('am-nav', [_c('am-nav-item', {
    attrs: {
      "index": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-1"
    }
  }, [_vm._v("3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-2"
    }
  }, [_vm._v("3-2")])], 2)], 1)], 1), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "warning",
      "icon": "caret-down",
      "active": _vm.dropdown2
    },
    on: {
      "click": function($event) {
        _vm.dropdown2 = !_vm.dropdown2
      }
    }
  }, [_vm._v("Toggle Dropup")]), _vm._v(" "), _vm._m(1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("caret-down"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("dropdown1 "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _vm._v(" !dropdown1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":active")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("dropdown1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Toggle Dropdown"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-dropdown")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("dropdown1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-dropdown")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-dropdown")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("dropdown2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("direction")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("up"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-dropdown")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("caret-down"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("@click")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("dropdown2 "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _vm._v(" !dropdown2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":active")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("dropdown2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Toggle Dropup"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Loading")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('p', [_c('am-button', {
    on: {
      "click": _vm.SwitchLoading1
    }
  }, [_vm._v("Switch")])], 1), _vm._v(" "), _c('div', [_c('am-loading', {
    attrs: {
      "loading": _vm.loading1
    }
  }, [_c('am-table', {
    attrs: {
      "data": _vm.table1,
      "hover": "hover"
    }
  }, [_c('am-table-column', {
    attrs: {
      "prop": "label",
      "label": "Label"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "value",
      "label": "Value"
    }
  })], 1)], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Text")]), _vm._v(" "), _c('div', [_c('am-loading', {
    attrs: {
      "loading": true,
      "text": "loading..."
    }
  }, [_c('am-table', {
    attrs: {
      "data": _vm.table1,
      "hover": "hover"
    }
  }, [_c('am-table-column', {
    attrs: {
      "prop": "label",
      "label": "Label"
    }
  }), _vm._v(" "), _c('am-table-column', {
    attrs: {
      "prop": "value",
      "label": "Value"
    }
  })], 1)], 1), _vm._v(" "), _vm._m(1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-loading")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":loading")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("loading1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":data")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("table1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("hover")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("hover"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-loading")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-loading")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":loading")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("text")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("loading..."), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":data")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("table1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("hover")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("hover"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Label"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-table-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("prop")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Value"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table-column")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-table")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-loading")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Nav")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-nav', {
    model: {
      value: (_vm.nav1),
      callback: function($$v) {
        _vm.nav1 = $$v
      },
      expression: "nav1"
    }
  }, [_c('am-nav-item', {
    attrs: {
      "index": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-1",
      "default-active": "default-active"
    }
  }, [_vm._v("3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-2"
    }
  }, [_vm._v("3-2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3-3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-1"
    }
  }, [_vm._v("3-3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-2"
    }
  }, [_vm._v("3-3-2")])], 2)], 2), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "4"
    }
  }, [_vm._v("4")])], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Icon")]), _vm._v(" "), _c('div', [_c('am-nav', {
    model: {
      value: (_vm.nav2),
      callback: function($$v) {
        _vm.nav2 = $$v
      },
      expression: "nav2"
    }
  }, [_c('am-nav-item', {
    attrs: {
      "index": "1",
      "icon": "dashboard"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "2",
      "icon": "users"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-sub-nav', {
    attrs: {
      "icon": "folder"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-1",
      "icon": "file",
      "default-active": "default-active"
    }
  }, [_vm._v("3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-2",
      "icon": "file"
    }
  }, [_vm._v("3-2")]), _vm._v(" "), _c('am-sub-nav', {
    attrs: {
      "icon": "folder"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v("3-3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-1",
      "icon": "file"
    }
  }, [_vm._v("3-3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-2",
      "icon": "file"
    }
  }, [_vm._v("3-3-2")])], 2)], 2), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "4",
      "icon": "shopping-bag"
    }
  }, [_vm._v("4")])], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Pills")]), _vm._v(" "), _c('div', [_c('am-nav', {
    attrs: {
      "mode": "pills"
    },
    model: {
      value: (_vm.nav3),
      callback: function($$v) {
        _vm.nav3 = $$v
      },
      expression: "nav3"
    }
  }, [_c('am-nav-item', {
    attrs: {
      "index": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-1",
      "default-active": "default-active"
    }
  }, [_vm._v("3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-2"
    }
  }, [_vm._v("3-2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3-3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-1"
    }
  }, [_vm._v("3-3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-2"
    }
  }, [_vm._v("3-3-2")])], 2)], 2), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "4"
    }
  }, [_vm._v("4")])], 1), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Tabs")]), _vm._v(" "), _c('div', [_c('am-nav', {
    attrs: {
      "mode": "tabs"
    },
    model: {
      value: (_vm.nav4),
      callback: function($$v) {
        _vm.nav4 = $$v
      },
      expression: "nav4"
    }
  }, [_c('am-nav-item', {
    attrs: {
      "index": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-1",
      "default-active": "default-active"
    }
  }, [_vm._v("3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-2"
    }
  }, [_vm._v("3-2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3-3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-1"
    }
  }, [_vm._v("3-3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-2"
    }
  }, [_vm._v("3-3-2")])], 2)], 2), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "4"
    }
  }, [_vm._v("4")])], 1), _vm._v(" "), _vm._m(3)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("nav1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("default-active")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default-active"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("nav2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("dashboard"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("users"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("folder"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("file"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("default-active")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default-active"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("file"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("folder"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("file"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("file"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("shopping-bag"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("nav3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("mode")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("pills"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("default-active")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default-active"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("nav4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("mode")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("tabs"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("default-active")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default-active"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Buttons")]), _vm._v(" "), _c('h2', [_vm._v("Default")]), _vm._v(" "), _c('div', [_c('am-button', {
    attrs: {
      "type": "default"
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "secondary"
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "success"
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "danger"
    }
  }, [_vm._v("danger")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Radius")]), _vm._v(" "), _c('div', [_c('am-button', {
    attrs: {
      "type": "default",
      "shape": "radius"
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "primary",
      "shape": "radius"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "secondary",
      "shape": "radius"
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "success",
      "shape": "radius"
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "warning",
      "shape": "radius"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "danger",
      "shape": "radius"
    }
  }, [_vm._v("danger")]), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Round")]), _vm._v(" "), _c('div', [_c('am-button', {
    attrs: {
      "type": "default",
      "shape": "round"
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "primary",
      "shape": "round"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "secondary",
      "shape": "round"
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "success",
      "shape": "round"
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "warning",
      "shape": "round"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "danger",
      "shape": "round"
    }
  }, [_vm._v("danger")]), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Active")]), _vm._v(" "), _c('div', [_c('am-button', {
    attrs: {
      "type": "default",
      "active": ""
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "primary",
      "active": ""
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "secondary",
      "active": ""
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "success",
      "active": ""
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "warning",
      "active": ""
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "danger",
      "active": ""
    }
  }, [_vm._v("danger")]), _vm._v(" "), _vm._m(3)], 1), _vm._v(" "), _c('h2', [_vm._v("Disabled")]), _vm._v(" "), _c('div', [_c('am-button', {
    attrs: {
      "type": "default",
      "disabled": ""
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "primary",
      "disabled": ""
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "secondary",
      "disabled": ""
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "success",
      "disabled": ""
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "warning",
      "disabled": ""
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "danger",
      "disabled": ""
    }
  }, [_vm._v("danger")]), _vm._v(" "), _vm._m(4)], 1), _vm._v(" "), _c('h2', [_vm._v("Size")]), _vm._v(" "), _c('div', [_c('am-button', {
    attrs: {
      "size": "xl"
    }
  }, [_vm._v("xl")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "size": "lg"
    }
  }, [_vm._v("lg")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "size": "md"
    }
  }, [_vm._v("md")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "size": "sm"
    }
  }, [_vm._v("sm")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "size": "xs"
    }
  }, [_vm._v("xs")]), _vm._v(" "), _vm._m(5)], 1), _vm._v(" "), _c('h2', [_vm._v("Icon")]), _vm._v(" "), _c('div', [_c('am-button', {
    attrs: {
      "type": "default",
      "icon": "cog"
    }
  }, [_vm._v("Setting")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "warning",
      "icon": "shopping-cart"
    }
  }, [_vm._v("Purchase")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "default"
    }
  }, [_c('i', {
    staticClass: "am-icon-spinner am-icon-spin"
  }), _vm._v("\n  Loading\n")]), _vm._v(" "), _vm._m(6)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radius"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radius"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radius"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radius"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radius"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radius"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("round"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("round"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("round"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("round"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("round"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("shape")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("round"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("active")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("active")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("active")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("active")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("active")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("active")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("xl"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("xl"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("lg"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("lg"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("md"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("md"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("xs"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("xs"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("cog"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Setting"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("shopping-cart"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Purchase"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-icon-spinner am-icon-spin"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("i")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  Loading\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Select")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-select', {
    model: {
      value: (_vm.select1),
      callback: function($$v) {
        _vm.select1 = $$v
      },
      expression: "select1"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "B",
      "label": "B"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "C",
      "label": "C"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "D",
      "label": "D",
      "disabled": "disabled"
    }
  })], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Placeholder")]), _vm._v(" "), _c('div', [_c('am-select', {
    attrs: {
      "placeholder": "select"
    },
    model: {
      value: (_vm.select2),
      callback: function($$v) {
        _vm.select2 = $$v
      },
      expression: "select2"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "B",
      "label": "B"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "C",
      "label": "C"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "D",
      "label": "D",
      "disabled": "disabled"
    }
  })], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Multiple")]), _vm._v(" "), _c('div', [_c('am-select', {
    attrs: {
      "multiple": "multiple"
    },
    model: {
      value: (_vm.select3),
      callback: function($$v) {
        _vm.select3 = $$v
      },
      expression: "select3"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "B",
      "label": "B"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "C",
      "label": "C"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "D",
      "label": "D",
      "disabled": "disabled"
    }
  })], 1), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Group")]), _vm._v(" "), _c('div', [_c('am-select', {
    model: {
      value: (_vm.select4),
      callback: function($$v) {
        _vm.select4 = $$v
      },
      expression: "select4"
    }
  }, [_c('am-option-group', {
    attrs: {
      "label": "section1"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "B",
      "label": "B"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "C",
      "label": "C"
    }
  })], 1), _vm._v(" "), _c('am-option-group', {
    attrs: {
      "label": "section2"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "D",
      "label": "D"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "E",
      "label": "E"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "F",
      "label": "F"
    }
  })], 1), _vm._v(" "), _c('am-option-group', {
    attrs: {
      "label": "section3"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "G",
      "label": "G"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "H",
      "label": "H"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "I",
      "label": "I",
      "disabled": "disabled"
    }
  })], 1)], 1), _vm._v(" "), _vm._m(3)], 1), _vm._v(" "), _c('h2', [_vm._v("Color")]), _vm._v(" "), _c('div', [_c('am-select', {
    attrs: {
      "type": "primary"
    },
    model: {
      value: (_vm.select5),
      callback: function($$v) {
        _vm.select5 = $$v
      },
      expression: "select5"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _c('am-select', {
    attrs: {
      "type": "secondary"
    },
    model: {
      value: (_vm.select5),
      callback: function($$v) {
        _vm.select5 = $$v
      },
      expression: "select5"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _c('am-select', {
    attrs: {
      "type": "success"
    },
    model: {
      value: (_vm.select5),
      callback: function($$v) {
        _vm.select5 = $$v
      },
      expression: "select5"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _c('am-select', {
    attrs: {
      "type": "warning"
    },
    model: {
      value: (_vm.select5),
      callback: function($$v) {
        _vm.select5 = $$v
      },
      expression: "select5"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _c('am-select', {
    attrs: {
      "type": "danger"
    },
    model: {
      value: (_vm.select5),
      callback: function($$v) {
        _vm.select5 = $$v
      },
      expression: "select5"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _c('am-select', {
    attrs: {
      "type": "primary",
      "multiple": "multiple"
    },
    model: {
      value: (_vm.select6),
      callback: function($$v) {
        _vm.select6 = $$v
      },
      expression: "select6"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _c('am-select', {
    attrs: {
      "type": "secondary",
      "multiple": "multiple"
    },
    model: {
      value: (_vm.select6),
      callback: function($$v) {
        _vm.select6 = $$v
      },
      expression: "select6"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _c('am-select', {
    attrs: {
      "type": "success",
      "multiple": "multiple"
    },
    model: {
      value: (_vm.select6),
      callback: function($$v) {
        _vm.select6 = $$v
      },
      expression: "select6"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _c('am-select', {
    attrs: {
      "type": "warning",
      "multiple": "multiple"
    },
    model: {
      value: (_vm.select6),
      callback: function($$v) {
        _vm.select6 = $$v
      },
      expression: "select6"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _c('am-select', {
    attrs: {
      "type": "danger",
      "multiple": "multiple"
    },
    model: {
      value: (_vm.select6),
      callback: function($$v) {
        _vm.select6 = $$v
      },
      expression: "select6"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  })], 1), _vm._v(" "), _vm._m(4)], 1), _vm._v(" "), _c('h2', [_vm._v("Max Hight")]), _vm._v(" "), _c('div', [_c('am-select', {
    attrs: {
      "max-height": "200px"
    },
    model: {
      value: (_vm.select7),
      callback: function($$v) {
        _vm.select7 = $$v
      },
      expression: "select7"
    }
  }, [_c('am-option', {
    attrs: {
      "value": "A",
      "label": "A"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "B",
      "label": "B"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "C",
      "label": "C"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "D",
      "label": "D"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "E",
      "label": "E"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "F",
      "label": "F"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "G",
      "label": "G"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "H",
      "label": "H"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "I",
      "label": "I"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "J",
      "label": "J"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "K",
      "label": "K"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "L",
      "label": "L"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "M",
      "label": "M"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "N",
      "label": "N"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "O",
      "label": "O"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "P",
      "label": "P"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "Q",
      "label": "Q"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "R",
      "label": "R"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "S",
      "label": "S"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "T",
      "label": "T"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "U",
      "label": "U"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "V",
      "label": "V"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "W",
      "label": "W"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "X",
      "label": "X"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "Y",
      "label": "Y"
    }
  }), _vm._v(" "), _c('am-option', {
    attrs: {
      "value": "Z",
      "label": "Z"
    }
  })], 1), _vm._v(" "), _vm._m(5)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("disabled"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("disabled"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("multiple")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("multiple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("disabled"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option-group")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("section1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option-group")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option-group")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("section2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("E"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("E"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("F"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("F"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option-group")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option-group")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("section3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("G"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("G"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("H"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("H"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("I"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("I"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("disabled"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option-group")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("multiple")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("multiple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("multiple")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("multiple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("multiple")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("multiple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("multiple")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("multiple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("multiple")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("multiple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("select7"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("max-height")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("200px"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("A"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("B"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("C"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("D"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("E"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("E"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("F"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("F"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("G"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("G"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("H"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("H"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("I"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("I"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("J"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("J"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("K"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("K"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("L"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("L"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("M"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("M"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("N"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("N"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("O"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("O"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("P"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("P"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Q"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Q"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("R"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("R"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("S"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("S"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("T"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("T"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("U"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("U"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("V"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("V"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("W"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("W"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("X"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("X"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Y"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Y"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Z"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Z"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Tab")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-tab-set', {
    model: {
      value: (_vm.tab1),
      callback: function($$v) {
        _vm.tab1 = $$v
      },
      expression: "tab1"
    }
  }, [_c('am-tab', {
    attrs: {
      "header": "First",
      "name": "1"
    }
  }, [_c('p', [_vm._v("1")]), _vm._v(" "), _c('p', [_vm._v("1")]), _vm._v(" "), _c('p', [_vm._v("1")])]), _vm._v(" "), _c('am-tab', {
    attrs: {
      "header": "Second",
      "name": "2"
    }
  }, [_c('p', [_vm._v("2")])])], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Overflow")]), _vm._v(" "), _c('div', [_c('am-tab-set', {
    attrs: {
      "overflow": "overflow"
    },
    model: {
      value: (_vm.tab2),
      callback: function($$v) {
        _vm.tab2 = $$v
      },
      expression: "tab2"
    }
  }, [_c('am-tab', {
    attrs: {
      "header": "First",
      "name": "1"
    }
  }, [_c('p', [_vm._v("1")]), _vm._v(" "), _c('p', [_vm._v("1")]), _vm._v(" "), _c('p', [_vm._v("1")])]), _vm._v(" "), _c('am-tab', {
    attrs: {
      "header": "Second",
      "name": "2"
    }
  }, [_c('p', [_vm._v("2")]), _vm._v(" "), _c('am-select', _vm._l((Array(10)), function(_, index) {
    return _c('am-option', {
      key: "index",
      attrs: {
        "label": index.toString(),
        "value": index
      }
    })
  }))], 1)], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Justify")]), _vm._v(" "), _c('div', [_c('am-tab-set', {
    attrs: {
      "justify": "justify"
    },
    model: {
      value: (_vm.tab3),
      callback: function($$v) {
        _vm.tab3 = $$v
      },
      expression: "tab3"
    }
  }, [_c('am-tab', {
    attrs: {
      "header": "First",
      "name": "1"
    }
  }, [_c('p', [_vm._v("1")]), _vm._v(" "), _c('p', [_vm._v("1")]), _vm._v(" "), _c('p', [_vm._v("1")])]), _vm._v(" "), _c('am-tab', {
    attrs: {
      "header": "Second",
      "name": "2"
    }
  }, [_c('p', [_vm._v("2")])]), _vm._v(" "), _c('am-tab', {
    attrs: {
      "header": "Third",
      "name": "3"
    }
  }, [_c('p', [_vm._v("3")])])], 1), _vm._v(" "), _vm._m(2)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab-set")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("tab1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("header")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("First"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("header")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Second"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab-set")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab-set")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("tab2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("overflow")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("overflow"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("header")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("First"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("header")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Second"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-for")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("(_, index) in Array(10)"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("key")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("index"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("index.toString()"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":value")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("index"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-option")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab-set")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab-set")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("tab3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("justify")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("justify"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("header")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("First"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("header")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Second"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-tab")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("header")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Third"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-tab-set")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Topbar")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-topbar', [_c('h1', {
    staticClass: "am-topbar-brand",
    slot: "brand"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("Amazevue")])]), _vm._v(" "), _c('am-nav', {
    staticClass: "am-topbar-nav",
    attrs: {
      "mode": "pills"
    },
    model: {
      value: (_vm.nav1),
      callback: function($$v) {
        _vm.nav1 = $$v
      },
      expression: "nav1"
    }
  }, [_c('am-nav-item', {
    attrs: {
      "index": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-1",
      "default-active": ""
    }
  }, [_vm._v("3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-2"
    }
  }, [_vm._v("3-2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3-3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-1"
    }
  }, [_vm._v("3-3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-2"
    }
  }, [_vm._v("3-3-2")])], 2)], 2), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "4"
    }
  }, [_vm._v("4")])], 1)], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Inverse")]), _vm._v(" "), _c('div', [_c('am-topbar', {
    attrs: {
      "inverse": ""
    }
  }, [_c('h1', {
    staticClass: "am-topbar-brand",
    slot: "brand"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("Amazevue")])]), _vm._v(" "), _c('am-nav', {
    staticClass: "am-topbar-nav",
    attrs: {
      "mode": "pills"
    },
    model: {
      value: (_vm.nav2),
      callback: function($$v) {
        _vm.nav2 = $$v
      },
      expression: "nav2"
    }
  }, [_c('am-nav-item', {
    attrs: {
      "index": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-1",
      "default-active": ""
    }
  }, [_vm._v("3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-2"
    }
  }, [_vm._v("3-2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3-3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-1"
    }
  }, [_vm._v("3-3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-2"
    }
  }, [_vm._v("3-3-2")])], 2)], 2), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "4"
    }
  }, [_vm._v("4")])], 1)], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Fixed")]), _vm._v(" "), _c('am-radio-group', {
    model: {
      value: (_vm.nav3fixed),
      callback: function($$v) {
        _vm.nav3fixed = $$v
      },
      expression: "nav3fixed"
    }
  }, [_c('am-radio', {
    attrs: {
      "label": "none"
    }
  }, [_vm._v("None")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": "top"
    }
  }, [_vm._v("Top")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": "bottom"
    }
  }, [_vm._v("Bottom")])], 1), _vm._v(" "), _c('div', [_c('am-topbar', {
    attrs: {
      "fixed": _vm.nav3fixed
    }
  }, [_c('h1', {
    staticClass: "am-topbar-brand",
    slot: "brand"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("Amazevue")])]), _vm._v(" "), _c('am-nav', {
    staticClass: "am-topbar-nav",
    attrs: {
      "mode": "pills"
    },
    model: {
      value: (_vm.nav3),
      callback: function($$v) {
        _vm.nav3 = $$v
      },
      expression: "nav3"
    }
  }, [_c('am-nav-item', {
    attrs: {
      "index": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-1",
      "default-active": "default-active"
    }
  }, [_vm._v("3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-2"
    }
  }, [_vm._v("3-2")]), _vm._v(" "), _c('am-sub-nav', [_c('template', {
    slot: "title"
  }, [_vm._v("3-3")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-1"
    }
  }, [_vm._v("3-3-1")]), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "3-3-2"
    }
  }, [_vm._v("3-3-2")])], 2)], 2), _vm._v(" "), _c('am-nav-item', {
    attrs: {
      "index": "4"
    }
  }, [_vm._v("4")])], 1)], 1), _vm._v(" "), _vm._m(2)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-topbar")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("h1")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-topbar-brand"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("brand"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("href")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("/"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Amazevue"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("a")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("h1")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-topbar-nav"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("mode")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("pills"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("nav1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("default-active")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-topbar")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-topbar")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("inverse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("h1")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-topbar-brand"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("brand"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("href")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("/"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Amazevue"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("a")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("h1")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-topbar-nav"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("mode")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("pills"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("nav2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("default-active")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-topbar")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-topbar")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":fixed")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("nav3fixed"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("h1")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-topbar-brand"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("brand"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("href")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("/"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Amazevue"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("a")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("h1")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-topbar-nav"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("mode")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("pills"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("nav3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("default-active")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default-active"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3-3-2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-sub-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-nav-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("index")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav-item")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-nav")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-topbar")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Radio")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-radio', {
    attrs: {
      "label": true
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": false
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "secondary",
      "label": true
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "secondary",
      "label": false
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "success",
      "label": true
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "success",
      "label": false
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "warning",
      "label": true
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "warning",
      "label": false
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "danger",
      "label": true
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("danger")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "danger",
      "label": false
    },
    model: {
      value: (_vm.radio1),
      callback: function($$v) {
        _vm.radio1 = $$v
      },
      expression: "radio1"
    }
  }, [_vm._v("danger")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Disabled")]), _vm._v(" "), _c('p', [_c('label', [_vm._v("Disabled\n"), _c('am-radio', {
    attrs: {
      "label": true
    },
    model: {
      value: (_vm.radio2),
      callback: function($$v) {
        _vm.radio2 = $$v
      },
      expression: "radio2"
    }
  }, [_vm._v("true")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": false
    },
    model: {
      value: (_vm.radio2),
      callback: function($$v) {
        _vm.radio2 = $$v
      },
      expression: "radio2"
    }
  }, [_vm._v("false")])], 1)]), _vm._v(" "), _c('div', [_c('am-radio', {
    attrs: {
      "label": true,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": false,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "secondary",
      "label": true,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "secondary",
      "label": false,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "success",
      "label": true,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "success",
      "label": false,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "warning",
      "label": true,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "warning",
      "label": false,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "danger",
      "label": true,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("danger")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "type": "danger",
      "label": false,
      "disabled": _vm.radio2
    },
    model: {
      value: (_vm.radio3),
      callback: function($$v) {
        _vm.radio3 = $$v
      },
      expression: "radio3"
    }
  }, [_vm._v("danger")]), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Group")]), _vm._v(" "), _c('div', [_c('am-radio-group', {
    model: {
      value: (_vm.radio4),
      callback: function($$v) {
        _vm.radio4 = $$v
      },
      expression: "radio4"
    }
  }, [_c('am-radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('am-radio', {
    attrs: {
      "label": 4,
      "disabled": "disabled"
    }
  }, [_vm._v("4")])], 1), _vm._v(" "), _vm._m(2)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("br")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("/>")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("br")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("/>")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("br")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("/>")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("br")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("/>")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("br")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("/>")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("br")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("/>")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("br")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("/>")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("br")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("/>")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("true"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio-group")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("radio4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-radio")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("disabled"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-radio-group")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("DatePicker")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-date-picker', {
    model: {
      value: (_vm.date1),
      callback: function($$v) {
        _vm.date1 = $$v
      },
      expression: "date1"
    }
  }), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Placeholder")]), _vm._v(" "), _c('div', [_c('am-date-picker', {
    attrs: {
      "placeholder": "Select Date"
    },
    model: {
      value: (_vm.date2),
      callback: function($$v) {
        _vm.date2 = $$v
      },
      expression: "date2"
    }
  }), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Limit")]), _vm._v(" "), _c('div', [_c('am-date-picker', {
    attrs: {
      "max": "2017-06-01",
      "min": "2016-06-01"
    },
    model: {
      value: (_vm.date3),
      callback: function($$v) {
        _vm.date3 = $$v
      },
      expression: "date3"
    }
  }), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Color")]), _vm._v(" "), _c('div', [_c('am-date-picker', {
    attrs: {
      "type": "success"
    },
    model: {
      value: (_vm.date4),
      callback: function($$v) {
        _vm.date4 = $$v
      },
      expression: "date4"
    }
  }), _vm._v(" "), _c('am-date-picker', {
    attrs: {
      "type": "warning"
    },
    model: {
      value: (_vm.date4),
      callback: function($$v) {
        _vm.date4 = $$v
      },
      expression: "date4"
    }
  }), _vm._v(" "), _c('am-date-picker', {
    attrs: {
      "type": "danger"
    },
    model: {
      value: (_vm.date4),
      callback: function($$v) {
        _vm.date4 = $$v
      },
      expression: "date4"
    }
  }), _vm._v(" "), _vm._m(3)], 1), _vm._v(" "), _c('h2', [_vm._v("Format")]), _vm._v(" "), _c('div', [_c('am-date-picker', {
    attrs: {
      "format": "yyyy/mm/dd"
    },
    model: {
      value: (_vm.date5),
      callback: function($$v) {
        _vm.date5 = $$v
      },
      expression: "date5"
    }
  }), _vm._v(" "), _vm._m(4)], 1), _vm._v(" "), _c('h2', [_vm._v("Mode")]), _vm._v(" "), _c('div', [_c('am-date-picker', {
    attrs: {
      "mode": "month",
      "format": "yyyy-mm"
    },
    model: {
      value: (_vm.date6),
      callback: function($$v) {
        _vm.date6 = $$v
      },
      expression: "date6"
    }
  }), _vm._v(" "), _c('am-date-picker', {
    attrs: {
      "mode": "year",
      "format": "yyyy"
    },
    model: {
      value: (_vm.date7),
      callback: function($$v) {
        _vm.date7 = $$v
      },
      expression: "date7"
    }
  }), _vm._v(" "), _vm._m(5)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-date-picker")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("date1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-date-picker")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-date-picker")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("date2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Select Date"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-date-picker")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-date-picker")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("date3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("max")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2017-06-01"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("min")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2016-06-01"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-date-picker")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-date-picker")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("date4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-date-picker")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-date-picker")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("date4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-date-picker")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-date-picker")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("date4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-date-picker")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-date-picker")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("date5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("format")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("yyyy/mm/dd"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-date-picker")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-date-picker")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("date6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("mode")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("month"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("format")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("yyyy-mm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-date-picker")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-date-picker")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("date7"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("mode")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("year"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("format")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("yyyy"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-date-picker")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Checkbox")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-checkbox', {
    attrs: {
      "type": "primary"
    },
    model: {
      value: (_vm.checkbox1),
      callback: function($$v) {
        _vm.checkbox1 = $$v
      },
      expression: "checkbox1"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "type": "secondary"
    },
    model: {
      value: (_vm.checkbox1),
      callback: function($$v) {
        _vm.checkbox1 = $$v
      },
      expression: "checkbox1"
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "type": "success"
    },
    model: {
      value: (_vm.checkbox1),
      callback: function($$v) {
        _vm.checkbox1 = $$v
      },
      expression: "checkbox1"
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "type": "warning"
    },
    model: {
      value: (_vm.checkbox1),
      callback: function($$v) {
        _vm.checkbox1 = $$v
      },
      expression: "checkbox1"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "type": "danger"
    },
    model: {
      value: (_vm.checkbox1),
      callback: function($$v) {
        _vm.checkbox1 = $$v
      },
      expression: "checkbox1"
    }
  }, [_vm._v("danger")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Disabled")]), _vm._v(" "), _c('p', [_c('am-checkbox', {
    model: {
      value: (_vm.checkbox2),
      callback: function($$v) {
        _vm.checkbox2 = $$v
      },
      expression: "checkbox2"
    }
  }, [_vm._v("disabled")])], 1), _vm._v(" "), _c('div', [_c('am-checkbox', {
    attrs: {
      "type": "primary",
      "disabled": _vm.checkbox2
    },
    model: {
      value: (_vm.checkbox3),
      callback: function($$v) {
        _vm.checkbox3 = $$v
      },
      expression: "checkbox3"
    }
  }, [_vm._v("primary")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "type": "secondary",
      "disabled": _vm.checkbox2
    },
    model: {
      value: (_vm.checkbox3),
      callback: function($$v) {
        _vm.checkbox3 = $$v
      },
      expression: "checkbox3"
    }
  }, [_vm._v("secondary")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "type": "success",
      "disabled": _vm.checkbox2
    },
    model: {
      value: (_vm.checkbox3),
      callback: function($$v) {
        _vm.checkbox3 = $$v
      },
      expression: "checkbox3"
    }
  }, [_vm._v("success")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "type": "warning",
      "disabled": _vm.checkbox2
    },
    model: {
      value: (_vm.checkbox3),
      callback: function($$v) {
        _vm.checkbox3 = $$v
      },
      expression: "checkbox3"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "type": "danger",
      "disabled": _vm.checkbox2
    },
    model: {
      value: (_vm.checkbox3),
      callback: function($$v) {
        _vm.checkbox3 = $$v
      },
      expression: "checkbox3"
    }
  }, [_vm._v("danger")]), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Group")]), _vm._v(" "), _c('div', [_c('am-checkbox-group', {
    model: {
      value: (_vm.checkbox4),
      callback: function($$v) {
        _vm.checkbox4 = $$v
      },
      expression: "checkbox4"
    }
  }, [_c('am-checkbox', {
    attrs: {
      "label": "a"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "label": "b"
    }
  }, [_vm._v("b")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "label": "c"
    }
  }, [_vm._v("c")]), _vm._v(" "), _c('am-checkbox', {
    attrs: {
      "label": "d",
      "disabled": "disabled"
    }
  }, [_vm._v("d")])], 1), _vm._v(" "), _vm._m(2)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox-group")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("checkbox4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("a"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("a"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("b"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("b"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("c"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("c"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-checkbox")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("label")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("d"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("disabled"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("d"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-checkbox-group")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Grid")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-row', [_c('am-col', {
    staticClass: "grid-content bg-purple",
    attrs: {
      "span": 12
    }
  })], 1), _vm._v(" "), _c('am-row', [_c('am-col', {
    staticClass: "grid-content bg-purple",
    attrs: {
      "span": 6
    }
  }), _vm._v(" "), _c('am-col', {
    staticClass: "grid-content bg-purple-light",
    attrs: {
      "span": 6
    }
  })], 1), _vm._v(" "), _c('am-row', [_c('am-col', {
    staticClass: "grid-content bg-purple-light",
    attrs: {
      "span": 4
    }
  }), _vm._v(" "), _c('am-col', {
    staticClass: "grid-content bg-purple",
    attrs: {
      "span": 4
    }
  }), _vm._v(" "), _c('am-col', {
    staticClass: "grid-content bg-purple-light",
    attrs: {
      "span": 4
    }
  })], 1), _vm._v(" "), _c('am-row', [_c('am-col', {
    staticClass: "grid-content bg-purple",
    attrs: {
      "span": 3
    }
  }), _vm._v(" "), _c('am-col', {
    staticClass: "grid-content bg-purple-light",
    attrs: {
      "span": 3
    }
  }), _vm._v(" "), _c('am-col', {
    staticClass: "grid-content bg-purple",
    attrs: {
      "span": 3
    }
  }), _vm._v(" "), _c('am-col', {
    staticClass: "grid-content bg-purple-light",
    attrs: {
      "span": 3
    }
  })], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Gutter")]), _vm._v(" "), _c('div', [_c('am-row', {
    attrs: {
      "gutter": "sm"
    }
  }, [_c('am-col', {
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })])], 1), _vm._v(" "), _c('am-row', {
    attrs: {
      "gutter": "sm"
    }
  }, [_c('am-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": 2
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": 2
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })])], 1), _vm._v(" "), _c('am-row', {
    attrs: {
      "gutter": "sm"
    }
  }, [_c('am-col', {
    attrs: {
      "span": 2
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": 2
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })])], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Offset")]), _vm._v(" "), _c('div', [_c('am-row', {
    attrs: {
      "gutter": "sm"
    }
  }, [_c('am-col', {
    attrs: {
      "span": 3
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": 3,
      "offset": 3
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })])], 1), _vm._v(" "), _c('am-row', {
    attrs: {
      "gutter": "sm"
    }
  }, [_c('am-col', {
    attrs: {
      "span": 3,
      "offset": 3
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": 3,
      "offset": 3
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })])], 1), _vm._v(" "), _c('am-row', {
    attrs: {
      "gutter": "sm"
    }
  }, [_c('am-col', {
    attrs: {
      "span": 6,
      "offset": 3
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })])], 1), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Reactive")]), _vm._v(" "), _c('div', [_c('am-row', {
    attrs: {
      "gutter": "sm"
    }
  }, [_c('am-col', {
    attrs: {
      "span": {
        sm: '3',
        md: '2',
        lg: '1'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": {
        sm: '3',
        md: '4',
        lg: '5'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": {
        sm: '3',
        md: '4',
        lg: '5'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })]), _vm._v(" "), _c('am-col', {
    attrs: {
      "span": {
        sm: '3',
        md: '2',
        lg: '1'
      }
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  })])], 1), _vm._v(" "), _vm._m(3)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("12"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple-light"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple-light"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple-light"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple-light"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple-light"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("gutter")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("8"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("gutter")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("gutter")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("8"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("gutter")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":offset")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("gutter")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":offset")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":offset")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("gutter")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":offset")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-row")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("gutter")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("{ sm:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", md:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", lg:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("}"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("{ sm:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", md:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", lg:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("}"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("{ sm:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", md:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", lg:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("}"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-col")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":span")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("{ sm:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", md:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", lg:"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("}"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("grid-content bg-purple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-col")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-row")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Pagination")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-pagination', {
    attrs: {
      "total": 70
    }
  }), _vm._v(" "), _c('am-pagination', {
    attrs: {
      "total": 1000
    }
  }), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Placement")]), _vm._v(" "), _c('div', [_c('am-pagination', {
    attrs: {
      "placement": "left",
      "total": 70
    }
  }), _vm._v(" "), _c('am-pagination', {
    attrs: {
      "placement": "right",
      "total": 70
    }
  }), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Layout")]), _vm._v(" "), _c('div', [_c('am-pagination', {
    attrs: {
      "total": 1000,
      "layout": ['total', 'prev', 'pager', 'next']
    }
  }), _vm._v(" "), _c('am-pagination', {
    attrs: {
      "total": 1000,
      "layout": ['sizes', 'prev', 'pager', 'next']
    }
  }), _vm._v(" "), _c('am-pagination', {
    attrs: {
      "total": 1000,
      "layout": ['prev', 'pager', 'next', 'jumper']
    }
  }), _vm._v(" "), _c('am-pagination', {
    attrs: {
      "total": 1000,
      "layout": ['total', 'sizes', 'prev', 'pager', 'next', 'jumper']
    }
  }), _vm._v(" "), _vm._m(2)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":total")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("70"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-pagination")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":total")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1000"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-pagination")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placement")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("left"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":total")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("70"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-pagination")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placement")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("right"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":total")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("70"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-pagination")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":total")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1000"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":layout")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("["), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("total"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("prev"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("pager"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("next"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("]"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-pagination")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":total")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1000"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":layout")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("["), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("sizes"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("prev"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("pager"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("next"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("]"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-pagination")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":total")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1000"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":layout")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("["), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("prev"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("pager"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("next"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("jumper"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("]"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-pagination")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":total")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1000"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":layout")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("["), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("total"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("sizes"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("prev"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("pager"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("next"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("jumper"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("'")]), _vm._v("]"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-pagination")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Input")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-input', {
    attrs: {
      "placeholder": "basic"
    },
    model: {
      value: (_vm.input1),
      callback: function($$v) {
        _vm.input1 = $$v
      },
      expression: "input1"
    }
  }), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Native Type")]), _vm._v(" "), _c('div', [_c('am-input', {
    attrs: {
      "native-type": "textarea",
      "placeholder": "not resizeable",
      "rows": 5,
      "resize": false
    },
    model: {
      value: (_vm.input2),
      callback: function($$v) {
        _vm.input2 = $$v
      },
      expression: "input2"
    }
  }), _vm._v(" "), _c('am-input', {
    attrs: {
      "native-type": "textarea",
      "placeholder": "resizeable"
    },
    model: {
      value: (_vm.input2),
      callback: function($$v) {
        _vm.input2 = $$v
      },
      expression: "input2"
    }
  }), _vm._v(" "), _c('am-input', {
    attrs: {
      "native-type": "password",
      "placeholder": "password"
    },
    model: {
      value: (_vm.input2),
      callback: function($$v) {
        _vm.input2 = $$v
      },
      expression: "input2"
    }
  }), _vm._v(" "), _c('am-input', {
    attrs: {
      "native-type": "number",
      "placeholder": "number"
    },
    model: {
      value: (_vm.input6),
      callback: function($$v) {
        _vm.input6 = $$v
      },
      expression: "input6"
    }
  }), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Color")]), _vm._v(" "), _c('div', [_c('am-input', {
    attrs: {
      "type": "primary",
      "placeholder": "primary"
    },
    model: {
      value: (_vm.input3),
      callback: function($$v) {
        _vm.input3 = $$v
      },
      expression: "input3"
    }
  }), _vm._v(" "), _c('am-input', {
    attrs: {
      "type": "secondary",
      "placeholder": "secondary"
    },
    model: {
      value: (_vm.input3),
      callback: function($$v) {
        _vm.input3 = $$v
      },
      expression: "input3"
    }
  }), _vm._v(" "), _c('am-input', {
    attrs: {
      "type": "success",
      "placeholder": "success"
    },
    model: {
      value: (_vm.input3),
      callback: function($$v) {
        _vm.input3 = $$v
      },
      expression: "input3"
    }
  }), _vm._v(" "), _c('am-input', {
    attrs: {
      "type": "warning",
      "placeholder": "warning"
    },
    model: {
      value: (_vm.input3),
      callback: function($$v) {
        _vm.input3 = $$v
      },
      expression: "input3"
    }
  }), _vm._v(" "), _c('am-input', {
    attrs: {
      "type": "danger",
      "placeholder": "danger"
    },
    model: {
      value: (_vm.input3),
      callback: function($$v) {
        _vm.input3 = $$v
      },
      expression: "input3"
    }
  }), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Icon & Button")]), _vm._v(" "), _c('div', [_c('am-input', {
    attrs: {
      "type": "primary",
      "placeholder": "User"
    },
    model: {
      value: (_vm.input4),
      callback: function($$v) {
        _vm.input4 = $$v
      },
      expression: "input4"
    }
  }, [_c('i', {
    staticClass: "am-icon-user",
    slot: "prepend"
  })]), _vm._v(" "), _c('am-input', {
    attrs: {
      "type": "warning",
      "placeholder": "Currency"
    },
    model: {
      value: (_vm.input4),
      callback: function($$v) {
        _vm.input4 = $$v
      },
      expression: "input4"
    }
  }, [_c('span', {
    slot: "append"
  }, [_vm._v(".00")])]), _vm._v(" "), _c('am-input', {
    attrs: {
      "type": "secondary",
      "placeholder": "Search",
      "append-btn": "append-btn"
    },
    model: {
      value: (_vm.input4),
      callback: function($$v) {
        _vm.input4 = $$v
      },
      expression: "input4"
    }
  }, [_c('am-button', {
    attrs: {
      "icon": "search"
    },
    slot: "append"
  })], 1), _vm._v(" "), _vm._m(3)], 1), _vm._v(" "), _c('h2', [_vm._v("Disabled")]), _vm._v(" "), _c('div', [_c('am-input', {
    attrs: {
      "type": "primary",
      "placeholder": "User",
      "disabled": ""
    },
    model: {
      value: (_vm.input4),
      callback: function($$v) {
        _vm.input4 = $$v
      },
      expression: "input4"
    }
  }, [_c('i', {
    staticClass: "am-icon-user",
    slot: "prepend"
  })]), _vm._v(" "), _c('am-input', {
    attrs: {
      "type": "warning",
      "placeholder": "Currency",
      "disabled": ""
    },
    model: {
      value: (_vm.input4),
      callback: function($$v) {
        _vm.input4 = $$v
      },
      expression: "input4"
    }
  }, [_c('span', {
    slot: "append"
  }, [_vm._v(".00")])]), _vm._v(" "), _c('am-input', {
    attrs: {
      "type": "secondary",
      "placeholder": "Search",
      "append-btn": "append-btn",
      "disabled": ""
    },
    model: {
      value: (_vm.input4),
      callback: function($$v) {
        _vm.input4 = $$v
      },
      expression: "input4"
    }
  }, [_c('am-button', {
    attrs: {
      "icon": "search",
      "disabled": ""
    },
    slot: "append"
  })], 1), _vm._v(" "), _vm._m(4)], 1), _vm._v(" "), _c('h2', [_vm._v("Size")]), _vm._v(" "), _c('div', [_c('am-input', {
    attrs: {
      "size": "lg",
      "placeholder": "lg"
    },
    model: {
      value: (_vm.input5),
      callback: function($$v) {
        _vm.input5 = $$v
      },
      expression: "input5"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("@")])]), _vm._v(" "), _c('am-input', {
    attrs: {
      "placeholder": "md"
    },
    model: {
      value: (_vm.input5),
      callback: function($$v) {
        _vm.input5 = $$v
      },
      expression: "input5"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("@")])]), _vm._v(" "), _c('am-input', {
    attrs: {
      "size": "sm",
      "placeholder": "sm"
    },
    model: {
      value: (_vm.input5),
      callback: function($$v) {
        _vm.input5 = $$v
      },
      expression: "input5"
    }
  }, [_c('span', {
    slot: "prepend"
  }, [_vm._v("@")])]), _vm._v(" "), _c('am-input', {
    attrs: {
      "size": "lg",
      "placeholder": "lg"
    },
    model: {
      value: (_vm.input5),
      callback: function($$v) {
        _vm.input5 = $$v
      },
      expression: "input5"
    }
  }), _vm._v(" "), _c('am-input', {
    attrs: {
      "placeholder": "md"
    },
    model: {
      value: (_vm.input5),
      callback: function($$v) {
        _vm.input5 = $$v
      },
      expression: "input5"
    }
  }), _vm._v(" "), _c('am-input', {
    attrs: {
      "size": "sm",
      "placeholder": "sm"
    },
    model: {
      value: (_vm.input5),
      callback: function($$v) {
        _vm.input5 = $$v
      },
      expression: "input5"
    }
  }), _vm._v(" "), _vm._m(5)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("basic"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("native-type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("textarea"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("not resizeable"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":rows")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":resize")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("false"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("native-type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("textarea"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("resizeable"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("native-type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("password"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("password"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("native-type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("number"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("number"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("User"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-icon-user"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("prepend"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("i")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Currency"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("append"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v(".00"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Search"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("append-btn")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("append-btn"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("append"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("search"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("User"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-icon-user"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("prepend"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("i")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Currency"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("append"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v(".00"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Search"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("append-btn")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("append-btn"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("append"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("search"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-button")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("lg"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("lg"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("prepend"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("@"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("md"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("prepend"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("@"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("prepend"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("@"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("lg"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("lg"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("md"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("size")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("sm"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Collapse")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-collapse-set', {
    model: {
      value: (_vm.collapse1),
      callback: function($$v) {
        _vm.collapse1 = $$v
      },
      expression: "collapse1"
    }
  }, [_c('am-collapse', {
    attrs: {
      "name": "1",
      "title": "First"
    }
  }, [_c('p', [_vm._v("this is the first collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "name": "2",
      "title": "Second"
    }
  }, [_c('p', [_vm._v("this is the second collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "name": "3",
      "title": "Third"
    }
  }, [_c('p', [_vm._v("this is the third collapse")])])], 1), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Accordion")]), _vm._v(" "), _c('div', [_c('am-collapse-set', {
    attrs: {
      "accordion": "accordion"
    },
    model: {
      value: (_vm.collapse2),
      callback: function($$v) {
        _vm.collapse2 = $$v
      },
      expression: "collapse2"
    }
  }, [_c('am-collapse', {
    attrs: {
      "name": "1",
      "title": "First"
    }
  }, [_c('p', [_vm._v("this is the first collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "name": "2",
      "title": "Second"
    }
  }, [_c('p', [_vm._v("this is the second collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "name": "3",
      "title": "Third"
    }
  }, [_c('p', [_vm._v("this is the third collapse")])])], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Color")]), _vm._v(" "), _c('div', [_c('am-collapse-set', {
    model: {
      value: (_vm.collapse3),
      callback: function($$v) {
        _vm.collapse3 = $$v
      },
      expression: "collapse3"
    }
  }, [_c('am-collapse', {
    attrs: {
      "type": "primary",
      "name": "1",
      "title": "Primary"
    }
  }, [_c('p', [_vm._v("this is the primary collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "type": "secondary",
      "name": "2",
      "title": "Secondary"
    }
  }, [_c('p', [_vm._v("this is the secondary collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "type": "success",
      "name": "3",
      "title": "Success"
    }
  }, [_c('p', [_vm._v("this is the success collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "type": "warning",
      "name": "4",
      "title": "Warning"
    }
  }, [_c('p', [_vm._v("this is the warning collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "type": "danger",
      "name": "5",
      "title": "Danger"
    }
  }, [_c('p', [_vm._v("this is the danger collapse")])])], 1), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Title")]), _vm._v(" "), _c('div', [_c('am-collapse-set', {
    model: {
      value: (_vm.collapse4),
      callback: function($$v) {
        _vm.collapse4 = $$v
      },
      expression: "collapse4"
    }
  }, [_c('am-collapse', {
    attrs: {
      "name": "1"
    }
  }, [_c('i', {
    staticClass: "am-icon-file",
    slot: "title"
  }, [_vm._v(" First")]), _vm._v(" "), _c('p', [_vm._v("this is the first collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "name": "2"
    }
  }, [_c('i', {
    staticClass: "am-icon-file",
    slot: "title"
  }, [_vm._v(" Second")]), _vm._v(" "), _c('p', [_vm._v("this is the second collapse")])]), _vm._v(" "), _c('am-collapse', {
    attrs: {
      "name": "3"
    }
  }, [_c('i', {
    staticClass: "am-icon-file",
    slot: "title"
  }, [_vm._v(" Third")]), _vm._v(" "), _c('p', [_vm._v("this is the third collapse")])])], 1), _vm._v(" "), _vm._m(3)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse-set")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("collapse1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("First"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the first collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Second"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the second collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Third"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the third collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse-set")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse-set")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("collapse2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("accordion")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("accordion"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("First"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the first collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Second"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the second collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Third"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the third collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse-set")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse-set")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("collapse3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the primary collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the secondary collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the success collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the warning collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the danger collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse-set")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse-set")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("collapse4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-icon-file"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v(" First"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("i")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the first collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-icon-file"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v(" Second"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("i")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the second collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-collapse")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("name")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-icon-file"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("slot")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("title"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v(" Third"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("i")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("this is the third collapse"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-collapse-set")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Message")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('p', [_c('am-button', {
    on: {
      "click": function($event) {
        _vm.message1 = true
      }
    }
  }, [_vm._v("Show")])], 1), _vm._v(" "), _c('div', [_c('am-message', {
    attrs: {
      "title": "Message",
      "message": "message 1"
    },
    model: {
      value: (_vm.message1),
      callback: function($$v) {
        _vm.message1 = $$v
      },
      expression: "message1"
    }
  }), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Placement")]), _vm._v(" "), _c('p', [_c('am-button', {
    on: {
      "click": function($event) {
        _vm.message2 = true
      }
    }
  }, [_vm._v("Top Left")]), _vm._v(" "), _c('am-button', {
    on: {
      "click": function($event) {
        _vm.message3 = true
      }
    }
  }, [_vm._v("Top")]), _vm._v(" "), _c('am-button', {
    on: {
      "click": function($event) {
        _vm.message4 = true
      }
    }
  }, [_vm._v("Top Right")])], 1), _vm._v(" "), _c('div', [_c('am-message', {
    attrs: {
      "title": "Top Left",
      "placement": "top-left"
    },
    model: {
      value: (_vm.message2),
      callback: function($$v) {
        _vm.message2 = $$v
      },
      expression: "message2"
    }
  }), _vm._v(" "), _c('am-message', {
    attrs: {
      "title": "Top",
      "placement": "top"
    },
    model: {
      value: (_vm.message3),
      callback: function($$v) {
        _vm.message3 = $$v
      },
      expression: "message3"
    }
  }), _vm._v(" "), _c('am-message', {
    attrs: {
      "title": "Top Right",
      "placement": "top-right"
    },
    model: {
      value: (_vm.message4),
      callback: function($$v) {
        _vm.message4 = $$v
      },
      expression: "message4"
    }
  }), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Type")]), _vm._v(" "), _c('p', [_c('am-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.message5 = true
      }
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "secondary"
    },
    on: {
      "click": function($event) {
        _vm.message6 = true
      }
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.message7 = true
      }
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.message8 = true
      }
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('am-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": function($event) {
        _vm.message9 = true
      }
    }
  }, [_vm._v("Danger")])], 1), _vm._v(" "), _c('div', [_c('am-message', {
    attrs: {
      "title": "Primary",
      "type": "primary"
    },
    model: {
      value: (_vm.message5),
      callback: function($$v) {
        _vm.message5 = $$v
      },
      expression: "message5"
    }
  }), _vm._v(" "), _c('am-message', {
    attrs: {
      "title": "Secondary",
      "type": "secondary"
    },
    model: {
      value: (_vm.message6),
      callback: function($$v) {
        _vm.message6 = $$v
      },
      expression: "message6"
    }
  }), _vm._v(" "), _c('am-message', {
    attrs: {
      "title": "Success",
      "type": "success"
    },
    model: {
      value: (_vm.message7),
      callback: function($$v) {
        _vm.message7 = $$v
      },
      expression: "message7"
    }
  }), _vm._v(" "), _c('am-message', {
    attrs: {
      "title": "Warning",
      "type": "warning"
    },
    model: {
      value: (_vm.message8),
      callback: function($$v) {
        _vm.message8 = $$v
      },
      expression: "message8"
    }
  }), _vm._v(" "), _c('am-message', {
    attrs: {
      "title": "Danger",
      "type": "danger"
    },
    model: {
      value: (_vm.message9),
      callback: function($$v) {
        _vm.message9 = $$v
      },
      expression: "message9"
    }
  }), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Duration")]), _vm._v(" "), _c('p', [_c('am-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.message10 = true
      }
    }
  }, [_vm._v("Duration")])], 1), _vm._v(" "), _c('div', [_c('am-message', {
    attrs: {
      "title": "Success",
      "message": "success message",
      "type": "success",
      "placement": "top-right",
      "duration": 2000
    },
    model: {
      value: (_vm.message10),
      callback: function($$v) {
        _vm.message10 = $$v
      },
      expression: "message10"
    }
  }), _vm._v(" "), _vm._m(3)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Message"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("message")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message 1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Top Left"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placement")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("top-left"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Top"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placement")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("top"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Top Right"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placement")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("top-right"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message5"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message6"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message7"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message8"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message9"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-message")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("message10"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("message")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success message"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placement")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("top-right"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v(":duration")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("2000"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-message")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("File Select")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-file-select', {
    attrs: {
      "icon": "cloud-upload"
    },
    model: {
      value: (_vm.files1),
      callback: function($$v) {
        _vm.files1 = $$v
      },
      expression: "files1"
    }
  }, [_vm._v("Single File")]), _vm._v(" "), _c('p', _vm._l((_vm.files1), function(file) {
    return _c('span', {
      staticClass: "am-badge"
    }, [_vm._v(_vm._s(file.name))])
  })), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Multiple")]), _vm._v(" "), _c('div', [_c('am-file-select', {
    attrs: {
      "multiple": "multiple",
      "icon": "cloud-upload"
    },
    model: {
      value: (_vm.files2),
      callback: function($$v) {
        _vm.files2 = $$v
      },
      expression: "files2"
    }
  }, [_vm._v("Multiple File")]), _vm._v(" "), _c('p', _vm._l((_vm.files2), function(file) {
    return _c('span', {
      staticClass: "am-badge"
    }, [_vm._v(_vm._s(file.name))])
  })), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Color")]), _vm._v(" "), _c('div', [_c('am-file-select', {
    attrs: {
      "type": "primary",
      "icon": "cloud-upload"
    },
    model: {
      value: (_vm.files3),
      callback: function($$v) {
        _vm.files3 = $$v
      },
      expression: "files3"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('am-file-select', {
    attrs: {
      "type": "secondary",
      "icon": "cloud-upload"
    },
    model: {
      value: (_vm.files3),
      callback: function($$v) {
        _vm.files3 = $$v
      },
      expression: "files3"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('am-file-select', {
    attrs: {
      "type": "success",
      "icon": "cloud-upload"
    },
    model: {
      value: (_vm.files3),
      callback: function($$v) {
        _vm.files3 = $$v
      },
      expression: "files3"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('am-file-select', {
    attrs: {
      "type": "warning",
      "icon": "cloud-upload"
    },
    model: {
      value: (_vm.files3),
      callback: function($$v) {
        _vm.files3 = $$v
      },
      expression: "files3"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('am-file-select', {
    attrs: {
      "type": "danger",
      "icon": "cloud-upload"
    },
    model: {
      value: (_vm.files3),
      callback: function($$v) {
        _vm.files3 = $$v
      },
      expression: "files3"
    }
  }, [_vm._v("Danger")]), _vm._v(" "), _c('p', _vm._l((_vm.files3), function(file) {
    return _c('span', {
      staticClass: "am-badge"
    }, [_vm._v(_vm._s(file.name))])
  })), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Disabled")]), _vm._v(" "), _c('div', [_c('am-file-select', {
    attrs: {
      "icon": "cloud-upload",
      "disabled": "disabled"
    },
    model: {
      value: (_vm.files3),
      callback: function($$v) {
        _vm.files3 = $$v
      },
      expression: "files3"
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _vm._m(3)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-file-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("files1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("cloud-upload"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Single File"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-file-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-badge"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-for")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("file in files1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("{{file.name}}"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-file-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("files2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("multiple")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("multiple"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("cloud-upload"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Multiple File"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-file-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-badge"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-for")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("file in files2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("{{file.name}}"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-file-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("files3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("cloud-upload"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-file-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-file-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("files3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("cloud-upload"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Secondary"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-file-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-file-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("files3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("cloud-upload"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Success"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-file-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-file-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("files3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("cloud-upload"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Warning"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-file-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-file-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("files3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("cloud-upload"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Danger"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-file-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("am-badge"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-for")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("file in files3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("{{file.name}}"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("p")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-file-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("files3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("cloud-upload"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("disabled"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("Disabled"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-file-select")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Alert")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-alert', {
    attrs: {
      "type": "default",
      "title": "Default"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "primary",
      "title": "Primary"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "secondary",
      "title": "Secondary"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "success",
      "title": "Success"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "warning",
      "title": "Warning"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "danger",
      "title": "Danger"
    }
  }), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Description")]), _vm._v(" "), _c('div', [_c('am-alert', {
    attrs: {
      "type": "primary",
      "title": "Primary",
      "description": "This is an alert"
    }
  }), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Closeable")]), _vm._v(" "), _c('div', [_c('am-alert', {
    attrs: {
      "type": "primary",
      "title": "Primary",
      "description": "This is an alert",
      "closeable": ""
    },
    model: {
      value: (_vm.alert1),
      callback: function($$v) {
        _vm.alert1 = $$v
      },
      expression: "alert1"
    }
  }), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Show Icon")]), _vm._v(" "), _c('div', [_c('am-alert', {
    attrs: {
      "type": "default",
      "title": "Default",
      "show-icon": "show-icon"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "primary",
      "title": "Primary",
      "show-icon": "show-icon"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "secondary",
      "title": "Secondary",
      "show-icon": "show-icon"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "success",
      "title": "Success",
      "show-icon": "show-icon"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "warning",
      "title": "Warning",
      "show-icon": "show-icon"
    }
  }), _vm._v(" "), _c('am-alert', {
    attrs: {
      "type": "danger",
      "title": "Danger",
      "show-icon": "show-icon"
    }
  }), _vm._v(" "), _vm._m(3)], 1), _vm._v(" "), _c('h2', [_vm._v("Show Icon with Description")]), _vm._v(" "), _c('div', [_c('am-alert', {
    attrs: {
      "type": "primary",
      "title": "Primary",
      "description": "This is an alert",
      "closeable": "closeable",
      "show-icon": "show-icon"
    },
    model: {
      value: (_vm.alert2),
      callback: function($$v) {
        _vm.alert2 = $$v
      },
      expression: "alert2"
    }
  }), _vm._v(" "), _vm._m(4)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("description")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("This is an alert"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("description")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("This is an alert"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("alert1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("closeable")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Default"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("show-icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("show-icon"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("show-icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("show-icon"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("show-icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("show-icon"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("show-icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("show-icon"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("show-icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("show-icon"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("show-icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("show-icon"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-alert")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("title")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("description")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("This is an alert"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("alert2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("closeable")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("closeable"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("show-icon")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("show-icon"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-alert")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("Input Multiple")]), _vm._v(" "), _c('h2', [_vm._v("Basic")]), _vm._v(" "), _c('div', [_c('am-input-multiple', {
    model: {
      value: (_vm.input1),
      callback: function($$v) {
        _vm.input1 = $$v
      },
      expression: "input1"
    }
  }), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('h2', [_vm._v("Color")]), _vm._v(" "), _c('div', [_c('am-input-multiple', {
    attrs: {
      "type": "primary"
    },
    model: {
      value: (_vm.input2),
      callback: function($$v) {
        _vm.input2 = $$v
      },
      expression: "input2"
    }
  }), _vm._v(" "), _c('am-input-multiple', {
    attrs: {
      "type": "secondary"
    },
    model: {
      value: (_vm.input2),
      callback: function($$v) {
        _vm.input2 = $$v
      },
      expression: "input2"
    }
  }), _vm._v(" "), _c('am-input-multiple', {
    attrs: {
      "type": "success"
    },
    model: {
      value: (_vm.input2),
      callback: function($$v) {
        _vm.input2 = $$v
      },
      expression: "input2"
    }
  }), _vm._v(" "), _c('am-input-multiple', {
    attrs: {
      "type": "warning"
    },
    model: {
      value: (_vm.input2),
      callback: function($$v) {
        _vm.input2 = $$v
      },
      expression: "input2"
    }
  }), _vm._v(" "), _c('am-input-multiple', {
    attrs: {
      "type": "danger"
    },
    model: {
      value: (_vm.input2),
      callback: function($$v) {
        _vm.input2 = $$v
      },
      expression: "input2"
    }
  }), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('h2', [_vm._v("Disabled")]), _vm._v(" "), _c('div', [_c('am-input-multiple', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.input3),
      callback: function($$v) {
        _vm.input3 = $$v
      },
      expression: "input3"
    }
  }), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c('h2', [_vm._v("Placeholder")]), _vm._v(" "), _c('div', [_c('am-input-multiple', {
    attrs: {
      "placeholder": "Placeholder"
    },
    model: {
      value: (_vm.input4),
      callback: function($$v) {
        _vm.input4 = $$v
      },
      expression: "input4"
    }
  }), _vm._v(" "), _vm._m(3)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input-multiple")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input1"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input-multiple")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input-multiple")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("primary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input-multiple")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input-multiple")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("secondary"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input-multiple")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input-multiple")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("success"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input-multiple")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input-multiple")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("warning"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input-multiple")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input-multiple")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("type")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("danger"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input2"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input-multiple")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input-multiple")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input3"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("disabled")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input-multiple")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true
  }, [_c('code', {
    attrs: {
      "class": "language-html"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("am-input-multiple")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("v-model")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("input4"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("=")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Placeholder"), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("am-input-multiple")]), _c('span', {
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n")])])
}]}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(124);

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(125);

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(126);

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(127);

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(128);

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(134);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(139);

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("172a29a0", content, true);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("adf047e6", content, true);

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("4fc33e8a", content, true);

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("226301ba", content, true);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("68845c40", content, true);

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(93)("3e517eb9", content, true);

/***/ })
]));
//# sourceMappingURL=0.3bc26662ad10448557a8.js.map