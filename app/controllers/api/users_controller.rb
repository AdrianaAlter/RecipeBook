class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_name: params[:user_name], password: params[:password])
    if @user.save
      log_in(@user)
    end
    render json: @user
  end

end
