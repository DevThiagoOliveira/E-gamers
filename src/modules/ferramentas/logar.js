import User from "../DB/users";
import erro from "../ferramentas/tools";

export default class Login {
  constructor(loginForm = "", username = "", password = "") {
    this.loginForm = loginForm;
    this.username = username;
    this.password = password;
    this.user = new User(this.username, this.password);

    document.addEventListener("DOMContentLoaded", () => {
      this.handleSubmit(); // Chamada ao método handleSubmit após o carregamento do DOM
    });
  }

  handleSubmit() {
    if (!this.loginForm || !this.username || !this.password) {
      console.error("Elementos do DOM não foram encontrados.");
      return;
    }

    this.loginForm.addEventListener("submit", (element) => {
      element.preventDefault();
      
      for (const errorText of this.loginForm.querySelectorAll(".text-error")) {
        errorText.remove();
      }

      if (this.username.value === "") {
        erro(this.username, "Campo usuário está vazio");
        return;
      }

      if (this.password.value === "") {
        erro(this.password, "Campo senha está vazio");
        return;
      }

      this.user
        .login()
        .then((logado) => {
            if (logado) {
                window.location.href = "http://localhost:3000/E-gamers/public/html";
                return;
            }
        })
        .catch((error) => {
            console.error(error);
        });
    });
  }
}
