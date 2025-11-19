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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_sales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sales */ \"./src/modules/sales.js\");\n/* harmony import */ var _modules_priceRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/priceRange */ \"./src/modules/priceRange.js\");\n\n\n\n\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_sales__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_priceRange__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar cart = function cart() {\n  var cartBtn = document.querySelector('#cart');\n  var cartModal = document.querySelector('.cart');\n  var cartCloseBtn = document.querySelector('.cart-close');\n  var openCart = function openCart() {\n    cartModal.style.display = 'flex';\n  };\n  var closeCart = function closeCart() {\n    cartModal.style.display = '';\n  };\n  cartBtn.addEventListener('click', openCart);\n  cartCloseBtn.addEventListener('click', closeCart);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\nvar catalog = function catalog() {\n  var btnCatalog = document.querySelector('.catalog-button > button');\n  var catalogModal = document.querySelector('.catalog');\n  var catalogSearchItems = document.querySelectorAll('.catalog li');\n  var isOpen = false;\n  btnCatalog.addEventListener('click', function () {\n    isOpen = !isOpen;\n    if (!isOpen) {\n      catalogModal.style.display = '';\n    } else {\n      catalogModal.style.display = 'block';\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n      });\n    }\n  });\n  catalogSearchItems.forEach(function (item) {\n    item.addEventListener('click', function () {\n      var category = item.textContent;\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, category));\n      });\n      catalogModal.style.display = '';\n      isOpen = false;\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   priceFilter: () => (/* binding */ priceFilter),\n/* harmony export */   saleFilter: () => (/* binding */ saleFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nvar searchFilter = function searchFilter(goods, value) {\n  var filteredGoods = goods.filter(function (item) {\n    return item.title.toLowerCase().includes(value.toLowerCase());\n  });\n  return filteredGoods;\n};\nvar categoryFilter = function categoryFilter(goods, value) {\n  console.log('value: ', value);\n  console.log('goods: ', goods);\n  var filteredGoods = goods.filter(function (item) {\n    return item.category === value;\n  });\n  return filteredGoods;\n};\nvar saleFilter = function saleFilter(goods) {\n  var filteredGoods = goods.filter(function (item) {\n    return item.sale;\n  });\n  return filteredGoods;\n};\nvar priceFilter = function priceFilter(goods, min, max) {\n  var filteredGoods = goods.filter(function (item) {\n    return item.price <= max && item.price >= min;\n  });\n  return filteredGoods;\n};\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getData = function getData() {\n  return fetch('https://next-firebase-glo-2025-default-rtdb.firebaseio.com/goods.json').then(function (response) {\n    return response.json();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\n\n\nvar load = function load() {\n  // const cartBtn = document.querySelector('#cart');\n  // console.log('cartBtn: ', cartBtn);\n\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n    console.log(data);\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n  });\n\n  // cartBtn.addEventListener('click', () => {\n  //   postData().then((data) => console.log(data));\n\n  //   getData().then((data) => console.log(data));\n  // });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar postData = function postData() {\n  return fetch('https://next-firebase-glo-2025-default-rtdb.firebaseio.com/goods/24.json', {\n    method: 'PUT',\n    body: JSON.stringify({\n      id: 24,\n      title: 'Игра ДЕНИС (PS4 Sony)',\n      price: 23322332,\n      sale: true,\n      img: 'https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg',\n      category: 'Игры и софт'\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8'\n    }\n  }).then(function (response) {\n    return response.json();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/postData.js?\n}");

/***/ }),

/***/ "./src/modules/priceRange.js":
/*!***********************************!*\
  !*** ./src/modules/priceRange.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\nvar priceRange = function priceRange() {\n  var priceRangeMin = document.querySelector('#min');\n  console.log('priceRangeMin: ', priceRangeMin);\n  var priceRangeMax = document.querySelector('#max');\n  console.log('priceRangeMax: ', priceRangeMax);\n  var minPrice = Number(priceRangeMin.value);\n  console.log('minPrice: ', minPrice);\n  var maxPrice = Number(priceRangeMax.value);\n  console.log('maxPrice: ', maxPrice);\n  priceRangeMin.addEventListener('input', function (e) {\n    minPrice = Number(e.target.value);\n    console.log('minPrice: ', minPrice);\n    if (maxPrice === 0) {\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, minPrice, Infinity));\n      });\n    } else {\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, minPrice, maxPrice));\n      });\n    }\n  });\n  priceRangeMax.addEventListener('input', function (e) {\n    maxPrice = Number(e.target.value);\n    console.log('maxPrice: ', maxPrice);\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, minPrice, maxPrice));\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceRange);\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/priceRange.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar renderGoods = function renderGoods(goods) {\n  var goodsContainer = document.querySelector('.goods');\n  console.log('goodsContainer: ', goodsContainer);\n  goodsContainer.innerHTML = '';\n  goods.forEach(function (item) {\n    goodsContainer.insertAdjacentHTML('beforeend', \"<div class=\\\"col-12 col-md-6 col-lg-4 col-xl-3\\\">\\n          <div class=\\\"card\\\">\\n            \".concat(item.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : '', \"\\n            <div class=\\\"card-img-wrapper\\\">\\n              <span class=\\\"card-img-top\\\" style=\\\"background-image: url('\").concat(item.img, \"')\\\"></span>\\n            </div>\\n            <div class=\\\"card-body justify-content-between\\\">\\n              <div class=\\\"card-price\\\">\").concat(item.price, \" \\u20BD</div>\\n                <h5 class=\\\"card-title\\\">\").concat(item.title, \"</h5>\\n                <button class=\\\"btn btn-primary\\\">\\u0412 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443</button>\\n            </div>\\n          </div>\\n      </div>\"));\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/sales.js":
/*!******************************!*\
  !*** ./src/modules/sales.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\nvar sales = function sales() {\n  var sales = document.querySelector('.filter-check');\n  console.log('sales: ', sales);\n  var salesCheckbox = document.querySelector('#discount-checkbox');\n  console.log('salesCheckbox: ', salesCheckbox);\n  var salesCheckboxMark = document.querySelector('.filter-check_checkmark');\n  sales.addEventListener('change', function (e) {\n    console.log(e.target.checked);\n    console.log('salesCheckbox: ', salesCheckbox);\n    if (e.target.checked) {\n      salesCheckboxMark.classList.add('checked');\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data));\n      });\n    } else {\n      salesCheckboxMark.classList.remove('checked');\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n      });\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sales);\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/sales.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\nvar search = function search() {\n  var searchInput = document.querySelector('.search-wrapper_input');\n  searchInput.addEventListener('input', function (e) {\n    var searchString = e.target.value;\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, searchString));\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://next-firebase-nov-2025/./src/modules/search.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;