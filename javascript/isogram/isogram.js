//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (text) => {
  const reg = new RegExp(/[^a-z]/gi)
  text = text.toLowerCase().replace(reg, '')

  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (text[i] === text[j]) return false
    }
  }

  return true
};
