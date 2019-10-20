
let meuBotao = document.querySelector(".botao");
let descricao =  document.querySelector(".descricao");
let titulo = document.querySelector(".titulo-descricao");
let meuh1 = document.querySelector(".meuH1");
let ancora = document.querySelector(".ancora");

function alterarCorBotao(){
    meuBotao.style.backgroundColor = "orange";
    meuBotao.innerHTML = "Obrigado!";
    meuh1.innerHTML = "Ótima escolha :D";
    meuh1.style.color = "white";
    meuh1.style.fontSize = "70px";

}

meuBotao.onclick = alterarCorBotao;

let funcionalidades = document.querySelector('.funcionalidades-items');

function alterarCorBox () {
    funcionalidades.style.backgroundColor = "#a7a8a7";
    descricao.style.color = "white";
    titulo.style.color = "white";
}

function alterarCorAcora() {
    ancora.style.backgroundColor = "yellow";
    ancora.style.color = "#333";
    ancora.style.fontWeight = "bold";
}

funcionalidades.onclick = alterarCorBox;
descricao.onclick = alterarCorBox;
titulo.onclick = alterarCorBox;
ancora.onclick = alterarCorAcora;





