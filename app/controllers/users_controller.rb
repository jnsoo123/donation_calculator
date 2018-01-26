class UsersController < ApplicationController
  before_action :set_user, only: [:destroy]

  def index
    @users = User.all
  end

  def edit
  end

  def new
    @user = User.new
  end

  def update
    if params[:user][:password].blank?
      params[:user].delete 'password'
      params[:user].delete 'password_confirmation'
    end

    if current_user.update(user_params)
      redirect_to users_path, notice: 'Account updated!'
    else
      flash[:error] = @user.errors.full_messages.to_sentence
      render :edit
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path, notice: 'Account created!'
    else
      flash[:error] = @user.errors.full_messages.to_sentence
      render :new
    end
  end

  def destroy
    if @user.destroy
      redirect_to users_path, notice: 'User deleted!'
    end
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
