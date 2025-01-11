//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const isNumRegex = new RegExp(/[0-9]/gi);
const isLetterRegex = new RegExp(/[a-zA-Z]/gi);
const isPunctuationRegex = new RegExp(/[!]/gi)

const araeCodeRegex = new RegExp(/\((.*?)\)/gi)
const exchangeCodeRegex = new RegExp(/(\d{3})-\d{4}/gi)

export const clean = (number) => {
  if (Array.from(number).some((x) => x.match(isLetterRegex))) throw new Error('Letters not permitted');
  if (Array.from(number).some((x) => x.match(isPunctuationRegex))) throw new Error('Punctuations not permitted')

  const [areaCode] = number.match(araeCodeRegex) ?? [""];

  if (areaCode[1] === "0") throw new Error('Area code cannot start with zero');
  if (areaCode[1] === "1") throw new Error('Area code cannot start with one');

  const [exchangeCode] = number.match(exchangeCodeRegex) ?? [""];

  if (exchangeCode[0] === "0") throw new Error('Exchange code cannot start with zero');
  if (exchangeCode[0] === "1") throw new Error('Exchange code cannot start with one');

  let digits = Array.from(number).filter((x) => x.match(isNumRegex)).join('')

  if (digits.length <= 9) throw new Error('Incorrect number of digits');
  if (digits.length > 11) throw new Error('More than 11 digits');

  if (digits.length === 11) {
    if (digits[0] !== "1") throw new Error('11 digits must start with 1');
    digits = digits.slice(1);
  }
  
  return digits;
};
