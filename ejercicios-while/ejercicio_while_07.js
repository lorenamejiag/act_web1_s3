let numeros = 4576426968;
let digitos = 0;
while (numeros > 0) {
    numeros = Math.floor(numeros/10);
    digitos++
}
console.log("tiene", digitos , "digitos");