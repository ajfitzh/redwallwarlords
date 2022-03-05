class ClanSerializer < ActiveModel::Serializer
  attributes :abbreviation, :banner_url, :id
  has_many :warlords
end
