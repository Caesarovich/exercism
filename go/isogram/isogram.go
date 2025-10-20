package isogram

import (
	"strings"
	"unicode"
)

func IsIsogram(word string) bool {
	word = strings.ToUpper(word)

	for i, char := range word {
		if unicode.IsLetter(char) && strings.ContainsRune(word[i+1:], char) {
			return false
		}
	}

	return true
}
