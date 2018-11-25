console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia2', 'Carlos2', 'Ana2']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length);

aprovados[9] = 'Rafael'
console.log(aprovados.length);
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)
console.log(aprovados)

//let aprovados: string[]
aprovados.sort() // .sort ordena o Array
//console.log(aprovados.sort())
console.log(aprovados)

delete aprovados[1] // esse tipo de comando delete não reordena a lista, apenas põe o índice undefined
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Dara', 'Leh', 'Daisa']
aprovados.splice(1, 0, 'Steh', 'Aline') // Serve para add elementos em um indice, como tbm pra remover e remover e sobrescrever.
// em .splice o 1º elemento é o indice e o 2º é o início da contagem dos elementos.
console.log(aprovados);