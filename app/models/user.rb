class User < ApplicationRecord
    has_many :posts
    has_many :tags, through: :posts
    has_many :comments, through: :posts
  
    has_secure_password
  
    validates :username, presence: true, uniqueness: true
end
