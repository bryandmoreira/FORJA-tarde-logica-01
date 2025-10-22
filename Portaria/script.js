function check(){ 
    var wasBorn = parseInt(document.getElementById("birth").value)
    var response = document.getElementById("result")
    var clientAge = document.getElementById("age")

    if(isNaN(wasBorn)){
        response.textContent = "type only number 🚫"
        response.style.color = "red"
        return
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - wasBorn

    if(age >= 18){
        response.textContent = "Over 18, ENTRY ✅"
        clientAge.textContent = age 
       document.getElementById("v1").style.display = "block" 
       document.getElementById("v2").style.display = "none"
    }else{
        response.textContent = "Under 18, NOT ALLOWED 🔞"
        clientAge.textContent = age
        
        document.getElementById("v2").style.display = "block"
        document.getElementById("v1").style.display = "none"
    }
}