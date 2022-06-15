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


// update winning to score into dom
playingTotElement.textContent = winningScore;

// single responsibility principle
// input and update playing to score
form.addEventListener('submit', (e) => {
    e.preventDefault();

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
    playingTotElement.textContent = +inputScore;

    // reset the input value
    inputElement.value = '';

})



p1BtnElement.addEventListener('click', () => {
    // increase the count 
    if(!gameOver && p1Score < winningScore) {
        p1Score++;

        // update on dom
        p1ScoreElement.textContent= p1Score;
    }

    if(p1Score === winningScore) {
        gameOver = true;

        // disabled player button
        p1BtnElement.setAttribute('disabled', 'disabled');
        p2BtnElement.setAttribute('disabled', 'disabled');

        // show winner message
        alert('Player 1 is winner');
    }

    
})


p2BtnElement.addEventListener('click', () => {
    // increase the count 
    if(!gameOver && p2Score < winningScore) {
        p2Score++;
        
        // update on dom
        p2ScoreElement.textContent= p2Score;
    }

    if(p2Score === winningScore) {
        gameOver = true;

        // disabled player button
        p1BtnElement.setAttribute('disabled', 'disabled');
        p2BtnElement.setAttribute('disabled', 'disabled');

        // show winner message
        alert('Player 2 is winner');
    }
})



















