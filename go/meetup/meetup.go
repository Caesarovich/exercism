package meetup

import "time"

// Define the WeekSchedule type here.
type WeekSchedule string

const (
	First WeekSchedule 	= "first"
	Second WeekSchedule	= "second"
	Third WeekSchedule = "third"
	Fourth WeekSchedule = "fourth"
	Fifth WeekSchedule = "fifth"
	Last WeekSchedule = "last"
	Teenth WeekSchedule = "teenth"
)

func Day(wSched WeekSchedule, wDay time.Weekday, month time.Month, year int) int {
	dayCount := 0
	lastDay := -1

	for i := 1; i <= 32; i++ {
		date := time.Date(year, month, i, 0, 0, 0, 0, time.UTC)
		if date.Weekday() != wDay || date.Month() != month {
			continue
		}
		dayCount++
		lastDay = i

		switch {
			case wSched == "first" && dayCount == 1: 
				return i
			case wSched == "second" && dayCount == 2: 
				return i
			case wSched == "third" && dayCount == 3: 
				return i
			case wSched == "fourth" && dayCount == 4: 
				return i
			case wSched == "fifth" && dayCount == 5: 
				return i
			case wSched == "teenth" && i >= 13 && i <= 19:
				return i
		}
	}
	return lastDay
}
