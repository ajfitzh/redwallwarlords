class WarlordsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show, :create, :update, :increment_turns]

    def index
        render json: Warlord.all
      end

          #GET warlord/:id
    def show
      warlord = Warlord.find_by(id: params[:id])
      if warlord
          render json: warlord
      else
          render json: {error: "warlord not found" }, status: :not_found
      end
  end
    
      def create
        warlord = Warlord.create!(warlord_params)
        render json: warlord, status: :created
      end
        # PATCH /warlords/:id
  def update
    warlord = Warlord.find_by(id: params[:id])
    if warlord
      warlord.update(warlord_params)
      render json: warlord
    else
      render json: { error: "warlord not found" }, status: :not_found
    end
  end
    
  def increment_turns
    warlord = Warlord.find_by(id: params[:id])
    if warlord
      warlord.update(turns: warlord.turns + 10)
      render json: warlord
    else
      render json: { error: "Warlord not found" }, status: :not_found
    end

  end
      def destroy
        warlord = Warlord.find_by(id: params[:id])
        if warlord
          warlord.destroy
          head :no_content
        else
          render json: { error: "warlord not found" }, status: :not_found
        end
      end

      private
    
      def warlord_params
        params.permit(:name, :coa_url, :race_id, :location_id, :freeland, :user_id, :clan_id, :land, :networth, :turns, :loyalty, :leaders, :cash, :food, :health, :tax, :workers, :rats, :weasels, :stoats, :skiffs, :towers, :farms, :huts, :camps, :barracks, :tents, :markets, :ind_skiff, :ind_stoat, :ind_weasel, :ind_rat)
      end

end
