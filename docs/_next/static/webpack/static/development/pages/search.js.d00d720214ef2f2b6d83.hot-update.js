webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_SearchStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchStats */ \"./components/SearchStats.js\");\n/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchResults */ \"./components/SearchResults.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/chris/Desktop/git-repos/akeelo-web/pages/search.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\nfunction doSearch(_x) {\n  return _doSearch.apply(this, arguments);\n}\n\nfunction _doSearch() {\n  _doSearch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(urlQueryParams) {\n    var q, offset, sanitizedQuery, endpoint, payload, response, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            q = urlQueryParams.q, offset = urlQueryParams.offset;\n            sanitizedQuery = q.replace(/[^\\w\\s]/gi, '');\n            endpoint = 'https://share.osf.io/api/v2/search/creativeworks/_search';\n            payload = {\n              'query': {\n                'bool': {\n                  'must': {\n                    'query_string': {\n                      'query': sanitizedQuery\n                    }\n                  },\n                  'filter': [{\n                    'terms': {\n                      'type': ['article', 'conference paper', 'dissertation', 'preprint', 'publication', 'registration', 'report', 'thesis']\n                    }\n                  }]\n                }\n              },\n              'from': offset\n            };\n            _context.next = 6;\n            return fetch(endpoint, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify(payload)\n            });\n\n          case 6:\n            response = _context.sent;\n            _context.next = 9;\n            return response.json();\n\n          case 9:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _doSearch.apply(this, arguments);\n}\n\nfunction getEncodedParams(params) {\n  var encoded = {};\n  Object.keys(params).forEach(function (k) {\n    return encoded[k] = encodeURI(params[k]);\n  });\n  return encoded;\n}\n\nfunction getDecodedParams(params) {\n  var decoded = {};\n  Object.keys(params).forEach(function (k) {\n    return decoded[k] = decodeURI(params[k]);\n  });\n  return decoded;\n}\n\nfunction SearchPage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var decodedQueryParams = getDecodedParams(router.query);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(decodedQueryParams),\n      params = _useState[0],\n      setParams = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      totalResults = _useState2[0],\n      setTotalResults = _useState2[1]; // TOTAL number of hits\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      results = _useState3[0],\n      setResults = _useState3[1];\n\n  function updatePage() {\n    doSearch(params).then(function (data) {\n      setTotalResults(data.hits.total.toLocaleString()); // update results stats\n\n      return data.hits.hits.map(function (item) {\n        return item._source;\n      }); // return search results\n    }).then(function (newResults) {\n      return setResults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(results), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newResults)));\n    }); // update search results\n\n    var encodedParams = getEncodedParams(params);\n    router.push({\n      pathname: '/search',\n      query: encodedParams\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // if no query parameters, do nothing, else, perform search then render\n    // prevent page from breaking\n    if (Object.getOwnPropertyNames(params).length === 0) {\n      return;\n    } else {\n      updatePage();\n    }\n  }, [params]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    params: params,\n    setParams: setParams,\n    setResults: setResults,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 4\n    }\n  }), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"main-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 5\n    }\n  }, __jsx(_components_SearchStats__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    totalResults: totalResults,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 6\n    }\n  }), __jsx(_components_SearchResults__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    results: results,\n    params: params,\n    setParams: setParams,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_s(SearchPage, \"MXJGJ6yGQGPPcM9SFoqYWpQwLU8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = SearchPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWFyY2guanM/NzhlOCJdLCJuYW1lcyI6WyJkb1NlYXJjaCIsInVybFF1ZXJ5UGFyYW1zIiwicSIsIm9mZnNldCIsInNhbml0aXplZFF1ZXJ5IiwicmVwbGFjZSIsImVuZHBvaW50IiwicGF5bG9hZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldEVuY29kZWRQYXJhbXMiLCJwYXJhbXMiLCJlbmNvZGVkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwiZW5jb2RlVVJJIiwiZ2V0RGVjb2RlZFBhcmFtcyIsImRlY29kZWQiLCJkZWNvZGVVUkkiLCJTZWFyY2hQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkZWNvZGVkUXVlcnlQYXJhbXMiLCJxdWVyeSIsInVzZVN0YXRlIiwic2V0UGFyYW1zIiwidG90YWxSZXN1bHRzIiwic2V0VG90YWxSZXN1bHRzIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ1cGRhdGVQYWdlIiwidGhlbiIsImhpdHMiLCJ0b3RhbCIsInRvTG9jYWxlU3RyaW5nIiwibWFwIiwiaXRlbSIsIl9zb3VyY2UiLCJuZXdSZXN1bHRzIiwiZW5jb2RlZFBhcmFtcyIsInB1c2giLCJwYXRobmFtZSIsInVzZUVmZmVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NBRWVBLFE7Ozs7OytMQUFmLGlCQUF3QkMsY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGFBRFIsR0FDcUJELGNBRHJCLENBQ1FDLENBRFIsRUFDV0MsTUFEWCxHQUNxQkYsY0FEckIsQ0FDV0UsTUFEWDtBQUVPQywwQkFGUCxHQUV3QkYsQ0FBQyxDQUFDRyxPQUFGLENBQVUs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IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBTZWFyY2hTdGF0cyBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaFN0YXRzJ1xuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5hc3luYyBmdW5jdGlvbiBkb1NlYXJjaCh1cmxRdWVyeVBhcmFtcykge1xuXHRjb25zdCB7cSwgb2Zmc2V0fSA9IHVybFF1ZXJ5UGFyYW1zXG5cdGNvbnN0IHNhbml0aXplZFF1ZXJ5ID0gcS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcnKVxuXHRjb25zdCBlbmRwb2ludCA9ICdodHRwczovL3NoYXJlLm9zZi5pby9hcGkvdjIvc2VhcmNoL2NyZWF0aXZld29ya3MvX3NlYXJjaCdcblx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHQncXVlcnknOiB7XG5cdFx0XHQnYm9vbCc6IHtcblx0XHRcdFx0J211c3QnOiB7XG5cdFx0XHRcdFx0J3F1ZXJ5X3N0cmluZyc6IHtcblx0XHRcdFx0XHRcdCdxdWVyeSc6IHNhbml0aXplZFF1ZXJ5XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2ZpbHRlcic6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQndGVybXMnOiB7XG5cdFx0XHRcdFx0XHRcdCd0eXBlJzogW1xuXHRcdFx0XHRcdFx0XHRcdCdhcnRpY2xlJyxcblx0XHRcdFx0XHRcdFx0XHQnY29uZmVyZW5jZSBwYXBlcicsXG5cdFx0XHRcdFx0XHRcdFx0J2Rpc3NlcnRhdGlvbicsXG5cdFx0XHRcdFx0XHRcdFx0J3ByZXByaW50Jyxcblx0XHRcdFx0XHRcdFx0XHQncHVibGljYXRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdyZWdpc3RyYXRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdyZXBvcnQnLFxuXHRcdFx0XHRcdFx0XHRcdCd0aGVzaXMnXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2Zyb20nOiBvZmZzZXRcblx0fVxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH0sXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcblx0fSlcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXHRyZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBnZXRFbmNvZGVkUGFyYW1zKHBhcmFtcykge1xuXHRsZXQgZW5jb2RlZCA9IHt9XG5cdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrID0+IGVuY29kZWRba10gPSBlbmNvZGVVUkkocGFyYW1zW2tdKSlcblx0cmV0dXJuIGVuY29kZWRcbn1cblxuZnVuY3Rpb24gZ2V0RGVjb2RlZFBhcmFtcyhwYXJhbXMpIHtcblx0bGV0IGRlY29kZWQgPSB7fVxuXHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goayA9PiBkZWNvZGVkW2tdID0gZGVjb2RlVVJJKHBhcmFtc1trXSkpXG5cdHJldHVybiBkZWNvZGVkXG59XG5cbmZ1bmN0aW9uIFNlYXJjaFBhZ2UocHJvcHMpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgZGVjb2RlZFF1ZXJ5UGFyYW1zID0gZ2V0RGVjb2RlZFBhcmFtcyhyb3V0ZXIucXVlcnkpXG5cblx0Y29uc3QgWyBwYXJhbXMsIHNldFBhcmFtcyBdID0gdXNlU3RhdGUoZGVjb2RlZFF1ZXJ5UGFyYW1zKVxuXHRjb25zdCBbIHRvdGFsUmVzdWx0cywgc2V0VG90YWxSZXN1bHRzIF0gPSB1c2VTdGF0ZSgpICAvLyBUT1RBTCBudW1iZXIgb2YgaGl0c1xuXHRjb25zdCBbIHJlc3VsdHMsIHNldFJlc3VsdHMgXSA9IHVzZVN0YXRlKFtdKVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVBhZ2UoKSB7XG5cdFx0ZG9TZWFyY2gocGFyYW1zKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHNldFRvdGFsUmVzdWx0cyhkYXRhLmhpdHMudG90YWwudG9Mb2NhbGVTdHJpbmcoKSkgIC8vIHVwZGF0ZSByZXN1bHRzIHN0YXRzXG5cdFx0XHRcdHJldHVybiBkYXRhLmhpdHMuaGl0cy5tYXAoaXRlbSA9PiBpdGVtLl9zb3VyY2UpICAvLyByZXR1cm4gc2VhcmNoIHJlc3VsdHNcblx0XHRcdH0pXG5cdFx0XHQudGhlbihuZXdSZXN1bHRzID0+IHNldFJlc3VsdHMoWy4uLnJlc3VsdHMsIC4uLm5ld1Jlc3VsdHNdKSkgIC8vIHVwZGF0ZSBzZWFyY2ggcmVzdWx0c1xuXG5cdFx0Y29uc3QgZW5jb2RlZFBhcmFtcyA9IGdldEVuY29kZWRQYXJhbXMocGFyYW1zKVxuXHRcdHJvdXRlci5wdXNoKHtwYXRobmFtZTogJy9zZWFyY2gnLCBxdWVyeTogZW5jb2RlZFBhcmFtc30pXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIGlmIG5vIHF1ZXJ5IHBhcmFtZXRlcnMsIGRvIG5vdGhpbmcsIGVsc2UsIHBlcmZvcm0gc2VhcmNoIHRoZW4gcmVuZGVyXG5cdFx0Ly8gcHJldmVudCBwYWdlIGZyb20gYnJlYWtpbmdcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocGFyYW1zKS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR1cGRhdGVQYWdlKClcblx0XHR9XG5cdH0sIFtwYXJhbXNdKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXJcblx0XHRcdFx0cGFyYW1zPXtwYXJhbXN9XG5cdFx0XHRcdHNldFBhcmFtcz17c2V0UGFyYW1zfVxuXHRcdFx0XHRzZXRSZXN1bHRzPXtzZXRSZXN1bHRzfVxuXHRcdFx0Lz5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbi1pbm5lcic+XG5cdFx0XHRcdFx0PFNlYXJjaFN0YXRzIHRvdGFsUmVzdWx0cz17dG90YWxSZXN1bHRzfSAvPlxuXHRcdFx0XHRcdDxTZWFyY2hSZXN1bHRzXG5cdFx0XHRcdFx0XHRyZXN1bHRzPXtyZXN1bHRzfVxuXHRcdFx0XHRcdFx0cGFyYW1zPXtwYXJhbXN9XG5cdFx0XHRcdFx0XHRzZXRQYXJhbXM9e3NldFBhcmFtc31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})