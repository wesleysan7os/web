// Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a +b)
}

imprimirSoma(3, 9)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,7))

// Retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(4, 5))