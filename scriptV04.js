function solicitaDolarOficialBNVendedor() {
  const dolarOficialBNVendedor = prompt(
    "Hola! 💵 Este es un calculador del valor de los distintos precios del Dólar.\nAntes de continuar, por favor ingresa el valor del 'Dólar Oficial Banco Nación Vendedor' 🏦.\nPuedes consultarlo en: https://www.bna.com.ar/Personas"
  );
  return parseFloat(dolarOficialBNVendedor);
}

function calculaDolarSolidario(dolarOficialBNVendedor) {
  return dolarOficialBNVendedor * 1.65;
}

function calculaDolarNetflix(dolarOficialBNVendedor) {
  return dolarOficialBNVendedor * 1.75;
}

function calculaDolarQuatar(dolarOficialBNVendedor) {
  return dolarOficialBNVendedor * 2;
}

function mostrarResultado(resultado, tipoDolar) {
  alert(
    `😉 El resultado de tu consulta para el Dólar ${tipoDolar} es : $${resultado
      .toFixed(2)
      .replace(".", ",")}`
  );
}

function cotizadorDeDolares() {
  const dolarOficialBNVendedor = solicitaDolarOficialBNVendedor();

  if (isNaN(dolarOficialBNVendedor)) {
    alert(
      " 😒 Valor de dolar no válido. Por favor recarga la página para realizar otra consulta."
    );
    return;
  }

  const opcion = parseInt(
    prompt(
      "Selecciona qué tipo de Dólar quieres calcular:\n1 🥰 Dólar Solidario\n2 💳 Dólar Tarjeta (compras con tarjeta hasta los U$D300)\n3 ✈ Dólar Qatar (compras con tarjeta superando los U$D300)\n4 👋 Salir de la aplicación"
    )
  );

  switch (opcion) {
    case 1:
      mostrarResultado(
        calculaDolarSolidario(dolarOficialBNVendedor),
        "Solidario 🥰"
      );
      break;
    case 2:
      mostrarResultado(
        calculaDolarNetflix(dolarOficialBNVendedor),
        "Tarjeta 💳"
      );
      break;
    case 3:
      mostrarResultado(calculaDolarQuatar(dolarOficialBNVendedor), "Qatar ✈");
      break;
    case 4:
      alert("👋 Gracias por utilizar el calculador del Dólar!");
      break;
    default:
      alert("🥴 Opción inválida, por favor seleccione una opción válida.");
      cotizadorDeDolares();
      break;
  }
}

cotizadorDeDolares();
