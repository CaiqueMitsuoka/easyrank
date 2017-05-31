import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import Teams from './containers/Teams'
import { CreateTeam } from './containers/team/Create'
import { DeleteTeam } from './containers/team/Delete'
import { EditTeam } from './containers/team/Edit'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/teams' component={Teams}/>
          <Route path='/team/new' component={CreateTeam} />
          <Route path='/team/delete' component={DeleteTeam} />
          <Route path='/team/edit' component={EditTeam} />
        </div>
      </Router>
    )
  }
}

export default App;
