webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_jan_Documents_Programming_JavaScript_KindleClippings_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/jan/Documents/Programming/JavaScript/KindleClippings/app/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileName = _useState[0],\n      setFileName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileContent = _useState2[0],\n      setFileContent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileParsedContent = _useState3[0],\n      setFileParsedContent = _useState3[1];\n\n  var parseFile = function parseFile(file) {\n    var splittedFile = file.split(/\\r?\\n/g);\n    console.log(splittedFile.length);\n    var Notes = new Map();\n    var blockCounter = 0;\n\n    while (blockCounter < Math.floor(splittedFile.length / 5)) {\n      // parse block of 5 lines\n      var title = splittedFile[blockCounter * 5 + 0];\n      var clippingType = splittedFile[blockCounter * 5 + 1];\n      var Note = splittedFile[blockCounter * 5 + 3];\n      blockCounter += 1;\n\n      if (clippingType.includes('Highlight')) {\n        // add block to dict\n        if (Notes.has(title)) {\n          var oldNote = Notes.get(title);\n          var newNote = \"\".concat(oldNote, \"\\n\").concat(Note);\n          Notes.set(title, newNote);\n        } else {\n          Notes.set(title, Note);\n        }\n      }\n    }\n\n    return Notes;\n  };\n\n  var handleFileUpload = function handleFileUpload(e) {\n    var target = e.target;\n    var file = target.files[0];\n    var reader = new FileReader();\n    reader.readAsText(file);\n\n    reader.onload = function () {\n      setFileContent(reader.result);\n      setFileParsedContent(parseFile(reader.result));\n    };\n\n    reader.onerror = function () {\n      console.log(reader.error);\n    };\n\n    setFileName(file.name);\n  };\n\n  var printNoteMap = function printNoteMap(value, key) {\n    console.log('in printnoteMap');\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"mt-4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n        className: \"text-center text-xl\",\n        children: key\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        children: value\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Kindle Clippings Parser\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"max-w-3xl mx-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          className: \"mt-8 text-2xl text-center\",\n          children: \"Welcome friends of LibGen!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"mt-8\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n            type: \"file\",\n            accept: \".txt\",\n            onChange: handleFileUpload\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this), \"Uploaded File: \", fileName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              children: \"File: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"mt-4\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n              children: \"Parsed File:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, this), fileParsedContent ? Object(_Users_jan_Documents_Programming_JavaScript_KindleClippings_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fileParsedContent.keys()).map(function (noteTitle) {\n              printNoteMap(noteTitle, fileParsedContent.get(noteTitle));\n            }) : null]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"footer\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"KJwC9/zJ2Oc56+R+7F+dLzKSXj4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImZpbGVDb250ZW50Iiwic2V0RmlsZUNvbnRlbnQiLCJmaWxlUGFyc2VkQ29udGVudCIsInNldEZpbGVQYXJzZWRDb250ZW50IiwicGFyc2VGaWxlIiwiZmlsZSIsInNwbGl0dGVkRmlsZSIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIk5vdGVzIiwiTWFwIiwiYmxvY2tDb3VudGVyIiwiTWF0aCIsImZsb29yIiwidGl0bGUiLCJjbGlwcGluZ1R5cGUiLCJOb3RlIiwiaW5jbHVkZXMiLCJoYXMiLCJvbGROb3RlIiwiZ2V0IiwibmV3Tm90ZSIsInNldCIsImhhbmRsZUZpbGVVcGxvYWQiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzVGV4dCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsIm5hbWUiLCJwcmludE5vdGVNYXAiLCJ2YWx1ZSIsImtleSIsImtleXMiLCJtYXAiLCJub3RlVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQWdCLElBQWhCLENBRFg7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUFBLG1CQUVTRixzREFBUSxDQUFnQixJQUFoQixDQUZqQjtBQUFBLE1BRXRCRyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBQUEsbUJBR3FCSixzREFBUSxDQUdoRCxJQUhnRCxDQUg3QjtBQUFBLE1BR3RCSyxpQkFIc0I7QUFBQSxNQUdIQyxvQkFIRzs7QUFRN0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFrQjtBQUNsQyxRQUFN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QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsMkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGtDQUNFO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFNLEVBQUMsTUFBMUI7QUFBaUMsb0JBQVEsRUFBRWI7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixxQkFFa0IzQixRQUZsQixlQUdFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBT0U7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVHSSxpQkFBaUIsR0FDZCx5S0FBSUEsaUJBQWlCLENBQUNzQyxJQUFsQixFQUFKLEVBQThCQyxHQUE5QixDQUFrQyxVQUFDQyxTQUFELEVBQWU7QUFDL0NMLDBCQUFZLENBQUNLLFNBQUQsRUFBWXhDLGlCQUFpQixDQUFDb0IsR0FBbEIsQ0FBc0JvQixTQUF0QixDQUFaLENBQVo7QUFDRCxhQUZELENBRGMsR0FJZCxJQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBOEJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBL0Z1QjlDLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZmlsZUNvbnRlbnQsIHNldEZpbGVDb250ZW50XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZmlsZVBhcnNlZENvbnRlbnQsIHNldEZpbGVQYXJzZWRDb250ZW50XSA9IHVzZVN0YXRlPE1hcDxcbiAgICBhbnksXG4gICAgYW55XG4gID4gfCBudWxsPihudWxsKTtcblxuICBjb25zdCBwYXJzZUZpbGUgPSAoZmlsZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc3BsaXR0ZWRGaWxlID0gZmlsZS5zcGxpdCgvXFxyP1xcbi9nKTtcbiAgICBjb25zb2xlLmxvZyhzcGxpdHRlZEZpbGUubGVuZ3RoKTtcbiAgICBjb25zdCBOb3RlcyA9IG5ldyBNYXAoKTtcbiAgICBsZXQgYmxvY2tDb3VudGVyID0gMDtcbiAgICB3aGlsZSAoYmxvY2tDb3VudGVyIDwgTWF0aC5mbG9vcihzcGxpdHRlZEZpbGUubGVuZ3RoIC8gNSkpIHtcbiAgICAgIC8vIHBhcnNlIGJsb2NrIG9mIDUgbGluZXNcbiAgICAgIGNvbnN0IHRpdGxlID0gc3BsaXR0ZWRGaWxlW2Jsb2NrQ291bnRlciAqIDUgKyAwXTtcbiAgICAgIGNvbnN0IGNsaXBwaW5nVHlwZSA9IHNwbGl0dGVkRmlsZVtibG9ja0NvdW50ZXIgKiA1ICsgMV07XG4gICAgICBjb25zdCBOb3RlID0gc3BsaXR0ZWRGaWxlW2Jsb2NrQ291bnRlciAqIDUgKyAzXTtcbiAgICAgIGJsb2NrQ291bnRlciArPSAxO1xuXG4gICAgICBpZiAoY2xpcHBpbmdUeXBlLmluY2x1ZGVzKCdIaWdobGlnaHQnKSkge1xuICAgICAgICAvLyBhZGQgYmxvY2sgdG8gZGljdFxuICAgICAgICBpZiAoTm90ZXMuaGFzKHRpdGxlKSkge1xuICAgICAgICAgIGNvbnN0IG9sZE5vdGUgPSBOb3Rlcy5nZXQodGl0bGUpO1xuICAgICAgICAgIGNvbnN0IG5ld05vdGUgPSBgJHtvbGROb3RlfVxcbiR7Tm90ZX1gO1xuICAgICAgICAgIE5vdGVzLnNldCh0aXRsZSwgbmV3Tm90ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTm90ZXMuc2V0KHRpdGxlLCBOb3RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTm90ZXM7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZVVwbG9hZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZmlsZTogRmlsZSA9ICh0YXJnZXQuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNldEZpbGVDb250ZW50KHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgICAgIHNldEZpbGVQYXJzZWRDb250ZW50KHBhcnNlRmlsZShyZWFkZXIucmVzdWx0IGFzIHN0cmluZykpO1xuICAgIH07XG5cbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlYWRlci5lcnJvcik7XG4gICAgfTtcblxuICAgIHNldEZpbGVOYW1lKGZpbGUubmFtZSk7XG4gIH07XG5cbiAgY29uc3QgcHJpbnROb3RlTWFwID0gKHZhbHVlOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2luIHByaW50bm90ZU1hcCcpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteGxcIj57a2V5fTwvaDM+XG4gICAgICAgIDxwPnt2YWx1ZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+S2luZGxlIENsaXBwaW5ncyBQYXJzZXI8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC04IHRleHQtMnhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBXZWxjb21lIGZyaWVuZHMgb2YgTGliR2VuIVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIudHh0XCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVVcGxvYWR9IC8+XG4gICAgICAgICAgICBVcGxvYWRlZCBGaWxlOiB7ZmlsZU5hbWV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgPGgyPkZpbGU6IDwvaDI+XG4gICAgICAgICAgICAgIHsvKiB7ZmlsZUNvbnRlbnR9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgPGgyPlBhcnNlZCBGaWxlOjwvaDI+XG4gICAgICAgICAgICAgIHtmaWxlUGFyc2VkQ29udGVudFxuICAgICAgICAgICAgICAgID8gWy4uLmZpbGVQYXJzZWRDb250ZW50LmtleXMoKV0ubWFwKChub3RlVGl0bGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbnROb3RlTWFwKG5vdGVUaXRsZSwgZmlsZVBhcnNlZENvbnRlbnQuZ2V0KG5vdGVUaXRsZSkpO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})