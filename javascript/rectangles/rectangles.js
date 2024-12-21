//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CORNER_CHAR = "+";
const HORIZONTAL_CHAR = "-";
const VERTICAL_CHAR = "|";

function isValidHorizontalChar(char) {
	return [CORNER_CHAR, HORIZONTAL_CHAR].includes(char);
}

function isValidVerticalChar(char) {
	return [CORNER_CHAR, VERTICAL_CHAR].includes(char);
}

function isOutOfBounds(rows, x, y) {
	return y >= rows.length || x >= rows[0].length;
}

function exploreDownward(rows, originX, targetX, y, rectCount) {
	if (
		isOutOfBounds(rows, targetX, y) ||
		!isValidVerticalChar(rows[y][originX]) ||
		!isValidVerticalChar(rows[y][targetX])
	)
		return rectCount;

	if (rows[y][originX] === CORNER_CHAR && rows[y][targetX] === CORNER_CHAR)
		rectCount++;

	return exploreDownward(rows, originX, targetX, y + 1, rectCount);
}

function exploreRightward(rows, originX, originY, x, rectCount) {
	if (
		isOutOfBounds(rows, x, originY) ||
		!isValidHorizontalChar(rows[originY][x])
	)
		return rectCount;

	if (rows[originY][x] === CORNER_CHAR)
		rectCount += exploreDownward(rows, originX, x, originY + 1, 0);

	return exploreRightward(rows, originX, originY, x + 1, rectCount);
}

export function count(rows) {
	let rectCount = 0;

	for (const y in rows) {
		for (const x in rows[y]) {
			if (rows[y][x] === CORNER_CHAR) {
				rectCount += exploreRightward(
					rows,
					Number.parseInt(x),
					Number.parseInt(y),
					Number.parseInt(x) + 1,
					0,
				);
			}
		}
	}

	return rectCount;
}
