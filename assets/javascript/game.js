







// Note, these variables are global. Therefore, they will "leak" into all the functions.
// For example, functions are like houses. And each house should have its own variables, not all the variables. Unless you want the variable(s) in all the houses (functions).
// Look up the term "scope".


var possibleGuesses = ["giggity", "cleveland", "peter", "brian", "lois", "stewie", "quagmire", "meg", "chris"]

var wordtoGuess = "" ;

var numberofblanks = 0 ; 
var lettersandchosenwords = []

var blanksAndcorrectguesses = [] ;

var incorrectGuesses = [] ;


// Game counters

var wins = 0 ;
var losses = 0 ;
var numGuesses = 9 ;

// functions define what something does
/* function verifyLetters(letter) {
    if(letter == 'a'){
        console.log('its an a');
    }
    else{
        console.log("its not an a");
    }
} */

//Start game function.
function startGame() {
    //Reset guesses to 0.
    numGuesses = 9;
    wordtoGuess = possibleGuesses[Math.floor(Math.random() * possibleGuesses.length)]
    //alert(wordtoGuess) 
    lettersandchosenwords = wordtoGuess.split("")
    console.log(lettersandchosenwords)
    var numberofblanks = lettersandchosenwords.length
    console.log(numberofblanks)
    blanksAndcorrectguesses = []
    incorrectGuesses = []
    for (i = 0 ; i < numberofblanks; i++){
        blanksAndcorrectguesses.push("_")
    } 
    console.log(blanksAndcorrectguesses)

    document.getElementById("wordblanks").innerHTML = blanksAndcorrectguesses.join(" ")
    document.getElementById("guessesleft").innerHTML = numGuesses
    document.getElementById("wrongguesses").innerHTML = incorrectGuesses.join(" ")
    
}





// This is the format to call a function. Calling a function is putting it into action.






function verifyLetters(letter) {
    console.log(letter)
    var letterdefault = false
    // This for loop goes through the wordtoGuess letters and confirms whether or not the letter key hit matches any letter(s) in the word.
    console.log("Word to Guess: ");
    console.log(wordtoGuess);
    console.log(numberofblanks);
    for (var i = 0; i < wordtoGuess.length; i++){
        if (wordtoGuess[i] === letter){
            letterdefault = true
        }
    }
    console.log(letterdefault);
    if (letterdefault){
        for (var i = 0; i < wordtoGuess.length; i++){
            if(wordtoGuess[i] === letter){
                // These (below) fill in the letters.
                blanksAndcorrectguesses[i] = letter
            }
        }
       
    }
    else {
        incorrectGuesses.push(letter);
        // What the below actually means: numGuesses = numGuesses - 1
        numGuesses--;
    }
    console.log(blanksAndcorrectguesses)
}


function numberOfRounds (){
    console.log("wins: " + wins )
    console.log("losses: " + losses)
    console.log("number of guesses: " + numGuesses)
    document.getElementById("guessesleft").innerHTML=numGuesses;
    document.getElementById("wordblanks").innerHTML=blanksAndcorrectguesses.join(" ");
    document.getElementById("wrongguesses").innerHTML=incorrectGuesses.join(" ");
    console.log(lettersandchosenwords)
    if (lettersandchosenwords.toString() === blanksAndcorrectguesses.toString()) {
        wins++
        alert ("Al-riiiight!")
        document.getElementById("wins").innerHTML=wins;
        startGame()
    }
    else if (numGuesses === 0) {
        losses++ ;
        alert ("Oh, Peter...")
        document.getElementById("losses").innerHTML=losses;
        startGame()
    }
}



// This calls the function startGame()
startGame()

// This will alert when a key is hit.
document.onkeyup = function(event) {
    var lettersGuessed = event.key;
    verifyLetters(lettersGuessed) ;
    numberOfRounds();
}

// Color coding is going on here. Strings are orange. Light blue are values. Blue are functions. 