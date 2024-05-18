class HighScores {
  // Put your code here
  List<int> scores = [];

  HighScores(List<int> this.scores);

  int latest() => scores.last;

  List<int> sortedScore() => scores.toList()..sort();

  int personalBest() => sortedScore().last;

  List<int> personalTopThree() => sortedScore().reversed.take(3).toList();
}
