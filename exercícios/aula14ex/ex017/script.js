function tabuada () {
    const num = document.getElementById('num')
    const tabuada = document.getElementById('tabuada')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        const n = Number(num.value)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }

}