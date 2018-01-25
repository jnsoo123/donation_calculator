class Player < ApplicationRecord
  has_many :contributions, dependent: :destroy

  def total_points
    contributions.map(&:points).sum
  end

  def weekly_points
    contributions.ransack({created_at_gteq: Date.today.beginning_of_week}).result.map(&:points).sum
  end

  def weekly_accumulation
    accumulation = {rss: 0, pob: 0, adena: 0}
    contributions.ransack({created_at_gteq: Date.today.beginning_of_week}).result.each do |contrib|
      accumulation[contrib.contribution_type.to_sym] += contrib.value
    end
    accumulation.as_json
  end
end
