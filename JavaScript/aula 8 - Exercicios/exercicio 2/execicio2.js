let primeirovalor = document.getElementById("primeirovalor")
let segundovalor = document.getElementById("segundovalor")
let operacao = document.getElementById("operacao")
let resultado = document.getElementById("resultado")
let soma;

function Apertar()
{
switch (operacao.value)
{
    case "+":
       resultado.innerHTML = parseInt(primeirovalor.value) + parseInt(segundovalor.value) 
       break;
    case "*":
       resultado.innerHTML = parseInt(primeirovalor.value) * parseInt(segundovalor.value) 
       break;
    case "/":
       resultado.innerHTML = parseInt(primeirovalor.value) / parseInt(segundovalor.value) 
       break;
    case "-":
       resultado.innerHTML = parseInt(primeirovalor.value) - parseInt(segundovalor.value) 
       break;
}



}