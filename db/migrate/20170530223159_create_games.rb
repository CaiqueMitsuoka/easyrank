class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :home_team_id
      t.integer :foreign_team_id
      t.integer :home_score, default: 0
      t.integer :foreign_score, default: 0
      t.date :started_at
      t.string :stadium_name
      t.string :judge_name

      t.timestamps
    end
  end
end
