class Contribution < ApplicationRecord
  CONTRIBUTION_DIVISION_MAPPING = {
    'adena' => 5000,
    'pob'   => 40,
    'rss'   => 20
  }

  enum contribution_type: ContributionTypes::ALL_ENUM
  belongs_to :player

  def points
    (value / CONTRIBUTION_DIVISION_MAPPING[contribution_type]) * 10
  end
end
