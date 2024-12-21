//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
	phrase = phrase.toLowerCase();

	const filterRegex = /[^\w']/gi;

	phrase = phrase.replace(filterRegex, " ");

	const apostropheFilterRegex =
		/(?<!\w)\'(?!\w)|(?<=\w)\'(?!\w)|(?<!\w)\'(?=\w)/gi;

	phrase = phrase.replace(apostropheFilterRegex, " ");

	return phrase
		.split(" ")
		.filter(Boolean)
		.reduce((acc, cur) => ({ ...acc, [cur]: ~~acc[cur] + 1 }), {});
};
