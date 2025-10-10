function escreva(){
var nome = document.getElementById("nome").value
var pet = document.getElementById("pet").value
var idade = parseFloat(document.getElementById("idade").value)
var raca = document.getElementById("raca").value
var nac = document.getElementById("nacional").value



var printNome = document.getElementById("printNome")
var printPet = document.getElementById("printPet")
var printIdade = document.getElementById("printIdade")
var printRaca = document.getElementById("printRaca")
var printNacional = document.getElementById("printNacional")

printNome.textContent = nome
printPet.textContent = pet
printIdade.textContent = idade
printRaca.textContent = raca
printNacional.textContent = nac

}