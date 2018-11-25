function Pessoa() {
    this.idade = 0;
    const self = this;
    setInterval(function() {
        this.idade++
        console.log(this.idade);
    }/*.bind(this)*/, 1000)
}
//substituir o this pelo self
function Pessoa() {
    this.idade = 0;

    const self = this;
    setInterval(function() {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa;