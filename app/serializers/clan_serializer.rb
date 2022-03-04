class ClanSerializer < ActiveModel::Serializer
  attributes :abbreviation, :banner_url
  has_many :warlords
end
