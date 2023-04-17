let edad;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;

    if(edad < -20 || edad > 20){
        document.querySelector("#pMensaje").innerHTML = "CUMPLE"
    } else{
        document.querySelector("#pMensaje").innerHTML = "NO CUMPLE"
    }
}