const pessoa = {
    saudacao: 'Bumdia!',
    falar () {
        console.log(this.saudacao);
    }
}
pessoa.falar()

const falar = pessoa.falar;
falar(); // conflito entre paradígmas de programação funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();