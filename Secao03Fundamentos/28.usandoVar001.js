//Variável "var" pode ser vista em qualquer lugar do código
//Conceito de variável global
{
    {
        {
            {
                var sera = 'Será só imaginação?';
            }
        }
    }
}
console.log(sera)

// Variável "var" dentro de uma função só é vista no bloco da mesma.
teste()

function teste() {
    var local = 123
    console.log(local)
}