//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorValues = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white",
];

function colorToValue(col) {
	const index = colorValues.indexOf(col);

	if (index === -1) throw new Error(/invalid color/);

	return index;
}

function toUnit(num) {
	if (num >= 1000) return "kiloohms";
	return "ohms";
}

export class ResistorColorTrio {
	constructor([first, second, exp]) {
		this.value = colorToValue(first) * 10 + colorToValue(second);

		this.value *= 10 ** colorToValue(exp);

		this.unit = toUnit(this.value);

		if (this.unit === "kiloohms") this.value /= 1000;
	}

	get label() {
		return `Resistor value: ${this.value} ${this.unit}`;
	}
}
