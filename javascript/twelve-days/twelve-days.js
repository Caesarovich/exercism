//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const sayings = [
  "a Partridge in a Pear Tree",
  "two Turtle Doves",
  "three French Hens",
  "four Calling Birds",
  "five Gold Rings",
  "six Geese-a-Laying",
  "seven Swans-a-Swimming",
  "eight Maids-a-Milking",
  "nine Ladies Dancing",
  "ten Lords-a-Leaping",
  "eleven Pipers Piping",
  "twelve Drummers Drumming"
];

const numbers = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth"
]

const makeVerse = (number) => {
  const gifts = sayings.slice(0, number).reverse();

  if (number === 1) {
    return `On the ${numbers[number - 1]} day of Christmas my true love gave to me: ${gifts.at(-1)}.`
  } else {
    const joinedGifts = gifts.slice(0 , -1).join(', ') + ', and ' + gifts.at(-1)

    return `On the ${numbers[number - 1]} day of Christmas my true love gave to me: ${joinedGifts}.`
  }
}

export const recite = (start, end) => {
  if (!end) {
    return makeVerse(start) + '\n'
  }

  const verses = []

  for (let i = start; i <= end; i++) {
    verses.push(makeVerse(i) + '\n')
  }

  return verses.join('\n')
};
