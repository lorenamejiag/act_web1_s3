let a = 0;
let b = 1;
let contadorFib = 1;

console.log(a);
console.log(b);

while (contadorFib <= 13) {
  let siguiente = a + b;
  console.log(siguiente);
  a = b;
  b = siguiente;
  contadorFib++;
}
