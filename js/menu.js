const botaoMenu = document.querySelector(".titulo-menu a");
const listaDeLinks = document.querySelector(".links-menu");

// ouvinte de evento para o click no botao menu
botaoMenu.addEventListener("click",function(event ){
    event.preventDefault();
    listaDeLinks.classList.toggle("aberto");   
    
    if(listaDeLinks.classList.contains("aberto")){
        botaoMenu.innerHTML = "fechar &times;";
    } else{
        botaoMenu.innerHTML = "menu &equiv;";
    }
})




