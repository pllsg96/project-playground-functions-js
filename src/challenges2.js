// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let contNumber = 0;
  let diffNumber = 0;
  let repeatNumber = 0;
  let ddd = [];
  let firstDigits = [];
  let lastDigits = [];

  for (let index = 0; index < arrayPhone.length; index++) {
      if (arrayPhone[index] !== null) {
        contNumber += 1;
      }
      if (arrayPhone[index] < 0 || arrayPhone[index] > 9) {
        diffNumber += 1;
      }
    repeatNumber = 0;
      for (let index2 = 0; index2 < 9; index2++) {
        if (arrayPhone[index] === arrayPhone[index2]) {
         repeatNumber += 1;
        }
        if (repeatNumber > 3) {
          return console.log(repeatNumber);
          break;
          
        }
      }
  }

  if (contNumber !== 11) {
    return ("Array com tamanho incorreto.");
  }
  if (diffNumber >= 1 || repeatNumber >= 3) {
    return ("não é possível gerar um número de telefone com esses valores");
  }

  else {
    for (let index = 0; index < arrayPhone.length; index++) {
      if (index <= 1) {
        ddd[index] = arrayPhone[index];
      }
  
      else if (index <= 6 && index > 1) {
        firstDigits[index] = arrayPhone[index];
      }
  
      else if (index <= 10 && index > 6) {
        lastDigits[index] = arrayPhone[index];
      }
    }

    return ("(" + ddd.join("") + ") " + firstDigits.join("") + "-" + lastDigits.join(""));
  }
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 2]));

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
