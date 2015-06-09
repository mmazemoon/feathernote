class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      sign_in(user)
      redirect_to links_url
    else
      flash.now[:errors] = ["Invalid email or password"]
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

  

end
