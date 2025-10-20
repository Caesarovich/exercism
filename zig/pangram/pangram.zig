const std = @import("std");
const isAlphabetic = std.ascii.isAlphabetic;
const toLower = std.ascii.toLower;
const IntegerBitSet = std.bit_set.IntegerBitSet;

pub fn isPangram(str: []const u8) bool {
    var letters = IntegerBitSet(26).initEmpty();

    for (str) |c| {
        if (!isAlphabetic(c)) continue;
        letters.set(toLower(c) - 'a');
        if (letters.count() == 26) return true;
    }

    return false;
}
