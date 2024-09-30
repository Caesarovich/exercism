//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(x) {
    return new ComplexNumber(this.real + x.real, this.imag + x.imag);
  }

  sub(x) {
    return new ComplexNumber(this.real - x.real, this.imag - x.imag);
  }

  div(x) {
    return new ComplexNumber(
      (this.real * x.real + this.imag * x.imag) / (x.real ** 2 + x.imag ** 2),
      (this.imag * x.real - this.real * x.imag) / (x.real ** 2 + x.imag ** 2)
    );
  }

  mul(x) {
    return new ComplexNumber(
      this.real * x.real - this.imag * x.imag,
      this.imag * x.real + this.real * x.imag
    );
  }

  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  get conj() {
    const imag = Object.is(this.imag, 0) ? 0 : -this.imag;
    return new ComplexNumber(this.real, imag);
  }

  get exp() {
    return new ComplexNumber(
      Math.exp(this.real) * Math.cos(this.imag),
      Math.exp(this.real) * Math.sin(this.imag)
    );
  }
}
