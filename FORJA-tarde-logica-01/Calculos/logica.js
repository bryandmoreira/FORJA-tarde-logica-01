function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = numero1 + numero2
    // console.log(numero1, numero2)
}

function sub(){
var numero3 = document.getElementById("n3").valueAsNumber
    var numero4 = document.getElementById("n4").valueAsNumber
    var resposta = document.getElementById("respSub")

    resposta.textContent = numero3 - numero4
}

function multi(){
var numero5 = document.getElementById("n5").valueAsNumber
    var numero6 = document.getElementById("n6").valueAsNumber
    var resposta = document.getElementById("respMulti")

    resposta.textContent = numero5 * numero6
}
function Div(){
var numero7 = document.getElementById("n7").valueAsNumber
    var numero8 = document.getElementById("n8").valueAsNumber
    var resposta = document.getElementById("respDiv")
                                                   
    if(numero8 !== 0){
        resposta.innerHTML = (numero7 / numero8)
    }else{
        resposta.innerHTML = "Não se divide por 0"
    }

    
}