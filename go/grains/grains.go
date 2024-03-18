package grains

import (
	"errors"
)

const uintMax = ^uint64(0)

func Square(number int) (uint64, error) {
	if number <= 0 || number > 64 {
		return 0, errors.New("invalid square number")
	}

	return 1 << uint64(number-1), nil
}

func Total() (total uint64) {
	return uintMax
}
