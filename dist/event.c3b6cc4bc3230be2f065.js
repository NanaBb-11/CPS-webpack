/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconst company_more = document.querySelector('.mySwiper-brand__more-input');\r\ncompany_more.addEventListener('click', function (){\r\n    const company_block = document.querySelector('.mySwiper-brand__wrapper');\r\n    const company_checkbox = document.querySelector('.mySwiper-brand__more-checkbox');\r\n    const company_more_text = document.querySelector('.mySwiper-brand__more-text');\r\n    if (company_more.checked){\r\n        company_block.style.maxHeight = '300px';\r\n        company_block.style.transition = '1s';\r\n        company_checkbox.style.transform = 'rotate(180deg)';\r\n        company_more_text.textContent = 'Скрыть';\r\n    }\r\n    else {\r\n        company_block.style.maxHeight = 170 + 'px';\r\n        company_block.style.transition = '1.5s';\r\n        company_checkbox.style.transform = 'rotate(360deg)';\r\n        company_more_text.textContent = 'Показать все';\r\n    }\r\n});\r\nconst devices_more = document.querySelector('.mySwiper-devices__more-input');\r\ndevices_more.addEventListener('click', function (){\r\n    const device_block = document.querySelector('.mySwiper-devices__wrapper');\r\n    const device_checkbox = document.querySelector('.mySwiper-devices__more-checkbox');\r\n    const device_more_text = document.querySelector('.mySwiper-devices__more-text');\r\n    if (devices_more.checked){\r\n        device_block.style.maxHeight = '600px';\r\n        device_block.style.transition = '1s';\r\n        device_checkbox.style.transform = 'rotate(180deg)';\r\n        device_more_text.textContent = 'Скрыть';\r\n    }\r\n    else {\r\n        device_block.style.maxHeight = 170 + 'px';\r\n        device_block.style.transition = '1.5s';\r\n        device_checkbox.style.transform = 'rotate(360deg)';\r\n        device_more_text.textContent = 'Показать все';\r\n    }\r\n});\r\n\r\nconst side_menu = document.querySelector('.side-menu');\r\nconst content = document.querySelector('.body-content');\r\nconst close_side_menu = document.querySelector('.side-menu-header__btn-back');\r\nconst open_side_menu = document.querySelector('.header-menu__burger');\r\nopen_side_menu.addEventListener('click', function (){\r\n    side_menu.style.transform = 'translateX(0%)';\r\n    side_menu.style.boxShadow = '-2px 0 4px rgba(69, 79, 126, 0.02), 16px 0 52px rgba(14, 24, 80, 0.2)';\r\n    content.style.opacity = '0.5';\r\n\r\n});\r\nclose_side_menu.addEventListener('click', function (){\r\n    side_menu.style.transform = 'translateX(-100%)';\r\n    side_menu.style.boxShadow = 'none';\r\n    content.style.opacity = '1';\r\n});\r\n\r\nconst side_feedback = document.querySelector('.feedback__aside');\r\nconst side_call = document.querySelector('.call__aside');\r\nconst open_side_feedback = document.querySelectorAll('.repair-btn');\r\nconst open_side_call = document.querySelectorAll('.check-status-btn');\r\nconst close_side_feedback = document.querySelector('.feedback__close-btn');\r\nconst close_side_call = document.querySelector('.call__close-btn');\r\n\r\nfor (let i = 0; i < open_side_feedback.length; i++){\r\n    open_side_feedback[i].addEventListener('click', function (){\r\n        side_feedback.style.transform = 'translateX(0%)';\r\n        content.style.opacity = '0.5';\r\n    });\r\n}\r\nfor (let i = 0; i < open_side_feedback.length; i++){\r\n    open_side_call[i].addEventListener('click', function (){\r\n        side_call.style.transform = 'translateX(0%)';\r\n        content.style.opacity = '0.5';\r\n    });\r\n}\r\nclose_side_feedback.addEventListener('click', function (){\r\n    side_feedback.style.transform = 'translateX(150%)';\r\n    content.style.opacity = '1';\r\n});\r\n\r\nclose_side_call.addEventListener('click', function (){\r\n    side_call.style.transform = 'translateX(150%)';\r\n    content.style.opacity = '1';\r\n});\n\n//# sourceURL=webpack://latproject/./src/event.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/event.js"]();
/******/ 	
/******/ })()
;