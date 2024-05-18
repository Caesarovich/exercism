package romannumerals

import (
	"fmt"
	"strings"
)

var RomanLetters = map[int]string{
	1000: "M",
	500:  "D",
	100:  "C",
	50:   "L",
	10:   "X",
	5:    "V",
	1:    "I",
}

func nextRomanLetter(letter string) (out string) {
	for _, let := range RomanLetters {
		if let == letter {
			return
		}
		out = let
	}
	return
}

func digitToLetter(digit int, baseLetter string) string {
	if digit > 3 {
		return baseLetter + nextRomanLetter(baseLetter)
	} else {
		return strings.Repeat(baseLetter, digit)
	}
}

func ToRomanNumeral(input int) (out string, err error) {
	fmt.Printf("----- %v\n", input)
	for amount, letter := range RomanLetters {
		a := input / amount
		fmt.Printf("%v:%v -> %v\n", letter, amount, a)
		if a < 1 {
			continue
		}
		input -= a * amount

		out += digitToLetter(a, letter)
	}

	fmt.Printf("--> %v\n", out)

	return
}
