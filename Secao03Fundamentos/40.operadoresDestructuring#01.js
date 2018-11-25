// recurso do ecmascript 6
// notação literal de objeto, chave/valor 
const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        quadra: '56B',
        numero: 35
    }
}
//console.log(pessoa.nome, pessoa.idade)
const {
    nome,
    idade
} = pessoa //operador destructuring
console.log(nome, idade)

const {
    nome: n,
    idade: i
} = pessoa //operador destructuring
console.log(n, i)

const {
    sobrenome,
    humor = true
} = pessoa
console.log(sobrenome, humor) // atensão: apenas o ultimo dado é null ou undefined, dados anteriores dão erro

const {
    endereco: {
        quadra,
        numero,
        cep
    }
} = pessoa
console.log(quadra, numero, cep)