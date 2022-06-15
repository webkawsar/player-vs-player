// select all element
const p1BtnElement = document.querySelector('#p1Btn');
const p2BtnElement = document.querySelector('#p2Btn');
const resetBtnElement = document.querySelector('#resetBtn');
const inputElement = document.querySelector('#inputScore');
const playingTotElement = document.querySelector('.playingTo');
const p1ScoreElement = document.querySelector('#p1Score');
const p2ScoreElement = document.querySelector('#p2Score');
const form = document.querySelector('form');


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

    // showing the value on DOM
    playingTotElement.textContent = +inputScore;

    // reset the input value
    inputElement.value = '';

})























