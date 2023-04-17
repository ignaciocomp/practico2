let stockInicial;
let stockRestante;
let cantidadCompras = 0;
let nombreUsuarioCompra;
let cantidadCamarasCompra;
let cantidadCompraMasCamaras = 0;
let nombreCompraMasCamaras;
document.querySelector("#btnComprar").addEventListener("click", comprarCamaras);
document.querySelector("#btnCargarStock").addEventListener("click", cargarStockInicial);
document.querySelector("#btnComprar").setAttribute("disabled", "disabled");
document.querySelector("#txtCantidadCamaras").setAttribute("disabled", "disabled");
document.querySelector("#txtNombre").setAttribute("disabled", "disabled");
function cargarStockInicial() {
    stockInicial = Number(document.querySelector("#txtStockInicial").value);
    stockRestante = stockInicial;
    document.querySelector("#btnComprar").removeAttribute("disabled");
    document.querySelector("#txtCantidadCamaras").removeAttribute("disabled");
    document.querySelector("#txtNombre").removeAttribute("disabled");
    document.querySelector("#txtStockInicial").setAttribute("disabled", "disabled");
    document.querySelector("#btnCargarStock").setAttribute("disabled", "disabled");
}
function comprarCamaras() {
    cantidadCamarasCompra = Number(document.querySelector("#txtCantidadCamaras").value);
    if (cantidadCamarasCompra <= stockRestante) {
        cantidadCompras++;
        nombreUsuarioCompra = document.querySelector("#txtNombre").value;
        stockRestante -= cantidadCamarasCompra;
        if (cantidadCamarasCompra > cantidadCompraMasCamaras) {
            cantidadCompraMasCamaras = cantidadCamarasCompra;
            nombreCompraMasCamaras = nombreUsuarioCompra;
        }
        if (stockRestante === 0) {
            document.querySelector("#btnComprar").setAttribute("disabled", "disabled");
            document.querySelector("#txtNombre").setAttribute("disabled", "disabled");
            document.querySelector("#txtCantidadCamaras").setAttribute("disabled", "disabled");
        }
        document.querySelector("#pResultado").innerHTML = `Cantidad de compras: ${cantidadCompras}<br>
        Stock restante: ${stockRestante}<br>
        Cantidad máxima: ${cantidadCompraMasCamaras}<br>
        Nombre compra máxima: ${nombreCompraMasCamaras}<br>`
    } else {
        document.querySelector("#pResultado").innerHTML = "No hay cámaras suficientes.";
    }
}