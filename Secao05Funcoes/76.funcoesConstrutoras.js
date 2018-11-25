function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo interno
    let velocidadeAtaul = 0;
    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtaul + delta <= velocidadeMaxima) {
            velocidadeAtaul += delta;
        } else {
            velocidadeAtaul = velocidadeMaxima;
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtaul;
    }
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())

////////////
console.log(typeof Carro);
console.log(typeof ferrari);
