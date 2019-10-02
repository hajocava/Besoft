import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './views/App'
import NotFound from './views/NotFound'


export default () => (
  <BrowserRouter>
    <Route render={({ location }) => (
      <Switch location={ location }>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    )} />
  </BrowserRouter>
)