def rotate_char(char: str, key: int) -> str:
    if not char.isalpha():
        return char

    floor_char = "a" if char.islower() else "A"
    letter_number = ord(char[0]) - ord(floor_char)
    letter_number = (letter_number + key) % 26
    return chr(ord(floor_char) + letter_number)


def rotate(text: str, key: int) -> str:
    return "".join(map(lambda c: rotate_char(c, key), text))
