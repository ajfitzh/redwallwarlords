class RaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :offense, :defense, :build, :costs, :loyalty, :training, :income, :scouting, :mercenaries, :food, :leadership, :foraging
  has_many :warlords
end
