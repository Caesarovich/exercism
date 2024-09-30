//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  values;

  constructor(initial = []) {
    this.values = initial;
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(listOfLists) {
    let newList = this;

    for (let i = 0; i < listOfLists.length(); i++) {
      newList = newList.append(listOfLists.values[i]);
    }

    return newList;
  }

  filter(predicate) {
    let newList = new List();

    for (let i = 0; i < this.length(); i++) {
      if (predicate(this.values[i]))
        newList = newList.append(new List([this.values[i]]));
    }

    return newList;
  }

  map(modifier) {
    let newList = new List();

    for (let i = 0; i < this.length(); i++) {
      newList.values[i] = modifier(this.values[i]);
    }

    return newList;
  }

  length() {
    let count = -1;

    while (this.values[++count] !== undefined);

    return count;
  }

  foldl(fn, initial) {
    let acc = initial;

    for (let i = 0; i < this.length(); i++) {
      acc = fn(acc, this.values[i]);
    }

    return acc;
  }

  foldr(fn, initial) {
    let acc = initial;

    for (let i = this.length() - 1; i >= 0; i--) {
      acc = fn(acc, this.values[i]);
    }

    return acc;
  }

  reverse() {
    let newList = new List();

    for (let i = this.length() - 1, j = 0; i >= 0; i--, j++) {
      newList.values[j] = this.values[i];
    }

    return newList;
  }
}
