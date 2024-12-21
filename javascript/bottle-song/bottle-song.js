//
// This is only a SKELETON file for the 'Bottle Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const numbers = [
	"No",
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
];

const verse = (num) => {
	return [
		`${numbers[num]} green bottle${num > 1 ? "s" : ""} hanging on the wall,`,
		`${numbers[num]} green bottle${num > 1 ? "s" : ""} hanging on the wall,`,
		`And if one green bottle should accidentally fall,`,
		`There'll be ${numbers[num - 1].toLowerCase()} green bottle${(num - 1) != 1 ? "s" : ""} hanging on the wall.`,
	];
};

export const recite = (initialBottlesCount, takeDownCount) => {
	const verses = [];

	for (
		let i = initialBottlesCount;
		i > initialBottlesCount - takeDownCount;
		i--
	) {
		verses.push(verse(i));
	}

	return verses.flatMap((val, index) =>
		index === verses.length - 1 ? val : val.concat(""),
	);
};
