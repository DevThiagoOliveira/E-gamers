
export default function criaErro(input, mensagem) {
    const div = document.createElement('div');
    div.innerText = mensagem;
    div.classList.add('text-error');
    input.insertAdjacentElement('afterend', div);
}
