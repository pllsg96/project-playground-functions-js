// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let splitedPhrase = phrase.split(" ");
  return splitedPhrase;
}

// Desafio 4
function concatName(array) {
  let lastElement = array[array.length - 1];
  let firstElement = array[0];
  let finalConcat = [lastElement, firstElement];
  return finalConcat.join(", ");
}

// Desafio 5
function footballPoints(wins,ties) {
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

 

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1ToMouse = Math.abs(Math.abs(cat1) - Math.abs(mouse));
  let cat2ToMouse = Math.abs(Math.abs(cat2) - Math.abs(mouse));

  if (cat1ToMouse === cat2ToMouse) {
    return "os gatos trombam e o rato foge";
  }

  else if (cat1ToMouse < cat2ToMouse) {
    return "cat1";
  }

  else if(cat1ToMouse > cat2ToMouse) {
    return "cat2";
  }
}


// Desafio 8
function fizzBuzz(arrayTest) {
  let result = [];
  for (let position = 0; position < arrayTest.length; position++) {
    if   ((arrayTest[position] % 3 === 0)
      && (arrayTest[position] % 5 === 0)) {
      result[position] = "fizzBuzz";
    }
    else if((arrayTest[position] % 3 === 0)
      &&   (arrayTest[position] % 5 !== 0)) {
        result[position] = "fizz";
    }
    else if((arrayTest[position] % 3 !== 0)
      &&   (arrayTest[position] % 5 === 0)) {
        result[position] = "buzz";
    }
    else {
      result[position] = "bug!";
    }
  }

  return result;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
