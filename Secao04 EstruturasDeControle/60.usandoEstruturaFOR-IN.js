const notas = [6.7, 7.5, 8.9, 7.7, 9.8]

for (let i in notas) {
    //    console.log(i, notas[i])
    console.log(`No índice ${i}, temos a nota ${notas[i]}`)
}

const pessoa = {
    nome: 'Francisco',
    sobrenome: 'Dara',
    idade: 35,
    peso: 84,
    altura: 1.87
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}