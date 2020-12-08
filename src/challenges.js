// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
  // seu código aqui
}

// Desafio 3
function splitSentence(pharases) {
  let pharaseSlice = pharases.split('');
  let words = [''];
  let counter = 0;
  for (let index = 0; index < pharaseSlice.length; index += 1) {
    if (pharaseSlice[index] !== ' ') {
      words[counter] += pharaseSlice[index];
    } else {
      counter += 1;
      words.push('');
    }
  }
  return words;
  // seu código aqui
}

// Desafio 4
function concatName(names) {
  let finalValue = names;
  let firstLast = `${finalValue[finalValue.length - 1]}, ${names[0]}`;
  return firstLast;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  let result = 0;
  let high = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > high) {
      high = numbers[index]
    }
  }
  for (let counter = 0; counter < numbers.length; counter += 1) {
    if (numbers[counter] === high) {
      result += 1;
    }
  }
  return result;
// seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let hunt = 0;
  let hunt1 = 0;
  if (mouse < cat1) {
    hunt = cat1 - mouse;
  } else {
    hunt = mouse - cat1;
  }
  if (mouse < cat2) {
    hunt1 = cat2 - mouse;
  } else {
    hunt1 = mouse - cat2;
  }
  if (hunt < hunt1) {
    return 'cat1';
  } else if (hunt1 < hunt) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    result.push('');
    if (numbers[index] % 3 === 0) {
      result[index] = 'fizz';
    }
    if (numbers[index] % 5 === 0) {
      if (result[index] === 'fizz') {
        result[index] = 'fizzBuzz';
      } else {
        result[index] = 'buzz';
      }
    }
    if (numbers[index] % 3 !== 0 && numbers[index] % 5 !== 0) {
      result[index] = 'bug!';
    }
  }
  return result;
  // seu código aqui
}

// Desafio 9
function encode(word) {
  let character = word.split('');
  let result = '';
  for (let counter = 0; counter < character.length; counter += 1) {
    switch (character[counter]) {
      case 'a':
        result += '1';
        break;
      case 'e':
        result += '2';
        break;
      case 'i':
        result += '3';
        break;
      case 'o':
        result += '4';
        break;
      case 'u':
        result += '5';
        break;
      default:
        result += character[counter];
        break;
    }
  }
  return result;
  // seu código aqui
}
function decode(word) {
  let character = word.split('');
  let result = '';
  for (let counter = 0; counter < character.length; counter += 1) {
    switch (character[counter]) {
      case '1':
        result += 'a';
        break;
      case '2':
        result += 'e';
        break;
      case '3':
        result += 'i';
        break;
      case '4':
        result += 'o';
        break;
      case '5':
        result += 'u';
        break;
      default:
        result += character[counter];
        break;
    }
  }
  return result;
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
