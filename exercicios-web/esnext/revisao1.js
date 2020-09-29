// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [x, y, ...z] = "Wesley"
console.log(x, y, z)

const [o, p] = [1, 2, 3]
console.log(o, p)

const pessoa = {
    nome: 'wes',
    idade: 22
}
const k = {idade: i, nome} = pessoa
console.log(i, nome)
console.log(k)