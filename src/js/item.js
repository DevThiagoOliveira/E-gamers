import "../assets/css/buying-item.css";
import Icon from "../modules/ferramentas/icon";
import Quill from "quill";
import "../modules/ferramentas/navBarImport";

const username = sessionStorage.getItem("username");

const itemName = document.querySelector('.item-name');
const filter = document.querySelector('.item-filter');
const price = document.querySelector('.price');
const count = document.querySelector('.item-quant');
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const imgContent = document.querySelector('.img-content');
const imgDiv = document.querySelector('.img');
const img = document.querySelector('#main-image');
const descriptionContainer = document.querySelector('.input-comment');
const seallerName = document.querySelector('.sealler-name');

const data = JSON.parse(sessionStorage.getItem("clickedItem"));
const numericPrice = parseFloat(data.price.replace(/\D+/g, ''));

// Formatação do preço para o formato brasileiro
const formattedPrice = numericPrice.toLocaleString('pt-BR', { 
    style: 'currency',
    currency: 'BRL' 
});

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


// Função para criar uma estrela
function createStar(value, isActive) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = '&#9733;';

    if (isActive) {
        star.classList.add('active');
    }

    star.dataset.value = value;

    return star;
}

// Função para adicionar um novo comentário/opinião
function addComment(comment) {
    const feedbackList = document.querySelector('.feedback-user');

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="user-profile">
            <img src="${comment.userImage}" alt="User Image">
            <span>${comment.userName}</span>
        </div>
        <div class="user-comment">
            <div class="star-rating"></div>
            <textarea class="comment-text" cols="80" rows="3" placeholder="Deixe um comentário"></textarea>
            <button class="submit-comment">Enviar</button>
        </div>
    `;

    const starRating = li.querySelector('.star-rating');
    for (let i = 1; i <= 5; i++) {
        const isActive = i <= comment.rating;
        const star = createStar(i, isActive);
        starRating.appendChild(star);
    }

    feedbackList.appendChild(li);
}

// Event listener para clicar nas estrelas de classificação
document.addEventListener('click', event => {
    if (event.target.classList.contains('star')) {
        const stars = event.target.parentNode.querySelectorAll('.star');
        const clickedValue = parseInt(event.target.dataset.value);

        stars.forEach(star => {
            const value = parseInt(star.dataset.value);
            star.classList.toggle('active', value <= clickedValue);
        });
    }
});

// Event listener para enviar o comentário
document.addEventListener('click', event => {
    if (event.target.classList.contains('submit-comment')) {
        const commentText = event.target.previousElementSibling;
        const stars = event.target.previousElementSibling.previousElementSibling.querySelectorAll('.star.active');

        const userName = username ; // Obter o nome de usuário do usuário logado
        // const userImage = 'https://source.unsplash.com/random/1200x720/?anime'; // Obter a imagem do usuário logado
        const rating = stars.length;

        const comment = {
            userName,
            // userImage,
            rating,
            commentText: commentText.value
        };

        addComment(comment);

        // Limpar o campo de comentário
        commentText.value = '';
    }
});
