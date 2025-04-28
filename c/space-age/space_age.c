#include "space_age.h"

static float planet_multipliers[] = {
		0.2408467,	// Mercury
		0.61519726, // Venus
		1.0,				// Earth
		1.8808158,	// Mars
		11.862615,	// Jupiter
		29.447498,	// Saturn
		84.016846,	// Uranus
		164.79132,	// Neptune
};

float age(planet_t planet, int64_t seconds)
{
	if (planet < MERCURY || planet > NEPTUNE)
		return -1;

	float earth_years = seconds / 31557600;

	return earth_years / planet_multipliers[planet];
}