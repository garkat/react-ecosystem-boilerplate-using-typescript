exports.ids = ["views-App-App-test"];
exports.modules = {

/***/ "./shared/views/App/App.test.js":
/*!**************************************!*\
  !*** ./shared/views/App/App.test.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enzyme */ \"enzyme\");\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(enzyme__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AppComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppComponent */ \"./shared/views/App/AppComponent.tsx\");\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NotFound */ \"./shared/views/NotFound/index.js\");\n\n\n\n\n\ndescribe('App component', () => {\n  it('Invalid path renders \"Not Found\" page', () => {\n    const wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__[\"mount\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"MemoryRouter\"], {\n      initialEntries: ['/random']\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n    expect(wrapper.find(_NotFound__WEBPACK_IMPORTED_MODULE_4__[\"default\"])).toHaveLength(1);\n    wrapper.unmount();\n  });\n  it('Renders correctly', () => {\n    const wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__[\"shallow\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n    expect(wrapper).toMatchSnapshot();\n  });\n});\n\n//# sourceURL=webpack:///./shared/views/App/App.test.js?");

/***/ })

};;