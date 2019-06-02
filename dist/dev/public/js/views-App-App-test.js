(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["views-App-App-test"],{

/***/ "./shared/views/App/App.test.js":
/*!**************************************!*\
  !*** ./shared/views/App/App.test.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enzyme */ "../node_modules/enzyme/build/index.js");
/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(enzyme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _AppComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppComponent */ "./shared/views/App/AppComponent.tsx");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NotFound */ "./shared/views/NotFound/index.js");





describe('App component', function () {
  it('Invalid path renders "Not Found" page', function () {
    var wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__["mount"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["MemoryRouter"], {
      initialEntries: ['/random']
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppComponent__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
    expect(wrapper.find(_NotFound__WEBPACK_IMPORTED_MODULE_4__["default"])).toHaveLength(1);
    wrapper.unmount();
  });
  it('Renders correctly', function () {
    var wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__["shallow"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppComponent__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    expect(wrapper).toMatchSnapshot();
  });
});

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=views-App-App-test.js.map