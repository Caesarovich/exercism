//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BRACKET_PAIRS = {
	"(": ")",
	"{": "}",
	"[": "]",
};

function isOpening(bracket) {
	return Object.keys(BRACKET_PAIRS).includes(bracket);
}

function isClosing(bracket) {
	return Object.values(BRACKET_PAIRS).includes(bracket);
}

function isMatching(a, b) {
	return BRACKET_PAIRS[a] === b;
}

export const isPaired = (text) => {
	const brackets = [];

	for (let i = 0; i < text.length; i++) {
		if (isOpening(text[i])) {
			brackets.push(text[i]);
		} else if (isClosing(text[i])) {
			if (isMatching(brackets.at(-1), text[i])) {
				brackets.pop();
			} else {
				return false;
			}
		}
	}

	return brackets.length === 0;
};
