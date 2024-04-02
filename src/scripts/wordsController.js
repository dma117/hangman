import { words } from './data.js';

export class WordsController {
  constructor() {
    this.words = JSON.parse(JSON.stringify(words));
    this.shuffle(this.words);
    this.gameInd = 0;
  }

  shuffle(array) {
    const getRandomInt = (min = 0, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
  
    const size = array.length;
    for (let i = 0; i < size - 1; i += 1) {
      const randomI = getRandomInt(i + 1, size);
      const tmp = array[i]; 
      array[i] = array[randomI];
      array[randomI] = tmp;
    }
    return array;
  }

  get currentWord() {
    return this.words[this.gameInd];
  }

  setNewGame() {
    if (this.gameInd === this.words.length - 1) {
      this.shuffle(this.words);
    } else {
      this.gameInd += 1;
    }
  }

  findLetterInWord(letter) {
    const indexes = [];
    for (let i = 0; i < this.currentWord.word.length; i += 1) {
      if (letter === this.currentWord.word[i].toUpperCase()) {
        indexes.push(i);
      }
    }
    return indexes;
  }
}