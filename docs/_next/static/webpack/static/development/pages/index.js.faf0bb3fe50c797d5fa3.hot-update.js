webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HomePage.module.css */ \"./styles/HomePage.module.css\");\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/iconmonstr-search-thin.svg */ \"./assets/images/iconmonstr-search-thin.svg\");\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/osf-share-logo.png */ \"./assets/images/osf-share-logo.png\");\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/iconmonstr-github-1.svg */ \"./assets/images/iconmonstr-github-1.svg\");\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/personal-website-icon.png */ \"./assets/images/personal-website-icon.png\");\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/chris/Desktop/git-repos/akeelo-web/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar personalWebsiteUrl = 'https://hdqrs.co';\nvar githubUrl = 'https://github.com/chimnz/akeelo-web';\nvar apiDocsUrl = 'https://share-research.readthedocs.io';\n\nfunction generatePlaceholder() {\n  var queryExamples = ['protein folding', 'turbulent flow', 'quantum gravity', 'astrophysical jets', 'ball lightning', 'microlensing', 'coriolis effect', 'enzyme kinetics', 'butterfly migration', 'quark-gluon plasma', 'celiac disease', 'brinicle']; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random\n\n  function getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min)) + min;\n  }\n\n  var idx = getRandomInt(0, queryExamples.length);\n  return \"search for science (eg. \".concat(queryExamples[idx], \")\");\n}\n\nfunction HomePage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var formInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      placeholder = _useState[0],\n      setPlaceholder = _useState[1];\n\n  function goToSearchPage(e) {\n    e.preventDefault();\n    router.push({\n      pathname: '/search',\n      query: {\n        q: formInput.current.value\n      }\n    });\n  } // autofocus the text input field\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    formInput.current.focus();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setPlaceholder(generatePlaceholder());\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nav\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 6\n    }\n  }, __jsx(\"a\", {\n    href: personalWebsiteUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 8\n    }\n  })), __jsx(\"a\", {\n    href: githubUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 8\n    }\n  }))))), __jsx(\"main\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"main-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.searchOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 6\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 8\n    }\n  }, \"akeelo\"), __jsx(\"form\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form,\n    onSubmit: goToSearchPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 8\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textInput,\n    ref: formInput,\n    type: \"text\",\n    placeholder: placeholder,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 10\n    }\n  }), __jsx(\"button\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.submitButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 10\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }))))), __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attributionOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attribution,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 8\n    }\n  }, \"powered by\", __jsx(\"a\", {\n    href: apiDocsUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 10\n    }\n  }))))))));\n}\n\n_s(HomePage, \"jO/H1Fv/NQ22s3f/f9fg8mlIkQc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInBlcnNvbmFsV2Vic2l0ZVVybCIsImdpdGh1YlVybCIsImFwaURvY3NVcmwiLCJnZW5lcmF0ZVBsYWNlaG9sZGVyIiwicXVlcnlFeGFtcGxlcyIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJpZHgiLCJsZW5ndGgiLCJIb21lUGFnZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9ybUlucHV0IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJ1c2VTdGF0ZSIsInBsYWNlaG9sZGVyIiwic2V0UGxhY2Vob2xkZXIiLCJnb1RvU2VhcmNoUGFnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicSIsImN1cnJlbnQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImZvY3VzIiwic3R5bGVzIiwibmF2IiwibGlua1dyYXBwZXIiLCJwZXJzb25hbFdlYnNpdGVMb2dvIiwiZ2l0aHViSWNvbiIsIm1haW4iLCJzZWFyY2hPdXRlciIsInNlYXJjaCIsImxvZ28iLCJmb3JtIiwiZm9ybUlubmVyIiwidGV4dElucHV0Iiwic3VibWl0QnV0dG9uIiwic2VhcmNoSWNvbiIsImF0dHJpYnV0aW9uT3V0ZXIiLCJhdHRyaWJ1dGlvbiIsIm9zZlNoYXJlTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHLGtCQUEzQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxzQ0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsdUNBQW5COztBQUVBLFNBQVNDLG1CQUFULEdBQStCO0FBQzlCLE1BQU1DLGFBQWEsR0FBRyxDQUNyQixpQkFEcUIsRUFDRixnQkFERSxFQUNnQixpQkFEaEIsRUFFckIsb0JB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IiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lUGFnZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbm1vbnN0ci1zZWFyY2gtdGhpbi5zdmcnXG5cbmltcG9ydCBvc2ZTaGFyZUxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9vc2Ytc2hhcmUtbG9nby5wbmcnXG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ljb25tb25zdHItZ2l0aHViLTEuc3ZnJ1xuaW1wb3J0IHBlcnNvbmFsV2Vic2l0ZUxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wZXJzb25hbC13ZWJzaXRlLWljb24ucG5nJ1xuXG5jb25zdCBwZXJzb25hbFdlYnNpdGVVcmwgPSAnaHR0cHM6Ly9oZHFycy5jbydcbmNvbnN0IGdpdGh1YlVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vY2hpbW56L2FrZWVsby13ZWInXG5jb25zdCBhcGlEb2NzVXJsID0gJ2h0dHBzOi8vc2hhcmUtcmVzZWFyY2gucmVhZHRoZWRvY3MuaW8nXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGxhY2Vob2xkZXIoKSB7XG5cdGNvbnN0IHF1ZXJ5RXhhbXBsZXMgPSBbXG5cdFx0J3Byb3RlaW4gZm9sZGluZycsICd0dXJidWxlbnQgZmxvdycsICdxdWFudHVtIGdyYXZpdHknLFxuXHRcdCdhc3Ryb3BoeXNpY2FsIGpldHMnLCAnYmFsbCBsaWdodG5pbmcnLCAnbWljcm9sZW5zaW5nJyxcblx0XHQnY29yaW9saXMgZWZmZWN0JywgJ2VuenltZSBraW5ldGljcycsICdidXR0ZXJmbHkgbWlncmF0aW9uJyxcblx0XHQncXVhcmstZ2x1b24gcGxhc21hJywgJ2NlbGlhYyBkaXNlYXNlJywgJ2JyaW5pY2xlJ1xuXG5cdF1cblx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9yYW5kb21cblx0ZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cdFx0bWluID0gTWF0aC5jZWlsKG1pbilcblx0XHRtYXggPSBNYXRoLmZsb29yKG1heClcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluXG5cdH1cblx0Y29uc3QgaWR4ID0gZ2V0UmFuZG9tSW50KDAsIHF1ZXJ5RXhhbXBsZXMubGVuZ3RoKVxuXHRyZXR1cm4gYHNlYXJjaCBmb3Igc2NpZW5jZSAoZWcuICR7cXVlcnlFeGFtcGxlc1tpZHhdfSlgXG59XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IGZvcm1JbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cdGNvbnN0IFtwbGFjZWhvbGRlciwgc2V0UGxhY2Vob2xkZXJdID0gdXNlU3RhdGUoKVxuXG5cdGZ1bmN0aW9uIGdvVG9TZWFyY2hQYWdlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRyb3V0ZXIucHVzaCh7XG5cdFx0XHRwYXRobmFtZTogJy9zZWFyY2gnLFxuXHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0cTogZm9ybUlucHV0LmN1cnJlbnQudmFsdWVcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Ly8gYXV0b2ZvY3VzIHRoZSB0ZXh0IGlucHV0IGZpZWxkXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Zm9ybUlucHV0LmN1cnJlbnQuZm9jdXMoKVxuXHR9LCBbXSlcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRQbGFjZWhvbGRlcihnZW5lcmF0ZVBsYWNlaG9sZGVyKCkpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtXcmFwcGVyfT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9e3BlcnNvbmFsV2Vic2l0ZVVybH0+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwZXJzb25hbFdlYnNpdGVMb2dvfSAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj17Z2l0aHViVXJsfT5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2dpdGh1Ykljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4taW5uZXInPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoT3V0ZXJ9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PmFrZWVsbzwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmZvcm19XG5cdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2dvVG9TZWFyY2hQYWdlfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5uZXJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtmb3JtSW5wdXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3NlYXJjaEljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0aW9uT3V0ZXJ9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRwb3dlcmVkIGJ5XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YXBpRG9jc1VybH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17b3NmU2hhcmVMb2dvfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})