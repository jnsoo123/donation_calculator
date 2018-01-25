class ContributionsController < ApplicationController
  before_action :set_contribution, only: :destroy

  def create
    @contribution = Contribution.new(contribution_params)
    if @contribution.save
      redirect_to root_path, notice: "Successfully added points to #{@contribution.player.in_game_name}"
    end
  end

  def destroy
    if @contribution.destroy
      redirect_to @contribution.player, notice: 'Contribution Deleted!'
    end
  end

  private
  def set_contribution
    @contribution = Contribution.find(params[:id])
  end

  def contribution_params
    params.require(:contribution).permit(:contribution_type, :value, :player_id)
  end
end
