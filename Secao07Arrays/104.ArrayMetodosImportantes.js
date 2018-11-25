const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // deleta o ultimo elemento do array e o retorna.
console.log(pilotos);

pilotos.push ('Verstappen') //add um elemento no array encrementando o length
console.log(pilotos);
console.log(pilotos.length);

pilotos.shift() // remove o primeiro índice.
console.log(pilotos);

pilotos.unshift('Hamilton') // inclui um elemento no indice zero do array
console.log(pilotos);

// splice pode add e remover

// adicionar
pilotos.splice(2,0, 'Botas', 'Piquet')
console.log(pilotos);
// Remover
pilotos.splice(3,1) //à partir do indece 3 remove 2
console.log(pilotos);

//Métoto slice
const algunsPilotos = pilotos.slice(2) //novo array 
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4) // pega os indeces 
console.log(algunsPilotos2);