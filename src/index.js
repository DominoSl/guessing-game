class GuessingGame {
  setRange(min, max) {
    this.memo = Array.from({ length: max - min }, (_, i) => min + i);
  }

  guess() {
    this.target = this.memo[Math.round(this.memo.length / 2)];

    return this.target;
  }

  lower() {
    const targetIndex = this.memo.indexOf(this.target);

    this.memo = this.memo.slice(0, targetIndex);
  }

  greater() {
    const targetIndex = this.memo.indexOf(this.target);

    this.memo = this.memo.slice(targetIndex);
  }
}

module.exports = GuessingGame;
