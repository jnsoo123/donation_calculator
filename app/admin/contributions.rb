ActiveAdmin.register Contribution do
  index do
    selectable_column
    id_column
    column :player do |contrib|
      contrib.player.in_game_name
    end
    column :contribution_type
    column :value
    column :created_at
    actions
  end
end
