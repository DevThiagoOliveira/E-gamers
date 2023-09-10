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
        const buttonEdit = this.buttonEdit();
        const buttonDelete = this.buttonDelete();

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(buttonEdit);
        li.appendChild(buttonDelete);

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

    buttonEdit() {
        const buttonEdit = document.createElement('div');
        const button = document.createElement('button');
        const i = document.createElement('i');
        
        buttonEdit.setAttribute('class', 'div-button');
        button.setAttribute('class', 'button-layout');
        i.setAttribute('class', 'fa-solid fa-gear');

        buttonEdit.appendChild(button);
        button.appendChild(i);

        return buttonEdit;
    }
    
    buttonDelete() {
        const buttonDelete = document.createElement('div');
        const button = document.createElement('button');
        const i = document.createElement('i');
        
        buttonDelete.setAttribute('class', 'div-button delete');
        button.setAttribute('class', 'button-layout');
        i.setAttribute('class', 'fa-solid fa-trash');

        buttonDelete.appendChild(button);
        button.appendChild(i);

        return buttonDelete;
    }
}