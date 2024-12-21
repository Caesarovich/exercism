//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { _ } from "core-js";

/// Normal one
// export class Series {
//   constructor(series) {
//     if (series.length === 0) throw new Error('series cannot be empty');
//     this.series = series;
//   }

//   slices(sliceLength) {
//     if (sliceLength < 0) throw new Error('slice length cannot be negative');
//     if (sliceLength === 0) throw new Error('slice length cannot be zero');
//     if (this.series.length < sliceLength) throw new Error('slice length cannot be greater than series length');

//     const slices = [];

//     for (let i = 0; i + sliceLength <= this.series.length; i++) {
//       slices.push(this.series.slice(i, i + sliceLength).split('').map(Number));
//     }

//     return slices;
//   }
// }

/// Functional way
export class Series {
	constructor(series) {
		if (series.length === 0) throw new Error("series cannot be empty");
		this.series = series;
	}

	slices(sliceLength) {
		if (sliceLength < 0) throw new Error("slice length cannot be negative");
		if (sliceLength === 0) throw new Error("slice length cannot be zero");
		if (this.series.length < sliceLength)
			throw new Error("slice length cannot be greater than series length");

		return Array.from(
			{ length: this.series.length - sliceLength + 1 },
			(_, i) =>
				this.series
					.slice(i, i + sliceLength)
					.split("")
					.map(Number),
		);
	}
}
