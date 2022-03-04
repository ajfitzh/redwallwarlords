class Warlord < ApplicationRecord
    belongs_to :user
    belongs_to :clan
    belongs_to :race
    belongs_to :location

    validates :user_id, presence: true, uniqueness: true
end
