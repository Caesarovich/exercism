package airportrobot

import "fmt"

// Write your code here.
// This exercise does not have tests for each individual task.
// Try to solve all the tasks first before running the tests.

type Greeter interface {
	LanguageName() string
	Greet(visitorName string) string
}

func SayHello(visitorName string, greeter Greeter) string {
	return fmt.Sprintf("I can speak %s: %s", greeter.LanguageName(), greeter.Greet(visitorName))
}

type Italian struct{}

func (lang Italian) LanguageName() string {
	return "Italian"
}

func (lang Italian) Greet(name string) string {
	return fmt.Sprintf("Ciao %s!", name)
}

type Portuguese struct{}

func (lang Portuguese) LanguageName() string {
	return "Portuguese"
}

func (lang Portuguese) Greet(name string) string {
	return fmt.Sprintf("Olá %s!", name)
}
