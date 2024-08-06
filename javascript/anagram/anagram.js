//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function isAnagram(target, candidate) {
  target = target.toLowerCase();
  candidate = candidate.toLowerCase();

  if (target === candidate) return false;

  const candidateChars = [...candidate];

  for (const char of [...target]) {
    if (candidateChars.indexOf(char) >= 0)
      candidateChars.splice(candidateChars.indexOf(char), 1);
    else return false;
  }

  return candidateChars.length === 0;
}

export const findAnagrams = (target, candidates) => {
  const anagrams = [];

  for (const candidate of candidates) {
    if (isAnagram(target, candidate)) anagrams.push(candidate);
  }

  return anagrams;
};
