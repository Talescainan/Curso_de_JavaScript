let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
console.log(`o último valor do vetor é ${num[num.length - 1]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`o valor está na posição ${pos}`)
}

// "Push" adiciona um elemento no final do array
// "Length" retorna o tamanho do array
// "Sort" organiza os elementos do array em ordem crescente
// "IndexOf" retorna a posição do elemento no array, caso não exista retorna -1