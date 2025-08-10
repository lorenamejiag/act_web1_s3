let contraseña = "";
let intentos = 0;

while (contraseña !== "admin123") {
  contraseña = prompt("Ingresa la contraseña:");
  if (contraseña !== "admin123") {
    console.log("Contraseña incorrecta");
    intentos++;
  }
}

console.log("Acceso concedido");
console.log("Intentos fallidos:", intentos);
