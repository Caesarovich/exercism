def is_question(text: str) -> bool:
    return text.strip().endswith('?')


def is_yelling(text: str) -> bool:
    return text.isupper()


def is_silence(text: str) -> bool:
    return len(text.strip()) == 0


def response(hey_bob: str) -> str:
    if is_silence(hey_bob):
        return "Fine. Be that way!"
    match (is_yelling(hey_bob), is_question(hey_bob)):
        case (True, True):
            return "Calm down, I know what I'm doing!"
        case (True, False):
            return "Whoa, chill out!"
        case (False, True):
            return "Sure."
    return "Whatever."
