// 🎲 TheDiceeGame - Game Logic with Emoji Results!
document.addEventListener("DOMContentLoaded", function() {

  // 🔢 Generate random dice rolls (1-6) for both players
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // 🖼️ Build image filenames
  var randomDiceImage1 = "dice" + randomNumber1 + ".png";
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";

  // 👤 Update Player 1 dice image
  var image1 = document.querySelector(".img1");
  if (image1) {
    image1.setAttribute("src", randomDiceImage1);
  } else {
    console.error("❌ Image element for Player 1 not found!");
  }

  // 👥 Update Player 2 dice image
  var image2 = document.querySelector(".img2");
  if (image2) {
    image2.setAttribute("src", randomDiceImage2);
  } else {
    console.error("❌ Image element for Player 2 not found!");
  }

  // 🏆 Determine and display the winner
  var resultTitle = document.getElementById("result-title");
  if (resultTitle) {
    if (randomNumber1 > randomNumber2) {
      resultTitle.textContent = "🎉 Player 1 Wins! 🎉";
    } else if (randomNumber2 > randomNumber1) {
      resultTitle.textContent = "🎉 Player 2 Wins! 🎉";
    } else {
      resultTitle.textContent = "🤝 It's a Draw! 🤝";
    }
  }

});
