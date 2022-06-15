// select all element
const p1BtnElement = document.querySelector('#p1Btn');
const p2BtnElement = document.querySelector('#p2Btn');
const resetBtnElement = document.querySelector('#resetBtn');
const inputElement = document.querySelector('#inputScore');
const playingTotElement = document.querySelector('.playingTo');
const p1ScoreElement = document.querySelector('#p1Score');
const p2ScoreElement = document.querySelector('#p2Score');
const form = document.querySelector('form');


// data layer
let p1Score = 0;
let p2Score = 0;
let winningScore = 5
let gameOver = false;
let players = ['p1', 'p2'];
let playerTurn = players[Math.round(Math.random())];



// update winning to score into dom
playingTotElement.textContent = winningScore;
// disabled button based on player turn
playerTurn === 'p1' ? p2BtnElement.setAttribute('disabled', 'disabled') : p1BtnElement.setAttribute('disabled', 'disabled')


const handleWinningState = () => {

    if(p1Score === winningScore || p2Score === winningScore) {
        gameOver = true;

        // disabled player button
        p1BtnElement.setAttribute('disabled', 'disabled');
        p2BtnElement.setAttribute('disabled', 'disabled');
    }


    if(p1Score === winningScore) {
        // show winner message
        alert('Player 1 is winner');

    } else if(p2Score === winningScore) {
        // show winner message
        alert('Player 2 is winner');

    }
    
}

const resetValues = () => {
    p1Score = 0;
    p2Score = 0;
    winningScore = 5
    gameOver = false;
    players = ['p1', 'p2'];
    playerTurn = players[Math.round(Math.random())];

    
    p1BtnElement.removeAttribute('disabled');
    p2BtnElement.removeAttribute('disabled');

    p1ScoreElement.textContent = p1Score;
    p2ScoreElement.textContent = p2Score;

    // update winning to score into dom
    playingTotElement.textContent = winningScore;
    
}

// single responsibility principle
// input and update playing to score
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //reset previous state
    resetValues();

    // getting this input value
    const inputScore = inputElement.value;

    // validating input value
    if(inputScore < 1) {
        alert('Please provide a value more than 0');
        return;
    }

    // saving it into data layer
    winningScore = +inputScore;

    // showing the value on DOM
    playingTotElement.textContent = inputScore;

    // reset the input value
    inputElement.value = '';

})



p1BtnElement.addEventListener('click', () => {
    // increase the count 
    if(playerTurn === 'p1' && !gameOver && p1Score < winningScore) {
        p1Score++;

        // update on dom
        p1ScoreElement.textContent= p1Score;

        // change player turn
        playerTurn = 'p2';

        // disabled player 1 button
        p1BtnElement.setAttribute('disabled', 'disabled');
        // enabled player 2 button
        p2BtnElement.removeAttribute('disabled');
    }

    handleWinningState();
})


p2BtnElement.addEventListener('click', () => {
    // increase the count 
    if(playerTurn === 'p2' && !gameOver && p2Score < winningScore) {
        p2Score++;
        
        // update on dom
        p2ScoreElement.textContent= p2Score;

        // change player turn
        playerTurn = 'p1';

        // disabled player 2 button
        p2BtnElement.setAttribute('disabled', 'disabled');
        // enabled player 1 button
        p1BtnElement.removeAttribute('disabled');
    }

    handleWinningState();
})


// reset button event listener
resetBtnElement.addEventListener('click', () => {
    resetValues();
    
})
















