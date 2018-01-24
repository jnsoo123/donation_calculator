class CreateContributions < ActiveRecord::Migration[5.1]
  def change
    create_table :contributions do |t|
      t.integer :points
      t.string :type
      t.references :player, foreign_key: true

      t.timestamps
    end
  end
end
