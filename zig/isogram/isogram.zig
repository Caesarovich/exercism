const std = @import("std");

pub fn isIsogram(str: []const u8) bool {
    var letters: [26]bool = [_]bool{false} ** 26;

    for (str) |c| {
        if (!std.ascii.isAlphabetic(c)) continue;
        if (letters[std.ascii.toLower(c) - 'a']) return false;
        letters[std.ascii.toLower(c) - 'a'] = true;
    }

    return true;
}
