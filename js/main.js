/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/carousel-m/carousel-m.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/carousel-m/carousel-m.js ***!
  \*****************************************************/
/***/ (function() {

console.log('carousel-m');
$(document).ready(function () {
  $('.carousel-m').slick({
    prevArrow: '',
    nextArrow: '',
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 3,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

/***/ }),

/***/ "./src/blocks/modules/carousel/carousel.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/carousel/carousel.js ***!
  \*************************************************/
/***/ (function() {

console.log('carousel');
$(document).ready(function () {
  $('.carousel').slick({
    prevArrow: '',
    nextArrow: '',
    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__menu');
var body = document.querySelector('body');
burger.addEventListener('click', hBurgerClick);
function hBurgerClick() {
  burger.classList.toggle('header__burger_active');
  menu.classList.toggle('header__menu_active');
  body.classList.toggle('body__lock');
}
var links = document.querySelectorAll('.header__link');
function hLinkClick() {
  if (burger.classList.contains('header__burger_active')) {
    hBurgerClick();
  }
}
var _iterator = _createForOfIteratorHelper(links),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var link = _step.value;
    link.addEventListener('click', hLinkClick);
  }

  // =====================
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
window.addEventListener('scroll', hScrollWindow);
function hScrollWindow() {
  var header = document.querySelector('.header');
  if (pageYOffset > 0) {
    header.classList.add('header_scrolling');
  } else {
    header.classList.remove('header_scrolling');
  }
}

/***/ }),

/***/ "./src/blocks/modules/photography/photography.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/photography/photography.js ***!
  \*******************************************************/
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var btns = document.querySelectorAll('.photography__gallery-btn');
var lists = document.querySelectorAll('.photography__img-list');
function showPhotoList(event) {
  for (var i = 0; i < btns.length; i++) {
    if (lists[i].classList.contains('photography__img-list_active')) {
      lists[i].classList.remove('photography__img-list_active');
    }
    if (btns[i].classList.contains('photography__gallery-btn_active')) {
      btns[i].classList.remove('photography__gallery-btn_active');
    }
    if (btns[i].isEqualNode(event.currentTarget)) {
      lists[i].classList.add('photography__img-list_active');
      btns[i].classList.add('photography__gallery-btn_active');
    }
  }
}
var _iterator = _createForOfIteratorHelper(btns),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var btn = _step.value;
    btn.addEventListener('click', showPhotoList);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/carousel/carousel */ "./src/blocks/modules/carousel/carousel.js");
/* harmony import */ var _modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_carousel_m_carousel_m__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/carousel-m/carousel-m */ "./src/blocks/modules/carousel-m/carousel-m.js");
/* harmony import */ var _modules_carousel_m_carousel_m__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_carousel_m_carousel_m__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_photography_photography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/photography/photography */ "./src/blocks/modules/photography/photography.js");
/* harmony import */ var _modules_photography_photography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_photography_photography__WEBPACK_IMPORTED_MODULE_3__);

// import "%modules%/footer/footer";





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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=main.js.map