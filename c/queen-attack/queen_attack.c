#include <stdbool.h>
#include <stdlib.h>
#include "queen_attack.h"

static bool is_position_valid(position_t position)
{
	return (position.row < 8 && position.column < 8);
}

static bool is_position_equal(position_t pos_1, position_t pos_2)
{
	return (pos_1.row == pos_2.row && pos_1.column == pos_2.column);
}

static bool is_on_same_diagonal(position_t pos_1, position_t pos_2)
{
	return abs(pos_1.column - pos_2.column) == abs(pos_1.row - pos_2.row);
}

attack_status_t can_attack(position_t queen_1, position_t queen_2)
{
	if (!is_position_valid(queen_1) || !is_position_valid(queen_2) || is_position_equal(queen_1, queen_2))
		return INVALID_POSITION;

	if (queen_1.row == queen_2.row)
		return CAN_ATTACK;

	if (queen_1.column == queen_2.column)
		return CAN_ATTACK;

	if (is_on_same_diagonal(queen_1, queen_2))
		return CAN_ATTACK;

	return CAN_NOT_ATTACK;
}
