class PlayersController < ApplicationController
  def index
    @players = Player.all.includes(:contributions).as_json(methods: :total_points)
  end

  def create
    @player = Player.new(player_params)
    if @player.save
      redirect_to root_path
    end
  end

  private
  def player_params
    params.require(:player).permit(:in_game_name, :name)
  end
end
