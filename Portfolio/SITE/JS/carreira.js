fetch(`http://127.0.0.1:3000/obterExperiencia`)
.then(response => {
    if (!response.ok) throw new Error('Erro ao obter os dados');
    return response.json();
})
.then(data => {
    const experiencias = data.experiencias;
    const painel = document.getElementById("painel_carreira")


    for (const experiencia of experiencias) {
        painel.insertAdjacentHTML('beforeend',`
            <div class="card_carreira">
                <div class="logo_carreira"><img src="../imagens/carreira/${experiencia.imagem}.svg"/></div>

                <div class="conteudo_carreira">
                    <div class="carreira_titulo">${experiencia.local}</div>

                    <div class="carreira_cargo">${experiencia.cargo}</div>

                    <div class="carreira_periodo">${experiencia.inicio} - ${experiencia.inicio}</div>
                </div>
            </div>
        `)
    }
    

    
    
    window.addEventListener("scroll", function() {
        let limite = window.innerHeight * 0.90 * 4;


        if (window.scrollY >= limite) {
            aparecerCarreira();
        }
    });
})
.catch(err => {
    console.log(err)
});

function aparecerCarreira () {
    // Animação do título
    const titulo = document.getElementById("carreira_titulo");
    titulo.style.animation = 'aparecertitulo 1.5s ease forwards';

    titulo.addEventListener('animationend', function iniciarBlocos(e) {
        if (e.animationName !== 'aparecertitulo') return;

        const cards = document.getElementsByClassName("card_carreira");
        let index = 0;

        // Função para animar os cards
        function animarCards() {
            if (index >= cards.length) return;

            // Selecionando e animando 1 dos blocos
            const card = cards[index];
            card.style.animation = 'aparecer_abaixo 0.8s ease forwards';

            // Listener da nimação do bloco
            card.addEventListener('animationend', function iniciarLinks(ev) {
                if (ev.animationName !== 'aparecer_abaixo') return;

                // Indo para o próximo bloco
                index++;
                animarCards();
                return;
            });
        }

        // Chamando a função para animar blocos
        animarCards();
        titulo.removeEventListener('animationend', iniciarBlocos);
    });
}