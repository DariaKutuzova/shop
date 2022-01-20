/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n\n\n\nvar addCard = function addCard(card) {\n  var cardElement = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.cardTemplate.querySelector('.element').cloneNode(true);\n  cardElement.querySelector('.element__image').src = card.link;\n  cardElement.querySelector('.element__image').alt = card.name;\n  cardElement.querySelector('.element__header').textContent = card.name;\n  cardElement.querySelector('.element__description').textContent = card.description;\n  cardElement.querySelector('.element__price').textContent = card.price;\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.cardsElement.prepend(cardElement);\n}; //Загружаем карточки на начальную страницу\n\n\n_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (card) {\n  addCard(card);\n}); //Отрисовка корзины при наведении на карточку\n\n//# sourceURL=webpack://shop/./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsElement\": () => (/* binding */ cardsElement),\n/* harmony export */   \"cardTemplate\": () => (/* binding */ cardTemplate),\n/* harmony export */   \"initialCards\": () => (/* binding */ initialCards)\n/* harmony export */ });\nvar cardsElement = document.querySelector('.elements');\nvar cardTemplate = document.querySelector('#card-template').content;\nvar initialCards = [{\n  name: 'Наименование товара',\n  description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\n  price: '10 000 руб.'\n}, {\n  name: 'Наименование товара',\n  description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\n  price: '10 000 руб.'\n}, {\n  name: 'Наименование товара',\n  description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\n  price: '10 000 руб.'\n}, {\n  name: 'Наименование товара',\n  description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\n  price: '10 000 руб.'\n}, {\n  name: 'Наименование товара',\n  description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\n  price: '10 000 руб.'\n}, {\n  name: 'Наименование товара',\n  description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\n  price: '10 000 руб.'\n}, {\n  name: 'Наименование товара',\n  description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\n  price: '10 000 руб.'\n}, {\n  name: 'Наименование товара',\n  description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\n  price: '10 000 руб.'\n}, {\n  name: 'Наименование товара',\n  description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',\n  price: '10 000 руб.'\n}];\n\n//# sourceURL=webpack://shop/./src/utils/constants.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shop/./src/pages/index.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;