// Adicionando as Formações no painel
fetch(`http://127.0.0.1:3000/obterFormacao`)
.then(response => {
    if (!response.ok) throw new Error('Erro ao obter os dados');
    return response.json();
})
.then(data => {
    const formacoes = data.formacoes;
    const painelFormacao = document.getElementById("painel_formacao");

    for (const formacao of formacoes) {
        console.log(1)
        painelFormacao.insertAdjacentHTML('beforeend', `
            <div class="card_formacao">
                <div class="logo_formacao"><img src="${formacao.imagem}"/></div>
                <div class="txt_formacao">
                    <div><p><b>${formacao.assunto}</b></p></div>
                    <div><p>${formacao.inicio} - ${formacao.final}</p></div>
                </div>
                <div class="circulo"></div>
            </div>
        `);
    }



    window.addEventListener("scroll", function() {
        // 90vh em pixels
        let limite = window.innerHeight * 0.90;

        if (window.scrollY >= limite) {
            aparecerFormacao();
        }
    });
    
})
.catch(err => {});


function aparecerFormacao () {
    // Animação de entrada do titulo
    const titulo = document.getElementById("formacao_titulo");
    titulo.style.animation = 'aparecertitulo 1.5s ease forwards';

    // Animação de entrada da seta
    const barra = document.getElementById("barra_tempo");
    barra.style.animation = 'seta 1.5s ease forwards';

    // Evento para quando a barra está animada
    barra.addEventListener('animationend', function startCards() {
        // Animação de entrada das cards
        const cardFormacao = document.getElementsByClassName("card_formacao");
        for (const card of cardFormacao) {
            card.style.animation = 'aparecer_card 1s ease forwards';
        }

        // Animação de entrada das caixas de texto
        const caixaTexto = document.getElementsByClassName("caixa_texto");
        for (const caixa of caixaTexto) {
            caixa.style.animation = 'aparecer_direita 1s ease forwards';
        }

        // Removendo o evento da barra
        barra.removeEventListener('animationend', startCards);
    });

    
}






