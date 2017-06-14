import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Games = (props) => {
  const { games, teams } = props

  const handleDelete = (gameId) => {

    props.handleDelete(gameId)
  }

  const renderGame = (game, index) => {
    const home = teams.find((team) => team.id === game.home_team_id)
    const foreign = teams.find((team) => team.id === game.foreign_team_id)

    if( home && foreign) {
      return (
        <tr key={index}>
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

  return (
    <div className="wrapper">
      <table>
        <tbody>
          <tr>
            <th> Home Name </th>
            <th> Home Score </th>
            <th> Foreign Name </th>
            <th> Foreign Score </th>
            <th> Date </th>
            <th> Stadium </th>
            <th> Edit </th>
            <th> Delete </th>
          </tr>

          {
            games.map((game, index) => renderGame(game, index))
          }
        </tbody>
      </table>
    </div>
  )
}

Games.propTypes = {
  games: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired,
}

export default Games
