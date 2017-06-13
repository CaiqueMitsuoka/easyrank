import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Game from './game/Row'

const Games = (props) => {
  const { games, handleFetchTeam } = props

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
              <Game key={index} handleFetchTeam={handleFetchTeam} game={game} />
          )
        }
        </tbody>
      </table>
    </div>
  )
}

Games.propTypes = {
  games: PropTypes.array.isRequired,
  handleFetchTeam: PropTypes.func.isRequired
}

export default Games
