// MÓDULOS USADOS
const fs = require('fs');


// CAMINHOS
const caminhoFormacao = './banco/formacao.json';
const caminhoExperiencia = './banco/experiencia.json';
const caminhoHabilidade = './banco/habilidade.json';
const caminhoProjeto = './banco/projeto.json';
const caminhoConquista = './banco/conquista.json';


// FUNÇÕES

// Formação
function carregarFormacoes() {
    const formacoes = fs.readFileSync(caminhoFormacao, 'utf-8');
    return JSON.parse(formacoes);
}

// Experiencia
function carregarExperiencias() {
    const experiencias = fs.readFileSync(caminhoExperiencia, 'utf-8');
    return JSON.parse(experiencias);
}

// Habilidade
function carregarHabilidades() {
    const habilidades = fs.readFileSync(caminhoHabilidade, 'utf-8');
    return JSON.parse(habilidades);
}

// Projeto
function carregarProjetos() {
    const projetos = fs.readFileSync(caminhoProjeto, 'utf-8');
    return JSON.parse(projetos);
}

// Conquista
function carregarConquistas() {
    const conquistas = fs.readFileSync(caminhoConquista, 'utf-8');
    return JSON.parse(conquistas);
}



// Imagens Habilidades
function carregarImagensHab() {
    const imagensHab = fs.readdirSync('../SITE/imagens/habilidades', 'utf-8');
    return imagensHab;
}


// Permitindo que as funções sejam exportadas
module.exports = {
    carregarFormacoes,
    carregarExperiencias,
    carregarHabilidades,
    carregarProjetos,
    carregarConquistas,
    carregarImagensHab,
};