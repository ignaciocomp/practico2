let noches = 0;
let nochesRegalo = 0;
let nochesTotal = 0;
let medioPago;
let costoNoches;
let costoTotal;
let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", calcular);

function calcular() {
    noches = Number(document.querySelector("#noches").value);
    medioPago = document.querySelector("#pago").value;
    costoNoches = 40;
    if (noches >= 3 && noches < 7 && (medioPago === "e" || medioPago === "t")) {
        nochesRegalo = 1;
        nochesTotal = noches + nochesRegalo;
        costoTotal = (costoNoches * noches);
        document.querySelector("#pResultado").innerHTML =
            `Tiene ${nochesRegalo} noches de regalo<br>
            En total se va a alojar ${nochesTotal} noches<br>
            El monto total a pagar es de ${costoTotal} pesos<br>`
    } else if (noches >= 7 && medioPago === "t") {
        nochesRegalo = 3;
        nochesTotal = noches + nochesRegalo;
        costoTotal = (costoNoches * noches);
        document.querySelector("#pResultado").innerHTML =
            `${nochesRegalo} noches de regalo<br>
    Se aloja ${nochesTotal} noches<br>
    El monto a pagar es ${costoTotal} pesos<br>
    Abona con tarjeta`


    } else if (noches >= 7 && medioPago === "e") {
        nochesRegalo = 2;
        nochesTotal = noches + nochesRegalo;
        costoTotal = (costoNoches * noches);
        document.querySelector("#pResultado").innerHTML =
            `${nochesRegalo} noches de regalo<br>
    Se aloja ${nochesTotal} noches<br>
    El monto a pagar es ${costoTotal} pesos<br>
    Abona con efectivo`
    } else if (noches < 3) {
        nochesTotal = noches;
        costoTotal = (costoNoches * noches);
        document.querySelector("#pResultado").innerHTML =
            `No hay noches de regalo<br>
    Se aloja ${nochesTotal} noches<br>
    El monto total a pagar es de ${costoTotal} pesos<br>`
    }
}
