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
    let dolarOficialBNVendedor = prompt(" Ingresa el Valor del Dolar Oficial, Banco Nación, Vendedor.\n Puedes consultarlo en:\n https://www.bna.com.ar/Personas ")
    return parseFloat(dolarOficialBNVendedor)
}

function calculaDolarSolidario(dolarOficialBNVendedor) {
    let resultadoDolarSolidario = dolarOficialBNVendedor + (dolarOficialBNVendedor * 30/100) + (dolarOficialBNVendedor * 35/100)
    return resultadoDolarSolidario
}

function calculaDolarNetflix(dolarOficialBNVendedor) {
    let resultadoDolarNetflix = dolarOficialBNVendedor + (dolarOficialBNVendedor * 30/100) + (dolarOficialBNVendedor * 45/100)
    return resultadoDolarNetflix
}

function mostrarResultado(dolarOficialBNVendedor, resultadoDolarSolidario, resultadoDolarNetflix) {
    alert(" Los diferentes valores del dolar, con una cotización de dolar oficial a $" + dolarOficialBNVendedor + ", son:\n * $" + resultadoDolarSolidario + " Dolar Solidario \n * $" + resultadoDolarNetflix + " Dolar Netflix")
}

let dolarOficialBNVendedor = solicitaDolarOficialBNVendedor()
let resultadoDolarSolidario = calculaDolarSolidario(dolarOficialBNVendedor)
let resultadoDolarNetflix = calculaDolarNetflix(dolarOficialBNVendedor)
mostrarResultado(dolarOficialBNVendedor, resultadoDolarSolidario, resultadoDolarNetflix)