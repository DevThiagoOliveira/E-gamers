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
            
            document.addEventListener('click', function(event) {
                const clickedElement = event.target;
                
                if (clickedElement.classList.contains('profile-icon') || clickedElement.classList.contains('initials') && urlAtual != "http://localhost:3000/E-gamers/public/html/config.html") {
                    const navContentAncestor = clickedElement.closest('.nav-content');
    
                    if (navContentAncestor) {
                        const dropdownMenu = navContentAncestor.querySelector('.dropdown-menu');
                        dropdownMenu.classList.toggle('active');
                    }

                    // Obtém os elementos de ícone do menu
                    const cogIcon = document.querySelector('.fa-cog');
                    const userLargeIcon = document.querySelector('.fa-user-large');
                    const signOutIcon = document.querySelector('.fa-sign-out-alt');

                    // Evento de clique para o ícone de configuração (cog)
                    cogIcon.addEventListener('click', () => {
                        window.location.href = "http://localhost:3000/E-gamers/public/html/config.html";
                    });

                    // Evento de clique para o ícone de perfil (user-large)
                    userLargeIcon.addEventListener('click', () => {
                        window.location.href = "http://localhost:3000/E-gamers/public/html/config.html";
                    });

                    // Evento de clique para o ícone de sair (sign-out)
                    signOutIcon.addEventListener('click', () => {
                        const exit = false;
                        sessionStorage.setItem("status", exit);
                        window.location.href = "http://localhost:3000/E-gamers/public/html/index.html";
                    });

                } else {
                    // Se clicar fora do menu, feche-o
                    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
                    dropdownMenus.forEach(menu => {
                        menu.classList.remove('active');
                    });
                }
            });
        }
                
        // Criação dos botões de login e registro
        const navContent = document.querySelector('.nav-content');
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
        navContent.appendChild(userDiv);
        
        
        // Selecionar o elemento de input de busca
        const searchInput = document.querySelector('.search-input');

        // Verificar se o usuário está logado
        if (sessionStorage.getItem('status') === 'true') {
            searchInput.style.width = '49.5em';
            registerButton.style.display = 'none';
            loginButton.style.display = 'none';
        }
    }
}