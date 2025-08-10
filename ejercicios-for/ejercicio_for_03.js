let numeros = [];
for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Numeros aleatorios:", numeros);

let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
  let num = numeros[i];

  if (num > mayor) mayor = num;
  if (num < menor) menor = num;

  suma += num;

  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

let promedio = suma / numeros.length;

console.log("Numero mayor:", mayor);
console.log("Numero menor:", menor);
console.log("Suma total:", suma);
console.log("Promedio:", promedio);
console.log("Cantidad de numeros pares:", pares);
console.log("Cantidad de nuemros impares:", impares);
