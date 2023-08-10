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
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("searchQuery");

    try {
        // Obtenha os dados da resposta responseData
        const responseData = await product.product('http://localhost:3000/E-gamers/src/php/getProduct.php');
    
        const searchItems = responseData.products.map(item => {
            const hasShipping = item.frete !== null && item.frete !== "0";
            
            return {
                name: item.nome_produto,
                img: `../../src/assets/img/product/${item.imagem}`,
                price: `R$ ${item.preco}`,
                hasShipping: hasShipping,
                searchTerm: "" // Defina a propriedade searchTerm como uma string vazia
            };
        });
    
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get("searchQuery");
    
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
    } catch (err) {
        console.log(err);
    }
    
});
