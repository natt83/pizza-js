const masa = "masa";
const salsa = "salsa de tomate";
const cebolla = "cebolleta";
let carne = "pollo";
let queso = "brie";
let mermelada = "arandanos";
let frutosSecos = "nueces";
const aceite = "aceite de oliva";
let temperatura = 220;
let tiempoHorneado =25;

function app() {
  comprarmasa();
  picar();
  ingredientes();
  horneado();
}

app();

function comprarmasa() {
  console.log("Paso 1: Comprar " + masa);
}

function picar() {
  console.log("Paso 2: picar " + cebolla);
  console.log("Paso 3: picar " + carne);
}
function ingredientes() {
  console.log(
    "Paso 4: Agregar los ingredientes:" +
      carne +
      " " +
      queso +
      " " +
      mermelada +
      " " +
      frutosSecos +
      " " +
      aceite
  );
}
function horneado() {
  console.log("paso 5:hornear" + tiempoHorneado);
}

//ingredientes.push("pollo","brie","arandanos","nueces","aceite de oliva",)
//console.log("paso 5:hornear" + horneado )
console.log("¡¡la pizza esta lista!!");
