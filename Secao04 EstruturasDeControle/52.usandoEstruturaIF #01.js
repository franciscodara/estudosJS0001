// if comum
function soBoanoticia(nota) {
    if (nota >= 7) { //
        console.log('Aprovado com nota :', +nota)
    }
}

soBoanoticia(8.1)
soBoanoticia(6.1)

// condicional boleana com variável única
seForVerdadeFalo()
seForVerdadeFalo(null)
seForVerdadeFalo(undefined)
seForVerdadeFalo(NaN)
seForVerdadeFalo('')
seForVerdadeFalo(0)
seForVerdadeFalo(-1)
seForVerdadeFalo(' ')
seForVerdadeFalo('?')
seForVerdadeFalo([])
seForVerdadeFalo([1, 2])
seForVerdadeFalo({})

function seForVerdadeFalo(valor) {
    if (valor) {
        console.log('É verdade...! ', valor)
    }
}