const std = @import("std");

/// Writes a reversed copy of `s` to `buffer`.
pub fn reverse(buffer: []u8, s: []const u8) []u8 {
    const dest = buffer[0..s.len];

    for (0..s.len) |i|
        buffer[i] = s[s.len - i - 1];

    return dest;
}
