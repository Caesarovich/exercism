//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	add(r) {
		const a1 = this.a;
		const b1 = this.b;
		const a2 = r.a;
		const b2 = r.b;

		console.log(a1, b1, a2, b2);
		return new Rational(a1 * b2 + b1 * a2, b1 * b2);
	}

	sub() {
		throw new Error("Remove this statement and implement this function");
	}

	mul(r) {
		const a1 = this.a;
		const b1 = this.b;
		const a2 = r.a;
		const b2 = r.b;

		return new Rational(a1 * a2, b1 * b2);
	}

	div() {
		throw new Error("Remove this statement and implement this function");
	}

	abs() {
		throw new Error("Remove this statement and implement this function");
	}

	exprational() {
		throw new Error("Remove this statement and implement this function");
	}

	expreal() {
		throw new Error("Remove this statement and implement this function");
	}

	reduce() {
		throw new Error("Remove this statement and implement this function");
	}
}
