//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const knapsack = (maximumWeight, items) => {
	items = items.map((i) => ({ ...i, g: i.value / i.weight }));

	items = items.sort((a, b) => b.g - a.g);

	console.log(items);

	let totalValue = 0;
	let totalWeight = 0;

	for (const item of items) {
		// console.log(totalValue, item.w, totalValue + item.value > maximumWeight);
		if (totalWeight + item.weight > maximumWeight) continue;
		totalValue += item.value;
		totalWeight += item.weight;
	}

	return totalValue;
};
