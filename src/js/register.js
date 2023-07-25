import "regenerator-runtime/runtime";
import "../assets/css/register.css";
import { ValidarFormulario } from "../modules/loginRegister/validarFormulario";
import navBarConfigs from "../modules/ferramentas/navBarConfig";

//const
const navBar = new navBarConfigs();
const registerForm = document.querySelector("#formRegister");
const formValidation = new ValidarFormulario("#formRegister");

// integração com PHP
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (formValidation.handleSubmit(event) === true) {

    const formData = new FormData(registerForm);
    const jsonData = {};

    for (const [name, value] of formData.entries()) {
      jsonData[name] = value;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/E-gamers/src/php/register.php",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(
          "Erro na solicitação. Código de status: " + response.status
        );
      }

      const data = await response.json();
      window.location.href = 'http://localhost:3000/E-gamers/public/html/login.html';

    } catch (error) {
      console.error(error);
    }
  }
});
