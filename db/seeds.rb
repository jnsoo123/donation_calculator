# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[['Deli', 'Warlord'], ['Atropos', 'Spellsinger']].each do |player, job|
  Player.create in_game_name: player, job: job
end

User.create username: 'deli', password: 'password', password_confirmation: 'password', role: 'admin'
User.create username: 'atro', password: 'password', password_confirmation: 'password', role: 'user'
