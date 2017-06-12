import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Teams from '../components/Teams'
import { fetchAllTeams, deleteTeam } from '../services/team'

class Home extends Component {
  constructor() {
    super()

    this.state = { teams: [] }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    fetchAllTeams()
      .then((teams) => this.setState({ teams }))
  }

  handleDelete(teamId, teamName) {
    if (confirm(`You really want to delete the ${teamName}?`)) {
      deleteTeam(teamId)
        .then(alert('The team has been deleted'))
        .then(() =>
          fetchAllTeams()
            .then((teams) => this.setState({ teams })))
    }
  }

  render() {
    const { teams } = this.state

    return (
      <div className='container'>
        <header>
          <h1> Easy Rank Teams</h1>
        </header>
        <div className='linkContainer'>
          <Link to='/team/new' className='link'> Create Team </Link>
          <Link to='/game/new' className='link'> Create Game </Link>
        </div>
        <Teams teams={teams} handleDelete={this.handleDelete} />

      </div>
    )
  }
}

export default Home
