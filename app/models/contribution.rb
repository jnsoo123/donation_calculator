class Contribution < ApplicationRecord
  CONTRIBUTION_DIVISION_MAPPING = {
    'adena' => 2500,
    'pob'   => 40,
    'rss'   => 20,
    'quest' => 1
  }

  CONTRIBUTION_POINTS_MAPPING = {
    'quest' => 50,
    'adena' => 5,
    'rss'   => 10,
    'pob'   => 10
  }

  enum contribution_type: ContributionTypes::ALL_ENUM
  belongs_to :player

  def points
    (value / CONTRIBUTION_DIVISION_MAPPING[contribution_type]) * CONTRIBUTION_POINTS_MAPPING[contribution_type]
  end
end
