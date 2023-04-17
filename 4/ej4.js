let edad;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;

    if(edad < 0){
        edad = edad * -1;
        document.querySelector("#pMensaje").innerHTML = edad
    } 
}