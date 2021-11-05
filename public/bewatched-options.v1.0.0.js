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

eval("// All texts used in this plugin, can be overwritten by using the global settings object (see index.html file)\nvar COPY = {\n  agecheck: 'This is an <strong>adult-only</strong> website',\n  consent: 'By continuing to browse this website, you agree to our <a href=\"#\">cookie policy</a> and <a href=\"#\">terms and conditions</a>.',\n  consentButton: 'I am older than 18',\n  agecheckFooter: '<a href=\"#\">More information</a>',\n  close: 'Go to the website'\n};\nwindow.BWAV_SETTINGS = {\n  debug: true,\n  // enable for logging\n  close: true,\n  // show a close button at the right-top corner of the overlay\n  accentColor: 'green',\n  // the highlight color used for buttons, links, specific text\n  accentTextColor: 'white',\n  // the text color for buttons\n  shadowColor: 'rgba(0,128,0,.25)',\n  // the shadow color, used for example under the logo/avatar\n  logo: 'images/logo.png',\n  // link to a specific logo, now a placeholder\n  ageCheck: true,\n  // show an age-check before the survey\n  blur: false,\n  // blur the main website content when the overlay is shown\n  cookieAge: 30,\n  // amount of days for the cookie lifetime\n  cookieName: 'bwav',\n  // cookie name\n  cookieShowMax: 0,\n  // the amount of times the survey can be shown, 0 = always\n  eventPrefix: 'bwav:',\n  // a prefix for the custom events that are triggered by this plugin\n  content: COPY,\n  // copy object, see above\n  brand: {\n    // the info that will be used for branding of the popup\n    name: 'this website',\n    logo: 'https://via.placeholder.com/180',\n    url: 'https://www.google.com'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3NjcmlwdHMvYmV3YXRjaGVkLW9wdGlvbnMuanM/YWQ4NyJdLCJuYW1lcyI6WyJDT1BZIiwiYWdlY2hlY2siLCJjb25zZW50IiwiY29uc2VudEJ1dHRvbiIsImFnZWNoZWNrRm9vdGVyIiwiY2xvc2UiLCJ3aW5kb3ciLCJCV0FWX1NFVFRJTkdTIiwiZGVidWciLCJhY2NlbnRDb2xvciIsImFjY2VudFRleHRDb2xvciIsInNoYWRvd0NvbG9yIiwibG9nbyIsImFnZUNoZWNrIiwiYmx1ciIsImNvb2tpZUFnZSIsImNvb2tpZU5hbWUiLCJjb29raWVTaG93TWF4IiwiZXZlbnRQcmVmaXgiLCJjb250ZW50IiwiYnJhbmQiLCJuYW1lIiwidXJsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQU1BLElBQUksR0FBRztBQUNYQyxVQUFRLEVBQUUsZ0RBREM7QUFFWEMsU0FBTyxFQUFFLGdJQUZFO0FBR1hDLGVBQWEsRUFBRSxvQkFISjtBQUlYQyxnQkFBYyxFQUFFLGtDQUpMO0FBTVhDLE9BQUssRUFBRTtBQU5JLENBQWI7QUFTQUMsTUFBTSxDQUFDQyxhQUFQLEdBQXVCO0FBQ3JCQyxPQUFLLEVBQUUsSUFEYztBQUNjO0FBRW5DSCxPQUFLLEVBQUUsSUFIYztBQUdjO0FBRW5DSSxhQUFXLEVBQUUsT0FMUTtBQUtlO0FBQ3BDQyxpQkFBZSxFQUFFLE9BTkk7QUFNZTtBQUNwQ0MsYUFBVyxFQUFFLG1CQVBRO0FBT2U7QUFFcENDLE1BQUksRUFBRSxpQkFUZTtBQVNlO0FBRXBDQyxVQUFRLEVBQUUsSUFYVztBQVdlO0FBQ3BDQyxNQUFJLEVBQUUsS0FaZTtBQVllO0FBRXBDQyxXQUFTLEVBQUUsRUFkVTtBQWNlO0FBQ3BDQyxZQUFVLEVBQUUsTUFmUztBQWVlO0FBQ3BDQyxlQUFhLEVBQUUsQ0FoQk07QUFnQmU7QUFFcENDLGFBQVcsRUFBRSxPQWxCUTtBQWtCZTtBQUVwQ0MsU0FBTyxFQUFFbkIsSUFwQlk7QUFvQmU7QUFFcENvQixPQUFLLEVBQUU7QUFBNEI7QUFDakNDLFFBQUksRUFBRSxjQUREO0FBRUxULFFBQUksRUFBRSxpQ0FGRDtBQUdMVSxPQUFHLEVBQUU7QUFIQTtBQXRCYyxDQUF2QiIsImZpbGUiOiIuLi9zcmMvc2NyaXB0cy9iZXdhdGNoZWQtb3B0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFsbCB0ZXh0cyB1c2VkIGluIHRoaXMgcGx1Z2luLCBjYW4gYmUgb3ZlcndyaXR0ZW4gYnkgdXNpbmcgdGhlIGdsb2JhbCBzZXR0aW5ncyBvYmplY3QgKHNlZSBpbmRleC5odG1sIGZpbGUpXHJcbmNvbnN0IENPUFkgPSB7XHJcbiAgYWdlY2hlY2s6ICdUaGlzIGlzIGFuIDxzdHJvbmc+YWR1bHQtb25seTwvc3Ryb25nPiB3ZWJzaXRlJyxcclxuICBjb25zZW50OiAnQnkgY29udGludWluZyB0byBicm93c2UgdGhpcyB3ZWJzaXRlLCB5b3UgYWdyZWUgdG8gb3VyIDxhIGhyZWY9XCIjXCI+Y29va2llIHBvbGljeTwvYT4gYW5kIDxhIGhyZWY9XCIjXCI+dGVybXMgYW5kIGNvbmRpdGlvbnM8L2E+LicsXHJcbiAgY29uc2VudEJ1dHRvbjogJ0kgYW0gb2xkZXIgdGhhbiAxOCcsXHJcbiAgYWdlY2hlY2tGb290ZXI6ICc8YSBocmVmPVwiI1wiPk1vcmUgaW5mb3JtYXRpb248L2E+JyxcclxuXHJcbiAgY2xvc2U6ICdHbyB0byB0aGUgd2Vic2l0ZScsXHJcbn07XHJcblxyXG53aW5kb3cuQldBVl9TRVRUSU5HUyA9IHtcclxuICBkZWJ1ZzogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuYWJsZSBmb3IgbG9nZ2luZ1xyXG5cclxuICBjbG9zZTogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgYSBjbG9zZSBidXR0b24gYXQgdGhlIHJpZ2h0LXRvcCBjb3JuZXIgb2YgdGhlIG92ZXJsYXlcclxuXHJcbiAgYWNjZW50Q29sb3I6ICdncmVlbicsICAgICAgICAgICAgICAgLy8gdGhlIGhpZ2hsaWdodCBjb2xvciB1c2VkIGZvciBidXR0b25zLCBsaW5rcywgc3BlY2lmaWMgdGV4dFxyXG4gIGFjY2VudFRleHRDb2xvcjogJ3doaXRlJywgICAgICAgICAgIC8vIHRoZSB0ZXh0IGNvbG9yIGZvciBidXR0b25zXHJcbiAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsMTI4LDAsLjI1KScsICAgLy8gdGhlIHNoYWRvdyBjb2xvciwgdXNlZCBmb3IgZXhhbXBsZSB1bmRlciB0aGUgbG9nby9hdmF0YXJcclxuXHJcbiAgbG9nbzogJ2ltYWdlcy9sb2dvLnBuZycsICAgICAgICAgICAgLy8gbGluayB0byBhIHNwZWNpZmljIGxvZ28sIG5vdyBhIHBsYWNlaG9sZGVyXHJcblxyXG4gIGFnZUNoZWNrOiB0cnVlLCAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgYW4gYWdlLWNoZWNrIGJlZm9yZSB0aGUgc3VydmV5XHJcbiAgYmx1cjogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmx1ciB0aGUgbWFpbiB3ZWJzaXRlIGNvbnRlbnQgd2hlbiB0aGUgb3ZlcmxheSBpcyBzaG93blxyXG5cclxuICBjb29raWVBZ2U6IDMwLCAgICAgICAgICAgICAgICAgICAgICAvLyBhbW91bnQgb2YgZGF5cyBmb3IgdGhlIGNvb2tpZSBsaWZldGltZVxyXG4gIGNvb2tpZU5hbWU6ICdid2F2JywgICAgICAgICAgICAgICAgIC8vIGNvb2tpZSBuYW1lXHJcbiAgY29va2llU2hvd01heDogMCwgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFtb3VudCBvZiB0aW1lcyB0aGUgc3VydmV5IGNhbiBiZSBzaG93biwgMCA9IGFsd2F5c1xyXG5cclxuICBldmVudFByZWZpeDogJ2J3YXY6JywgICAgICAgICAgICAgICAvLyBhIHByZWZpeCBmb3IgdGhlIGN1c3RvbSBldmVudHMgdGhhdCBhcmUgdHJpZ2dlcmVkIGJ5IHRoaXMgcGx1Z2luXHJcblxyXG4gIGNvbnRlbnQ6IENPUFksICAgICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgb2JqZWN0LCBzZWUgYWJvdmVcclxuXHJcbiAgYnJhbmQ6IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaW5mbyB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgYnJhbmRpbmcgb2YgdGhlIHBvcHVwXHJcbiAgICBuYW1lOiAndGhpcyB3ZWJzaXRlJyxcclxuICAgIGxvZ286ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTgwJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20nLFxyXG4gIH0sXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../src/scripts/bewatched-options.js\n");

/***/ })

/******/ });