import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import { CreateTeam } from './containers/team/Create'
import { EditTeam } from './containers/team/Edit'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/team/new' component={CreateTeam} />
          <Route path='/team/:teamId/edit' component={EditTeam} />
        </div>

      </Router>
    )
  }
}

export default App;
