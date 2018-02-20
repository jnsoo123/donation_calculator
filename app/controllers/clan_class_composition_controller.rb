class ClanClassCompositionController < ApplicationController 
  def index
    players_job_count = Player.all.group(:job).count
    jobs = Player::JOBS
    @job_count = {}
    jobs.each do |job|
      @job_count[job.to_sym] = players_job_count[job.to_s] || 0
    end
  end
end
