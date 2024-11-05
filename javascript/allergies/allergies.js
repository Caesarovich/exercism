//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  #allergies = []

  constructor(allergies) {
    let allergiesBitMap = allergies.toString(2).split('').toReversed().join('');

    if (allergiesBitMap[0] === '1') this.#allergies.push('eggs');
    if (allergiesBitMap[1] === '1') this.#allergies.push('peanuts');
    if (allergiesBitMap[2] === '1') this.#allergies.push('shellfish');
    if (allergiesBitMap[3] === '1') this.#allergies.push('strawberries');
    if (allergiesBitMap[4] === '1') this.#allergies.push('tomatoes');
    if (allergiesBitMap[5] === '1') this.#allergies.push('chocolate');
    if (allergiesBitMap[6] === '1') this.#allergies.push('pollen');
    if (allergiesBitMap[7] === '1') this.#allergies.push('cats');
  }

  list() {
    return this.#allergies
  }

  allergicTo(allergen) {
    return this.#allergies.includes(allergen)
  }
}
