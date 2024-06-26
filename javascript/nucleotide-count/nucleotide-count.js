//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const nucleotideCount = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  [...strand].forEach((v) => {
    if (!nucleotideCount.hasOwnProperty(v))
      throw new Error('Invalid nucleotide in strand');
    else nucleotideCount[v]++;
  });

  const { A, C, G, T } = nucleotideCount;

  return `${A} ${C} ${G} ${T}`;
}
