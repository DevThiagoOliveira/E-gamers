export default class SearchResultBuilder {
    constructor(items) {
        this.items = items;
    }

    createResultItem(item) {
        const resultItem = document.createElement("li");
        resultItem.classList.add("ui-search-li");

        const div = document.createElement("div");
        div.classList.add("ui-search-layout__item");

        const link = document.createElement("a");
        link.href = "#"; // Defina o link apropriado aqui

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("ui-search-result__image");
        
        const image = document.createElement("img");
        
        if(item.img === '../../src/assets/img/product/null') {
            image.src =  'https://via.placeholder.com/150x150?text=Produto'
        } else {
            image.src = item.img;
        }

        image.alt = item.name;

        imageDiv.appendChild(image);
        link.appendChild(imageDiv);

        const resultContent = document.createElement("div");
        resultContent.classList.add("ui-search-result-content");

        const itemName = document.createElement("label");
        itemName.innerText = item.name;

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("price");
        itemPrice.innerText = item.price;

        resultContent.appendChild(itemName);
        resultContent.appendChild(itemPrice);
        link.appendChild(resultContent);

        if (item.hasShipping) {
            const shippingDiv = document.createElement("div");
            shippingDiv.classList.add("ui-footer");

            const shippingInfo = document.createElement("div");
            shippingInfo.classList.add("portage");
            shippingInfo.innerText = "Frete";

            shippingDiv.appendChild(shippingInfo);
            link.appendChild(shippingDiv);
        }
        
        div.appendChild(link);
        resultItem.appendChild(div);

        return resultItem;
    }

    buildResults() {
        const breadcrumbTitle = document.querySelector(".ui-search-breadcrumb__title");
        const resultsContainer = document.querySelector(".ui-search-layout");

        console.log(this.items[0].searchTerm);

        breadcrumbTitle.innerText = this.items[0].searchTerm;

        resultsContainer.innerHTML = "";

        this.items.forEach(item => {
            const resultItem = this.createResultItem(item);
            resultsContainer.appendChild(resultItem);
        });

        // Atualizar a contagem de resultados
        const quantityResults = document.querySelector(".ui-search-search-result__quantity-results");
        quantityResults.innerText = `${this.items.length} Resultados`;

        const switchInput = document.getElementById("toggle-input");
        switchInput.addEventListener("change", () => {
            this.toggleShippingFilter(switchInput.checked);
        });

    }

    toggleShippingFilter(showFreeShipping) {
        const filteredItems = showFreeShipping
            ? this.items.filter(item => item.hasShipping)
            : this.items;
    
        const resultsContainer = document.querySelector(".ui-search-layout");
        resultsContainer.innerHTML = "";
    
        filteredItems.forEach(item => {
            const resultItem = this.createResultItem(item);
            resultsContainer.appendChild(resultItem);
        });
    
        const quantityResults = document.querySelector(".ui-search-search-result__quantity-results");
        quantityResults.innerText = `${filteredItems.length} Resultados`;
    }
}
