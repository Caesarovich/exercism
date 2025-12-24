from typing import Literal

COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
]

METRIC_PREFIXES = [
    "",
    "kilo",
    "mega",
    "giga"
]


def label(colors: list[str]) -> str:
    val = value(colors)
    exponent = color_code(colors[2])

    total = val * 10 ** exponent

    zeroes = 0
    while total > 999:
        if total % 1000 == 0:
            zeroes += 3
        total /= 1000
    
    prefix = METRIC_PREFIXES[zeroes // 3]
    return str(int(total)) + " " + prefix + "ohms"


def value(colors: list[str]) -> int:
    total = 0
    for color in colors[:2]:
        total = total * 10 + color_code(color)
    return total


def color_code(color: str) -> int:
    return COLORS.index(color)
