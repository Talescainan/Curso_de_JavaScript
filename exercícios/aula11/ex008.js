var vel = Number.parseInt(prompt('Qual a velocidade que você andou na ultimas horas?'))
console.log(`A velocidade do seu carro é ${vel}KM/h`)

if (vel > 60) { // Condição Simples!
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}

console.log('Dirija sempre usando cinto de segurança!')