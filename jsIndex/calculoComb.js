function mostrarResultado(){
    let kilometros = document.getElementById("kilometraje").value;
    let consumo = document.getElementById("consumo").value;
    let combustible = document.getElementById("combustible").value;
    let resultado = document.getElementById("resultado");
    let resultado2 = document.getElementById("resultado2");
    let resultado3 = document.getElementById("resultado3");
    let resultado4 = document.getElementById("resultado4");
    function calculos(){
        var precio
        switch (combustible) {
          case "normal":
            combustible == "normal";
            precio = (kilometros * (162 / consumo));
            resultado.innerHTML = "Gastarías $" + parseFloat(precio).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros.")
            resultado2.innerHTML = "Tu consumo sería de: " + parseFloat(litrosCombustible = kilometros / consumo).toFixed(2) + (" litros de nafta.");
            resultado3.innerHTML = " A razón de " + (consumo) + (" kilómetros por cada litro.");
            resultado4.innerHTML = "Si tu auto fuese eléctrico, gastarias solo $ " + (kilometros * (52 / consumo)).toFixed(2) + "! "
            break;
          case "premium":
            combustible == "premium";
            precio = parseFloat(kilometros * (199 / consumo));
            resultado.innerHTML = "Gastarías $" + parseFloat(precio).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros.")
            resultado2.innerHTML = "Tu consumo sería de: " + parseFloat(litrosCombustible = kilometros / consumo).toFixed(2) + (" litros de nafta.");
            resultado3.innerHTML = " A razón de " + (consumo) + (" kilómetros por cada litro.");
            resultado4.innerHTML = "Si tu auto fuese eléctrico, gastarias solo $ " + (kilometros * (52 / consumo)).toFixed(2) + "! "
            break;
          case "gnc":
            combustible == "gnc";
            precio = (kilometros * (82 / consumo));
            resultado.innerHTML = "Gastarías $" + parseFloat(precio).toFixed(2) + (" en recorrer ") + (kilometros) + (" kilómetros.")
            resultado2.innerHTML = "Tu consumo sería de: " + parseFloat(litrosCombustible = kilometros / consumo).toFixed(2) + (" litros de nafta.");
            resultado3.innerHTML = " A razón de " + (consumo) + (" kilómetros por cada cm3.");
            resultado4.innerHTML = "Si tu auto fuese eléctrico, gastarias solo $ " + (kilometros * (52 / consumo)).toFixed(2) + "! "
            break;
        }
      }
      calculos();
}

mostrarResultado()

let calcular = document.getElementById("calcular");
calcular.addEventListener("click", mostrarResultado);