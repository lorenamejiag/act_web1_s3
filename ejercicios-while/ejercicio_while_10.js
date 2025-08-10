let calificacion;
let sumaNotas = 0;
let contadorNotas = 0;
let maxNota = -Infinity;
let minNota = Infinity;

calificacion = Number(prompt("Ingresa una calificación (-1 para terminar):"));

while (calificacion !== -1) {
  sumaNotas += calificacion;
  contadorNotas++;
  
  if (calificacion > maxNota) maxNota = calificacion;
  if (calificacion < minNota) minNota = calificacion;
  
  calificacion = Number(prompt("Ingresa otra calificación (-1 para terminar):"));
}

if (contadorNotas > 0) {
  console.log("Promedio:", sumaNotas / contadorNotas);
  console.log("Nota más alta:", maxNota);
  console.log("Nota más baja:", minNota);
} else {
  console.log("No se ingresaron calificaciones");
}
