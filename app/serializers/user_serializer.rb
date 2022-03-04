class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar_url, :bio
  has_one :warlord
end
