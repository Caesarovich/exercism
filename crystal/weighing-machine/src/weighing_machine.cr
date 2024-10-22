class WeighingMachine
  # Write your code here

  @weight = 0.0
  @precision : Int32
  @metric : Bool

  def initialize(precision : Int32, metric : Bool)
    @precision = precision
    @metric = metric
  end

  # DO NOT MODIFY ANYTHING BELOW THIS LINE
  def weigh : String
    weight = @metric ? @weight : @weight * 2.20462
    weight = weight.round(@precision)
    weight.to_s
  end

  property weight
  getter precision
  setter metric
end
