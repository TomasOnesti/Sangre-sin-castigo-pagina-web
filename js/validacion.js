document.getElementById("formulario").addEventListener("submit", function(e){
    let campos = document.querySelectorAll("#formulario input");
    let valido = true;
    
    campos.forEach(espacio => {
        if (espacio.value.trim() === "") {
            valido = false;
            espacio.classList.add("error");
        } else {
            espacio.classList.add("validado");
        }
    });
});