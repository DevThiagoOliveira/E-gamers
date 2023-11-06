import User from "../DB/users";
import erro from "../ferramentas/tools";

export default class Login {
  constructor(loginForm = "", username = "", password = "") {
    this.loginForm = loginForm;
    this.username = username;
    this.password = password;
    this.user = new User(this.username, this.password, this.loginForm);

    document.addEventListener("DOMContentLoaded", () => {
      this.handleSubmit(); // Chamada ao método handleSubmit após o carregamento do DOM
    });
  }

  handleSubmit() {
    const baseUrl = window.location.origin;

    if (!this.loginForm || !this.username || !this.password) {
      console.error("Elementos do DOM não foram encontrados.");
      return;
    }

    const ferramentas = new erro();

    this.loginForm.addEventListener("submit", (element) => {
      element.preventDefault();
      
      if (this.username.value === "") {
        ferramentas.criaErro(this.username, "Campo usuário está vazio");
        return;
      }

      if (this.password.value === "") {
        ferramentas.criaErro(this.password, "Campo senha está vazio");
        return;
      }

      this.user
        .login()
        .then((logado) => {
            if (logado) {
                window.location.href = `${baseUrl}/E-gamers/`;
                return;
            }
        })
        .catch((error) => {
            console.error(error);
        });
    });
  }
}
