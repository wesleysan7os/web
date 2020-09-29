const anonimo = process.argv.indexOf('-a') !== -1 //pegando parametros a partir da chamada no terminal
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome:' )
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!! \n`)
        process.exit()
    })
}