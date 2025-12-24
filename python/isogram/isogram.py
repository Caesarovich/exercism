def is_isogram(string: str) -> bool:
    only_letters = list(filter(lambda x: x.isalpha(), string.lower()))
    return len(only_letters) == len(set(only_letters))
