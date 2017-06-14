import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidUpdate() {
    this.fillFields()
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const { handleSubmit } = this.props

    const data = {
      game: {
        home_team_id: this.homeTeamId.value,
        foreign_team_id: this.foreignTeamId.value,
        home_score: this.homeScore.value,
        foreign_score: this.foreignScore.value,
        started_at: this.startedAt.value,
        stadium_name: this.stadiumName.value,
        judge_name: this.judgeName.value
      }
    }

    handleSubmit(data)
      .then(() => this.clearFields())
  }

  fillFields() {
    const { game } = this.props
    
    this.homeTeamId.value = game.home_team_id
    this.foreignTeamId.value = game.foreign_team_id
    this.homeScore.value = game.home_score
    this.foreignScore.value = game.foreign_score
    this.startedAt.value = game.started_at
    this.stadiumName.value = game.stadium_name
    this.judgeName.value = game.judge_name
  }

  clearFields() {
    this.homeTeamId.value = ''
    this.foreignTeamId.value = ''
    this.homeScore.value = ''
    this.foreignScore.value = ''
    this.startedAt.value = ''
    this.stadiumName.value = ''
    this.judgeName.value = ''
  }

  render() {
    
    const { teams } = this.props

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor='homeTeamId'>
          Home Team Name:

            <select
            ref={node => this.homeTeamId = node}
            id='homeTeamId'
            name='homeTeamId' >

            <option value=''> </option>

            {
              teams.map((team) =>
                <option key={team.id} value={team.id}> {team.name} </option>)
            }

          </select>
        </label>

        <label htmlFor='homeScore'>
          Home Score:
          <input
            ref={node => this.homeScore = node}
            type='number'
            id='homeScore'
            name='homeScore' />
        </label>

        <label htmlFor='foreignTeamId'>
          Foreign Team Name:

          <select
            ref={node => this.foreignTeamId = node}
            id='foreignTeamId'
            name='foreignTeamId' >

            <option value=''> </option>

            {
              teams.map((team) =>
                <option key={team.id} value={team.id}> {team.name} </option>)
            }

          </select>
        </label>

        <label htmlFor='foreignScore'>
          Foreign Score:
          <input
            ref={node => this.foreignScore = node}
            type='number'
            id='foreignScore'
            name='foreignScore' />
        </label>

        <label htmlFor='startedAt'>
          Started At:
          <input
            ref={node => this.startedAt = node}
            type='date'
            id='startedAt'
            name='startedAt' />
        </label>

        <label htmlFor='stadiumName'>
          Stadium Name:
          <input
            ref={node => this.stadiumName = node}
            type='text'
            id='stadiumName'
            name='stadiumName' />
        </label>

        <label htmlFor='judgeName'>
          Judge Name:
          <input
            ref={node => this.judgeName = node}
            type='text'
            id='judgeName'
            name='judgeName' />
        </label>

        <div className='linkContainer'><button type='submit' className='btn-submit'> Enviar </button></div>
      </form>
    )
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  game: PropTypes.object
}

export default Form
