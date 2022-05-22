// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let contNumber = 0;
  for (let index = 0; index < arrayPhone.length; index++) {
    if (arrayPhone[index] !== null) {
      contNumber += 1;
    }
  }

  if (contNumber !== 11) {
    return ("Array com tamanho incorreto.")
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
