let NomeDoJogador;
let Resposta;

NomeDoJogador = document.getElementById("NomeDoJogador");
Resposta = document.getElementById("Resposta");

function EnviarNome()
{
    if(NomeDoJogador.value == ""){
        alert("Insira um nome ")
    }
    else{
        Resposta.innerHTML = "Olá , " + NomeDoJogador.value + ". Vamos Jogar!"
    }
    
}