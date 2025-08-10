const primos = [];

for (let num = 2; num <= 100; num++) {
  let esPrimo = true;

  for (let div = 2; div * div <= num; div++) {
    if (num % div === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) primos.push(num);
}

console.log("Primos entre 1 y 100:", primos);
console.log("Cantidad de primos encontrados:", primos.length);
