class ChangeTypeOfContributionTypeFromContributions < ActiveRecord::Migration[5.1]
  def change
    change_column :contributions, :contribution_type, :integer
  end
end
