class CastleDinner
  def self.check_food?(food)
    food == "Mushroom pasties" ? "Mushroom pasties" : nil
  end

  def self.check_drink?(drink)
    drink.downcase.includes?('i') ? drink : nil
  end

  def self.replace_drink(drink)
    check_drink?(drink) || "Apple juice"
  end
end
