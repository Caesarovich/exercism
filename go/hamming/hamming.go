package hamming

import "errors"

func Distance(a, b string) (distance int, err error) {
	if len(a) != len(b) {
		return -1, errors.New("strands length mismatch")
	}

	for i := range a {
		if a[i] != b[i] {
			distance++
		}
	}
	return
}
