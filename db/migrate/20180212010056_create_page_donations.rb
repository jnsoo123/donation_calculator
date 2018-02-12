class CreatePageDonations < ActiveRecord::Migration[5.1]
  def change
    create_table :page_donations do |t|
      t.references :player, foreign_key: true
      t.integer :count
      t.integer :level

      t.timestamps
    end
  end
end
