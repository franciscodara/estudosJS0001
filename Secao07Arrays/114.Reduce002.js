const alunos = [
    {nome: "Pedro", nota: 7.3, bolsista: false},
    {nome: "Tiago", nota: 9.2, bolsista: true},
    {nome: "João", nota: 9.8, bolsista: false},
    {nome: "Barquinho", nota: 8.7, bolsista: true}
]

//Desafio 01: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 02: Algum aluno é bolsistas?
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))