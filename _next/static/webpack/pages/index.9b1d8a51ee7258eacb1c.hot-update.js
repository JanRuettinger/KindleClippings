webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/jan/Documents/Programming/JavaScript/KindleClippings/app/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      fileName = _useState[0],\n      setFileName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      fileContent = _useState2[0],\n      setFileContent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      fileParsedContent = _useState3[0],\n      setFileParsedContent = _useState3[1];\n\n  var parseFile = function parseFile(file) {\n    var splittedFile = file.split(/\\r?\\n/g);\n    console.log(splittedFile.length);\n    var lineCounter = 0;\n\n    while (lineCounter < splittedFile.length) {\n      // parse block of 5 lines\n      var block = {};\n\n      for (var blockLineCounter = 0; blockLineCounter < 5; blockLineCounter += 1) {\n        var line = splittedFile[lineCounter];\n      } // parase\n\n    }\n\n    return 'Hi';\n  };\n\n  var handleFileUpload = function handleFileUpload(e) {\n    var target = e.target;\n    var file = target.files[0];\n    var reader = new FileReader();\n    reader.readAsText(file);\n\n    reader.onload = function () {\n      setFileContent(reader.result);\n      setFileParsedContent(parseFile(reader.result));\n    };\n\n    reader.onerror = function () {\n      console.log(reader.error);\n    };\n\n    setFileName(file.name);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Kindle Clippings Parser\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"max-w-3xl mx-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"mt-8 text-2xl text-center\",\n          children: \"Welcome friends of LibGen!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"mt-8\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"file\",\n            accept: \".txt\",\n            onChange: handleFileUpload\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, this), \"Uploaded File: \", fileName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"File: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, this), fileContent]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Parsed File:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, this), fileParsedContent]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"KJwC9/zJ2Oc56+R+7F+dLzKSXj4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImZpbGVDb250ZW50Iiwic2V0RmlsZUNvbnRlbnQiLCJmaWxlUGFyc2VkQ29udGVudCIsInNldEZpbGVQYXJzZWRDb250ZW50IiwicGFyc2VGaWxlIiwiZmlsZSIsInNwbGl0dGVkRmlsZSIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImxpbmVDb3VudGVyIiwiYmxvY2siLCJibG9ja0xpbmVDb3VudGVyIiwibGluZSIsImhhbmRsZUZpbGVVcGxvYWQiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFnQixJQUFoQixDQURYO0FBQUEsTUFDdEJDLFFBRHNCO0FBQUEsTUFDWkMsV0FEWTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FGakI7QUFBQSxNQUV0QkcsV0FGc0I7QUFBQSxNQUVUQyxjQUZTOztBQUFBLG1CQUdxQkosc0RBQVEsQ0FDeEQsSUFEd0QsQ0FIN0I7QUFBQSxNQUd0QkssaUJBSHNCO0FBQUEsTUFHSEMsb0JBSEc7O0FBTzdCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBa0I7QUFDbEMsUUFBTUMsWUFBWSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxRQUFYLENBQXJCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxZQUFZLENBQUNJLE1BQXpCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQXBCOztBQUNBLFdBQU9BLFdBQVcsR0FBR0wsWUFBWSxDQUFDSSxNQUFsQyxFQUEwQztBQUN4QztBQUNBLFVBQU1FLEtBQUssR0FBRyxFQUFkOztBQUNBLFdBQ0UsSUFBSUMsZ0JBQWdCLEdBQUcsQ0FEekIsRUFFRUEsZ0JBQWdCLEdBQUcsQ0FGckIsRUFHRUEsZ0JBQWdCLElBQUksQ0FIdEIsRUFJRTtBQUNBLFlBQU1DLElBQUksR0FBR1IsWUFBWSxDQUFDSyxXQUFELENBQXpCO0FBQ0QsT0FUdUMsQ0FVeEM7O0FBQ0Q7O0FBQ0QsV0FBTyxJQUFQO0FBQ0QsR0FqQkQ7O0FBbUJBLE1BQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUE0QztBQUNuRSxRQUFNQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBakI7QUFDQSxRQUFNWixJQUFVLEdBQUlZLE1BQU0sQ0FBQ0MsS0FBUixDQUEyQixDQUEzQixDQUFuQjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsVUFBTSxDQUFDRSxVQUFQLENBQWtCaEIsSUFBbEI7O0FBQ0FjLFVBQU0sQ0FBQ0csTUFBUCxHQUFnQixZQUFNO0FBQ3BCckIsb0JBQWMsQ0FBQ2tCLE1BQU0sQ0FBQ0ksTUFBUixDQUFkO0FBQ0FwQiwwQkFBb0IsQ0FBQ0MsU0FBUyxDQUFDZSxNQUFNLENBQUNJLE1BQVIsQ0FBVixDQUFwQjtBQUNELEtBSEQ7O0FBS0FKLFVBQU0sQ0FBQ0ssT0FBUCxHQUFpQixZQUFNO0FBQ3JCaEIsYUFBTyxDQUFDQyxHQUFSLENBQVlVLE1BQU0sQ0FBQ00sS0FBbkI7QUFDRCxLQUZEOztBQUlBMUIsZUFBVyxDQUFDTSxJQUFJLENBQUNxQixJQUFOLENBQVg7QUFDRCxHQWZEOztBQWdCQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBQyx3Q0FBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsMkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGtDQUNFO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFNLEVBQUMsTUFBMUI7QUFBaUMsb0JBQVEsRUFBRVg7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixxQkFFa0JqQixRQUZsQixlQUdFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFR0UsV0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFPRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUdFLGlCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0dBeEV1Qk4sSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtmaWxlQ29udGVudCwgc2V0RmlsZUNvbnRlbnRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtmaWxlUGFyc2VkQ29udGVudCwgc2V0RmlsZVBhcnNlZENvbnRlbnRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IHBhcnNlRmlsZSA9IChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzcGxpdHRlZEZpbGUgPSBmaWxlLnNwbGl0KC9cXHI/XFxuL2cpO1xuICAgIGNvbnNvbGUubG9nKHNwbGl0dGVkRmlsZS5sZW5ndGgpO1xuICAgIGNvbnN0IGxpbmVDb3VudGVyID0gMDtcbiAgICB3aGlsZSAobGluZUNvdW50ZXIgPCBzcGxpdHRlZEZpbGUubGVuZ3RoKSB7XG4gICAgICAvLyBwYXJzZSBibG9jayBvZiA1IGxpbmVzXG4gICAgICBjb25zdCBibG9jayA9IHt9O1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGJsb2NrTGluZUNvdW50ZXIgPSAwO1xuICAgICAgICBibG9ja0xpbmVDb3VudGVyIDwgNTtcbiAgICAgICAgYmxvY2tMaW5lQ291bnRlciArPSAxXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbGluZSA9IHNwbGl0dGVkRmlsZVtsaW5lQ291bnRlcl07XG4gICAgICB9XG4gICAgICAvLyBwYXJhc2VcbiAgICB9XG4gICAgcmV0dXJuICdIaSc7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZVVwbG9hZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZmlsZTogRmlsZSA9ICh0YXJnZXQuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNldEZpbGVDb250ZW50KHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgICAgIHNldEZpbGVQYXJzZWRDb250ZW50KHBhcnNlRmlsZShyZWFkZXIucmVzdWx0IGFzIHN0cmluZykpO1xuICAgIH07XG5cbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlYWRlci5lcnJvcik7XG4gICAgfTtcblxuICAgIHNldEZpbGVOYW1lKGZpbGUubmFtZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+S2luZGxlIENsaXBwaW5ncyBQYXJzZXI8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC04IHRleHQtMnhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBXZWxjb21lIGZyaWVuZHMgb2YgTGliR2VuIVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIudHh0XCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVVcGxvYWR9IC8+XG4gICAgICAgICAgICBVcGxvYWRlZCBGaWxlOiB7ZmlsZU5hbWV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgPGgyPkZpbGU6IDwvaDI+XG4gICAgICAgICAgICAgIHtmaWxlQ29udGVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgIDxoMj5QYXJzZWQgRmlsZTo8L2gyPlxuICAgICAgICAgICAgICB7ZmlsZVBhcnNlZENvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})