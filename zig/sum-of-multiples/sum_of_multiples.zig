const std = @import("std");
const mem = std.mem;

fn fillItemMultiples(set: *std.AutoHashMap(u32, void), itemBaseValue: u32, playerLevel: u32) !void {
    var i = itemBaseValue;

    while (itemBaseValue > 0 and i < playerLevel) : (i += itemBaseValue)
        try set.put(i, {});
}

pub fn sum(allocator: mem.Allocator, factors: []const u32, limit: u32) !u64 {
    var set = std.AutoHashMap(u32, void).init(allocator);
    defer set.deinit();

    for (factors) |itemBaseValue|
        try fillItemMultiples(&set, itemBaseValue, limit);

    var total: u64 = 0;
    var iterator = set.keyIterator();
    while (iterator.next()) |v|
        total += v.*;
    return total;
}
