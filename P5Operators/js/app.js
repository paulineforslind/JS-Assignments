let speedInput = 72;
let speedOutput = 0;
speedOutput = speedInput / 3.6;
console.log(speedOutput);

let minutesInput = 3;
let secondsOutput = 0;
secondsOutput = minutesInput * 60;
console.log(secondsOutput);

/* let divisionInput1 = 11;
let divisionOutput2 = 4;
let divisionOutput = 0;
divisionOutput = divisionInput1 / divisionOutput2;
console.log(divisionOutput);

let remainderOutput = 0;
remainderOutput = divisionInput1 % divisionOutput2;
console.log(remainderOutput); */

let radiusInput = 2;
let pi = 3.14;
area = radiusInput * radiusInput * pi;
console.log(area);

// or more exact
let radieInput = 2;
let areaOfCircle;
areaOfCircle = Math.PI  * Math.pow(radieInput, 2);
console.log(areaOfCircle);

let negationInput = 11;
let negationOutput = -1;
answer = negationInput * (negationOutput);
console.log(answer);

// or
let negatableNumber = 11;
let negatedOutput;
negatedOutput = negatableNumber * - 1;
console.log(negatedOutput);

let weightInput = 70;
let heightInput = 1.82
bmi = weightInput / (heightInput * heightInput);
console.log(bmi);

// or
let weightInKilograms = 70;
let heightInMeters = 1.82;
let calculatedBMI;
calculatedBMI = weightInKilograms / Math.pow(heightInMeters, 2);
console.log(calculatedBMI);

let sideA = 3;
let sideB = 4;
let hypotenuse;
hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
console.log(hypotenuse);

// or
let squareOfAandB = Math.pow(sideA, 2) + Math.pow(sideB, 2);
hypoTenuse = Math.sqrt(squareOfAandB);
console.log(hypoTenuse);



let secondsInput = 111;
let minSecOutput;

let minutesOutput;
minutesOutput = Math.floor(secondsInput / 60);
console.log(minutesOutput);

let secOutput;
// secOutput = secondsInput - minoutesOutput * 60;
secOutput = secondsInput % 60;
console.log(secOutput);

// Text Styling
minSecOutput = minutesOutput + "minute(s) and " * secOutput + " second(s)";
console.log(minSecOutput);
