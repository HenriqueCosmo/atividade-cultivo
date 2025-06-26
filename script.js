// Espera o DOM carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Verifica se os elementos foram encontrados
    if (toggleButton && menu) {
        toggleButton.addEventListener('click', () => {
            // Alterna a classe 'active' no elemento do menu
            menu.classList.toggle('active');
        });
    } else {
        console.error("Elementos 'menu-toggle' ou 'menu' não encontrados. Verifique seus seletores.");
    }
});