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
