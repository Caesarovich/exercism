#include "eliuds_eggs.h"

unsigned int egg_count(unsigned int count)
{
	unsigned int result = 0;

	while (count != 0)
	{
		result += (count & 1) == 1;
		count = count >> 1;
	}

	return result;
}