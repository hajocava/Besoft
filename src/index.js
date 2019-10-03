import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'simplebar/dist/simplebar.min.css'
import './css/line-awesome.min.css'
import './css/slick.min.css'
import './sass/index.sass'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
