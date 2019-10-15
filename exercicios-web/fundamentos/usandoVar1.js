{{{{ var sera = 'Será? '}}}} //escopo global

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) nao é visivel fora do escopo da function