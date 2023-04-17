let Equipo1 = 0;
let Equipo2 = 0;

let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", ingresarPuntajes);
function ingresarPuntajes() {
    let puntaje1 = Number(document.querySelector("#txtEquipo1").value);
    let puntaje2 = Number(document.querySelector("#txtEquipo2").value);
    Equipo1 += puntaje1;
    Equipo2 += puntaje2;
    document.querySelector("#pResultado1").innerHTML = `Equipo 1: ${Equipo1}`;
    document.querySelector("#pResultado2").innerHTML = `Equipo 2: ${Equipo2}`;
    if (Equipo1 >= 30 || Equipo2 >= 30) {
        document.querySelector("#pResultado1").innerHTML = `Total Puntaje Final Equipo 1: ${Equipo1}`;
        document.querySelector("#pResultado2").innerHTML = `Total Puntaje Final Equipo 2: ${Equipo2}`;
        document.querySelector("#txtEquipo1").setAttribute("disabled", "disabled");
        document.querySelector("#btnCalcular").setAttribute("disabled", "disabled");
        document.querySelector("#txtEquipo2").setAttribute("disabled", "disabled");
    }
}































/*let puntajeEquipo1
let puntajeEquipo1Total
let puntajeEquipo2
let puntajeTotal
let totalFinal

let btnIngresarPuntaje1 = document.querySelector("#btnIngresarPuntaje1");
btnIngresarPuntaje1.addEventListener("click", cargar);

let btnIngresarPuntaje2 = document.querySelector("#btnIngresarPuntaje2");
btnIngresarPuntaje2.addEventListener("click", cargar2);


function cargar(){
puntajeEquipo1 = Number(document.querySelector("#txtEquipo1").value);

if (puntajeEquipo1){
    puntajeEquipo1Total = puntajeEquipo1
}else if(puntajeEquipo1 >=30)



}




function cargar2(){
puntajeEquipo2 = Number(document.querySelector("#txtEquipo2").value);
}*/