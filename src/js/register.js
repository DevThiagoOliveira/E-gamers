import 'regenerator-runtime/runtime';
import '../assets/css/register.css';
import { ValidarFormulario } from '../modules/loginRegister/validarFormulario';

// html tags
const registerForm = document.querySelector('#formRegister');

// validação
const formValidation = new ValidarFormulario(registerForm);

// integração com PHP
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(registerForm);
    const jsonData = {};

    for (const [name, value] of formData.entries()) {
        jsonData[name] = value;
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    };

    try {
        const response = await fetch('../../src/php/register.php', requestOptions);
    
        if (!response.ok) {
            throw new Error('Erro na solicitação. Código de status: ' + response.status);
        }
    
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    
});