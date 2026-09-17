const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual a sua idade atualmente? ', (resposta) => {
    var idade = Number(resposta)

    if (idade >= 18) {
        console.log('Seu voto é obrigatório. Procure imediatamente realizar o titúlo de eleitor')
    } else if (idade === 16 || idade === 17 || idade === 67) {
        console.log('Você pode votar. Mas, sua decisão de voto é opcional1)')
    } else {
        console.log('Você ainda não pode votar.')
    }

    readline.close()
})