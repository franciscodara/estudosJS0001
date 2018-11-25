// par Chave/valor
const saudacao = 'Opa' //contexto léxico 01

function exec() {
    const saudacao = 'Iaê' //contexto léxico 02
    return saudacao
}

// obetos são grupos aninhados de pares Chave/Valor
const cliente = {
    nome: 'Dara',
    idade: 34,
    peso: 84,
    logradouro: 'Quadra 02 casa 19'
}

console.log(saudacao)
console.log(exec())
console.log(cliente)