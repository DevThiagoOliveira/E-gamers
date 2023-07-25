import "../assets/css/config.css";
import Icon from "../modules/ferramentas/icon";
import navBarConfigs from "../modules/ferramentas/navBarConfig";

if(sessionStorage.getItem('status') != 'true') {
    window.location.href = 'http://localhost:3000/E-gamers/public/html/index.html'
}

//Constates
const username = sessionStorage.getItem('username');
const status = sessionStorage.getItem('status');

const navBar = document.querySelector('.nav-content');
const perfilName = document.querySelector('.perfil-name');
const wallet = document.querySelector('.wallet');
const perfilIcon = document.querySelector('.perfil-img');
const label = document.querySelector('.page-label');
const buttonAdd = document.querySelector('.button-add');
const inputFile = document.querySelector('.picture__input');
const pictureImage = document.querySelector('.picture__image');

// Perfil icon
const navConfig = new navBarConfigs(navBar, username, status);
const icon = new Icon(username);
const iconPerfil = new Icon(username);

const leftPerfil = iconPerfil.create();

perfilIcon.appendChild(leftPerfil.icone)
icon.colorChange(leftPerfil.profile);

perfilName.innerText = username;

//Input Popup Picture
pictureImage.innerText = 'Escolha uma imagem';

inputFile.addEventListener('change', element => {
    const inputTarget = element.target;

    const file = inputTarget.files[0];

    if(file) {
        const reader = new FileReader();

        reader.addEventListener('load', element => {
            const readerTarget = element.target;
            const img = document.createElement('img');

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

document.addEventListener('click', element => {

    if(element.target.classList.contains('selling')) {
        label.innerText = 'Minhas Vendas';
        buttonAdd.style.display = 'none';
    }
    
    if(element.target.classList.contains('buy')) {
        label.innerText = 'Minhas Compras';
        buttonAdd.style.display = 'inline-block';
    }
    
    if(element.target.classList.contains('button-add')) {
        openPopup();
        console.log('botão clicado');
    }

    if(element.target.classList.contains("close-popup")) {
        closePopup();
    }

    if(element.target.classList.contains('config')) {
        label.innerText = 'Minha Conta';
        buttonAdd.style.display = 'none';
        /* puxar via xhm de outro arquivo as config do usuário */
    }

    if(element.target.classList.contains('exit')) {
        const exit = false;
        sessionStorage.setItem('status', exit);
        window.location.href = "http://localhost:3000/E-gamers/public/html/index.html";
    }
});

function openPopup() {
    const pop = document.querySelector('#popup').style.display = 'block';
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