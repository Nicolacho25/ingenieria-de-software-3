function seleccionarOpcion(opcion) {
    var opciones = document.querySelectorAll(".opcion");
    opciones.forEach(function(opcion) {
      opcion.classList.remove("seleccionada");
    });
    opcion.classList.add("seleccionada");
    document.getElementById("opcion").value = opcion.textContent;
  }

document.getElementById("botonEnviar").addEventListener("click", function() {
    var opcionSeleccionada = document.getElementById("opcion").value;
    switch (opcionSeleccionada) {
      case "DIA":
        window.location.href = "DIARIO/diario.html";
        break;
      case "SEMANA":
        window.location.href = "SEMANAL/semanal.html";
        break;
      default:
        break;
    }
  });
  