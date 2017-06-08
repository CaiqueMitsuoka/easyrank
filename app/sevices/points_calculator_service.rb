class PointsCalculatorService
  def self.of_a_team(team)
    team.games.reduce(0) do |score, game|
      if game.winner.present?
        if game.winner == team
          score += 3
        else
          score
        end
      else
        score += 1
      end
    end
  end
end
