webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HomePage.module.css */ \"./styles/HomePage.module.css\");\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/iconmonstr-search-thin.svg */ \"./assets/images/iconmonstr-search-thin.svg\");\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/osf-share-logo.png */ \"./assets/images/osf-share-logo.png\");\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/iconmonstr-github-1.svg */ \"./assets/images/iconmonstr-github-1.svg\");\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/personal-website-icon.png */ \"./assets/images/personal-website-icon.png\");\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/chris/Desktop/git-repos/akeelo-web/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar personalWebsiteUrl = 'https://hdqrs.co';\nvar githubUrl = 'https://github.com/chimnz/akeelo-web';\nvar apiDocsUrl = 'https://share-research.readthedocs.io'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min)) + min;\n}\n\nvar queryExamples = ['celiac disease', 'protein folding', 'turbulent flow', 'quantum gravity', 'astrophysical jets', 'ball lightning', 'coriolis effect', 'enzyme kinetics', 'butterfly migration', 'opaque forest', 'gall wasp', 'lactose intolerance'];\n\nfunction getPlaceholder() {\n  var idx = getRandomInt(0, queryExamples.length);\n  console.log(idx);\n  var placeholder = \"search for science (eg. \".concat(queryExamples[idx], \")\");\n}\n\nfunction HomePage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var formInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n\n  function goToSearchPage(e) {\n    e.preventDefault();\n    router.push({\n      pathname: '/search',\n      query: {\n        q: formInput.current.value\n      }\n    });\n  } // autofocus the text input field\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    formInput.current.focus();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nav\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 6\n    }\n  }, __jsx(\"a\", {\n    href: personalWebsiteUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 8\n    }\n  })), __jsx(\"a\", {\n    href: githubUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 8\n    }\n  }))))), __jsx(\"main\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"main-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.searchOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 6\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 8\n    }\n  }, \"akeelo\"), __jsx(\"form\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form,\n    onSubmit: goToSearchPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 8\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textInput,\n    ref: formInput,\n    type: \"text\",\n    placeholder: placeholder,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 10\n    }\n  }), __jsx(\"button\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.submitButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 10\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }))))), __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attributionOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attribution,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 8\n    }\n  }, \"powered by\", __jsx(\"a\", {\n    href: apiDocsUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 10\n    }\n  }))))))));\n}\n\n_s(HomePage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInBlcnNvbmFsV2Vic2l0ZVVybCIsImdpdGh1YlVybCIsImFwaURvY3NVcmwiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwicXVlcnlFeGFtcGxlcyIsImdldFBsYWNlaG9sZGVyIiwiaWR4IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInBsYWNlaG9sZGVyIiwiSG9tZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmb3JtSW5wdXQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImdvVG9TZWFyY2hQYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJxIiwiY3VycmVudCIsInZhbHVlIiwidXNlRWZmZWN0IiwiZm9jdXMiLCJzdHlsZXMiLCJuYXYiLCJsaW5rV3JhcHBlciIsInBlcnNvbmFsV2Vic2l0ZUxvZ28iLCJnaXRodWJJY29uIiwibWFpbiIsInNlYXJjaE91dGVyIiwic2VhcmNoIiwibG9nbyIsImZvcm0iLCJmb3JtSW5uZXIiLCJ0ZXh0SW5wdXQiLCJzdWJtaXRCdXR0b24iLCJzZWFyY2hJY29uIiwiYXR0cmlidXRpb25PdXRlciIsImF0dHJpYnV0aW9uIiwib3NmU2hhcmVMb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsa0JBQTNCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLHNDQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyx1Q0FBbkIsQyxDQUVBOztBQUNBLFNBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUMvQkQsS0FBRyxHQUFHRSxJQUFJLENBQUNDLElBQUwsQ0FBVUgsR0FBVixDQUFOO0FBQ0FDLEtBQUcs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O0FBQUE7QUFBQTtBQUFBLEtBSUM7QUFBSyxhQUFTLEVBQUVXLGtFQUFNLENBQUNVLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsRUFBRVYsa0VBQU0sQ0FBQ1csU0FEbkI7QUFFQyxPQUFHLEVBQUV6QixTQUZOO0FBR0MsUUFBSSxFQUFDLE1BSE47QUFJQyxlQUFXLEVBQUVKLFdBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBT0M7QUFDQyxhQUFTLEVBQUVrQixrRUFBTSxDQUFDWSxZQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0M7QUFBSyxPQUFHLEVBQUVDLGdGQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxDQVBELENBSkQsQ0FGRCxDQURELEVBc0JDO0FBQUssYUFBUyxFQUFFYixrRUFBTSxDQUFDYyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFZCxrRUFBTSxDQUFDZSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVDO0FBQUcsUUFBSSxFQUFFL0MsVUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxPQUFHLEVBQUVnRCx3RUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FGRCxDQURELENBdEJELENBREQsQ0FERCxDQWJELENBREQ7QUFtREE7O0dBdEVRakMsUTtVQUNPRSxxRDs7O0tBRFBGLFE7QUF3RU1BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lUGFnZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHNlYXJjaEljb24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29ubW9uc3RyLXNlYXJjaC10aGluLnN2ZydcblxuaW1wb3J0IG9zZlNoYXJlTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL29zZi1zaGFyZS1sb2dvLnBuZydcbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbm1vbnN0ci1naXRodWItMS5zdmcnXG5pbXBvcnQgcGVyc29uYWxXZWJzaXRlTG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3BlcnNvbmFsLXdlYnNpdGUtaWNvbi5wbmcnXG5cbmNvbnN0IHBlcnNvbmFsV2Vic2l0ZVVybCA9ICdodHRwczovL2hkcXJzLmNvJ1xuY29uc3QgZ2l0aHViVXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGltbnovYWtlZWxvLXdlYidcbmNvbnN0IGFwaURvY3NVcmwgPSAnaHR0cHM6Ly9zaGFyZS1yZXNlYXJjaC5yZWFkdGhlZG9jcy5pbydcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9yYW5kb21cbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuXHRtaW4gPSBNYXRoLmNlaWwobWluKVxuXHRtYXggPSBNYXRoLmZsb29yKG1heClcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pblxufVxuXG5jb25zdCBxdWVyeUV4YW1wbGVzID0gW1xuXHQnY2VsaWFjIGRpc2Vhc2UnLCAncHJvdGVpbiBmb2xkaW5nJywgJ3R1cmJ1bGVudCBmbG93Jyxcblx0J3F1YW50dW0gZ3Jhdml0eScsICdhc3Ryb3BoeXNpY2FsIGpldHMnLCAnYmFsbCBsaWdodG5pbmcnLFxuXHQnY29yaW9saXMgZWZmZWN0JywgJ2VuenltZSBraW5ldGljcycsICdidXR0ZXJmbHkgbWlncmF0aW9uJyxcblx0J29wYXF1ZSBmb3Jlc3QnLCAnZ2FsbCB3YXNwJywgJ2xhY3Rvc2UgaW50b2xlcmFuY2UnXG5dXG5cbmZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyKCkge1xuXHRjb25zdCBpZHggPSBnZXRSYW5kb21JbnQoMCwgcXVlcnlFeGFtcGxlcy5sZW5ndGgpXG5cdGNvbnNvbGUubG9nKGlkeClcblx0Y29uc3QgcGxhY2Vob2xkZXIgPSBgc2VhcmNoIGZvciBzY2llbmNlIChlZy4gJHtxdWVyeUV4YW1wbGVzW2lkeF19KWBcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGxldCBmb3JtSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG5cdGZ1bmN0aW9uIGdvVG9TZWFyY2hQYWdlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRyb3V0ZXIucHVzaCh7XG5cdFx0XHRwYXRobmFtZTogJy9zZWFyY2gnLFxuXHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0cTogZm9ybUlucHV0LmN1cnJlbnQudmFsdWVcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Ly8gYXV0b2ZvY3VzIHRoZSB0ZXh0IGlucHV0IGZpZWxkXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Zm9ybUlucHV0LmN1cnJlbnQuZm9jdXMoKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rV3JhcHBlcn0+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtwZXJzb25hbFdlYnNpdGVVcmx9PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cGVyc29uYWxXZWJzaXRlTG9nb30gLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9e2dpdGh1YlVybH0+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtnaXRodWJJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbmF2PlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLWlubmVyJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaE91dGVyfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5ha2VlbG88L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5mb3JtfVxuXHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtnb1RvU2VhcmNoUGFnZX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlubmVyfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5wdXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17Zm9ybUlucHV0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtzZWFyY2hJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdHRyaWJ1dGlvbk91dGVyfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdHRyaWJ1dGlvbn0+XG5cdFx0XHRcdFx0XHRcdFx0cG93ZXJlZCBieVxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2FwaURvY3NVcmx9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e29zZlNoYXJlTG9nb30gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})