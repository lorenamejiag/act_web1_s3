function factorialWhile(n) {
  
  if (!Number.isInteger(n) || n < 0) {
    console.log("Entrada inválida: n debe ser un entero no negativo.");
    return null;
  }

  if (n === 0) {
    console.log("0! = 1");
    return 1;
  }

  console.log(`${n}! paso a paso:`);

  let paso = 1;
  let resultado = 1;

  // realiza las multiplicaciones, imprime cada paso
  while (paso <= n) {
    const antes = resultado;            // valor antes de multiplicar en este paso
    resultado = antes * paso;           // multiplicación del paso actual
    console.log(`Paso ${paso}: ${antes} x ${paso} = ${resultado}`);
    paso++;
  }

  console.log(`Resultado final: ${n} = ${resultado}`);
  return resultado;
}

factorialWhile(5);   // 5! = 120 (muestra paso a paso)

