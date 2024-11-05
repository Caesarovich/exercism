//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const doubleDigit = (digit) => (digit * 2 > 9 ? digit * 2 - 9 : digit * 2);

const invalidRegex = /[^\s\d]/gi;

export const valid = (card) => {
  if (invalidRegex.test(card)) return false;

  let digits = [...card]
    .filter((n) => !isNaN(parseInt(n)))
    .reverse()
    .map(Number);

  if (digits.length <= 1) return false;

  digits = digits.map((v, i) => (i % 2 === 0 ? v : doubleDigit(v)));

  return digits.reduce((acc, cur) => acc + cur) % 10 === 0;
};
