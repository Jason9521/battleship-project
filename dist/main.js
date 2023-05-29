/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    background-color: skyblue;\r\n    color: white;\r\n    font-family: 'Orbitron', sans-serif;\r\n}\r\n\r\n/* Video Container */\r\n\r\nvideo {\r\n    position: fixed;\r\n    width: auto;\r\n    height: auto;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: -1;\r\n}\r\n\r\n.video-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%; \r\n    overflow: hidden;\r\n    z-index: -1;\r\n}\r\n\r\n/* Main Menu Title */\r\n\r\n.title-main {\r\n    font-size: 1.5rem;\r\n    margin-top: 4rem;\r\n    text-align: center;\r\n}\r\n\r\n.text-fade {\r\n    animation: textFade 2s;\r\n}\r\n\r\n@keyframes textFade {\r\n    0% {opacity: 0; margin-top: 3rem;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n/* Main Menu Options */\r\n\r\n.menu-options {\r\n    position: absolute;\r\n    top: 50%;  \r\n    left: 50%; \r\n    transform: translate(-50%, -50%);\r\n    display: flex;\r\n    flex-direction: column;\r\n    opacity: 0;  \r\n}\r\n\r\n.menu-options > button {\r\n    margin: 1rem 0;\r\n    padding: 1rem 10vw;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    color: white;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    border: solid white 2px;\r\n    border-radius: 5px;\r\n    transition: 0.4s;\r\n}\r\n\r\n.menu-options > button:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 15px white inset;\r\n}\r\n\r\n.fade-in {\r\n    animation: fadeIn 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.fade-out {\r\n    animation: fadeOut 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n.hide-button {\r\n    visibility: hidden;\r\n}\r\n\r\n/* Rules Modal */\r\n\r\n.rules-modal {\r\n    height: 22rem;\r\n    width: 18rem;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    color: white;\r\n    font-weight: 700;\r\n    line-height: 1.7rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.rules-modal > i {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 1rem;\r\n}\r\n\r\n.rules-modal > i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.rules-modal > p {\r\n    text-align: center;\r\n}\r\n\r\n/* New Game Modal */\r\n\r\n.new-game-modal {\r\n    height: 15rem;\r\n    width: 18rem;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    color: white;\r\n    font-weight: 700;\r\n    line-height: 1.7rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.new-game-modal > i {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 1rem;\r\n}\r\n\r\n.new-game-modal > h3 {\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.new-game-modal > input {\r\n    display: flex;\r\n    margin: auto;\r\n    width: 80%;\r\n    height: 1.5rem;\r\n    padding-left: 0.5rem;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.new-game-modal > i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.new-game-modal > button {\r\n    margin: 2rem auto;\r\n    width: 50%;\r\n    padding: 0.4rem 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.new-game-modal > button:hover {\r\n    /* Still debating */\r\n}\r\n\r\n.modal-fade-in {\r\n    animation: modalFadeIn 1s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.modal-fade-out {\r\n    animation: modalFadeOut 3s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes modalFadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes modalFadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n/* Game Messages */\r\n\r\n.game-messages {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 2.5rem;\r\n    width: 100%;\r\n    max-width: 75rem;\r\n    margin: 3.5rem auto;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-weight: 600;\r\n}\r\n\r\n/* Gameboard */\r\n\r\n.gameboard-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    margin: 0 auto;\r\n    max-width: 75rem;\r\n}\r\n\r\n.player-section,\r\n.computer-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.player-board,\r\n.computer-board {\r\n    width: 100%;\r\n    min-width: 250px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.player-gb-box,\r\n.com-gb-box {\r\n    border: black solid 1px;\r\n    background-color: white;\r\n    padding-top: 100%;\r\n}\r\n\r\n/* .gameboard-box:hover {\r\n    background-color: lightgreen;\r\n} */\r\n\r\n.gb-fade-in {\r\n    animation: gbFadeIn 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes gbFadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    background-color: skyblue;\r\n    color: white;\r\n    font-family: 'Orbitron', sans-serif;\r\n}\r\n\r\n/* Video Container */\r\n\r\nvideo {\r\n    position: fixed;\r\n    width: auto;\r\n    height: auto;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: -1;\r\n}\r\n\r\n.video-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%; \r\n    overflow: hidden;\r\n    z-index: -1;\r\n}\r\n\r\n/* Main Menu Title */\r\n\r\n.title-main {\r\n    font-size: 1.5rem;\r\n    margin-top: 4rem;\r\n    text-align: center;\r\n}\r\n\r\n.text-fade {\r\n    animation: textFade 2s;\r\n}\r\n\r\n@keyframes textFade {\r\n    0% {opacity: 0; margin-top: 3rem;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n/* Main Menu Options */\r\n\r\n.menu-options {\r\n    position: absolute;\r\n    top: 50%;  \r\n    left: 50%; \r\n    transform: translate(-50%, -50%);\r\n    display: flex;\r\n    flex-direction: column;\r\n    opacity: 0;  \r\n}\r\n\r\n.menu-options > button {\r\n    margin: 1rem 0;\r\n    padding: 1rem 10vw;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    color: white;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    border: solid white 2px;\r\n    border-radius: 5px;\r\n    transition: 0.4s;\r\n}\r\n\r\n.menu-options > button:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 15px white inset;\r\n}\r\n\r\n.fade-in {\r\n    animation: fadeIn 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.fade-out {\r\n    animation: fadeOut 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n.hide-button {\r\n    visibility: hidden;\r\n}\r\n\r\n/* Rules Modal */\r\n\r\n.rules-modal {\r\n    height: 22rem;\r\n    width: 18rem;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    color: white;\r\n    font-weight: 700;\r\n    line-height: 1.7rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.rules-modal > i {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 1rem;\r\n}\r\n\r\n.rules-modal > i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.rules-modal > p {\r\n    text-align: center;\r\n}\r\n\r\n/* New Game Modal */\r\n\r\n.new-game-modal {\r\n    height: 15rem;\r\n    width: 18rem;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    color: white;\r\n    font-weight: 700;\r\n    line-height: 1.7rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.new-game-modal > i {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 1rem;\r\n}\r\n\r\n.new-game-modal > h3 {\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.new-game-modal > input {\r\n    display: flex;\r\n    margin: auto;\r\n    width: 80%;\r\n    height: 1.5rem;\r\n    padding-left: 0.5rem;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.new-game-modal > i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.new-game-modal > button {\r\n    margin: 2rem auto;\r\n    width: 50%;\r\n    padding: 0.4rem 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.new-game-modal > button:hover {\r\n    /* Still debating */\r\n}\r\n\r\n.modal-fade-in {\r\n    animation: modalFadeIn 1s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.modal-fade-out {\r\n    animation: modalFadeOut 3s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes modalFadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes modalFadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n/* Game Messages */\r\n\r\n.game-messages {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 2.5rem;\r\n    width: 100%;\r\n    max-width: 75rem;\r\n    margin: 3.5rem auto;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-weight: 600;\r\n}\r\n\r\n/* Gameboard */\r\n\r\n.gameboard-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    margin: 0 auto;\r\n    max-width: 75rem;\r\n}\r\n\r\n.player-section,\r\n.computer-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.player-board,\r\n.computer-board {\r\n    width: 100%;\r\n    min-width: 250px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.player-gb-box,\r\n.com-gb-box {\r\n    border: black solid 1px;\r\n    background-color: white;\r\n    padding-top: 100%;\r\n}\r\n\r\n/* .gameboard-box:hover {\r\n    background-color: lightgreen;\r\n} */\r\n\r\n.gb-fade-in {\r\n    animation: gbFadeIn 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes gbFadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/clearDOM.js":
/*!*************************!*\
  !*** ./src/clearDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDOMMenu: () => (/* binding */ clearDOMMenu)
/* harmony export */ });


function clearDOMMenu() {
    // document.body.removeChild(titleMain);
    document.body.removeChild(optionsMain);
}



/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.js");


;

const Ship = (shipName, shipLength) => {
    return {
        shipName : shipName,
        shipLength: shipLength,
        hitCount: 0,
        coordinates: [],
        isPlaced: false,
        isSunk() {
            return (this.hitCount == shipLength ? true : false)
        },
        hit() {
            this.hitCount += 1
        },
        placeShip() {

            this.isPlaced = true
        }
    }
};

const Gameboard = (coordinates, nodeList) => {
    return {
        isXAxis: true,

        isYAxis: false,

        isValidBox(box1, box2) {
            return box1 === box2 ? true : false 
        },

        deployCarrierXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                        nodeList[boxSelect + 20].style.backgroundColor = 'green'
                        nodeList[boxSelect + 30].style.backgroundColor = 'green'
                        nodeList[boxSelect + 40].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                        nodeList[boxSelect + 20].style.backgroundColor = 'white'
                        nodeList[boxSelect + 30].style.backgroundColor = 'white'
                        nodeList[boxSelect + 40].style.backgroundColor = 'white'
                    })
                })
            },
            
        deployCarrierYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'
                    // Get two id's and see if they match [ex. PB and PB = match, PC and PD = no match]
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 2].id.slice(0,2))){
                        nodeList[boxSelect + 2].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 3].id.slice(0,2))){
                        nodeList[boxSelect + 3].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 4].id.slice(0,2))){
                        nodeList[boxSelect + 4].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                    nodeList[boxSelect + 2].style.backgroundColor = 'white'
                    nodeList[boxSelect + 3].style.backgroundColor = 'white'
                    nodeList[boxSelect + 4].style.backgroundColor = 'white'
                })
            })
        },

        deployBattleshipXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                        nodeList[boxSelect + 20].style.backgroundColor = 'green'
                        nodeList[boxSelect + 30].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                        nodeList[boxSelect + 20].style.backgroundColor = 'white'
                        nodeList[boxSelect + 30].style.backgroundColor = 'white'
                    })
                })
            },
            
        deployBattleshipYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'

                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 2].id.slice(0,2))){
                        nodeList[boxSelect + 2].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 3].id.slice(0,2))){
                        nodeList[boxSelect + 3].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                    nodeList[boxSelect + 2].style.backgroundColor = 'white'
                    nodeList[boxSelect + 3].style.backgroundColor = 'white'
                })
            })
        },

        deployCruiserXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                        nodeList[boxSelect + 20].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                        nodeList[boxSelect + 20].style.backgroundColor = 'white'
                    })
                })
            },
            
        deployCruiserYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'

                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 2].id.slice(0,2))){
                        nodeList[boxSelect + 2].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                    nodeList[boxSelect + 2].style.backgroundColor = 'white'
                })
            })
        },

        deploySubXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                        nodeList[boxSelect + 20].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                        nodeList[boxSelect + 20].style.backgroundColor = 'white'
                    })
                })
            },
            
        deploySubYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'

                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 2].id.slice(0,2))){
                        nodeList[boxSelect + 2].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                    nodeList[boxSelect + 2].style.backgroundColor = 'white'
                })
            })
        },

        deployDestroyerXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                    })
                })
            },
            
        deployDestroyerYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'

                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                })
            })
        },

        }
    }








/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerCoordinates: () => (/* binding */ computerCoordinates),
/* harmony export */   loadGameBoard: () => (/* binding */ loadGameBoard),
/* harmony export */   loadMain: () => (/* binding */ loadMain),
/* harmony export */   playerCoordinates: () => (/* binding */ playerCoordinates)
/* harmony export */ });
/* harmony import */ var _clearDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearDOM */ "./src/clearDOM.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ "./src/factories.js");


;


// Global Variables

const playerCoordinates = ['PA1', 'PA2', 'PA3', 'PA4', 'PA5', 'PA6', 'PA7', 'PA8', 'PA9', 'PA10', 'PB1', 'PB2', 'PB3', 'PB4', 'PB5', 'PB6',  'PB7', 'PB8', 'PB9', 'PB10', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', 'PC6',  'PC7', 'PC8', 'PC9', 'PC10', 'PD1', 'PD2', 'PD3', 'PD4', 'PD5', 'PD6',  'PD7', 'PD8', 'PD9', 'PD10', 'PE1', 'PE2', 'PE3', 'PE4', 'PE5', 'PE6',  'PE7', 'PE8', 'PE9', 'PE10', 'PF1', 'PF2', 'PF3', 'PF4', 'PF5', 'PF6',  'PF7', 'PF8', 'PF9', 'PF10', 'PG1', 'PG2', 'PG3', 'PG4', 'PG5', 'PG6',  'PG7', 'PG8', 'PG9', 'PG10', 'PH1', 'PH2', 'PH3', 'PH4', 'PH5', 'PH6',  'PH7', 'PH8', 'PH9', 'PH10', 'PI1', 'PI2', 'PI3', 'PI4', 'PI5', 'PI6',  'PI7', 'PI8', 'PI9', 'PI10', 'PJ1', 'PJ2', 'PJ3', 'PJ4', 'PJ5', 'PJ6',  'PJ7', 'PJ8', 'PJ9', 'PJ10',]

const computerCoordinates = ['CA1', 'CA2', 'CA3', 'CA4', 'CA5', 'CA6', 'CA7', 'CA8', 'CA9', 'CA10', 'CB1', 'CB2', 'CB3', 'CB4', 'CB5', 'CB6',  'CB7', 'CB8', 'CB9', 'CB10', 'CC1', 'CC2', 'CC3', 'CC4', 'CC5', 'CC6',  'CC7', 'CC8', 'CC9', 'CC10', 'CD1', 'CD2', 'CD3', 'CD4', 'CD5', 'CD6',  'CD7', 'CD8', 'CD9', 'CD10', 'CE1', 'CE2', 'CE3', 'CE4', 'CE5', 'CE6',  'CE7', 'CE8', 'CE9', 'CE10', 'CF1', 'CF2', 'CF3', 'CF4', 'CF5', 'CF6',  'CF7', 'CF8', 'CF9', 'CF10', 'CG1', 'CG2', 'CG3', 'CG4', 'CG5', 'CG6',  'CG7', 'CG8', 'CG9', 'CG10', 'CH1', 'CH2', 'CH3', 'CH4', 'CH5', 'CH6',  'CH7', 'CH8', 'CH9', 'CH10', 'CI1', 'CI2', 'CI3', 'CI4', 'CI5', 'CI6',  'CI7', 'CI8', 'CI9', 'CI10', 'CJ1', 'CJ2', 'CJ3', 'CJ4', 'CJ5', 'CJ6',  'CJ7', 'CJ8', 'CJ9', 'CJ10',]

let nameValue = ''

// Main Menu

function loadMain() {

    const titleMain = document.createElement('div');
        titleMain.classList.add('title-main', 'text-fade');
        titleMain.setAttribute('id', 'titleMain');
        document.body.appendChild(titleMain);

        const titleMainH1 = document.createElement('h1');
            titleMainH1.textContent = 'Sea Warfare';
            titleMain.appendChild(titleMainH1);


    const optionsMain = document.createElement('div');
        optionsMain.classList.add('menu-options', 'fade-in');
        optionsMain.setAttribute('id', 'optionsMain');
        document.body.appendChild(optionsMain);

        const newGameBtn = document.createElement('button');
        const rulesBtn = document.createElement('button');

        newGameBtn.textContent = 'New Game';
        rulesBtn.textContent = 'Rules';

        newGameBtn.setAttribute('id', 'newGameBtn');
        rulesBtn.setAttribute('id', 'rulesBtn');
        
        optionsMain.appendChild(newGameBtn);
        optionsMain.appendChild(rulesBtn);

    const rulesModal = document.createElement('dialog');
    rulesModal.classList.add('rules-modal');
    rulesModal.setAttribute('id', 'rulesModal');
    document.body.appendChild(rulesModal);
    
        const rulesModalClose = document.createElement('i');
        rulesModalClose.classList.add('fa-sharp', 'fa-solid' ,'fa-circle-xmark', 'fa-xl');
        rulesModal.appendChild(rulesModalClose);
    
        const ruleModalTxt = document.createElement('p');
        ruleModalTxt.textContent = "Welcome to Sea Warfare, Captain! Your duty is to destroy the enemy fleet before they destroy ours. Left-click anywhere on the enemy's gameboard to fire a shot off into their waters. If we sink their ships first, we win! Good luck, Captain."
        rulesModal.appendChild(ruleModalTxt);


    const newGameModal = document.createElement('dialog');
    newGameModal.classList.add('new-game-modal');
    newGameModal.setAttribute('id', 'newGameModal');
    document.body.appendChild(newGameModal);

        const ngModalClose = document.createElement('i');
        ngModalClose.classList.add('fa-sharp', 'fa-solid' ,'fa-circle-xmark', 'fa-xl');
        newGameModal.appendChild(ngModalClose);

        const ngModalH3 = document.createElement('h3');
        ngModalH3.textContent = 'Enter Your Name';
        newGameModal.appendChild(ngModalH3);

        const ngModalTextBox = document.createElement('input');
        ngModalTextBox.setAttribute('id', 'ngModalTextBox')
        ngModalTextBox.setAttribute('type', 'text');
        ngModalTextBox.setAttribute('maxlength', 16);
        newGameModal.appendChild(ngModalTextBox);

        const ngModalSubmit = document.createElement('button');
        ngModalSubmit.textContent = 'Start Game';
        ngModalSubmit.setAttribute('id', 'ngModalSubmit')
        newGameModal.appendChild(ngModalSubmit)

    // Event Listeners

    newGameBtn.addEventListener('click' , () => {
        newGameBtn.classList.toggle('hide-button')
        rulesBtn.classList.toggle('hide-button')
        newGameModal.showModal()
    })

    ngModalClose.addEventListener('click' , () => {
        newGameBtn.classList.toggle('hide-button')
        rulesBtn.classList.toggle('hide-button')
        newGameModal.close()
    })

    rulesBtn.addEventListener('click' , () => {
        newGameBtn.classList.toggle('hide-button')
        rulesBtn.classList.toggle('hide-button')
        rulesModal.showModal()  
    })

    rulesModalClose.addEventListener('click' , () => {
        newGameBtn.classList.toggle('hide-button')
        rulesBtn.classList.toggle('hide-button')
        rulesModal.close()
    })

    ngModalSubmit.addEventListener('click' , () => {
        nameValue = ngModalTextBox.value;
        newGameModal.classList.add('modal-fade-out')
        ;(0,_clearDOM__WEBPACK_IMPORTED_MODULE_0__.clearDOMMenu)()
        loadGameBoard()
        setTimeout(() => {
            (newGameModal.close())
        }, 2500)

        const playerBoardNodes = document.getElementById('playerBoard').childNodes
        const comBoardNodes = document.getElementById('computerBoard').childNodes

        let playerGameboard = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(playerCoordinates, playerBoardNodes)
        playerGameboard.deployCruiserXAxis()
    })
}

function loadGameBoard() {

    const gameMessages = document.createElement('p');
    gameMessages.classList.add('game-messages', 'gb-fade-in');
    gameMessages.setAttribute('id', 'gameMessages');
    gameMessages.textContent = `It is ${nameValue}'s turn.`
    document.body.appendChild(gameMessages)

    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('gameboard-container', 'gb-fade-in')
    gameboardContainer.setAttribute('id', 'gameboardContainer');
    document.body.appendChild(gameboardContainer);

        const playerSection = document.createElement('div');
        playerSection.classList.add('player-section')
        gameboardContainer.appendChild(playerSection);

            const playerName = document.createElement('h2')
            playerName.setAttribute('id', 'playerName')
            playerName.textContent = `${nameValue}'s Fleet`
            playerSection.appendChild(playerName);

            const playerBoard = document.createElement('div')
            playerBoard.classList.add('player-board')
            playerBoard.setAttribute('id', 'playerBoard');
            playerSection.appendChild(playerBoard)


        const computerSection = document.createElement('div')
        computerSection.classList.add('computer-section')
        gameboardContainer.appendChild(computerSection);


            const computerName = document.createElement('h2')
            computerName.setAttribute('id', 'computerName')
            computerName.textContent = "Computer's Fleet"
            computerSection.appendChild(computerName);

            const computerBoard = document.createElement('div')
            computerBoard.classList.add('computer-board')
            computerBoard.setAttribute('id', 'computerBoard');
            computerSection.appendChild(computerBoard)



    // Generate gameboards



    for (let i = 1; i < 101; i++) {
            const gameboardBox = document.createElement('div');
            gameboardBox.classList.add('player-gb-box');
            gameboardBox.setAttribute('id', playerCoordinates[i - 1])
            // gameboardBox.addEventListener('mouseover', () => {
            //     gameboardBox.style.backgroundColor = 'green'
            // })
            // gameboardBox.addEventListener('mouseleave', () => {
            //     gameboardBox.style.backgroundColor = 'white'
            // })
            playerBoard.appendChild(gameboardBox)
        }
            

    for (let i = 1; i < 101; i++) {
        const gameboardBox = document.createElement('div');
        gameboardBox.classList.add('com-gb-box');
        gameboardBox.setAttribute('id', computerCoordinates[i - 1])
        computerBoard.appendChild(gameboardBox)
    }
}

function placeOnXAxis() {
    isXAxis = true
    isYAxis = false
}

function placeOnYAxis() {
    isXAxis = false
    isYAxis = true
}

// const playerBattleship = Ship('Battleship', 4);
// const playerCruiser = Ship('Cruiser', 3);
// const playerSub = Ship('Submarine', 3);
// const playerDestroyer = Ship('Destroyer', 2);









/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _clearDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearDOM */ "./src/clearDOM.js");





(0,_interface__WEBPACK_IMPORTED_MODULE_2__.loadMain)()





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYlk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlk7QUFDWjtBQUNBLENBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pSWjtBQUNaO0FBQ0EsQ0FBMEM7QUFDSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxREFBUztBQUN2QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4TkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNxQjtBQUNhO0FBQ1o7QUFDMUM7QUFDQSxvREFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jbGVhckRPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcmJpdHJvbicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qIFZpZGVvIENvbnRhaW5lciAqL1xcclxcblxcclxcbnZpZGVvIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBNZW51IFRpdGxlICovXFxyXFxuXFxyXFxuLnRpdGxlLW1haW4ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1mYWRlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiB0ZXh0RmFkZSAycztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZXh0RmFkZSB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwOyBtYXJnaW4tdG9wOiAzcmVtO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gTWVudSBPcHRpb25zICovXFxyXFxuXFxyXFxuLm1lbnUtb3B0aW9ucyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7ICBcXHJcXG4gICAgbGVmdDogNTAlOyBcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG9wYWNpdHk6IDA7ICBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtb3B0aW9ucyA+IGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDEwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcbi5tZW51LW9wdGlvbnMgPiBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCB3aGl0ZSBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtaW4ge1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAzcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtb3V0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDNzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5oaWRlLWJ1dHRvbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUnVsZXMgTW9kYWwgKi9cXHJcXG5cXHJcXG4ucnVsZXMtbW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDIycmVtO1xcclxcbiAgICB3aWR0aDogMThyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlcy1tb2RhbCA+IGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gaTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gcCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IEdhbWUgTW9kYWwgKi9cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgICB3aWR0aDogMThyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLW1vZGFsID4gaDMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBidXR0b24ge1xcclxcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBidXR0b246aG92ZXIge1xcclxcbiAgICAvKiBTdGlsbCBkZWJhdGluZyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZmFkZS1pbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlSW4gMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mYWRlLW91dCB7XFxyXFxuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlT3V0IDNzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vZGFsRmFkZUluIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb2RhbEZhZGVPdXQge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMTt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG4vKiBHYW1lIE1lc3NhZ2VzICovXFxyXFxuXFxyXFxuLmdhbWUtbWVzc2FnZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDc1cmVtO1xcclxcbiAgICBtYXJnaW46IDMuNXJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHYW1lYm9hcmQgKi9cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiA3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1zZWN0aW9uLFxcclxcbi5jb21wdXRlci1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1ib2FyZCxcXHJcXG4uY29tcHV0ZXItYm9hcmQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1nYi1ib3gsXFxyXFxuLmNvbS1nYi1ib3gge1xcclxcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuZ2FtZWJvYXJkLWJveDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufSAqL1xcclxcblxcclxcbi5nYi1mYWRlLWluIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBnYkZhZGVJbiAzcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBnYkZhZGVJbiB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1DQUFtQztBQUN2Qzs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksSUFBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7SUFDakMsTUFBTSxVQUFVLENBQUM7QUFDckI7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ3JCOztBQUVBO0lBQ0ksSUFBSSxVQUFVLENBQUM7SUFDZixNQUFNLFVBQVUsQ0FBQztBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksSUFBSSxVQUFVLENBQUM7SUFDZixNQUFNLFVBQVUsQ0FBQztBQUNyQjs7QUFFQTtJQUNJLElBQUksVUFBVSxDQUFDO0lBQ2YsTUFBTSxVQUFVLENBQUM7QUFDckI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLElBQUksVUFBVSxDQUFDO0lBQ2YsTUFBTSxVQUFVLENBQUM7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcmJpdHJvbicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qIFZpZGVvIENvbnRhaW5lciAqL1xcclxcblxcclxcbnZpZGVvIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBNZW51IFRpdGxlICovXFxyXFxuXFxyXFxuLnRpdGxlLW1haW4ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1mYWRlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiB0ZXh0RmFkZSAycztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZXh0RmFkZSB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwOyBtYXJnaW4tdG9wOiAzcmVtO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gTWVudSBPcHRpb25zICovXFxyXFxuXFxyXFxuLm1lbnUtb3B0aW9ucyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7ICBcXHJcXG4gICAgbGVmdDogNTAlOyBcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG9wYWNpdHk6IDA7ICBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtb3B0aW9ucyA+IGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDEwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcbi5tZW51LW9wdGlvbnMgPiBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCB3aGl0ZSBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtaW4ge1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAzcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtb3V0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDNzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5oaWRlLWJ1dHRvbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUnVsZXMgTW9kYWwgKi9cXHJcXG5cXHJcXG4ucnVsZXMtbW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDIycmVtO1xcclxcbiAgICB3aWR0aDogMThyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlcy1tb2RhbCA+IGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gaTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gcCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IEdhbWUgTW9kYWwgKi9cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgICB3aWR0aDogMThyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLW1vZGFsID4gaDMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBidXR0b24ge1xcclxcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBidXR0b246aG92ZXIge1xcclxcbiAgICAvKiBTdGlsbCBkZWJhdGluZyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZmFkZS1pbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlSW4gMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mYWRlLW91dCB7XFxyXFxuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlT3V0IDNzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vZGFsRmFkZUluIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb2RhbEZhZGVPdXQge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMTt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG4vKiBHYW1lIE1lc3NhZ2VzICovXFxyXFxuXFxyXFxuLmdhbWUtbWVzc2FnZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDc1cmVtO1xcclxcbiAgICBtYXJnaW46IDMuNXJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHYW1lYm9hcmQgKi9cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiA3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1zZWN0aW9uLFxcclxcbi5jb21wdXRlci1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1ib2FyZCxcXHJcXG4uY29tcHV0ZXItYm9hcmQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1nYi1ib3gsXFxyXFxuLmNvbS1nYi1ib3gge1xcclxcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuZ2FtZWJvYXJkLWJveDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufSAqL1xcclxcblxcclxcbi5nYi1mYWRlLWluIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBnYkZhZGVJbiAzcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBnYkZhZGVJbiB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCdcclxuXHJcbmZ1bmN0aW9uIGNsZWFyRE9NTWVudSgpIHtcclxuICAgIC8vIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGl0bGVNYWluKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3B0aW9uc01haW4pO1xyXG59XHJcblxyXG5leHBvcnQgeyBjbGVhckRPTU1lbnUgfSIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgcGxheWVyQ29vcmRpbmF0ZXMsIGNvbXB1dGVyQ29vcmRpbmF0ZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IFNoaXAgPSAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcE5hbWUgOiBzaGlwTmFtZSxcclxuICAgICAgICBzaGlwTGVuZ3RoOiBzaGlwTGVuZ3RoLFxyXG4gICAgICAgIGhpdENvdW50OiAwLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbXSxcclxuICAgICAgICBpc1BsYWNlZDogZmFsc2UsXHJcbiAgICAgICAgaXNTdW5rKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuaGl0Q291bnQgPT0gc2hpcExlbmd0aCA/IHRydWUgOiBmYWxzZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5oaXRDb3VudCArPSAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGFjZVNoaXAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzUGxhY2VkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IEdhbWVib2FyZCA9IChjb29yZGluYXRlcywgbm9kZUxpc3QpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNYQXhpczogdHJ1ZSxcclxuXHJcbiAgICAgICAgaXNZQXhpczogZmFsc2UsXHJcblxyXG4gICAgICAgIGlzVmFsaWRCb3goYm94MSwgYm94Mikge1xyXG4gICAgICAgICAgICByZXR1cm4gYm94MSA9PT0gYm94MiA/IHRydWUgOiBmYWxzZSBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkZXBsb3lDYXJyaWVyWEF4aXMoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDMwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDQwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDMwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDQwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlcGxveUNhcnJpZXJZQXhpcygpIHtcclxuXHJcbiAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdHdvIGlkJ3MgYW5kIHNlZSBpZiB0aGV5IG1hdGNoIFtleC4gUEIgYW5kIFBCID0gbWF0Y2gsIFBDIGFuZCBQRCA9IG5vIG1hdGNoXVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgM10uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAzXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDRdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgNF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDNdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyA0XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRlcGxveUJhdHRsZXNoaXBYQXhpcygpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMjBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMjBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVwbG95QmF0dGxlc2hpcFlBeGlzKCkge1xyXG5cclxuICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDNdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgM10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDNdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGVwbG95Q3J1aXNlclhBeGlzKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZXBsb3lDcnVpc2VyWUF4aXMoKSB7XHJcblxyXG4gICAgICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGVwbG95U3ViWEF4aXMoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlcGxveVN1YllBeGlzKCkge1xyXG5cclxuICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRlcGxveURlc3Ryb3llclhBeGlzKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZXBsb3lEZXN0cm95ZXJZQXhpcygpIHtcclxuXHJcbiAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7U2hpcCwgR2FtZWJvYXJkfVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCB7IGNsZWFyRE9NTWVudSB9IGZyb20gXCIuL2NsZWFyRE9NXCI7XHJcbmltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xyXG5cclxuLy8gR2xvYmFsIFZhcmlhYmxlc1xyXG5cclxuY29uc3QgcGxheWVyQ29vcmRpbmF0ZXMgPSBbJ1BBMScsICdQQTInLCAnUEEzJywgJ1BBNCcsICdQQTUnLCAnUEE2JywgJ1BBNycsICdQQTgnLCAnUEE5JywgJ1BBMTAnLCAnUEIxJywgJ1BCMicsICdQQjMnLCAnUEI0JywgJ1BCNScsICdQQjYnLCAgJ1BCNycsICdQQjgnLCAnUEI5JywgJ1BCMTAnLCAnUEMxJywgJ1BDMicsICdQQzMnLCAnUEM0JywgJ1BDNScsICdQQzYnLCAgJ1BDNycsICdQQzgnLCAnUEM5JywgJ1BDMTAnLCAnUEQxJywgJ1BEMicsICdQRDMnLCAnUEQ0JywgJ1BENScsICdQRDYnLCAgJ1BENycsICdQRDgnLCAnUEQ5JywgJ1BEMTAnLCAnUEUxJywgJ1BFMicsICdQRTMnLCAnUEU0JywgJ1BFNScsICdQRTYnLCAgJ1BFNycsICdQRTgnLCAnUEU5JywgJ1BFMTAnLCAnUEYxJywgJ1BGMicsICdQRjMnLCAnUEY0JywgJ1BGNScsICdQRjYnLCAgJ1BGNycsICdQRjgnLCAnUEY5JywgJ1BGMTAnLCAnUEcxJywgJ1BHMicsICdQRzMnLCAnUEc0JywgJ1BHNScsICdQRzYnLCAgJ1BHNycsICdQRzgnLCAnUEc5JywgJ1BHMTAnLCAnUEgxJywgJ1BIMicsICdQSDMnLCAnUEg0JywgJ1BINScsICdQSDYnLCAgJ1BINycsICdQSDgnLCAnUEg5JywgJ1BIMTAnLCAnUEkxJywgJ1BJMicsICdQSTMnLCAnUEk0JywgJ1BJNScsICdQSTYnLCAgJ1BJNycsICdQSTgnLCAnUEk5JywgJ1BJMTAnLCAnUEoxJywgJ1BKMicsICdQSjMnLCAnUEo0JywgJ1BKNScsICdQSjYnLCAgJ1BKNycsICdQSjgnLCAnUEo5JywgJ1BKMTAnLF1cclxuXHJcbmNvbnN0IGNvbXB1dGVyQ29vcmRpbmF0ZXMgPSBbJ0NBMScsICdDQTInLCAnQ0EzJywgJ0NBNCcsICdDQTUnLCAnQ0E2JywgJ0NBNycsICdDQTgnLCAnQ0E5JywgJ0NBMTAnLCAnQ0IxJywgJ0NCMicsICdDQjMnLCAnQ0I0JywgJ0NCNScsICdDQjYnLCAgJ0NCNycsICdDQjgnLCAnQ0I5JywgJ0NCMTAnLCAnQ0MxJywgJ0NDMicsICdDQzMnLCAnQ0M0JywgJ0NDNScsICdDQzYnLCAgJ0NDNycsICdDQzgnLCAnQ0M5JywgJ0NDMTAnLCAnQ0QxJywgJ0NEMicsICdDRDMnLCAnQ0Q0JywgJ0NENScsICdDRDYnLCAgJ0NENycsICdDRDgnLCAnQ0Q5JywgJ0NEMTAnLCAnQ0UxJywgJ0NFMicsICdDRTMnLCAnQ0U0JywgJ0NFNScsICdDRTYnLCAgJ0NFNycsICdDRTgnLCAnQ0U5JywgJ0NFMTAnLCAnQ0YxJywgJ0NGMicsICdDRjMnLCAnQ0Y0JywgJ0NGNScsICdDRjYnLCAgJ0NGNycsICdDRjgnLCAnQ0Y5JywgJ0NGMTAnLCAnQ0cxJywgJ0NHMicsICdDRzMnLCAnQ0c0JywgJ0NHNScsICdDRzYnLCAgJ0NHNycsICdDRzgnLCAnQ0c5JywgJ0NHMTAnLCAnQ0gxJywgJ0NIMicsICdDSDMnLCAnQ0g0JywgJ0NINScsICdDSDYnLCAgJ0NINycsICdDSDgnLCAnQ0g5JywgJ0NIMTAnLCAnQ0kxJywgJ0NJMicsICdDSTMnLCAnQ0k0JywgJ0NJNScsICdDSTYnLCAgJ0NJNycsICdDSTgnLCAnQ0k5JywgJ0NJMTAnLCAnQ0oxJywgJ0NKMicsICdDSjMnLCAnQ0o0JywgJ0NKNScsICdDSjYnLCAgJ0NKNycsICdDSjgnLCAnQ0o5JywgJ0NKMTAnLF1cclxuXHJcbmxldCBuYW1lVmFsdWUgPSAnJ1xyXG5cclxuLy8gTWFpbiBNZW51XHJcblxyXG5mdW5jdGlvbiBsb2FkTWFpbigpIHtcclxuXHJcbiAgICBjb25zdCB0aXRsZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXRsZU1haW4uY2xhc3NMaXN0LmFkZCgndGl0bGUtbWFpbicsICd0ZXh0LWZhZGUnKTtcclxuICAgICAgICB0aXRsZU1haW4uc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZU1haW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRpdGxlTWFpbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlTWFpbkgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgdGl0bGVNYWluSDEudGV4dENvbnRlbnQgPSAnU2VhIFdhcmZhcmUnO1xyXG4gICAgICAgICAgICB0aXRsZU1haW4uYXBwZW5kQ2hpbGQodGl0bGVNYWluSDEpO1xyXG5cclxuXHJcbiAgICBjb25zdCBvcHRpb25zTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG9wdGlvbnNNYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUtb3B0aW9ucycsICdmYWRlLWluJyk7XHJcbiAgICAgICAgb3B0aW9uc01haW4uc2V0QXR0cmlidXRlKCdpZCcsICdvcHRpb25zTWFpbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3B0aW9uc01haW4pO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgcnVsZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgbmV3R2FtZUJ0bi50ZXh0Q29udGVudCA9ICdOZXcgR2FtZSc7XHJcbiAgICAgICAgcnVsZXNCdG4udGV4dENvbnRlbnQgPSAnUnVsZXMnO1xyXG5cclxuICAgICAgICBuZXdHYW1lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3R2FtZUJ0bicpO1xyXG4gICAgICAgIHJ1bGVzQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncnVsZXNCdG4nKTtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zTWFpbi5hcHBlbmRDaGlsZChuZXdHYW1lQnRuKTtcclxuICAgICAgICBvcHRpb25zTWFpbi5hcHBlbmRDaGlsZChydWxlc0J0bik7XHJcblxyXG4gICAgY29uc3QgcnVsZXNNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgcnVsZXNNb2RhbC5jbGFzc0xpc3QuYWRkKCdydWxlcy1tb2RhbCcpO1xyXG4gICAgcnVsZXNNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3J1bGVzTW9kYWwnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocnVsZXNNb2RhbCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBydWxlc01vZGFsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgcnVsZXNNb2RhbENsb3NlLmNsYXNzTGlzdC5hZGQoJ2ZhLXNoYXJwJywgJ2ZhLXNvbGlkJyAsJ2ZhLWNpcmNsZS14bWFyaycsICdmYS14bCcpO1xyXG4gICAgICAgIHJ1bGVzTW9kYWwuYXBwZW5kQ2hpbGQocnVsZXNNb2RhbENsb3NlKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJ1bGVNb2RhbFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBydWxlTW9kYWxUeHQudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gU2VhIFdhcmZhcmUsIENhcHRhaW4hIFlvdXIgZHV0eSBpcyB0byBkZXN0cm95IHRoZSBlbmVteSBmbGVldCBiZWZvcmUgdGhleSBkZXN0cm95IG91cnMuIExlZnQtY2xpY2sgYW55d2hlcmUgb24gdGhlIGVuZW15J3MgZ2FtZWJvYXJkIHRvIGZpcmUgYSBzaG90IG9mZiBpbnRvIHRoZWlyIHdhdGVycy4gSWYgd2Ugc2luayB0aGVpciBzaGlwcyBmaXJzdCwgd2Ugd2luISBHb29kIGx1Y2ssIENhcHRhaW4uXCJcclxuICAgICAgICBydWxlc01vZGFsLmFwcGVuZENoaWxkKHJ1bGVNb2RhbFR4dCk7XHJcblxyXG5cclxuICAgIGNvbnN0IG5ld0dhbWVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgbmV3R2FtZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1nYW1lLW1vZGFsJyk7XHJcbiAgICBuZXdHYW1lTW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICduZXdHYW1lTW9kYWwnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3R2FtZU1vZGFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmdNb2RhbENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIG5nTW9kYWxDbG9zZS5jbGFzc0xpc3QuYWRkKCdmYS1zaGFycCcsICdmYS1zb2xpZCcgLCdmYS1jaXJjbGUteG1hcmsnLCAnZmEteGwnKTtcclxuICAgICAgICBuZXdHYW1lTW9kYWwuYXBwZW5kQ2hpbGQobmdNb2RhbENsb3NlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmdNb2RhbEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBuZ01vZGFsSDMudGV4dENvbnRlbnQgPSAnRW50ZXIgWW91ciBOYW1lJztcclxuICAgICAgICBuZXdHYW1lTW9kYWwuYXBwZW5kQ2hpbGQobmdNb2RhbEgzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmdNb2RhbFRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG5nTW9kYWxUZXh0Qm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmdNb2RhbFRleHRCb3gnKVxyXG4gICAgICAgIG5nTW9kYWxUZXh0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgbmdNb2RhbFRleHRCb3guc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAxNik7XHJcbiAgICAgICAgbmV3R2FtZU1vZGFsLmFwcGVuZENoaWxkKG5nTW9kYWxUZXh0Qm94KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmdNb2RhbFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG5nTW9kYWxTdWJtaXQudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XHJcbiAgICAgICAgbmdNb2RhbFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25nTW9kYWxTdWJtaXQnKVxyXG4gICAgICAgIG5ld0dhbWVNb2RhbC5hcHBlbmRDaGlsZChuZ01vZGFsU3VibWl0KVxyXG5cclxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xyXG5cclxuICAgIG5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIG5ld0dhbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1idXR0b24nKVxyXG4gICAgICAgIHJ1bGVzQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBuZXdHYW1lTW9kYWwuc2hvd01vZGFsKClcclxuICAgIH0pXHJcblxyXG4gICAgbmdNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpID0+IHtcclxuICAgICAgICBuZXdHYW1lQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBydWxlc0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWJ1dHRvbicpXHJcbiAgICAgICAgbmV3R2FtZU1vZGFsLmNsb3NlKClcclxuICAgIH0pXHJcblxyXG4gICAgcnVsZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIG5ld0dhbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1idXR0b24nKVxyXG4gICAgICAgIHJ1bGVzQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBydWxlc01vZGFsLnNob3dNb2RhbCgpICBcclxuICAgIH0pXHJcblxyXG4gICAgcnVsZXNNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpID0+IHtcclxuICAgICAgICBuZXdHYW1lQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBydWxlc0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWJ1dHRvbicpXHJcbiAgICAgICAgcnVsZXNNb2RhbC5jbG9zZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIG5nTW9kYWxTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIG5hbWVWYWx1ZSA9IG5nTW9kYWxUZXh0Qm94LnZhbHVlO1xyXG4gICAgICAgIG5ld0dhbWVNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mYWRlLW91dCcpXHJcbiAgICAgICAgY2xlYXJET01NZW51KClcclxuICAgICAgICBsb2FkR2FtZUJvYXJkKClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgKG5ld0dhbWVNb2RhbC5jbG9zZSgpKVxyXG4gICAgICAgIH0sIDI1MDApXHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkTm9kZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKS5jaGlsZE5vZGVzXHJcbiAgICAgICAgY29uc3QgY29tQm9hcmROb2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlckJvYXJkJykuY2hpbGROb2Rlc1xyXG5cclxuICAgICAgICBsZXQgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKHBsYXllckNvb3JkaW5hdGVzLCBwbGF5ZXJCb2FyZE5vZGVzKVxyXG4gICAgICAgIHBsYXllckdhbWVib2FyZC5kZXBsb3lDcnVpc2VyWEF4aXMoKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEdhbWVCb2FyZCgpIHtcclxuXHJcbiAgICBjb25zdCBnYW1lTWVzc2FnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBnYW1lTWVzc2FnZXMuY2xhc3NMaXN0LmFkZCgnZ2FtZS1tZXNzYWdlcycsICdnYi1mYWRlLWluJyk7XHJcbiAgICBnYW1lTWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lTWVzc2FnZXMnKTtcclxuICAgIGdhbWVNZXNzYWdlcy50ZXh0Q29udGVudCA9IGBJdCBpcyAke25hbWVWYWx1ZX0ncyB0dXJuLmBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU1lc3NhZ2VzKVxyXG5cclxuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC1jb250YWluZXInLCAnZ2ItZmFkZS1pbicpXHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lYm9hcmRDb250YWluZXInKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBsYXllclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncGxheWVyLXNlY3Rpb24nKVxyXG4gICAgICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJTZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgICAgIHBsYXllck5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXJOYW1lJylcclxuICAgICAgICAgICAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke25hbWVWYWx1ZX0ncyBGbGVldGBcclxuICAgICAgICAgICAgcGxheWVyU2VjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyLWJvYXJkJylcclxuICAgICAgICAgICAgcGxheWVyQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXJCb2FyZCcpO1xyXG4gICAgICAgICAgICBwbGF5ZXJTZWN0aW9uLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb21wdXRlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2VjdGlvbicpXHJcbiAgICAgICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyU2VjdGlvbik7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgICAgICBjb21wdXRlck5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wdXRlck5hbWUnKVxyXG4gICAgICAgICAgICBjb21wdXRlck5hbWUudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyJ3MgRmxlZXRcIlxyXG4gICAgICAgICAgICBjb21wdXRlclNlY3Rpb24uYXBwZW5kQ2hpbGQoY29tcHV0ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLWJvYXJkJylcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXB1dGVyQm9hcmQnKTtcclxuICAgICAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpXHJcblxyXG5cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBnYW1lYm9hcmRzXHJcblxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWVib2FyZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBnYW1lYm9hcmRCb3guY2xhc3NMaXN0LmFkZCgncGxheWVyLWdiLWJveCcpO1xyXG4gICAgICAgICAgICBnYW1lYm9hcmRCb3guc2V0QXR0cmlidXRlKCdpZCcsIHBsYXllckNvb3JkaW5hdGVzW2kgLSAxXSlcclxuICAgICAgICAgICAgLy8gZ2FtZWJvYXJkQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGdhbWVib2FyZEJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIGdhbWVib2FyZEJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgZ2FtZWJvYXJkQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQm94KVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDE7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGdhbWVib2FyZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGdhbWVib2FyZEJveC5jbGFzc0xpc3QuYWRkKCdjb20tZ2ItYm94Jyk7XHJcbiAgICAgICAgZ2FtZWJvYXJkQm94LnNldEF0dHJpYnV0ZSgnaWQnLCBjb21wdXRlckNvb3JkaW5hdGVzW2kgLSAxXSlcclxuICAgICAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGdhbWVib2FyZEJveClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VPblhBeGlzKCkge1xyXG4gICAgaXNYQXhpcyA9IHRydWVcclxuICAgIGlzWUF4aXMgPSBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZU9uWUF4aXMoKSB7XHJcbiAgICBpc1hBeGlzID0gZmFsc2VcclxuICAgIGlzWUF4aXMgPSB0cnVlXHJcbn1cclxuXHJcbi8vIGNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBTaGlwKCdCYXR0bGVzaGlwJywgNCk7XHJcbi8vIGNvbnN0IHBsYXllckNydWlzZXIgPSBTaGlwKCdDcnVpc2VyJywgMyk7XHJcbi8vIGNvbnN0IHBsYXllclN1YiA9IFNoaXAoJ1N1Ym1hcmluZScsIDMpO1xyXG4vLyBjb25zdCBwbGF5ZXJEZXN0cm95ZXIgPSBTaGlwKCdEZXN0cm95ZXInLCAyKTtcclxuXHJcblxyXG5leHBvcnQgeyBsb2FkTWFpbiwgbG9hZEdhbWVCb2FyZCAsIHBsYXllckNvb3JkaW5hdGVzLCBjb21wdXRlckNvb3JkaW5hdGVzfVxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xyXG5pbXBvcnQgeyBsb2FkTWFpbiwgbG9hZEdhbWVCb2FyZCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgY2xlYXJET01NZW51IH0gZnJvbSAnLi9jbGVhckRPTSc7XHJcblxyXG5sb2FkTWFpbigpXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=