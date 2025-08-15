const header_nome = document.getElementById("header_nome");
const headerOpcao = document.getElementsByClassName("header_opcao");

// BOTÕES DO HEADER
header_nome.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});

for ( const opcao of headerOpcao ) {
    const atalho = opcao.dataset.atalho;
    
    opcao.addEventListener('click', () => {
        document.getElementById(`secao_${atalho}`).scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
    })
}


// Hover sobre o botão de nome
header_nome.addEventListener('mouseenter', () => {
    const icones = document.getElementsByClassName("header_icone");
    const nomes = document.querySelectorAll(".header_nome p");


    for (const icone of icones) {
      icone.classList.add("girar")
    }

    for (const nome of nomes) {
      nome.classList.add("pular")
    }
});

header_nome.addEventListener('mouseleave', () => {
    const icones = document.getElementsByClassName("header_icone");
    const nomes = document.querySelectorAll(".header_nome p");

    for (const icone of icones) {
      icone.classList.remove("girar")
    }
    
    for (const nome of nomes) {
      nome.classList.remove("pular")
    }
});


