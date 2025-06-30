let menu = window.document.getElementById("menu")
function clicarMenu(){
    menu.style.left = "0px"
}
function clicarSair(){
    menu.style.left = "-100%"
}

function clicarSair(){
    menu.style.left = "-100%"
}
menu.addEventListener("click", function(event) {
    if (event.target.tagName === "A" && innerWidth < 600) {
        menu.style.left = "-100%";
    }
});