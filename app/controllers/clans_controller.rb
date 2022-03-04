class ClansController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]

    def index
        render json: Clan.all
      end

          #GET warlord/:id
    def show
      clan = Clan.find_by(id: params[:id])
      if clan
          render json: clan
      else
          render json: {error: "clan not found" }, status: :not_found
      end
  end
    
      def create
        clan = Clan.create!(clan_params)
        render json: clan, status: :created
      end
    
      private
    
      def clan_params
        params.permit(:title, :password, :abbreviation, :founder_id)
      end


end
