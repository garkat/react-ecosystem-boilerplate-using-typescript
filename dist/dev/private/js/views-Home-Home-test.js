exports.ids = ["views-Home-Home-test"];
exports.modules = {

/***/ "./shared/views/Home/Home.test.js":
/*!****************************************!*\
  !*** ./shared/views/Home/Home.test.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enzyme */ \"enzyme\");\n/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(enzyme__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HomeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeComponent */ \"./shared/views/Home/HomeComponent.tsx\");\n\n\n\ndescribe('Home component', () => {\n  it('Renders correctly', () => {\n    const wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__[\"shallow\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HomeComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    expect(wrapper).toMatchSnapshot();\n  });\n});\n\n//# sourceURL=webpack:///./shared/views/Home/Home.test.js?");

/***/ }),

/***/ "./shared/views/Home/HomeComponent.tsx":
/*!*********************************************!*\
  !*** ./shared/views/Home/HomeComponent.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst HomeComponent = () => react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"main\", {\n  className: \"font-size-16\",\n  \"data-test\": \"main\"\n}, \"Home page\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeComponent);\n\n//# sourceURL=webpack:///./shared/views/Home/HomeComponent.tsx?");

/***/ })

};;