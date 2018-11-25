let dobro = function(a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; //retorno implicito
console.log(dobro(Math.PI));
console.log(dobro(1983));

let ola = function() {
    return "¡Holla!";
}
console.log(ola());
ola = () => "¡Holla implícito!";
console.log(ola());
