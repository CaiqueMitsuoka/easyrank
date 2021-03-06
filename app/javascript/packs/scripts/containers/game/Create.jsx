import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/game/Form'
import { createGame } from '../../services/game'
import { fetchAllTeams, fetchTeam } from '../../services/team'

class Create extends Component {
  constructor() {
    super()

    this.state = { teams: [] }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetchAllTeams()
      .then((teams) => this.setState({ teams }))
  }

  handleSubmit(query) {
    return createGame(query)
      .then(() => alert('The game has been registered'))
  }

  render() {
    const { teams } = this.state
    return (
      <div className='container'>
        <header> <h2>Create</h2> </header>
        <Form handleSubmit={this.handleSubmit} teams={teams} />
        <div className='linkContainer'><Link to='/' className='link'> Voltar </Link></div>
      </div>
    )
  }
}

export { Create as CreateGame }
