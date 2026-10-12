let valores = [8, 1, 7, 4, 2, 9]

valores.sort()

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Pos retorna a posição do elemento no array

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// For in é mais utilizado para percorrer objetos, mas também pode ser usado em arrays.

