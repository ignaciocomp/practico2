let azucar = 0;
let harina = 0;
let aceite = 0;
let agua = 0;
let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", CalculaRecetas);
function CalculaRecetas() {
    aceite = Number(document.querySelector("#aceite").value);
    agua = Number(document.querySelector("#agua").value);
    azucar = Number(document.querySelector("#azucar").value);
    harina = Number(document.querySelector("#harina").value)/100;
    
    if (azucar < harina && azucar < aceite && azucar < agua) {
        document.querySelector("#pResultado").innerHTML = azucar + " Recetas disponibles";
    } else if (harina < aceite && harina < agua) {
        
        document.querySelector("#pResultado").innerHTML = harina + " Recetas disponibles";
    } else if (aceite < agua) {
        
        document.querySelector("#pResultado").innerHTML = aceite + " Recetas disponibles";
    } else {
        
        document.querySelector("#pResultado").innerHTML = agua + " Recetas disponibles";
    }
    }
