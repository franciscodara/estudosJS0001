//Diferente do var o let é local e não se sobrescrevi
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
