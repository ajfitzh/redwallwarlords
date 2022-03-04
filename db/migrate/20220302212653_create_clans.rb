class CreateClans < ActiveRecord::Migration[6.1]
  def change
    create_table :clans do |t|
      t.integer :member_id
      t.string :title
      t.string :abbreviation
      t.integer :ally
      t.integer :war
      t.string :banner_url
      t.string :motd
      t.string :password
      t.integer :founder_id
      t.integer :assistant
      t.timestamps
    end
  end
end
