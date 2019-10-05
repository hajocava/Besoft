import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'


export default () => (
  <BrowserRouter>
    <Route render={({ location }) => (
      <Switch location={ location }>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    )} />
  </BrowserRouter>
)