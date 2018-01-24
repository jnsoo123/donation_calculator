class RenameColumnFromContributions < ActiveRecord::Migration[5.1]
  def change
    rename_column :contributions, :type, :contribution_type
  end
end
