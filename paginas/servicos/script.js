let menu = window.document.getElementById("menu")
function clicarMenu(){
    if(innerWidth < 600){
        menu.style.left = "0%"
    }else{
        return
    }
}   

function clicarSair(){
    if(innerWidth < 600){
        menu.style.left = "-100%"
    }else{
        return
    }
}