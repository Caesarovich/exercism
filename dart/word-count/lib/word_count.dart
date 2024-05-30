class WordCount {
  RegExp nonAlpha = RegExp(r"[^a-zA-Z0-9'\s]");
  RegExp leadingTrailingApostrophes = RegExp(r"\b'\b|\b'\b");

  // Put your code here
  Map<String, int> countWords(String subtitles) {
    subtitles = subtitles.toLowerCase();
    // subtitles = subtitles.replaceAll(nonAlpha, '');
    // subtitles = subtitles.replaceAll(leadingTrailingApostrophes, '');

    final words = subtitles.split(RegExp(r"[^\w'\w]"));

    print(subtitles);
    print(words);

    final wordCount = <String, int>{};

    for (var word in words) {
      if (wordCount.containsKey(word)) {
        wordCount[word] = wordCount[word]! + 1;
      } else {
        wordCount[word] = 1;
      }
    }

    return wordCount;
  }
}
