module Squares
  extend self

  def square_of_sum(n)
    ((n / 2) * (n + 1)) ** 2
  end

  def sum_of_squares(n)
    (n * (n + 1) * (2 * n + 1)) / 6
  end

  def difference_of_squares(n)
    square_of_sum(n) - sum_of_squares(n)
  end
end
