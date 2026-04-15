const email= document.getElementById("email");

email.addEventListener("input", function(event){
    if(email.validity.typeMusmatch){
        email.setCustomValidity("No se recibio el dato esperado");
    }else{
        email.setCostumValidity("");
    }
})