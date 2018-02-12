class ApplicationController < ActionController::Base
  include Pundit
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  layout :layout_by_resource

  private
  def layout_by_resource
    devise_controller? ? 'devise' : 'application'
  end

  def authenticate_admin!
    redirect_to root_path, notice: 'Unauthorized Access' unless current_user.admin?
  end
end
