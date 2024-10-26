class Reactor
  def self.criticality_balanced?(temperature, neutrons_emitted)
    temperature < 800 && neutrons_emitted > 500 && temperature * neutrons_emitted < 500_000
  end

  def self.reactor_efficiency(voltage, current, theoretical_max_power)
    efficiency = ((voltage * current) / theoretical_max_power) * 100

    case efficiency
    when 80.. then "green"
    when 60..80 then "orange"
    when 30..60 then "red"
    when ..30 then "black"
    end
  end

  def self.fail_safe(temperature, neutrons_produced_per_second, threshold)
    percent = ((temperature * neutrons_produced_per_second) / threshold) * 100

    case percent
    when ..90 then "LOW"
    when 90..110 then "NORMAL"
    when 110.. then "DANGER"
    end
  end
end
