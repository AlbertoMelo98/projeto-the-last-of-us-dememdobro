/*
OBJETIVO - quando clicarmos no bot�o temos que mostrar a imagem de fundo correspondente
- passo 1 - dar um jeito de pegar o elemento HTML dos bot�es
- passo 2 - dar um jeito de identificar o clique do usu�rio no bot�o
- passo 3 - desmarcar o bot�o selecionado anterior
- passo 4 - marcar o bot�o clicado como se estivesse selecionada
- passo 5 - esconder a imagem anterior
- passo 6 - fazer aparecer a imagem correspondente ao bot�o clicado */
const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        imagens.forEach(imagem => imagem.classList.remove('ativa')); // Remove a classe "ativa" de todas as imagens
        botoes.forEach(botao => botao.classList.remove('selecionado')); // Remove a classe "selecionado" de todas os bot�es
        imagens[index].classList.add('ativa'); // Adiciona a classe "ativa" na imagem correspondente
        botao.classList.add('selecionado'); // Adiciona a classe "selecionado"  correspondente ao bot�o clicado
    });
});
