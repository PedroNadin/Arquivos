let numero = document.getElementById("numero")
let resultado = document.getElementById("resultado")


function Apertar()
{
switch (numero.value)
{
    case "1":
        resultado.innerHTML = "Fim de semana"
        
    break;   
    case "7":
        resultado.innerHTML = "Fim de semana"
        
    break;   
    case "2":
        resultado.innerHTML = "Dia útil"
        
    break;   
    case "3":
        resultado.innerHTML = "Dia útil"
        
    break;   
    case "4":
        resultado.innerHTML = "Dia útil"
        
    break;   
    case "5":
        resultado.innerHTML = "Dia útil"
        
    break;   
    default:
        resultado.innerHTML = "Inválido"
        
    break;   
}
}