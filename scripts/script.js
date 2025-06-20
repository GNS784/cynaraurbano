/*
let menu = document.getElementById("menu");
function clicarMenu() {
    menu.style.opacity = "1";
    menu.style.left = "0px";
}
function clicarSair() {
    menu.style.opacity = "0";
    menu.style.left = "-200px";
}
*/

let cert1 = document.getElementById("cert1")
let cert2 = document.getElementById("cert2")
let cert3 = document.getElementById("cert3")
let certificados = [cert1.src, cert2.src, cert3.src]
let valorAtual = 0
function clicar(imagemclicada){
    cert1.style.width = "250px"
    cert1.style.height = "200px"
    cert1.style.filter = "blur(5px)"
    cert2.style.width = "250px"
    cert2.style.height = "200px"
    cert2.style.filter = "blur(5px)"
    cert3.style.width = "250px"
    cert3.style.height = "200px"
    cert3.style.filter = "blur(5px)"
  if(imagemclicada.src == certificados[0]){
    cert1.style.width = "400px"
    cert1.style.height = "280px"
    cert1.style.filter = "blur(0px)"
  }else if(imagemclicada.src == certificados[1]){
    cert2.style.width = "400px"
    cert2.style.height = "280px"
    cert2.style.filter = "blur(0px)"
  }else if(imagemclicada.src == certificados[2]){
    cert3.style.width = "400px"
    cert3.style.height = "280px"
    cert3.style.filter = "blur(0px)"
  }
}




















/* function setaDireita(){
  if(valorAtual >= 0 && valorAtual < 2){
    valorAtual += 1
    cert.src = `imagens/certificado/${certificados[valorAtual]}`
  }else{
    valorAtual = 2
    cert.src = `imagens/certificado/${certificados[valorAtual]}`
  }
} */
/* function setaEsquerda(){
    if(valorAtual >= 1 && valorAtual <= 2){
    valorAtual -= 1
    cert.src = `imagens/certificado/${certificados[valorAtual]}`
  }else{
    valorAtual = 0
    cert.src = `imagens/certificado/${certificados[valorAtual]}`
  }/*
}




































/*
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Carrossel de Imagens</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>

<div class="carrossel">
  <button class="seta esquerda" onclick="voltarImagem()">&#10094;</button>

  <img id="imagemCarrossel" src="imagem1.jpg" alt="Imagem 1">

  <button class="seta direita" onclick="avancarImagem()">&#10095;</button>
</div>

<script src="script.js"></script>
</body>
</html>
 */





