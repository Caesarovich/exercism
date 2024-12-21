//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const LETTER_SCORES = {
	1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
	2: ["D", "G"],
	3: ["B", "C", "M", "P"],
	4: ["F", "H", "V", "W", "Y"],
	5: ["K"],
	8: ["J", "X"],
	10: ["Q", "Z"],
};

export const score = (word) => {
	word = word.toUpperCase();

	let totalPoints = 0;

	for (const letter of [...word]) {
		for (const [points, letters] of Object.entries(LETTER_SCORES)) {
			if (letters.includes(letter)) {
				totalPoints += Number.parseInt(points);
				break;
			}
		}
	}

	return totalPoints;
};
