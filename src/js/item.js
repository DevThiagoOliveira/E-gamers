import "../assets/css/buying-item.css";
import Icon from "../modules/ferramentas/icon";
import Quill from "quill";
import tool from "../modules/ferramentas/tools";
import "../modules/ferramentas/navBarImport";
import navBarConfigs from "../modules/ferramentas/navBarConfig";

const username = sessionStorage.getItem("username");

const itemName = document.querySelector('.item-name');
const filter = document.querySelector('.item-filter');
const price = document.querySelector('.price');
const imgContent = document.querySelector('.img-content');
const imgDiv = document.querySelector('.img');
const descriptionContainer = document.querySelector('.input-comment');
const seallerName = document.querySelector('.sealler-name');

const data = JSON.parse(sessionStorage.getItem("clickedItem"));
const numericPrice = parseFloat(data.price.replace(/\D+/g, ''));

// Formatação do preço para o formato brasileiro
const formattedPrice = numericPrice.toLocaleString('pt-BR', { 
    style: 'currency',
    currency: 'BRL' 
});

// ----------------------------------------- descrição

// Criar o editor Quill e definir o conteúdo como somente leitura
const quill = new Quill(descriptionContainer, {
    theme: 'bubble',
    readOnly: true
});

quill.root.innerHTML = data.descricao;

const seallerIcon = new Icon(data.sealer_name); // Criar o ícone com o nome do vendedor
const { icone } = seallerIcon.create();
seallerName.appendChild(icone);

const h2 = document.createElement('h2');
h2.innerText = data.sealer_name;
seallerName.appendChild(h2);

// Outros inputs, nome, tag, preço...
itemName.innerText = data.name; 
filter.innerText = data.category;
price.innerText = formattedPrice;

// ----------------------------------------- botões

// Selecionar o elemento input e os botões de incremento e decremento
const countInput = document.querySelector('.item-quant');
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');

// Definir o valor padrão e o valor máximo
countInput.value = 0;
countInput.max = 9999;

let incrementInterval;
let decrementInterval;

const incrementCount = () => {
    const currentValue = parseInt(countInput.value);
    if (currentValue < parseInt(data.amount)) {
        countInput.value = currentValue + 1;
    }
};

const decrementCount = () => {
    const currentValue = parseInt(countInput.value);
    if (currentValue > 0) {
        countInput.value = currentValue - 1;
    }
};

// Adicionar manipuladores de eventos para os botões de incremento e decremento
addButton.addEventListener('mousedown', () => {
    incrementInterval = setInterval(incrementCount, 100);
});

subtractButton.addEventListener('mousedown', () => {
    decrementInterval = setInterval(decrementCount, 100);
});

// Adicionar manipuladores de eventos de "parar" ao soltar ou sair do elemento
const stopInterval = () => {
    clearInterval(incrementInterval);
    clearInterval(decrementInterval);
};

addButton.addEventListener('mouseup', stopInterval);
subtractButton.addEventListener('mouseup', stopInterval);

addButton.addEventListener('mouseleave', stopInterval);
subtractButton.addEventListener('mouseleave', stopInterval);

addButton.addEventListener('touchstart', () => {
    incrementInterval = setInterval(incrementCount, 100);
});

subtractButton.addEventListener('touchstart', () => {
    decrementInterval = setInterval(decrementCount, 100);
});

addButton.addEventListener('touchend', stopInterval);
subtractButton.addEventListener('touchend', stopInterval);


// ----------------------------------------- imagem

// Função para criar uma imagem e adicioná-la ao elemento especificado
function createAndAppendImage(element, src) {
    const img = document.createElement('img');
    img.src = src ? 'https://via.placeholder.com/150x150?text=Produto' : '';
    
    const imgReview = document.createElement('li');
    imgReview.className = 'img-review';

    imgReview.appendChild(img);
    
    element.appendChild(imgReview);
}

// Criar as imagens dentro da lista ul.img-content
createAndAppendImage(imgContent, data.img); // A primeira imagem de data.img

// Adicionar evento de clique nas imagens para exibi-las no div.img
imgContent.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        imgDiv.innerHTML = ''; // Limpar o div.img
        const clickedImage = document.createElement('img');
        clickedImage.src = event.target.src ? 'https://via.placeholder.com/800x600?text=Produto' : '';

        imgDiv.appendChild(clickedImage);
    }
});

// ----------------------------------------- carrinho de compra

const buyButton = document.querySelector('.buttom-buy');
const list = new tool();

const itemQuantityAvailable = data.amount;

function checkCountValue() {
    if (itemQuantityAvailable <= 0) {
        buyButton.disabled = true;
        buyButton.style.border = "3px solid #77b02a";
        buyButton.style.color = "#77b02a";
        buyButton.innerText = 'Sem estoque';
        buyButton.addEventListener('mouseover', () => {
            buyButton.style.color = "#181818";
            buyButton.style.background = "#3c6608";
            buyButton.style.border = "3px solid #3c6608";
        });

        buyButton.addEventListener('mouseout', () => {
            buyButton.style.border = "3px solid #77b02a";
            buyButton.style.color = "#77b02a";
            buyButton.style.background = "transparent";
        });
    }
}

if (itemQuantityAvailable > 0 && countInput != 0) {
    buyButton.addEventListener('click', () => {
        const itemName = data.name;
        const itemImageSrc = data.img ? 'https://via.placeholder.com/800x600?text=Produto' : '';
        const itemId = data.id_product;

        const item = {
            name: itemName,
            price: numericPrice,
            image: itemImageSrc,
            count: countInput.value,
            maxCount: data.amount,
            id: itemId,
        };

        const itemJSON = JSON.stringify(item);

        const itemKey = `item_${itemName}_${itemId}`;

        localStorage.setItem(itemKey, itemJSON);

        list.addItemToCart(itemName, numericPrice, itemImageSrc, countInput.value, itemId);
    });
}

checkCountValue();