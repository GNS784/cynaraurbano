let carrossel = document.getElementById('carrosselresultados');
let larguraItem = document.querySelector('.itemresultados').offsetWidth + 18;
function rolarDireita() {
  carrossel.scrollLeft += larguraItem;
}
contador = 0
setInterval(() => {
    if (contador >= 9) {
        carrossel.scrollLeft = 0;
        contador = 0
    } else {
        rolarDireita();
        contador++
    }
}, 3000);

let carrosselServicos = document.getElementById('carrossel');
let larguraItemServicos = document.querySelector('.item').offsetWidth + 45;
contadorServicos = 0
function scrollDireita() {
    if (contadorServicos < 9){
    carrosselServicos.scrollLeft += larguraItemServicos;
    contadorServicos++;
    }else{
        carrosselServicos.scrollLeft = 0;
        contadorServicos = 0;
    }
}
function scrollEsquerda() {
  carrosselServicos.scrollLeft -= larguraItemServicos;
}
