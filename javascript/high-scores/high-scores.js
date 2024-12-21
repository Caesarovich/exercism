//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
	#scores = [];

	constructor(scores) {
		this.#scores = scores;
	}

	get scores() {
		return this.#scores;
	}

	get latest() {
		return this.#scores.at(-1);
	}

	get personalBest() {
		return this.#scores.toSorted((a, b) => b - a).at(0);
	}

	get personalTopThree() {
		return this.#scores.toSorted((a, b) => b - a).slice(0, 3);
	}
}
