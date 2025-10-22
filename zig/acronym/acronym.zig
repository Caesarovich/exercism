const std = @import("std");
const mem = std.mem;
const ascii = std.ascii;

pub fn abbreviate(allocator: mem.Allocator, sentence: []const u8) mem.Allocator.Error![]u8 {
    var words = mem.tokenizeAny(u8, sentence, " _-");
    var firstLetterList: std.ArrayList(u8) = try std.ArrayList(u8).initCapacity(allocator, 3);
    defer firstLetterList.deinit(allocator);

    while (words.next()) |word|
        try firstLetterList.append(allocator, ascii.toUpper(word[0]));

    return try firstLetterList.toOwnedSlice(allocator);
}
