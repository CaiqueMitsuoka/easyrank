import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/game/Form'
import { fetchGame, updateGame } from '../../services/game'
import { fetchAllTeams, fetchTeam } from '../../services/team'

class Edit extends Component {
  constructor (props) {
    super(props)

    this.state = { gameId: this.props.match.params.id, game: {}, teams: [] }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { gameId } = this.state

    fetchGame(gameId)
      .then((game) => this.setState({ game }))
    
    fetchAllTeams()
      .then((teams) => this.setState({ teams }))
  }

  handleSubmit (query) {
    const { gameId } = this.state

    return updateGame(gameId, query)
      .then(() => alert('The game has been updated'))
  }

  render() {
    const { game } = this.state
    const { teams } = this.state

    return (
      <div className='container'>
        <header> <h2>Edit game</h2> </header>
        <Form
          game={game}
          handleSubmit={this.handleSubmit} teams={ teams }/>
        <div className='linkContainer'><Link to='/' className='link'> Voltar </Link></div>
      </div>
    )
  }
}

export { Edit as EditGame }
