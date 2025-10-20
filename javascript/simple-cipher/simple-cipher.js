//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
	#key = "ddddddddddddddddd";

	constructor(key) {
		if (key) this.#key = key;
	}

	shift(char, idx) {
		const keyValue = this.#key.charCodeAt(idx % this.#key.length) - 97;
		const charValue = char.charCodeAt(0) - 97;

		return String.fromCharCode(((charValue + keyValue) % 26) + 97);
	}

	unshift(char, idx) {
		const keyValue = this.#key.charCodeAt(idx % this.#key.length) - 97;
		const charValue = char.charCodeAt(0) - 97;

		let shift = charValue - keyValue;

		if (shift < 0) {
			shift += 26;
		}

		return String.fromCharCode(shift + 97);
	}

	encode(text) {
		const encodedChars = [];

		for (let i = 0; i < text.length; i++) {
			encodedChars.push(this.shift(text[i], i));
		}

		return encodedChars.join("");
	}

	decode(text) {
		const decodedChars = [];

		for (let i = 0; i < text.length; i++) {
			decodedChars.push(this.unshift(text[i], i));
		}

		return decodedChars.join("");
	}

	get key() {
		return this.#key;
	}
}
