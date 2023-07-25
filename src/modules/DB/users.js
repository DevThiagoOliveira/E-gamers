import erro from '../ferramentas/tools';

export default class User {
  constructor(username = '', password = '') {
    this.username = username;
    this.password = password;
  }

  login() {
    try {
      return fetch('http://localhost:3000/E-gamers/src/php/usuários.php')
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
          if ((index.login === this.username.value) && (index.senha === this.password.value)) {
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

  perfil() {
    try {
      if(!this.login()) {
        

      }
    } catch (error) {
      
    }
  }
}