import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'
import { fetchTeam, updateTeam } from '../../serviceAPI'

class Edit extends Component {
  constructor (props) {
    super(props)

    this.state = { teamId: this.props.match.params.id, team : {} }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { teamId } = this.state

    fetchTeam(teamId)
      .then((team) => this.setState({ team }))
  }

  handleSubmit (query) {
    const { teamId } = this.state

    return updateTeam(teamId, query)
  }

  render() {
    const { team } = this.state

    return (
      <div>
        <h2>Edit Team</h2>
        <Form
          team={team}
          handleSubmit={this.handleSubmit} />
        <Link to='/'> Voltar </Link>
      </div>
    )
  }
}

export { Edit as EditTeam }
