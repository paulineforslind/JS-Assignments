function getBankBalance() {
  return 500 + 600;
}
console.log(getBankBalance());




// function with input(s) and no output
function addOne(inputNumber) {
  inputNumber += 1;
  console.log(inputNumber);
}

// calling the function
addOne(8);




// function with input(s) and an output
function square(numberToSquare) {
  return numberToSquare * numberToSquare;
}

// calling the function
let squaredNumber = square(15);
console.log(squaredNumber);

// or simplified
console.log(square(15));




// exercise 10 Output and Input
function multiplyBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}
console.log(multiplyBySelf(4));




function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(add(2, 6));



function average(number1, number2) {
  return (number1 + number2) / 2;
}
console.log(average(2, 6));




function welcomingResult(firstName, lastName) {
  return "Welcome" + " " + firstName + " " + lastName;
}
console.log(welcomingResult("Ben","Ting"));




function randomNumber() {
  return Math.floor(Math.random() * 3);
}
console.log(randomNumber());




function convertNumbersToLetters(number) {
  if (number === 0) {
    return "A";
  }
  else if (number === 1) {
    return "B";
  }
  else if (number === 2) {
    return "C";
  }
  else {
    return "Invalid number";
  }
}
console.log(convertNumbersToLetters(0));
console.log(convertNumbersToLetters(1));
console.log(convertNumbersToLetters(2));
console.log(convertNumbersToLetters(4237398));




function evaluateResult (firstNumber, secondNumber) {
  if (firstNumber === secondNumber) {
    return "Both numbers are equal!";
  }
  else if (firstNumber > secondNumber) {
    return "First number is greater!";
  }
  else if (firstNumber < secondNumber) {
    return "Second number is greater!";
  }
}
console.log(evaluateResult(1, 2));
