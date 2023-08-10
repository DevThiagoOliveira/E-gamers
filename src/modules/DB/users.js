import erro from '../ferramentas/tools';

export default class User {
  constructor(username = '', password = '') {
    this.username = username;
    this.password = password;
  }

  login() {
    try {
      return fetch('http://localhost:3000/E-gamers/src/php/usuarios.php')
        .then(response => response.json())
        .then(data => {
          const result = [];
          
          for (const index in data) {
            result.push(data[index]);
          }
          
          const check = this.loginCheck(result);

          return check;

          })
          .catch(error => {
            // Tratar erros de requisição
            console.error(error);
          });

    } catch (err) {
      console.log('Erro: ', err);
    }
  }

  loginCheck(usuarios) {
    let valid = false;
    try {
      usuarios.forEach(element => {

        for (const index of element) {
          if ((index.login === this.username.value.toLowerCase()) && (index.senha === this.password.value.toLowerCase())) {
            sessionStorage.setItem('id_usuario', index.id_usuario);
            sessionStorage.setItem('username', index.login);
            sessionStorage.setItem('status', true);
            valid = true;
          } else {
            erro(this.username, "Usuário ou senha errados");
            erro(this.password, "Usuário ou senha errados");
          }
        }
      });

    } catch (error) {
      console.log(`Ocorreu um erro ao tentar logar. Erro: ${error}`);
    }

    return valid;
  }
}