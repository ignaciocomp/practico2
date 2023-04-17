let edad;
let plus

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = Number(document.querySelector("#txtEdad").value);
    plus = document.querySelector("#operacion").value
    
    if (plus === "SI"){edad = edad * 2}

    if(edad < 30000 && edad >= 15000){
        document.querySelector("#pMensaje").innerHTML = "América del Sur (destino cercano)"
    } else if (edad >= 30000 && edad < 60000){
        document.querySelector("#pMensaje").innerHTML = "América del Norte (destino intermedio)"
    } else if (edad >= 60000){
        document.querySelector("#pMensaje").innerHTML = "Europa (destino lejano)"
    } else {
        document.querySelector("#pMensaje").innerHTML = "Millas insuficientes"
    }
}

