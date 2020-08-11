webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HomePage.module.css */ \"./styles/HomePage.module.css\");\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/iconmonstr-search-thin.svg */ \"./assets/images/iconmonstr-search-thin.svg\");\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/osf-share-logo.png */ \"./assets/images/osf-share-logo.png\");\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/iconmonstr-github-1.svg */ \"./assets/images/iconmonstr-github-1.svg\");\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/personal-website-icon.png */ \"./assets/images/personal-website-icon.png\");\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/chris/Desktop/git-repos/akeelo-web/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar personalWebsiteUrl = 'https://hdqrs.co';\nvar githubUrl = 'https://github.com/chimnz/akeelo-web';\nvar apiDocsUrl = 'https://share-research.readthedocs.io'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random\n\nvar queryExamples = ['celiac disease', 'protein folding', 'turbulent flow', 'quantum gravity', 'astrophysical jets', 'ball lightning', 'coriolis effect', 'enzyme kinetics', 'butterfly migration', 'opaque forest', 'gall wasp', 'lactose intolerance'];\n\nfunction getPlaceholder() {\n  function getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min)) + min;\n  }\n\n  var idx = getRandomInt(0, queryExamples.length);\n  return \"search for science (eg. \".concat(queryExamples[idx], \")\");\n}\n\nfunction HomePage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var formInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n\n  function goToSearchPage(e) {\n    e.preventDefault();\n    router.push({\n      pathname: '/search',\n      query: {\n        q: formInput.current.value\n      }\n    });\n  } // autofocus the text input field\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    formInput.current.focus();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nav\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 6\n    }\n  }, __jsx(\"a\", {\n    href: personalWebsiteUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 8\n    }\n  })), __jsx(\"a\", {\n    href: githubUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 8\n    }\n  }))))), __jsx(\"main\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"main-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.searchOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 6\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 8\n    }\n  }, \"akeelo\"), __jsx(\"form\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form,\n    onSubmit: goToSearchPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 8\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textInput,\n    ref: formInput,\n    type: \"text\",\n    placeholder: getPlaceholder(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 10\n    }\n  }), __jsx(\"button\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.submitButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 10\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }))))), __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attributionOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attribution,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 8\n    }\n  }, \"powered by\", __jsx(\"a\", {\n    href: apiDocsUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 10\n    }\n  }))))))));\n}\n\n_s(HomePage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInBlcnNvbmFsV2Vic2l0ZVVybCIsImdpdGh1YlVybCIsImFwaURvY3NVcmwiLCJxdWVyeUV4YW1wbGVzIiwiZ2V0UGxhY2Vob2xkZXIiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiaWR4IiwibGVuZ3RoIiwiSG9tZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmb3JtSW5wdXQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImdvVG9TZWFyY2hQYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJxIiwiY3VycmVudCIsInZhbHVlIiwidXNlRWZmZWN0IiwiZm9jdXMiLCJzdHlsZXMiLCJuYXYiLCJsaW5rV3JhcHBlciIsInBlcnNvbmFsV2Vic2l0ZUxvZ28iLCJnaXRodWJJY29uIiwibWFpbiIsInNlYXJjaE91dGVyIiwic2VhcmNoIiwibG9nbyIsImZvcm0iLCJmb3JtSW5uZXIiLCJ0ZXh0SW5wdXQiLCJzdWJtaXRCdXR0b24iLCJzZWFyY2hJY29uIiwiYXR0cmlidXRpb25PdXRlciIsImF0dHJpYnV0aW9uIiwib3NmU2hhcmVMb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsa0JBQTNCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLHNDQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyx1Q0FBbkIsQyxDQUVBOztBQUNBLElBQU1DLGFBQWEsR0FBRyxDQUNyQixnQkFEcUIsRUFDSCxpQkFERyxFQUNnQixnQkFEaEIsRUFFckIsaUJBRnFCLEVBRUYsb0JBRkUsRUFFb0IsZ0JBRnBCLEVBR3JCLGlCQUhxQixFQUdGLGlCQUhFLEVBR2lCLHFCQUhqQixFQUlyQixl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QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUVWLGtFQUFNLENBQUNXLFNBRG5CO0FBRUMsT0FBRyxFQUFFekIsU0FGTjtBQUdDLFFBQUksRUFBQyxNQUhOO0FBSUMsZUFBVyxFQUFFYixjQUFjLEVBSjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQU9DO0FBQ0MsYUFBUyxFQUFFMkIsa0VBQU0sQ0FBQ1ksWUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdDO0FBQUssT0FBRyxFQUFFQyxnRkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsQ0FQRCxDQUpELENBRkQsQ0FERCxFQXNCQztBQUFLLGFBQVMsRUFBRWIsa0VBQU0sQ0FBQ2MsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBRWQsa0VBQU0sQ0FBQ2UsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQztBQUFHLFFBQUksRUFBRTVDLFVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssT0FBRyxFQUFFNkMsd0VBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBRkQsQ0FERCxDQXRCRCxDQURELENBREQsQ0FiRCxDQUREO0FBbURBOztHQXRFUWpDLFE7VUFDT0UscUQ7OztLQURQRixRO0FBd0VNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZVBhZ2UubW9kdWxlLmNzcydcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbm1vbnN0ci1zZWFyY2gtdGhpbi5zdmcnXG5cbmltcG9ydCBvc2ZTaGFyZUxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9vc2Ytc2hhcmUtbG9nby5wbmcnXG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ljb25tb25zdHItZ2l0aHViLTEuc3ZnJ1xuaW1wb3J0IHBlcnNvbmFsV2Vic2l0ZUxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wZXJzb25hbC13ZWJzaXRlLWljb24ucG5nJ1xuXG5jb25zdCBwZXJzb25hbFdlYnNpdGVVcmwgPSAnaHR0cHM6Ly9oZHFycy5jbydcbmNvbnN0IGdpdGh1YlVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vY2hpbW56L2FrZWVsby13ZWInXG5jb25zdCBhcGlEb2NzVXJsID0gJ2h0dHBzOi8vc2hhcmUtcmVzZWFyY2gucmVhZHRoZWRvY3MuaW8nXG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXG5jb25zdCBxdWVyeUV4YW1wbGVzID0gW1xuXHQnY2VsaWFjIGRpc2Vhc2UnLCAncHJvdGVpbiBmb2xkaW5nJywgJ3R1cmJ1bGVudCBmbG93Jyxcblx0J3F1YW50dW0gZ3Jhdml0eScsICdhc3Ryb3BoeXNpY2FsIGpldHMnLCAnYmFsbCBsaWdodG5pbmcnLFxuXHQnY29yaW9saXMgZWZmZWN0JywgJ2VuenltZSBraW5ldGljcycsICdidXR0ZXJmbHkgbWlncmF0aW9uJyxcblx0J29wYXF1ZSBmb3Jlc3QnLCAnZ2FsbCB3YXNwJywgJ2xhY3Rvc2UgaW50b2xlcmFuY2UnXG5dXG5cbmZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyKCkge1xuXHRmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcblx0XHRtaW4gPSBNYXRoLmNlaWwobWluKVxuXHRcdG1heCA9IE1hdGguZmxvb3IobWF4KVxuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cblx0fVxuXHRjb25zdCBpZHggPSBnZXRSYW5kb21JbnQoMCwgcXVlcnlFeGFtcGxlcy5sZW5ndGgpXG5cdHJldHVybiBgc2VhcmNoIGZvciBzY2llbmNlIChlZy4gJHtxdWVyeUV4YW1wbGVzW2lkeF19KWBcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGxldCBmb3JtSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG5cdGZ1bmN0aW9uIGdvVG9TZWFyY2hQYWdlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRyb3V0ZXIucHVzaCh7XG5cdFx0XHRwYXRobmFtZTogJy9zZWFyY2gnLFxuXHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0cTogZm9ybUlucHV0LmN1cnJlbnQudmFsdWVcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Ly8gYXV0b2ZvY3VzIHRoZSB0ZXh0IGlucHV0IGZpZWxkXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Zm9ybUlucHV0LmN1cnJlbnQuZm9jdXMoKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rV3JhcHBlcn0+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtwZXJzb25hbFdlYnNpdGVVcmx9PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cGVyc29uYWxXZWJzaXRlTG9nb30gLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9e2dpdGh1YlVybH0+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtnaXRodWJJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbmF2PlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLWlubmVyJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaE91dGVyfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5ha2VlbG88L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5mb3JtfVxuXHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtnb1RvU2VhcmNoUGFnZX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlubmVyfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5wdXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17Zm9ybUlucHV0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17Z2V0UGxhY2Vob2xkZXIoKX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3NlYXJjaEljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0aW9uT3V0ZXJ9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRwb3dlcmVkIGJ5XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YXBpRG9jc1VybH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17b3NmU2hhcmVMb2dvfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})