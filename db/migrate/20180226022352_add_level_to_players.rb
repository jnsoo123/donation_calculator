class AddLevelToPlayers < ActiveRecord::Migration[5.1]
  def change
    add_column :players, :current_level, :integer, default: 1
    add_column :players, :before_level, :integer, default: 1
    add_column :players, :current_cp, :integer, default: 1
    add_column :players, :before_cp, :integer, default: 1
    remove_column :players, :name, :string
  end
end
