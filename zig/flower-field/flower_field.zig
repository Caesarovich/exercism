const std = @import("std");
const mem = std.mem;

// Did I over-engineer this ? Yes, but it was fun

const Vec2D = struct {
    x: i32,
    y: i32,
};

/// Iterates over the valid neighboring positions of a cell in a given range
const NeighborCellIterator = struct {
    /// The range to search for neighboring cells.
    /// For example a range of 1 would search over a 3x3 grid and a range of 2 would be a 5x5 grid.
    range: i32,

    /// The position of the cell we a currently searching neighbors for.
    pos: Vec2D,

    /// The size of the matrix.
    limits: Vec2D,

    /// The current position of the iterator.
    current: ?Vec2D,

    pub fn init(pos: Vec2D, limits: Vec2D, range: i32) NeighborCellIterator {
        return NeighborCellIterator{ .pos = pos, .limits = limits, .range = range, .current = null };
    }

    /// Returns the next valid neighbor coordinate.
    pub fn next(self: *NeighborCellIterator) ?Vec2D {
        while (self.iteratePosition()) |pos| {
            if (self.isValidPosition(pos)) return pos;
        }

        return null;
    }

    /// Checks if a position isn't outside of the matrix.
    fn isValidPosition(self: NeighborCellIterator, pos: Vec2D) bool {
        if (pos.x < 0 or pos.y < 0) return false;
        if (pos.x >= self.limits.x or pos.y >= self.limits.y) return false;
        return true;
    }

    /// Iterates to the next position on the X axis if possible, otherwise wrap around to next row until the end.
    fn iteratePosition(self: *NeighborCellIterator) ?Vec2D {
        if (self.current == null) {
            self.current = Vec2D{ .x = self.pos.x - self.range, .y = self.pos.y - self.range };
        } else if (self.current.?.x < (self.pos.x + self.range)) {
            self.current.?.x += 1;
        } else if (self.current.?.y < (self.pos.y + self.range)) {
            self.current.?.x = self.pos.x - self.range;
            self.current.?.y += 1;
        } else {
            self.current = null;
        }
        return self.current;
    }
};

fn countFlowers(pos: Vec2D, matrix: [][]u8) u8 {
    var count: u8 = 0;
    var it = NeighborCellIterator.init(pos, .{ .y = @intCast(matrix.len), .x = if (matrix.len > 0) @intCast(matrix[0].len) else 0 }, 1);

    while (it.next()) |p|
        count += @intFromBool(matrix[@intCast(p.y)][@intCast(p.x)] == '*');

    return count;
}

fn dupeMatrix(allocator: mem.Allocator, matrix: []const []const u8) mem.Allocator.Error![][]u8 {
    var arr: std.ArrayList([]u8) = try std.ArrayList([]u8).initCapacity(allocator, matrix.len);
    errdefer {
        for (arr.items) |row| allocator.free(row);
        arr.deinit(allocator);
    }

    for (matrix) |row|
        arr.appendAssumeCapacity(try allocator.dupe(u8, row));

    return arr.toOwnedSlice(allocator);
}

pub fn annotate(allocator: mem.Allocator, garden: []const []const u8) mem.Allocator.Error![][]u8 {
    const myGarden = try dupeMatrix(allocator, garden);

    for (0..garden.len) |y| {
        for (0..garden[y].len) |x| {
            const flowerCount = countFlowers(.{ .x = @intCast(x), .y = @intCast(y) }, myGarden);
            if (flowerCount > 0 and myGarden[y][x] != '*')
                myGarden[y][x] = '0' + flowerCount;
        }
    }

    return myGarden;
}
