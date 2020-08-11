webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HomePage.module.css */ \"./styles/HomePage.module.css\");\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/iconmonstr-search-thin.svg */ \"./assets/images/iconmonstr-search-thin.svg\");\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/osf-share-logo.png */ \"./assets/images/osf-share-logo.png\");\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/iconmonstr-github-1.svg */ \"./assets/images/iconmonstr-github-1.svg\");\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/personal-website-icon.png */ \"./assets/images/personal-website-icon.png\");\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/chris/Desktop/git-repos/akeelo-web/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar personalWebsiteUrl = 'https://hdqrs.co';\nvar githubUrl = 'https://github.com/chimnz/akeelo-web';\nvar apiDocsUrl = 'https://share-research.readthedocs.io';\n\nfunction generatePlaceholder() {\n  var queryExamples = ['protein folding', 'turbulent flow', 'quantum gravity', 'solar flare', 'celiac disease', 'dark matter', 'coriolis effect', 'air pollution', 'butterfly migration', 'quark-gluon plasma', 'ball lightning', 'brinicle']; // https://stackoverflow.com/a/1527834\n\n  function getRandomInt(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  }\n\n  var idx = getRandomInt(0, queryExamples.length);\n  return \"search for science (eg. \".concat(queryExamples[idx], \")\");\n}\n\nfunction HomePage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var formInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      placeholder = _useState[0],\n      setPlaceholder = _useState[1];\n\n  function goToSearchPage(e) {\n    e.preventDefault();\n    router.push({\n      pathname: '/search',\n      query: {\n        q: formInput.current.value\n      }\n    });\n  } // autofocus the text input field\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    formInput.current.focus();\n  }, []); // set placeholder text\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var txt;\n\n    if (window.innerWidth >= 550) {\n      txt = 'search for science';\n    } else {\n      txt = generatePlaceholder();\n    }\n\n    setPlaceholder(txt);\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nav\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 6\n    }\n  }, __jsx(\"a\", {\n    href: personalWebsiteUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 8\n    }\n  })), __jsx(\"a\", {\n    href: githubUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 8\n    }\n  }))))), __jsx(\"main\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"main-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.searchOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 6\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 8\n    }\n  }, \"akeelo\"), __jsx(\"form\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form,\n    onSubmit: goToSearchPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 8\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textInput,\n    ref: formInput,\n    type: \"text\",\n    placeholder: placeholder,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 10\n    }\n  }), __jsx(\"button\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.submitButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 10\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }))))), __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attributionOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attribution,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 8\n    }\n  }, \"powered by\", __jsx(\"a\", {\n    href: apiDocsUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 10\n    }\n  }))))))));\n}\n\n_s(HomePage, \"jO/H1Fv/NQ22s3f/f9fg8mlIkQc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInBlcnNvbmFsV2Vic2l0ZVVybCIsImdpdGh1YlVybCIsImFwaURvY3NVcmwiLCJnZW5lcmF0ZVBsYWNlaG9sZGVyIiwicXVlcnlFeGFtcGxlcyIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlkeCIsImxlbmd0aCIsIkhvbWVQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9ybUlucHV0IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJ1c2VTdGF0ZSIsInBsYWNlaG9sZGVyIiwic2V0UGxhY2Vob2xkZXIiLCJnb1RvU2VhcmNoUGFnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicSIsImN1cnJlbnQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImZvY3VzIiwidHh0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0eWxlcyIsIm5hdiIsImxpbmtXcmFwcGVyIiwicGVyc29uYWxXZWJzaXRlTG9nbyIsImdpdGh1Ykljb24iLCJtYWluIiwic2VhcmNoT3V0ZXIiLCJzZWFyY2giLCJsb2dvIiwiZm9ybSIsImZvcm1Jbm5lciIsInRleHRJbnB1dCIsInN1Ym1pdEJ1dHRvbiIsInNlYXJjaEljb24iLCJhdHRyaWJ1dGlvbk91dGVyIiwiYXR0cmlidXRpb24iLCJvc2ZTaGFyZUxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxrQkFBM0I7QUFDQSxJQUFNQyxTQUFTLEdBQUcsc0NBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLHVDQUFuQjs7QUFFQSxTQUFTQyxtQkFBVCxHQUErQjtBQUM5QixNQUFNQyxhQUFhLEdBQUcsQ0FDckIsaUJBRHFCLEVBQ0YsZ0JBREUsRUFDZ0IsaUJB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O0FBbURBOztHQWpGUXZDLFE7VUFDT0UscUQ7OztLQURQRixRO0FBbUZNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZVBhZ2UubW9kdWxlLmNzcydcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ljb25tb25zdHItc2VhcmNoLXRoaW4uc3ZnJ1xuXG5pbXBvcnQgb3NmU2hhcmVMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvb3NmLXNoYXJlLWxvZ28ucG5nJ1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29ubW9uc3RyLWdpdGh1Yi0xLnN2ZydcbmltcG9ydCBwZXJzb25hbFdlYnNpdGVMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcGVyc29uYWwtd2Vic2l0ZS1pY29uLnBuZydcblxuY29uc3QgcGVyc29uYWxXZWJzaXRlVXJsID0gJ2h0dHBzOi8vaGRxcnMuY28nXG5jb25zdCBnaXRodWJVcmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL2NoaW1uei9ha2VlbG8td2ViJ1xuY29uc3QgYXBpRG9jc1VybCA9ICdodHRwczovL3NoYXJlLXJlc2VhcmNoLnJlYWR0aGVkb2NzLmlvJ1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVBsYWNlaG9sZGVyKCkge1xuXHRjb25zdCBxdWVyeUV4YW1wbGVzID0gW1xuXHRcdCdwcm90ZWluIGZvbGRpbmcnLCAndHVyYnVsZW50IGZsb3cnLCAncXVhbnR1bSBncmF2aXR5Jyxcblx0XHQnc29sYXIgZmxhcmUnLCAnY2VsaWFjIGRpc2Vhc2UnLCAnZGFyayBtYXR0ZXInLFxuXHRcdCdjb3Jpb2xpcyBlZmZlY3QnLCAnYWlyIHBvbGx1dGlvbicsICdidXR0ZXJmbHkgbWlncmF0aW9uJyxcblx0XHQncXVhcmstZ2x1b24gcGxhc21hJywgJ2JhbGwgbGlnaHRuaW5nJywgJ2JyaW5pY2xlJ1xuXG5cdF1cblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1Mjc4MzRcblx0ZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cblx0fVxuXHRjb25zdCBpZHggPSBnZXRSYW5kb21JbnQoMCwgcXVlcnlFeGFtcGxlcy5sZW5ndGgpXG5cdHJldHVybiBgc2VhcmNoIGZvciBzY2llbmNlIChlZy4gJHtxdWVyeUV4YW1wbGVzW2lkeF19KWBcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IGZvcm1JbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cdGNvbnN0IFtwbGFjZWhvbGRlciwgc2V0UGxhY2Vob2xkZXJdID0gdXNlU3RhdGUoKVxuXG5cdGZ1bmN0aW9uIGdvVG9TZWFyY2hQYWdlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRyb3V0ZXIucHVzaCh7XG5cdFx0XHRwYXRobmFtZTogJy9zZWFyY2gnLFxuXHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0cTogZm9ybUlucHV0LmN1cnJlbnQudmFsdWVcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Ly8gYXV0b2ZvY3VzIHRoZSB0ZXh0IGlucHV0IGZpZWxkXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Zm9ybUlucHV0LmN1cnJlbnQuZm9jdXMoKVxuXHR9LCBbXSlcblx0Ly8gc2V0IHBsYWNlaG9sZGVyIHRleHRcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRsZXQgdHh0XG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49ICA1NTApIHtcblx0XHRcdHR4dCA9ICdzZWFyY2ggZm9yIHNjaWVuY2UnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHR4dCA9IGdlbmVyYXRlUGxhY2Vob2xkZXIoKVxuXHRcdH1cblx0XHRzZXRQbGFjZWhvbGRlcih0eHQpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtXcmFwcGVyfT5cblx0XHRcdFx0XHRcdDxhIGhyZWY9e3BlcnNvbmFsV2Vic2l0ZVVybH0+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwZXJzb25hbFdlYnNpdGVMb2dvfSAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj17Z2l0aHViVXJsfT5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2dpdGh1Ykljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4taW5uZXInPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoT3V0ZXJ9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PmFrZWVsbzwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmZvcm19XG5cdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2dvVG9TZWFyY2hQYWdlfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5uZXJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtmb3JtSW5wdXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3NlYXJjaEljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0aW9uT3V0ZXJ9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRwb3dlcmVkIGJ5XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YXBpRG9jc1VybH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17b3NmU2hhcmVMb2dvfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})