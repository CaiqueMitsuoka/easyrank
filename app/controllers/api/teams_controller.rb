class Api::TeamsController < Api::ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]

  # GET /teams
  # GET /teams.json
  def index
    @teams = Team.all.sort {|a,b| a.points<=>b.points}
    render json: @teams.reverse
  end

  # GET /teams/1
  # GET /teams/1.json
  def show
    render json: @team
  end

  # POST /teams
  # POST /teams.json
  def create
    @team = Team.new(team_params)

    if @team.save
      render json: @team, status: :created
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teams/1
  # PATCH/PUT /teams/1.json
  def update
    if @team.update(team_params)
      render json: @team, status: :ok
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teams/1
  # DELETE /teams/1.json
  def destroy
    @team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_team
      @team = Team.find(params[:id])
    end

    def team_params
      params.require(:team).permit(:name, :foundation_year, :initials)
    end
end
