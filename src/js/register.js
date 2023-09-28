import "regenerator-runtime/runtime";
import "../assets/css/register.css";
import { ValidarFormulario } from "../modules/loginRegister/validarFormulario";
import erro from "../modules/ferramentas/tools";

//const
const registerForm = document.querySelector("#formRegister");
const formValidation = new ValidarFormulario("#formRegister");
const userInput = document.querySelector(".user");
const baseUrl = window.location.origin;

//redirect
document.addEventListener('click', element => {
  const urlAtual = window.location;
  if(element.target.classList.contains('logo') && urlAtual !== `${baseUrl}/E-gamers/public/html/`) {
      window.location.href = `${baseUrl}/E-gamers/public/html`;
  }
});

// integração com PHP
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (formValidation.handleSubmit(event) === true) {

    const formData = new FormData(registerForm);
    const jsonData = {};

    for (const [name, value] of formData.entries()) {
      jsonData[name] = value;
    }

    const cpfValue = jsonData["cpf"];
    const phoneValue = jsonData["phone"];

    jsonData["cpf"] = cpfValue.replace(/\D/g, "");
    jsonData["phone"] = phoneValue.replace(/\D/g, "");
    jsonData["firstName"] = jsonData["firstName"].toLowerCase();
    jsonData["lastName"] = jsonData["lastName"].toLowerCase();
    jsonData["user"] = jsonData["user"].toLowerCase();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    };

    try {
      const response = await fetch(
        `${baseUrl}/E-gamers/src/php/register.php`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error(
          "Erro na solicitação. Código de status: " + response.status
        );
      }

      const data = await response.json();
      window.location.href = `${baseUrl}/E-gamers/public/html/login.html`;
      console.log(data);

      // Verificar se o erro é de usuário duplicado
      const errorMessage = "SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate";
      if (data.message.includes(errorMessage)) {
        erro(userInput, "Usuário já existe, escolha outro nome de usuário");
      }

    } catch (error) {
      console.error(error);
    }
  }
});
