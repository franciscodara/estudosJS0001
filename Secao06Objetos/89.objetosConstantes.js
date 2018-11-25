// pessoa aponta pra um endereço de memória x
const pessoa = {nome: 'João'}
pessoa.nome = "Pedro"
console.log(pessoa)

// Erro ao tentar modificar o valor de uma const
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria' // não pode alterar depois do freeze
pessoa.end = "Rua ABC" // não pode adicionar
delete pessoa.nome // não pode delelar
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Dara'})
pessoaConstante.nome = 'Ana'
console.log(pessoaConstante);