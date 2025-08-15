// Declarando variáveis 
const express = require('express');
const app = express();
const porta = 3000;


// Módulos
const path = require('path')                        // Definição de caminhos
const fs = require('fs');                           // Manipulação de arquivos


// Recebendo dados do banco
const f_dados = require('./banco/dados.js'); 
let formacoes = f_dados.carregarFormacoes();
let experiencias = f_dados.carregarExperiencias();
let habilidades = f_dados.carregarHabilidades();
let projetos = f_dados.carregarProjetos();
let conquistas = f_dados.carregarConquistas();
let imagensHab = f_dados.carregarImagensHab();


// ============================================================


app.use(express.json());
app.use(express.static(path.join(__dirname, '../SITE')));                                      // Disponibilizando as páginas do site


/* Lógica passar as FORMAÇÕES */
app.get('/obterFormacao', (req, res) => {
    res.json({ formacoes });
});

/* Lógica passar as EXPERIÊNCIAS */
app.get('/obterExperiencia', (req, res) => {
    res.json({ experiencias });
});

/* Lógica passar as HABILIDADES */
app.get('/obterHabilidade', (req, res) => {
    res.json({ habilidades });
});

/* Lógica passar os PROJETOS */
app.get('/obterProjeto', (req, res) => {
    res.json({ projetos });
});

/* Lógica passar as CONQUISTAS */
app.get('/obterConquista', (req, res) => {
    res.json({ conquistas });
});



/* Lógica passar as imagens de HABILIDADES */
app.get('/obterImagensHab', (req, res) => {
    res.json({ imagensHab });
});

// ============================================================


// Iniciando o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});