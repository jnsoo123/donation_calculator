class Player < ApplicationRecord
  has_many :contributions

  def total_points
    contributions.map(&:points).sum
  end

  def weekly_points
    contributions.ransack({created_at_gteq: Date.today.beginning_of_week}).result.map(&:points).sum
  end
end
