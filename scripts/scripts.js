// function play(){
//     // step-1:hide the home screen. to hide the screen add the class hidden to the home screen
//     const homeSection=document.getElementById('home');
//     homeSection.classList.add('hidden');

//     // step-2: show the playground

//     const playGround=document.getElementById('playground');
//     playGround.classList.remove('hidden');
// }

// Function for keypress
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log(playerPressed);
    // get the expected element
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // Checked matched or not

    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');


        const currentScore = document.getElementById('currentScore');
        const currentScoreText = currentScore.innerText;
        const currentScoreValue = parseInt(currentScoreText);
        const newScore = currentScoreValue + 1;
        currentScore.innerText = newScore;




        removeBackgroundColorInKey(expectedAlphabet);
        continueGame();
        // Life related things here 

    }
    else {
        console.log('you missed, you lost a life');
        const currentLife = document.getElementById('currentLife');
        const currentLifeText = currentLife.innerText;
        const newLifeValue = parseInt(currentLifeText);
        const newLife = newLifeValue - 1;
        currentLife.innerText = newLife


        if (newLife === 0) {
            gameOver();
        }
    }


}
document.addEventListener('keyup', handleKeyboardButtonPress);


const playAgain=document.getElementById('playAgain');
// playAgain.addEventListener('click', playAgain())



function continueGame() {
    // step1: generate a random alphabet
    const alphabet = getARandomeNumber();
    console.log('Your random alphabet is ', alphabet);

    // step2: Set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorInKey(alphabet);
}

function play() {
    hideElementById('home');
    hideElementById('scoreSection')

    addElementById('playground');
    continueGame();

    // Reset the score and life
    
    

}

function gameOver() {
    hideElementById('playground');
    addElementById('scoreSection');
}

// function playagain(){
//     hideElementById('scoreSection')
//     addElementById('playground');
//     continueGame();
// }