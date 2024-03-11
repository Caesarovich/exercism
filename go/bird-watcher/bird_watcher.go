package birdwatcher

// TotalBirdCount return the total bird count by summing
// the individual day's counts.
func TotalBirdCount(birdsPerDay []int) int {
	total := 0
	sliceLen := len(birdsPerDay)

	for i:= 0; i < sliceLen; i++ {
		total += birdsPerDay[i]
	}

	return total
}

// BirdsInWeek returns the total bird count by summing
// only the items belonging to the given week.
func BirdsInWeek(birdsPerDay []int, week int) int {
	total := 0
	weekIndex := (week - 1) * 7

	for i := weekIndex; i < weekIndex + 7; i++ {
		total += birdsPerDay[i]
	}

	return total
}

// FixBirdCountLog returns the bird counts after correcting
// the bird counts for alternate days.
func FixBirdCountLog(birdsPerDay []int) []int {
	sliceLen := len(birdsPerDay)

	for i := 0; i < sliceLen; i += 2 {
		birdsPerDay[i] += 1
	}

	return birdsPerDay
}
