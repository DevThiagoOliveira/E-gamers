import Icon from "./icon";

export default class navBarConfigs {
    constructor(navBar, username, status) {
        this.username = username;
        this.status = status;
        this.navBar = navBar;
        this.indexConfig();
    }

    indexConfig() {
        const urlAtual = window.location.href
        
        document.addEventListener('click', element => {
            if(element.target.classList.contains('logo') && urlAtual != "http://localhost:3000/E-gamers/public/html/") {
                window.location.href = "http://localhost:3000/E-gamers/public/html";
            }
        });

        if (this.status === 'true') {

            const icone = new Icon(this.username);
            const perfil = icone.create();

            this.navBar.appendChild(perfil.icone);
            icone.colorChange(perfil.profile);

            document.addEventListener('click', element => {
                if (element.target.classList.contains('profile-icon') || element.target.classList.contains('initials') && urlAtual != "http://localhost:3000/E-gamers/public/html/config.html") {
                    window.location.href = "http://localhost:3000/E-gamers/public/html/config.html";
                }
            });
        } else {

            // Criação dos botões de login e registro
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            const loginButton = document.createElement('button');
            loginButton.textContent = 'Logar';
            loginButton.setAttribute('class', 'login');
            loginButton.addEventListener('click', () => {
                window.location.href = "http://localhost:3000/E-gamers/public/html/login.html";
            });

            const registerButton = document.createElement('button');
            registerButton.textContent = 'Registrar';
            registerButton.setAttribute('class', 'register');
            registerButton.addEventListener('click', () => {
                window.location.href = "http://localhost:3000/E-gamers/public/html/register.html";
            });

            userDiv.appendChild(loginButton);
            userDiv.appendChild(registerButton);

            this.navBar.appendChild(userDiv);
        }
    }
}