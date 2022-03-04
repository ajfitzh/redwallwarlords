class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :training, :loyalty, :scouting, :workers
end
