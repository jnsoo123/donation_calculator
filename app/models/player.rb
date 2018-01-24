class Player < ApplicationRecord
  has_many :contributions

  def total_points
    contributions.map(&:points).sum
  end
end
