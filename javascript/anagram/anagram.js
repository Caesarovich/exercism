//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Now let's do it functionnal way :)

export const findAnagrams = (target, candidates) => {
  return candidates
    .filter((c) => c.toLowerCase() !== target.toLowerCase())
    .filter(
      (c) =>
        [...c.toLowerCase()].sort().join() ===
        [...target.toLowerCase()].sort().join()
    );
};
