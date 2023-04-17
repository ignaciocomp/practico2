let numero;
let sumar = 0;
let repeticiones = 0;
let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", ingresarNumero);
function ingresarNumero() {
    repeticiones++;
    let numero = Number(document.querySelector("#Numero1").value);
    document.querySelector("#Numero1").value = "";
    if (numero < 0) {
        numero = numero * -1;
    }
    sumar += numero;
    document.querySelector("#pResultado").innerHTML = sumar;
    if (repeticiones === 6) {
    document.querySelector("#btnCalcular").setAttribute("disabled", "disabled");
    document.querySelector("#btnCalcular").setAttribute("value", "Terminar");
    document.querySelector("#Numero1").setAttribute("disabled", "disabled");
    }
}   
