json.extract! game, :id, :home_team_id, :foreign_team_id, :home_score, :foreign_score, :started_at, :stadium_name, :judge_name, :created_at, :updated_at
json.url game_url(game, format: :json)
