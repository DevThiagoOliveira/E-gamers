import 'regenerator-runtime/runtime';
import '../assets/css/login.css';
import Login from '../modules/ferramentas/logar';

const formulario = document.querySelector('#formLogin');
const login = document.querySelector("#usuario-input");
const senha = document.querySelector("#senha-input");

const logar = new Login(formulario, login, senha);

document.addEventListener('click', element => {
    const urlAtual = window.location;
    if(element.target.classList.contains('logo') && urlAtual != "http://localhost:3000/E-gamers/public/html/") {
        window.location.href = "http://localhost:3000/E-gamers/public/html";
    }
});
