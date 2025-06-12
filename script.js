function enviarWhatsApp(event){
    event.preventDefault()

    const nome = document.getElementById("inome").value
    const msg = document.getElementById("imensagem").value
    const telefone = "244949566947"

    const texto = `Olá! Meu nome é ${nome}. ${msg}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    console.log(url)

    window.open(url, "_blank")

}