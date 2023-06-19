function mult(a,b)
{
    return a*b
}

let mult = (a,b) =>
{
    return a*b
}

//Sintaxe da Função é definida com a function palavra-chave, seguida por um nome, seguido por parênteses().//
//Quando o Javascript atinge uma return instruções, a função para ser executada .
//Se a função foi invocada a partir de uma instrução, O Javascript "retornará" para o executar o código após instrução invocada.
 
let celsius =  document.getElementById("celsius")
let resultado =  document.getElementById("resultado")
function toCelsius()
{
    
   return resultado.innerHTML = (celsius.value*1.8) + 32
}


function par(q)
{
    if (q % 2 ==0) {
    return console.log("Par")   
    
    } else {
        return console.log("Impar") 
    }
    
}
function maior(m,n)
{
    if (m > n) {
    return console.log(m)   
    
    } else {
        return console.log(n) 
    }
    
}


const maior = (t,u) =>
{
    t>u? console.log(t) : console.log(u)
}