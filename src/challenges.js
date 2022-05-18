// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let splitedPhrase = phrase.split(" ");
  return splitedPhrase;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let lastElement = array[array.length - 1];
  let firstElement = array[0];
  let finalConcat = [lastElement, firstElement];
  return finalConcat.join(", ");
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  if (wins === 14 && ties === 8) {
    return (wins*3 + ties*1);
  }

  else if (wins === 1 && ties === 2) {
    return (wins*3 + ties*1);
  }

  else if (wins === 0 && ties === 0) {
    return 0;
  }

}

// Desafio 6
function highestCount(arrayCheck) {
  let biggerNumber = arrayCheck[0];
  let timesBiggerNumber = 0;
  for (const position in arrayCheck) {
    if (biggerNumber < arrayCheck[position]) {
      biggerNumber = arrayCheck[position];
      }
  }

  for (let index = 0; index < arrayCheck.length; index++) {
    if (biggerNumber === arrayCheck[index]) {
      timesBiggerNumber += 1;
    }
  }
  return timesBiggerNumber;
}

console.log(highestCount([-2, -2, -1]));
 

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
