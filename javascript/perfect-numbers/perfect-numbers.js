//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (n) => {
	if (n <= 0)
		throw new Error("Classification is only possible for natural numbers.");

	let sum = 0;

	for (let i = 1; i <= n / 2; i++) if (n % i === 0) sum += i;

	if (sum > n) return "abundant";
	if (sum < n) return "deficient";
	return "perfect";
};
