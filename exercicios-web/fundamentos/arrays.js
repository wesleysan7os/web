const valores = [7.7, 8.9, 5.9, 8.0]
console.log(valores[0], valores[3])
console.log(valores[7])

valores[4] = 10
console.log(valores[4])

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
delete valores[2]
console.log(valores)

console.log(typeof valores)

