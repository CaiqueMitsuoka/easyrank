import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/team/Form'
import { fetchTeam, updateTeam } from '../../services/team'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = { teamId: this.props.match.params.id, team: {} }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { teamId } = this.state

    fetchTeam(teamId)
      .then((team) => this.setState({ team }))
  }

  handleSubmit(query) {
    const { teamId } = this.state

    return updateTeam(teamId, query)
      .then(() => alert('The team has been updated'))
  }

  render() {
    const { team } = this.state

    return (
      <div className='container'>
        <header> <h2>Edit team</h2> </header>
        <Form
          team={team}
          handleSubmit={this.handleSubmit} />
        <div className='linkContainer'><Link to='/' className='link'> Voltar </Link></div>
      </div>
    )
  }
}

export { Edit as EditTeam }
