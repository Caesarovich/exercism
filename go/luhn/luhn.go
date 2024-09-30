package luhn

import (
	"strings"
	"unicode"
)

func Valid(id string) bool {
	id = strings.ReplaceAll(id, " ", "")

	sum := 0

	for i, char := range id {
		if !unicode.IsDigit(char) {
			return false
		}

		num := int(char - '0')

		if i%2 == (len(id))%2 {
			num *= 2
			if num > 9 {
				num -= 9
			}
		}

		sum += num
	}

	return len(id) > 1 && sum%10 == 0
}
