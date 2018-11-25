// o var por ser global é sobrescrito pela ultima entrada
 var numero = 1
 {
     var numero = 2
     console.log('dentro =', numero)
 }
 console.log('fora =', numero)
