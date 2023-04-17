let edad;
let edad1;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;
    edad1 = document.querySelector("#txtEdad1").value;

    if(edad.toLowerCase() === "domingo"){
        document.querySelector("#pMensaje2").innerHTML = "Levantarse"
        document.querySelector("#pMensaje").innerHTML = "Hoy no trabaja"
    }  else if (edad !== "domingo") {
        document.querySelector("#pMensaje2").innerHTML = "Levantarse"
        document.querySelector("#pMensaje").innerHTML = "Hoy Trabaja"
    } 
    
    if(edad1 < 10){
        document.querySelector("#pMensaje1").innerHTML = "abrigarse mucho"
    }  else if (edad1 > 20) {
        document.querySelector("#pMensaje1").innerHTML = "ponerse ropa cómoda"
    } else {
        document.querySelector("#pMensaje1").innerHTML = "abrigo moderado"
    }
    document.querySelector("#pMensaje").innerHTML = "Ir al trabajo"

    }