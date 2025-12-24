ALPHABET = set("abcdefghijklmnopqrstuvwxyz")
VOWELS = set("aeiou")
CONSONANTS = ALPHABET.difference(VOWELS)


def translate_word(word: str) -> str:
    if word.startswith(("xr", "yt", *VOWELS)):
        word += "ay"
    elif word.startswith(("qu", *CONSONANTS)):
        i = 0
        while (i < len(word) and word[i] in CONSONANTS):
            if i > 0 and word[i] == "y":
                break
            if word[i: i + 2] == "qu":
                i += 2
                break
            i += 1
        return word[i:] + word[:i] + "ay"
    return word


def translate(text: str) -> str:
    return " ".join(map(translate_word, text.split(" ")))
