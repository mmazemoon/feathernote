class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :ensure_logged_in

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    user = current_user
    user.reset_session_token!
    session[:session_token] = nil
  end

  # request to unnested controllers e.g. sessions, static_pages
  def ensure_logged_in
    unless logged_in?
      redirect_to new_session_url
    end
  end
end
