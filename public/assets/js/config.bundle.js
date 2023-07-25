/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/ferramentas/icon.js":
/*!*****************************************!*\
  !*** ./src/modules/ferramentas/icon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/assets/css/config.css":
/*!***********************************!*\
  !*** ./src/assets/css/config.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_config_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/config.css */ "./src/assets/css/config.css");
/* harmony import */ var _modules_ferramentas_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/ferramentas/icon */ "./src/modules/ferramentas/icon.js");
/* harmony import */ var _modules_ferramentas_navBarConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/ferramentas/navBarConfig */ "./src/modules/ferramentas/navBarConfig.js");



if (sessionStorage.getItem('status') != 'true') {
  window.location.href = 'http://localhost:3000/E-gamers/public/html/index.html';
}

//Constates
var username = sessionStorage.getItem('username');
var status = sessionStorage.getItem('status');
var navBar = document.querySelector('.nav-content');
var perfilName = document.querySelector('.perfil-name');
var wallet = document.querySelector('.wallet');
var perfilIcon = document.querySelector('.perfil-img');
var label = document.querySelector('.page-label');
var buttonAdd = document.querySelector('.button-add');
var inputFile = document.querySelector('.picture__input');
var pictureImage = document.querySelector('.picture__image');

// Perfil icon
var navConfig = new _modules_ferramentas_navBarConfig__WEBPACK_IMPORTED_MODULE_2__["default"](navBar, username, status);
var icon = new _modules_ferramentas_icon__WEBPACK_IMPORTED_MODULE_1__["default"](username);
var iconPerfil = new _modules_ferramentas_icon__WEBPACK_IMPORTED_MODULE_1__["default"](username);
var leftPerfil = iconPerfil.create();
perfilIcon.appendChild(leftPerfil.icone);
icon.colorChange(leftPerfil.profile);
perfilName.innerText = username;

//Input Popup Picture
pictureImage.innerText = 'Escolha uma imagem';
inputFile.addEventListener('change', function (element) {
  var inputTarget = element.target;
  var file = inputTarget.files[0];
  if (file) {
    var reader = new FileReader();
    reader.addEventListener('load', function (element) {
      var readerTarget = element.target;
      var img = document.createElement('img');
      img.src = readerTarget.result;
      img.classList.add('picture__img');
      pictureImage.innerText = '';
      pictureImage.appendChild(img);
    });
    reader.readAsDataURL(file);
  } else {
    pictureImage.innerText = 'Escolha uma imagem';
  }
});

//Configurations

document.addEventListener('click', function (element) {
  if (element.target.classList.contains('selling')) {
    label.innerText = 'Minhas Vendas';
    buttonAdd.style.display = 'none';
  }
  if (element.target.classList.contains('buy')) {
    label.innerText = 'Minhas Compras';
    buttonAdd.style.display = 'inline-block';
  }
  if (element.target.classList.contains('button-add')) {
    openPopup();
    console.log('botão clicado');
  }
  if (element.target.classList.contains("close-popup")) {
    closePopup();
  }
  if (element.target.classList.contains('config')) {
    label.innerText = 'Minha Conta';
    buttonAdd.style.display = 'none';
    /* puxar via xhm de outro arquivo as config do usuário */
  }

  if (element.target.classList.contains('exit')) {
    var exit = false;
    sessionStorage.setItem('status', exit);
    window.location.href = "http://localhost:3000/E-gamers/public/html/index.html";
  }
});
function openPopup() {
  var pop = document.querySelector('#popup').style.display = 'block';
}

// Fechar o popup
function closePopup() {
  document.querySelector('#popup').style.display = 'none';
}

// Lógica para adicionar o produto
function addProduct() {
  // Aqui você pode implementar a lógica para adicionar o produto no array ou fazer outras ações necessárias
  closePopup(); // Fechar o popup após adicionar o produto (você pode ajustar isso conforme necessário)
}
})();

/******/ })()
;
//# sourceMappingURL=config.bundle.js.map