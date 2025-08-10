function calcularPotencia(base, exponente) {
  let resultado = 1;

  console.log(`Calculando ${base}^${exponente} paso a paso:`);

  if (exponente === 0) {
    console.log(`${base}^0 = 1 (cualquier número elevado a 0 es 1)`);
    return 1;
  }

  const esNegativo = exponente < 0;
  const repeticiones = Math.abs(exponente);

  for (let i = 1; i <= repeticiones; i++) {
    const antes = resultado;
    resultado *= base;
    console.log(`  Paso ${i}: ${antes} * ${base} = ${resultado}`);
  }

  if (esNegativo) {
    console.log(`Exponente negativo, invertimos el resultado: 1 / ${resultado}`);
    resultado = 1 / resultado;
  }

  console.log(`Resultado final: ${base}^${exponente} = ${resultado}`);
  return resultado;
}

calcularPotencia(3, 4);   // 3^4
