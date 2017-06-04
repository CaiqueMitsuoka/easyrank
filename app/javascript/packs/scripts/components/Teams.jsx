import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Teams = (props) => {
  const handleDelete = () => {
    if (confirm('You really want to delete this team?')) {
      return alert('The team has been deleted')
    }
  }

  return (
    <div>
      <h2>Teams</h2>

      <table>
        <tbody>
          <tr>
            <th> Position </th>
            <th> Team </th>
            <th> Points </th>
            <th> Edit </th>
            <th> Delete </th>
          </tr>

          {
            props.teams.map((team, index) =>
            <tr key={index}>
              <td> {team.position} </td>
              <td> {team.name} </td>
              <td> {team.points} </td>
              <td> <Link to={`/team/${team.teamId}/edit`}> &#x270E; </Link> </td>
              <td> <button onClick={this.handleDelete}>&#x2716;</button> </td>
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
