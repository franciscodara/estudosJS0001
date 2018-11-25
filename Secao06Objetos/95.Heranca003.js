// dicas: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
const pai = {
    nome: 'Dara',
    corCabelo: 'Castanho'
}
const filha1 = Object.create(pai) // O método Object.create define como protótipo (classe pai) o parâmetro referenciado entre parenteses.
filha1.nome = 'Amanda'
console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia', // O valor associado à propriedade. Pode ser qualquer valor Javascript válido (número, objeto, função, etc).
        writable: false, // Indica se o valor de uma propriedade é gravável ou não. Possui valor true se e somente se o valor puder ser alterado com um operador de atribuição. O valor padrão é false.
        enumerable: true // true se e somente se esta propriedade deve ser exibida na enumeração das propriedades do objeto correspondente. O valor padrão é false.
    }
})

console.log(filha2.nome)
filha2.nome = 'Alanna'
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    //console.log(key)
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`);
        
}
 