import "../assets/css/home.css";
import "../modules/ferramentas/navBarImport";
import Recomendation from "../modules/ferramentas/Recomendation";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("searchQuery");
    
    const searchBar = document.querySelector(".search-input");
    const clickedItemJSON = sessionStorage.getItem("clickedItem");

    if (searchQuery) {
        searchBar.value = searchQuery;
    }
    
    if (clickedItemJSON) {
        const clickedItem = JSON.parse(clickedItemJSON);
        const recommend = new Recomendation(clickedItem.searchTerm, clickedItem.name, clickedItem.img, clickedItem.urlItem);

        recommend.create();
    }
});