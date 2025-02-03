//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * @param {number[]} roll 
 * @param {number} value 
 */
function countSame(roll, value) {
  return roll.filter((v) => v === value).length;
}

/**
 * @param {[number, number, number, number, number]} roll 
 * @param {string} category
 */
export const score = (roll, category) => {
  console.log(roll, category)
  switch (category.toLowerCase()) {
    case "ones":
      return countSame(roll, 1);
    case "twos":
      return countSame(roll, 2) * 2;
    case "threes":
      return countSame(roll, 3) * 3;
    case "fours": 
      return countSame(roll, 4) * 4;
    case "fives":
      return countSame(roll, 5) * 5;
    case "sixes":
      return countSame(roll, 6) * 6;
    case "full house":
      {
      const a = roll.shift();
      roll = roll.filter((v) => v !== a);
      const b = roll.shift();
      if (countSame(roll, b) === 1 && roll.length === 0) return a * 3 + b * 2;
      if (countSame(roll, b) === 2) return a * 2 + b * 3;
      break; }
    case "four of a kind":
      while (roll.length >= 4) {
        const dice = roll.shift();
        if (countSame(roll, dice) >= 3) return dice * 4;
      }
      break; 
    case "little straight":
      if (roll.toSorted().every((a, i) => a === [1, 2, 3, 4, 5][i])) return 30
      break;
    case "big straight":
      if (roll.toSorted().every((a, i) => a === [2, 3, 4, 5, 6][i])) return 30
      break;
    case "choice":
      return roll.reduce((a,b) => a + b);
    case "yacht":
      if (countSame(roll, roll[0]) === 5) return 50;
      break
  }

  return 0;
};
