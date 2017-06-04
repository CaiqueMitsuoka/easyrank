puts 'Creating Teams...'

10.times do
  name = FFaker::Company.name
  Team.create!(
    name: name,
    foundation_year: Time.new(FFaker::Time.date).year,
    initials: name.slice(0,3)
  )
end

puts 'Creating Games...'

Team.all.each do |home_team|
  Team.all.each do |foreign_team|
    unless home_team == foreign_team
      Game.create!(
        home_team: home_team,
        home_score: rand(6),
        foreign_team: foreign_team,
        foreign_score: rand(6),
        judge_name: FFaker::Company.name,
        stadium_name: FFaker::Company.name,
        started_at: rand(30).weeks.ago + rand(7).days + rand(24).hours
      )
    end
  end
end
