import '../assets/css/search.css';
import "../modules/ferramentas/navBarImport";
import productSearch from '../modules/DB/products';
import SearchResultBuilder from "../modules/ferramentas/SearchResultBuilder";

const navBar = document.querySelector('.nav-content');
const username = sessionStorage.getItem('username');
const userId = '00';
const product = new productSearch(userId, username);

const searchItems = []; // Inicialize um array vazio

document.addEventListener("DOMContentLoaded", async () => {

    try {
        // Obtenha os dados da resposta responseData
        const responseData = await product.product('http://localhost:3000/E-gamers/src/php/getProduct.php');

        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get("searchQuery");
        
        const searchItems = responseData.products.map(item => {
            const hasShipping = item.frete !== null && item.frete !== "0";

            return {
                name: item.nome_produto,
                img: `../../src/assets/img/product/${item.imagem}`,
                price: `R$ ${item.preco}`,
                hasShipping: hasShipping,
                searchTerm: searchQuery,
                category: item.categoria,
                buying_id: item.comprador_id,
                descricao: item.descricao,
                id_product: item.id_product,
                amount: item.quantidade,
                sealer_id: item.vendedor_id,
                sealer_name: item.vendedor_nome,
                date_register: item.data_cadastro
            };
        });
        
        // Filtrar os itens com base no searchTerm
        const filteredItems = searchItems.filter(item => {
            return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
    
        // Crie a instância do SearchResultBuilder com os novos searchItems filtrados
        const search = new SearchResultBuilder(filteredItems);
    
        const searchBar = document.querySelector(".search-input");
        if (searchQuery) {
            searchBar.value = searchQuery;
        }
    
        search.buildResults();

        const searchResults = document.querySelectorAll(".ui-search-layout__item");
        searchResults.forEach(result => {
            result.addEventListener("click", () => {
                const itemName = result.querySelector(".ui-search-result-content label").innerText;
                const itemData = searchItems.find(item => item.name === itemName);

                if (itemData) {
                    sessionStorage.setItem("clickedItem", JSON.stringify(itemData));
                    window.location.href = `http://localhost:3000/E-gamers/public/html/item.html?item=${encodeURIComponent(itemName)}`;
                }
            });
        });

    } catch (err) {
        console.log(err);
    }
    
});
