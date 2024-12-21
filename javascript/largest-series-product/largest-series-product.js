//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isOnlyNumbers = (text) => {
	const reg = new RegExp(/^\d+$/gi);
	return reg.test(text);
};

const getSeries = (input, span) => {
	if (span <= 0) throw new Error("Span must be greater than zero");
	if (span > input.length)
		throw new Error("Span must be smaller than string length");
	if (!isOnlyNumbers(input))
		throw new Error("Digits input must only contain digits");

	return Array.from({ length: input.length - span + 1 }, (_, i) =>
		input
			.slice(i, i + span)
			.split("")
			.map(Number),
	);
};

export const largestProduct = (input, span) => {
	return getSeries(input, span)
		.map((s) => s.reduce((acc, v) => acc * v, 1))
		.sort((a, b) => b - a)
		.at(0);
};
