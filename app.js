const masa="masa";
const salsa="salsa de tomate";
const cebolla="cebolleta";
let carne="pollo";
let queso="brie";
let mermelada="arandanos";
let frutosSecos="nueces";
const aceite="aceite de oliva";
let temperatura="220";
let horneado="25";
function app() {
    comprarmasa()
    picar()
    ingredientes()
    horneado()
}

app()

function comprarmasa () {
    console.log("Paso 1: Comprar " + masa)
}

function picar(){
    console.log("Paso 2: picar " + cebolla)
    console.log("Paso 3: picar " + carne)
}
   
 console.log("Paso 1:extender masa de pizza");
    console.log("Paso 2: Agregar la " + salsa);
    console.log("Paso 3: Esparcir el " + queso)
    console.log("Paso 4: Agregar los ingredientes");
    let ingredientes =("pollo","brie","arandanos")
   ingredientes.push("pollo","brie","arandanos","nueces","aceite de oliva",)
   console.log("paso 5:hornear" + horneado )
   console.log("temperatura" + temperatura)

   console.log("¡¡la pizza esta lista!!")