webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_jan_Documents_Programming_JavaScript_KindleClippings_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/jan/Documents/Programming/JavaScript/KindleClippings/app/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileName = _useState[0],\n      setFileName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileContent = _useState2[0],\n      setFileContent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileParsedContent = _useState3[0],\n      setFileParsedContent = _useState3[1];\n\n  var parseFile = function parseFile(file) {\n    var splittedFile = file.split(/\\r?\\n/g);\n    console.log(splittedFile.length);\n    var Notes = new Map();\n    var blockCounter = 0;\n\n    while (blockCounter < Math.floor(splittedFile.length / 5)) {\n      // parse block of 5 lines\n      var title = splittedFile[blockCounter * 5 + 0];\n      var clippingType = splittedFile[blockCounter * 5 + 1];\n      var Note = splittedFile[blockCounter * 5 + 3];\n      blockCounter += 1;\n\n      if (clippingType.includes('Highlight')) {\n        // add block to dict\n        if (Notes.has(title)) {\n          var oldNote = Notes.get(title);\n          var newNote = \"\".concat(oldNote, \"\\n\").concat(Note);\n          Notes.set(title, newNote);\n        } else {\n          Notes.set(title, Note);\n        }\n      }\n    }\n\n    return Notes;\n  };\n\n  var handleFileUpload = function handleFileUpload(e) {\n    var target = e.target;\n    var file = target.files[0];\n    var reader = new FileReader();\n    reader.readAsText(file);\n\n    reader.onload = function () {\n      setFileContent(reader.result);\n      setFileParsedContent(parseFile(reader.result));\n    };\n\n    reader.onerror = function () {\n      console.log(reader.error);\n    };\n\n    setFileName(file.name);\n  };\n\n  var printNoteMap = function printNoteMap(key, value) {\n    console.log('in printnoteMap');\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"mt-4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n        className: \"text-center text-xl\",\n        children: key\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"whitespace-pre-line\",\n        children: value\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Kindle Clippings Parser\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"max-w-3xl mx-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          className: \"mt-8 text-2xl text-center\",\n          children: \"Welcome friends of LibGen!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"mt-8\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n            type: \"file\",\n            accept: \".txt\",\n            onChange: handleFileUpload\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this), \"Uploaded File: \", fileName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              children: \"File: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              children: \"Parsed File:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, this), fileParsedContent ? Object(_Users_jan_Documents_Programming_JavaScript_KindleClippings_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fileParsedContent.keys()).map(function (noteTitle) {\n              return printNoteMap(noteTitle, fileParsedContent.get(noteTitle));\n            }) : null]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"footer\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"KJwC9/zJ2Oc56+R+7F+dLzKSXj4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImZpbGVDb250ZW50Iiwic2V0RmlsZUNvbnRlbnQiLCJmaWxlUGFyc2VkQ29udGVudCIsInNldEZpbGVQYXJzZWRDb250ZW50IiwicGFyc2VGaWxlIiwiZmlsZSIsInNwbGl0dGVkRmlsZSIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIk5vdGVzIiwiTWFwIiwiYmxvY2tDb3VudGVyIiwiTWF0aCIsImZsb29yIiwidGl0bGUiLCJjbGlwcGluZ1R5cGUiLCJOb3RlIiwiaW5jbHVkZXMiLCJoYXMiLCJvbGROb3RlIiwiZ2V0IiwibmV3Tm90ZSIsInNldCIsImhhbmRsZUZpbGVVcGxvYWQiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsIm5hbWUiLCJwcmludE5vdGVNYXAiLCJrZXkiLCJ2YWx1ZSIsImtleXMiLCJtYXAiLCJub3RlVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQWdCLElBQWhCLENBRFg7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUFBLG1CQUVTRixzREFBUSxDQUFnQixJQUFoQixDQUZqQjtBQUFBLE1BRXRCRyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBQUEsbUJBR3FCSixzREFBUSxDQUdoRCxJQUhnRCxDQUg3QjtBQUFBLE1BR3RCSyxpQkFIc0I7QUFBQSxNQUdIQyxvQkFIRzs7QUFRN0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFrQjtBQUNsQyxRQUFN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QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLDJCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDRTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBTSxFQUFDLE1BQTFCO0FBQWlDLG9CQUFRLEVBQUVkO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYscUJBRWtCM0IsUUFGbEIsZUFHRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQU9FO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFR0ksaUJBQWlCLEdBQ2QseUtBQUlBLGlCQUFpQixDQUFDc0MsSUFBbEIsRUFBSixFQUE4QkMsR0FBOUIsQ0FBa0MsVUFBQ0MsU0FBRCxFQUFlO0FBQy9DLHFCQUFPTCxZQUFZLENBQ2pCSyxTQURpQixFQUVqQnhDLGlCQUFpQixDQUFDb0IsR0FBbEIsQ0FBc0JvQixTQUF0QixDQUZpQixDQUFuQjtBQUlELGFBTEQsQ0FEYyxHQU9kLElBVE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFpQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDs7R0FsR3VCOUMsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtmaWxlQ29udGVudCwgc2V0RmlsZUNvbnRlbnRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtmaWxlUGFyc2VkQ29udGVudCwgc2V0RmlsZVBhcnNlZENvbnRlbnRdID0gdXNlU3RhdGU8TWFwPFxuICAgIGFueSxcbiAgICBhbnlcbiAgPiB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHBhcnNlRmlsZSA9IChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzcGxpdHRlZEZpbGUgPSBmaWxlLnNwbGl0KC9cXHI/XFxuL2cpO1xuICAgIGNvbnNvbGUubG9nKHNwbGl0dGVkRmlsZS5sZW5ndGgpO1xuICAgIGNvbnN0IE5vdGVzID0gbmV3IE1hcCgpO1xuICAgIGxldCBibG9ja0NvdW50ZXIgPSAwO1xuICAgIHdoaWxlIChibG9ja0NvdW50ZXIgPCBNYXRoLmZsb29yKHNwbGl0dGVkRmlsZS5sZW5ndGggLyA1KSkge1xuICAgICAgLy8gcGFyc2UgYmxvY2sgb2YgNSBsaW5lc1xuICAgICAgY29uc3QgdGl0bGUgPSBzcGxpdHRlZEZpbGVbYmxvY2tDb3VudGVyICogNSArIDBdO1xuICAgICAgY29uc3QgY2xpcHBpbmdUeXBlID0gc3BsaXR0ZWRGaWxlW2Jsb2NrQ291bnRlciAqIDUgKyAxXTtcbiAgICAgIGNvbnN0IE5vdGUgPSBzcGxpdHRlZEZpbGVbYmxvY2tDb3VudGVyICogNSArIDNdO1xuICAgICAgYmxvY2tDb3VudGVyICs9IDE7XG5cbiAgICAgIGlmIChjbGlwcGluZ1R5cGUuaW5jbHVkZXMoJ0hpZ2hsaWdodCcpKSB7XG4gICAgICAgIC8vIGFkZCBibG9jayB0byBkaWN0XG4gICAgICAgIGlmIChOb3Rlcy5oYXModGl0bGUpKSB7XG4gICAgICAgICAgY29uc3Qgb2xkTm90ZSA9IE5vdGVzLmdldCh0aXRsZSk7XG4gICAgICAgICAgY29uc3QgbmV3Tm90ZSA9IGAke29sZE5vdGV9XFxuJHtOb3RlfWA7XG4gICAgICAgICAgTm90ZXMuc2V0KHRpdGxlLCBuZXdOb3RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBOb3Rlcy5zZXQodGl0bGUsIE5vdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBOb3RlcztcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBmaWxlOiBGaWxlID0gKHRhcmdldC5maWxlcyBhcyBGaWxlTGlzdClbMF07XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgc2V0RmlsZUNvbnRlbnQocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgICAgc2V0RmlsZVBhcnNlZENvbnRlbnQocGFyc2VGaWxlKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKSk7XG4gICAgfTtcblxuICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVhZGVyLmVycm9yKTtcbiAgICB9O1xuXG4gICAgc2V0RmlsZU5hbWUoZmlsZS5uYW1lKTtcbiAgfTtcblxuICBjb25zdCBwcmludE5vdGVNYXAgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW4gcHJpbnRub3RlTWFwJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC14bFwiPntrZXl9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLXByZS1saW5lXCI+e3ZhbHVlfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPktpbmRsZSBDbGlwcGluZ3MgUGFyc2VyPC90aXRsZT5cbiAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4gKi99XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgV2VsY29tZSBmcmllbmRzIG9mIExpYkdlbiFcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLnR4dFwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlVXBsb2FkfSAvPlxuICAgICAgICAgICAgVXBsb2FkZWQgRmlsZToge2ZpbGVOYW1lfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgIDxoMj5GaWxlOiA8L2gyPlxuICAgICAgICAgICAgICB7Lyoge2ZpbGVDb250ZW50fSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgIDxoMj5QYXJzZWQgRmlsZTo8L2gyPlxuICAgICAgICAgICAgICB7ZmlsZVBhcnNlZENvbnRlbnRcbiAgICAgICAgICAgICAgICA/IFsuLi5maWxlUGFyc2VkQ29udGVudC5rZXlzKCldLm1hcCgobm90ZVRpdGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmludE5vdGVNYXAoXG4gICAgICAgICAgICAgICAgICAgICAgbm90ZVRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVQYXJzZWRDb250ZW50LmdldChub3RlVGl0bGUpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})