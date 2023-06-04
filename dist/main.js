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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    background-color: darkblue;\r\n    color: white;\r\n    font-family: 'Orbitron', sans-serif;\r\n}\r\n\r\n/* Video Container */\r\n\r\nvideo {\r\n    position: fixed;\r\n    width: auto;\r\n    height: auto;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: -1;\r\n}\r\n\r\n.video-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%; \r\n    overflow: hidden;\r\n    z-index: -1;\r\n}\r\n\r\n/* Main Menu Title */\r\n\r\n.title-main {\r\n    font-size: 1.5rem;\r\n    margin-top: 4rem;\r\n    text-align: center;\r\n}\r\n\r\n.text-fade {\r\n    animation: textFade 2s;\r\n}\r\n\r\n@keyframes textFade {\r\n    0% {opacity: 0; margin-top: 3rem;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n/* Main Menu Options */\r\n\r\n.menu-options {\r\n    position: absolute;\r\n    top: 50%;  \r\n    left: 50%; \r\n    transform: translate(-50%, -50%);\r\n    display: flex;\r\n    flex-direction: column;\r\n    opacity: 0;  \r\n}\r\n\r\n.menu-options > button {\r\n    margin: 1rem 0;\r\n    padding: 1rem 10vw;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    color: white;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    border: solid white 2px;\r\n    border-radius: 5px;\r\n    transition: 0.4s;\r\n}\r\n\r\n.menu-options > button:hover,\r\n.axis-toggle:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 15px white inset;\r\n}\r\n\r\n.fade-in {\r\n    animation: fadeIn 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.fade-out {\r\n    animation: fadeOut 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n.hide-button {\r\n    visibility: hidden;\r\n}\r\n\r\n/* Rules Modal */\r\n\r\n.rules-modal {\r\n    height: 22rem;\r\n    width: 18rem;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    color: white;\r\n    font-weight: 700;\r\n    line-height: 1.7rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.rules-modal > i {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 1rem;\r\n}\r\n\r\n.rules-modal > i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.rules-modal > p {\r\n    text-align: center;\r\n}\r\n\r\n/* New Game Modal */\r\n\r\n.new-game-modal {\r\n    height: 15rem;\r\n    width: 18rem;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    color: white;\r\n    font-weight: 700;\r\n    line-height: 1.7rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.new-game-modal > i {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 1rem;\r\n}\r\n\r\n.new-game-modal > h3 {\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.new-game-modal > input {\r\n    display: flex;\r\n    margin: auto;\r\n    width: 80%;\r\n    height: 1.5rem;\r\n    padding-left: 0.5rem;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.new-game-modal > i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.new-game-modal > button {\r\n    margin: 2rem auto;\r\n    width: 50%;\r\n    padding: 0.4rem 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.new-game-modal > button:hover {\r\n    /* Still debating */\r\n}\r\n\r\n.modal-fade-in {\r\n    animation: modalFadeIn 1s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.modal-fade-out {\r\n    animation: modalFadeOut 3s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes modalFadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes modalFadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n/* Game Messages */\r\n\r\n.game-messages {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 2.5rem;\r\n    width: 100%;\r\n    max-width: 75rem;\r\n    margin: 3.5rem auto;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-weight: 600;\r\n}\r\n\r\n/* Gameboard */\r\n\r\n.axis-toggle {\r\n    height: 2rem;\r\n    width: 20vw;\r\n    min-width: 10rem;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 auto 2rem;\r\n    font-size: 1.1rem;\r\n    border: none;\r\n    border-radius: 5px;\r\n    transition: 0.4s;\r\n\r\n}\r\n\r\n.gameboard-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    margin: 0 auto;\r\n    max-width: 75rem;\r\n}\r\n\r\n.player-section,\r\n.computer-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.player-board,\r\n.computer-board {\r\n    width: 100%;\r\n    min-width: 250px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.player-gb-box,\r\n.com-gb-box {\r\n    border: black solid 1px;\r\n    background-color: white;\r\n    padding-top: 100%;\r\n}\r\n\r\n.gb-fade-in {\r\n    animation: gbFadeIn 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes gbFadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    background-color: darkblue;\r\n    color: white;\r\n    font-family: 'Orbitron', sans-serif;\r\n}\r\n\r\n/* Video Container */\r\n\r\nvideo {\r\n    position: fixed;\r\n    width: auto;\r\n    height: auto;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: -1;\r\n}\r\n\r\n.video-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%; \r\n    overflow: hidden;\r\n    z-index: -1;\r\n}\r\n\r\n/* Main Menu Title */\r\n\r\n.title-main {\r\n    font-size: 1.5rem;\r\n    margin-top: 4rem;\r\n    text-align: center;\r\n}\r\n\r\n.text-fade {\r\n    animation: textFade 2s;\r\n}\r\n\r\n@keyframes textFade {\r\n    0% {opacity: 0; margin-top: 3rem;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n/* Main Menu Options */\r\n\r\n.menu-options {\r\n    position: absolute;\r\n    top: 50%;  \r\n    left: 50%; \r\n    transform: translate(-50%, -50%);\r\n    display: flex;\r\n    flex-direction: column;\r\n    opacity: 0;  \r\n}\r\n\r\n.menu-options > button {\r\n    margin: 1rem 0;\r\n    padding: 1rem 10vw;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    color: white;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    border: solid white 2px;\r\n    border-radius: 5px;\r\n    transition: 0.4s;\r\n}\r\n\r\n.menu-options > button:hover,\r\n.axis-toggle:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0px 0px 15px white inset;\r\n}\r\n\r\n.fade-in {\r\n    animation: fadeIn 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.fade-out {\r\n    animation: fadeOut 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n.hide-button {\r\n    visibility: hidden;\r\n}\r\n\r\n/* Rules Modal */\r\n\r\n.rules-modal {\r\n    height: 22rem;\r\n    width: 18rem;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    color: white;\r\n    font-weight: 700;\r\n    line-height: 1.7rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.rules-modal > i {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 1rem;\r\n}\r\n\r\n.rules-modal > i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.rules-modal > p {\r\n    text-align: center;\r\n}\r\n\r\n/* New Game Modal */\r\n\r\n.new-game-modal {\r\n    height: 15rem;\r\n    width: 18rem;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    color: white;\r\n    font-weight: 700;\r\n    line-height: 1.7rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.new-game-modal > i {\r\n    display: flex;\r\n    justify-content: end;\r\n    padding: 1rem;\r\n}\r\n\r\n.new-game-modal > h3 {\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.new-game-modal > input {\r\n    display: flex;\r\n    margin: auto;\r\n    width: 80%;\r\n    height: 1.5rem;\r\n    padding-left: 0.5rem;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.new-game-modal > i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.new-game-modal > button {\r\n    margin: 2rem auto;\r\n    width: 50%;\r\n    padding: 0.4rem 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.new-game-modal > button:hover {\r\n    /* Still debating */\r\n}\r\n\r\n.modal-fade-in {\r\n    animation: modalFadeIn 1s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.modal-fade-out {\r\n    animation: modalFadeOut 3s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes modalFadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes modalFadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n/* Game Messages */\r\n\r\n.game-messages {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 2.5rem;\r\n    width: 100%;\r\n    max-width: 75rem;\r\n    margin: 3.5rem auto;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-weight: 600;\r\n}\r\n\r\n/* Gameboard */\r\n\r\n.axis-toggle {\r\n    height: 2rem;\r\n    width: 20vw;\r\n    min-width: 10rem;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 auto 2rem;\r\n    font-size: 1.1rem;\r\n    border: none;\r\n    border-radius: 5px;\r\n    transition: 0.4s;\r\n\r\n}\r\n\r\n.gameboard-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    margin: 0 auto;\r\n    max-width: 75rem;\r\n}\r\n\r\n.player-section,\r\n.computer-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.player-board,\r\n.computer-board {\r\n    width: 100%;\r\n    min-width: 250px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.player-gb-box,\r\n.com-gb-box {\r\n    border: black solid 1px;\r\n    background-color: white;\r\n    padding-top: 100%;\r\n}\r\n\r\n.gb-fade-in {\r\n    animation: gbFadeIn 3s;\r\n    animation-delay: 2s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@keyframes gbFadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}"],"sourceRoot":""}]);
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
        },

        isShipPlaced() {
            return this.isPlaced
        },
    }
};

const Gameboard = (coordinates, nodeList) => {
    return {
        isXAxis: true,

        isYAxis: false,

        isValidBox(box1, box2) {
            return box1 === box2 ? true : false 
        },

        deployCarrier() {

            if (this.isXAxis) {

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

                })} else {

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

                        box.addEventListener('click', () => {
                            try {
                                console.log('Works')
                            } catch(err) {
                                console.log(err)
                            }
                        })
                    })
                }    
            },
            
        deployBattleship() {

            if (this.isXAxis) {

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
                })} else {

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
                }     
            },
        
        deployCruiser() {

            if (this.isXAxis) {
                
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
                })} else {

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
        }},
            
        deploySubmarine() {

            if(this.isXAxis) {

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
                })} else {

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
                }       
            },
            
        deployDestroyer() {
                
            if (this.isXAxis) {
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
                })} else {

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
                    })}   
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
        playerGameboard.deployCarrier()
    })
}

function loadGameBoard() {

    const gameMessages = document.createElement('p');
    gameMessages.classList.add('game-messages', 'gb-fade-in');
    gameMessages.setAttribute('id', 'gameMessages');
    gameMessages.textContent = `It is ${nameValue}'s turn.`
    document.body.appendChild(gameMessages)

    const axisToggle = document.createElement('button');
    axisToggle.textContent = 'Axis Toggle'
    axisToggle.classList.add('axis-toggle', 'gb-fade-in')
    document.body.appendChild(axisToggle)


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
            playerBoard.appendChild(gameboardBox)
        }
            

    for (let i = 1; i < 101; i++) {
        const gameboardBox = document.createElement('div');
        gameboardBox.classList.add('com-gb-box');
        gameboardBox.setAttribute('id', computerCoordinates[i - 1])
        computerBoard.appendChild(gameboardBox)
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLGdDQUFnQyxxQkFBcUIsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxvQkFBb0Isb0JBQW9CLE9BQU8sS0FBSyxvQkFBb0Isb0JBQW9CLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssb0JBQW9CLG9CQUFvQixPQUFPLEtBQUssb0JBQW9CLG9CQUFvQixPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZ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O0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOWTtBQUNaO0FBQ0EsQ0FBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCLEdBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCLEdBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQixHQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQixHQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCLEdBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNSWjtBQUNaO0FBQ0EsQ0FBMEM7QUFDSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxREFBUztBQUN2QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDN01BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDcUI7QUFDYTtBQUNaO0FBQzFDO0FBQ0Esb0RBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY2xlYXJET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogVmlkZW8gQ29udGFpbmVyICovXFxyXFxuXFxyXFxudmlkZW8ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4udmlkZW8tY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTsgXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIE1lbnUgVGl0bGUgKi9cXHJcXG5cXHJcXG4udGl0bGUtbWFpbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWZhZGUge1xcclxcbiAgICBhbmltYXRpb246IHRleHRGYWRlIDJzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRleHRGYWRlIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7IG1hcmdpbi10b3A6IDNyZW07fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBNZW51IE9wdGlvbnMgKi9cXHJcXG5cXHJcXG4ubWVudS1vcHRpb25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTsgIFxcclxcbiAgICBsZWZ0OiA1MCU7IFxcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3BhY2l0eTogMDsgIFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1vcHRpb25zID4gYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMTB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtb3B0aW9ucyA+IGJ1dHRvbjpob3ZlcixcXHJcXG4uYXhpcy10b2dnbGU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCB3aGl0ZSBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtaW4ge1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAzcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtb3V0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDNzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5oaWRlLWJ1dHRvbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUnVsZXMgTW9kYWwgKi9cXHJcXG5cXHJcXG4ucnVsZXMtbW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDIycmVtO1xcclxcbiAgICB3aWR0aDogMThyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlcy1tb2RhbCA+IGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gaTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gcCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IEdhbWUgTW9kYWwgKi9cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgICB3aWR0aDogMThyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLW1vZGFsID4gaDMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBidXR0b24ge1xcclxcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBidXR0b246aG92ZXIge1xcclxcbiAgICAvKiBTdGlsbCBkZWJhdGluZyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZmFkZS1pbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlSW4gMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mYWRlLW91dCB7XFxyXFxuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlT3V0IDNzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vZGFsRmFkZUluIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb2RhbEZhZGVPdXQge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMTt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG4vKiBHYW1lIE1lc3NhZ2VzICovXFxyXFxuXFxyXFxuLmdhbWUtbWVzc2FnZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDc1cmVtO1xcclxcbiAgICBtYXJnaW46IDMuNXJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHYW1lYm9hcmQgKi9cXHJcXG5cXHJcXG4uYXhpcy10b2dnbGUge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvIDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItc2VjdGlvbixcXHJcXG4uY29tcHV0ZXItc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItYm9hcmQsXFxyXFxuLmNvbXB1dGVyLWJvYXJkIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItZ2ItYm94LFxcclxcbi5jb20tZ2ItYm94IHtcXHJcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdiLWZhZGUtaW4ge1xcclxcbiAgICBhbmltYXRpb246IGdiRmFkZUluIDNzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGdiRmFkZUluIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixN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Q2xCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ09yYml0cm9uJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogVmlkZW8gQ29udGFpbmVyICovXFxyXFxuXFxyXFxudmlkZW8ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4udmlkZW8tY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTsgXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIE1lbnUgVGl0bGUgKi9cXHJcXG5cXHJcXG4udGl0bGUtbWFpbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWZhZGUge1xcclxcbiAgICBhbmltYXRpb246IHRleHRGYWRlIDJzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRleHRGYWRlIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7IG1hcmdpbi10b3A6IDNyZW07fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBNZW51IE9wdGlvbnMgKi9cXHJcXG5cXHJcXG4ubWVudS1vcHRpb25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTsgIFxcclxcbiAgICBsZWZ0OiA1MCU7IFxcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3BhY2l0eTogMDsgIFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1vcHRpb25zID4gYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMTB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtb3B0aW9ucyA+IGJ1dHRvbjpob3ZlcixcXHJcXG4uYXhpcy10b2dnbGU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCB3aGl0ZSBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtaW4ge1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAzcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhZGUtb3V0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDNzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5oaWRlLWJ1dHRvbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUnVsZXMgTW9kYWwgKi9cXHJcXG5cXHJcXG4ucnVsZXMtbW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDIycmVtO1xcclxcbiAgICB3aWR0aDogMThyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ydWxlcy1tb2RhbCA+IGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gaTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gcCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IEdhbWUgTW9kYWwgKi9cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgICB3aWR0aDogMThyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLW1vZGFsID4gaDMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBidXR0b24ge1xcclxcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBidXR0b246aG92ZXIge1xcclxcbiAgICAvKiBTdGlsbCBkZWJhdGluZyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZmFkZS1pbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlSW4gMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mYWRlLW91dCB7XFxyXFxuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlT3V0IDNzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vZGFsRmFkZUluIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb2RhbEZhZGVPdXQge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMTt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG4vKiBHYW1lIE1lc3NhZ2VzICovXFxyXFxuXFxyXFxuLmdhbWUtbWVzc2FnZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDc1cmVtO1xcclxcbiAgICBtYXJnaW46IDMuNXJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHYW1lYm9hcmQgKi9cXHJcXG5cXHJcXG4uYXhpcy10b2dnbGUge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvIDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItc2VjdGlvbixcXHJcXG4uY29tcHV0ZXItc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItYm9hcmQsXFxyXFxuLmNvbXB1dGVyLWJvYXJkIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItZ2ItYm94LFxcclxcbi5jb20tZ2ItYm94IHtcXHJcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdiLWZhZGUtaW4ge1xcclxcbiAgICBhbmltYXRpb246IGdiRmFkZUluIDNzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGdiRmFkZUluIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0J1xyXG5cclxuZnVuY3Rpb24gY2xlYXJET01NZW51KCkge1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3B0aW9uc01haW4pO1xyXG59XHJcblxyXG5leHBvcnQgeyBjbGVhckRPTU1lbnUgfSIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgcGxheWVyQ29vcmRpbmF0ZXMsIGNvbXB1dGVyQ29vcmRpbmF0ZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IFNoaXAgPSAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcE5hbWUgOiBzaGlwTmFtZSxcclxuICAgICAgICBzaGlwTGVuZ3RoOiBzaGlwTGVuZ3RoLFxyXG4gICAgICAgIGhpdENvdW50OiAwLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbXSxcclxuICAgICAgICBpc1BsYWNlZDogZmFsc2UsXHJcbiAgICAgICAgaXNTdW5rKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuaGl0Q291bnQgPT0gc2hpcExlbmd0aCA/IHRydWUgOiBmYWxzZSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoaXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Q291bnQgKz0gMVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsYWNlU2hpcCgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYWNlZCA9IHRydWVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc1NoaXBQbGFjZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUGxhY2VkXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IEdhbWVib2FyZCA9IChjb29yZGluYXRlcywgbm9kZUxpc3QpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNYQXhpczogdHJ1ZSxcclxuXHJcbiAgICAgICAgaXNZQXhpczogZmFsc2UsXHJcblxyXG4gICAgICAgIGlzVmFsaWRCb3goYm94MSwgYm94Mikge1xyXG4gICAgICAgICAgICByZXR1cm4gYm94MSA9PT0gYm94MiA/IHRydWUgOiBmYWxzZSBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkZXBsb3lDYXJyaWVyKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNYQXhpcykge1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDMwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDQwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDMwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDQwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9KX0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdHdvIGlkJ3MgYW5kIHNlZSBpZiB0aGV5IG1hdGNoIFtleC4gUEIgYW5kIFBCID0gbWF0Y2gsIFBDIGFuZCBQRCA9IG5vIG1hdGNoXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDJdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAzXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgM10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgNF0uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgM10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgNF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlcGxveUJhdHRsZXNoaXAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1hBeGlzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMjBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMjBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSl9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDJdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAzXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgM10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAzXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlcGxveUNydWlzZXIoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1hBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9fSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVwbG95U3VibWFyaW5lKCkge1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pc1hBeGlzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMjBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMjBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSl9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDJdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVwbG95RGVzdHJveWVyKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzWEF4aXMpIHtcclxuICAgICAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KX0gICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtTaGlwLCBHYW1lYm9hcmR9XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgY2xlYXJET01NZW51IH0gZnJvbSBcIi4vY2xlYXJET01cIjtcclxuaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XHJcblxyXG4vLyBHbG9iYWwgVmFyaWFibGVzXHJcblxyXG5jb25zdCBwbGF5ZXJDb29yZGluYXRlcyA9IFsnUEExJywgJ1BBMicsICdQQTMnLCAnUEE0JywgJ1BBNScsICdQQTYnLCAnUEE3JywgJ1BBOCcsICdQQTknLCAnUEExMCcsICdQQjEnLCAnUEIyJywgJ1BCMycsICdQQjQnLCAnUEI1JywgJ1BCNicsICAnUEI3JywgJ1BCOCcsICdQQjknLCAnUEIxMCcsICdQQzEnLCAnUEMyJywgJ1BDMycsICdQQzQnLCAnUEM1JywgJ1BDNicsICAnUEM3JywgJ1BDOCcsICdQQzknLCAnUEMxMCcsICdQRDEnLCAnUEQyJywgJ1BEMycsICdQRDQnLCAnUEQ1JywgJ1BENicsICAnUEQ3JywgJ1BEOCcsICdQRDknLCAnUEQxMCcsICdQRTEnLCAnUEUyJywgJ1BFMycsICdQRTQnLCAnUEU1JywgJ1BFNicsICAnUEU3JywgJ1BFOCcsICdQRTknLCAnUEUxMCcsICdQRjEnLCAnUEYyJywgJ1BGMycsICdQRjQnLCAnUEY1JywgJ1BGNicsICAnUEY3JywgJ1BGOCcsICdQRjknLCAnUEYxMCcsICdQRzEnLCAnUEcyJywgJ1BHMycsICdQRzQnLCAnUEc1JywgJ1BHNicsICAnUEc3JywgJ1BHOCcsICdQRzknLCAnUEcxMCcsICdQSDEnLCAnUEgyJywgJ1BIMycsICdQSDQnLCAnUEg1JywgJ1BINicsICAnUEg3JywgJ1BIOCcsICdQSDknLCAnUEgxMCcsICdQSTEnLCAnUEkyJywgJ1BJMycsICdQSTQnLCAnUEk1JywgJ1BJNicsICAnUEk3JywgJ1BJOCcsICdQSTknLCAnUEkxMCcsICdQSjEnLCAnUEoyJywgJ1BKMycsICdQSjQnLCAnUEo1JywgJ1BKNicsICAnUEo3JywgJ1BKOCcsICdQSjknLCAnUEoxMCcsXVxyXG5cclxuY29uc3QgY29tcHV0ZXJDb29yZGluYXRlcyA9IFsnQ0ExJywgJ0NBMicsICdDQTMnLCAnQ0E0JywgJ0NBNScsICdDQTYnLCAnQ0E3JywgJ0NBOCcsICdDQTknLCAnQ0ExMCcsICdDQjEnLCAnQ0IyJywgJ0NCMycsICdDQjQnLCAnQ0I1JywgJ0NCNicsICAnQ0I3JywgJ0NCOCcsICdDQjknLCAnQ0IxMCcsICdDQzEnLCAnQ0MyJywgJ0NDMycsICdDQzQnLCAnQ0M1JywgJ0NDNicsICAnQ0M3JywgJ0NDOCcsICdDQzknLCAnQ0MxMCcsICdDRDEnLCAnQ0QyJywgJ0NEMycsICdDRDQnLCAnQ0Q1JywgJ0NENicsICAnQ0Q3JywgJ0NEOCcsICdDRDknLCAnQ0QxMCcsICdDRTEnLCAnQ0UyJywgJ0NFMycsICdDRTQnLCAnQ0U1JywgJ0NFNicsICAnQ0U3JywgJ0NFOCcsICdDRTknLCAnQ0UxMCcsICdDRjEnLCAnQ0YyJywgJ0NGMycsICdDRjQnLCAnQ0Y1JywgJ0NGNicsICAnQ0Y3JywgJ0NGOCcsICdDRjknLCAnQ0YxMCcsICdDRzEnLCAnQ0cyJywgJ0NHMycsICdDRzQnLCAnQ0c1JywgJ0NHNicsICAnQ0c3JywgJ0NHOCcsICdDRzknLCAnQ0cxMCcsICdDSDEnLCAnQ0gyJywgJ0NIMycsICdDSDQnLCAnQ0g1JywgJ0NINicsICAnQ0g3JywgJ0NIOCcsICdDSDknLCAnQ0gxMCcsICdDSTEnLCAnQ0kyJywgJ0NJMycsICdDSTQnLCAnQ0k1JywgJ0NJNicsICAnQ0k3JywgJ0NJOCcsICdDSTknLCAnQ0kxMCcsICdDSjEnLCAnQ0oyJywgJ0NKMycsICdDSjQnLCAnQ0o1JywgJ0NKNicsICAnQ0o3JywgJ0NKOCcsICdDSjknLCAnQ0oxMCcsXVxyXG5cclxubGV0IG5hbWVWYWx1ZSA9ICcnXHJcblxyXG4vLyBNYWluIE1lbnVcclxuXHJcbmZ1bmN0aW9uIGxvYWRNYWluKCkge1xyXG5cclxuICAgIGNvbnN0IHRpdGxlTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpdGxlTWFpbi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1tYWluJywgJ3RleHQtZmFkZScpO1xyXG4gICAgICAgIHRpdGxlTWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlTWFpbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGl0bGVNYWluKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGVNYWluSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgICB0aXRsZU1haW5IMS50ZXh0Q29udGVudCA9ICdTZWEgV2FyZmFyZSc7XHJcbiAgICAgICAgICAgIHRpdGxlTWFpbi5hcHBlbmRDaGlsZCh0aXRsZU1haW5IMSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnNNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgb3B0aW9uc01haW4uY2xhc3NMaXN0LmFkZCgnbWVudS1vcHRpb25zJywgJ2ZhZGUtaW4nKTtcclxuICAgICAgICBvcHRpb25zTWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wdGlvbnNNYWluJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvcHRpb25zTWFpbik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBydWxlc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBuZXdHYW1lQnRuLnRleHRDb250ZW50ID0gJ05ldyBHYW1lJztcclxuICAgICAgICBydWxlc0J0bi50ZXh0Q29udGVudCA9ICdSdWxlcyc7XHJcblxyXG4gICAgICAgIG5ld0dhbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXdHYW1lQnRuJyk7XHJcbiAgICAgICAgcnVsZXNCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdydWxlc0J0bicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9wdGlvbnNNYWluLmFwcGVuZENoaWxkKG5ld0dhbWVCdG4pO1xyXG4gICAgICAgIG9wdGlvbnNNYWluLmFwcGVuZENoaWxkKHJ1bGVzQnRuKTtcclxuXHJcbiAgICBjb25zdCBydWxlc01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XHJcbiAgICBydWxlc01vZGFsLmNsYXNzTGlzdC5hZGQoJ3J1bGVzLW1vZGFsJyk7XHJcbiAgICBydWxlc01vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAncnVsZXNNb2RhbCcpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChydWxlc01vZGFsKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJ1bGVzTW9kYWxDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBydWxlc01vZGFsQ2xvc2UuY2xhc3NMaXN0LmFkZCgnZmEtc2hhcnAnLCAnZmEtc29saWQnICwnZmEtY2lyY2xlLXhtYXJrJywgJ2ZhLXhsJyk7XHJcbiAgICAgICAgcnVsZXNNb2RhbC5hcHBlbmRDaGlsZChydWxlc01vZGFsQ2xvc2UpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcnVsZU1vZGFsVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHJ1bGVNb2RhbFR4dC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBTZWEgV2FyZmFyZSwgQ2FwdGFpbiEgWW91ciBkdXR5IGlzIHRvIGRlc3Ryb3kgdGhlIGVuZW15IGZsZWV0IGJlZm9yZSB0aGV5IGRlc3Ryb3kgb3Vycy4gTGVmdC1jbGljayBhbnl3aGVyZSBvbiB0aGUgZW5lbXkncyBnYW1lYm9hcmQgdG8gZmlyZSBhIHNob3Qgb2ZmIGludG8gdGhlaXIgd2F0ZXJzLiBJZiB3ZSBzaW5rIHRoZWlyIHNoaXBzIGZpcnN0LCB3ZSB3aW4hIEdvb2QgbHVjaywgQ2FwdGFpbi5cIlxyXG4gICAgICAgIHJ1bGVzTW9kYWwuYXBwZW5kQ2hpbGQocnVsZU1vZGFsVHh0KTtcclxuXHJcblxyXG4gICAgY29uc3QgbmV3R2FtZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XHJcbiAgICBuZXdHYW1lTW9kYWwuY2xhc3NMaXN0LmFkZCgnbmV3LWdhbWUtbW9kYWwnKTtcclxuICAgIG5ld0dhbWVNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld0dhbWVNb2RhbCcpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdHYW1lTW9kYWwpO1xyXG5cclxuICAgICAgICBjb25zdCBuZ01vZGFsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgbmdNb2RhbENsb3NlLmNsYXNzTGlzdC5hZGQoJ2ZhLXNoYXJwJywgJ2ZhLXNvbGlkJyAsJ2ZhLWNpcmNsZS14bWFyaycsICdmYS14bCcpO1xyXG4gICAgICAgIG5ld0dhbWVNb2RhbC5hcHBlbmRDaGlsZChuZ01vZGFsQ2xvc2UpO1xyXG5cclxuICAgICAgICBjb25zdCBuZ01vZGFsSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIG5nTW9kYWxIMy50ZXh0Q29udGVudCA9ICdFbnRlciBZb3VyIE5hbWUnO1xyXG4gICAgICAgIG5ld0dhbWVNb2RhbC5hcHBlbmRDaGlsZChuZ01vZGFsSDMpO1xyXG5cclxuICAgICAgICBjb25zdCBuZ01vZGFsVGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbmdNb2RhbFRleHRCb3guc2V0QXR0cmlidXRlKCdpZCcsICduZ01vZGFsVGV4dEJveCcpXHJcbiAgICAgICAgbmdNb2RhbFRleHRCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBuZ01vZGFsVGV4dEJveC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIDE2KTtcclxuICAgICAgICBuZXdHYW1lTW9kYWwuYXBwZW5kQ2hpbGQobmdNb2RhbFRleHRCb3gpO1xyXG5cclxuICAgICAgICBjb25zdCBuZ01vZGFsU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbmdNb2RhbFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcclxuICAgICAgICBuZ01vZGFsU3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmdNb2RhbFN1Ym1pdCcpXHJcbiAgICAgICAgbmV3R2FtZU1vZGFsLmFwcGVuZENoaWxkKG5nTW9kYWxTdWJtaXQpXHJcblxyXG4gICAgLy8gRXZlbnQgTGlzdGVuZXJzXHJcblxyXG4gICAgbmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoKSA9PiB7XHJcbiAgICAgICAgbmV3R2FtZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWJ1dHRvbicpXHJcbiAgICAgICAgcnVsZXNCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1idXR0b24nKVxyXG4gICAgICAgIG5ld0dhbWVNb2RhbC5zaG93TW9kYWwoKVxyXG4gICAgfSlcclxuXHJcbiAgICBuZ01vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIG5ld0dhbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1idXR0b24nKVxyXG4gICAgICAgIHJ1bGVzQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBuZXdHYW1lTW9kYWwuY2xvc2UoKVxyXG4gICAgfSlcclxuXHJcbiAgICBydWxlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoKSA9PiB7XHJcbiAgICAgICAgbmV3R2FtZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWJ1dHRvbicpXHJcbiAgICAgICAgcnVsZXNCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1idXR0b24nKVxyXG4gICAgICAgIHJ1bGVzTW9kYWwuc2hvd01vZGFsKCkgIFxyXG4gICAgfSlcclxuXHJcbiAgICBydWxlc01vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIG5ld0dhbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1idXR0b24nKVxyXG4gICAgICAgIHJ1bGVzQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBydWxlc01vZGFsLmNsb3NlKClcclxuICAgIH0pXHJcblxyXG4gICAgbmdNb2RhbFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoKSA9PiB7XHJcbiAgICAgICAgbmFtZVZhbHVlID0gbmdNb2RhbFRleHRCb3gudmFsdWU7XHJcbiAgICAgICAgbmV3R2FtZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWZhZGUtb3V0JylcclxuICAgICAgICBjbGVhckRPTU1lbnUoKVxyXG4gICAgICAgIGxvYWRHYW1lQm9hcmQoKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAobmV3R2FtZU1vZGFsLmNsb3NlKCkpXHJcbiAgICAgICAgfSwgMjUwMClcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmROb2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJCb2FyZCcpLmNoaWxkTm9kZXNcclxuICAgICAgICBjb25zdCBjb21Cb2FyZE5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyQm9hcmQnKS5jaGlsZE5vZGVzXHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQocGxheWVyQ29vcmRpbmF0ZXMsIHBsYXllckJvYXJkTm9kZXMpXHJcbiAgICAgICAgcGxheWVyR2FtZWJvYXJkLmRlcGxveUNhcnJpZXIoKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEdhbWVCb2FyZCgpIHtcclxuXHJcbiAgICBjb25zdCBnYW1lTWVzc2FnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBnYW1lTWVzc2FnZXMuY2xhc3NMaXN0LmFkZCgnZ2FtZS1tZXNzYWdlcycsICdnYi1mYWRlLWluJyk7XHJcbiAgICBnYW1lTWVzc2FnZXMuc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lTWVzc2FnZXMnKTtcclxuICAgIGdhbWVNZXNzYWdlcy50ZXh0Q29udGVudCA9IGBJdCBpcyAke25hbWVWYWx1ZX0ncyB0dXJuLmBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU1lc3NhZ2VzKVxyXG5cclxuICAgIGNvbnN0IGF4aXNUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGF4aXNUb2dnbGUudGV4dENvbnRlbnQgPSAnQXhpcyBUb2dnbGUnXHJcbiAgICBheGlzVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2F4aXMtdG9nZ2xlJywgJ2diLWZhZGUtaW4nKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChheGlzVG9nZ2xlKVxyXG5cclxuXHJcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtY29udGFpbmVyJywgJ2diLWZhZGUtaW4nKVxyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVib2FyZENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwbGF5ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zZWN0aW9uJylcclxuICAgICAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyU2VjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgICAgICBwbGF5ZXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyTmFtZScpXHJcbiAgICAgICAgICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtuYW1lVmFsdWV9J3MgRmxlZXRgXHJcbiAgICAgICAgICAgIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ib2FyZCcpXHJcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyQm9hcmQnKTtcclxuICAgICAgICAgICAgcGxheWVyU2VjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZClcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNlY3Rpb24nKVxyXG4gICAgICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlclNlY3Rpb24pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICAgICAgY29tcHV0ZXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcHV0ZXJOYW1lJylcclxuICAgICAgICAgICAgY29tcHV0ZXJOYW1lLnRleHRDb250ZW50ID0gXCJDb21wdXRlcidzIEZsZWV0XCJcclxuICAgICAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNvbXB1dGVyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1ib2FyZCcpXHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wdXRlckJvYXJkJyk7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyU2VjdGlvbi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKVxyXG5cclxuXHJcblxyXG4gICAgLy8gR2VuZXJhdGUgZ2FtZWJvYXJkc1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTAxOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZWJvYXJkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGdhbWVib2FyZEJveC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZ2ItYm94Jyk7XHJcbiAgICAgICAgICAgIGdhbWVib2FyZEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgcGxheWVyQ29vcmRpbmF0ZXNbaSAtIDFdKVxyXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChnYW1lYm9hcmRCb3gpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ2FtZWJvYXJkQm94LmNsYXNzTGlzdC5hZGQoJ2NvbS1nYi1ib3gnKTtcclxuICAgICAgICBnYW1lYm9hcmRCb3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbXB1dGVyQ29vcmRpbmF0ZXNbaSAtIDFdKVxyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQm94KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gY29uc3QgcGxheWVyQmF0dGxlc2hpcCA9IFNoaXAoJ0JhdHRsZXNoaXAnLCA0KTtcclxuLy8gY29uc3QgcGxheWVyQ3J1aXNlciA9IFNoaXAoJ0NydWlzZXInLCAzKTtcclxuLy8gY29uc3QgcGxheWVyU3ViID0gU2hpcCgnU3VibWFyaW5lJywgMyk7XHJcbi8vIGNvbnN0IHBsYXllckRlc3Ryb3llciA9IFNoaXAoJ0Rlc3Ryb3llcicsIDIpO1xyXG5cclxuXHJcbmV4cG9ydCB7IGxvYWRNYWluLCBsb2FkR2FtZUJvYXJkICwgcGxheWVyQ29vcmRpbmF0ZXMsIGNvbXB1dGVyQ29vcmRpbmF0ZXN9XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XHJcbmltcG9ydCB7IGxvYWRNYWluLCBsb2FkR2FtZUJvYXJkIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBjbGVhckRPTU1lbnUgfSBmcm9tICcuL2NsZWFyRE9NJztcclxuXHJcbmxvYWRNYWluKClcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==