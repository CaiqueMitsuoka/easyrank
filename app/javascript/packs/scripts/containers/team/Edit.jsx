import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'

class Edit extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    console.log(this.props.match.params);

    return (
      <div>
        <h2>Edit Team</h2>
        <Form />
        <Link to='/'> Voltar </Link>
      </div>
    )
  }
}

export { Edit as EditTeam }
