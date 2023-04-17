let edad;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;

    if(edad > 20){
        document.querySelector("#pMensaje").innerHTML = "es mayor que 20"
    } else if (edad <= 20){
        document.querySelector("#pMensaje").innerHTML = "es menor o igual a 20"
    }
}