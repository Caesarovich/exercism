# To Do: Define the class JuiceMaker

class JuiceMaker
    def self.debug_light_on?
        true
    end

    def initialize(fluid_qty : Int32)
        @running = false
        @fluid = fluid_qty
    end

    def start
        @running = true
    end

    def running?
        @running
    end

    def add_fluid(qty : Int32)
        @fluid += qty
    end

    def stop(running_time : Int32)
        @running = false
        @fluid -= running_time * 5
    end
end
