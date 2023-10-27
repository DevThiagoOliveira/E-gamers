import erro from '../ferramentas/tools';

export default class User {
  constructor(username = '', password = '') {
    this.username = username;
    this.password = password;
    this.baseUrl = window.location.origin;
  }

  async userData() {

    const userId = parseInt(sessionStorage.getItem('id_usuario'));
    const username = sessionStorage.getItem("username");

    try {
      const data = {
        user_id: userId,
        user_name: username
      };
      
      const response = await fetch(`${this.baseUrl}/E-gamers/src/php/getUserData.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Erro na solicitação. Código de status: ' + response.status);
      }
      
      const responseData = await response.json();

      return responseData;
      
    } catch (error) {
      console.log(error);
    }
  }

  login() {
    try {

      return fetch(`${this.baseUrl}/E-gamers/src/php/usuarios.php`)
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

        const ferramentas = new erro();
        
        for (const index of element) {
          if ((index.login === this.username.value.toLowerCase()) && (index.senha === this.password.value.toLowerCase())) {
            sessionStorage.setItem('id_usuario', index.id_usuario);
            sessionStorage.setItem('username', index.login);
            sessionStorage.setItem('status', true);
            valid = true;
          }

          if(index.login != this.username.value.toLowerCase()) {
            ferramentas.criaErro(this.username, "Usuário inválido ou errado");
          }

          if(index.senha != this.password.value.toLowerCase()) {
            ferramentas.criaErro(this.password, "Senha inválida ou errada");
          }
        }
      });

    } catch (error) {
      console.log(`Ocorreu um erro ao tentar logar. Erro: ${error}`);
    }

    return valid;
  }
}