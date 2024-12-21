//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const charNum = (letter) => {
	return letter.charCodeAt(0) - "A".charCodeAt(0);
};

const row = (letter, maxLength) => {
	let str =
		letter === "A"
			? "A"
			: letter + " ".repeat((charNum(letter) - 1) * 2 + 1) + letter;

	return (letter === "A"
    ? "A"
    : letter + " ".repeat((charNum(letter) - 1) * 2 + 1) + letter)
		.padStart(maxLength - (maxLength - str.length) / 2, " ")
		.padEnd(maxLength, " ");
};

export const rows = (letter) => {
	const maxLength = charNum(letter) * 2 + 1;

	const result = [];

	for (let i = 0; i < maxLength / 2; i++) {
		result.push(row(String.fromCharCode(i + "A".charCodeAt(0)), maxLength));
	}

	for (let i = Math.floor(maxLength / 2 - 1); i >= 0; i--) {
		result.push(row(String.fromCharCode(i + "A".charCodeAt(0)), maxLength));
	}

	return result;
};
