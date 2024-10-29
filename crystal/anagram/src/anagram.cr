module Anagram
  def self.anagram?(subject : String, candidate : String) : Bool
    subject.downcase != candidate.downcase && subject.downcase.chars.sort! == candidate.downcase.chars.sort!
  end

  def self.find(subject : String, candidates : Array(String)) : Array(String)
    candidates.select {|candidate| anagram?(subject, candidate)}
  end
end
