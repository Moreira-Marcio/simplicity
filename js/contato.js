// primeiro vamos selecionar os elementos que serão manipulados

const formulario = document.querySelector("form");

const campoCep = formulario.querySelector("#cep");
const campoTelefone = formulario.querySelector("#telefone");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

// ativação da mascara para telefone e CEP
$(campoTelefone).mask("(00) 0000-0000");
$(campoCep).mask("00000-000");

// capturando o clique no botão buscar
botaoBuscar.addEventListener("click", async function () {
    // verificando se o cep nao tem 9 digitos
    if (campoCep.value.length !== 9) {
        // informar o usuario sobre o erro
        mensagemStatus.textContent = "Digite um Cep valido.";
        mensagemStatus.style.color = "purple";

        // parar completamente a execução do script
        return;

    }

    // guardando o valor do cep digitado

    let cepDigitado = campoCep.value;

    // AJAX - asyncronous JavaScript and xml = tecnica de comunicação (transmissão, recebimento) de dados muito usado entre sistemas e tecnologias diferentes.

    // Etapa 1: preparar a url contendo o CEP a ser buscado.
    let url = `https://viacep.com.br/ws/${cepDigitado}/json/`;
    // Etapa 2 : acessar a API (com URL ) e guardar o retorno dela
    const resposta = await fetch(url);

    console.log(resposta);


    //  Etapa 3: extrair os dados (em caso de erro e sucesso)

    const dados = await resposta.json();

    console.log(dados);


    //  Etapa 4: lidar com os dados

    if ("erro" in dados) {
        mensagemStatus.innerHTML = "😣 CEP inexistente";
        mensagemStatus.style.color = "red";


    } else {

        mensagemStatus.innerHTML = "CEP encontrado 😉";
        mensagemStatus.style.color = "blue";

        const campos = formulario.querySelectorAll(".campos-restantes");

        // loops/laço de repetição para acessar cada elemento sekecionado

        for (const campo of campos) {
            campo.classList.remove("campos-restantes");
        }

        // atribuir os dados para cada campo

        // colocar logradouro como valor do campo endereço

        campoEndereco.value = dados.logradouro;

        // colocar bairro

        campoBairro.value = dados.bairro;

        // colocar cidade

        campoCidade.value = dados.localidade;

        // colocar estado (uf)

        campoEstado.value = dados.uf;




    }









});
// final do evento do botão

// codigo do formspree

var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        // para mensagem em pt so precisa mudar a frase
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! Deus ruim aqui em... tente novamente mais tarde"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! Deus ruim aqui em...Fale com o administrador pelo e-mail <a hef='marcio.bazao@gmail.com'>marco.bazao@gmail.com</a>"
    });
  }
  form.addEventListener("submit", handleSubmit)
