class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_new_player

  private
  def set_new_player
    @player = Player.new
  end
end
