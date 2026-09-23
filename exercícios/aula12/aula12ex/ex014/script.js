function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agosa são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = 'rgb(255, 223, 180)'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'rgb(255, 179, 80)'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'rgb(56, 55, 54)'
    }

}
