fetch(`http://127.0.0.1:3000/obterProjeto`)
.then(response => {
    if (!response.ok) throw new Error('Erro ao obter os dados');
    return response.json();
})
.then(data => {
    const projetos = data.projetos;

    const painel = document.getElementById("painel_projetos")
    for (const projeto of projetos) {
        painel.insertAdjacentHTML('beforeend',`
            <div class="bloco_projeto">
                <div class="titulo_projeto">${projeto.assunto}</div>
                <div class="caixa_projeto">${projeto.descricao}</div>
                <div class="link_projeto"><a href="${projeto.link}" target="_">Ver mais →</a></div>
            </div>
        `)
    }
    
    
    window.addEventListener("scroll", function() {
        let limite = window.innerHeight * 0.90 * 3;
    
    
        if (window.scrollY >= limite) {
            aparecerProjetos();
        }
    });
    
})
.catch(err => {
    console.log(err)
});
    





function aparecerProjetos () {
    // Animação do título
    const titulo = document.getElementById("projetos_titulo");
    titulo.style.animation = 'aparecertitulo 1.5s ease forwards';


    const painel = document.getElementById("painel_projetos");
    painel.style.animation = "expandir_painel 1.5s ease forwards";

    // Listener da animação do título
    titulo.addEventListener('animationend', function iniciarBlocos(e) {
        if (e.animationName !== 'aparecertitulo') return;

        // Obtendo os blocos de projeotoes
        const blocos = document.getElementsByClassName("bloco_projeto");
        let index = 0;

        // Função para animar os blocos
        function animarBloco() {
            if (index >= blocos.length) return;

            // Selecionando e animando 1 dos blocos
            const bloco = blocos[index];
            bloco.style.animation = 'aparecer_abaixo 0.8s ease forwards';

            // Listener da nimação do bloco
            bloco.addEventListener('animationend', function iniciarLinks(ev) {
                if (ev.animationName !== 'aparecer_abaixo') return;

                // Selecionando os links do bloco
                const links = bloco.querySelectorAll(".link_projeto");
                let index_links = 0;

                // Função para animar os links do bloco
                function animarLink() {
                    if (index_links >= links.length) {
                        bloco.removeEventListener('animationend', iniciarLinks);

                        // Indo para o próximo bloco
                        index++;
                        animarBloco();
                        return;
                    }

                    // Selecionando e animando 1 dos links
                    const link = links[index_links];
                    link.style.animation = 'expandir_link_projeto 0.5s ease forwards';

                    // Listener da animação do link
                    link.addEventListener('animationend', function proxlink(ev) {
                        if (ev.animationName !== 'expandir_link_projeto') return;
                        link.removeEventListener('animationend', proxlink);

                        // Indo para o próximo link
                        index_links++;
                        animarLink();
                    });
                }

                animarLink();
            });
        }

        // Chamando a função para animar blocos
        animarBloco();
        titulo.removeEventListener('animationend', iniciarBlocos);
    });
}
