import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Easy Rank Teams</h2>

        <div>
          <Link to='/teams'> Times </Link>
          <Link to='/team/new'> Criar um time </Link>
          <Link to='/team/delete'> Deletar um time </Link>
          <Link to='/team/edit'> Editar um time </Link>
        </div>
      </div>
    )
  }
}

export default Home
