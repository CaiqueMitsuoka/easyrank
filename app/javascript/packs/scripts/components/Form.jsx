import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Form = (props) => {
  const { handleSubmit } = props

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event)

    for (let field of formData.entries()) {
      console.log('i', field[0], field[1]);
    }

    // handleSubmit(data)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor='name'>
        Name:
        <input type='text' id='name' name='name' />
      </label>

      <label htmlFor='foundation-year'>
        Foundation Year:
        <input type='number' id='foundation-year' name='foundation_year' />
      </label>

      <label htmlFor='initials'>
        Initials:
        <input type='text' id='initials' name='initials' />
      </label>

      <button type='submit'> Submit </button>
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default Form;
