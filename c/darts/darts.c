#include <math.h>
#include "darts.h"

uint8_t score(coordinate_t landing_position)
{
	float distance = hypotf(landing_position.x, landing_position.y);

	if (distance <= 1.0F)
		return 10;
	if (distance <= 5.0F)
		return 5;
	if (distance <= 10.0F)
		return 1;
	return 0;
}