let valor //Undefined (não inicializada)
console.log(valor)
valor = null // ausencia de valor ou tipo 
console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

/////////////////////////

produto.preco = null // produto sem preço, valor 0 ou degraça
console.log(!!produto.preco);
console.log(produto)