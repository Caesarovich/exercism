pub fn isLeapYear(year: u32) bool {
    return (@rem(year, 4) == 0 and ((@rem(year, 100) != 0) or (@rem(year, 400) == 0)));
}
