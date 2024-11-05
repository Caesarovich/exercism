//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.num = num;
  }

  get sumOfSquares() {
    return (this.num * (this.num + 1) * (2 * this.num + 1)) / 6;
  }

  get squareOfSum() {
    return ((this.num / 2) * (this.num + 1)) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
