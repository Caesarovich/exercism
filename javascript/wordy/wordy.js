//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const validOperationRegExp = new RegExp(
  /^plus$|^minus$|^multiplied$|^divided$/i
);

const isValidOperation = (op) => validOperationRegExp.test(op);

export const answer = (phrase) => {
  if (!phrase.startsWith('What is') || !phrase.endsWith('?'))
    throw new Error('Unknown operation');

  // Remove "What is" and "?"
  phrase = phrase.slice(8, -1);

  // Replace two words operation by one word
  phrase = phrase.replace(/(multiplied|divided) by/gi, (m) => m.slice(0, -3));

  const words = phrase.split(' ');

  let result = parseInt(words.shift());

  if (isNaN(result)) throw new Error('Syntax error');

  while (words.length > 0) {
    const op = words.shift();
    const num = parseInt(words.shift());

    if (!op || !isValidOperation(op)) {
      if (isNaN(op)) throw new Error('Unknown operation');
      else throw new Error('Syntax error');
    }

    if (isNaN(num)) throw new Error('Syntax error');

    if (op === 'plus') result += num;
    if (op === 'minus') result -= num;
    if (op === 'multiplied') result *= num;
    if (op === 'divided') result /= num;
  }

  return result;
};
