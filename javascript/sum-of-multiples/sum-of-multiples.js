//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function findMultiples(base, max) {
	if (base === 0) return [0];

	const multiples = [];

	for (let i = base; i < max; i += base) {
		multiples.push(i);
	}

	return multiples;
}

export const sum = (itemsBaseValues, level) => {
	const uniqueMultiples = new Set();

	itemsBaseValues.forEach((base) => {
		findMultiples(base, level).forEach((a) => uniqueMultiples.add(a));
	});

	return Array.from(uniqueMultiples).reduce((acc, cur) => acc + cur, 0);
};
