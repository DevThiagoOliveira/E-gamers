import 'regenerator-runtime/runtime';
import '../assets/css/login.css';
import Login from '../modules/ferramentas/logar';
import navBarConfigs from "../modules/ferramentas/navBarConfig";

const formulario = document.querySelector('#formLogin');
const login = document.querySelector("#usuario-input");
const senha = document.querySelector("#senha-input");

const logar = new Login(formulario, login, senha);
