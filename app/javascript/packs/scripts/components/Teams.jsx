import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { deleteTeam } from '../serviceAPI'

const Teams = (props) => {
  const { teams } = props

  const handleDelete = (event) => {
    const teamId = event.target.id

    if (confirm(`You really want to delete the ${teamId} team?`)) {
      deleteTeam(teamId)
        .then(alert('The team has been deleted'))
    }
  }

  return (
    <div>
      <h2>Teams</h2>

      <table>
        <tbody>
          <tr>
            <th> Position </th>
            <th> Initials </th>
            <th> Name </th>
            <th> Foundation Year </th>
            <th> Points </th>
            <th> Edit </th>
            <th> Delete </th>
          </tr>

          {
            teams.map((team, index) =>
            <tr key={index}>
              <td> {team.position} </td>
              <td> {team.initials} </td>
              <td> {team.name} </td>
              <td> {team.foundation_year} </td>
              <td> {team.points} </td>
              <td> <Link to={`/team/${team.id}/edit`}> &#x270E; </Link> </td>
              <td> <button id={team.id} onClick={handleDelete}> &#x2716; </button> </td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

Teams.propTypes = {
  teams: PropTypes.array.isRequired
}

export default Teams
