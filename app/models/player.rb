class Player < ApplicationRecord
  JOBS = [
    :paladin, :warlord, :treasure_hunter, :hawkeye, :sorcerer, :bishop,
    :temple_knight, :swordsinger, :plainswalker, :silver_ranger, :spellsinger, :elder,
    :shillien_knight, :bladedancer, :abyss_walker, :phantom_ranger, :spellhowler, :shillien_elder,
    :guardian, :slayer, :scavenger, :war_ranger, :battle_mage, :sage  
  ]

  has_many :contributions, dependent: :destroy
  has_one  :page_donation, dependent: :destroy

  after_create do
    PageDonation.create(player: self, level: 0, count: 0)
  end

  def total_points
    contributions.map(&:points).sum
  end

  def weekly_points
    contributions.ransack({created_at_gteq: Date.today.beginning_of_week}).result.map(&:points).sum
  end

  def weekly_accumulation
    accumulation = {rss: 0, pob: 0, adena: 0, quest: 0}
    contributions.ransack({created_at_gteq: Date.today.beginning_of_week}).result.each do |contrib|
      accumulation[contrib.contribution_type.to_sym] += contrib.value
    end
    accumulation.as_json
  end

  def humanize_job
    self.job.try(:titleize)
  end
end
