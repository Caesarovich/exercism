#include "resistor_color_duo.h"

uint16_t color_code(resistor_band_t *codes)
{
	return codes[0] * 10 + codes[1];
}