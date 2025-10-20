package collatzconjecture

import "errors"

func CollatzConjecture(n int) (steps int, err error) {
	if n < 1 {
		return -1, errors.New("invalid input, must be greater than 0")
	}

	for ; n > 1; steps++ {
		if n%2 == 0 {
			n /= 2
		} else {
			n = n*3 + 1
		}
	}

	return
}
