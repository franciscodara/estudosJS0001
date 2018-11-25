//Armazenamento de funçao em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazendo uma função arrow (arrow function) em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 4))

//retorno implicito

const subtrai = (a, b) => a - b
console.log(subtrai(8, 5))

const printLegal = (a) => console.log(a)
printLegal('Legal mano!')