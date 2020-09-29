// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Matias', salario: 5000 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Ana', 'Maria']
const grupoB = [...grupoA, 'Tiago', 'Felipe']
console.log(grupoB)