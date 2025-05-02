#include "two_fer.h"
#include <string.h>

void two_fer(char *buffer, const char *name)
{
	const char *actual_name = name ? name : "you";

	buffer[0] = '\0';
	strcat(buffer, "One for ");
	strcat(buffer, actual_name);
	strcat(buffer, ", one for me.");
}