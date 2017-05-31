import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor='name'>
          Name:
          <input type='text' id='name' name='teamName' />
        </label>

        <label htmlFor='name'>
          Points:
          <input type='text' id='name' name='teamName' />
        </label>

        <button type='submit'> Submit </button>
      </form>
    )
  }
}

export default Form;
