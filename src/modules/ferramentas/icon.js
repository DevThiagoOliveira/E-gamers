export default class Icon {
    constructor(name, image = '') {
        this.name = name;
        this.image = image;
    }
    
    create() {
        const profile = this.createProfileIcon();
        const span = this.createSpan();
        const divUser = this.createDiv();

        profile.appendChild(span);
        divUser.appendChild(profile);

        return { icone: divUser, profile: profile, span: span };
    }
    
    createDiv() {
        const div = document.createElement('div');
        div.setAttribute('class', 'user');

        return div;
    }
    
    createProfileIcon() {
        const div = document.createElement('div');
        div.setAttribute('class', 'profile-icon');

        return div;
    }
    
    createSpan() {
        const span = document.createElement('span');
        span.setAttribute('class', 'initials');
        span.innerText = this.name.charAt(0);

        return span;
    }

    colorChange(div) {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        window.addEventListener('DOMContentLoaded', function() {

            // Gerar uma cor aleatória
            const randomColor = color;

            // Definir a cor de fundo do ícone de perfil
    
            div.style.backgroundColor = randomColor;
            

        });

        if(this.image != '') {
            // ele coloca o nome do usuário dentro do perfil
        }
    }

    
}