def is_valid(isbn: str) -> bool:
    isbn = isbn.strip().upper().replace("-", "")
    if len(isbn) != 10:
        return False
    check_char = isbn[-1]
    if not check_char.isdigit() and not check_char == "X":
        return False
    check_value = 10 if check_char == "X" else int(check_char)
    chars = isbn[:-1]
    if not chars.isdigit():
        return False
    values = [*map(int, chars), check_value]

    total = sum([v * (10 - i) for i, v in enumerate(values)])

    return total % 11 == 0
