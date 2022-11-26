var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo")
var telefono = document.getElementById("telefono")
var error = document.getElementById("error")
error.style.color = "red";
error.style.fontSize = "Large"

function enviarformulario(){
    console.log("Enviando formulario...");
    var mensajeserror = [];
    if(nombre.value === null || nombre.value === ""){
        mensajeserror.push("ingresa tu nombre");
    }
    if(correo.value === null || correo.value === ""){
        mensajeserror.push("ingresa tu correo");
    }
    if(telefono.value === null || telefono.value === ""){
        mensajeserror.push("ingresa tu telefono");
    }
        error.innerHTML = mensajeserror.join(", ");
    return false;
}