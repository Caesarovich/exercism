from math import log10, floor


def is_armstrong_number(number: int) -> bool:
    if (number == 0):
        return True
    digit_count = floor(log10(number)) + 1
    total = sum(
        map(
            lambda i: ((number // 10**i) % 10) ** digit_count,
            range(digit_count)
        )
    )
    return total == number
