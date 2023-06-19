let salario = document.getElementById("salario");
let tempo = document.getElementById("tempo");

function Apertar()
{
    if(salario.value  >= 3000 && tempo.value >= 5)
    {
        alert("Você terá aumento de impostos")
    }
    else
    {
        alert("Você não terá aumento de impostos")
    }  
}
