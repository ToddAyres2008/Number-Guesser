var random = Math.round(Math.random() * 100)
console.log(random)

var guessNumber = document.querySelector("#guessNumber");
var guessButton = document.querySelector(".guessOne");
var clearButton = document.querySelector(".clear");
var showGuess = document.querySelector(".lastGuess");
var resetGuess = document.querySelector(".reset");
var computerResponse = document.querySelector(".response");

activateGuess()

guessButton.addEventListener('click', displayGuess);
guessNumber.addEventListener('input', activateGuess);
clearButton.addEventListener('click', clearInput);
resetGuess.addEventListener('click', clearInput);


function displayGuess() {
  var numberGuessed = guessNumber.value; 
  showGuess.innerText = numberGuessed;
  numberConverter(numberGuessed);
};

function numberConverter(numberGuessed) {
  numberGuessed = parseInt(numberGuessed);
  checker(numberGuessed);
}

function checker(numberGuessed) {
  if (0 > numberGuessed) {
  computerResponse.innerText = "Error: Incorrect value";

} else if (100 < numberGuessed) {
    computerResponse.innerText = "Over 100 bozo! Between 1 and 100!";
} else if (numberGuessed === random) {
  computerResponse.innerText = "That's correct! You cheated!";
} else if (numberGuessed > random) {
  computerResponse.innerText ="Too high. Guess again.";
} else if (numberGuessed < random) {
  computerResponse.innerText ="Too low. Guess again.";
} else if (random === isNaN()) {
  computerResponse.innerText = "Invalid Response";
}}
  
function activateGuess() {
  if (guessNumber.value !== "") {
    guessButton.disabled = false;
    clearButton.disabled = false;
    resetGuess.disabled = false;
  } else {
    guessButton.disabled = true
    clearButton.disabled = true;
    resetGuess.disabled = true;
  }}

  function clearInput () {
    guessNumber.value = " ":
  }

