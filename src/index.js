import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './routes'
import App from './App'
import { Router, Route } from 'react-router-dom'
import { HistoryProvider } from './RouterTransition'
import registerServiceWorker from './registerServiceWorker'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()


const MyApp = () => (
  <Router history={history}>
    <Routes history={history}/>
  </Router>
)



ReactDOM.render(<MyApp />, document.getElementById('root'))
registerServiceWorker()
