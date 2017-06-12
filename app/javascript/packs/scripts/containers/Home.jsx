import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Teams from '../components/Teams'
import Games from '../components/Games'
import { fetchAllTeams, deleteTeam, fetchTeam } from '../services/team'
import { fetchAllGames, deleteGame } from '../services/game'

class Home extends Component {
  constructor() {
    super()

    this.state = { teams : [], games: [], initials: '' }

    this.handleDelete = this.handleDelete.bind(this)
    this.getTeamInitials = this.getTeamInitials.bind(this)
  }

  componentDidMount() {
    fetchAllTeams()
      .then((teams) => this.setState({ teams }))
    fetchAllGames()
      .then((games) => this.setState({ games }))
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

  handleDeleteGame(gameId) {
    if (confirm(`You really want to delete this game?`)) {
      deleteGame(gameId)
        .then(alert('The team has been deleted'))
        .then(() =>
          fetchAllGames()
            .then((games) => this.setState({ games })))
    }
  }

  getTeamInitials (teamId) {
    // fetchTeam(teamId)
    //   .then((team) => {
    //     this.setState({initials: team.initials})
    //   })
      fetchTeam(teamId)
        .then((team) => this.setState({teams []}))
  }

  render () {
    const { teams } = this.state
    const { games } = this.state

    return (
      <div className='container'>
        <header>
          <h1> Easy Rank Teams</h1>
        </header>
        <div className='linkContainer'>
          <Link to='/team/new' className='link'> Create Team </Link>
        </div>
        <Teams teams={teams} handleDelete={this.handleDelete} />
        <h1 className="title"> Easy Rank Games </h1>
        <div className='linkContainer'>
          <Link to='/game/new' className='link'> Create Game </Link>
        </div>
        <Games games={games} handleDelete={this.handleDeleteGame} getTeamInitials={this.getTeamInitials}/>
      </div>
    )
  }
}

export default Home
