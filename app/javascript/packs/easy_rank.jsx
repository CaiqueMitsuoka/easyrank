import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import EasyRank from './scripts/index'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EasyRank/>,
    document.body.appendChild(document.createElement('div')),
  )
})
