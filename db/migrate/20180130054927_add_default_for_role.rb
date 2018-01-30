class AddDefaultForRole < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :role, :integer, default: 2
  end
end
