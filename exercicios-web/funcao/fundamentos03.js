function calculaPotencia(base, exp) {
    let resultado = 1
    for (let i = 0; i < exp; i++) {
        resultado *= base
    }
    return resultado
    //alternativamente: return base ** exp
}

console.log(calculaPotencia(3, 3))
console.log(calculaPotencia(2, 10))
console.log(calculaPotencia(5, 0))