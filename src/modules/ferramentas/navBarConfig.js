import Icon from "./icon";
import tools from "../ferramentas/tools";

export default class navBarConfigs {
    constructor(navBar = "", username = "", status = "") {
        this.username = username;
        this.status = status;
        this.navBar = navBar;
        this.indexConfig();
    }
    
    indexConfig() {
        const baseUrl = window.location.origin;
        const urlAtual = window.location.href
        
        document.addEventListener('click', element => {
            if(element.target.classList.contains('logo') && urlAtual != `${baseUrl}/E-gamers/public/html/`) {
                window.location.href = `${baseUrl}/E-gamers/public/html`;
            }

        });
        
        if (this.status === 'true') {
            
            const icone = new Icon(this.username);
            const perfil = icone.create();
            
            this.navBar.appendChild(perfil.icone);
            icone.colorChange(perfil.profile);
            
            document.addEventListener('click', function(event) {
                const clickedElement = event.target;
                
                if (clickedElement.classList.contains('profile-icon') || clickedElement.classList.contains('initials') && urlAtual != `${baseUrl}/E-gamers/public/html/config.html`) {
                    const navContentAncestor = clickedElement.closest('.nav-content');
    
                    if (navContentAncestor) {
                        const dropdownMenu = navContentAncestor.querySelector('.dropdown-menu');
                        dropdownMenu.classList.toggle('active');
                    }

                    // Obtém os elementos de ícone do menu
                    const cogIcon = document.querySelector('.fa-cog');
                    const signOutIcon = document.querySelector('.fa-sign-out-alt');

                    // Evento de clique para o ícone de configuração (cog)
                    cogIcon.addEventListener('click', () => {
                        window.location.href = `${baseUrl}/E-gamers/public/html/config.html`;
                    });

                    // Evento de clique para o ícone de sair (sign-out)
                    signOutIcon.addEventListener('click', () => {
                        const exit = false;
                        sessionStorage.setItem("status", exit);
                        window.location.href = `${baseUrl}/E-gamers/public/html/index.html`;
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
        loginButton.textContent = 'Entrar';
        loginButton.setAttribute('class', 'login');
        loginButton.addEventListener('click', () => {
            window.location.href = `${baseUrl}/E-gamers/public/html/login.html`;
        });

        const registerButton = document.createElement('button');
        registerButton.textContent = 'Registrar';
        registerButton.setAttribute('class', 'register');
        registerButton.addEventListener('click', () => {
            window.location.href = `${baseUrl}/E-gamers/public/html/register.html`;
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

        // Carrinho de compra

        const shopCartButton = document.querySelector('.cart-icon');
        const closeButton = document.getElementById("close-button");
        const removeProduct = document.querySelector('.item-remove');
        const cartItems = document.querySelectorAll('.cart-item');

        shopCartButton.addEventListener("click", () => {
            cart.classList.add("open");
        });

        closeButton.addEventListener("click", () => {
            cart.classList.remove("open");
        });

        const list = new tools();

        list.loadCartFromLocalStorage();
        list.saveCartToLocalStorage();

        cartItems.forEach(cartItem => {
            const itemId = cartItem.dataset.item; // Obtenha o itemIdentification do atributo data-item
            removeProduct.addEventListener('click', () => {
                // Remova o item clicado
                list.removeCartItem(itemId);
            });
        });

    }

}