import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Create extends Component {
  render() {
    return (
      <div>
        <h2>Create</h2>

        <Link to='/'> Voltar </Link>
      </div>
    )
  }
}

export { Create as CreateTeam }