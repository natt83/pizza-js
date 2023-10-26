function escogerPizza(pizza) {
    var pizzaSeleccionada;
    
    if (pizza === 1) {
        pizzaSeleccionada = {
            masa: "Delgada",
            salsa: "Tomate",
            ingredientes: ["Pepperoni", "Champiñones", "Queso"],
            costo: 12
        };
    } else if (pizza === 2) {
        pizzaSeleccionada = {
            masa: "Gruesa",
            salsa: "Pesto",
            ingredientes: ["Pollo", "Tomate Seco", "Queso de Cabra"],
            costo: 14
        };
    } else {
        alert("Opción no válida");
        return;
    }

    console.log("Tu pizza tiene masa " + pizzaSeleccionada.masa + " y salsa de " + pizzaSeleccionada.salsa + ".");
    console.log("Ingredientes:");
    for (var i = 0; i < pizzaSeleccionada.ingredientes.length; i++) {
        console.log("- " + pizzaSeleccionada.ingredientes[i]);
    }
    console.log("Costo total: $" + pizzaSeleccionada.costo)};