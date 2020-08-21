// High-order function

//criar de forma literal
function func1() { }

//armazenar em uma variavel
const func2 = function() { }

//armazenar em array
const a = [function func3(a,b) {return a + b}, func1, func2]
console.log(a)

//armazenar em atributo de objeto
const obj = {}
obj.falar = function() { return "oi"}
console.log(obj.falar())

//passar uma funçao como parametro
function run(fun) {
    fun()
}

run(function() {console.log("rodando...")})

//funçao pode retornar/ter uma funçao
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(4,2)(5)