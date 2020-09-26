const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

contadorC = require('./instanciaNova')()
contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

console.log(contadorC.valor)
console.log
contadorC.inc()
console.log(contadorC.valor)

console.log(contadorD.valor)
