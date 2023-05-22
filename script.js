

let icon = document.getElementById("icon-menu");


icon.addEventListener("click", function(){
    let menu = document.getElementById("menu");
    if(menu.style.display == "block"){
        menu.style.display = "none"
        icon.innerText = "menu"
    }else{
        menu.style.display = "block"
        icon.innerText = "close"
    }
});