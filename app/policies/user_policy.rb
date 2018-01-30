class UserPolicy < ApplicationPolicy
  def index?
    user.admin? || user.moderator?
  end

  def toggle_role?
    index?
  end

  def new
    index?
  end

  def create
    index?
  end

  def destroy?
    index?
  end

  def edit?
    true
  end

  def update?
    true
  end
end
