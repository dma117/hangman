import { keys } from './keys.js';

export class KeyboardController {
  constructor() {
    this.keys = JSON.parse(JSON.stringify(keys));
  }

  get letters() {
    return Object.values(this.keys);
  }

  getLetterById(id) {
    return Object.values(this.keys)[id];
  }

  hasLetter(letter) {
    for (let char of Object.values(this.keys)) {
      if (char === letter) {
        return true;
      }
    }
    return false;
  }

  getLetterByKey(key) {
    for (let gameKey of Object.keys(this.keys)) {
      if (gameKey === key) {
        return this.keys[gameKey];
      }
    }
    return '';
  }
}