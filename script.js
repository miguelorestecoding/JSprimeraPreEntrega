let dolarOficialBNVendedor;
let opcion;

function solicitaDolarOficialBNVendedor() {
  dolarOficialBNVendedor = prompt(
    "Hola! 馃挼 Este es un calculador del valor de los distintos precios del D贸lar.\nAntes de continuar, por favor ingresa el valor del 'D贸lar Oficial Banco Naci贸n Vendedor' 馃彟.\nPuedes consultarlo en: https://www.bna.com.ar/Personas"
  );

  return dolarOficialBNVendedor;
}

function calculaDolarSolidario() {
  return parseFloat(dolarOficialBNVendedor) * 1.65;
}

function calculaDolarNetflix() {
  return parseFloat(dolarOficialBNVendedor) * 1.75;
}

function calculaDolarQatar() {
  return parseFloat(dolarOficialBNVendedor) * 2;
}

function muestraPanelDeOpciones() {
  opcion = prompt(
    `*** DOLAR OFICIAL INGRESADO: $${parseFloat(dolarOficialBNVendedor)
      .toFixed(2)
      .replace(
        ".",
        ","
      )}. ***\n\n Selecciona qu茅 tipo de D贸lar quieres calcular:\n1 馃グ D贸lar Solidario\n2 馃挸 D贸lar Tarjeta (compras con tarjeta hasta U$D300)\n3 鉁? D贸lar Qatar (compras con tarjeta superando U$D300)\n4 馃憢 Salir de la aplicaci贸n`
  );

  if (opcion === null) {
    alert(
      "鉀? Has presionado el bot贸n cancelar, entiendo que han finalizado tus consultas.\n馃憢 Adios, vuelve cuando Quieras! "
    );
    return;
  }
  opcion = parseInt(opcion);
  switch (opcion) {
    case 1:
      mostrarResultado(calculaDolarSolidario(), "Solidario 馃グ");
      break;
    case 2:
      mostrarResultado(calculaDolarNetflix(), "Tarjeta 馃挸");
      break;
    case 3:
      mostrarResultado(calculaDolarQatar(), "Qatar 鉁?");
      break;
    case 4:
      alert("馃憢 Gracias por utilizar el calculador del D贸lar!");
      break;
    default:
      alert("馃ゴ Opci贸n inv谩lida, por favor seleccione una opci贸n v谩lida.");
      muestraPanelDeOpciones();
      break;
  }
}

function mostrarResultado(resultado, tipoDolar) {
  alert(
    `馃槈 El resultado de tu consulta para el D贸lar ${tipoDolar} es : $${resultado
      .toFixed(2)
      .replace(".", ",")}`
  );
}

function cotizadorDeDolares() {
  if (dolarOficialBNVendedor === undefined) {
    solicitaDolarOficialBNVendedor();

    if (dolarOficialBNVendedor === null) {
      alert(
        "鉀? Has presionado el bot贸n cancelar, entiendo que no quieres realizar calculos ahora.\nCalcularemos el valor del dolar en otra ocasi贸n 馃!."
      );
      return;
    } else if (isNaN(parseFloat(dolarOficialBNVendedor))) {
      alert(" 鉀? Valor de dolar no v谩lido. Por favor ingresa un n煤mero.");
      dolarOficialBNVendedor = undefined;
      return cotizadorDeDolares();
    }
  }

  muestraPanelDeOpciones();

  while (opcion === 1 || opcion === 2 || opcion === 3) {
    let otraConsulta = confirm("馃 Quieres realizar otra consulta?");
    if (otraConsulta) {
      cotizadorDeDolares();
      return;
    } 
      alert("馃憢 Adios, espero haberte sido 煤til.");
      return;
      }
}

cotizadorDeDolares();