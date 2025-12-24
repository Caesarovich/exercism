from typing import Literal
from functools import reduce
from math import sqrt


def get_factors(number: int) -> set[int]:    
    step = 2 if number % 2 else 1
    factor_generator = ([i, number//i] for i in range(1, int(sqrt(number))+1, step) if number % i == 0)
    return set(reduce(list.__add__, factor_generator))


def aligot_sum(number: int) -> int:
    factors = get_factors(number)
    factors.remove(number)
    return sum(factors)


def classify(number: int) -> Literal["perfect", "abundant", "deficient"]:
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    if number < 1:
        raise ValueError("Classification is only possible for positive integers.")

    asum = aligot_sum(number)
    if number < asum:
        return 'abundant'
    if number > asum:
        return 'deficient'
    return 'perfect'
