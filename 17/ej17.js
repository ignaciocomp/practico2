document.querySelector("#btnVerificar").addEventListener("click", calcular)

function calcular() {
    let a = Number(document.querySelector("#a").value)
    if (a < 0 || a > 10) {
    document.querySelector("#pResultado").innerHTML = "a está fuera de rango";
    } else { document.querySelector("#pResultado").innerHTML = "a está en rago"}
}