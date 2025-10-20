// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
	#name;

	get name() {
		return this.#name;
	}

	constructor() {
		this.reset();
	}

	reset() {
		this.#name = this.generateName();
	}

	generateName() {
		let name;

		do {
			name = randomName();
		} while (usedNames.has(name));

		usedNames.add(name);

		return name;
	}
}

const usedNames = new Set();

Robot.releaseNames = () => {
	usedNames.clear();
};

function randomDigit() {
	return Math.floor(Math.random() * 10).toString();
}

function randomLetter() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomName() {
	return (
		randomLetter() +
		randomLetter() +
		randomDigit() +
		randomDigit() +
		randomDigit()
	);
}
