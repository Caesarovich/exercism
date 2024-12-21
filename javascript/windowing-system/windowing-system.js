// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
	this.width = width;
	this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
	this.width = newWidth;
	this.height = newHeight;
};

export function Position(x = 0, y = 0) {
	this.x = x;
	this.y = y;
}

Position.prototype.move = function (newX, newY) {
	this.x = newX;
	this.y = newY;
};

export class ProgramWindow {
	screenSize = new Size(800, 600);

	size = new Size();

	position = new Position();

	resize(newSize) {
		this.size.resize(
			Math.min(
				Math.max(1, newSize.width),
				this.screenSize.width - this.position.x,
			),
			Math.min(
				Math.max(1, newSize.height),
				this.screenSize.height - this.position.y,
			),
		);
	}

	move(newPos) {
		this.position.move(
			Math.min(Math.max(0, newPos.x), this.screenSize.width - this.size.width),
			Math.min(
				Math.max(0, newPos.y),
				this.screenSize.height - this.size.height,
			),
		);
	}
}

export function changeWindow(win) {
	win.move(new Position(100, 150));
	win.resize(new Size(400, 300));

	return win;
}
