module CollatzConjecture
  def self.steps(input : Number) : Number
    raise ArgumentError.new if input < 1

    steps = 0

    while input > 1
      input = input % 2 == 0 ? input / 2 : 3 * input + 1
      steps = steps + 1
    end

    steps
  end
end
