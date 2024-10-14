// primeiro vamos selecionar os elementos que serão manipulados

const formulario = document.querySelector ("form");

const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector ("#endereco");
const campoBairro = formulario.querySelector ("#bairro");
const campoCidade = formulario.querySelector ("#cidade");
const campoEstado = formulario.querySelector ("#estado");
const botaoBuscar = formulario.querySelector ("#buscar");
const mensagemStatus = formulario.querySelector ("#status");

// capturando o clique no botão buscar
botaoBuscar.addEventListener ("click", function(){
    // verificando se o cep nao tem 9 digitos
    if(campoCep.value.length !== 9){
        // informar o usuario sobre o erro
        mensagemStatus.textContent = "Digite um Cep valido.";
        mensagemStatus.style.color = "purple";

        // parar completamente a execução do script
        return;

    }

    // guardando o valor do cep digitado

    let cepDigitado = campoCep.value;

    // AJAX - asyncronous JavaScript and xml = tecnica de comunicação (transmissão, recebimento) de dados muito usado entre sistemas e tecnologias diferentes.
    
    

    
    
});   
// final do evento do botão
