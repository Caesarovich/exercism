//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
	constructor(...sides) {
		this.sides = sides;
	}

	get isZero() {
		return this.sides.find((s) => s !== 0) == null;
	}

	get isInequal() {
		return (
			this.sides.find(
				(v, i) => v + this.sides[(i + 1) % 3] < this.sides[(i + 2) % 3],
			) !== undefined
		);
	}

	get isInvalid() {
		return this.isInequal || this.isZero;
	}

	get isEquilateral() {
		for (const side of this.sides) {
			if (this.sides.find((s) => s !== side)) return false;
		}
		return true && !this.isInvalid;
	}

	get isIsosceles() {
		for (const side of this.sides) {
			if (this.sides.reduce((acc, cur) => acc + Number(cur === side), 0) >= 2)
				return true && !this.isInvalid;
		}
		return false;
	}

	get isScalene() {
		return (
			this.sides.find((v, i) => v === this.sides[(i + 1) % 3]) === undefined &&
			!this.isInvalid
		);
	}
}
