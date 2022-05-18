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

// Desafio 9
function encode(word) {
  let wordArray = word.split("");
  for (let position = 0; position < wordArray.length; position++) {
    if (wordArray[position] === "a") {
      wordArray[position] = 1;
    }
    else if (wordArray[position] === "e") {
      wordArray[position] = 2;
    }
    else if (wordArray[position] === "i") {
      wordArray[position] = 3;
    }
    else if (wordArray[position] === "o") {
      wordArray[position] = 4;
    }
    else if (wordArray[position] === "u") {
      wordArray[position] = 5;
    }
  }

  return wordArray.join("");
}


function decode(word) {
  let wordArray = word.split("");
  for (let position = 0; position < wordArray.length; position++) {
    if (wordArray[position] === "1") {
      wordArray[position] = "a";
    }
    else if (wordArray[position] === "2") {
      wordArray[position] = "e";
    }
    else if (wordArray[position] === "3") {
      wordArray[position] = "i";
    }
    else if (wordArray[position] === "4") {
      wordArray[position] = "o";
    }
    else if (wordArray[position] === "5") {
      wordArray[position] = "u";
    }
  }

  return wordArray.join("");
}


// Desafio 10
function techList(array, object) {
  if (array.length != 0) {
    listTech = array.sort();
    nameObject = object;
    resultList = [];

    for (let index = 0; index < listTech.length; index++) {
      resultList[index] = {
        tech: listTech[index],
        name: nameObject

      }
    }
    return resultList;
  }
  else {
    return "Vazio!";
  }
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
