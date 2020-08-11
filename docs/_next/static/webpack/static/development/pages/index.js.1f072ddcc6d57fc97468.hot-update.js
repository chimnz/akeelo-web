webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HomePage.module.css */ \"./styles/HomePage.module.css\");\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/iconmonstr-search-thin.svg */ \"./assets/images/iconmonstr-search-thin.svg\");\n/* harmony import */ var _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/osf-share-logo.png */ \"./assets/images/osf-share-logo.png\");\n/* harmony import */ var _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/iconmonstr-github-1.svg */ \"./assets/images/iconmonstr-github-1.svg\");\n/* harmony import */ var _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/personal-website-icon.png */ \"./assets/images/personal-website-icon.png\");\n/* harmony import */ var _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/chris/Desktop/git-repos/akeelo-web/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar personalWebsiteUrl = 'https://hdqrs.co';\nvar githubUrl = 'https://github.com/chimnz/akeelo-web';\nvar apiDocsUrl = 'https://share-research.readthedocs.io';\nvar queryExamples = ['celiac disease', 'protein folding', 'turbulent flow', 'quantum gravity', 'astrophysical jets', 'ball lightning', 'coriolis effect', 'enzyme kinetics', 'butterfly migration', 'opaque forest', 'gall wasp', 'lactose intolerance'];\n\nfunction generatePlaceholder() {\n  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random\n  function getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min)) + min;\n  }\n\n  var idx = getRandomInt(0, queryExamples.length);\n  return \"search for science (eg. \".concat(queryExamples[idx], \")\");\n}\n\nfunction HomePage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var formInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n\n  function goToSearchPage(e) {\n    e.preventDefault();\n    router.push({\n      pathname: '/search',\n      query: {\n        q: formInput.current.value\n      }\n    });\n  } // autofocus the text input field\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    formInput.current.focus();\n  }, []);\n  console.log(props.pagePros);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nav\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 6\n    }\n  }, __jsx(\"a\", {\n    href: personalWebsiteUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_personal_website_icon_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 8\n    }\n  })), __jsx(\"a\", {\n    href: githubUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_github_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 8\n    }\n  }))))), __jsx(\"main\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"main-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.searchOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 6\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.search,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 8\n    }\n  }, \"akeelo\"), __jsx(\"form\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form,\n    onSubmit: goToSearchPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 8\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textInput,\n    ref: formInput,\n    type: \"text\",\n    placeholder: generatePlaceholder(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 10\n    }\n  }), __jsx(\"button\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.submitButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 10\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_iconmonstr_search_thin_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }))))), __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attributionOuter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.attribution,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 8\n    }\n  }, \"powered by\", __jsx(\"a\", {\n    href: apiDocsUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _assets_images_osf_share_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 10\n    }\n  }))))))));\n}\n\n_s(HomePage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInBlcnNvbmFsV2Vic2l0ZVVybCIsImdpdGh1YlVybCIsImFwaURvY3NVcmwiLCJxdWVyeUV4YW1wbGVzIiwiZ2VuZXJhdGVQbGFjZWhvbGRlciIsImdldFJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJpZHgiLCJsZW5ndGgiLCJIb21lUGFnZSIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZm9ybUlucHV0IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJnb1RvU2VhcmNoUGFnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicSIsImN1cnJlbnQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImZvY3VzIiwiY29uc29sZSIsImxvZyIsInBhZ2VQcm9zIiwic3R5bGVzIiwibmF2IiwibGlua1dyYXBwZXIiLCJwZXJzb25hbFdlYnNpdGVMb2dvIiwiZ2l0aHViSWNvbiIsIm1haW4iLCJzZWFyY2hPdXRlciIsInNlYXJjaCIsImxvZ28iLCJmb3JtIiwiZm9ybUlubmVyIiwidGV4dElucHV0Iiwic3VibWl0QnV0dG9uIiwic2VhcmNoSWNvbiIsImF0dHJpYnV0aW9uT3V0ZXIiLCJhdHRyaWJ1dGlvbiIsIm9zZlNoYXJlTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHLGtCQUEzQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxzQ0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsdUNBQW5CO0FBRUEsSUFBTUMsYUFBYSxHQUFHLENBQ3JCLGdCQURxQixFQUNILGlCQURHLEVBQ2dCLGdCQURoQixFQUVyQixpQkFGcUIsRUFFRixvQkFGRSxFQUVvQixnQkFGcEIsRUFHckIsaUJBSHFCLEVBR0YsaUJBSEUsRUFHaUIscUJBSGpCLEVBSXJCLGVBSnFCLEVBSUosV0FKSSxFQUlTLHFCQUpULENBQXRCOztBQU9BLFNBQVNDLG1CQUFULEdBQStCO0FBQzlCO0FBQ0EsV0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQy9CRCxPQUFHLEdBQUdFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxHQUFWLENBQU47QUFDQUMsT0FBRyxHQUFHQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0gsR0FBWCxDQUFOO0FBQ0EsV0FBT0MsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0csTUFBTCxNQUFpQkosR0FBRyxHQUFHRCxHQUF2QixDQUFYLElBQTBDQSxHQUFqRDtBQUNBOztBQUNELE1BQU1NLEdBQUcsR0FBR1AsWUFBWSxDQUFDLENBQUQsRUFBSUYsYUFBYSxDQUFDVSxNQUFsQixDQUF4QjtBQUNBLDJDQUFrQ1YsYUFBYSxDQUFDUyxHQUFELENBQS9DO0FBQ0E7O0FBRUQsU0FBU0UsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLFNBQVMsR0FBR0MsNENBQUssQ0FBQ0MsU0FBTixFQUFoQjs7QUFFQSxXQUFTQyxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUMxQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FQLFVBQU0sQ0FBQ1EsSUFBUCxDQUFZO0FBQ1hDLGNBQVEsRUFBRSxTQURDO0FBRVhDLFdBQUssRUFBRTtBQUNOQyxTQUFDLEVBQUVULFNBQVMsQ0FBQ1UsT0FBVixDQUFrQkM7QUFEZjtBQUZJLEtBQVo7QUFNQSxHQVp1QixDQWN4Qjs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNmWixhQUFTLENBQUNVLE9BQVYsQ0FBa0JHLEtBQWxCO0FBQ0EsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWWxCLEtBQUssQ0FBQ21CLFFBQWxCO0FBRUEsU0FDQyxtRUFDQztBQUFLLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBRUQsa0VBQU0sQ0FBQ0UsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFFckMsa0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssT0FBRyxFQUFFc0MsK0VBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFJQztBQUFHLFFBQUksRUFBRXJDLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssT0FBRyxFQUFFc0MsNkVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBSkQsQ0FERCxDQURELENBREQsRUFhQztBQUFNLGFBQVMsRUFBRUosa0VBQU0sQ0FBQ0ssSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFTCxrRUFBTSxDQUFDTSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUVOLGtFQUFNLENBQUNPLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBRVAsa0VBQU0sQ0FBQ1EsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELEVBRUM7QUFDQyxhQUFTLEVBQUVSLGtFQUFNLENBQUNTLElBRG5CO0FBRUMsWUFBUSxFQUFFdkIsY0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUM7QUFBSyxhQUFTLEVBQUVjLGtFQUFNLENBQUNVLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsRUFBRVYsa0VBQU0sQ0FBQ1csU0FEbkI7QUFFQyxPQUFHLEVBQUU1QixTQUZOO0FBR0MsUUFBSSxFQUFDLE1BSE47QUFJQyxlQUFXLEVBQUVkLG1CQUFtQixFQUpqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFPQztBQUNDLGFBQVMsRUFBRStCLGtFQUFNLENBQUNZLFlBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQztBQUFLLE9BQUcsRUFBRUMsZ0ZBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBUEQsQ0FKRCxDQUZELENBREQsRUFzQkM7QUFBSyxhQUFTLEVBQUViLGtFQUFNLENBQUNjLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUVkLGtFQUFNLENBQUNlLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUM7QUFBRyxRQUFJLEVBQUVoRCxVQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLE9BQUcsRUFBRWlELHdFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQUZELENBREQsQ0F0QkQsQ0FERCxDQURELENBYkQsQ0FERDtBQW1EQTs7R0F4RVFyQyxRO1VBQ09HLHFEOzs7S0FEUEgsUTtBQTBFTUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWVQYWdlLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ljb25tb25zdHItc2VhcmNoLXRoaW4uc3ZnJ1xuXG5pbXBvcnQgb3NmU2hhcmVMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvb3NmLXNoYXJlLWxvZ28ucG5nJ1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29ubW9uc3RyLWdpdGh1Yi0xLnN2ZydcbmltcG9ydCBwZXJzb25hbFdlYnNpdGVMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcGVyc29uYWwtd2Vic2l0ZS1pY29uLnBuZydcblxuY29uc3QgcGVyc29uYWxXZWJzaXRlVXJsID0gJ2h0dHBzOi8vaGRxcnMuY28nXG5jb25zdCBnaXRodWJVcmwgPSAnaHR0cHM6Ly9naXRodWIuY29tL2NoaW1uei9ha2VlbG8td2ViJ1xuY29uc3QgYXBpRG9jc1VybCA9ICdodHRwczovL3NoYXJlLXJlc2VhcmNoLnJlYWR0aGVkb2NzLmlvJ1xuXG5jb25zdCBxdWVyeUV4YW1wbGVzID0gW1xuXHQnY2VsaWFjIGRpc2Vhc2UnLCAncHJvdGVpbiBmb2xkaW5nJywgJ3R1cmJ1bGVudCBmbG93Jyxcblx0J3F1YW50dW0gZ3Jhdml0eScsICdhc3Ryb3BoeXNpY2FsIGpldHMnLCAnYmFsbCBsaWdodG5pbmcnLFxuXHQnY29yaW9saXMgZWZmZWN0JywgJ2VuenltZSBraW5ldGljcycsICdidXR0ZXJmbHkgbWlncmF0aW9uJyxcblx0J29wYXF1ZSBmb3Jlc3QnLCAnZ2FsbCB3YXNwJywgJ2xhY3Rvc2UgaW50b2xlcmFuY2UnXG5dXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGxhY2Vob2xkZXIoKSB7XG5cdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXG5cdGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuXHRcdG1pbiA9IE1hdGguY2VpbChtaW4pXG5cdFx0bWF4ID0gTWF0aC5mbG9vcihtYXgpXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pblxuXHR9XG5cdGNvbnN0IGlkeCA9IGdldFJhbmRvbUludCgwLCBxdWVyeUV4YW1wbGVzLmxlbmd0aClcblx0cmV0dXJuIGBzZWFyY2ggZm9yIHNjaWVuY2UgKGVnLiAke3F1ZXJ5RXhhbXBsZXNbaWR4XX0pYFxufVxuXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRsZXQgZm9ybUlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKClcblxuXHRmdW5jdGlvbiBnb1RvU2VhcmNoUGFnZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0cm91dGVyLnB1c2goe1xuXHRcdFx0cGF0aG5hbWU6ICcvc2VhcmNoJyxcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdHE6IGZvcm1JbnB1dC5jdXJyZW50LnZhbHVlXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdC8vIGF1dG9mb2N1cyB0aGUgdGV4dCBpbnB1dCBmaWVsZFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZvcm1JbnB1dC5jdXJyZW50LmZvY3VzKClcblx0fSwgW10pXG5cblx0Y29uc29sZS5sb2cocHJvcHMucGFnZVByb3MpXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua1dyYXBwZXJ9PlxuXHRcdFx0XHRcdFx0PGEgaHJlZj17cGVyc29uYWxXZWJzaXRlVXJsfT5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3BlcnNvbmFsV2Vic2l0ZUxvZ299IC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtnaXRodWJVcmx9PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Z2l0aHViSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L25hdj5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbi1pbm5lcic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hPdXRlcn0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+YWtlZWxvPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZm9ybX1cblx0XHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17Z29Ub1NlYXJjaFBhZ2V9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Jbm5lcn0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMudGV4dElucHV0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e2Zvcm1JbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e2dlbmVyYXRlUGxhY2Vob2xkZXIoKX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3NlYXJjaEljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0aW9uT3V0ZXJ9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dHJpYnV0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRwb3dlcmVkIGJ5XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YXBpRG9jc1VybH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17b3NmU2hhcmVMb2dvfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})