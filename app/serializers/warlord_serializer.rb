class WarlordSerializer < ActiveModel::Serializer
  attributes :id, :name, :coa_url, :race_id, :location_id, :user_id, :land, :freeland, :networth, :turns, :leaders, :loyalty, :cash, :food, :health, :workers, :rats, :weasels, :stoats, :skiffs, :tax, :towers, :farms, :huts, :camps, :barracks, :tents, :markets, :ind_skiff, :ind_stoat, :ind_weasel, :ind_rat
  belongs_to :clan
  has_one :race
  has_one :location
end
