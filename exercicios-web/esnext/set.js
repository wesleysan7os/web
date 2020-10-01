// não aceita repetição e não é indexado 
const times = new Set()
times.add('Corinthians')
times.add('Flamengo').add('Fluminense').add('Palmeiras')
times.add('Corinthians')

console.log(times)
console.log(times.size)
console.log(times.has('corinthians'))
console.log(times.has('Corinthians'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Raquel', 'Felipe']
const nomesSet = new Set(nomes)
console.log(nomesSet)