/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DB/users.js":
/*!*********************************!*\
  !*** ./src/modules/DB/users.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _ferramentas_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ferramentas/tools */ "./src/modules/ferramentas/tools.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var User = /*#__PURE__*/function () {
  function User() {
    var username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    _classCallCheck(this, User);
    this.username = username;
    this.password = password;
  }
  _createClass(User, [{
    key: "login",
    value: function login() {
      var _this = this;
      try {
        return fetch('http://localhost:3000/E-gamers/src/php/usuários.php').then(function (response) {
          return response.json();
        }).then(function (data) {
          var result = [];
          for (var index in data) {
            result.push(data[index]);
          }
          var check = _this.loginCheck(result);
          return check;
        })["catch"](function (error) {
          // Tratar erros de requisição
          console.error(error);
        });
      } catch (err) {
        console.log('Erro: ', err);
      }
    }
  }, {
    key: "loginCheck",
    value: function loginCheck(usuarios) {
      var _this2 = this;
      var valid = false;
      try {
        usuarios.forEach(function (element) {
          var _iterator = _createForOfIteratorHelper(element),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var index = _step.value;
              if (index.login === _this2.username.value && index.senha === _this2.password.value) {
                valid = true;
              } else {
                (0,_ferramentas_tools__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.username, "Usuário ou senha errados");
                (0,_ferramentas_tools__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.password, "Usuário ou senha errados");
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
      } catch (error) {
        console.log("Ocorreu um erro ao tentar logar. Erro: ".concat(error));
      }
      return valid;
    }
  }, {
    key: "perfil",
    value: function perfil() {
      try {
        if (!this.login()) {}
      } catch (error) {}
    }
  }]);
  return User;
}();


/***/ }),

/***/ "./src/modules/ferramentas/Recomendation.js":
/*!**************************************************!*\
  !*** ./src/modules/ferramentas/Recomendation.js ***!
  \**************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Recommendation = /*#__PURE__*/function () {
  function Recommendation(search, itemSeraching, imagem, urlItem) {
    _classCallCheck(this, Recommendation);
    this.search = search;
    this.itemSeraching = itemSeraching;
    this.imagem = imagem;
    this.urlItem = urlItem;
  }
  _createClass(Recommendation, [{
    key: "create",
    value: function create() {
      var li = this.createLi();
      this.liImage(li);
      this.ulApend(li);
    }
  }, {
    key: "createLi",
    value: function createLi() {
      var li = document.createElement('li');
      return li;
    }
  }, {
    key: "liImage",
    value: function liImage(li) {
      var a = document.createElement('a');
      var img = document.createElement('img');
      a.setAttribute('href', this.urlItem ? "#" : this.urlItem);
      img.setAttribute('src', this.imagem);
      a.appendChild(img);
      li.appendChild(a);
    }
  }, {
    key: "ulApend",
    value: function ulApend(li) {
      var ul = document.querySelector('.recommendation-bar');
      li.setAttribute('class', 'last-search');
      li.setAttribute('title', this.itemSeraching);
      return ul.appendChild(li);
    }
  }]);
  return Recommendation;
}();

/***/ }),

/***/ "./src/modules/ferramentas/icon.js":
/*!*****************************************!*\
  !*** ./src/modules/ferramentas/icon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Icon = /*#__PURE__*/function () {
  function Icon(name) {
    var image = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    _classCallCheck(this, Icon);
    this.name = name;
    this.image = image;
  }
  _createClass(Icon, [{
    key: "create",
    value: function create() {
      var profile = this.createProfileIcon();
      var span = this.createSpan();
      var divUser = this.createDiv();
      profile.appendChild(span);
      divUser.appendChild(profile);
      return {
        icone: divUser,
        profile: profile,
        span: span
      };
    }
  }, {
    key: "createDiv",
    value: function createDiv() {
      var div = document.createElement('div');
      div.setAttribute('class', 'user');
      return div;
    }
  }, {
    key: "createProfileIcon",
    value: function createProfileIcon() {
      var div = document.createElement('div');
      div.setAttribute('class', 'profile-icon');
      return div;
    }
  }, {
    key: "createSpan",
    value: function createSpan() {
      var span = document.createElement('span');
      span.setAttribute('class', 'initials');
      span.innerText = this.name.charAt(0);
      return span;
    }
  }, {
    key: "colorChange",
    value: function colorChange(div) {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      window.addEventListener('DOMContentLoaded', function () {
        // Gerar uma cor aleatória
        var randomColor = color;

        // Definir a cor de fundo do ícone de perfil

        div.style.backgroundColor = randomColor;
      });
      if (this.image != '') {
        // ele coloca o nome do usuário dentro do perfil
      }
    }
  }]);
  return Icon;
}();


/***/ }),

/***/ "./src/modules/ferramentas/navBarConfig.js":
/*!*************************************************!*\
  !*** ./src/modules/ferramentas/navBarConfig.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBarConfigs)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/modules/ferramentas/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var navBarConfigs = /*#__PURE__*/function () {
  function navBarConfigs(navBar, username, status) {
    _classCallCheck(this, navBarConfigs);
    this.username = username;
    this.status = status;
    this.navBar = navBar;
    this.indexConfig();
  }
  _createClass(navBarConfigs, [{
    key: "indexConfig",
    value: function indexConfig() {
      var urlAtual = window.location.href;
      document.addEventListener('click', function (element) {
        if (element.target.classList.contains('logo') && urlAtual != "http://localhost:3000/E-gamers/public/html/") {
          window.location.href = "http://localhost:3000/E-gamers/public/html";
        }
      });
      if (this.status === 'true') {
        var icone = new _icon__WEBPACK_IMPORTED_MODULE_0__["default"](this.username);
        var perfil = icone.create();
        this.navBar.appendChild(perfil.icone);
        icone.colorChange(perfil.profile);
        document.addEventListener('click', function (element) {
          if (element.target.classList.contains('profile-icon') || element.target.classList.contains('initials') && urlAtual != "http://localhost:3000/E-gamers/public/html/config.html") {
            window.location.href = "http://localhost:3000/E-gamers/public/html/config.html";
          }
        });
      } else {
        // Criação dos botões de login e registro
        var userDiv = document.createElement('div');
        userDiv.classList.add('user');
        var loginButton = document.createElement('button');
        loginButton.textContent = 'Logar';
        loginButton.setAttribute('class', 'login');
        loginButton.addEventListener('click', function () {
          window.location.href = "http://localhost:3000/E-gamers/public/html/login.html";
        });
        var registerButton = document.createElement('button');
        registerButton.textContent = 'Registrar';
        registerButton.setAttribute('class', 'register');
        registerButton.addEventListener('click', function () {
          window.location.href = "http://localhost:3000/E-gamers/public/html/register.html";
        });
        userDiv.appendChild(loginButton);
        userDiv.appendChild(registerButton);
        this.navBar.appendChild(userDiv);
      }
    }
  }]);
  return navBarConfigs;
}();


/***/ }),

/***/ "./src/modules/ferramentas/tools.js":
/*!******************************************!*\
  !*** ./src/modules/ferramentas/tools.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ criaErro)
/* harmony export */ });
function criaErro(input, mensagem) {
  var div = document.createElement('div');
  div.innerText = mensagem;
  div.classList.add('text-error');
  input.insertAdjacentElement('afterend', div);
}

/***/ }),

/***/ "./src/assets/css/home.css":
/*!*********************************!*\
  !*** ./src/assets/css/home.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/home.css */ "./src/assets/css/home.css");
/* harmony import */ var _modules_DB_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/DB/users */ "./src/modules/DB/users.js");
/* harmony import */ var _modules_ferramentas_Recomendation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/ferramentas/Recomendation */ "./src/modules/ferramentas/Recomendation.js");
/* harmony import */ var _modules_ferramentas_Recomendation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_ferramentas_Recomendation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_ferramentas_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/ferramentas/icon */ "./src/modules/ferramentas/icon.js");
/* harmony import */ var _modules_ferramentas_navBarConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/ferramentas/navBarConfig */ "./src/modules/ferramentas/navBarConfig.js");





var navBar = document.querySelector('.nav-content');
var username = sessionStorage.getItem('username');
var status = sessionStorage.getItem('status');
var inde = new _modules_ferramentas_navBarConfig__WEBPACK_IMPORTED_MODULE_4__["default"](navBar, username, status);
})();

/******/ })()
;
//# sourceMappingURL=home.bundle.js.map