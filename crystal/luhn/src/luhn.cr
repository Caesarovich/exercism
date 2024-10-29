module Luhn
  def self.double(number : Int32) : Int32
    number *= 2
    number > 9 ? number - 9 : number
  end

  def self.valid?(input : String) : Bool
    input = input.strip.gsub(" ", "").reverse

    return false if input.size <= 1 || input.matches?(/[^0-9]/)

    input.each_char.with_index.reduce(0) { |acc, (char, i)|
      acc + (
        i.divisible_by?(2) ?
        char.to_i :
        double(char.to_i)
      )
   }.divisible_by? 10
  end
end
