class Recommendation {
    constructor(search, itemSearching, imagem, urlItem) {
        this.search = search;
        this.itemSearching = itemSearching;
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
        li.setAttribute('title', this.itemSearching);

        return ul.appendChild(li);
    }
}
