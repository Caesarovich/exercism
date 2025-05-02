#include <stdbool.h>
#include <string.h>
#include <ctype.h>
#include "bob.h"

static bool is_question(char *phrase)
{
	char *end = phrase + strlen(phrase) - 1;

	while (isspace(*end))
		end--;

	return *end == '?';
}

static bool has_letters(char *phrase)
{
	while (*phrase)
	{
		if (isalpha(*phrase))
			return true;
		phrase++;
	}

	return false;
}

static bool is_yelling(char *phrase)
{

	if (!has_letters(phrase))
		return false;

	while (*phrase)
	{
		if (islower(*phrase))
			return false;
		phrase++;
	}

	return true;
}

static bool is_silence(char *phrase)
{

	while (*phrase)
	{
		if (!isspace(*phrase))
			return false;
		phrase++;
	}

	return true;
}

char *hey_bob(char *greeting)
{
	if (is_question(greeting) && is_yelling(greeting))
		return "Calm down, I know what I'm doing!";

	if (is_question(greeting))
		return "Sure.";

	if (is_yelling(greeting))
		return "Whoa, chill out!";

	if (is_silence(greeting))
		return "Fine. Be that way!";

	return "Whatever.";
}