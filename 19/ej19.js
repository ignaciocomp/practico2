let multiplosDe5 = 0;
let ambas = 0;
let mayoresDe20 = 0;
let numero;
let ingresos = 0;
let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", calcular);
function calcular() {
    ingresos++;
    let numero = Number(document.querySelector("#txtNumero").value);
    document.querySelector("#txtNumero").value = "";
    if (numero % 5 === 0 && numero > 20) {
    multiplosDe5++;
    mayoresDe20++;
    ambas++;
    } else if (numero > 20) {
    mayoresDe20++;
    } else if (numero % 5 === 0) {
    multiplosDe5++;
    }
    if (ingresos === 5) {
        document.querySelector("#btnCalcular").setAttribute("value", "Finalizado");
        document.querySelector("#btnCalcular").setAttribute("disabled", "disabled");
        document.querySelector("#txtNumero").setAttribute("disabled", "disabled");
    }
    document.querySelector("#pResultado").innerHTML =
        `Multiplos de 5: ${multiplosDe5}<br>
    Mayores que 20: ${mayoresDe20}<br>
    Cumplen ambas condiciones: ${ambas}<br>
    `

}