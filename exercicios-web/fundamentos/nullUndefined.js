let valor //não foi inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

//console.log(valor.toString())

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null
console.log(produto)