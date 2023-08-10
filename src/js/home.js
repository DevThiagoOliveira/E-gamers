import "../assets/css/home.css";
import "../modules/ferramentas/Recomendation";
import "../modules/ferramentas/navBarImport";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("searchQuery");
    
    const searchBar = document.querySelector(".search-input");
    
    if (searchQuery) {
        searchBar.value = searchQuery;
    }
});
