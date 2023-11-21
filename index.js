// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
  // Generate a random number between 1 and 6 for Player 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  // Create the filename for the corresponding dice image for Player 1
  var randomDiceImage = "dice" + randomNumber1 + ".png";

  // Construct the complete path for the image source for Player 1
  var randomImageSource = randomDiceImage;

  // Select the first image element
  var image1 = document.querySelectorAll("img")[0];

  // Check if the image element exists before setting its source attribute
  if (image1) {
    image1.setAttribute("src", randomImageSource);
  } else {
    // Log an error message if the image element for Player 1 is not found
    console.error("Image element for Player 1 not found!");
  }

  // Generate a random number between 1 and 6 for Player 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Create the filename for the corresponding dice image for Player 2
  var randomImageSource2 = "dice" + randomNumber2 + ".png";

  // Select the second image element
  var image2 = document.querySelectorAll("img")[1];

  // Check if the image element exists before setting its source attribute
  if (image2) {
    image2.setAttribute("src", randomImageSource2);
  } else {
    // Log an error message if the image element for Player 2 is not found
    console.error("Image element for Player 2 not found!");
  }

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
});
