
export default class tools {

  addItemToCart(itemName, itemPrice, itemImageSrc, quantity = 0, itemIdentification, cartItemName) {
    // Selecione a lista de compra
    const cartItems = document.getElementById('cart-items');

    // Verifique se o item já está no carrinho
    const existingCartItem = this.findCartItem(itemName);

    if (existingCartItem) {
      
      const quantityElement = existingCartItem.querySelector('.input-quantity');
      const currentQuantity = parseInt(quantityElement.value);
      quantityElement.value = currentQuantity + 1;

    } else {
        // Se o item não estiver no carrinho, crie um novo item
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';

        // Crie a imagem do item
        const itemImage = document.createElement('img');
        itemImage.src = itemImageSrc;
        itemImage.alt = 'Item';

        // Crie as informações do item
        const itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';

        const itemNameElement = document.createElement('h3');
        itemNameElement.innerText = itemName;

        const itemPriceElement = document.createElement('p');
        itemPriceElement.innerText = `Preço: R$ ${itemPrice}`;

        // Crie o elemento de quantidade
        const itemQuantityElement = document.createElement('input');
        itemQuantityElement.setAttribute('class', 'input-quantity');
        itemQuantityElement.value = quantity;

        // Crie os botões de aumento e diminuição
        const increaseButton = document.createElement('button');
        increaseButton.innerText = '+';
        increaseButton.className = 'quantity-control increase';
        
        const decreaseButton = document.createElement('button');
        decreaseButton.innerText = '-';
        decreaseButton.className = 'quantity-control decrease';

        // Crie o botão de remoção
        const itemRemoveButton = document.createElement('button');
        itemRemoveButton.className = 'item-remove';
        itemRemoveButton.innerHTML = '<i class="fa-solid fa-x"></i>';

        // Defina o atributo data-item com o itemIdentification (nome ou ID)
        cartItem.dataset.item = itemIdentification;

        // Adicione um evento de clique para remover o item
        itemRemoveButton.addEventListener('click', () => {
          this.removeCartItem(cartItem);
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

  findCartItem(itemIdentification) {
    // Selecione todos os itens no carrinho
    const cartItems = document.querySelectorAll('.cart-item');

    // Percorra os itens para encontrar o item com base no itemIdentification (nome ou ID)
    for (const cartItem of cartItems) {
        const itemNameElement = cartItem.querySelector('h3');
        const itemID = cartItem.dataset.itemId; // Adicione um atributo "data-item-id" aos elementos do carrinho com o ID do item

        if (itemNameElement.innerText === itemIdentification || itemID === itemIdentification) {
            return {
                cartItem: cartItem,
                quantityElement: cartItem.querySelector('.item-info p.quantity'), // Elemento que exibe a quantidade
            };
        }
    }

    // Se não encontrar o item, retorne null
    return null;
  }

  updateCartTotal() {
      // Implemente a lógica para calcular e atualizar o total do carrinho
      // Percorra todos os itens no carrinho e some seus preços
      const cartItems = document.querySelectorAll('.cart-item');
      let total = 0;

      cartItems.forEach(cartItem => {
          const priceElement = cartItem.querySelector('.item-info p');
          const itemPrice = parseFloat(priceElement.innerText.replace('Preço: R$ ', ''));
          total += itemPrice;
      });

      // Atualize o elemento de exibição do total
      const cartTotalElement = document.getElementById('cart-total');
      cartTotalElement.innerText = `R$ ${total.toFixed(2)}`;
  }

  saveCartToLocalStorage(name, price, image, count, maxCount, id) {
    const cartItems = document.querySelectorAll('.cart-item');

    const cartData = [];

    cartData.push({
      name: name,
      price: price,
      image: image,
      count: count,
      maxCount: maxCount,
    });

    localStorage.setItem('cartData', JSON.stringify(cartData));
  }

  removeCartItem(cartItem) {
    // Encontre o elemento pai do item do carrinho para removê-lo
    const cartItems = document.getElementById('cart-items');
    cartItems.removeChild(cartItem);

    // Depois de remover o item, salve o carrinho atualizado no localStorage
    this.saveCartToLocalStorage();
  }

  loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cartData');
    if (cartData) {
      const parsedData = JSON.parse(cartData);

      parsedData.forEach(item => {
        this.addItemToCart(item.name, item.price, item.quantity);
      });
    }
  }

  criaErro(input, mensagem) {
    // Verifique se já existe uma mensagem de erro para este campo
    const erroExistente = input.nextElementSibling;
    
    // Se não houver uma mensagem de erro, crie uma
    if (!erroExistente || !erroExistente.classList.contains('text-error')) {
      const div = document.createElement('div');
      div.innerText = mensagem;
      div.classList.add('text-error');
      input.insertAdjacentElement('afterend', div);
    } else {
      // Se já houver uma mensagem de erro, atualize seu texto
      erroExistente.innerText = mensagem;
    }
  }
}