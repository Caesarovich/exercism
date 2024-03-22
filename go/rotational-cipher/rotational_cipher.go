package rotationalcipher

import "unicode"

func RotationalCipher(plain string, shiftKey int) string {
	plainRunes := []rune(plain)
	outputRunes := make([]rune, len(plainRunes))
	copy(outputRunes, plainRunes)

	for k, v := range plainRunes {
		if !unicode.IsLetter(v) {
			continue
		}

		offset := 'a'
		if unicode.IsUpper(v) {
			offset = 'A'
		}

		outputRunes[k] = ((v-offset)+rune(shiftKey))%26 + offset
	}

	return string(outputRunes)
}
