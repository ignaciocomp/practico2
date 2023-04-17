let Valor;
let conTarjeta;
let descuento;
let pagoFinal;
let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", calcular);
function calcular() {
    Valor = Number(document.querySelector("#txtValor").value);
    conTarjeta = document.querySelector("#conTarjeta").value;
    if (Valor < 10000 && conTarjeta === "SI") {
        descuento = (Valor * 4) / 100;
        pagoFinal = Valor - descuento
        document.querySelector("#pResultado").innerHTML = "Pago final = " + pagoFinal;
    } else {
        document.querySelector("#pResultado").innerHTML = "Pago final = " + Valor;
    }
}