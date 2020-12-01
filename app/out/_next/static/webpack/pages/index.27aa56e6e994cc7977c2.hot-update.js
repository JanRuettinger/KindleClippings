webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/jan/Documents/Programming/JavaScript/KindleClippings/app/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      fileName = _useState[0],\n      setFileName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      fileContent = _useState2[0],\n      setFileContent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      fileParsedContent = _useState3[0],\n      setFileParsedContent = _useState3[1];\n\n  var parseFile = function parseFile(file) {\n    return 'Hi';\n  };\n\n  var handleFileUpload = function handleFileUpload(e) {\n    var target = e.target;\n    var file = target.files[0];\n    var reader = new FileReader();\n    reader.readAsText(file);\n\n    reader.onload = function () {\n      setFileContent(reader.result);\n      setFileParsedContent(parseFile(reader.result));\n    };\n\n    reader.onerror = function () {\n      console.log(reader.error);\n    };\n\n    setFileName(file.name);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Kindle Clippings Parser\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"max-w-3xl mx-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"mt-8 text-2xl text-center\",\n          children: \"Welcome friends of LibGen!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"mt-8\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"file\",\n            accept: \".txt\",\n            onChange: handleFileUpload\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this), \"Uploaded File: \", fileName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: fileContent\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Parsed File:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, this), fileParsedContent]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"KJwC9/zJ2Oc56+R+7F+dLzKSXj4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImZpbGVDb250ZW50Iiwic2V0RmlsZUNvbnRlbnQiLCJmaWxlUGFyc2VkQ29udGVudCIsInNldEZpbGVQYXJzZWRDb250ZW50IiwicGFyc2VGaWxlIiwiZmlsZSIsImhhbmRsZUZpbGVVcGxvYWQiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FEWDtBQUFBLE1BQ3RCQyxRQURzQjtBQUFBLE1BQ1pDLFdBRFk7O0FBQUEsbUJBRVNGLHNEQUFRLENBQWdCLElBQWhCLENBRmpCO0FBQUEsTUFFdEJHLFdBRnNCO0FBQUEsTUFFVEMsY0FGUzs7QUFBQSxtQkFHcUJKLHNEQUFRLENBQ3hELElBRHdELENBSDdCO0FBQUEsTUFHdEJLLGlCQUhzQjtBQUFBLE1BR0hDLG9CQUhHOztBQU83QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQWtCO0FBQ2xDLFdBQU8sSUFBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQTRDO0FBQ25FLFFBQU1DLE1BQU0sR0FBR0QsQ0FBQyxDQUFDQyxNQUFqQjtBQUNBLFFBQU1ILElBQVUsR0FBSUcsTUFBTSxDQUFDQyxLQUFSLENBQTJCLENBQTNCLENBQW5CO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjtBQUNBRCxVQUFNLENBQUNFLFVBQVAsQ0FBa0JQLElBQWxCOztBQUNBSyxVQUFNLENBQUNHLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQlosb0JBQWMsQ0FBQ1MsTUFBTSxDQUFDSSxNQUFSLENBQWQ7QUFDQVgsMEJBQW9CLENBQUNDLFNBQVMsQ0FBQ00sTUFBTSxDQUFDSSxNQUFSLENBQVYsQ0FBcEI7QUFDRCxLQUhEOztBQUtBSixVQUFNLENBQUNLLE9BQVAsR0FBaUIsWUFBTTtBQUNyQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlQLE1BQU0sQ0FBQ1EsS0FBbkI7QUFDRCxLQUZEOztBQUlBbkIsZUFBVyxDQUFDTSxJQUFJLENBQUNjLElBQU4sQ0FBWDtBQUNELEdBZkQ7O0FBZ0JBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxFQUFDLHdDQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQywyQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0U7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQU0sRUFBQyxNQUExQjtBQUFpQyxvQkFBUSxFQUFFYjtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLHFCQUVrQlIsUUFGbEIsZUFHRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLHNCQUF1QkU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQUlFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFR0UsaUJBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDs7R0F0RHVCTixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ZpbGVQYXJzZWRDb250ZW50LCBzZXRGaWxlUGFyc2VkQ29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihcbiAgICBudWxsXG4gICk7XG5cbiAgY29uc3QgcGFyc2VGaWxlID0gKGZpbGU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAnSGknO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGZpbGU6IEZpbGUgPSAodGFyZ2V0LmZpbGVzIGFzIEZpbGVMaXN0KVswXTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRGaWxlQ29udGVudChyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICBzZXRGaWxlUGFyc2VkQ29udGVudChwYXJzZUZpbGUocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpKTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZWFkZXIuZXJyb3IpO1xuICAgIH07XG5cbiAgICBzZXRGaWxlTmFtZShmaWxlLm5hbWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPktpbmRsZSBDbGlwcGluZ3MgUGFyc2VyPC90aXRsZT5cbiAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4gKi99XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgV2VsY29tZSBmcmllbmRzIG9mIExpYkdlbiFcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLnR4dFwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlVXBsb2FkfSAvPlxuICAgICAgICAgICAgVXBsb2FkZWQgRmlsZToge2ZpbGVOYW1lfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+e2ZpbGVDb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgIDxoMj5QYXJzZWQgRmlsZTo8L2gyPlxuICAgICAgICAgICAgICB7ZmlsZVBhcnNlZENvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})