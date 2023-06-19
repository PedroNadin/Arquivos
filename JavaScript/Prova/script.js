let nome =  document.getElementById("nome")
let html =  document.getElementById("html")
let css =  document.getElementById("css")
let javascript =  document.getElementById("js")
let resultado =  document.getElementById("Resultado")
function Nota()
{
    
   return resultado.innerHTML = (nome.value) + parseInt(html.value) + parseInt(css.value) + parseInt(javascript.value) /3
}
