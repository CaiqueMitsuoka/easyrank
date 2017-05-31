import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'

class Create extends Component {
  render() {
    return (
      <div>
        <h2>Create</h2>
        <Form />
        <Link to='/'> Voltar </Link>
      </div>
    )
  }
}

export { Create as CreateTeam }
