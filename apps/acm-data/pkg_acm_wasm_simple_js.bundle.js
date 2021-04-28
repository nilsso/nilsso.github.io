/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pkg_acm_wasm_simple_js"],{

/***/ "../pkg/acm_wasm_simple.js":
/*!*********************************!*\
  !*** ../pkg/acm_wasm_simple.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbindgen_json_parse\": () => (/* reexport safe */ _acm_wasm_simple_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_json_parse),\n/* harmony export */   \"acm_data\": () => (/* reexport safe */ _acm_wasm_simple_bg_js__WEBPACK_IMPORTED_MODULE_0__.acm_data),\n/* harmony export */   \"acm_data_aggregate\": () => (/* reexport safe */ _acm_wasm_simple_bg_js__WEBPACK_IMPORTED_MODULE_0__.acm_data_aggregate)\n/* harmony export */ });\n/* harmony import */ var _acm_wasm_simple_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acm_wasm_simple_bg.js */ \"../pkg/acm_wasm_simple_bg.js\");\n\n\n\n//# sourceURL=webpack:///../pkg/acm_wasm_simple.js?");

/***/ }),

/***/ "../pkg/acm_wasm_simple_bg.js":
/*!************************************!*\
  !*** ../pkg/acm_wasm_simple_bg.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"acm_data_aggregate\": () => (/* binding */ acm_data_aggregate),\n/* harmony export */   \"acm_data\": () => (/* binding */ acm_data),\n/* harmony export */   \"__wbindgen_json_parse\": () => (/* binding */ __wbindgen_json_parse)\n/* harmony export */ });\n/* harmony import */ var _acm_wasm_simple_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acm_wasm_simple_bg.wasm */ \"../pkg/acm_wasm_simple_bg.wasm\");\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _acm_wasm_simple_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_acm_wasm_simple_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n* @param {number} a\n* @param {number} b\n* @param {number} l\n* @returns {any}\n*/\nfunction acm_data_aggregate(a, b, l) {\n    var ret = _acm_wasm_simple_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.acm_data_aggregate(a, b, l);\n    return takeObject(ret);\n}\n\n/**\n* @param {number} a\n* @param {number} b\n* @param {number} l\n* @returns {any}\n*/\nfunction acm_data(a, b, l) {\n    var ret = _acm_wasm_simple_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.acm_data(a, b, l);\n    return takeObject(ret);\n}\n\nconst __wbindgen_json_parse = function(arg0, arg1) {\n    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\n\n\n//# sourceURL=webpack:///../pkg/acm_wasm_simple_bg.js?");

/***/ }),

/***/ "../pkg/acm_wasm_simple_bg.wasm":
/*!**************************************!*\
  !*** ../pkg/acm_wasm_simple_bg.wasm ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.id];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name) exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./acm_wasm_simple_bg.js */ \"../pkg/acm_wasm_simple_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"\"]()\n\n//# sourceURL=webpack:///../pkg/acm_wasm_simple_bg.wasm?");

/***/ })

}]);