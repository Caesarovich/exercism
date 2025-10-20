//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DAYS_OF_WEEK = [
	"sunday",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
];

const toDayOfWeek = (day) => DAYS_OF_WEEK.indexOf(day.toLowerCase());

const isTeenthDay = (day) => day >= 13 && day <= 19;

export const meetup = (year, month, week, day) => {
	const dayOfWeek = toDayOfWeek(day);

	let occurence = 0;
	for (let i = 1; i <= 31; i++) {
		const date = new Date(year, month - 1, i);

		if (date.getDay() === dayOfWeek) {
			occurence++;

			if (occurence === 1 && week === "first") return date;
			if (occurence === 2 && week === "second") return date;
			if (occurence === 3 && week === "third") return date;
			if (occurence === 4 && week === "fourth") return date;
			if (
				new Date(year, month - 1, i + 7).getMonth() !== month - 1 &&
				week === "last"
			)
				return date;
			if (isTeenthDay(date.getDate()) && week === "teenth") return date;
		}
	}
};
