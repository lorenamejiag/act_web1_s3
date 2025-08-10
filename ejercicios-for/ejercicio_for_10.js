let texto = "La ruta natural";

let limpio = texto.replace(/\s+/g, "").toLowerCase();
let invertido = "";

for (let i = limpio.length - 1; i >= 0; i--) {
  invertido += limpio[i];
}

console.log("Original:", limpio);
console.log("Invertido:", invertido);

if (limpio === invertido) {
  console.log("Es un palíndromo");
} else {
  console.log("No es un palíndromo");
}
