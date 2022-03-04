class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.integer :training
      t.integer :loyalty
      t.integer :scouting
      t.integer :workers
      t.string :description
      t.timestamps
    end
  end
end
