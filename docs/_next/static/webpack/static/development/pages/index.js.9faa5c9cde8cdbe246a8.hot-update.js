webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HomePage.module.css */ \"./styles/HomePage.module.css\");\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/iconmonstr-search-thin.svg */ \"./assets/images/iconmonstr-search-thin.svg\");\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/osf-share-logo.png */ \"./assets/images/osf-share-logo.png\");\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/iconmonstr-github-1.svg */ \"./assets/images/iconmonstr-github-1.svg\");\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/personal-website-icon.png */ \"./assets/images/personal-website-icon.png\");\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/chris/Desktop/git-repos/akeelo-web/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar personalWebsiteUrl = 'https://hdqrs.co';\nvar githubUrl = 'https://github.com/chimnz/akeelo-web';\nvar apiDocsUrl = 'https://share-research.readthedocs.io';\nvar queryExamples = ['celiac disease', 'protein folding', 'turbulent flow', 'quantum gravity', 'astrophysical jets', 'ball lightning', 'coriolis effect', 'enzyme kinetics', 'butterfly migration', 'opaque forest', 'gall wasp', 'lactose intolerance'];\n\nfunction generatePlaceholder() {\n  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random\n  function getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min)) + min;\n  }\n\n  var idx = getRandomInt(0, queryExamples.length);\n  return \"search for science (eg. \".concat(queryExamples[idx], \")\");\n}\n\nfunction HomePage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var formInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n\n  function goToSearchPage(e) {\n    e.preventDefault();\n    router.push({\n      pathname: '/search',\n      query: {\n        q: formInput.current.value\n      }\n    });\n  } // autofocus the text input field\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    formInput.current.focus();\n  }, []);\n  console.log(props.pageProps);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nav\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 6\n    }\n  }, __jsx(\"a\", {\n    href: personalWebsiteUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 8\n    }\n  })), __jsx(\"a\", {\n    href: githubUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 8\n    }\n  }))))), __jsx(\"main\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"main-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.searchOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 6\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 8\n    }\n  }, \"akeelo\"), __jsx(\"form\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form,\n    onSubmit: goToSearchPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 8\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textInput,\n    ref: formInput,\n    type: \"text\",\n    placeholder: generatePlaceholder(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 10\n    }\n  }), __jsx(\"button\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.submitButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 10\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }))))), __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attributionOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attribution,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 8\n    }\n  }, \"powered by\", __jsx(\"a\", {\n    href: apiDocsUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 10\n    }\n  }))))))));\n}\n\n_s(HomePage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInBlcnNvbmFsV2Vic2l0ZVVybCIsImdpdGh1YlVybCIsImFwaURvY3NVcmwiLCJxdWVyeUV4YW1wbGVzIiwiZ2VuZXJhdGVQbGFjZWhvbGRlciIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJpZHgiLCJsZW5ndGgiLCJIb21lUGFnZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9ybUlucHV0IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJnb1RvU2VhcmNoUGFnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicSIsImN1cnJlbnQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImZvY3VzIiwiY29uc29sZSIsImxvZyIsInBhZ2VQcm9wcyIsInN0eWxlcyIsIm5hdiIsImxpbmtXcmFwcGVyIiwicGVyc29uYWxXZWJzaXRlTG9nbyIsImdpdGh1Ykljb24iLCJtYWluIiwic2VhcmNoT3V0ZXIiLCJzZWFyY2giLCJsb2dvIiwiZm9ybSIsImZvcm1Jbm5lciIsInRleHRJbnB1dCIsInN1Ym1pdEJ1dHRvbiIsInNlYXJjaEljb24iLCJhdHRyaWJ1dGlvbk91dGVyIiwiYXR0cmlidXRpb24iLCJvc2ZTaGFyZUxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxrQkFBM0I7QUFDQSxJQUFNQyxTQUFTLEdBQUcsc0NBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLHVDQUFuQjtBQUVBLElBQU1DLGFBQWEsR0FBRyxDQUNyQixnQkFEcUIsRUFDSCxpQkFERyxFQUNnQixnQkFEaEIsRUFFckIsaUJBRnFCLEVBRUYsb0JBRkUsRUFFb0IsZ0JBRnBCLEVBR3JCLGlCQUhx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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlDO0FBQUssYUFBUyxFQUFFYyxrRUFBTSxDQUFDVSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUVWLGtFQUFNLENBQUNXLFNBRG5CO0FBRUMsT0FBRyxFQUFFNUIsU0FGTjtBQUdDLFFBQUksRUFBQyxNQUhOO0FBSUMsZUFBVyxFQUFFZCxtQkFBbUIsRUFKakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBT0M7QUFDQyxhQUFTLEVBQUUrQixrRUFBTSxDQUFDWSxZQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0M7QUFBSyxPQUFHLEVBQUVDLGdGQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxDQVBELENBSkQsQ0FGRCxDQURELEVBc0JDO0FBQUssYUFBUyxFQUFFYixrRUFBTSxDQUFDYyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFZCxrRUFBTSxDQUFDZSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVDO0FBQUcsUUFBSSxFQUFFaEQsVUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxPQUFHLEVBQUVpRCx3RUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FGRCxDQURELENBdEJELENBREQsQ0FERCxDQWJELENBREQ7QUFtREE7O0dBeEVRckMsUTtVQUNPRyxxRDs7O0tBRFBILFE7QUEwRU1BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lUGFnZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHNlYXJjaEljb24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29ubW9uc3RyLXNlYXJjaC10aGluLnN2ZydcblxuaW1wb3J0IG9zZlNoYXJlTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL29zZi1zaGFyZS1sb2dvLnBuZydcbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbm1vbnN0ci1naXRodWItMS5zdmcnXG5pbXBvcnQgcGVyc29uYWxXZWJzaXRlTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3BlcnNvbmFsLXdlYnNpdGUtaWNvbi5wbmcnXG5cbmNvbnN0IHBlcnNvbmFsV2Vic2l0ZVVybCA9ICdodHRwczovL2hkcXJzLmNvJ1xuY29uc3QgZ2l0aHViVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGltbnovYWtlZWxvLXdlYidcbmNvbnN0IGFwaURvY3NVcmwgPSAnaHR0cHM6Ly9zaGFyZS1yZXNlYXJjaC5yZWFkdGhlZG9jcy5pbydcblxuY29uc3QgcXVlcnlFeGFtcGxlcyA9IFtcblx0J2NlbGlhYyBkaXNlYXNlJywgJ3Byb3RlaW4gZm9sZGluZycsICd0dXJidWxlbnQgZmxvdycsXG5cdCdxdWFudHVtIGdyYXZpdHknLCAnYXN0cm9waHlzaWNhbCBqZXRzJywgJ2JhbGwgbGlnaHRuaW5nJyxcblx0J2NvcmlvbGlzIGVmZmVjdCcsICdlbnp5bWUga2luZXRpY3MnLCAnYnV0dGVyZmx5IG1pZ3JhdGlvbicsXG5cdCdvcGFxdWUgZm9yZXN0JywgJ2dhbGwgd2FzcCcsICdsYWN0b3NlIGludG9sZXJhbmNlJ1xuXVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVBsYWNlaG9sZGVyKCkge1xuXHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3JhbmRvbVxuXHRmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcblx0XHRtaW4gPSBNYXRoLmNlaWwobWluKVxuXHRcdG1heCA9IE1hdGguZmxvb3IobWF4KVxuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cblx0fVxuXHRjb25zdCBpZHggPSBnZXRSYW5kb21JbnQoMCwgcXVlcnlFeGFtcGxlcy5sZW5ndGgpXG5cdHJldHVybiBgc2VhcmNoIGZvciBzY2llbmNlIChlZy4gJHtxdWVyeUV4YW1wbGVzW2lkeF19KWBcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0bGV0IGZvcm1JbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cblx0ZnVuY3Rpb24gZ29Ub1NlYXJjaFBhZ2UoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHJvdXRlci5wdXNoKHtcblx0XHRcdHBhdGhuYW1lOiAnL3NlYXJjaCcsXG5cdFx0XHRxdWVyeToge1xuXHRcdFx0XHRxOiBmb3JtSW5wdXQuY3VycmVudC52YWx1ZVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHQvLyBhdXRvZm9jdXMgdGhlIHRleHQgaW5wdXQgZmllbGRcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmb3JtSW5wdXQuY3VycmVudC5mb2N1cygpXG5cdH0sIFtdKVxuXG5cdGNvbnNvbGUubG9nKHByb3BzLnBhZ2VQcm9wcylcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rV3JhcHBlcn0+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtwZXJzb25hbFdlYnNpdGVVcmx9PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cGVyc29uYWxXZWJzaXRlTG9nb30gLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9e2dpdGh1YlVybH0+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtnaXRodWJJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbmF2PlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLWlubmVyJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaE91dGVyfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5ha2VlbG88L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5mb3JtfVxuXHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtnb1RvU2VhcmNoUGFnZX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlubmVyfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5wdXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17Zm9ybUlucHV0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17Z2VuZXJhdGVQbGFjZWhvbGRlcigpfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuc3VibWl0QnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17c2VhcmNoSWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXR0cmlidXRpb25PdXRlcn0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXR0cmlidXRpb259PlxuXHRcdFx0XHRcdFx0XHRcdHBvd2VyZWQgYnlcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXthcGlEb2NzVXJsfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtvc2ZTaGFyZUxvZ299IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})