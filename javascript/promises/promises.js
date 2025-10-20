//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (fn) =>
	fn((error, data) => {
		return new Promise((res, rej) => {
			if (error) rej(error);
			else res(data);
		});
	});

export const all = (promises) => {
	return new Promise((res, rej) => {
		const finishedPromises = [];

		for (const promiseIdx in promises) {
			promises[promiseIdx]
				.then((data) => {
					finishedPromises[promiseIdx] = data;

					if (
						finishedPromises.length === promises.length &&
						!finishedPromises.includes(undefined)
					)
						res(finishedPromises);
				})
				.catch((err) => rej(err));
		}
	});
};

export const allSettled = () => {
	throw new Error("Remove this statement and implement this function");
};

export const race = (promises) => {
	return new Promise((res, rej) => {
		for (const promise of promises) {
			promise
				.then((data) => {
					res(data);
				})
				.catch((err) => {
					rej(err);
				});
		}
	});
};

export const any = () => {
	throw new Error("Remove this statement and implement this function");
};
