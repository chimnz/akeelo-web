webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/LoadMoreButton.js":
/*!**************************************!*\
  !*** ./components/LoadMoreButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_iconmonstr_arrow_down_thin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/iconmonstr-arrow-down-thin.svg */ \"./assets/images/iconmonstr-arrow-down-thin.svg\");\n/* harmony import */ var _assets_images_iconmonstr_arrow_down_thin_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_arrow_down_thin_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_iconmonstr_menu_dot_horizontal_thin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/iconmonstr-menu-dot-horizontal-thin.svg */ \"./assets/images/iconmonstr-menu-dot-horizontal-thin.svg\");\n/* harmony import */ var _assets_images_iconmonstr_menu_dot_horizontal_thin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_iconmonstr_menu_dot_horizontal_thin_svg__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/chris/Desktop/git-repos/akeelo-web/components/LoadMoreButton.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar buttonStyle = {\n  width: '100%',\n  backgroundColor: 'inherit',\n  height: '10rem',\n  border: 'none',\n  fontSize: '2rem'\n};\nvar imgStyle = {\n  width: '1.25em'\n};\nvar maxOffset = 10;\n\nfunction LoadMoreButton(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isVisible = _useState2[0],\n      setIsVisible = _useState2[1];\n\n  if (props.results.length >= 3) {\n    setIsVisible(false);\n  }\n\n  buttonStyle = _objectSpread(_objectSpread({}, buttonStyle), {}, {\n    display: isVisible ? 'block' : 'none'\n  });\n\n  function flipLoadingState() {\n    setIsLoading(!isLoading);\n  }\n\n  function loadMoreResults() {\n    props.setParams(_objectSpread(_objectSpread({}, props.params), {}, {\n      offset: props.results.length + maxOffset\n    }));\n  }\n\n  return __jsx(\"button\", {\n    style: buttonStyle,\n    onClick: loadMoreResults,\n    onMouseEnter: function onMouseEnter() {\n      loadMoreResults();\n      flipLoadingState();\n    },\n    onMouseLeave: flipLoadingState,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 3\n    }\n  }, __jsx(\"img\", {\n    style: imgStyle,\n    src: isLoading ? _assets_images_iconmonstr_menu_dot_horizontal_thin_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _assets_images_iconmonstr_arrow_down_thin_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 4\n    }\n  }));\n}\n\n_s(LoadMoreButton, \"d7RasJZGJJMb9qpYbpRVukhOeQY=\");\n\n_c = LoadMoreButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadMoreButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"LoadMoreButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRNb3JlQnV0dG9uLmpzPzM1NmMiXSwibmFtZXMiOlsiYnV0dG9uU3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImJvcmRlciIsImZvbnRTaXplIiwiaW1nU3R5bGUiLCJtYXhPZmZzZXQiLCJMb2FkTW9yZUJ1dHRvbiIsInByb3BzIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJyZXN1bHRzIiwibGVuZ3RoIiwiZGlzcGxheSIsImZsaXBMb2FkaW5nU3RhdGUiLCJsb2FkTW9yZVJlc3VsdHMiLCJzZXRQYXJhbXMiLCJwYXJhbXMiLCJvZmZzZXQiLCJub3dMb2FkaW5nSWNvbiIsImxvYWRNb3JlSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxXQUFXLEdBQUc7QUFDakJDLE9BQUssRUFBRSxNQURVO0FBRWpCQyxpQkFBZSxFQUFFLFNBRkE7QUFHakJDLFFBQU0sRUFBRSxPQUhTO0FBSWpCQyxRQUFNLEVBQUUsTUFKUztBQUtqQkMsVUFBUSxFQUFFO0FBTE8sQ0FBbEI7QUFRQSxJQUFNQyxRQUFRLEdBQUc7QUFDaEJMLE9BQUssRUFBRTtBQURTLENBQWpCO0FBSUEsSUFBTU0sU0FBUyxHQUFHLEVBQWxCOztBQUVBLFNBQVNDLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsS0FBRCxDQURkO0FBQUEsTUFDdEJDLFNBRHNCO0FBQUEsTUFDWEMsWUFEVzs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxJQUFELENBRmQ7QUFBQSxNQUV0QkcsU0FGc0I7QUFBQSxNQUVYQyxZQUZXOztBQUc5QixNQUFJTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsTUFBZCxJQUF3QixDQUE1QixFQUErQjtBQUM5QkYsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQTs7QUFDRGQsYUFBVyxtQ0FBT0EsV0FBUDtBQUFvQmlCLFdBQU8sRUFBRUosU0FBUyxHQUFHLE9BQUgsR0FBYTtBQUFuRCxJQUFYOztBQUVBLFdBQVNLLGdCQUFULEdBQTRCO0FBQUVOLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQTBCOztBQUV4RCxXQUFTUSxlQUFULEdBQTJCO0FBQzFCVixTQUFLLENBQUNXLFNBQU4saUNBQ0lYLEtBQUssQ0FBQ1ksTUFEVjtBQUVDQyxZQUFNLEVBQUViLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxNQUFkLEdBQXVCVDtBQUZoQztBQUlBOztBQUNELFNBQ0M7QUFDQyxTQUFLLEVBQUVQLFdBRFI7QUFFQyxXQUFPLEVBQUVtQixlQUZWO0FBR0MsZ0JBQVksRUFBRSx3QkFBTTtBQUNuQkEscUJBQWU7QUFDZkQsc0JBQWdCO0FBQ2hCLEtBTkY7QUFPQyxnQkFBWSxFQUFFQSxnQkFQZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0M7QUFDQyxTQUFLLEVBQUVaLFFBRFI7QUFFQyxPQUFHLEVBQUVLLFNBQVMsR0FBR1ksNkZBQUgsR0FBb0JDLG9GQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEQsQ0FERDtBQWdCQTs7R0FoQ1FoQixjOztLQUFBQSxjO0FBa0NNQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9hZE1vcmVCdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZE1vcmVJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbm1vbnN0ci1hcnJvdy1kb3duLXRoaW4uc3ZnJ1xuaW1wb3J0IG5vd0xvYWRpbmdJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbm1vbnN0ci1tZW51LWRvdC1ob3Jpem9udGFsLXRoaW4uc3ZnJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxubGV0IGJ1dHRvblN0eWxlID0ge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0Jyxcblx0aGVpZ2h0OiAnMTByZW0nLFxuXHRib3JkZXI6ICdub25lJyxcblx0Zm9udFNpemU6ICcycmVtJ1xufVxuXG5jb25zdCBpbWdTdHlsZSA9IHtcblx0d2lkdGg6ICcxLjI1ZW0nXG59XG5cbmNvbnN0IG1heE9mZnNldCA9IDEwXG5cbmZ1bmN0aW9uIExvYWRNb3JlQnV0dG9uKHByb3BzKSB7XG5cdGNvbnN0IFsgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbIGlzVmlzaWJsZSwgc2V0SXNWaXNpYmxlIF0gPSB1c2VTdGF0ZSh0cnVlKVxuXHRpZiAocHJvcHMucmVzdWx0cy5sZW5ndGggPj0gMykge1xuXHRcdHNldElzVmlzaWJsZShmYWxzZSlcblx0fVxuXHRidXR0b25TdHlsZSA9IHsuLi5idXR0b25TdHlsZSwgZGlzcGxheTogaXNWaXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ31cblxuXHRmdW5jdGlvbiBmbGlwTG9hZGluZ1N0YXRlKCkgeyBzZXRJc0xvYWRpbmcoIWlzTG9hZGluZykgfVxuXG5cdGZ1bmN0aW9uIGxvYWRNb3JlUmVzdWx0cygpIHtcblx0XHRwcm9wcy5zZXRQYXJhbXMoe1xuXHRcdFx0Li4ucHJvcHMucGFyYW1zLFxuXHRcdFx0b2Zmc2V0OiBwcm9wcy5yZXN1bHRzLmxlbmd0aCArIG1heE9mZnNldFxuXHRcdH0pXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRzdHlsZT17YnV0dG9uU3R5bGV9XG5cdFx0XHRvbkNsaWNrPXtsb2FkTW9yZVJlc3VsdHN9XG5cdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IHtcblx0XHRcdFx0bG9hZE1vcmVSZXN1bHRzKClcblx0XHRcdFx0ZmxpcExvYWRpbmdTdGF0ZSgpXG5cdFx0XHR9fVxuXHRcdFx0b25Nb3VzZUxlYXZlPXtmbGlwTG9hZGluZ1N0YXRlfVxuXHRcdD5cblx0XHRcdDxpbWdcblx0XHRcdFx0c3R5bGU9e2ltZ1N0eWxlfVxuXHRcdFx0XHRzcmM9e2lzTG9hZGluZyA/IG5vd0xvYWRpbmdJY29uIDogbG9hZE1vcmVJY29ufVxuXHRcdFx0Lz5cblx0XHQ8L2J1dHRvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkTW9yZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoadMoreButton.js\n");

/***/ })

})