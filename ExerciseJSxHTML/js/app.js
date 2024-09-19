// Document Elements
// Looks for "text0", assigns that to the variable called "textField0"
const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

const increaseScoreButton = document.getElementById("button0");

// Internal Variables
let score = 0;
// textField0.innerHTML = "something else";
// textField0.innerHTML = showStylizedScore(786);


// Process (What is going to happen in what sequence)
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
});


// Controllers
/*function showScore(inputNumber) {
  return inputNumber * 100; // Output is a number
}

function showStylizedScore(scoreInput) {
  return "Your score is: " + scoreInput * 100;
} */

function increaseScoreByOne() {
  score++;
  updateScoreText(score);
}


// View
function updateScoreText(newText) {
  textField0.innerHTML = newText;
}
function updateStatusText(newText) {
  textField1.innerHTML = newText;
}
