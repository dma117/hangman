import { WordsController } from './wordsController.js';
import { KeyboardController } from './keyboardController.js';
import { GuessesController } from './guessesController.js';
import { modalLayout} from './modalLayout.js';
import { buildBasicLayout } from './basicLayout.js';
import { Hangman } from './hangman.js';

const gameStates = {
  'inProgress': 'inProgress',
  'win': 'win',
  'lose': 'lose',
}

buildBasicLayout();

let currentGameState = gameStates.inProgress;
const hangman = new Hangman;
const wordsController = new WordsController();
let hintElement = document.querySelector('#hint .option__text--bold');
let secretWordElement = document.querySelector('.secret-word');
const maxIncorrectGuesses = 6;
const guessesController = new GuessesController(maxIncorrectGuesses);
let guessesCounter = document.querySelector('#incorrect-guesses .option__text--bold');
const keyboardController = new KeyboardController();
let keyboardElement = document.querySelector('.keyboard');

startTheGame();

function startTheGame() {
  hintElement = document.querySelector('#hint .option__text--bold');
  secretWordElement = document.querySelector('.secret-word');
  guessesCounter = document.querySelector('#incorrect-guesses .option__text--bold');
  keyboardElement = document.querySelector('.keyboard');
  hangman.drawGallows();
  for (let i = 0; i < wordsController.currentWord.word.length; i += 1) {
    const letterElement = document.createElement('p');
    letterElement.classList.add('secret-word__letter');
    secretWordElement.append(letterElement);
  }
  hintElement.innerText = wordsController.currentWord.hint;
  console.log(`Word to guess: ${wordsController.currentWord.word}`);

  for (let i = 0; i < keyboardController.letters.length; i += 1) {
    const keyElement = document.createElement('button');
    keyElement.classList.add('keyboard__key');
    keyElement.innerText = keyboardController.letters[i];
    keyElement.setAttribute('data-id', i);
    keyElement.addEventListener('click', onKeyClicked);
    keyboardElement.append(keyElement);
  }
}

function setNewGame() {
  currentGameState = gameStates.inProgress;
  buildBasicLayout();
  hangman.setNewGame();
  wordsController.setNewGame();
  guessesController.setNewGame(maxIncorrectGuesses);
  startTheGame();
}

function openModalWindow() {
  document.body.classList.add('page--modal');
  document.querySelector('.main').insertAdjacentElement("afterend", modalLayout());
  document.querySelector('.modal-window__conclusion').innerText =
   currentGameState === gameStates.lose ?'You lost the game' : 'You won the game!';
  document.querySelector('.modal-window__guessed-word').innerText = wordsController.currentWord.word;
  document.querySelector('.modal-window__button').addEventListener('click', setNewGame);
}

function onKeyClicked(e) {
  if (currentGameState !== gameStates.inProgress) {
    return;
  }
  e.currentTarget.disabled = true;
  const keyId = e.currentTarget.getAttribute('data-id');
  const keyValue = keyboardController.getLetterById(keyId);
  const keyIndexInWord = wordsController.findLetterInWord(keyValue);
  if (keyIndexInWord.length === 0) {
    handleWrongAnswer();
  } else {
    handleCorrectAnswer(keyValue, keyIndexInWord);
  }
}

function checkWin() {
  for (let i = 0; i < secretWordElement.children.length; i += 1) {
    if (secretWordElement.children[i].innerText === '') {
      return false;
    }
  }
  return true;
}

function handleWrongAnswer() {
  guessesController.updateMistakes();
  guessesCounter.innerText =
   `${guessesController.currentMistakes} / ${maxIncorrectGuesses}`;
  hangman.drawPart();
  if (!guessesController.hasAttempts()) {
    currentGameState = gameStates.lose;
    openModalWindow();
  }
}

function handleCorrectAnswer(keyValue, keyIndexInWord) {
  for (let ind of keyIndexInWord) {
    secretWordElement.children[ind].innerText = keyValue;
    secretWordElement.children[ind].classList.add('secret-word__letter--open');
  }
  if (checkWin()) {
    currentGameState = gameStates.win;
    openModalWindow();
  }
}

document.addEventListener('keydown', (event) => {
  if (currentGameState !== gameStates.inProgress || event.repeat) {
    return;
  }
  const keyValue = keyboardController.getLetterByKey(event.code);
  if (keyValue !== '') {
    for (let keyElement of keyboardElement.children) {
      if (keyboardController.getLetterById(keyElement.getAttribute('data-id')) === keyValue) {
        if (keyElement.disabled) {
          return;
        }
        keyElement.disabled = true;
      }
    }
    const keyIndexInWord = wordsController.findLetterInWord(keyValue);
    if (keyIndexInWord.length === 0) {
      handleWrongAnswer();
    } else {
      handleCorrectAnswer(keyValue, keyIndexInWord);
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (currentGameState === gameStates.inProgress || event.repeat) {
    return;
  }
  if (event.code === 'Enter') {
    setNewGame();
  }
});
