console.log('01º', '1' == 1)    //== compara valores
console.log('02º','1' === 1)    //=== compara tipos
console.log('03º', '3'!= 3)     //!= compara valores
console.log('04º', '3' !== 3)   //!== estritamente diferentes

console.log('05º', 3 < 2)
console.log('06º', 3 > 2)
console.log('07º', 3 <= 2)
console.log('08º', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09º', d1 === d2)   //nesse caso tanto faz estritamente igual ou igual pois é referencia de memória
console.log('10º', d1 == d2)
console.log('11º', d1.getTime() === d2.getTime())//getTime compara number em milisegundos

console.log('12º', undefined == null)
console.log('12º', undefined === null)
