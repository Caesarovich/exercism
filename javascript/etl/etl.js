//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
	const newScores = {};

	for (const [score, letters] of Object.entries(old)) {
		letters.forEach((l) => {
			newScores[l.toLowerCase()] = Number.parseInt(score);
		});
	}

	return newScores;
};
