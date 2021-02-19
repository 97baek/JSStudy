const GAME_TIME = 4;
const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const btn = document.querySelector('.btn');

let isPlaying;
let score = 0;
let time = GAME_TIME;
let words = [];
let timeInterval;
let checkInterval;

function getWords() {
  fetch('https://random-word-api.herokuapp.com/word?number=100')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((item) => {
        if (item.length < 10) {
          words.push(item);
        }
      });
      changeButton('게임시작');
    });
}

function checkMatch() {
  if (wordDisplay.innerText.toLowerCase() === wordInput.value.toLowerCase()) {
    wordInput.value = '';
    if (!isPlaying) {
      return;
    }
    score++;
    scoreDisplay.innerText = score;
    time = GAME_TIME;
    let randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex];
  }
}

function run() {
  if (isPlaying) {
    return;
  }
  wordInput.value = '';
  isPlaying = true;
  wordInput.focus();
  time = GAME_TIME;
  score = 0;
  scoreDisplay.innerText = score;
  changeButton('게임중');
  timeInterval = setInterval(countDown, 1000);
  checkInterval = setInterval(checkStatus, 50);
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    changeButton('게임시작');
    clearInterval(checkInterval);
  }
}

function changeButton(text) {
  text === '게임시작' ? btn.classList.remove('loading') : btn.classList.add('loading');
  btn.innerText = text;
}

function countDown() {
  time > 0 ? time-- : (isPlaying = false);
  if (!isPlaying) {
    clearInterval(timeInterval);
  }
  timeDisplay.innerText = time;
}

function init() {
  changeButton('게임로딩중');
  getWords();
  wordInput.addEventListener('input', checkMatch);
  btn.addEventListener('click', run);
}

init();
