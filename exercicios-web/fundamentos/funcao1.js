// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // number + undefined = NaN
imprimirSoma(2, 3, 4, 5, 6) // = 5
imprimirSoma() // NaN

function soma(a, b = 0) {
    return a + b
}

console.log(soma(7, 3))
console.log(7) 
