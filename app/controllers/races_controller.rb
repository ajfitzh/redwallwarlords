class RacesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]
    
    def index
        render json: Race.all
      end

          #GET race/:id
    def show
      race = Race.find_by(id: params[:id])
      if race
          render json: race
      else
          render json: {error: "race not found" }, status: :not_found
      end

      def create
        race = Race.create!(race_params)
        render json: race, status: :created
      end
      private
    
      def race_params
        params.permit(:name, :offense, :defense, :build, :costs, :loyalty, :training, :income, :scouting, :mercenaries, :food, :leadership, :foraging)
      end
  end
end
