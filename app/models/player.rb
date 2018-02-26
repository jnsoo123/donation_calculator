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

  before_save do
    self.before_level = self.current_level_was if self.current_level.present?
    self.before_cp    = self.current_cp_was if self.current_cp.present?
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

  def cp_diff
    Differ.diff_by_line(
      ActionController::Base.helpers.number_with_delimiter(self.current_cp).to_s, 
      ActionController::Base.helpers.number_with_delimiter(self.before_cp).to_s)
      .format_as(:html)
  end

  def level_diff
    Differ.diff_by_line(
      ActionController::Base.helpers.number_with_delimiter(self.current_level).to_s, 
      ActionController::Base.helpers.number_with_delimiter(self.before_level).to_s)
      .format_as(:html)
  end
end
