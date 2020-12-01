webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_jan_Documents_Programming_JavaScript_KindleClippings_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/jan/Documents/Programming/JavaScript/KindleClippings/app/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileName = _useState[0],\n      setFileName = _useState[1]; // const [fileContent, setFileContent] = useState<string | null>(null);\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileParsedContent = _useState2[0],\n      setFileParsedContent = _useState2[1];\n\n  var parseFile = function parseFile(file) {\n    var splittedFile = file.split(/\\r?\\n/g); // console.log(splittedFile.length);\n\n    var Notes = new Map();\n    var blockCounter = 0;\n\n    while (blockCounter < Math.floor(splittedFile.length / 5)) {\n      // parse block of 5 lines\n      var title = splittedFile[blockCounter * 5 + 0];\n      var clippingType = splittedFile[blockCounter * 5 + 1];\n      var Note = splittedFile[blockCounter * 5 + 3];\n      blockCounter += 1;\n\n      if (clippingType.includes('Highlight')) {\n        // add block to dict\n        if (Notes.has(title)) {\n          var oldNote = Notes.get(title);\n          var newNote = \"\".concat(oldNote, \"\\n\\n\").concat(Note);\n          Notes.set(title, newNote);\n        } else {\n          Notes.set(title, Note);\n        }\n      }\n    }\n\n    return Notes;\n  };\n\n  var handleFileUpload = function handleFileUpload(e) {\n    var target = e.target;\n    var file = target.files[0];\n    var reader = new FileReader();\n    reader.readAsText(file);\n\n    reader.onload = function () {\n      // setFileContent(reader.result as string);\n      setFileParsedContent(parseFile(reader.result));\n    };\n\n    reader.onerror = function () {\n      console.log(reader.error);\n    };\n\n    setFileName(file.name);\n  };\n\n  var printNoteMap = function printNoteMap(key, value) {\n    console.log('in printnoteMap');\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"mt-4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n        className: \"text-center text-xl\",\n        children: key\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"whitespace-pre-line\",\n        children: value\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Kindle Clippings Parser\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"max-w-3xl mx-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          className: \"mt-8 text-2xl text-center\",\n          children: \"Welcome friends of LibGen!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"mt-8\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n            type: \"file\",\n            accept: \".txt\",\n            onChange: handleFileUpload\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this), \"Uploaded File: \", fileName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              children: \"File: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              children: \"Parsed File:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, this), fileParsedContent ? Object(_Users_jan_Documents_Programming_JavaScript_KindleClippings_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fileParsedContent.keys()).map(function (noteTitle) {\n              return printNoteMap(noteTitle, fileParsedContent.get(noteTitle));\n            }) : null]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"footer\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"Lz4zSOtERM8Jw1PaFvGErwniXaI=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImZpbGVQYXJzZWRDb250ZW50Iiwic2V0RmlsZVBhcnNlZENvbnRlbnQiLCJwYXJzZUZpbGUiLCJmaWxlIiwic3BsaXR0ZWRGaWxlIiwic3BsaXQiLCJOb3RlcyIsIk1hcCIsImJsb2NrQ291bnRlciIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsInRpdGxlIiwiY2xpcHBpbmdUeXBlIiwiTm90ZSIsImluY2x1ZGVzIiwiaGFzIiwib2xkTm90ZSIsImdldCIsIm5ld05vdGUiLCJzZXQiLCJoYW5kbGVGaWxlVXBsb2FkIiwiZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc1RleHQiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibmFtZSIsInByaW50Tm90ZU1hcCIsImtleSIsInZhbHVlIiwia2V5cyIsIm1hcCIsIm5vdGVUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FEWDtBQUFBLE1BQ3RCQyxRQURzQjtBQUFBLE1BQ1pDLFdBRFksaUJBRTdCOzs7QUFGNkIsbUJBR3FCRixzREFBUSxDQUdoRCxJQUhnRCxDQUg3QjtBQUFBLE1BR3RCRyxpQkFIc0I7QUFBQSxNQUdIQyxvQkFIRzs7QUFRN0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFrQjtBQUNsQyxRQUFNQyxZQUFZLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXLFFBQVgsQ0FBckIsQ0FEa0MsQ0FFbEM7O0FBQ0EsUUFBTUMsS0FBSyxHQUFHLElBQUlDLEdBQUosRUFB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QyxNQUExQjtBQUFpQyxvQkFBUSxFQUFFaEI7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixxQkFFa0J2QixRQUZsQixlQUdFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBT0U7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVHRSxpQkFBaUIsR0FDZCx5S0FBSUEsaUJBQWlCLENBQUNzQyxJQUFsQixFQUFKLEVBQThCQyxHQUE5QixDQUFrQyxVQUFDQyxTQUFELEVBQWU7QUFDL0MscUJBQU9MLFlBQVksQ0FDakJLLFNBRGlCLEVBRWpCeEMsaUJBQWlCLENBQUNrQixHQUFsQixDQUFzQnNCLFNBQXRCLENBRmlCLENBQW5CO0FBSUQsYUFMRCxDQURjLEdBT2QsSUFUTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUNEOztHQWxHdUI1QyxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgLy8gY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ZpbGVQYXJzZWRDb250ZW50LCBzZXRGaWxlUGFyc2VkQ29udGVudF0gPSB1c2VTdGF0ZTxNYXA8XG4gICAgYW55LFxuICAgIGFueVxuICA+IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgcGFyc2VGaWxlID0gKGZpbGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHNwbGl0dGVkRmlsZSA9IGZpbGUuc3BsaXQoL1xccj9cXG4vZyk7XG4gICAgLy8gY29uc29sZS5sb2coc3BsaXR0ZWRGaWxlLmxlbmd0aCk7XG4gICAgY29uc3QgTm90ZXMgPSBuZXcgTWFwKCk7XG4gICAgbGV0IGJsb2NrQ291bnRlciA9IDA7XG4gICAgd2hpbGUgKGJsb2NrQ291bnRlciA8IE1hdGguZmxvb3Ioc3BsaXR0ZWRGaWxlLmxlbmd0aCAvIDUpKSB7XG4gICAgICAvLyBwYXJzZSBibG9jayBvZiA1IGxpbmVzXG4gICAgICBjb25zdCB0aXRsZSA9IHNwbGl0dGVkRmlsZVtibG9ja0NvdW50ZXIgKiA1ICsgMF07XG4gICAgICBjb25zdCBjbGlwcGluZ1R5cGUgPSBzcGxpdHRlZEZpbGVbYmxvY2tDb3VudGVyICogNSArIDFdO1xuICAgICAgY29uc3QgTm90ZSA9IHNwbGl0dGVkRmlsZVtibG9ja0NvdW50ZXIgKiA1ICsgM107XG4gICAgICBibG9ja0NvdW50ZXIgKz0gMTtcblxuICAgICAgaWYgKGNsaXBwaW5nVHlwZS5pbmNsdWRlcygnSGlnaGxpZ2h0JykpIHtcbiAgICAgICAgLy8gYWRkIGJsb2NrIHRvIGRpY3RcbiAgICAgICAgaWYgKE5vdGVzLmhhcyh0aXRsZSkpIHtcbiAgICAgICAgICBjb25zdCBvbGROb3RlID0gTm90ZXMuZ2V0KHRpdGxlKTtcbiAgICAgICAgICBjb25zdCBuZXdOb3RlID0gYCR7b2xkTm90ZX1cXG5cXG4ke05vdGV9YDtcbiAgICAgICAgICBOb3Rlcy5zZXQodGl0bGUsIG5ld05vdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE5vdGVzLnNldCh0aXRsZSwgTm90ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE5vdGVzO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGZpbGU6IEZpbGUgPSAodGFyZ2V0LmZpbGVzIGFzIEZpbGVMaXN0KVswXTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBzZXRGaWxlQ29udGVudChyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICBzZXRGaWxlUGFyc2VkQ29udGVudChwYXJzZUZpbGUocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpKTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZWFkZXIuZXJyb3IpO1xuICAgIH07XG5cbiAgICBzZXRGaWxlTmFtZShmaWxlLm5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IHByaW50Tm90ZU1hcCA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbiBwcmludG5vdGVNYXAnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsXCI+e2tleX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLWxpbmVcIj57dmFsdWV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+S2luZGxlIENsaXBwaW5ncyBQYXJzZXI8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC04IHRleHQtMnhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBXZWxjb21lIGZyaWVuZHMgb2YgTGliR2VuIVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIudHh0XCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVVcGxvYWR9IC8+XG4gICAgICAgICAgICBVcGxvYWRlZCBGaWxlOiB7ZmlsZU5hbWV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgPGgyPkZpbGU6IDwvaDI+XG4gICAgICAgICAgICAgIHsvKiB7ZmlsZUNvbnRlbnR9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgPGgyPlBhcnNlZCBGaWxlOjwvaDI+XG4gICAgICAgICAgICAgIHtmaWxlUGFyc2VkQ29udGVudFxuICAgICAgICAgICAgICAgID8gWy4uLmZpbGVQYXJzZWRDb250ZW50LmtleXMoKV0ubWFwKChub3RlVGl0bGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByaW50Tm90ZU1hcChcbiAgICAgICAgICAgICAgICAgICAgICBub3RlVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZVBhcnNlZENvbnRlbnQuZ2V0KG5vdGVUaXRsZSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})