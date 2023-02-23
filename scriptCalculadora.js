function suma(numeroUno, numeroDos) {
  let resultado = numeroUno + numeroDos;
  return resultado;
}
function resta(numeroUno, numeroDos) {
  let resultado = numeroUno - numeroDos;
  return resultado;
}
function multiplicacion(numeroUno, numeroDos) {
  let resultado = numeroUno * numeroDos;
  return resultado;
}
function division(numeroUno, numeroDos) {
  let resultado = numeroUno / numeroDos;
  return resultado;
}
function mostrarResultado(resultado) {
  alert("El resultado es: " + resultado);
}

function calculadora() {
  let opcion = parseInt(
    prompt(
      "Bienvenido, seleccione la opción \n 1.-Suma\n 2.- Resta\n 3.-Multiplicación\n 4.- División "
    )
  );
  const NUMERO_UNO = parseFloat(prompt("Ingresar el primer número"));
  const NUMERO_DOS = parseFloat(prompt("Ingresar el segundo número"));

  switch (opcion) {
    case 1:
      let resultadoSuma = suma(NUMERO_UNO, NUMERO_DOS);
      mostrarResultado(resultadoSuma);
      break;
    case 2:
      let resultadoResta = resta(NUMERO_UNO, NUMERO_DOS);
      mostrarResultado(resultadoResta);
      break;
    case 3:
      let resultadoMultiplicacion = multiplicacion(NUMERO_UNO, NUMERO_DOS);
      mostrarResultado(resultadoMultiplicacion);
      break;
    case 4:
      let resultadoDivision = division(NUMERO_UNO, NUMERO_DOS);
      mostrarResultado(resultadoDivision);
      break;
    default:
      alert("Opción incorrecta");
      break;
  }
}

calculadora();