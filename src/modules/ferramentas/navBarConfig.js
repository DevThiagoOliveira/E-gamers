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

            // document.addEventListener('click', element => {
            //     if (element.target.classList.contains('profile-icon') || element.target.classList.contains('initials') && urlAtual != "http://localhost:3000/E-gamers/public/html/config.html") {
            //         window.location.href = "http://localhost:3000/E-gamers/public/html/config.html";
            //     }
            // });
        }
    }
}