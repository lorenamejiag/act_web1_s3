let nombres = ["Luisa","Paula", "Monica", "Fernanda", "Elizabeth"];
let buscado = "Fernanda";
let index = 0;
let encontrado = false;

while (index < nombres.length) {
  if (nombres[index] === buscado) {
    console.log(`${buscado} encontrado en posición ${index}`);
    encontrado = true;
    break;
  }
  index++;
}

if (!encontrado) {
  console.log("Nombre no encontrado; NO EXISTE.");
}
