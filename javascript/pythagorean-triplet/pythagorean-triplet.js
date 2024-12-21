//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor, maxFactor, sum }) {
	const list = [];

	const min = minFactor ?? 1;
	const max = maxFactor ?? sum;

	for (let b = min; b < max; b++) {
		for (let a = minFactor ?? 1; a < b; a++) {
			const c = Math.sqrt(a ** 2 + b ** 2);

			if (c > max || a + b + c > sum) {
				break;
			}
			if (a + b + c === sum) {
				list.unshift(new Triplet(a, b, c));
			}
		}
	}

	return list;
}

class Triplet {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	toArray() {
		return [this.a, this.b, this.c];
	}
}
