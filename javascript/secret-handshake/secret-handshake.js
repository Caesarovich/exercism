//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (secret) => {
  const bitField = secret.toString(2).padStart(5, '0');

  const operations = [];

  if (bitField.at(4) === '1') operations.push('wink');
  if (bitField.at(3) === '1') operations.push('double blink');
  if (bitField.at(2) === '1') operations.push('close your eyes');
  if (bitField.at(1) === '1') operations.push('jump');
  if (bitField.at(0) === '1') operations.reverse();

  return operations;
};
