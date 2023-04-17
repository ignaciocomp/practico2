let edad;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;

    if(edad >= 0){
        document.querySelector("#pMensaje").innerHTML = "Positivo"
    } else{
        document.querySelector("#pMensaje").innerHTML = "Negativo"
    }
}