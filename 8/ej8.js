let edad;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;

    if(edad > 30){
        document.querySelector("#pMensaje").innerHTML = "es mayor que treinta"
    } else if (edad < 10){
        document.querySelector("#pMensaje").innerHTML = "menor que 10"
    } else {
        document.querySelector("#pMensaje").innerHTML = "entre 10 y 30"
    }
}