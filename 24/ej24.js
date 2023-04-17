let empleados = 0;
let masBajo = 0;
let ingresado = 0;
let sueldosPagar = 0;
let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", cargarSueldos);
function cargarSueldos() {
    ingresado = Number(document.querySelector("#sueldos").value);
    if (ingresado) {
        sueldosPagar += ingresado;
        empleados++;
    } if (ingresado < masBajo || masBajo === 0) {
        masBajo = ingresado;
}
    document.querySelector("#pResultado").innerHTML = `Sueldo a pagar: ${sueldosPagar}<br>
Cobran este mes: ${empleados}<br>
Sueldo mas bajo: ${masBajo}<br>
`
}