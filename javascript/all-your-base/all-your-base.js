//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (digits, baseFrom, baseTo) => {
	if (baseFrom <= 1) throw new Error("Wrong input base");
	if (baseTo <= 1) throw new Error("Wrong output base");

	if ((digits[0] === 0 && digits.length > 1) || digits.length === 0)
		throw new Error("Input has wrong format");

	let number = 0;

	for (let i = 0; i < digits.length; i++) {
		if (digits[i] >= baseFrom || digits[i] < 0)
			throw new Error("Input has wrong format");

		number += digits[i] * baseFrom ** (digits.length - i - 1);
	}

	const newDigits = [];

	do {
		newDigits.unshift(number % baseTo);
		number = Math.floor(number / baseTo);
	} while (number > 0);

	return newDigits;
};
