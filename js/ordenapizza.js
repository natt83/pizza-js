import PromptSync from "prompt-sync";
import pizzas from "./pizzas";

function ordenar() {
    var seleccion = document.querySelector('input[name="pizza"]:checked');

    if (seleccion) {
        var pizzaSeleccionada = seleccion.value;
        alert("Has ordenado la " + pizzaSeleccionada);
    } else {
        alert("Por favor selecciona una pizza antes de ordenar.");
    }
}