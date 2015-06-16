module Api
  class ApiController < ApplicationController
    before_action :ensure_logged_in
    # request to nested controllers e.g. notes or notebooks
    def ensure_logged_in
      unless logged_in?
        render json: ["You must be signed in to perform that action!"],
        status: :unauthorized
        redirect_to new_session_url
      end
    end

  end
end
