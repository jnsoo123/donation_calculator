class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :destroy, :edit, :update]

  def index
    @players = Player.all
      .includes(:contributions)
      .sort_by(&:weekly_points)
      .reverse
      .as_json(methods: [:total_points, :weekly_points])
  end

  def edit
  end

  def show
  end

  def update
    if @player.update_attributes(player_params)
      redirect_to player_path(@player), notice: 'Player Updated'
    end
  end

  def create
    @player = Player.new(player_params)
    if @player.save
      redirect_to root_path, notice: "Player #{@player.in_game_name} created!"
    end
  end

  def destroy
    @player.destroy
    redirect_to root_path, notice: "Player #{@player.in_game_name} deleted."
  end

  private
  def set_player
    @player = Player.find(params[:id])
  end

  def player_params
    params.require(:player).permit(:in_game_name, :name)
  end
end
