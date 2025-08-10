let secreto = Math.floor(Math.random() * 50) + 1;
let intento;
let intentosRestantes = 7;

while (intentosRestantes > 0) {
  intento = Number(prompt(`Adivina el número (1-50), intentos restantes: ${intentosRestantes}`));
  
  if (intento === secreto) {
    console.log("¡Adivinaste!");
    break;
  } else if (Math.abs(intento - secreto) <= 3) {
    console.log("Cerca...");
  } else if (intento > secreto) {
    console.log("Muy alto");
  } else {
    console.log("Muy bajo");
  }
  
  intentosRestantes--;
}

if (intentosRestantes === 0) {
  console.log("Perdiste. El número era:", secreto);
}
