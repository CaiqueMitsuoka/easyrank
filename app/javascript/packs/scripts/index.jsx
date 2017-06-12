import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import { CreateTeam } from './containers/team/Create'
import { CreateGame } from './containers/game/Create'
import { EditTeam } from './containers/team/Edit'
import { EditGame } from './containers/game/Edit'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/team/new' component={CreateTeam} />
          <Route path='/team/:id/edit' component={EditTeam} />
          <Route path='/game/new' component={CreateGame} />
          <Route path='/team/:id/edit' component={EditGame} />
        </div>
      </Router>
    )
  }
}

export default App;
