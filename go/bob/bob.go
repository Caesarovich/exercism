// This is a "stub" file.  It's a little start on your solution.
// It's not a complete solution though; you have to write some code.

// Package bob should have a package comment that summarizes what it's about.
// https://golang.org/doc/effective_go.html#commentary
package bob

import (
	"strings"
	"unicode"
)

// Hey should have a comment documenting it.
func Hey(remark string) string {
	remark = strings.TrimSpace(remark)

	isSilence := len(remark) == 0

	isQuestion := strings.HasSuffix(remark, "?")

	containsLetters := strings.ContainsFunc(remark, unicode.IsLetter)
	containsLowercase := strings.ContainsFunc(remark, unicode.IsLower)

	isYelling := containsLetters && !containsLowercase

	if isSilence {
		return "Fine. Be that way!"
	} else if isQuestion && isYelling {
		return "Calm down, I know what I'm doing!"
	} else if isQuestion {
		return "Sure."
	} else if isYelling {
		return "Whoa, chill out!"
	}

	return "Whatever."
}
