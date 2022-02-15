class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :title, :created_at
  belongs_to :user
  has_many :comments
end
