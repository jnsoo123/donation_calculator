class ChangeTypeOfContributionTypeFromContributions < ActiveRecord::Migration[5.1]
  def change
    change_column :contributions, :contribution_type, 'integer USING CAST(contribution_type AS integer)'
  end
end
