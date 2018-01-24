class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :in_game_name
      t.string :name

      t.timestamps
    end
  end
end
