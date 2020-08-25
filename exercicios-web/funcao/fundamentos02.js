// classificar um triangulo de acordo com o tamanho de seus lados
function classificaTrinagulo(lado1, lado2, lado3) {
    let resultado = ''
    if (lado1 === lado2 && lado1 === lado3) {
        resultado = 'Equilátero'
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        resultado = 'Escaleno'
    } else {
        resultado = 'Isósceles'
    }   
    
    console.log(`Este triangulo pode ser classificado como ${resultado}`)
}

classificaTrinagulo(2, 3, 5)
classificaTrinagulo(3, 3, 3)
classificaTrinagulo(1, 3, 1)
