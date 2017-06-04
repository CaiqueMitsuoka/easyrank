import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Teams from '../components/Teams'
import { fetchAllTeams } from '../serviceAPI'

class Home extends Component {
  componentDidMount () {
    fetchAllTeams()
  }

  render() {
    return (
      <div>
        <h2>Easy Rank Teams</h2>
        <Teams/>
        <div>
          <Link to='/team/new'> Criar um time </Link>
        </div>
      </div>
    )
  }
}

export default Home
