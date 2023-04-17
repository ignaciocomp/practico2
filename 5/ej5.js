let edad;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;

    if(edad > 10 && edad < 20){
        document.querySelector("#pMensaje").innerHTML = "es mayor que 10 y menor que 20"
    } else if (edad > 20){
        document.querySelector("#pMensaje").innerHTML = "Afuera"
    } else if (edad < 10){
        document.querySelector("#pMensaje").innerHTML = "Afuera"
    }
}