def is_pangram(sentence: str) -> bool:
    return len(set(filter(lambda x: x.isalpha(), sentence.lower()))) == 26
