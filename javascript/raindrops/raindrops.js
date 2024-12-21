//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
	let result = "";

	if (num % 3 === 0) result += "Pling";
	if (num % 5 === 0) result += "Plang";
	if (num % 7 === 0) result += "Plong";

	return result || num.toString();
};
