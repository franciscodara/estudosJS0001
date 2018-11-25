Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const printResult = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação")
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
    //.log('Fim...') // depois de entrar em qualquer laço valido cai na fim
}

printResult (9.5)
printResult (5.99)
printResult (6.5)
printResult (4.6)
printResult (3.2)
printResult (-9)