class User < ApplicationRecord
  devise :database_authenticatable, :trackable, :validatable

  enum role: UserRoles::ALL_ENUM

  validates :username, uniqueness: true, presence: true

  def email_required?
    false
  end

  def will_save_change_to_email?
    false
  end
end
