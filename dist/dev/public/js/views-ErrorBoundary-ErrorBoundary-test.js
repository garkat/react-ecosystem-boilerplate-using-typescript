(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["views-ErrorBoundary-ErrorBoundary-test"],{

/***/ "./shared/views/ErrorBoundary/ErrorBoundary.test.js":
/*!**********************************************************!*\
  !*** ./shared/views/ErrorBoundary/ErrorBoundary.test.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enzyme */ "../node_modules/enzyme/build/index.js");
/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(enzyme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorBoundaryComponent */ "./shared/views/ErrorBoundary/ErrorBoundaryComponent.tsx");




function ChildWithError() {
  throw Error('Intentional error');
} // There are console error and log messages which are typically useful, but can be suppressed
// because we intentionally introduced an error.


function swallowConsoleError(codeToRun) {
  // Copy console.error and console.log implementation in temporary variables
  var _console = console,
      error = _console.error,
      log = _console.log; // Assign console.error and console.log to empty arrow functions.
  // eslint-disable-next-line no-console

  console.error = function () {}; // eslint-disable-next-line no-console


  console.log = function () {}; // Run the code that shows console error and log messages


  codeToRun(); // Reimplement the orginal console.error and console.log implementation
  // eslint-disable-next-line no-console

  console.error = error; // eslint-disable-next-line no-console

  console.log = log;
}

describe('"Error boundary" component', function () {
  it('Renders correctly', function () {
    var wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__["shallow"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    expect(wrapper).toMatchSnapshot();
  });
  test('Shows the correct error message.', function () {
    swallowConsoleError(function () {
      var wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__["mount"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChildWithError, null)));
      var text = wrapper.text();
      expect(text).toEqual('Something went wrong. Please refresh the page, and try again.');
      wrapper.unmount();
    });
  });
  test('Shows the correct error stack.', function () {
    swallowConsoleError(function () {
      var spy = jest.spyOn(_ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_2__["default"].prototype, 'componentDidCatch');
      var wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__["mount"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorBoundaryComponent__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ChildWithError, null)));
      expect(spy).toHaveBeenCalled(); // prettier-ignore

      expect(spy.mock.calls[0][1]).toEqual({
        componentStack: "\n    in ChildWithError\n    in ErrorBoundaryComponent (created by WrapperComponent)\n    in WrapperComponent"
      });
      spy.mockClear();
      spy.mockReset();
      spy.mockRestore();
      wrapper.unmount();
    });
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
//# sourceMappingURL=views-ErrorBoundary-ErrorBoundary-test.js.map