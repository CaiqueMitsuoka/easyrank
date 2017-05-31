import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Teams extends Component {
  constructor() {
    super()

    this.state =  { teams: [{ teamId:1, position: 1, name: 'São Paulo', points: 32 }] }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete () {
    if (confirm('You really want to delete this team?')) {
      return alert('The team has been deleted')
    }
  }

  render() {
    const { teams } = this.state
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
              teams.map((team, index) =>
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
}

export default Teams
