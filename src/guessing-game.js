class GuessingGame {
    constructor(
      memo = undefined,
      target = undefined,
    ) {}

    setRange(min, max) {
      this.memo = Array.from({ length: max - min }, (_, idx) => min + idx);
    }

    guess() {
      this.target = this.memo[Math.round(this.memo.length / 2)]

      return this.target;
    }

    lower() {
      this.memo = this.memo.slice(0, this.memo.indexOf(this.target))
    }

    greater() {
      this.memo = this.memo.slice(this.memo.indexOf(this.target))
    }
}

module.exports = GuessingGame;
