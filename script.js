// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
const computerChoices = ["r", "p", "s"];
let tieCount = 0;
let winCount = 0;
let lossCount = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // assigns key pressed to userGuess
  const userGuess = event.key;
  // creates random choice for computerGuess
  const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  // function to display results in #game div
  function render() {
    console.log("render");
    document.querySelector(
      "#game"
    ).innerHTML = `<p>User Guess: ${userGuess}</p>
  <p>Computer Guess: ${computerGuess}</p>
  <p>Tie Count: ${tieCount}</p>
  <p style="color:green">Win Count: ${winCount}</p>
  <p style="color:red">Loss Count: ${lossCount}</p>`;
  }
  //will launch game is key pressed is r, s, or p
  if (userGuess == "r" || userGuess == "s" || userGuess == "p") {

    // Alerts the key the user pressed (userGuess).
    //alert("User guess: " + userGuess);
    //document.querySelector("#userguess").innerText = userGuess;

    // Alerts the Computer's guess.
    //alert("Computer guess: " + computerGuess);
    //document.querySelector("#computerguess").innerText = computerGuess;

    //results if tie
    if (userGuess == computerGuess) {
      tieCount += 1;
      //document.querySelector("#tiecount").innerText = tieCount;
      render();
      //console.log(event.key + computerGuess)

      //results if win
    } else if (
      (userGuess == "r" && computerGuess == "s") ||
      (userGuess == "s" && computerGuess == "p")
    ) {
      winCount += 1;
      //document.querySelector("#wincount").innerText = winCount;
      render();
      //console.log(userGuess + computerGuess + " you win")

      //results if loss
    } else if (
      (userGuess == "r" && computerGuess == "p") ||
      (userGuess == "p" && computerGuess == "s")
    ) {
      lossCount += 1;
      //document.querySelector("#losscount").innerText = lossCount;
      render();
      //console.log(userGuess + computerGuess + " you lose")
    }
  } else {
    alert("pick R, S, P");
  }
};