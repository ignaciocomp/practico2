let edad;
let edad1;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;
    edad1 = document.querySelector("#txtEdad1").value;

    if(edad > edad1){
        document.querySelector("#pMensaje").innerHTML = edad1 - edad
    }  else {
        document.querySelector("#pMensaje").innerHTML = edad - edad1
    } 
    }