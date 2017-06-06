import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/game/Form'
import { createGame } from '../../services/game'
import { fetchAllTeams, fetchTeam } from '../../serviceAPI'

class Create extends Component {
  constructor () {
    super()

    this.state = { teams: [] }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    fetchAllTeams()
      .then((teams) => this.setState({ teams }))
  }

  handleSubmit (query) {
    return createGame(query)
  }

  render () {
    const { teams } = this.state
    return (
      <div>
        <h2>Create</h2>
        <Form handleSubmit={this.handleSubmit} teams={teams}/>
        <Link to='/'> Voltar </Link>
      </div>
    )
  }
}

export { Create as CreateGame }
