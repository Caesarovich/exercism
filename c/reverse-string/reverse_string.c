#include <string.h>
#include <malloc.h>
#include "reverse_string.h"

char *reverse(const char *str)
{
	size_t len = strlen(str);

	char *reversed = malloc(len + 1);
	if (!reversed)
		return NULL;

	for (size_t i = 0; i < len; i++)
		reversed[i] = str[len - i - 1];

	reversed[len] = '\0';

	return reversed;
}