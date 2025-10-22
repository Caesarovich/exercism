const std = @import("std");
const math = std.math;

fn countDigits(comptime IntType: type, num: IntType) u32 {
    var n: IntType = @abs(num);

    if (n == 0) return 1;

    var count: u32 = 0;
    while (n > 0) : (n /= 10)
        count += 1;

    return count;
}

pub fn isArmstrongNumber(num: u128) bool {
    const power = countDigits(u128, num);
    var n: u128 = num;
    var total: u128 = 0;

    while (n > 0) : (n /= 10)
        total += math.pow(u128, @rem(n, 10), power);

    return total == num;
}
