#include <malloc.h>
#include <string.h>
#include "rna_transcription.h"

char *to_rna(const char *dna)
{
	size_t len = strlen(dna);

	char *rna = malloc(len + 1);
	if (!rna)
		return NULL;

	for (size_t i = 0; i < len; i++)
	{
		if (dna[i] == 'G')
			rna[i] = 'C';
		else if (dna[i] == 'C')
			rna[i] = 'G';
		else if (dna[i] == 'T')
			rna[i] = 'A';
		else if (dna[i] == 'A')
			rna[i] = 'U';
	}

	rna[len] = '\0';

	return rna;
}