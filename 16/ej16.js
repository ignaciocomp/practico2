document.querySelector("#btnVerificar").addEventListener("click", calcular)

function calcular() {
    let a = Number(document.querySelector("#a").value)
    let b = Number(document.querySelector("#b").value)
    let c = Number(document.querySelector("#c").value)
    if (a > b && a > c) {
    document.querySelector("#pResultado").innerHTML = "a es el mayor de los 3";
    } else { document.querySelector("#pResultado").innerHTML = "a NO es el mayor de los 3"}
}