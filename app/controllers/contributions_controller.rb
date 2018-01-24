class ContributionsController < ApplicationController
  def create
    @contribution = Contribution.new(contribution_params)
    if @contribution.save
      redirect_to root_path, notice: "Successfully added points to #{@contribution.player.in_game_name}"
    end
  end

  private
  def contribution_params
    params.require(:contribution).permit(:contribution_type, :value, :player_id)
  end
end
