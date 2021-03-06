/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, author, license, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"demo-node-typescript\",\"version\":\"0.0.1\",\"description\":\"用 TypeScript 开发 Node.js 程序\",\"main\":\"index.js\",\"scripts\":{\"start\":\"webpack --progress --env.development --env.nodemon\",\"start:prod\":\"webpack --progress --env.nodemon\",\"build\":\"webpack --progress --env.development\",\"build:prod\":\"webpack --progress\",\"build:ci\":\"webpack\"},\"author\":\"yosion\",\"license\":\"ISC\",\"devDependencies\":{\"@types/node\":\"^10.14.6\",\"nodemon-webpack-plugin\":\"^4.0.8\",\"ts-loader\":\"^5.4.4\",\"typescript\":\"^3.4.5\",\"webpack\":\"^4.30.0\",\"webpack-cli\":\"^3.3.1\"}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlLmpzb24uanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/information-logger.ts":
/*!***********************************!*\
  !*** ./src/information-logger.ts ***!
  \***********************************/
/*! exports provided: InformationLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InformationLogger\", function() { return InformationLogger; });\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n\r\n\r\nlet decimalNumber = 42;\r\nlet myPetFamily = ['rocket', 'fluffly', 'harry'];\r\nlet myPetFamily1 = ['rocket', 'fluffly', 'harry'];\r\nlet myPetFamily2 = [{}];\r\nlet myFavoriteTuple;\r\nmyFavoriteTuple = ['chair', 20, true];\r\nclass InformationLogger {\r\n    static logApplicationInformation() {\r\n        console.log({\r\n            application: {\r\n                name: _package_json__WEBPACK_IMPORTED_MODULE_1__[\"name\"],\r\n                version: _package_json__WEBPACK_IMPORTED_MODULE_1__[\"version\"]\r\n            }\r\n        });\r\n    }\r\n    static logSystemInformation() {\r\n        console.log({\r\n            system: {\r\n                platform: process.platform,\r\n                cpus: os__WEBPACK_IMPORTED_MODULE_0___default.a.cpus().length\r\n            }\r\n        });\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mb3JtYXRpb24tbG9nZ2VyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZm9ybWF0aW9uLWxvZ2dlci50cz8wZmIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvcyBmcm9tIFwib3NcIjtcclxuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcclxubGV0IGRlY2ltYWxOdW1iZXIgPSA0MjtcclxubGV0IG15UGV0RmFtaWx5ID0gWydyb2NrZXQnLCAnZmx1ZmZseScsICdoYXJyeSddO1xyXG5sZXQgbXlQZXRGYW1pbHkxID0gWydyb2NrZXQnLCAnZmx1ZmZseScsICdoYXJyeSddO1xyXG5sZXQgbXlQZXRGYW1pbHkyID0gW3t9XTtcclxubGV0IG15RmF2b3JpdGVUdXBsZTtcclxubXlGYXZvcml0ZVR1cGxlID0gWydjaGFpcicsIDIwLCB0cnVlXTtcclxuZXhwb3J0IGNsYXNzIEluZm9ybWF0aW9uTG9nZ2VyIHtcclxuICAgIHN0YXRpYyBsb2dBcHBsaWNhdGlvbkluZm9ybWF0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgICAgICAgYXBwbGljYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBsb2dTeXN0ZW1JbmZvcm1hdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgICAgICAgIHN5c3RlbToge1xyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm06IHByb2Nlc3MucGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgICBjcHVzOiBvcy5jcHVzKCkubGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/information-logger.ts\n");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _information_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information-logger */ \"./src/information-logger.ts\");\n\r\n_information_logger__WEBPACK_IMPORTED_MODULE_0__[\"InformationLogger\"].logApplicationInformation();\r\n_information_logger__WEBPACK_IMPORTED_MODULE_0__[\"InformationLogger\"].logSystemInformation();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzPzc5NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5mb3JtYXRpb25Mb2dnZXIgfSBmcm9tIFwiLi9pbmZvcm1hdGlvbi1sb2dnZXJcIjtcclxuSW5mb3JtYXRpb25Mb2dnZXIubG9nQXBwbGljYXRpb25JbmZvcm1hdGlvbigpO1xyXG5JbmZvcm1hdGlvbkxvZ2dlci5sb2dTeXN0ZW1JbmZvcm1hdGlvbigpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })

/******/ });