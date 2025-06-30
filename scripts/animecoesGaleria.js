let img01 = document.getElementById("imagem01");
let img02 = document.getElementById("imagem02");
let img03 = document.getElementById("imagem03");
let img04 = document.getElementById("imagem04");
let img05 = document.getElementById("imagem05");

let contador = 0;
const galeria = [
  'cabelo1.jpg', 'cabelo2.jpeg', 'cabelo3.jpeg', 'cabelo4.jpg', 'cabelo5.jpg',
  'cabelo6.jpeg', 'cabelo7.jpeg', 'cabelo8.jpg', 'cabelo9.jpg', 'cabelo10.jpg',
  'cabelo11.jpg', 'cabelo12.jpg', 'cabelo13.jpg', 'cabelo14.jpg'
];

setInterval(() => {
  img01.src = `imagens/galeria/${galeria[contador % galeria.length]}`;
  img02.src = `imagens/galeria/${galeria[(contador + 1) % galeria.length]}`;
  img03.src = `imagens/galeria/${galeria[(contador + 2) % galeria.length]}`;
  img04.src = `imagens/galeria/${galeria[(contador + 3) % galeria.length]}`;
  img05.src = `imagens/galeria/${galeria[(contador + 4) % galeria.length]}`;
  contador = (contador + 1) % galeria.length;
}, 2500);