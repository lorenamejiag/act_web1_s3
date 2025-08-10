const matriz = [];
const filas = 5;
const columnas = 5;
for(let i = 0; i < filas; i++){
  matriz[i] = [];
  for(let j = 0; j < columnas; j++){
    matriz[i][j] = i + j;
  }

}
console.log("matriz formateada 5x5"); 
for (let i = 0; i < filas; i++){
  console.log(matriz[i].join("\t"));
}
