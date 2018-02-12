class PageDonation < ApplicationRecord
  belongs_to :player

  def self.create_initial_data
    Player.all.each do |player|
      PageDonation.create(player: player, count: 0, level: 0)
    end
  end
end
