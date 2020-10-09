function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(function(resolve) {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 200),
        gerarNumerosEntre(1, 60, 600),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promise')
    })

