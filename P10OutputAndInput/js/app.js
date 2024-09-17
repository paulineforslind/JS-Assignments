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
