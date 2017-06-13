import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Row extends Component {
  constructor (props) {
    super(props)

    this.state = { home: {}, foreign: {} }
  }

  componentDidMount () {
    const { game, handleFetchTeam } = this.props

    handleFetchTeam(game.home_team_id)
      .then((team) => this.setState({ home: team }))

    handleFetchTeam(game.foreign_team_id)
      .then((team) => this.setState({ foreign: team }))
  }

  handleDelete (event) {
    const gameId = event.target.id
    const gameName = event.target.dataset['name']

    this.props.handleDelete(gameId)
  }

  render () {
    const { game } = this.props
    const { home, foreign } = this.state

    return (
      <tr>
        <td> {home.initials} </td>
        <td> {game.home_score} </td>
        <td> {foreign.initials} </td>
        <td> {game.foreign_score} </td>
        <td> {game.date} </td>
        <td> {game.stadium_name} </td>
        <td> <Link to={`/game/${game.id}/edit`}> <img src='lead-pencil.png'></img></Link> </td>
        <td>
          <button id={game.id} onClick={this.handleDelete} className='btn-delete'>
            <img src="delete.png"></img>
          </button>
        </td>
      </tr>
    )
  }
}

Row.propTypes = {
  game: PropTypes.object.isRequired,
  handleFetchTeam: PropTypes.func.isRequired
}

export default Row
