import 'regenerator-runtime/runtime';
import '../assets/css/register.css';
import { ValidarFormulario } from '../modules/loginRegister/validarFormulario';

// html tags
const formulario = document.querySelector('#formRegister');
const important = document.querySelector('.important');

let object = {
    nome: 'Thiago',
    sobrenome: 'Augusto',
    idade: '22'
}

// validação
const formValidation = new ValidarFormulario(formulario);
console.log(formulario);

// conexão com Banco de dados | PHP
formulario.addEventListener('submit', (element) => {
    element.preventDefault();

    const formData = new FormData(this); // envia todos os parametros do formulario
    const searchParams = new URLSearchParams();


    
    for (const param of searchParams) {
        searchParams.append(param[0], param[1]);
        console.log(param[0], param[1]);
    }


    // fetch('register.php', {
    //     method: 'POST',
    //     body: {data: object},
    // })
    
    // fetch('../php/register.php', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => {
    //     return console.log('dados gravados com sucesso');
    //     // return window.location.href('../../public/html/index.html');
    // })
    // .catch(error => {
    //     console.log(error);
    // });
});