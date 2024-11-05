//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const minutesInADay = 24 * 60;

export class Clock {
  #hours = 0;
  #minutes = 0;

  constructor(hours = 0, minutes = 0) {
    this.plus(minutes + hours * 60);
  }

  toString() {
    return `${this.#hours.toString().padStart(2, '0')}:${this.#minutes
      .toString()
      .padStart(2, '0')}`;
  }

  plus(addedMinutes) {
    let totalMinutes = addedMinutes + this.#minutes + this.#hours * 60;

    if (totalMinutes < 0) {
      totalMinutes +=
        minutesInADay * Math.ceil(Math.abs(totalMinutes) / minutesInADay);
    }

    this.#minutes = totalMinutes % 60;
    this.#hours = Math.floor(totalMinutes / 60) % 24;

    return this;
  }

  minus(removedMinutes) {
    return this.plus(-removedMinutes);
  }

  equals(clock) {
    return this.#hours === clock.#hours && this.#minutes === clock.#minutes;
  }
}
