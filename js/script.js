//UL where guessed letters appear
const guessedLetters = document.querySelector(".guessed-letters");
//Guess button
const guessButton = document.querySelector(".guess");
//Input where player guesses a letter
const inputLetters = document.querySelector(".letter");
//Paragraph with word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//Paragraph with remaining guesses
const remainingPar = document.querySelector(".remaining");
//Span with # of remaining guesses
const remainingSpan = document.querySelector(".remaining span");
//Paragraph with message when player guesses a letter
const message = document.querySelector(".message");
//Hidden play again button
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function(word){
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const letter = inputLetters.value;
    console.log(letter);
    inputLetters.value="";
});