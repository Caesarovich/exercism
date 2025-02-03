//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * @param {string[]} rows 
 */
export const transpose = (rows) => {
  const grid = rows.map(r => ([...r]))
  const output = [];

  let greatestLength = grid.reduce((max, cur) => Math.max(max, cur.length), 0);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < greatestLength; j++) {
      if (!output[j]) {
        output[j] = [];
      }

      // I got lazy about the "pad to the left, not right" stuff
      // So now I just use the Substitute charater for real spaces
      // That way I can just .trimEnd() later and replace it with actual spaces

      let char = grid[i][j];
      if (char === ' ') char = '\u001A';
      if (!char) char = ' ';
      output[j][i] = char;
    }
  }

  return output.map(v => (v.join('').trimEnd().replaceAll('\u001A', ' ')));
};
