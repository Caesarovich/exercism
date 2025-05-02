#include <malloc.h>
#include <errno.h>
#include <stdlib.h>
#include "circular_buffer.h"

circular_buffer_t *new_circular_buffer(size_t capacity)
{
	circular_buffer_t *circular_buffer = malloc(sizeof(circular_buffer_t) + capacity * sizeof(buffer_value_t));

	if (!circular_buffer)
		return NULL;

	circular_buffer->capacity = capacity;
	circular_buffer->read_offset = 0;
	circular_buffer->write_offset = 0;
	circular_buffer->is_full = false;

	circular_buffer->buffer = (buffer_value_t *)(circular_buffer + 1);

	return circular_buffer;
}

void delete_buffer(circular_buffer_t *buffer)
{
	free(buffer);
}

void clear_buffer(circular_buffer_t *buffer)
{
	buffer->read_offset = 0;
	buffer->write_offset = 0;
	buffer->is_full = false;
}

int16_t write(circular_buffer_t *buffer, buffer_value_t value)
{
	if (buffer->is_full)
	{
		errno = ENOBUFS;
		return EXIT_FAILURE;
	}

	buffer->buffer[buffer->write_offset] = value;
	buffer->write_offset = (buffer->write_offset + 1) % buffer->capacity;

	if (buffer->write_offset == buffer->read_offset)
		buffer->is_full = true;

	return EXIT_SUCCESS;
}

int16_t overwrite(circular_buffer_t *buffer, buffer_value_t value)
{
	if (buffer->is_full)
	{
		buffer->read_offset = (buffer->read_offset + 1) % buffer->capacity;
		buffer->is_full = false;
	}

	return write(buffer, value);
}

int16_t read(circular_buffer_t *buffer, buffer_value_t *dest)
{
	if (buffer->read_offset == buffer->write_offset && !buffer->is_full)
	{
		errno = ENODATA;
		return EXIT_FAILURE;
	}

	*dest = buffer->buffer[buffer->read_offset];
	buffer->read_offset = (buffer->read_offset + 1) % buffer->capacity;

	buffer->is_full = false;

	return EXIT_SUCCESS;
}
