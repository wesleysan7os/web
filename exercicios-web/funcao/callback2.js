const notas = [7.7, 5.3, 8.9, 3.6, 9.0, 7.8, 4.5];

//sem callback
const notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

//com callback
const notasBaixas2 = notas.filter(nota => nota < 7);
console.log(notasBaixas2);
