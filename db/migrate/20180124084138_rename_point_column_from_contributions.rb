class RenamePointColumnFromContributions < ActiveRecord::Migration[5.1]
  def change
    rename_column :contributions, :points, :value
  end
end
