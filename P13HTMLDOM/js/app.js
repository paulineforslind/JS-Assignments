// reference "text0" and assign it to the variable called "textField0"
const textField0 = document.getElementById("text0");
// TAKE textField0 and change it to "Pauline"
textField0.innerHTML = multiplyBySelf(4);

// reference "header5" and assign it to the variable called "headerText5"
const headerText5 = document.getElementById("header5");
// TAKE headerText5 and change it to "This is my website"
headerText5.innerHTML = "THIS IS MY WEBSITE";
// TAKE headerText5, access its style, access its color and change it
headerText5.style.color = "pink";
headerText5.style.backgroundColor = "lightblue";

function multiplyBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}

