const imagem = document.getElementById("minhaImagem");

// Função que troca a imagem com if
function trocarImagem(botaoClicado) {
  if (botaoClicado === 1) {
    imagem.src = "img/azul.jpg";
  } else if (botaoClicado === 2) {
    imagem.src = "img/vermelho.jpg";
  } else if (botaoClicado === 3) {
    imagem.src = "img/roxo.jpg";
  }
}

// Associa eventos aos botões
document.getElementById("botao1").addEventListener("click", function() {
  trocarImagem(1);
});

document.getElementById("botao2").addEventListener("click", function() {
  trocarImagem(2);
});

document.getElementById("botao3").addEventListener("click", function() {
  trocarImagem(3);
});