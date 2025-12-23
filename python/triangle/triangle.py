from typing import Callable


def valid_triangle(f: Callable[[list[int]], bool]):
    def inner(sides: list[int]) -> bool:
        if sum(sides) <= 2 * max(sides):
            return False
        return f(sides)
    return inner


@valid_triangle
def equilateral(sides: list[int]) -> bool:
    return len(set(sides)) == 1


@valid_triangle
def isosceles(sides: list[int]) -> bool:
    return len(set(sides)) < 3


@valid_triangle
def scalene(sides: list[int]) -> bool:
    return len(set(sides)) == 3
