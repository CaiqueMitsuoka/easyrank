import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/game/Form'
import { fetchGame, updateGame } from '../../services/game'

class Edit extends Component {
  constructor (props) {
    super(props)

    this.state = { gameId: this.props.match.params.id, game : {} }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { gameId } = this.state

    fetchGame(gameId)
      .then((game) => this.setState({ game }))
  }

  handleSubmit (query) {
    const { gameId } = this.state

    return updateGame(gameId, query)
      .then(() => alert('The game has been updated'))
  }

  render() {
    const { game } = this.state

    return (
      <div>
        <h2>Edit Game</h2>
        <Form
          game={game}
          handleSubmit={this.handleSubmit} />
        <Link to='/'> Voltar </Link>
      </div>
    )
  }
}

export { Edit as EditGame }
