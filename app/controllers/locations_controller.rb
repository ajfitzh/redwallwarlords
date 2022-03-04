class LocationsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]
    
    def index
        render json: Location.all
      end

          #GET Location/:id
    def show
      location = Location.find_by(id: params[:id])
      if location
          render json: location
      else
          render json: {error: "location not found" }, status: :not_found
      end

      def create
        location = Location.create!(location_params)
        render json: location, status: :created
      end
      private
    
      def location_params
        params.permit(:name, :build, :loyalty, :training, :scouting, :workers)
      end
  end
end
