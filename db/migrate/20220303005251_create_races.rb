class CreateRaces < ActiveRecord::Migration[6.1]
  def change
    create_table :races do |t|
      t.string  :name
      t.integer :offense
      t.integer :defense
      t.integer :build
      t.integer :costs
      t.integer :loyalty
      t.integer :training
      t.integer :income
      t.integer :scouting
      t.integer :mercenaries
      t.integer :food
      t.integer :leadership
      t.integer :foraging
      t.timestamps
    end
  end
end
