function solicitaDolarOficialBNVendedor() {
  let dolarOficialBNVendedor = prompt(
    " Hola! Este es un calculador del valor de los distintos precios del Dolar.\n Antes que sigamos por favor ingresa el Valor del Dolar Oficial, Banco Nación, Vendedor.\n Puedes consultarlo en:\n https://www.bna.com.ar/Personas "
  );
  return parseFloat(dolarOficialBNVendedor);
}

function calculaDolarSolidario(dolarOficialBNVendedor) {
  let resultado =
    dolarOficialBNVendedor +
    (dolarOficialBNVendedor * 30) / 100 +
    (dolarOficialBNVendedor * 35) / 100;
  return resultado;
}

function calculaDolarNetflix(dolarOficialBNVendedor) {
  let resultado =
    dolarOficialBNVendedor +
    (dolarOficialBNVendedor * 30) / 100 +
    (dolarOficialBNVendedor * 45) / 100;
  return resultado;
}

function calculaDolarQuatar(dolarOficialBNVendedor) {
  let resultado =
    dolarOficialBNVendedor +
    (dolarOficialBNVendedor * 30) / 100 +
    (dolarOficialBNVendedor * 45) / 100 +
    (dolarOficialBNVendedor * 25) / 100;
  return resultado;
}

function mostrarResultado(resultado) {
  alert(" El resultado de tu consulta es: " + resultado);
}

function cotizadorDeDolares() {
  let dolarOficialBNVendedor = solicitaDolarOficialBNVendedor();

  let opcion = parseInt(
    prompt(
      "Selecciona que tipo de Dolar quieres calcular. Ingresa:\n 1 🥰 para Dolar Solidario.\n 2 💳 para Dolar Tarjeta (compras con tarjeta hasta los U$D300).\n 3 ✈ Dolar Quatar (compras con tarjeta superando los U$D300).\n 4 👋 para Salir de la Aplicación."
    )
  );

  switch (opcion) {
    case 1:
      let resultadoDolarSolidario = calculaDolarSolidario(
        dolarOficialBNVendedor
      );
      mostrarResultado(resultadoDolarSolidario);
      break;
    case 2:
      let resultadoDolarNetflix = calculaDolarNetflix(dolarOficialBNVendedor);
      mostrarResultado(resultadoDolarNetflix);
      break;
    case 3:
      let resultadoDolarQuatar = calculaDolarQuatar(dolarOficialBNVendedor);
      mostrarResultado(resultadoDolarQuatar);
      break;
    case 4:
      alert("Gracias por utilizar el calculador del Dolar!");
      break;
  }
}

cotizadorDeDolares();
