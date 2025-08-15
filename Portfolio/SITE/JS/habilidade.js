fetch(`http://127.0.0.1:3000/obterHabilidade`)
.then(response => {
    if (!response.ok) throw new Error('Erro ao obter os dados');
    return response.json();
})
.then(data => {
    const habilidades = data.habilidades;

    const idiomas = document.getElementById('habilidades_Idiomas');
    const programacao = document.getElementById('habilidades_Programacao');
    const appsEferramentas = document.getElementById('habilidades_AppsEFerramentas');
    

    for (const habilidadeCategoria of habilidades) {
        let caixa;

        switch (habilidadeCategoria.categoria) {
            case "Idiomas":
                caixa = idiomas;
                break;
            case "Programação":
                caixa = programacao;
                break;
            default:
                caixa = appsEferramentas;
                break;
        }

        for (const habilidade of habilidadeCategoria.habilidades) {
            caixa.insertAdjacentHTML('beforeend',`
                <div class="card_habilidade">
                    <div class="logo_habilidade"><img src="../imagens/habilidades/${habilidade.imagem}.svg"/></div>
                    <div class="txt_habilidade"><p><b>${habilidade.descricao}</b></p></div>
                </div>
            `)
        }
    }
    

    
    
    window.addEventListener("scroll", function() {
        let limite = window.innerHeight * 0.90 * 2;


        if (window.scrollY >= limite) {
            aparecerHabilidade();
        }
    });
})
.catch(err => {
    console.log(err)
});



function aparecerHabilidade() {
    const titulo = document.getElementById("habilidades_titulo");
    titulo.style.animation = 'aparecertitulo 1.5s ease forwards';

    titulo.addEventListener('animationend', function iniciarBlocos(e) {
        if (e.animationName !== 'aparecertitulo') return;

        const blocos = document.getElementsByClassName("bloco_habilidades");
        let index = 0;

        function animarBloco() {
            if (index >= blocos.length) return;

            const bloco = blocos[index];
            bloco.style.animation = 'aparecer_esquerda 1s ease forwards';

            bloco.addEventListener('animationend', function iniciarCards(ev) {
                if (ev.animationName !== 'aparecer_esquerda') return;

                const cards = bloco.querySelectorAll(".card_habilidade");
                let index_cards = 0;

                function animarCard() {
                    if (index_cards >= cards.length) {
                        // acabou os cards, vai para o próximo bloco
                        bloco.removeEventListener('animationend', iniciarCards);
                        index++;
                        animarBloco();
                        return;
                    }

                    const card = cards[index_cards];
                    card.style.animation = 'aparecer_direita 0.2s ease forwards'; // animação dos cards

                    card.addEventListener('animationend', function proxCard(ev) {
                        if (ev.animationName !== 'aparecer_direita') return;
                        card.removeEventListener('animationend', proxCard);
                        index_cards++;
                        animarCard();
                    });
                }

                animarCard();
            });
        }

        animarBloco();
        titulo.removeEventListener('animationend', iniciarBlocos);
    });
}
