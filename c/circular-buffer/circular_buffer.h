#ifndef CIRCULAR_BUFFER_H
#define CIRCULAR_BUFFER_H

#include <stdint.h>
#include <errno.h>
#include <strings.h>
#include <stdbool.h>

typedef unsigned int buffer_value_t;

typedef struct
{
	size_t capacity;
	size_t write_offset;
	size_t read_offset;
	bool is_full;
	buffer_value_t *buffer;
} circular_buffer_t;

circular_buffer_t *new_circular_buffer(size_t capacity);
void delete_buffer(circular_buffer_t *buffer);
void clear_buffer(circular_buffer_t *buffer);
int16_t write(circular_buffer_t *buffer, buffer_value_t value);
int16_t overwrite(circular_buffer_t *buffer, buffer_value_t value);
int16_t read(circular_buffer_t *buffer, buffer_value_t *dest);

#endif
