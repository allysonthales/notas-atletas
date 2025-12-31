let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

class CalculaNotasGinasticas {
  constructor(atletas){
    this.atletas = atletas
    this.media = 0
  }

  OrdenaNotas() {
    return this.atletas.map(item => {
      return item.notas.sort((a,b) => a - b)
    })
  }

  RemoveNotasExtremas(){
    return this.atletas.map(item => {
      item.notas.pop()
      item.notas.shift()
    })
  }

  CalculaMedia(){
    return this.atletas.map(item => {
      return item.notas.reduce((soma, atual) => {
        return soma += atual
      }) / item.notas.length
    })
  }

  ImprimeResultado(){
    this.atletas.map((atleta, index) => {
      console.log(`Atleta: ${atleta.nome}`)
      console.log(`Notas Obtidas: ${atleta.notas}`)
      console.log(`Média Válida: ${this.media[index]}`)
    })
  }

  Executar(){
    this.OrdenaNotas()
    this.RemoveNotasExtremas()
    this.media = this.CalculaMedia()
    this.ImprimeResultado()
  }
}

const resultado = new CalculaNotasGinasticas(atletas)
resultado.Executar()










// function ordernaNotas(dados){
//     dados.forEach(item => {
//         return item.notas.sort((a,b) => a-b)
//     })
//     return dados

// }

// function removeNotas(dados){
//     dados.forEach(item => {
//         item.notas.pop()
//         item.notas.shift()
//     })
//     return dados
// }

// function obterMedia(dados){
//   let media = dados.map(item => {
//     return item.notas.reduce((soma, atual) => {
//       return soma += atual
//     }) / item.notas.length
//   })
//   return media
// }


// console.log(ordernaNotas(atletas))
// console.log(removeNotas(atletas))
// console.log(obterMedia(atletas))