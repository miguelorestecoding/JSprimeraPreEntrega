// function solicitaDolarOficialBNVendedor() {
//     let dolarOficialBNVendedor = prompt("Ingresa el Valor del Dolar Oficial, Banco Nación, Vendedor. Puedes consultarlo en: https://www.bna.com.ar/Personas ")
//     return dolarOficialBNVendedor
// }

// function calculaDolarSolidario(dolarOficialBNVendedor) {
//     let resultado = dolarOficialBNVendedor + (dolarOficialVendedor * 0.30) + (dolarOficialVendedor * 0.35)
//     return resultado
// }
//  function mostrarResultado(resultado) {
//     alert("El valor del Dolar Solidario es: " + resultado)
//  }

//  calculaDolarSolidario(solicitaDolarOficialBNVendedor())
//  mostrarResultado()

function solicitaDolarOficialBNVendedor() {
  let dolarOficialBNVendedor = prompt(
    " Hola! Este es un calculador del valor de los distintos precios del Dolar.\n Antes que sigamos por favor ingresa el Valor del Dolar Oficial, Banco Nación, Vendedor.\n Puedes consultarlo en:\n https://www.bna.com.ar/Personas "
  );
  return parseFloat(dolarOficialBNVendedor);
}

function cotizadorDolares() {
  let opcion = parseInt(
    prompt(
      "Selecciona que tipo de Dolar quieres calcular. Ingresa:\n 1 🥰 para Dolar Solidario.\n 2 💳 para Dolar Tarjeta (compras con tarjeta hasta los U$D300).\n 3 ✈ Dolar Quatar (compras con tarjeta superando los U$D300).\n 4 👋 para Salir de la Aplicación."
    )
  );
  return opcion;
}

function calculaDolarSolidario(dolarOficialBNVendedor) {
  let resultadoDolarSolidario =
    dolarOficialBNVendedor +
    (dolarOficialBNVendedor * 30) / 100 +
    (dolarOficialBNVendedor * 35) / 100;
  return resultadoDolarSolidario;
}

function calculaDolarNetflix(dolarOficialBNVendedor) {
  let resultadoDolarNetflix =
    dolarOficialBNVendedor +
    (dolarOficialBNVendedor * 30) / 100 +
    (dolarOficialBNVendedor * 45) / 100;
  return resultadoDolarNetflix;
}

function calculaDolarQuatar(dolarOficialBNVendedor) {
  let resultadoDolarQuatar =
    dolarOficialBNVendedor +
    (dolarOficialBNVendedor * 30) / 100 +
    (dolarOficialBNVendedor * 45) / 100 +
    (dolarOficialBNVendedor * 25) / 100;
  return resultadoDolarQuatar;
}

function mostrarResultado(resultado) {
  alert(" El resultado de tu consulta es: " + resultado);
}

// let dolarOficialBNVendedor = solicitaDolarOficialBNVendedor();
// let opcion = cotizadorDolares();

// while (opcion < 4 && opcion > 0) {
//   switch (opcion) {
//     case 1:
//       let resultadoDolarSolidario = calculaDolarSolidario(
//         dolarOficialBNVendedor
//       );
//       mostrarResultado(resultadoDolarSolidario);
//       break;
//     case 2:
//       let rresultadoDolarNetflix = calculaDolarNetflix(dolarOficialBNVendedor);
//       mostrarResultado(resultadoDolarNetflix);
//       break;
//     case 3:
//       let resultadoDolarQuatar = calculaDolarQuatar(dolarOficialBNVendedor);
//       mostrarResultado(resultadoDolarQuatar);
//       break;
//     case 4:
//       alert("Gracias por utilizar el calculador del Dolar!");
//       break;
//   }
// }

// if (opcion == NaN) {
//   alert("Es necesario que ingreses un número!");
//   cotizadorDolares();
// } else alert("Gracias por utilizar el cotizador de Dolares.");

// let dolarOficialBNVendedor = solicitaDolarOficialBNVendedor();
// let resultadoDolarSolidario = calculaDolarSolidario(dolarOficialBNVendedor);
// let resultadoDolarNetflix = calculaDolarNetflix(dolarOficialBNVendedor);
// let resultadoDolarQuatar = calculaDolarQuatar(dolarOficialBNVendedor);
// mostrarResultado(
//   dolarOficialBNVendedor,
//   resultadoDolarSolidario,
//   resultadoDolarNetflix,
//   resultadoDolarQuatar
// );

// function mostrarResultado(
//   dolarOficialBNVendedor,
//   resultadoDolarSolidario,
//   resultadoDolarNetflix,
//   resultadoDolarQuatar
// ) {
//   alert(
//     " Los diferentes valores del  son:\n\n ✅-👮‍♂️ $" +
//       dolarOficialBNVendedor.toLocaleString("es-ES", {
//         minimumFractionDigits: 2,
//       }) +
//       " Dolar Oficial Banco Nación Venedor.\n ✅-🥰 $" +
//       resultadoDolarSolidario.toLocaleString("es-ES", {
//         minimumFractionDigits: 2,
//       }) +
//       " Dolar Solidario. \n ✅-💳 $" +
//       resultadoDolarNetflix.toLocaleString("es-ES", {
//         minimumFractionDigits: 2,
//       }) +
//       " Dolar Tarjeta ó Netflix.\n ✅-✈ $" +
//       resultadoDolarQuatar.toLocaleString("es-ES", {
//         minimumFractionDigits: 2,
//       }) +
//       " Dolar Quatar."
//   );
// }
