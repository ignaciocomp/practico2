let numeroIngresado = 0;
let Intentos = 0;
let numerosIngresados = 0;
let distancia = 0;

document.querySelector("#txtNumeros").setAttribute("disabled", "disabled");
document.querySelector("#btnIngresar").setAttribute("disabled", "disabled");
let btnIngresarNumero = document.querySelector("#btnIngresarNumero");
btnIngresarNumero.addEventListener("click", IngresarNumero)
let btnIngresar = document.querySelector("#btnIngresar");
btnIngresar.addEventListener("click", IngresarNumeros);
function IngresarNumero() {
    numeroIngresado = Number(document.querySelector("#txtNumero").value);
    document.querySelector("#txtNumero").value = "";

    if (numeroIngresado <= 0 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        document.querySelector("#pResultado2").innerHTML = "Ingrese un numero entre el 1 y el 100"
    } else {

        document.querySelector("#txtNumero").setAttribute("disabled", "disabled");
        document.querySelector("#btnIngresarNumero").setAttribute("disabled", "disabled");
        document.querySelector("#txtNumeros").removeAttribute("disabled");
        document.querySelector("#btnIngresar").removeAttribute("disabled");
        document.querySelector("#pResultado2").innerHTML = ""
    }
}

function IngresarNumeros() {
    numerosIngresados = Number(document.querySelector("#txtNumeros").value);
    Intentos++
    if (numerosIngresados === numeroIngresado) {
        document.querySelector("#pResultado").innerHTML =
            `Has ganado! <br>
                Intentos utilizados = ${Intentos}`
        document.querySelector("#txtNumeros").setAttribute("disabled", "disabled");
        document.querySelector("#btnIngresar").setAttribute("disabled", "disabled");

    } else {
        distancia = Math.abs(numerosIngresados - numeroIngresado);
        let mensaje = "";

        if (distancia > 15) {
            mensaje = "Estas lejos";
        } else if (distancia >= 10 && distancia <= 15) {
            mensaje = "Te estas acercando";
        } else if (distancia >= 5 && distancia <= 9) {
            mensaje = "Cada vez mas cerca";
        } else if (distancia >= 1 && distancia <= 4)
            mensaje = "Muy pero muy cerca"

        document.querySelector("#pResultado").innerHTML = mensaje;
    }

}