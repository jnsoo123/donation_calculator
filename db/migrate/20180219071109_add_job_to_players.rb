class AddJobToPlayers < ActiveRecord::Migration[5.1]
  def change
    add_column :players, :job, :string
  end
end
