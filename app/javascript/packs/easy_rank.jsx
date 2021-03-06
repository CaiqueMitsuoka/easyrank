import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from './scripts/index'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
