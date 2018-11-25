const printResult = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra.')
            break;
        case 8:
        case 7:
            console.log('Aprovado.')
            break;
        case 6:
        case 5:
        case 4:
            console.log('Recuperação.')
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado.')
            break;
        default:
            console.log('Nota inválida')
    }
}

//printResult (10)
printResult(9.5)
// printResult (8)
// printResult (7)
// printResult (6)
// printResult (5)
// printResult (4)
// printResult (3)
// printResult (2)
// printResult (1)
// printResult (0)
// printResult (-1)