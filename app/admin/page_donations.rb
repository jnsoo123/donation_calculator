ActiveAdmin.register PageDonation do
  index do
    selectable_column
    id_column
    column :player do |pd|
      pd.player.in_game_name
    end
    column :count
    column :level
    column :created_at
    column :updated_at
    actions
  end
end
