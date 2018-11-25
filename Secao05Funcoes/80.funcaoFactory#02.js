function  criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    };
}

console.log(criarProduto('Laptop', 2199.99));
console.log(criarProduto('iPad', 1299.99));

/*function  criarProduto() {
    return {
        nome: "Laptop",
        preco: 2000.99,
        desconto: 0.1
    };
}

console.log(criarProduto());*/