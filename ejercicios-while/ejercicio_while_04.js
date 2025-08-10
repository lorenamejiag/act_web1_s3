let numero;
let cantidad = 0;

while (numero <= 95 || numero === undefined) {
  numero = Math.floor(Math.random() * 100) + 1;
  console.log("Numero generado:", numero);
  cantidad++;
}

console.log("Cantidad de numeros generados:", cantidad);
