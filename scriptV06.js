let dolarOficialBNVendedor;

function solicitaDolarOficialBNVendedor() {
  dolarOficialBNVendedor = prompt(
    "Hola! 💵 Este es un calculador del valor de los distintos precios del Dólar.\nAntes de continuar, por favor ingresa el valor del 'Dólar Oficial Banco Nación Vendedor' 🏦.\nPuedes consultarlo en: https://www.bna.com.ar/Personas"
  );

  return dolarOficialBNVendedor;
}

function muestraPanelDeOpciones() {
  const opcion = parseInt(
    prompt(
      `*** DOLAR OFICIAL INGRESADO: $${parseFloat(dolarOficialBNVendedor)
        .toFixed(2)
        .replace(
          ".",
          ","
        )}\n Selecciona qué tipo de Dólar quieres calcular:\n1 🥰 Dólar Solidario\n2 💳 Dólar Tarjeta (compras con tarjeta hasta los U$D300)\n3 ✈ Dólar Qatar (compras con tarjeta superando los U$D300)\n4 👋 Salir de la aplicació`
    )
  );

  switch (opcion) {
    case 1:
      mostrarResultado(calculaDolarSolidario(), "Solidario 🥰");
      break;
    case 2:
      mostrarResultado(calculaDolarNetflix(), "Tarjeta 💳");
      break;
    case 3:
      mostrarResultado(calculaDolarQuatar(), "Qatar ✈");
      break;
    case 4:
      alert("👋 Gracias por utilizar el calculador del Dólar!");
      break;
    default:
      alert("🥴 Opción inválida, por favor seleccione una opción válida.");
      muestraPanelDeOpciones();
      break;
  }
}

function calculaDolarSolidario() {
  return parseFloat(dolarOficialBNVendedor) * 1.65;
}

function calculaDolarNetflix() {
  return parseFloat(dolarOficialBNVendedor) * 1.75;
}

function calculaDolarQuatar() {
  return parseFloat(dolarOficialBNVendedor) * 2;
}

function mostrarResultado(resultado, tipoDolar) {
  alert(
    `😉 El resultado de tu consulta para el Dólar ${tipoDolar} es : $${resultado
      .toFixed(2)
      .replace(".", ",")}`
  );
}

function cotizadorDeDolares() {
  solicitaDolarOficialBNVendedor();

  if (dolarOficialBNVendedor === null) {
    alert("👋 Adios, calcularemos el valor del dolar en otra ocación.");
    return;
  } else if (isNaN(parseFloat(dolarOficialBNVendedor))) {
    alert(" ⛔ Valor de dolar no válido. Por favor ingresa un número.");
    return cotizadorDeDolares();
  }
  muestraPanelDeOpciones();
  let otraConsulta = confirm("🧐 Quieres realizar otra consulta?");
  if (otraConsulta) {
    cotizadorDeDolares();
    return;
  } else {
    alert("👋 Adios, espero haberte sido útil.");
    return;
  }
}

cotizadorDeDolares();
