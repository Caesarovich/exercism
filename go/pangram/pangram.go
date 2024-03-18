package pangram

import (
	"strings"
)

func IsPangram(input string) bool {
	loweredInput := strings.ToLower(input)
	for letter := 'a'; letter <= 'z'; letter++ {
		if !strings.ContainsRune(loweredInput, letter) {
			return false
		}
	}

	return true
}
