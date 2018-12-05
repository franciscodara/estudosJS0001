const alunos = [
    {nome: "Pedro", nota: 7.3, bolsista: false},
    {nome: "Tiago", nota: 9.2, bolsista: true},
    {nome: "João", nota: 9.8, bolsista: false},
    {nome: "Barquinho", nota: 8.7, bolsista: true}
]

//console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)
