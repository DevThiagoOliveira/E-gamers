import "../assets/css/buying-item.css";
import Icon from "../modules/ferramentas/icon";
import "../modules/ferramentas/navBarImport";

const itemName = document.querySelector('.item-name');
const filter = document.querySelector('.item-filter');
const price = document.querySelector('.price');
const count = document.querySelector('.item-quant');
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const imgContent = document.querySelector('.img-content');
const imgDiv = document.querySelector('.img');
const img = document.querySelector('#main-image');
const descriptionInput = document.querySelector('.input-comment'); // Referência ao campo de descrição
const seallerName = document.querySelector('.sealler-name');

const data = JSON.parse(sessionStorage.getItem("clickedItem"));

console.log(data);

itemName.innerText = data.name; 
filter.innerText = data.category;
price.innerText = data.price.replace(/\s/g, '');

descriptionInput.value = data.descricao; // Preencher o campo de descrição

const seallerIcon = new Icon(data.sealer_name); // Criar o ícone com o nome do vendedor
const { icone } = seallerIcon.create();
seallerName.appendChild(icone);

const h2 = document.createElement('h2');
h2.innerText = data.sealer_name;
seallerName.appendChild(h2);

let incrementInterval;
let decrementInterval;

const incrementCount = () => {
    if (parseInt(count.innerText) < data.amount) {
        count.innerText = parseInt(count.innerText) + 1;
    }
};

const decrementCount = () => {
    if (parseInt(count.innerText) > 0) {
        count.innerText = parseInt(count.innerText) - 1;
    }
};

addButton.addEventListener('mousedown', () => {
    incrementInterval = setInterval(incrementCount, 100);
});

subtractButton.addEventListener('mousedown', () => {
    decrementInterval = setInterval(decrementCount, 100);
});

document.addEventListener('mouseup', () => {
    clearInterval(incrementInterval);
    clearInterval(decrementInterval);
});

document.addEventListener('mouseleave', () => {
    clearInterval(incrementInterval);
    clearInterval(decrementInterval);
});

// Função para criar uma imagem e adicioná-la ao elemento especificado
function createAndAppendImage(element, src) {
    const img = document.createElement('img');
    img.src = src;
    
    const imgReview = document.createElement('li');
    imgReview.className = 'img-review';
    imgReview.appendChild(img);
    
    element.appendChild(imgReview);
}

// Criar as imagens dentro da lista ul.img-content
createAndAppendImage(imgContent, data.img); // A imagem padrão

img.src = data.img; // adicionar um imagem como padrão

// Adicionar evento de clique nas imagens para exibi-las no div.img
imgContent.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        imgDiv.innerHTML = ''; // Limpar o div.img
        const clickedImage = document.createElement('img');
        clickedImage.src = event.target.src;
        imgDiv.appendChild(clickedImage);
    }
});

