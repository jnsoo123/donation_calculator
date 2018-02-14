class PageDonationsController < ApplicationController
  before_action :set_page_donation, only: :update

  def index
    @page_donations = PageDonation.includes(:player).all
      .order(level: :asc, updated_at: :asc)
      .as_json({include: { player: { methods: :weekly_accumulation } }})
  end

  def update
    if @page_donation.update(page_donation_params)
      redirect_to page_donations_path, notice: 'MS Page Added'
    end
  end

  private
  def set_page_donation
    @page_donation = PageDonation.find(params[:id])
  end

  def page_donation_params
    if params[:count].present?
      count = params[:count].to_i #5
      current_count = @page_donation.count #0
      sum_count = count + current_count #5
      accumulated_levels = sum_count / 10 #0
      new_count = sum_count - (accumulated_levels * 10)
      new_level = accumulated_levels + @page_donation.level

      {
        level: new_level,
        count: new_count
      }
    elsif params[:update_count].present? && params[:update_level].present?
      {
        level: params[:update_level],
        count: params[:update_count]
      }
    else
      {}
    end
  end
end
