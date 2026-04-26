document.getElementById("formulario").addEventListener("submit", function(event){
    let campos = document.querySelectorAll("#formulario .input");
    let valido = true;
    let pass = document.getElementById("password");
    let repass = document.getElementById("repassword");
    campos.forEach(espacio => {
        if (espacio.value.trim() === "") {
            valido = false;
            espacio.classList.add("error");
        } else {
            espacio.classList.add("validado");
        }
    });
    if(!valido){
        event.preventDefault();
        Toastify({
            text: "Escribe en todos los campos",
            duration: 3000,
            gravity: "top",
            position:"right",
            className: "alert",
            style: {
                background:"linear-gradient(to right, #f52323, #c7c93d)"
            }
        }).showToast();
    }

    if(pass !== repass){
        valido = false;
        event.preventDefault();
        Toastify({
            text: "Las contraseñas no coinciden",
            duration: 3000,
            gravity: "top",
            position:"right",
            className: "alert",
            style: {
                background:"linear-gradient(to right, #f52323, #c7c93d)"
            }
        }).showToast();
    }

});