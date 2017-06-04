import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Teams from '../components/Teams'
import { fetchAllTeams, teams } from '../serviceAPI'

class Home extends Component {
  constructor () {
    super()

    this.state = { teams : [] }
  }

  componentDidMount () {
    fetchAllTeams()
      .then((teams) => this.setState({ teams }))
  }

  render () {
    const { teams } = this.state

    return (
      <div>
        <h2>Easy Rank Teams</h2>
        <Teams teams={teams}/>
        <div>
          <Link to='/team/new'> Criar um time </Link>
        </div>
      </div>
    )
  }
}

export default Home
