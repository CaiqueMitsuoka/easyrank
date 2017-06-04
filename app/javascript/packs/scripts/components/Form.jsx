import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Form = (props) => {
  const { handleSubmit } = props

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const data = {
      team: {
        name: this.name.value,
        foundation_year: +this.foundationYear.value,
        initials: this.initials.value
      }
    }

    handleSubmit(data)
      .then(() => clearFields())
  }

  const clearFields = () => {
   this.name.value = ''
   this.foundationYear.value = ''
   this.initials.value = ''
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor='name'>
        Name:
        <input
          ref={node => this.name = node}
          type='text'
          id='name'
          name='name' />
      </label>

      <label htmlFor='foundation-year'>
        Foundation Year:
        <input
          ref={node => this.foundationYear = node}
          type='number' id='foundation-year'
          name='foundation_year' />
      </label>

      <label htmlFor='initials'>
        Initials:
        <input
          ref={node => this.initials = node}
          type='text'
          id='initials'
          name='initials' />
      </label>

      <button type='submit'> Submit </button>
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default Form;
