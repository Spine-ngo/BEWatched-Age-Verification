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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/scripts/bewatched-options.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/scripts/bewatched-options.js":
/*!*******************************************!*\
  !*** ../src/scripts/bewatched-options.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// mock MODELS array, can be overwrited in the global settings object (see index.html file)\nvar MODELS = [{\n  id: 1,\n  avatar: 'images/model-placeholder.png',\n  // model image\n  underaged: false,\n  // under 18?\n  gender: 'f' // f = female, m = male\n\n}, {\n  id: 2,\n  avatar: 'images/model-placeholder.png',\n  underaged: true,\n  gender: 'm'\n}, {\n  id: 3,\n  avatar: 'images/model-placeholder.png',\n  underaged: false,\n  gender: 'f'\n}]; // All texts used in this plugin, can be overwritten by using the global settings object (see index.html file)\n\nvar COPY = {\n  agecheck: 'This is an <strong>adult-only</strong> website',\n  consent: 'By continuing to browse this website, you aggree to our <a href=\"#\">cookie policy</a> and <a href=\"#\">terms and conditions</a>.',\n  consentButton: 'I am older than 18',\n  agecheckFooter: '<a href=\"#\">More information</a>',\n  questionIntro: 'But more important...',\n  question: 'Is #G# 18 years or older?',\n  yes: 'Yes',\n  no: 'No',\n  genderX: 'this person',\n  genderM: 'he',\n  genderF: 'she',\n  genderXFull: 'this person',\n  genderMFull: 'this boy',\n  genderFFull: 'this girl',\n  correct: 'Correct, #G# is <strong>underaged</strong>',\n  correctContent: 'But you can admit, it\\'s not always easy to see if someone is of age. At the moment this picture was taken, #GF# was active as a sex worker.',\n  incorrect: 'Unfortunately, #G# is <strong>underaged</strong>',\n  incorrectContent: 'As you can see, it\\'s not always easy to see if someone is of age. Because at the moment this picture was taken, #GF# was active as a sex worker.',\n  info: \"<p>We do our best to avoid working with underaged sex workers, but we can never be 100% succesful. In the future, when in doubt, but still want to meet? Try asking for an ID for example. Only then will you be sure to not do anything illegal.</p>\\n  <p>And if it turns out the sex worker is indeed underaged? Report this anonymously to Child Focus, by calling tollfree to <a href=\\\"tel:116 000\\\">116 000</a> or by using <a href=\\\"https://childfocus.be/en/child-sexual-abuse-material-reporting-form\\\" target=\\\"_blank\\\">this online form</a>. And help us in the combat against sexual exploitation of children.</p>\",\n  close: 'Go to the website'\n}; // Logos used in the footer at the last step\n\nvar LOGOS = null;\nwindow.BWAV_SETTINGS = {\n  debug: false,\n  // enable for logging\n  close: true,\n  // show a close button at the right-top corner of the overlay\n  accentColor: 'green',\n  // the highlight color used for buttons, links, specific text\n  accentTextColor: 'white',\n  // the text color for buttons\n  shadowColor: 'rgba(0,128,0,.25)',\n  // the shadow color, used for example under the logo/avatar\n  logo: 'images/logo.png',\n  // link to a specific logo, now a placeholder\n  ageCheck: true,\n  // show an age-check before the survey\n  blur: false,\n  // blur the main website content when the overlay is shown\n  modelsURL: '',\n  // default url to models array on CDN\n  models: MODELS,\n  // models array, see above\n  cookieAge: 30,\n  // amount of days for the cookie lifetime\n  cookieName: 'bwav',\n  // cookie name\n  cookieShowMax: 0,\n  // the amount of times the survey can be shown, 0 = always\n  eventPrefix: 'bwav:',\n  // a prefix for the custom events that are triggered by this plugin\n  logosURL: '',\n  // default URL to logos array on CDN\n  logos: LOGOS,\n  // array of logos, see above\n  content: COPY // copy object, see above\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3NjcmlwdHMvYmV3YXRjaGVkLW9wdGlvbnMuanM/YWQ4NyJdLCJuYW1lcyI6WyJNT0RFTFMiLCJpZCIsImF2YXRhciIsInVuZGVyYWdlZCIsImdlbmRlciIsIkNPUFkiLCJhZ2VjaGVjayIsImNvbnNlbnQiLCJjb25zZW50QnV0dG9uIiwiYWdlY2hlY2tGb290ZXIiLCJxdWVzdGlvbkludHJvIiwicXVlc3Rpb24iLCJ5ZXMiLCJubyIsImdlbmRlclgiLCJnZW5kZXJNIiwiZ2VuZGVyRiIsImdlbmRlclhGdWxsIiwiZ2VuZGVyTUZ1bGwiLCJnZW5kZXJGRnVsbCIsImNvcnJlY3QiLCJjb3JyZWN0Q29udGVudCIsImluY29ycmVjdCIsImluY29ycmVjdENvbnRlbnQiLCJpbmZvIiwiY2xvc2UiLCJMT0dPUyIsIndpbmRvdyIsIkJXQVZfU0VUVElOR1MiLCJkZWJ1ZyIsImFjY2VudENvbG9yIiwiYWNjZW50VGV4dENvbG9yIiwic2hhZG93Q29sb3IiLCJsb2dvIiwiYWdlQ2hlY2siLCJibHVyIiwibW9kZWxzVVJMIiwibW9kZWxzIiwiY29va2llQWdlIiwiY29va2llTmFtZSIsImNvb2tpZVNob3dNYXgiLCJldmVudFByZWZpeCIsImxvZ29zVVJMIiwibG9nb3MiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQU1BLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRSw4QkFGVjtBQUUwQztBQUN4Q0MsV0FBUyxFQUFFLEtBSGI7QUFHMEM7QUFDeENDLFFBQU0sRUFBRSxHQUpWLENBSTBDOztBQUoxQyxDQURhLEVBT2I7QUFDRUgsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFLDhCQUZWO0FBR0VDLFdBQVMsRUFBRSxJQUhiO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBUGEsRUFhYjtBQUNFSCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUUsOEJBRlY7QUFHRUMsV0FBUyxFQUFFLEtBSGI7QUFJRUMsUUFBTSxFQUFFO0FBSlYsQ0FiYSxDQUFmLEMsQ0FxQkE7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFVBQVEsRUFBRSxnREFEQztBQUVYQyxTQUFPLEVBQUUsaUlBRkU7QUFHWEMsZUFBYSxFQUFFLG9CQUhKO0FBSVhDLGdCQUFjLEVBQUUsa0NBSkw7QUFNWEMsZUFBYSxFQUFFLHVCQU5KO0FBT1hDLFVBQVEsRUFBRSwyQkFQQztBQVFYQyxLQUFHLEVBQUUsS0FSTTtBQVNYQyxJQUFFLEVBQUUsSUFUTztBQVdYQyxTQUFPLEVBQUUsYUFYRTtBQVlYQyxTQUFPLEVBQUUsSUFaRTtBQWFYQyxTQUFPLEVBQUUsS0FiRTtBQWVYQyxhQUFXLEVBQUUsYUFmRjtBQWdCWEMsYUFBVyxFQUFFLFVBaEJGO0FBaUJYQyxhQUFXLEVBQUUsV0FqQkY7QUFtQlhDLFNBQU8sRUFBRSw0Q0FuQkU7QUFvQlhDLGdCQUFjLEVBQUUsOElBcEJMO0FBc0JYQyxXQUFTLEVBQUUsa0RBdEJBO0FBdUJYQyxrQkFBZ0IsRUFBRSxtSkF2QlA7QUF5QlhDLE1BQUkscW1CQXpCTztBQTRCWEMsT0FBSyxFQUFFO0FBNUJJLENBQWIsQyxDQStCQTs7QUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBZDtBQUVBQyxNQUFNLENBQUNDLGFBQVAsR0FBdUI7QUFDckJDLE9BQUssRUFBRSxLQURjO0FBQ2U7QUFFcENKLE9BQUssRUFBRSxJQUhjO0FBR2M7QUFFbkNLLGFBQVcsRUFBRSxPQUxRO0FBS2U7QUFDcENDLGlCQUFlLEVBQUUsT0FOSTtBQU1lO0FBQ3BDQyxhQUFXLEVBQUUsbUJBUFE7QUFPZTtBQUVwQ0MsTUFBSSxFQUFFLGlCQVRlO0FBU2U7QUFFcENDLFVBQVEsRUFBRSxJQVhXO0FBV2U7QUFDcENDLE1BQUksRUFBRSxLQVplO0FBWWU7QUFFcENDLFdBQVMsRUFBRSxFQWRVO0FBY2U7QUFDcENDLFFBQU0sRUFBRXJDLE1BZmE7QUFlZTtBQUVwQ3NDLFdBQVMsRUFBRSxFQWpCVTtBQWlCZTtBQUNwQ0MsWUFBVSxFQUFFLE1BbEJTO0FBa0JlO0FBQ3BDQyxlQUFhLEVBQUUsQ0FuQk07QUFtQmU7QUFFcENDLGFBQVcsRUFBRSxPQXJCUTtBQXFCZTtBQUVwQ0MsVUFBUSxFQUFFLEVBdkJXO0FBdUJlO0FBQ3BDQyxPQUFLLEVBQUVqQixLQXhCYztBQXdCZTtBQUVwQ2tCLFNBQU8sRUFBRXZDLElBMUJZLENBMEJlOztBQTFCZixDQUF2QiIsImZpbGUiOiIuLi9zcmMvc2NyaXB0cy9iZXdhdGNoZWQtb3B0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vY2sgTU9ERUxTIGFycmF5LCBjYW4gYmUgb3ZlcndyaXRlZCBpbiB0aGUgZ2xvYmFsIHNldHRpbmdzIG9iamVjdCAoc2VlIGluZGV4Lmh0bWwgZmlsZSlcbmNvbnN0IE1PREVMUyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGF2YXRhcjogJ2ltYWdlcy9tb2RlbC1wbGFjZWhvbGRlci5wbmcnLCAvLyBtb2RlbCBpbWFnZVxuICAgIHVuZGVyYWdlZDogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgICAvLyB1bmRlciAxOD9cbiAgICBnZW5kZXI6ICdmJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZiA9IGZlbWFsZSwgbSA9IG1hbGVcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGF2YXRhcjogJ2ltYWdlcy9tb2RlbC1wbGFjZWhvbGRlci5wbmcnLFxuICAgIHVuZGVyYWdlZDogdHJ1ZSxcbiAgICBnZW5kZXI6ICdtJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGF2YXRhcjogJ2ltYWdlcy9tb2RlbC1wbGFjZWhvbGRlci5wbmcnLFxuICAgIHVuZGVyYWdlZDogZmFsc2UsXG4gICAgZ2VuZGVyOiAnZicsXG4gIH0sXG5dO1xuXG4vLyBBbGwgdGV4dHMgdXNlZCBpbiB0aGlzIHBsdWdpbiwgY2FuIGJlIG92ZXJ3cml0dGVuIGJ5IHVzaW5nIHRoZSBnbG9iYWwgc2V0dGluZ3Mgb2JqZWN0IChzZWUgaW5kZXguaHRtbCBmaWxlKVxuY29uc3QgQ09QWSA9IHtcbiAgYWdlY2hlY2s6ICdUaGlzIGlzIGFuIDxzdHJvbmc+YWR1bHQtb25seTwvc3Ryb25nPiB3ZWJzaXRlJyxcbiAgY29uc2VudDogJ0J5IGNvbnRpbnVpbmcgdG8gYnJvd3NlIHRoaXMgd2Vic2l0ZSwgeW91IGFnZ3JlZSB0byBvdXIgPGEgaHJlZj1cIiNcIj5jb29raWUgcG9saWN5PC9hPiBhbmQgPGEgaHJlZj1cIiNcIj50ZXJtcyBhbmQgY29uZGl0aW9uczwvYT4uJyxcbiAgY29uc2VudEJ1dHRvbjogJ0kgYW0gb2xkZXIgdGhhbiAxOCcsXG4gIGFnZWNoZWNrRm9vdGVyOiAnPGEgaHJlZj1cIiNcIj5Nb3JlIGluZm9ybWF0aW9uPC9hPicsXG5cbiAgcXVlc3Rpb25JbnRybzogJ0J1dCBtb3JlIGltcG9ydGFudC4uLicsXG4gIHF1ZXN0aW9uOiAnSXMgI0cjIDE4IHllYXJzIG9yIG9sZGVyPycsXG4gIHllczogJ1llcycsXG4gIG5vOiAnTm8nLFxuXG4gIGdlbmRlclg6ICd0aGlzIHBlcnNvbicsXG4gIGdlbmRlck06ICdoZScsXG4gIGdlbmRlckY6ICdzaGUnLFxuXG4gIGdlbmRlclhGdWxsOiAndGhpcyBwZXJzb24nLFxuICBnZW5kZXJNRnVsbDogJ3RoaXMgYm95JyxcbiAgZ2VuZGVyRkZ1bGw6ICd0aGlzIGdpcmwnLFxuXG4gIGNvcnJlY3Q6ICdDb3JyZWN0LCAjRyMgaXMgPHN0cm9uZz51bmRlcmFnZWQ8L3N0cm9uZz4nLFxuICBjb3JyZWN0Q29udGVudDogJ0J1dCB5b3UgY2FuIGFkbWl0LCBpdFxcJ3Mgbm90IGFsd2F5cyBlYXN5IHRvIHNlZSBpZiBzb21lb25lIGlzIG9mIGFnZS4gQXQgdGhlIG1vbWVudCB0aGlzIHBpY3R1cmUgd2FzIHRha2VuLCAjR0YjIHdhcyBhY3RpdmUgYXMgYSBzZXggd29ya2VyLicsXG5cbiAgaW5jb3JyZWN0OiAnVW5mb3J0dW5hdGVseSwgI0cjIGlzIDxzdHJvbmc+dW5kZXJhZ2VkPC9zdHJvbmc+JyxcbiAgaW5jb3JyZWN0Q29udGVudDogJ0FzIHlvdSBjYW4gc2VlLCBpdFxcJ3Mgbm90IGFsd2F5cyBlYXN5IHRvIHNlZSBpZiBzb21lb25lIGlzIG9mIGFnZS4gQmVjYXVzZSBhdCB0aGUgbW9tZW50IHRoaXMgcGljdHVyZSB3YXMgdGFrZW4sICNHRiMgd2FzIGFjdGl2ZSBhcyBhIHNleCB3b3JrZXIuJyxcblxuICBpbmZvOiBgPHA+V2UgZG8gb3VyIGJlc3QgdG8gYXZvaWQgd29ya2luZyB3aXRoIHVuZGVyYWdlZCBzZXggd29ya2VycywgYnV0IHdlIGNhbiBuZXZlciBiZSAxMDAlIHN1Y2Nlc2Z1bC4gSW4gdGhlIGZ1dHVyZSwgd2hlbiBpbiBkb3VidCwgYnV0IHN0aWxsIHdhbnQgdG8gbWVldD8gVHJ5IGFza2luZyBmb3IgYW4gSUQgZm9yIGV4YW1wbGUuIE9ubHkgdGhlbiB3aWxsIHlvdSBiZSBzdXJlIHRvIG5vdCBkbyBhbnl0aGluZyBpbGxlZ2FsLjwvcD5cbiAgPHA+QW5kIGlmIGl0IHR1cm5zIG91dCB0aGUgc2V4IHdvcmtlciBpcyBpbmRlZWQgdW5kZXJhZ2VkPyBSZXBvcnQgdGhpcyBhbm9ueW1vdXNseSB0byBDaGlsZCBGb2N1cywgYnkgY2FsbGluZyB0b2xsZnJlZSB0byA8YSBocmVmPVwidGVsOjExNiAwMDBcIj4xMTYgMDAwPC9hPiBvciBieSB1c2luZyA8YSBocmVmPVwiaHR0cHM6Ly9jaGlsZGZvY3VzLmJlL2VuL2NoaWxkLXNleHVhbC1hYnVzZS1tYXRlcmlhbC1yZXBvcnRpbmctZm9ybVwiIHRhcmdldD1cIl9ibGFua1wiPnRoaXMgb25saW5lIGZvcm08L2E+LiBBbmQgaGVscCB1cyBpbiB0aGUgY29tYmF0IGFnYWluc3Qgc2V4dWFsIGV4cGxvaXRhdGlvbiBvZiBjaGlsZHJlbi48L3A+YCxcblxuICBjbG9zZTogJ0dvIHRvIHRoZSB3ZWJzaXRlJyxcbn07XG5cbi8vIExvZ29zIHVzZWQgaW4gdGhlIGZvb3RlciBhdCB0aGUgbGFzdCBzdGVwXG5jb25zdCBMT0dPUyA9IG51bGw7XG5cbndpbmRvdy5CV0FWX1NFVFRJTkdTID0ge1xuICBkZWJ1ZzogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgICAvLyBlbmFibGUgZm9yIGxvZ2dpbmdcblxuICBjbG9zZTogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgYSBjbG9zZSBidXR0b24gYXQgdGhlIHJpZ2h0LXRvcCBjb3JuZXIgb2YgdGhlIG92ZXJsYXlcblxuICBhY2NlbnRDb2xvcjogJ2dyZWVuJywgICAgICAgICAgICAgICAvLyB0aGUgaGlnaGxpZ2h0IGNvbG9yIHVzZWQgZm9yIGJ1dHRvbnMsIGxpbmtzLCBzcGVjaWZpYyB0ZXh0XG4gIGFjY2VudFRleHRDb2xvcjogJ3doaXRlJywgICAgICAgICAgIC8vIHRoZSB0ZXh0IGNvbG9yIGZvciBidXR0b25zXG4gIHNoYWRvd0NvbG9yOiAncmdiYSgwLDEyOCwwLC4yNSknLCAgIC8vIHRoZSBzaGFkb3cgY29sb3IsIHVzZWQgZm9yIGV4YW1wbGUgdW5kZXIgdGhlIGxvZ28vYXZhdGFyXG5cbiAgbG9nbzogJ2ltYWdlcy9sb2dvLnBuZycsICAgICAgICAgICAgLy8gbGluayB0byBhIHNwZWNpZmljIGxvZ28sIG5vdyBhIHBsYWNlaG9sZGVyXG5cbiAgYWdlQ2hlY2s6IHRydWUsICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBhbiBhZ2UtY2hlY2sgYmVmb3JlIHRoZSBzdXJ2ZXlcbiAgYmx1cjogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmx1ciB0aGUgbWFpbiB3ZWJzaXRlIGNvbnRlbnQgd2hlbiB0aGUgb3ZlcmxheSBpcyBzaG93blxuICBcbiAgbW9kZWxzVVJMOiAnJywgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB1cmwgdG8gbW9kZWxzIGFycmF5IG9uIENETlxuICBtb2RlbHM6IE1PREVMUywgICAgICAgICAgICAgICAgICAgICAvLyBtb2RlbHMgYXJyYXksIHNlZSBhYm92ZVxuXG4gIGNvb2tpZUFnZTogMzAsICAgICAgICAgICAgICAgICAgICAgIC8vIGFtb3VudCBvZiBkYXlzIGZvciB0aGUgY29va2llIGxpZmV0aW1lXG4gIGNvb2tpZU5hbWU6ICdid2F2JywgICAgICAgICAgICAgICAgIC8vIGNvb2tpZSBuYW1lXG4gIGNvb2tpZVNob3dNYXg6IDAsICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhbW91bnQgb2YgdGltZXMgdGhlIHN1cnZleSBjYW4gYmUgc2hvd24sIDAgPSBhbHdheXNcblxuICBldmVudFByZWZpeDogJ2J3YXY6JywgICAgICAgICAgICAgICAvLyBhIHByZWZpeCBmb3IgdGhlIGN1c3RvbSBldmVudHMgdGhhdCBhcmUgdHJpZ2dlcmVkIGJ5IHRoaXMgcGx1Z2luXG5cbiAgbG9nb3NVUkw6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBVUkwgdG8gbG9nb3MgYXJyYXkgb24gQ0ROXG4gIGxvZ29zOiBMT0dPUywgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIGxvZ29zLCBzZWUgYWJvdmVcblxuICBjb250ZW50OiBDT1BZLCAgICAgICAgICAgICAgICAgICAgICAvLyBjb3B5IG9iamVjdCwgc2VlIGFib3ZlXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../src/scripts/bewatched-options.js\n");

/***/ })

/******/ });