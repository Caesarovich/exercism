const std = @import("std");
const Allocator = std.mem.Allocator;

pub fn toRna(allocator: Allocator, dna: []const u8) Allocator.Error![]const u8 {
    const rna = try allocator.dupe(u8, dna);

    for (rna) |*c| {
        c.* = switch (c.*) {
            'G' => 'C',
            'C' => 'G',
            'T' => 'A',
            'A' => 'U',
            else => continue,
        };
    }

    return rna;
}
