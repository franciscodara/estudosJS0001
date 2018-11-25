/*Rever conceitos de logica bolleana
 *Operador lógico E (&&) o resultado só é verdadeiro quando ambas as preposições forem verdadeiras.
 *Operador lógico OU (||)o resultado só é falso quando ambas as preposições forem falsas.
 *Operador de negação NOT (!)
 *Operador OU exclusivo (xor) ambos precisão ter o mesmo valor pra serem falsos.
 */
// Problema sugerido para resolução:
// (&&)Se trabalho de terça & quinta derem certo, sábado comprar TV de 50" e tomar sorvete
// (||)Se trabalho de apenas um dos dias der ceto, comprar TV de 32" e não toma sorvete
// (xor)Se trabalho de apenas um dos dias der ceto, comprar TV de 32" e tomar sorvete
// Se nenhum dos trabalhos der certo não tem sorvete.

function comprar(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //   const comprarTv32 = !!(trabalho1 ^ trabalho2) // OU exclusiso não tem operador em js
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
    return {
        comprarSorvete,
        comprarTv50,
        comprarTv32,
        manterSaudavel
    }
}

console.log('\n', comprar(true, true))
console.log('\n', comprar(true, false))
console.log('\n', comprar(false, true))
console.log('\n', comprar(false, false))