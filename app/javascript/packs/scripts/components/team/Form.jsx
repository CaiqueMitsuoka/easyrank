import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidUpdate() {
    this.fillFields()
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const { handleSubmit } = this.props

    const data = {
      team: {
        name: this.name.value,
        foundation_year: +this.foundationYear.value,
        initials: this.initials.value
      }
    }

    handleSubmit(data)
      .then(() => this.clearFields())
  }

  fillFields() {
    const { team } = this.props

    this.name.value = team.name
    this.foundationYear.value = team.foundation_year
    this.initials.value = team.initials
  }

  clearFields() {
    this.name.value = ''
    this.foundationYear.value = ''
    this.initials.value = ''
  }

  render() {

    return (
      <form onSubmit={this.handleFormSubmit}>
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

        <div className='linkContainer'><button type='submit' className='btn-submit'> Enviar </button></div>
      </form>
    )
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  team: PropTypes.object
}

export default Form
