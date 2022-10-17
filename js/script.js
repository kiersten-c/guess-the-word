//UL where guessed letters appear
const guessedLettersElement = document.querySelector(".guessed-letters");
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
//test word
const word = "magnolia";
//array of all the letters player guessed
const guessedLetters = [];

//placeholder while word is hidden
const placeholder = function(word){
    //word split into an array of letters
    const placeholderLetters = [];
    //for each letter of the word, log out the letter and push a dot (4 letters = 4 dots)
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    //turn array back into a word (without spaces or separators)
    wordInProgress.innerText = placeholderLetters.join("");
};
//call placeholder and push word
placeholder(word);

guessButton.addEventListener("click", function(e){
    //prevent page from reloading/clearing previous inputs
    e.preventDefault();
    //collect input
    const letter = inputLetters.value;
    //clear message
    message.innerText = "";
    //validate the input in inputLetters 
    const validatedLetter = validateInput(letter);
    
    if(validatedLetter) {
        makeGuess(letter);
    }
    //clear input box
    inputLetters.value="";
});

const validateInput = function(input) {
    //regular expression
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
       message.innerText = "Please enter a letter.";
    } else if (input.length > 1){
        message.innerText = "Please enter one letter at a time.";
        //if input does not match regular expression
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        //if all goes well -> show the letter
        return input;
    }
};

const makeGuess = function(letter){
    //change all inputted letters to uppercase (JS is case-sensitive)
    letter = letter.toUpperCase();

    if (guessedLetters.includes(letter)) {
        message.innerText = "You already guessed that letter!";
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters)
    }
};