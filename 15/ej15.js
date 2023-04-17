let edad;
document.querySelector("#btnVerificar").addEventListener("click", verificarRango);

function verificarRango() {
  edad = (document.querySelector("#txtEdad").value);
  edadmay = edad.toUpperCase()


  switch (edadmay) {
    case "A":
      nombre = "Canelones";
      break;
    case "B":
      nombre = "Maldonado";
      break;
    case "C":
      nombre = "Rocha";
      break;
    case "D":
      nombre = "Treinta y Tres";
      break;
    case "E":
      nombre = "Cerro Largo";
      break;
    case "F":
      nombre = "Rivera";
      break;
    case "G":
      nombre = "Artigas";
      break;
    case "H":
      nombre = "Salto";
      break;
    case "I":
      nombre = "Paysandú";
      break;
    case "J":
      nombre = "Rio Negro";
      break;
    case "K":
      nombre = "Soriano";
      break;
    case "L":
      nombre = "Colonia";
      break;
    case "M":
      nombre = "San José";
      break;
    case "N":
      nombre = "Flores";
      break;
    case "O":
      nombre = "Florida";
      break;
    case "P":
      nombre = "Lavalleja";
      break;
    case "Q":
      nombre = "Durazno";
      break;
    case "R":
      nombre = "Tacuarembó";
      break;
    case "S":
      nombre = "Montevideo";
      break;
    default:
      nombre = "Código de departamento no válido";
  }
  document.querySelector("#pMensaje").innerHTML = nombre;
}

