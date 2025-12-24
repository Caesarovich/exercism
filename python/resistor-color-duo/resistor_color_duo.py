def value(colors: list[str]) -> int:
    total = 0
    for color in colors[:2]:
        total = total * 10 + color_code(color)
    return total


def color_code(color: str) -> int:
    return colors().index(color)


def colors():
    return [
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
