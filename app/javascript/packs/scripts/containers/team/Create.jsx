import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'
import { createTeam } from '../../serviceAPI'

class Create extends Component {
  handleSubmit (query) {
    createTeam(query)
  }

  render() {
    return (
      <div>
        <h2>Create</h2>
        <Form handleSubmit={this.handleSubmit} />
        <Link to='/'> Voltar </Link>
      </div>
    )
  }
}

export { Create as CreateTeam }
