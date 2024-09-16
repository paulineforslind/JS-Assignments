const birthYear = 2010;
const currentYear = 2024;
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

// ageOfPerson <= 10
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// ageOfPerson >= 11 II ageOfPerson <=17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// >=18
let isAdult = ageOfPerson >= 18;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);


let playerTouchGround = false;
playerHasJetpack = true;

if (playerTouchGround) {
  // Runs when playerTouchGround = true;
  console.log("Player is on the ground!");
  console.log("Player can jump!");
}

else if (playerHasJetpack) {
  // Runs when playerHasJetpack = true;
  console.log("Player can jet away");
}

else {
  // Runs when playerTouchGround = false && playerHasJetpack = false;
  console.log("Player is NOT on the ground");
  console.log("You CANNOT jump!");
}

console.log("Will you see this?");
