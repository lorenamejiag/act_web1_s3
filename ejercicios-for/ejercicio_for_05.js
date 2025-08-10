const original = "Buenos dias";
let invertida = "";

for (let i = original.length - 1; i >= 0; i--) {
  invertida += original[i];
}

console.log("Original:", original);
console.log("Invertida:", invertida);
