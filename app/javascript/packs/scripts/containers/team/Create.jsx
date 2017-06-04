import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'
import { createTeam } from '../../serviceAPI'

const Create = () => {
  const handleSubmit = (query) => {
    return createTeam(query)
  }

  return (
    <div>
      <h2>Create</h2>
      <Form handleSubmit={this.handleSubmit} />
      <Link to='/'> Voltar </Link>
    </div>
  )
}

export { Create as CreateTeam }
