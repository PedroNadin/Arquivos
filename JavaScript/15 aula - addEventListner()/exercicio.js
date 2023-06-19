let altura = document.getElementById('altura')
let base = document.getElementById('base')
let resultado = document.getElementById('resultado')
resultado.addEventListener('click', botao)
function botao()
{
     botao.innerHTML = (parseInt(base.value)* parseInt(altura.value))/2;
}