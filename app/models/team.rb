class Team < ApplicationRecord
  has_many :home_games, foreign_key: :home_team_id, class_name: 'Game', dependent: :destroy
  has_many :foreign_games, foreign_key: :foreign_team_id, class_name: 'Game', dependent: :destroy

  validates_presence_of :name, :foundation_year, :initials

  def games
    home_games + foreign_games
  end

  def points
    PointsCalculatorService.of_a_team(self)
  end
end
