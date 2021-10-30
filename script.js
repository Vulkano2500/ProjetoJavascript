const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const menssagem = document.getElementById("menssagem")

const form = document.getElementById("form")
const paragrafo = document.getElementById("warnings")

form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let errado = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    paragrafo.innerHTML = ""
    if(nome.value.length <4){
        warnings += `O Nome é muito curto <br>`
        errado = true
    }
    if(sobrenome.value.length <2){
        warnings += `O Sobrenome é muito curto <br>`
        errado = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `O Email é inválido <br>`
        errado = true
    }
    
    if(telefone.value.length <11){
        warnings += `O Telefone é inválido <br>`
        errado = true
    }

    if(menssagem.value.length <5){
        warnings += `Menssagem muito curta <br>`
        errado = true
    }

    if(errado){
        paragrafo.innerHTML = warnings
    } else{
        paragrafo.innerHTML = "Enviado com Sucesso"
    }
})