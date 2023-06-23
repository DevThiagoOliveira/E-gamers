class Recommendation {
    constructor(search, itemSeraching, imagem, urlItem) {
        this.search = search;
        this.itemSeraching = itemSeraching;
        this.imagem = imagem;
        this.urlItem = urlItem;
    }

    create() {
        const li = this.createLi();
        this.liImage(li);
        this.ulApend(li);
    }

    createLi() {
        const li = document.createElement('li');
        return li;
    }

    liImage(li) {
        const a = document.createElement('a');
        const img = document.createElement('img');
        
        a.setAttribute('href', this.urlItem ? "#" : this.urlItem);
        img.setAttribute('src', this.imagem);

        a.appendChild(img);
        li.appendChild(a);
    }

    ulApend(li) {
        const ul = document.querySelector('.recommendation-bar');
        li.setAttribute('class', 'last-search');
        li.setAttribute('title', this.itemSeraching);

        return ul.appendChild(li);
    }
}

const p1 = new Recommendation('roda', 'rodaAro20', "https://source.unsplash.com/random/800x900/?game", '#');
p1.create();
