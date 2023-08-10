// Carregar o cabeçalho usando JavaScript
fetch('nav.html')
.then(response => response.text())
.then(headerHtml => {
    const header = document.createElement('header');
    header.innerHTML = headerHtml;
    document.body.prepend(header);

    // Após inserir o cabeçalho, execute o código que depende dele
    importModules();
});

async function importModules() {
    // Importe os módulos e execute o código que depende deles
    const navBarConfigsModule = await import('../ferramentas/navBarConfig.js');

    const navBar = document.querySelector('.nav-content');
    const username = sessionStorage.getItem('username');
    const status = sessionStorage.getItem('status');

    const user = new navBarConfigsModule.default(navBar, username, status);

}