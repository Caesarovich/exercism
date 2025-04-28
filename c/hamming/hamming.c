#include "hamming.h"

int compute(const char *first, const char *second)
{
	int distance = 0;

	while (*first)
		distance += *first++ != *second++;

	return *first == *second ? distance : -1;
}