(function(_){function e(e){for(var t,o,u=e[0],s=e[1],c=e[2],i=0,d=[];i<u.length;i++)o=u[i],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&d.push(l[o][0]),l[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(_[t]=s[t]);n&&n(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var _,e=0;e<r.length;e++){for(var a=r[e],t=!0,u=1;u<a.length;u++){var s=a[u];0!==l[s]&&(t=!1)}t&&(r.splice(e--,1),_=o(o.s=a[0]))}return _}var t={},l={app:0},r=[];function o(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return _[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=_,o.c=t,o.d=function(_,e,a){o.o(_,e)||Object.defineProperty(_,e,{enumerable:!0,get:a})},o.r=function(_){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},o.t=function(_,e){if(1&e&&(_=o(_)),8&e)return _;if(4&e&&"object"===typeof _&&_&&_.__esModule)return _;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:_}),2&e&&"string"!=typeof _)for(var t in _)o.d(a,t,function(e){return _[e]}.bind(null,t));return a},o.n=function(_){var e=_&&_.__esModule?function(){return _["default"]}:function(){return _};return o.d(e,"a",e),e},o.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var n=s;r.push([0,"chunk-vendors"]),a()})({0:function(_,e,a){_.exports=a("cd49")},"43c9":function(_,e,a){},"6cfc":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2b19"),core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("1276"),core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__),_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("d4ec"),_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("bee2"),_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("99de"),_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("7e84"),_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("262e"),tslib__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("9ab4"),_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("aea4"),_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10__),vue_property_decorator__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("60a3"),_shims_vue__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("ae3e"),Calculator=function(_VueComponent){function Calculator(){var _;return Object(_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["a"])(this,Calculator),_=Object(_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["a"])(this,Object(_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["a"])(Calculator).apply(this,arguments)),_.formula="",_.result="0",_.calculatedBuffer="",_.isProccessing=!1,_}return Object(_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["a"])(Calculator,_VueComponent),Object(_home_dzhamal_frontend_examples_vue_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["a"])(Calculator,[{key:"calculate",value:function calculate(){var _this2=this;this.isProccessing=!0,setTimeout((function(){_this2.result,_this2.calculatedBuffer=String(eval(_this2.formula)),_this2.isProccessing=!1}),2e3)}},{key:"clean",value:function(){this.formula="",this.result="0",this.calculatedBuffer=""}},{key:"inputToFormula",value:function(_){if(!this.isProccessing){var e=_.target,a=e.dataset.value;Object.is(a,"+")||Object.is(a,"-")?this.formula+=" ".concat(a," "):this.formula+=a}}},{key:"render",value:function(){var _=arguments[0];return _("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.calculator},[_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.display},[this.formula.split(" ").map((function(e){return _("span",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.formula},[" ",e])}))]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.display},[this.result&&"= ".concat(this.result)]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btn,attrs:{role:"button","data-value":"7"},on:{click:this.inputToFormula}},["7"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btn,attrs:{role:"button","data-value":"8"},on:{click:this.inputToFormula}},["8"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btn,attrs:{role:"button","data-value":"9"},on:{click:this.inputToFormula}},["9"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btnOperator,attrs:{role:"button"},on:{click:this.clean}},["C"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btn,attrs:{role:"button","data-value":"4"},on:{click:this.inputToFormula}},["4"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btn,attrs:{role:"button","data-value":"5"},on:{click:this.inputToFormula}},["5"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btn,attrs:{role:"button","data-value":"6"},on:{click:this.inputToFormula}},["6"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btnOperator,attrs:{role:"button","data-value":"-"},on:{click:this.inputToFormula}},["-"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btn,attrs:{role:"button","data-value":"1"},on:{click:this.inputToFormula}},["1"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btn,attrs:{role:"button","data-value":"2"},on:{click:this.inputToFormula}},["2"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btn,attrs:{role:"button","data-value":"3"},on:{click:this.inputToFormula}},["3"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btnOperator,attrs:{role:"button","data-value":"+"},on:{click:this.inputToFormula}},["+"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btnZero,attrs:{role:"button","data-value":"0"},on:{click:this.inputToFormula}},["0"]),_("div",{class:_Calculator_css_module__WEBPACK_IMPORTED_MODULE_10___default.a.btnOperator,attrs:{role:"button"},on:{click:this.calculate}},["="])])}}]),Calculator}(_shims_vue__WEBPACK_IMPORTED_MODULE_12__["a"]);Calculator=Object(tslib__WEBPACK_IMPORTED_MODULE_9__["a"])([vue_property_decorator__WEBPACK_IMPORTED_MODULE_11__["a"]],Calculator),__webpack_exports__["a"]=Calculator},ae3e:function(_,e,a){"use strict";a.d(e,"a",(function(){return s}));var t=a("d4ec"),l=a("99de"),r=a("7e84"),o=a("262e"),u=a("2b0e"),s=function(_){function e(){return Object(t["a"])(this,e),Object(l["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(o["a"])(e,_),e}(u["a"])},aea4:function(_,e,a){_.exports={calculator:"Calculator_calculator_8-hmO",display:"Calculator_display_100na",btn:"Calculator_btn_3p24S",btnOperator:"Calculator_btnOperator_26eWP",btnZero:"Calculator_btnZero_29VGl",formula:"Calculator_formula_2mNQ1"}},cd49:function(_,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),l=a("d4ec"),r=a("bee2"),o=a("99de"),u=a("7e84"),s=a("262e"),c=a("9ab4"),n=a("60a3"),i=a("6cfc"),d=(a("43c9"),function(_){function e(){return Object(l["a"])(this,e),Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,_),Object(r["a"])(e,[{key:"render",value:function(){var _=arguments[0];return _("div",{attrs:{id:"app"}},[_(i["a"])])}}]),e}(n["b"]));d=Object(c["a"])([n["a"]],d);var E=d,p=a("2f62"),O=a("8511"),m=function _(){Object(l["a"])(this,_),this.version="2.0.0"};Object(c["a"])([Object(O["a"])()],m.prototype,"version",void 0),t["a"].use(p["b"]);var b=new m,f=Object(O["b"])(b,{strict:!1,modules:{},plugins:[]});t["a"].config.productionTip=!1,new t["a"]({store:f,render:function(_){return _(E)}}).$mount("#app")}});
//# sourceMappingURL=app.d516f37c.js.map