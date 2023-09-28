"use strict";
(self["webpackChunkjavascript"] = self["webpackChunkjavascript"] || []).push([["src_modules_ferramentas_navBarConfig_js"],{

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
/* harmony import */ var _ferramentas_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ferramentas/tools */ "./src/modules/ferramentas/tools.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var navBarConfigs = /*#__PURE__*/function () {
  function navBarConfigs() {
    var navBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var username = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    _classCallCheck(this, navBarConfigs);
    this.username = username;
    this.status = status;
    this.navBar = navBar;
    this.indexConfig();
  }
  _createClass(navBarConfigs, [{
    key: "indexConfig",
    value: function indexConfig() {
      var baseUrl = window.location.origin;
      var urlAtual = window.location.href;
      document.addEventListener('click', function (element) {
        if (element.target.classList.contains('logo') && urlAtual != "".concat(baseUrl, "/E-gamers/public/html/")) {
          window.location.href = "".concat(baseUrl, "/E-gamers/public/html");
        }
      });
      if (this.status === 'true') {
        var icone = new _icon__WEBPACK_IMPORTED_MODULE_0__["default"](this.username);
        var perfil = icone.create();
        this.navBar.appendChild(perfil.icone);
        icone.colorChange(perfil.profile);
        document.addEventListener('click', function (event) {
          var clickedElement = event.target;
          if (clickedElement.classList.contains('profile-icon') || clickedElement.classList.contains('initials') && urlAtual != "".concat(baseUrl, "/E-gamers/public/html/config.html")) {
            var navContentAncestor = clickedElement.closest('.nav-content');
            if (navContentAncestor) {
              var dropdownMenu = navContentAncestor.querySelector('.dropdown-menu');
              dropdownMenu.classList.toggle('active');
            }

            // Obtém os elementos de ícone do menu
            var cogIcon = document.querySelector('.fa-cog');
            var signOutIcon = document.querySelector('.fa-sign-out-alt');

            // Evento de clique para o ícone de configuração (cog)
            cogIcon.addEventListener('click', function () {
              window.location.href = "".concat(baseUrl, "/E-gamers/public/html/config.html");
            });

            // Evento de clique para o ícone de sair (sign-out)
            signOutIcon.addEventListener('click', function () {
              var exit = false;
              sessionStorage.setItem("status", exit);
              window.location.href = "".concat(baseUrl, "/E-gamers/public/html/index.html");
            });
          } else {
            // Se clicar fora do menu, feche-o
            var dropdownMenus = document.querySelectorAll('.dropdown-menu');
            dropdownMenus.forEach(function (menu) {
              menu.classList.remove('active');
            });
          }
        });
      }

      // Criação dos botões de login e registro
      var navContent = document.querySelector('.nav-content');
      var userDiv = document.createElement('div');
      userDiv.classList.add('user');
      var loginButton = document.createElement('button');
      loginButton.textContent = 'Entrar';
      loginButton.setAttribute('class', 'login');
      loginButton.addEventListener('click', function () {
        window.location.href = "".concat(baseUrl, "/E-gamers/public/html/login.html");
      });
      var registerButton = document.createElement('button');
      registerButton.textContent = 'Registrar';
      registerButton.setAttribute('class', 'register');
      registerButton.addEventListener('click', function () {
        window.location.href = "".concat(baseUrl, "/E-gamers/public/html/register.html");
      });
      userDiv.appendChild(loginButton);
      userDiv.appendChild(registerButton);
      navContent.appendChild(userDiv);

      // Selecionar o elemento de input de busca
      var searchInput = document.querySelector('.search-input');

      // Verificar se o usuário está logado
      if (sessionStorage.getItem('status') === 'true') {
        searchInput.style.width = '49.5em';
        registerButton.style.display = 'none';
        loginButton.style.display = 'none';
      }

      // Carrinho de compra

      var shopCartButton = document.querySelector('.cart-icon');
      var closeButton = document.getElementById("close-button");
      var removeProduct = document.querySelector('.item-remove');
      var cartItems = document.querySelectorAll('.cart-item');
      shopCartButton.addEventListener("click", function () {
        cart.classList.add("open");
      });
      closeButton.addEventListener("click", function () {
        cart.classList.remove("open");
      });
      var list = new _ferramentas_tools__WEBPACK_IMPORTED_MODULE_1__["default"]();
      list.loadCartFromLocalStorage();
      list.saveCartToLocalStorage();
      cartItems.forEach(function (cartItem) {
        var itemId = cartItem.dataset.item; // Obtenha o itemIdentification do atributo data-item
        removeProduct.addEventListener('click', function () {
          // Remova o item clicado
          list.removeCartItem(itemId);
        });
      });
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tools)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var tools = /*#__PURE__*/function () {
  function tools() {
    _classCallCheck(this, tools);
  }
  _createClass(tools, [{
    key: "addItemToCart",
    value: function addItemToCart(itemName, itemPrice, itemImageSrc) {
      var _this = this;
      var quantity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var itemIdentification = arguments.length > 4 ? arguments[4] : undefined;
      // Selecione a lista de compra
      var cartItems = document.getElementById('cart-items');

      // Verifique se o item já está no carrinho
      var existingCartItem = this.findCartItem(itemName);
      if (existingCartItem) {
        var quantityElement = existingCartItem.querySelector('.input-quantity');
        var currentQuantity = parseInt(quantityElement.value);
        quantityElement.value = currentQuantity + 1;
      } else {
        // Se o item não estiver no carrinho, crie um novo item
        var cartItem = document.createElement('li');
        cartItem.className = 'cart-item';

        // Crie a imagem do item
        var itemImage = document.createElement('img');
        itemImage.src = itemImageSrc;
        itemImage.alt = 'Item';

        // Crie as informações do item
        var itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';
        var itemNameElement = document.createElement('h3');
        itemNameElement.innerText = itemName;
        var itemPriceElement = document.createElement('p');
        itemPriceElement.innerText = "Pre\xE7o: R$ ".concat(itemPrice.toFixed(2)); // Formate o preço para 2 casas decimais

        // Crie o elemento de quantidade
        var itemQuantityElement = document.createElement('input');
        itemQuantityElement.setAttribute('class', 'input-quantity');
        itemQuantityElement.value = quantity;

        // Crie os botões de aumento e diminuição
        var increaseButton = document.createElement('button');
        increaseButton.innerText = '+';
        increaseButton.className = 'quantity-control increase';
        var decreaseButton = document.createElement('button');
        decreaseButton.innerText = '-';
        decreaseButton.className = 'quantity-control decrease';

        // Crie o botão de remoção
        var itemRemoveButton = document.createElement('button');
        itemRemoveButton.className = 'item-remove';
        itemRemoveButton.innerHTML = '<i class="fa-solid fa-x"></i>';

        // Defina o atributo data-item com o itemIdentification (nome ou ID)
        cartItem.dataset.item = itemIdentification;

        // Adicione um evento de clique para remover o item
        itemRemoveButton.addEventListener('click', function () {
          _this.removeCartItem(cartItem);
        });

        // Adicione os botões de quantidade ao item da lista
        itemInfo.appendChild(itemNameElement);
        itemInfo.appendChild(itemPriceElement);
        itemInfo.appendChild(itemQuantityElement);
        itemInfo.appendChild(decreaseButton); // Botão de diminuição
        itemInfo.appendChild(increaseButton); // Botão de aumento
        cartItem.appendChild(itemImage);
        cartItem.appendChild(itemInfo);
        cartItem.appendChild(itemRemoveButton);

        // Adicione o item à lista de compra
        cartItems.appendChild(cartItem);
      }

      // Atualize o total do carrinho
      this.updateCartTotal();
    }
  }, {
    key: "findCartItem",
    value: function findCartItem(itemIdentification) {
      // Selecione todos os itens no carrinho
      var cartItems = document.querySelectorAll('.cart-item');

      // Percorra os itens para encontrar o item com base no itemIdentification (nome ou ID)
      var _iterator = _createForOfIteratorHelper(cartItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cartItem = _step.value;
          var itemNameElement = cartItem.querySelector('h3');
          var itemID = cartItem.dataset.itemId; // Adicione um atributo "data-item-id" aos elementos do carrinho com o ID do item

          if (itemNameElement.innerText === itemIdentification || itemID === itemIdentification) {
            return {
              cartItem: cartItem,
              quantityElement: cartItem.querySelector('.item-info p.quantity') // Elemento que exibe a quantidade
            };
          }
        }

        // Se não encontrar o item, retorne null
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "updateCartTotal",
    value: function updateCartTotal() {
      // Implemente a lógica para calcular e atualizar o total do carrinho
      // Percorra todos os itens no carrinho e some seus preços
      var cartItems = document.querySelectorAll('.cart-item');
      var total = 0;
      cartItems.forEach(function (cartItem) {
        var priceElement = cartItem.querySelector('.item-info p');
        var itemPrice = parseFloat(priceElement.innerText.replace('Preço: R$ ', ''));
        total += itemPrice;
      });

      // Atualize o elemento de exibição do total
      var cartTotalElement = document.getElementById('cart-total');
      cartTotalElement.innerText = "R$ ".concat(total.toFixed(2));
    }
  }, {
    key: "saveCartToLocalStorage",
    value: function saveCartToLocalStorage() {
      var cartItems = document.querySelectorAll('.cart-item');
      var cartData = [];
      cartItems.forEach(function (cartItem) {
        var itemNameElement = cartItem.querySelector('h3');
        var itemPriceElement = cartItem.querySelector('.item-info p');
        var itemQuantityElement = cartItem.querySelector('.item-quantity input');
        var itemName = itemNameElement.innerText;
        var itemPrice = parseFloat(itemPriceElement.innerText.replace('Preço: R$ ', ''));
        var itemQuantity = parseInt(itemQuantityElement.value);
        cartData.push({
          name: itemName,
          price: itemPrice,
          quantity: itemQuantity
        });
      });
      localStorage.setItem('cartData', JSON.stringify(cartData));
    }
  }, {
    key: "removeCartItem",
    value: function removeCartItem(cartItem) {
      // Encontre o elemento pai do item do carrinho para removê-lo
      var cartItems = document.getElementById('cart-items');
      cartItems.removeChild(cartItem);

      // Depois de remover o item, salve o carrinho atualizado no localStorage
      this.saveCartToLocalStorage();
    }
  }, {
    key: "loadCartFromLocalStorage",
    value: function loadCartFromLocalStorage() {
      var _this2 = this;
      var cartData = localStorage.getItem('cartData');
      if (cartData) {
        var parsedData = JSON.parse(cartData);
        parsedData.forEach(function (item) {
          _this2.addItemToCart(item.name, item.price, item.quantity);
        });
      }
    }
  }, {
    key: "criaErro",
    value: function criaErro(input, mensagem) {
      // Verifique se já existe uma mensagem de erro para este campo
      var erroExistente = input.nextElementSibling;

      // Se não houver uma mensagem de erro, crie uma
      if (!erroExistente || !erroExistente.classList.contains('text-error')) {
        var div = document.createElement('div');
        div.innerText = mensagem;
        div.classList.add('text-error');
        input.insertAdjacentElement('afterend', div);
      } else {
        // Se já houver uma mensagem de erro, atualize seu texto
        erroExistente.innerText = mensagem;
      }
    }
  }]);
  return tools;
}();


/***/ })

}]);
//# sourceMappingURL=src_modules_ferramentas_navBarConfig_js.bundle.js.map