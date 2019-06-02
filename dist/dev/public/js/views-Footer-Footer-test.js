(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["views-Footer-Footer-test"],{

/***/ "./shared/views/Footer/Footer.test.js":
/*!********************************************!*\
  !*** ./shared/views/Footer/Footer.test.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enzyme */ "../node_modules/enzyme/build/index.js");
/* harmony import */ var enzyme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(enzyme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _data_views_schema_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/views-schema/footer */ "./data/views-schema/footer.js");
/* harmony import */ var _data_views_schema_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_views_schema_footer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FooterComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FooterComponent */ "./shared/views/Footer/FooterComponent.tsx");





describe('Footer component', function () {
  it('has all navigation links defined in the footer schema', function () {
    var wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__["mount"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["MemoryRouter"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FooterComponent__WEBPACK_IMPORTED_MODULE_4__["default"], null))); // Check if number of footer links is equivalent of links defined in footer schema

    expect(wrapper.find('a')).toHaveLength(_data_views_schema_footer__WEBPACK_IMPORTED_MODULE_3__["FOOTER_LINKS"].length); // Grab all link using their href property, and confirm their text matches to their respective
    // values in footer schema.

    _data_views_schema_footer__WEBPACK_IMPORTED_MODULE_3__["FOOTER_LINKS"].forEach(function (footerLink) {
      expect(wrapper.find({
        href: footerLink.linkToLocation
      }).text()).toEqual("".concat(footerLink.name));
    });
    wrapper.unmount();
  });
  it('renders correctly', function () {
    var wrapper = Object(enzyme__WEBPACK_IMPORTED_MODULE_0__["shallow"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FooterComponent__WEBPACK_IMPORTED_MODULE_4__["default"], null));
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
//# sourceMappingURL=views-Footer-Footer-test.js.map