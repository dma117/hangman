export class GuessesController {
  constructor(maxMistakes) {
    this.mistakes = 0;
    this.maxMistakes = maxMistakes;
  }

  set currentMistakes(count) {
    this.mistakes = count;
  }

  get currentMistakes() {
    return this.mistakes;
  }

  updateMistakes() {
    this.mistakes += 1;
  }

  hasAttempts() {
    return this.mistakes < this.maxMistakes;
  }

  setNewGame(maxMistakes) {
    this.mistakes = 0;
    this.maxMistakes = maxMistakes;
  }
}