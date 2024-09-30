package strand

var rnaTranscription = map[rune]rune{
	'G': 'C',
	'C': 'G',
	'T': 'A',
	'A': 'U',
}

func ToRNA(dna string) (rnaStrand string) {
	for _, char := range dna {
		rnaStrand += string(rnaTranscription[char])
	}

	return rnaStrand
}
