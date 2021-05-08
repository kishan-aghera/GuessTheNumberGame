let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    document.getElementById('newGameButton').style.display = "none";
    document.getElementById('gameArea').style.display = "none";
}

function startGameView() {
    document.getElementById('welcomeScreen').style.display = "none";
    document.getElementById('gameArea').style.display = "block";
}

function easyMode() {
    maxGuesses = 10;
    startGameView();
}

function hardMode() {
    maxGuesses = 5;
    startGameView();
}

function compareGuess() {
    const userGuess = Number(document.getElementById('inputBox').value);
    userGuesses.push(" " + userGuess);
    document.getElementById('guesses').innerHTML = userGuesses;

    attempts++;
    document.getElementById('attempts').innerHTML = attempts;

    if (attempts < maxGuesses) {
        if (userGuess > computerGuess) {
            document.getElementById('textOutput').innerHTML = "Your Guess is too high!";
            document.getElementById('inputBox').value = "";
        } else if (userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = "Your Guess is too low!";
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('textOutput').innerHTML = `Correct! You got it in ${attempts} attempts.`;
        }
    } else {
        if (userGuess > computerGuess) {
            document.getElementById('textOutput').innerHTML = "You lose! The number was "+ computerGuess;
            document.getElementById('inputBox').value = "";
        } else if (userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = "You lose! The number was "+ computerGuess;
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('textOutput').innerHTML = `Correct! You got it in ${attempts} attempts.`;
        }
    }
}
