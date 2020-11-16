import React from 'react'
import {BrowserRouter as Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './components/pages/Welcome/Welcome'
import Profile from './components/pages/Profile/Profile'
import Game from './components/pages/Game/Game'
import Congratulations from './components/pages/Congratulations/Congratulations'
import Records from './components/pages/Records/Records'
import NotFoundPages from './components/pages/NotFoundPage/NotFoundPages'
import './App.css'

export default class App extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  render() {
    return(
      <div>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>

          <Route path="/welcome" component={Welcome} />
          <Route path="/profile" component={Profile} />
          <Route path="/game" component={Game} />
          <Route path="/congratulation" component={Congratulations} /> 
          <Route path="/records" component={Records} />

          <Route component={NotFoundPages} />
        </Switch>
      </div>
    );
  }
}
