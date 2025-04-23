// Seleciona os elementos
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const mensagem = document.getElementById("mensagem");
// Funções para ligar e desligar a lâmpada
function ligarLampada() {
 lampada.src = "img/lampada-ligada.jpeg";
 lampada.alt = "Lâmpada Ligada";
 mensagem.innerText = "A lâmpada está ligada.";
}
function desligarLampada() {
 lampada.src = "img/lampada-desligada.jpeg";
 lampada.alt = "Lâmpada Desligada";
 mensagem.innerText = "A lâmpada está desligada.";
}
// Adiciona os eventos aos botões
btnLigar.addEventListener("click", () =>ligarLampada("ligada"));
btnDesligar.addEventListener("click", () => desligarLampada("desligada"));

lampada.addEventListener("mouseover", () => ligarLampada("ligada"));
lampada.addEventListener("mouseout", () =>desligarLampada("desligada"));

desligarLampada("desligada");
