class GreetingController < ApplicationController
    def index
        @greeting = Greeting.order("RANDOM()").first
        render json: { message: @greeting.message }, status: :ok
    end
end