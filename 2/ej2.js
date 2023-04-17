let edad;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;
    alert("Has ingresado un valor")

    if(edad > 10){
        document.querySelector("#pMensaje").innerHTML = "Mayor que 10"
        alert("Mayor que 10")
    } else{
        document.querySelector("#pMensaje").innerHTML = ""
    }
}