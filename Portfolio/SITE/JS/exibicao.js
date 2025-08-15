// Obtendod a Div que será preenchida com as informações
const exibicao = document.querySelector(".exibicao");

// Obtendo os botões da header
const exibir_Formacao = document.getElementById("Formacao");
const exibir_Experiencia = document.getElementById("Experiencia");
const exibir_Habilidade = document.getElementById("Habilidade");
const exibir_Projeto = document.getElementById("Projeto");
const exibir_Conquista = document.getElementById("Conquista");

let abertaem = '';

// Clique no botão de "Formação"
exibir_Formacao.addEventListener('click', () => {

    // Verifica se a div de exibição está com conteúdo (aberta) para definir o tempo de espera
    const espera = (exibicao.innerHTML === '')? 0 : 1000;

    // Fecha a div de exibição removendo a classe 'aberta'
    exibicao.classList.remove('aberta');

    setTimeout(() => {
        if (abertaem === 'formacao') { abertaem = ''}
        else {

            exibicao.innerHTML = ''; // limpa o conteúdo

            // Adiciona as formações na div de exibição
            fetch(`http://127.0.0.1:3000/obterFormacao`)
            .then(response => {
                if (!response.ok) throw new Error('Erro ao obter os dados');
                return response.json();
            })
            .then(data => {
                const formacoes = data.formacoes;

                for (const formacao of formacoes) {
                    exibicao.innerHTML = `
                        <div class="infos">
                            <div>
                                <div><p>${formacao["inicio"]} - ${formacao["final"]}</p></div>
                                <div style="font-size:20px"><p><b>${formacao["assunto"]}</b></p></div>
                                <div><p>${formacao["local"]}</p></div>
                            </div>
                        </div>
                        <div class="barra"></div>
                    ` + exibicao.innerHTML;
                }

                exibicao.innerHTML = `<div class="barra"></div>` + exibicao.innerHTML;

                // Abre a div de exibição
                requestAnimationFrame(() => {
                    exibicao.classList.add('aberta');
                    abertaem = 'formacao';
                });
            })
            .catch(err => {
                exibicao.innerHTML = `<p>Erro: ${err.message}</p>`;
                exibicao.classList.add('aberta');
                abertaem = 'formacao';
            });
        }
    }, espera);
});

// Clique no botão de "Experiências"
exibir_Experiencia.addEventListener('click', () => {

    const espera = (exibicao.innerHTML === '')? 0 : 1000;

    exibicao.classList.remove('aberta');

    setTimeout(() => {
        if (abertaem === 'experiencia') { abertaem = ''}
        else {
            exibicao.innerHTML = ''; 

            fetch(`http://127.0.0.1:3000/obterExperiencia`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar os dados');
                }
                return response.json();
            })
            .then(data => {
                const experiencias = data.experiencias;

                for (const experiencia of experiencias) {
                    console.log(experiencia);

                    exibicao.innerHTML = `
                        <div class="infos" >
                            <div>
                                <div><p>${experiencia["inicio"]} - ${experiencia["final"]}</p></div>
                                <div style="font-size:20px"><p><b>${experiencia["cargo"]}</b></p></div>
                                <div><p>${experiencia["local"]}</p></div>
                            </div>
                        </div>

                        <div class="barra"></div>
                    ` + exibicao.innerHTML
                }

                exibicao.innerHTML = ` <div class="barra"></div>` + exibicao.innerHTML

                requestAnimationFrame(() => {
                    exibicao.classList.add('aberta');
                    abertaem = 'experiencia'
                });
            })
            .catch(err => {
                exibicao.innerHTML = `<p>Erro: ${err.message}</p>`;
                exibicao.classList.add('aberta');
                abertaem = 'experiencia'
            });
        }

    }, espera);

});

// Clique no botão de "Habilidades"
exibir_Habilidade.addEventListener('click', () => {
    
    const espera = (exibicao.innerHTML === '')? 0 : 1000;

    exibicao.classList.remove('aberta');

    setTimeout(() => {
        if (abertaem === 'habilidade') { abertaem = ''}
        else {
            exibicao.innerHTML = ''; 

            fetch(`http://127.0.0.1:3000/obterHabilidade`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar os dados');
                }
                return response.json();
            })
            .then(data => {
                const habilidades = data.habilidades;

                console.log(habilidades)
                for (const item of habilidades) {

                    exibicao.innerHTML += `
                        <div class="infos" >
                            <div>
                                <div><p><b>${item["categoria"]}</b></p></div>
                                <ul id="habilidade${item["categoria"]}"></ul>
                            </div>
                        </div>

                        <div class="barra"></div>
                    `

                    const lista = document.getElementById(`habilidade${item["categoria"]}`);

                    for (const j in item["habilidade"]) {
                        lista.innerHTML += `<li><p>${item["habilidade"][j]}</p></li>`
                    }
                }

                exibicao.innerHTML = ` <div class="barra"></div>` + exibicao.innerHTML

                requestAnimationFrame(() => {
                    exibicao.classList.add('aberta');
                    abertaem = 'habilidade';
                });
            })
            .catch(err => {
                exibicao.innerHTML = `<p>Erro: ${err.message}</p>`;
                exibicao.classList.add('aberta');
                abertaem = 'habilidade'
            });
        }

    }, espera);

});

// Clique no botão de "Projetos"
exibir_Projeto.addEventListener('click', () => {

    const espera = (exibicao.innerHTML === '')? 0 : 1000;

    exibicao.classList.remove('aberta');
    setTimeout(() => {
        if (abertaem === 'projeto') { abertaem = ''}
        else {
            exibicao.innerHTML = ''; // limpa o conteúdo

            fetch(`http://127.0.0.1:3000/obterProjeto`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar os dados');
                }
                return response.json();
            })
            .then(data => {
                const projetos = data.projetos;

                for (const projeto of projetos) {
                    console.log(projeto);

                    exibicao.innerHTML = `
                        <div class="infos" >
                            <div>
                                <div><p>${projeto["inicio"]} - ${projeto["final"]}</p></div>
                                <div style="font-size:20px"><p><b>${projeto["assunto"]}</b></p></div>
                                <div><p>${projeto["local"]}</p></div>
                            </div>

                            <a href="${projeto["link"]}" target="_blank"><button class="btn_projeto">Ver mais</button></a>
                        </div>

                        <div class="barra"></div>
                    ` + exibicao.innerHTML
                }

                exibicao.innerHTML = ` <div class="barra"></div>` + exibicao.innerHTML

                requestAnimationFrame(() => {
                    exibicao.classList.add('aberta');
                    abertaem = 'projeto';
                });
            })
            .catch(err => {
                exibicao.innerHTML = `<p>Erro: ${err.message}</p>`;
                exibicao.classList.add('aberta');
                abertaem = 'projeto';
            });
        }

    }, espera);

});

// Clique no botão de "Conquistas"
exibir_Conquista.addEventListener('click', () => {
    
    const espera = (exibicao.innerHTML === '')? 0 : 1000;

    exibicao.classList.remove('aberta');

    setTimeout(() => {
        if (abertaem === 'conquista') {abertaem = ''}
        else {
            exibicao.innerHTML = ''; 

            fetch(`http://127.0.0.1:3000/obterConquista`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar os dados');
                }
                return response.json();
            })
            .then(data => {
                const conquistas = data.conquistas;

                for (const anoConquistas of conquistas) {
                    exibicao.innerHTML = `
                        <div class="infos" style="display: block;">
                            <div><p><b>${anoConquistas["ano"]}</b></p></div>
                            <ul id="conquistas${anoConquistas["ano"]}"></ul>
                        </div>

                        <div class="barra"></div>
                    ` + exibicao.innerHTML

                    const divConquistas = document.getElementById(`conquistas${anoConquistas["ano"]}`);
                    for (const conquista of anoConquistas["conquistas"]) {
                        divConquistas.innerHTML += `<li>
                            <p><b>${conquista["conquista"]}</b> <br> ${conquista["fonte"]}</p>
                        </li>`
                    }

                }

                exibicao.innerHTML = ` <div class="barra"></div>` + exibicao.innerHTML

                requestAnimationFrame(() => {
                    exibicao.classList.add('aberta');
                    abertaem = 'conquista'
                });
            })
            .catch(err => {
                exibicao.innerHTML = `<p>Erro: ${err.message}</p>`;
                exibicao.classList.add('aberta');
                abertaem = 'conquista'
            });
        }

    }, espera);

});