let edad;
let edad1;
let resultado

document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango(){
    edad = Number(document.querySelector("#txtEdad").value);
    edad1 = Number(document.querySelector("#txtEdad1").value);
    operacion = document.querySelector("#operacion").value;

    switch (operacion) {
        case "S":
        resultado = edad + edad1
        break;
        case "R":
        resultado = edad - edad1;
        break;
        case "M":
        resultado = edad * edad1;
        break;
        case "D":
        resultado = edad / edad1;
        break;
        default:
        resultado = "Operación inválida";
    }
    document.querySelector("#pMensaje").innerHTML = resultado
}