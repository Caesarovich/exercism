def steps(number: int) -> int:
    if number <= 0:
        raise ValueError("Only positive integers are allowed")

    count: int = 0

    while number > 1:
        count += 1
        if number % 2 == 0:
            number = number // 2
        else:
            number = number * 3 + 1

    return count
