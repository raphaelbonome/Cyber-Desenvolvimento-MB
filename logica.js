const botao = document.getElementById('botao-menu');
const menu = document.getElementById('menu');

botao.addEventListener('click', () => {
    // O toggle adiciona a classe se não tiver, e remove se já tiver
    menu.classList.toggle('menu-visivel');
});