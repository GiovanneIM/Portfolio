
    
window.addEventListener("scroll", function() {
    let limite = window.innerHeight * 0.90 * 5;


    if (window.scrollY >= limite) {
        aparecerPremios();
    }
});

function aparecerPremios () {
    // Animação de entrada do titulo
    const titulo = document.getElementById("premios_titulo");
    titulo.style.animation = 'aparecertitulo 1.5s ease forwards';
}
