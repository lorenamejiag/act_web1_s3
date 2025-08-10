let termino = 2;
let sumaTotal = 0;

for (let k = 1; k <= 10; k++) {
  console.log(`Termino ${k}: ${termino}`);
  sumaTotal += termino;
  termino *= 2;
}

console.log("Suma total:", sumaTotal);
