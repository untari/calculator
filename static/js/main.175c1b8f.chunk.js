(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,function(e,_,t){},,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_tari_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_home_tari_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_home_tari_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_home_tari_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_Components_Keypad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_Components_Result__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),App=function(_Component){Object(_home_tari_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(_home_tari_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;return Object(_home_tari_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(_home_tari_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"calculator-body",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Result__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Keypad__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.onClick})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(e,_,t){"use strict";var n=t(2),r=t(3),c=t(5),a=t(4),o=t(1),s=(t(7),t(0)),i=function(e){Object(c.a)(t,e);var _=Object(a.a)(t);function t(){return Object(n.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"button-keypad",children:[Object(s.jsx)("button",{name:"(",onClick:function(_){return e.props.onClick(_.target.name)},children:"("}),"\xa0",Object(s.jsx)("button",{name:"CE",onClick:function(_){return e.props.onClick(_.target.name)},children:"CE"}),"\xa0",Object(s.jsx)("button",{name:")",onClick:function(_){return e.props.onClick(_.target.name)},children:")"}),"\xa0",Object(s.jsx)("button",{name:"C",onClick:function(_){return e.props.onClick(_.target.name)},children:" C "})," ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{name:"1",onClick:function(_){return e.props.onClick(_.target.name)},children:"1"}),"\xa0",Object(s.jsx)("button",{name:"2",onClick:function(_){return e.props.onClick(_.target.name)},children:"2"}),"\xa0",Object(s.jsx)("button",{name:"3",onClick:function(_){return e.props.onClick(_.target.name)},children:"3"}),"\xa0",Object(s.jsx)("button",{name:"+",onClick:function(_){return e.props.onClick(_.target.name)},children:"+"})," ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{name:"4",onClick:function(_){return e.props.onClick(_.target.name)},children:"4"}),"\xa0",Object(s.jsx)("button",{name:"5",onClick:function(_){return e.props.onClick(_.target.name)},children:"5"}),"\xa0",Object(s.jsx)("button",{name:"6",onClick:function(_){return e.props.onClick(_.target.name)},children:"6"}),"\xa0",Object(s.jsx)("button",{name:"-",onClick:function(_){return e.props.onClick(_.target.name)},children:"-"}),"  ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{name:"7",onClick:function(_){return e.props.onClick(_.target.name)},children:"7"}),"\xa0",Object(s.jsx)("button",{name:"8",onClick:function(_){return e.props.onClick(_.target.name)},children:"8"}),"\xa0",Object(s.jsx)("button",{name:"9",onClick:function(_){return e.props.onClick(_.target.name)},children:"9"}),"\xa0",Object(s.jsx)("button",{name:"*",onClick:function(_){return e.props.onClick(_.target.name)},children:"x"})," ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{name:".",onClick:function(_){return e.props.onClick(_.target.name)},children:"."}),"\xa0",Object(s.jsx)("button",{name:"0",onClick:function(_){return e.props.onClick(_.target.name)},children:"0"}),"\xa0",Object(s.jsx)("button",{name:"=",onClick:function(_){return e.props.onClick(_.target.name)},children:"="}),"\xa0",Object(s.jsx)("button",{name:"/",onClick:function(_){return e.props.onClick(_.target.name)},children:"\xf7"})," ",Object(s.jsx)("br",{})]})}}]),t}(o.Component);_.a=i},function(e,_,t){"use strict";var n=t(2),r=t(3),c=t(5),a=t(4),o=t(1),s=t(0),i=function(e){Object(c.a)(t,e);var _=Object(a.a)(t);function t(){return Object(n.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.result;return Object(s.jsx)("div",{className:"result",children:Object(s.jsx)("p",{children:e})})}}]),t}(o.Component);_.a=i},,,,,function(e,_,t){},,function(e,_,t){"use strict";t.r(_);var n=t(1),r=t.n(n),c=t(8),a=t.n(c),o=(t(16),t(9)),s=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(_){var t=_.getCLS,n=_.getFID,r=_.getFCP,c=_.getLCP,a=_.getTTFB;t(e),n(e),r(e),c(e),a(e)}))},i=t(0);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(o.a,{})}),document.getElementById("root")),s()}],[[18,1,2]]]);
//# sourceMappingURL=main.175c1b8f.chunk.js.map