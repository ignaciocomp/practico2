let ingresos;
let precioCasa;
let pago1;
let restante;
let mensuales;
let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", calcular);
function calcular() {
    ingresos = Number(document.querySelector("#ingresos").value);
    precioCasa = Number(document.querySelector("#precioCasa").value);

    if (ingresos < 20000) {
        pago1 = (precioCasa * 15) / 100;
        restante = (precioCasa - pago1);
        mensuales = (restante / (7 * 12));
        document.querySelector("#pResultado").innerHTML = "primer pago de " + pago1.toFixed(2) + " y por pago parcial " + mensuales.toFixed(2);
    } else if (ingresos >= 20000) {
        pago1 = (precioCasa * 30) / 100;
        restante = (precioCasa - pago1);
        mensuales = (restante / 12);
        document.querySelector("#pResultado").innerHTML = "primer pago de " + pago1.toFixed(2) + " y por pago parcial " + mensuales.toFixed(2);
    }
}