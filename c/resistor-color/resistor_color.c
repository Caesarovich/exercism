#include "resistor_color.h"

static resistor_band_t resistor_band_colors[] = {
		BLACK,
		BROWN,
		RED,
		ORANGE,
		YELLOW,
		GREEN,
		BLUE,
		VIOLET,
		GREY,
		WHITE,
};

resistor_band_t *colors(void)
{
	return resistor_band_colors;
}

uint8_t color_code(resistor_band_t color)
{
	return color;
}