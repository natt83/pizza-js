
import PromptSync from "prompt-sync";

let pizza=[];
escogerPizza();
 function escogerPizza() {
    const prompt= PromptSync();
    const pizzaSeleccionada=prompt("¿Que pizza desea?:");

    if (pizzaSeleccionada == 1) {
       console.log(pizzaSeleccionada);
         pizza = {
            masa: "fina",
            salsa: "Tomate",
            ingredientes: ["Pepperoni", "Champiñones", "Queso"],
            costo: 12
        };
        //return pizza
    } else if (pizzaSeleccionada == 2) {
        console.log(pizzaSeleccionada);
        pizza = {
            masa: "Gruesa",
            salsa: "Pesto",
            ingredientes: ["Pollo", "Tomate Seco", "Queso de Cabra"],
            costo: 14
        };
        //return pizza
    } else {
        alert("Opción no válida");
        return;
    }

 }
    console.log("Tu pizza tiene masa " + pizza.masa + " y salsa de " + pizza.salsa + ".");
    console.log("Ingredientes:");
    for (let i = 0; i < pizza.ingredientes.length; i++) {
        console.log("- " + pizza.ingredientes[i]);
    }
    
    console.log("Costo total: $" + pizza.costo);
    