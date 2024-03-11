package parsinglogfiles

import (
	"fmt"
	"regexp"
)

func IsValidLine(text string) bool {
	re := regexp.MustCompile(`^\[(TRC|DBG|DBG|INF|WRN|ERR|FTL)\]`)
	return re.MatchString(text)
}

func SplitLogLine(text string) []string {
	re := regexp.MustCompile(`<[-~*=]*>`)
	return re.Split(text, -1)
}

func CountQuotedPasswords(lines []string) (count int) {
	re := regexp.MustCompile(`(?i)".*password.*"`)

	for _, line := range lines {
		count += len(re.FindAllString(line, -1))
	}

	return
}

func RemoveEndOfLineText(text string) string {
	re := regexp.MustCompile(`end-of-line\d*`)

	return re.ReplaceAllString(text, "")
}

func TagWithUserName(lines []string) (taggedLines []string) {
	re := regexp.MustCompile(`User\s+(\w+)`)

	for _, line := range lines {
		if matches := re.FindStringSubmatch(line); matches != nil  {
			taggedLines = append(taggedLines, fmt.Sprintf("[USR] %s %s", matches[1], line))
		} else {
			taggedLines = append(taggedLines, line)
		}
	}

	return
}
