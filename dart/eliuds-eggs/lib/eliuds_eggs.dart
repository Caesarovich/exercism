class EggCounter {
  count(int coop) {
    return coop.toRadixString(2).split('').map((e) => int.parse(e)).reduce((value, element) => value + element);
  }
}
