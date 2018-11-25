// o uso de chaves em js para execução de uma unica função dispença chaves
function test1(num) {
    if (num > 7) //aqui dispenso a chave, apesar de ser aconselhavel
        console.log(num)
        console.log('Final') // apesar de estar identado com o if, nesse caso a falta de chaves deixa ele de fora do laço
}

test1(6)
test1(8)

//Advertencia
function test2(num) {
    if (num > 7); { // nesse caso temos uma expressão vasia seguiada de uma nova expressão console
        console.log(num)
    }
}

test2(6)
test2(8)