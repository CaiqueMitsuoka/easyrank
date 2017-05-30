class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :points
      t.integer :foundation_year
      t.string :initials

      t.timestamps
    end
  end
end
