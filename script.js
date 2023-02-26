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
    " Ingresa el Valor del Dolar Oficial, Banco Nación, Vendedor.\n Puedes consultarlo en:\n https://www.bna.com.ar/Personas "
  );
  return parseFloat(dolarOficialBNVendedor);
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

function mostrarResultado(
  dolarOficialBNVendedor,
  resultadoDolarSolidario,
  resultadoDolarNetflix,
  resultadoDolarQuatar
) {
  alert(
    " Los diferentes valores del  son:\n\n ✅-👮‍♂️ $" +
      dolarOficialBNVendedor.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
      }) +
      " Dolar Oficial Banco Nación Venedor.\n ✅-🥰 $" +
      resultadoDolarSolidario.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
      }) +
      " Dolar Solidario. \n ✅-💳 $" +
      resultadoDolarNetflix.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
      }) +
      " Dolar Tarjeta ó Netflix.\n ✅-✈ $" +
      resultadoDolarQuatar.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
      }) +
      " Dolar Quatar."
  );
}

let dolarOficialBNVendedor = solicitaDolarOficialBNVendedor();
let resultadoDolarSolidario = calculaDolarSolidario(dolarOficialBNVendedor);
let resultadoDolarNetflix = calculaDolarNetflix(dolarOficialBNVendedor);
let resultadoDolarQuatar = calculaDolarQuatar(dolarOficialBNVendedor);
mostrarResultado(
  dolarOficialBNVendedor,
  resultadoDolarSolidario,
  resultadoDolarNetflix,
  resultadoDolarQuatar
);
