let edad;

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = document.querySelector("#txtEdad").value;

    if(edad === "a" || edad === "e" || edad === "i" ||edad === "o" ||edad === "u" || edad === "A" || edad === "E" || edad === "I" ||edad === "O" ||edad === "U"){
        document.querySelector("#pMensaje").innerHTML = "VOCAL"
    }  else {
        document.querySelector("#pMensaje").innerHTML = "NO VOCAL"
    } 
    }