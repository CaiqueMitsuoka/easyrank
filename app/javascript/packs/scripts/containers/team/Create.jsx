import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/team/Form'
import { createTeam } from '../../services/team'

const Create = () => {
  const handleSubmit = (query) => {
    return createTeam(query)
      .then(() => alert('The team has been created'))
  }

  return (
    <div>
      <h2>Create</h2>
      <Form handleSubmit={handleSubmit} />
      <Link to='/'> Voltar </Link>
    </div>
  )
}

export { Create as CreateTeam }
