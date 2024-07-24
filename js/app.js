/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

         __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
            /* harmony export */
         });
         // проверка поддержки webp, добавление класса webp или no-webp
         function isWebp() {
            //проверка поддержки webp
            function testWebP(callback) {

               var webP = new Image();
               webP.onload = webP.onerror = function () {
                  callback(webP.height == 2);
               };
               webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }

            //добавление класса
            testWebP(function (support) {
               if (support == true) {
                  document.querySelector('body').classList.add('webp');
               } else {
                  document.querySelector('body').classList.add('no-webp');
               }
            });
         }

         /***/
      })
/******/]);
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
         /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
         /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
   }
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
               /******/
            }
            /******/
         }
         /******/
      };
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
         }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
         /******/
      };
      /******/
   })();
   /******/
   /************************************************************************/
   var __webpack_exports__ = {};
   // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
   (() => {
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


      _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

      //-----------------БУРГЕР МЕНЮ---------------------------
      let iconMenu = document.querySelector('.menu__icon');
      let menuBody = document.querySelector('.menu__body');

      if (iconMenu) {
         iconMenu.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
         });
      }

      document.addEventListener('click', (event) => {
         if (!event.target.closest('.menu__body') && !event.target.closest('.menu__icon')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }
      });

      // Добавляем обработчики событий для ссылок внутри меню
      let menuLinks = document.querySelectorAll('.menu__link');
      if (menuLinks.length > 0) {
         menuLinks.forEach(link => {
            link.addEventListener('click', function () {
               document.body.classList.remove('_lock');
               iconMenu.classList.remove('_active');
               menuBody.classList.remove('_active');
            });
         });
      }


      //-------------------------------Прелоадер и плавное появление блоков---------------------------------
      if (document.readyState === "complete") {
         init();
      } else {
         window.addEventListener("load", init);
      }
      function init() {
         let preloader = document.querySelector('.preloader');
         if (preloader) {
            setTimeout(() => {
               preloader.style.display = 'none';

               function onEntry(entry) {
                  entry.forEach(change => {
                     if (change.isIntersecting) {
                        change.target.classList.add('element-show');
                     }
                  });
               }

               let options = { threshold: [0.1] };
               let observer = new IntersectionObserver(onEntry, options);
               let elements = document.querySelectorAll('.element-animation');
               for (let elm of elements) {
                  observer.observe(elm);
               }
            }, 800);
         }
      }


      /*------------------------------Анимация контейнера---------------------------*/
      document.addEventListener('mousemove', (event) => {
         const image = document.querySelector('.animated-image');
         const container = document.querySelector('.container-img');

         const rect = container.getBoundingClientRect();
         const mouseX = event.clientX - rect.left;
         const mouseY = event.clientY - rect.top;

         const centerX = rect.width / 2;
         const centerY = rect.height / 2;

         const rotateX = (mouseY - centerY) / centerY * 5;
         const rotateY = (mouseX - centerX) / centerX * 5;

         image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });


      /*------------------------------Анимация закрашивания текста---------------------------*/
      document.addEventListener('DOMContentLoaded', () => {
         const scrollText = document.querySelector('.scroll-text');
         const text = scrollText.textContent.trim();
         scrollText.innerHTML = '';
         const characters = text.split('');
         characters.forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            scrollText.appendChild(span);
         });
         const spans = document.querySelectorAll('.scroll-text span');
         document.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight * 0.7;
            spans.forEach(span => {
               const spanPosition = span.getBoundingClientRect().top + window.scrollY;
               if (scrollPosition > spanPosition) {
                  span.style.color = 'black';
               } else {
                  span.style.color = '#f1f1f1';
               }
            });
         });
         document.dispatchEvent(new Event('scroll'));
      });


      /*------------------------------Slider---------------------------*/
      const documentSlider = new Swiper('.document__slider', {
         loop: true,
         navigation: {
            nextEl: '.document__slider-next',
            prevEl: '.document__slider-prev',
         },
         freeMode: false,
         spaceBetween: 20,
         watchOverflow: true,
         grabCursor: true,
         breakpoints: {
            320: {
               slidesPerView: 1.2,
            },
            560: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            }
         },
      });


      /*------------------------------Checkbox---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const types = document.querySelectorAll('.price__type');
         types.forEach(type => {
            type.addEventListener('click', function () {
               types.forEach(item => item.classList.remove('active'));
               type.classList.add('active');
            });
         });
      });


      /*------------------------------Slider Отзывы---------------------------*/
      document.addEventListener('DOMContentLoaded', () => {
         const tabs = document.querySelectorAll('.testimonials__tab');
         const contents = document.querySelectorAll('.testimonials__content');
         let swiperInstances = {};
         let audioElements = [];
         const initializeSwiper = (content) => {
            const swiperContainer = content.querySelector('.swiper');
            if (swiperContainer && !swiperContainer.swiper) {
               swiperInstances[content.dataset.content] = new Swiper(swiperContainer, {
                  loop: true,
                  navigation: {
                     nextEl: content.querySelector('.testimonials__button-next'),
                     prevEl: content.querySelector('.testimonials__button-prev'),
                  },
                  freeMode: false,
                  centeredSlides: false,
                  watchOverflow: true,
                  grabCursor: true,
                  breakpoints: {
                     320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                     },
                     560: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                     },
                     992: {
                        slidesPerView: 4,
                        spaceBetween: 26,
                     }
                  },
               });
            }
         };

         tabs.forEach(tab => {
            tab.addEventListener('click', () => {
               const targetContent = document.querySelector(`.testimonials__content[data-content="${tab.dataset.tab}"]`);

               tabs.forEach(t => t.classList.remove('active'));
               tab.classList.add('active');

               contents.forEach(content => {
                  content.classList.remove('active');
                  if (content === targetContent) {
                     content.classList.add('active');
                     initializeSwiper(content);
                  }
               });
               pauseAllAudio();
            });
         });
         const pauseAllAudio = (currentAudio) => {
            audioElements.forEach(audio => {
               if (!currentAudio || audio !== currentAudio) {
                  audio.pause();
                  audio.currentTime = 0;
               }
            });
         };
         contents.forEach(content => {
            const audios = content.querySelectorAll('audio');
            audios.forEach(audio => {
               audioElements.push(audio);
               audio.addEventListener('play', () => pauseAllAudio(audio));
            });
         });
         initializeSwiper(document.querySelector('.testimonials__content.active'));
      });




      /*------------------------------Open Callback---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const openCallbackElements = document.querySelectorAll('.open-callback');
         const callbackDiv = document.querySelector('.callback');
         const callbackBody = document.querySelector('.callback__body');
         if (callbackDiv && callbackBody) {
            openCallbackElements.forEach(function (element) {
               element.addEventListener('click', function (event) {
                  event.stopPropagation();
                  callbackDiv.classList.add('open');
                  document.body.classList.add('opened-callback');
               });
            });
            document.addEventListener('click', function (event) {
               const isClickInsideCallbackBody = callbackBody.contains(event.target);
               const isClickOnOpenCallback = event.target.classList.contains('open-callback');
               if (!isClickInsideCallbackBody && !isClickOnOpenCallback) {
                  callbackDiv.classList.remove('open');
                  document.body.classList.remove('opened-callback');
               }
            });
            callbackBody.addEventListener('click', function (event) {
               event.stopPropagation();
            });
         }
      });


      /*------------------------------Form---------------------------*/
      document.addEventListener('DOMContentLoaded', () => {
         const formItems = document.querySelectorAll('.callback__form-item input');

         formItems.forEach(item => {
            item.addEventListener('input', () => {
               if (item.value.trim() !== '') {
                  item.parentElement.classList.add('added');
               } else {
                  item.parentElement.classList.remove('added');
               }
            });
         });
      });

      /*------------------------------Thank Message---------------------------*/
      document.querySelector('.submit').addEventListener('click', function (event) {
         event.preventDefault();
         document.querySelector('.callback__body').classList.add('sended');
      });
   })();

   /******/
})()
   ;