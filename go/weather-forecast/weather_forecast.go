// Package weather helps with forecasting the weather.
package weather

// CurrentCondition represents the current weather condition for the CurrentLocation.
var CurrentCondition string

// CurrentLocation represent the location for which CurrentCondition provides the condition for.
var CurrentLocation string

// Forecast returns a forecasting message with a given city and condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
