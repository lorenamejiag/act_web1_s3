const frase = "¡Bienvenidos a Colombia!";
const conteo = { a:0, e:0, i:0, o:0, u:0 };
const s = frase.toLowerCase();

for (let i = 0; i < s.length; i++) {
  const c = s[i];
  if (c === 'a') conteo.a++;
  else if (c === 'e') conteo.e++;
  else if (c === 'i') conteo.i++;
  else if (c === 'o') conteo.o++;
  else if (c === 'u') conteo.u++;
}

console.log(frase);
console.log("Conteo de vocales:", conteo);
