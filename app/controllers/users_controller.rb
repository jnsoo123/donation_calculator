class UsersController < ApplicationController
  before_action :set_user, only: [:destroy, :toggle_role, :edit, :update]

  def index
    authorize User
    @users = User.all.order(:id)
  end

  def edit
    authorize User
  end

  def new
    authorize User
    @user = User.new
  end

  def update
    authorize User
    if params[:user][:password].blank?
      params[:user].delete 'password'
      params[:user].delete 'password_confirmation'
    end

    if current_user.update(user_params)
      redirect_to root_path, notice: 'Account updated!'
    else
      flash[:error] = @user.errors.full_messages.to_sentence
      render :edit
    end
  end

  def create
    authorize User
    @user = User.new(user_params)
    if @user.save
      redirect_to users_path, notice: 'Account created!'
    else
      flash[:error] = @user.errors.full_messages.to_sentence
      render :new
    end
  end

  def destroy
    authorize User
    if @user.destroy
      redirect_to users_path, notice: 'User deleted!'
    end
  end

  def toggle_role
    authorize User
    @user.moderator? ? @user.user! : @user.moderator!
    redirect_to users_path, notice: 'User updated!'
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
