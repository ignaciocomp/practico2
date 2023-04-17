let nota;
let aprobados = 0;
let reprobados = 0;
let buenaNota = 0;
let promedio;
let alumnos = 0;
let suma = 0;
let maxima = 0
let minima = 100

let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", notas);

function notas() {
    nota = Number(document.querySelector("#notas").value);

    if (nota >= 0 && nota <= 100) {
    
if (nota >= 70) {
            aprobados++;
            if (nota > 90) {
                buenaNota++;
            }
        } else {
            reprobados++;
        }
        alumnos++;
        suma = suma + nota;
        promedio = suma / alumnos;

        if (nota > maxima) {
            maxima = nota;
        }
        if (nota < minima) {
            minima = nota;
        }

        document.querySelector("#pResultado").innerHTML =
            `Salvaron: ${aprobados}<br>
            Muy buena nota: ${buenaNota}<br>
            Perdieron: ${reprobados}<br>
            Promedio: ${promedio.toFixed(2)}<br>
            Nota máxima: ${maxima}<br>
            Nota mínima: ${minima}<br>
            `
    }

}
