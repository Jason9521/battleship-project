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
/* harmony export */   Player: () => (/* binding */ Player),
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
    }
};

const Gameboard = (coordinates, nodeList) => {
    return {

        carrierPlaced : false,
        battleshipPlaced : false,
        cruiserPlaced : false,
        submarinePlaced : false,
        destroyerPlaced : false,

        areShipsPlaced() {
            if (this.carrierPlaced == false) {
                this.deployCarrier()
            } else if (this.battleshipPlaced == false) {
                this.deployBattleship()
            } else if (this.cruiserPlaced == false) {
                this.deployCruiser()
            } else if (this.submarinePlaced) {
                this.deploySubmarine
            } else {this.deployDestroyer()}
        },

        isValidBox(box1, box2) {
            return box1 === box2 ? true : false 
        },

        deployCarrier() {

            if (_interface__WEBPACK_IMPORTED_MODULE_0__.isXAxis) {

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
            
            } else {

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

                        // box.addEventListener('click', () => {
                        //     try {
                        //         console.log('Works')
                        //     } catch(err) {
                        //         console.log(err)
                        //     }
                        // })
                    })
                }    
            },
            
        deployBattleship() {

            if (_interface__WEBPACK_IMPORTED_MODULE_0__.isXAxis) {

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
            
            } else {

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

            if (_interface__WEBPACK_IMPORTED_MODULE_0__.isXAxis) {
                
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
            
            } else {

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
            
        deploySubmarine() {

            if(_interface__WEBPACK_IMPORTED_MODULE_0__.isXAxis) {

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
            
            } else {

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
                
            if (_interface__WEBPACK_IMPORTED_MODULE_0__.isXAxis) {
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

            } else {

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
                }   
            },
        }
    }

    const Player = () => {

        return {

            

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
/* harmony export */   isXAxis: () => (/* binding */ isXAxis),
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

let playerGameboard

let nameValue = ''
let isXAxis = true

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

        playerGameboard = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(playerCoordinates, playerBoardNodes)
        playerGameboard.areShipsPlaced()
        // deployFleet()
    })
}

function loadGameBoard() {

    const gameMessages = document.createElement('p');
    gameMessages.classList.add('game-messages', 'gb-fade-in');
    gameMessages.setAttribute('id', 'gameMessages');
    gameMessages.textContent = `It is ${nameValue}'s turn.`
    document.body.appendChild(gameMessages)

    const axisToggle = document.createElement('button');
    axisToggle.textContent = 'Toggle Y-Axis'
    axisToggle.classList.add('axis-toggle', 'gb-fade-in')
    axisToggle.setAttribute('id', 'axisToggle')
    document.body.appendChild(axisToggle)

    axisToggle.addEventListener('click', () => {
        if (isXAxis) {
            isXAxis = false
            axisToggle.textContent = 'Toggle X-Axis'
            playerGameboard.areShipsPlaced()

        } else {
            isXAxis = true
            axisToggle.textContent = 'Toggle Y-Axis'
            playerGameboard.areShipsPlaced()
        }
    })


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

function deployFleet() {
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLGdDQUFnQyxxQkFBcUIsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxvQkFBb0Isb0JBQW9CLE9BQU8sS0FBSyxvQkFBb0Isb0JBQW9CLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssb0JBQW9CLG9CQUFvQixPQUFPLEtBQUssb0JBQW9CLG9CQUFvQixPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBUztBQUNuQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNwT0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNxQjtBQUNhO0FBQ1o7QUFDMUM7QUFDQSxvREFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jbGVhckRPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBWaWRlbyBDb250YWluZXIgKi9cXHJcXG5cXHJcXG52aWRlbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi52aWRlby1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gTWVudSBUaXRsZSAqL1xcclxcblxcclxcbi50aXRsZS1tYWluIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtZmFkZSB7XFxyXFxuICAgIGFuaW1hdGlvbjogdGV4dEZhZGUgMnM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgdGV4dEZhZGUge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMDsgbWFyZ2luLXRvcDogM3JlbTt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIE1lbnUgT3B0aW9ucyAqL1xcclxcblxcclxcbi5tZW51LW9wdGlvbnMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlOyAgXFxyXFxuICAgIGxlZnQ6IDUwJTsgXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvcGFjaXR5OiAwOyAgXFxyXFxufVxcclxcblxcclxcbi5tZW51LW9wdGlvbnMgPiBidXR0b24ge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAxMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1vcHRpb25zID4gYnV0dG9uOmhvdmVyLFxcclxcbi5heGlzLXRvZ2dsZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHdoaXRlIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZS1pbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDNzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZS1vdXQge1xcclxcbiAgICBhbmltYXRpb246IGZhZGVPdXQgM3M7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlT3V0IHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDE7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUtYnV0dG9uIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSdWxlcyBNb2RhbCAqL1xcclxcblxcclxcbi5ydWxlcy1tb2RhbCB7XFxyXFxuICAgIGhlaWdodDogMjJyZW07XFxyXFxuICAgIHdpZHRoOiAxOHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZXMtbW9kYWwgPiBpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZXMtbW9kYWwgPiBwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOZXcgR2FtZSBNb2RhbCAqL1xcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCB7XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICAgIHdpZHRoOiAxOHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLW1vZGFsID4gaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBoMyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLW1vZGFsID4gaW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIC8qIFN0aWxsIGRlYmF0aW5nICovXFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mYWRlLWluIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBtb2RhbEZhZGVJbiAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZhZGUtb3V0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBtb2RhbEZhZGVPdXQgM3M7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW9kYWxGYWRlSW4ge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vZGFsRmFkZU91dCB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi8qIEdhbWUgTWVzc2FnZXMgKi9cXHJcXG5cXHJcXG4uZ2FtZS1tZXNzYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNzVyZW07XFxyXFxuICAgIG1hcmdpbjogMy41cmVtIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdhbWVib2FyZCAqL1xcclxcblxcclxcbi5heGlzLXRvZ2dsZSB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgIG1pbi13aWR0aDogMTByZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiA3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1zZWN0aW9uLFxcclxcbi5jb21wdXRlci1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1ib2FyZCxcXHJcXG4uY29tcHV0ZXItYm9hcmQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1nYi1ib3gsXFxyXFxuLmNvbS1nYi1ib3gge1xcclxcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2ItZmFkZS1pbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogZ2JGYWRlSW4gM3M7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZ2JGYWRlSW4ge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLElBQUksVUFBVSxFQUFFLGdCQUFnQixDQUFDO0lBQ2pDLE1BQU0sVUFBVSxDQUFDO0FBQ3JCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLElBQUksVUFBVSxDQUFDO0lBQ2YsTUFBTSxVQUFVLENBQUM7QUFDckI7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxJQUFJLFVBQVUsQ0FBQztJQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ3JCOztBQUVBO0lBQ0ksSUFBSSxVQUFVLENBQUM7SUFDZixNQUFNLFVBQVUsQ0FBQztBQUNyQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLElBQUksVUFBVSxDQUFDO0lBQ2YsTUFBTSxVQUFVLENBQUM7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBWaWRlbyBDb250YWluZXIgKi9cXHJcXG5cXHJcXG52aWRlbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi52aWRlby1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gTWVudSBUaXRsZSAqL1xcclxcblxcclxcbi50aXRsZS1tYWluIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtZmFkZSB7XFxyXFxuICAgIGFuaW1hdGlvbjogdGV4dEZhZGUgMnM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgdGV4dEZhZGUge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMDsgbWFyZ2luLXRvcDogM3JlbTt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIE1lbnUgT3B0aW9ucyAqL1xcclxcblxcclxcbi5tZW51LW9wdGlvbnMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlOyAgXFxyXFxuICAgIGxlZnQ6IDUwJTsgXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvcGFjaXR5OiAwOyAgXFxyXFxufVxcclxcblxcclxcbi5tZW51LW9wdGlvbnMgPiBidXR0b24ge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAxMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1vcHRpb25zID4gYnV0dG9uOmhvdmVyLFxcclxcbi5heGlzLXRvZ2dsZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHdoaXRlIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZS1pbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDNzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFkZS1vdXQge1xcclxcbiAgICBhbmltYXRpb246IGZhZGVPdXQgM3M7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlT3V0IHtcXHJcXG4gICAgMCUge29wYWNpdHk6IDE7fVxcclxcbiAgICAxMDAlIHtvcGFjaXR5OiAwO31cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUtYnV0dG9uIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSdWxlcyBNb2RhbCAqL1xcclxcblxcclxcbi5ydWxlcy1tb2RhbCB7XFxyXFxuICAgIGhlaWdodDogMjJyZW07XFxyXFxuICAgIHdpZHRoOiAxOHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bGVzLW1vZGFsID4gaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZXMtbW9kYWwgPiBpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVsZXMtbW9kYWwgPiBwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOZXcgR2FtZSBNb2RhbCAqL1xcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCB7XFxyXFxuICAgIGhlaWdodDogMTVyZW07XFxyXFxuICAgIHdpZHRoOiAxOHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLW1vZGFsID4gaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtbW9kYWwgPiBoMyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1nYW1lLW1vZGFsID4gaW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1tb2RhbCA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIC8qIFN0aWxsIGRlYmF0aW5nICovXFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mYWRlLWluIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBtb2RhbEZhZGVJbiAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZhZGUtb3V0IHtcXHJcXG4gICAgYW5pbWF0aW9uOiBtb2RhbEZhZGVPdXQgM3M7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW9kYWxGYWRlSW4ge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vZGFsRmFkZU91dCB7XFxyXFxuICAgIDAlIHtvcGFjaXR5OiAxO31cXHJcXG4gICAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi8qIEdhbWUgTWVzc2FnZXMgKi9cXHJcXG5cXHJcXG4uZ2FtZS1tZXNzYWdlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNzVyZW07XFxyXFxuICAgIG1hcmdpbjogMy41cmVtIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdhbWVib2FyZCAqL1xcclxcblxcclxcbi5heGlzLXRvZ2dsZSB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgIG1pbi13aWR0aDogMTByZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiA3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1zZWN0aW9uLFxcclxcbi5jb21wdXRlci1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1ib2FyZCxcXHJcXG4uY29tcHV0ZXItYm9hcmQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1nYi1ib3gsXFxyXFxuLmNvbS1nYi1ib3gge1xcclxcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2ItZmFkZS1pbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogZ2JGYWRlSW4gM3M7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZ2JGYWRlSW4ge1xcclxcbiAgICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAgIDEwMCUge29wYWNpdHk6IDE7fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5mdW5jdGlvbiBjbGVhckRPTU1lbnUoKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvcHRpb25zTWFpbik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNsZWFyRE9NTWVudSB9IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgeyBwbGF5ZXJDb29yZGluYXRlcywgY29tcHV0ZXJDb29yZGluYXRlcywgaXNYQXhpcyB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgU2hpcCA9IChzaGlwTmFtZSwgc2hpcExlbmd0aCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaGlwTmFtZSA6IHNoaXBOYW1lLFxyXG4gICAgICAgIHNoaXBMZW5ndGg6IHNoaXBMZW5ndGgsXHJcbiAgICAgICAgaGl0Q291bnQ6IDAsXHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxyXG4gICAgICAgIGlzUGxhY2VkOiBmYWxzZSxcclxuICAgICAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5oaXRDb3VudCA9PSBzaGlwTGVuZ3RoID8gdHJ1ZSA6IGZhbHNlKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhpdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5oaXRDb3VudCArPSAxXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGxhY2VTaGlwKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxhY2VkID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBHYW1lYm9hcmQgPSAoY29vcmRpbmF0ZXMsIG5vZGVMaXN0KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBjYXJyaWVyUGxhY2VkIDogZmFsc2UsXHJcbiAgICAgICAgYmF0dGxlc2hpcFBsYWNlZCA6IGZhbHNlLFxyXG4gICAgICAgIGNydWlzZXJQbGFjZWQgOiBmYWxzZSxcclxuICAgICAgICBzdWJtYXJpbmVQbGFjZWQgOiBmYWxzZSxcclxuICAgICAgICBkZXN0cm95ZXJQbGFjZWQgOiBmYWxzZSxcclxuXHJcbiAgICAgICAgYXJlU2hpcHNQbGFjZWQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnJpZXJQbGFjZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVwbG95Q2FycmllcigpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXR0bGVzaGlwUGxhY2VkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlcGxveUJhdHRsZXNoaXAoKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3J1aXNlclBsYWNlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBsb3lDcnVpc2VyKClcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN1Ym1hcmluZVBsYWNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBsb3lTdWJtYXJpbmVcclxuICAgICAgICAgICAgfSBlbHNlIHt0aGlzLmRlcGxveURlc3Ryb3llcigpfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzVmFsaWRCb3goYm94MSwgYm94Mikge1xyXG4gICAgICAgICAgICByZXR1cm4gYm94MSA9PT0gYm94MiA/IHRydWUgOiBmYWxzZSBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkZXBsb3lDYXJyaWVyKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzWEF4aXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDMwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDQwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDEwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDIwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDMwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDQwXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHR3byBpZCdzIGFuZCBzZWUgaWYgdGhleSBtYXRjaCBbZXguIFBCIGFuZCBQQiA9IG1hdGNoLCBQQyBhbmQgUEQgPSBubyBtYXRjaF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgM10uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDNdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDRdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyA0XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDNdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDRdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ1dvcmtzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZXBsb3lCYXR0bGVzaGlwKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzWEF4aXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAzMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAzMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgM10uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDNdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgM10uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBkZXBsb3lDcnVpc2VyKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzWEF4aXMpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMjBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMjBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEJveChib3guaWQuc2xpY2UoMCwyKSwgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uaWQuc2xpY2UoMCwyKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0W2JveFNlbGVjdCArIDJdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlcGxveVN1Ym1hcmluZSgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmKGlzWEF4aXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlTGlzdC5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm94U2VsZWN0ID0gY29vcmRpbmF0ZXMuaW5kZXhPZihib3guaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRCb3goYm94LmlkLnNsaWNlKDAsMiksIG5vZGVMaXN0W2JveFNlbGVjdCArIDFdLmlkLnNsaWNlKDAsMikpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMl0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlcGxveURlc3Ryb3llcigpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoaXNYQXhpcykge1xyXG4gICAgICAgICAgICAgICAgbm9kZUxpc3QuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3hTZWxlY3QgPSBjb29yZGluYXRlcy5pbmRleE9mKGJveC5pZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMTBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0LmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJveFNlbGVjdCA9IGNvb3JkaW5hdGVzLmluZGV4T2YoYm94LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQm94KGJveC5pZC5zbGljZSgwLDIpLCBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5pZC5zbGljZSgwLDIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3RbYm94U2VsZWN0ICsgMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTGlzdFtib3hTZWxlY3QgKyAxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge1NoaXAsIEdhbWVib2FyZCwgUGxheWVyfVxyXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCB7IGNsZWFyRE9NTWVudSB9IGZyb20gXCIuL2NsZWFyRE9NXCI7XHJcbmltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XHJcblxyXG4vLyBHbG9iYWwgVmFyaWFibGVzXHJcblxyXG5jb25zdCBwbGF5ZXJDb29yZGluYXRlcyA9IFsnUEExJywgJ1BBMicsICdQQTMnLCAnUEE0JywgJ1BBNScsICdQQTYnLCAnUEE3JywgJ1BBOCcsICdQQTknLCAnUEExMCcsICdQQjEnLCAnUEIyJywgJ1BCMycsICdQQjQnLCAnUEI1JywgJ1BCNicsICAnUEI3JywgJ1BCOCcsICdQQjknLCAnUEIxMCcsICdQQzEnLCAnUEMyJywgJ1BDMycsICdQQzQnLCAnUEM1JywgJ1BDNicsICAnUEM3JywgJ1BDOCcsICdQQzknLCAnUEMxMCcsICdQRDEnLCAnUEQyJywgJ1BEMycsICdQRDQnLCAnUEQ1JywgJ1BENicsICAnUEQ3JywgJ1BEOCcsICdQRDknLCAnUEQxMCcsICdQRTEnLCAnUEUyJywgJ1BFMycsICdQRTQnLCAnUEU1JywgJ1BFNicsICAnUEU3JywgJ1BFOCcsICdQRTknLCAnUEUxMCcsICdQRjEnLCAnUEYyJywgJ1BGMycsICdQRjQnLCAnUEY1JywgJ1BGNicsICAnUEY3JywgJ1BGOCcsICdQRjknLCAnUEYxMCcsICdQRzEnLCAnUEcyJywgJ1BHMycsICdQRzQnLCAnUEc1JywgJ1BHNicsICAnUEc3JywgJ1BHOCcsICdQRzknLCAnUEcxMCcsICdQSDEnLCAnUEgyJywgJ1BIMycsICdQSDQnLCAnUEg1JywgJ1BINicsICAnUEg3JywgJ1BIOCcsICdQSDknLCAnUEgxMCcsICdQSTEnLCAnUEkyJywgJ1BJMycsICdQSTQnLCAnUEk1JywgJ1BJNicsICAnUEk3JywgJ1BJOCcsICdQSTknLCAnUEkxMCcsICdQSjEnLCAnUEoyJywgJ1BKMycsICdQSjQnLCAnUEo1JywgJ1BKNicsICAnUEo3JywgJ1BKOCcsICdQSjknLCAnUEoxMCcsXVxyXG5cclxuY29uc3QgY29tcHV0ZXJDb29yZGluYXRlcyA9IFsnQ0ExJywgJ0NBMicsICdDQTMnLCAnQ0E0JywgJ0NBNScsICdDQTYnLCAnQ0E3JywgJ0NBOCcsICdDQTknLCAnQ0ExMCcsICdDQjEnLCAnQ0IyJywgJ0NCMycsICdDQjQnLCAnQ0I1JywgJ0NCNicsICAnQ0I3JywgJ0NCOCcsICdDQjknLCAnQ0IxMCcsICdDQzEnLCAnQ0MyJywgJ0NDMycsICdDQzQnLCAnQ0M1JywgJ0NDNicsICAnQ0M3JywgJ0NDOCcsICdDQzknLCAnQ0MxMCcsICdDRDEnLCAnQ0QyJywgJ0NEMycsICdDRDQnLCAnQ0Q1JywgJ0NENicsICAnQ0Q3JywgJ0NEOCcsICdDRDknLCAnQ0QxMCcsICdDRTEnLCAnQ0UyJywgJ0NFMycsICdDRTQnLCAnQ0U1JywgJ0NFNicsICAnQ0U3JywgJ0NFOCcsICdDRTknLCAnQ0UxMCcsICdDRjEnLCAnQ0YyJywgJ0NGMycsICdDRjQnLCAnQ0Y1JywgJ0NGNicsICAnQ0Y3JywgJ0NGOCcsICdDRjknLCAnQ0YxMCcsICdDRzEnLCAnQ0cyJywgJ0NHMycsICdDRzQnLCAnQ0c1JywgJ0NHNicsICAnQ0c3JywgJ0NHOCcsICdDRzknLCAnQ0cxMCcsICdDSDEnLCAnQ0gyJywgJ0NIMycsICdDSDQnLCAnQ0g1JywgJ0NINicsICAnQ0g3JywgJ0NIOCcsICdDSDknLCAnQ0gxMCcsICdDSTEnLCAnQ0kyJywgJ0NJMycsICdDSTQnLCAnQ0k1JywgJ0NJNicsICAnQ0k3JywgJ0NJOCcsICdDSTknLCAnQ0kxMCcsICdDSjEnLCAnQ0oyJywgJ0NKMycsICdDSjQnLCAnQ0o1JywgJ0NKNicsICAnQ0o3JywgJ0NKOCcsICdDSjknLCAnQ0oxMCcsXVxyXG5cclxubGV0IHBsYXllckdhbWVib2FyZFxyXG5cclxubGV0IG5hbWVWYWx1ZSA9ICcnXHJcbmxldCBpc1hBeGlzID0gdHJ1ZVxyXG5cclxuLy8gTWFpbiBNZW51XHJcblxyXG5mdW5jdGlvbiBsb2FkTWFpbigpIHtcclxuXHJcbiAgICBjb25zdCB0aXRsZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXRsZU1haW4uY2xhc3NMaXN0LmFkZCgndGl0bGUtbWFpbicsICd0ZXh0LWZhZGUnKTtcclxuICAgICAgICB0aXRsZU1haW4uc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZU1haW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRpdGxlTWFpbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlTWFpbkgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgdGl0bGVNYWluSDEudGV4dENvbnRlbnQgPSAnU2VhIFdhcmZhcmUnO1xyXG4gICAgICAgICAgICB0aXRsZU1haW4uYXBwZW5kQ2hpbGQodGl0bGVNYWluSDEpO1xyXG5cclxuXHJcbiAgICBjb25zdCBvcHRpb25zTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG9wdGlvbnNNYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUtb3B0aW9ucycsICdmYWRlLWluJyk7XHJcbiAgICAgICAgb3B0aW9uc01haW4uc2V0QXR0cmlidXRlKCdpZCcsICdvcHRpb25zTWFpbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3B0aW9uc01haW4pO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgcnVsZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgbmV3R2FtZUJ0bi50ZXh0Q29udGVudCA9ICdOZXcgR2FtZSc7XHJcbiAgICAgICAgcnVsZXNCdG4udGV4dENvbnRlbnQgPSAnUnVsZXMnO1xyXG5cclxuICAgICAgICBuZXdHYW1lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3R2FtZUJ0bicpO1xyXG4gICAgICAgIHJ1bGVzQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncnVsZXNCdG4nKTtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb25zTWFpbi5hcHBlbmRDaGlsZChuZXdHYW1lQnRuKTtcclxuICAgICAgICBvcHRpb25zTWFpbi5hcHBlbmRDaGlsZChydWxlc0J0bik7XHJcblxyXG4gICAgY29uc3QgcnVsZXNNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgcnVsZXNNb2RhbC5jbGFzc0xpc3QuYWRkKCdydWxlcy1tb2RhbCcpO1xyXG4gICAgcnVsZXNNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3J1bGVzTW9kYWwnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocnVsZXNNb2RhbCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBydWxlc01vZGFsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgcnVsZXNNb2RhbENsb3NlLmNsYXNzTGlzdC5hZGQoJ2ZhLXNoYXJwJywgJ2ZhLXNvbGlkJyAsJ2ZhLWNpcmNsZS14bWFyaycsICdmYS14bCcpO1xyXG4gICAgICAgIHJ1bGVzTW9kYWwuYXBwZW5kQ2hpbGQocnVsZXNNb2RhbENsb3NlKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJ1bGVNb2RhbFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBydWxlTW9kYWxUeHQudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gU2VhIFdhcmZhcmUsIENhcHRhaW4hIFlvdXIgZHV0eSBpcyB0byBkZXN0cm95IHRoZSBlbmVteSBmbGVldCBiZWZvcmUgdGhleSBkZXN0cm95IG91cnMuIExlZnQtY2xpY2sgYW55d2hlcmUgb24gdGhlIGVuZW15J3MgZ2FtZWJvYXJkIHRvIGZpcmUgYSBzaG90IG9mZiBpbnRvIHRoZWlyIHdhdGVycy4gSWYgd2Ugc2luayB0aGVpciBzaGlwcyBmaXJzdCwgd2Ugd2luISBHb29kIGx1Y2ssIENhcHRhaW4uXCJcclxuICAgICAgICBydWxlc01vZGFsLmFwcGVuZENoaWxkKHJ1bGVNb2RhbFR4dCk7XHJcblxyXG5cclxuICAgIGNvbnN0IG5ld0dhbWVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgbmV3R2FtZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1nYW1lLW1vZGFsJyk7XHJcbiAgICBuZXdHYW1lTW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICduZXdHYW1lTW9kYWwnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3R2FtZU1vZGFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmdNb2RhbENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIG5nTW9kYWxDbG9zZS5jbGFzc0xpc3QuYWRkKCdmYS1zaGFycCcsICdmYS1zb2xpZCcgLCdmYS1jaXJjbGUteG1hcmsnLCAnZmEteGwnKTtcclxuICAgICAgICBuZXdHYW1lTW9kYWwuYXBwZW5kQ2hpbGQobmdNb2RhbENsb3NlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmdNb2RhbEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBuZ01vZGFsSDMudGV4dENvbnRlbnQgPSAnRW50ZXIgWW91ciBOYW1lJztcclxuICAgICAgICBuZXdHYW1lTW9kYWwuYXBwZW5kQ2hpbGQobmdNb2RhbEgzKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmdNb2RhbFRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG5nTW9kYWxUZXh0Qm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmdNb2RhbFRleHRCb3gnKVxyXG4gICAgICAgIG5nTW9kYWxUZXh0Qm94LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgbmdNb2RhbFRleHRCb3guc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAxNik7XHJcbiAgICAgICAgbmV3R2FtZU1vZGFsLmFwcGVuZENoaWxkKG5nTW9kYWxUZXh0Qm94KTtcclxuXHJcbiAgICAgICAgY29uc3QgbmdNb2RhbFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG5nTW9kYWxTdWJtaXQudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XHJcbiAgICAgICAgbmdNb2RhbFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25nTW9kYWxTdWJtaXQnKVxyXG4gICAgICAgIG5ld0dhbWVNb2RhbC5hcHBlbmRDaGlsZChuZ01vZGFsU3VibWl0KVxyXG5cclxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xyXG5cclxuICAgIG5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIG5ld0dhbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1idXR0b24nKVxyXG4gICAgICAgIHJ1bGVzQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBuZXdHYW1lTW9kYWwuc2hvd01vZGFsKClcclxuICAgIH0pXHJcblxyXG4gICAgbmdNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpID0+IHtcclxuICAgICAgICBuZXdHYW1lQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBydWxlc0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWJ1dHRvbicpXHJcbiAgICAgICAgbmV3R2FtZU1vZGFsLmNsb3NlKClcclxuICAgIH0pXHJcblxyXG4gICAgcnVsZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIG5ld0dhbWVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1idXR0b24nKVxyXG4gICAgICAgIHJ1bGVzQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBydWxlc01vZGFsLnNob3dNb2RhbCgpICBcclxuICAgIH0pXHJcblxyXG4gICAgcnVsZXNNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpID0+IHtcclxuICAgICAgICBuZXdHYW1lQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtYnV0dG9uJylcclxuICAgICAgICBydWxlc0J0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWJ1dHRvbicpXHJcbiAgICAgICAgcnVsZXNNb2RhbC5jbG9zZSgpXHJcbiAgICB9KVxyXG5cclxuICAgIG5nTW9kYWxTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIG5hbWVWYWx1ZSA9IG5nTW9kYWxUZXh0Qm94LnZhbHVlO1xyXG4gICAgICAgIG5ld0dhbWVNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1mYWRlLW91dCcpXHJcbiAgICAgICAgY2xlYXJET01NZW51KClcclxuICAgICAgICBsb2FkR2FtZUJvYXJkKClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgKG5ld0dhbWVNb2RhbC5jbG9zZSgpKVxyXG4gICAgICAgIH0sIDI1MDApXHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkTm9kZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKS5jaGlsZE5vZGVzXHJcbiAgICAgICAgY29uc3QgY29tQm9hcmROb2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlckJvYXJkJykuY2hpbGROb2Rlc1xyXG5cclxuICAgICAgICBwbGF5ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQocGxheWVyQ29vcmRpbmF0ZXMsIHBsYXllckJvYXJkTm9kZXMpXHJcbiAgICAgICAgcGxheWVyR2FtZWJvYXJkLmFyZVNoaXBzUGxhY2VkKClcclxuICAgICAgICAvLyBkZXBsb3lGbGVldCgpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkR2FtZUJvYXJkKCkge1xyXG5cclxuICAgIGNvbnN0IGdhbWVNZXNzYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGdhbWVNZXNzYWdlcy5jbGFzc0xpc3QuYWRkKCdnYW1lLW1lc3NhZ2VzJywgJ2diLWZhZGUtaW4nKTtcclxuICAgIGdhbWVNZXNzYWdlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhbWVNZXNzYWdlcycpO1xyXG4gICAgZ2FtZU1lc3NhZ2VzLnRleHRDb250ZW50ID0gYEl0IGlzICR7bmFtZVZhbHVlfSdzIHR1cm4uYFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lTWVzc2FnZXMpXHJcblxyXG4gICAgY29uc3QgYXhpc1RvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYXhpc1RvZ2dsZS50ZXh0Q29udGVudCA9ICdUb2dnbGUgWS1BeGlzJ1xyXG4gICAgYXhpc1RvZ2dsZS5jbGFzc0xpc3QuYWRkKCdheGlzLXRvZ2dsZScsICdnYi1mYWRlLWluJylcclxuICAgIGF4aXNUb2dnbGUuc2V0QXR0cmlidXRlKCdpZCcsICdheGlzVG9nZ2xlJylcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXhpc1RvZ2dsZSlcclxuXHJcbiAgICBheGlzVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1hBeGlzKSB7XHJcbiAgICAgICAgICAgIGlzWEF4aXMgPSBmYWxzZVxyXG4gICAgICAgICAgICBheGlzVG9nZ2xlLnRleHRDb250ZW50ID0gJ1RvZ2dsZSBYLUF4aXMnXHJcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5hcmVTaGlwc1BsYWNlZCgpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlzWEF4aXMgPSB0cnVlXHJcbiAgICAgICAgICAgIGF4aXNUb2dnbGUudGV4dENvbnRlbnQgPSAnVG9nZ2xlIFktQXhpcydcclxuICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkLmFyZVNoaXBzUGxhY2VkKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtY29udGFpbmVyJywgJ2diLWZhZGUtaW4nKVxyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVib2FyZENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwbGF5ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zZWN0aW9uJylcclxuICAgICAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyU2VjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgICAgICBwbGF5ZXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyTmFtZScpXHJcbiAgICAgICAgICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtuYW1lVmFsdWV9J3MgRmxlZXRgXHJcbiAgICAgICAgICAgIHBsYXllclNlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ib2FyZCcpXHJcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyQm9hcmQnKTtcclxuICAgICAgICAgICAgcGxheWVyU2VjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZClcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNlY3Rpb24nKVxyXG4gICAgICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlclNlY3Rpb24pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICAgICAgY29tcHV0ZXJOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcHV0ZXJOYW1lJylcclxuICAgICAgICAgICAgY29tcHV0ZXJOYW1lLnRleHRDb250ZW50ID0gXCJDb21wdXRlcidzIEZsZWV0XCJcclxuICAgICAgICAgICAgY29tcHV0ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGNvbXB1dGVyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1ib2FyZCcpXHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wdXRlckJvYXJkJyk7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyU2VjdGlvbi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKVxyXG5cclxuXHJcblxyXG4gICAgLy8gR2VuZXJhdGUgZ2FtZWJvYXJkc1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTAxOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZ2FtZWJvYXJkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGdhbWVib2FyZEJveC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZ2ItYm94Jyk7XHJcbiAgICAgICAgICAgIGdhbWVib2FyZEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgcGxheWVyQ29vcmRpbmF0ZXNbaSAtIDFdKVxyXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChnYW1lYm9hcmRCb3gpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ2FtZWJvYXJkQm94LmNsYXNzTGlzdC5hZGQoJ2NvbS1nYi1ib3gnKTtcclxuICAgICAgICBnYW1lYm9hcmRCb3guc2V0QXR0cmlidXRlKCdpZCcsIGNvbXB1dGVyQ29vcmRpbmF0ZXNbaSAtIDFdKVxyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQm94KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZXBsb3lGbGVldCgpIHtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBTaGlwKCdCYXR0bGVzaGlwJywgNCk7XHJcbi8vIGNvbnN0IHBsYXllckNydWlzZXIgPSBTaGlwKCdDcnVpc2VyJywgMyk7XHJcbi8vIGNvbnN0IHBsYXllclN1YiA9IFNoaXAoJ1N1Ym1hcmluZScsIDMpO1xyXG4vLyBjb25zdCBwbGF5ZXJEZXN0cm95ZXIgPSBTaGlwKCdEZXN0cm95ZXInLCAyKTtcclxuXHJcblxyXG5leHBvcnQgeyBsb2FkTWFpbiwgbG9hZEdhbWVCb2FyZCAsIHBsYXllckNvb3JkaW5hdGVzLCBjb21wdXRlckNvb3JkaW5hdGVzLCBpc1hBeGlzfVxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xyXG5pbXBvcnQgeyBsb2FkTWFpbiwgbG9hZEdhbWVCb2FyZCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgY2xlYXJET01NZW51IH0gZnJvbSAnLi9jbGVhckRPTSc7XHJcblxyXG5sb2FkTWFpbigpXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=