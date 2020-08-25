// soma, subtração e média aritmética
let resultado = (function calculadora(valores = [4,5,3,2,4,6]) {
    let soma = subtracao = contador = 0
    for (let i in valores) {
        soma = soma += valores[i]
        subtracao -= valores[i]
        contador += 1
    }
    console.log(`soma: ${soma} subtracao: ${subtracao} media aritmetica: ${soma / contador}`)
})()
