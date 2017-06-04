class Game < ApplicationRecord
  belongs_to :home_team, foreign_key: :home_team_id, class_name: 'Team'
  belongs_to :foreign_team, foreign_key: :foreign_team_id, class_name: 'Team'

  validates_presence_of :home_team, :foreign_team, :stadium_name
  validates :home_score, :foreign_score, numericality: { only_integer: true,
                                                           greater_than_or_equal_to: 0 }

  def team_belong_to?(team)
    foreign_team == team || home_team == team
  end
end
