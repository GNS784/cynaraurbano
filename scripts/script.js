
let cert1 = document.getElementById("cert1")
let cert2 = document.getElementById("cert2")
let cert3 = document.getElementById("cert3")
let certificados = [cert1.src, cert2.src, cert3.src]
let valorAtual = 0
function clicar(imagemclicada){
  if(innerWidth < 600){
    return
  }else{
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
}


/*                                    Parte dos certificados  
*/
certificadosCert = ['certificado01.jpg', 'certificado02.jpg', 'certificado03.jpg']
valorAtualCert = 0
function setaDireita(){
  if(innerWidth < 600){
    if(valorAtualCert >= 0 && valorAtualCert < 2){
      valorAtualCert += 1
      cert2.src = `imagens/certificado/${certificadosCert[valorAtualCert]}`
    }else{
      valorAtualCert = 2
      cert2.src = `imagens/certificado/${certificadosCert[valorAtualCert]}`
    }
  }else{
    return
}
}function setaEsquerda(){
  if(innerWidth < 600){
    if(valorAtualCert >= 1 && valorAtualCert <= 2){
      valorAtualCert -= 1
      cert2.src = `imagens/certificado/${certificadosCert[valorAtualCert]}`
    }else{
      valorAtualCert = 0
      cert2.src = `imagens/certificado/${certificadosCert[valorAtualCert]}`
  }
  }else{
    return
}
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





