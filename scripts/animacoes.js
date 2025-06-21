let carrossel = document.getElementById('carrosselresultados');
let larguraItem = document.querySelector('.itemresultados').offsetWidth + 10;
function rolarDireita() {
  carrossel.scrollLeft += larguraItem;
}
contador = 0
setInterval(() => {
    if(innerWidth > 840){
        if (contador >= 9) {
            carrossel.scrollLeft = 0;
            contador = 0
        } else {
            rolarDireita();
            contador++
        }
    }else{
        return
    }
}, 2000);

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
