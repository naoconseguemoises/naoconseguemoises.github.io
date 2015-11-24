(function () {
    var frases = [
    "Desenha o arco-íro",
    "Desenha um negócio de jogá bola do 'guda'",
    "Pode desenhar uma frô",
    "Desenha no quadro né",
    "Agora intendi o raçucíno",
    "Eu topo tudo por dinheiro",
    "Por gentileza moça, desenha aí um objeto que vocês sabem",
    "Eu sou do Cambuci",
    "Eu sou vendedor né?",
    "Certo, mando elas desenhar um óculos",
    "Agora tô entendendo",
    "Desenha... É pá desenha a bola",
    "Duas raquetes",
    "Desenha um violão",
    "Agora acho que entrei no raciocínio"
  ];

window.onload = mostraFrase;

function mostraFrase() {
    document.getElementById("frase").textContent = frases[Math.floor((Math.random()*frases.length))];
};

document.getElementById("mostraFrase").addEventListener("click", mostraFrase);

})();
