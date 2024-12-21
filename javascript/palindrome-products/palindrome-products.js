//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EMPTY_RESULT = { value: null, factors: [] };

function generateSmallest(min, max) {
	const minLimit = min ** 2;
	const maxLimit = max ** 2;

	for (let i = minLimit; i <= maxLimit; i++) {
		if (isPalindrome(i)) {
			const factors = getFactors(i, min, max);

			if (factors.length > 0)
				return {
					value: i,
					factors: factors,
				};
		}
	}

	return EMPTY_RESULT;
}

function getFactors(num, min, max) {
	const factors = [];

	const maxLimit = Math.min(max, Math.sqrt(num));

	for (let i = min; i <= maxLimit; i++) {
		if (num % i === 0) {
			const f = num / i;
			if (min <= f && f <= max) factors.push([i, f]);
		}
	}

	return factors;
}

function generateLargest(min, max) {
	const minLimit = min ** 2;
	const maxLimit = max ** 2;

	for (let i = maxLimit; i >= minLimit; i--) {
		if (isPalindrome(i)) {
			const factors = getFactors(i, min, max);
			if (factors.length > 0)
				return {
					value: i,
					factors: factors,
				};
		}
	}

	return EMPTY_RESULT;
}

function isPalindrome(num) {
	return [...String(num)].toReversed().join("") === String(num);
}

export class Palindromes {
	static generate({ maxFactor, minFactor }) {
		if (maxFactor < minFactor) throw new Error("min must be <= max");

		const smallest = generateSmallest(minFactor, maxFactor);

		const largest = generateLargest(minFactor, maxFactor);

		return {
			smallest,
			largest,
		};
	}
}
