let car =
 {
    modelo : "Fiat",
    Ano: 2023,
    Cor: "azul"
 }

 let pedro =
 {
    nome: "Lindo",
    idade: 15,
    escola: "Carolina Cintra"
 }


 let Aluno = 
 {
      PrimeiroNome: 'Eduardo',
      SegundoNome: 'Ximenes',
      Idade: 18,
      Altura: 1.85,
      Peso: 90,
      fullname: function()
      {
         return this.PrimeiroNome +" " + this.SegundoNome
      }

 }

 const tarefas =
 [
 {
   id:1,
   texto: 'Levar o lixo para fora',
   Completado:true,
 },
 {
   id:2,
   texto: 'Fazer miojo',
   Completado: true,
 },
 {
   id: 3,
   texto: 'Dormir',
   Completado: false,
 }
]