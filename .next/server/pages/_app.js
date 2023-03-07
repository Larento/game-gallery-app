(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 470:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_4b5723', '__Inter_Fallback_4b5723'","fontStyle":"normal"},
	"className": "__className_4b5723"
};


/***/ }),

/***/ 701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(470);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	h1, h2, h3, p {
		margin-bottom: 0.5rem;
	}

	html, body {
		height: 100%;
	}

	html {
		font-family: ${(next_font_google_target_css_path_src_pages_app_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily)};
	}

	#__next {
		height: 100%;
	}

`;
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalStyle, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(701));
module.exports = __webpack_exports__;

})();