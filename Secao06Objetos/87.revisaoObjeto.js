// coleção dinamica de pares chaves/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Dara',
        idade: 36,
        endereco: {
            quadra: "02",
            numero: "19",
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 42
    }, {
        nome: 'Ana',
        idade: 31,
    }],
    calcularValordeSeguro: function() {
        //.......
    }
}

// acesso à partir da notação ponto'.'

carro.proprietario.endereco.numero = 1000;
console.log(carro.proprietario.endereco.numero);
// acesso à partir de strings
carro['proprietario']['endereco']['quadra'];
console.log(carro);

//delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValordeSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);
