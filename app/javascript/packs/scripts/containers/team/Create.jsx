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
    <div className='container'>
      <header> <h2>Create</h2> </header>
      <Form handleSubmit={handleSubmit} />
      <div className='linkContainer'><Link to='/' className='link'> Voltar </Link></div>
    </div>
  )
}

export { Create as CreateTeam }
