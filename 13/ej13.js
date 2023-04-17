let edad;
let edad1;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;
    edad1 = document.querySelector("#txtEdad1").value;

    if(edad % edad1){
        document.querySelector("#pMensaje").innerHTML = "es múltiplo del primero"
    } else {
        document.querySelector("#pMensaje").innerHTML = "No es múltiplo del primero"
    }
}