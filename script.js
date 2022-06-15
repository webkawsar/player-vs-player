
// select all element
const p1BtnElement = document.querySelector('#p1Btn');
const p2BtnElement = document.querySelector('#p2Btn');
const resetBtnElement = document.querySelector('#resetBtn');
const inputElement = document.querySelector('#inputScore');
const playingTotElement = document.querySelector('.playingTo');
const p1ScoreElement = document.querySelector('#p1Score');
const p2ScoreElement = document.querySelector('#p2Score');
const form = document.forms[0];


// data
let p1Score = 0;
let p2Score = 0;
let playingToScore = 5;
let gameOver = false;
let players = ['p1', 'p2'];
let playerTurn = players[Math.round(Math.random())];


// default value set
playingTotElement.textContent = playingToScore;
playerTurn === 'p1' ? p2BtnElement.setAttribute('disabled', 'disabled') : p1BtnElement.setAttribute('disabled', 'disabled')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // set playing to score value
    playingToScore = inputElement.value;
    playingTotElement.textContent = +playingToScore;

    //reset all value
    p1Score = 0;
    p2Score = 0;
    playingToScore = 5;
    gameOver = false;
    playerTurn = 'p1';
    inputElement.value = '';
    p1ScoreElement.textContent = p1Score;
    p2ScoreElement.textContent = p2Score;
    p1BtnElement.removeAttribute('disabled');
    p2BtnElement.removeAttribute('disabled');
})


// player 1
p1BtnElement.addEventListener('click', () => {
    
    if(p1Score < playingToScore && playerTurn === 'p1') {
        p1Score++;
        p1ScoreElement.textContent = p1Score;
        playerTurn = 'p2';
        p1BtnElement.setAttribute('disabled', 'disabled');
        p2BtnElement.removeAttribute('disabled');
    }

    if(p1Score === playingToScore) {
        gameOver = true;
        p1BtnElement.setAttribute('disabled', 'disabled');
        p2BtnElement.setAttribute('disabled', 'disabled');
        alert('Player 1 is winner');
    }
    
})

// player 2
p2BtnElement.addEventListener('click', () => {
    
    if(p2Score < playingToScore && playerTurn === 'p2') {
        p2Score++;
        p2ScoreElement.textContent = p2Score;
        playerTurn = 'p1';
        p2BtnElement.setAttribute('disabled', 'disabled');
        p1BtnElement.removeAttribute('disabled');
    }

    if(p2Score === playingToScore) {
        gameOver = true;
        p1BtnElement.setAttribute('disabled', 'disabled');
        p2BtnElement.setAttribute('disabled', 'disabled');
        alert('Player 2 is winner');
    }
    
})

// reset button event handler
resetBtnElement.addEventListener('click', () => {
    //reset all value
    p1Score = 0;
    p2Score = 0;
    playingToScore = 5;
    gameOver = false;
    playerTurn = 'p1';
    inputElement.value = '';
    p1ScoreElement.textContent = p1Score;
    p2ScoreElement.textContent = p2Score;
    p1BtnElement.removeAttribute('disabled');
    p2BtnElement.removeAttribute('disabled');
})






















