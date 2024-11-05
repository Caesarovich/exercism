const scoreValues = const <int, List<String>>{
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};

int score(String word) {
  return word
      .toUpperCase()
      .split('')
      .map((letter) => scoreValues.entries
          .firstWhere((element) => element.value.contains(letter))
          .key)
      .reduce((value, element) => value + element);
}
