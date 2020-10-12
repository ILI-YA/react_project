import React from 'react'
import {BrowserRouter as Switch, Route, Redirect } from 'react-router-dom'
import Welcome from './Pages/Welcome'
import Profile from './Pages/Profile'
import Game from './Pages/Game'
import Congratulations from './Pages/Congratulations'
import Records from './Pages/Records'
import NotFoundPages from './Pages/NotFoundPages'
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
