let suma = 0
let resultado = 0;
let j = 1;
while (j <= 50) {
    if (j % 2 === 0) {
        suma += j;
        resultado++;
    }
    j++;
}
console.log("cantidad de numeros pares: ", resultado);
console.log("suma de pares: ", suma);
