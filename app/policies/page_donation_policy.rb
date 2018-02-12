class PageDonationPolicy < ApplicationPolicy
  def index?
    true
  end

  def update?
    user.admin? || user.moderator?
  end
end
