export default class layoutItem {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    createLi() {
        const li = document.createElement('li');
        li.setAttribute('class', 'layout-item');

        const img = this.createImg();
        const span = this.createSpan();

        li.appendChild(img);
        li.appendChild(span);

        return li;
    }

    createImg() {
        const img = document.createElement('img');
        img.setAttribute('class', 'imagem-product');        
    
        const imagePath = `../../src/assets/img/product/${this.image}`;
    
        // Verifica se a imagem existe
        fetch(imagePath)
        .then(response => {
            if (response.ok) {
                    img.setAttribute('src', imagePath);
                } else {
                    // Imagem não encontrada
                    img.setAttribute('src', 'https://via.placeholder.com/150x150?text=Produto');
                }
            })
            .catch(error => {
                console.error(error);
                // Imagem não encontrada
                img.setAttribute('src', 'https://via.placeholder.com/150x150?text=Produto');

            });
    
        return img;
    }

    createSpan() {
        const span = document.createElement('span');

        span.setAttribute('class', 'product-label');
        span.innerText = this.name;

        return span;
    }
}