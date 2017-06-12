import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Games = (props) => {
  const { games } = props

  const handleDelete = (event) => {
    const gameId = event.target.id
    const gameName = event.target.dataset['name']

    props.handleDelete(gameId, gameName)
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
            games.map((game, index) =>
            <tr key={index}>
              <td> {props.getTeamInitials(game.home_team_id)} </td>
              <td> {game.home_score} </td>
              <td> {props.getTeamInitials(game.foreign_team_id)} </td>
              <td> {game.foreign_score} </td>
              <td> {game.date} </td>
              <td> {game.stadium_name} </td>
              <td> <Link to={`/game/${game.id}/edit`}> <img src='lead-pencil.png'></img></Link> </td>
              <td> <button id={game.id} data-name={game.name} onClick={handleDelete} className='btn-delete'> <img src="delete.png"></img> </button> </td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

Games.propTypes = {
  games: PropTypes.array.isRequired
}

export default Games
