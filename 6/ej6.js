let edad;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;

    if(edad % 7 === 0 && edad % 3 === 0){
        document.querySelector("#pMensaje").innerHTML = "es múltiplo de 7 y 3 simultáneamente"
    } else {
        document.querySelector("#pMensaje").innerHTML = "No es múltiplo de 7 y 3 simultáneamente"
    }
}