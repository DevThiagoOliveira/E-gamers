import "../assets/css/home.css";
import User from "../modules/DB/users";
import "../modules/ferramentas/Recomendation";
import icon from "../modules/ferramentas/icon";
import navBarConfigs from "../modules/ferramentas/navBarConfig";

const navBar = document.querySelector('.nav-content');
const username = sessionStorage.getItem('username');
const status = sessionStorage.getItem('status');

const inde = new navBarConfigs(navBar, username, status);