package scrabble

import (
	"strings"
)

var Scores = map[int][]rune{
	1: {'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' },
	2: {'D', 'G'},
	3: {'B', 'C', 'M', 'P'},
	4: {'F', 'H', 'V', 'W', 'Y'},
	5: {'K'},
	8: {'J', 'X'},
	10: {'Q', 'Z'},
}

func sliceContains(s []rune, e rune) bool {
	for _, a := range s {
			if a == e {
					return true
			}
	}
	return false
}

func Score(word string) (score int) {
	word = strings.ToUpper(word)
	for _, char := range word {
		for points, letters := range Scores {
			if sliceContains(letters, char) {
				score += points
			}
		}
	}
	return
}
