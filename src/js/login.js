import 'regenerator-runtime/runtime';
import '../assets/css/login.css';
import Login from '../modules/ferramentas/logar';

const formulario = document.querySelector('#formLogin');
const login = document.querySelector("#usuario-input");
const senha = document.querySelector("#senha-input");
const baseUrl = window.location.origin;

const logar = new Login(formulario, login, senha);

document.addEventListener('click', element => {
    const urlAtual = window.location;
    if(element.target.classList.contains('logo') && urlAtual !== `${baseUrl}/E-gamers/public/html/`) {
        window.location.href = `${baseUrl}/E-gamers/public/html`;
    }
});
