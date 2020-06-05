webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_SearchStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchStats */ \"./components/SearchStats.js\");\n/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchResults */ \"./components/SearchResults.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/chris/Desktop/git-repos/akeelo-web/pages/search.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\nfunction doSearch(_x) {\n  return _doSearch.apply(this, arguments);\n}\n\nfunction _doSearch() {\n  _doSearch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(urlQueryParams) {\n    var q, offset, sanitizedQuery, endpoint, payload, response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            q = urlQueryParams.q, offset = urlQueryParams.offset;\n            sanitizedQuery = q.replace(/\\W/g, '');\n            endpoint = 'https://share.osf.io/api/v2/search/creativeworks/_search';\n            payload = {\n              'query': {\n                'bool': {\n                  'must': {\n                    'query_string': {\n                      'query': sanitizedQuery\n                    }\n                  },\n                  'filter': [{\n                    'terms': {\n                      'type': ['article', 'conference paper', 'dissertation', 'preprint', 'publication', 'registration', 'report', 'thesis']\n                    }\n                  }]\n                }\n              },\n              'from': offset\n            };\n            _context.next = 6;\n            return fetch(endpoint, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify(payload)\n            });\n\n          case 6:\n            response = _context.sent;\n            _context.next = 9;\n            return response.json();\n\n          case 9:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _doSearch.apply(this, arguments);\n}\n\nfunction getEncodedParams(params) {\n  var encoded = {};\n  Object.keys(params).forEach(function (k) {\n    return encoded[k] = encodeURI(params[k]);\n  });\n  return encoded;\n}\n\nfunction getDecodedParams(params) {\n  var decoded = {};\n  Object.keys(params).forEach(function (k) {\n    return decoded[k] = decodeURI(params[k]);\n  });\n  return decoded;\n}\n\nfunction SearchPage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(router.query),\n      params = _useState[0],\n      setParams = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      totalResults = _useState2[0],\n      setTotalResults = _useState2[1]; // TOTAL number of hits\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      results = _useState3[0],\n      setResults = _useState3[1];\n\n  function updatePage() {\n    doSearch(params).then(function (data) {\n      setTotalResults(data.hits.total.toLocaleString()); // update results stats\n\n      return data.hits.hits.map(function (item) {\n        return item._source;\n      }); // return search results\n    }).then(function (newResults) {\n      return setResults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(results), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newResults)));\n    }); // update search results\n\n    var encodedParams = getEncodedParams(params);\n    router.push({\n      pathname: '/search',\n      query: encodedParams\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // if no query parameters, do nothing, else, perform search then render\n    // prevent page from breaking\n    if (Object.getOwnPropertyNames(params).length === 0) {\n      return;\n    } else {\n      updatePage();\n    }\n  }, [params]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    params: params,\n    setParams: setParams,\n    setResults: setResults,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 4\n    }\n  }), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"main-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 5\n    }\n  }, __jsx(_components_SearchStats__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    totalResults: totalResults,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 6\n    }\n  }), __jsx(_components_SearchResults__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    results: results,\n    params: params,\n    setParams: setParams,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_s(SearchPage, \"EKRyQu5axCsIVlL9Hm578fiHiYw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = SearchPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWFyY2guanM/NzhlOCJdLCJuYW1lcyI6WyJkb1NlYXJjaCIsInVybFF1ZXJ5UGFyYW1zIiwicSIsIm9mZnNldCIsInNhbml0aXplZFF1ZXJ5IiwicmVwbGFjZSIsImVuZHBvaW50IiwicGF5bG9hZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldEVuY29kZWRQYXJhbXMiLCJwYXJhbXMiLCJlbmNvZGVkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwiZW5jb2RlVVJJIiwiZ2V0RGVjb2RlZFBhcmFtcyIsImRlY29kZWQiLCJkZWNvZGVVUkkiLCJTZWFyY2hQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UGFyYW1zIiwidG90YWxSZXN1bHRzIiwic2V0VG90YWxSZXN1bHRzIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ1cGRhdGVQYWdlIiwidGhlbiIsImhpdHMiLCJ0b3RhbCIsInRvTG9jYWxlU3RyaW5nIiwibWFwIiwiaXRlbSIsIl9zb3VyY2UiLCJuZXdSZXN1bHRzIiwiZW5jb2RlZFBhcmFtcyIsInB1c2giLCJwYXRobmFtZSIsInVzZUVmZmVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztTQVNlQSxROzs7OzsrTEFBZixpQkFBd0JDLGNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxhQURSLEdBQ3FCRCxjQURyQixDQUNRQyxDQURSLEVBQ1dDLE1BRFgsR0FDcUJGLGNBRHJCLENBQ1dFLE1BRFg7QUFFT0MsMEJBRlAsR0FFd0JGLENBQUMsQ0FBQ0csT0FBRixDQUFVLEtBQVYsRUFBaUIsRUFBakIsQ0FG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QUFnQixDQUFDQyxNQUFELENBQXRDO0FBQ0FZLFVBQU0sQ0FBQ21CLElBQVAsQ0FBWTtBQUFDQyxjQUFRLEVBQUUsU0FBWDtBQUFzQmpCLFdBQUssRUFBRWU7QUFBN0IsS0FBWjtBQUNBOztBQUVERyx5REFBUyxDQUFDLFlBQU07QUFDZjtBQUNBO0FBQ0EsUUFBSS9CLE1BQU0sQ0FBQ2dDLG1CQUFQLENBQTJCbEMsTUFBM0IsRUFBbUNtQyxNQUFuQyxLQUE4QyxDQUFsRCxFQUFxRDtBQUNwRDtBQUNBLEtBRkQsTUFFTztBQUNOZCxnQkFBVTtBQUNWO0FBQ0QsR0FSUSxFQVFOLENBQUNyQixNQUFELENBUk0sQ0FBVDtBQVVBLFNBQ0MsbUVBQ0MsTUFBQywwREFBRDtBQUNDLFVBQU0sRUFBRUEsTUFEVDtBQUVDLGFBQVMsRUFBRWdCLFNBRlo7QUFHQyxjQUFVLEVBQUVJLFVBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsK0RBQUQ7QUFBYSxnQkFBWSxFQUFFSCxZQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLGlFQUFEO0FBQ0MsV0FBTyxFQUFFRSxPQURWO0FBRUMsVUFBTSxFQUFFbkIsTUFGVDtBQUdDLGFBQVMsRUFBRWdCLFNBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBREQsQ0FORCxDQUREO0FBbUJBOztHQS9DUU4sVTtVQUNPRyxxRDs7O0tBRFBILFU7O0FBaURNQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBTZWFyY2hTdGF0cyBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaFN0YXRzJ1xuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblx0Y29uc3QgdXJsUXVlcnlQYXJhbXMgPSBjb250ZXh0LnF1ZXJ5XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHt1cmxRdWVyeVBhcmFtczogdXJsUXVlcnlQYXJhbXN9IC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvU2VhcmNoKHVybFF1ZXJ5UGFyYW1zKSB7XG5cdGNvbnN0IHtxLCBvZmZzZXR9ID0gdXJsUXVlcnlQYXJhbXNcblx0Y29uc3Qgc2FuaXRpemVkUXVlcnkgPSBxLnJlcGxhY2UoL1xcVy9nLCAnJylcblx0Y29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9zaGFyZS5vc2YuaW8vYXBpL3YyL3NlYXJjaC9jcmVhdGl2ZXdvcmtzL19zZWFyY2gnXG5cdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0J3F1ZXJ5Jzoge1xuXHRcdFx0J2Jvb2wnOiB7XG5cdFx0XHRcdCdtdXN0Jzoge1xuXHRcdFx0XHRcdCdxdWVyeV9zdHJpbmcnOiB7XG5cdFx0XHRcdFx0XHQncXVlcnknOiBzYW5pdGl6ZWRRdWVyeVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdmaWx0ZXInOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J3Rlcm1zJzoge1xuXHRcdFx0XHRcdFx0XHQndHlwZSc6IFtcblx0XHRcdFx0XHRcdFx0XHQnYXJ0aWNsZScsXG5cdFx0XHRcdFx0XHRcdFx0J2NvbmZlcmVuY2UgcGFwZXInLFxuXHRcdFx0XHRcdFx0XHRcdCdkaXNzZXJ0YXRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdwcmVwcmludCcsXG5cdFx0XHRcdFx0XHRcdFx0J3B1YmxpY2F0aW9uJyxcblx0XHRcdFx0XHRcdFx0XHQncmVnaXN0cmF0aW9uJyxcblx0XHRcdFx0XHRcdFx0XHQncmVwb3J0Jyxcblx0XHRcdFx0XHRcdFx0XHQndGhlc2lzJ1xuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdmcm9tJzogb2Zmc2V0XG5cdH1cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9LFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXG5cdH0pXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblx0cmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gZ2V0RW5jb2RlZFBhcmFtcyhwYXJhbXMpIHtcblx0bGV0IGVuY29kZWQgPSB7fVxuXHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goayA9PiBlbmNvZGVkW2tdID0gZW5jb2RlVVJJKHBhcmFtc1trXSkpXG5cdHJldHVybiBlbmNvZGVkXG59XG5cbmZ1bmN0aW9uIGdldERlY29kZWRQYXJhbXMocGFyYW1zKSB7XG5cdGxldCBkZWNvZGVkID0ge31cblx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGsgPT4gZGVjb2RlZFtrXSA9IGRlY29kZVVSSShwYXJhbXNba10pKVxuXHRyZXR1cm4gZGVjb2RlZFxufVxuXG5mdW5jdGlvbiBTZWFyY2hQYWdlKHByb3BzKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IFsgcGFyYW1zLCBzZXRQYXJhbXMgXSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeSlcblx0Y29uc3QgWyB0b3RhbFJlc3VsdHMsIHNldFRvdGFsUmVzdWx0cyBdID0gdXNlU3RhdGUoKSAgLy8gVE9UQUwgbnVtYmVyIG9mIGhpdHNcblx0Y29uc3QgWyByZXN1bHRzLCBzZXRSZXN1bHRzIF0gPSB1c2VTdGF0ZShbXSlcblxuXHRmdW5jdGlvbiB1cGRhdGVQYWdlKCkge1xuXHRcdGRvU2VhcmNoKHBhcmFtcylcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRzZXRUb3RhbFJlc3VsdHMoZGF0YS5oaXRzLnRvdGFsLnRvTG9jYWxlU3RyaW5nKCkpICAvLyB1cGRhdGUgcmVzdWx0cyBzdGF0c1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5oaXRzLmhpdHMubWFwKGl0ZW0gPT4gaXRlbS5fc291cmNlKSAgLy8gcmV0dXJuIHNlYXJjaCByZXN1bHRzXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4obmV3UmVzdWx0cyA9PiBzZXRSZXN1bHRzKFsuLi5yZXN1bHRzLCAuLi5uZXdSZXN1bHRzXSkpICAvLyB1cGRhdGUgc2VhcmNoIHJlc3VsdHNcblxuXHRcdGNvbnN0IGVuY29kZWRQYXJhbXMgPSBnZXRFbmNvZGVkUGFyYW1zKHBhcmFtcylcblx0XHRyb3V0ZXIucHVzaCh7cGF0aG5hbWU6ICcvc2VhcmNoJywgcXVlcnk6IGVuY29kZWRQYXJhbXN9KVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBpZiBubyBxdWVyeSBwYXJhbWV0ZXJzLCBkbyBub3RoaW5nLCBlbHNlLCBwZXJmb3JtIHNlYXJjaCB0aGVuIHJlbmRlclxuXHRcdC8vIHByZXZlbnQgcGFnZSBmcm9tIGJyZWFraW5nXG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHBhcmFtcykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dXBkYXRlUGFnZSgpXG5cdFx0fVxuXHR9LCBbcGFyYW1zXSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZGVyXG5cdFx0XHRcdHBhcmFtcz17cGFyYW1zfVxuXHRcdFx0XHRzZXRQYXJhbXM9e3NldFBhcmFtc31cblx0XHRcdFx0c2V0UmVzdWx0cz17c2V0UmVzdWx0c31cblx0XHRcdC8+XG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4taW5uZXInPlxuXHRcdFx0XHRcdDxTZWFyY2hTdGF0cyB0b3RhbFJlc3VsdHM9e3RvdGFsUmVzdWx0c30gLz5cblx0XHRcdFx0XHQ8U2VhcmNoUmVzdWx0c1xuXHRcdFx0XHRcdFx0cmVzdWx0cz17cmVzdWx0c31cblx0XHRcdFx0XHRcdHBhcmFtcz17cGFyYW1zfVxuXHRcdFx0XHRcdFx0c2V0UGFyYW1zPXtzZXRQYXJhbXN9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})