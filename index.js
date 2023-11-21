// Generate a random number between 1 and 6 for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

// Create the filename for the corresponding dice image for Player 1
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

// Construct the complete path for the image source for Player 1
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

// Select the first image element and set its source attribute to the randomly generated image source
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Generate a random number between 1 and 6 for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create the filename for the corresponding dice image for Player 2
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Set the source attribute of the second image element to the randomly generated image source for Player 2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Determine the winner based on the generated random numbers
if (randomNumber1 > randomNumber2) {
  // Player 1 wins
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  // Player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  // It's a draw
  document.querySelector("h1").innerHTML = "Draw!";
}
