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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/admin/js/admin.js":
/*!**********************************!*\
  !*** ./public/admin/js/admin.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var socket = io.connect('http://localhost:8000');\r\nvar dataObj;\r\nsocket.on(\"dataVar\",(data) => {\r\n        dataObj = data;\r\n});\r\ndocument.querySelectorAll('button').forEach(click => click.addEventListener(\"click\",(e) =>{\r\n        const cel = e.target;\r\n        const id = cel.id;\r\n        const data = cel.attributes.getNamedItem('data-text').value;\r\n        const destTekstAPI = cel.attributes.getNamedItem('data-destText').value;\r\n        const allTextBox = document.querySelectorAll(\"input[type=text]\")\r\n        if(data === \"true\"){\r\n                var nameAPI = cel.attributes.getNamedItem('data-name').value;\r\n                for(var i = 0; i < allTextBox.length;i++){\r\n                        if(allTextBox[i].attributes.getNamedItem('data-destText').value == destTekstAPI){\r\n                                var txt = allTextBox[i].value;\r\n                        }\r\n               }\r\n        }\r\n        var info = {\r\n                id: id,\r\n                data: data,\r\n                destinationTekst: destTekstAPI,\r\n                dataName: nameAPI,\r\n                value: txt\r\n        };\r\n        console.log(info);\r\n        socket.emit(\"componentsObject\",info);\r\n}));\r\n\r\n    \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYWRtaW4vanMvYWRtaW4uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYWRtaW4vanMvYWRtaW4uanM/N2VhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwJyk7XHJcbnZhciBkYXRhT2JqO1xyXG5zb2NrZXQub24oXCJkYXRhVmFyXCIsKGRhdGEpID0+IHtcclxuICAgICAgICBkYXRhT2JqID0gZGF0YTtcclxufSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goY2xpY2sgPT4gY2xpY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpID0+e1xyXG4gICAgICAgIGNvbnN0IGNlbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGlkID0gY2VsLmlkO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBjZWwuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ2RhdGEtdGV4dCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc3RUZWtzdEFQSSA9IGNlbC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnZGF0YS1kZXN0VGV4dCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFsbFRleHRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT10ZXh0XVwiKVxyXG4gICAgICAgIGlmKGRhdGEgPT09IFwidHJ1ZVwiKXtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lQVBJID0gY2VsLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdkYXRhLW5hbWUnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhbGxUZXh0Qm94Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhbGxUZXh0Qm94W2ldLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdkYXRhLWRlc3RUZXh0JykudmFsdWUgPT0gZGVzdFRla3N0QVBJKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHh0ID0gYWxsVGV4dEJveFtpXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uVGVrc3Q6IGRlc3RUZWtzdEFQSSxcclxuICAgICAgICAgICAgICAgIGRhdGFOYW1lOiBuYW1lQVBJLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHR4dFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoXCJjb21wb25lbnRzT2JqZWN0XCIsaW5mbyk7XHJcbn0pKTtcclxuXHJcbiAgICBcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/admin/js/admin.js\n");

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL21haW4uc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhc3MvbWFpbi5zY3NzPzdhY2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sass/main.scss\n");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Dodanie nowych komponetów nakładki */\r\nvar wigets = {\r\n    liveBar: {\r\n        enabled: false,\r\n        id: [0], \r\n        desc: \"Belka Na Żywo\",\r\n        editableText: false,\r\n        constID: 0\r\n    },\r\n    logo: {\r\n        enabled: false,\r\n        id: [1], \r\n        desc: \"Logo\",\r\n        editableText: false,\r\n        constID: 1\r\n    },\r\n    lokalizacja: {\r\n        enabled: false,\r\n        id: [2,3], \r\n        desc: \"Belka Lokalizacyjna\",\r\n        locTekst: \"\",\r\n        editableText: true,\r\n        constID: 2,\r\n    },\r\n    belka: {\r\n        enabled: false,\r\n        id: [4,5,6], \r\n        desc: \"Główna Belka Infromacyjna\",\r\n        headLine: \"\",\r\n        secondLine: \"\",\r\n        editableText: true,\r\n        constID: 3\r\n    }\r\n};\r\n//////////////////////////////////////\r\nclass main{ \r\n    changeValue(component,type,value){\r\n            const comp = wigets[component];\r\n                comp[type] = value;\r\n    }\r\n    getValue(component,type){\r\n        const comp = wigets[component];\r\n        return comp[type]\r\n    }\r\n\r\n}\r\nvar control = new main();\r\nmodule.exports = {\r\n    wigets: wigets,\r\n    main: control\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIERvZGFuaWUgbm93eWNoIGtvbXBvbmV0w7N3IG5ha8WCYWRraSAqL1xyXG52YXIgd2lnZXRzID0ge1xyXG4gICAgbGl2ZUJhcjoge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIGlkOiBbMF0sIFxyXG4gICAgICAgIGRlc2M6IFwiQmVsa2EgTmEgxbt5d29cIixcclxuICAgICAgICBlZGl0YWJsZVRleHQ6IGZhbHNlLFxyXG4gICAgICAgIGNvbnN0SUQ6IDBcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgaWQ6IFsxXSwgXHJcbiAgICAgICAgZGVzYzogXCJMb2dvXCIsXHJcbiAgICAgICAgZWRpdGFibGVUZXh0OiBmYWxzZSxcclxuICAgICAgICBjb25zdElEOiAxXHJcbiAgICB9LFxyXG4gICAgbG9rYWxpemFjamE6IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBpZDogWzIsM10sIFxyXG4gICAgICAgIGRlc2M6IFwiQmVsa2EgTG9rYWxpemFjeWpuYVwiLFxyXG4gICAgICAgIGxvY1Rla3N0OiBcIlwiLFxyXG4gICAgICAgIGVkaXRhYmxlVGV4dDogdHJ1ZSxcclxuICAgICAgICBjb25zdElEOiAyLFxyXG4gICAgfSxcclxuICAgIGJlbGthOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgaWQ6IFs0LDUsNl0sIFxyXG4gICAgICAgIGRlc2M6IFwiR8WCw7N3bmEgQmVsa2EgSW5mcm9tYWN5am5hXCIsXHJcbiAgICAgICAgaGVhZExpbmU6IFwiXCIsXHJcbiAgICAgICAgc2Vjb25kTGluZTogXCJcIixcclxuICAgICAgICBlZGl0YWJsZVRleHQ6IHRydWUsXHJcbiAgICAgICAgY29uc3RJRDogM1xyXG4gICAgfVxyXG59O1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBtYWlueyBcclxuICAgIGNoYW5nZVZhbHVlKGNvbXBvbmVudCx0eXBlLHZhbHVlKXtcclxuICAgICAgICAgICAgY29uc3QgY29tcCA9IHdpZ2V0c1tjb21wb25lbnRdO1xyXG4gICAgICAgICAgICAgICAgY29tcFt0eXBlXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0VmFsdWUoY29tcG9uZW50LHR5cGUpe1xyXG4gICAgICAgIGNvbnN0IGNvbXAgPSB3aWdldHNbY29tcG9uZW50XTtcclxuICAgICAgICByZXR1cm4gY29tcFt0eXBlXVxyXG4gICAgfVxyXG5cclxufVxyXG52YXIgY29udHJvbCA9IG5ldyBtYWluKCk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgd2lnZXRzOiB3aWdldHMsXHJcbiAgICBtYWluOiBjb250cm9sXHJcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const sass = __webpack_require__(/*! ../sass/main.scss */ \"./sass/main.scss\");\r\nconst api = __webpack_require__(/*! ../src/api.js */ \"./src/api.js\");\r\nconst admin = __webpack_require__(/*! ../public/admin/js/admin.js */ \"./public/admin/js/admin.js\");\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNhc3MgPSByZXF1aXJlKCcuLi9zYXNzL21haW4uc2NzcycpO1xyXG5jb25zdCBhcGkgPSByZXF1aXJlKCcuLi9zcmMvYXBpLmpzJyk7XHJcbmNvbnN0IGFkbWluID0gcmVxdWlyZSgnLi4vcHVibGljL2FkbWluL2pzL2FkbWluLmpzJyk7XHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });