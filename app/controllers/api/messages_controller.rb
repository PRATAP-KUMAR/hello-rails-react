class Api::MessagesController < ApplicationController
  def index
    messages = Greeting.all.shuffle
    render json: messages
  end
end
