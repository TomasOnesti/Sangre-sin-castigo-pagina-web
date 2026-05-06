let db;

const solicitar = indexedDB.open("guardado", 1);

function guardar(){
    const guardado = db.transaction(["formulario"], "readwrite");
    const almacenar = guardado.objectStore("formulario");
    const nombre = document.getElementById("nombre");

    if(nombre){
        const datos = {
            id: 1,
            nombre: nombre.value,
            email: document.getElementById("email").value,
            contra: document.getElementById("password").value,
            confirmar: document.getElementById("repassword").value
        }
        almacenar.put(datos);
    }

    const guardado_inicio = db.transaction(["formulario_inicio"], "readwrite");
    const almacenar_inicio = guardado_inicio.objectStore("formulario_inicio");
    const nombre_inicio = document.getElementById("nombre_inicio");
    const datos_inicio = {
        id: 1,
        nombre: nombre_inicio.value,
        contra: document.getElementById("password_inicio").value
    }
    almacenar_inicio.put(datos_inicio);
}

function cargar(){
    const guardado = db.transaction(["formulario"], "readonly");
    const almacenar = guardado.objectStore("formulario");
    const solicitar = almacenar.get(1);
    
    solicitar.onsuccess = ()=>{
        const datos = solicitar.result;

        if(datos){
            document.getElementById("nombre").value = datos.nombre || "";
            document.getElementById("password").value = datos.contra || "";
            document.getElementById("repassword").value = datos.confirmar || "";
            document.getElementById("email").value = datos.email || "";
        }
    }

    const guardado_inicio = db.transaction(["formulario_inicio"], "readonly");
    const almacenar_inicio = guardado_inicio.objectStore("formulario_inicio");
    const solicitar_inicio = almacenar_inicio.get(1);

    solicitar_inicio.onsuccess = ()=>{
        const datos_inicio = solicitar_inicio.result;

        if(datos_inicio){
            document.getElementById("nombre_inicio").value = datos_inicio.nombre || "";
            document.getElementById("password_inicio").value = datos_inicio.contra || "";
        }
    }
}


solicitar.onupgradeneeded = (evento) =>{
    db = evento.target.result;

    db.createObjectStore("formulario", { keyPath: "id" });
    db.createObjectStore("formulario_inicio", { keyPath: "id" });
}

solicitar.onsuccess = (evento) =>{
    db = evento.target.result;
    cargar();
}

solicitar.onerror = (evento)=>{
  Toastify({
    text: "Error",
    duration: 5000,
    gravity: "top",
    position:"right",
    style:{
        background:"#f52323" 
    }
  }).showToast();  
}

document.addEventListener("DOMContentLoaded", ()=>{

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("input", guardar);
    }
});